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

          const allDataPointCounts: DashboardSummary["allDataPoints"] =
            Object.fromEntries(
              Object.keys(unresolvedDataPointCounts).map((key) => [
                key,
                unresolvedDataPointCounts[key as keyof DataPoints] +
                  resolvedDataPointCounts[key as keyof DataPoints],
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
          const totalDataPointsNum = dataBreachTotalDataPointsNum;

          const expectedSummary: Omit<
            DashboardSummary,
            "fixedSanitizedDataPoints" | "unresolvedSanitizedDataPoints"
          > = {
            allDataPoints: allDataPointCounts,
            unresolvedDataPoints: unresolvedDataPointCounts,
            inProgressDataPoints: inProgressDataPointCounts,
            fixedDataPoints: resolvedDataPointCounts,
            dataBreachTotalNum: dataBreachTotalNum,
            dataBreachResolvedNum: dataBreachResolvedNum,
            dataBreachUnresolvedNum: dataBreachUnresolvedNum,
            dataBreachTotalDataPointsNum: dataBreachTotalDataPointsNum,
            dataBreachFixedDataPointsNum: dataBreachFixedDataPointsNum,
            totalDataPointsNum: totalDataPointsNum,
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

        const breaches = [
          ...getBreachesForCounts(
            expectedSummary.unresolvedDataPoints,
            "unresolved",
          ),
          ...getBreachesForCounts(expectedSummary.fixedDataPoints, "resolved"),
        ];

        const resultingSummary = getDashboardSummary(breaches);

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
  });
});
