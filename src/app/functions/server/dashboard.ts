/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { OnerepScanResultDataBrokerRow } from "knex/types/tables";
import { BreachDataTypes } from "../universal/breach";
import { RemovalStatusMap } from "../universal/scanResult";
import { SubscriberBreach } from "../../../utils/subscriberBreaches";
import { DataBrokerRemovalStatusMap } from "../universal/dataBroker";
import { FeatureFlagName } from "../../../db/tables/featureFlags";
import type { MoscaryData } from "./moscary";
import { isOneRepScanResultDataBroker } from "../../functions/universal/onerep";

export type DataPoints = {
  // shared
  emailAddresses: number;
  phoneNumbers: number;

  // data brokers
  addresses: number;
  familyMembers: number;

  // data breaches
  socialSecurityNumbers: number;
  ipAddresses: number;
  passwords: number;
  creditCardNumbers: number;
  pins: number;
  securityQuestions: number;
  bankAccountNumbers: number;
};

type SanitizedDataPoints = Array<Record<string, number>>;
export interface DashboardSummary {
  /** total number of user data breaches */
  dataBreachTotalNum: number;
  /** total number of user data breaches that are unresolved */
  dataBreachUnresolvedNum: number;
  /** total number of user data breaches that are resolved */
  dataBreachResolvedNum: number;
  /** total number of data points from user breaches */
  dataBreachTotalDataPointsNum: number;
  /** total number of fixed data points from user breaches */
  dataBreachFixedDataPointsNum: number;
  /** total number of user data broker scans */
  dataBrokerTotalNum: number;
  /** total number of data points from user data broker scanned results */
  dataBrokerTotalDataPointsNum: number;
  /** total number of auto-fixed scans from user data broker scanned results */
  dataBrokerAutoFixedNum: number;
  /** total number of manually fixed scans from user data broker scanned results */
  dataBrokerManuallyResolvedNum: number;
  /** total number of fixed data points from user data broker scanned results */
  dataBrokerAutoFixedDataPointsNum: number;
  /** total number of in-progress scans from user data broker scanned results */
  dataBrokerInProgressNum: number;
  /** total number of in-progress data points from user data broker scanned results */
  dataBrokerInProgressDataPointsNum: number;
  /** total number of data points resolved manually */
  dataBrokerManuallyResolvedDataPointsNum: number;

  /** total number of data points: sum of data breaches & data broker data points */
  totalDataPointsNum: number;
  /** all data points separated by data classes */
  allDataPoints: DataPoints;
  /** unresolved data points separated by data classes */
  unresolvedDataPoints: DataPoints;
  /** in-progress data points separated by data classes */
  inProgressDataPoints: DataPoints;
  /** resolved/removed data points separated by data classes */
  fixedDataPoints: DataPoints;
  /** manually resolved data broker data points separated by data classes */
  manuallyResolvedDataBrokerDataPoints: DataPoints;
  /** total number of data brokers with removal under maintenance broker status */
  dataBrokerRemovalUnderMaintenance: number;
  /** sanitized all data points for frontend display */
  unresolvedSanitizedDataPoints: SanitizedDataPoints;
  /** sanitized resolved and removed data points for frontend display */
  fixedSanitizedDataPoints: SanitizedDataPoints;
}

export const dataClassKeyMap: Record<keyof DataPoints, string> = {
  emailAddresses: "email-addresses",
  phoneNumbers: "phone-numbers",

  // data brokers
  addresses: "physical-addresses",
  familyMembers: "family-members-names",

  // data breaches
  socialSecurityNumbers: "social-security-numbers",
  ipAddresses: "ip-addresses",
  passwords: "passwords",
  creditCardNumbers: "partial-credit-card-data",
  pins: "pins",
  securityQuestions: "security-questions-and-answers",
  bankAccountNumbers: "bank-account-numbers",
};

export function getDashboardSummary(
  scannedResults: OnerepScanResultDataBrokerRow[] | MoscaryData["ScanResult"][],
  subscriberBreaches: SubscriberBreach[],
  enabledFeatureFlags?: FeatureFlagName[],
): DashboardSummary {
  const summary: DashboardSummary = {
    dataBreachTotalNum: 0,
    dataBreachResolvedNum: 0,
    dataBreachUnresolvedNum: 0,
    dataBreachTotalDataPointsNum: 0,
    dataBreachFixedDataPointsNum: 0,
    dataBrokerTotalNum: scannedResults.length,
    dataBrokerTotalDataPointsNum: 0,
    dataBrokerAutoFixedNum: 0,
    dataBrokerRemovalUnderMaintenance: 0,
    dataBrokerAutoFixedDataPointsNum: 0,
    dataBrokerInProgressNum: 0,
    dataBrokerInProgressDataPointsNum: 0,
    dataBrokerManuallyResolvedNum: 0,
    dataBrokerManuallyResolvedDataPointsNum: 0,
    totalDataPointsNum: 0,
    allDataPoints: {
      emailAddresses: 0,
      phoneNumbers: 0,
      addresses: 0,
      familyMembers: 0,

      // data breaches
      socialSecurityNumbers: 0,
      ipAddresses: 0,
      passwords: 0,
      creditCardNumbers: 0,
      pins: 0,
      securityQuestions: 0,
      bankAccountNumbers: 0,
    },
    unresolvedDataPoints: {
      emailAddresses: 0,
      phoneNumbers: 0,
      addresses: 0,
      familyMembers: 0,

      // data breaches
      socialSecurityNumbers: 0,
      ipAddresses: 0,
      passwords: 0,
      creditCardNumbers: 0,
      pins: 0,
      securityQuestions: 0,
      bankAccountNumbers: 0,
    },
    inProgressDataPoints: {
      emailAddresses: 0,
      phoneNumbers: 0,
      addresses: 0,
      familyMembers: 0,

      // data breaches
      socialSecurityNumbers: 0,
      ipAddresses: 0,
      passwords: 0,
      creditCardNumbers: 0,
      pins: 0,
      securityQuestions: 0,
      bankAccountNumbers: 0,
    },
    fixedDataPoints: {
      emailAddresses: 0,
      phoneNumbers: 0,
      addresses: 0,
      familyMembers: 0,

      // data breaches
      socialSecurityNumbers: 0,
      ipAddresses: 0,
      passwords: 0,
      creditCardNumbers: 0,
      pins: 0,
      securityQuestions: 0,
      bankAccountNumbers: 0,
    },
    manuallyResolvedDataBrokerDataPoints: {
      emailAddresses: 0,
      phoneNumbers: 0,
      addresses: 0,
      familyMembers: 0,

      // data breaches
      socialSecurityNumbers: 0,
      ipAddresses: 0,
      passwords: 0,
      creditCardNumbers: 0,
      pins: 0,
      securityQuestions: 0,
      bankAccountNumbers: 0,
    },
    unresolvedSanitizedDataPoints: [],
    fixedSanitizedDataPoints: [],
  };

  // calculate broker summary from scanned results
  if (scannedResults) {
    scannedResults.forEach((r) => {
      // check removal status
      const isManuallyResolved = r.manually_resolved;
      const isAutoFixed =
        r.status === RemovalStatusMap.Removed && !isManuallyResolved;
      const isInProgress =
        (r.status === RemovalStatusMap.OptOutInProgress ||
          r.status === RemovalStatusMap.WaitingForVerification) &&
        !isManuallyResolved;

      // TODO: MNTOR-3886 - Remove EnableRemovalUnderMaintenanceStep feature flag
      // If the flag is disabled, include the data.
      // If the flag is enabled, include the data only if the broker status is not
      const isRemovalUnderMaintenance =
        (isOneRepScanResultDataBroker(r) ? r.broker_status : r.status) ===
        DataBrokerRemovalStatusMap.RemovalUnderMaintenance;

      // The condition ensures that removal under maintenance is only considered when the flag is enabled.
      /* c8 ignore next 3 */
      const countRemovalUnderMaintenanceData =
        !enabledFeatureFlags?.includes("EnableRemovalUnderMaintenanceStep") ||
        !isRemovalUnderMaintenance;

      if (isInProgress) {
        if (countRemovalUnderMaintenanceData) {
          summary.dataBrokerInProgressNum++;
        }
      } else if (isAutoFixed) {
        summary.dataBrokerAutoFixedNum++;
      } else if (isManuallyResolved) {
        summary.dataBrokerManuallyResolvedNum++;
      }
      // total data points: add email, phones, addresses, relatives, full name (1)
      const dataPointsIncrement =
        r.emails.length +
        r.phones.length +
        r.addresses.length +
        r.relatives.length;
      summary.totalDataPointsNum += dataPointsIncrement;
      summary.dataBrokerTotalDataPointsNum += dataPointsIncrement;

      // for all data points: email, phones, addresses, relatives, full name (1)
      summary.allDataPoints.emailAddresses += r.emails.length;
      summary.allDataPoints.phoneNumbers += r.phones.length;
      summary.allDataPoints.addresses += r.addresses.length;
      summary.allDataPoints.familyMembers += r.relatives.length;

      if (isInProgress) {
        if (countRemovalUnderMaintenanceData) {
          summary.inProgressDataPoints.emailAddresses += r.emails.length;
          summary.inProgressDataPoints.phoneNumbers += r.phones.length;
          summary.inProgressDataPoints.addresses += r.addresses.length;
          summary.inProgressDataPoints.familyMembers += r.relatives.length;
          summary.dataBrokerInProgressDataPointsNum += dataPointsIncrement;
        }
      }

      // for fixed data points: email, phones, addresses, relatives, full name (1)
      if (isAutoFixed) {
        summary.fixedDataPoints.emailAddresses += r.emails.length;
        summary.fixedDataPoints.phoneNumbers += r.phones.length;
        summary.fixedDataPoints.addresses += r.addresses.length;
        summary.fixedDataPoints.familyMembers += r.relatives.length;
        summary.dataBrokerAutoFixedDataPointsNum += dataPointsIncrement;
      }

      if (isManuallyResolved) {
        summary.manuallyResolvedDataBrokerDataPoints.emailAddresses +=
          r.emails.length;
        summary.manuallyResolvedDataBrokerDataPoints.phoneNumbers +=
          r.phones.length;
        summary.manuallyResolvedDataBrokerDataPoints.addresses +=
          r.addresses.length;
        summary.manuallyResolvedDataBrokerDataPoints.familyMembers +=
          r.relatives.length;
        summary.dataBrokerManuallyResolvedDataPointsNum += dataPointsIncrement;
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
      summary.totalDataPointsNum += increment;
      summary.dataBreachTotalDataPointsNum += increment;
      summary.allDataPoints.emailAddresses += increment;
      if (b.resolvedDataClasses.includes(BreachDataTypes.Email)) {
        summary.fixedDataPoints.emailAddresses += increment;
        summary.dataBreachFixedDataPointsNum += increment;
      }
    }

    // count phone numbers
    if (dataClasses.includes(BreachDataTypes.Phone)) {
      summary.totalDataPointsNum += increment;
      summary.dataBreachTotalDataPointsNum += increment;
      summary.allDataPoints.phoneNumbers += increment;
      if (b.resolvedDataClasses.includes(BreachDataTypes.Phone)) {
        summary.fixedDataPoints.phoneNumbers += increment;
        summary.dataBreachFixedDataPointsNum += increment;
      }
    }

    // count password
    if (dataClasses.includes(BreachDataTypes.Passwords)) {
      summary.totalDataPointsNum += increment;
      summary.dataBreachTotalDataPointsNum += increment;
      summary.allDataPoints.passwords += increment;
      if (b.resolvedDataClasses.includes(BreachDataTypes.Passwords)) {
        summary.fixedDataPoints.passwords += increment;
        summary.dataBreachFixedDataPointsNum += increment;
      }
    }

    // count ssn
    if (dataClasses.includes(BreachDataTypes.SSN)) {
      summary.totalDataPointsNum += increment;
      summary.dataBreachTotalDataPointsNum += increment;
      summary.allDataPoints.socialSecurityNumbers += increment;
      if (b.resolvedDataClasses.includes(BreachDataTypes.SSN)) {
        summary.fixedDataPoints.socialSecurityNumbers += increment;
        summary.dataBreachFixedDataPointsNum += increment;
      }
    }

    // count IP
    if (dataClasses.includes(BreachDataTypes.IP)) {
      summary.totalDataPointsNum += increment;
      summary.dataBreachTotalDataPointsNum += increment;
      summary.allDataPoints.ipAddresses += increment;
      if (b.resolvedDataClasses.includes(BreachDataTypes.IP)) {
        summary.fixedDataPoints.ipAddresses += increment;
        summary.dataBreachFixedDataPointsNum += increment;
      }
    }

    // count credit card
    if (dataClasses.includes(BreachDataTypes.CreditCard)) {
      summary.totalDataPointsNum += increment;
      summary.dataBreachTotalDataPointsNum += increment;
      summary.allDataPoints.creditCardNumbers += increment;
      if (b.resolvedDataClasses.includes(BreachDataTypes.CreditCard)) {
        summary.fixedDataPoints.creditCardNumbers += increment;
        summary.dataBreachFixedDataPointsNum += increment;
      }
    }

    // count pin numbers
    if (dataClasses.includes(BreachDataTypes.PIN)) {
      summary.totalDataPointsNum += increment;
      summary.dataBreachTotalDataPointsNum += increment;
      summary.allDataPoints.pins += increment;
      if (b.resolvedDataClasses.includes(BreachDataTypes.PIN)) {
        summary.fixedDataPoints.pins += increment;
        summary.dataBreachFixedDataPointsNum += increment;
      }
    }

    // count security questions
    if (dataClasses.includes(BreachDataTypes.SecurityQuestions)) {
      summary.totalDataPointsNum += increment;
      summary.dataBreachTotalDataPointsNum += increment;
      summary.allDataPoints.securityQuestions += increment;
      if (b.resolvedDataClasses.includes(BreachDataTypes.SecurityQuestions)) {
        summary.fixedDataPoints.securityQuestions += increment;
        summary.dataBreachFixedDataPointsNum += increment;
      }
    }

    if (dataClasses.includes(BreachDataTypes.BankAccount)) {
      summary.totalDataPointsNum += increment;
      summary.dataBreachTotalDataPointsNum += increment;
      summary.allDataPoints.bankAccountNumbers += increment;
      if (b.resolvedDataClasses.includes(BreachDataTypes.BankAccount)) {
        summary.fixedDataPoints.bankAccountNumbers += increment;
        summary.dataBreachFixedDataPointsNum += increment;
      }
    }

    if (b.isResolved) summary.dataBreachResolvedNum++;
  });

  // count unique breaches
  summary.dataBreachTotalNum = subscriberBreaches.length;
  summary.dataBreachUnresolvedNum =
    summary.dataBreachTotalNum - summary.dataBreachResolvedNum;
  const isBreachesOnly = summary.dataBrokerTotalNum === 0;

  // count unresolved data points
  summary.unresolvedDataPoints = Object.keys(summary.allDataPoints).reduce(
    (a, k) => {
      a[k as keyof DataPoints] =
        summary.allDataPoints[k as keyof DataPoints] -
        summary.fixedDataPoints[k as keyof DataPoints] -
        summary.inProgressDataPoints[k as keyof DataPoints] -
        summary.manuallyResolvedDataBrokerDataPoints[k as keyof DataPoints];
      return a;
    },
    {} as DataPoints,
  );

  // sanitize unresolved data points
  summary.unresolvedSanitizedDataPoints = sanitizeDataPoints(
    summary.unresolvedDataPoints,
    summary.totalDataPointsNum -
      summary.dataBreachFixedDataPointsNum -
      summary.dataBrokerAutoFixedDataPointsNum -
      summary.dataBrokerInProgressDataPointsNum -
      summary.dataBrokerManuallyResolvedDataPointsNum,
    isBreachesOnly,
  );

  // count fixed and manually resolved (data brokers) data points
  const dataBrokerFixedManuallyResolved = Object.keys(
    summary.fixedDataPoints,
  ).reduce((a, k) => {
    a[k as keyof DataPoints] =
      summary.fixedDataPoints[k as keyof DataPoints] +
      summary.manuallyResolvedDataBrokerDataPoints[k as keyof DataPoints];
    return a;
  }, {} as DataPoints);

  // sanitize fixed and removed data points
  summary.fixedSanitizedDataPoints = sanitizeDataPoints(
    dataBrokerFixedManuallyResolved,
    summary.dataBreachFixedDataPointsNum +
      summary.dataBrokerAutoFixedDataPointsNum +
      summary.dataBrokerManuallyResolvedDataPointsNum,
    isBreachesOnly,
  );

  return summary;
}

function sanitizeDataPoints(
  dataPoints: DataPoints,
  dataPointCount: number,
  breachesOnly = false,
): SanitizedDataPoints {
  let numOfTopDataPoints = 4; // when we have both exposure types
  if (breachesOnly) {
    numOfTopDataPoints = 2; // when we have breaches only
  }
  const sanitizedAllDataPoints = (
    Object.entries(dataPoints) as Array<
      [keyof DataPoints, DataPoints[keyof DataPoints]]
    >
  )
    .sort(([_dataClassA, countA], [_dataClassB, countB]) => countB - countA)
    .map(([dataClass, count]) => {
      const key = dataClassKeyMap[dataClass];
      return { [key]: count };
    });
  const sanitizedTopDataPoints = sanitizedAllDataPoints.slice(
    0,
    numOfTopDataPoints,
  );

  const otherCount = sanitizedTopDataPoints.reduce(
    (total, cur) => total - (Object.values(cur).pop() || 0),
    dataPointCount,
  );
  const sanitizedDataPoints = [...sanitizedTopDataPoints];
  sanitizedDataPoints.push({ "other-data-class": otherCount });
  return sanitizedDataPoints;
}

export function getDataPointReduction(summary: DashboardSummary): number {
  if (summary.totalDataPointsNum <= 0) return 100;
  return Math.round(
    (summary.dataBrokerTotalDataPointsNum / summary.totalDataPointsNum) * 100,
  );
}
