/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

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
import { useTelemetry } from "../../../../../../../hooks/useTelemetry";

export interface ContentProps {
  relevantGuidedStep: StepLink;
  hasExposures: boolean;
  hasUnresolvedBreaches: boolean;
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
    isPremiumUser,
    onShowFixed,
  } = props;

  if (tabType === "fixed") {
    return (
      <ProgressCard
        isPremiumUser={isPremiumUser}
        resolvedByYou={bannerData.dataBreachFixedDataPointsNum}
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
                    bannerData.dataBreachFixedDataPointsNum,
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
