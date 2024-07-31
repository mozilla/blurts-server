/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import AppConstants from "../appConstants.js";
import { getAllBreaches, knex } from "../db/tables/breaches.js";
import { InternalServerError } from "./error";
import { getMessage } from "./fluent.js";
import { isUsingMockHIBPEndpoint } from "../app/functions/universal/mock.ts";
import { BreachRow, EmailAddressRow, SubscriberRow } from "knex/types/tables";
import { ISO8601DateString } from "./parse.js";
import { HibpBreachDataTypes } from "../app/functions/universal/breach.ts";
import {
  getAllQaCustomBreaches,
  getQaToggleRow,
} from "../db/tables/qa_customs.ts";
const {
  HIBP_THROTTLE_MAX_TRIES,
  HIBP_THROTTLE_DELAY,
  HIBP_API_ROOT,
  HIBP_KANON_API_ROOT,
  HIBP_KANON_API_TOKEN,
} = AppConstants;

// TODO: fix hardcode
const HIBP_USER_AGENT = "monitor/1.0.0";
// When HIBP "re-names" a breach, it keeps its old 'Name' value but gets a new 'Title'
// We use 'Name' in Firefox (via Remote Settings), so we have to maintain our own mapping of re-named breaches.
const RENAMED_BREACHES = ["covve"];
const RENAMED_BREACHES_MAP = {
  covve: "db8151dd",
};

// TODO: Add unit test when changing this code:
/* c8 ignore start */
function _addStandardOptions(options = {}) {
  const hibpOptions = {
    headers: {
      "User-Agent": HIBP_USER_AGENT,
    },
    ...options,
  };
  return hibpOptions;
}
/* c8 ignore stop */

// TODO: Add unit test when changing this code:
/* c8 ignore start */
async function _throttledFetch(
  url: string,
  reqOptions?: RequestInit,
  tryCount = 1,
) {
  try {
    const response = await fetch(url, reqOptions);
    if (response.ok) return (await response.json()) as unknown;

    switch (response.status) {
      case 404:
        // 404 can mean "no results", return undefined response
        console.info("_throttledFetch", {
          err: "Error 404, not going to retry. TryCount: " + tryCount,
        });
        return undefined;
      case 429:
        console.info("_throttledFetch", {
          err: "Error 429, tryCount: " + tryCount,
        });
        // @ts-ignore TODO: Explicitly parse into a number
        if (tryCount >= HIBP_THROTTLE_MAX_TRIES) {
          throw new InternalServerError(getMessage("error-hibp-throttled"));
        } else {
          tryCount++;
          await new Promise((resolve) =>
            // @ts-ignore HIBP_THROTTLE_DELAY should be defined
            setTimeout(resolve, HIBP_THROTTLE_DELAY * tryCount),
          );
          return await _throttledFetch(url, reqOptions, tryCount);
        }
      default:
        console.error(await response.text());
        throw new InternalServerError(`bad response: ${response.status}`);
    }
  } catch (err) {
    console.error("_throttledFetch", { err });
    throw new InternalServerError(getMessage("error-hibp-connect"));
  }
}
/* c8 ignore stop */

// TODO: Add unit test when changing this code:
/* c8 ignore start */
async function hibpApiFetch(path: string, options = {}) {
  const url = `${HIBP_API_ROOT}${path}`;
  const reqOptions = _addStandardOptions(options);
  try {
    return await _throttledFetch(url, reqOptions);
  } catch (ex) {
    console.error(ex);
  }
}
/* c8 ignore stop */

export type HibpGetBreachesResponse = Array<{
  Name: string;
  Title: string;
  Domain: string;
  AddedDate: ISO8601DateString;
  BreachDate: ISO8601DateString;
  DataClasses: Array<keyof HibpBreachDataTypes>;
  Description: string;
  LogoPath: string;
  IsFabricated: boolean;
  IsMalware: boolean;
  IsRetired: boolean;
  IsSensitive: boolean;
  IsSpamList: boolean;
  IsVerified: boolean;
  ModifiedDate: ISO8601DateString;
  PwnCount: number;
}>;

export async function fetchHibpBreaches(): Promise<HibpGetBreachesResponse> {
  return (await hibpApiFetch("/breaches")) as HibpGetBreachesResponse;
}

// TODO: Add unit test when changing this code:
/* c8 ignore start */
async function kAnonReq(path: string, options = {}) {
  // Construct HIBP url and standard headers
  const url = `${HIBP_KANON_API_ROOT}${path}`;
  options = {
    headers: {
      "Content-Type": "application/json",
      Accept: "*/*",
      "Hibp-Enterprise-Api-Key": HIBP_KANON_API_TOKEN,
    },
    ...options,
  };

  const reqOptions = _addStandardOptions(options);
  try {
    return await _throttledFetch(url, reqOptions);
  } catch (ex) {
    console.error(ex);
  }
}
/* c8 ignore stop */

/**
 * Sanitize data classes
 * ie. "Email Addresses" -> "email-addresses"
 *
 * @returns Array sanitized data classes array
 */
// TODO: Add unit test when changing this code:
/* c8 ignore start */
function formatDataClassesArray(dataClasses: Array<keyof HibpBreachDataTypes>) {
  return dataClasses.map((dataClass) =>
    dataClass
      .toLowerCase()
      // Replace non-alphanumeric characters, except for dashes, by dashes:
      .replace(/[^-a-z0-9]/g, "-")
      // Replace 2 or more consecutive dashes by a single dash:
      .replace(/-{2,}/g, "-")
      // Remove dashes at the start or end of the data class:
      .replace(/(^-|-$)/g, ""),
  ) as Array<HibpBreachDataTypes[keyof HibpBreachDataTypes]>;
}
/* c8 ignore stop */

/**
 * The type `HibpLikeDbBreach` is roughly the same as the data we receive from
 * HIBP, except that we added a `FaviconUrl` and ID, that AddedDate,
 * ModifiedDate and BreachDate are Date objects, and that a couple of fields are
 * not available (because we do not store them in our database, at the time of
 * writing).
 *
 * Presumably, our code used to be set up in such a way that it was supposed to
 * work with objects that were either returned from the HIBP API, _or_ from our
 * database - but the latter doesn't capitalise the properties.
 */
export type HibpLikeDbBreach = {
  Id: number;
  Name: BreachRow["name"];
  Title: BreachRow["title"];
  Domain: BreachRow["domain"];
  BreachDate: BreachRow["breach_date"];
  AddedDate: BreachRow["added_date"];
  ModifiedDate: BreachRow["modified_date"];
  PwnCount: BreachRow["pwn_count"];
  Description: BreachRow["description"];
  LogoPath: BreachRow["logo_path"];
  DataClasses: BreachRow["data_classes"];
  IsVerified: BreachRow["is_verified"];
  IsFabricated: BreachRow["is_fabricated"];
  IsSensitive: BreachRow["is_sensitive"];
  IsRetired: BreachRow["is_retired"];
  IsSpamList: BreachRow["is_spam_list"];
  IsMalware: BreachRow["is_malware"];
  FaviconUrl?: BreachRow["favicon_url"];
};

/**
 * Get all breaches from the database table "breaches",
 * sanitize it, and return a javascript array
 */
// TODO: Add unit test when changing this code:
/* c8 ignore start */
async function getAllBreachesFromDb(): Promise<HibpLikeDbBreach[]> {
  let dbBreaches: BreachRow[] = [];
  try {
    dbBreaches = await getAllBreaches();
  } catch (e) {
    console.error(
      "getAllBreachesFromDb",
      "No breaches exist in the database: " + (e as string),
    );
    return [];
  }

  // TODO: we can do some filtering here for the most commonly used fields
  // TODO: change field names to camel case
  return dbBreaches.map(
    (breach) =>
      ({
        Id: breach.id,
        Name: breach.name,
        Title: breach.title,
        Domain: breach.domain,
        BreachDate: breach.breach_date,
        AddedDate: breach.added_date,
        ModifiedDate: breach.modified_date,
        PwnCount: breach.pwn_count,
        Description: breach.description,
        LogoPath: breach.logo_path,
        DataClasses: breach.data_classes,
        IsVerified: breach.is_verified,
        IsFabricated: breach.is_fabricated,
        IsSensitive: breach.is_sensitive,
        IsRetired: breach.is_retired,
        IsSpamList: breach.is_spam_list,
        IsMalware: breach.is_malware,
        FaviconUrl: breach.favicon_url,
      }) as HibpLikeDbBreach,
  );
}
/* c8 ignore stop */

/**
 * Get addresses and language from either subscribers or email_addresses fields:
 */
// TODO: Add unit test when changing this code:
/* c8 ignore start */
function getAddressesAndLanguageForEmail(
  recipient: SubscriberRow | (SubscriberRow & EmailAddressRow),
) {
  if (hasEmailAddressAttached(recipient)) {
    return {
      breachedEmail: recipient.email,
      recipientEmail: recipient.all_emails_to_primary
        ? recipient.primary_email
        : recipient.email,
      signupLanguage: recipient.signup_language,
    };
  }

  return {
    breachedEmail: recipient.primary_email,
    recipientEmail: recipient.primary_email,
    signupLanguage: recipient.signup_language,
  };
}
/* c8 ignore stop */

/**
 * Filter breaches that we would not like to show.
 */
// TODO: Add unit test when changing this code:
/* c8 ignore start */
function getFilteredBreaches(breaches: HibpLikeDbBreach[]): HibpLikeDbBreach[] {
  return breaches.filter(
    (breach) =>
      !breach.IsRetired &&
      !breach.IsSpamList &&
      !breach.IsFabricated &&
      breach.IsVerified &&
      breach.Domain !== "",
  );
}
/* c8 ignore stop */

export type BreachedAccountResponse = Array<{
  hashSuffix: string;
  websites: string[];
}>;

/**
 * A range of hashes can be searched by passing the hash prefix in a GET request:
 * GET /breachedaccount/range/[hash prefix]
 */
// TODO: Add unit test when changing this code:
/* c8 ignore start */
async function getBreachesForEmail(
  sha1: string,
  allBreaches: HibpLikeDbBreach[],
  includeSensitive = false,
  filterBreaches = true,
): Promise<HibpLikeDbBreach[]> {
  let foundBreaches: HibpLikeDbBreach[] = [];
  const sha1Prefix = sha1.slice(0, 6).toUpperCase();
  const path = `/range/search/${sha1Prefix}`;

  const qaToggles = await getQaToggleRow(sha1);
  let showCustomBreaches = true;
  let showRealBreaches = true;
  if (qaToggles) {
    showCustomBreaches = qaToggles.show_custom_breaches;
    showRealBreaches = qaToggles.show_real_breaches;
  }

  const qaBreaches = !showCustomBreaches
    ? []
    : await getAllQaCustomBreaches(sha1Prefix);
  if (!showRealBreaches) return qaBreaches as HibpLikeDbBreach[];

  const response = (await kAnonReq(path)) as
    | BreachedAccountResponse
    | undefined;
  if (!response || (response && response.length < 1)) {
    console.error("failed_kAnonReq_call: no response or empty response");
    return [...qaBreaches] as HibpLikeDbBreach[];
  }
  if (isUsingMockHIBPEndpoint()) {
    const mockDataBreaches = response[0];
    return [
      ...(qaBreaches as HibpLikeDbBreach[]),
      ...allBreaches
        .filter((breach) => mockDataBreaches.websites.includes(breach.Name))
        .sort((a, b) => {
          // @ts-ignore TODO: Turn dates into a number
          return new Date(b.AddedDate) - new Date(a.AddedDate);
        }),
    ];
  }
  // Parse response body, format:
  // [
  //   {"hashSuffix":<suffix>,"websites":[<breach1Name>,...]},
  //   {"hashSuffix":<suffix>,"websites":[<breach1Name>,...]},
  // ]
  for (const breachedAccount of response) {
    if (sha1.toUpperCase() === sha1Prefix + breachedAccount.hashSuffix) {
      foundBreaches = allBreaches.filter((breach) =>
        breachedAccount.websites.includes(breach.Name),
      );
      if (filterBreaches) {
        foundBreaches = getFilteredBreaches(foundBreaches);
      }

      // NOTE: DO NOT CHANGE THIS SORT LOGIC
      // We store breach resolutions by recency indices,
      // so that our DB does not contain any part of any user's list of accounts
      foundBreaches.sort((a, b) => {
        // @ts-ignore TODO: Turn dates into a number
        return new Date(b.AddedDate) - new Date(a.AddedDate);
      });

      break;
    }
  }

  if (includeSensitive) {
    return [...foundBreaches, ...(qaBreaches as HibpLikeDbBreach[])];
  }
  return [
    ...(qaBreaches as HibpLikeDbBreach[]),
    ...foundBreaches.filter((breach) => !breach.IsSensitive),
  ];
}
/* c8 ignore stop */

// TODO: Add unit test when changing this code:
/* c8 ignore start */
function getBreachByName(allBreaches: HibpLikeDbBreach[], breachName: string) {
  breachName = breachName.toLowerCase();
  if (RENAMED_BREACHES.includes(breachName)) {
    // @ts-ignore Converted from regular JS
    breachName = RENAMED_BREACHES_MAP[breachName];
  }
  const foundBreach = allBreaches.find(
    (breach) => breach.Name.toLowerCase() === breachName,
  );
  return foundBreach;
}
/* c8 ignore stop */

/**
 * A range can be subscribed for callbacks with the following request:
 * POST /range/subscribe
 * {
 *   hashPrefix:"[hash prefix]"
 * }
 * There are two possible response codes that can be returned:
 * 1. HTTP 201: New range subscription has been created
 * 2. HTTP 200: Range subscription already exists
 *
 * @param  sha1 sha1 of the email being subscribed
 * @returns 200 or 201 response codes
 */
// TODO: Add unit test when changing this code:
/* c8 ignore start */
async function subscribeHash(sha1: string) {
  const sha1Prefix = sha1.slice(0, 6).toUpperCase();
  const path = "/range/subscribe";
  const options = {
    Method: "POST",
    Body: { hashPrefix: sha1Prefix },
  };

  return await kAnonReq(path, options);
}
/* c8 ignore stop */

/**
 * A range subscription can be deleted with the following request:
 * DELETE /range/[hash prefix]
 *
 * There is one possible response code that can be returned:
 * HTTP 200: Range subscription successfully deleted
 *
 * @param {string} sha1 sha1 of the email being subscribed
 * @returns 200 response codes
 */
// TODO: Add unit test when changing this code:
/* c8 ignore start */
async function deleteSubscribedHash(sha1: string) {
  const sha1Prefix = sha1.slice(0, 6).toUpperCase();
  const path = `/range/${sha1Prefix}`;
  const options = {
    Method: "DELETE",
  };

  return await kAnonReq(path, options);
}
/* c8 ignore stop */

function hasEmailAddressAttached(
  subscriberRow: SubscriberRow,
): subscriberRow is SubscriberRow & EmailAddressRow {
  return (
    typeof (subscriberRow as SubscriberRow & EmailAddressRow).email === "string"
  );
}

export {
  kAnonReq,
  formatDataClassesArray,
  getAddressesAndLanguageForEmail,
  getBreachesForEmail,
  getBreachByName,
  getAllBreachesFromDb,
  getFilteredBreaches,
  subscribeHash,
  deleteSubscribedHash,
  knex as knexHibp,
};
