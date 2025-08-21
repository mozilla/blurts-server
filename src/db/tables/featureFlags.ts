/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import createDbConnection from "../connect";
import { logger } from "../../app/functions/server/logging";
import { FeatureFlagViewRow, SubscriberRow } from "knex/types/tables";

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
// Not covered by tests; mostly side-effects. See test-coverage.md#mock-heavy
/* c8 ignore start */
export async function getAllFeatureFlags(): Promise<
  Array<
    FeatureFlagViewRow & {
      last_updated_by_subscriber_email: SubscriberRow["primary_email"];
    }
  >
> {
  return await knex("feature_flag_view")
    .join(
      "subscribers",
      "subscribers.id",
      "feature_flag_view.last_updated_by_subscriber_id",
    )
    .select(
      "feature_flag_view.*",
      "subscribers.primary_email as last_updated_by_subscriber_email",
    )
    .orderBy("feature_flag_view.name");
}
/* c8 ignore stop */

/** @deprecated The method should not be used, use Nimbus experiment or roll-out: /src/app/functions/server/getExperiments */
// Not covered by tests; mostly side-effects. See test-coverage.md#mock-heavy
/* c8 ignore start */
export async function getDeletedFeatureFlags() {
  return await knex("feature_flag_view").select("*").orderBy("name");
}
/* c8 ignore stop */

export const featureFlagNames = [
  "CancellationFlow",
  "DiscountCouponNextThreeMonths",
  "LatestScanDateCsatSurvey",
  "AutomaticRemovalCsatSurvey",
  "AdditionalRemovalStatuses",
  "PetitionBannerCsatSurvey",
  "PromptNoneAuthFlow",
  "GA4SubscriptionEvents",
  "DataBrokerRemovalTimeEstimateLabel",
  "DataBrokerRemovalTimeEstimateCsat",
  "LandingPageRedesign",
  "EnableRemovalUnderMaintenanceStep",
  "CirrusV2",
  "DataBrokerRemovalAttempts",
  "CustomDataBrokers",
  "SidebarNavigationRedesign",
  "EditScanProfileDetails",
  "SubPlat3",
  "Announcements",
  "PrivacyProductsBundle",
  "DisableOneRepScans",
  "DisableLandingToDashboardRedirect",
  "Moscary",
  "MaskDataBrokerCount",
] as const;

export const adminOnlyFlags: FeatureFlagName[] = [
  "CustomDataBrokers",
  "DisableLandingToDashboardRedirect",
];

export type FeatureFlagName = (typeof featureFlagNames)[number];

/**
 * @param options
 */
// Not covered by tests; mostly side-effects. See test-coverage.md#mock-heavy
/* c8 ignore start */
export async function getEnabledFeatureFlags(
  options: { isSignedOut?: false; email: string } | { isSignedOut: true },
): Promise<FeatureFlagName[]> {
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
      return [...new Set(forcedFeatureFlagsFiltered)] as FeatureFlagName[];
    }
  }

  const query = knex("feature_flag_view")
    .select("name")
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

  return enabledFlagNames;
}
/* c8 ignore stop */

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
// Not covered by tests; mostly side-effects. See test-coverage.md#mock-heavy
/* c8 ignore start */
export async function getFeatureFlagData(
  featureFlagName: FeatureFlagName,
): Promise<FeatureFlagViewRow | null> {
  return (
    (await knex("feature_flag_view").first().where("name", featureFlagName)) ??
    null
  );
}
/* c8 ignore stop */

// Not covered by tests; mostly side-effects. See test-coverage.md#mock-heavy
/* c8 ignore start */
export async function getFeatureFlagByName(name: string) {
  logger.info("getFeatureFlagByName", name);
  const res = await knex("feature_flag_view").where("name", name);

  return res[0] || null;
}
/* c8 ignore stop */

/**
 * @param flag
 * @deprecated The method should not be used, use Nimbus experiment or roll-out: /src/app/functions/server/getExperiments
 */
// Not covered by tests; mostly side-effects. See test-coverage.md#mock-heavy
/* c8 ignore start */
export async function addFeatureFlag(
  flag: Omit<FeatureFlagViewRow, "updated_at">,
) {
  logger.info("addFeatureFlag", flag);
  await knex("feature_flag_events").insert({
    name: flag.name,
    is_enabled: flag.is_enabled,
    allow_list: flag.allow_list,
    created_by_subscriber_id: flag.last_updated_by_subscriber_id,
  });

  const flagFromDb = await knex("feature_flag_view")
    .select("*")
    .where("name", flag.name)
    .first();

  return flagFromDb!;
}
/* c8 ignore stop */

/**
 * @param name
 * @param allowList
 * @deprecated The method should not be used, use Nimbus experiment or roll-out: /src/app/functions/server/getExperiments
 */
// Not covered by tests; mostly side-effects. See test-coverage.md#mock-heavy
/* c8 ignore start */
export async function updateAllowList(
  name: string,
  allowList: string[],
  updaterId: SubscriberRow["id"],
) {
  allowList = allowList.reduce((acc: string[], e: string) => {
    e = e.trim();
    if (e) acc.push(e);
    return acc;
  }, []);
  logger.info("updateAllowList", { name, allowList });
  const existingFlag = await knex("feature_flag_view")
    .select("*")
    .where("name", name)
    .first();
  if (!existingFlag) {
    throw new Error(`No flag found with name [${name}]`);
  }
  await knex("feature_flag_events").insert({
    name: existingFlag.name,
    is_enabled: existingFlag.is_enabled,
    created_by_subscriber_id: updaterId,
    allow_list: allowList,
  });
}
/* c8 ignore stop */

/**
 * @param name
 * @param isEnabled
 * @deprecated The method should not be used, use Nimbus experiment or roll-out: /src/app/functions/server/getExperiments
 */
// Not covered by tests; mostly side-effects. See test-coverage.md#mock-heavy
/* c8 ignore start */
export async function enableFeatureFlagByName(
  name: string,
  isEnabled: boolean,
  updaterId: SubscriberRow["id"],
) {
  logger.info("enableFeatureFlagByName", name);
  const existingFlag = await knex("feature_flag_view")
    .select("*")
    .where("name", name)
    .first();
  if (!existingFlag) {
    throw new Error(`No flag found with name [${name}]`);
  }
  await knex("feature_flag_events").insert({
    name: existingFlag.name,
    is_enabled: isEnabled,
    created_by_subscriber_id: updaterId,
    allow_list: existingFlag.allow_list,
  });
}
/* c8 ignore stop */

/**
 * @param name
 * @deprecated The method should not be used, use Nimbus experiment or roll-out: /src/app/functions/server/getExperiments
 */
// Not covered by tests; mostly side-effects. See test-coverage.md#mock-heavy
/* c8 ignore start */
export async function disableFeatureFlagByName(
  name: string,
  updaterId: SubscriberRow["id"],
) {
  logger.info("disableFeatureFlagByName", name);
  const existingFlag = await knex("feature_flag_view")
    .select("*")
    .where("name", name)
    .first();
  if (!existingFlag) {
    throw new Error(`No flag found with name [${name}]`);
  }
  await knex("feature_flag_events").insert({
    name: existingFlag.name,
    is_enabled: false,
    created_by_subscriber_id: updaterId,
    allow_list: existingFlag.allow_list,
  });
}

export function isFeatureFlagAdminOnly(flagName: string): boolean {
  return (
    featureFlagNames.includes(flagName as FeatureFlagName) &&
    adminOnlyFlags.includes(flagName as FeatureFlagName)
  );
}
/* c8 ignore stop */
