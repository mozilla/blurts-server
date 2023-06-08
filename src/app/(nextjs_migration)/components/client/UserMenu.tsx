/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import { Session } from "next-auth";
import Image from "next/image";
import { signOut } from "next-auth/react";
import Script from "next/script";

import { useL10n } from "../../../hooks/l10n";
import OpenInIcon from "../../../../client/images/icon-open-in.svg";
import SettingsIcon from "../../../../client/images/icon-settings.svg";
import HelpIcon from "../../../../client/images/icon-help.svg";
import SignOutIcon from "../../../../client/images/icon-signout.svg";

export type Props = {
  session: Session | null;
  fxaSettingsUrl: string;
};

export const UserMenu = ({ session, fxaSettingsUrl }: Props) => {
  const l10n = useL10n();
  if (!session) {
    return null;
  }

  return (
    <div className="user-menu-wrapper" tabIndex={-1}>
      <Script src="/nextjs_migration/client/js/userMenu.js" />
      <button
        aria-expanded="false"
        aria-haspopup="true"
        className="user-menu-button"
        title={l10n.getString("menu-button-title")}
      >
        <img
          src={session.user?.avatar}
          alt={l10n.getString("menu-button-alt")}
        />
      </button>
      <menu
        aria-label={l10n.getString("menu-list-accessible-label")}
        className="user-menu-container user-menu-popover"
        role="navigation"
        hidden
      >
        <li tabIndex={1}>
          <a href={fxaSettingsUrl} target="_blank" className="user-menu-header">
            <b className="user-menu-email">{session.user?.email}</b>
            <div className="user-menu-subtitle">
              {l10n.getString("menu-item-fxa")}
              <Image alt="" src={OpenInIcon} />
            </div>
          </a>
          <hr />
        </li>
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
          <button
            onClick={() => signOut({ callbackUrl: "/" })}
            className="user-menu-link"
          >
            <Image alt="" src={SignOutIcon} />
            {l10n.getString("menu-item-logout")}
          </button>
        </li>
      </menu>
    </div>
  );
};
