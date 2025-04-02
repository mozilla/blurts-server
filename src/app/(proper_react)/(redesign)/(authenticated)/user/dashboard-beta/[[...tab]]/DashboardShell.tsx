/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { Session } from "next-auth";
import styles from "./DashboardShell.module.scss";
import { ExtendedReactLocalization } from "../../../../../../functions/l10n";
import { ShellRedesign } from "../../../../Shell/ShellRedesign";
import { EnvironmentConstants } from "../../../../../../functions/server/getEnvironmentConstants";
import { FeatureFlagName } from "../../../../../../../db/tables/featureFlags";
import { ExperimentData } from "../../../../../../../telemetry/generated/nimbus/experiments";
import { Toolbar } from "../../../../../../components/client/toolbar/Toolbar";
import { LatestOnerepScanData } from "../../../../../../../db/tables/onerep_scans";
import { DashboardTabs } from "./DashboardTabs";
import { SubscriberBreach } from "../../../../../../../utils/subscriberBreaches";
import { DataBrokerRemovalTime } from "../../../../../../functions/server/getDataBrokerRemovalTimeEstimates";

export type PathParams = {
  tab: string[] | undefined;
};
export type SearchParams = {
  dialog?: "subscriptions";
};

export type Props = {
  l10n: ExtendedReactLocalization;
  session: Session;
  searchParams: SearchParams;
  pathParams: PathParams;
  envConstants: EnvironmentConstants;
  enabledFeatureFlags: FeatureFlagName[];
  experimentData: ExperimentData["Features"];
  scanData: LatestOnerepScanData;
  userBreaches: SubscriberBreach[];
  countryCode: string;
  removalTimeEstimates: DataBrokerRemovalTime[];
};

// The Server Component in page.tsx is split up into two parts:
// the asynchronous parts, that fetch data, and the presentational part,
// which can be rendered in Storybook as well. <DashboardShell> contains
// the latter.
export const DashboardShell = (props: Props) => {
  const l10n = props.l10n;

  return (
    <ShellRedesign
      l10n={props.l10n}
      session={props.session}
      countryCode={props.countryCode}
      enabledFeatureFlags={props.enabledFeatureFlags}
      experimentData={props.experimentData}
      yearlySubscriptionUrl={props.envConstants.subscriptionInfo.yearly.url}
      monthlySubscriptionUrl={props.envConstants.subscriptionInfo.monthly.url}
      subscriptionBillingAmount={{
        monthly: props.envConstants.subscriptionInfo.monthly.billingAmount,
        yearly: props.envConstants.subscriptionInfo.yearly.billingAmount,
      }}
      fxaSettingsUrl={props.envConstants.fxaSettingsUrl}
    >
      <Toolbar
        user={props.session.user}
        yearlySubscriptionUrl={props.envConstants.subscriptionInfo.yearly.url}
        monthlySubscriptionUrl={props.envConstants.subscriptionInfo.monthly.url}
        subscriptionBillingAmount={{
          monthly: props.envConstants.subscriptionInfo.monthly.billingAmount,
          yearly: props.envConstants.subscriptionInfo.yearly.billingAmount,
        }}
        fxaSettingsUrl={props.envConstants.fxaSettingsUrl}
        lastScanDate={props.scanData.scan?.created_at ?? null}
        autoOpenUpsellDialog={props.searchParams.dialog === "subscriptions"}
        enabledFeatureFlags={props.enabledFeatureFlags}
        experimentData={props.experimentData}
      />
      <div className={styles.wrapper}>
        <h1 className={styles.title}>
          {l10n.getString("main-nav-link-dashboard-label")}
        </h1>
        <aside className={styles.heroPlaceholder}>
          Overview (hero) placeholder
        </aside>
        <DashboardTabs
          session={props.session}
          envConstants={props.envConstants}
          enabledFeatureFlags={props.enabledFeatureFlags}
          experimentData={props.experimentData}
          scanData={props.scanData}
          userBreaches={props.userBreaches}
          countryCode={props.countryCode}
          removalTimeEstimates={props.removalTimeEstimates}
        />
      </div>
    </ShellRedesign>
  );
};
