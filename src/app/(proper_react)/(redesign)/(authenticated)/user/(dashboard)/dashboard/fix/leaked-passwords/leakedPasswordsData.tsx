/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import type { ReactNode } from "react";
import passwordIllustration from "../images/leaked-passwords.svg";
import securityQuestionsIllustration from "../images/security-questions.svg";
import { SubscriberBreach } from "../../../../../../../../../utils/subscriberBreaches";
import { GuidedExperienceBreaches } from "../../../../../../../../functions/server/getUserBreaches";
import { ExtendedReactLocalization } from "../../../../../../../../functions/l10n";
import { Button } from "../../../../../../../../components/client/Button";
import { StepLink } from "../../../../../../../../functions/server/getRelevantGuidedSteps";
import { getLocale } from "../../../../../../../../functions/universal/getLocale";
import { TelemetryButton } from "../../../../../../../../components/client/TelemetryButton";
import { HibpBreachDataTypes } from "../../../../../../../../functions/universal/breach";
import { BreachResolutionRequest } from "../../../../../../../../api/v1/user/breaches/route";
import { TelemetryLink } from "../../../../../../../../components/client/TelemetryLink";

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

export type LeakedPassword = {
  type: LeakedPasswordsTypes;
  title: string;
  illustration: string;
  content: LeakedPasswordsContent;
};

export type LeakedPasswordLayout = {
  dataType: LeakedPasswordsTypes;
  breaches: GuidedExperienceBreaches;
  l10n: ExtendedReactLocalization;
  nextStep: StepLink;
  emailsAffected: string[];
  blockedHibpBreachDomains: string[];
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

// TODO: Write unit tests MNTOR-2560
/* c8 ignore start */
export const findFirstUnresolvedBreach = (
  breaches: GuidedExperienceBreaches,
  breachClassType: LeakedPasswordsTypes,
) => {
  const leakedPasswordType =
    breachClassType === "passwords" ? "passwords" : "securityQuestions";
  const resolvedDataClassName =
    breachClassType === "passwords"
      ? "passwords"
      : "security-questions-and-answers";

  return Object.values(breaches.passwordBreaches[leakedPasswordType]).find(
    (breach) => !breach.resolvedDataClasses.includes(resolvedDataClassName),
  );
};

export async function updatePasswordsBreachStatus(
  emails: string[],
  id: number,
  resolvedDataClass: Array<HibpBreachDataTypes[keyof HibpBreachDataTypes]>,
) {
  try {
    for (const email of emails) {
      const data: BreachResolutionRequest = {
        affectedEmail: email,
        breachId: id,
        resolutionsChecked: resolvedDataClass,
      };

      const res = await fetch("/api/v1/user/breaches", {
        method: "PUT",
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        throw new Error("Bad fetch response");
      }
    }
  } catch (e) {
    console.error("Could not update user breach resolve status:", e);
  }
}
/* c8 ignore stop */

function getLeakedPasswords(props: LeakedPasswordLayout) {
  const { dataType, breaches, l10n, nextStep, emailsAffected } = props;
  const unresolvedBreach = findFirstUnresolvedBreach(breaches, props.dataType);
  /* c8 ignore next */

  const getBreachInfo = (breach?: SubscriberBreach) => ({
    // Old code without tests for the case where `breach` is `undefined`
    // (is that even possible?)
    /* c8 ignore next 6 */
    name: breach ? breach.name : "",
    breachDate: breach ? breach.breachDate : "",
    breachSite:
      breach && !props.blockedHibpBreachDomains.includes(breach.domain)
        ? `https://${breach.domain}`
        : null,
  });

  const {
    name: breachName,
    breachDate,
    breachSite,
  } = getBreachInfo(unresolvedBreach);

  const emailsFormatter = new Intl.ListFormat(getLocale(l10n), {
    style: "long",
    type: "conjunction",
  });

  const leakedPasswordsData: LeakedPassword[] = [
    {
      type: "passwords",
      title: l10n.getString("leaked-passwords-title", {
        breach_name: breachName,
      }),
      illustration: passwordIllustration,
      content: {
        summary: l10n.getString("leaked-passwords-summary", {
          breach_date: breachDate,
        }),
        description: <p>{l10n.getString("leaked-passwords-description")}</p>,
        recommendations: {
          title: l10n.getString("leaked-passwords-steps-title"),
          steps: (
            <ol>
              <li>
                {l10n.getFragment("leaked-passwords-step-one", {
                  elems: {
                    // TODO: Find a way to go to the actual breach site
                    link_to_breach_site:
                      typeof breachSite === "string" ? (
                        <TelemetryLink
                          href={breachSite}
                          target="_blank"
                          eventData={{
                            link_id: "changed_password",
                          }}
                          showIcon
                        />
                      ) : (
                        <span />
                      ),
                    b: <strong />,
                  },
                  vars: {
                    breach_name: breachName,
                    emails_affected: emailsFormatter.format(emailsAffected),
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
          breach_name: breachName,
          breach_date: breachDate,
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
                    // TODO: Find a way to go to the actual breach site
                    link_to_breach_site:
                      typeof breachSite === "string" ? (
                        <TelemetryButton
                          href={breachSite}
                          variant="link"
                          event={{
                            module: "link",
                            name: "click",
                            data: {
                              link_id: "changed_security_question",
                              // TODO: Enable after the parameter has been added to metrics.yaml.
                              // link_name: `changed_security_question_${breachName}`,
                            },
                          }}
                        />
                      ) : (
                        <span />
                      ),
                    b: <strong />,
                  },
                  vars: {
                    breach_name: breachName,
                    email_affected: emailsFormatter.format(emailsAffected),
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

  return leakedPasswordsData.find((content) => content.type === dataType);
}

export { getLeakedPasswords };
