/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { ReactNode } from "react";
import Image from "next/image";
import Script from "next/script";

import { logger } from "../../../functions/server/logging";
import "../../../../client/css/index.css";
import { UserMenu } from "../../components/client/UserMenu";
import { SignInButton } from "../../components/client/SignInButton";
import { SiteNavigation } from "../../components/client/SiteNavigation";
import AppConstants from "../../../../appConstants.js";
import MonitorLogo from "../../../../client/images/monitor-logo-transparent@2x.webp";
import MozillaLogo from "../../../../client/images/moz-logo-1color-white-rgb-01.svg";
import { getL10n } from "../../../functions/server/l10n";
import { getNonce } from "../../functions/server/getNonce";
import { PageLoadEvent } from "../../../components/client/PageLoadEvent";
import { getExperiments } from "../../../functions/server/getExperiments";
import { getEnabledFeatureFlags } from "../../../../db/tables/featureFlags";
import { getServerSession } from "../../../functions/server/getServerSession";

export type Props = {
  children: ReactNode;
};

const MainLayout = async (props: Props) => {
  const session = await getServerSession();
  if (!session?.user?.subscriber) {
    return <SignInButton autoSignIn />;
  }

  const userId = session.user.subscriber.fxa_uid ?? "";

  if (!userId) {
    logger.error("No user ID for telemetry");
  }

  try {
    // TODO For initial A/A testing `features` is unused. https://mozilla-hub.atlassian.net/browse/MNTOR-2182
    const features = await getExperiments(userId);
    // TODO remove debug for A/A testing https://mozilla-hub.atlassian.net/browse/MNTOR-2182
    logger.debug("Nimbus features in authenticated session:", features);
  } catch (ex) {
    logger.error("Could not fetch Nimbus features:", ex);
  }

  const l10n = getL10n();
  const enabledFeatureFlags = await getEnabledFeatureFlags({
    email: session.user.email,
  });

  return (
    <>
      <Script
        type="module"
        src="/nextjs_migration/client/js/nav.js"
        nonce={getNonce()}
      />
      <PageLoadEvent userId={userId} enabledFlags={enabledFeatureFlags} />
      <header>
        <div className="header-wrapper">
          <a href="/user/breaches">
            <Image
              className="monitor-logo"
              src={MonitorLogo}
              width="213"
              height="33"
              alt={l10n.getString("brand-mozilla-monitor")}
              priority
            />
          </a>
          <div className="nav-wrapper">
            <button className="nav-toggle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 10 8"
                width="20"
              >
                <path
                  d="M1 1h8M1 4h8M1 7h8"
                  stroke="#000"
                  strokeWidth="1"
                  strokeLinecap="round"
                />
              </svg>
            </button>
            <UserMenu
              session={session}
              fxaSettingsUrl={AppConstants.FXA_SETTINGS_URL}
              nonce={getNonce()}
              enabledFeatureFlags={enabledFeatureFlags}
            />
          </div>
        </div>
      </header>

      <SiteNavigation />

      {props.children}

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

export default MainLayout;
