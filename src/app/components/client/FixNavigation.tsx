/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import { ReactNode } from "react";
import Image from "next/image";
import styles from "./FixNavigation.module.scss";
import stepDataBrokerProfilesIcon from "../../(proper_react)/(redesign)/(authenticated)/user/(dashboard)/dashboard/fix/images/step-counter-data-broker-profiles.svg";
import stepHighRiskDataBreachesIcon from "../../(proper_react)/(redesign)/(authenticated)/user/(dashboard)/dashboard/fix/images/step-counter-high-risk.svg";
import stepLeakedPasswordsIcon from "../../(proper_react)/(redesign)/(authenticated)/user/(dashboard)/dashboard/fix/images/step-counter-leaked-passwords.svg";
import stepSecurityRecommendationsIcon from "../../(proper_react)/(redesign)/(authenticated)/user/(dashboard)/dashboard/fix/images/step-counter-security-recommendations.svg";
import { useL10n } from "../../hooks/l10n";
import {
  StepDeterminationData,
  hasCompletedStepSection,
  isEligibleForStep,
} from "../../functions/server/getRelevantGuidedSteps";
import { getGuidedExperienceBreaches } from "../../functions/universal/guidedExperienceBreaches";
import { CheckIcon } from "../server/Icons";
import { FeatureFlagName } from "../../../db/tables/featureFlags";

export type Props = {
  currentSection:
    | "data-broker-profiles"
    | "high-risk-data-breach"
    | "leaked-passwords"
    | "security-recommendations";
  subscriberEmails: string[];
  data: StepDeterminationData;
  label: string;
  enabledFeatureFlags: FeatureFlagName[];
};

export const FixNavigation = (props: Props) => {
  return (
    <nav className={styles.stepsWrapper} aria-label={props.label}>
      <Steps
        currentSection={props.currentSection}
        subscriberEmails={props.subscriberEmails}
        data={props.data}
        enabledFeatureFlags={props.enabledFeatureFlags}
      />
    </nav>
  );
};

export const Steps = (props: {
  currentSection: Props["currentSection"];
  subscriberEmails: string[];
  data: StepDeterminationData;
  enabledFeatureFlags: FeatureFlagName[];
}) => {
  const l10n = useL10n();

  const breachesByClassification = getGuidedExperienceBreaches(
    props.data.subscriberBreaches,
    props.subscriberEmails,
  );
  const totalHighRiskBreaches = Object.values(
    breachesByClassification.highRisk,
  ).reduce((acc, array) => acc + array.length, 0);
  const totalDataBrokerProfiles =
    /* c8 ignore next 3 */
    // Since the Node 20.10 upgrade, it's been intermittently marking this (and
    // this comment) as uncovered, even though I think it's covered by tests.
    props.data.latestScanData?.results.length ?? 0;
  const totalPasswordBreaches = Object.values(
    breachesByClassification.passwordBreaches,
  ).reduce((acc, array) => acc + array.length, 0);
  const totalSecurityRecommendations = Object.values(
    breachesByClassification.securityRecommendations,
  ).filter((value) => {
    return value.length > 0;
  }).length;

  const StepLabel = ({
    label,
    count,
  }: {
    label: string;
    count: number;
  }): ReactNode => (
    <div className={styles.stepLabel}>
      {label} {count > 0 && `(${count})`}
    </div>
  );
  const dataBrokerStepCompleted =
    hasCompletedStepSection(props.data, "Scan") &&
    // TODO: MNTOR-3886 - Remove EnableRemovalUnderMaintenanceStep feature flag
    /* c8 ignore next */
    (!props.enabledFeatureFlags.includes("EnableRemovalUnderMaintenanceStep") ||
      hasCompletedStepSection(props.data, "DataBrokerManualRemoval"));

  return (
    <ul className={styles.steps}>
      {isEligibleForStep(props.data, "Scan") && (
        <li
          aria-current={
            /* c8 ignore next 7 */
            // These lines should be covered by unit tests, but since the Node
            // 20.10 upgrade, it's been intermittently marking this (and this
            // comment) as uncovered.
            props.currentSection === "data-broker-profiles" ? "step" : undefined
          }
          className={`${styles.navigationItem} ${
            props.currentSection === "data-broker-profiles" ? styles.active : ""
          } ${dataBrokerStepCompleted ? styles.isCompleted : ""}`}
        >
          <div className={styles.stepIcon}>
            <StepImage data={props.data} section="Scan" />
          </div>
          <StepLabel
            label={l10n.getString("fix-flow-nav-data-broker-profiles")}
            count={totalDataBrokerProfiles}
          />
        </li>
      )}
      <li
        aria-current={
          /* c8 ignore next 11 */
          // These lines should be covered by unit tests, but since the Node
          // 20.10 upgrade, it's been intermittently marking this (and this
          // comment) as uncovered.
          props.currentSection === "high-risk-data-breach" ? "step" : undefined
        }
        className={`${styles.navigationItem} ${
          props.currentSection === "high-risk-data-breach" ? styles.active : ""
        } ${
          hasCompletedStepSection(props.data, "HighRisk")
            ? styles.isCompleted
            : ""
        }`}
      >
        <div className={styles.stepIcon}>
          <StepImage data={props.data} section="HighRisk" />
        </div>
        <StepLabel
          label={l10n.getString("fix-flow-nav-high-risk-data-breaches")}
          count={totalHighRiskBreaches}
        />
      </li>
      <li
        aria-current={
          /* c8 ignore next 11 */
          // These lines should be covered by unit tests, but since the Node
          // 20.10 upgrade, it's been intermittently marking this (and this
          // comment) as uncovered.
          props.currentSection === "leaked-passwords" ? "step" : undefined
        }
        className={`${styles.navigationItem} ${
          props.currentSection === "leaked-passwords" ? styles.active : ""
        } ${
          hasCompletedStepSection(props.data, "LeakedPasswords")
            ? styles.isCompleted
            : ""
        }`}
      >
        <div className={styles.stepIcon}>
          <StepImage data={props.data} section="LeakedPasswords" />
        </div>
        <StepLabel
          label={l10n.getString("fix-flow-nav-leaked-passwords")}
          count={totalPasswordBreaches}
        />
      </li>
      <li
        aria-current={
          /* c8 ignore next 5 */
          // This line should be covered by unit tests, but since the Node 20.10
          // upgrade, it's been intermittently marking this (and this comment)
          // as uncovered.
          props.currentSection === "security-recommendations"
            ? "step"
            : undefined
        }
        className={`${styles.navigationItem} ${
          /* c8 ignore next 5 */
          // This line should be covered by unit tests, but since the Node 20.10
          // upgrade, it's been intermittently marking this (and this comment)
          // as uncovered.
          props.currentSection === "security-recommendations"
            ? styles.active
            : ""
        } ${
          hasCompletedStepSection(props.data, "SecurityTips")
            ? styles.isCompleted
            : /* c8 ignore next 4 */
              // This line should be covered by unit tests, but since the Node 20.10
              // upgrade, it's been intermittently marking this (and this comment)
              // as uncovered.
              ""
        }`}
      >
        <div className={styles.stepIcon}>
          <StepImage data={props.data} section="SecurityTips" />
        </div>
        <StepLabel
          label={l10n.getString("fix-flow-nav-security-recommendations")}
          count={totalSecurityRecommendations}
        />
      </li>
      <li className={styles.progressBarLineContainer} aria-hidden>
        <div className={styles.progressBarLineWrapper}>
          <div
            className={`${
              styles.activeProgressBarLine
            } ${calculateActiveProgressBarPosition(props.currentSection)} ${
              /* c8 ignore next 5 */
              // Since the Node 20.10 upgrade, it's been intermittently marking
              // this (and this comment) as uncovered, even though I think it's
              // covered by tests.
              isEligibleForStep(props.data, "Scan")
                ? styles.hasFourSteps
                : styles.hasThreeSteps
            }`}
          ></div>
        </div>
      </li>
    </ul>
  );
};

const StepImage = (props: {
  data: StepDeterminationData;
  section: Parameters<typeof hasCompletedStepSection>[1];
}) => {
  if (hasCompletedStepSection(props.data, props.section)) {
    return (
      <CheckIcon className={styles.checkIcon} alt="" width={22} height={22} />
    );
  }

  /* c8 ignore next 10 */
  // Since the Node 20.10 upgrade, it's been intermittently marking this (and
  // this comment) as uncovered, even though I think it's covered by tests.
  const src =
    props.section === "Scan"
      ? stepDataBrokerProfilesIcon
      : props.section === "HighRisk"
        ? stepHighRiskDataBreachesIcon
        : props.section === "LeakedPasswords"
          ? stepLeakedPasswordsIcon
          : stepSecurityRecommendationsIcon;

  return <Image src={src} alt="" width={22} height={22} />;
};

/* c8 ignore next 14 */
// These lines should be covered by unit tests, but since the Node 20.10
// upgrade, it's been intermittently marking them (and this comment) as
// uncovered.
function calculateActiveProgressBarPosition(section: Props["currentSection"]) {
  if (section === "high-risk-data-breach") {
    return styles.beginHighRiskDataBreaches;
  } else if (section === "leaked-passwords") {
    return styles.beginLeakedPasswords;
  } else if (section === "security-recommendations") {
    return styles.beginSecurityRecommendations;
  } else {
    return "";
  }
}
