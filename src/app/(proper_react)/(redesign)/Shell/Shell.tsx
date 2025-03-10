/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { ReactNode } from "react";
import { Session } from "next-auth";
import Image from "next/image";
import Link from "next/link";
import { MobileShell } from "../MobileShell";
import { ShellRedesign } from "./ShellRedesign";
import { PageLink } from "../PageLink";
import { Footer } from "../Footer";
import { SubscriptionCheck } from "../../../components/client/SubscriptionCheck";
import { ExtendedReactLocalization } from "../../../functions/l10n";
import {
  getSubscriptionBillingAmount,
  getPremiumSubscriptionUrl,
} from "../../../functions/server/getPremiumSubscriptionInfo";
import { FeatureFlagName } from "../../../../db/tables/featureFlags";
import { ExperimentData } from "../../../../telemetry/generated/nimbus/experiments";
import MonitorLogo from "../../images/monitor-logo.svg";
import styles from "./Shell.module.scss";

export type Props = {
  l10n: ExtendedReactLocalization;
  session: Session;
  children: ReactNode;
  nonce: string;
  countryCode: string;
  enabledFeatureFlags: FeatureFlagName[];
  experimentData: ExperimentData["Features"];
};

export const Shell = (props: Props) => {
  const l10n = props.l10n;
  const monthlySubscriptionUrl = getPremiumSubscriptionUrl({ type: "monthly" });
  const yearlySubscriptionUrl = getPremiumSubscriptionUrl({ type: "yearly" });

  return (
    <>
      {/* This component ensures that the client session is synced with the
      server session and is not being mounted when running unit tests. */}
      {/* c8 ignore next */}
      {process.env.NODE_ENV !== "test" && <SubscriptionCheck />}

      {props.enabledFeatureFlags.includes("SidebarNavigationRedesign") ? (
        <ShellRedesign
          countryCode={props.countryCode}
          session={props.session}
          monthlySubscriptionUrl={monthlySubscriptionUrl}
          yearlySubscriptionUrl={yearlySubscriptionUrl}
          fxaSettingsUrl={process.env.FXA_SETTINGS_URL!}
          subscriptionBillingAmount={getSubscriptionBillingAmount()}
          enabledFeatureFlags={props.enabledFeatureFlags}
          experimentData={props.experimentData}
          l10n={props.l10n}
        >
          <div className={styles.page}>{props.children}</div>
        </ShellRedesign>
      ) : (
        <MobileShell
          countryCode={props.countryCode}
          session={props.session}
          monthlySubscriptionUrl={monthlySubscriptionUrl}
          yearlySubscriptionUrl={yearlySubscriptionUrl}
          fxaSettingsUrl={process.env.FXA_SETTINGS_URL!}
          subscriptionBillingAmount={getSubscriptionBillingAmount()}
          enabledFeatureFlags={props.enabledFeatureFlags}
          experimentData={props.experimentData}
        >
          <div className={styles.wrapper}>
            <nav
              className={styles.mainMenu}
              aria-label={l10n.getString("main-nav-label")}
            >
              <Link href="/user/dashboard" className={styles.homeLink}>
                <Image
                  src={MonitorLogo}
                  alt={l10n.getString("main-nav-link-home-label")}
                  width={170}
                />
              </Link>
              <ul>
                {/* Note: If you add elements here, also add them to <MobileShell>'s navigation */}
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
                </li>
              </ul>
            </nav>
            <div className={styles.content}>
              <div className={styles.page}>{props.children}</div>
              <Footer
                l10n={props.l10n}
                session={props.session}
                countryCode={props.countryCode}
              />
            </div>
          </div>
        </MobileShell>
      )}
    </>
  );
};
