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
import { getLocale } from "../../../../../utils/fluent.js";
import { authOptions } from "../../../../api/auth/[...nextauth]/route";

import "../../../../../client/css/partials/breaches.css";
import ImageIconEmail from "../../../../../client/images/icon-email.svg";
import ImageBreachesNone from "../../../../../client/images/breaches-none.svg";
import ImageBreachesAllResolved from "../../../../../client/images/breaches-all-resolved.svg";
import { BreachLogo } from "../../../../components/server/BreachLogo";

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

function createResolveSteps(breach: any) {
  const checkedArr = breach.ResolutionsChecked || [];
  const resolveStepsHTML = Object.entries(breach.breachChecklist).map(
    ([key, value]: [string, any]) => `
    <li class="resolve-list-item">
      <input name="${breach.Id}" value="${key}" type="checkbox" ${
      checkedArr.includes(key) ? "checked" : ""
    }>
      <p>${value.header}<br><i>${value.body}</i></p>
    </li>
   `
  );

  return resolveStepsHTML.join("");
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

  function createBreachRows({ breachesData, breachLogos }: UserBreaches) {
    const locale = getLocale();
    const shortDate = new Intl.DateTimeFormat(locale, {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      timeZone: "UTC",
    });
    const shortList = new Intl.ListFormat(locale, { style: "narrow" });
    const longDate = new Intl.DateTimeFormat(locale, {
      dateStyle: "long",
      timeZone: "UTC",
    });
    const longList = new Intl.ListFormat(locale, { style: "long" });
    const breachRowsHTML = breachesData.verifiedEmails.flatMap((account) => {
      return account.breaches.map((breach) => {
        const isHidden = !account.primary || breach.IsResolved; // initial breach hidden state
        const status = breach.IsResolved ? "resolved" : "unresolved";
        const breachDate = Date.parse(breach.BreachDate);
        const addedDate = Date.parse(breach.AddedDate);
        const dataClassesTranslated = breach.DataClasses.map((item) =>
          l10n.getString(item)
        );
        const description = l10n.getString("breach-description", {
          companyName: breach.Title,
          breachDate: longDate.format(breachDate),
          addedDate: longDate.format(addedDate),
          dataClasses: longList.format(dataClassesTranslated),
        });

        return (
          <details
            key={breach.Name + account.email}
            className="breach-row"
            data-status={status}
            data-email={account.email}
            data-classes={dataClassesTranslated}
            hidden={isHidden}
          >
            <summary>
              <span className="breach-company">
                <BreachLogo breach={breach} logos={breachLogos} />{" "}
                {breach.Title}
              </span>
              <span>{shortList.format(dataClassesTranslated)}</span>
              <span>
                <span className="resolution-badge is-resolved">
                  {l10n.getString("column-status-badge-resolved")}
                </span>
                <span className="resolution-badge is-active">
                  {l10n.getString("column-status-badge-active")}
                </span>
              </span>
              <span>{shortDate.format(addedDate)}</span>
            </summary>
            <article>
              <p>{description}</p>
              <p>
                <strong>{l10n.getString("breaches-resolve-heading")}</strong>
              </p>
              <ol
                className="resolve-list"
                dangerouslySetInnerHTML={{ __html: createResolveSteps(breach) }}
              />
            </article>
          </details>
        );
      });
    });

    return breachRowsHTML;
  }

  return (
    <>
      <Script type="module" src="/nextjs_migration/client/js/customSelect.js" />
      <Script type="module" src="/nextjs_migration/client/js/circleChart.js" />
      <Script type="module" src="/nextjs_migration/client/js/breaches.js" />
      <Script type="module" src="/nextjs_migration/client/js/dialog.js" />
      <main data-partial="breaches">
        <section>
          {process.env.PREMIUM_ENABLED === "true" &&
          !session?.user.fxa?.subscriptions?.includes("monitor") ? (
            <a
              className="button primary"
              href={process.env.SUBSCRIBE_PREMIUM_URL}
            >
              Subscribe to Premium
            </a>
          ) : (
            ""
          )}
        </section>
        <section>
          <header className="breaches-header">
            <h1
              dangerouslySetInnerHTML={{
                __html: l10n.getString("breach-heading-email", {
                  "email-select": `<custom-select name="email-account">${createEmailOptions(
                    userBreachesData
                  )}</custom-select>`,
                }),
              }}
            />

            <circle-chart
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

        <fieldset className="breaches-filter">
          <input
            id="breaches-unresolved"
            type="radio"
            name="breaches-status"
            value="unresolved"
            autoComplete="off"
          />
          <label htmlFor="breaches-unresolved">
            <output>&nbsp;</output>
            {l10n.getString("filter-label-unresolved")}
          </label>
          <input
            id="breaches-resolved"
            type="radio"
            name="breaches-status"
            value="resolved"
            autoComplete="off"
          />
          <label htmlFor="breaches-resolved">
            <output>&nbsp;</output>
            {l10n.getString("filter-label-resolved")}
          </label>
        </fieldset>

        <section className="breaches-table">
          <header>
            <span>{l10n.getString("column-company")}</span>
            <span>{l10n.getString("column-breached-data")}</span>
            {/* The active/resolved badge does not have a column header, but by
            including an empty <span>, we can re-use the `nth-child`-based
            selectors for the content columns. */}
            <span></span>
            <span>{l10n.getString("column-detected")}</span>
          </header>
          <div>{createBreachRows(userBreachesData)}</div>

          <template
            className="no-breaches"
            dangerouslySetInnerHTML={{
              __html: `
                <div class="zero-state no-breaches-message">
                  <img src="${
                    ImageBreachesNone.src
                  }" alt="" width="136" height="102" />
                  <h2>${l10n.getString("breaches-none-headline")}</h2>
                  <p>
                    ${l10n.getString("breaches-none-copy", {
                      email: '<b class="current-email"></b>',
                    })}
                  </p>
                  <p class="add-email-cta">
                    <span>${l10n.getString("breaches-none-cta-blurb")}</span>
                    <button
                      class="primary"
                      data-cta-id="breaches-none"
                      data-dialog="addEmail"
                    >
                      ${l10n.getString("breaches-none-cta-button")}
                    </button>
                  </p>
                </div>
              `,
            }}
          />
          <template
            className="all-breaches-resolved"
            dangerouslySetInnerHTML={{
              __html: `
                <div class="zero-state all-breaches-resolved-message">
                  <img
                    src="${ImageBreachesAllResolved.src}"
                    alt=""
                    width="136"
                    height="102"
                  />
                  <h2>${l10n.getString("breaches-all-resolved-headline")}</h2>
                  <p>
                    ${l10n.getString("breaches-all-resolved-copy", {
                      email: '<b class="current-email"></b>',
                    })}
                  </p>
                  <p class="add-email-cta">
                    <span>${l10n.getString(
                      "breaches-all-resolved-cta-blurb"
                    )}</span>
                    <button
                      class="primary"
                      data-cta-id="breaches-all-resolved"
                      data-dialog="addEmail"
                    >
                      ${l10n.getString("breaches-all-resolved-cta-button")}
                    </button>
                  </p>
                </div>
              `,
            }}
          />
        </section>
      </main>
    </>
  );
}
