/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import Image from "next/image";
import styles from "./FixNavigation.module.scss";
import stepDataBrokerProfilesIcon from "../../(proper_react)/redesign/(authenticated)/user/dashboard/fix/images/step-counter-data-broker-profiles.svg";
import stepHighRiskDataBreachesIcon from "../../(proper_react)/redesign/(authenticated)/user/dashboard/fix/images/step-counter-high-risk.svg";
import stepLeakedPasswordsIcon from "../../(proper_react)/redesign/(authenticated)/user/dashboard/fix/images/step-counter-leaked-passwords.svg";
import stepSecurityRecommendationsIcon from "../../(proper_react)/redesign/(authenticated)/user/dashboard/fix/images/step-counter-security-recommendations.svg";
import { useL10n } from "../../hooks/l10n";
import { StepDeterminationData } from "../../functions/server/getRelevantGuidedSteps";
import { getGuidedExperienceBreaches } from "../../functions/universal/guidedExperienceBreaches";

export type Props = {
  currentSection:
    | "data-broker-profiles"
    | "high-risk-data-breach"
    | "leaked-passwords"
    | "security-recommendations";
  subscriberEmails: string[];
  data: StepDeterminationData;
  label: string;
};

export const FixNavigation = (props: Props) => {
  return (
    <nav className={styles.stepsWrapper} aria-label={props.label}>
      <Steps
        currentSection={props.currentSection}
        subscriberEmails={props.subscriberEmails}
        data={props.data}
      />
    </nav>
  );
};

export const Steps = (props: {
  currentSection: Props["currentSection"];
  subscriberEmails: string[];
  data: StepDeterminationData;
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
    // No tests simulate the absence of scan data yet:
    /* c8 ignore next */
    props.data.latestScanData?.results.length ?? 0;
  const totalPasswordBreaches = Object.values(
    breachesByClassification.passwordBreaches,
  ).reduce((acc, array) => acc + array.length, 0);
  const totalSecurityRecommendations = Object.values(
    breachesByClassification.securityRecommendations,
  ).filter((value) => {
    return value.length > 0;
  }).length;

  return (
    <ul className={styles.steps}>
      <li
        aria-current={
          props.currentSection === "data-broker-profiles" ? "step" : undefined
        }
        className={`${styles.navigationItem} ${
          props.currentSection === "data-broker-profiles" ? styles.active : ""
        }`}
      >
        <div className={styles.stepIcon}>
          <Image
            src={stepDataBrokerProfilesIcon}
            alt=""
            width={22}
            height={22}
          />
          {/* // TODO: Add logic to mark icon as checked when step is complete */}
          {/* <CheckIcon className={styles.checkIcon} alt="" width={22} height={22} />  */}
        </div>

        <div className={styles.stepLabel}>
          {l10n.getString("fix-flow-nav-data-broker-profiles")} (
          {totalDataBrokerProfiles})
        </div>
      </li>
      <li
        aria-current={
          props.currentSection === "high-risk-data-breach" ? "step" : undefined
        }
        className={`${styles.navigationItem} ${
          props.currentSection === "high-risk-data-breach" ? styles.active : ""
        }`}
      >
        <div className={styles.stepIcon}>
          <Image
            src={stepHighRiskDataBreachesIcon}
            alt=""
            width={22}
            height={22}
          />
          {/* // TODO: Add logic to mark icon as checked when step is complete */}
          {/* <CheckIcon className={styles.checkIcon} alt="" width={22} height={22} />  */}
        </div>

        <div className={styles.stepLabel}>
          {l10n.getString("fix-flow-nav-high-risk-data-breaches")} (
          {totalHighRiskBreaches})
        </div>
      </li>
      <li
        aria-current={
          props.currentSection === "leaked-passwords" ? "step" : undefined
        }
        className={`${styles.navigationItem} ${
          props.currentSection === "leaked-passwords" ? styles.active : ""
        }`}
      >
        <div className={styles.stepIcon}>
          <Image src={stepLeakedPasswordsIcon} alt="" width={22} height={22} />
          {/* // TODO: Add logic to mark icon as checked when step is complete */}
          {/* <CheckIcon className={styles.checkIcon} alt="" width={22} height={22} />  */}
        </div>

        <div className={styles.stepLabel}>
          {l10n.getString("fix-flow-nav-leaked-passwords")} (
          {totalPasswordBreaches})
        </div>
      </li>
      <li
        aria-current={
          props.currentSection === "security-recommendations"
            ? "step"
            : undefined
        }
        className={`${styles.navigationItem} ${
          props.currentSection === "security-recommendations"
            ? styles.active
            : ""
        }`}
      >
        <div className={styles.stepIcon}>
          <Image
            src={stepSecurityRecommendationsIcon}
            alt=""
            width={22}
            height={22}
          />
          {/* // TODO: Add logic to mark icon as checked when step is complete */}
          {/* <CheckIcon className={styles.checkIcon} alt="" width={22} height={22} />  */}
        </div>

        <div className={styles.stepLabel}>
          {l10n.getString("fix-flow-nav-security-recommendations")} (
          {totalSecurityRecommendations})
        </div>
      </li>
      <li className={styles.progressBarLineContainer}>
        <div className={styles.progressBarLineWrapper}>
          <div
            className={`${
              styles.activeProgressBarLine
            } ${calculateActiveProgressBarPosition(props.currentSection)}`}
          ></div>
        </div>
      </li>
    </ul>
  );
};

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
