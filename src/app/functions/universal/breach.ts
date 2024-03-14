/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { DataClassEffected } from "../../../utils/subscriberBreaches";

// TODO: Move pure functions that operate on breaches to this file

export interface Breach {
  AddedDate: string;
  BreachDate: string;
  DataClasses: Array<string>;
  Description: string;
  Domain: string;
  Id: number;
  IsFabricated: boolean;
  IsMalware: boolean;
  IsResolved?: boolean;
  IsRetired: boolean;
  IsSensitive: boolean;
  IsSpamList: boolean;
  IsVerified: boolean;
  LogoPath: string;
  ModifiedDate: string;
  Name: string;
  PwnCount: number;
  recencyIndex: number;
  ResolutionsChecked: Array<string>;
  Title: string;
}

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
