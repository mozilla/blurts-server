/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import type { ReactNode } from "react";
import emailIllustration from "../images/security-recommendations-email.svg";
import phoneIllustration from "../images/security-recommendations-phone.svg";
import ipIllustration from "../images/security-recommendations-ip.svg";
import { getL10n } from "../../../../../../../functions/server/l10n";

export type SecurityRecommendationContent = {
  description: ReactNode;
  recommendations?: {
    title: string;
    steps: ReactNode;
    subtitle?: string;
  };
};

export type SecurityRecommendationTypes = "phone" | "email" | "ip";

export type SecurityRecommendation = {
  type: SecurityRecommendationTypes;
  title: string;
  illustration: string;
  content: SecurityRecommendationContent;
};

function getSecurityRecommendationsByType(dataType: string) {
  const l10n = getL10n();

  const securityRecommendationsData: SecurityRecommendation[] = [
    {
      type: "phone",
      title: l10n.getString("security-recommendation-phone-title"),
      illustration: phoneIllustration,
      content: {
        description: (
          <p>{l10n.getString("security-recommendation-phone-description")}</p>
        ),
        recommendations: {
          title: l10n.getString("security-recommendation-steps-title"),
          steps: (
            <ol>
              <li>
                {l10n.getString("security-recommendation-phone-step-one")}
              </li>
              <li>
                {l10n.getString("security-recommendation-phone-step-two")}
              </li>
              <li>
                {l10n.getFragment("security-recommendation-phone-step-three", {
                  elems: {
                    link_to_info: (
                      <a
                        href="https://relay.firefox.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                      />
                    ),
                  },
                })}
              </li>
            </ol>
          ),
        },
      },
    },
    {
      type: "email",
      title: l10n.getString("security-recommendation-email-title"),
      illustration: emailIllustration,
      content: {
        description: (
          <p>{l10n.getString("security-recommendation-email-description")}</p>
        ),
        recommendations: {
          title: l10n.getString("security-recommendation-steps-title"),
          steps: (
            <ol>
              <li>
                {l10n.getString("security-recommendation-email-step-one")}
              </li>
              <li>
                {l10n.getFragment("security-recommendation-email-step-two", {
                  elems: {
                    link_to_info: (
                      <a
                        href="https://consumer.ftc.gov/articles/how-recognize-and-avoid-phishing-scams"
                        target="_blank"
                        rel="noopener noreferrer"
                      />
                    ),
                  },
                })}
              </li>
              <li>
                {l10n.getString("security-recommendation-email-step-three")}
              </li>
              <li>
                {l10n.getFragment("security-recommendation-email-step-four", {
                  elems: {
                    link_to_info: (
                      <a
                        href="https://relay.firefox.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                      />
                    ),
                  },
                })}
              </li>
            </ol>
          ),
        },
      },
    },
    {
      type: "ip",
      title: l10n.getString("security-recommendation-ip-title"),
      illustration: ipIllustration,
      content: {
        description: (
          <p>{l10n.getString("security-recommendation-ip-description")}</p>
        ),
        recommendations: {
          title: l10n.getString("security-recommendation-steps-title"),
          steps: (
            <ul>
              <li>
                {l10n.getFragment("security-recommendation-ip-step-one", {
                  elems: {
                    link_to_info: (
                      <a
                        href="https://www.mozilla.org/products/vpn/?entrypoint_experiment=vpn-refresh-pricing&entrypoint_variation=1"
                        target="_blank"
                        rel="noopener noreferrer"
                      />
                    ),
                  },
                })}
              </li>
            </ul>
          ),
        },
      },
    },
  ];

  return securityRecommendationsData.find(
    (content) => content.type === dataType
  );
}

export { getSecurityRecommendationsByType };
