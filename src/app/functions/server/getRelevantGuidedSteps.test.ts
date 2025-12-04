/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { describe, expect, it } from "@jest/globals";
import { getNextGuidedStep } from "./getRelevantGuidedSteps";
import { createRandomBreach } from "../../../apiMocks/mockData";
import { BreachDataTypes } from "../universal/breach";

describe("getNextGuidedStep", () => {
  describe("for non-US users", () => {
    it("links back to the dashboard if the user has no breaches", () => {
      expect(
        getNextGuidedStep(
          {
            countryCode: "nl",
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
