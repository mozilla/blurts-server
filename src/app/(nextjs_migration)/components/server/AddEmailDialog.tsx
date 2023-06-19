/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import React from "react";
import cloudImage from "../../../../client/images/dialog-email-clouds.svg";
import AppConstants from "../../../../appConstants";
import { getL10n } from "../../../functions/server/l10n";

export default function AddEmailDialog() {
  const l10n = getL10n();
  const emailLimit = AppConstants.MAX_NUM_ADDRESSES;

  return (
    <>
      {/* Styles need to be included manually when fetching the component via API */}
      {/* eslint-disable-next-line @next/next/no-css-tags */}
      <link rel="stylesheet" href="/nextjs_migration/client/css/addEmail.css" />
      <header>
        <button className="close"></button>
        {/* We can’t use next/image when we featch the component via API */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={cloudImage.src} alt="" />
        <h2>{l10n.getString("add-email-add-another-heading")}</h2>
      </header>
      <form>
        <p>
          {l10n.getString("add-email-your-account-includes", {
            total: emailLimit,
          })}
        </p>
        <label className="text-field">
          <span>{l10n.getString("add-email-address-input-label")}</span>
          <input type="email" name="email-address" required />
        </label>
        <button className="primary" type="submit" name="email-submit">
          {l10n.getString("add-email-send-verification-button")}
        </button>
      </form>
      <template
        data-success
        dangerouslySetInnerHTML={{
          __html: `
        <p class="add-email-success">
          ${l10n
            .getString("add-email-verify-the-link", {
              email: '<b class="current-email"></b>',
              "settings-href": 'href="/user/settings"',
            })
            // The following are special characters inserted by Fluent,
            // which break the link when inserted into the tag.
            // (For future strings, we can just `getElement` to properly insert
            // tags into localised strings.)
            .replaceAll("⁩", "")
            .replaceAll("⁨", "")}
        </p>
      `,
        }}
      />
    </>
  );
}
