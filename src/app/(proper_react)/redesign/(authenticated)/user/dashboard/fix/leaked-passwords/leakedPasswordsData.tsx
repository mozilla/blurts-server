/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import type { ReactNode } from "react";
import passwordIllustration from "../images/leaked-passwords.svg";
import securityQuestionsIllustration from "../images/security-questions.svg";
import { SubscriberBreach } from "../../../../../../../../utils/subscriberBreaches";
import { GuidedExperienceBreaches } from "../../../../../../../functions/server/getUserBreaches";
import { ExtendedReactLocalization } from "../../../../../../../hooks/l10n";
import { Button } from "../../../../../../../components/server/Button";
import { StepLink } from "../../../../../../../functions/server/getRelevantGuidedSteps";

export const leakedPasswordTypes = [
  "passwords",
  "passwords-done",
  "security-questions",
  "security-questions-done",
  "none",
] as const;

export type LeakedPasswordsTypes = (typeof leakedPasswordTypes)[number];

export type LeakedPasswordsContent = {
  summary: string;
  description: ReactNode;
  recommendations?: {
    title: string;
    steps: ReactNode;
    subtitle?: string;
  };
};

<<<<<<< HEAD
export type LeakedPassword = {
  id: number;
=======
export type LeakedPasswordsTypes = "passwords" | "security-question";

export type LeakedPasswordsLayout = {
>>>>>>> 546acaf11 (switch between security questions and passwords)
  type: LeakedPasswordsTypes;
  title: string;
  illustration: string;
  content: LeakedPasswordsContent;
};

function getDoneStepContent(
  l10n: ExtendedReactLocalization,
  nextStep: StepLink,
): { summary: string; description: ReactNode } {
  // Security questions next
  if (nextStep.id === "LeakedPasswordsSecurityQuestion") {
    return {
      summary: "",
      description: (
        <>
          <p>
            {l10n.getString(
              "fix-flow-celebration-leaked-passwords-description-next-security-questions",
            )}
          </p>
          <Button variant="primary" small href={nextStep.href} autoFocus={true}>
            {l10n.getString("fix-flow-celebration-next-label")}
          </Button>
        </>
      ),
    };
  }

  // Security tips next
  if (
    ["SecurityTipsPhone", "SecurityTipsEmail", "SecurityTipsIp"].includes(
      nextStep.id,
    )
  ) {
    return {
      summary: "",
      description: (
        <>
          <p>
            {l10n.getString(
              "fix-flow-celebration-leaked-passwords-description-next-security-recommendations",
            )}
          </p>
          <Button variant="primary" small href={nextStep.href} autoFocus={true}>
            {l10n.getString("fix-flow-celebration-next-recommendations-label")}
          </Button>
        </>
      ),
    };
  }

  // No next steps
  return {
    summary: "",
    description: (
      <>
        <p>
          {l10n.getString(
            "fix-flow-celebration-leaked-passwords-description-next-dashboard",
          )}
        </p>
        <Button variant="primary" small href={nextStep.href} autoFocus={true}>
          {l10n.getString("fix-flow-celebration-next-dashboard-label")}
        </Button>
      </>
    ),
  };
}

function getLeakedPasswords({
  dataType,
  breaches,
  l10n,
  nextStep,
}: {
  dataType: string;
  breaches: GuidedExperienceBreaches;
  l10n: ExtendedReactLocalization;
  nextStep: StepLink;
}) {
  const findFirstUnresolvedBreach = (breachClassType: LeakedPasswordsTypes) => {
    const leakedPasswordType =
      breachClassType === "passwords" ? "passwords" : "securityQuestions";
    return Object.values(breaches.passwordBreaches[leakedPasswordType]).find(
      (breach) => !breach.resolvedDataClasses.includes(resolvedDataClassName),
    );
  };

  const unresolvedPasswordBreach = findFirstUnresolvedBreach("passwords");
  const unresolvedSecurityQuestionsBreach =
    findFirstUnresolvedBreach("security-questions");
  // This env var is always defined in test, so the other branch can't be covered:
  /* c8 ignore next */
  const blockList = (process.env.HIBP_BREACH_DOMAIN_BLOCKLIST ?? "").split(",");

  const getBreachInfo = (breach?: SubscriberBreach) => ({
    // Old code without tests for the case where `breach` is `undefined`
    // (is that even possible?)
    /* c8 ignore next 6 */
    name: breach ? breach.name : "",
    breachDate: breach ? breach.breachDate : "",
    breachSite:
      breach && !blockList.includes(breach.domain)
        ? `https://${breach.domain}`
        : "",
  });

  const {
    name: passwordBreachName,
    breachDate: passwordBreachDate,
    breachSite: passwordBreachSite,
  } = getBreachInfo(unresolvedPasswordBreach);

  const {
    name: securityQuestionBreachName,
    breachDate: securityQuestionBreachDate,
    breachSite: securityQuestionBreachSite,
  } = getBreachInfo(unresolvedSecurityQuestionsBreach);

  const leakedPasswordsData: LeakedPasswordsLayout[] = [
    {
      type: "passwords",
      title: l10n.getString("leaked-passwords-title", {
        breach_name: passwordBreachName,
      }),
      illustration: passwordIllustration,
      content: {
        summary: l10n.getString("leaked-passwords-summary", {
          breach_date: passwordBreachDate,
        }),
        description: <p>{l10n.getString("leaked-passwords-description")}</p>,
        recommendations: {
          title: l10n.getString("leaked-passwords-steps-title"),
          steps: (
            <ol>
              <li>
                {l10n.getFragment("leaked-passwords-step-one", {
                  elems: {
                    // TODO: Find a way  to go to the actual breach site
                    link_to_breach_site: (
                      <a
                        href={passwordBreachSite}
                        target="_blank"
                        rel="noopener noreferrer"
                      />
                    ),
                    b: <strong />,
                  },
                  vars: {
                    breach_name: passwordBreachName,
                    email_affected: emailAffected,
                  },
                })}
              </li>
              <li>{l10n.getString("leaked-passwords-step-two")}</li>
            </ol>
          ),
        },
      },
    },
    {
      type: "passwords-done",
      title: l10n.getString("fix-flow-celebration-leaked-passwords-title"),
      illustration: "",
      content: getDoneStepContent(l10n, nextStep),
    },
    {
      type: "security-questions",
      title: l10n.getString("leaked-security-questions-title"),
      illustration: securityQuestionsIllustration,
      content: {
        summary: l10n.getString("leaked-security-questions-summary", {
          breach_name: securityQuestionBreachName,
          breach_date: securityQuestionBreachDate,
        }),
        description: (
          <p>{l10n.getString("leaked-security-questions-description")}</p>
        ),
        recommendations: {
          title: l10n.getString("leaked-security-questions-steps-title"),
          steps: (
            <ol>
              <li>
                {l10n.getFragment("leaked-security-questions-step-one", {
                  elems: {
                    // TODO: Find a way  to go to the actual breach site
                    link_to_breach_site: (
                      <a
                        href={securityQuestionBreachSite}
                        target="_blank"
                        rel="noopener noreferrer"
                      />
                    ),
                  },
                  vars: {
                    breach_name: securityQuestionBreachName,
                  },
                })}
              </li>
              <li>{l10n.getFragment("leaked-security-questions-step-two")}</li>
            </ol>
          ),
        },
      },
    },
    {
      type: "security-questions-done",
      title: l10n.getString("fix-flow-celebration-security-questions-title"),
      illustration: "",
      content: getDoneStepContent(l10n, nextStep),
    },
  ];

  const unresolvedPasswordBreachContent = leakedPasswordsData.find(
    (content) => content.type === dataType,
  );

  return {
    unresolvedPasswordBreachContent,
    unresolvedPasswordBreach,
    unresolvedSecurityQuestionsBreach,
  };
}

export { getLeakedPasswords };
