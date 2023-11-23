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
  findFirstUnresolvedBreach,
  getLeakedPasswords,
  updatePasswordsBreachStatus,
} from "./leakedPasswordsData";
import Link from "next/link";
import { getLocale } from "../../../../../../../functions/universal/getLocale";
import {
  StepDeterminationData,
  StepLink,
  getNextGuidedStep,
  hasCompletedStep,
} from "../../../../../../../functions/server/getRelevantGuidedSteps";
import { FixView } from "../FixView";
import { getGuidedExperienceBreaches } from "../../../../../../../functions/universal/guidedExperienceBreaches";
import { hasPremium } from "../../../../../../../functions/universal/user";
import { useState } from "react";
import { useRouter } from "next/navigation";

export interface LeakedPasswordsLayoutProps {
  type: LeakedPasswordsTypes;
  subscriberEmails: string[];
  data: StepDeterminationData;
}

export function LeakedPasswordsLayout(props: LeakedPasswordsLayoutProps) {
  const l10n = useL10n();
  const router = useRouter();
  const [subscriberBreaches, setSubscriberBreaches] = useState(
    props.data.subscriberBreaches,
  );

  const stepMap: Record<LeakedPasswordsTypes, StepLink["id"]> = {
    passwords: "LeakedPasswordsPassword",
    "passwords-done": "LeakedPasswordsPassword",
    "security-questions": "LeakedPasswordsSecurityQuestion",
    "security-questions-done": "LeakedPasswordsSecurityQuestion",
    none: "LeakedPasswordsSecurityQuestion",
  };

  const guidedExperienceBreaches = getGuidedExperienceBreaches(
    subscriberBreaches,
    props.subscriberEmails,
  );

  const unresolvedPasswordBreach = findFirstUnresolvedBreach(
    guidedExperienceBreaches,
    props.type,
  );

  // TODO: Write unit tests MNTOR-2560
  /* c8 ignore start */
  const emailAffected =
    props.subscriberEmails.find(
      (email) => unresolvedPasswordBreach?.emailsAffected.includes(email),
    ) ?? "";

  const nextStep = getNextGuidedStep(props.data, stepMap[props.type]);

  // Data class string to push to resolutionsChecked array
  const resolvedDataClassName =
    props.type === "passwords" ? "passwords" : "security-questions-and-answers";

  const isStepDone =
    props.type === "passwords-done" || props.type === "security-questions-done";

  const unresolvedPasswordBreachContent = getLeakedPasswords({
    dataType: props.type,
    breaches: guidedExperienceBreaches,
    l10n: l10n,
    emailAffected: emailAffected,
    nextStep: nextStep,
  });

  const handleUpdateBreachStatus = async () => {
    if (!unresolvedPasswordBreach || !emailAffected) {
      return;
    }

    try {
      unresolvedPasswordBreach.resolvedDataClasses.push(resolvedDataClassName);
      // FIXME/BUG: MNTOR-2562 Remove empty [""] string
      const formattedDataClasses =
        unresolvedPasswordBreach.resolvedDataClasses.filter(Boolean);

      await updatePasswordsBreachStatus(
        emailAffected,
        unresolvedPasswordBreach.id,
        formattedDataClasses,
      );

      // Manually move to the next step when mark is fixed is selected
      const updatedSubscriberBreaches = subscriberBreaches.map(
        (subscriberBreach) => {
          if (subscriberBreach.id === unresolvedPasswordBreach.id) {
            subscriberBreach.resolvedDataClasses.push(resolvedDataClassName);
          }
          return subscriberBreach;
        },
      );

      const isComplete = hasCompletedStep(
        { ...props.data, subscriberBreaches: updatedSubscriberBreaches },
        stepMap[props.type],
      );

      if (!isComplete) {
        setSubscriberBreaches(updatedSubscriberBreaches);
      }
      // If all breaches in the step is fully resolved, take users to the next step
      else {
        router.push(nextStep.href);
      }
    } catch (error) {
      console.error("Error updating breach status", error);
    }
  };
  /* c8 ignore stop */

  return (
    unresolvedPasswordBreachContent &&
    unresolvedPasswordBreach && (
      <FixView
        subscriberEmails={props.subscriberEmails}
        data={props.data}
        nextStep={nextStep}
        currentSection="leaked-passwords"
        hideProgressIndicator={isStepDone}
        showConfetti={isStepDone}
      >
        <ResolutionContainer
          type="leakedPasswords"
          title={unresolvedPasswordBreachContent.title}
          illustration={unresolvedPasswordBreachContent.illustration}
          isPremiumUser={hasPremium(props.data.user)}
          cta={
            !isStepDone && (
              <>
                <Button
                  variant="primary"
                  small
                  /* c8 ignore next 3 */
                  onPress={() => {
                    void handleUpdateBreachStatus();
                  }}
                  autoFocus={true}
                >
                  {l10n.getString("leaked-passwords-mark-as-fixed")}
                </Button>
                <Link href={nextStep.href}>
                  {l10n.getString("leaked-passwords-skip")}
                </Link>
              </>
            )
          }
          estimatedTime={!isStepDone ? 4 : undefined}
          isStepDone={isStepDone}
          data={props.data}
        >
          <ResolutionContent
            content={unresolvedPasswordBreachContent.content}
            locale={getLocale(l10n)}
          />
        </ResolutionContainer>
      </FixView>
    )
  );
}
