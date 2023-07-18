/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { ProgressBar } from "../../../../../components/client/ProgressBar";
import styles from "./FindExposures.module.scss";
import { useL10n } from "../../../../../hooks/l10n";

export const FindExposures = () => {
  const [scanProgress, setScanProgress] = useState(0);
  const [scanFinished, setScanFinished] = useState(false);
  const [checkingScanProgress, setCheckingScanProgress] = useState(false);
  const router = useRouter();
  const l10n = useL10n();

  const dataBrokerTotalCount = Number(process.env.ONEREP_DATA_BROKER_COUNT);
  const dataBrokerScannedCount = Math.ceil(
    (dataBrokerTotalCount * scanProgress) / 100
  );
  const maxProgress = 100;
  const percentageSteps = 6;
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
          {l10n.getString("onboarding-find-exposures-progress-label-counter", {
            dataBrokerScannedCount,
            dataBrokerTotalCount,
          })}
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
