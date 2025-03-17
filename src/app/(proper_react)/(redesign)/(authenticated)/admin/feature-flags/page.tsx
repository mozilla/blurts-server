/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { notFound, redirect } from "next/navigation";
import { getServerSession } from "../../../../../functions/server/getServerSession";
import {
  FeatureFlagName,
  featureFlagNames,
  getAllFeatureFlags,
  isFeatureFlagAdminOnly,
} from "../../../../../../db/tables/featureFlags";
import { isAdmin } from "../../../../../api/utils/auth";
import { Toolbar } from "../../../../../components/client/toolbar/Toolbar";
import styles from "./page.module.scss";
import {
  getSubscriptionBillingAmount,
  getPremiumSubscriptionUrl,
} from "../../../../../functions/server/getPremiumSubscriptionInfo";
import { defaultExperimentData } from "../../../../../../telemetry/generated/nimbus/experiments";
import { ExistingFlagEditor, NewFlagEditor } from "./components/FlagEditor";

export const metadata = {
  title: "Monitor Feature Flags",
};

export default async function FeatureFlagPage() {
  const session = await getServerSession();

  const monthlySubscriptionUrl = getPremiumSubscriptionUrl({ type: "monthly" });
  const yearlySubscriptionUrl = getPremiumSubscriptionUrl({ type: "yearly" });
  const fxaSettingsUrl = process.env.FXA_SETTINGS_URL!;

  if (!session?.user?.email) {
    return redirect("/");
  }

  if (!isAdmin(session.user.email)) {
    return notFound();
  }

  const featureFlags =
    (await getAllFeatureFlags()).toSorted(
      (flagA, flagB) => flagB.updated_at.getTime() - flagA.updated_at.getTime(),
    ) ?? [];

  /**
   * Elements in this array are either existing flags that are disabled,
   * or names of flags that are not known in the database yet.
   */
  const disabledFlags = featureFlagNames
    .map((flagName) => {
      return featureFlags.find((flag) => flag.name === flagName) ?? flagName;
    })
    .filter(
      (flagOrFlagName) =>
        typeof flagOrFlagName === "string" || !flagOrFlagName.is_enabled,
    )
    .reverse();

  return (
    <div className={styles.wrapper}>
      <nav className={styles.tabBar}>
        <div className={styles.end}>
          <Toolbar
            user={session.user}
            monthlySubscriptionUrl={monthlySubscriptionUrl}
            yearlySubscriptionUrl={yearlySubscriptionUrl}
            subscriptionBillingAmount={getSubscriptionBillingAmount()}
            fxaSettingsUrl={fxaSettingsUrl}
            // Since this page is only accessed by contributors, no need to load
            // their latest scan date from the DB:
            lastScanDate={null}
            // We're not going to run experiments on the feature flag page (it's
            // not user-visible), so no need to fetch experiment data:
            experimentData={defaultExperimentData["Features"]}
            enabledFeatureFlags={[]}
          />
        </div>
      </nav>
      <div className={styles.main}>
        <h3>Disabled Feature Flags</h3>
        <div className={styles.flagList}>
          {disabledFlags.map((flagOrFlagName) => {
            return typeof flagOrFlagName === "string" ? (
              <NewFlagEditor
                key={flagOrFlagName}
                flagName={flagOrFlagName}
                adminOnly={isFeatureFlagAdminOnly(flagOrFlagName)}
              />
            ) : (
              <ExistingFlagEditor
                key={flagOrFlagName.name}
                flag={flagOrFlagName}
                adminOnly={isFeatureFlagAdminOnly(flagOrFlagName.name)}
              />
            );
          })}
        </div>
        <h3>Enabled Feature Flags</h3>
        <div className={styles.flagList}>
          {featureFlags
            .filter(
              (flag) =>
                flag.is_enabled &&
                featureFlagNames.includes(flag.name as FeatureFlagName),
            )
            .map((flag) => (
              <ExistingFlagEditor
                key={flag.name}
                flag={flag}
                adminOnly={isFeatureFlagAdminOnly(flag.name)}
              />
            ))}
        </div>
      </div>
    </div>
  );
}
