/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import Image from "next/image";
import ShieldIcon from "./assets/shield-icon.svg";
import ShieldOutlineIcon from "./assets/shield-outline-icon.svg";
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
  const [cookies, setCookie] = useCookies(["falseDoorDismissedPhase2"]);
  const [shouldShowFalseDoor, setShouldShowFalseDoor] = useState(false);
  const pathname = usePathname();
  const isOnDashboard = pathname === "/user/breaches";

  const waitlistLink = appendUtmParams({
    linkUrl: props.link,
    utmParams: {
      utm_source: "monitor",
      utm_medium: "monitor-product",
      utm_content: `banner-phase-2-us_${pathname}`,
    },
  });

  const handleDismiss = (event?: Event) => {
    setCookie("falseDoorDismissedPhase2", "true", { path: "/" });

    console.debug("event.target:", event?.target);
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
    setShouldShowFalseDoor(!cookies.falseDoorDismissedPhase2);
  }, [cookies.falseDoorDismissedPhase2]);

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
/* c8 ignore stop */

type FalseDoorBanner = {
  onDismiss?: () => void;
  checkIsOnDashboard: boolean;
  link: string;
};
export const FalseDoorBanner = (props: FalseDoorBanner) => {
  const l10n = useL10n();

  const icon = props.checkIsOnDashboard ? ShieldOutlineIcon : ShieldIcon;

  const content = (
    <p>
      {l10n.getString("false-door-test-phase-2-content-part-one")}
      <br />
      {props.checkIsOnDashboard
        ? l10n.getString("false-door-test-phase-2-content-part-two-dashboard")
        : l10n.getString("false-door-test-phase-2-content-part-two")}
    </p>
  );

  return (
    <div className={styles.falseDoorTestWrapper}>
      <div className={styles.content}>
        <div className={styles.imageAndCopy}>
          <Image src={icon} alt="" className={styles.logo} />
          {content}
        </div>
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
