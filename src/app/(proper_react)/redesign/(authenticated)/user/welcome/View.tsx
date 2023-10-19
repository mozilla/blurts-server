/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import { useContext, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Session } from "next-auth";
import styles from "./View.module.scss";
import stepGetStartedIcon from "./images/step-counter-get-started.svg";
import stepEnterInfoIcon from "./images/step-counter-enter-info.svg";
import stepFindExposuresIcon from "./images/step-counter-find-exposures.svg";
import stepDoneIcon from "./images/step-counter-done.svg";
import { GetStarted } from "./GetStarted";
import { FindExposures } from "./FindExposures";
import { EnterInfo } from "./EnterInfo";
import { useL10n } from "../../../../../hooks/l10n";
import monitorLogo from "../../../../images/monitor-logo.webp";
import { PreviousRouteContext } from "../../../../../../contextProviders/previous-route";

type StepId = "getStarted" | "enterInfo" | "findExposures";

export type Props = {
  user: Session["user"];
  dataBrokerCount: number;
  breachesTotalCount: number;
  stepId?: StepId;
};

export const View = ({
  user,
  dataBrokerCount,
  breachesTotalCount,
  stepId = "getStarted",
}: Props) => {
  const l10n = useL10n();
  const skipInitialStep = stepId === "enterInfo";
  const [currentStep, setCurrentStep] = useState<StepId>(stepId);
  const router = useRouter();
  const previousRoute = useContext(PreviousRouteContext);
  const nextRoute = previousRoute || "/redesign/user/dashboard/";

  const currentComponent =
    currentStep === "findExposures" ? (
      <FindExposures
        dataBrokerCount={dataBrokerCount}
        breachesTotalCount={breachesTotalCount}
        nextRoute={nextRoute}
      />
    ) : currentStep === "enterInfo" ? (
      <EnterInfo
        user={user}
        // TODO: Add unit test when changing this code:
        /* c8 ignore next */
        onScanStarted={() => setCurrentStep("findExposures")}
        onGoBack={() =>
          skipInitialStep
            ? router.push(nextRoute)
            : setCurrentStep("getStarted")
        }
      />
    ) : (
      <GetStarted
        dataBrokerCount={dataBrokerCount}
        onStart={() => setCurrentStep("enterInfo")}
      />
    );

  return (
    <div className={styles.wrapper}>
      <header>
        <Link href="/" className={styles.homeLink}>
          <Image
            src={monitorLogo}
            alt={l10n.getString("main-nav-link-home-label")}
            width={170}
          />
        </Link>
      </header>
      <nav className={styles.stepsWrapper}>
        <Steps currentStep={currentStep} skipInitialStep={skipInitialStep} />
      </nav>
      <main className={styles.contentWrapper}>{currentComponent}</main>
    </div>
  );
};

export const Steps = (props: {
  currentStep: StepId;
  skipInitialStep?: boolean;
}) => {
  const l10n = useL10n();

  return (
    <ul
      className={`${styles.steps} ${
        props.skipInitialStep ? styles.getStartedHidden : ""
      }`}
    >
      {!props.skipInitialStep && (
        <li
          aria-current={props.currentStep === "getStarted" ? "step" : undefined}
          className={`${styles.getStarted} ${
            isStepDone("getStarted", props.currentStep)
              ? styles.isCompleted
              : ""
          }`}
        >
          <Image
            src={
              props.currentStep === "getStarted"
                ? stepGetStartedIcon
                : stepDoneIcon
            }
            alt=""
            width={22}
            height={22}
          />
          <div className={styles.stepLabel}>
            {l10n.getString("onboarding-steps-get-started-label")}
          </div>
        </li>
      )}
      <li
        aria-current={props.currentStep === "enterInfo" ? "step" : undefined}
        className={`${styles.enterInfo} ${
          isStepDone("enterInfo", props.currentStep) ? styles.isCompleted : ""
        }`}
      >
        <Image src={stepEnterInfoIcon} alt="" width={22} height={22} />
        <div className={styles.stepLabel}>
          {l10n.getString("onboarding-steps-enter-info-label")}
        </div>
      </li>
      <li
        aria-current={
          props.currentStep === "findExposures" ? "step" : undefined
        }
        className={`${styles.findExposures} ${
          // TODO: Add unit test when changing this code:
          /* c8 ignore next 2 */
          isStepDone("findExposures", props.currentStep)
            ? styles.isCompleted
            : ""
        }`}
      >
        <Image src={stepFindExposuresIcon} alt="" width={22} height={22} />
        <div className={styles.stepLabel}>
          {l10n.getString("onboarding-steps-find-exposures-label")}
        </div>
      </li>
    </ul>
  );
};

function isStepDone(step: StepId, currentStep: StepId): boolean {
  if (step === "getStarted") {
    return currentStep !== "getStarted";
  }
  if (step === "enterInfo") {
    return currentStep === "findExposures";
  }
  return false;
}
