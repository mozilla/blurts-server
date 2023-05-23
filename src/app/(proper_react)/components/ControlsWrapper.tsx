/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import { MouseEventHandler, ReactNode, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Session } from "next-auth";
import styles from "./ControlsWrapper.module.scss";
import monitorLogo from "../images/monitor-logo.webp";
import { ArrowIcon, HamburgerIcon } from "../../components/server/Icons";
import { useL10n } from "../../hooks/l10n";
import { UserMenu } from "../../components/client/UserMenu";
import { useMediaQuery } from "../../hooks/mediaQuery";

export type Props = {
  children: ReactNode;
  session: Session | null;
};

export const ControlsWrapper = (props: Props) => {
  const l10n = useL10n();
  const isSmallScreen = useMediaQuery("(max-width: 500px)");
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    // We can only detect whether the user's screen is small (and hence the menu
    // should be collapsed by default) when running on the client-side:
    setIsExpanded(!window.matchMedia("(max-width: 500px)").matches);
  }, []);

  const outsideClickHandler: MouseEventHandler | undefined =
    isSmallScreen && isExpanded
      ? (event) => {
          event.preventDefault();
          setIsExpanded(false);
        }
      : undefined;

  return (
    <div
      className={`${styles.wrapper} ${
        isExpanded ? styles.hasOpenMenu : styles.hasClosedMenu
      }`}
    >
      {/* TODO: Add an aria-label describing this menu, to distinguish it from .metaMenu */}
      <nav className={styles.mainMenu}>
        <div className={styles.collapseButtonWrapper}>
          <button
            onClick={() => setIsExpanded(false)}
            className={styles.collapseButton}
            title={l10n.getString("main-nav-button-collapse-tooltip")}
          >
            <ArrowIcon alt={l10n.getString("main-nav-button-collapse-label")} />
          </button>
        </div>
        <Link href="/" className={styles.homeLink}>
          <Image
            src={monitorLogo}
            alt={l10n.getString("main-nav-link-home-label")}
            width={170}
          />
        </Link>
        <hr />
      </nav>
      <div className={styles.content} onClick={outsideClickHandler}>
        <header className={styles.header}>
          <div className={styles.firstHalf}>
            <div className={styles.mainControls}>
              <button
                onClick={() => setIsExpanded(true)}
                className={styles.expandButton}
                title={l10n.getString("main-nav-button-expand-tooltip")}
              >
                <HamburgerIcon
                  alt={l10n.getString("main-nav-button-expand-label")}
                />
              </button>
              <Link href="/" className={styles.homeLink}>
                <Image
                  src={monitorLogo}
                  alt={l10n.getString("main-nav-link-home-label")}
                  width={170}
                />
              </Link>
            </div>
          </div>
          {/* TODO: Add an aria-label describing this menu, to distinguish it from .mainMenu */}
          <nav className={styles.metaMenu}>
            <UserMenu session={props.session} />
          </nav>
        </header>
        <div className={styles.page}>{props.children}</div>
      </div>
    </div>
  );
};
