/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { ResolutionContainer } from "../ResolutionContainer";
import { ResolutionContent } from "../ResolutionContent";
import { useL10n } from "../../../../../../../../hooks/l10n";
import { getLocale } from "../../../../../../../../functions/universal/getLocale";
import { FixView } from "../FixView";
import {
  HighRiskBreachTypes,
  getHighRiskBreachesByType,
} from "./highRiskBreachData";
import {
  StepDeterminationData,
  StepLink,
  getNextGuidedStep,
} from "../../../../../../../../functions/server/getRelevantGuidedSteps";
import { getGuidedExperienceBreaches } from "../../../../../../../../functions/universal/guidedExperienceBreaches";
import { hasPremium } from "../../../../../../../../functions/universal/user";
import {
  BreachBulkResolutionRequest,
  HighRiskDataTypes,
} from "../../../../../../../../functions/universal/breach";
import { TelemetryButton } from "../../../../../../../../components/client/TelemetryButton";
import { TelemetryLink } from "../../../../../../../../components/client/TelemetryLink";
import { FeatureFlagName } from "../../../../../../../../../db/tables/featureFlags";

export type HighRiskBreachLayoutProps = {
  type: HighRiskBreachTypes;
  subscriberEmails: string[];
  data: StepDeterminationData;
  isEligibleForPremium: boolean;
  enabledFeatureFlags: FeatureFlagName[];
};

export function HighRiskBreachLayout(props: HighRiskBreachLayoutProps) {
  const l10n = useL10n();
  const router = useRouter();
  const [isResolving, setIsResolving] = useState(false);

  const stepMap: Record<HighRiskBreachTypes, StepLink["id"]> = {
    "social-security-number": "HighRiskSsn",
    "credit-card": "HighRiskCreditCard",
    "bank-account": "HighRiskBankAccount",
    pin: "HighRiskPin",
    none: "HighRiskPin",
    done: "HighRiskPin",
  };

  const guidedExperienceBreaches = getGuidedExperienceBreaches(
    props.data.subscriberBreaches,
    props.subscriberEmails,
  );

  const nextStep = getNextGuidedStep(
    props.data,
    props.enabledFeatureFlags,
    stepMap[props.type],
  );
  const pageData = getHighRiskBreachesByType({
    dataType: props.type,
    breaches: guidedExperienceBreaches,
    l10n: l10n,
    nextStep,
  });

  // The non-null assertion here should be safe since we already did this check
  // in `./[type]/page.tsx`:
  const { title, illustration, content, exposedData, type } = pageData!;
  const isHighRiskBreachesStep = type !== "none";
  const isStepDone = type === "done";
  const hasExposedData = exposedData.length > 0;

  // If there are no unresolved high risk breach:
  // Go to the next step in the guided resolution or back to the dashboard.
  useEffect(() => {
    if (!hasExposedData && !isStepDone) {
      router.push(nextStep.href);
    }
  }, [nextStep.href, router, hasExposedData, isStepDone]);

  // TODO: Write unit tests MNTOR-2560
  /* c8 ignore start */
  const handleResolveBreach = async () => {
    const highRiskBreachClasses: Record<
      HighRiskBreachTypes,
      (typeof HighRiskDataTypes)[keyof typeof HighRiskDataTypes] | null
    > = {
      "social-security-number": HighRiskDataTypes.SSN,
      "credit-card": HighRiskDataTypes.CreditCard,
      "bank-account": HighRiskDataTypes.BankAccount,
      pin: HighRiskDataTypes.PIN,
      none: null,
      done: null,
    };

    const dataType = highRiskBreachClasses[type];
    // Only attempt to resolve the breaches if the following conditions are true:
    // - There is a matching data class type in this step
    // - The current step has unresolved exposed data
    // - There is no pending breach resolution request
    if (!dataType || !hasExposedData || isResolving) {
      return;
    }

    setIsResolving(true);
    try {
      const body: BreachBulkResolutionRequest = { dataType };
      const response = await fetch("/api/v1/user/breaches/bulk-resolve", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });

      const result = await response.json();
      if (!result?.success) {
        throw new Error(
          `Could not resolve breach data class of type: ${props.type}`,
        );
      }

      const isCurrentStepSection = Object.values(stepMap).includes(nextStep.id);
      const nextRoute = isCurrentStepSection
        ? nextStep.href
        : "/user/dashboard/fix/high-risk-data-breaches/done";
      router.push(nextRoute);

      // Make sure the dashboard re-fetches the breaches on the next visit,
      // in order to make resolved breaches move to the "Fixed" tab.
      // If we had used server actions, we could've called
      // `revalidatePath("/user/dashboard")` there, but the API doesn't appear
      // to necessarily share a cache with the client.
      router.refresh();
    } catch (_error) {
      // TODO: MNTOR-2563: Capture client error with @next/sentry
      setIsResolving(false);
    }
  };

  const telemetryEventMap: Record<HighRiskBreachTypes, string> = {
    "social-security-number": "marked_fixed_social_security",
    "credit-card": "marked_fixed_credit_card",
    "bank-account": "marked_fixed_bank_account",
    pin: "marked_fixed_pin",
    done: "continue_celebrate_high_risk",
    none: "continue_high_risk_zero_state",
  };

  /* c8 ignore stop */

  return (
    <FixView
      subscriberEmails={props.subscriberEmails}
      data={props.data}
      nextStep={nextStep}
      currentSection="high-risk-data-breach"
      hideProgressIndicator={isStepDone}
      showConfetti={isStepDone}
      enabledFeatureFlags={props.enabledFeatureFlags}
    >
      <ResolutionContainer
        type="securityRecommendations"
        title={title}
        illustration={illustration}
        isPremiumUser={hasPremium(props.data.user)}
        isEligibleForPremium={props.isEligibleForPremium}
        enabledFeatureFlags={props.enabledFeatureFlags}
        cta={
          !isStepDone && (
            <>
              {isHighRiskBreachesStep ? (
                <TelemetryButton
                  variant="primary"
                  small
                  autoFocus={true}
                  event={{
                    module: "ctaButton",
                    name: "click",
                    data: {
                      button_id: telemetryEventMap[props.type],
                    },
                  }}
                  /* c8 ignore next */
                  onPress={() => void handleResolveBreach()}
                  disabled={isResolving}
                >
                  {l10n.getString("high-risk-breach-mark-as-fixed")}
                </TelemetryButton>
              ) : (
                <TelemetryButton
                  variant="primary"
                  small
                  autoFocus={true}
                  event={{
                    module: "ctaButton",
                    name: "click",
                    data: {
                      button_id: "continue_high_risk_zero_state",
                    },
                  }}
                  href={nextStep.href}
                >
                  {l10n.getString("high-risk-breach-none-continue")}
                </TelemetryButton>
              )}
              {isHighRiskBreachesStep && (
                <TelemetryLink
                  href={nextStep.href}
                  eventData={{
                    link_id: "skipped_resolution",
                  }}
                >
                  {l10n.getString("high-risk-breach-skip")}
                </TelemetryLink>
              )}
            </>
          )
        }
        // Theoretically, this page should never be shown if the user has no
        // breaches, unless the user directly visits its URL, so no tests
        // represents it either:
        estimatedTime={!isStepDone && isHighRiskBreachesStep ? 15 : undefined}
        isStepDone={isStepDone}
        data={props.data}
      >
        <ResolutionContent
          content={content}
          exposedData={exposedData}
          locale={getLocale(l10n)}
        />
      </ResolutionContainer>
    </FixView>
  );
}
