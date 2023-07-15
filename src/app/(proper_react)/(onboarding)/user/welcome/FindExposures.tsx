/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import Link from "next/link";
import styles from "./FindExposures.module.scss";
import { useEffect, useState } from "react";

export const FindExposures = () => {
  const [scanProgress, setScanProgress] = useState(0);

  const progressSteps = 6;
  const maxProgress = 100;
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      const nextProgress = scanProgress + progressSteps;
      setScanProgress(Math.min(nextProgress, maxProgress));
    }, 1000);

    if (scanProgress >= maxProgress) {
      clearTimeout(timeoutId);
    }

    return () => clearTimeout(timeoutId);
  }, [scanProgress]);

  return (
    <div className={styles.wrapper}>
      <label>
        Scanning for exposures…
        <progress value={scanProgress} max={maxProgress}>
          {scanProgress}%
        </progress>
      </label>

      {scanProgress === maxProgress && (
        <Link href="/user/dashboard">Go to dashboard</Link>
      )}
    </div>
  );
};
