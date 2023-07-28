/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import type { UserBreaches } from "../../../functions/server/getUserBreaches";
import { getL10n } from "../../../functions/server/l10n";
import { BreachLogo } from "../../../components/server/BreachLogo";
import { getLocale } from "../../../../utils/fluent.js";

import ImageBreachesNone from "../../../../client/images/breaches-none.svg";
import ImageBreachesAllResolved from "../../../../client/images/breaches-all-resolved.svg";
import { HibpLikeDbBreach } from "../../../../utils/hibp";
import { Breach } from "../../(authenticated)/user/breaches/breaches";

function createResolveSteps(breach: any) {
  const checkedArr = breach.ResolutionsChecked || [];
  const resolveStepsHTML = Object.entries(breach.breachChecklist).map(
    ([key, value]: [string, any]) => `
    <li class="resolve-list-item">
      <input name="${breach.Id as string}" value="${key}" type="checkbox" ${
      checkedArr.includes(key) ? "checked" : ""
    }>
      <p>${value.header as string}<br><i>${value.body as string}</i></p>
    </li>
   `
  );

  return resolveStepsHTML.join("");
}

export type Props = {
  userBreaches: UserBreaches;
};

export const BreachesTable = ({ userBreaches }: Props) => {
  const l10n = getL10n();

  function createBreachRows({ breachesData }: UserBreaches) {
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
      return account.breaches.map((breach: HibpLikeDbBreach | Breach) => {
        const isHidden = !account.primary || (breach as Breach).IsResolved; // initial breach hidden state
        const status = (breach as Breach).IsResolved
          ? "resolved"
          : "unresolved";
        const breachDate = Date.parse(breach.BreachDate);
        const addedDate = Date.parse((breach as Breach).AddedDate);
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
                <BreachLogo breach={breach as HibpLikeDbBreach} htmlTags />{" "}
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
      <fieldset className="breaches-filter">
        <input
          id="breaches-unresolved"
          type="radio"
          name="breaches-status"
          value="unresolved"
          autoComplete="off"
        />
        <label htmlFor="breaches-unresolved">
          {/* The DOM for this element is modified by regular JavaScript files
          that predate our migration to Next.js. We don’t use any React-specific
          features here, so hydration errors should not be a problem. */}
          <output suppressHydrationWarning>&nbsp;</output>
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
          {/* The DOM for this element is modified by regular JavaScript files
          that predate our migration to Next.js. We don’t use any React-specific
          features here, so hydration errors should not be a problem. */}
          <output suppressHydrationWarning>&nbsp;</output>
          {l10n.getString("filter-label-resolved")}
        </label>
      </fieldset>
      {/* The DOM for this element is modified by regular JavaScript files
      that predate our migration to Next.js. We don’t use any React-specific
      features here, so hydration errors should not be a problem. */}
      <section suppressHydrationWarning className="breaches-table">
        <header>
          <span>{l10n.getString("column-company")}</span>
          <span>{l10n.getString("column-breached-data")}</span>
          {/* The active/resolved badge does not have a column header, but by
          including an empty <span>, we can re-use the `nth-child`-based
          selectors for the content columns. */}
          <span></span>
          <span>{l10n.getString("column-detected")}</span>
        </header>
        <div>{createBreachRows(userBreaches)}</div>
        <template
          className="no-breaches"
          dangerouslySetInnerHTML={{
            __html: `
              <div class="zero-state no-breaches-message">
                <img src="${
                  ImageBreachesNone.src as string
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
          // The DOM for this element is modified by regular JavaScript
          // files that predate our migration to Next.js. We don’t use any
          // React-specific features here, so hydration errors should
          // not be a problem.
          suppressHydrationWarning
          className="all-breaches-resolved"
          dangerouslySetInnerHTML={{
            __html: `
              <div class="zero-state all-breaches-resolved-message">
                <img
                  src="${ImageBreachesAllResolved.src as string}"
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
    </>
  );
};
