/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import Image from "next/image";
import styles from "./ProgressCard.module.scss";
import { useL10n } from "../../hooks/l10n";
import ExploringLaptopPlus from "./assets/exploring-laptop-check.svg";

export type Props = {
  resolvedByYou: number;
};

export const ProgressCard = (props: Props) => {
  const l10n = useL10n();

  return (
    <div className={styles.progressCard}>
      <div className={styles.header}>
        {l10n.getString("progress-card-heres-what-we-fixed-headline-all")}
      </div>
      <div className={styles.progressStatsWrapper}>
        {/* Manually fixed */}
        <div className={styles.progressItem}>
          <div className={styles.progressStat}>
            <Image src={ExploringLaptopPlus} alt="" width="50" height="50" />
            <span>{props.resolvedByYou}</span>
          </div>
          <p>{l10n.getString("progress-card-manually-fixed-headline")}</p>
        </div>
      </div>
    </div>
  );
};
