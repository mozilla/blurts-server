/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import Link from "next/link";
import { ResolutionContainer } from "../ResolutionContainer";
import { ResolutionContent } from "../ResolutionContent";
import { Button } from "../../../../../../../components/server/Button";
import { useL10n } from "../../../../../../../hooks/l10n";
import { getLocale } from "../../../../../../../functions/universal/getLocale";
import { FixView } from "../FixView";
import {
  HighRiskBreachTypes,
  getHighRiskBreachesByType,
} from "./highRiskBreachData";
import {
  StepDeterminationData,
  StepLink,
  getNextGuidedStep,
} from "../../../../../../../functions/server/getRelevantGuidedSteps";
import { getGuidedExperienceBreaches } from "../../../../../../../functions/universal/guidedExperienceBreaches";

export type HighRiskBreachLayoutProps = {
  type: HighRiskBreachTypes;
  subscriberEmails: string[];
  data: StepDeterminationData;
};

export function HighRiskBreachLayout(props: HighRiskBreachLayoutProps) {
  const l10n = useL10n();

  const stepMap: Record<HighRiskBreachTypes, StepLink["id"]> = {
    ssn: "HighRiskSsn",
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

  const nextStep = getNextGuidedStep(props.data, stepMap[props.type]);
  const pageData = getHighRiskBreachesByType({
    dataType: props.type,
    breaches: guidedExperienceBreaches,
    l10n: l10n,
    nextStep,
  });

  // The non-null assertion here should be safe since we already did this check
  // in `./[type]/page.tsx`:
  const { title, illustration, content, exposedData, type } = pageData!;
  const hasBreaches = type !== "none";
  const isStepDone = type === "done";

  return (
    <FixView
      subscriberEmails={props.subscriberEmails}
      data={props.data}
      nextStep={nextStep}
      currentSection="high-risk-data-breach"
      hideProgressIndicator={isStepDone}
      showConfetti={isStepDone}
    >
      <ResolutionContainer
        type="securityRecommendations"
        title={title}
        illustration={illustration}
        cta={
          !isStepDone && (
            <>
              <Button
                variant="primary"
                small
                // TODO: Add test once MNTOR-1700 logic is added
                /* c8 ignore next 3 */
                onPress={() => {
                  // TODO: MNTOR-1700 Add routing logic + fix event here
                }}
              >
                {
                  // Theoretically, this page should never be shown if the user
                  // has no breaches, unless the user directly visits its URL, so
                  // no tests represents it either:
                  /* c8 ignore next 3 */
                  hasBreaches
                    ? l10n.getString("high-risk-breach-mark-as-fixed")
                    : l10n.getString("high-risk-breach-none-continue")
                }
              </Button>
              {hasBreaches && (
                <Link href={nextStep.href}>
                  {l10n.getString("high-risk-breach-skip")}
                </Link>
              )}
            </>
          )
        }
        // Theoretically, this page should never be shown if the user has no
        // breaches, unless the user directly visits its URL, so no tests
        // represents it either:
        /* c8 ignore next */
        estimatedTime={!isStepDone && hasBreaches ? 15 : undefined}
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
