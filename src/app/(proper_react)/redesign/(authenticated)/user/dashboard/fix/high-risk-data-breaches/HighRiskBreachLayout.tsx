/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import styles from "./HighRiskBreachLayout.module.scss";
import CreditCardIllustration from "../images/high-risk-data-breach-credit-card.svg";
import Image from "next/image";

type HighRiskBreachLayoutProps = {
  dataBreach: "creditCard" | "socialSecurityNumbers" | "bankAccount" | "PIN";
};

export const HighRiskBreachLayout = (props: HighRiskBreachLayoutProps) => {
  const mockedData = [
    { breachName: "Nike", date: "5/04/17" },
    { breachName: "Adidas", date: "6/12/18" },
    { breachName: "Puma", date: "2/22/19" },
  ];

  const listOfBreaches = mockedData
    .map((item) => `${item.breachName} on ${item.date}`)
    .join(", ");

  let title, secondaryDescription, recommendationSteps;
  const primaryDescription = `It appeared in ${mockedData.length} data breaches: ${listOfBreaches}.`;

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

  const PinNumberRecoomendationSteps = (
    <ol>
      <li>Notify your bank immediately that your PIN has been compromised.</li>
      <li>Change your PIN anywhere you’ve used the same one.</li>
      <li>Check your accounts for unauthorized charges.</li>
    </ol>
  );

  switch (props.dataBreach) {
    case "creditCard":
      title = "Your credit card number was exposed";
      secondaryDescription =
        "Anyone who gets it can make unauthorized purchases that you may be liable for. Act now to prevent financial harm.";
      recommendationSteps = CreditCardRecommendationSteps;
      break;
    case "socialSecurityNumbers":
      title = "Social Security Number Data Breach";
      secondaryDescription =
        "Scammers can open up new loans or credit cards with your social security number. Act fast to prevent financial harm.";
      recommendationSteps = SocialSecurityNumberRecommendationSteps;
      break;
    case "bankAccount":
      title = "Bank Account Data Breach";
      secondaryDescription =
        "Taking action ASAP could give you more legal protections to help you recover any losses. ";
      recommendationSteps = BankAccountRecommendationSteps;
      break;
    case "PIN":
      title = "PIN Data Breach";
      secondaryDescription =
        "Taking action ASAP could give you more legal protections to help you recover any losses.";
      recommendationSteps = PinNumberRecoomendationSteps;
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
      </div>
      <div className={styles.illustrationWrapper}>
        <Image src={CreditCardIllustration} alt="" />
      </div>
    </div>
  );
};
