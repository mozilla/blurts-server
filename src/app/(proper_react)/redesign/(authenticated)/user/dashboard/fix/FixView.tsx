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
import imageClose from "./images/icon-close.svg";
import stepDataBrokerProfilesIcon from "./images/step-counter-data-broker-profiles.svg";
import stepHighRiskDataBreachesIcon from "./images/step-counter-high-risk.svg";
import stepLeakedPasswordsIcon from "./images/step-counter-leaked-passwords.svg";
import stepSecurityRecommendationsIcon from "./images/step-counter-security-recommendations.svg";
import { usePathname } from "next/navigation";
import { GuidedExperienceBreaches } from "../../../../../../functions/server/getUserBreaches";
import { ScanResult } from "../../../../../../functions/server/onerep";

// TODO:
// Add logic to protect routes for specific users (premium/not, scan started/not)
// Question: Can FXA redirect user back to specific URL (for returning upgrade users during fix data broker)

function NavigationClose() {
  return (
    <Link href="redesign/user/dashboard" className={styles.navClose}>
      <Image alt="" src={imageClose} />
    </Link>
  );
}

function NavigationArrowBack() {
  return (
    // FIXME: This navigation arrow should point to the previous step in whichever context it is loaded
    <Link className={styles.navArrowBack} href="/redesign/user/dashboard">
      <Image alt="" src={ImageArrowLeft} />
    </Link>
  );
}

function NavigationArrowNext() {
  return (
    // FIXME: This navigation arrow should point to the next step in whichever context it is loaded
    <Link className={styles.navArrowNext} href="/redesign/user/dashboard">
      <Image alt="" src={ImageArrowRight} />
    </Link>
  );
}

export type FixViewProps = {
  children: ReactNode;
  breaches: GuidedExperienceBreaches;
  userScannedResults: ScanResult[];
};

export const FixView = (props: FixViewProps) => {
  const pathname = usePathname();
  const isHighRiskDataBreach = pathname.includes("high-risk-data-breaches");
  const totalHighRiskBreaches = Object.values(props.breaches.highRisk).reduce(
    (acc, array) => acc + array.length,
    0
  );
  const totalDataBrokerProfiles = props.userScannedResults.length;
  const totalPasswordBreaches = props.breaches.passwordBreaches.length;
  const totalSecurityRecommendations = Object.values(
    props.breaches.securityRecommendations
  ).length;

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

  return (
    <div className={styles.fixContainer}>
      <div
        className={`${styles.fixWrapper} ${
          isHighRiskDataBreach ? styles.highRiskDataBreachContentBg : ""
        }`}
      >
        <FixNavigation
          navigationItems={navigationItemsContent}
          pathname={pathname}
        />
        <NavigationClose />
        <section className={styles.fixSection}>
          <NavigationArrowBack />
          <NavigationArrowNext />
          {props.children}
        </section>
      </div>
    </div>
  );
};
