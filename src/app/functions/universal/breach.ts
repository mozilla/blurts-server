/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { DataClassEffected } from "../../../utils/subscriberBreaches";

// TODO: Move pure functions that operate on breaches to this file

/**
 * Every kind of data a breach can leak, in Monitor's own kebab-case spelling.
 * This is what we store, what a HibpLikeDbBreach carries, and what our APIs
 * speak. See HibpLabelByDataType for how HIBP spells the same things.
 */
export const BreachDataTypes = {
  Passwords: "passwords",
  Email: "email-addresses",
  SSN: "social-security-numbers",
  CreditCard: "partial-credit-card-data",
  BankAccount: "bank-account-numbers",
  PIN: "pins",
  IP: "ip-addresses",
  Address: "physical-addresses",
  DoB: "dates-of-birth",
  Phone: "phone-numbers",
  SecurityQuestions: "security-questions-and-answers",
  HistoricalPasswords: "historical-passwords",
  General: "general",
} as const;

/**
 * The same data types, spelled the way HIBP spells them. Use these only against
 * a raw HibpGetBreachesResponse. Anything that came from our database already
 * speaks BreachDataTypes, because formatDataClass converts it at ingestion.
 *
 * Keys match BreachDataTypes, so one data type's two spellings line up on one
 * key. This cannot be a transform, the difference is not mechanical: `pins` is
 * `PINs` and `ip-addresses` is `IP addresses`. `General` is ours alone with no
 * HIBP counterpart, hence the Omit.
 */
export const HibpLabelByDataType = {
  Passwords: "Passwords",
  Email: "Email addresses",
  SSN: "Social security numbers",
  CreditCard: "Partial credit card data",
  BankAccount: "Bank account numbers",
  PIN: "PINs",
  IP: "IP addresses",
  Address: "Physical addresses",
  DoB: "Dates of birth",
  Phone: "Phone numbers",
  SecurityQuestions: "Security questions and answers",
  HistoricalPasswords: "Historical passwords",
} as const satisfies Omit<
  Record<keyof typeof BreachDataTypes, string>,
  "General"
>;

/**
 * The subset of BreachDataTypes that Monitor asks a user to act on, and so the
 * only ones that appear in the guided resolution flow and in breach alert
 * emails. The rest are shown as context only.
 */
export const ResolutionRelevantBreachDataTypes = {
  Passwords: BreachDataTypes.Passwords,
  Email: BreachDataTypes.Email,
  SSN: BreachDataTypes.SSN,
  CreditCard: BreachDataTypes.CreditCard,
  BankAccount: BreachDataTypes.BankAccount,
  PIN: BreachDataTypes.PIN,
  IP: BreachDataTypes.IP,
  Phone: BreachDataTypes.Phone,
  SecurityQuestions: BreachDataTypes.SecurityQuestions,
} as const;

export const HighRiskDataTypes = {
  SSN: BreachDataTypes.SSN,
  CreditCard: BreachDataTypes.CreditCard,
  BankAccount: BreachDataTypes.BankAccount,
  PIN: BreachDataTypes.PIN,
} as const;

export const LeakedPasswordsDataTypes = {
  Passwords: BreachDataTypes.Passwords,
  SecurityQuestions: BreachDataTypes.SecurityQuestions,
} as const;

export const SecurityRecommendationDataTypes = {
  Email: BreachDataTypes.Email,
  Phone: BreachDataTypes.Phone,
  IP: BreachDataTypes.IP,
} as const;

export type HibpBreachDataTypes = typeof BreachDataTypes;
export interface BreachBulkResolutionRequest {
  dataType: HibpBreachDataTypes[keyof HibpBreachDataTypes];
}

export function isBreachResolved(
  dataClassesAffected: DataClassEffected[],
  resolvedDataClasses: Array<HibpBreachDataTypes[keyof HibpBreachDataTypes]>,
) {
  return dataClassesAffected.every((dataClassAffected) => {
    const dataClassAffectedKey = Object.keys(
      dataClassAffected,
    )[0] as (typeof BreachDataTypes)[keyof typeof BreachDataTypes];
    return resolvedDataClasses.includes(dataClassAffectedKey);
  });
}
