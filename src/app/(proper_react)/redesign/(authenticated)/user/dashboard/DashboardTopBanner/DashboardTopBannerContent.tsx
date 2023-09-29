/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { DashboardTopBannerProps } from ".";
import styles from "./DashboardTopBannerContent.module.scss";
import {
  StepLink,
  getRelevantGuidedSteps,
} from "../../../../../../functions/server/getRelevantGuidedSteps";
import { ProgressCard } from "../../../../../../components/client/ProgressCard";

export interface ContentProps {
  relevantGuidedStepId: StepLink["id"];
  isPremiumUser: boolean;
  isEligibleForPremium: boolean;
  isEligibleForFreeScan: boolean;
  hasExposures: boolean;
  hasUnresolvedExposures: boolean;
  scanInProgress: boolean;
}

interface ContentConditionProps
  extends Omit<ContentProps, "relevantGuidedStepId"> {
  relevantGuidedStepId: Array<StepLink["id"]>;
}

type DashboardTopBannerContentProps = Omit<
  DashboardTopBannerProps,
  "onShowFixed"
>;

const isMatchingContent = (
  contentProps: ContentProps,
  contentConditions: ContentConditionProps
) =>
  Object.keys(contentConditions).every((conditionKey) => {
    if (conditionKey === "relevantGuidedStepId") {
      return contentConditions[conditionKey].includes(
        contentProps[conditionKey]
      );
    }

    return (
      contentProps[conditionKey as keyof ContentProps] ===
      contentConditions[conditionKey as keyof ContentConditionProps]
    );
  });

export const DashboardTopBannerContent = (
  props: DashboardTopBannerContentProps
) => {
  if (props.tabType === "fixed") {
    return (
      <ProgressCard
        resolvedByYou={props.bannerData.dataBreachFixedNum}
        autoRemoved={props.bannerData.dataBrokerFixedNum}
        totalNumExposures={props.bannerData.totalExposures}
      />
    );
  }

  const relevantGuidedStep = getRelevantGuidedSteps(
    props.stepDeterminationData
  ).current;

  // There should be a relevant next step for every user (even if it's just
  // going back to the dashboard), so we can't hit this line in tests (and
  // shouldn’t be able to in production either):
  /* c8 ignore next 3 */
  if (relevantGuidedStep === null) {
    return null;
  }

  const contentProps = {
    relevantGuidedStepId: relevantGuidedStep.id,
    hasExposures: props.hasExposures,
    hasUnresolvedExposures: props.hasUnresolvedExposures,
    isEligibleForFreeScan: props.isEligibleForFreeScan,
    isEligibleForPremium: props.isEligibleForPremium,
    isPremiumUser: props.isPremiumUser,
    scanInProgress: props.scanInProgress,
  };

  return (
    <div className={styles.explainerContent}>
      <pre>{JSON.stringify(contentProps, null, 2)}</pre>
      {getTopBannerContent(contentProps)}
    </div>
  );
};

const getTopBannerContent = (contentProps: ContentProps) => {
  if (
    /**
     * - Free user
     * - Not eligible for Premium
     * - No breaches
     */
    isMatchingContent(contentProps, {
      relevantGuidedStepId: ["Done"],
      hasExposures: false,
      hasUnresolvedExposures: false,
      isEligibleForFreeScan: false,
      isEligibleForPremium: false,
      isPremiumUser: false,
      scanInProgress: false,
    })
  ) {
    return "1";
  }

  if (
    /**
     * - Free user
     * - Not eligible for Premium
     * - Unresolved breaches
     */
    isMatchingContent(contentProps, {
      relevantGuidedStepId: [
        "HighRiskSsn",
        "HighRiskCreditCard",
        "HighRiskBankAccount",
        "HighRiskPin",
        "LeakedPasswordsPassword",
        "LeakedPasswordsSecurityQuestion",
        "SecurityTipsPhone",
        "SecurityTipsEmail",
        "SecurityTipsIp",
      ],
      hasExposures: true,
      hasUnresolvedExposures: true,
      isEligibleForFreeScan: false,
      isEligibleForPremium: false,
      isPremiumUser: false,
      scanInProgress: false,
    })
  ) {
    return "3";
  }

  if (
    /**
     * - Free user
     * - Not eligible for Premium
     * - Resolved breaches
     */
    isMatchingContent(contentProps, {
      relevantGuidedStepId: ["Done"],
      hasExposures: true,
      hasUnresolvedExposures: false,
      isEligibleForFreeScan: false,
      isEligibleForPremium: false,
      isPremiumUser: false,
      scanInProgress: false,
    })
  ) {
    return "5";
  }

  if (
    /**
     * - US user
     * - Non-premium
     * - No breaches
     * - No scan
     */
    isMatchingContent(contentProps, {
      relevantGuidedStepId: ["StartScan"],
      hasExposures: false,
      hasUnresolvedExposures: false,
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
      relevantGuidedStepId: ["StartScan"],
      hasExposures: true,
      hasUnresolvedExposures: true,
      isEligibleForFreeScan: true,
      isEligibleForPremium: true,
      isPremiumUser: false,
      scanInProgress: false,
    })
  ) {
    return "8, 10";
  }

  if (
    /**
     * - US user
     * - Non-premium
     * - Resolved breaches
     * - No scan
     */
    isMatchingContent(contentProps, {
      relevantGuidedStepId: ["StartScan"],
      hasExposures: true,
      hasUnresolvedExposures: false,
      isEligibleForFreeScan: true,
      isEligibleForPremium: true,
      isPremiumUser: false,
      scanInProgress: false,
    })
  ) {
    return "12";
  }

  if (
    /**
     * - US user
     * - Non-premium
     * - No breaches
     * - Scan: No results
     */
    isMatchingContent(contentProps, {
      relevantGuidedStepId: ["Done"],
      hasExposures: false,
      hasUnresolvedExposures: false,
      isEligibleForFreeScan: false,
      isEligibleForPremium: true,
      isPremiumUser: false,
      scanInProgress: false,
    }) ||
    /**
     * - US user
     * - Non-premium
     * - Unresolved breaches
     * - Scan: No results
     */
    isMatchingContent(contentProps, {
      relevantGuidedStepId: ["Done"],
      hasExposures: true,
      hasUnresolvedExposures: true,
      isEligibleForFreeScan: false,
      isEligibleForPremium: true,
      isPremiumUser: false,
      scanInProgress: false,
    })
  ) {
    return "13, 14";
  }

  if (
    /**
     * - US user
     * - Non-premium
     * - Resolved breaches
     * - Scan: No results
     */
    isMatchingContent(contentProps, {
      relevantGuidedStepId: ["Done"],
      hasExposures: true,
      hasUnresolvedExposures: false,
      isEligibleForFreeScan: false,
      isEligibleForPremium: true,
      isPremiumUser: false,
      scanInProgress: false,
    })
  ) {
    return "21, 28, 36";
  }

  if (
    /**
     * - US user
     * - Non-premium
     * - Unresolved breaches
     * - Scan: Unresolved
     */
    isMatchingContent(contentProps, {
      relevantGuidedStepId: ["ScanResult"],
      hasExposures: true,
      hasUnresolvedExposures: true,
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
      relevantGuidedStepId: [
        "HighRiskSsn",
        "HighRiskCreditCard",
        "HighRiskBankAccount",
        "HighRiskPin",
        "LeakedPasswordsPassword",
        "LeakedPasswordsSecurityQuestion",
        "SecurityTipsPhone",
        "SecurityTipsEmail",
        "SecurityTipsIp",
      ],
      hasExposures: true,
      hasUnresolvedExposures: true,
      isEligibleForFreeScan: false,
      isEligibleForPremium: false,
      isPremiumUser: true,
      scanInProgress: false,
    })
  ) {
    return "24, 27, 31, 32, 35, 45";
  }

  if (
    /**
     * - US user
     * - Premium
     * - No breaches
     * - Scan: No results
     */
    isMatchingContent(contentProps, {
      relevantGuidedStepId: ["Done"],
      hasExposures: false,
      hasUnresolvedExposures: false,
      isEligibleForFreeScan: false,
      isEligibleForPremium: false,
      isPremiumUser: true,
      scanInProgress: false,
    })
  ) {
    return "43";
  }

  return ":(";
};
