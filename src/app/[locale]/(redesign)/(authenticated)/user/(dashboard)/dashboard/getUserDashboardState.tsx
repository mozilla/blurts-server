/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { ContentProps } from "./DashboardTopBanner/DashboardTopBannerContent";
import { isGuidedResolutionInProgress } from "../../../../../../functions/server/getRelevantGuidedSteps";

export type UserDashboardState =
  | "NonEligiblePremiumUserNoBreaches"
  | "NonEligiblePremiumUserUnresolvedBreaches"
  | "NonEligiblePremiumUserResolvedBreaches"
  | "InvalidUserState";

interface ContentConditionProps
  extends Omit<ContentProps, "relevantGuidedStep" | "onShowFixed"> {
  isRelevantGuidedStep: boolean;
}

const isMatchingContent = (
  contentProps: ContentProps,
  contentConditions: ContentConditionProps,
) => {
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
    })
  ) {
    return "NonEligiblePremiumUserResolvedBreaches";
  }

  /* c8 ignore next 1 */
  console.error(`InvalidUserState: ${JSON.stringify(contentProps)}`);

  return "InvalidUserState";
};
