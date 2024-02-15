/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { ReactNode } from "react";
import Image from "next/image";
import { Session } from "next-auth";
import styles from "./Shell.module.scss";
import monitorLogo from "../images/monitor-logo.webp";
import { MobileShell } from "./MobileShell";
import Link from "next/link";
import { PageLink } from "./PageLink";
import { ExtendedReactLocalization } from "../../hooks/l10n";
import {
  getSubscriptionBillingAmount,
  getPremiumSubscriptionUrl,
} from "../../functions/server/getPremiumSubscriptionInfo";
import { SubscriptionCheck } from "../../components/client/SubscriptionCheck";
import { Footer } from "./Footer";

export type Props = {
  l10n: ExtendedReactLocalization;
  session: Session;
  children: ReactNode;
  nonce: string;
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
      <MobileShell
        session={props.session}
        monthlySubscriptionUrl={monthlySubscriptionUrl}
        yearlySubscriptionUrl={yearlySubscriptionUrl}
        fxaSettingsUrl={process.env.FXA_SETTINGS_URL!}
        subscriptionBillingAmount={getSubscriptionBillingAmount()}
      >
        <div className={styles.wrapper}>
          <nav
            className={styles.mainMenu}
            aria-label={l10n.getString("main-nav-label")}
          >
            <Link href="/user/dashboard" className={styles.homeLink}>
              <Image
                src={monitorLogo}
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
                >
                  {l10n.getString("main-nav-link-faq-label")}
                </a>
              </li>
            </ul>
          </nav>
          <div className={styles.content}>
            <div className={styles.page}>{props.children}</div>
            <Footer l10n={props.l10n} />
          </div>
        </div>
      </MobileShell>
    </>
  );
};
