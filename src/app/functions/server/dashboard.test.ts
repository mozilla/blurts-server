/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { DashboardSummary, getExposureReduction } from "./dashboard";

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
    dataBreachFixedNum: 10,
    dataBrokerTotalNum: 10,
    dataBrokerFixedNum: 10,
    dataBrokerInProgressNum: 10,
    totalExposures: 10,
    allExposures: testExposure,
    sanitizedExposures: [],
    fixedExposures: testExposure,
    fixedSanitizedExposures: [],
  };

  const exposureReduction = getExposureReduction(testSummary, []);
  expect(exposureReduction).toBe(0);
});
