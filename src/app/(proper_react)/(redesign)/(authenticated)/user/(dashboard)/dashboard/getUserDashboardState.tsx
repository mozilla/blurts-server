/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { ContentProps } from "./DashboardTopBanner/DashboardTopBannerContent";
import { isGuidedResolutionInProgress } from "../../../../../../functions/server/getRelevantGuidedSteps";

export type UserDashboardState =
  | "NonEligiblePremiumUserNoBreaches"
  | "NonEligiblePremiumUserUnresolvedBreaches"
  | "NonEligiblePremiumUserResolvedBreaches"
  | "UsUserNonPremiumWithoutScan"
  | "UsUserNonPremiumNoExposures"
  | "UsUserNonPremiumWithScanUnresolvedExposures"
  | "UsUserNonPremiumWithScanRemovalInProgress"
  | "UsUserNonPremiumWithScanAllResolved"
  | "UsUserPremiumOrNonPremiumWithScanUnresolvedExposures"
  | "UsUserPremiumWithScanNoExposures"
  | "UsUserPremiumWithScanAllResolved"
  | "UsUserScanInProgressNoBreaches"
  | "UsUserScanInProgressUnresolvedBreaches"
  | "UsUserScanInProgressResolvedBreaches"
  | "InvalidUserState";

interface ContentConditionProps
  extends Omit<ContentProps, "relevantGuidedStep" | "onShowFixed"> {
  isRelevantGuidedStep: boolean;
}

const isMatchingContent = (
  contentProps: ContentProps,
  contentConditions: ContentConditionProps,
) => {
  const { hasExposures, hasUnresolvedBreaches, hasUnresolvedBrokers } =
    contentConditions;
  // If a user does not have any exposures it’s also not possible to have unresolved ones.
  // This check is meant to avoid adding invalid conditions in `getUserDashboardState`.
  /* c8 ignore next 8 */
  if (
    (!hasExposures && hasUnresolvedBreaches) ||
    (!hasExposures && hasUnresolvedBrokers)
  ) {
    throw new Error(
      "Invalid combination of conditions: `hasExposures` can not be `false` if `hasUnresolvedBreaches` or `hasUnresolvedBrokers` is `true`.",
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

export const getUserDashboardState = (
  contentProps: ContentProps,
): UserDashboardState => {
  const { relevantGuidedStep } = contentProps;

  if (
    /**
     * - Non-eligible Premium user
     * - No breaches
     */
    isMatchingContent(contentProps, {
      isRelevantGuidedStep: relevantGuidedStep.id === "Done",
      hasExposures: false,
      hasUnresolvedBreaches: false,
      hasUnresolvedBrokers: false,
      isEligibleForFreeScan: false,
      isEligibleForPremium: false,
      isPremiumUser: false,
      scanInProgress: false,
    })
  ) {
    return "NonEligiblePremiumUserNoBreaches";
  }

  if (
    /**
     * - Non-eligible Premium user
     * - Unresolved breaches
     */
    isMatchingContent(contentProps, {
      isRelevantGuidedStep: isGuidedResolutionInProgress(relevantGuidedStep.id),
      hasExposures: true,
      hasUnresolvedBreaches: true,
      hasUnresolvedBrokers: false,
      isEligibleForFreeScan: false,
      isEligibleForPremium: false,
      isPremiumUser: false,
      scanInProgress: false,
    })
  ) {
    return "NonEligiblePremiumUserUnresolvedBreaches";
  }

  if (
    /**
     * - Non-eligible Premium user
     * - Resolved breaches
     */
    isMatchingContent(contentProps, {
      isRelevantGuidedStep: relevantGuidedStep.id === "Done",
      hasExposures: true,
      hasUnresolvedBreaches: false,
      hasUnresolvedBrokers: false,
      isEligibleForFreeScan: false,
      isEligibleForPremium: false,
      isPremiumUser: false,
      scanInProgress: false,
    })
  ) {
    return "NonEligiblePremiumUserResolvedBreaches";
  }

  if (
    /**
     * - US user
     * - Non-Premium
     * - No breaches
     * - No scan
     */
    isMatchingContent(contentProps, {
      isRelevantGuidedStep: relevantGuidedStep.id === "Scan",
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
     * - Non-Premium
     * - Unresolved breaches
     * - No scan
     */
    isMatchingContent(contentProps, {
      isRelevantGuidedStep: relevantGuidedStep.id === "Scan",
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
     * - Non-Premium
     * - Resolved breaches
     * - No scan
     */
    isMatchingContent(contentProps, {
      isRelevantGuidedStep: relevantGuidedStep.id === "Scan",
      hasExposures: true,
      hasUnresolvedBreaches: false,
      hasUnresolvedBrokers: false,
      isEligibleForFreeScan: true,
      isEligibleForPremium: true,
      isPremiumUser: false,
      scanInProgress: false,
    })
  ) {
    return "UsUserNonPremiumWithoutScan";
  }

  if (
    /**
     * - US user
     * - Non-Premium
     * - No breaches
     * - Scan: No results
     */
    isMatchingContent(contentProps, {
      isRelevantGuidedStep: relevantGuidedStep.id === "Done",
      hasExposures: false,
      hasUnresolvedBreaches: false,
      hasUnresolvedBrokers: false,
      isEligibleForFreeScan: false,
      isEligibleForPremium: true,
      isPremiumUser: false,
      scanInProgress: false,
    })
  ) {
    return "UsUserNonPremiumNoExposures";
  }

  if (
    /**
     * - US user
     * - Non-Premium
     * - No breaches
     * - Scan: Unresolved and removal not started
     */
    isMatchingContent(contentProps, {
      isRelevantGuidedStep: relevantGuidedStep.id === "Scan",
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
     * - Non-Premium
     * - Unresolved breaches
     * - Scan: Unresolved
     */
    isMatchingContent(contentProps, {
      isRelevantGuidedStep: relevantGuidedStep.id === "Scan",
      hasExposures: true,
      hasUnresolvedBreaches: true,
      hasUnresolvedBrokers: false,
      isEligibleForFreeScan: false,
      isEligibleForPremium: true,
      isPremiumUser: false,
      scanInProgress: false,
    })
  ) {
    return "UsUserNonPremiumWithScanUnresolvedExposures";
  }

  if (
    /**
     * - US user
     * - Non-Premium
     * - No breaches
     * - Scan: Unresolved and removal started
     */
    (isMatchingContent(contentProps, {
      isRelevantGuidedStep: isGuidedResolutionInProgress(relevantGuidedStep.id),
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
     * - Non-Premium
     * - Unresolved breaches
     * - Scan: Resolved
     */
    isMatchingContent(contentProps, {
      isRelevantGuidedStep: isGuidedResolutionInProgress(relevantGuidedStep.id),
      hasExposures: true,
      hasUnresolvedBreaches: true,
      hasUnresolvedBrokers: false,
      isEligibleForFreeScan: false,
      isEligibleForPremium: true,
      isPremiumUser: false,
      scanInProgress: false,
    }))
  ) {
    return "UsUserNonPremiumWithScanRemovalInProgress";
  }

  if (
    /**
     * - US user
     * - Non-Premium
     * - Resolved breaches
     * - Scan: No results
     */
    isMatchingContent(contentProps, {
      isRelevantGuidedStep: relevantGuidedStep.id === "Done",
      hasExposures: true,
      hasUnresolvedBreaches: false,
      hasUnresolvedBrokers: false,
      isEligibleForFreeScan: false,
      isEligibleForPremium: true,
      isPremiumUser: false,
      scanInProgress: false,
    })
  ) {
    return "UsUserNonPremiumWithScanAllResolved";
  }

  if (
    /**
     * - US user
     * - Non-Premium
     * - Unresolved breaches
     * - Scan: Unresolved
     */
    isMatchingContent(contentProps, {
      isRelevantGuidedStep: relevantGuidedStep.id === "Scan",
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
      isRelevantGuidedStep: isGuidedResolutionInProgress(relevantGuidedStep.id),
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
     * - Unresolved breaches
     * - Scan: Unresolved
     */
    isMatchingContent(contentProps, {
      isRelevantGuidedStep:
        relevantGuidedStep.id === "Scan" ||
        relevantGuidedStep.id === "DataBrokerManualRemoval",
      hasExposures: true,
      hasUnresolvedBreaches: true,
      hasUnresolvedBrokers: true,
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
      isRelevantGuidedStep:
        relevantGuidedStep.id === "Scan" ||
        relevantGuidedStep.id === "DataBrokerManualRemoval",
      hasExposures: true,
      hasUnresolvedBreaches: false,
      hasUnresolvedBrokers: true,
      isEligibleForFreeScan: false,
      isEligibleForPremium: false,
      isPremiumUser: true,
      scanInProgress: false,
    }) ||
    /**
     * - US user
     * - Non-premium
     * - With exposures
     * - No breaches
     * - Scan: Resolved
     */
    isMatchingContent(contentProps, {
      isRelevantGuidedStep: relevantGuidedStep.id === "DataBrokerManualRemoval", // The guided step needs to be relevant
      hasExposures: true,
      hasUnresolvedBreaches: false,
      hasUnresolvedBrokers: true,
      isEligibleForFreeScan: false,
      isEligibleForPremium: true,
      isPremiumUser: false,
      scanInProgress: false,
    })
  ) {
    return "UsUserPremiumOrNonPremiumWithScanUnresolvedExposures";
  }
  if (
    /**
     * - US user
     * - Premium
     * - No breaches
     * - Scan: No results
     */
    isMatchingContent(contentProps, {
      isRelevantGuidedStep: relevantGuidedStep.id === "Done",
      hasExposures: false,
      hasUnresolvedBreaches: false,
      hasUnresolvedBrokers: false,
      isEligibleForFreeScan: false,
      isEligibleForPremium: false,
      isPremiumUser: true,
      scanInProgress: false,
    })
  ) {
    return "UsUserPremiumWithScanNoExposures";
  }

  if (
    /**
     * - US user
     * - Premium
     * - No unresolved breaches
     * - Scan: Resolved
     */
    isMatchingContent(contentProps, {
      isRelevantGuidedStep:
        isGuidedResolutionInProgress(relevantGuidedStep.id) ||
        relevantGuidedStep.id === "Done",
      hasExposures: true,
      hasUnresolvedBreaches: false,
      hasUnresolvedBrokers: false,
      isEligibleForFreeScan: false,
      isEligibleForPremium: false,
      isPremiumUser: true,
      scanInProgress: false,
    })
  ) {
    return "UsUserPremiumWithScanAllResolved";
  }

  if (
    /**
     * - US user
     * - Non-Premium
     * - No breaches
     * - Scan: In progress (and no unresolved scan results yet)
     */
    isMatchingContent(contentProps, {
      isRelevantGuidedStep: relevantGuidedStep.id === "Done",
      hasExposures: false,
      hasUnresolvedBreaches: false,
      hasUnresolvedBrokers: false,
      isEligibleForFreeScan: false,
      isEligibleForPremium: true,
      isPremiumUser: false,
      scanInProgress: true,
    }) ||
    /**
     * - US user
     * - Non-Premium
     * - No breaches
     * - Scan: In progress (although some unresolved scan results have already appeared)
     */
    isMatchingContent(contentProps, {
      isRelevantGuidedStep: relevantGuidedStep.id === "Done",
      hasExposures: true,
      hasUnresolvedBreaches: false,
      hasUnresolvedBrokers: true,
      isEligibleForFreeScan: false,
      isEligibleForPremium: true,
      isPremiumUser: false,
      scanInProgress: true,
    }) ||
    /**
     * - US user
     * - Premium
     * - No breaches
     * - Scan: In progress (and no unresolved scan results yet)
     */
    isMatchingContent(contentProps, {
      isRelevantGuidedStep: relevantGuidedStep.id === "Done",
      hasExposures: false,
      hasUnresolvedBreaches: false,
      hasUnresolvedBrokers: false,
      isEligibleForFreeScan: false,
      isEligibleForPremium: false,
      isPremiumUser: true,
      scanInProgress: true,
    }) ||
    /**
     * - US user
     * - Premium
     * - No breaches
     * - Scan: In progress (although some unresolved scan results have already appeared)
     */
    isMatchingContent(contentProps, {
      isRelevantGuidedStep: relevantGuidedStep.id === "Done",
      hasExposures: true,
      hasUnresolvedBreaches: false,
      hasUnresolvedBrokers: true,
      isEligibleForFreeScan: false,
      isEligibleForPremium: false,
      isPremiumUser: true,
      scanInProgress: true,
    })
  ) {
    return "UsUserScanInProgressNoBreaches";
  }

  if (
    /**
     * - US user
     * - Non-Premium
     * - Unresolved breaches
     * - Scan: In progress (and no unresolved scan results yet)
     */
    isMatchingContent(contentProps, {
      isRelevantGuidedStep: true,
      hasExposures: true,
      hasUnresolvedBreaches: true,
      hasUnresolvedBrokers: false,
      isEligibleForFreeScan: false,
      isEligibleForPremium: true,
      isPremiumUser: false,
      scanInProgress: true,
    }) ||
    /**
     * - US user
     * - Non-Premium
     * - Unresolved breaches
     * - Scan: In progress (although some unresolved scan results have already appeared)
     */
    isMatchingContent(contentProps, {
      isRelevantGuidedStep: true,
      hasExposures: true,
      hasUnresolvedBreaches: true,
      hasUnresolvedBrokers: true,
      isEligibleForFreeScan: false,
      isEligibleForPremium: true,
      isPremiumUser: false,
      scanInProgress: true,
    }) ||
    /**
     * - US user
     * - Non premium
     * - No brokers
     * - Unresolved breaches
     * - Scan: In progress (and no unresolved scan results yet)
     */
    isMatchingContent(contentProps, {
      isRelevantGuidedStep: isGuidedResolutionInProgress(relevantGuidedStep.id),
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
     * - Non premium
     * - No brokers
     * - Unresolved breaches
     * - Scan: In progress (although some unresolved scan results have already appeared)
     */
    isMatchingContent(contentProps, {
      isRelevantGuidedStep: isGuidedResolutionInProgress(relevantGuidedStep.id),
      hasExposures: true,
      hasUnresolvedBreaches: true,
      hasUnresolvedBrokers: true,
      isEligibleForFreeScan: false,
      isEligibleForPremium: false,
      isPremiumUser: true,
      scanInProgress: true,
    })
  ) {
    return "UsUserScanInProgressUnresolvedBreaches";
  }

  if (
    /**
     * - US user
     * - Non-Premium
     * - Resolved breaches
     * - Scan: In progress (and no unresolved scan results yet)
     */
    isMatchingContent(contentProps, {
      isRelevantGuidedStep: relevantGuidedStep.id === "Done",
      hasExposures: true,
      hasUnresolvedBreaches: false,
      hasUnresolvedBrokers: false,
      isEligibleForFreeScan: false,
      isEligibleForPremium: true,
      isPremiumUser: false,
      scanInProgress: true,
    }) ||
    /**
     * - US user
     * - Non-Premium
     * - Resolved breaches
     * - Scan: In progress (although some unresolved scan results have already appeared)
     */
    isMatchingContent(contentProps, {
      isRelevantGuidedStep: relevantGuidedStep.id === "Done",
      hasExposures: true,
      hasUnresolvedBreaches: false,
      hasUnresolvedBrokers: true,
      isEligibleForFreeScan: false,
      isEligibleForPremium: true,
      isPremiumUser: false,
      scanInProgress: true,
    }) ||
    /**
     * - US user
     * - Premium
     * - Resolved breaches
     * - Scan: In progress (and no unresolved scan results yet)
     */
    isMatchingContent(contentProps, {
      isRelevantGuidedStep: relevantGuidedStep.id === "Done",
      hasExposures: true,
      hasUnresolvedBreaches: false,
      hasUnresolvedBrokers: false,
      isEligibleForFreeScan: false,
      isEligibleForPremium: false,
      isPremiumUser: true,
      scanInProgress: true,
    }) ||
    /**
     * - US user
     * - Premium
     * - Resolved breaches
     * - Scan: In progress (although some unresolved scan results have already appeared)
     */
    isMatchingContent(contentProps, {
      isRelevantGuidedStep: relevantGuidedStep.id === "Done",
      hasExposures: true,
      hasUnresolvedBreaches: false,
      hasUnresolvedBrokers: false,
      isEligibleForFreeScan: false,
      isEligibleForPremium: false,
      isPremiumUser: true,
      scanInProgress: true,
    })
  ) {
    return "UsUserScanInProgressResolvedBreaches";
  }

  /* c8 ignore next 1 */
  console.error(`InvalidUserState: ${JSON.stringify(contentProps)}`);

  return "InvalidUserState";
};
