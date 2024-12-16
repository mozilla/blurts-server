/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import { TelemetryLink } from "../../../components/client/TelemetryLink";
import { useL10n } from "../../../hooks/l10n";

export const TopNavBar = (props: {
  styles: {
    readonly [key: string]: string;
  };
}) => {
  const l10n = useL10n();
  return (
    <div className={props.styles.navbar}>
      <div className={props.styles.navbarLinksContainer}>
        <TelemetryLink
          className={props.styles.navbarLinks}
          href="/how-it-works"
          eventData={{
            link_id: "navbar_how_it_works",
          }}
        >
          {l10n.getString("landing-premium-hero-navbar-link-how-it-works")}
        </TelemetryLink>
        <TelemetryLink
          className={props.styles.navbarLinks}
          href="#pricing"
          eventData={{
            link_id: "navbar_pricing",
          }}
        >
          {l10n.getString("landing-premium-hero-navbar-link-pricing")}
        </TelemetryLink>
        <TelemetryLink
          data-testid="navbar_faqs"
          className={props.styles.navbarLinks}
          href="#faq"
          eventData={{
            link_id: "navbar_faqs",
          }}
        >
          {l10n.getString("landing-premium-hero-navbar-link-faqs")}
        </TelemetryLink>
        <TelemetryLink
          className={props.styles.navbarLinks}
          href="/breaches"
          eventData={{
            link_id: "navbar_recent_breaches",
          }}
        >
          {l10n.getString("landing-premium-hero-navbar-link-recent-breaches")}
        </TelemetryLink>
      </div>
    </div>
  );
};
