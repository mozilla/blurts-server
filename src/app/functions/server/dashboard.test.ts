/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { OnerepScanResultRow } from "knex/types/tables";
import {
  DashboardSummary,
  getDashboardSummary,
  getExposureReduction,
} from "./dashboard";
import { SubscriberBreach } from "../../../utils/subscriberBreaches";

it("getExposureReduction: get exposure reduction number", () => {
  const testExposure = {
    // shared
    emailAddresses: 0,
    phoneNumbers: 0,

    // data brokers
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
  };
  const testSummary: DashboardSummary = {
    dataBreachTotalNum: 10,
    dataBreachTotalExposuresNum: 10,
    dataBreachFixedExposuresNum: 10,
    dataBrokerTotalNum: 10,
    dataBrokerTotalExposuresNum: 10,
    dataBrokerFixedExposuresNum: 10,
    dataBrokerInProgressExposuresNum: 10,
    totalExposures: 10,
    allExposures: testExposure,
    sanitizedExposures: [],
    fixedExposures: testExposure,
    fixedSanitizedExposures: [],
  };

  const exposureReduction = getExposureReduction(testSummary, []);
  expect(exposureReduction).toBe(0);
});

it("getDashboardSummary: get breaches only summary", () => {
  const testScannedResults: OnerepScanResultRow[] = [];
  const testUserBreaches: SubscriberBreach[] = [
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
      favIconUrl: null,
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
  const summary = getDashboardSummary(testScannedResults, testUserBreaches);
  expect(summary.dataBreachTotalNum).toBe(3);
  expect(summary.dataBreachFixedExposuresNum).toBe(0);
  expect(summary.dataBrokerTotalNum).toBe(0);
  expect(summary.dataBrokerTotalExposuresNum).toBe(0);
  expect(summary.dataBrokerFixedExposuresNum).toBe(0);
  expect(summary.totalExposures).toBe(summary.dataBreachTotalExposuresNum);
});

it("get: scanned results only summary", () => {
  const testScannedResults: OnerepScanResultRow[] = [
    {
      id: 1,
      onerep_scan_result_id: 11238,
      onerep_scan_id: 1594,
      link: "http://arivify.com/rerum-voluptas-dolores-et-et-neque-et",
      age: null,
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
      middle_name: null,
      last_name: "j",
      status: "new",
      created_at: "2023-09-26T16:59:04.046Z",
      updated_at: "2023-09-26T16:59:04.046Z",
      manually_resolved: false,
    },
    {
      id: 2,
      onerep_scan_result_id: 11237,
      onerep_scan_id: 1594,
      link: "http://ussearch.com/ab-dolore-voluptatem-accusamus-facilis",
      age: null,
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
      middle_name: null,
      last_name: "j",
      status: "new",
      created_at: "2023-09-26T16:59:04.046Z",
      updated_at: "2023-09-26T16:59:04.046Z",
      manually_resolved: false,
    },
    {
      id: 3,
      onerep_scan_result_id: 11236,
      onerep_scan_id: 1594,
      link: "http://instantcheckmate.com/sit-praesentium-voluptate-a-voluptas-quo-sapiente",
      age: null,
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
      middle_name: null,
      last_name: "j",
      status: "new",
      created_at: "2023-09-26T16:59:04.046Z",
      updated_at: "2023-09-26T16:59:04.046Z",
      manually_resolved: false,
    },
    {
      id: 4,
      onerep_scan_result_id: 11235,
      onerep_scan_id: 1594,
      link: "http://truthfinder.com/quidem-consequatur-quia-soluta-eos-quia-et",
      age: null,
      data_broker: "truthfinder.com",
      data_broker_id: 10,
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
      middle_name: null,
      last_name: "j",
      status: "new",
      created_at: "2023-09-26T16:59:04.046Z",
      updated_at: "2023-09-26T16:59:04.046Z",
      manually_resolved: false,
    },
    {
      id: 5,
      onerep_scan_result_id: 11234,
      onerep_scan_id: 1594,
      link: "http://smartbackgroundchecks.com/assumenda-quia-unde-ratione-quam-possimus-tempora-perspiciatis",
      age: null,
      data_broker: "smartbackgroundchecks.com",
      data_broker_id: 6,
      emails: [
        "gorczany.johnnie@okeefe.org",
        "vivianne.lindgren@yahoo.com",
        "ulesch@labadie.net",
      ],
      phones: ["+4572646750628", "+7727647145094", "+3753422035375"],
      addresses: [
        {
          zip: "93925-4394",
          city: "Seaside",
          state: "CA",
          street: "Bradley Groves",
        },
        {
          zip: "48491",
          city: "Armstrongside",
          state: "NC",
          street: "Giovani Union",
        },
        {
          zip: "85715",
          city: "Port Walkerton",
          state: "LA",
          street: "Okuneva Locks",
        },
      ],
      relatives: ["Lori Heathcote", "Sebastian Miller", "Alfonso Dietrich"],
      first_name: "j",
      middle_name: null,
      last_name: "j",
      status: "new",
      created_at: "2023-09-26T16:59:04.046Z",
      updated_at: "2023-09-26T16:59:04.046Z",
      manually_resolved: false,
    },
    {
      id: 6,
      onerep_scan_result_id: 11233,
      onerep_scan_id: 1594,
      link: "http://privateeye.com/et-aperiam-velit-temporibus-officia-sint-eos-temporibus-aliquid",
      age: null,
      data_broker: "privateeye.com",
      data_broker_id: 5,
      emails: [
        "gorczany.johnnie@okeefe.org",
        "vivianne.lindgren@yahoo.com",
        "ulesch@labadie.net",
      ],
      phones: ["+4572646750628", "+7727647145094", "+3753422035375"],
      addresses: [
        {
          zip: "93925-4394",
          city: "Seaside",
          state: "CA",
          street: "Bradley Groves",
        },
        {
          zip: "48491",
          city: "Armstrongside",
          state: "NC",
          street: "Giovani Union",
        },
        {
          zip: "85715",
          city: "Port Walkerton",
          state: "LA",
          street: "Okuneva Locks",
        },
      ],
      relatives: ["Lori Heathcote", "Sebastian Miller", "Alfonso Dietrich"],
      first_name: "j",
      middle_name: null,
      last_name: "j",
      status: "new",
      created_at: "2023-09-26T16:59:04.046Z",
      updated_at: "2023-09-26T16:59:04.046Z",
      manually_resolved: false,
    },
    {
      id: 7,
      onerep_scan_result_id: 11232,
      onerep_scan_id: 1594,
      link: "http://peoplefinders.com/dolorem-ab-accusamus-alias-qui-et",
      age: null,
      data_broker: "peoplefinders.com",
      data_broker_id: 4,
      emails: [
        "gorczany.johnnie@okeefe.org",
        "vivianne.lindgren@yahoo.com",
        "ulesch@labadie.net",
      ],
      phones: ["+4572646750628", "+7727647145094", "+3753422035375"],
      addresses: [
        {
          zip: "93925-4394",
          city: "Seaside",
          state: "CA",
          street: "Bradley Groves",
        },
        {
          zip: "48491",
          city: "Armstrongside",
          state: "NC",
          street: "Giovani Union",
        },
        {
          zip: "85715",
          city: "Port Walkerton",
          state: "LA",
          street: "Okuneva Locks",
        },
      ],
      relatives: ["Lori Heathcote", "Sebastian Miller", "Alfonso Dietrich"],
      first_name: "j",
      middle_name: null,
      last_name: "j",
      status: "new",
      created_at: "2023-09-26T16:59:04.046Z",
      updated_at: "2023-09-26T16:59:04.046Z",
      manually_resolved: false,
    },
    {
      id: 8,
      onerep_scan_result_id: 11231,
      onerep_scan_id: 1594,
      link: "http://open-public-records.com/ullam-sapiente-enim-et-facilis-mollitia-culpa",
      age: null,
      data_broker: "open-public-records.com",
      data_broker_id: 3,
      emails: [
        "hilario95@paucek.com",
        "elda35@ullrich.com",
        "corwin.amparo@wintheiser.org",
      ],
      phones: ["+7324997350111", "+2776177024361", "+6056011347431"],
      addresses: [
        {
          zip: "79271",
          city: "Seaside",
          state: "CA",
          street: "Labadie Lake",
        },
        {
          zip: "93731-5672",
          city: "South Renebury",
          state: "PA",
          street: "Kunze Hollow",
        },
        {
          zip: "94279",
          city: "Consueloton",
          state: "OH",
          street: "Colin Village",
        },
      ],
      relatives: ["Arvilla Daniel", "Nellie Moore", "Lilliana O'Connell"],
      first_name: "j",
      middle_name: null,
      last_name: "j",
      status: "new",
      created_at: "2023-09-26T16:59:04.046Z",
      updated_at: "2023-09-26T16:59:04.046Z",
      manually_resolved: false,
    },
    {
      id: 9,
      onerep_scan_result_id: 11230,
      onerep_scan_id: 1594,
      link: "http://peoplesmart.com/cumque-sint-deleniti-cumque-ut-sit-sit-corrupti",
      age: null,
      data_broker: "peoplesmart.com",
      data_broker_id: 2,
      emails: [
        "hilario95@paucek.com",
        "elda35@ullrich.com",
        "corwin.amparo@wintheiser.org",
      ],
      phones: ["+7324997350111", "+2776177024361", "+6056011347431"],
      addresses: [
        {
          zip: "79271",
          city: "Seaside",
          state: "CA",
          street: "Labadie Lake",
        },
        {
          zip: "93731-5672",
          city: "South Renebury",
          state: "PA",
          street: "Kunze Hollow",
        },
        {
          zip: "94279",
          city: "Consueloton",
          state: "OH",
          street: "Colin Village",
        },
      ],
      relatives: ["Arvilla Daniel", "Nellie Moore", "Lilliana O'Connell"],
      first_name: "j",
      middle_name: null,
      last_name: "j",
      status: "new",
      created_at: "2023-09-26T16:59:04.046Z",
      updated_at: "2023-09-26T16:59:04.046Z",
      manually_resolved: false,
    },
    {
      id: 10,
      onerep_scan_result_id: 11229,
      onerep_scan_id: 1594,
      link: "http://beenverified.com/enim-sit-consequatur-nemo-ipsum-sit-mollitia",
      age: null,
      data_broker: "beenverified.com",
      data_broker_id: 1,
      emails: [
        "hilario95@paucek.com",
        "elda35@ullrich.com",
        "corwin.amparo@wintheiser.org",
      ],
      phones: ["+7324997350111", "+2776177024361", "+6056011347431"],
      addresses: [
        {
          zip: "79271",
          city: "Seaside",
          state: "CA",
          street: "Labadie Lake",
        },
        {
          zip: "93731-5672",
          city: "South Renebury",
          state: "PA",
          street: "Kunze Hollow",
        },
        {
          zip: "94279",
          city: "Consueloton",
          state: "OH",
          street: "Colin Village",
        },
      ],
      relatives: ["Arvilla Daniel", "Nellie Moore", "Lilliana O'Connell"],
      first_name: "j",
      middle_name: null,
      last_name: "j",
      status: "new",
      created_at: "2023-09-26T16:59:04.046Z",
      updated_at: "2023-09-26T16:59:04.046Z",
      manually_resolved: false,
    },
  ];
  const testUserBreaches: SubscriberBreach[] = [];
  const summary = getDashboardSummary(testScannedResults, testUserBreaches);
  expect(summary.dataBreachTotalNum).toBe(0);
  expect(summary.dataBreachTotalExposuresNum).toBe(0);
  expect(summary.dataBreachFixedExposuresNum).toBe(0);
  expect(summary.dataBrokerTotalNum).toBe(10);
  expect(summary.dataBrokerFixedExposuresNum).toBe(0);
  expect(summary.totalExposures).toBe(summary.dataBrokerTotalExposuresNum);
});
