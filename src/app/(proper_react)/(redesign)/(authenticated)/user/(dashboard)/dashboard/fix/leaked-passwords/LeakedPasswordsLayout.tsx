/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import { ResolutionContainer } from "../ResolutionContainer";
import { ResolutionContent } from "../ResolutionContent";
import { Button } from "../../../../../../../../components/client/Button";
import { useL10n } from "../../../../../../../../hooks/l10n";
import {
  LeakedPasswordsTypes,
  findFirstUnresolvedBreach,
  getLeakedPasswords,
  updatePasswordsBreachStatus,
} from "./leakedPasswordsData";
import Link from "next/link";
import { getLocale } from "../../../../../../../../functions/universal/getLocale";
import {
  StepDeterminationData,
  StepLink,
  getNextGuidedStep,
  hasCompletedStep,
} from "../../../../../../../../functions/server/getRelevantGuidedSteps";
import { FixView } from "../FixView";
import { getGuidedExperienceBreaches } from "../../../../../../../../functions/universal/guidedExperienceBreaches";
import { hasPremium } from "../../../../../../../../functions/universal/user";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { LeakedPasswordsDataTypes } from "../../../../../../../../functions/universal/breach";

export interface LeakedPasswordsLayoutProps {
  type: LeakedPasswordsTypes;
  subscriberEmails: string[];
  data: StepDeterminationData;
  isEligibleForPremium: boolean;
}

export function LeakedPasswordsLayout(props: LeakedPasswordsLayoutProps) {
  const l10n = useL10n();
  const router = useRouter();
  const [isResolving, setIsResolving] = useState(false);
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
  const isStepDone =
    props.type === "passwords-done" || props.type === "security-questions-done";

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
  const emailsAffected = unresolvedPasswordBreach?.emailsAffected ?? [];
  const nextStep = getNextGuidedStep(props.data, stepMap[props.type]);
  const pageData = getLeakedPasswords({
    dataType: props.type,
    breaches: guidedExperienceBreaches,
    l10n,
    emailsAffected,
    nextStep,
  });

  // The non-null assertion here should be safe since we already did this check
  // in `./[type]/page.tsx`:
  const { title, illustration, content } = pageData!;

  const handleUpdateBreachStatus = async () => {
    const leakedPasswordsBreachClasses: Record<
      LeakedPasswordsTypes,
      | (typeof LeakedPasswordsDataTypes)[keyof typeof LeakedPasswordsDataTypes]
      | null
    > = {
      passwords: LeakedPasswordsDataTypes.Passwords,
      "passwords-done": null,
      "security-questions": LeakedPasswordsDataTypes.SecurityQuestions,
      "security-questions-done": null,
      none: null,
    };

    const dataType = leakedPasswordsBreachClasses[props.type];
    if (
      !dataType ||
      !unresolvedPasswordBreach ||
      emailsAffected?.length === 0
    ) {
      return;
    }

    setIsResolving(true);
    try {
      unresolvedPasswordBreach.resolvedDataClasses.push(dataType);
      // FIXME/BUG: MNTOR-2562 Remove empty [""] string
      const formattedDataClasses =
        unresolvedPasswordBreach.resolvedDataClasses.filter(Boolean);

      await updatePasswordsBreachStatus(
        emailsAffected,
        unresolvedPasswordBreach.id,
        formattedDataClasses,
      );

      // Manually move to the next step when breach has been marked as fixed.
      const updatedSubscriberBreaches = subscriberBreaches.map(
        (subscriberBreach) => {
          if (subscriberBreach.id === unresolvedPasswordBreach.id) {
            subscriberBreach.resolvedDataClasses.push(dataType);
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
        setIsResolving(false);
        return;
      }
      // If all breaches in the step are fully resolved,
      // take users to the celebration view.
      const doneSlug: LeakedPasswordsTypes =
        props.type === "passwords"
          ? "passwords-done"
          : "security-questions-done";
      router.push(`/user/dashboard/fix/leaked-passwords/${doneSlug}`);
    } catch (_error) {
      // TODO: MNTOR-2563: Capture client error with @next/sentry
      setIsResolving(false);
    }
  };
  /* c8 ignore stop */

  return (
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
        title={title}
        illustration={illustration}
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
                disabled={isResolving}
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
        isEligibleForPremium={props.isEligibleForPremium}
      >
        <ResolutionContent content={content} locale={getLocale(l10n)} />
      </ResolutionContainer>
    </FixView>
  );
}
