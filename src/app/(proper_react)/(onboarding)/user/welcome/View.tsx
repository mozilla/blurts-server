/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Session } from "next-auth";
import styles from "./View.module.scss";
import monitorLogo from "../../../images/monitor-logo.webp";
import { useL10n } from "../../../../hooks/l10n";
import { GetStarted } from "./GetStarted";
import { FindExposures } from "./FindExposures";
import { EnterInfo } from "./EnterInfo";

export type Props = {
  user: Session["user"];
};

export const View = (props: Props) => {
  const l10n = useL10n();
  const [currentStep, setCurrentStep] = useState<
    "getStarted" | "enterInfo" | "findExposures"
  >("getStarted");

  const currentComponent =
    currentStep === "findExposures" ? (
      <FindExposures />
    ) : currentStep === "enterInfo" ? (
      <EnterInfo onDataSaved={() => setCurrentStep("findExposures")} />
    ) : (
      <GetStarted onStart={() => setCurrentStep("enterInfo")} />
    );

  return (
    <div className={styles.wrapper}>
      <div className={styles.start}>
        <Link href="/" className={styles.homeLink}>
          <Image
            src={monitorLogo}
            alt={l10n.getString("main-nav-link-home-label")}
            width={170}
          />
        </Link>
      </div>
      <div className={styles.end}>{currentComponent}</div>
    </div>
  );
};
