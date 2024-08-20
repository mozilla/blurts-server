/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { getUserEmails } from "../db/tables/emailAddresses";
import {
  getBreachesForEmail,
  getFilteredBreaches,
  HibpLikeDbBreach,
} from "./hibp";
import { getSha1 } from "./fxa";
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
  const verifiedEmails: BundledVerifiedEmails[] = [];
  const unverifiedEmails: EmailAddressRow[] = [];

  if (!user) {
    const errMsg = "getAllEmailsAndBreaches: subscriber cannot be undefined";
    console.error(errMsg);
    captureMessage(errMsg);

    return { verifiedEmails, unverifiedEmails };
  }
  if (!allBreaches || allBreaches.length === 0) {
    const errMsg =
      "getAllEmailsAndBreaches: allBreaches object cannot be empty";
    console.error(errMsg);
    captureMessage(errMsg);

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
          email: email.email,
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
