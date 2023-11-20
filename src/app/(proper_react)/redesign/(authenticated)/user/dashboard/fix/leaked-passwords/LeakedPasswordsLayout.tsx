/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import { ResolutionContainer } from "../ResolutionContainer";
import { ResolutionContent } from "../ResolutionContent";
import { Button } from "../../../../../../../components/server/Button";
import { useL10n } from "../../../../../../../hooks/l10n";
import {
  LeakedPassword,
  LeakedPasswordsTypes,
  getLeakedPasswords,
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

export interface LeakedPasswordsLayoutProps {
  type: LeakedPasswordsTypes;
  subscriberEmails: string[];
  data: StepDeterminationData;
}

async function updateBreachStatus(
  email: string,
  id: number,
  resolvedDataClass: HibpBreachDataTypes[keyof HibpBreachDataTypes],
) {
  try {
    const data: BreachResolutionRequest = {
      affectedEmail: email,
      breachId: id,
      resolutionsChecked: [resolvedDataClass],
    };

    const res = await fetch("/api/v1/user/breaches", {
      method: "PUT",
      body: JSON.stringify(data),
    });

    if (!res.ok) {
      throw new Error("Bad fetch response");
    }
  } catch (e) {
    console.error("Could not update user breach resolve status:", e);
  }
}

export function LeakedPasswordsLayout(props: LeakedPasswordsLayoutProps) {
  const l10n = useL10n();

  const stepMap: Record<LeakedPasswordsTypes, StepLink["id"]> = {
    passwords: "LeakedPasswordsPassword",
    "passwords-done": "LeakedPasswordsPassword",
    "security-questions": "LeakedPasswordsSecurityQuestion",
    "security-questions-done": "LeakedPasswordsSecurityQuestion",
    none: "LeakedPasswordsSecurityQuestion",
  };

  // This will be always the initial props passed from the page.
  // They were fetched from the db.
  const [subscriberBreaches, setSubscriberBreaches] = useState(
    props.data.subscriberBreaches,
  );
  const guidedExperienceBreaches = getGuidedExperienceBreaches(
    subscriberBreaches,
    props.subscriberEmails,
  );
<<<<<<< HEAD

  const nextStep = getNextGuidedStep(props.data, stepMap[props.type]);
  const pageData = getLeakedPasswords({
=======
  const stepMap: Record<LeakedPasswordsTypes, StepLink["id"]> = {
    passwords: "LeakedPasswordsPassword",
    "security-question": "LeakedPasswordsSecurityQuestion",
  };
  const l10n = useL10n();
  const [emailAffected, setEmailAffected] = useState<string>();
  const [pageDataContent, setPageDataContent] = useState<LeakedPassword>({
>>>>>>> 546acaf11 (switch between security questions and passwords)
    dataType: props.type,
    breaches: guidedExperienceBreaches,
    l10n: l10n,
    nextStep,
  });

<<<<<<< HEAD
  // The non-null assertion here should be safe since we already did this check
  // in `./[type]/page.tsx`:
  const { title, illustration, content } = pageData!;
  const isStepDone =
    props.type === "passwords-done" || props.type === "security-questions-done";

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
                // TODO: Add test once MNTOR-1700 logic is added
                /* c8 ignore next 3 */
                onPress={() => {
                  // TODO: MNTOR-1700 Add routing logic
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
=======
  const pageData = getLeakedPasswords(pageDataContent);
  const unresolvedPasswordBreachContent =
    pageData.unresolvedPasswordBreachContent;
  const unresolvedPasswordBreach =
    pageData.unresolvedPasswordBreach ??
    pageData.unresolvedSecurityQuestionsBreach;
  const resolvedDataClassName =
    props.type === "passwords" ? "passwords" : "security-questions-and-answers";

  useEffect(() => {
    if (emailAffected) {
      const newPageData = {
        dataType: props.type,
        breaches: guidedExperienceBreaches,
        l10n: l10n,
        emailAffected: emailAffected,
      };
      setPageDataContent(newPageData);
    }
    // This should only run if emailAffected changes
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [emailAffected]);

  useEffect(() => {
    if (unresolvedPasswordBreach) {
      props.subscriberEmails.forEach((email: string) => {
        if (unresolvedPasswordBreach.emailsAffected.includes(email)) {
          setEmailAffected(email);
        }
      });
    }
  }, [unresolvedPasswordBreach, props.subscriberEmails]);

  const handleUpdateBreachStatus = async () => {
    if (!emailAffected) {
      window.location.href = getNextGuidedStep(
        props.data,
        stepMap[props.type],
      ).href;
      return;
    }

    try {
      await updateBreachStatus(
        emailAffected,
        unresolvedPasswordBreach.id,
        resolvedDataClassName,
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

      setSubscriberBreaches(updatedSubscriberBreaches);

      if (isComplete) {
        window.location.href = getNextGuidedStep(
          props.data,
          stepMap[props.type],
        ).href;
      }
    } catch (error) {
      console.error("Error updating breach status", error);
    }
  };

  const handlePress = async () => {
    try {
      await handleUpdateBreachStatus();
    } catch (error) {
      console.error("Error updating breach status", error);
    }
  };

  return (
    unresolvedPasswordBreachContent && (
      <FixView
        subscriberEmails={props.subscriberEmails}
        data={props.data}
        nextStepHref={getNextGuidedStep(props.data, stepMap[props.type]).href}
        currentSection="leaked-passwords"
>>>>>>> 546acaf11 (switch between security questions and passwords)
      >
        <ResolutionContainer
          type="leakedPasswords"
          title={unresolvedPasswordBreachContent.title}
          illustration={unresolvedPasswordBreachContent.illustration}
          cta={
            <>
              <Button
                variant="primary"
                small
                onPress={() => void handlePress()}
                autoFocus={true}
              >
                {l10n.getString("leaked-passwords-mark-as-fixed")}
              </Button>
              <Link
                // TODO: Add skip logic
                href="/"
              >
                {l10n.getString("leaked-passwords-skip")}
              </Link>
            </>
          }
          estimatedTime={4}
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
