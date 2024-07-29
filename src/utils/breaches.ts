/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { getUserEmails } from "../db/tables/emailAddresses.js";
import {
  getBreachesForEmail,
  getFilteredBreaches,
  HibpLikeDbBreach,
} from "./hibp";
import { getSha1 } from "./fxa.js";
import { filterBreachDataTypes } from "./breachResolution.js";
import { captureMessage } from "@sentry/node";
import { EmailAddressRow, SubscriberRow } from "knex/types/tables";

export type BundledVerifiedEmails = {
  email: string;
  breaches: HibpLikeDbBreach[];
  id: number;
  primary: boolean;
  verified: boolean;
  hasNewBreaches?: number;
};

export type AllEmailsAndBreaches = {
  unverifiedEmails: EmailAddressRow[];
  verifiedEmails: BundledVerifiedEmails[];
};

type userType =
  | ({
      email_addresses: Array<{
        id: EmailAddressRow["id"];
        email: EmailAddressRow["email"];
      }>;
    } & SubscriberRow)
  | undefined;

async function getAllEmailsAndBreaches(
  user: userType,
  allBreaches: HibpLikeDbBreach[],
): Promise<AllEmailsAndBreaches> {
  // @ts-ignore: function will be deprecated
  const verifiedEmails: BundledVerifiedEmails[] = [];
  // @ts-ignore: function will be deprecated
  const unverifiedEmails: EmailAddressRow[] = [];

  if (!user) {
    const errMsg = "getAllEmailsAndBreaches: subscriber cannot be undefined";
    console.error(errMsg);
    captureMessage(errMsg);

    // @ts-ignore: function will be deprecated
    return { verifiedEmails, unverifiedEmails };
  }
  if (!allBreaches || allBreaches.length === 0) {
    const errMsg =
      "getAllEmailsAndBreaches: allBreaches object cannot be empty";
    console.error(errMsg);
    captureMessage(errMsg);
    // @ts-ignore: function will be deprecated
    return { verifiedEmails, unverifiedEmails };
  }

  const monitoredEmails = await getUserEmails(user.id);
  verifiedEmails.push(
    await bundleVerifiedEmails({
      user,
      email: user.primary_email,
      recordId: user.id,
      recordVerified: user.primary_verified,
      allBreaches,
    }),
  );
  for (const email of monitoredEmails) {
    if (email.verified) {
      verifiedEmails.push(
        await bundleVerifiedEmails({
          user,
          email: user.primary_email,
          recordId: email.id,
          recordVerified: email.verified,
          allBreaches,
        }),
      );
    } else {
      unverifiedEmails.push(email);
    }
  }

  // get new breaches since last shown
  for (const emailEntry of verifiedEmails) {
    // /** @type {any[]} */
    const newBreachesForEmail = emailEntry.breaches.filter(
      (breach) => breach.AddedDate >= user.breaches_last_shown,
    );

    for (const newBreachForEmail of newBreachesForEmail) {
      newBreachForEmail.NewBreach = true; // add "NewBreach" property to the new breach.
      emailEntry.hasNewBreaches = newBreachesForEmail.length; // add the number of new breaches to the email
    }
  }

  return { verifiedEmails, unverifiedEmails };
}

function addRecencyIndex(foundBreaches: HibpLikeDbBreach[]) {
  // /**
  //  * @type {any[]}
  //  */
  const annotatedBreaches: HibpLikeDbBreach[] = [];
  // slice() the array to make a copy so before reversing so we don't
  // reverse foundBreaches in-place
  const oldestToNewestFoundBreaches = foundBreaches.slice().reverse();
  oldestToNewestFoundBreaches.forEach((annotatingBreach, index) => {
    const foundBreach = foundBreaches.find(
      (foundBreach) => foundBreach.Name === annotatingBreach.Name,
    );
    annotatedBreaches.push(Object.assign({ recencyIndex: index }, foundBreach));
  });
  return annotatedBreaches.reverse();
}

type options = {
  user: userType;
  email: string;
  recordId: number;
  recordVerified: boolean;
  allBreaches: HibpLikeDbBreach[];
};
async function bundleVerifiedEmails(
  options: options,
): Promise<BundledVerifiedEmails> {
  const { user, email, recordId, recordVerified, allBreaches } = options;
  const lowerCaseEmailSha = getSha1(email.toLowerCase());

  // find all breaches relevant to the current email
  const foundBreaches = await getBreachesForEmail(
    lowerCaseEmailSha,
    allBreaches,
    true,
    false,
  );

  // TODO: remove after migration MNTOR-978
  // adding index to breaches based on recency
  const foundBreachesWithRecency = addRecencyIndex(foundBreaches);

  if (!user) {
    const errMsg = "breachResolutionV2: subscriber cannot be undefined";
    console.error(errMsg);
    captureMessage(errMsg);

    // @ts-ignore: function will be deprecated
    return { verifiedEmails, unverifiedEmails };
  }

  // get v2 "breach_resolution" object
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const breachResolutionV2: any = user.breach_resolution
    ? user.breach_resolution[email]
      ? user.breach_resolution[email]
      : {}
    : [];

  const useBreachId = user.breach_resolution?.useBreachId;

  // Not entirely sure what this section of the code is doing, but it's not typed
  // There's inconsistency with the breaches data type, namely between HibpLikeDbBreach and SubscriberBreach
  for (const breach of foundBreachesWithRecency) {
    // if breach resolution json has `useBreachId` boolean, that means the migration has taken place
    // we will use breach id as the key. Otherwise, we fallback to using recency index for backwards compatibility
    if (useBreachId) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (breach as any).IsResolved = breachResolutionV2[breach.Id]?.isResolved;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (breach as any).ResolutionsChecked =
        breachResolutionV2[breach.Id]?.resolutionsChecked || [];
    } else {
      // TODO: remove after MNTOR-978
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (breach as any).IsResolved =
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        breachResolutionV2[(breach as any).recencyIndex]?.isResolved;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (breach as any).ResolutionsChecked =
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        breachResolutionV2[(breach as any).recencyIndex]?.resolutionsChecked ||
        [];
    }

    // filter breach types based on the 13 types we care about
    breach.DataClasses = filterBreachDataTypes(breach.DataClasses);
  }

  // filter out irrelevant breaches based on HIBP
  const filteredAnnotatedFoundBreaches = getFilteredBreaches(
    foundBreachesWithRecency,
  );

  const emailEntry: BundledVerifiedEmails = {
    email: email,
    breaches: filteredAnnotatedFoundBreaches,
    primary: email === user.primary_email,
    id: recordId,
    verified: recordVerified,
  };

  return emailEntry;
}

export { getAllEmailsAndBreaches };
