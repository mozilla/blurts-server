/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import Image from "next/image";
import MozillaMonitorLogo from "../../../(proper_react)/images/monitor-logo.webp";
import styles from "./FalseDoorBanner.module.scss";
import { CloseBtn } from "../../../components/server/Icons";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { useL10n } from "../../../hooks/l10n";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { appendUtmParams } from "../../../../utils/utmParams";

type HandleFalseDoorBanner = {
  link: string;
};

// Ignoring full coverage here because we'll be creating a custom cookies hook
// TODO: MNTOR-2043
/* c8 ignore start */
export const HandleFalseDoorTest = (props: HandleFalseDoorBanner) => {
  const [cookies, setCookie] = useCookies(["falseDoorDismissedPhase3"]);
  const [shouldShowFalseDoor, setShouldShowFalseDoor] = useState(false);
  const pathname = usePathname();
  const isOnDashboard = pathname === "/user/breaches";

  const waitlistLink = appendUtmParams({
    linkUrl: props.link,
    utmParams: {
      utm_source: "monitor",
      utm_medium: "monitor-product",
      utm_content: `banner-phase-3-us_${pathname}`,
    },
  });

  const handleDismiss = (event?: Event) => {
    setCookie("falseDoorDismissedPhase3", "true", { path: "/" });
    if (event && event.target && "id" in event.target) {
      let action;
      if (event?.target.id === "close-button") {
        action = "dismissed";
      } else {
        action = "opened";
      }
      window.gtag("event", "clicked_false_door", {
        action,
        result: "success",
        page_location: location.href,
      });
    }
  };

  useEffect(() => {
    setShouldShowFalseDoor(!cookies.falseDoorDismissedPhase3);
  }, [cookies.falseDoorDismissedPhase3]);

  return (
    <>
      {shouldShowFalseDoor && (
        <FalseDoorBanner
          checkIsOnDashboard={isOnDashboard}
          link={waitlistLink}
          onDismiss={handleDismiss}
        />
      )}
    </>
  );
};

type FalseDoorBanner = {
  onDismiss?: () => void;
  checkIsOnDashboard: boolean;
  link: string;
};
export const FalseDoorBanner = (props: FalseDoorBanner) => {
  const l10n = useL10n();
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  const handleResize = () => {
    // 1024px is equivalent to $screen-lg
    if (window.innerWidth > 1024) {
      setIsLargeScreen(true);
    } else {
      setIsLargeScreen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  });

  const content = (
    <p>
      {l10n.getString("false-door-test-phase-3-content-part-one")}
      {isLargeScreen ? <br /> : " "}
      {props.checkIsOnDashboard
        ? l10n.getString("false-door-test-phase-3-content-part-two-dashboard")
        : l10n.getString("false-door-test-phase-3-content-part-two")}
    </p>
  );
  /* c8 ignore stop */

  return (
    <div className={styles.falseDoorTestWrapper}>
      <div className={styles.content}>
        <span className={styles.logoWrapper}>
          <Image src={MozillaMonitorLogo} alt="" className={styles.logo} />
        </span>
        {content}
        <Link
          id="open-button"
          className={styles.cta}
          target="_blank"
          href={props.link}
          data-cta-id="false-door"
          onClick={props.onDismiss}
        >
          {l10n.getString("false-door-test-cta")}
        </Link>
      </div>
      <button
        id="close-button"
        className={styles.dismiss}
        onClick={props.onDismiss}
      >
        <CloseBtn
          alt={l10n.getString("false-door-test-popup-close")}
          width="15"
          height="15"
        />
      </button>
    </div>
  );
};
