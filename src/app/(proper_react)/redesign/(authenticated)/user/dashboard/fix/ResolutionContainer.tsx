/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import Image from "next/image";
import type { ReactNode } from "react";
import { ClockIcon } from "../../../../../../components/server/Icons";
import { useL10n } from "../../../../../../hooks/l10n";
import styles from "./ResolutionContainer.module.scss";

type ResolutionContainerProps = {
  type: "highRisk" | "leakedPasswords" | "securityRecommendations";
  title: string;
  illustration: string;
  estimatedTime?: number;
  children: ReactNode;
  label?: string;
  cta?: ReactNode;
};

export const ResolutionContainer = (props: ResolutionContainerProps) => {
  const l10n = useL10n();
  const estimatedTimeString =
    props.type === "leakedPasswords"
      ? "leaked-passwords-estimated-time"
      : "high-risk-breach-estimated-time";

  return (
    // TODO: Check with design if toolbar should be on this page
    <div className={styles.container}>
      <div className={styles.breachContentWrapper}>
        {props.label && <div className={styles.label}>{props.label}</div>}
        <h3>{props.title}</h3>
        {props.children}
        {props.cta && <div className={styles.buttons}>{props.cta}</div>}
        {props.estimatedTime && (
          <div className={styles.estimatedTime}>
            <ClockIcon width="20" height="20" alt="" />
            {l10n.getString(estimatedTimeString, {
              estimated_time: props.estimatedTime,
            })}
          </div>
        )}
      </div>
      <div className={`${styles.illustrationWrapper} ${styles.hideOnMobile}`}>
        <Image src={props.illustration} alt="" />
      </div>
    </div>
  );
};
