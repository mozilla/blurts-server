/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { BreachDataTypes } from "../../../utils/breachResolution";
import type { UserBreaches } from "./getUserBreaches";
import type { ScanResult } from "./onerep";
export interface DashboardSummary {
  dataBreachTotalNum: number;
  dataBrokerTotalNum: number;
  totalExposures: number;
  allExposures: {
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
  sanitizedExposures: Array<Record<string, number>>;
}

export function dashboardSummary(
  scannedResults: ScanResult[],
  { breachesData }: UserBreaches
): DashboardSummary {
  const summary: DashboardSummary = {
    dataBreachTotalNum: 0,
    dataBrokerTotalNum: 0,
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
  };

  // calculate broker summary from scanned results
  if (scannedResults) {
    scannedResults.forEach((r) => {
      // count email
      summary.totalExposures += r.emails.length;
      summary.allExposures.emailAddresses += r.emails.length;

      // count phones
      summary.totalExposures += r.phones.length;
      summary.allExposures.phoneNumbers += r.phones.length;

      // count physical addresses
      summary.totalExposures += r.addresses.length;
      summary.allExposures.addresses += r.addresses.length;

      // count relatives
      summary.totalExposures += r.relatives.length;
      summary.allExposures.familyMembers += r.relatives.length;

      // count full name
      summary.totalExposures++;
      summary.allExposures.fullNames++;
    });
  }

  // calculate breaches summary from breaches data
  // TODO: Modify after MNTOR-1947: Refactor user breaches object
  if (breachesData.verifiedEmails) {
    for (const emailBreaches of breachesData.verifiedEmails) {
      const breaches = emailBreaches.breaches;
      breaches.forEach((b) => {
        const dataClasses = b.DataClasses;

        // count password
        if (dataClasses?.includes(BreachDataTypes.Passwords)) {
          summary.totalExposures++;
          summary.allExposures.passwords++;
        }

        // count ssn
        if (dataClasses?.includes(BreachDataTypes.SSN)) {
          summary.totalExposures++;
          summary.allExposures.socialSecurityNumbers++;
        }

        // count IP
        if (dataClasses?.includes(BreachDataTypes.IP)) {
          summary.totalExposures++;
          summary.allExposures.ipAddresses++;
        }

        // count credit card
        if (dataClasses?.includes(BreachDataTypes.CreditCard)) {
          summary.totalExposures++;
          summary.allExposures.creditCardNumbers++;
        }

        // count pin numbers
        if (dataClasses?.includes(BreachDataTypes.PIN)) {
          summary.totalExposures++;
          summary.allExposures.pinNumbers++;
        }

        // count security questions
        if (dataClasses?.includes(BreachDataTypes.SecurityQuestions)) {
          summary.totalExposures++;
          summary.allExposures.securityQuestions++;
        }
      });
    }
  }

  return sanitizeExposures(summary);
}

function sanitizeExposures(summary: DashboardSummary): DashboardSummary {
  const { allExposures } = summary;
  const sortedExposures = Object.entries(allExposures).sort(
    (a, b) => b[1] - a[1]
  );

  const other =
    summary.totalExposures -
    sortedExposures.slice(0, 4).reduce((acc, cur) => acc + cur[1], 0);

  const sanitizedExposures = sortedExposures
    .map((e) => {
      const key = e[0];
      return { [key]: e[1] };
    })
    .splice(0, 4);
  sanitizedExposures.push({ other });

  summary.sanitizedExposures = sanitizedExposures;
  console.debug({ sanitizedExposures });
  return summary;
}
