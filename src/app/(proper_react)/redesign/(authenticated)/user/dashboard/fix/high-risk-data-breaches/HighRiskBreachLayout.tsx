/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import { GuidedExperienceBreaches } from "../../../../../../../functions/server/getUserBreaches";
import { SubscriberBreach } from "../../../../../../../../utils/subscriberBreaches";
import { useL10n } from "../../../../../../../hooks/l10n";
import { ResolutionContainer } from "../ResolutionContainer";
import { HighRiskBreachContent } from "./HighRiskBreachContent";
import { ResolutionContent } from "../ResolutionContent";
import { Button } from "../../../../../../../components/server/Button";
import Link from "next/link";

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

  const hasBreaches = props.typeOfBreach !== "none";
  const cta = (
    <>
      <Button
        variant="primary"
        small
        // TODO: Add test once MNTOR-1700 logic is added
        /* c8 ignore next 3 */
        onClick={() => {
          // TODO: MNTOR-1700 Add routing logic + fix event here
        }}
      >
        {hasBreaches
          ? l10n.getString("high-risk-breach-mark-as-fixed")
          : l10n.getString("high-risk-breach-none-continue")}
      </Button>
      {hasBreaches && (
        <Link
          // TODO: Add test once MNTOR-1700 logic is added
          /* c8 ignore next */
          href="/"
        >
          {l10n.getString("high-risk-breach-none-continue")}
        </Link>
      )}
    </>
  );

  const highRiskBreachContent = HighRiskBreachContent({
    locale: props.locale,
    typeOfBreach: props.typeOfBreach,
  });
  return (
    <ResolutionContainer
      type="highRisk"
      title={highRiskBreachContent.title}
      illustration={{
        alt: highRiskBreachContent.illustrationAlt,
        img: highRiskBreachContent.breachIllustration,
      }}
      cta={cta}
      estimatedTime={hasBreaches ? 15 : undefined}
    >
      {hasBreaches && (
        <ResolutionContent
          content={highRiskBreachContent}
          exposedData={exposedData}
        />
      )}
    </ResolutionContainer>
  );
};
