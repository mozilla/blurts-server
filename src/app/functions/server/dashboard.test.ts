/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { OnerepScanResultDataBrokerRow } from "knex/types/tables";
import * as fc from "fast-check";
import {
  DashboardSummary,
  getDashboardSummary,
  getDataPointReduction,
  DataPoints,
  dataClassKeyMap,
} from "./dashboard";
import { SubscriberBreach } from "../../../utils/subscriberBreaches";
import { RemovalStatus, RemovalStatusMap } from "../universal/scanResult";
import { faker } from "@faker-js/faker";

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
const unresolvedScannedResults: OnerepScanResultDataBrokerRow[] = [
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
    broker_status: "active",
    scan_result_status: "optout_in_progress",
    url: faker.internet.url(),
  },
];
const inProgressScannedResults: OnerepScanResultDataBrokerRow[] = [
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
    broker_status: "active",
    scan_result_status: "optout_in_progress",
    url: faker.internet.url(),
  },
];
const manuallyResolvedScannedResults: OnerepScanResultDataBrokerRow[] = [
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
    broker_status: "active",
    scan_result_status: "optout_in_progress",
    url: faker.internet.url(),
  },
];
const allResolvedScannedResults: OnerepScanResultDataBrokerRow[] = [
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
    broker_status: "active",
    scan_result_status: "optout_in_progress",
    url: faker.internet.url(),
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
    broker_status: "active",
    scan_result_status: "optout_in_progress",
    url: faker.internet.url(),
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
    broker_status: "active",
    scan_result_status: "optout_in_progress",
    url: faker.internet.url(),
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
    resolvedDataClasses: ["email-addresses", "ip-addresses", "passwords"],
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
      manuallyResolvedDataBrokerDataPoints: testExposure,
      unresolvedSanitizedDataPoints: [],
      fixedSanitizedDataPoints: [],
      dataBreachUnresolvedNum: 0,
      dataBreachResolvedNum: 0,
      dataBrokerManuallyResolvedNum: 0,
      dataBrokerRemovalUnderMaintenance: 0,
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
      manuallyResolvedDataBrokerDataPoints: testExposure,
      unresolvedSanitizedDataPoints: [],
      fixedSanitizedDataPoints: [],
      dataBreachUnresolvedNum: 0,
      dataBreachResolvedNum: 0,
      dataBrokerManuallyResolvedNum: 0,
      dataBrokerRemovalUnderMaintenance: 0,
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

    summary.fixedSanitizedDataPoints.forEach((fixedSanitizedExposure) => {
      Object.values(fixedSanitizedExposure).forEach((count) => {
        expect(count).toBeGreaterThanOrEqual(0);
      });
    });
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
    expect(summary.fixedDataPoints.emailAddresses).toBe(
      summary.fixedDataPoints.emailAddresses,
    );
    expect(summary.fixedDataPoints.phoneNumbers).toBe(
      summary.fixedDataPoints.phoneNumbers,
    );
    expect(summary.fixedDataPoints.addresses).toBe(
      summary.fixedDataPoints.addresses,
    );
    expect(summary.fixedDataPoints.familyMembers).toBe(
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

  it("fixedSanitizedExposures counts manually resolved exposures", () => {
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
    expect(summary.fixedSanitizedDataPoints).toEqual(
      expectedSanitizedExposures,
    );
  });

  it("fixedSanitizedDataPoints counts manually resolved exposures", () => {
    const combinedScannedResults = [
      ...unresolvedScannedResults,
      ...manuallyResolvedScannedResults,
    ];
    const summary = getDashboardSummary(combinedScannedResults, []);
    noNegativeCounts(summary);
    const getSanitizedDataPoint = (
      dataPoint: (typeof dataClassKeyMap)[keyof typeof dataClassKeyMap],
    ) => {
      const sanitizedDataPoint = summary.fixedSanitizedDataPoints.find(
        (fixedData) => dataPoint in fixedData,
      );
      return sanitizedDataPoint?.[dataPoint] ?? 0;
    };
    expect(summary.manuallyResolvedDataBrokerDataPoints.emailAddresses).toBe(
      getSanitizedDataPoint(dataClassKeyMap.emailAddresses),
    );
    expect(summary.manuallyResolvedDataBrokerDataPoints.phoneNumbers).toBe(
      getSanitizedDataPoint(dataClassKeyMap.phoneNumbers),
    );
    expect(summary.manuallyResolvedDataBrokerDataPoints.addresses).toBe(
      getSanitizedDataPoint(dataClassKeyMap.addresses),
    );
  });

  describe("property-based tests", () => {
    function getBreach(
      resolution: "unresolved" | "resolved",
      dataPoint: SubscriberBreach["dataClasses"][number],
      count: number,
    ): SubscriberBreach {
      return {
        addedDate: new Date(),
        breachDate: new Date(),
        dataClasses: [dataPoint],
        // TODO: Multiple data classes in a single breach?
        dataClassesEffected: [{ [dataPoint]: count }],
        description: "",
        domain: "",
        emailsAffected: Array(count).fill("test@example.com"),
        favIconUrl: "",
        id: 0,
        modifiedDate: new Date(),
        name: "",
        resolvedDataClasses: resolution === "resolved" ? [dataPoint] : [],
        isResolved: resolution === "resolved",
        title: "",
      };
    }

    function getScanResult(
      resolution:
        | "unresolved"
        | "in-progress"
        | "auto-resolved"
        | "manually-resolved",
      dataPoint:
        | "emailAddresses"
        | "phoneNumbers"
        | "addresses"
        | "familyMembers",
      count: number,
    ): OnerepScanResultDataBrokerRow {
      return {
        addresses:
          dataPoint === "addresses"
            ? Array(count).fill({
                city: "Tulsa",
                state: "OK",
              })
            : [],
        created_at: new Date(),
        data_broker: "",
        data_broker_id: 0,
        emails: dataPoint === "emailAddresses" ? Array(count).fill("") : [],
        first_name: "",
        id: 0,
        last_name: "",
        link: "",
        manually_resolved: resolution === "manually-resolved",
        onerep_scan_id: 0,
        onerep_scan_result_id: 0,
        phones: dataPoint === "phoneNumbers" ? Array(count).fill("") : [],
        relatives: dataPoint === "familyMembers" ? Array(count).fill("") : [],
        status:
          resolution === "auto-resolved"
            ? "removed"
            : resolution === "in-progress"
              ? "optout_in_progress"
              : "new",
        updated_at: new Date(),
        broker_status: "active",
        scan_result_status: "optout_in_progress",
        url: faker.internet.url(),
      };
    }

    // We'll generate breaches with 7 different types of exposed data
    // points, each of which can be in one of two states (unresolved, resolved):
    const breachDataPointCountsToGenerate = 2 * 7;
    // We'll generate scan results with 4 different types of exposed data
    // points, each of which can be in one of four states (unresolved, in
    // progress, auto-resolved or manually resolved):
    const scanResultDataPointCountsToGenerate = 4 * 4;
    const outputCountsMatchInputCounts = fc.property(
      fc
        .tuple(
          fc.array(fc.integer({ min: 0, max: 20 }), {
            minLength: breachDataPointCountsToGenerate,
            maxLength: breachDataPointCountsToGenerate,
          }),
          fc.array(fc.integer({ min: 0, max: 20 }), {
            minLength: scanResultDataPointCountsToGenerate,
            maxLength: scanResultDataPointCountsToGenerate,
          }),
        )
        .map(([breachDataPointCounts, scanResultDataPointCounts]) => {
          const unresolvedDataPointCounts: DashboardSummary["unresolvedDataPoints"] =
            {
              emailAddresses: scanResultDataPointCounts[0],
              phoneNumbers: scanResultDataPointCounts[1],
              addresses: scanResultDataPointCounts[2],
              familyMembers: scanResultDataPointCounts[3],

              socialSecurityNumbers: breachDataPointCounts[0],
              ipAddresses: breachDataPointCounts[1],
              passwords: breachDataPointCounts[2],
              creditCardNumbers: breachDataPointCounts[3],
              pins: breachDataPointCounts[4],
              securityQuestions: breachDataPointCounts[5],
              bankAccountNumbers: breachDataPointCounts[6],
            };
          const resolvedDataPointCounts: DashboardSummary["fixedDataPoints"] = {
            emailAddresses: scanResultDataPointCounts[4],
            phoneNumbers: scanResultDataPointCounts[5],
            addresses: scanResultDataPointCounts[6],
            familyMembers: scanResultDataPointCounts[7],

            socialSecurityNumbers: breachDataPointCounts[7],
            ipAddresses: breachDataPointCounts[8],
            passwords: breachDataPointCounts[9],
            creditCardNumbers: breachDataPointCounts[10],
            pins: breachDataPointCounts[11],
            securityQuestions: breachDataPointCounts[12],
            bankAccountNumbers: breachDataPointCounts[13],
          };
          const inProgressDataPointCounts: DashboardSummary["inProgressDataPoints"] =
            {
              emailAddresses: scanResultDataPointCounts[8],
              phoneNumbers: scanResultDataPointCounts[9],
              addresses: scanResultDataPointCounts[10],
              familyMembers: scanResultDataPointCounts[11],

              socialSecurityNumbers: 0,
              ipAddresses: 0,
              passwords: 0,
              creditCardNumbers: 0,
              pins: 0,
              securityQuestions: 0,
              bankAccountNumbers: 0,
            };
          const manuallyResolvedDataPointCounts: DashboardSummary["manuallyResolvedDataBrokerDataPoints"] =
            {
              emailAddresses: scanResultDataPointCounts[12],
              phoneNumbers: scanResultDataPointCounts[13],
              addresses: scanResultDataPointCounts[14],
              familyMembers: scanResultDataPointCounts[15],

              socialSecurityNumbers: 0,
              ipAddresses: 0,
              passwords: 0,
              creditCardNumbers: 0,
              pins: 0,
              securityQuestions: 0,
              bankAccountNumbers: 0,
            };
          const allDataPointCounts: DashboardSummary["allDataPoints"] =
            Object.fromEntries(
              Object.keys(unresolvedDataPointCounts).map((key) => [
                key,
                unresolvedDataPointCounts[key as keyof DataPoints] +
                  resolvedDataPointCounts[key as keyof DataPoints] +
                  inProgressDataPointCounts[key as keyof DataPoints] +
                  manuallyResolvedDataPointCounts[key as keyof DataPoints],
              ]),
            ) as DataPoints;

          function countTotalDataPoints(
            counts: DataPoints,
            type: "breach" | "scan-result",
          ): number {
            return type === "scan-result"
              ? counts.emailAddresses +
                  counts.phoneNumbers +
                  counts.addresses +
                  counts.familyMembers
              : counts.socialSecurityNumbers +
                  counts.ipAddresses +
                  counts.passwords +
                  counts.creditCardNumbers +
                  counts.pins +
                  counts.securityQuestions +
                  counts.bankAccountNumbers;
          }

          function countTotalExposures(
            counts: DataPoints,
            type: "breach" | "scan-result",
          ): number {
            const pointCounts =
              type === "scan-result"
                ? [
                    counts.emailAddresses,
                    counts.phoneNumbers,
                    counts.addresses,
                    counts.familyMembers,
                  ]
                : [
                    counts.socialSecurityNumbers,
                    counts.ipAddresses,
                    counts.passwords,
                    counts.creditCardNumbers,
                    counts.pins,
                    counts.securityQuestions,
                    counts.bankAccountNumbers,
                  ];

            return pointCounts.filter((count) => count > 0).length;
          }

          const dataBreachResolvedNum = countTotalExposures(
            resolvedDataPointCounts,
            "breach",
          );
          const dataBreachUnresolvedNum = countTotalExposures(
            unresolvedDataPointCounts,
            "breach",
          );
          const dataBreachTotalNum =
            dataBreachResolvedNum + dataBreachUnresolvedNum;
          const dataBreachFixedDataPointsNum = countTotalDataPoints(
            resolvedDataPointCounts,
            "breach",
          );
          const dataBreachTotalDataPointsNum = countTotalDataPoints(
            allDataPointCounts,
            "breach",
          );
          const dataBrokerAutoFixedNum = countTotalExposures(
            resolvedDataPointCounts,
            "scan-result",
          );
          const dataBrokerAutoFixedDataPointsNum = countTotalDataPoints(
            resolvedDataPointCounts,
            "scan-result",
          );
          const dataBrokerInProgressNum = countTotalExposures(
            inProgressDataPointCounts,
            "scan-result",
          );
          const dataBrokerInProgressDataPointsNum = countTotalDataPoints(
            inProgressDataPointCounts,
            "scan-result",
          );
          const dataBrokerManuallyResolvedNum = countTotalExposures(
            manuallyResolvedDataPointCounts,
            "scan-result",
          );
          const dataBrokerManuallyResolvedDataPointsNum = countTotalDataPoints(
            manuallyResolvedDataPointCounts,
            "scan-result",
          );
          const dataBrokerUnresolvedNum = countTotalExposures(
            unresolvedDataPointCounts,
            "scan-result",
          );
          const dataBrokerUnresolvedDataPointsNum = countTotalDataPoints(
            unresolvedDataPointCounts,
            "scan-result",
          );
          const dataBrokerTotalNum =
            dataBrokerUnresolvedNum +
            dataBrokerAutoFixedNum +
            dataBrokerInProgressNum +
            dataBrokerManuallyResolvedNum;
          const dataBrokerTotalDataPointsNum =
            dataBrokerUnresolvedDataPointsNum +
            dataBrokerAutoFixedDataPointsNum +
            dataBrokerInProgressDataPointsNum +
            dataBrokerManuallyResolvedDataPointsNum;
          const totalDataPointsNum =
            dataBreachTotalDataPointsNum + dataBrokerTotalDataPointsNum;

          const expectedSummary: Omit<
            DashboardSummary,
            "fixedSanitizedDataPoints" | "unresolvedSanitizedDataPoints"
          > = {
            allDataPoints: allDataPointCounts,
            unresolvedDataPoints: unresolvedDataPointCounts,
            inProgressDataPoints: inProgressDataPointCounts,
            manuallyResolvedDataBrokerDataPoints:
              manuallyResolvedDataPointCounts,
            fixedDataPoints: resolvedDataPointCounts,
            dataBreachTotalNum: dataBreachTotalNum,
            dataBreachResolvedNum: dataBreachResolvedNum,
            dataBreachUnresolvedNum: dataBreachUnresolvedNum,
            dataBreachTotalDataPointsNum: dataBreachTotalDataPointsNum,
            dataBreachFixedDataPointsNum: dataBreachFixedDataPointsNum,
            dataBrokerTotalNum: dataBrokerTotalNum,
            dataBrokerTotalDataPointsNum: dataBrokerTotalDataPointsNum,
            dataBrokerAutoFixedNum: dataBrokerAutoFixedNum,
            dataBrokerAutoFixedDataPointsNum: dataBrokerAutoFixedDataPointsNum,
            dataBrokerInProgressNum: dataBrokerInProgressNum,
            dataBrokerInProgressDataPointsNum:
              dataBrokerInProgressDataPointsNum,
            dataBrokerManuallyResolvedNum: dataBrokerManuallyResolvedNum,
            dataBrokerManuallyResolvedDataPointsNum:
              dataBrokerManuallyResolvedDataPointsNum,
            totalDataPointsNum: totalDataPointsNum,
            dataBrokerRemovalUnderMaintenance: 0,
            // TODO: Figure out what these should be and, when we do, replace
            //       `toMatchObject` by `toStrictEqual`:
            // unresolvedSanitizedDataPoints: [],
            // fixedSanitizedDataPoints: [],
          };

          return expectedSummary;
        }),
      (expectedSummary) => {
        function getBreachesForCounts(
          dataPointCounts: DataPoints,
          resolution: Parameters<typeof getBreach>[0],
        ): SubscriberBreach[] {
          return (
            Object.keys(dataClassKeyMap)
              // While the following data types can also be found in breaches,
              // for these tests we're only generating them for scan results.
              // (Because we start out with the final counts, this way we can
              // avoid double-counting them.)
              .filter(
                (dataType) =>
                  dataType !== "emailAddresses" &&
                  dataType !== "phoneNumbers" &&
                  dataType !== "addresses" &&
                  dataType !== "familyMembers",
              )
              .map((dataType) => {
                const count =
                  dataPointCounts[dataType as keyof DataPoints] ?? 0;

                if (count === 0) {
                  return null;
                }

                return getBreach(
                  resolution,
                  dataClassKeyMap[
                    dataType as keyof DataPoints
                  ] as SubscriberBreach["dataClasses"][number],
                  count,
                );
              })
              .filter((breach) => breach !== null)
          );
        }

        function getScanResultsForCounts(
          dataPointCounts: DataPoints,
          resolution: Parameters<typeof getScanResult>[0],
        ): OnerepScanResultDataBrokerRow[] {
          return (
            [
              "emailAddresses",
              "phoneNumbers",
              "addresses",
              "familyMembers",
            ] as const
          )
            .map((dataType) => {
              const count = dataPointCounts[dataType as keyof DataPoints] ?? 0;

              if (count === 0) {
                return null;
              }

              return getScanResult(resolution, dataType, count);
            })
            .filter((scanResult) => scanResult !== null);
        }

        const scanResults = [
          ...getScanResultsForCounts(
            expectedSummary.unresolvedDataPoints,
            "unresolved",
          ),
          ...getScanResultsForCounts(
            expectedSummary.fixedDataPoints,
            "auto-resolved",
          ),
          ...getScanResultsForCounts(
            expectedSummary.inProgressDataPoints,
            "in-progress",
          ),
          ...getScanResultsForCounts(
            expectedSummary.manuallyResolvedDataBrokerDataPoints,
            "manually-resolved",
          ),
        ];

        const breaches = [
          ...getBreachesForCounts(
            expectedSummary.unresolvedDataPoints,
            "unresolved",
          ),
          ...getBreachesForCounts(expectedSummary.fixedDataPoints, "resolved"),
        ];

        const resultingSummary = getDashboardSummary(scanResults, breaches);

        // This function is included in tests below:
        // eslint-disable-next-line jest/no-standalone-expect
        expect(resultingSummary).toMatchObject(expectedSummary);
      },
    );

    // The `expect` is called in `outputCountsMatchInputCounts`
    // eslint-disable-next-line jest/expect-expect
    it("returns the number of exposures that we put in", () => {
      fc.assert(outputCountsMatchInputCounts);
    });

    // The `expect` is called in `outputCountsMatchInputCounts`
    // eslint-disable-next-line jest/expect-expect
    it("also counts bank account number breaches", () => {
      fc.assert(outputCountsMatchInputCounts, {
        seed: 2102994438,
        path: "0:0:0:0:0:0:0:0:0:0:0:0:0:1:0:1:1:1:1:1:1:1:1:1:1:1:1:1",
      });
    });

    // The `expect` is called in `outputCountsMatchInputCounts`
    // eslint-disable-next-line jest/expect-expect
    it("also counts credit card breaches", () => {
      fc.assert(outputCountsMatchInputCounts, {
        seed: 1708637594,
        path: "0:0:0:0:0:0:0:0:0:0:0:1:0:0:0:1:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0",
      });
    });

    function getEmptyDashboardSummary(): Omit<
      DashboardSummary,
      "fixedSanitizedDataPoints" | "unresolvedSanitizedDataPoints"
    > {
      const emptyDataPoints = {
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
      };

      return {
        dataBreachTotalNum: 0,
        dataBreachResolvedNum: 0,
        dataBreachUnresolvedNum: 0,
        dataBreachTotalDataPointsNum: 0,
        dataBreachFixedDataPointsNum: 0,
        dataBrokerTotalNum: 0,
        dataBrokerTotalDataPointsNum: 0,
        dataBrokerAutoFixedNum: 0,
        dataBrokerAutoFixedDataPointsNum: 0,
        dataBrokerInProgressNum: 0,
        dataBrokerInProgressDataPointsNum: 0,
        dataBrokerManuallyResolvedNum: 0,
        dataBrokerManuallyResolvedDataPointsNum: 0,
        totalDataPointsNum: 0,
        allDataPoints: emptyDataPoints,
        unresolvedDataPoints: emptyDataPoints,
        inProgressDataPoints: emptyDataPoints,
        fixedDataPoints: emptyDataPoints,
        manuallyResolvedDataBrokerDataPoints: emptyDataPoints,
        dataBrokerRemovalUnderMaintenance: 0,
      };
    }

    it("counts a single manually-resolved scan result as 1", () => {
      const scanResult = getScanResult("manually-resolved", "familyMembers", 1);
      const emptySummary = getEmptyDashboardSummary();

      expect(getDashboardSummary([scanResult], [])).toMatchObject({
        ...emptySummary,
        allDataPoints: {
          ...emptySummary.allDataPoints,
          familyMembers: 1,
        },
        manuallyResolvedDataBrokerDataPoints: {
          ...emptySummary.manuallyResolvedDataBrokerDataPoints,
          familyMembers: 1,
        },
        dataBrokerManuallyResolvedNum: 1,
        dataBrokerManuallyResolvedDataPointsNum: 1,
        dataBrokerTotalNum: 1,
        dataBrokerTotalDataPointsNum: 1,
        totalDataPointsNum: 1,
      });
    });
  });
});
