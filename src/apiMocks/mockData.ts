/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { faker } from "@faker-js/faker";
import { OnerepScanResultRow } from "knex/types/tables";
import {
  RemovalStatus,
  RemovalStatusMap,
} from "../app/functions/universal/scanResult";
import { StateAbbr } from "../utils/states";
import {
  BreachDataTypes,
  HighRiskDataTypes,
} from "../app/functions/universal/breach";
import {
  DataClassEffected,
  SubscriberBreach,
} from "../utils/subscriberBreaches";

// Setting this to a constant value produces the same result when the same methods
// with the same version of faker are called.
// @see https://faker.readthedocs.io/en/master/index.html#seeding-the-generator
const fakerSeed = 123;

// This is a full list of scan results, all pages, and would normally be
// stored in the `onerep_scan_results` table.
export function mockedOneRepScanResults() {
  faker.seed(fakerSeed);
  return {
    data: Array.from({ length: 3 }, () => createRandomScan()),
  };
}

export type RandomScanOptions = Partial<{
  createdDate: Date;
  fakerSeed: number;
  status: RemovalStatus;
}>;

/**
 * Generates scan result with randomly-generated mock data.
 *
 * @param options
 * @returns A single scan result.
 */
export function createRandomScan(
  options: RandomScanOptions = {}
): OnerepScanResultRow {
  faker.seed(options.fakerSeed);
  return {
    id: faker.number.int(),
    onerep_scan_result_id: faker.number.int(),
    onerep_scan_id: faker.number.int(),
    first_name: faker.person.firstName(),
    last_name: faker.person.lastName(),
    middle_name: faker.person.middleName(),
    age: faker.number.int({ min: 14, max: 120 }),
    status:
      options.status ??
      (faker.helpers.arrayElement(
        Object.values(RemovalStatusMap)
      ) as RemovalStatus),
    manually_resolved: faker.datatype.boolean(),
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
    created_at: options.createdDate ?? faker.date.recent({ days: 2 }),
    updated_at: faker.date.recent({ days: 1 }),
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
  const dataClassTypes = options.isHighRiskOnly
    ? HighRiskDataTypes
    : BreachDataTypes;
  const dataClasses = faker.helpers.arrayElements(
    Object.values(dataClassTypes)
  );

  faker.seed(options.fakerSeed);
  return {
    addedDate:
      options.addedDate?.toISOString() ?? faker.date.recent().toISOString(),
    breachDate: faker.date.recent().toISOString(),
    dataClasses: dataClasses,
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
