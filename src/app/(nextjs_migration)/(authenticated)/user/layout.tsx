/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { v5 as uuidv5 } from "uuid";
import { ReactNode } from "react";
import { getServerSession } from "next-auth";
import Image from "next/image";
import Script from "next/script";

import "../../../../client/css/index.css";
import { UserMenu } from "../../components/client/UserMenu";
import { SignInButton } from "../../components/client/SignInButton";
import { SiteNavigation } from "../../components/client/SiteNavigation";
import AppConstants from "../../../../appConstants.js";
import MonitorLogo from "../../../../client/images/monitor-logo-transparent@2x.webp";
import MozillaLogo from "../../../../client/images/moz-logo-1color-white-rgb-01.svg";
import { getL10n } from "../../../functions/server/l10n";
import { authOptions } from "../../../api/utils/auth";
import { getNonce } from "../../functions/server/getNonce";
import { PageLoadEvent } from "../../components/client/PageLoadEvent";
import { getExperiments } from "../../../functions/server/getExperiments";
export type Props = {
  children: ReactNode;
};

const MainLayout = async (props: Props) => {
  const session = await getServerSession(authOptions);
  if (!session) {
    return <SignInButton autoSignIn />;
  }

  const accountId = session?.user?.subscriber?.fxa_uid;

  let userId = "";
  if (accountId && typeof accountId === "string") {
    // If the user is logged in, use a UUID based on the user's subscriber ID.
    // TODO determine if we can collect the FxA UID directly https://mozilla-hub.atlassian.net/browse/MNTOR-2180
    if (process.env.NIMBUS_UUID_NAMESPACE) {
      userId = uuidv5(accountId, process.env.NIMBUS_UUID_NAMESPACE);
    } else {
      console.error("NIMBUS_UUID_NAMESPACE env var not set");
    }
  }

  if (!userId) {
    console.error("No user ID for Nimbus telemetry");
  }

  try {
    // TODO For initial A/A testing `features` is unused. https://mozilla-hub.atlassian.net/browse/MNTOR-2182
    const features = await getExperiments(userId);
    // TODO remove debug for A/A testing https://mozilla-hub.atlassian.net/browse/MNTOR-2182
    console.debug("Nimbus features in authenticated session:", features);
  } catch (ex) {
    console.error("Could not fetch Nimbus features:", ex);
  }

  const l10n = getL10n();

  return (
    <>
      <Script
        type="module"
        src="/nextjs_migration/client/js/nav.js"
        nonce={getNonce()}
      />
      <PageLoadEvent userId={userId} />
      <header>
        <div className="header-wrapper">
          <a href="/user/breaches">
            <Image
              className="monitor-logo"
              src={MonitorLogo}
              width="213"
              height="33"
              alt={l10n.getString("brand-fx-monitor")}
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
              fxaSettingsUrl={AppConstants.NEXT_PUBLIC_FXA_SETTINGS_URL}
              nonce={getNonce()}
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
              href="https://www.mozilla.org/privacy/firefox-monitor"
              target="_blank"
            >
              {l10n.getString("terms-and-privacy")}
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
