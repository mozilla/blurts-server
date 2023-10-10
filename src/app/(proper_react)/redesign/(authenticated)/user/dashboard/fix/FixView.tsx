/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import Link from "next/link";
import Image from "next/image";
import { ReactNode } from "react";
import { FixNavigation } from "../../../../../../components/client/FixNavigation";
import styles from "./fix.module.scss";
import ImageArrowRight from "./images/icon-arrow-right.svg";
import ImageClose from "./images/icon-close.svg";
import { useL10n } from "../../../../../../hooks/l10n";
import { StepDeterminationData } from "../../../../../../functions/server/getRelevantGuidedSteps";

export type FixViewProps = {
  children: ReactNode;
  subscriberEmails: string[];
  data: StepDeterminationData;
  nextStepHref: string;
  currentSection:
    | "data-broker-profiles"
    | "high-risk-data-breach"
    | "leaked-passwords"
    | "security-recommendations";
};

export const FixView = (props: FixViewProps) => {
  const l10n = useL10n();
  const isResolutionLayout = [
    "high-risk-data-breach",
    "leaked-passwords",
    "security-recommendations",
  ].includes(props.currentSection);

  const navigationClose = () => {
    return (
      <Link
        href="/redesign/user/dashboard"
        className={styles.navClose}
        aria-label={l10n.getString("guided-resolution-flow-exit")}
      >
        <Image alt="" src={ImageClose} />
      </Link>
    );
  };

  return (
    <div className={styles.fixContainer}>
      <div
        className={`${styles.fixWrapper} ${
          isResolutionLayout ? styles.highRiskDataBreachContentBg : ""
        }`}
      >
        <FixNavigation
          currentSection={props.currentSection}
          data={props.data}
          subscriberEmails={props.subscriberEmails}
        />
        {navigationClose()}
        <section className={styles.fixSection}>
          <div className={styles.viewWrapper}>{props.children}</div>
          <Link
            className={`${styles.navArrow} ${styles.navArrowNext}`}
            href={props.nextStepHref}
            aria-label={l10n.getString("guided-resolution-flow-next-arrow")}
          >
            <Image alt="" src={ImageArrowRight} />
          </Link>
        </section>
      </div>
    </div>
  );
};
