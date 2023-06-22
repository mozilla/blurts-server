/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import Image from "next/image";
import Script from "next/script";

import { getL10n } from "../../../../../functions/server/l10n";
import { getLocale } from "../../../../../../utils/fluent.js";
import { authOptions } from "../../../../../api/utils/auth";

export async function generateMetadata() {
  const l10n = getL10n();
  return {
    title: "Welcome - Details", // FIXME l10n.getString("breach-meta-title"),
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
    <>
      <main>
        <h1>Enter the details you want to protect</h1>
        <p>
          We’ll use this to find exposures of your personal information, and
          then guide you step-by-step on how to fix it.
          <a>Why do we need this info?</a>
        </p>

        <section>
          <form method="post" action="scanning">
            <div>
              <label for="name">First name: </label>
              <input type="text" name="firstname" id="firstname"></input>
            </div>
            <div>
              <label for="name">Last name: </label>
              <input type="text" name="lastname" id="lastname"></input>
            </div>
            <div>
              <label for="name">City and state: </label>
              <input type="text" name="citystate" id="citystate"></input>
            </div>
            <div>
              <label for="name">Date of birth: </label>
              <input type="date" name="dob" id="dob"></input>
            </div>
            <div>
              <button className="button secondary">Go back</button>
              <button type="submit" className="button primary">
                Start my free scan
              </button>
            </div>
          </form>
        </section>
      </main>
    </>
  );
}
