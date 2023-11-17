/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import {
  SecurityRecommendationTypes,
  getSecurityRecommendationsByType,
} from "./securityRecommendationsData";
import { ResolutionContainer } from "../ResolutionContainer";
import { ResolutionContent } from "../ResolutionContent";
import { Button } from "../../../../../../../components/server/Button";
import { useL10n } from "../../../../../../../hooks/l10n";
import { getLocale } from "../../../../../../../functions/universal/getLocale";
import { FixView } from "../FixView";
import {
  StepDeterminationData,
  StepLink,
  getNextGuidedStep,
} from "../../../../../../../functions/server/getRelevantGuidedSteps";
import { getGuidedExperienceBreaches } from "../../../../../../../functions/universal/guidedExperienceBreaches";

export interface SecurityRecommendationsLayoutProps {
  type: SecurityRecommendationTypes;
  subscriberEmails: string[];
  data: StepDeterminationData;
}

export function SecurityRecommendationsLayout(
  props: SecurityRecommendationsLayoutProps,
) {
  const l10n = useL10n();

  const stepMap: Record<SecurityRecommendationTypes, StepLink["id"]> = {
    email: "SecurityTipsEmail",
    phone: "SecurityTipsPhone",
    ip: "SecurityTipsIp",
    done: "SecurityTipsIp",
  };

  const isStepDone = props.type === "done";

  const guidedExperienceBreaches = getGuidedExperienceBreaches(
    props.data.subscriberBreaches,
    props.subscriberEmails,
  );

  const nextStep = getNextGuidedStep(props.data, stepMap[props.type]);
  const pageData = getSecurityRecommendationsByType({
    dataType: props.type,
    breaches: guidedExperienceBreaches,
    l10n: l10n,
    nextStep,
  });

  // The non-null assertion here should be safe since we already did this check
  // in `./[type]/page.tsx`:
  const { title, illustration, content, exposedData } = pageData!;

  return (
    <FixView
      subscriberEmails={props.subscriberEmails}
      data={props.data}
      nextStep={getNextGuidedStep(props.data, stepMap[props.type])}
      currentSection="security-recommendations"
      hideProgressIndicator={isStepDone}
      showConfetti={isStepDone}
    >
      <ResolutionContainer
        label={
          !isStepDone
            ? l10n.getString("security-recommendation-steps-label")
            : ""
        }
        type="securityRecommendations"
        title={title}
        illustration={illustration}
        cta={
          !isStepDone && (
            <Button
              variant="primary"
              small
              // TODO: Add test once MNTOR-1700 logic is added
              /* c8 ignore next 3 */
              onPress={() => {
                // TODO: MNTOR-1700 Add routing logic
              }}
              autoFocus={true}
            >
              {l10n.getString("security-recommendation-steps-cta-label")}
            </Button>
          )
        }
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
