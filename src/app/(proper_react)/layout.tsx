/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { ReactNode } from "react";
import Image from "next/image";
import { getServerSession } from "next-auth";
import styles from "./layout.module.scss";
import mozillaLogo from "./images/mozilla-logo.svg";
import { getL10n, getL10nBundles } from "../functions/server/l10n";
import { L10nProvider } from "../../contextProviders/localization";
import { ControlsWrapper } from "./components/ControlsWrapper";
import { authOptions } from "../api/auth/[...nextauth]/route";

export default async function Layout({ children }: { children: ReactNode }) {
  const l10nBundles = getL10nBundles();
  const l10n = getL10n(l10nBundles);
  const session = await getServerSession(authOptions);

  return (
    <L10nProvider bundleSources={l10nBundles}>
      <ControlsWrapper session={session}>
        <div className={styles.page}>{children}</div>
        <footer className={styles.footer}>
          <a href="https://www.mozilla.org" target="_blank">
            <Image
              src={mozillaLogo}
              width={100}
              alt={l10n.getString("mozilla")}
            />
          </a>
        </footer>
      </ControlsWrapper>
    </L10nProvider>
  );
}
