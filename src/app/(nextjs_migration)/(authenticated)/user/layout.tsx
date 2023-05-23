/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { ReactNode } from "react";
import { getServerSession } from "next-auth";
import Image from "next/image";
import Script from "next/script";

import "../../../../client/css/index.css";
import AppConstants from "../../../../appConstants.js";
import MonitorLogo from "../../../../client/images/monitor-logo-transparent@2x.webp";
import MozillaLogo from "../../../../client/images/moz-logo-1color-white-rgb-01.svg";
import { getL10n } from "../../../functions/server/l10n";
import { authOptions } from "../../../api/auth/[...nextauth]/route";

export type Props = {
  children: ReactNode;
};

const dummyData = {
  partial: {
    name: "breaches",
  },
  pathname: "/breaches",
  fxaProfile: {
    avatar: "https://profile.accounts.firefox.com/v1/avatar/f",
  },
};

import RelayLogo from "../../../../client/images/logo-relay.svg";
import VPNLogo from "../../../../client/images/logo-vpn.svg";
import OpenInIcon from "../../../../client/images/icon-open-in.svg";
import SettingsIcon from "../../../../client/images/icon-settings.svg";
import HelpIcon from "../../../../client/images/icon-help.svg";
import SignOutIcon from "../../../../client/images/icon-signout.svg";

const MainLayout = async (props: Props) => {
  const l10n = getL10n();
  const session = await getServerSession(authOptions);

  const isBreachesPage = dummyData.partial.name === "breaches";
  const isSettingsPage = dummyData.partial.name === "settings";

  const UserMenu = ({ user }) => {
    return (
      <div className="user-menu-wrapper" tabIndex={-1}>
        <Script src="/nextjs_migration/client/js/userMenu.js" />
        <button
          aria-expanded="false"
          aria-haspopup="true"
          className="user-menu-button"
          title={l10n.getString("menu-button-title")}
        >
          <Image src={user.avatar} alt={l10n.getString("menu-button-alt")} />
        </button>
        <menu
          aria-label={l10n.getString("menu-list-accessible-label")}
          className="user-menu-container user-menu-popover"
          role="navigation"
          hidden
        >
          <li tabIndex={1}>
            <a
              href={AppConstants.FXA_SETTINGS_URL}
              target="_blank"
              className="user-menu-header"
            >
              <b className="user-menu-email">{user.email}</b>
              <div className="user-menu-subtitle">
                {l10n.getString("menu-item-fxa")}
                <Image alt="" src={OpenInIcon} />
              </div>
            </a>
          </li>
          <hr />
          <li>
            <a href="/user/settings" className="user-menu-link">
              <Image alt="" src={SettingsIcon} />
              {l10n.getString("menu-item-settings")}
            </a>
          </li>
          <li>
            <a
              href="https://support.mozilla.org/kb/firefox-monitor"
              target="_blank"
              className="user-menu-link"
            >
              <Image alt="" src={HelpIcon} />
              {l10n.getString("menu-item-help")}
            </a>
          </li>
          <li>
            <a href="/user/logout" className="user-menu-link">
              <Image alt="" src={SignOutIcon} />
              {l10n.getString("menu-item-logout")}
            </a>
          </li>
        </menu>
      </div>
    );
  };

  return (
    <>
      <header>
        <a href="/user/breaches">
          <Image
            className="monitor-logo"
            src={MonitorLogo}
            width="213"
            height="33"
            alt={l10n.getString("brand-fx-monitor")}
          />
        </a>
        <div className="nav-wrapper">
          <button className="nav-toggle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 10 8"
              width="20"
            >
              <path
                d="M1 1h8M1 4h8M1 7h8"
                stroke="#000"
                strokeWidth="1"
                strokeLinecap="round"
              />
            </svg>
          </button>
          <UserMenu user={session?.user} />
        </div>
      </header>

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

      <main>{props.children}</main>

      <footer className="site-footer">
        <a href="https://www.mozilla.org" target="_blank">
          <Image
            src={MozillaLogo}
            width="100"
            height="29"
            loading="lazy"
            alt={l10n.getString("mozilla")}
          />
        </a>
        <menu>
          <li>
            <a href="/breaches">{l10n.getString("footer-nav-all-breaches")}</a>
          </li>
          <li>
            <a
              href="https://support.mozilla.org/kb/firefox-monitor-faq"
              target="_blank"
            >
              FAQ
            </a>
          </li>
          <li>
            <a
              href="https://www.mozilla.org/privacy/firefox-monitor"
              target="_blank"
            >
              {l10n.getString("terms-and-privacy")}
            </a>
          </li>
          <li>
            <a href="https://github.com/mozilla/blurts-server" target="_blank">
              {l10n.getString("github")}
            </a>
          </li>
        </menu>
      </footer>
    </>
  );
};

export default MainLayout;
