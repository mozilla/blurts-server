/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { useOverlayTriggerState } from "react-stately";
import { useOverlayTrigger } from "react-aria";
import { DashboardTopBannerProps } from "./index";
import styles from "./DashboardTopBannerContent.module.scss";
import {
  UserDashboardState,
  getUserDashboardState,
} from "../getUserDashboardState";
import {
  StepLink,
  getNextGuidedStep,
} from "../../../../../../../functions/server/getRelevantGuidedSteps";
import { ProgressCard } from "../../../../../../../components/client/ProgressCard";
import { Button } from "../../../../../../../components/client/Button";
import { useL10n } from "../../../../../../../hooks/l10n";
import { UpsellLinkButton } from "../../../../../../../components/client/toolbar/UpsellBadge";
import { WaitlistDialog } from "../../../../../../../components/client/SubscriberWaitlistDialog";
import { useTelemetry } from "../../../../../../../hooks/useTelemetry";
import {
  CONST_ONEREP_DATA_BROKER_COUNT,
  CONST_ONEREP_MAX_SCANS_THRESHOLD,
} from "../../../../../../../../constants";
import Link from "next/link";

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
  const recordTelemetry = useTelemetry();

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
  } = props;

  const waitlistDialogState = useOverlayTriggerState({});
  const waitlistDialogTrigger = useOverlayTrigger(
    { type: "dialog" },
    waitlistDialogState,
  );

  if (tabType === "fixed") {
    return (
      <ProgressCard
        isPremiumUser={isPremiumUser}
        isEligibleForPremium={isEligibleForPremium}
        resolvedByYou={
          bannerData.dataBrokerManuallyResolvedDataPointsNum +
          bannerData.dataBreachFixedDataPointsNum
        }
        autoRemoved={bannerData.dataBrokerAutoFixedDataPointsNum}
        inProgress={bannerData.dataBrokerInProgressDataPointsNum}
      />
    );
  }

  const relevantGuidedStep = getNextGuidedStep(
    stepDeterminationData,
    props.enabledFeatureFlags,
  );

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
              <Button
                href="/user/settings"
                small
                variant="primary"
                onPress={() => {
                  recordTelemetry("ctaButton", "click", {
                    button_id: "non_eligible_premium_no_breaches",
                  });
                }}
              >
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
                "dashboard-top-banner-non-us-protect-your-data-description-line1",
                {
                  exposures_unresolved_num:
                    bannerData.totalDataPointsNum -
                    bannerData.dataBrokerAutoFixedDataPointsNum -
                    bannerData.dataBreachFixedDataPointsNum -
                    bannerData.dataBrokerInProgressDataPointsNum -
                    bannerData.dataBrokerManuallyResolvedDataPointsNum,
                },
              )}{" "}
              {l10n.getString(
                "dashboard-top-banner-non-us-protect-your-data-description-line2",
                {
                  data_breach_unresolved_num:
                    bannerData.dataBreachUnresolvedNum,
                },
              )}
            </p>
            <div className={styles.cta}>
              <Button
                href={relevantGuidedStep.href}
                small
                variant="primary"
                onPress={() => {
                  recordTelemetry("ctaButton", "click", {
                    button_id: "non_eligible_premium_unresolved_breaches",
                  });
                }}
              >
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
                  exposures_resolved_num: bannerData.totalDataPointsNum,
                },
              )}
            </p>
            <div className={styles.cta}>
              <Button
                onPress={() => {
                  contentProps.onShowFixed();
                  recordTelemetry("ctaButton", "click", {
                    button_id: "non_eligible_premium_resolved_breaches",
                  });
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
              {props.enabledFeatureFlags.includes("MaskDataBrokerCount")
                ? l10n.getString(
                    "dashboard-top-banner-monitor-protects-your-even-more-description-masked",
                  )
                : l10n.getString(
                    "dashboard-top-banner-monitor-protects-your-even-more-description",
                    {
                      data_broker_sites_total_num:
                        CONST_ONEREP_DATA_BROKER_COUNT,
                    },
                  )}
            </p>
            <div className={styles.cta}>
              {!props.enabledFeatureFlags.includes("DisableOneRepScans") &&
              (typeof props.totalNumberOfPerformedScans === "undefined" ||
                props.totalNumberOfPerformedScans <
                  CONST_ONEREP_MAX_SCANS_THRESHOLD) ? (
                <Button
                  href="/user/welcome/free-scan?referrer=dashboard"
                  small
                  variant="primary"
                  onPress={() => {
                    recordTelemetry("ctaButton", "click", {
                      button_id: `us_non_premium_no_scan${
                        contentProps.hasUnresolvedBreaches
                          ? "_unresolved_breaches"
                          : ""
                      }`,
                    });
                  }}
                >
                  {l10n.getString(
                    "dashboard-top-banner-monitor-protects-your-even-more-cta",
                  )}
                </Button>
              ) : (
                <>
                  <Button
                    variant={"primary"}
                    small
                    {...waitlistDialogTrigger.triggerProps}
                  >
                    {l10n.getString(
                      "dashboard-top-banner-monitor-protects-your-even-more-cta",
                    )}
                  </Button>
                  <WaitlistDialog
                    dialogTriggerState={waitlistDialogState}
                    {...waitlistDialogTrigger.triggerProps}
                  />
                </>
              )}
            </div>
            <Link
              data-testid="learn-more-link-to-how-it-works"
              href="/how-it-works"
              target="_blank"
              onClick={() =>
                recordTelemetry("link", "click", {
                  link_id: "learn_more",
                })
              }
            >
              {l10n.getString(
                "dashboard-top-banner-monitor-protects-your-even-more-learn-more",
              )}
            </Link>
          </>
        );
      case "UsUserNonPremiumNoExposures":
        return (
          <>
            <h3>
              {l10n.getString("dashboard-top-banner-no-exposures-found-title")}
            </h3>
            <p>
              {props.enabledFeatureFlags.includes("MaskDataBrokerCount")
                ? l10n.getString(
                    "dashboard-top-banner-no-exposures-found-description-masked",
                  )
                : l10n.getString(
                    "dashboard-top-banner-no-exposures-found-description",
                    {
                      data_broker_sites_total_num:
                        CONST_ONEREP_DATA_BROKER_COUNT,
                    },
                  )}
            </p>
            <p>
              {l10n.getString(
                "dashboard-top-banner-no-exposures-found-upsell-info",
              )}
            </p>
            <div className={styles.cta}>
              <UpsellLinkButton
                variant="primary"
                small
                enabledFeatureFlags={props.enabledFeatureFlags}
                eventData={{
                  button_id: "us_non_premium_no_exposures",
                }}
              >
                {l10n.getString("dashboard-top-banner-no-exposures-found-cta")}
              </UpsellLinkButton>
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
                    bannerData.dataBrokerAutoFixedNum -
                    bannerData.dataBrokerInProgressNum,
                },
              )}
            </p>
            <div className={styles.cta}>
              <Button
                href={relevantGuidedStep.href}
                small
                variant="primary"
                onPress={() => {
                  let buttonId = "us_non_premium_yes_scan";
                  if (contentProps.hasUnresolvedBreaches)
                    // Plus users will no longer have unresolved scan results,
                    // as we'll send opt-out requests for them - i.e. there's
                    // nothing for the user to do. That means that there is no
                    // more code path that will hit this line: instead this
                    // combination will result in `UsUserNonPremiumNoExposures`.
                    // Ideally, we'd narrow down the different permutations to
                    // remove code that's no longer relevant, but to minimise
                    // disruptions and potential bugs, we're leaving it for now:
                    /* c8 ignore next */
                    buttonId = buttonId.concat("_unresolved_breaches");
                  if (contentProps.hasUnresolvedBrokers)
                    buttonId = buttonId.concat("_unresolved_brokers");
                  recordTelemetry("ctaButton", "click", {
                    button_id: buttonId,
                  });
                }}
              >
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
                    bannerData.totalDataPointsNum -
                    bannerData.dataBreachFixedDataPointsNum -
                    bannerData.dataBrokerAutoFixedDataPointsNum -
                    bannerData.dataBrokerInProgressDataPointsNum -
                    bannerData.dataBrokerManuallyResolvedDataPointsNum,
                },
              )}
            </p>
            <div className={styles.cta}>
              <Button
                href={relevantGuidedStep.href}
                small
                variant="primary"
                onPress={() => {
                  let buttonId = "us_non_premium_yes_scan";
                  if (contentProps.hasUnresolvedBreaches)
                    buttonId = buttonId.concat("_unresolved_breaches");
                  recordTelemetry("ctaButton", "click", {
                    button_id: buttonId,
                  });
                }}
              >
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
                  starting_exposure_total_num: bannerData.totalDataPointsNum,
                },
              )}
            </p>
            <div className={styles.cta}>
              <UpsellLinkButton
                variant="primary"
                small
                enabledFeatureFlags={props.enabledFeatureFlags}
                eventData={{
                  button_id: "us_non_premium_scans_resolved",
                }}
              >
                {l10n.getString("dashboard-top-banner-no-exposures-found-cta")}
              </UpsellLinkButton>
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
                    bannerData.totalDataPointsNum -
                    bannerData.dataBreachFixedDataPointsNum -
                    bannerData.dataBrokerAutoFixedDataPointsNum -
                    bannerData.dataBrokerInProgressDataPointsNum -
                    bannerData.dataBrokerManuallyResolvedDataPointsNum,
                },
              )}
            </p>
            <div className={styles.cta}>
              <Button
                href={relevantGuidedStep.href}
                small
                variant="primary"
                onPress={() => {
                  recordTelemetry("ctaButton", "click", {
                    button_id: `us_${isPremiumUser ? "" : "non_"}premium${
                      // Plus users will no longer have unresolved scan results,
                      // as we'll send opt-out requests for them - i.e. there's
                      // nothing for the user to do. That means that there is no
                      // more code path that will hit this line: instead this
                      // combination will result in
                      // `UsUserNonPremiumWithScanRemovalInProgress`.
                      // Ideally, we'd narrow down the different permutations to
                      // remove code that's no longer relevant, but to minimise
                      // disruptions and potential bugs, we're leaving it for now:
                      /* c8 ignore next 3 */
                      contentProps.hasUnresolvedBreaches
                        ? "_unresolved_breaches"
                        : ""
                    }${
                      contentProps.hasUnresolvedBrokers
                        ? "_unresolved_brokers"
                        : ""
                    }`,
                  });
                }}
              >
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
                  data_broker_sites_total_num: CONST_ONEREP_DATA_BROKER_COUNT,
                },
              )}
            </p>
            <div className={styles.cta}>
              <Button
                href="/user/settings"
                small
                variant="primary"
                onPress={() => {
                  recordTelemetry("ctaButton", "click", {
                    button_id: "us_premium_yes_scan_no_exposures",
                  });
                }}
              >
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
                  starting_exposure_total_num: bannerData.totalDataPointsNum,
                },
              )}
            </p>
            <div className={styles.cta}>
              <Button
                onPress={() => {
                  contentProps.onShowFixed();
                  recordTelemetry("ctaButton", "click", {
                    button_id: "us_premium_yes_scan_all_resolved",
                  });
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
                    bannerData.totalDataPointsNum -
                    bannerData.dataBrokerAutoFixedDataPointsNum -
                    bannerData.dataBreachFixedDataPointsNum -
                    bannerData.dataBrokerInProgressDataPointsNum -
                    bannerData.dataBrokerManuallyResolvedDataPointsNum,
                },
              )}
              <br />
              <br />
              {l10n.getString(
                "dashboard-top-banner-scan-in-progress-no-results-info",
              )}
            </p>
            <div className={styles.cta}>
              <Button
                href="/user/settings"
                small
                variant="primary"
                onPress={() => {
                  recordTelemetry("ctaButton", "click", {
                    button_id: `us_${
                      isPremiumUser ? "" : "non_"
                    }premium_scan_in_progress_no_breaches`,
                  });
                }}
              >
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
                    bannerData.totalDataPointsNum -
                    bannerData.dataBrokerAutoFixedDataPointsNum -
                    bannerData.dataBreachFixedDataPointsNum -
                    bannerData.dataBrokerInProgressDataPointsNum -
                    bannerData.dataBrokerManuallyResolvedDataPointsNum,
                },
              )}
              <br />
              <br />
              {l10n.getString(
                "dashboard-top-banner-scan-in-progress-fix-now-hint",
              )}
            </p>
            <div className={styles.cta}>
              <Button
                href={relevantGuidedStep.href}
                small
                variant="primary"
                onPress={() => {
                  recordTelemetry("ctaButton", "click", {
                    button_id: `us_${
                      isPremiumUser ? "" : "non_"
                    }premium_scan_in_progress_unresolved_breaches`,
                  });
                }}
              >
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
                    bannerData.dataBrokerAutoFixedDataPointsNum +
                    bannerData.dataBreachFixedDataPointsNum +
                    bannerData.dataBrokerInProgressDataPointsNum -
                    bannerData.dataBrokerManuallyResolvedDataPointsNum,
                },
              )}
              <br />
              <br />
              {l10n.getString(
                "dashboard-top-banner-scan-in-progress-no-results-info",
              )}
            </p>
            <div className={styles.cta}>
              <Button
                href="/user/settings"
                small
                variant="primary"
                onPress={() => {
                  recordTelemetry("ctaButton", "click", {
                    button_id: `us_${
                      isPremiumUser ? "" : "non_"
                    }premium_scan_in_progress_resolved_breaches`,
                  });
                }}
              >
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
