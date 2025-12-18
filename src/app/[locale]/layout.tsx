/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";
import { getL10n, getL10nBundles } from "@/app/functions/l10n/serverComponents";
import { SessionProvider } from "@/contextProviders/session";
import { getServerSession } from "@/app/functions/server/getServerSession";
import { metropolis } from "@/app/fonts/Metropolis/metropolis";
import { CONST_GA4_MEASUREMENT_ID } from "@/constants";
import { headers } from "next/headers";
import { GoogleAnalyticsWorkaround } from "@/app/components/client/GoogleAnalyticsWorkaround";
import StripeScript from "@/app/components/client/StripeScript";
import { GleanScript } from "@/app/components/client/GleanScript";
import { getExperimentationIdFromUserSession } from "@/app/functions/server/getExperimentationId";
import { getExperiments } from "@/app/functions/server/getExperiments";
import { getCountryCode } from "@/app/functions/server/getCountryCode";
import { ExperimentsProvider } from "@/contextProviders/experiments";
import * as Sentry from "@sentry/nextjs";
import { config } from "@/config";
import { L10nProvider } from "@/contextProviders/localization";
import { ReactAriaI18nProvider } from "@/contextProviders/react-aria";
import { CountryCodeProvider } from "@/contextProviders/country-code";
import { CookiesProvider } from "@/contextProviders/cookies";
import { PromptNoneAuth } from "@/app/components/client/PromptNoneAuth";
import { PageLoadEvent } from "@/app/components/client/PageLoadEvent";
import { getLangString } from "@/app/functions/server/getLangString";
import { generateStaticLocaleParam } from "@/app/functions/server/generateStaticLocaleParam";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export async function generateMetadata(
  props: LayoutProps<"/[locale]">,
): Promise<Metadata> {
  const l10n = getL10n(getLangString((await props.params).locale));
  return {
    title: l10n.getString("brand-mozilla-monitor"),
    description: l10n.getString("meta-desc-2"),
    metadataBase: new URL(config.serverUrl),
    twitter: {
      card: "summary_large_image",
      title: l10n.getString("brand-mozilla-monitor"),
      description: l10n.getString("meta-desc-2"),
      images: ["/images/og-image.webp"],
    },
    openGraph: {
      title: l10n.getString("brand-mozilla-monitor"),
      description: l10n.getString("meta-desc-2"),
      siteName: l10n.getString("brand-mozilla-monitor"),
      type: "website",
      url: config.serverUrl,
      images: ["/images/og-image.webp"],
    },
  };
}

export async function generateStaticParams() {
  return await generateStaticLocaleParam();
}

export default async function RootLayout({
  children,
  params,
}: LayoutProps<"/[locale]">) {
  const nonce = (await headers()).get("x-nonce") ?? "";
  const session = await getServerSession();
  const locale = (await params).locale;
  const l10nBundles = getL10nBundles(getLangString(locale));
  const headersList = await headers();
  const countryCode = getCountryCode(headersList);

  const experimentationId = await getExperimentationIdFromUserSession(
    session?.user ?? null,
  );
  const experimentData = await getExperiments({
    experimentationId,
    countryCode,
    locale: locale,
  });

  const enrollmentWithConflictingUserId = (
    experimentData.Enrollments ?? []
  ).find((enrollment) => enrollment.nimbus_user_id !== experimentationId);
  if (typeof enrollmentWithConflictingUserId !== "undefined") {
    Sentry.captureMessage(
      `Nimbus user ID from Cirrus: [${enrollmentWithConflictingUserId.nimbus_user_id}] did not match experimentationId: [${experimentationId}]`,
    );
  }

  return (
    <html lang={locale}>
      <body
        className={`${inter.className} ${inter.variable} ${metropolis.variable}`}
        // DO NOT ADD SECRETS HERE: The following data attributes expose
        // variables that are being used in the public analytics scripts
        data-ga4-measurement-id={CONST_GA4_MEASUREMENT_ID}
        data-node-env={config.nodeEnv}
      >
        <ExperimentsProvider
          experimentData={experimentData}
          experimentationId={experimentationId ?? ""}
        >
          <SessionProvider session={session}>
            <L10nProvider bundleSources={l10nBundles}>
              <ReactAriaI18nProvider locale={locale}>
                <CountryCodeProvider countryCode={countryCode}>
                  <CookiesProvider>
                    {!session && <PromptNoneAuth />}
                    {children}
                    <PageLoadEvent />
                  </CookiesProvider>
                </CountryCodeProvider>
              </ReactAriaI18nProvider>
            </L10nProvider>
          </SessionProvider>
        </ExperimentsProvider>
      </body>
      <StripeScript />
      <GleanScript
        channel={config.appEnv}
        experimentationId={experimentationId ?? ""}
      />
      {(await headers()).get("DNT") !== "1" && (
        <GoogleAnalyticsWorkaround
          gaId={CONST_GA4_MEASUREMENT_ID}
          nonce={nonce}
          debugMode={
            process.env.NEXT_PUBLIC_GA4_DEBUG_MODE === "true" &&
            config.nodeEnv !== "test"
          }
        />
      )}
    </html>
  );
}
