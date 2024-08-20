/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { notFound, redirect } from "next/navigation";
import { getServerSession } from "../../../../../functions/server/getServerSession";
import { getAllFeatureFlags } from "../../../../../../db/tables/featureFlags";
import { AddFeatureFlag } from "./components/AddFeatureFlag";
import { isAdmin } from "../../../../../api/utils/auth";
import { Toolbar } from "../../../../../components/client/toolbar/Toolbar";
import styles from "./page.module.scss";
import {
  getSubscriptionBillingAmount,
  getPremiumSubscriptionUrl,
} from "../../../../../functions/server/getPremiumSubscriptionInfo";
import { defaultExperimentData } from "../../../../../../telemetry/generated/nimbus/experiments";
import { FlagEditor } from "./components/FlagEditor";

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
      (flagA, flagB) => flagB.created_at.getTime() - flagA.created_at.getTime(),
    ) ?? [];

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
            experimentData={defaultExperimentData}
          />
        </div>
      </nav>
      <div className={styles.start}>
        <h1>
          Note: Feature flags are deprecated, use{" "}
          <a href="https://experimenter.info/">Experimenter</a>.
        </h1>
        <br />
        <h3>Add New Feature Flag</h3>
        <AddFeatureFlag />
        <br />
        <h3>Enabled Feature Flags</h3>
        <div className={styles.flagList}>
          {featureFlags
            .filter((flag) => flag.is_enabled)
            .map((flag) => (
              <FlagEditor key={flag.name} flag={flag} />
            ))}
        </div>
        <h3>Disabled Feature Flags</h3>
        <div className={styles.flagList}>
          {featureFlags
            .filter((flag) => !flag.is_enabled)
            .map((flag) => (
              <FlagEditor key={flag.name} flag={flag} />
            ))}
        </div>
      </div>
    </div>
  );
}
