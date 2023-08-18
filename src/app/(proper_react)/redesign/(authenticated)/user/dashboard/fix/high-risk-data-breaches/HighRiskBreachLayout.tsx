/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import styles from "./HighRiskBreachLayout.module.scss";
import CreditCardIllustration from "../images/high-risk-data-breach-credit-card.svg";
import BankAccountIllustration from "../images/high-risk-data-breach-bank-account.svg";
import pinIllustration from "../images/high-risk-data-breach-pin.svg";
import SocialSecurityNumberIllustration from "../images/high-risk-data-breach-ssn.svg";
import Image from "next/image";
import { GuidedExperienceBreaches } from "../../../../../../../functions/server/getUserBreaches";
import { Button } from "../../../../../../../components/server/Button";
import Link from "next/link";
import { SubscriberBreach } from "../../../../../../../../utils/subscriberBreaches";
import { ClockIcon } from "../../../../../../../components/server/Icons";
import { useL10n } from "../../../../../../../hooks/l10n";

type HighRiskBreachLayoutProps = {
  typeOfBreach: "creditCard" | "ssnBreaches" | "bankAccount" | "PIN";
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
      case "PIN":
        exposedData = highRiskDataBreaches.pinBreaches;
        break;
      default:
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
      {item.name}
      <span className={styles.date}>{` on ${dateFormatter.format(
        new Date(item.addedDate)
      )}`}</span>
    </div>
  ));

  const breachList = (
    <div className={styles.breachItemsWrapper}>{listOfBreaches}</div>
  );

  let title, secondaryDescription, recommendationSteps, breachIllustration;

  const primaryDescription = `It appeared in ${exposedData.length} data breaches:`;

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

  const pinRecoomendationSteps = (
    <ol>
      {" "}
      <li>{l10n.getString("high-risk-breach-pin-step-one")}</li>
      <li>{l10n.getString("high-risk-breach-pin-step-two")}</li>
      <li>{l10n.getString("high-risk-breach-pin-step-three")}</li>
    </ol>
  );

  switch (props.typeOfBreach) {
    case "creditCard":
      title = l10n.getString("high-risk-breach-credit-card-title");
      secondaryDescription = l10n.getString(
        "high-risk-breach-credit-card-description"
      );
      recommendationSteps = CreditCardRecommendationSteps;
      breachIllustration = CreditCardIllustration;
      break;
    case "ssnBreaches":
      title = l10n.getString("high-risk-breach-social-security-title");
      secondaryDescription = l10n.getString(
        "high-risk-breach-social-security-description"
      );
      recommendationSteps = SocialSecurityNumberRecommendationSteps;
      breachIllustration = SocialSecurityNumberIllustration;
      break;
    case "bankAccount":
      title = l10n.getString("high-risk-breach-bank-account-title");
      secondaryDescription = l10n.getString(
        "high-risk-breach-bank-account-description"
      );
      recommendationSteps = BankAccountRecommendationSteps;
      breachIllustration = BankAccountIllustration;
      break;
    case "PIN":
      title = l10n.getString("high-risk-breach-pin-title");
      secondaryDescription = l10n.getString("high-risk-breach-pin-description");
      recommendationSteps = pinRecoomendationSteps;
      breachIllustration = pinIllustration;
      break;
    default:
      title = "";
      break;
  }

  return (
    <div className={styles.container}>
      <div className={styles.breachContentWrapper}>
        <h3>{title}</h3>
        <p>{primaryDescription}</p>
        {breachList}
        <p>{secondaryDescription}</p>
        <div className={styles.recommendations}>
          <h4>Here’s what to do</h4>
          <p>
            This requires access to your sensitive info, so you’ll need to
            manually fix it.
          </p>
          {recommendationSteps}
        </div>
        <div className={styles.buttons}>
          <Button
            variant="primary"
            small
            onClick={() => {
              // MNTOR-1700 Add routing logic here
            }}
          >
            Mark as fixed
          </Button>
          <Link
            // TODO: MNTOR-1700 Add routing logic here
            href="/"
          >
            Skip for now
          </Link>
        </div>
        <div className={styles.estimatedTime}>
          <ClockIcon width="20" height="20" />
          Your estimated time: 10+ minutes
        </div>
      </div>
      <div className={`${styles.illustrationWrapper} ${styles.hideOnMobile}`}>
        <Image src={breachIllustration} alt="" />
      </div>
    </div>
  );
};
