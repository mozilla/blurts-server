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

export type DashboardTopBannerProps = {
  bannerData: DashboardSummary;
  hasExposures: boolean;
  hasUnresolvedBreaches: boolean;
  hasUnresolvedBrokers: boolean;
  isEligibleForFreeScan: boolean;
  isEligibleForPremium: boolean;
  isPremiumUser: boolean;
  scanInProgress: boolean;
  stepDeterminationData: StepDeterminationData;
  tabType: TabType;
  onShowFixed: () => void;
  monthlySubscriptionUrl: string;
  yearlySubscriptionUrl: string;
  subscriptionBillingAmount: {
    yearly: number;
    monthly: number;
  };
  totalNumberOfPerformedScans?: number;
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
        <DashboardTopBannerContent
          bannerData={props.bannerData}
          hasExposures={props.hasExposures}
          hasUnresolvedBreaches={props.hasUnresolvedBreaches}
          hasUnresolvedBrokers={props.hasUnresolvedBrokers}
          isEligibleForFreeScan={props.isEligibleForFreeScan}
          isEligibleForPremium={props.isEligibleForPremium}
          isPremiumUser={props.isPremiumUser}
          tabType={props.tabType}
          scanInProgress={props.scanInProgress}
          stepDeterminationData={props.stepDeterminationData}
          onShowFixed={props.onShowFixed}
          monthlySubscriptionUrl={props.monthlySubscriptionUrl}
          yearlySubscriptionUrl={props.yearlySubscriptionUrl}
          subscriptionBillingAmount={props.subscriptionBillingAmount}
          totalNumberOfPerformedScans={props.totalNumberOfPerformedScans}
        />
        <div className={styles.chart}>
          <Chart
            scanInProgress={props.scanInProgress}
            data={chartData}
            isEligibleForFreeScan={props.isEligibleForFreeScan}
            isEligibleForPremium={props.isEligibleForPremium}
            isPremiumUser={props.isPremiumUser}
            isShowFixed={isShowFixed}
            summary={props.bannerData}
            totalNumberOfPerformedScans={props.totalNumberOfPerformedScans}
          />
        </div>
      </div>
    </>
  );
};
