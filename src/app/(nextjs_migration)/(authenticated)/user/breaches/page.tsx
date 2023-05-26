/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import Image from "next/image";
import Script from "next/script";
import AppConstants from "../../../../../appConstants.js";
import { getL10n } from "../../../../functions/server/l10n";
// import { getMessage, getLocale } from "../../utils/fluent.js";
// import { getBreachLogo } from "../../utils/breachLogo.js";

import "../../../../../client/css/partials/breaches.css";
import ImageIconEmail from "../../../../../client/images/icon-email.svg";
import ImageBreachesNone from "../../../../../client/images/breaches-none.svg";
import ImageBreachesAllResolved from "../../../../../client/images/breaches-all-resolved.svg";

const data = {
  breachesData: [],
  breachLogos: [],
  csrfToken: "test123",
  emailCount: 10,
  emailTotalCount: 3,
  emailVerifiedCount: 1,
  selectedEmailIndex: 0,
  verifiedEmails: 2,
};

export default async function UserBreaches() {
  const l10n = getL10n();

  return (
    <>
      <Script src="/nextjs_migration/client/js/breaches.js" />
      <section>
        <header className="breaches-header">
          <h1>
            {l10n.getString("breach-heading-email", {
              "email-select": `<custom-select name='email-account'>{createEmailOptions(
                data.breachesData,
                data.selectedEmailIndex
              )}</custom-select>`,
            })}
          </h1>
          {/* <circle-chart
            className='breach-chart'
            title='{l10n.getString("breach-chart-title")}'
            data-txt-other='{l10n.getString("other-data-class")}'
            data-txt-none='{l10n.getString("none-data-class")}'>
          </circle-chart> */}

          <figure
            className="email-stats"
            data-count={data.emailTotalCount}
            data-total={AppConstants.MAX_NUM_ADDRESSES}
          >
            <Image src={ImageIconEmail} alt="" width={55} height={30} />
            <figcaption>
              <strong>
                {l10n.getString("emails-monitored", {
                  count: data.emailVerifiedCount,
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
          defaultChecked
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

      <section className="breaches-table" data-token={data.csrfToken}>
        <header>
          <span>{l10n.getString("column-company")}</span>
          <span>{l10n.getString("column-breached-data")}</span>
          {/* The active/resolved badge does not have a column header, but by
          including an empty <span>, we can re-use the `nth-child`-based
          selectors for the content columns. */}
          <span></span>
          <span>{l10n.getString("column-detected")}</span>
        </header>
        {/* {createBreachRows(data.breachesData, data.breachLogos)} */}
        <template
          className="no-breaches"
          dangerouslySetInnerHTML={{
            __html: `
              <div className="zero-state no-breaches-message">
                <Image src="${ImageBreachesNone}" alt="" width="136" height="102" />
                <h2>${l10n.getString("breaches-none-headline")}</h2>
                <p>
                  ${l10n.getString("breaches-none-copy", {
                    email: '<b class="current-email"></b>',
                  })}
                </p>
                <p className="add-email-cta">
                  <span>${l10n.getString("breaches-none-cta-blurb")}</span>
                  <button
                    className="primary"
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
              <div className="zero-state all-breaches-resolved-message">
                <Image
                  src="${ImageBreachesAllResolved}"
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
                <p className="add-email-cta">
                  <span>${l10n.getString(
                    "breaches-all-resolved-cta-blurb"
                  )}</span>
                  <button
                    className="primary"
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
}

// function createEmailOptions(data, selectedEmailIndex) {
//   const emails = data.verifiedEmails.map((obj) => obj.email);
//   const optionElements = emails.map(
//     (email, index) =>
//       `<option {
//         selectedEmailIndex === index ? "selected" : ""
//       }>{email}</option>`
//   );

//   return optionElements.join("");
// }

// function createBreachRows(data, logos) {
//   const locale = getLocale();
//   const shortDate = new Intl.DateTimeFormat(locale, {
//     year: "numeric",
//     month: "2-digit",
//     day: "2-digit",
//     timeZone: "UTC",
//   });
//   const shortList = new Intl.ListFormat(locale, { style: "narrow" });
//   const longDate = new Intl.DateTimeFormat(locale, {
//     dateStyle: "long",
//     timeZone: "UTC",
//   });
//   const longList = new Intl.ListFormat(locale, { style: "long" });
//   const breachRowsHTML = data.verifiedEmails.flatMap((account) => {
//     return account.breaches.map((breach) => {
//       const isHidden = !account.primary || breach.IsResolved; // initial breach hidden state
//       const status = breach.IsResolved ? "resolved" : "unresolved";
//       const breachDate = Date.parse(breach.BreachDate);
//       const addedDate = Date.parse(breach.AddedDate);
//       const dataClassesTranslated = breach.DataClasses.map((item) =>
//         getMessage(item)
//       );
//       const description = getMessage("breach-description", {
//         companyName: breach.Title,
//         breachDate: longDate.format(breachDate),
//         addedDate: longDate.format(addedDate),
//         dataClasses: longList.format(dataClassesTranslated),
//       });

//       const logo = getBreachLogo(breach, logos);

//       return `
//        <details className='breach-row' data-status={status} data-email={
//         account.email
//       } data-classes='{dataClassesTranslated}' {isHidden ? "hidden" : ""}>
//          <summary>
//            <span className='breach-company'>{logo} {breach.Title}</span>
//            <span>{shortList.format(dataClassesTranslated)}</span>
//            <span>
//              <span className='resolution-badge is-resolved'>{l10n.getString(
//                "column-status-badge-resolved"
//              )}</span>
//              <span className='resolution-badge is-active'>{l10n.getString(
//                "column-status-badge-active"
//              )}</span>
//            </span>
//            <span>{shortDate.format(addedDate)}</span>
//          </summary>
//          <article>
//            <p>{description}</p>
//            <p><strong>{l10n.getString("breaches-resolve-heading")}</strong></p>
//            <ol className='resolve-list'>{createResolveSteps(breach)}</ol>
//          </article>
//        </details>
//        `;
//     });
//   });

//   return breachRowsHTML.join("");
// }

// function createResolveSteps(breach) {
//   const checkedArr = breach.ResolutionsChecked || [];
//   const resolveStepsHTML = Object.entries(breach.breachChecklist).map(
//     ([key, value]) => `
//    <li className='resolve-list-item'>
//      <input name='{breach.Id}' value='{key}' type='checkbox' {
//       checkedArr.includes(key) ? "checked" : ""
//     }>
//      <p>{value.header}<br><i>{value.body}</i></p>
//    </li>
//    `
//   );

//   return resolveStepsHTML.join("");
// }
