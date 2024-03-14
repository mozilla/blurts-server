/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import Image from "next/image";
import type { ReactNode } from "react";
import { ClockIcon } from "../../../../../../../components/server/Icons";
import { useL10n } from "../../../../../../../hooks/l10n";
import styles from "./ResolutionContainer.module.scss";
import { ProgressCard } from "../../../../../../../components/client/ProgressCard";
import { StepDeterminationData } from "../../../../../../../functions/server/getRelevantGuidedSteps";
import { getDashboardSummary } from "../../../../../../../functions/server/dashboard";

type ResolutionContainerProps = {
  type: "highRisk" | "leakedPasswords" | "securityRecommendations";
  title: string;
  illustration: string;
  estimatedTime?: number;
  children: ReactNode;
  isPremiumUser: boolean;
  isEligibleForPremium: boolean;
  isStepDone: boolean;
  data: StepDeterminationData;
  label?: string;
  cta?: ReactNode;
};

export const ResolutionContainer = (props: ResolutionContainerProps) => {
  const l10n = useL10n();
  const estimatedTimeString =
    /* c8 ignore next 8 */
    // Since the Node 20.10 upgrade, it's been intermittently marking this (and
    // this comment) as uncovered, even though I think it's covered by tests.
    props.type === "leakedPasswords"
      ? "leaked-passwords-estimated-time"
      : "high-risk-breach-estimated-time";

  const resolutionSummary = getDashboardSummary(
    props.data.latestScanData?.results ?? [],
    props.data.subscriberBreaches,
  );

  return (
    // TODO: Check with design if toolbar should be on this page
    <div
      className={`${styles.container} ${
        props.illustration ? styles.hasIllustration : ""
      }`}
    >
      <div className={styles.breachContentWrapper}>
        {props.label && <div className={styles.label}>{props.label}</div>}
        <h3>{props.title}</h3>
        {props.isStepDone ? (
          <div className={styles.doneContentWrapper}>
            <div className={styles.doneContent}>{props.children}</div>
            <ProgressCard
              isPremiumUser={props.isPremiumUser}
              isEligibleForPremium={props.isEligibleForPremium}
              resolvedByYou={
                resolutionSummary.dataBrokerManuallyResolvedDataPointsNum +
                resolutionSummary.dataBreachFixedDataPointsNum
              }
              autoRemoved={resolutionSummary.dataBrokerAutoFixedDataPointsNum}
              inProgress={resolutionSummary.dataBrokerInProgressDataPointsNum}
            />
          </div>
        ) : (
          props.children
        )}
        {props.cta && <div className={styles.buttons}>{props.cta}</div>}
        {props.estimatedTime && (
          <div className={styles.estimatedTime}>
            <ClockIcon width="20" height="20" alt="" />
            {l10n.getString(estimatedTimeString, {
              estimated_time: props.estimatedTime,
            })}
          </div>
        )}
      </div>
      {props.illustration && (
        <div className={`${styles.illustrationWrapper} ${styles.hideOnMobile}`}>
          <Image src={props.illustration} alt="" />
        </div>
      )}
    </div>
  );
};
