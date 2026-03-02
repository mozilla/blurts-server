/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { ReactNode } from "react";
import { Inter } from "next/font/google";
import "@/app/globals.css";
import { headers } from "next/headers";
import {
  getAcceptLangHeaderInServerComponents,
  getL10nBundles,
} from "@/app/functions/l10n/serverComponents";
import { getLocale } from "@/app/functions/universal/getLocale";
import { L10nProvider } from "@/contextProviders/localization";
import { ReactAriaI18nProvider } from "@/contextProviders/react-aria";
import { SessionProvider } from "@/contextProviders/session";
import { getServerSession } from "@/app/functions/server/getServerSession";
import { metropolis } from "@/app/fonts/Metropolis/metropolis";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export default async function UnsubscribeEmailLayout({
  children,
}: {
  children: ReactNode;
}) {
  const session = await getServerSession();
  const acceptLang = await getAcceptLangHeaderInServerComponents();
  const l10nBundles = getL10nBundles(acceptLang);
  const locale = getLocale(l10nBundles);
  const nonce = (await headers()).get("x-nonce") ?? "";

  return (
    <html lang={locale}>
      <body
        className={`${inter.className} ${inter.variable} ${metropolis.variable}`}
        nonce={nonce}
      >
        <SessionProvider session={session}>
          <L10nProvider bundleSources={l10nBundles}>
            <ReactAriaI18nProvider locale={locale}>
              {children}
            </ReactAriaI18nProvider>
          </L10nProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
