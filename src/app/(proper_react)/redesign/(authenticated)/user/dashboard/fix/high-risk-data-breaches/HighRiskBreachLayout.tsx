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
      default:
        "none";
        break;
    }
  }

  // TODO: Make locale location-sensitive in the future
  const dateFormatter = new Intl.DateTimeFormat("en-US", {
    // See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#datestyle
    dateStyle: "short",
  });

  const listOfBreaches = exposedData.map((item: SubscriberBreach) => (
    <div key={item.id} className={styles.breachItem}>
      {/* TODO: Localize all date values MNTOR-2111 */}
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
      <li>{l10n.getString("high-risk-breach-social-security-step-one")}</li>
      <li>{l10n.getString("high-risk-breach-social-security-step-two")}</li>
    </ol>
  );

  const pinRecommendationSteps = (
    <ol>
      <li>{l10n.getString("high-risk-breach-pin-step-one")}</li>
      <li>{l10n.getString("high-risk-breach-pin-step-two")}</li>
      <li>{l10n.getString("high-risk-breach-pin-step-three")}</li>
    </ol>
  );

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
              num_email: 2, // mocked
              email_list: "mocked@gmailcom, tony@gmail.com", // mocked
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
          onClick: () => {
            // TODO: MNTOR-1700 Add routing logic + fix event here
          },
          skip: "/", // TODO: MNTOR-1700 Add routing logic here
        }
      : {
          label: l10n.getString("high-risk-breach-none-continue"),
          onClick: () => {
            // TODO: MNTOR-1700 Add routing logic + fix event here
          },
        };

  return (
    <ResolutionContentLayout
      type="highRisk"
      title={title}
      illustration={breachIllustration}
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
          <div className={styles.recommendations}>
            <h4>{l10n.getString("high-risk-breach-heading")}</h4>
            <p>{l10n.getString("high-risk-breach-subheading")}</p>
            {recommendationSteps}
          </div>
        </>
      )}
      {secondaryDescription}
    </ResolutionContentLayout>
  );
};
