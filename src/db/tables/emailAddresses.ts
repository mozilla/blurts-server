/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { v4 as uuidv4 } from "uuid";
import type { Profile } from "next-auth";
import createDbConnection from "../connect";
import { subscribeHash } from "../../utils/hibp";
import { getSha1 } from "../../utils/fxa";
import { updateFxAData } from "./subscribers";
import { ForbiddenError, UnauthorizedError } from "../../utils/error";
import { EmailAddressRow, SubscriberRow } from "knex/types/tables";
import { ReactLocalization } from "@fluent/react";
import { CONST_MAX_NUM_ADDRESSES } from "../../constants";

const knex = createDbConnection();

// Not covered by tests; mostly side-effects. See test-coverage.md#mock-heavy
/* c8 ignore start */
async function getEmailByToken(token: string) {
  const res = await knex("email_addresses").where(
    "verification_token",
    "=",
    token,
  );

  return res[0];
}
/* c8 ignore stop */

// Not covered by tests; mostly side-effects. See test-coverage.md#mock-heavy
/* c8 ignore start */
async function getEmailById(emailAddressId: number) {
  const res = await knex("email_addresses").where("id", "=", emailAddressId);

  return res[0];
}
/* c8 ignore stop */

// Not covered by tests; mostly side-effects. See test-coverage.md#mock-heavy
/* c8 ignore start */
async function addSubscriberUnverifiedEmailHash(
  user: SubscriberRow,
  email: string,
) {
  const lowerCaseEmail = email.toLowerCase();
  const maxNumEmailAddresses = CONST_MAX_NUM_ADDRESSES;

  const res = await knex.transaction(async (trx) => {
    await trx.raw("SET TRANSACTION ISOLATION LEVEL SERIALIZABLE");
    return await trx("email_addresses")
      .forUpdate()
      .select()
      .where("subscriber_id", user.id)
      .then(async (rows) => {
        if (rows.length < maxNumEmailAddresses - 1)
          return trx("email_addresses")
            .insert({
              subscriber_id: user.id,
              email: lowerCaseEmail,
              sha1: getSha1(lowerCaseEmail),
              verification_token: uuidv4(),
              verified: false,
            })
            .returning("*");
      });
  });

  if (res) {
    return res[0];
  } else {
    throw new Error("Could not add email address");
  }
}
/* c8 ignore stop */

// Not covered by tests; mostly side-effects. See test-coverage.md#mock-heavy
/* c8 ignore start */
async function resetUnverifiedEmailAddress(
  emailAddressId: EmailAddressRow["id"],
  subscriber: SubscriberRow,
  l10n: ReactLocalization,
) {
  const newVerificationToken = uuidv4();

  // Time in ms to require between verification reset.
  const verificationWait = 5 * 60 * 1000; // 5 minutes

  const verificationRecentlyUpdated = await knex("email_addresses")
    .select("id")
    .whereRaw(
      "\"updated_at\" > NOW() - INTERVAL '1 MILLISECOND' * ?",
      verificationWait,
    )
    .andWhere("id", emailAddressId)
    .first();

  if (
    verificationRecentlyUpdated?.id ===
    (typeof emailAddressId === "number"
      ? emailAddressId
      : parseInt(emailAddressId, 10))
  ) {
    throw new ForbiddenError("error-email-validation-pending");
  }

  const res = await knex("email_addresses")
    .update({
      verification_token: newVerificationToken,
      // @ts-ignore knex.fn.now() results in it being set to a date,
      // even if it's not typed as a JS date object:
      updated_at: knex.fn.now(),
    })
    .where("id", emailAddressId)
    .andWhere("subscriber_id", subscriber.id)
    .returning("*");
  return res[0];
}
/* c8 ignore stop */

// Not covered by tests; mostly side-effects. See test-coverage.md#mock-heavy
/* c8 ignore start */
async function verifyEmailHash(token: string) {
  const unverifiedEmail = await getEmailByToken(token);
  if (!unverifiedEmail) {
    throw new UnauthorizedError(
      "Error message for this verification email timed out or something went wrong.",
    );
  }
  const verifiedEmail = await _verifyNewEmail(unverifiedEmail);
  return verifiedEmail[0];
}
/* c8 ignore stop */

// TODO: refactor into an upsert? https://jaketrent.com/post/upsert-knexjs/
// Used internally, ideally should not be called by consumers.

// Not covered by tests; mostly side-effects. See test-coverage.md#mock-heavy
/* c8 ignore start */
async function _getSha1EntryAndDo(
  sha1: string,
  aFoundCallback: (existingSubscriber: SubscriberRow) => Promise<SubscriberRow>,
  aNotFoundCallback: () => Promise<SubscriberRow>,
) {
  const existingEntries = await knex("subscribers").where("primary_sha1", sha1);

  if (existingEntries.length && aFoundCallback) {
    return await aFoundCallback(existingEntries[0]);
  }

  if (!existingEntries.length && aNotFoundCallback) {
    return await aNotFoundCallback();
  }
}
/* c8 ignore stop */

// Used internally.
// Not covered by tests; mostly side-effects. See test-coverage.md#mock-heavy
/* c8 ignore start */

async function _addEmailHash(
  sha1: string,
  email: string,
  signupLanguage: string,
  verified: boolean = false,
): Promise<SubscriberRow | undefined> {
  try {
    return await _getSha1EntryAndDo(
      sha1,
      async (aEntry: SubscriberRow) => {
        // Entry existed, patch the email value if supplied.
        if (email) {
          const res = await knex("subscribers")
            .update({
              primary_email: email,
              primary_sha1: getSha1(email.toLowerCase()),
              primary_verified: verified,
              // @ts-ignore knex.fn.now() results in it being set to a date,
              // even if it's not typed as a JS date object:
              updated_at: knex.fn.now(),
            })
            .where("id", "=", aEntry.id)
            .returning("*");
          return res[0];
        }

        return aEntry;
      },
      async () => {
        // Always add a verification_token value
        const verificationToken = uuidv4();
        const res = await knex("subscribers")
          .insert({
            primary_sha1: getSha1(email.toLowerCase()),
            primary_email: email,
            signup_language: signupLanguage,
            primary_verification_token: verificationToken,
            primary_verified: verified,
          })
          .returning("*");
        return res[0];
      },
    );
  } catch (e) {
    // @ts-ignore Log whatever, we don't care
    console.error(e);
    throw new Error("Could not add email address to database.");
  }
}
/* c8 ignore stop */

/**
 * Add a subscriber:
 * 1. Add a record to subscribers
 * 2. Immediately call _verifySubscriber
 * 3. For FxA subscriber, add refresh token and profile data
 */
// Not covered by tests; mostly side-effects. See test-coverage.md#mock-heavy
// subscriber knex object added to DB
/* c8 ignore start */
async function addSubscriber(
  email: string, // to add
  signupLanguage: string, // from Accept-Language
  fxaAccessToken: string | null = null, // from Firefox Account Oauth
  fxaRefreshToken: string | null = null, // from Firefox Account Oauth
  sessionExpiresAt: number = 0, // from Firefox Account Oauth
  fxaProfileData?: Profile,
): // from Firefox Account
Promise<SubscriberRow | null> {
  // subscriber knex object added to DB
  const lowerCaseEmail = email.toLowerCase();
  const emailHash = await _addEmailHash(
    getSha1(lowerCaseEmail),
    lowerCaseEmail,
    signupLanguage,
    true,
  );

  if (!emailHash) {
    throw new Error("Email hash undefined");
  }

  const verified = await _verifySubscriber(emailHash);
  const verifiedSubscriber = Array.isArray(verified) ? verified[0] : null;
  if ((fxaRefreshToken || fxaProfileData) && verifiedSubscriber) {
    return updateFxAData(
      verifiedSubscriber,
      fxaAccessToken,
      fxaRefreshToken,
      sessionExpiresAt,
      fxaProfileData,
    ) as Promise<SubscriberRow>;
  }

  return verifiedSubscriber;
}
/* c8 ignore stop */

/**
 * When an email is verified, convert it into a subscriber:
 * 1. Subscribe the hash to HIBP
 * 2. Update our subscribers record to verified
 * 3. (if opted in) Subscribe the email to Fx newsletter
 */
// Not covered by tests; mostly side-effects. See test-coverage.md#mock-heavy
/* c8 ignore start */

async function _verifySubscriber(emailHash: SubscriberRow) {
  await subscribeHash(emailHash.primary_sha1);

  const verifiedSubscriber = await knex("subscribers")
    .where("primary_email", "=", emailHash.primary_email)
    .update({
      primary_verified: true,
      // @ts-ignore knex.fn.now() results in it being set to a date,
      // even if it's not typed as a JS date object:
      updated_at: knex.fn.now(),
    })
    .returning("*");

  return verifiedSubscriber;
}
/* c8 ignore stop */

// Verifies new emails added by existing users
// Not covered by tests; mostly side-effects. See test-coverage.md#mock-heavy
/* c8 ignore start */

type NewEmailType = {
  sha1: SubscriberRow["primary_sha1"];
  id: SubscriberRow["id"];
};
async function _verifyNewEmail(emailHash: NewEmailType) {
  await subscribeHash(emailHash.sha1);

  const verifiedEmail = await knex("email_addresses")
    .where("id", "=", emailHash.id)
    .update({
      verified: true,
      // @ts-ignore knex.fn.now() results in it being set to a date,
      // even if it's not typed as a JS date object:
      updated_at: knex.fn.now(),
    })
    .returning("*");

  return verifiedEmail;
}
/* c8 ignore stop */

// Not covered by tests; mostly side-effects. See test-coverage.md#mock-heavy
/* c8 ignore start */
async function getUserEmails(userId: number): Promise<EmailAddressRow[]> {
  const userEmails = await knex("email_addresses")
    .where("subscriber_id", "=", userId)
    .returning("*");

  return userEmails;
}
/* c8 ignore stop */

// Not covered by tests; mostly side-effects. See test-coverage.md#mock-heavy
/* c8 ignore start */
async function removeOneSecondaryEmail(emailId: number, subscriberId: number) {
  await knex("email_addresses")
    .where("id", emailId)
    .andWhere("subscriber_id", subscriberId)
    .del();
}
/* c8 ignore stop */

// Not covered by tests; mostly side-effects. See test-coverage.md#mock-heavy
/* c8 ignore start */
async function getEmailAddressesByHashes(hashes: string[]) {
  return await knex("email_addresses")
    .join("subscribers", "email_addresses.subscriber_id", "=", "subscribers.id")
    .whereIn("email_addresses.sha1", hashes)
    .andWhere("email_addresses.verified", "=", true);
}
/* c8 ignore stop */

export {
  getEmailById,
  addSubscriberUnverifiedEmailHash,
  resetUnverifiedEmailAddress,
  verifyEmailHash,
  addSubscriber,
  getUserEmails,
  removeOneSecondaryEmail,
  getEmailAddressesByHashes,
  knex as knexEmailAddresses,
};
