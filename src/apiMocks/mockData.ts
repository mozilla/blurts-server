/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { faker } from "@faker-js/faker";
import { ScanResult } from "../app/functions/server/onerep";
import {
  RemovalStatus,
  RemovalStatusMap,
} from "../app/functions/universal/scanResult";
import { StateAbbr } from "../utils/states";
import { BreachDataTypes } from "../app/functions/universal/breach";
import {
  DataClassEffected,
  SubscriberBreach,
} from "../utils/subscriberBreaches";

// Setting this to a constant value produces the same result when the same methods
// with the same version of faker are called.
// @see https://faker.readthedocs.io/en/master/index.html#seeding-the-generator
const fakerSeed = 123;

// This is a full list of scan results, all pages, and would normally be
// stored in the `onerep_scan_results.onerep_scan_results` column
// as `jsonb`.
export function mockedOneRepScanResults() {
  faker.seed(fakerSeed);
  return {
    data: Array.from({ length: 3 }, () => createRandomScan()),
  };
}

export type RandomScanOptions = Partial<{
  createdDate: Date;
  fakerSeed: number;
}>;

/**
 * Generates scan result with randomly-generated mock data.
 *
 * @param options
 * @returns {ScanResult} - A single scan result.
 */
export function createRandomScan(options: RandomScanOptions = {}): ScanResult {
  faker.seed(options.fakerSeed);
  return {
    id: faker.number.int(),
    profile_id: faker.number.int(),
    first_name: faker.person.firstName(),
    last_name: faker.person.lastName(),
    middle_name: faker.person.middleName(),
    age: faker.number.int({ min: 14, max: 120 }).toString(),
    status: faker.helpers.arrayElement(
      Object.values(RemovalStatusMap)
    ) as RemovalStatus,
    addresses: Array.from({ length: 3 }, () => ({
      zip: faker.location.zipCode(),
      city: faker.location.city(),
      state: faker.location.state({ abbreviated: true }) as StateAbbr,
      street: faker.location.street(),
    })),
    phones: [faker.phone.number()],
    emails: [faker.internet.exampleEmail()],
    relatives: Array.from({ length: 3 }, () => faker.person.fullName()),
    link: faker.internet.url(),
    data_broker: faker.internet.domainName(),
    data_broker_id: faker.number.int(),
    created_at:
      options.createdDate?.toISOString() ??
      faker.date.recent({ days: 2 }).toISOString(),
    updated_at: faker.date.recent({ days: 1 }).toISOString(),
    url: faker.internet.url(),
  };
}

export type RandomBreachOptions = Partial<{
  dataClasses: string[];
  addedDate: Date;
  isResolved: boolean;
  dataClassesEffected: DataClassEffected[];
  fakerSeed: number;
  isHighRiskOnly: boolean;
}>;

// TODO: MNTOR-2033 Update this random breach function with new data breach object, and deprecate all BreachMockItems
export function createRandomBreach(
  options: RandomBreachOptions = {}
): SubscriberBreach {
  faker.seed(options.fakerSeed);
  return {
    addedDate:
      options.addedDate?.toISOString() ?? faker.date.recent().toISOString(),
    breachDate: faker.date.recent().toISOString(),
    dataClasses:
      options.dataClasses ??
      faker.helpers.arrayElements(Object.values(BreachDataTypes)),
    description: faker.word.words(),
    domain: faker.internet.domainName(),
    id: faker.number.int(),
    favIconUrl: faker.system.fileName(),
    modifiedDate: faker.date.recent().toISOString(),
    name: faker.word.noun(),
    title: faker.word.noun(),
    isResolved: options.isResolved ?? faker.datatype.boolean(),
    dataClassesEffected: options.dataClassesEffected ?? [],
  };
}

export function createUserWithPremiumSubscription() {
  return {
    email: "example@example.com",
    fxa: {
      locale: "us",
      twoFactorAuthentication: false,
      metricsEnabled: false,
      avatar: "",
      avatarDefault: true,
      subscriptions: ["monitor"],
    },
  };
}
