/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import { ReactNode, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Session } from "next-auth";
import styles from "./MobileShell.module.scss";
import monitorLogo from "../images/monitor-logo.webp";
import { CloseBigIcon, ListIcon } from "../../components/server/Icons";
import { UserMenu } from "../../components/client/toolbar/UserMenu";
import { useL10n } from "../../hooks/l10n";
import { PageLink } from "./PageLink";

export type Props = {
  children: ReactNode;
  session: Session | null;
};

export const MobileShell = (props: Props) => {
  const l10n = useL10n();
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      className={`${styles.wrapper} ${
        isExpanded ? styles.hasOpenMenu : styles.hasClosedMenu
      }`}
    >
      <header className={styles.header}>
        <div className={styles.headerStart}>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className={styles.menuToggleButton}
            title={l10n.getString(
              isExpanded
                ? "main-nav-button-collapse-tooltip"
                : "main-nav-button-expand-tooltip"
            )}
          >
            {isExpanded ? (
              <CloseBigIcon
                alt={l10n.getString("main-nav-button-collapse-label")}
              />
            ) : (
              <ListIcon alt={l10n.getString("main-nav-button-expand-label")} />
            )}
          </button>
        </div>
        <div className={styles.headerMiddle}>
          <Link href="/" className={styles.homeLink}>
            <Image
              src={monitorLogo}
              alt={l10n.getString("main-nav-link-home-label")}
              width={170}
            />
          </Link>
        </div>
        <div className={styles.headerEnd}>
          <UserMenu user={props.session?.user} />
        </div>
      </header>
      <div className={styles.nonHeader}>
        <nav
          className={styles.mainMenuLayer}
          aria-label={l10n.getString("mobile-menu-label")}
        >
          <div className={styles.mainMenu}>
            <ul>
              <li>
                <PageLink
                  href="/redesign/user/dashboard"
                  activeClassName={styles.isActive}
                >
                  {l10n.getString("main-nav-link-dashboard-label")}
                </PageLink>
              </li>
              <li>
                <a
                  href="https://support.mozilla.org/kb/firefox-monitor-faq"
                  title={l10n.getString("main-nav-link-faq-tooltip")}
                >
                  {l10n.getString("main-nav-link-faq-label")}
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <div className={styles.content}>{props.children}</div>
      </div>
    </div>
  );
};
