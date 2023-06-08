/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import { QuestionMarkCircle } from "../server/Icons";
import styles from "./ProgressCard.module.scss";
import ExploringLaptopPlus from "./assets/exploring-laptop-check.png";
import ExploringLaptopMinus from "./assets/exploring-laptop-minus.png";
import SparklingCheck from "./assets/sparkling-check.png";

import Image from "next/image";

export type Props = {
  resolvedByYou: number;
  autoRemoved: number;
};

export type ProgressBarProps = {
  percentageComplete: number;
};

export const ProgressCard = (props: Props) => {
  const ProgressBar = (props: ProgressBarProps) => {
    return (
      <div className={styles.progresBarWrapper}>
        <div className={styles.fullProgressBar}>
          <div className={styles.activeProgressBar}></div>
          <p>{props.percentageComplete}% complete</p>
        </div>
        <Image src={SparklingCheck} alt="" />
      </div>
    );
  };

  return (
    <div className={styles.progressCard}>
      <div className={styles.header}>
        Here is what we fixed{" "}
        <button>
          <QuestionMarkCircle alt={""} width="15" height="15" />
        </button>
      </div>
      <div className={styles.progressStatsWrapper}>
        <div className={styles.progressItem}>
          <div className={styles.progressStat}>
            <Image src={ExploringLaptopPlus} alt="" />
            <span>{props.resolvedByYou}</span>
          </div>
          <p>Resolved by you</p>
        </div>
        <div className={styles.progressItem}>
          <div className={styles.progressStat}>
            <Image src={ExploringLaptopMinus} alt="" />
            <span>{props.autoRemoved}</span>
          </div>
          <p>Auto-removed</p>
        </div>
      </div>
      <ProgressBar percentageComplete={16} />
    </div>
  );
};
