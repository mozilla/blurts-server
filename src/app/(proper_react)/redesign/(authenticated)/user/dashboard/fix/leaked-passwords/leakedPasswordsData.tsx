/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import type { ReactNode } from "react";
import passwordIllustration from "../images/leaked-passwords.svg";
import securityQuestionsIllustration from "../images/security-questions.svg";
import { SubscriberBreach } from "../../../../../../../../utils/subscriberBreaches";
import { GuidedExperienceBreaches } from "../../../../../../../functions/server/getUserBreaches";
import { getL10n } from "../../../../../../../functions/server/l10n";

export type LeakedPasswordsContent = {
  summary: string;
  description: ReactNode;
  recommendations?: {
    title: string;
    steps: ReactNode;
    subtitle?: string;
  };
};

export type LeakedPasswordsTypes = "password" | "security-questions";

export type LeakedPassword = {
  type: LeakedPasswordsTypes;
  title: string;
  illustration: string;
  content: LeakedPasswordsContent;
  exposedData?: SubscriberBreach[];
};

function getLeakedPasswords({
  dataType,
  breaches,
}: {
  dataType: string;
  breaches: GuidedExperienceBreaches;
}) {
  const l10n = getL10n();

  const firstUnresolvedPasswordBreach = () => {
    for (const breach of Object.values(breaches.passwordBreaches)) {
      if (!breach.isResolved) {
        return breach;
      }
    }
    return null;
  };

  // TODO: Add a different array for security questions

  const unresolvedBreach = firstUnresolvedPasswordBreach();
  const breachName = unresolvedBreach ? unresolvedBreach.name : "";
  const breachDate = unresolvedBreach ? unresolvedBreach.breachDate : "";
  const breachSite = unresolvedBreach
    ? `/breach-details/${unresolvedBreach.name}`
    : "";

  const leakedPasswordsData: LeakedPassword[] = [
    {
      type: "password",
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
                    // TODO: Find a way  to go to the actual breach site
                    link_to_breach_site: (
                      <a
                        href={breachSite}
                        target="_blank"
                        rel="noopener noreferrer"
                      />
                    ),
                  },
                  vars: {
                    breach_name: breachName,
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
                    // TODO: Find a way  to go to the actual breach site
                    link_to_breach_site: (
                      <a
                        href={breachSite}
                        target="_blank"
                        rel="noopener noreferrer"
                      />
                    ),
                  },
                  vars: {
                    breach_name: breachName,
                  },
                })}
              </li>
              <li>{l10n.getFragment("leaked-security-questions-step-two")}</li>
            </ol>
          ),
        },
      },
    },
  ];

  return leakedPasswordsData.find((content) => content.type === dataType);
}

export { getLeakedPasswords };
