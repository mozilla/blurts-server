/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { v5 as uuidv5 } from "uuid";
import { ReactNode } from "react";

import { logger } from "../../functions/server/logging";
import "../../../client/css/index.css";
import Image from "next/image";
import MonitorLogo from "../../../client/images/monitor-logo-transparent@2x.webp";
import MozillaLogo from "../../../client/images/moz-logo-1color-white-rgb-01.svg";
import { SignInButton } from "../components/client/SignInButton";
import { getL10n } from "../../functions/server/l10n";
import { getServerSession } from "next-auth";
import { authOptions } from "../../api/utils/auth";
import { cookies } from "next/headers";
import { randomUUID } from "crypto";
import { PageLoadEvent } from "../components/client/PageLoadEvent";
import { getExperiments } from "../../functions/server/getExperiments";
import { getEnabledFeatureFlags } from "../../../db/tables/featureFlags";

export type Props = {
  children: ReactNode;
};

const GuestLayout = async (props: Props) => {
  const l10n = getL10n();

  // If the user is logged in, use UUID derived from FxA UID as Nimbus user ID.
  const session = await getServerSession(authOptions);
  const accountId = session?.user?.subscriber?.fxa_uid;
  let userId = "";

  if (accountId && typeof accountId === "string") {
    // If the user is logged in, use the FxA User ID.
    // Note: we may want to use the FxA UID here, but we need approval for that first.
    userId = accountId;
  } else {
    // if the user is not logged in, use a cookie with a randomly-generated Nimbus user ID.
    // TODO: could we use client ID for this? There's no supported way to get it from GleanJS.
    const cookie = cookies().get("userId");
    if (cookie) {
      userId = cookie.value;
    } else {
      // TODO Cookies can only be set in server action or route handler
      // @see https://nextjs.org/docs/app/api-reference/functions/cookies#cookiessetname-value-options
      // This is set client-side in PageLoadEvent.
      userId = `guest-${randomUUID()}`;
    }
  }

  if (!userId) {
    logger.error("No user ID for Nimbus telemetry");
  }

  try {
    // TODO For initial A/A testing `features` is unused. https://mozilla-hub.atlassian.net/browse/MNTOR-2182
    const features = await getExperiments(userId);
    // TODO remove debug for A/A testing https://mozilla-hub.atlassian.net/browse/MNTOR-2182
    logger.debug("Nimbus features in guest session:", features);
  } catch (ex) {
    logger.error("Could not fetch Nimbus features:", ex);
  }

  const enabledFlags = await getEnabledFeatureFlags({
    email: session?.user.email ?? "",
  });

  return (
    <>
      <PageLoadEvent userId={userId} enabledFlags={enabledFlags} />
      <header>
        <div className="header-wrapper">
          <a href="/">
            <Image
              className="monitor-logo"
              src={MonitorLogo}
              width="213"
              height="33"
              alt={l10n.getString("brand-fx-monitor")}
              priority
            />
          </a>
          <menu>
            <li>
              <SignInButton />
            </li>
          </menu>
        </div>
      </header>
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
              href="https://www.mozilla.org/about/legal/terms/subscription-services/"
              target="_blank"
            >
              {l10n.getString("terms-of-service")}
            </a>
          </li>
          <li>
            <a
              href="https://www.mozilla.org/privacy/subscription-services/"
              target="_blank"
            >
              {l10n.getString("privacy-notice")}
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

export default GuestLayout;
