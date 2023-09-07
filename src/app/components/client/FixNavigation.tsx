/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import Image from "next/image";
import styles from "./FixNavigation.module.scss";
import { useState } from "react";
import { useL10n } from "../../hooks/l10n";
import { CheckIcon } from "../server/Icons";

type StepId =
  | "dataBrokerProfiles"
  | "highRiskDataBreaches"
  | "leakedPasswords"
  | "securityRecommendations";

export type Props = {
  navigationItems: Array<NavigationItem>;
  pathname: string;
};

export const FixNavigation = (props: Props) => {
  // TODO: Add logic to abstract away from hard-coded dataBrokerProfiles section
  const [showDataBrokerProfiles] = useState(true);
  const [currentStep, setCurrentStep] = useState<StepId>("dataBrokerProfiles");

  if (!showDataBrokerProfiles) {
    setCurrentStep("highRiskDataBreaches");
  }

  return (
    <nav className={styles.stepsWrapper}>
      <Steps
        navigationItems={props.navigationItems}
        showDataBrokerProfiles={showDataBrokerProfiles}
        currentStep={currentStep}
        pathname={props.pathname}
      />
    </nav>
  );
};

export interface NavigationItem {
  key: string;
  labelStringId: string;
  href: string;
  status: string | number;
  currentStepId: string;
  imageId: string;
}

export const Steps = (props: {
  showDataBrokerProfiles: boolean;
  currentStep: StepId;
  navigationItems: Array<NavigationItem>;
  pathname: string;
}) => {
  const l10n = useL10n();

  const stepOrder = [
    "/redesign/user/dashboard/fix/data-broker-profiles",
    "/redesign/user/dashboard/fix/high-risk-data-breaches",
    "/redesign/user/dashboard/fix/leaked-passwords",
    "/redesign/user/dashboard/fix/security-recommendations",
  ];

  function calculateActiveProgressBarPosition(pathname: string) {
    if (pathname === "/redesign/user/dashboard/fix/high-risk-data-breaches") {
      return styles.beginHighRiskDataBreaches;
    } else if (
      pathname.startsWith(
        "/redesign/user/dashboard/fix/high-risk-data-breaches"
      )
    ) {
      return styles.duringHighRiskDataBreaches;
    } else if (pathname === "/redesign/user/dashboard/fix/leaked-passwords") {
      return styles.beginLeakedPasswords;
    } else if (
      pathname.startsWith("/redesign/user/dashboard/fix/leaked-passwords")
    ) {
      return styles.duringLeakedPasswords;
    } else if (
      pathname === "/redesign/user/dashboard/fix/security-recommendations"
    ) {
      return styles.beginSecurityRecommendations;
    } else {
      return "";
    }
  }

  return (
    <ul className={styles.steps}>
      {props.navigationItems.map(
        ({ key, labelStringId, href, imageId, status }) => (
          <li
            key={key}
            aria-current={props.pathname.includes(href) ? "step" : undefined}
            className={`${styles.navigationItem} ${
              props.pathname.includes(href) ? styles.active : ""
            }`}
          >
            <div className={styles.stepIcon}>
              <Image src={imageId} alt="" width={22} height={22} />
              {/* <CheckIcon className={styles.checkIcon} alt="" width={22} height={22} />  */}
            </div>

            <div className={styles.stepLabel}>
              {l10n.getString(labelStringId)} ({status})
            </div>
          </li>
        )
      )}
      <li className={styles.progressBarLineContainer}>
        <div className={styles.progressBarLineWrapper}>
          <div
            className={`${
              styles.activeProgressBarLine
            } ${calculateActiveProgressBarPosition(props.pathname)}`}
          ></div>
        </div>
      </li>
    </ul>
  );
};
