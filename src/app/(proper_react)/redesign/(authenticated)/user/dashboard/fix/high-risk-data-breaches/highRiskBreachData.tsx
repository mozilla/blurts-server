/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import type { ReactNode } from "react";
import { getL10n } from "../../../../../../../functions/server/l10n";
import { SubscriberBreach } from "../../../../../../../../utils/subscriberBreaches";
import creditCardIllustration from "../images/high-risk-data-breach-credit-card.svg";
import socialSecurityNumberIllustration from "../images/high-risk-data-breach-ssn.svg";
import bankAccountIllustration from "../images/high-risk-data-breach-bank-account.svg";
import pinIllustration from "../images/high-risk-data-breach-pin.svg";
import noBreachesIllustration from "../images/high-risk-breaches-none.svg";
import { GuidedExperienceBreaches } from "../../../../../../../functions/server/getUserBreaches";
import { FraudAlertModal } from "./FraudAlertModal";
import { getLocale } from "../../../../../../../functions/universal/getLocale";

export type HighRiskBreachContent = {
  summary: string;
  description: ReactNode;
  recommendations?: {
    title: string;
    steps: ReactNode;
    subtitle?: string;
  };
};

export type HighRiskBreachTypes =
  | "credit-card"
  | "ssn"
  | "bank-account"
  | "pin"
  | "none";

export type HighRiskBreach = {
  type: HighRiskBreachTypes;
  title: string;
  illustration: string;
  content: HighRiskBreachContent;
  exposedData: SubscriberBreach[];
};

function getHighRiskBreachesByType({
  dataType,
  breaches,
}: {
  dataType: string;
  breaches: GuidedExperienceBreaches;
}) {
  const l10n = getL10n();

  // TODO: Expose email list & count here https://mozilla-hub.atlassian.net/browse/MNTOR-2112
  const emailsFormatter = new Intl.ListFormat(getLocale(l10n), {
    style: "long",
    type: "conjunction",
  });

  const highRiskBreachData: HighRiskBreach[] = [
    {
      type: "credit-card",
      title: l10n.getString("high-risk-breach-credit-card-title"),
      illustration: creditCardIllustration,
      exposedData: breaches.highRisk.creditCardBreaches,
      content: {
        summary: l10n.getString("high-risk-breach-summary", {
          num_breaches: 0,
        }),
        description: (
          <p>{l10n.getString("high-risk-breach-credit-card-description")}</p>
        ),
        recommendations: {
          title: l10n.getString("high-risk-breach-heading"),
          subtitle: l10n.getString("high-risk-breach-subheading"),
          steps: (
            <ol>
              <li>{l10n.getString("high-risk-breach-credit-card-step-one")}</li>
              <li>{l10n.getString("high-risk-breach-credit-card-step-two")}</li>
              <li>
                {l10n.getString("high-risk-breach-credit-card-step-three")}
              </li>
            </ol>
          ),
        },
      },
    },
    {
      type: "ssn",
      title: l10n.getString("high-risk-breach-social-security-title"),
      illustration: socialSecurityNumberIllustration,
      exposedData: breaches.highRisk.ssnBreaches,
      content: {
        summary: l10n.getString("high-risk-breach-summary", {
          num_breaches: 0,
        }),
        description: (
          <p>
            {l10n.getString("high-risk-breach-social-security-description")}
          </p>
        ),
        recommendations: {
          title: l10n.getString("high-risk-breach-heading"),
          subtitle: l10n.getString("high-risk-breach-subheading"),
          steps: (
            <ol>
              <li>
                {l10n.getFragment("high-risk-breach-social-security-step-one", {
                  elems: {
                    link_to_info: (
                      <a
                        href="https://consumer.ftc.gov/articles/what-know-about-credit-freezes-fraud-alerts"
                        target="_blank"
                        rel="noopener noreferrer"
                      />
                    ),
                  },
                })}
                <FraudAlertModal />
              </li>
              <li>
                {l10n.getFragment("high-risk-breach-social-security-step-two", {
                  elems: {
                    link_to_info: (
                      <a
                        href="https://www.annualcreditreport.com/index.action"
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
      type: "bank-account",
      title: l10n.getString("high-risk-breach-bank-account-title"),
      illustration: bankAccountIllustration,
      exposedData: breaches.highRisk.bankBreaches,
      content: {
        summary: l10n.getString("high-risk-breach-summary", {
          num_breaches: 0,
        }),
        description: (
          <p>{l10n.getString("high-risk-breach-bank-account-description")}</p>
        ),
        recommendations: {
          title: l10n.getString("high-risk-breach-heading"),
          subtitle: l10n.getString("high-risk-breach-subheading"),
          steps: (
            <ol>
              <li>
                {l10n.getString("high-risk-breach-bank-account-step-one")}
              </li>
              <li>
                {l10n.getString("high-risk-breach-bank-account-step-two")}
              </li>
              <li>
                {l10n.getString("high-risk-breach-bank-account-step-three")}
              </li>
            </ol>
          ),
        },
      },
    },
    {
      type: "pin",
      title: l10n.getString("high-risk-breach-pin-title"),
      illustration: pinIllustration,
      exposedData: breaches.highRisk.pinBreaches,
      content: {
        summary: l10n.getString("high-risk-breach-summary", {
          num_breaches: 0,
        }),
        description: (
          <p>{l10n.getString("high-risk-breach-pin-description")}</p>
        ),
        recommendations: {
          title: l10n.getString("high-risk-breach-heading"),
          subtitle: l10n.getString("high-risk-breach-subheading"),
          steps: (
            <ol>
              <li>{l10n.getString("high-risk-breach-pin-step-one")}</li>
              <li>{l10n.getString("high-risk-breach-pin-step-two")}</li>
              <li>{l10n.getString("high-risk-breach-pin-step-three")}</li>
            </ol>
          ),
        },
      },
    },
    {
      type: "none",
      title: l10n.getString("high-risk-breach-none-title"),
      illustration: noBreachesIllustration,
      exposedData: [],
      content: {
        summary: "",
        description: (
          <>
            <p>
              {l10n.getString("high-risk-breach-none-description", {
                // TODO: Expose email list & count here https://mozilla-hub.atlassian.net/browse/MNTOR-2112
                email_list: emailsFormatter.format(breaches.emails),
              })}
            </p>
            <p>
              {l10n.getString("high-risk-breach-none-sub-description-part-one")}
            </p>
            <ul>
              <li>
                {l10n.getString("high-risk-breach-none-sub-description-ssn")}
              </li>
              <li>
                {l10n.getString(
                  "high-risk-breach-none-sub-description-bank-account"
                )}
              </li>
              <li>
                {l10n.getString(
                  "high-risk-breach-none-sub-description-cc-number"
                )}
              </li>
              <li>
                {l10n.getString("high-risk-breach-none-sub-description-pin")}
              </li>
            </ul>
          </>
        ),
      },
    },
  ];

  return highRiskBreachData.find((content) => content.type === dataType);
}

export { getHighRiskBreachesByType };
