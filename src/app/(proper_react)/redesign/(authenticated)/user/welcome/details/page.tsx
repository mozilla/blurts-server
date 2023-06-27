/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { getServerSession } from "next-auth";
import { authOptions } from "../../../../../../api/utils/auth";
import { getL10n } from "../../../../../../functions/server/l10n";
import { isEligible } from "../../../../../../functions/server/onerep";

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

export default async function UserWelcomeDetails() {
  const session = await getServerSession(authOptions);
  const eligible = await isEligible();

  if (!eligible) {
    return (
      <main>
        <h2>You have already used your free scan.</h2>
      </main>
    );
  } else {
    return (
      <main>
        <h1>Enter the details you want to protect</h1>
        <p>
          We’ll use this to find exposures of your personal information, and
          then guide you step-by-step on how to fix it.
          <a>Why do we need this info?</a>
        </p>

        <section>
          <form
            method="post"
            action="http://localhost:6060/api/v1/user/welcome"
          >
            <div>
              <label htmlFor="firstname">First name: </label>
              <input type="text" name="firstname" id="firstname"></input>
            </div>
            <div>
              <label htmlFor="lastname">Last name: </label>
              <input type="text" name="lastname" id="lastname"></input>
            </div>
            <div>
              <label htmlFor="citystate">City and state: </label>
              <input type="text" name="city" id="city"></input>
              <input type="text" name="state" id="state"></input>
            </div>
            <div>
              <label htmlFor="dob">Date of birth: </label>
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
    );
  }
}
