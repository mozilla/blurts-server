/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import styles from "./Shell.module.scss";
import Image from "next/image";
import Link from "next/link";
import mozillaLogo from "../images/mozilla-logo.svg";
import { ExtendedReactLocalization } from "../../hooks/l10n";
import {
  CONST_URL_SUMO_MONITOR_FAQ,
  CONST_URL_MONITOR_GITHUB,
  CONST_URL_TERMS,
  CONST_URL_PRIVACY_POLICY,
} from "../../../constants";

export const Footer = ({ l10n }: { l10n: ExtendedReactLocalization }) => {
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
          <Link href="/breaches">
            {l10n.getString("footer-nav-all-breaches")}
          </Link>
        </li>
        <li>
          <a
            href={CONST_URL_SUMO_MONITOR_FAQ}
            target="_blank"
            title={l10n.getString("footer-external-link-faq-tooltip")}
          >
            {l10n.getString("footer-external-link-faq-label")}
          </a>
        </li>
        <li>
          <a href={CONST_URL_TERMS} target="_blank">
            {l10n.getString("terms-of-service")}
          </a>
        </li>
        <li>
          <a href={CONST_URL_PRIVACY_POLICY} target="_blank">
            {l10n.getString("privacy-notice")}
          </a>
        </li>
        <li>
          <a href={CONST_URL_MONITOR_GITHUB} target="_blank">
            {l10n.getString("github")}
          </a>
        </li>
      </ul>
    </footer>
  );
};
