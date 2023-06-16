/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import Image from "next/image";
import Script from "next/script";
import { getServerSession } from "next-auth";
import { CircleChartProps, UserBreaches } from "./breaches.d";

import AppConstants from "../../../../../appConstants.js";
import { getL10n } from "../../../../functions/server/l10n";
import { getUserBreaches } from "../../../../functions/server/getUserBreaches";
import { authOptions } from "../../../../api/auth/[...nextauth]/route";

import "../../../../../client/css/partials/breaches.css";
import ImageIconEmail from "../../../../../client/images/icon-email.svg";

import { BreachesTable } from "../../../components/server/BreachesTable";
import { getComponentAsString } from "../../../../functions/getComponentAsString";

export async function generateMetadata() {
  const l10n = getL10n();
  return {
    title: l10n.getString("breach-meta-title"),
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

function createEmailOptions({ breachesData, emailSelectIndex }: UserBreaches) {
  const emails = breachesData.verifiedEmails.map((obj) => obj.email);
  const optionElements = emails.map(
    (email, index) =>
      `<option ${
        emailSelectIndex === index ? "selected" : ""
      }>${email}</option>`
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
  const session = await getServerSession(authOptions);
  const l10n = getL10n();

  const userBreachesData: UserBreaches = await getUserBreaches({
    // `(authenticated)/layout.tsx` ensures that `session` is not undefined,
    // so the type assertion should be safe:
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    user: session!.user as any,
  });

  return (
    <>
      {/* eslint-disable @next/next/no-sync-scripts */}
      <script
        type="module"
        src="/nextjs_migration/client/js/customSelect.js"
        rel="preload"
      />
      <script
        type="module"
        src="/nextjs_migration/client/js/circleChart.js"
        rel="preload"
      />
      <script
        type="module"
        src="/nextjs_migration/client/js/breaches.js"
        rel="preload"
      />
      {/* eslint-enable @next/next/no-sync-scripts */}
      <Script type="module" src="/nextjs_migration/client/js/dialog.js" />

      <main data-partial="breaches">
        <section>
          {(process.env.PREMIUM_ENABLED === "true" && !session?.user.fxa?.subscriptions?.includes("monitor")) ?
            <a className="button primary" href={process.env.SUBSCRIBE_PREMIUM_URL}>Subscribe to Premium</a>
            : ''}
        </section>
        <section>
          <header className="breaches-header">
            <h1
              suppressHydrationWarning
              dangerouslySetInnerHTML={{
                __html: l10n.getString("breach-heading-email", {
                  "email-select": `<custom-select name="email-account">${createEmailOptions(
                    userBreachesData
                  )}</custom-select>`,
                }),
              }}
            />

            <circle-chart
              suppressHydrationWarning
              class="breach-chart"
              title={l10n.getString("breach-chart-title")}
              data-txt-other={l10n.getString("other-data-class")}
              data-txt-none={l10n.getString("none-data-class")}
            ></circle-chart>

            <figure
              className="email-stats"
              data-count={userBreachesData.emailTotalCount}
              data-total={AppConstants.MAX_NUM_ADDRESSES}
            >
              <Image src={ImageIconEmail} alt="" width={55} height={30} />
              <figcaption>
                <strong>
                  {l10n.getString("emails-monitored", {
                    count: userBreachesData.emailVerifiedCount,
                    total: AppConstants.MAX_NUM_ADDRESSES,
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
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: await getComponentAsString({
              component: <BreachesTable userBreaches={userBreachesData} />
            })
          }}
        />
      </main>
    </>
  );
}
