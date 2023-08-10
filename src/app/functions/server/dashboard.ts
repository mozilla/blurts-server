/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { BreachDataTypes } from "../../../utils/breachResolution";
import { ScanResult } from "./onerep";
import { RemovalStatusMap } from "../universal/scanResult";
import { SubscriberBreach } from "../../../utils/subscriberBreaches";

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
  pins: number;
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
  fullNames: "full-name",

  // data breaches
  socialSecurityNumbers: "social-security-numbers",
  ipAddresses: "ip-addresses",
  passwords: "passwords",
  creditCardNumbers: "credit-cards",
  pins: "pins",
  securityQuestions: "security-questions-and-answers",
};

export function dashboardSummary(
  scannedResults: ScanResult[],
  subscriberBreaches: SubscriberBreach[]
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
      pins: 0,
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
      pins: 0,
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

  // calculate breaches summary from breaches data
  // TODO: Modify after MNTOR-1947: Refactor user breaches object
  subscriberBreaches.forEach((b) => {
    const dataClasses = b.dataClasses ?? [];
    const increment = b.emailsEffected.length;

    // count emails
    if (dataClasses.includes(BreachDataTypes.Email)) {
      summary.totalExposures += increment;
      summary.allExposures.emailAddresses += increment;
      if (b.isResolved) {
        summary.fixedExposures.emailAddresses += increment;
        summary.dataBreachFixedNum += increment;
      }
    }

    // count phone numbers
    if (dataClasses.includes(BreachDataTypes.Phone)) {
      summary.totalExposures += increment;
      summary.allExposures.phoneNumbers += increment;
      if (b.isResolved) {
        summary.fixedExposures.phoneNumbers += increment;
        summary.dataBreachFixedNum += increment;
      }
    }

    // count password
    if (dataClasses.includes(BreachDataTypes.Passwords)) {
      summary.totalExposures += increment;
      summary.allExposures.passwords += increment;
      if (b.isResolved) {
        summary.fixedExposures.passwords += increment;
        summary.dataBreachFixedNum += increment;
      }
    }

    // count ssn
    if (dataClasses.includes(BreachDataTypes.SSN)) {
      summary.totalExposures += increment;
      summary.allExposures.socialSecurityNumbers += increment;
      if (b.isResolved) {
        summary.fixedExposures.socialSecurityNumbers += increment;
        summary.dataBreachFixedNum += increment;
      }
    }

    // count IP
    if (dataClasses.includes(BreachDataTypes.IP)) {
      summary.totalExposures += increment;
      summary.allExposures.ipAddresses += increment;
      if (b.isResolved) {
        summary.fixedExposures.ipAddresses += increment;
        summary.dataBreachFixedNum += increment;
      }
    }

    // count credit card
    if (dataClasses.includes(BreachDataTypes.CreditCard)) {
      summary.totalExposures += increment;
      summary.allExposures.creditCardNumbers += increment;
      if (b.isResolved) {
        summary.fixedExposures.creditCardNumbers += increment;
        summary.dataBreachFixedNum += increment;
      }
    }

    // count pin numbers
    if (dataClasses.includes(BreachDataTypes.PIN)) {
      summary.totalExposures += increment;
      summary.allExposures.pins += increment;
      if (b.isResolved) {
        summary.fixedExposures.pins += increment;
        summary.dataBreachFixedNum += increment;
      }
    }

    // count security questions
    if (dataClasses.includes(BreachDataTypes.SecurityQuestions)) {
      summary.totalExposures += increment;
      summary.allExposures.securityQuestions += increment;
      if (b.isResolved) {
        summary.fixedExposures.securityQuestions += increment;
        summary.dataBreachFixedNum += increment;
      }
    }
  });

  // count unique breaches
  summary.dataBreachTotalNum = subscriberBreaches.length;
  const isBreachesOnly = summary.dataBrokerTotalNum === 0;
  summary.sanitizedExposures = sanitizeExposures(
    summary.allExposures,
    summary.totalExposures,
    isBreachesOnly
  );
  summary.fixedSanitizedExposures = sanitizeExposures(
    summary.fixedExposures,
    summary.dataBreachFixedNum + summary.dataBrokerFixedNum,
    isBreachesOnly
  );
  return summary;
}

function sanitizeExposures(
  exposures: Exposures,
  totalExposures: number,
  breachesOnly = false
): SanitizedExposures {
  let numOfTopExposures = 4; // when we have both exposure types
  if (breachesOnly) {
    numOfTopExposures = 2; // when we have breaches only
  }
  const sanitizedExposures = Object.entries(exposures)
    .sort((a, b) => b[1] - a[1])
    .map((e) => {
      const key = exposureKeyMap[e[0]];
      return { [key]: e[1] };
    })
    .splice(0, numOfTopExposures);
  const other = sanitizedExposures.reduce(
    (total, cur) => total - (Object.values(cur).pop() || 0),
    totalExposures
  );
  sanitizedExposures.push({ "other-data-class": other });
  console.debug({ sanitizedExposures });
  return sanitizedExposures;
}
