/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { ReactNode } from "react";
import Image from "next/image";
import { Session } from "next-auth";
import styles from "./Shell.module.scss";
import monitorLogo from "./images/monitor-logo.webp";
import mozillaLogo from "./images/mozilla-logo.svg";
import { MobileShell } from "./MobileShell";
import Link from "next/link";
import { PageLink } from "./PageLink";
import { ExtendedReactLocalization } from "../hooks/l10n";

export type Props = {
  l10n: ExtendedReactLocalization;
  session: Session | null;
  children: ReactNode;
};

export const Shell = (props: Props) => {
  const l10n = props.l10n;

  return (
    <MobileShell session={props.session}>
      <div className={styles.wrapper}>
        <nav className={styles.mainMenu}>
          <Link href="/" className={styles.homeLink}>
            <Image
              src={monitorLogo}
              alt={l10n.getString("main-nav-link-home-label")}
              width={170}
            />
          </Link>
          <ul>
            {/* Note: If you add elements here, also add them to <MobileShell>'s navigation */}
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
        </nav>
        <div className={styles.content}>
          <div className={styles.page}>{props.children}</div>
          <footer className={styles.footer}>
            <a
              href="https://www.mozilla.org"
              className={styles.mozillaLink}
              target="_blank"
            >
              <Image
                src={mozillaLogo}
                width={100}
                alt={l10n.getString("mozilla")}
              />
            </a>
            <ul className={styles.externalLinks}>
              <li>
                <a
                  href="https://support.mozilla.org/kb/firefox-monitor-faq"
                  title={l10n.getString("footer-external-link-faq-tooltip")}
                >
                  {l10n.getString("footer-external-link-faq-label")}
                </a>
              </li>
              <li>
                <a href="https://www.mozilla.org/privacy/firefox-monitor">
                  {l10n.getString("terms-and-privacy")}
                </a>
              </li>
              <li>
                <a href="https://github.com/mozilla/blurts-server">
                  {l10n.getString("github")}
                </a>
              </li>
            </ul>
          </footer>
        </div>
      </div>
    </MobileShell>
  );
};
