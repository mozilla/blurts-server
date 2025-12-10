/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import { ReactNode, useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Session } from "next-auth";
import styles from "./MobileShell.module.scss";
import MonitorLogo from "../images/monitor-logo.svg";
import { CloseBigIcon, ListIcon } from "../../components/server/Icons";
import { UserMenu } from "../../components/client/toolbar/UserMenu";
import { useL10n } from "../../hooks/l10n";
import { PageLink } from "./PageLink";
import { useTelemetry } from "../../hooks/useTelemetry";
import { usePathname } from "next/navigation";
import { CONST_SETTINGS_TAB_SLUGS } from "../../../constants";
import { FeatureFlagName } from "../../../db/tables/featureFlags";
import { SignInButton } from "../../components/client/SignInButton";
import { TopNavBar } from "./(public)/TopNavBar";
import { NavbarList as NavbarListAuthenticated } from "./Shell/ShellNavbarList";
import { UserAnnouncementWithDetails } from "../../../db/tables/user_announcements";
import { AnnouncementDialog } from "../../components/client/toolbar/AnnouncementDialog";

export type Props = {
  countryCode: string;
  session: Session | null;
  children: ReactNode;
  enabledFeatureFlags: FeatureFlagName[];
  announcements?: UserAnnouncementWithDetails[] | null;
  fxaSettingsUrl: string;
};

export const MobileShell = (props: Props) => {
  const l10n = useL10n();
  const [isExpanded, setIsExpanded] = useState(false);
  const recordTelemetry = useTelemetry();
  const pathname = usePathname();
  const wrapperRef = useRef<HTMLDivElement>(null);
  const isAuthenticated =
    typeof props.session?.user.subscriber?.fxa_uid === "string";
  const isOnDashboard = pathname === "/user/dashboard";

  useEffect(() => {
    setIsExpanded(false);
  }, [pathname]);

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
        isExpanded ? styles.hasOpenMenu : styles.hasClosedMenu
      }`}
    >
      <header className={styles.header}>
        <div className={styles.headerStart}>
          <Link
            href={
              /* c8 ignore next */
              isAuthenticated ? "/user/dashboard" : "/"
            }
            className={styles.homeLink}
            onClick={() => {
              recordTelemetry("ctaButton", "click", {
                button_id: "monitor_logo",
              });
            }}
          >
            <Image
              src={MonitorLogo}
              alt={l10n.getString("main-nav-link-home-label")}
              width={170}
            />
          </Link>
        </div>

        <div className={styles.headerEnd}>
          {/* c8 ignore next 3 */}
          {props.announcements && (
            <AnnouncementDialog announcements={props.announcements} />
          )}
          {props.session ? (
            <UserMenu
              user={props.session?.user}
              fxaSettingsUrl={props.fxaSettingsUrl}
            />
          ) : (
            <SignInButton
              className={styles.signInButton}
              variant="secondary"
              small
            />
          )}
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className={styles.menuToggleButton}
            title={l10n.getString(
              isExpanded
                ? "main-nav-button-collapse-tooltip"
                : "main-nav-button-expand-tooltip",
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
      </header>
      <div className={styles.nonHeader}>
        <nav
          className={styles.mainMenuLayer}
          aria-label={l10n.getString("mobile-menu-label")}
        >
          {props.session &&
          props.enabledFeatureFlags.includes("SidebarNavigationRedesign") ? (
            <div className={styles.navbarListWrapper}>
              <NavbarListAuthenticated
                countryCode={props.countryCode}
                enabledFeatureFlags={props.enabledFeatureFlags}
              />
            </div>
          ) : (
            <div className={styles.mainMenu}>
              {props.session ? (
                <>
                  <ul>
                    <li key="home">
                      <PageLink
                        href="/user/dashboard"
                        activeClassName={styles.isActive}
                        hasTelemetry={{ link_id: "navigation_dashboard" }}
                      >
                        {l10n.getString("main-nav-link-dashboard-label")}
                      </PageLink>
                    </li>
                    {props.countryCode === "us" && (
                      <li key="how-it-works">
                        <PageLink
                          href="/how-it-works"
                          activeClassName={styles.isActive}
                          target="_blank"
                          hasTelemetry={{ link_id: "navigation_how_it_works" }}
                        >
                          {l10n.getString("main-nav-link-how-it-works-label")}
                        </PageLink>
                      </li>
                    )}
                    <li key="faq">
                      <PageLink
                        href="https://support.mozilla.org/kb/firefox-monitor-faq"
                        title={l10n.getString("main-nav-link-faq-tooltip")}
                        target="_blank"
                        hasTelemetry={{ link_id: "navigation_faq" }}
                      >
                        {l10n.getString("main-nav-link-faq-label")}
                      </PageLink>
                    </li>
                    <li key="settings">
                      <PageLink
                        href="/user/settings"
                        activeClassName={styles.isActive}
                        hasTelemetry={{ link_id: "navigation_settings" }}
                      >
                        {l10n.getString("main-nav-link-settings-label")}
                      </PageLink>
                      <ul className={styles.subMenu}>
                        {CONST_SETTINGS_TAB_SLUGS.filter(
                          (submenuKey) => submenuKey !== "edit-profile",
                        ).map((submenuKey) => {
                          return (
                            <li key={submenuKey}>
                              <PageLink
                                href={`/user/settings/${submenuKey}`}
                                activeClassName={styles.isActive}
                                hasTelemetry={{
                                  link_id: `navigation_settings_${submenuKey}`,
                                }}
                              >
                                {l10n.getString(
                                  `settings-tab-label-${submenuKey}`,
                                )}
                              </PageLink>
                            </li>
                          );
                        })}
                      </ul>
                    </li>
                  </ul>
                </>
              ) : (
                <TopNavBar />
              )}
            </div>
          )}
        </nav>
        <div className={styles.content}>{props.children}</div>
      </div>
    </div>
  );
};
