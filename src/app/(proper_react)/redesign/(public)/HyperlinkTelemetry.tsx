/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import { useTelemetry } from "../../../hooks/useTelemetry";
import { useL10n } from "../../../hooks/l10n";

// Extracting this description into it's own client component to add telemetry to the privacy link
export const FixExposuresDescription = () => {
  const record = useTelemetry();
  const l10n = useL10n();

  const onClick = () => {
    record("button", "click", {
      button_id: "privacy_information",
    });
  };
  return l10n.getFragment("landing-all-value-prop-fix-exposures-description", {
    elems: {
      privacy_link: (
        <a
          onClick={onClick}
          href="https://www.mozilla.org/en-US/firefox/privacy/"
          target="_blank"
        />
      ),
    },
  });
};
