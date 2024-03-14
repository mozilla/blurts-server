/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import Image from "next/image";
import Script from "next/script";
import { headers } from "next/headers";
import { getServerSession } from "../../../../functions/server/getServerSession";
import { CircleChartProps } from "./breaches.d";

import { getL10n } from "../../../../functions/server/l10n";
import {
  getUserBreaches,
  type UserBreaches as UserBreachesType,
} from "../../../../functions/server/getUserBreaches";

import "../../../../../client/css/partials/breaches.css";
import ImageIconEmail from "../../../../../client/images/icon-email.svg";

import { BreachesTable } from "../../../components/server/BreachesTable";
import { getComponentAsString } from "../../../functions/server/getComponentAsString";
import { getCountryCode } from "../../../../functions/server/getCountryCode";
import { getNonce } from "../../../functions/server/getNonce";
import { SignInButton } from "../../../components/client/SignInButton";
import { CONST_MAX_NUM_ADDRESSES } from "../../../../../constants";

export function generateMetadata() {
  const l10n = getL10n();
  return {
    title: l10n.getString("breach-meta-title"),
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
      url: process.env.SERVER_URL,
      images: ["/images/og-image.webp"],
    },
  };
}

function createEmailOptions({
  breachesData,
  emailSelectIndex,
}: UserBreachesType) {
  const emails = breachesData.verifiedEmails.map((obj) => obj.email);
  const optionElements = emails.map(
    (email, index) =>
      `<option ${
        emailSelectIndex === index ? "selected" : ""
      }>${email}</option>`,
  );

  return optionElements.join("");
}

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace JSX {
    interface IntrinsicElements {
      "circle-chart": CircleChartProps;
    }
  }
}

export default async function UserBreaches() {
  const session = await getServerSession();
  if (!session?.user?.subscriber) {
    return <SignInButton autoSignIn />;
  }

  const l10n = getL10n();
  const headerList = headers();

  const userBreachesData: UserBreachesType = await getUserBreaches({
    user: session.user,
    options: {
      countryCode: getCountryCode(headerList),
    },
  });

  return (
    <>
      {/* These scripts predate the use of React and thus shouldn’t wait for
      hydration to adjust the layout. */}
      {/* eslint-disable @next/next/no-sync-scripts */}
      <script
        type="module"
        src="/nextjs_migration/client/js/customSelect.js"
        rel="preload"
        crossOrigin="anonymous"
        nonce={getNonce()}
      />
      <script
        type="module"
        src="/nextjs_migration/client/js/circleChart.js"
        rel="preload"
        crossOrigin="anonymous"
        nonce={getNonce()}
      />
      <script
        type="module"
        src="/nextjs_migration/client/js/breaches.js"
        rel="preload"
        crossOrigin="anonymous"
        nonce={getNonce()}
      />
      {/* eslint-enable @next/next/no-sync-scripts */}
      <Script
        type="module"
        src="/nextjs_migration/client/js/dialog.js"
        nonce={getNonce()}
      />

      <main data-partial="breaches">
        <section>
          <header className="breaches-header">
            <h1
              // The DOM for this element is modified by regular JavaScript
              // files that predate our migration to Next.js. We don’t use any
              // React-specific features here, so hydration errors should
              // not be a problem.
              suppressHydrationWarning
              dangerouslySetInnerHTML={{
                __html: l10n.getString("breach-heading-email", {
                  "email-select": `<custom-select name="email-account">${createEmailOptions(
                    userBreachesData,
                  )}</custom-select>`,
                }),
              }}
            />

            <circle-chart
              // The DOM for this element is modified by regular JavaScript
              // files that predate our migration to Next.js. We don’t use any
              // React-specific features here, so hydration errors should
              // not be a problem.
              suppressHydrationWarning
              class="breach-chart"
              title={l10n.getString("breach-chart-title")}
              data-txt-other={l10n.getString("other-data-class")}
              data-txt-none={l10n.getString("none-data-class")}
            ></circle-chart>

            <figure
              className="email-stats"
              data-count={userBreachesData.emailTotalCount}
              data-total={CONST_MAX_NUM_ADDRESSES}
            >
              <Image src={ImageIconEmail} alt="" width={55} height={30} />
              <figcaption>
                <strong>
                  {l10n.getString("emails-monitored", {
                    count: userBreachesData.emailVerifiedCount,
                    total: CONST_MAX_NUM_ADDRESSES,
                  })}
                </strong>
                <a href="/user/settings">
                  {l10n.getString("manage-emails-link")}
                </a>
              </figcaption>
            </figure>
          </header>
        </section>

        <div
          // The DOM for this element is modified by regular JavaScript
          // files that predate our migration to Next.js. We don’t use any
          // React-specific features here, so hydration errors should
          // not be a problem.
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: await getComponentAsString({
              component: <BreachesTable userBreaches={userBreachesData} />,
            }),
          }}
        />
      </main>
    </>
  );
}
