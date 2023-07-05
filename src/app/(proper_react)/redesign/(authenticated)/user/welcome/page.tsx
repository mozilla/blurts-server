/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { isEligible } from "../../../../../functions/server/onerep";

export function generateMetadata() {
  return {
    title: "Welcome",
  };
}

export default async function UserWelcome() {
  const eligible = await isEligible();

  if (!eligible) {
    return (
      <main>
        <h2>You have already used your free scan.</h2>
      </main>
    );
  }

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
      <a href="welcome/details">
        <button className="button primary">Start my free scan</button>
      </a>
    </main>
  );
}
