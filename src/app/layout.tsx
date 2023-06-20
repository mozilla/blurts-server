/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { ReactNode } from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import { getServerSession } from "next-auth";
import { getLocale } from "./functions/server/l10n";
import { SessionProvider } from "../contextProviders/session";
import { authOptions } from "./api/utils/authOptions";
import { getL10n } from "./functions/server/l10n";
import { metropolis } from "./fonts/Metropolis/metropolis";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export async function generateMetadata() {
  const l10n = getL10n();
  return {
    title: l10n.getString("brand-fx-monitor"),
    description: l10n.getString("meta-desc-2"),
    twitter: {
      card: "summary_large_image",
      title: l10n.getString("brand-fx-monitor"),
      description: l10n.getString("meta-desc-2"),
      images: ["/images/og-image.webp"],
    },
    openGraph: {
      title: l10n.getString("brand-fx-monitor"),
      description: l10n.getString("meta-desc-2"),
      siteName: l10n.getString("brand-fx-monitor"),
      type: "website",
      url: process.env.SERVER_URL,
      images: ["/images/og-image.webp"],
    },
  };
}

export default async function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  const currentLocale = getLocale();
  const session = await getServerSession(authOptions);

  return (
    <html lang={currentLocale}>
      <body
        className={`${inter.className} ${inter.variable} ${metropolis.variable}`}
        // DO NOT ADD SECRETS HERE: The following data attributes expose
        // variables that are being used in the public analytics scripts
        data-ga4-measurement-id={process.env.GA4_MEASUREMENT_ID}
        data-node-env={process.env.NODE_ENV}
      >
        <SessionProvider session={session}>{children}</SessionProvider>
      </body>
    </html>
  );
}
