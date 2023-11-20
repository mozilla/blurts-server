/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { DashboardTopBannerProps } from ".";
import styles from "./DashboardTopBannerContent.module.scss";
import {
  UserDashboardState,
  getUserDashboardState,
} from "../getUserDashboardState";
import {
  StepLink,
  getNextGuidedStep,
} from "../../../../../../functions/server/getRelevantGuidedSteps";
import { ProgressCard } from "../../../../../../components/client/ProgressCard";
import { Button } from "../../../../../../components/server/Button";
import { useL10n } from "../../../../../../hooks/l10n";
import { PremiumButton } from "../../../../../../components/client/PremiumBadge";

export interface ContentProps {
  relevantGuidedStep: StepLink;
  hasExposures: boolean;
  hasUnresolvedBreaches: boolean;
  hasUnresolvedBrokers: boolean;
  isEligibleForFreeScan: boolean;
  isEligibleForPremium: boolean;
  isPremiumUser: boolean;
  scanInProgress: boolean;
  onShowFixed: () => void;
}

export const DashboardTopBannerContent = (props: DashboardTopBannerProps) => {
  const l10n = useL10n();

  const {
    tabType,
    bannerData,
    stepDeterminationData,
    hasExposures,
    hasUnresolvedBreaches,
    hasUnresolvedBrokers,
    isEligibleForFreeScan,
    isEligibleForPremium,
    isPremiumUser,
    scanInProgress,
    onShowFixed,
    monthlySubscriptionUrl,
    yearlySubscriptionUrl,
  } = props;

  if (tabType === "fixed") {
    return (
      <ProgressCard
        isPremiumUser={isPremiumUser}
        resolvedByYou={
          bannerData.dataBrokerManuallyResolvedExposuresNum +
          bannerData.dataBreachFixedExposuresNum
        }
        autoRemoved={bannerData.dataBrokerFixedExposuresNum}
        inProgress={bannerData.dataBrokerInProgressExposuresNum}
      />
    );
  }

  const relevantGuidedStep = getNextGuidedStep(stepDeterminationData);

  const contentProps = {
    relevantGuidedStep,
    hasExposures,
    hasUnresolvedBreaches,
    hasUnresolvedBrokers,
    isEligibleForFreeScan,
    isEligibleForPremium,
    isPremiumUser,
    scanInProgress,
    onShowFixed,
  };
  const userDashboardState = getUserDashboardState(contentProps);

  function getDashboardBannerContent({
    userDashboardState,
    relevantGuidedStep,
  }: {
    userDashboardState: UserDashboardState;
    relevantGuidedStep: StepLink;
  }) {
    switch (userDashboardState) {
      case "NonEligiblePremiumUserNoBreaches":
        return (
          <>
            <h3>
              {l10n.getString("dashboard-top-banner-no-exposures-found-title")}
            </h3>
            <p>
              {l10n.getString(
                "dashboard-top-banner-non-us-no-exposures-found-description",
              )}
            </p>
            <div className={styles.cta}>
              <Button href="/redesign/user/settings" small variant="primary">
                {l10n.getString("dashboard-top-banner-monitor-more-cta")}
              </Button>
            </div>
          </>
        );
      case "NonEligiblePremiumUserUnresolvedBreaches":
        return (
          <>
            <h3>
              {l10n.getString("dashboard-top-banner-protect-your-data-title")}
            </h3>
            <p>
              {l10n.getString(
                "dashboard-exposures-breaches-scan-progress-description",
                {
                  exposures_unresolved_num:
                    bannerData.totalExposures -
                    bannerData.dataBrokerFixedExposuresNum -
                    bannerData.dataBreachFixedExposuresNum -
                    bannerData.dataBrokerInProgressExposuresNum,
                  data_breach_unresolved_num:
                    bannerData.dataBreachUnresolvedNum,
                },
              )}
            </p>
            <div className={styles.cta}>
              <Button href={relevantGuidedStep.href} small variant="primary">
                {l10n.getString("dashboard-top-banner-protect-your-data-cta")}
              </Button>
            </div>
          </>
        );
      case "NonEligiblePremiumUserResolvedBreaches":
        return (
          <>
            <h3>
              {l10n.getString(
                "dashboard-top-banner-your-data-is-protected-title",
              )}
            </h3>
            <p>
              {l10n.getString(
                "dashboard-top-banner-non-us-your-data-is-protected-description",
                {
                  exposures_resolved_num: bannerData.totalExposures,
                },
              )}
            </p>
            <div className={styles.cta}>
              <Button
                onPress={() => {
                  contentProps.onShowFixed();
                }}
                small
                variant="primary"
              >
                {l10n.getString(
                  "dashboard-top-banner-your-data-is-protected-cta",
                )}
              </Button>
            </div>
          </>
        );
      case "UsUserNonPremiumWithoutScan":
        return (
          <>
            <h3>
              {l10n.getString(
                "dashboard-top-banner-monitor-protects-your-even-more-title",
              )}
            </h3>
            <p>
              {l10n.getString(
                "dashboard-top-banner-monitor-protects-your-even-more-description",
                {
                  data_broker_sites_total_num: parseInt(
                    process.env.NEXT_PUBLIC_ONEREP_DATA_BROKER_COUNT as string,
                    10,
                  ),
                },
              )}
            </p>
            <div className={styles.cta}>
              <Button
                href="/redesign/user/welcome/free-scan?referrer=dashboard"
                small
                variant="primary"
              >
                {l10n.getString(
                  "dashboard-top-banner-monitor-protects-your-even-more-cta",
                )}
              </Button>
            </div>
            <br />
            <a href="https://mozilla.org/products/monitor/how-it-works/">
              {l10n.getString(
                "dashboard-top-banner-monitor-protects-your-even-more-learn-more",
              )}
            </a>
          </>
        );
      case "UsUserNonPremiumNoExposures":
        return (
          <>
            <h3>
              {l10n.getString("dashboard-top-banner-no-exposures-found-title")}
            </h3>
            <p>
              {l10n.getString(
                "dashboard-top-banner-no-exposures-found-description",
                {
                  data_broker_sites_total_num: parseInt(
                    process.env.NEXT_PUBLIC_ONEREP_DATA_BROKER_COUNT as string,
                    10,
                  ),
                },
              )}
            </p>
            <p>
              {l10n.getString(
                "dashboard-top-banner-no-exposures-found-upsell-info",
              )}
            </p>
            <div className={styles.cta}>
              <PremiumButton
                label={l10n.getString(
                  "dashboard-top-banner-no-exposures-found-cta",
                )}
                monthlySubscriptionUrl={monthlySubscriptionUrl}
                yearlySubscriptionUrl={yearlySubscriptionUrl}
              />
            </div>
          </>
        );
      case "UsUserNonPremiumWithScanUnresolvedExposures":
        return (
          <>
            <h3>
              {l10n.getString("dashboard-top-banner-protect-your-data-title")}
            </h3>
            <p>
              {l10n.getString(
                "dashboard-top-banner-protect-your-data-description",
                {
                  data_breach_unresolved_num:
                    bannerData.dataBreachUnresolvedNum,
                  data_broker_unresolved_num:
                    bannerData.dataBrokerTotalNum -
                    bannerData.dataBrokerFixedNum -
                    bannerData.dataBrokerInProgressNum,
                },
              )}
            </p>
            <div className={styles.cta}>
              <Button href={relevantGuidedStep.href} small variant="primary">
                {l10n.getString("dashboard-top-banner-protect-your-data-cta")}
              </Button>
            </div>
          </>
        );
      case "UsUserNonPremiumWithScanRemovalInProgress":
        return (
          <>
            <h3>
              {l10n.getString(
                "dashboard-top-banner-lets-keep-protecting-title",
              )}
            </h3>
            <p>
              {l10n.getString(
                "dashboard-top-banner-lets-keep-protecting-description",
                {
                  exposures_unresolved_num:
                    bannerData.totalExposures -
                    bannerData.dataBreachFixedExposuresNum -
                    bannerData.dataBrokerFixedExposuresNum -
                    bannerData.dataBrokerInProgressExposuresNum,
                },
              )}
            </p>
            <div className={styles.cta}>
              <Button href={relevantGuidedStep.href} small variant="primary">
                {l10n.getString(
                  "dashboard-top-banner-lets-keep-protecting-cta",
                )}
              </Button>
            </div>
          </>
        );
      case "UsUserNonPremiumWithScanAllResolved":
        return (
          <>
            <h3>
              {l10n.getString(
                "dashboard-top-banner-your-data-is-protected-title",
              )}
            </h3>
            <p>
              {l10n.getString(
                "dashboard-top-banner-your-data-is-protected-all-fixed-description",
                {
                  starting_exposure_total_num: bannerData.totalExposures,
                },
              )}
            </p>
            <div className={styles.cta}>
              <PremiumButton
                label={l10n.getString(
                  "dashboard-top-banner-no-exposures-found-cta",
                )}
                monthlySubscriptionUrl={monthlySubscriptionUrl}
                yearlySubscriptionUrl={yearlySubscriptionUrl}
              />
            </div>
          </>
        );
      case "UsUserPremiumOrNonPremiumWithScanUnresolvedExposures":
        return (
          <>
            <h3>
              {l10n.getString(
                "dashboard-top-banner-lets-keep-protecting-title",
              )}
            </h3>
            <p>
              {l10n.getString(
                "dashboard-top-banner-lets-keep-protecting-description",
                {
                  exposures_unresolved_num:
                    bannerData.totalExposures -
                    bannerData.dataBreachFixedExposuresNum -
                    bannerData.dataBrokerFixedExposuresNum -
                    bannerData.dataBrokerInProgressExposuresNum,
                },
              )}
            </p>
            <div className={styles.cta}>
              <Button href={relevantGuidedStep.href} small variant="primary">
                {l10n.getString(
                  "dashboard-top-banner-lets-keep-protecting-cta",
                )}
              </Button>
            </div>
          </>
        );
      case "UsUserPremiumWithScanNoExposures":
        return (
          <>
            <h3>
              {l10n.getString("dashboard-top-banner-no-exposures-found-title")}
            </h3>
            <p>
              {l10n.getString(
                "dashboard-top-banner-no-exposures-found-description",
                {
                  data_broker_sites_total_num: parseInt(
                    process.env.NEXT_PUBLIC_ONEREP_DATA_BROKER_COUNT as string,
                    10,
                  ),
                },
              )}
            </p>
            <div className={styles.cta}>
              <Button href="/redesign/user/settings" small variant="primary">
                {l10n.getString("dashboard-top-banner-monitor-more-cta")}
              </Button>
            </div>
          </>
        );
      case "UsUserPremiumWithScanAllResolved":
        return (
          <>
            <h3>
              {l10n.getString(
                "dashboard-top-banner-your-data-is-protected-title",
              )}
            </h3>
            <p>
              {l10n.getString(
                "dashboard-top-banner-your-data-is-protected-description",
                {
                  starting_exposure_total_num: bannerData.totalExposures,
                },
              )}
            </p>
            <div className={styles.cta}>
              <Button
                onPress={() => {
                  contentProps.onShowFixed();
                }}
                small
                variant="primary"
              >
                {l10n.getString(
                  "dashboard-top-banner-your-data-is-protected-cta",
                )}
              </Button>
            </div>
          </>
        );
      case "UsUserScanInProgressNoBreaches":
        return (
          <>
            <h3>
              {l10n.getString("dashboard-top-banner-scan-in-progress-title")}
            </h3>
            <p>
              {l10n.getString(
                "dashboard-top-banner-scan-in-progress-unresolved-description",
                {
                  unresolved_exposures:
                    bannerData.totalExposures -
                    bannerData.dataBrokerFixedExposuresNum -
                    bannerData.dataBreachFixedExposuresNum -
                    bannerData.dataBrokerInProgressExposuresNum,
                },
              )}
              <br />
              <br />
              {l10n.getString(
                "dashboard-top-banner-scan-in-progress-no-results-info",
              )}
            </p>
            <div className={styles.cta}>
              <Button href="/redesign/user/settings" small variant="primary">
                {l10n.getString(
                  "dashboard-top-banner-scan-in-progress-no-results-cta",
                )}
              </Button>
            </div>
          </>
        );
      case "UsUserScanInProgressUnresolvedBreaches":
        return (
          <>
            <h3>
              {l10n.getString("dashboard-top-banner-scan-in-progress-title")}
            </h3>
            <p>
              {l10n.getString(
                "dashboard-top-banner-scan-in-progress-unresolved-description",
                {
                  unresolved_exposures:
                    bannerData.totalExposures -
                    bannerData.dataBrokerFixedExposuresNum -
                    bannerData.dataBreachFixedExposuresNum -
                    bannerData.dataBrokerInProgressExposuresNum,
                },
              )}
              <br />
              <br />
              {l10n.getString(
                "dashboard-top-banner-scan-in-progress-fix-now-hint",
              )}
            </p>
            <div className={styles.cta}>
              <Button href={relevantGuidedStep.href} small variant="primary">
                {l10n.getString(
                  "dashboard-top-banner-scan-in-progress-results-found-cta",
                )}
              </Button>
            </div>
          </>
        );
      case "UsUserScanInProgressResolvedBreaches":
        return (
          <>
            <h3>
              {l10n.getString("dashboard-top-banner-scan-in-progress-title")}
            </h3>
            <p>
              {l10n.getString(
                "dashboard-top-banner-your-data-scan-in-progress-all-fixed-description",
                {
                  exposures_resolved_num:
                    bannerData.dataBrokerFixedExposuresNum +
                    bannerData.dataBreachFixedExposuresNum +
                    bannerData.dataBrokerInProgressExposuresNum,
                },
              )}
              <br />
              <br />
              {l10n.getString(
                "dashboard-top-banner-scan-in-progress-no-results-info",
              )}
            </p>
            <div className={styles.cta}>
              <Button href="/redesign/user/settings" small variant="primary">
                {l10n.getString(
                  "dashboard-top-banner-scan-in-progress-no-results-cta",
                )}
              </Button>
            </div>
          </>
        );
      default:
        // The above conditions should always match one of the possible dashboard states.
        console.warn("No matching condition for dashboard state found.");
        return null;
    }
  }

  return (
    <section
      className={styles.explainerContentWrapper}
      aria-label={l10n.getString("dashboard-top-banner-section-label")}
    >
      <div className={styles.explainerContent}>
        {getDashboardBannerContent({ userDashboardState, relevantGuidedStep })}
      </div>
    </section>
  );
};
