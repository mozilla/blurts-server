/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import { AriaProgressBarProps, useProgressBar } from "react-aria";
import styles from "./ProgressBar.module.scss";

export interface ProgressBarProps extends AriaProgressBarProps {
  showValueLabel?: boolean;
}

function ProgressBar(props: ProgressBarProps) {
  const {
    label,
    maxValue = 100,
    minValue = 0,
    showValueLabel = !!label,
    value = 0,
  } = props;
  const { progressBarProps, labelProps } = useProgressBar(props);
  const percentage = (value - minValue) / (maxValue - minValue);

  return (
    <div {...progressBarProps} className={styles.progressContainer}>
      <div className={styles.labelContainer}>
        {label && <span {...labelProps}>{label}</span>}
      </div>
      <div className={styles.progressBar}>
        {showValueLabel && (
          <span className={styles.progressBarPercentage}>
            {progressBarProps["aria-valuetext"]}
          </span>
        )}
        <div
          style={{ transform: `scaleX(${percentage})` }}
          className={styles.progressBarInner}
        />
      </div>
    </div>
  );
}

export { ProgressBar };
