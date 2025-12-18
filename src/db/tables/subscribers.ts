/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import type { Profile } from "next-auth";
import type { EmailAddressRow, SubscriberRow } from "knex/types/tables";
import createDbConnection from "../connect";
import { SerializedSubscriber } from "../../next-auth.js";
import { config } from "../../config";

const knex = createDbConnection();

// Not covered by tests; mostly side-effects. See test-coverage.md#mock-heavy
/* c8 ignore start */
async function getSubscribersByHashes(hashes: string[]) {
  return await knex("subscribers")
    .whereIn("primary_sha1", hashes)
    .andWhere("primary_verified", "=", true);
}
/* c8 ignore stop */

// Not covered by tests; mostly side-effects. See test-coverage.md#mock-heavy
/* c8 ignore start */
async function getSubscriberById(
  id: SubscriberRow["id"],
): Promise<undefined | (SubscriberRow & WithEmailAddresses)> {
  const [subscriber] = await knex("subscribers").where({
    id,
  });
  if (!subscriber) {
    return;
  }
  const subscriberAndEmails = await joinEmailAddressesToSubscriber(subscriber);
  return subscriberAndEmails;
}
/* c8 ignore stop */

// Not covered by tests; mostly side-effects. See test-coverage.md#mock-heavy
/* c8 ignore start */
async function getSubscriberByFxaUid(
  uid: SubscriberRow["fxa_uid"],
): Promise<undefined | (SubscriberRow & WithEmailAddresses)> {
  const [subscriber] = await knex("subscribers").where({
    fxa_uid: uid,
  });
  if (!subscriber) {
    return;
  }
  const subscriberAndEmails = await joinEmailAddressesToSubscriber(subscriber);
  return subscriberAndEmails;
}
/* c8 ignore stop */

/**
 * Update primary email for subscriber
 */
// Not covered by tests; mostly side-effects. See test-coverage.md#mock-heavy
/* c8 ignore start */
async function updatePrimaryEmail(
  subscriber: SubscriberRow,
  updatedEmail: string,
): Promise<SubscriberRow | null> {
  const trx = await knex.transaction();
  let subscriberTableUpdated;
  try {
    // update subscriber primary email to updated email
    subscriberTableUpdated = await knex("subscribers")
      .where("id", "=", subscriber.id)
      .update({
        primary_email: updatedEmail,
        // @ts-ignore knex.fn.now() results in it being set to a date,
        // even if it's not typed as a JS date object:
        updated_at: knex.fn.now(),
      })
      .returning("*")
      .transacting(trx);

    // if email_addresses table has updatedEmail as a secondary in Monitor
    // swap it with the current primary
    // Fixing: MNTOR-1748
    await knex("email_addresses")
      .where("email", "=", updatedEmail)
      .update({
        email: subscriber.primary_email,
        // @ts-ignore knex.fn.now() results in it being set to a date,
        // even if it's not typed as a JS date object:
        updated_at: knex.fn.now(),
      })
      .transacting(trx);

    await trx.commit();
  } catch (error) {
    await trx.rollback();
    // @ts-ignore Type annotations added later; type unknown:
    console.error("updatePrimaryEmail", error);
  }
  const updatedSubscriber = Array.isArray(subscriberTableUpdated)
    ? subscriberTableUpdated[0]
    : null;
  return updatedSubscriber;
}
/* c8 ignore stop */

/**
 * Update fxa_refresh_token and fxa_profile_json for subscriber
 *
 * @param subscriber knex object in DB
 * @param fxaAccessToken from Firefox Account Oauth
 * @param fxaRefreshToken from Firefox Account Oauth
 * @param sessionExpiresAt from Firefox Account Oauth
 * @param fxaProfileData from Firefox Account
 * @returns updated subscriber knex object in DB
 */
// Not covered by tests; mostly side-effects. See test-coverage.md#mock-heavy
/* c8 ignore start */
async function updateFxAData(
  subscriber: SubscriberRow | SerializedSubscriber,
  fxaAccessToken: string | null,
  fxaRefreshToken: string | null,
  sessionExpiresAt: number,
  fxaProfileData?: Profile,
): Promise<SubscriberRow | undefined | null> {
  const fxaUID = fxaProfileData?.uid;
  const updated = await knex("subscribers")
    .where("id", "=", subscriber.id)
    .update({
      fxa_uid: fxaUID,
      fxa_access_token: fxaAccessToken,
      fxa_refresh_token: fxaRefreshToken,
      fxa_session_expiry: new Date(sessionExpiresAt),
      fxa_profile_json: fxaProfileData,
      // @ts-ignore knex.fn.now() results in it being set to a date,
      // even if it's not typed as a JS date object:
      updated_at: knex.fn.now(),
    })
    .returning("*");
  return Array.isArray(updated) ? updated[0] : null;
}
/* c8 ignore stop */

/**
 * Update fxa tokens for subscriber
 *
 * @param subscriber knex object in DB
 * @param fxaAccessToken from Firefox Account Oauth
 * @param fxaRefreshToken from Firefox Account Oauth
 * @param sessionExpiresAt from Firefox Account Oauth
 * @returns updated subscriber knex object in DB
 */
// Not covered by tests; mostly side-effects. See test-coverage.md#mock-heavy
/* c8 ignore start */
async function updateFxATokens(
  subscriber: SubscriberRow | SerializedSubscriber,
  fxaAccessToken: string | null,
  fxaRefreshToken: string | null,
  sessionExpiresAt: number,
): Promise<SubscriberRow | undefined | null> {
  const updateResp = await knex("subscribers")
    .where("id", "=", subscriber.id)
    .update({
      fxa_access_token: fxaAccessToken,
      fxa_refresh_token: fxaRefreshToken,
      fxa_session_expiry: new Date(sessionExpiresAt),
      // @ts-ignore knex.fn.now() results in it being set to a date,
      // even if it's not typed as a JS date object:
      updated_at: knex.fn.now(),
    })
    .returning("*");
  return Array.isArray(updateResp) && updateResp.length > 0
    ? updateResp[0]
    : null;
}

/* c8 ignore stop */

/**
 * Get fxa tokens and expiry for subscriber
 */
// Not covered by tests; mostly side-effects. See test-coverage.md#mock-heavy
/* c8 ignore start */
async function getFxATokens(subscriberId: SubscriberRow["id"]) {
  const res = await knex("subscribers")
    .first("fxa_access_token", "fxa_refresh_token", "fxa_session_expiry")
    .where("id", subscriberId);
  return res ?? null;
}
/* c8 ignore stop */

/**
 * Update fxa_profile_json for subscriber
 */
// Not covered by tests; mostly side-effects. See test-coverage.md#mock-heavy
/* c8 ignore start */
async function updateFxAProfileData(
  subscriber: SubscriberRow,
  fxaProfileData: SubscriberRow["fxa_profile_json"],
) {
  await knex("subscribers").where("id", subscriber.id).update({
    fxa_profile_json: fxaProfileData,
    // @ts-ignore knex.fn.now() results in it being set to a date,
    // even if it's not typed as a JS date object:
    updated_at: knex.fn.now(),
  });
  return getSubscriberById(subscriber.id);
}
/* c8 ignore stop */

// Not covered by tests; mostly side-effects. See test-coverage.md#mock-heavy
/* c8 ignore start */
async function setAllEmailsToPrimary(
  subscriber: SubscriberRow,
  allEmailsToPrimary: SubscriberRow["all_emails_to_primary"],
) {
  const updated = await knex("subscribers")
    .where("id", subscriber.id)
    .update({
      all_emails_to_primary: allEmailsToPrimary,
      // @ts-ignore knex.fn.now() results in it being set to a date,
      // even if it's not typed as a JS date object:
      updated_at: knex.fn.now(),
    })
    .returning("*");
  const updatedSubscriber = Array.isArray(updated) ? updated[0] : null;
  return updatedSubscriber;
}
/* c8 ignore stop */

/**
 * Set "breach_resolution" column with the latest breach resolution object.
 */
// Not covered by tests; mostly side-effects. See test-coverage.md#mock-heavy
/* c8 ignore start */
async function setBreachResolution(
  user: SubscriberRow,
  updatedBreachesResolution: SubscriberRow["breach_resolution"],
): Promise<(SubscriberRow & WithEmailAddresses) | null> {
  await knex("subscribers").where("id", user.id).update({
    breach_resolution: updatedBreachesResolution,
    // @ts-ignore knex.fn.now() results in it being set to a date,
    // even if it's not typed as a JS date object:
    updated_at: knex.fn.now(),
  });
  return (await getSubscriberByFxaUid(user.fxa_uid)) ?? null;
}
/* c8 ignore stop */

// Not covered by tests; mostly side-effects. See test-coverage.md#mock-heavy
/* c8 ignore start */
async function deleteUnverifiedSubscribers() {
  const expiredDateTime = new Date(
    Date.now() - config.deleteUnverifiedSubscribersTimer * 1000,
  );
  const expiredTimeStamp = expiredDateTime.toISOString();
  const numDeleted = await knex("subscribers")
    .where("primary_verified", false)
    .andWhere("created_at", "<", expiredTimeStamp)
    .del();
  console.info("deleteUnverifiedSubscribers", {
    msg: `Deleted ${numDeleted} rows.`,
  });
}
/* c8 ignore stop */

/**
 * Delete subscriber when a FxA user id is provided
 * Also deletes all the additional email addresses associated with the account
 */
// Not covered by tests; mostly side-effects. See test-coverage.md#mock-heavy
/* c8 ignore start */
async function deleteSubscriber(sub: SubscriberRow | SerializedSubscriber) {
  console.debug("deleteSubscriber", JSON.stringify(sub));
  try {
    await knex("subscribers")
      .returning("id")
      .where("fxa_uid", sub.fxa_uid)
      .del();
  } catch (error) {
    // @ts-ignore Type annotations added later; type unknown:
    console.error("deleteSubscriber", error);
  }
}
/* c8 ignore stop */

// Not covered by tests; mostly side-effects. See test-coverage.md#mock-heavy
/* c8 ignore start */
async function deleteResolutionsWithEmail(id: number, email: string) {
  /** @type {any} */
  const [subscriber] = await knex("subscribers").where({
    id,
  });
  /** @type {{ breach_resolution: any }} */
  const { breach_resolution: breachResolution } = subscriber;
  // if email exists in breach resolution, remove it
  if (breachResolution && breachResolution[email]) {
    delete breachResolution[email];
    console.info(`Deleting resolution with email: ${email}`);
    return await setBreachResolution(subscriber, breachResolution);
  }
  console.info(`No resolution with ${email} found, skip`);
}
/* c8 ignore stop */

// Not covered by tests; mostly side-effects. See test-coverage.md#mock-heavy
/* c8 ignore start */

type WithEmailAddresses = SubscriberRow & {
  email_addresses: EmailAddressRow[];
};
async function joinEmailAddressesToSubscriber(
  subscriber: SubscriberRow,
): Promise<SubscriberRow & WithEmailAddresses> {
  const emailAddressRecords = await knex("email_addresses").where({
    subscriber_id: subscriber.id,
  });
  subscriber.email_addresses = emailAddressRecords.map((emailAddress) => ({
    id: emailAddress.id,
    email: emailAddress.email,
  }));
  return subscriber as SubscriberRow & WithEmailAddresses;
}
/* c8 ignore stop */

/* c8 ignore start */
// Not covered by tests; mostly side-effects. See test-coverage.md#mock-heavy
// TODO: Is this needed?
/* c8 ignore start */
async function incrementSignInCountForEligibleFreeUser(
  fxaId: SubscriberRow["fxa_uid"],
) {
  return await knex("subscribers")
    .where("fxa_uid", fxaId)
    .increment("sign_in_count", 1);
}
/* c8 ignore stop */

/* c8 ignore start */
// Not covered by tests; mostly side-effects. See test-coverage.md#mock-heavy
/* c8 ignore start */
async function getSignInCount(subscriberId: SubscriberRow["id"]) {
  const res = await knex("subscribers")
    .select("sign_in_count")
    .where("id", subscriberId);
  return res?.[0]?.["sign_in_count"] ?? null;
}
/* c8 ignore stop */

/* c8 ignore start */
async function unresolveAllBreaches(subscriberId: SubscriberRow["id"]) {
  const currentDate = new Date();
  await knex("subscribers")
    .where("id", subscriberId)
    .update({ breach_resolution: null, updated_at: currentDate });
}
/* c8 ignore stop */

export {
  getSubscribersByHashes,
  getSubscriberById,
  getSubscriberByFxaUid,
  updatePrimaryEmail,
  updateFxAData,
  updateFxATokens,
  getFxATokens,
  updateFxAProfileData,
  setAllEmailsToPrimary,
  setBreachResolution,
  deleteUnverifiedSubscribers,
  deleteSubscriber,
  deleteResolutionsWithEmail,
  incrementSignInCountForEligibleFreeUser,
  getSignInCount,
  unresolveAllBreaches,
  knex as knexSubscribers,
};
