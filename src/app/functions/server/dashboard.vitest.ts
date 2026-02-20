/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import * as fc from "fast-check";
import {
  DashboardSummary,
  getDashboardSummary,
  DataPoints,
  dataClassKeyMap,
} from "./dashboard";
import { SubscriberBreach } from "../../../utils/subscriberBreaches";

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
    const summary = getDashboardSummary(unresolvedBreaches);
    noNegativeCounts(summary);
    expect(summary.dataBreachTotalNum).toBe(3);
    expect(summary.dataBreachFixedDataPointsNum).toBe(0);
    expect(summary.totalDataPointsNum).toBe(
      summary.dataBreachTotalDataPointsNum,
    );
  });

  it("gets breaches only all fixed summary", () => {
    const summary = getDashboardSummary(allResolvedBreaches);
    noNegativeCounts(summary);
    expect(summary.dataBreachTotalNum).toBe(3);
    expect(summary.totalDataPointsNum).toBe(
      summary.dataBreachTotalDataPointsNum,
    );
    expect(summary.totalDataPointsNum).toBe(
      summary.dataBreachFixedDataPointsNum,
    );
    expect(summary.unresolvedDataPoints.emailAddresses).toBe(0);
  });

  describe("property-based tests", () => {
    // Available data class types for breach generation
    const dataClassTypes = Object.keys(
      dataClassKeyMap,
    ) as (keyof typeof dataClassKeyMap)[];

    const outputCountsMatchInputCounts = fc.property(
      // Generate an array of random breaches
      fc.array(
        fc.record({
          // Number of emails affected by this breach (1-20)
          emailCount: fc.integer({ min: 1, max: 20 }),
          dataClasses: fc
            .subarray(dataClassTypes, { minLength: 1, maxLength: 5 })
            .map((classes) => classes.sort()),
          // Which of those data classes are resolved
          // (can only resolve classes that are in the breach)
          resolvedDataClasses: fc
            .subarray(dataClassTypes, { minLength: 0, maxLength: 5 })
            .map((classes) => classes.sort()),
        }),
        { minLength: 0, maxLength: 10 },
      ),
      (breachConfigs) => {
        // Calculate expected counts by simulating the actual logic
        const expectedCounts: DashboardSummary["unresolvedDataPoints"] =
          Object.fromEntries(
            dataClassTypes.map((key) => [key, 0]),
          ) as DashboardSummary["unresolvedDataPoints"];

        const resolvedCounts: DashboardSummary["fixedDataPoints"] =
          Object.fromEntries(
            dataClassTypes.map((key) => [key, 0]),
          ) as DashboardSummary["fixedDataPoints"];

        let totalBreaches = 0;
        let resolvedBreaches = 0;
        let totalDataPoints = 0;
        let fixedDataPoints = 0;

        // Build actual breaches from configs
        const breaches: SubscriberBreach[] = breachConfigs.map(
          (config, idx) => {
            const { emailCount, dataClasses, resolvedDataClasses } = config;

            // Only count classes that are actually in this breach
            const actualResolvedClasses = resolvedDataClasses.filter((dc) =>
              dataClasses.includes(dc),
            );

            const isFullyResolved =
              actualResolvedClasses.length === dataClasses.length &&
              dataClasses.length > 0;

            if (isFullyResolved) {
              resolvedBreaches++;
            }
            totalBreaches++;

            // Update expected counts based on this breach
            dataClasses.forEach((dataClass) => {
              const isResolved = actualResolvedClasses.includes(dataClass);

              // All data classes in this breach count emailCount times
              expectedCounts[dataClass] =
                (expectedCounts[dataClass] || 0) +
                (isResolved ? 0 : emailCount);
              resolvedCounts[dataClass] =
                (resolvedCounts[dataClass] || 0) +
                (isResolved ? emailCount : 0);

              totalDataPoints += emailCount;
              if (isResolved) {
                fixedDataPoints += emailCount;
              }
            });

            // Build actual breach object
            return {
              id: idx,
              addedDate: new Date(),
              breachDate: new Date(),
              dataClasses: dataClasses.map(
                (dc) => dataClassKeyMap[dc],
              ) as SubscriberBreach["dataClasses"],
              dataClassesEffected: dataClasses.map((dc) => ({
                [dataClassKeyMap[dc]]: emailCount,
              })),
              description: "",
              domain: `breach${idx}.com`,
              emailsAffected: Array(emailCount).fill(`test${idx}@example.com`),
              favIconUrl: "",
              modifiedDate: new Date(),
              name: `Breach ${idx}`,
              resolvedDataClasses: actualResolvedClasses.map(
                (dc) => dataClassKeyMap[dc],
              ) as SubscriberBreach["resolvedDataClasses"],
              isResolved: isFullyResolved,
              title: `Breach ${idx}`,
            };
          },
        );

        // Get actual summary from function
        const actualSummary = getDashboardSummary(breaches);

        // Verify counts match
        dataClassTypes.forEach((dataClass) => {
          // eslint-disable-next-line vitest/no-standalone-expect
          expect(actualSummary.unresolvedDataPoints[dataClass]).toBe(
            expectedCounts[dataClass],
          );
          // eslint-disable-next-line vitest/no-standalone-expect
          expect(actualSummary.fixedDataPoints[dataClass]).toBe(
            resolvedCounts[dataClass],
          );
        });

        // eslint-disable-next-line vitest/no-standalone-expect
        expect(actualSummary.dataBreachTotalNum).toBe(totalBreaches);
        // eslint-disable-next-line vitest/no-standalone-expect
        expect(actualSummary.dataBreachResolvedNum).toBe(resolvedBreaches);
        // eslint-disable-next-line vitest/no-standalone-expect
        expect(actualSummary.dataBreachTotalDataPointsNum).toBe(
          totalDataPoints,
        );
        // eslint-disable-next-line vitest/no-standalone-expect
        expect(actualSummary.dataBreachFixedDataPointsNum).toBe(
          fixedDataPoints,
        );
      },
    );

    // The `expect` is called in `outputCountsMatchInputCounts`
    // eslint-disable-next-line vitest/expect-expect
    it("returns the number of exposures that we put in", () => {
      fc.assert(outputCountsMatchInputCounts);
    });

    // The `expect` is called in `outputCountsMatchInputCounts`
    // eslint-disable-next-line vitest/expect-expect
    it("also counts bank account number breaches", () => {
      fc.assert(outputCountsMatchInputCounts);
    });

    // The `expect` is called in `outputCountsMatchInputCounts`
    // eslint-disable-next-line vitest/expect-expect
    it("also counts credit card breaches", () => {
      fc.assert(outputCountsMatchInputCounts);
    });
  });
});
