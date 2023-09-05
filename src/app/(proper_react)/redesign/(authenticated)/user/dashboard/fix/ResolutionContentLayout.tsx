/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import styles from "./ResolutionContentLayout.module.scss";
import Image from "next/image";
import { Button } from "../../../../../../components/server/Button";
import Link from "next/link";
import { ClockIcon } from "../../../../../../components/server/Icons";
import { ReactNode } from "react";
import { useL10n } from "../../../../../../hooks/l10n";

type ResolutionContentLayoutProps = {
  type: "highRisk" | "leakedPasswords" | "securityRecommendations";
  title: string;
  illustration: {
    img: string;
    alt: string;
  };
  cta: {
    label: string;
    onClick: () => void;
    skip?: string;
  };
  estimatedTime?: number;
  children: ReactNode;
};

// TODO: Add test once routes from MNTOR-1700 is available
/* c8 ignore start */
export const ResolutionContentLayout = (
  props: ResolutionContentLayoutProps
) => {
  const l10n = useL10n();

  return (
    // TODO: Check with design if toolbar should be on this page
    <div className={styles.container}>
      <div className={styles.breachContentWrapper}>
        <h3>{props.title}</h3>
        {props.children}
        <div className={styles.buttons}>
          <Button
            variant="primary"
            small
            onClick={() => {
              props.cta.onClick;
            }}
          >
            {props.cta.label}
          </Button>
          {props.cta.skip && (
            <Link
              // TODO: MNTOR-1700 Add routing logic here
              href={props.cta.skip}
            >
              {l10n.getString("high-risk-breach-skip")}
            </Link>
          )}
        </div>
        {props.estimatedTime && (
          <div className={styles.estimatedTime}>
            <ClockIcon width="20" height="20" alt="" />
            {l10n.getString("high-risk-breach-estimated-time", {
              estimated_time: props.estimatedTime,
            })}
          </div>
        )}
      </div>
      <div className={`${styles.illustrationWrapper} ${styles.hideOnMobile}`}>
        <Image src={props.illustration.img} alt={props.illustration.alt} />
      </div>
    </div>
  );
};
/* c8 ignore stop */
