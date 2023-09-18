/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { v5 as uuidv5 } from "uuid";
import { ReactNode } from "react";
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
import { captureException } from "@sentry/node";

export type Props = {
  children: ReactNode;
};

const GuestLayout = async (props: Props) => {
  const l10n = getL10n();

  // If the user is logged in, use UUID derived from FxA UID as Nimbus user ID.
  const session = await getServerSession(authOptions);
  const accountId = session?.user?.subscriber?.fxa_uid;
  let userId;

  if (accountId) {
    // If the user is logged in, use a UUID based on the user's subscriber ID.
    // Note: we may want to use the FxA UID here, but we need approval for that first.
    if (!process.env.NIMBUS_UUID_NAMESPACE) {
      throw new Error("env var NIMBUS_UUID_NAMESPACE not set");
    }
    userId = uuidv5(accountId.toString(), process.env.NIMBUS_UUID_NAMESPACE);
  } else {
    // if the user is not logged in, use a cookie with a randomly-generated Nimbus user ID.
    const cookie = cookies().get("userId");
    if (cookie) {
      userId = cookie.value;
    } else {
      // TODO Cookies can only be set in server action or route handler
      // @see https://nextjs.org/docs/app/api-reference/functions/cookies#cookiessetname-value-options
      // cookies().set("userId", uuid);
      userId = `guest-${randomUUID()}`;
    }
  }

  // @see https://github.com/mozilla/experimenter/tree/main/cirrus
  const serverUrl = process.env.NIMBUS_SIDECAR_URL ?? process.env.SERVER_URL;
  if (!serverUrl) {
    throw new Error("env vars NIMBUS_SERVER_URL and SERVER_URL not set");
  }

  try {
    //@ts-ignore TODO this tells us which features to enable, for initial A/A testing this is unused.
    const features = await fetch(`${serverUrl}/v1/features/`, {
      method: "POST",
      body: JSON.stringify({ client_id: userId }),
    });
  } catch (ex) {
    console.error(`Could not connect to Cirrus on ${serverUrl}`, ex);
    captureException(ex);
  }

  return (
    <>
      <PageLoadEvent userId={userId} />
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

export default GuestLayout;
