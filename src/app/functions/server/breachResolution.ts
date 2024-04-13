/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { getL10n } from "./l10n";
import AppConstants from "../../../appConstants.js";
import { Breach, BreachDataTypes } from "../universal/breach";

/**
 * TODO: Map from google doc: https://docs.google.com/document/d/1KoItFsTYVIBInIG2YmA7wSxkKS4vti_X0A0td_yaHVM/edit#
 * Hardcoded map of breach resolution data types
 *
 * @type { Record<keyof BreachDataTypes, { priority: number, header: string, body?: string, applicableCountryCodes?: string[] }> }
 */
const breachResolutionDataTypes = {
  [BreachDataTypes.Passwords]: {
    priority: 1,
    header: "breach-checklist-pw-header-text",
    body: "breach-checklist-pw-body-text",
  },
  [BreachDataTypes.Email]: {
    priority: 2,
    header: "breach-checklist-email-header-2",
    body: "breach-checklist-email-body",
  },
  [BreachDataTypes.SSN]: {
    priority: 3,
    header: "breach-checklist-ssn-header",
    body: "breach-checklist-ssn-body-2",
    // The resolution involves American companies, and thus does not apply in other countries:
    applicableCountryCodes: ["us"],
  },
  [BreachDataTypes.CreditCard]: {
    priority: 4,
    header: "breach-checklist-cc-header",
    body: "breach-checklist-cc-body",
  },
  [BreachDataTypes.BankAccount]: {
    priority: 5,
    header: "breach-checklist-bank-header",
    body: "breach-checklist-bank-body",
  },
  [BreachDataTypes.PIN]: {
    priority: 6,
    header: "breach-checklist-pin-header",
    body: "breach-checklist-pin-body",
  },
  [BreachDataTypes.IP]: {
    priority: 7,
    header: "breach-checklist-ip-header-2",
    body: "breach-checklist-ip-body",
  },
  [BreachDataTypes.Address]: {
    priority: 8,
    header: "breach-checklist-address-header",
    body: "breach-checklist-address-body",
  },
  [BreachDataTypes.DoB]: {
    priority: 9,
    header: "breach-checklist-dob-header",
    body: "breach-checklist-dob-body",
  },
  [BreachDataTypes.Phone]: {
    priority: 10,
    header: "breach-checklist-phone-header-2",
  },
  [BreachDataTypes.SecurityQuestions]: {
    priority: 11,
    header: "breach-checklist-sq-header-text",
    body: "breach-checklist-sq-body-text",
  },
  [BreachDataTypes.HistoricalPasswords]: {
    priority: 12,
    header: "breach-checklist-hp-header",
    body: "breach-checklist-hp-body-2",
  },
  [BreachDataTypes.General]: {
    priority: 13,
    header: "breach-checklist-general-header",
  },
};

/**
 * Append a field "breachChecklist" to the breaches array of each verified emails
 * The checklist serves the UI with relevant recommendations based on the array of datatypes leaked during a breach.
 *
 * @param userBreachData contains monitored verified emails array. Each email may contain a breaches array
 * @param options
 * @returns {*} void
 */
// Old untyped code, adding type defitions now isn't worth the effort:
/* eslint-disable @typescript-eslint/no-explicit-any */
function appendBreachResolutionChecklist(
  userBreachData: any,
  options: Partial<{ countryCode: string }> = {},
) {
  const l10n = getL10n();
  const { verifiedEmails } = userBreachData;

  for (const { breaches } of verifiedEmails) {
    breaches.forEach((b: Breach) => {
      const dataClasses = b.DataClasses;
      const blockList = (AppConstants.HIBP_BREACH_DOMAIN_BLOCKLIST ?? "").split(
        ",",
      );
      const showLink = b.Domain && !blockList.includes(b.Domain);

      const args = {
        companyName: b.Name,
        breachedCompanyLink: showLink ? `https://${b.Domain}` : "",
        firefoxRelayLink: `<a href="https://relay.firefox.com/?utm_medium=mozilla-websites&utm_source=monitor&utm_campaign=&utm_content=breach-resolution" target="_blank">${l10n.getString(
          "breach-checklist-link-firefox-relay",
        )}</a>`,
        passwordManagerLink: `<a href="https://www.mozilla.org/firefox/features/password-manager/?utm_medium=mozilla-websites&utm_source=monitor&utm_campaign=&utm_content=breach-resolution" target="_blank">${l10n.getString(
          "breach-checklist-link-password-manager",
        )}</a>`,
        mozillaVpnLink: `<a href="https://www.mozilla.org/products/vpn/?utm_medium=mozilla-websites&utm_source=monitor&utm_campaign=&utm_content=breach-resolution" target="_blank">${l10n.getString(
          "breach-checklist-link-mozilla-vpn",
        )}</a>`,
        equifaxLink:
          '<a href="https://www.equifax.com/personal/credit-report-services/credit-freeze/" target="_blank">Equifax</a>',
        experianLink:
          '<a href="https://www.experian.com/freeze/center.html" target="_blank">Experian</a>',
        transUnionLink:
          '<a href="https://www.transunion.com/credit-freeze" target="_blank">TransUnion</a>',
      };
      (b as any).breachChecklist = getResolutionRecsPerBreach(
        dataClasses,
        args,
        options,
      );
    });
  }
}
/* eslint-enable @typescript-eslint/no-explicit-any */

/**
 * Get a subset of the breach resolution data types map
 * based on the array of datatypes leaked during a breach
 *
 * @param dataTypes datatypes leaked during the breach
 * @param args contains necessary variables for the fluent file
 * @param args.companyName
 * @param args.breachedCompanyLink
 * @param {{ countryCode: string }} options
 * @returns map of relevant breach resolution recommendations
 */
// Old untyped code, adding type defitions now isn't worth the effort:
/* eslint-disable @typescript-eslint/no-explicit-any */
function getResolutionRecsPerBreach(
  dataTypes: any[],
  args: { companyName: string; breachedCompanyLink: string },
  options: Partial<{ countryCode: string }> = {},
) {
  const filteredBreachRecs: Record<
    string,
    ReturnType<typeof getRecommendationFromResolution>
  > = {};

  // filter breachResolutionDataTypes based on relevant data types passed in
  for (const resolution of Object.entries(breachResolutionDataTypes)) {
    const [key, value]: [any, any] = resolution;
    if (
      dataTypes.includes(key) &&
      // Hide resolutions that apply to other countries than the user's:
      (!options.countryCode ||
        !Array.isArray(value.applicableCountryCodes) ||
        value.applicableCountryCodes.includes(
          options.countryCode.toLowerCase(),
        ))
    ) {
      filteredBreachRecs[key] = getRecommendationFromResolution(
        resolution,
        args,
      );
    }
  }

  // If we did not have any recommendations, add a generic recommendation:
  if (Object.keys(filteredBreachRecs).length === 0) {
    const resolutionTypeGeneral = BreachDataTypes.General;
    filteredBreachRecs[resolutionTypeGeneral] = getRecommendationFromResolution(
      [resolutionTypeGeneral, breachResolutionDataTypes[resolutionTypeGeneral]],
      args,
    );
  }

  // loop through the breach recs
  return filteredBreachRecs;
}
/* eslint-enable @typescript-eslint/no-explicit-any */

/**
 * Get the fluent string for the body
 *
 * @param body for the fluent body string
 * @param args
 * @returns body string
 */
// Old untyped code, adding type defitions now isn't worth the effort:
/* eslint-disable-next-line @typescript-eslint/no-explicit-any */
function getBodyMessage(body: string, args: any): string {
  const l10n = getL10n();
  const { stringArgs } = args;
  const companyLink = stringArgs.breachedCompanyLink as string;

  return l10n
    .getString(body, stringArgs)
    .replace(
      "<breached-company-link>",
      companyLink ? `<a href="${companyLink}" target="_blank">` : "",
    )
    .replace("</breached-company-link>", companyLink ? "</a>" : "");
}

// find fluent text based on fluent ids
// Old untyped code, adding type defitions now isn't worth the effort:
/* eslint-disable-next-line @typescript-eslint/no-explicit-any */
function getRecommendationFromResolution(resolution: any, args: any) {
  const l10n = getL10n();
  const [resolutionType, resolutionContent] = resolution;
  let { header, body } = resolutionContent;
  const { priority } = resolutionContent;

  header = header ? l10n.getString(header, args) : "";
  body = body ? getBodyMessage(body, { resolutionType, stringArgs: args }) : "";
  return { header, body, priority };
}

export { BreachDataTypes, appendBreachResolutionChecklist };
