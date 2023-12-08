/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { OnerepScanResultRow } from "knex/types/tables";
import {
  DashboardSummary,
  getDashboardSummary,
  getDataPointReduction,
  DataPoints,
} from "./dashboard";
import { SubscriberBreach } from "../../../utils/subscriberBreaches";
import { RemovalStatus, RemovalStatusMap } from "../universal/scanResult";

const unresolvedBreaches: SubscriberBreach[] = [
  {
    id: 1,
    addedDate: new Date("2015-10-26T23:35:45.000Z"),
    breachDate: new Date("2015-03-01T08:00:00.000Z"),
    dataClasses: ["email-addresses", "ip-addresses", "passwords"],
    resolvedDataClasses: [],
    description:
      'In approximately March 2015, the free web hosting provider <a href="http://www.troyhunt.com/2015/10/breaches-traders-plain-text-passwords.html" target="_blank" rel="noopener">000webhost suffered a major data breach</a> that exposed almost 15 million customer records. The data was sold and traded before 000webhost was alerted in October. The breach included names, email addresses and plain text passwords.',
    domain: "000webhost.com",
    isResolved: false,
    favIconUrl: "",
    modifiedDate: new Date("2017-12-10T21:44:27.000Z"),
    name: "000webhost",
    title: "000webhost",
    emailsAffected: ["temp@mailinator.com"],
    dataClassesEffected: [
      {
        "email-addresses": ["temp@mailinator.com"],
      },
      {
        "ip-addresses": 1,
      },
      {
        passwords: 1,
      },
    ],
  },
  {
    id: 15,
    addedDate: new Date("2016-03-06T11:07:41.000Z"),
    breachDate: new Date("2014-11-25T08:00:00.000Z"),
    dataClasses: [
      "dates-of-birth",
      "email-addresses",
      "ip-addresses",
      "passwords",
    ],
    resolvedDataClasses: [],
    description:
      'In November 2014, the acne website <a href="http://www.acne.org/" target="_blank" rel="noopener">acne.org</a> suffered a data breach that exposed over 430k forum members\' accounts. The data was being actively traded on underground forums and included email addresses, birth dates and passwords.',
    domain: "acne.org",
    isResolved: false,
    favIconUrl:
      "https://s3.amazonaws.com/firefoxmonitor-dev-monitor-cdn-dev-static-website/acne.org.ico",
    modifiedDate: new Date("2016-03-06T11:07:41.000Z"),
    name: "AcneOrg",
    title: "Acne.org",
    emailsAffected: ["temp@mailinator.com"],
    dataClassesEffected: [
      {
        "dates-of-birth": 1,
      },
      {
        "email-addresses": ["temp@mailinator.com"],
      },
      {
        "ip-addresses": 1,
      },
      {
        passwords: 1,
      },
    ],
  },
  {
    id: 20,
    addedDate: new Date("2013-12-04T00:00:00.000Z"),
    breachDate: new Date("2013-10-04T07:00:00.000Z"),
    dataClasses: ["email-addresses", "passwords"],
    resolvedDataClasses: [],
    description:
      'In October 2013, 153 million Adobe accounts were breached with each containing an internal ID, username, email, <em>encrypted</em> password and a password hint in plain text. The password cryptography was poorly done and many were quickly resolved back to plain text. The unencrypted hints also <a href="http://www.troyhunt.com/2013/11/adobe-credentials-and-serious.html" target="_blank" rel="noopener">disclosed much about the passwords</a> adding further to the risk that hundreds of millions of Adobe customers already faced.',
    domain: "adobe.com",
    isResolved: false,
    favIconUrl:
      "https://s3.amazonaws.com/firefoxmonitor-dev-monitor-cdn-dev-static-website/adobe.com.ico",
    modifiedDate: new Date("2022-05-15T23:52:49.000Z"),
    name: "Adobe",
    title: "Adobe",
    emailsAffected: ["temp@mailinator.com"],
    dataClassesEffected: [
      {
        "email-addresses": ["temp@mailinator.com"],
      },
      {
        passwords: 1,
      },
    ],
  },
];
const unresolvedScannedResults: OnerepScanResultRow[] = [
  {
    id: 1,
    onerep_scan_result_id: 11238,
    onerep_scan_id: 1594,
    link: "http://arivify.com/rerum-voluptas-dolores-et-et-neque-et",
    age: 1,
    data_broker: "arivify.com",
    data_broker_id: 13,
    emails: [
      "deven65@haley.com",
      "eve72@rogahn.com",
      "friesen.julien@yahoo.com",
    ],
    phones: ["+5724732773823", "+2561245107567", "+5142579078788"],
    addresses: [
      {
        zip: "18759-5025",
        city: "Seaside",
        state: "CA",
        street: "Waters Estate",
      },
      {
        zip: "95997",
        city: "Kesslerbury",
        state: "SC",
        street: "Fritsch Stream",
      },
      {
        zip: "88630-4710",
        city: "Port Kareem",
        state: "DE",
        street: "Madeline Fall",
      },
    ],
    relatives: ["Kyler Anderson", "Birdie Skiles", "Marshall Raynor"],
    first_name: "j",
    last_name: "j",
    status: RemovalStatusMap.New as RemovalStatus,
    created_at: new Date("2023-09-26T16:59:04.046Z"),
    updated_at: new Date("2023-09-26T16:59:04.046Z"),
    manually_resolved: false,
  },
];
const inProgressScannedResults: OnerepScanResultRow[] = [
  {
    id: 3,
    onerep_scan_result_id: 11236,
    onerep_scan_id: 1594,
    link: "http://instantcheckmate.com/sit-praesentium-voluptate-a-voluptas-quo-sapiente",
    age: 1,
    data_broker: "instantcheckmate.com",
    data_broker_id: 11,
    emails: [
      "gonzalo85@konopelski.com",
      "clifford.bailey@huel.net",
      "rolfson.neil@gmail.com",
    ],
    phones: ["+5442849271748", "+8179265715457", "+3314606006541"],
    addresses: [
      {
        zip: "50277",
        city: "Seaside",
        state: "CA",
        street: "Clovis Square",
      },
      {
        zip: "50146-7108",
        city: "New Liliana",
        state: "ND",
        street: "Garnet Crossroad",
      },
      {
        zip: "12582-3146",
        city: "Port Julian",
        state: "UT",
        street: "Erdman Village",
      },
    ],
    relatives: ["Nelson Boehm", "Brett Hand", "Cornelius Smitham"],
    first_name: "j",
    last_name: "j",
    status: RemovalStatusMap.OptOutInProgress as RemovalStatus,
    created_at: new Date("2023-09-26T16:59:04.046Z"),
    updated_at: new Date("2023-09-26T16:59:04.046Z"),
    manually_resolved: false,
  },
];
const manuallyResolvedScannedResults: OnerepScanResultRow[] = [
  {
    id: 3,
    onerep_scan_result_id: 11236,
    onerep_scan_id: 1594,
    link: "http://instantcheckmate.com/sit-praesentium-voluptate-a-voluptas-quo-sapiente",
    age: 1,
    data_broker: "instantcheckmate.com",
    data_broker_id: 11,
    emails: [
      "gonzalo85@konopelski.com",
      "clifford.bailey@huel.net",
      "rolfson.neil@gmail.com",
    ],
    phones: ["+5442849271748", "+8179265715457", "+3314606006541"],
    addresses: [
      {
        zip: "50277",
        city: "Seaside",
        state: "CA",
        street: "Clovis Square",
      },
      {
        zip: "50146-7108",
        city: "New Liliana",
        state: "ND",
        street: "Garnet Crossroad",
      },
      {
        zip: "12582-3146",
        city: "Port Julian",
        state: "UT",
        street: "Erdman Village",
      },
    ],
    relatives: ["Nelson Boehm", "Brett Hand", "Cornelius Smitham"],
    first_name: "j",
    last_name: "j",
    status: RemovalStatusMap.New as RemovalStatus,
    created_at: new Date("2023-09-26T16:59:04.046Z"),
    updated_at: new Date("2023-09-26T16:59:04.046Z"),
    manually_resolved: true,
  },
];
const allResolvedScannedResults: OnerepScanResultRow[] = [
  {
    id: 1,
    onerep_scan_result_id: 11238,
    onerep_scan_id: 1594,
    link: "http://arivify.com/rerum-voluptas-dolores-et-et-neque-et",
    age: 1,
    data_broker: "arivify.com",
    data_broker_id: 13,
    emails: [
      "deven65@haley.com",
      "eve72@rogahn.com",
      "friesen.julien@yahoo.com",
    ],
    phones: ["+5724732773823", "+2561245107567", "+5142579078788"],
    addresses: [
      {
        zip: "18759-5025",
        city: "Seaside",
        state: "CA",
        street: "Waters Estate",
      },
      {
        zip: "95997",
        city: "Kesslerbury",
        state: "SC",
        street: "Fritsch Stream",
      },
      {
        zip: "88630-4710",
        city: "Port Kareem",
        state: "DE",
        street: "Madeline Fall",
      },
    ],
    relatives: ["Kyler Anderson", "Birdie Skiles", "Marshall Raynor"],
    first_name: "j",
    last_name: "j",
    status: RemovalStatusMap.Removed as RemovalStatus,
    created_at: new Date("2023-09-26T16:59:04.046Z"),
    updated_at: new Date("2023-09-26T16:59:04.046Z"),
    manually_resolved: false,
  },
  {
    id: 2,
    onerep_scan_result_id: 11237,
    onerep_scan_id: 1594,
    link: "http://ussearch.com/ab-dolore-voluptatem-accusamus-facilis",
    age: 2,
    data_broker: "ussearch.com",
    data_broker_id: 12,
    emails: [
      "gonzalo85@konopelski.com",
      "clifford.bailey@huel.net",
      "rolfson.neil@gmail.com",
    ],
    phones: ["+5442849271748", "+8179265715457", "+3314606006541"],
    addresses: [
      {
        zip: "50277",
        city: "Seaside",
        state: "CA",
        street: "Clovis Square",
      },
      {
        zip: "50146-7108",
        city: "New Liliana",
        state: "ND",
        street: "Garnet Crossroad",
      },
      {
        zip: "12582-3146",
        city: "Port Julian",
        state: "UT",
        street: "Erdman Village",
      },
    ],
    relatives: ["Nelson Boehm", "Brett Hand", "Cornelius Smitham"],
    first_name: "j",
    last_name: "j",
    status: RemovalStatusMap.Removed as RemovalStatus,
    created_at: new Date("2023-09-26T16:59:04.046Z"),
    updated_at: new Date("2023-09-26T16:59:04.046Z"),
    manually_resolved: false,
  },
  {
    id: 3,
    onerep_scan_result_id: 11236,
    onerep_scan_id: 1594,
    link: "http://instantcheckmate.com/sit-praesentium-voluptate-a-voluptas-quo-sapiente",
    age: 3,
    data_broker: "instantcheckmate.com",
    data_broker_id: 11,
    emails: [
      "gonzalo85@konopelski.com",
      "clifford.bailey@huel.net",
      "rolfson.neil@gmail.com",
    ],
    phones: ["+5442849271748", "+8179265715457", "+3314606006541"],
    addresses: [
      {
        zip: "50277",
        city: "Seaside",
        state: "CA",
        street: "Clovis Square",
      },
      {
        zip: "50146-7108",
        city: "New Liliana",
        state: "ND",
        street: "Garnet Crossroad",
      },
      {
        zip: "12582-3146",
        city: "Port Julian",
        state: "UT",
        street: "Erdman Village",
      },
    ],
    relatives: ["Nelson Boehm", "Brett Hand", "Cornelius Smitham"],
    first_name: "j",
    last_name: "j",
    status: RemovalStatusMap.Removed as RemovalStatus,
    created_at: new Date("2023-09-26T16:59:04.046Z"),
    updated_at: new Date("2023-09-26T16:59:04.046Z"),
    manually_resolved: false,
  },
];
const allResolvedBreaches: SubscriberBreach[] = [
  {
    id: 1,
    addedDate: new Date("2015-10-26T23:35:45.000Z"),
    breachDate: new Date("2015-03-01T08:00:00.000Z"),
    dataClasses: ["email-addresses", "ip-addresses", "passwords"],
    resolvedDataClasses: ["email-addresses", "ip-addresses", "passwords"],
    description:
      'In approximately March 2015, the free web hosting provider <a href="http://www.troyhunt.com/2015/10/breaches-traders-plain-text-passwords.html" target="_blank" rel="noopener">000webhost suffered a major data breach</a> that exposed almost 15 million customer records. The data was sold and traded before 000webhost was alerted in October. The breach included names, email addresses and plain text passwords.',
    domain: "000webhost.com",
    isResolved: true,
    favIconUrl: "",
    modifiedDate: new Date("2017-12-10T21:44:27.000Z"),
    name: "000webhost",
    title: "000webhost",
    emailsAffected: ["temp@mailinator.com"],
    dataClassesEffected: [
      {
        "email-addresses": ["temp@mailinator.com"],
      },
      {
        "ip-addresses": 1,
      },
      {
        passwords: 1,
      },
    ],
  },
  {
    id: 15,
    addedDate: new Date("2016-03-06T11:07:41.000Z"),
    breachDate: new Date("2014-11-25T08:00:00.000Z"),
    dataClasses: [
      "dates-of-birth",
      "email-addresses",
      "ip-addresses",
      "passwords",
    ],
    resolvedDataClasses: [
      "dates-of-birth",
      "email-addresses",
      "ip-addresses",
      "passwords",
    ],
    description:
      'In November 2014, the acne website <a href="http://www.acne.org/" target="_blank" rel="noopener">acne.org</a> suffered a data breach that exposed over 430k forum members\' accounts. The data was being actively traded on underground forums and included email addresses, birth dates and passwords.',
    domain: "acne.org",
    isResolved: true,
    favIconUrl:
      "https://s3.amazonaws.com/firefoxmonitor-dev-monitor-cdn-dev-static-website/acne.org.ico",
    modifiedDate: new Date("2016-03-06T11:07:41.000Z"),
    name: "AcneOrg",
    title: "Acne.org",
    emailsAffected: ["temp@mailinator.com"],
    dataClassesEffected: [
      {
        "dates-of-birth": 1,
      },
      {
        "email-addresses": ["temp@mailinator.com"],
      },
      {
        "ip-addresses": 1,
      },
      {
        passwords: 1,
      },
    ],
  },
  {
    id: 20,
    addedDate: new Date("2013-12-04T00:00:00.000Z"),
    breachDate: new Date("2013-10-04T07:00:00.000Z"),
    dataClasses: ["email-addresses", "passwords"],
    resolvedDataClasses: ["email-addresses", "passwords"],
    description:
      'In October 2013, 153 million Adobe accounts were breached with each containing an internal ID, username, email, <em>encrypted</em> password and a password hint in plain text. The password cryptography was poorly done and many were quickly resolved back to plain text. The unencrypted hints also <a href="http://www.troyhunt.com/2013/11/adobe-credentials-and-serious.html" target="_blank" rel="noopener">disclosed much about the passwords</a> adding further to the risk that hundreds of millions of Adobe customers already faced.',
    domain: "adobe.com",
    isResolved: true,
    favIconUrl:
      "https://s3.amazonaws.com/firefoxmonitor-dev-monitor-cdn-dev-static-website/adobe.com.ico",
    modifiedDate: new Date("2022-05-15T23:52:49.000Z"),
    name: "Adobe",
    title: "Adobe",
    emailsAffected: ["temp@mailinator.com"],
    dataClassesEffected: [
      {
        "email-addresses": ["temp@mailinator.com"],
      },
      {
        passwords: 1,
      },
    ],
  },
];
describe("getExposureReduction", () => {
  it("gets exposure reduction number", () => {
    const testExposure = {
      // shared
      emailAddresses: 0,
      phoneNumbers: 0,

      // data brokers
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
    };
    const testSummary: DashboardSummary = {
      dataBreachTotalNum: 10,
      dataBreachTotalDataPointsNum: 10,
      dataBreachFixedDataPointsNum: 10,
      dataBrokerTotalNum: 10,
      dataBrokerTotalDataPointsNum: 8,
      dataBrokerAutoFixedDataPointsNum: 8,
      dataBrokerAutoFixedNum: 10,
      dataBrokerInProgressDataPointsNum: 10,
      dataBrokerInProgressNum: 10,
      dataBrokerManuallyResolvedDataPointsNum: 0,
      totalDataPointsNum: 10,
      allDataPoints: testExposure,
      unresolvedDataPoints: testExposure,
      inProgressDataPoints: testExposure,
      fixedDataPoints: testExposure,
      inProgressFixedDataPoints: testExposure,
      unresolvedSanitizedDataPoints: [],
      inProgressFixedSanitizedDataPoints: [],
      dataBreachUnresolvedNum: 0,
      dataBreachResolvedNum: 0,
    };

    const exposureReduction = getDataPointReduction(testSummary);
    expect(exposureReduction).toBe(80);
  });
  it("gets exposure reduction number when total exposure is 0", () => {
    const testExposure = {
      // shared
      emailAddresses: 0,
      phoneNumbers: 0,

      // data brokers
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
    };
    const testSummary: DashboardSummary = {
      dataBreachTotalNum: 10,
      dataBreachTotalDataPointsNum: 10,
      dataBreachFixedDataPointsNum: 10,
      dataBrokerTotalNum: 10,
      dataBrokerTotalDataPointsNum: 8,
      dataBrokerAutoFixedDataPointsNum: 8,
      dataBrokerAutoFixedNum: 10,
      dataBrokerInProgressDataPointsNum: 10,
      dataBrokerInProgressNum: 10,
      dataBrokerManuallyResolvedDataPointsNum: 0,
      totalDataPointsNum: 0,
      allDataPoints: testExposure,
      unresolvedDataPoints: testExposure,
      inProgressDataPoints: testExposure,
      fixedDataPoints: testExposure,
      inProgressFixedDataPoints: testExposure,
      unresolvedSanitizedDataPoints: [],
      inProgressFixedSanitizedDataPoints: [],
      dataBreachUnresolvedNum: 0,
      dataBreachResolvedNum: 0,
    };

    const exposureReduction = getDataPointReduction(testSummary);
    expect(exposureReduction).toBe(100);
  });
});

describe("getDashboardSummary", () => {
  // sanity checks
  const noNegativeCounts = (summary: DashboardSummary) => {
    for (const k in summary.unresolvedDataPoints) {
      expect(
        summary.unresolvedDataPoints[k as keyof DataPoints],
      ).toBeGreaterThanOrEqual(0);
    }
    for (const k in summary.fixedDataPoints) {
      expect(
        summary.fixedDataPoints[k as keyof DataPoints],
      ).toBeGreaterThanOrEqual(0);
    }
    for (const k in summary.inProgressDataPoints) {
      expect(
        summary.inProgressDataPoints[k as keyof DataPoints],
      ).toBeGreaterThanOrEqual(0);
    }

    summary.unresolvedSanitizedDataPoints.forEach(
      (unresolvedSanitizedExposure) => {
        Object.values(unresolvedSanitizedExposure).forEach((count) => {
          expect(count).toBeGreaterThanOrEqual(0);
        });
      },
    );

    summary.inProgressFixedSanitizedDataPoints.forEach(
      (inProgressFixedSanitizedExposure) => {
        Object.values(inProgressFixedSanitizedExposure).forEach((count) => {
          expect(count).toBeGreaterThanOrEqual(0);
        });
      },
    );
  };

  it("gets breaches only summary", () => {
    const summary = getDashboardSummary([], unresolvedBreaches);
    noNegativeCounts(summary);
    expect(summary.dataBreachTotalNum).toBe(3);
    expect(summary.dataBreachFixedDataPointsNum).toBe(0);
    expect(summary.dataBrokerTotalNum).toBe(0);
    expect(summary.dataBrokerTotalDataPointsNum).toBe(0);
    expect(summary.dataBrokerAutoFixedNum).toBe(0);
    expect(summary.totalDataPointsNum).toBe(
      summary.dataBreachTotalDataPointsNum,
    );
    expect(summary.dataBrokerInProgressDataPointsNum).toBe(0);
  });

  it("gets breaches only all fixed summary", () => {
    const summary = getDashboardSummary([], allResolvedBreaches);
    noNegativeCounts(summary);
    expect(summary.dataBreachTotalNum).toBe(3);
    expect(summary.dataBrokerTotalNum).toBe(0);
    expect(summary.dataBrokerTotalDataPointsNum).toBe(0);
    expect(summary.dataBrokerAutoFixedNum).toBe(0);
    expect(summary.totalDataPointsNum).toBe(
      summary.dataBreachTotalDataPointsNum,
    );
    expect(summary.totalDataPointsNum).toBe(
      summary.dataBreachFixedDataPointsNum,
    );
    expect(summary.dataBrokerInProgressDataPointsNum).toBe(0);
    expect(summary.unresolvedDataPoints.emailAddresses).toBe(0);
  });

  it("gets scanned results only summary", () => {
    const summary = getDashboardSummary(unresolvedScannedResults, []);
    noNegativeCounts(summary);
    expect(summary.dataBreachTotalNum).toBe(0);
    expect(summary.dataBreachTotalDataPointsNum).toBe(0);
    expect(summary.dataBreachFixedDataPointsNum).toBe(0);
    expect(summary.dataBrokerTotalNum).toBe(1);
    expect(summary.dataBrokerAutoFixedNum).toBe(0);
    expect(summary.totalDataPointsNum).toBe(
      summary.dataBrokerTotalDataPointsNum,
    );
    expect(summary.unresolvedDataPoints.emailAddresses).toBe(
      summary.allDataPoints.emailAddresses,
    );
    expect(summary.unresolvedDataPoints.phoneNumbers).toBe(
      summary.allDataPoints.phoneNumbers,
    );
    expect(summary.unresolvedDataPoints.addresses).toBe(
      summary.allDataPoints.addresses,
    );
    expect(summary.unresolvedDataPoints.familyMembers).toBe(
      summary.allDataPoints.familyMembers,
    );
  });

  it("gets scanned results only all fixed summary", () => {
    const summary = getDashboardSummary(allResolvedScannedResults, []);
    noNegativeCounts(summary);
    expect(summary.dataBreachTotalNum).toBe(0);
    expect(summary.dataBreachTotalDataPointsNum).toBe(0);
    expect(summary.dataBreachFixedDataPointsNum).toBe(0);
    expect(summary.dataBrokerTotalNum).toBe(3);
    expect(summary.totalDataPointsNum).toBe(
      summary.dataBrokerTotalDataPointsNum,
    );
    expect(summary.dataBrokerAutoFixedDataPointsNum).toBe(
      summary.dataBrokerTotalDataPointsNum,
    );
    expect(summary.unresolvedDataPoints.emailAddresses).toBe(0);
  });

  it("gets scanned results in-progress and fixed summary", () => {
    const summary = getDashboardSummary(
      [...allResolvedScannedResults, ...inProgressScannedResults],
      [],
    );
    noNegativeCounts(summary);
    expect(summary.dataBreachTotalNum).toBe(0);
    expect(summary.dataBreachTotalDataPointsNum).toBe(0);
    expect(summary.dataBreachFixedDataPointsNum).toBe(0);
    expect(summary.dataBrokerTotalNum).toBe(4);
    expect(summary.inProgressFixedDataPoints.emailAddresses).toBe(
      summary.inProgressDataPoints.emailAddresses +
        summary.fixedDataPoints.emailAddresses,
    );
    expect(summary.inProgressFixedDataPoints.phoneNumbers).toBe(
      summary.inProgressDataPoints.phoneNumbers +
        summary.fixedDataPoints.phoneNumbers,
    );
    expect(summary.inProgressFixedDataPoints.addresses).toBe(
      summary.inProgressDataPoints.addresses +
        summary.fixedDataPoints.addresses,
    );
    expect(summary.inProgressFixedDataPoints.familyMembers).toBe(
      summary.inProgressDataPoints.familyMembers +
        summary.fixedDataPoints.familyMembers,
    );
    expect(summary.unresolvedDataPoints.emailAddresses).toBe(0);
  });

  it("gets scanned results manually removed summary", () => {
    const summary = getDashboardSummary(manuallyResolvedScannedResults, []);
    noNegativeCounts(summary);
    expect(summary.dataBreachTotalNum).toBe(0);
    expect(summary.dataBreachTotalDataPointsNum).toBe(0);
    expect(summary.dataBreachFixedDataPointsNum).toBe(0);
    expect(summary.dataBrokerTotalNum).toBe(1);
    expect(summary.dataBrokerAutoFixedNum).toBe(0);
    expect(summary.totalDataPointsNum).toBe(
      summary.dataBrokerTotalDataPointsNum,
    );
    expect(summary.dataBrokerManuallyResolvedDataPointsNum).toBe(12);
    expect(summary.unresolvedDataPoints.emailAddresses).toBe(0);
  });

  it("gets mix scanned results & breaches summary", () => {
    const summary = getDashboardSummary(
      unresolvedScannedResults,
      unresolvedBreaches,
    );
    noNegativeCounts(summary);
    expect(summary.dataBreachTotalNum).toBe(3);
    expect(summary.dataBreachTotalDataPointsNum).toBe(8);
    expect(summary.dataBreachFixedDataPointsNum).toBe(0);
    expect(summary.dataBrokerTotalNum).toBe(1);
    expect(summary.dataBrokerTotalDataPointsNum).toBe(12);
    expect(summary.totalDataPointsNum).toBe(
      summary.dataBrokerTotalDataPointsNum +
        summary.dataBreachTotalDataPointsNum,
    );
    expect(summary.unresolvedDataPoints.emailAddresses).toBe(6);
  });

  it("gets mix scanned results & breaches all resolved summary", () => {
    const summary = getDashboardSummary(
      allResolvedScannedResults,
      allResolvedBreaches,
    );
    noNegativeCounts(summary);
    expect(summary.dataBreachTotalNum).toBe(3);
    expect(summary.dataBreachTotalDataPointsNum).toBe(8);
    expect(summary.dataBreachFixedDataPointsNum).toBe(8);
    expect(summary.dataBrokerTotalNum).toBe(3);
    expect(summary.dataBrokerTotalDataPointsNum).toBe(36);
    expect(summary.dataBrokerAutoFixedDataPointsNum).toBe(36);
    expect(summary.dataBrokerInProgressDataPointsNum).toBe(0);
    expect(summary.totalDataPointsNum).toBe(
      summary.dataBreachFixedDataPointsNum +
        summary.dataBrokerAutoFixedDataPointsNum,
    );
    expect(summary.unresolvedDataPoints.emailAddresses).toBe(0);
  });

  it("manuallyResolvedDataBrokerExposures is counted once", () => {
    const combinedScannedResults = [
      ...unresolvedScannedResults,
      ...manuallyResolvedScannedResults,
    ];
    const summary = getDashboardSummary(combinedScannedResults, []);
    noNegativeCounts(summary);
    expect(summary.dataBrokerTotalNum).toBe(2);
    expect(summary.dataBrokerTotalDataPointsNum).toBe(24);
    expect(summary.dataBrokerAutoFixedNum).toBe(0);
    expect(summary.dataBrokerInProgressDataPointsNum).toBe(0);
    expect(summary.dataBrokerManuallyResolvedDataPointsNum).toBe(12);
  });

  it("inProgressFixedSanitizedExposures counts manually resolved exposures", () => {
    const combinedScannedResults = [
      ...unresolvedScannedResults,
      ...manuallyResolvedScannedResults,
    ];
    const expectedSanitizedExposures = [
      {
        "email-addresses": 3,
      },
      {
        "phone-numbers": 3,
      },
      {
        "physical-addresses": 3,
      },
      {
        "family-members-names": 3,
      },
      {
        "other-data-class": 0,
      },
    ];
    const summary = getDashboardSummary(combinedScannedResults, []);
    noNegativeCounts(summary);
    console.log(
      "yay ",
      JSON.stringify(summary.inProgressFixedSanitizedDataPoints),
    );
    expect(summary.inProgressFixedSanitizedDataPoints).toEqual(
      expectedSanitizedExposures,
    );
  });

  it("inProgressFixedExposures counts manually resolved exposures", () => {
    const combinedScannedResults = [
      ...unresolvedScannedResults,
      ...manuallyResolvedScannedResults,
    ];
    const summary = getDashboardSummary(combinedScannedResults, []);
    noNegativeCounts(summary);
    expect(summary.manuallyResolvedDataBrokerDataPoints.passwords).toBe(
      summary.inProgressFixedDataPoints.passwords,
    );
    expect(summary.manuallyResolvedDataBrokerDataPoints.pins).toBe(
      summary.inProgressFixedDataPoints.pins,
    );
    expect(summary.manuallyResolvedDataBrokerDataPoints.phoneNumbers).toBe(
      summary.inProgressFixedDataPoints.phoneNumbers,
    );
  });
});
