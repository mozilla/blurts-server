/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import { ReactNode, useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Session } from "next-auth";
import styles from "./MobileShell.module.scss";
import monitorLogo from "../images/monitor-logo.webp";
import { UpsellBadge } from "../../components/client/UpsellBadge";
import { CloseBigIcon, ListIcon } from "../../components/server/Icons";
import { UserMenu } from "../../components/client/toolbar/UserMenu";
import { useL10n } from "../../hooks/l10n";
import { PageLink } from "./PageLink";
import { useTelemetry } from "../../hooks/useTelemetry";
import { usePathname } from "next/navigation";

export type Props = {
  session: Session;
  monthlySubscriptionUrl: string;
  yearlySubscriptionUrl: string;
  subscriptionBillingAmount: {
    yearly: number;
    monthly: number;
  };
  fxaSettingsUrl: string;
  children: ReactNode;
};

export const MobileShell = (props: Props) => {
  const l10n = useL10n();
  const [isExpanded, setIsExpanded] = useState(false);
  const recordTelemetry = useTelemetry();
  const pathName = usePathname();
  const wrapperRef = useRef<HTMLDivElement>(null);
  const isOnDashboard = pathName === "/user/dashboard";

  useEffect(() => {
    // As we transition focus away from the navigation bar in deeper sections
    // of the experience, it's best to ensure its focus on the dashboard page,
    // where users first encounter it and when they return to it
    /* c8 ignore next 3 */
    if (isOnDashboard) {
      wrapperRef.current?.focus();
    }
  }, [isOnDashboard]);

  return (
    <div
      ref={wrapperRef}
      /* c8 ignore next */
      tabIndex={isOnDashboard ? -1 : undefined}
      className={`${styles.wrapper} ${
        // TODO: Add unit test when changing this code:
        /* c8 ignore next */
        isExpanded ? styles.hasOpenMenu : styles.hasClosedMenu
      }`}
    >
      <header className={styles.header}>
        <div className={styles.headerStart}>
          <button
            // TODO: Add unit test when changing this code:
            /* c8 ignore next */
            onClick={() => setIsExpanded(!isExpanded)}
            className={styles.menuToggleButton}
            title={l10n.getString(
              // TODO: Add unit test when changing this code:
              /* c8 ignore next 2 */
              isExpanded
                ? "main-nav-button-collapse-tooltip"
                : "main-nav-button-expand-tooltip",
            )}
          >
            {
              // TODO: Add unit test when changing this code:
              /* c8 ignore next 5 */
              isExpanded ? (
                <CloseBigIcon
                  alt={l10n.getString("main-nav-button-collapse-label")}
                />
              ) : (
                <ListIcon
                  alt={l10n.getString("main-nav-button-expand-label")}
                />
              )
            }
          </button>
        </div>
        <div className={styles.headerMiddle}>
          <Link
            href="/user/dashboard"
            className={styles.homeLink}
            onClick={() => {
              recordTelemetry("ctaButton", "click", {
                button_id: "monitor_logo",
              });
            }}
          >
            <Image
              src={monitorLogo}
              alt={l10n.getString("main-nav-link-home-label")}
              width={170}
            />
          </Link>
        </div>
        <div className={styles.headerEnd}>
          <UserMenu
            user={props.session?.user}
            fxaSettingsUrl={props.fxaSettingsUrl}
          />
        </div>
      </header>
      <div className={styles.nonHeader}>
        <nav
          className={styles.mainMenuLayer}
          aria-label={l10n.getString("mobile-menu-label")}
        >
          <div className={styles.mainMenu}>
            <ul>
              <li key="home">
                <PageLink
                  href="/user/dashboard"
                  activeClassName={styles.isActive}
                  onClick={() => {
                    recordTelemetry("ctaButton", "click", {
                      button_id: "navigation_dashboard",
                    });
                  }}
                >
                  {l10n.getString("main-nav-link-dashboard-label")}
                </PageLink>
              </li>
              <li key="settings">
                <PageLink
                  href="/user/settings"
                  activeClassName={styles.isActive}
                >
                  {l10n.getString("main-nav-link-settings-label")}
                </PageLink>
              </li>
              <li key="faq">
                <a
                  href="https://support.mozilla.org/kb/firefox-monitor-faq"
                  title={l10n.getString("main-nav-link-faq-tooltip")}
                  onClick={() => {
                    recordTelemetry("ctaButton", "click", {
                      button_id: "navigation_faq",
                    });
                  }}
                >
                  {l10n.getString("main-nav-link-faq-label")}
                </a>
              </li>
            </ul>
            <div className={styles.premiumCta}>
              <UpsellBadge
                monthlySubscriptionUrl={props.monthlySubscriptionUrl}
                yearlySubscriptionUrl={props.yearlySubscriptionUrl}
                subscriptionBillingAmount={props.subscriptionBillingAmount}
              />
            </div>
          </div>
        </nav>
        <div className={styles.content}>{props.children}</div>
      </div>
    </div>
  );
};
