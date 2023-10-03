/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import { ResolutionContainer } from "../ResolutionContainer";
import { ResolutionContent } from "../ResolutionContent";
import { Button } from "../../../../../../../components/server/Button";
import { useL10n } from "../../../../../../../hooks/l10n";
import {
  LeakedPasswordsTypes,
  getLeakedPasswords,
} from "./leakedPasswordsData";
import Link from "next/link";
import { getLocale } from "../../../../../../../functions/universal/getLocale";
import {
  StepDeterminationData,
  StepLink,
  getNextGuidedStep,
} from "../../../../../../../functions/server/getRelevantGuidedSteps";
import { FixView } from "../FixView";
import { getGuidedExperienceBreaches } from "../../../../../../../functions/universal/guidedExperienceBreaches";

export interface LeakedPasswordsLayoutProps {
  type: LeakedPasswordsTypes;
  subscriberEmails: string[];
  data: StepDeterminationData;
}

export function LeakedPasswordsLayout(props: LeakedPasswordsLayoutProps) {
  const l10n = useL10n();

  const stepMap: Record<LeakedPasswordsTypes, StepLink["id"]> = {
    password: "LeakedPasswordsPassword",
    "security-question": "LeakedPasswordsSecurityQuestion",
  };

  const guidedExperienceBreaches = getGuidedExperienceBreaches(
    props.data.subscriberBreaches,
    props.subscriberEmails
  );

  const pageData = getLeakedPasswords({
    dataType: props.type,
    breaches: guidedExperienceBreaches,
    l10n: l10n,
  });

  // The non-null assertion here should be safe since we already did this check
  // in `./[type]/page.tsx`:
  const { title, illustration, content } = pageData!;

  return (
    <FixView
      subscriberEmails={props.subscriberEmails}
      data={props.data}
      nextStepHref={
        // In practice, there should always be a next step (at least "Done")
        /* c8 ignore next */
        getNextGuidedStep(props.data, stepMap[props.type])?.href ?? ""
      }
      currentSection="leaked-passwords"
    >
      <ResolutionContainer
        type="leakedPasswords"
        title={title}
        illustration={illustration}
        cta={
          <>
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
              {l10n.getString("leaked-passwords-mark-as-fixed")}
            </Button>
            <Link
              // TODO: Add test once MNTOR-1700 logic is added
              href="/"
            >
              {l10n.getString("leaked-passwords-skip")}
            </Link>
          </>
        }
        estimatedTime={4}
      >
        <ResolutionContent content={content} locale={getLocale(l10n)} />
      </ResolutionContainer>
    </FixView>
  );
}
