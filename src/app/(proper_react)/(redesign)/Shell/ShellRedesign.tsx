/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import { Session } from "next-auth";
import { MobileShell } from "../MobileShell";
import { PageLink } from "../PageLink";
import { Footer } from "../Footer";
import { ExtendedReactLocalization } from "../../../functions/l10n";
import { FeatureFlagName } from "../../../../db/tables/featureFlags";
import { ExperimentData } from "../../../../telemetry/generated/nimbus/experiments";
import {
  DashboardIcon,
  NotificationIcon,
  FaqIcon,
  ScanInfoIcon,
  SettingsIcon,
  TipIcon,
} from "../../../components/server/Icons";
import MonitorLogo from "../../images/monitor-logo.svg";
import styles from "./ShellRedesign.module.scss";

export type Props = {
  l10n: ExtendedReactLocalization;
  session: Session;
  children: ReactNode;
  countryCode: string;
  enabledFeatureFlags: FeatureFlagName[];
  experimentData: ExperimentData["Features"];
  monthlySubscriptionUrl: string;
  yearlySubscriptionUrl: string;
  fxaSettingsUrl: string;
  subscriptionBillingAmount: {
    yearly: number;
    monthly: number;
  };
};

export const NavbarList = (props: {
  l10n: ExtendedReactLocalization;
  countryCode: string;
  enabledFeatureFlags: FeatureFlagName[];
}) => (
  <div className={styles.navbarList}>
    <ul className="noList">
      <li key="dashboard">
        <PageLink
          href="/user/dashboard"
          activeClassName={styles.isActive}
          hasTelemetry={{ link_id: "navigation_dashboard" }}
        >
          <DashboardIcon alt="" />
          {props.l10n.getString("main-nav-link-dashboard-label")}
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
            {props.l10n.getString("settings-tab-label-update-scan-info")}
          </PageLink>
        </li>
      )}
    </ul>
    <hr />
    <strong>{props.l10n.getString("main-nav-link-settings-label")}</strong>
    <ul className="noList">
      {!props.enabledFeatureFlags.includes("EditScanProfileDetails") && (
        <li key="settings-edit-info">
          <PageLink
            href="/user/settings/edit-info"
            activeClassName={styles.isActive}
            hasTelemetry={{ link_id: "navigation_edit_info" }}
          >
            <ScanInfoIcon alt="" />
            {props.l10n.getString("settings-tab-label-edit-info")}
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
          {props.l10n.getString("settings-tab-label-notifications")}
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
          {props.l10n.getString("settings-tab-label-manage-account")}
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
            {props.l10n.getString(
              "landing-premium-hero-navbar-link-how-it-works",
            )}
          </PageLink>
        </li>
      )}
      <li key="faq">
        <PageLink
          href="https://support.mozilla.org/kb/firefox-monitor-faq"
          title={props.l10n.getString("main-nav-link-faq-tooltip")}
          target="_blank"
          hasTelemetry={{ link_id: "navigation_faq" }}
        >
          <FaqIcon alt="" />
          {props.l10n.getString("main-nav-link-faq-label")}
        </PageLink>
      </li>
    </ul>
  </div>
);

export const ShellRedesign = (props: Props) => {
  return (
    <MobileShell
      countryCode={props.countryCode}
      session={props.session}
      monthlySubscriptionUrl={props.monthlySubscriptionUrl}
      yearlySubscriptionUrl={props.yearlySubscriptionUrl}
      fxaSettingsUrl={props.fxaSettingsUrl}
      subscriptionBillingAmount={props.subscriptionBillingAmount}
      enabledFeatureFlags={props.enabledFeatureFlags}
      experimentData={props.experimentData}
    >
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <nav
            className={styles.mainMenu}
            aria-label={props.l10n.getString("main-nav-label")}
          >
            <Link href="/user/dashboard" className={styles.homeLink}>
              <Image
                src={MonitorLogo}
                alt={props.l10n.getString("main-nav-link-home-label")}
                width={170}
              />
            </Link>
            <NavbarList
              l10n={props.l10n}
              countryCode={props.countryCode}
              enabledFeatureFlags={props.enabledFeatureFlags}
            />
          </nav>
          <div className={styles.page}>{props.children}</div>
        </div>
        <Footer
          l10n={props.l10n}
          session={props.session}
          countryCode={props.countryCode}
        />
      </div>
    </MobileShell>
  );
};
