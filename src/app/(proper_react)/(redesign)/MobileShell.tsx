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
import { UpsellBadge } from "../../components/client/toolbar/UpsellBadge";
import { CloseBigIcon, ListIcon } from "../../components/server/Icons";
import { UserMenu } from "../../components/client/toolbar/UserMenu";
import { useL10n } from "../../hooks/l10n";
import { useTelemetry } from "../../hooks/useTelemetry";
import { usePathname } from "next/navigation";
import { FeatureFlagName } from "../../../db/tables/featureFlags";
import { SignInButton } from "../../components/client/SignInButton";
import { TopNavBar } from "./(public)/TopNavBar";
import { TopNavBar as RedesignedTopNavBar } from "./(public)/LandingViewRedesign/components/TopNavBar";
import { ExperimentData } from "../../../telemetry/generated/nimbus/experiments";
import { NavbarList as NavbarListAuthenticated } from "./Shell/ShellNavbarList";
import { UserAnnouncementWithDetails } from "../../../db/tables/user_announcements";
import { AnnouncementDialog } from "../../components/client/toolbar/AnnouncementDialog";

export type Props = {
  countryCode: string;
  session: Session | null;
  monthlySubscriptionUrl: string;
  subscriptionBillingAmount: {
    monthly: number;
  };
  fxaSettingsUrl: string;
  children: ReactNode;
  enabledFeatureFlags: FeatureFlagName[];
  experimentData: ExperimentData["Features"];
  announcements?: UserAnnouncementWithDetails[] | null;
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
  const isOnSubscriptionPlans = pathname === "/subscription-plans";

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
        {!isOnSubscriptionPlans && (
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
                <ListIcon
                  alt={l10n.getString("main-nav-button-expand-label")}
                />
              )}
            </button>
          </div>
        )}
      </header>
      <div className={styles.nonHeader}>
        <nav
          className={styles.mainMenuLayer}
          aria-label={l10n.getString("mobile-menu-label")}
        >
          {props.session ? (
            <div className={styles.navbarListWrapper}>
              <NavbarListAuthenticated
                countryCode={props.countryCode}
                enabledFeatureFlags={props.enabledFeatureFlags}
              />
              <div className={styles.premiumCta}>
                <UpsellBadge
                  // The last scan date is too noisy on mobile, so don't show it there:
                  lastScanDate={null}
                  enabledFeatureFlags={props.enabledFeatureFlags}
                />
              </div>
            </div>
          ) : (
            <div className={styles.mainMenu}>
              {props.enabledFeatureFlags.includes("LandingPageRedesign") &&
              props.experimentData[
                "landing-page-redesign-plus-eligible-experiment"
              ].enabled &&
              props.experimentData[
                "landing-page-redesign-plus-eligible-experiment"
              ].variant === "redesign" ? (
                // The old <TopNavBar /> component is no longer hit by unit tests
                // that have already enabled the experiment, so ignore that for now:
                // (But c8 is weird so just pretend that this ignore comment is
                // two lines lower.)
                /* c8 ignore next 4 */
                <RedesignedTopNavBar />
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
