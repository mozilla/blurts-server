/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { ProgressBar } from "../../../../../components/client/ProgressBar";
import styles from "./FindExposures.module.scss";

export const FindExposures = () => {
  const [scanProgress, setScanProgress] = useState(0);
  const [scanFinished, setScanFinished] = useState(false);
  const [checkingScanProgress, setCheckingScanProgress] = useState(false);
  const router = useRouter();

  const progressSteps = 6;
  const maxProgress = 100;
  const totalBreachesCount = 672;
  const scannedBreachesCount = Math.ceil(
    (totalBreachesCount * scanProgress) / 100
  );
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      const nextProgress = scanProgress + progressSteps;
      setScanProgress(Math.min(nextProgress, maxProgress));

      // Check the scan progress and if it’s finished.
      if (!checkingScanProgress && !scanFinished) {
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
      router.push("/user/dashboard/");
    }

    return () => clearTimeout(timeoutId);
  }, [scanProgress, router, checkingScanProgress, scanFinished]);

  function ProgressLabel() {
    return (
      <div className={styles.progressLabel}>
        Scanning for exposures…
        <div className={styles.progressLabelIndicator}>
          {/* TODO: Localize string */}
          <span>{scannedBreachesCount}</span>
          {` of ${totalBreachesCount} known data breaches`}
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
