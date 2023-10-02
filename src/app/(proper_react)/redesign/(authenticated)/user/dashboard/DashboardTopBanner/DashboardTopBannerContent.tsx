/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { DashboardTopBannerProps } from ".";
import styles from "./DashboardTopBannerContent.module.scss";
import {
  StepLink,
  getRelevantGuidedSteps,
  guidedResolutionIsInProgress,
} from "../../../../../../functions/server/getRelevantGuidedSteps";
import { ProgressCard } from "../../../../../../components/client/ProgressCard";
import { Button } from "../../../../../../components/server/Button";
import {
  ExtendedReactLocalization,
  useL10n,
} from "../../../../../../hooks/l10n";
import PremiumButton from "../../../../../../components/client/PremiumButton";
import { DashboardSummary } from "../../../../../../functions/server/dashboard";

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

interface ContentConditionProps
  extends Omit<ContentProps, "relevantGuidedStep" | "onShowFixed"> {
  isRelevantGuidedStep: boolean;
}

const isMatchingContent = (
  contentProps: ContentProps,
  contentConditions: ContentConditionProps
) => {
  const { hasExposures, hasUnresolvedBreaches, hasUnresolvedBrokers } =
    contentConditions;
  // If a user does not have any exposures it’s also not possible to have unresolved ones.
  // This check is meant to avoid adding invalid conditions in `getTopBannerContent`.
  /* c8 ignore next 8 */
  if (
    (!hasExposures && hasUnresolvedBreaches) ||
    (!hasExposures && hasUnresolvedBrokers)
  ) {
    throw new Error(
      "Invalid combination of conditions: `hasExposures` can not be `false` if `hasUnresolvedBreaches` or `hasUnresolvedBrokers` is `true`."
    );
  }

  return Object.keys(contentConditions).every((conditionKey) => {
    if (conditionKey === "isRelevantGuidedStep") {
      return contentConditions["isRelevantGuidedStep"];
    }

    return (
      contentProps[conditionKey as keyof ContentProps] ===
      contentConditions[conditionKey as keyof ContentConditionProps]
    );
  });
};

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
  } = props;

  if (tabType === "fixed") {
    return (
      <ProgressCard
        resolvedByYou={bannerData.dataBreachFixedNum}
        autoRemoved={bannerData.dataBrokerFixedNum}
        totalNumExposures={bannerData.totalExposures}
      />
    );
  }

  const relevantGuidedStep = getRelevantGuidedSteps(
    stepDeterminationData
  ).current;

  // There should be a relevant next step for every user (even if it's just
  // going back to the dashboard), so we can't hit this line in tests (and
  // shouldn’t be able to in production either):
  /* c8 ignore next 3 */
  if (relevantGuidedStep === null) {
    return null;
  }

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

  return (
    <div className={styles.explainerContent}>
      <pre>{JSON.stringify(contentProps, null, 2)}</pre>
      {getTopBannerContent({ contentProps, bannerData, l10n })}
    </div>
  );
};

const getTopBannerContent = ({
  contentProps,
  bannerData,
  l10n,
}: {
  contentProps: ContentProps;
  bannerData: DashboardSummary;
  l10n: ExtendedReactLocalization;
}) => {
  const guidedStep = contentProps.relevantGuidedStep;

  if (
    /**
     * - Non-eligible Premium user
     * - No breaches
     */
    isMatchingContent(contentProps, {
      isRelevantGuidedStep: guidedStep.id === "Done",
      hasExposures: false,
      hasUnresolvedBreaches: false,
      hasUnresolvedBrokers: false,
      isEligibleForFreeScan: false,
      isEligibleForPremium: false,
      isPremiumUser: false,
      scanInProgress: false,
    })
  ) {
    return (
      <>
        <div>{"1"}</div>
        <h3>
          {l10n.getString("dashboard-top-banner-no-exposures-found-title")}
        </h3>
        <p>
          {l10n.getString(
            "dashboard-top-banner-non-us-no-exposures-found-description"
          )}
        </p>
        <div className={styles.cta}>
          <Button href="/redesign/user/settings" small variant="primary">
            {l10n.getString("dashboard-top-banner-monitor-more-cta")}
          </Button>
        </div>
      </>
    );
  }

  if (
    /**
     * - Non-eligible Premium user
     * - Unresolved breaches
     */
    isMatchingContent(contentProps, {
      isRelevantGuidedStep: guidedResolutionIsInProgress(guidedStep.id),
      hasExposures: true,
      hasUnresolvedBreaches: true,
      hasUnresolvedBrokers: false,
      isEligibleForFreeScan: false,
      isEligibleForPremium: false,
      isPremiumUser: false,
      scanInProgress: false,
    })
  ) {
    return (
      <>
        <div>{"3"}</div>
        <h3>
          {l10n.getString("dashboard-top-banner-protect-your-data-title")}
        </h3>
        <p>
          {l10n.getFragment(
            "dashboard-exposures-breaches-scan-progress-description",
            {
              vars: {
                exposures_total_num: bannerData.totalExposures,
                data_breach_total_num: bannerData.dataBreachTotalNum,
              },
              elems: {
                b: <strong />,
              },
            }
          )}
        </p>
        <div className={styles.cta}>
          <Button href={guidedStep.href} small variant="primary">
            {l10n.getString("dashboard-top-banner-protect-your-data-cta")}
          </Button>
        </div>
      </>
    );
  }

  if (
    /**
     * - Non-eligible Premium user
     * - Resolved breaches
     */
    isMatchingContent(contentProps, {
      isRelevantGuidedStep: guidedStep.id === "Done",
      hasExposures: true,
      hasUnresolvedBreaches: false,
      hasUnresolvedBrokers: false,
      isEligibleForFreeScan: false,
      isEligibleForPremium: false,
      isPremiumUser: false,
      scanInProgress: false,
    })
  ) {
    // YourDataIsProtectedNonEligiblePremiumUser
    return (
      <>
        <div>{"5"}</div>
        <h3>
          {l10n.getString("dashboard-top-banner-your-data-is-protected-title")}
        </h3>
        <p>
          {l10n.getString(
            "dashboard-top-banner-non-us-your-data-is-protected-description",
            {
              exposures_resolved_num:
                bannerData.totalExposures -
                bannerData.dataBreachFixedNum -
                bannerData.dataBrokerFixedNum,
            }
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
            {l10n.getString("dashboard-top-banner-your-data-is-protected-cta")}
          </Button>
        </div>
      </>
    );
  }

  if (
    /**
     * - US user
     * - Non-premium
     * - No breaches
     * - No scan
     */
    isMatchingContent(contentProps, {
      isRelevantGuidedStep: guidedStep.id === "StartScan",
      hasExposures: false,
      hasUnresolvedBreaches: false,
      hasUnresolvedBrokers: false,
      isEligibleForFreeScan: true,
      isEligibleForPremium: true,
      isPremiumUser: false,
      scanInProgress: false,
    }) ||
    /**
     * - US user
     * - Non-premium
     * - Unresolved breaches
     * - No scan
     */
    isMatchingContent(contentProps, {
      isRelevantGuidedStep: guidedStep.id === "StartScan",
      hasExposures: true,
      hasUnresolvedBreaches: true,
      hasUnresolvedBrokers: false,
      isEligibleForFreeScan: true,
      isEligibleForPremium: true,
      isPremiumUser: false,
      scanInProgress: false,
    }) ||
    /**
     * - US user
     * - Non-premium
     * - Resolved breaches
     * - No scan
     */
    isMatchingContent(contentProps, {
      isRelevantGuidedStep: guidedStep.id === "StartScan",
      hasExposures: true,
      hasUnresolvedBreaches: false,
      hasUnresolvedBrokers: false,
      isEligibleForFreeScan: true,
      isEligibleForPremium: true,
      isPremiumUser: false,
      scanInProgress: false,
    })
  ) {
    return (
      <>
        <div>{"8, 10, 12"}</div>
        <h3>
          {l10n.getString(
            "dashboard-top-banner-monitor-protects-your-even-more-title"
          )}
        </h3>
        <p>
          {l10n.getString(
            "dashboard-top-banner-monitor-protects-your-even-more-description",
            {
              data_broker_sites_total_num: parseInt(
                process.env.NEXT_PUBLIC_ONEREP_DATA_BROKER_COUNT as string,
                10
              ),
            }
          )}
        </p>
        <div className={styles.cta}>
          <Button href={guidedStep.href} small variant="primary">
            {l10n.getString(
              "dashboard-top-banner-monitor-protects-your-even-more-cta"
            )}
          </Button>
        </div>
        <br />
        <a href="https://mozilla.org/products/monitor/how-it-works/">
          {l10n.getString(
            "dashboard-top-banner-monitor-protects-your-even-more-learn-more"
          )}
        </a>
      </>
    );
  }

  if (
    /**
     * - US user
     * - Non-premium
     * - No breaches
     * - Scan: No results
     */
    isMatchingContent(contentProps, {
      isRelevantGuidedStep: guidedStep.id === "Done",
      hasExposures: false,
      hasUnresolvedBreaches: false,
      hasUnresolvedBrokers: false,
      isEligibleForFreeScan: false,
      isEligibleForPremium: true,
      isPremiumUser: false,
      scanInProgress: false,
    })
  ) {
    // NoExposuresFoundPremiumUpsell
    return (
      <>
        <div>{"13"}</div>
        <h3>
          {l10n.getString("dashboard-top-banner-no-exposures-found-title")}
        </h3>
        <p>
          {l10n.getString(
            "dashboard-top-banner-no-exposures-found-description",
            {
              data_broker_sites_total_num: parseInt(
                process.env.NEXT_PUBLIC_ONEREP_DATA_BROKER_COUNT as string,
                10
              ),
            }
          )}
        </p>
        <div className={styles.cta}>
          <Button href={guidedStep.href} small variant="primary">
            {l10n.getString("dashboard-top-banner-no-exposures-found-cta")}
          </Button>
        </div>
      </>
    );
  }

  if (
    /**
     * - US user
     * - Non-premium
     * - No breaches
     * - Scan: Unresolved and removal not started
     */
    isMatchingContent(contentProps, {
      isRelevantGuidedStep: guidedStep.id === "ScanResult",
      hasExposures: true,
      hasUnresolvedBreaches: false,
      hasUnresolvedBrokers: true,
      isEligibleForFreeScan: false,
      isEligibleForPremium: true,
      isPremiumUser: false,
      scanInProgress: false,
    }) ||
    /**
     * - US user
     * - Non-premium
     * - Unresolved breaches
     * - Scan: Unresolved
     */
    isMatchingContent(contentProps, {
      isRelevantGuidedStep: guidedStep.id === "ScanResult",
      hasExposures: true,
      hasUnresolvedBreaches: true,
      hasUnresolvedBrokers: false,
      isEligibleForFreeScan: false,
      isEligibleForPremium: true,
      isPremiumUser: false,
      scanInProgress: false,
    }) ||
    isMatchingContent(contentProps, {
      isRelevantGuidedStep: guidedStep.id === "ScanResult",
      hasExposures: true,
      hasUnresolvedBreaches: true,
      hasUnresolvedBrokers: true,
      isEligibleForFreeScan: false,
      isEligibleForPremium: false,
      isPremiumUser: true,
      scanInProgress: false,
    })
  ) {
    return (
      <>
        <div>{"15, 17, 23"}</div>
        <h3>
          {l10n.getString("dashboard-top-banner-protect-your-data-title")}
        </h3>
        <p>
          {l10n.getString(
            "dashboard-top-banner-protect-your-data-description",
            {
              data_breach_total_num: bannerData.totalExposures,
              data_broker_total_num: bannerData.dataBrokerTotalNum,
            }
          )}
        </p>
        <div className={styles.cta}>
          <Button href={guidedStep.href} small variant="primary">
            {l10n.getString("dashboard-top-banner-protect-your-data-cta")}
          </Button>
        </div>
      </>
    );
  }

  if (
    /**
     * - US user
     * - Non-premium
     * - No breaches
     * - Scan: Unresolved and removal started
     */
    (isMatchingContent(contentProps, {
      isRelevantGuidedStep: guidedResolutionIsInProgress(guidedStep.id),
      hasExposures: true,
      hasUnresolvedBreaches: false,
      hasUnresolvedBrokers: true,
      isEligibleForFreeScan: false,
      isEligibleForPremium: true,
      isPremiumUser: false,
      scanInProgress: false,
    }),
    /**
     * - US user
     * - Non-premium
     * - Unresolved breaches
     * - Scan: Resolved
     */
    isMatchingContent(contentProps, {
      isRelevantGuidedStep: guidedResolutionIsInProgress(guidedStep.id),
      hasExposures: true,
      hasUnresolvedBreaches: true,
      hasUnresolvedBrokers: false,
      isEligibleForFreeScan: false,
      isEligibleForPremium: true,
      isPremiumUser: false,
      scanInProgress: false,
    }))
  ) {
    return (
      <>
        <div>{"16, 18, 20, 31"}</div>
        <h3>
          {l10n.getString("dashboard-top-banner-lets-keep-protecting-title")}
        </h3>
        <p>
          {l10n.getString(
            "dashboard-top-banner-lets-keep-protecting-description",
            {
              remaining_exposures_total_num:
                bannerData.totalExposures -
                bannerData.dataBreachFixedNum -
                bannerData.dataBrokerFixedNum,
            }
          )}
        </p>
        <div className={styles.cta}>
          <Button href={guidedStep.href} small variant="primary">
            {l10n.getString("dashboard-top-banner-lets-keep-protecting-cta")}
          </Button>
        </div>
      </>
    );
  }

  if (
    /**
     * - US user
     * - Non-premium
     * - Resolved breaches
     * - Scan: No results
     */
    isMatchingContent(contentProps, {
      isRelevantGuidedStep: guidedStep.id === "Done",
      hasExposures: true,
      hasUnresolvedBreaches: false,
      hasUnresolvedBrokers: false,
      isEligibleForFreeScan: false,
      isEligibleForPremium: true,
      isPremiumUser: false,
      scanInProgress: false,
    })
  ) {
    return (
      <>
        <div>{"21, 28, 36"}</div>
        <h3>
          {l10n.getString("dashboard-top-banner-your-data-is-protected-title")}
        </h3>
        <p>
          {l10n.getString(
            "dashboard-top-banner-your-data-is-protected-all-fixed-description",
            {
              starting_exposure_total_num: bannerData.totalExposures,
            }
          )}
        </p>
        <div className={styles.cta}>
          <PremiumButton
            label={"dashboard-top-banner-your-data-is-protected-all-fixed-cta"}
          />
        </div>
      </>
    );
  }

  if (
    /**
     * - US user
     * - Non-premium
     * - Unresolved breaches
     * - Scan: Unresolved
     */
    isMatchingContent(contentProps, {
      isRelevantGuidedStep: guidedStep.id === "ScanResult",
      hasExposures: true,
      hasUnresolvedBreaches: true,
      hasUnresolvedBrokers: true,
      isEligibleForFreeScan: false,
      isEligibleForPremium: true,
      isPremiumUser: false,
      scanInProgress: false,
    }) ||
    /**
     * - US user
     * - Premium
     * - Unresolved breaches
     * - Scan: No results
     */
    isMatchingContent(contentProps, {
      isRelevantGuidedStep: guidedResolutionIsInProgress(guidedStep.id),
      hasExposures: true,
      hasUnresolvedBreaches: true,
      hasUnresolvedBrokers: false,
      isEligibleForFreeScan: false,
      isEligibleForPremium: false,
      isPremiumUser: true,
      scanInProgress: false,
    }) ||
    /**
     * - US user
     * - Premium
     * - No breaches
     * - Scan: Unresolved
     */
    isMatchingContent(contentProps, {
      isRelevantGuidedStep: guidedStep.id === "ScanResult",
      hasExposures: true,
      hasUnresolvedBreaches: false,
      hasUnresolvedBrokers: true,
      isEligibleForFreeScan: false,
      isEligibleForPremium: false,
      isPremiumUser: true,
      scanInProgress: false,
    })
  ) {
    return (
      <>
        <div>{"24, 27, 31, 32, 35, 45, 48 "}</div>
        <h3>
          {l10n.getString("dashboard-top-banner-lets-keep-protecting-title")}
        </h3>
        <p>
          {l10n.getString(
            "dashboard-top-banner-lets-keep-protecting-description",
            {
              remaining_exposures_total_num:
                bannerData.totalExposures -
                bannerData.dataBreachFixedNum -
                bannerData.dataBrokerFixedNum,
            }
          )}
        </p>
        <div className={styles.cta}>
          <Button href={guidedStep.href} small variant="primary">
            {l10n.getString("dashboard-top-banner-lets-keep-protecting-cta")}
          </Button>
        </div>
      </>
    );
  }

  if (
    /**
     * - US user
     * - Premium
     * - No breaches
     * - Scan: No results
     */
    isMatchingContent(contentProps, {
      isRelevantGuidedStep: guidedStep.id === "Done",
      hasExposures: false,
      hasUnresolvedBreaches: false,
      hasUnresolvedBrokers: false,
      isEligibleForFreeScan: false,
      isEligibleForPremium: false,
      isPremiumUser: true,
      scanInProgress: false,
    })
  ) {
    // NoExposuresFoundAddEmails
    return (
      <>
        <div>{"43"}</div>
        <h3>
          {l10n.getString("dashboard-top-banner-no-exposures-found-title")}
        </h3>
        <p>
          {l10n.getString(
            "dashboard-top-banner-no-exposures-found-description",
            {
              data_broker_sites_total_num: parseInt(
                process.env.NEXT_PUBLIC_ONEREP_DATA_BROKER_COUNT as string,
                10
              ),
            }
          )}
        </p>
        <div className={styles.cta}>
          <Button href="/redesign/user/settings" small variant="primary">
            {l10n.getString("dashboard-top-banner-monitor-more-cta")}
          </Button>
        </div>
      </>
    );
  }

  if (
    /**
     * - US user
     * - Premium
     * - No unresolved breaches
     * - Scan: Unresolved
     */
    isMatchingContent(contentProps, {
      isRelevantGuidedStep:
        guidedStep.id === "ScanResult" || guidedStep.id === "Done",
      hasExposures: true,
      hasUnresolvedBreaches: false,
      hasUnresolvedBrokers: false,
      isEligibleForFreeScan: false,
      isEligibleForPremium: false,
      isPremiumUser: true,
      scanInProgress: false,
    })
  ) {
    // YourDataIsProtectedPremiumUser
    return (
      <>
        <div>{"49"}</div>
        <h3>
          {l10n.getString("dashboard-top-banner-your-data-is-protected-title")}
        </h3>
        <p>
          {l10n.getString(
            "dashboard-top-banner-your-data-is-protected-description",
            {
              starting_exposure_total_num: bannerData.totalExposures,
            }
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
            {l10n.getString("dashboard-top-banner-your-data-is-protected-cta")}
          </Button>
        </div>
      </>
    );
  }

  if (
    /**
     * - US user
     * - Premium
     * - No unresolved breaches
     * - Scan: Running and no results
     */
    isMatchingContent(contentProps, {
      isRelevantGuidedStep: guidedStep.id === "ScanResult",
      hasExposures: false,
      hasUnresolvedBreaches: false,
      hasUnresolvedBrokers: false,
      isEligibleForFreeScan: false,
      isEligibleForPremium: false,
      isPremiumUser: true,
      scanInProgress: true,
    })
  ) {
    return (
      <>
        <h3>{l10n.getString("dashboard-top-banner-scan-in-progress-title")}</h3>
        <p>
          {l10n.getFragment(
            "dashboard-top-banner-scan-in-progress-description",
            {
              vars: {
                data_breach_total_num: bannerData.totalExposures,
              },
              elems: {
                b: <strong />,
              },
            }
          )}
          <br />
          <br />
          {l10n.getString(
            "dashboard-top-banner-scan-in-progress-fix-later-hint"
          )}
        </p>
      </>
    );
  }

  if (
    /**
     * - US user
     * - Premium
     * - No breaches
     * - Scan: Running and results found
     */
    isMatchingContent(contentProps, {
      isRelevantGuidedStep: guidedStep.id === "ScanResult",
      hasExposures: true,
      hasUnresolvedBreaches: false,
      hasUnresolvedBrokers: true,
      isEligibleForFreeScan: false,
      isEligibleForPremium: false,
      isPremiumUser: true,
      scanInProgress: true,
    }) ||
    /**
     * - US user
     * - Premium
     * - Unresolved breaches
     * - Scan: Running and no results
     */
    isMatchingContent(contentProps, {
      isRelevantGuidedStep: guidedStep.id === "ScanResult",
      hasExposures: true,
      hasUnresolvedBreaches: true,
      hasUnresolvedBrokers: false,
      isEligibleForFreeScan: false,
      isEligibleForPremium: false,
      isPremiumUser: true,
      scanInProgress: true,
    }) ||
    /**
     * - US user
     * - Premium
     * - Unresolved breaches
     * - Scan: Running and found results
     */
    isMatchingContent(contentProps, {
      isRelevantGuidedStep: guidedStep.id === "ScanResult",
      hasExposures: true,
      hasUnresolvedBreaches: true,
      hasUnresolvedBrokers: true,
      isEligibleForFreeScan: false,
      isEligibleForPremium: false,
      isPremiumUser: true,
      scanInProgress: true,
    })
  ) {
    return (
      <>
        <h3>{l10n.getString("dashboard-top-banner-scan-in-progress-title")}</h3>
        <p>
          {l10n.getFragment(
            "dashboard-top-banner-scan-in-progress-description",
            {
              vars: {
                data_breach_total_num: bannerData.totalExposures,
              },
              elems: {
                b: <strong />,
              },
            }
          )}
          <br />
          <br />
          {l10n.getString("dashboard-top-banner-scan-in-progress-fix-now-hint")}
        </p>
        <div className={styles.cta}>
          <Button href={guidedStep.href} small variant="primary">
            {l10n.getString("dashboard-top-banner-scan-in-progress-cta")}
          </Button>
        </div>
      </>
    );
  }

  // The above conditions should always match one of the possible dashboard states.
  console.warn("No matching condition for dashboard state found.");
  return null;
};
