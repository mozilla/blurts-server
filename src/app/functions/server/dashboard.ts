/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { OnerepScanResultRow } from "knex/types/tables";
import { BreachDataTypes } from "../universal/breach";
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
  bankAccountNumbers: number;
};

type SanitizedExposures = Array<Record<string, number>>;
export interface DashboardSummary {
  /** total number of user data breaches */
  dataBreachTotalNum: number;
  /** total number of exposures from user breaches */
  dataBreachTotalExposuresNum: number;
  /**total number of fixed exposures from user breaches */
  dataBreachFixedExposuresNum: number;
  /** total number of user data broker scans */
  dataBrokerTotalNum: number;
  /** total number of exposures from user data broker scanned results */
  dataBrokerTotalExposuresNum: number;
  /** total number of fixed scans from user data broker scanned results */
  dataBrokerFixedNum: number;
  /** total number of fixed exposures from user data broker scanned results */
  dataBrokerFixedExposuresNum: number;
  /** total number of in-progress scans from user data broker scanned results */
  dataBrokerInProgressNum: number;
  /** total number of in-progress exposures from user data broker scanned results */
  dataBrokerInProgressExposuresNum: number;
  /** total number of exposures resolved manually */
  dataBrokerManuallyResolvedExposuresNum: number;

  /** total number of exposures: sum of data breaches & data broker exposures */
  totalExposures: number;
  /** all exposures separated by data types */
  allExposures: Exposures;
  /** unresolved exposures separated by data types */
  unresolvedExposures: Exposures;
  /** in-progress exposures separated by data types */
  inProgressExposures: Exposures;
  /** resolved/removed exposures separated by data types */
  fixedExposures: Exposures;
  /** in-progress & resolved/removed exposures separated by data types */
  inProgressFixedExposures: Exposures;

  /** sanitized all exposures for frontend display */
  unresolvedSanitizedExposures: SanitizedExposures;
  /** sanitized resolved/removed exposures for frontend display */
  inProgressFixedSanitizedExposures: SanitizedExposures;
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
  bankAccountNumbers: "bank-account-numbers",
};

export function getDashboardSummary(
  scannedResults: OnerepScanResultRow[],
  subscriberBreaches: SubscriberBreach[]
): DashboardSummary {
  const summary: DashboardSummary = {
    dataBreachTotalNum: 0,
    dataBreachTotalExposuresNum: 0,
    dataBreachFixedExposuresNum: 0,
    dataBrokerTotalNum: scannedResults.length,
    dataBrokerTotalExposuresNum: 0,
    dataBrokerFixedNum: 0,
    dataBrokerFixedExposuresNum: 0,
    dataBrokerInProgressNum: 0,
    dataBrokerInProgressExposuresNum: 0,
    dataBrokerManuallyResolvedExposuresNum: 0,
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
      bankAccountNumbers: 0,
    },
    unresolvedExposures: {
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
      bankAccountNumbers: 0,
    },
    inProgressExposures: {
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
      bankAccountNumbers: 0,
    },
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
      bankAccountNumbers: 0,
    },
    inProgressFixedExposures: {
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
      bankAccountNumbers: 0,
    },
    unresolvedSanitizedExposures: [],
    inProgressFixedSanitizedExposures: [],
  };

  // calculate broker summary from scanned results
  if (scannedResults) {
    scannedResults.forEach((r) => {
      // check removal status
      const isManuallyResolved = r.manually_resolved;
      const isFixed =
        r.status === RemovalStatusMap.Removed || isManuallyResolved;
      const isInProgress =
        r.status === RemovalStatusMap.OptOutInProgress ||
        r.status === RemovalStatusMap.WaitingForVerification;
      if (isInProgress) {
        summary.dataBrokerInProgressNum++;
      } else if (isFixed) {
        summary.dataBrokerFixedNum++;
      }
      // total exposure: add email, phones, addresses, relatives, full name (1)
      const exposureIncrement =
        r.emails.length +
        r.phones.length +
        r.addresses.length +
        r.relatives.length +
        1;
      summary.totalExposures += exposureIncrement;
      summary.dataBrokerTotalExposuresNum += exposureIncrement;

      // for all exposures: email, phones, addresses, relatives, full name (1)
      summary.allExposures.emailAddresses += r.emails.length;
      summary.allExposures.phoneNumbers += r.phones.length;
      summary.allExposures.addresses += r.addresses.length;
      summary.allExposures.familyMembers += r.relatives.length;
      summary.allExposures.fullNames++;

      if (isInProgress) {
        summary.inProgressExposures.emailAddresses += r.emails.length;
        summary.inProgressExposures.phoneNumbers += r.phones.length;
        summary.inProgressExposures.addresses += r.addresses.length;
        summary.inProgressExposures.familyMembers += r.relatives.length;
        summary.inProgressExposures.fullNames++;
        summary.dataBrokerInProgressExposuresNum += exposureIncrement;
      }

      // for fixed exposures: email, phones, addresses, relatives, full name (1)
      if (isFixed) {
        summary.fixedExposures.emailAddresses += r.emails.length;
        summary.fixedExposures.phoneNumbers += r.phones.length;
        summary.fixedExposures.addresses += r.addresses.length;
        summary.fixedExposures.familyMembers += r.relatives.length;
        summary.fixedExposures.fullNames++;
        summary.dataBrokerFixedExposuresNum += exposureIncrement;
      }

      if (isManuallyResolved) {
        summary.dataBrokerManuallyResolvedExposuresNum += exposureIncrement;
      }
    });
  }

  // calculate breaches summary from breaches data
  // TODO: Modify after MNTOR-1947: Refactor user breaches object
  subscriberBreaches.forEach((b) => {
    // According to the type, b.dataClasses should always be defined, so unit
    // tests always define it. That said, since the type was added later, I'd
    // rather not remove the `?? []` just in case it is wrong, hence:
    /* c8 ignore next */
    const dataClasses = b.dataClasses ?? [];
    // b.emailsAffected *should* always be non-empty, since `subscriberBreaches`
    // was specifically constructed to contain all breaches that affect the
    // user. However, some basic `git blame` archeology doesn't turn up any info
    // on why the `?? 0` was added, so I'm leaving it in place for now:
    /* c8 ignore next */
    const increment = b.emailsAffected.length ?? 0;

    // count emails
    if (dataClasses.includes(BreachDataTypes.Email)) {
      summary.totalExposures += increment;
      summary.dataBreachTotalExposuresNum += increment;
      summary.allExposures.emailAddresses += increment;
      if (b.isResolved) {
        summary.fixedExposures.emailAddresses += increment;
        summary.dataBreachFixedExposuresNum += increment;
      }
    }

    // count phone numbers
    if (dataClasses.includes(BreachDataTypes.Phone)) {
      summary.totalExposures += increment;
      summary.dataBreachTotalExposuresNum += increment;
      summary.allExposures.phoneNumbers += increment;
      if (b.isResolved) {
        summary.fixedExposures.phoneNumbers += increment;
        summary.dataBreachFixedExposuresNum += increment;
      }
    }

    // count password
    if (dataClasses.includes(BreachDataTypes.Passwords)) {
      summary.totalExposures += increment;
      summary.dataBreachTotalExposuresNum += increment;
      summary.allExposures.passwords += increment;
      if (b.isResolved) {
        summary.fixedExposures.passwords += increment;
        summary.dataBreachFixedExposuresNum += increment;
      }
    }

    // count ssn
    if (dataClasses.includes(BreachDataTypes.SSN)) {
      summary.totalExposures += increment;
      summary.dataBreachTotalExposuresNum += increment;
      summary.allExposures.socialSecurityNumbers += increment;
      if (b.isResolved) {
        summary.fixedExposures.socialSecurityNumbers += increment;
        summary.dataBreachFixedExposuresNum += increment;
      }
    }

    // count IP
    if (dataClasses.includes(BreachDataTypes.IP)) {
      summary.totalExposures += increment;
      summary.dataBreachTotalExposuresNum += increment;
      summary.allExposures.ipAddresses += increment;
      if (b.isResolved) {
        summary.fixedExposures.ipAddresses += increment;
        summary.dataBreachFixedExposuresNum += increment;
      }
    }

    // count credit card
    if (dataClasses.includes(BreachDataTypes.CreditCard)) {
      summary.totalExposures += increment;
      summary.dataBreachTotalExposuresNum += increment;
      summary.allExposures.creditCardNumbers += increment;
      if (b.isResolved) {
        summary.fixedExposures.creditCardNumbers += increment;
        summary.dataBreachFixedExposuresNum += increment;
      }
    }

    /* c8 ignore start */
    // count pin numbers
    if (dataClasses.includes(BreachDataTypes.PIN)) {
      summary.totalExposures += increment;
      summary.dataBreachTotalExposuresNum += increment;
      summary.allExposures.pins += increment;
      if (b.isResolved) {
        summary.fixedExposures.pins += increment;
        summary.dataBreachFixedExposuresNum += increment;
      }
    }
    /* c8 ignore stop */

    /** c8 ignore start */
    // count security questions
    if (dataClasses.includes(BreachDataTypes.SecurityQuestions)) {
      summary.totalExposures += increment;
      summary.dataBreachTotalExposuresNum += increment;
      summary.allExposures.securityQuestions += increment;
      if (b.isResolved) {
        summary.fixedExposures.securityQuestions += increment;
        summary.dataBreachFixedExposuresNum += increment;
      }
    }
    /** c8 ignore stop */
  });

  // count unique breaches
  summary.dataBreachTotalNum = subscriberBreaches.length;
  const isBreachesOnly = summary.dataBrokerTotalNum === 0;

  // calculate total exposures
  // summary.totalExposures = summary.dataBreachTotalExposuresNum + summary.dataBrokerTotalExposuresNum;

  // count unresolved exposures
  summary.unresolvedExposures = Object.keys(summary.allExposures).reduce(
    (a, k) => {
      a[k as keyof Exposures] =
        summary.allExposures[k as keyof Exposures] -
        summary.fixedExposures[k as keyof Exposures] -
        summary.inProgressExposures[k as keyof Exposures];
      return a;
    },
    {} as Exposures
  );

  // count fixed and in-progress exposures
  summary.inProgressFixedExposures = Object.keys(summary.fixedExposures).reduce(
    (a, k) => {
      a[k as keyof Exposures] =
        summary.fixedExposures[k as keyof Exposures] +
        summary.inProgressExposures[k as keyof Exposures];
      return a;
    },
    {} as Exposures
  );

  // sanitize unresolved exposures
  summary.unresolvedSanitizedExposures = sanitizeExposures(
    summary.unresolvedExposures,
    summary.totalExposures -
      summary.dataBreachFixedExposuresNum -
      summary.dataBrokerFixedExposuresNum -
      summary.dataBrokerInProgressExposuresNum,
    isBreachesOnly
  );

  // sanitize fixed + inprogress exposures
  summary.inProgressFixedSanitizedExposures = sanitizeExposures(
    summary.inProgressFixedExposures,
    summary.dataBreachFixedExposuresNum +
      summary.dataBrokerFixedExposuresNum +
      summary.dataBrokerInProgressExposuresNum,
    isBreachesOnly
  );

  // console.log("unresolved exposures: ");
  // console.log(summary.unresolvedExposures);
  // console.log(summary.unresolvedSanitizedExposures);

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
  return sanitizedExposures;
}

export function getExposureReduction(summary: DashboardSummary): number {
  return Math.round(
    (summary.dataBrokerTotalExposuresNum / summary.totalExposures) * 100
  );
}
