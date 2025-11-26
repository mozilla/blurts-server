/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import styles from "./DashboardTopBanner.module.scss";
import { TabType } from "../View";
import { useL10n } from "../../../../../../../hooks/l10n";
import { DoughnutChart as Chart } from "../../../../../../../components/client/Chart";
import { DashboardSummary } from "../../../../../../../functions/server/dashboard";
import { StepDeterminationData } from "../../../../../../../functions/server/getRelevantGuidedSteps";
import { DashboardTopBannerContent } from "./DashboardTopBannerContent";
import { FeatureFlagName } from "../../../../../../../../db/tables/featureFlags";

export type DashboardTopBannerProps = {
  bannerData: DashboardSummary;
  hasExposures: boolean;
  hasUnresolvedBreaches: boolean;
  isEligibleForFreeScan: boolean;
  isEligibleForPremium: boolean;
  isPremiumUser: boolean;
  stepDeterminationData: StepDeterminationData;
  tabType: TabType;
  onShowFixed: () => void;
  monthlySubscriptionUrl: string;
  subscriptionBillingAmount: {
    monthly: number;
  };
  totalNumberOfPerformedScans?: number;
  enabledFeatureFlags: FeatureFlagName[];
};

export const DashboardTopBanner = (props: DashboardTopBannerProps) => {
  const l10n = useL10n();
  const isShowFixed = props.tabType === "fixed";

  const chartDataKey = isShowFixed
    ? "fixedSanitizedDataPoints"
    : "unresolvedSanitizedDataPoints";

  const chartData: [string, number][] = props.bannerData[chartDataKey].map(
    (obj) => {
      const [key, value] = Object.entries(obj)[0];
      return [l10n.getString(key), value];
    },
  );

  return (
    <>
      <div className={styles.container}>
        <DashboardTopBannerContent {...props} />
        <div className={styles.chart}>
          <Chart
            data={chartData}
            isEligibleForFreeScan={props.isEligibleForFreeScan}
            isEligibleForPremium={props.isEligibleForPremium}
            isPremiumUser={props.isPremiumUser}
            isShowFixed={isShowFixed}
            summary={props.bannerData}
            totalNumberOfPerformedScans={props.totalNumberOfPerformedScans}
            enabledFeatureFlags={props.enabledFeatureFlags}
          />
        </div>
      </div>
    </>
  );
};
