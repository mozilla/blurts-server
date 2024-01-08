/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import styles from "./Shell.module.scss";
import Image from "next/image";
import mozillaLogo from "../images/mozilla-logo.svg";
import { useL10n } from "../../hooks/l10n";

export const Footer = () => {
  const l10n = useL10n();

  return (
    <footer className={styles.footer}>
      <a
        href="https://www.mozilla.org"
        className={styles.mozillaLink}
        target="_blank"
      >
        <Image src={mozillaLogo} width={100} alt={l10n.getString("mozilla")} />
      </a>
      <ul className={styles.externalLinks}>
        <li>
          <a
            href={process.env.NEXT_PUBLIC_MONITOR_FAQ}
            target="_blank"
            title={l10n.getString("footer-external-link-faq-tooltip")}
          >
            {l10n.getString("footer-external-link-faq-label")}
          </a>
        </li>
        <li>
          <a href={process.env.NEXT_PUBLIC_MONITOR_LEGAL} target="_blank">
            {l10n.getString("terms-of-service")}
          </a>
        </li>
        <li>
          <a
            href={process.env.NEXT_PUBLIC_MONITOR_SUBSCRIPTION_SERVICES}
            target="_blank"
          >
            {l10n.getString("privacy-notice")}
          </a>
        </li>
        <li>
          <a href={process.env.NEXT_PUBLIC_MONITOR_GITHUB} target="_blank">
            {l10n.getString("github")}
          </a>
        </li>
      </ul>
    </footer>
  );
};
