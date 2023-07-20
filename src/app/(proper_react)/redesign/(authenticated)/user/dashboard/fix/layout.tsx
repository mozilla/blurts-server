/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import Link from "next/link";
import Image from "next/image";
import { ReactNode } from "react";
import {
  FixNavigation,
  NavigationItem,
} from "../../../../../../components/client/FixNavigation";
import styles from "./fix.module.scss";
import imageArrowLeft from "./images/icon-arrow-left.svg";
import imageArrowRight from "./images/icon-arrow-right.svg";

import imageClose from "./images/icon-close.svg";
import stepDataBrokerProfilesIcon from "./images/step-counter-data-broker-profiles.svg";
import stepHighRiskDataBreachesIcon from "./images/step-counter-high-risk.svg";
import stepLeakedPasswordsIcon from "./images/step-counter-leaked-passwords.svg";
import stepSecurityRecommendationsIcon from "./images/step-counter-security-recommendations.svg";

export type Props = {
  navArrowBackVisible: boolean;
  children: ReactNode;
  navigationItems: Array<NavigationItem>;
};

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
    <Link className={styles.navArrowBack} href="/redesign/user/dashboard">
      <Image alt="" src={imageArrowLeft} />
    </Link>
  );
}

function NavigationArrowNext() {
  return (
    <Link className={styles.navArrowNext} href="/redesign/user/dashboard">
      <Image alt="" src={imageArrowRight} />
    </Link>
  );
}

const FixLayout = (props: Props) => {
  const navigationItemsContent = [
    {
      key: "data-broker-profiles",
      labelStringId: "fix-flow-nav-data-broker-profiles",
      name: "Data broker profiles",
      href: "/redesign/user/dashboard/fix/data-broker-profiles",
      status: "#",
      currentStepId: "dataBrokerProfiles",
      imageId: stepDataBrokerProfilesIcon,
    },
    {
      key: "high-risk-data-breaches",
      labelStringId: "fix-flow-nav-high-risk-data-breaches",
      name: "High risk data breaches",
      href: "/redesign/user/dashboard/fix/high-risk-data-breaches",
      status: "#",
      currentStepId: "highRiskDataBreaches",
      imageId: stepHighRiskDataBreachesIcon,
    },
    {
      key: "leaked-passwords",
      labelStringId: "fix-flow-nav-leaked-passwords",
      name: "Leaked passwords",
      href: "/redesign/user/dashboard/fix/leaked-passwords",
      status: "#",
      currentStepId: "leakedPasswords",
      imageId: stepLeakedPasswordsIcon,
    },
    {
      key: "security-recommendations",
      labelStringId: "fix-flow-nav-security-recommendations",
      name: "Security recommendations",
      href: "/redesign/user/dashboard/fix/security-recommendations",
      status: "#",
      currentStepId: "securityRecommendations",
      imageId: stepSecurityRecommendationsIcon,
    },
  ];

  return (
    <div className={styles.fixWrapper}>
      <FixNavigation navigationItems={navigationItemsContent} />
      <NavigationClose />
      <section className={styles.fixSection}>
        <NavigationArrowBack />
        <NavigationArrowNext />
        {props.children}
      </section>
    </div>
  );
};

export default FixLayout;
