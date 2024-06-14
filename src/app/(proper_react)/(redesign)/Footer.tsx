/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import styles from "./Shell.module.scss";
import Image from "next/image";
import Link from "next/link";
import mozillaLogo from "../images/mozilla-logo.svg";
import { ExtendedReactLocalization } from "../../functions/l10n";
import {
  CONST_URL_SUMO_MONITOR_FAQ,
  CONST_URL_MONITOR_GITHUB,
  CONST_URL_TERMS,
  CONST_URL_PRIVACY_POLICY,
} from "../../../constants";
import { Session } from "next-auth";
import { useTelemetry } from "../../hooks/useTelemetry";

export const Footer = ({
  l10n,
  session,
  countryCode,
}: {
  l10n: ExtendedReactLocalization;
  session?: Session;
  countryCode: string;
}) => {
  const recordTelemetry = useTelemetry();
  return (
    <footer className={styles.footer}>
      <Link
        href="https://www.mozilla.org"
        className={styles.mozillaLink}
        target="_blank"
      >
        <Image src={mozillaLogo} width={100} alt={l10n.getString("mozilla")} />
      </Link>
      <ul className={styles.externalLinks}>
        <li>
          <Link
            href="/breaches"
            onClick={() => {
              recordTelemetry("button", "click", {
                button_id: "all_breaches_footer",
              });
            }}
          >
            {l10n.getString("footer-nav-all-breaches")}
          </Link>
        </li>
        {countryCode === "us" && !session && (
          <li>
            <Link
              href="/how-it-works"
              target="_blank"
              onClick={() => {
                recordTelemetry("button", "click", {
                  button_id: "how_it_works_footer",
                });
              }}
            >
              {l10n.getString("footer-external-link-how-it-works-label")}
            </Link>
          </li>
        )}
        <li>
          <Link
            href={CONST_URL_SUMO_MONITOR_FAQ}
            target="_blank"
            title={l10n.getString("footer-external-link-faq-tooltip")}
            onClick={() => {
              recordTelemetry("button", "click", {
                button_id: "faqs_footer",
              });
            }}
          >
            {l10n.getString("footer-external-link-faq-label")}
          </Link>
        </li>
        <li>
          <Link
            href={CONST_URL_TERMS}
            target="_blank"
            onClick={() => {
              recordTelemetry("button", "click", {
                button_id: "tos_footer",
              });
            }}
          >
            {l10n.getString("terms-of-service")}
          </Link>
        </li>
        <li>
          <Link
            href={CONST_URL_PRIVACY_POLICY}
            target="_blank"
            onClick={() => {
              recordTelemetry("button", "click", {
                button_id: "privacy_notice_footer",
              });
            }}
          >
            {l10n.getString("privacy-notice")}
          </Link>
        </li>
        <li>
          <Link
            href={CONST_URL_MONITOR_GITHUB}
            target="_blank"
            onClick={() => {
              recordTelemetry("button", "click", {
                button_id: "github_footer",
              });
            }}
          >
            {l10n.getString("github")}
          </Link>
        </li>
      </ul>
    </footer>
  );
};
