/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import styles from "./HighRiskBreachLayout.module.scss";
import CreditCardIllustration from "../images/high-risk-data-breach-credit-card.svg";
import BankAccountIllustration from "../images/high-risk-data-breach-bank-account.svg";
import pinIllustration from "../images/high-risk-data-breach-pin.svg";
import SocialSecurityNumberIllustration from "../images/high-risk-data-breach-ssn.svg";
import NoBreachesIllustration from "../images/high-risk-breaches-none.svg";
import { GuidedExperienceBreaches } from "../../../../../../../functions/server/getUserBreaches";
import { SubscriberBreach } from "../../../../../../../../utils/subscriberBreaches";
import { useL10n } from "../../../../../../../hooks/l10n";
import { ResolutionContentLayout } from "../ResolutionContentLayout";

type HighRiskBreachLayoutProps = {
  typeOfBreach: "creditCard" | "ssnBreaches" | "bankAccount" | "pin" | "none";
  breachData: GuidedExperienceBreaches;
  locale: string;
};

export const HighRiskBreachLayout = (props: HighRiskBreachLayoutProps) => {
  const l10n = useL10n();
  const highRiskDataBreaches = props.breachData.highRisk;
  let exposedData: SubscriberBreach[] = [];

  if (props.breachData) {
    switch (props.typeOfBreach) {
      case "ssnBreaches":
        exposedData = highRiskDataBreaches.ssnBreaches;
        break;
      case "creditCard":
        exposedData = highRiskDataBreaches.creditCardBreaches;
        break;
      case "bankAccount":
        exposedData = highRiskDataBreaches.bankBreaches;
        break;
      case "pin":
        exposedData = highRiskDataBreaches.pinBreaches;
        break;
      case "none":
      default:
        exposedData = [];
        break;
    }
  }

  const dateFormatter = new Intl.DateTimeFormat("en-US", {
    dateStyle: "short",
  });

  const listOfBreaches = exposedData.map((item: SubscriberBreach) => (
    <div key={item.id} className={styles.breachItem}>
      {l10n.getFragment("high-risk-breach-name-and-date", {
        elems: { breach_date: <span className={styles.date} /> },
        vars: {
          breach_name: item.name,
          breach_date: dateFormatter.format(new Date(item.addedDate)),
        },
      })}
    </div>
  ));

  const breachList = (
    <div className={styles.breachItemsWrapper}>{listOfBreaches}</div>
  );

  let title, secondaryDescription, recommendationSteps, breachIllustration;

  //TODO: Move high risk content into its own file, turn links into variables MNTOR-2126
  const CreditCardRecommendationSteps = (
    <ol>
      <li>{l10n.getString("high-risk-breach-credit-card-step-one")}</li>
      <li>{l10n.getString("high-risk-breach-credit-card-step-two")}</li>
      <li>{l10n.getString("high-risk-breach-credit-card-step-three")}</li>
    </ol>
  );

  const BankAccountRecommendationSteps = (
    <ol>
      <li>{l10n.getString("high-risk-breach-bank-account-step-one")}</li>
      <li>{l10n.getString("high-risk-breach-bank-account-step-two")}</li>
      <li>{l10n.getString("high-risk-breach-bank-account-step-three")}</li>
    </ol>
  );

  const SocialSecurityNumberRecommendationSteps = (
    <ol>
      <li>
        {l10n.getFragment("high-risk-breach-social-security-step-one", {
          elems: {
            link_to_info: (
              <a href="https://consumer.ftc.gov/articles/what-know-about-credit-freezes-fraud-alerts" />
            ),
          },
        })}
      </li>
      <li>
        {l10n.getFragment("high-risk-breach-social-security-step-two", {
          elems: {
            link_to_info: (
              <a href="https://www.annualcreditreport.com/index.action" />
            ),
          },
        })}
      </li>
    </ol>
  );

  const pinRecommendationSteps = (
    <ol>
      <li>{l10n.getString("high-risk-breach-pin-step-one")}</li>
      <li>{l10n.getString("high-risk-breach-pin-step-two")}</li>
      <li>{l10n.getString("high-risk-breach-pin-step-three")}</li>
    </ol>
  );

  // TODO: Expose email list & count here https://mozilla-hub.atlassian.net/browse/MNTOR-2112
  const emailsMonitored = ["email1@gmail.com", "email2@gmail.com"]; // mocked
  const emailsFormatter = new Intl.ListFormat("en-US", {
    style: "long",
    type: "conjunction",
  });

  switch (props.typeOfBreach) {
    case "creditCard":
      title = l10n.getString("high-risk-breach-credit-card-title");
      secondaryDescription = (
        <p>{l10n.getString("high-risk-breach-credit-card-description")}</p>
      );
      recommendationSteps = CreditCardRecommendationSteps;
      breachIllustration = CreditCardIllustration;
      break;
    case "ssnBreaches":
      title = l10n.getString("high-risk-breach-social-security-title");
      secondaryDescription = (
        <p>{l10n.getString("high-risk-breach-social-security-description")}</p>
      );
      recommendationSteps = SocialSecurityNumberRecommendationSteps;
      breachIllustration = SocialSecurityNumberIllustration;
      break;
    case "bankAccount":
      title = l10n.getString("high-risk-breach-bank-account-title");
      secondaryDescription = (
        <p>{l10n.getString("high-risk-breach-bank-account-description")}</p>
      );
      recommendationSteps = BankAccountRecommendationSteps;
      breachIllustration = BankAccountIllustration;
      break;
    case "pin":
      title = l10n.getString("high-risk-breach-pin-title");
      secondaryDescription = (
        <p>{l10n.getString("high-risk-breach-pin-description")}</p>
      );
      recommendationSteps = pinRecommendationSteps;
      breachIllustration = pinIllustration;
      break;
    default:
      title = l10n.getString("high-risk-breach-none-title");
      secondaryDescription = (
        <>
          <p>
            {l10n.getString("high-risk-breach-none-description", {
              // TODO: Expose email list & count here https://mozilla-hub.atlassian.net/browse/MNTOR-2112
              email_list: emailsFormatter.format(emailsMonitored),
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
      );
      breachIllustration = NoBreachesIllustration;
      break;
  }

  const primaryCta =
    props.typeOfBreach !== "none"
      ? {
          label: l10n.getString("high-risk-breach-mark-as-fixed"),
          // TODO: Add test once MNTOR-1700 logic is added
          /* c8 ignore start */
          onClick: () => {
            // TODO: MNTOR-1700 Add routing logic + fix event here
          },
          skip: "/", // TODO: MNTOR-1700 Add routing logic here
        }
      : {
          label: l10n.getString("high-risk-breach-none-continue"),
          onClick: () => {
            // TODO: MNTOR-1700 Add routing logic
          },
          /* c8 ignore stop */
        };

  let illustrationAlt;
  switch (props.typeOfBreach) {
    case "bankAccount":
      illustrationAlt = l10n.getString(
        "high-risk-breach-bank-account-illustration-alt"
      );
      break;
    case "creditCard":
      illustrationAlt = l10n.getString(
        "high-risk-breach-credit-card-illustration-alt"
      );
      break;
    case "pin":
      illustrationAlt = l10n.getString("high-risk-breach-pin-illustration-alt");
      break;
    case "ssnBreaches":
      illustrationAlt = l10n.getString(
        "high-risk-breach-social-security-illustration-alt"
      );
      break;
    default:
      illustrationAlt = l10n.getString(
        "high-risk-breach-none-illustration-alt"
      );
  }

  return (
    <ResolutionContentLayout
      type="highRisk"
      title={title}
      illustration={{
        alt: illustrationAlt,
        img: breachIllustration,
      }}
      cta={primaryCta}
      estimatedTime={props.typeOfBreach !== "none" ? 15 : undefined}
    >
      {props.typeOfBreach !== "none" && (
        <>
          <p>
            {l10n.getString("high-risk-breach-summary", {
              num_breaches: exposedData.length,
            })}
          </p>
          {breachList}
          {secondaryDescription}
          <div className={styles.recommendations}>
            <h4>{l10n.getString("high-risk-breach-heading")}</h4>
            <p>{l10n.getString("high-risk-breach-subheading")}</p>
            {recommendationSteps}
          </div>
        </>
      )}
    </ResolutionContentLayout>
  );
};
