/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import createDbConnection from "../connect.js";
import AppConstants from "../../appConstants.js";
import { SubscriberRow } from "knex/types/tables";
import { SerializedSubscriber } from "../../next-auth.js";

const knex = createDbConnection();
const { DELETE_UNVERIFIED_SUBSCRIBERS_TIMER } = AppConstants;
const MONITOR_PREMIUM_CAPABILITY = "monitor";

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
async function getSubscriberById(id: SubscriberRow["id"]) {
  const [subscriber] = await knex("subscribers").where({
    id,
  });
  const subscriberAndEmails = await joinEmailAddressesToSubscriber(subscriber);
  return subscriberAndEmails;
}
/* c8 ignore stop */

// Not covered by tests; mostly side-effects. See test-coverage.md#mock-heavy
/* c8 ignore start */
async function getSubscriberByFxaUid(
  uid: SubscriberRow["fxa_uid"],
): Promise<SubscriberRow> {
  const [subscriber] = await knex("subscribers").where({
    fxa_uid: uid,
  });
  const subscriberAndEmails = await joinEmailAddressesToSubscriber(subscriber);
  return subscriberAndEmails;
}
/* c8 ignore stop */

// Not covered by tests; mostly side-effects. See test-coverage.md#mock-heavy
/* c8 ignore start */
// * @deprecated Use [[getSubscriberByFxAUid]] instead, as email identifiers are unstable (e.g. we've had issues with case-sensitivity).
async function getSubscriberByEmail(
  email: SubscriberRow["primary_email"],
): Promise<SubscriberRow> {
  const [subscriber] = await knex("subscribers").where({
    primary_email: email,
    primary_verified: true,
  });
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
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  fxaProfileData: any,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
): Promise<any> {
  const fxaUID = JSON.parse(fxaProfileData).uid;
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
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  fxaRefreshToken: string | null,
  sessionExpiresAt: number,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
): Promise<any> {
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

// Not covered by tests; mostly side-effects. See test-coverage.md#mock-heavy
/* c8 ignore start */
async function setMonthlyMonitorReport(
  subscriber: SubscriberRow,
  monthlyMonitorReport: SubscriberRow["monthly_monitor_report"],
) {
  const updated = await knex("subscribers")
    .where("id", subscriber.id)
    .update({
      monthly_monitor_report: monthlyMonitorReport,
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
): Promise<SubscriberRow | null> {
  await knex("subscribers").where("id", user.id).update({
    breach_resolution: updatedBreachesResolution,
    // @ts-ignore knex.fn.now() results in it being set to a date,
    // even if it's not typed as a JS date object:
    updated_at: knex.fn.now(),
  });
  return getSubscriberByEmail(user.primary_email);
}
/* c8 ignore stop */

// Not covered by tests; mostly side-effects. See test-coverage.md#mock-heavy
/* c8 ignore start */
async function deleteUnverifiedSubscribers() {
  // @ts-ignore DELETE_UNVERIFIED_SUBSCRIBERS_TIMER should not be undefined
  const expiredDateTime = new Date(
    Date.now() - Number(DELETE_UNVERIFIED_SUBSCRIBERS_TIMER) * 1000,
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
async function getPotentialSubscribersWaitingForFirstDataBrokerRemovalFixedEmail(): Promise<
  SubscriberRow[]
> {
  // I'm explicitly referencing the type here, so that these lines of code will
  // show up as errors when we remove it from the flag list:
  /** @type {import("./featureFlags.js").FeatureFlagName} */
  const featureFlagName = "FirstDataBrokerRemovalFixedEmail";
  // Interactions with the `feature_flags` table would generally go in the
  // `src/db/tables/featureFlags` module. However, since that module is already
  // written in TypeScript, it can't be loaded in pre-TypeScript cron jobs,
  // which currently still import from the subscribers module. Hence, we've
  // inlined this until https://mozilla-hub.atlassian.net/browse/MNTOR-3077 is fixed.
  const flag = await knex("feature_flags")
    .first()
    .where("name", featureFlagName)
    // The `.andWhereNull` alias doesn't seem to exist:
    // https://github.com/knex/knex/issues/1881#issuecomment-275433906
    .whereNull("deleted_at");

  if (!flag?.is_enabled || !flag?.modified_at) {
    return [];
  }

  let query = knex("subscribers")
    .select()
    // Only send to Plus users...
    .whereRaw(
      `(fxa_profile_json->'subscriptions')::jsonb \\? ?`,
      MONITOR_PREMIUM_CAPABILITY,
    )
    // ...with an OneRep account...
    .whereNotNull("onerep_profile_id")
    // ...who haven’t received the email...
    .andWhere("first_broker_removal_email_sent", false)
    // ...and signed up after the feature flag `FirstDataBrokerRemovalFixedEmail`
    // has been enabled last.
    .andWhere("created_at", ">=", flag.modified_at);

  if (Array.isArray(flag.allow_list) && flag.allow_list.length > 0) {
    // If the feature flag has an allowlist, only send to users on that list.
    // The `.andWhereIn` alias doesn't exist:
    // https://github.com/knex/knex/issues/1881#issuecomment-275433906
    query = query.whereIn("primary_email", flag.allow_list);
  }

  const rows = await query;

  return rows;
}
/* c8 ignore stop */

// Not covered by tests; mostly side-effects. See test-coverage.md#mock-heavy
/* c8 ignore start */
async function getSubscribersWaitingForMonthlyEmail(
  options: Partial<{ plusOnly: boolean; limit: number }> = {},
): Promise<SubscriberRow[]> {
  // I'm explicitly referencing the type here, so that these lines of code will
  // show up as errors when we remove it from the flag list:
  const featureFlagName = "MonthlyActivityEmail";
  // Interactions with the `feature_flags` table would generally go in the
  // `src/db/tables/featureFlags` module. However, since that module is already
  // written in TypeScript, it can't be loaded in pre-TypeScript cron jobs,
  // which currently still import from the subscribers module. Hence, we've
  // inlined this until https://mozilla-hub.atlassian.net/browse/MNTOR-3077 is fixed.
  const flag = await knex("feature_flags")
    .first()
    .where("name", featureFlagName)
    // The `.andWhereNull` alias doesn't seem to exist:
    // https://github.com/knex/knex/issues/1881#issuecomment-275433906
    .whereNull("deleted_at");

  if (!flag?.is_enabled) {
    return [];
  }

  let query = knex("subscribers")
    .select()
    // Only send to users who haven't opted out of the monthly activity email...
    // It looks like Knex's `.where` type definition doesn't accept Promise-returning
    // functions, even though the code does; hence the `eslint-disable`)
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    .where((builder) =>
      builder
        .whereNull("monthly_monitor_report")
        .orWhere("monthly_monitor_report", true),
    )
    // ...who haven't received the email in the last 1 month...
    // It looks like Knex's `.where` type definition doesn't accept Promise-returning
    // functions, even though the code does; hence the `eslint-disable`)
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    .andWhere((builder) =>
      builder
        .whereNull("monthly_monitor_report_at")
        .orWhereRaw(
          "\"monthly_monitor_report_at\" < NOW() - INTERVAL '1 month'",
        ),
    )
    // ...and whose account is older than 1 month.
    .andWhereRaw("\"created_at\" < NOW() - INTERVAL '1 month'");

  if (Array.isArray(flag.allow_list) && flag.allow_list.length > 0) {
    // If the feature flag has an allowlist, only send to users on that list.
    // The `.andWhereIn` alias doesn't exist:
    // https://github.com/knex/knex/issues/1881#issuecomment-275433906
    query = query.whereIn("primary_email", flag.allow_list);
  }

  if (options.plusOnly) {
    // And optionally, only send it to users who have a Plus subscription.
    // Note: This will only match people of whom the Monitor database knows that
    //       they have a Plus subscription. SubPlat is the source of truth, but
    //       our database is updated via a webhook and whenever the user logs
    //       in. Locally, you might want to set this via `/admin/dev/`.
    query = query.andWhereRaw(
      `(fxa_profile_json->'subscriptions')::jsonb \\? ?`,
      MONITOR_PREMIUM_CAPABILITY,
    );
  }

  if (typeof options.limit === "number") {
    query = query.limit(options.limit);
  }

  const rows = await query;

  return rows;
}
/* c8 ignore stop */

/**
 * @param email
 * @deprecated Only used by the `send-email-to-unresolved-breach-subscribers.js`, which it looks like might not be sent anymore? Delete as a part of MNTOR-3077?
 */
// Not covered by tests; mostly side-effects. See test-coverage.md#mock-heavy
/* c8 ignore start */
async function updateMonthlyEmailTimestamp(
  email: SubscriberRow["primary_email"],
) {
  const res = await knex("subscribers")
    .update({
      monthly_email_at: "now",
      // @ts-ignore knex.fn.now() results in it being set to a date,
      // even if it's not typed as a JS date object:
      updated_at: knex.fn.now(),
    })
    .where("primary_email", email)
    .returning("monthly_email_at");

  return res;
}
/* c8 ignore stop */

/**
 * Unsubscribe user from monthly unresolved breach emails
 *
 * @param token User verification token
 * @deprecated Delete as a part of MNTOR-3077
 */
// Not covered by tests; mostly side-effects. See test-coverage.md#mock-heavy
/* c8 ignore start */
async function updateMonthlyEmailOptout(token: string) {
  await knex("subscribers")
    .update("monthly_email_optout", true)
    .where("primary_verification_token", token);
}
/* c8 ignore stop */

// Not covered by tests; mostly side-effects. See test-coverage.md#mock-heavy
/* c8 ignore start */
async function markFirstDataBrokerRemovalFixedEmailAsJustSent(
  subscriber: SubscriberRow,
) {
  const affectedSubscribers = await knex("subscribers")
    .update({
      first_broker_removal_email_sent: true,
      // @ts-ignore knex.fn.now() results in it being set to a date,
      // even if it's not typed as a JS date object:
      updated_at: knex.fn.now(),
    })
    .where("primary_email", subscriber.primary_email)
    .andWhere("id", subscriber.id)
    .returning("*");

  if (affectedSubscribers.length !== 1) {
    throw new Error(
      `Attempted to mark 1 user as having just been sent the first data broker removal fixed email, but instead found [${affectedSubscribers.length}] matching its ID and email address.`,
    );
  }
}

/* c8 ignore stop */
// Not covered by tests; mostly side-effects. See test-coverage.md#mock-heavy
/* c8 ignore start */
async function markMonthlyActivityEmailAsJustSent(subscriber: SubscriberRow) {
  const affectedSubscribers = await knex("subscribers")
    .update({
      // @ts-ignore knex.fn.now() results in it being set to a date,
      // even if it's not typed as a JS date object:
      monthly_monitor_report_at: knex.fn.now(),
      // @ts-ignore knex.fn.now() results in it being set to a date,
      // even if it's not typed as a JS date object:
      updated_at: knex.fn.now(),
    })
    .where("primary_email", subscriber.primary_email)
    .andWhere("id", subscriber.id)
    .returning("*");

  if (affectedSubscribers.length !== 1) {
    throw new Error(
      `Attempted to mark 1 user as having just been sent the monthly activity email, but instead found [${affectedSubscribers.length}] matching its ID and email address.`,
    );
  }
}
/* c8 ignore stop */

// Not covered by tests; mostly side-effects. See test-coverage.md#mock-heavy
/* c8 ignore start */
async function getOnerepProfileId(subscriberId: SubscriberRow["id"]) {
  const res = await knex("subscribers")
    .select("onerep_profile_id")
    .where("id", subscriberId);
  return res?.[0]?.["onerep_profile_id"] ?? null;
}
/* c8 ignore stop */

/**
 * @deprecated OBSOLETE: Delete as a part of MNTOR-3077
 */
// Not covered by tests; mostly side-effects. See test-coverage.md#mock-heavy
/* c8 ignore start */
function getSubscribersWithUnresolvedBreachesQuery() {
  return knex("subscribers")
    .whereRaw("monthly_email_optout IS NOT TRUE")
    .whereRaw(
      "greatest(created_at, monthly_email_at) < (now() - interval '1 month')",
    )
    .whereRaw("(breach_stats #>> '{numBreaches, numUnresolved}')::int > 0");
}
/* c8 ignore stop */

/**
 * @deprecated OBSOLETE: Delete as a part of MNTOR-3077
 */
// Not covered by tests; mostly side-effects. See test-coverage.md#mock-heavy
/* c8 ignore start */
async function getSubscribersWithUnresolvedBreaches(limit = 0) {
  let query = getSubscribersWithUnresolvedBreachesQuery().select(
    "primary_email",
    "primary_verification_token",
    "breach_stats",
    "signup_language",
  );
  if (limit) {
    query = query.limit(limit).orderBy("created_at");
  }
  return await query;
}
/* c8 ignore stop */

/**
 * @deprecated OBSOLETE: Delete as a part of MNTOR-3077
 */
// Not covered by tests; mostly side-effects. See test-coverage.md#mock-heavy
/* c8 ignore start */
async function getSubscribersWithUnresolvedBreachesCount() {
  const query = getSubscribersWithUnresolvedBreachesQuery();
  // @ts-ignore This will return a string
  const count = parseInt((await query.count({ count: "*" }))[0].count);
  return count;
}
/* c8 ignore stop */

// Not covered by tests; mostly side-effects. See test-coverage.md#mock-heavy
/* c8 ignore start */
async function joinEmailAddressesToSubscriber(subscriber: SubscriberRow) {
  if (subscriber) {
    const emailAddressRecords = await knex("email_addresses").where({
      subscriber_id: subscriber.id,
    });
    subscriber.email_addresses = emailAddressRecords.map((emailAddress) => ({
      id: emailAddress.id,
      email: emailAddress.email,
    }));
  }
  return subscriber;
}
/* c8 ignore stop */

/* c8 ignore start */
// Not covered by tests; mostly side-effects. See test-coverage.md#mock-heavy
/* c8 ignore start */
async function deleteOnerepProfileId(subscriberId: SubscriberRow["id"]) {
  return await knex("subscribers").where("id", subscriberId).update({
    onerep_profile_id: null,
    // @ts-ignore knex.fn.now() results in it being set to a date,
    // even if it's not typed as a JS date object:
    updated_at: knex.fn.now(),
  });
}
/* c8 ignore stop */

/* c8 ignore start */
// Not covered by tests; mostly side-effects. See test-coverage.md#mock-heavy
/* c8 ignore start */
async function incrementSignInCountForEligibleFreeUser(
  fxaId: SubscriberRow["fxa_uid"],
) {
  return await knex("subscribers")
    .where("fxa_uid", fxaId)
    .whereNotNull("onerep_profile_id")
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
async function unresolveAllBreaches(
  oneRepProfileId: SubscriberRow["onerep_profile_id"],
) {
  const currentDate = new Date();
  await knex("subscribers")
    .where("onerep_profile_id", oneRepProfileId)
    .update({ breach_resolution: null, updated_at: currentDate });
}
/* c8 ignore stop */

export {
  getOnerepProfileId,
  getSubscribersByHashes,
  getSubscriberById,
  getSubscriberByFxaUid,
  getSubscriberByEmail,
  getSubscribersWithUnresolvedBreachesQuery,
  getSubscribersWithUnresolvedBreaches,
  getSubscribersWithUnresolvedBreachesCount,
  updatePrimaryEmail,
  updateFxAData,
  updateFxATokens,
  getFxATokens,
  updateFxAProfileData,
  setAllEmailsToPrimary,
  setMonthlyMonitorReport,
  setBreachResolution,
  getPotentialSubscribersWaitingForFirstDataBrokerRemovalFixedEmail,
  getSubscribersWaitingForMonthlyEmail,
  updateMonthlyEmailTimestamp,
  updateMonthlyEmailOptout,
  markFirstDataBrokerRemovalFixedEmailAsJustSent,
  markMonthlyActivityEmailAsJustSent,
  deleteUnverifiedSubscribers,
  deleteSubscriber,
  deleteResolutionsWithEmail,
  deleteOnerepProfileId,
  incrementSignInCountForEligibleFreeUser,
  getSignInCount,
  unresolveAllBreaches,
  knex as knexSubscribers,
};
