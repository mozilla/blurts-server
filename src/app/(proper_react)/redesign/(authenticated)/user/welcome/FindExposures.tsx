/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { ProgressBar } from "../../../../../components/client/ProgressBar";
import styles from "./FindExposures.module.scss";
import { useL10n } from "../../../../../hooks/l10n";

export type Props = {
  dataBrokerCount: number;
  breachesTotalCount: number;
};

const getCurrentScanCountForRange = ({
  totalCount,
  currentProgress,
  progressRange,
}: {
  totalCount: number;
  currentProgress: number;
  progressRange: Array<number>;
}): number => {
  const [rangeStart, rangeEnd] = progressRange;
  if (currentProgress < rangeStart) {
    return 0;
  }
  if (currentProgress >= rangeEnd) {
    return totalCount;
  }
  const currentCount = Math.ceil(
    (totalCount * (currentProgress - rangeStart)) / (rangeEnd - rangeStart)
  );

  return currentCount;
};

export const FindExposures = ({
  dataBrokerCount,
  breachesTotalCount,
}: Props) => {
  const [scanProgress, setScanProgress] = useState(0);
  const [scanFinished, setScanFinished] = useState(false);
  const [checkingScanProgress, setCheckingScanProgress] = useState(false);
  const router = useRouter();
  const l10n = useL10n();

  const maxProgress = 100;
  const labelSwitchThreshold = 50;
  const percentageSteps = 6;
  const breachesScannedCount = getCurrentScanCountForRange({
    totalCount: breachesTotalCount,
    currentProgress: scanProgress,
    progressRange: [0, labelSwitchThreshold],
  });
  const dataBrokerScannedCount = getCurrentScanCountForRange({
    totalCount: dataBrokerCount,
    currentProgress: scanProgress,
    progressRange: [labelSwitchThreshold, 100],
  });

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      const nextProgress = scanProgress + percentageSteps;
      setScanProgress(Math.min(nextProgress, maxProgress));

      // For development we are periodically checking the scan progress and set
      // the result if finished.
      if (
        process.env.NODE_ENV === "development" &&
        !checkingScanProgress &&
        !scanFinished
      ) {
        setCheckingScanProgress(true);
        void fetch("/api/v1/user/welcome-scan/progress")
          .then((response) => response.json())
          .then((result) => {
            if (result.status && result.status === "finished") {
              setScanFinished(true);
            }
            setCheckingScanProgress(false);
          })
          .catch((_) => setCheckingScanProgress(false));
      }
    }, 1000);

    // Go to dashboard even if the scan did not finish.
    if (scanProgress >= maxProgress) {
      router.push("/redesign/user/dashboard/");
    }

    return () => clearTimeout(timeoutId);
  }, [scanProgress, router, checkingScanProgress, scanFinished]);

  function ProgressLabel() {
    return (
      <div className={styles.progressLabel}>
        {l10n.getString("onboarding-find-exposures-progress-label")}
        <div className={styles.progressLabelIndicator}>
          {scanProgress < labelSwitchThreshold
            ? l10n.getString(
                "onboarding-find-exposures-progress-breaches-counter",
                { breachesScannedCount, breachesTotalCount }
              )
            : l10n.getString(
                "onboarding-find-exposures-progress-broker-counter",
                {
                  dataBrokerScannedCount,
                  dataBrokerTotalCount: dataBrokerCount,
                }
              )}
        </div>
      </div>
    );
  }

  return (
    <div className={styles.wrapper}>
      <ProgressBar
        label={<ProgressLabel />}
        value={scanProgress}
        maxValue={maxProgress}
      />
    </div>
  );
};
