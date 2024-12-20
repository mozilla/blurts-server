/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import Link from "next/link";
import Image from "next/image";
import { ReactNode, useEffect, useRef } from "react";
import { Confetti } from "../../../../../../../components/client/Confetti";
import { FixNavigation } from "../../../../../../../components/client/FixNavigation";
import styles from "./fix.module.scss";
import ImageArrowRight from "./images/icon-arrow-right.svg";
import ImageClose from "./images/icon-close.svg";
import { useL10n } from "../../../../../../../hooks/l10n";
import {
  StepDeterminationData,
  StepLink,
} from "../../../../../../../functions/server/getRelevantGuidedSteps";
import { useTelemetry } from "../../../../../../../hooks/useTelemetry";
import { TelemetryButton } from "../../../../../../../components/client/TelemetryButton";
import { FeatureFlagName } from "../../../../../../../../db/tables/featureFlags";

export type FixViewProps = {
  children: ReactNode;
  subscriberEmails: string[];
  data: StepDeterminationData;
  nextStep: StepLink | (() => void);
  currentSection:
    | "data-broker-profiles"
    | "high-risk-data-breach"
    | "leaked-passwords"
    | "security-recommendations";
  hideProgressIndicator?: boolean;
  hideNavClose?: boolean;
  hideNextNavigationRightArrow?: boolean;
  showConfetti?: boolean;
  enabledFeatureFlags: FeatureFlagName[];
};

export const FixView = (props: FixViewProps) => {
  const l10n = useL10n();
  const recordTelemetry = useTelemetry();
  const isResolutionLayout = [
    "high-risk-data-breach",
    "leaked-passwords",
    "security-recommendations",
  ].includes(props.currentSection);

  const fixContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Redirects focus to the top-level wrapper element
    fixContainerRef.current?.focus();
  }, []);

  const navigationClose = () => {
    return (
      <Link
        href="/user/dashboard"
        className={styles.navClose}
        aria-label={l10n.getString("guided-resolution-flow-exit")}
        onClick={() => {
          recordTelemetry("button", "click", {
            button_id: "exited_guided_experience",
          });
        }}
      >
        <Image alt="" src={ImageClose} />
      </Link>
    );
  };

  return (
    <div className={styles.fixContainer} tabIndex={-1} ref={fixContainerRef}>
      {props.showConfetti && <Confetti />}
      <div
        className={`${styles.fixWrapper} ${
          isResolutionLayout
            ? styles.highRiskDataBreachContentBg
            : /* c8 ignore next 4 */
              // Since the Node 20.10 upgrade, it's been intermittently marking
              // this (and this comment) as uncovered, even though I think it's
              // covered by tests.
              ""
        }`}
      >
        {!props.hideProgressIndicator && (
          <FixNavigation
            currentSection={props.currentSection}
            data={props.data}
            subscriberEmails={props.subscriberEmails}
            label={l10n.getString(
              "guided-resolution-flow-step-navigation-label",
            )}
            enabledFeatureFlags={props.enabledFeatureFlags}
          />
        )}
        {!props.hideNavClose && navigationClose()}
        <section className={styles.fixSection}>
          <div className={styles.viewWrapper}>{props.children}</div>
          {!props.hideNextNavigationRightArrow &&
            (isNextStepALink(props.nextStep) ? (
              <Link
                className={`${styles.navArrow} ${styles.navArrowNext}`}
                href={props.nextStep.href}
                aria-label={l10n.getString("guided-resolution-flow-next-arrow")}
                onClick={() => {
                  recordTelemetry("button", "click", {
                    button_id: "next_arrow",
                  });
                }}
              >
                <Image alt="" src={ImageArrowRight} />
              </Link>
            ) : (
              <TelemetryButton
                className={`${styles.navArrow} ${styles.navArrowNext}`}
                event={{
                  module: "button",
                  name: "click",
                  data: {
                    button_id: "go_to_next_result",
                  },
                }}
                variant="link"
                onPress={props.nextStep}
                aria-label={l10n.getString(
                  "guided-resolution-flow-next-arrow-sub-step",
                )}
              >
                <Image alt="" src={ImageArrowRight} />
              </TelemetryButton>
            ))}
        </section>
      </div>
    </div>
  );
};

function isNextStepALink(
  nextStep: StepLink | (() => void),
): nextStep is StepLink {
  return "href" in nextStep;
}
