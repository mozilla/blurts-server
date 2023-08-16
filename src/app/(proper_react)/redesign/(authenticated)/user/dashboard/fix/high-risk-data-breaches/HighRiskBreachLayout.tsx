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

type HighRiskBreachLayoutProps = {
  typeOfBreach: "creditCard" | "ssnBreaches" | "bankAccount" | "PIN";
  breachData: GuidedExperienceBreaches;
};

export const HighRiskBreachLayout = (props: HighRiskBreachLayoutProps) => {
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

  const listOfBreaches = exposedData
    .map(
      (item: SubscriberBreach) =>
        `${item.name} on ${dateFormatter.format(new Date(item.addedDate))}`
    )
    .join(", ");

  let title, secondaryDescription, recommendationSteps, breachIllustration;

  const primaryDescription = `It appeared in ${exposedData.length} data breaches: ${listOfBreaches}.`;

  const CreditCardRecommendationSteps = (
    <ol>
      <li>
        If you still have this card, contact the issuer to report it stolen.
      </li>
      <li>Request a new card with a new number.</li>
      <li>Check your accounts for unauthorized charges.</li>
    </ol>
  );

  const BankAccountRecommendationSteps = (
    <ol>
      <li>
        Notify your bank immediately that your account number has been
        compromised.
      </li>
      <li>Change your account number.</li>
      <li>Check your accounts for unauthorized charges.</li>
    </ol>
  );

  const SocialSecurityNumberRecommendationSteps = (
    <ol>
      <li>
        Protect yourself by setting up a fraud alert or freezing your credit.
      </li>
      <li>Check your credit report for unrecognized accounts.</li>
    </ol>
  );

  const pinRecoomendationSteps = (
    <ol>
      <li>Notify your bank immediately that your PIN has been compromised.</li>
      <li>Change your PIN anywhere you’ve used the same one.</li>
      <li>Check your accounts for unauthorized charges.</li>
    </ol>
  );

  switch (props.typeOfBreach) {
    case "creditCard":
      title = "Your credit card number was exposed";
      secondaryDescription =
        "Anyone who gets it can make unauthorized purchases that you may be liable for. Act now to prevent financial harm.";
      recommendationSteps = CreditCardRecommendationSteps;
      breachIllustration = CreditCardIllustration;
      break;
    case "ssnBreaches":
      title = "Social Security Number Data Breach";
      secondaryDescription =
        "Scammers can open up new loans or credit cards with your social security number. Act fast to prevent financial harm.";
      recommendationSteps = SocialSecurityNumberRecommendationSteps;
      breachIllustration = SocialSecurityNumberIllustration;
      break;
    case "bankAccount":
      title = "Bank Account Data Breach";
      secondaryDescription =
        "Taking action ASAP could give you more legal protections to help you recover any losses. ";
      recommendationSteps = BankAccountRecommendationSteps;
      breachIllustration = BankAccountIllustration;
      break;
    case "PIN":
      title = "PIN Data Breach";
      secondaryDescription =
        "Taking action ASAP could give you more legal protections to help you recover any losses.";
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
