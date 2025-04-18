/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import { PageLink } from "../PageLink";
import { FeatureFlagName } from "../../../../db/tables/featureFlags";
import {
  DashboardIcon,
  NotificationIcon,
  FaqIcon,
  ScanInfoIcon,
  SettingsIcon,
  TipIcon,
} from "../../../components/server/Icons";
import styles from "./ShellNavbarList.module.scss";
import { usePathname } from "next/navigation";
import { useL10n } from "../../../hooks/l10n";

export const NavbarList = (props: {
  countryCode: string;
  enabledFeatureFlags: FeatureFlagName[];
}) => {
  const l10n = useL10n();
  const pathname = usePathname();
  const hideSidebar = pathname === "/user/settings/edit-profile";
  return (
    !hideSidebar && (
      <div className={styles.navbarList}>
        <ul className="noList">
          <li key="dashboard">
            <PageLink
              href="/user/dashboard"
              activeClassName={styles.isActive}
              hasTelemetry={{ link_id: "navigation_dashboard" }}
            >
              <DashboardIcon alt="" />
              {l10n.getString("main-nav-link-dashboard-label")}
            </PageLink>
          </li>
          {props.enabledFeatureFlags.includes("EditScanProfileDetails") && (
            <li key="settings-edit-info">
              <PageLink
                href="/user/settings/edit-info"
                activeClassName={styles.isActive}
                hasTelemetry={{ link_id: "navigation_edit_info" }}
              >
                <ScanInfoIcon alt="" />
                {l10n.getString("settings-tab-label-update-scan-info")}
              </PageLink>
            </li>
          )}
        </ul>
        <hr />
        <strong>{l10n.getString("main-nav-link-settings-label")}</strong>
        <ul className="noList">
          {!props.enabledFeatureFlags.includes("EditScanProfileDetails") && (
            <li key="settings-edit-info">
              <PageLink
                href="/user/settings/edit-info"
                activeClassName={styles.isActive}
                hasTelemetry={{ link_id: "navigation_edit_info" }}
              >
                <ScanInfoIcon alt="" />
                {l10n.getString("settings-tab-label-edit-info")}
              </PageLink>
            </li>
          )}
          <li key="settings-notifications">
            <PageLink
              href="/user/settings/notifications"
              activeClassName={styles.isActive}
              hasTelemetry={{
                link_id: "navigation_settings_notifications",
              }}
            >
              <NotificationIcon alt="" />
              {l10n.getString("settings-tab-label-notifications")}
            </PageLink>
          </li>
          <li key="settings-manage-account">
            <PageLink
              href="/user/settings/manage-account"
              activeClassName={styles.isActive}
              hasTelemetry={{
                link_id: "navigation_settings_manage_account",
              }}
            >
              <SettingsIcon alt="" />
              {l10n.getString("settings-tab-label-manage-account")}
            </PageLink>
          </li>
        </ul>
        <hr />
        <ul className="noList">
          {props.countryCode === "us" && (
            <li key="how-it-works">
              <PageLink
                href="/how-it-works"
                activeClassName={styles.isActive}
                target="_blank"
                hasTelemetry={{ link_id: "navigation_how_it_works" }}
              >
                <TipIcon alt="" />
                {l10n.getString(
                  "landing-premium-hero-navbar-link-how-it-works",
                )}
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
              <FaqIcon alt="" />
              {l10n.getString("main-nav-link-faq-label")}
            </PageLink>
          </li>
        </ul>
      </div>
    )
  );
};
