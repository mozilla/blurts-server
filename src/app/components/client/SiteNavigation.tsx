/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { useL10n } from "../../hooks/l10n";

import RelayLogo from "../../../client/images/logo-relay.svg";
import VPNLogo from "../../../client/images/logo-vpn.svg";

export const SiteNavigation = () => {
  const l10n = useL10n();
  const pathname = usePathname();

  const isBreachesPage = pathname === "/user/breaches";
  const isSettingsPage = pathname === "/user/settings";

  return (
    <nav className="site-nav">
      <div className="pages-nav">
        <a
          href="/user/breaches"
          className={`nav-item ${isBreachesPage ? "current" : ""}`}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M10.5942 20.049C9.87439 21.3816 10.8394 22.9996 12.3539 22.9996H19.657C21.1692 22.9996 22.1344 21.3862 21.4193 20.0538L17.7796 13.2724C17.0264 11.8689 15.0148 11.8662 14.2577 13.2676L10.5942 20.049Z"
              fill="white"
              stroke="currentcolor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M16 21C16.5523 21 17 20.5523 17 20C17 19.4477 16.5523 19 16 19C15.4477 19 15 19.4477 15 20C15 20.5523 15.4477 21 16 21Z"
              fill="currentcolor"
            />
            <path
              d="M16 17V16"
              stroke="currentcolor"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M7 22H5C3.89543 22 3 21.1046 3 20V11C3 9.89543 3.89543 9 5 9H19C20.1046 9 21 9.89543 21 11V13"
              stroke="currentcolor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M7 9V7C7 4.23858 9.23858 2 12 2C14.7614 2 17 4.23858 17 7V9"
              stroke="currentcolor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          {l10n.getString("site-nav-breaches-link")}
        </a>
      </div>

      <div className="meta-nav">
        <a
          href="/user/settings"
          className={`nav-item ${isSettingsPage ? "current" : ""}`}
        >
          {l10n.getString("site-nav-settings-link")}
        </a>

        <a
          target="_blank"
          href="https://support.mozilla.org/kb/firefox-monitor"
          className="nav-item"
        >
          {l10n.getString("site-nav-help-link")}
        </a>
      </div>

      <div className="callouts">
        <p>{l10n.getString("site-nav-ad-callout")}</p>
        <a
          href="https://relay.firefox.com/?utm_medium=mozilla-websites&utm_source=monitor&utm_campaign=&utm_content=nav-bar-global"
          target="_blank"
        >
          <Image alt={l10n.getString("brand-relay")} src={RelayLogo} />
        </a>
        <a
          href="https://www.mozilla.org/products/vpn?utm_medium=mozilla-websites&utm_source=monitor&utm_campaign=&utm_content=nav-bar-global"
          target="_blank"
        >
          <Image alt={l10n.getString("brand-mozilla-vpn")} src={VPNLogo} />
        </a>
      </div>
    </nav>
  );
};
