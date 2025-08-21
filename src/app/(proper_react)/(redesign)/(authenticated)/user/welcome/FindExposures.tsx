/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ProgressBar } from "../../../../../components/client/ProgressBar";
import styles from "./FindExposures.module.scss";
import { useL10n } from "../../../../../hooks/l10n";
import { sendGAEvent } from "../../../../../components/client/GoogleAnalyticsWorkaround";
import { FeatureFlagName } from "../../../../../../db/tables/featureFlags";

export type Props = {
  dataBrokerCount: number;
  breachesTotalCount: number;
  previousRoute: string;
  enabledFeatureFlags: FeatureFlagName[];
};

export type FindExposuresTelemetryParams = {
  exit_time: number;
  page_location: string;
  user_type: "legacy" | "non_legacy";
};

export type ScanCompletedTelemetryParams = {
  page_location: string;
  user_type: "legacy" | "non_legacy";
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
  // TODO: Add unit test when changing this code:
  /* c8 ignore next 3 */
  if (currentProgress >= rangeEnd) {
    return totalCount;
  }
  const currentCount = Math.ceil(
    (totalCount * (currentProgress - rangeStart)) / (rangeEnd - rangeStart),
  );

  return currentCount;
};

export const FindExposures = ({
  dataBrokerCount,
  breachesTotalCount,
  previousRoute,
  enabledFeatureFlags,
}: Props) => {
  const [scanProgress, setScanProgress] = useState(0);
  const [scanFinished, setScanFinished] = useState(false);
  const [checkingScanProgress, setCheckingScanProgress] = useState(false);
  const userTimeSpentRef = useRef({
    startTime: Date.now(),
    endTime: Date.now(),
  });
  const router = useRouter();
  const l10n = useL10n();

  const maxProgress = 100;
  const labelSwitchThreshold = 50;
  const scanDurationInSeconds = 60;
  const percentageSteps = maxProgress / scanDurationInSeconds;
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

  const pathName = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // TODO: Add unit test when changing this code:
    /* c8 ignore start */
    const userType =
      searchParams.get("referrer") === "dashboard" ? "non_legacy" : "legacy";
    const findExposuresTelemetryParams: FindExposuresTelemetryParams = {
      exit_time: 0,
      page_location: pathName,
      user_type: userType,
    };
    const scanCompletedTelemetryParams: ScanCompletedTelemetryParams = {
      page_location: pathName,
      user_type: userType,
    };

    const timeoutId = setTimeout(() => {
      const nextProgress = scanProgress + percentageSteps;
      setScanProgress(Math.min(nextProgress, maxProgress));

      // Periodically check the scan progress and set the result if finished.
      if (!checkingScanProgress && !scanFinished) {
        setCheckingScanProgress(true);
        void fetch("/api/v1/user/welcome-scan/progress")
          .then((response) => response.json())
          .then((result) => {
            if (result.status && result.status === "finished") {
              setScanFinished(true);
              sendGAEvent(
                "event",
                "free_scan_completed",
                scanCompletedTelemetryParams,
              );
            }
            setCheckingScanProgress(false);
          })
          .catch((_) => setCheckingScanProgress(false));
      }
    }, 1000);
    /* c8 ignore stop */

    // Go to dashboard even if the scan did not finish.
    // TODO: Add unit test when changing this code:
    /* c8 ignore next 11 */
    if (scanProgress >= maxProgress) {
      userTimeSpentRef.current.endTime = Date.now();
      findExposuresTelemetryParams.exit_time =
        userTimeSpentRef.current.endTime - userTimeSpentRef.current.startTime;
      sendGAEvent("event", "exited_scan", findExposuresTelemetryParams);
      router.push(previousRoute);
    }

    return () => {
      clearTimeout(timeoutId);
    };
  }, [
    scanProgress,
    router,
    checkingScanProgress,
    scanFinished,
    percentageSteps,
    previousRoute,
    pathName,
    searchParams,
  ]);

  function ProgressLabel() {
    return (
      <div className={styles.progressLabel}>
        {l10n.getString("onboarding-find-exposures-progress-label")}
        <div className={styles.progressLabelIndicator}>
          {
            // TODO: Add unit test when changing this code:
            /* c8 ignore next 12 */
            scanProgress < labelSwitchThreshold
              ? l10n.getString(
                  "onboarding-find-exposures-progress-breaches-counter",
                  { breachesScannedCount, breachesTotalCount },
                )
              : enabledFeatureFlags.includes("MaskDataBrokerCount")
                ? l10n.getString(
                    "onboarding-find-exposures-progress-broker-counter-masked",
                    {
                      dataBrokerScannedCount,
                    },
                  )
                : l10n.getString(
                    "onboarding-find-exposures-progress-broker-counter",
                    {
                      dataBrokerScannedCount,
                      dataBrokerTotalCount: dataBrokerCount,
                    },
                  )
          }
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
