/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import styles from "./Shell/Shell.module.scss";
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
import { TelemetryLink } from "../../components/client/TelemetryLink";

export const Footer = ({
  l10n,
  session,
  countryCode,
}: {
  l10n: ExtendedReactLocalization;
  session?: Session;
  countryCode: string;
}) => {
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
          <TelemetryLink
            href="/breaches"
            eventData={{
              link_id: "recent_breaches_footer",
            }}
          >
            {l10n.getString("footer-nav-recent-breaches")}
          </TelemetryLink>
        </li>
        {countryCode === "us" && !session && (
          <li>
            <TelemetryLink
              href="/how-it-works"
              target="_blank"
              eventData={{
                link_id: "how_it_works_footer",
              }}
            >
              {l10n.getString("footer-external-link-how-it-works-label")}
            </TelemetryLink>
          </li>
        )}
        <li>
          <TelemetryLink
            href={CONST_URL_SUMO_MONITOR_FAQ}
            target="_blank"
            title={l10n.getString("footer-external-link-faq-tooltip")}
            eventData={{
              link_id: "faqs_footer",
            }}
          >
            {l10n.getString("footer-external-link-faq-label")}
          </TelemetryLink>
        </li>
        <li>
          <TelemetryLink
            href={CONST_URL_TERMS}
            target="_blank"
            eventData={{
              link_id: "tos_footer",
            }}
          >
            {l10n.getString("terms-of-service")}
          </TelemetryLink>
        </li>
        <li>
          <TelemetryLink
            href={CONST_URL_PRIVACY_POLICY}
            target="_blank"
            eventData={{
              link_id: "privacy_notice_footer",
            }}
          >
            {l10n.getString("privacy-notice")}
          </TelemetryLink>
        </li>
        <li>
          <TelemetryLink
            href={CONST_URL_MONITOR_GITHUB}
            target="_blank"
            eventData={{
              link_id: "github_footer",
            }}
          >
            {l10n.getString("github")}
          </TelemetryLink>
        </li>
      </ul>
    </footer>
  );
};
