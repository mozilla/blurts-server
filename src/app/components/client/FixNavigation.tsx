/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import styles from "./FixNavigation.module.scss";
// import stepDoneIcon from "./assets/step-counter-done.svg";
import { useState } from "react";
import { useL10n } from "../../hooks/l10n";

type StepId =
  | "dataBrokerProfiles"
  | "highRiskDataBreaches"
  | "leakedPasswords"
  | "securityRecommendations";

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
      />
    </nav>
  );
};

export interface NavigationItem {
  key: string;
  labelStringId: string;
  name: string;
  href: string;
  status: string;
  currentStepId: string;
  imageId: unknown;
}

export const Steps = (props: {
  showDataBrokerProfiles: boolean;
  currentStep: StepId;
  navigationItems: Array<NavigationItem>;
}) => {
  const l10n = useL10n();

  const pathname = usePathname();

  return (
    <ul className={styles.steps}>
      {props.navigationItems.map(
        ({ key, labelStringId, href, currentStepId, imageId, status }) => (
          <li
            key={key}
            aria-current={pathname.includes(href) ? "step" : undefined}
            className={`${styles.fixNavigationItem} ${
              pathname.includes(href) ? styles.active : ""
            }`}
          >
            <Image
              // TODO: Add "isDone" logic
              src={props.currentStep === currentStepId ? imageId : imageId}
              alt=""
              width={22}
              height={22}
            />
            <div className={styles.stepLabel}>
              {l10n.getString(labelStringId)} ({status})
            </div>
          </li>
        )
      )}
    </ul>
  );
};

// TODO: Use isStepDone function to set active/done state when on to next step after Data Broker Profiles fixes
// function isStepDone(step: StepId, currentStep: StepId): boolean {
//   if (step === "dataBrokerProfiles") {
//     return currentStep !== "dataBrokerProfiles";
//   }
//   if (step === "leakedPasswords") {
//     return currentStep === "highRiskDataBreaches";
//   }

//   if (step === "securityRecommendations") {
//     return currentStep === "leakedPasswords";
//   }
//   return false;
// }
