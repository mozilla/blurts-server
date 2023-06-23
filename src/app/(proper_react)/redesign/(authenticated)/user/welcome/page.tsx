/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { getL10n } from "../../../../../functions/server/l10n";

export async function generateMetadata() {
  const l10n = getL10n();
  return {
    title: "Welcome", // FIXME l10n.getString("breach-meta-title"),
    twitter: {
      card: "summary_large_image",
      title: l10n.getString("brand-fx-monitor"),
      description: l10n.getString("meta-desc-2"),
      images: ["/images/og-image.webp"],
    },
    openGraph: {
      title: l10n.getString("brand-fx-monitor"),
      description: l10n.getString("meta-desc-2"),
      siteName: l10n.getString("brand-fx-monitor"),
      type: "website",
      url: process.env.SERVER_URL,
      images: ["/images/og-image.webp"],
    },
  };
}

export default async function UserBreaches() {
  const l10n = getL10n();

  return (
    <main>
      <h1>Welcome to Monitor. Let’s find your exposed information.</h1>
      <p>
        To find and fix your exposed data, we’ll need to ask for your personal
        info. Rest assured we will safeguard your information like it’s our own.
      </p>

      <p>
        We believe in your right to privacy, so basic Monitor is always free.
        Upgrade to Premium for continuous protection and automatic removal of
        your personal info.
      </p>

      <p>See how we protect your data</p>
      <a href="welcome/details">
        <button className="button primary">Start my free scan</button>
      </a>
    </main>
  );
}
