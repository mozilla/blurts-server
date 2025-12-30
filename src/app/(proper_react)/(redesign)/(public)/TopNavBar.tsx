/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import { TelemetryLink } from "../../../components/client/TelemetryLink";
import { useL10n } from "../../../hooks/l10n";

export const TopNavBar = () => {
  const l10n = useL10n();
  return (
    <ul className="noList">
      <li>
        <TelemetryLink
          href="/how-it-works"
          eventData={{
            link_id: "navbar_how_it_works",
          }}
        >
          {l10n.getString("landing-all-hero-navbar-link-how-it-works")}
        </TelemetryLink>
      </li>
      <li>
        <TelemetryLink
          href="/#pricing"
          eventData={{
            link_id: "navbar_pricing",
          }}
        >
          {l10n.getString("landing-all-hero-navbar-link-pricing")}
        </TelemetryLink>
      </li>
      <li>
        <TelemetryLink
          data-testid="navbar_faqs"
          href="/#faq"
          eventData={{
            link_id: "navbar_faqs",
          }}
        >
          {l10n.getString("landing-all-hero-navbar-link-faqs")}
        </TelemetryLink>
      </li>
      <li>
        <TelemetryLink
          href="/breaches"
          eventData={{
            link_id: "navbar_recent_breaches",
          }}
        >
          {l10n.getString("landing-all-hero-navbar-link-recent-breaches")}
        </TelemetryLink>
      </li>
    </ul>
  );
};
