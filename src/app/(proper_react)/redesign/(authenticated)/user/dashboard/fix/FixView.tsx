/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import Link from "next/link";
import Image from "next/image";
import { ReactNode } from "react";
import { FixNavigation } from "../../../../../../components/client/FixNavigation";
import styles from "./fix.module.scss";
import ImageArrowLeft from "./images/icon-arrow-left.svg";
import ImageArrowRight from "./images/icon-arrow-right.svg";
import ImageClose from "./images/icon-close.svg";
import stepDataBrokerProfilesIcon from "./images/step-counter-data-broker-profiles.svg";
import stepHighRiskDataBreachesIcon from "./images/step-counter-high-risk.svg";
import stepLeakedPasswordsIcon from "./images/step-counter-leaked-passwords.svg";
import stepSecurityRecommendationsIcon from "./images/step-counter-security-recommendations.svg";
import { usePathname } from "next/navigation";
import { GuidedExperienceBreaches } from "../../../../../../functions/server/getUserBreaches";
import { ScanResult } from "../../../../../../functions/server/onerep";
import { useL10n } from "../../../../../../hooks/l10n";

export type FixViewProps = {
  children: ReactNode;
  breaches: GuidedExperienceBreaches;
  userScannedResults: ScanResult[];
};

export const FixView = (props: FixViewProps) => {
  const pathname = usePathname();
  const l10n = useL10n();
  const isResolutionLayout = [
    "high-risk-data-breach",
    "leaked-passwords",
    "security-recommendations",
  ].some((substring) => pathname.includes(substring));
  const totalHighRiskBreaches = Object.values(props.breaches.highRisk).reduce(
    (acc, array) => acc + array.length,
    0
  );
  const totalDataBrokerProfiles = props.userScannedResults.length;
  const totalPasswordBreaches = props.breaches.passwordBreaches.length;
  const totalSecurityRecommendations = Object.values(
    props.breaches.securityRecommendations
  ).filter((value) => {
    return value.length > 0;
  }).length;

  const navigationItemsContent = [
    {
      key: "data-broker-profiles",
      labelStringId: "fix-flow-nav-data-broker-profiles",
      href: "/redesign/user/dashboard/fix/data-broker-profiles",
      status: totalDataBrokerProfiles,
      currentStepId: "dataBrokerProfiles",
      imageId: stepDataBrokerProfilesIcon,
    },
    {
      key: "high-risk-data-breaches",
      labelStringId: "fix-flow-nav-high-risk-data-breaches",
      href: "/redesign/user/dashboard/fix/high-risk-data-breaches",
      status: totalHighRiskBreaches,
      currentStepId: "highRiskDataBreaches",
      imageId: stepHighRiskDataBreachesIcon,
    },
    {
      key: "leaked-passwords",
      labelStringId: "fix-flow-nav-leaked-passwords",
      href: "/redesign/user/dashboard/fix/leaked-passwords",
      status: totalPasswordBreaches,
      currentStepId: "leakedPasswords",
      imageId: stepLeakedPasswordsIcon,
    },
    {
      key: "security-recommendations",
      labelStringId: "fix-flow-nav-security-recommendations",
      href: "/redesign/user/dashboard/fix/security-recommendations",
      status: totalSecurityRecommendations,
      currentStepId: "securityRecommendations",
      imageId: stepSecurityRecommendationsIcon,
    },
  ];

  const navigationClose = () => {
    return (
      <Link
        href="/redesign/user/dashboard"
        className={styles.navClose}
        aria-label={l10n.getString("guided-resolution-flow-exit")}
      >
        <Image alt="" src={ImageClose} />
      </Link>
    );
  };

  // TODO: MNTOR-1700 Add routing logic here
  const navigationArrowBack = () => {
    return (
      <Link
        className={styles.navArrowBack}
        href="/redesign/user/dashboard"
        aria-label={l10n.getString("guided-resolution-flow-back-arrow")}
      >
        <Image alt="" src={ImageArrowLeft} />
      </Link>
    );
  };

  // TODO: MNTOR-1700 Add routing logic here
  const navigationArrowNext = () => {
    return (
      <Link
        className={styles.navArrowNext}
        href="/redesign/user/dashboard"
        aria-label={l10n.getString("guided-resolution-flow-next-arrow")}
      >
        <Image alt="" src={ImageArrowRight} />
      </Link>
    );
  };

  return (
    <div className={styles.fixContainer}>
      <div
        className={`${styles.fixWrapper} ${
          isResolutionLayout ? styles.highRiskDataBreachContentBg : ""
        }`}
      >
        <FixNavigation
          navigationItems={navigationItemsContent}
          pathname={pathname}
        />
        {navigationClose()}
        <section className={styles.fixSection}>
          {navigationArrowBack()}
          {navigationArrowNext()}
          {props.children}
        </section>
      </div>
    </div>
  );
};
