/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { Session } from "next-auth";
import { MobileShell } from "../MobileShell";
import { PageLink } from "../PageLink";
import { Footer } from "../Footer";
import { ExtendedReactLocalization } from "../../../functions/l10n";
import { FeatureFlagName } from "../../../../db/tables/featureFlags";
import { ExperimentData } from "../../../../telemetry/generated/nimbus/experiments";
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
            <ul>
              {/* Note: If you add elements here, also add them to <MobileShell>'s navigation */}
              <li key="home">
                <PageLink
                  href="/user/dashboard"
                  activeClassName={styles.isActive}
                  hasTelemetry={{ link_id: "navigation_dashboard" }}
                >
                  {props.l10n.getString("main-nav-link-dashboard-label")}
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
                    {props.l10n.getString("main-nav-link-how-it-works-label")}
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
                  {props.l10n.getString("main-nav-link-faq-label")}
                </PageLink>
              </li>
              <li key="settings">
                <PageLink
                  href="/user/settings"
                  activeClassName={styles.isActive}
                  hasTelemetry={{ link_id: "navigation_settings" }}
                >
                  {props.l10n.getString("main-nav-link-settings-label")}
                </PageLink>
              </li>
            </ul>
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
