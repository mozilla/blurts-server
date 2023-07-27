/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { BreachDataTypes } from "../../../utils/breachResolution";
import type { UserBreaches } from "./getUserBreaches";
import { ScanResult, RemovalStatusMap } from "./onerep";

type Exposures = {
  // shared
  emailAddresses: number;
  phoneNumbers: number;

  // data brokers
  addresses: number;
  familyMembers: number;
  fullNames: number;

  // data breaches
  socialSecurityNumbers: number;
  ipAddresses: number;
  passwords: number;
  creditCardNumbers: number;
  pinNumbers: number;
  securityQuestions: number;
};

type SanitizedExposures = Array<Record<string, number>>;
export interface DashboardSummary {
  dataBreachTotalNum: number;
  dataBreachFixedNum: number;
  dataBrokerTotalNum: number;
  dataBrokerFixedNum: number;
  dataBrokerInProgressNum: number;
  totalExposures: number;
  allExposures: Exposures;
  sanitizedExposures: SanitizedExposures;
  fixedExposures: Exposures;
  fixedSanitizedExposures: SanitizedExposures;
}

const exposureKeyMap: Record<string, string> = {
  emailAddresses: "email-addresses",
  phoneNumbers: "phone-numbers",

  // data brokers
  addresses: "physical-addresses",
  familyMembers: "family-members-names",
  fullNames: "full-names",

  // data breaches
  socialSecurityNumbers: "social-security-numbers",
  ipAddresses: "ip-addresses",
  passwords: "passwords",
  creditCardNumbers: "credit-cards",
  pinNumbers: "pins",
  securityQuestions: "security-questions-and-answers",
};

export function dashboardSummary(
  scannedResults: ScanResult[],
  { breachesData }: UserBreaches
): DashboardSummary {
  const summary: DashboardSummary = {
    dataBreachTotalNum: 0,
    dataBreachFixedNum: 0,
    dataBrokerTotalNum: scannedResults.length,
    dataBrokerFixedNum: 0,
    dataBrokerInProgressNum: 0,
    totalExposures: 0,
    allExposures: {
      emailAddresses: 0,
      phoneNumbers: 0,
      addresses: 0,
      familyMembers: 0,
      fullNames: 0,

      // data breaches
      socialSecurityNumbers: 0,
      ipAddresses: 0,
      passwords: 0,
      creditCardNumbers: 0,
      pinNumbers: 0,
      securityQuestions: 0,
    },
    sanitizedExposures: [],
    fixedExposures: {
      emailAddresses: 0,
      phoneNumbers: 0,
      addresses: 0,
      familyMembers: 0,
      fullNames: 0,

      // data breaches
      socialSecurityNumbers: 0,
      ipAddresses: 0,
      passwords: 0,
      creditCardNumbers: 0,
      pinNumbers: 0,
      securityQuestions: 0,
    },
    fixedSanitizedExposures: [],
  };

  // calculate broker summary from scanned results
  if (scannedResults) {
    scannedResults.forEach((r) => {
      // check removal status
      const isFixed = r.status === RemovalStatusMap.Removed;
      const isInProgress =
        r.status === RemovalStatusMap.OptOutInProgress ||
        r.status === RemovalStatusMap.WaitingForVerification;
      if (isInProgress) {
        summary.dataBrokerInProgressNum++;
      } else if (isFixed) {
        summary.dataBrokerFixedNum++;
      }
      // total exposure: add email, phones, addresses, relatives, full name (1)
      summary.totalExposures +=
        r.emails.length +
        r.phones.length +
        r.addresses.length +
        r.relatives.length +
        1;

      // for all exposures: email, phones, addresses, relatives, full name (1)
      summary.allExposures.emailAddresses += r.emails.length;
      summary.allExposures.phoneNumbers += r.phones.length;
      summary.allExposures.addresses += r.addresses.length;
      summary.allExposures.familyMembers += r.relatives.length;
      summary.allExposures.fullNames++;

      // for fixed exposures: email, phones, addresses, relatives, full name (1)
      if (isFixed) {
        summary.fixedExposures.emailAddresses += r.emails.length;
        summary.fixedExposures.phoneNumbers += r.phones.length;
        summary.fixedExposures.addresses += r.addresses.length;
        summary.fixedExposures.familyMembers += r.relatives.length;
        summary.fixedExposures.fullNames++;
      }
    });
  }

  const uniqueBreaches = new Set();

  // calculate breaches summary from breaches data
  // TODO: Modify after MNTOR-1947: Refactor user breaches object
  if (breachesData.verifiedEmails) {
    for (const emailBreaches of breachesData.verifiedEmails) {
      const breaches = emailBreaches.breaches;
      breaches.forEach((b) => {
        uniqueBreaches.add(b.Name);
        const dataClasses = b.DataClasses ?? [];

        // count emails
        if (dataClasses.includes(BreachDataTypes.Email)) {
          summary.totalExposures++;
          summary.allExposures.emailAddresses++;
          if (b.IsResolved) summary.fixedExposures.emailAddresses++;
        }

        // count phone numbers
        if (dataClasses.includes(BreachDataTypes.Phone)) {
          summary.totalExposures++;
          summary.allExposures.phoneNumbers++;
          if (b.IsResolved) summary.fixedExposures.phoneNumbers++;
        }

        // count password
        if (dataClasses.includes(BreachDataTypes.Passwords)) {
          summary.totalExposures++;
          summary.allExposures.passwords++;
          if (b.IsResolved) summary.fixedExposures.passwords++;
        }

        // count ssn
        if (dataClasses.includes(BreachDataTypes.SSN)) {
          summary.totalExposures++;
          summary.allExposures.socialSecurityNumbers++;
          if (b.IsResolved) summary.fixedExposures.socialSecurityNumbers++;
        }

        // count IP
        if (dataClasses.includes(BreachDataTypes.IP)) {
          summary.totalExposures++;
          summary.allExposures.ipAddresses++;
          if (b.IsResolved) summary.fixedExposures.ipAddresses++;
        }

        // count credit card
        if (dataClasses.includes(BreachDataTypes.CreditCard)) {
          summary.totalExposures++;
          summary.allExposures.creditCardNumbers++;
          if (b.IsResolved) summary.fixedExposures.creditCardNumbers++;
        }

        // count pin numbers
        if (dataClasses.includes(BreachDataTypes.PIN)) {
          summary.totalExposures++;
          summary.allExposures.pinNumbers++;
          if (b.IsResolved) summary.fixedExposures.pinNumbers++;
        }

        // count security questions
        if (dataClasses.includes(BreachDataTypes.SecurityQuestions)) {
          summary.totalExposures++;
          summary.allExposures.securityQuestions++;
          if (b.IsResolved) summary.fixedExposures.securityQuestions++;
        }
      });
    }
  }

  // count unique breaches
  summary.dataBreachTotalNum = uniqueBreaches.size;

  return sanitizeExposures(summary, summary.dataBrokerTotalNum === 0);
}

function sanitizeExposures(
  summary: DashboardSummary,
  breachesOnly = false
): DashboardSummary {
  let numOfTopExposures = 4; // when we have both exposure types
  if (breachesOnly) {
    numOfTopExposures = 2; // when we have breaches only
  }
  const { allExposures } = summary;
  const sanitizedExposures = Object.entries(allExposures)
    .sort((a, b) => b[1] - a[1])
    .map((e) => {
      const key = exposureKeyMap[e[0]];
      return { [key]: e[1] };
    })
    .splice(0, numOfTopExposures);
  const other = sanitizedExposures.reduce(
    (total, cur) => total - (Object.values(cur).pop() || 0),
    summary.totalExposures
  );
  sanitizedExposures.push({ "other-data-class": other });

  summary.sanitizedExposures = sanitizedExposures;
  console.debug({ sanitizedExposures });
  return summary;
}
