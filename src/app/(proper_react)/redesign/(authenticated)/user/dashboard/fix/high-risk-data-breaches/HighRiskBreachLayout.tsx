/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import styles from "./HighRiskBreachLayout.module.scss";
import { GuidedExperienceBreaches } from "../../../../../../../functions/server/getUserBreaches";
import { SubscriberBreach } from "../../../../../../../../utils/subscriberBreaches";
import { useL10n } from "../../../../../../../hooks/l10n";
import { ResolutionContentLayout } from "../ResolutionContentLayout";
import { HighRiskBreachContent } from "./HighRiskBreachContent";

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
          breach_name: item.title,
          breach_date: dateFormatter.format(new Date(item.addedDate)),
        },
      })}
    </div>
  ));

  const breachList = (
    <div className={styles.breachItemsWrapper}>{listOfBreaches}</div>
  );

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

  const highRiskBreachContent = HighRiskBreachContent(props.typeOfBreach);
  return (
    <ResolutionContentLayout
      type="highRisk"
      title={highRiskBreachContent.title}
      illustration={{
        alt: highRiskBreachContent.illustrationAlt,
        img: highRiskBreachContent.breachIllustration,
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
          {highRiskBreachContent.secondaryDescription}
          <div className={styles.recommendations}>
            <h4>{l10n.getString("high-risk-breach-heading")}</h4>
            <p>{l10n.getString("high-risk-breach-subheading")}</p>
            {highRiskBreachContent.recommendationSteps}
          </div>
        </>
      )}
    </ResolutionContentLayout>
  );
};
