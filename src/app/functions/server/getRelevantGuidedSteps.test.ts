/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { describe, expect, it } from "@jest/globals";
import {
  getNextGuidedStep,
  hasCompletedStep,
  isEligibleForStep,
} from "./getRelevantGuidedSteps";
import {
  createRandomBreach,
  createRandomScanResult,
} from "../../../apiMocks/mockData";
import { BreachDataTypes } from "../universal/breach";
import { LatestOnerepScanData } from "../../../db/tables/onerep_scans";

describe("getNextGuidedStep", () => {
  it("logs errors in trying to determine the next step", () => {
    const consoleError = jest.spyOn(console, "error").mockImplementation();
    getNextGuidedStep(
      {
        countryCode: "nl",
        latestScanData: {
          scan: null,
          results: [],
        },
        subscriberBreaches: [],
        user: {
          email: "arbitrary@example.com",
        },
      },
      [],
      // This is the step that we should end up at, so by skipping it, we end up
      // in the invalid state we intend to test:
      "Done",
    );

    expect(consoleError).toHaveBeenCalledTimes(1);
    expect(consoleError).toHaveBeenCalledWith(
      "Could not determine the relevant next guided step for the user. Skipping step: [Done]. Is `data.user` defined: [true]. Country code: [nl]. Is `data.latestScanData.scan` defined: [false]. Number of scan results: [0]. Number of breaches: [0].",
    );
  });

  describe("for non-US users", () => {
    it("links back to the dashboard if the user has no breaches", () => {
      expect(
        getNextGuidedStep(
          {
            countryCode: "nl",
            latestScanData: null,
            subscriberBreaches: [],
            user: {
              email: "arbitrary@example.com",
            },
          },
          [],
        ),
      ).toStrictEqual({
        href: "/user/dashboard",
        id: "Done",
        completed: false,
        eligible: true,
      });
    });

    it("links to the Credit Card step if the user's credit card has been breached", () => {
      expect(
        getNextGuidedStep(
          {
            countryCode: "nl",
            latestScanData: null,
            subscriberBreaches: [
              createRandomBreach({
                dataClassesEffected: [{ [BreachDataTypes.CreditCard]: 42 }],
                isResolved: false,
              }),
            ],
            user: {
              email: "arbitrary@example.com",
            },
          },
          [],
        ),
      ).toStrictEqual({
        href: "/user/dashboard/fix/high-risk-data-breaches/credit-card",
        id: "HighRiskCreditCard",
        completed: false,
        eligible: true,
      });
    });

    it("links to the Credit Card step if the user's credit card has been breached, even if the user's bank account was also breached", () => {
      expect(
        getNextGuidedStep(
          {
            countryCode: "nl",
            latestScanData: null,
            subscriberBreaches: [
              createRandomBreach({
                dataClassesEffected: [
                  {
                    [BreachDataTypes.CreditCard]: 42,
                    [BreachDataTypes.BankAccount]: 1337,
                  },
                ],
                isResolved: false,
              }),
            ],
            user: {
              email: "arbitrary@example.com",
            },
          },
          [],
        ),
      ).toStrictEqual({
        href: "/user/dashboard/fix/high-risk-data-breaches/credit-card",
        id: "HighRiskCreditCard",
        completed: false,
        eligible: true,
      });
    });

    it("links to the Credit Card step if the user's credit card has been breached, even if the user's Social Security Number was also breached (because we have no recommendations for non-US SSN breaches)", () => {
      expect(
        getNextGuidedStep(
          {
            countryCode: "nl",
            latestScanData: null,
            subscriberBreaches: [
              createRandomBreach({
                dataClassesEffected: [
                  {
                    [BreachDataTypes.CreditCard]: 42,
                    [BreachDataTypes.SSN]: 1337,
                  },
                ],
                isResolved: false,
              }),
            ],
            user: {
              email: "arbitrary@example.com",
            },
          },
          [],
        ),
      ).toStrictEqual({
        href: "/user/dashboard/fix/high-risk-data-breaches/credit-card",
        id: "HighRiskCreditCard",
        completed: false,
        eligible: true,
      });
    });

    it("links to the Bank Account step if the user's bank account has been breached", () => {
      expect(
        getNextGuidedStep(
          {
            countryCode: "nl",
            latestScanData: null,
            subscriberBreaches: [
              createRandomBreach({
                dataClassesEffected: [{ [BreachDataTypes.BankAccount]: 1337 }],
                isResolved: false,
              }),
            ],
            user: {
              email: "arbitrary@example.com",
            },
          },
          [],
        ),
      ).toStrictEqual({
        href: "/user/dashboard/fix/high-risk-data-breaches/bank-account",
        id: "HighRiskBankAccount",
        completed: false,
        eligible: true,
      });
    });

    it("links to the Bank Account step if the user's bank account has been breached, even if their credit card has also been breached, if the latter has already been resolved", () => {
      expect(
        getNextGuidedStep(
          {
            countryCode: "nl",
            latestScanData: null,
            subscriberBreaches: [
              createRandomBreach({
                dataClassesEffected: [{ [BreachDataTypes.CreditCard]: 42 }],
                isResolved: true,
              }),
              createRandomBreach({
                dataClassesEffected: [{ [BreachDataTypes.BankAccount]: 1337 }],
                isResolved: false,
              }),
            ],
            user: {
              email: "arbitrary@example.com",
            },
          },
          [],
        ),
      ).toStrictEqual({
        href: "/user/dashboard/fix/high-risk-data-breaches/bank-account",
        id: "HighRiskBankAccount",
        completed: false,
        eligible: true,
      });
    });

    it("links to the Bank Account step if the user's bank account has been breached, even if their PIN has also been breached", () => {
      expect(
        getNextGuidedStep(
          {
            countryCode: "nl",
            latestScanData: null,
            subscriberBreaches: [
              createRandomBreach({
                dataClassesEffected: [{ [BreachDataTypes.PIN]: 42 }],
                isResolved: false,
              }),
              createRandomBreach({
                dataClassesEffected: [{ [BreachDataTypes.BankAccount]: 1337 }],
                isResolved: false,
              }),
            ],
            user: {
              email: "arbitrary@example.com",
            },
          },
          [],
        ),
      ).toStrictEqual({
        href: "/user/dashboard/fix/high-risk-data-breaches/bank-account",
        id: "HighRiskBankAccount",
        completed: false,
        eligible: true,
      });
    });

    it("links to the PIN step if the user's PIN has been breached", () => {
      expect(
        getNextGuidedStep(
          {
            countryCode: "nl",
            latestScanData: null,
            subscriberBreaches: [
              createRandomBreach({
                dataClassesEffected: [{ [BreachDataTypes.PIN]: 1337 }],
                isResolved: false,
              }),
            ],
            user: {
              email: "arbitrary@example.com",
            },
          },
          [],
        ),
      ).toStrictEqual({
        href: "/user/dashboard/fix/high-risk-data-breaches/pin",
        id: "HighRiskPin",
        completed: false,
        eligible: true,
      });
    });

    it("links to the password step if the user's password has been breached", () => {
      expect(
        getNextGuidedStep(
          {
            countryCode: "nl",
            latestScanData: null,
            subscriberBreaches: [
              createRandomBreach({
                dataClassesEffected: [{ [BreachDataTypes.Passwords]: 1337 }],
                isResolved: false,
              }),
            ],
            user: {
              email: "arbitrary@example.com",
            },
          },
          [],
        ),
      ).toStrictEqual({
        href: "/user/dashboard/fix/leaked-passwords/passwords",
        id: "LeakedPasswordsPassword",
        completed: false,
        eligible: true,
      });
    });

    it("links to the security questions step if the user's security questions have been breached", () => {
      expect(
        getNextGuidedStep(
          {
            countryCode: "nl",
            latestScanData: null,
            subscriberBreaches: [
              createRandomBreach({
                dataClassesEffected: [
                  { [BreachDataTypes.SecurityQuestions]: 1337 },
                ],
                isResolved: false,
              }),
            ],
            user: {
              email: "arbitrary@example.com",
            },
          },
          [],
        ),
      ).toStrictEqual({
        href: "/user/dashboard/fix/leaked-passwords/security-questions",
        id: "LeakedPasswordsSecurityQuestion",
        completed: false,
        eligible: true,
      });
    });

    it("links to the phone number step if the user's phone number has been breached", () => {
      expect(
        getNextGuidedStep(
          {
            countryCode: "nl",
            latestScanData: null,
            subscriberBreaches: [
              createRandomBreach({
                dataClassesEffected: [{ [BreachDataTypes.Phone]: 1337 }],
                isResolved: false,
              }),
            ],
            user: {
              email: "arbitrary@example.com",
            },
          },
          [],
        ),
      ).toStrictEqual({
        href: "/user/dashboard/fix/security-recommendations/phone",
        id: "SecurityTipsPhone",
        completed: false,
        eligible: true,
      });
    });

    it("links to the email step if the user's email has been breached", () => {
      expect(
        getNextGuidedStep(
          {
            countryCode: "nl",
            latestScanData: null,
            subscriberBreaches: [
              createRandomBreach({
                dataClassesEffected: [{ [BreachDataTypes.Email]: 1337 }],
                isResolved: false,
              }),
            ],
            user: {
              email: "arbitrary@example.com",
            },
          },
          [],
        ),
      ).toStrictEqual({
        href: "/user/dashboard/fix/security-recommendations/email",
        id: "SecurityTipsEmail",
        completed: false,
        eligible: true,
      });
    });

    it("links to the IP step if the user's IP has been breached", () => {
      expect(
        getNextGuidedStep(
          {
            countryCode: "nl",
            latestScanData: null,
            subscriberBreaches: [
              createRandomBreach({
                dataClassesEffected: [{ [BreachDataTypes.IP]: 1337 }],
                isResolved: false,
              }),
            ],
            user: {
              email: "arbitrary@example.com",
            },
          },
          [],
        ),
      ).toStrictEqual({
        href: "/user/dashboard/fix/security-recommendations/ip",
        id: "SecurityTipsIp",
        completed: false,
        eligible: true,
      });
    });
  });

  describe("for US users", () => {
    const completedScan: LatestOnerepScanData = {
      results: [],
      scan: {
        created_at: new Date(),
        updated_at: new Date(),
        id: 42,
        onerep_profile_id: 1337,
        onerep_scan_id: 666,
        onerep_scan_reason: "manual",
        onerep_scan_status: "finished",
      },
    };

    it("links back to the dashboard if the user has no breaches", () => {
      expect(
        getNextGuidedStep(
          {
            countryCode: "us",
            latestScanData: completedScan,
            subscriberBreaches: [],
            user: {
              email: "arbitrary@example.com",
            },
          },
          [],
        ),
      ).toStrictEqual({
        href: "/user/dashboard",
        id: "Done",
        completed: false,
        eligible: true,
      });
    });

    it("links to the scan if the user has not run a scan yet", () => {
      expect(
        getNextGuidedStep(
          {
            countryCode: "us",
            latestScanData: {
              scan: null,
              results: [],
            },
            subscriberBreaches: [],
            user: {
              email: "arbitrary@example.com",
            },
          },
          [],
        ),
      ).toStrictEqual({
        href: "/user/dashboard/fix/data-broker-profiles/start-free-scan",
        id: "Scan",
        completed: false,
        eligible: true,
      });
    });

    it("does not link to the scan even if the user has not run a scan yet, if the `FreeOnly` flag is enabled", () => {
      expect(
        getNextGuidedStep(
          {
            countryCode: "us",
            latestScanData: {
              scan: null,
              results: [],
            },
            subscriberBreaches: [],
            user: {
              email: "arbitrary@example.com",
            },
          },
          ["FreeOnly"],
        ),
      ).not.toMatchObject({
        id: "Scan",
      });
    });

    it("links to the scan if the user has a scan in progress and not all scan results are resolved", () => {
      expect(
        getNextGuidedStep(
          {
            countryCode: "us",
            latestScanData: {
              scan: {
                ...completedScan.scan!,
                onerep_scan_status: "in_progress",
              },
              results: [
                createRandomScanResult({
                  status: "new",
                  manually_resolved: false,
                  broker_status: "active",
                }),
              ],
            },
            subscriberBreaches: [],
            user: {
              email: "arbitrary@example.com",
            },
          },
          [],
        ),
      ).toStrictEqual({
        href: "/user/dashboard/fix/data-broker-profiles/start-free-scan",
        id: "Scan",
        completed: false,
        eligible: true,
      });
    });

    it("links to the scan if the user has a completed scan and not all scan results are resolved", () => {
      expect(
        getNextGuidedStep(
          {
            countryCode: "us",
            latestScanData: {
              scan: {
                ...completedScan.scan!,
                onerep_scan_status: "finished",
              },
              results: [
                createRandomScanResult({
                  status: "new",
                  manually_resolved: false,
                }),
              ],
            },
            subscriberBreaches: [],
            user: {
              email: "arbitrary@example.com",
            },
          },
          [],
        ),
      ).toStrictEqual({
        href: "/user/dashboard/fix/data-broker-profiles/start-free-scan",
        id: "Scan",
        completed: false,
        eligible: true,
      });
    });

    it("does not link to the scan if the user has a completed scan and all scan results are being opted out", () => {
      expect(
        getNextGuidedStep(
          {
            countryCode: "us",
            latestScanData: {
              scan: {
                ...completedScan.scan!,
                onerep_scan_status: "finished",
              },
              results: [
                createRandomScanResult({
                  status: "optout_in_progress",
                  manually_resolved: false,
                }),
              ],
            },
            subscriberBreaches: [],
            user: {
              email: "arbitrary@example.com",
            },
          },
          [],
        ).id,
      ).toBe("Done");
    });

    it("does not link to the scan if the user has a completed scan and all scan results have been removed", () => {
      expect(
        getNextGuidedStep(
          {
            countryCode: "us",
            latestScanData: {
              scan: {
                ...completedScan.scan!,
                onerep_scan_status: "finished",
              },
              results: [
                createRandomScanResult({
                  status: "removed",
                  manually_resolved: false,
                }),
              ],
            },
            subscriberBreaches: [],
            user: {
              email: "arbitrary@example.com",
            },
          },
          [],
        ).id,
      ).toBe("Done");
    });

    it("does not link to the scan if the user has a completed scan and all scan results are waiting for verification", () => {
      expect(
        getNextGuidedStep(
          {
            countryCode: "us",
            latestScanData: {
              scan: {
                ...completedScan.scan!,
                onerep_scan_status: "finished",
              },
              results: [
                createRandomScanResult({
                  status: "waiting_for_verification",
                  manually_resolved: false,
                }),
              ],
            },
            subscriberBreaches: [],
            user: {
              email: "arbitrary@example.com",
            },
          },
          [],
        ).id,
      ).toBe("Done");
    });

    it("does not link to the scan if the user has a completed scan and all scan results are manually resolved", () => {
      expect(
        getNextGuidedStep(
          {
            countryCode: "us",
            latestScanData: {
              scan: {
                ...completedScan.scan!,
                onerep_scan_status: "finished",
              },
              results: [
                createRandomScanResult({
                  status: "new",
                  manually_resolved: true,
                }),
              ],
            },
            subscriberBreaches: [],
            user: {
              email: "arbitrary@example.com",
            },
          },
          [],
        ).id,
      ).toBe("Done");
    });

    it("links to the removal under maintenance step if a user has scan results with a data broker that has a removal under maintenance status", () => {
      expect(
        getNextGuidedStep(
          {
            countryCode: "us",
            latestScanData: {
              scan: {
                ...completedScan.scan!,
                onerep_scan_status: "finished",
              },
              results: [
                createRandomScanResult({
                  status: "optout_in_progress",
                  manually_resolved: false,
                  broker_status: "removal_under_maintenance",
                }),
              ],
            },
            subscriberBreaches: [],
            user: {
              email: "arbitrary@example.com",
            },
          },
          // TODO: MNTOR-3886 - Remove EnableRemovalUnderMaintenanceStep feature flag
          ["EnableRemovalUnderMaintenanceStep"],
        ),
      ).toStrictEqual({
        href: "/user/dashboard/fix/data-broker-profiles/removal-under-maintenance",
        id: "DataBrokerManualRemoval",
        completed: false,
        eligible: true,
      });
    });

    // TODO: MNTOR-3886 - Remove EnableRemovalUnderMaintenanceStep feature flag
    it("does not link to the removal under maintenance step if the feature flag is off", () => {
      expect(
        getNextGuidedStep(
          {
            countryCode: "us",
            latestScanData: {
              scan: {
                ...completedScan.scan!,
                onerep_scan_status: "finished",
              },
              results: [
                createRandomScanResult({
                  status: "optout_in_progress",
                  manually_resolved: false,
                  broker_status: "removal_under_maintenance",
                }),
              ],
            },
            subscriberBreaches: [],
            user: {
              email: "arbitrary@example.com",
            },
          },
          [],
        ).id,
      ).toBe("Done");
    });

    it("returns true when all data brokers that are removal under maintenance are resolved", () => {
      expect(
        hasCompletedStep(
          {
            countryCode: "us",
            latestScanData: {
              scan: {
                ...completedScan.scan!,
                onerep_scan_status: "finished",
              },
              results: [
                createRandomScanResult({
                  manually_resolved: true,
                  status: "optout_in_progress",
                  broker_status: "removal_under_maintenance",
                }),
              ],
            },
            subscriberBreaches: [],
            user: { email: "arbitrary@example.com" },
          },
          "DataBrokerManualRemoval",
          // TODO: MNTOR-3886 - Remove EnableRemovalUnderMaintenanceStep feature flag
          ["EnableRemovalUnderMaintenanceStep"],
        ),
      ).toBe(true);
    });

    it("returns false when data brokers that are removal under maintenance are not resolved", () => {
      expect(
        hasCompletedStep(
          {
            countryCode: "us",
            latestScanData: {
              scan: {
                ...completedScan.scan!,
                onerep_scan_status: "finished",
              },
              results: [
                createRandomScanResult({
                  manually_resolved: false,
                  status: "optout_in_progress",
                  broker_status: "removal_under_maintenance",
                }),
              ],
            },
            subscriberBreaches: [],
            user: { email: "arbitrary@example.com" },
          },
          "DataBrokerManualRemoval",
          // TODO: MNTOR-3886 - Remove EnableRemovalUnderMaintenanceStep feature flag
          ["EnableRemovalUnderMaintenanceStep"],
        ),
      ).toBe(false);
    });

    it("returns true when data brokers that are removal under maintenance are automatically resolved", () => {
      expect(
        hasCompletedStep(
          {
            countryCode: "us",
            latestScanData: {
              scan: {
                ...completedScan.scan!,
                onerep_scan_status: "finished",
              },
              results: [
                createRandomScanResult({
                  manually_resolved: false,
                  status: "removed",
                  broker_status: "removal_under_maintenance",
                }),
              ],
            },
            subscriberBreaches: [],
            user: { email: "arbitrary@example.com" },
          },
          "DataBrokerManualRemoval",
          // TODO: MNTOR-3886 - Remove EnableRemovalUnderMaintenanceStep feature flag
          ["EnableRemovalUnderMaintenanceStep"],
        ),
      ).toBe(true);
    });

    // TODO: MNTOR-3886 - Remove EnableRemovalUnderMaintenanceStep feature flag
    it("returns false when data brokers that are removal under maintenance are resolved, but the flag is off", () => {
      expect(
        hasCompletedStep(
          {
            countryCode: "us",
            latestScanData: {
              scan: {
                ...completedScan.scan!,
                onerep_scan_status: "finished",
              },
              results: [
                createRandomScanResult({
                  manually_resolved: true,
                  status: "optout_in_progress",
                  broker_status: "removal_under_maintenance",
                }),
              ],
            },
            subscriberBreaches: [],
            user: { email: "arbitrary@example.com" },
          },
          "DataBrokerManualRemoval",
          [],
        ),
      ).toBe(false);
    });

    it("is not eligible for step if the data brokers under maintenance is already removed", () => {
      expect(
        isEligibleForStep(
          {
            countryCode: "us",
            latestScanData: {
              scan: {
                ...completedScan.scan!,
                onerep_scan_status: "finished",
              },
              results: [
                createRandomScanResult({
                  manually_resolved: false,
                  status: "removed",
                  broker_status: "removal_under_maintenance",
                }),
              ],
            },
            subscriberBreaches: [],
            user: { email: "arbitrary@example.com" },
          },
          "DataBrokerManualRemoval",
          // TODO: MNTOR-3886 - Remove EnableRemovalUnderMaintenanceStep feature flag
          ["EnableRemovalUnderMaintenanceStep"],
        ),
      ).toBe(false);
    });

    it("is not eligible for step if the data brokers under maintenance is already manually resolved", () => {
      expect(
        isEligibleForStep(
          {
            countryCode: "us",
            latestScanData: {
              scan: {
                ...completedScan.scan!,
                onerep_scan_status: "finished",
              },
              results: [
                createRandomScanResult({
                  manually_resolved: true,
                  status: "optout_in_progress",
                  broker_status: "removal_under_maintenance",
                }),
              ],
            },
            subscriberBreaches: [],
            user: { email: "arbitrary@example.com" },
          },
          "DataBrokerManualRemoval",
          // TODO: MNTOR-3886 - Remove EnableRemovalUnderMaintenanceStep feature flag
          ["EnableRemovalUnderMaintenanceStep"],
        ),
      ).toBe(false);
    });

    it("is not eligible for step if the data brokers under maintenance is already automatically resolved", () => {
      expect(
        isEligibleForStep(
          {
            countryCode: "us",
            latestScanData: {
              scan: {
                ...completedScan.scan!,
                onerep_scan_status: "finished",
              },
              results: [
                createRandomScanResult({
                  manually_resolved: false,
                  status: "removed",
                  broker_status: "removal_under_maintenance",
                }),
              ],
            },
            subscriberBreaches: [],
            user: { email: "arbitrary@example.com" },
          },
          "DataBrokerManualRemoval",
          // TODO: MNTOR-3886 - Remove EnableRemovalUnderMaintenanceStep feature flag
          ["EnableRemovalUnderMaintenanceStep"],
        ),
      ).toBe(false);
    });

    it("is eligible for step if there are valid data brokers under maintenance", () => {
      expect(
        isEligibleForStep(
          {
            countryCode: "us",
            latestScanData: {
              scan: {
                ...completedScan.scan!,
                onerep_scan_status: "finished",
              },
              results: [
                createRandomScanResult({
                  manually_resolved: true,
                  status: "optout_in_progress",
                  broker_status: "removal_under_maintenance",
                }),
                createRandomScanResult({
                  manually_resolved: false,
                  status: "removed",
                  broker_status: "removal_under_maintenance",
                }),
                createRandomScanResult({
                  manually_resolved: false,
                  status: "optout_in_progress",
                  broker_status: "removal_under_maintenance",
                }),
              ],
            },
            subscriberBreaches: [],
            user: { email: "arbitrary@example.com" },
          },
          "DataBrokerManualRemoval",
          ["EnableRemovalUnderMaintenanceStep"],
        ),
      ).toBe(true);
    });

    it("links to the Credit Card step if the user's credit card has been breached", () => {
      expect(
        getNextGuidedStep(
          {
            countryCode: "us",
            latestScanData: completedScan,
            subscriberBreaches: [
              createRandomBreach({
                dataClassesEffected: [{ [BreachDataTypes.CreditCard]: 42 }],
                isResolved: false,
              }),
            ],
            user: {
              email: "arbitrary@example.com",
            },
          },
          [],
        ),
      ).toStrictEqual({
        href: "/user/dashboard/fix/high-risk-data-breaches/credit-card",
        id: "HighRiskCreditCard",
        completed: false,
        eligible: true,
      });
    });

    it("links to the Credit Card step if the user's credit card has been breached, even if the user's bank account was also breached", () => {
      expect(
        getNextGuidedStep(
          {
            countryCode: "us",
            latestScanData: completedScan,
            subscriberBreaches: [
              createRandomBreach({
                dataClassesEffected: [
                  {
                    [BreachDataTypes.CreditCard]: 42,
                    [BreachDataTypes.BankAccount]: 1337,
                  },
                ],
                isResolved: false,
              }),
            ],
            user: {
              email: "arbitrary@example.com",
            },
          },
          [],
        ),
      ).toStrictEqual({
        href: "/user/dashboard/fix/high-risk-data-breaches/credit-card",
        id: "HighRiskCreditCard",
        completed: false,
        eligible: true,
      });
    });

    it("links to the Credit Card step if the user's credit card has been breached, even if the user's Social Security Number was also breached (because we have no recommendations for non-US SSN breaches)", () => {
      expect(
        getNextGuidedStep(
          {
            countryCode: "us",
            latestScanData: completedScan,
            subscriberBreaches: [
              createRandomBreach({
                dataClassesEffected: [
                  {
                    [BreachDataTypes.CreditCard]: 42,
                    [BreachDataTypes.SSN]: 1337,
                  },
                ],
                isResolved: false,
              }),
            ],
            user: {
              email: "arbitrary@example.com",
            },
          },
          [],
        ),
      ).toStrictEqual({
        href: "/user/dashboard/fix/high-risk-data-breaches/credit-card",
        id: "HighRiskCreditCard",
        completed: false,
        eligible: true,
      });
    });

    it("links to the Bank Account step if the user's bank account has been breached", () => {
      expect(
        getNextGuidedStep(
          {
            countryCode: "us",
            latestScanData: completedScan,
            subscriberBreaches: [
              createRandomBreach({
                dataClassesEffected: [{ [BreachDataTypes.BankAccount]: 1337 }],
                isResolved: false,
              }),
            ],
            user: {
              email: "arbitrary@example.com",
            },
          },
          [],
        ),
      ).toStrictEqual({
        href: "/user/dashboard/fix/high-risk-data-breaches/bank-account",
        id: "HighRiskBankAccount",
        completed: false,
        eligible: true,
      });
    });

    it("links to the Bank Account step if the user's bank account has been breached, even if their credit card has also been breached, if the latter has already been resolved", () => {
      expect(
        getNextGuidedStep(
          {
            countryCode: "us",
            latestScanData: completedScan,
            subscriberBreaches: [
              createRandomBreach({
                dataClassesEffected: [{ [BreachDataTypes.CreditCard]: 42 }],
                isResolved: true,
              }),
              createRandomBreach({
                dataClassesEffected: [{ [BreachDataTypes.BankAccount]: 1337 }],
                isResolved: false,
              }),
            ],
            user: {
              email: "arbitrary@example.com",
            },
          },
          [],
        ),
      ).toStrictEqual({
        href: "/user/dashboard/fix/high-risk-data-breaches/bank-account",
        id: "HighRiskBankAccount",
        completed: false,
        eligible: true,
      });
    });

    it("links to the Bank Account step if the user's bank account has been breached, even if their PIN has also been breached", () => {
      expect(
        getNextGuidedStep(
          {
            countryCode: "us",
            latestScanData: completedScan,
            subscriberBreaches: [
              createRandomBreach({
                dataClassesEffected: [{ [BreachDataTypes.PIN]: 42 }],
                isResolved: false,
              }),
              createRandomBreach({
                dataClassesEffected: [{ [BreachDataTypes.BankAccount]: 1337 }],
                isResolved: false,
              }),
            ],
            user: {
              email: "arbitrary@example.com",
            },
          },
          [],
        ),
      ).toStrictEqual({
        href: "/user/dashboard/fix/high-risk-data-breaches/bank-account",
        id: "HighRiskBankAccount",
        completed: false,
        eligible: true,
      });
    });

    it("links to the PIN step if the user's PIN has been breached", () => {
      expect(
        getNextGuidedStep(
          {
            countryCode: "us",
            latestScanData: completedScan,
            subscriberBreaches: [
              createRandomBreach({
                dataClassesEffected: [{ [BreachDataTypes.PIN]: 1337 }],
                isResolved: false,
              }),
            ],
            user: {
              email: "arbitrary@example.com",
            },
          },
          [],
        ),
      ).toStrictEqual({
        href: "/user/dashboard/fix/high-risk-data-breaches/pin",
        id: "HighRiskPin",
        completed: false,
        eligible: true,
      });
    });

    it("links to the password step if the user's password has been breached", () => {
      expect(
        getNextGuidedStep(
          {
            countryCode: "us",
            latestScanData: completedScan,
            subscriberBreaches: [
              createRandomBreach({
                dataClassesEffected: [{ [BreachDataTypes.Passwords]: 1337 }],
                isResolved: false,
              }),
            ],
            user: {
              email: "arbitrary@example.com",
            },
          },
          [],
        ),
      ).toStrictEqual({
        href: "/user/dashboard/fix/leaked-passwords/passwords",
        id: "LeakedPasswordsPassword",
        completed: false,
        eligible: true,
      });
    });

    it("links to the security questions step if the user's security questions have been breached", () => {
      expect(
        getNextGuidedStep(
          {
            countryCode: "us",
            latestScanData: completedScan,
            subscriberBreaches: [
              createRandomBreach({
                dataClassesEffected: [
                  { [BreachDataTypes.SecurityQuestions]: 1337 },
                ],
                isResolved: false,
              }),
            ],
            user: {
              email: "arbitrary@example.com",
            },
          },
          [],
        ),
      ).toStrictEqual({
        href: "/user/dashboard/fix/leaked-passwords/security-questions",
        id: "LeakedPasswordsSecurityQuestion",
        completed: false,
        eligible: true,
      });
    });

    it("links to the phone number step if the user's phone number has been breached", () => {
      expect(
        getNextGuidedStep(
          {
            countryCode: "us",
            latestScanData: completedScan,
            subscriberBreaches: [
              createRandomBreach({
                dataClassesEffected: [{ [BreachDataTypes.Phone]: 1337 }],
                isResolved: false,
              }),
            ],
            user: {
              email: "arbitrary@example.com",
            },
          },
          [],
        ),
      ).toStrictEqual({
        href: "/user/dashboard/fix/security-recommendations/phone",
        id: "SecurityTipsPhone",
        completed: false,
        eligible: true,
      });
    });

    it("links to the email step if the user's email has been breached", () => {
      expect(
        getNextGuidedStep(
          {
            countryCode: "us",
            latestScanData: completedScan,
            subscriberBreaches: [
              createRandomBreach({
                dataClassesEffected: [{ [BreachDataTypes.Email]: 1337 }],
                isResolved: false,
              }),
            ],
            user: {
              email: "arbitrary@example.com",
            },
          },
          [],
        ),
      ).toStrictEqual({
        href: "/user/dashboard/fix/security-recommendations/email",
        id: "SecurityTipsEmail",
        completed: false,
        eligible: true,
      });
    });

    it("links to the IP step if the user's IP has been breached", () => {
      expect(
        getNextGuidedStep(
          {
            countryCode: "us",
            latestScanData: completedScan,
            subscriberBreaches: [
              createRandomBreach({
                dataClassesEffected: [{ [BreachDataTypes.IP]: 1337 }],
                isResolved: false,
              }),
            ],
            user: {
              email: "arbitrary@example.com",
            },
          },
          [],
        ),
      ).toStrictEqual({
        href: "/user/dashboard/fix/security-recommendations/ip",
        id: "SecurityTipsIp",
        completed: false,
        eligible: true,
      });
    });
  });
});
