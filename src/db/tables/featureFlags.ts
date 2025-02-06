/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import createDbConnection from "../connect";
import { logger } from "../../app/functions/server/logging";
import { FeatureFlagRow } from "knex/types/tables";

const knex = createDbConnection();

/** @deprecated This type should not be used */
export type FeatureFlag = {
  name: string;
  isEnabled: boolean;
  description?: string;
  dependencies?: string[];
  allowList?: string[];
  waitList?: string[];
  expiredAt?: Date;
  deletedAt?: Date;
  owner?: string;
};

/** @deprecated The method should not be used, use Nimbus experiment or roll-out: /src/app/functions/server/getExperiments */
export async function getAllFeatureFlags() {
  return await knex("feature_flags")
    .whereNull("deleted_at")
    .orderBy("name")
    .returning("*");
}

/** @deprecated The method should not be used, use Nimbus experiment or roll-out: /src/app/functions/server/getExperiments */
export async function getDeletedFeatureFlags() {
  return await knex("feature_flags")
    .whereNotNull("deleted_at")
    .orderBy("name")
    .returning("*");
}

export const featureFlagNames = [
  "UpdatedEmailPreferencesOption",
  "CancellationFlow",
  "DiscountCouponNextThreeMonths",
  "LatestScanDateCsatSurvey",
  "AutomaticRemovalCsatSurvey",
  "AdditionalRemovalStatuses",
  "PetitionBannerCsatSurvey",
  "MonthlyReportFreeUser",
  "PromptNoneAuthFlow",
  "GA4SubscriptionEvents",
  "DataBrokerRemovalTimeEstimateLabel",
  "DataBrokerRemovalTimeEstimateCsat",
  "LandingPageRedesign",
  "EnableRemovalUnderMaintenanceStep",
  "CirrusV2",
  "DataBrokerRemovalAttempts",
  "ExpirationNotification",
] as const;
export type FeatureFlagName = (typeof featureFlagNames)[number];

/**
 * @param options
 */
export async function getEnabledFeatureFlags(
  options: { isSignedOut?: false; email: string } | { isSignedOut: true },
): Promise<FeatureFlagName[]> {
  const query = knex("feature_flags")
    .select("name")
    .where("deleted_at", null)
    .and.where("expired_at", null)
    .and.where((subQuery) => {
      subQuery = subQuery.where("is_enabled", true);
      if (!options.isSignedOut) {
        // If the user is logged in, the feature flag can also be enabled
        // for them specifically if they are in the allowlist:
        subQuery = subQuery.or.whereRaw("? = ANY(allow_list)", options.email);
      }
      return void subQuery;
    });

  const enabledFlagNames = (await query).map(
    (row: { name: string }) => row.name as FeatureFlagName,
  );

  // Force feature flags for E2E tests via URL query params
  if (process.env.E2E_TEST_ENV === "local") {
    const { headers } = await import("next/headers");
    const forcedFeatureFlags = (await headers()).get("x-forced-feature-flags");
    if (forcedFeatureFlags) {
      const forcedFeatureFlagsFiltered = forcedFeatureFlags
        .split(",")
        .filter((forcedFeatureFlag) =>
          featureFlagNames.includes(forcedFeatureFlag as FeatureFlagName),
        );
      return [
        ...new Set([...enabledFlagNames, ...forcedFeatureFlagsFiltered]),
      ] as FeatureFlagName[];
    }
  }

  return enabledFlagNames;
}

/**
 * It is recommended to use `getEnabledFeatureFlags` if you want to know what
 * features to show for a single person. This function is for use cases where
 * you need to potentially use the allowlist in a different query (specifically
 * `getSubscribersWaitingForMonthlyEmail` and
 * `getPotentialSubscribersWaitingForFirstDataBrokerRemovalFixedEmail`, at the
 * time of writing).
 *
 * @param featureFlagName
 */
export async function getFeatureFlagData(
  featureFlagName: FeatureFlagName,
): Promise<FeatureFlagRow | null> {
  return (
    (await knex("feature_flags")
      .first()
      .where("name", featureFlagName)
      // The `.andWhereNull` alias doesn't seem to exist:
      // https://github.com/knex/knex/issues/1881#issuecomment-275433906
      .whereNull("deleted_at")) ?? null
  );
}

export async function getFeatureFlagByName(name: string) {
  logger.info("getFeatureFlagByName", name);
  const res = await knex("feature_flags").where("name", name);

  return res[0] || null;
}

/**
 * @param flag
 * @deprecated The method should not be used, use Nimbus experiment or roll-out: /src/app/functions/server/getExperiments
 */
export async function addFeatureFlag(
  flag: Omit<FeatureFlagRow, "created_at" | "modified_at">,
) {
  logger.info("addFeatureFlag", flag);
  const featureFlagDb: Omit<FeatureFlagRow, "created_at" | "modified_at"> = {
    name: flag.name,
    is_enabled: flag.is_enabled,
    description: flag.description,
    dependencies: flag.dependencies,
    allow_list: flag.allow_list
      ?.map((email: string) => email.trim())
      .filter((email: string) => email.length > 0),
    wait_list: flag.wait_list
      ?.map((email: string) => email.trim())
      .filter((email: string) => email.length > 0),
    expired_at: flag.expired_at,
    owner: flag.owner,
  };
  const res = await knex("feature_flags")
    .insert(featureFlagDb)
    .onConflict("name")
    .merge(["deleted_at"])
    .returning("*");

  return res[0];
}

/**
 * @param name
 * @deprecated The method should not be used, use Nimbus experiment or roll-out: /src/app/functions/server/getExperiments
 */
export async function deleteFeatureFlagByName(name: string) {
  logger.info("deleteFeatureFlagByName", name);
  const res = await knex("feature_flags")
    .where("name", name)
    .update({
      // @ts-ignore knex.fn.now() results in it being set to a date,
      // even if it's not typed as a JS date object:
      deleted_at: knex.fn.now(),
    })
    .returning("*");
  return res[0];
}

/**
 * @param name
 * @param dependencies
 * @deprecated The method should not be used, use Nimbus experiment or roll-out: /src/app/functions/server/getExperiments
 */
export async function updateDependencies(name: string, dependencies: string[]) {
  logger.info("updateDependencies", { name, dependencies });
  const res = await knex("feature_flags")
    .where("name", name)
    .update({
      dependencies,
      // @ts-ignore knex.fn.now() results in it being set to a date,
      // even if it's not typed as a JS date object:
      modified_at: knex.fn.now(),
    })
    .returning("*");

  return res[0];
}

/**
 * @param name
 * @param owner
 * @deprecated The method should not be used, use Nimbus experiment or roll-out: /src/app/functions/server/getExperiments
 */
export async function updateOwner(name: string, owner: string) {
  logger.info("updateOwner", { name, owner });
  const res = await knex("feature_flags")
    .where("name", name)
    .update({
      owner: owner,
      // @ts-ignore knex.fn.now() results in it being set to a date,
      // even if it's not typed as a JS date object:
      modified_at: knex.fn.now(),
    })
    .returning("*");

  return res[0];
}

/**
 * @param name
 * @param allowList
 * @deprecated The method should not be used, use Nimbus experiment or roll-out: /src/app/functions/server/getExperiments
 */
export async function updateAllowList(name: string, allowList: string[]) {
  allowList = allowList.reduce((acc: string[], e: string) => {
    e = e.trim();
    if (e) acc.push(e);
    return acc;
  }, []);
  logger.info("updateAllowList", { name, allowList });
  const res = await knex("feature_flags")
    .where("name", name)
    .update({
      allow_list: allowList,
      // @ts-ignore knex.fn.now() results in it being set to a date,
      // even if it's not typed as a JS date object:
      modified_at: knex.fn.now(),
    })
    .returning("*");

  return res[0];
}

/**
 * @param name
 * @param waitList
 * @deprecated The method should not be used, use Nimbus experiment or roll-out: /src/app/functions/server/getExperiments
 */
export async function updateWaitList(name: string, waitList: string[]) {
  waitList = waitList.reduce((acc: string[], e: string) => {
    e = e.trim();
    if (e) acc.push(e);
    return acc;
  }, []);
  logger.info("updateWaitList", { name, waitList });
  const res = await knex("feature_flags")
    .where("name", name)
    .update({
      wait_list: waitList,
      // @ts-ignore knex.fn.now() results in it being set to a date,
      // even if it's not typed as a JS date object:
      modified_at: knex.fn.now(),
    })
    .returning("*");

  return res[0];
}

/**
 * @param name
 * @param isEnabled
 * @deprecated The method should not be used, use Nimbus experiment or roll-out: /src/app/functions/server/getExperiments
 */
export async function enableFeatureFlagByName(
  name: string,
  isEnabled: boolean,
) {
  logger.info("enableFeatureFlagByName", name);
  const res = await knex("feature_flags")
    .where("name", name)
    .update({
      is_enabled: isEnabled,
      // @ts-ignore knex.fn.now() results in it being set to a date,
      // even if it's not typed as a JS date object:
      modified_at: knex.fn.now(),
    })
    .returning("*");

  return res[0];
}

/**
 * @param name
 * @deprecated The method should not be used, use Nimbus experiment or roll-out: /src/app/functions/server/getExperiments
 */
export async function disableFeatureFlagByName(name: string) {
  logger.info("disableFeatureFlagByName", name);
  const res = await knex("feature_flags")
    .where("name", name)
    .update({
      is_enabled: false,
      // @ts-ignore knex.fn.now() results in it being set to a date,
      // even if it's not typed as a JS date object:
      modified_at: knex.fn.now(),
    })
    .returning("*");

  return res[0];
}
