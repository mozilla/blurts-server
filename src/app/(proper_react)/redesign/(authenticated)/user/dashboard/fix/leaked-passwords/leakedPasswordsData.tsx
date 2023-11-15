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

export type LeakedPasswordsContent = {
  summary: string;
  description: ReactNode;
  recommendations?: {
    title: string;
    steps: ReactNode;
    subtitle?: string;
  };
};

export type LeakedPasswordsTypes =
  | "password"
  | "passwords-done"
  | "security-questions"
  | "security-questions-done";

export type LeakedPassword = {
  type: LeakedPasswordsTypes;
  title: string;
  illustration: string;
  content: LeakedPasswordsContent;
};

function getLeakedPasswords({
  dataType,
  breaches,
  l10n,
}: {
  dataType: string;
  breaches: GuidedExperienceBreaches;
  l10n: ExtendedReactLocalization;
}) {
  const findFirstUnresolvedBreach = (breachClassType: LeakedPasswordsTypes) => {
    const leakedPasswordType =
      breachClassType === "password" ? "passwords" : "securityQuestions";
    return Object.values(breaches.passwordBreaches[leakedPasswordType]).find(
      (breach) => !breach.isResolved,
    );
  };

  const unresolvedPasswordBreach = findFirstUnresolvedBreach("password");
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

  const leakedPasswordsData: LeakedPassword[] = [
    {
      type: "password",
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
                  },
                  vars: {
                    breach_name: passwordBreachName,
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
      title: "Your passwords are now protected!",
      illustration: "",
      content: {
        summary: "",
        description: (
          <>
            <p>Now let’s review and update your exposed security questions.</p>
            <Button variant="primary" small href="" autoFocus={true}>
              Let’s keep going
            </Button>
          </>
        ),
      },
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
      title: "Your security questions are protected!",
      illustration: "",
      content: {
        summary: "",
        description: (
          <>
            <p>
              Next, we’ll give you personalized security recommendations based
              on what data of yours has been exposed.{" "}
            </p>
            <Button variant="primary" small href="" autoFocus={true}>
              See recommendations
            </Button>
          </>
        ),
      },
    },
  ];

  return leakedPasswordsData.find((content) => content.type === dataType);
}

export { getLeakedPasswords };
