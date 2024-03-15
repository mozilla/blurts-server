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
import { Session } from "next-auth";
import { HibpLikeDbBreach } from "../utils/hibp";

// Setting this to a constant value produces the same result when the same methods
// with the same version of faker are called.
// @see https://faker.readthedocs.io/en/master/index.html#seeding-the-generator
const fakerSeed = 123;

// This is a full list of scan results, all pages, and would normally be
// stored in the `onerep_scan_results` table.
export function mockedOneRepScanResults() {
  faker.seed(fakerSeed);
  return {
    data: Array.from({ length: 3 }, () => createRandomScanResult()),
  };
}

export type RandomScanResultOptions = Partial<{
  createdDate: Date;
  fakerSeed: number;
  status: RemovalStatus;
  manually_resolved: boolean;
}>;

/**
 * Generates scan result with randomly-generated mock data.
 *
 * @param options
 * @returns A single scan result.
 */
export function createRandomScanResult(
  options: RandomScanResultOptions = {},
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
        Object.values(RemovalStatusMap),
      ) as RemovalStatus),
    manually_resolved: options.manually_resolved ?? faker.datatype.boolean(),
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
  dataClasses: SubscriberBreach["dataClasses"];
  addedDate: Date;
  isResolved: boolean;
  dataClassesEffected: DataClassEffected[];
  fakerSeed: number;
  isHighRiskOnly: boolean;
}>;

// TODO: MNTOR-2033 Update this random breach function with new data breach object, and deprecate all BreachMockItems
export function createRandomBreach(
  options: RandomBreachOptions = {},
): SubscriberBreach {
  const dataClassTypes = options.isHighRiskOnly
    ? HighRiskDataTypes
    : BreachDataTypes;
  const dataClasses =
    options.dataClasses ??
    // If no explicit data-classes are passed, but affected data classes *are*,
    // then the affected data classes will be used as the list of data classes:
    (Array.isArray(options.dataClassesEffected)
      ? options.dataClassesEffected
          .map(
            (affectedObj) =>
              Object.keys(affectedObj) as SubscriberBreach["dataClasses"],
          )
          .flat()
      : faker.helpers.arrayElements(Object.values(dataClassTypes)));

  faker.seed(options.fakerSeed);
  const isResolved = options.isResolved ?? faker.datatype.boolean();
  const dataClassesEffected = options.dataClassesEffected ?? [];
  const resolvedDataClasses = isResolved ? dataClasses : [];

  return {
    addedDate: options.addedDate ?? faker.date.recent(),
    breachDate: faker.date.recent(),
    dataClasses: dataClasses,
    resolvedDataClasses,
    description: faker.word.words(),
    domain: faker.internet.domainName(),
    id: faker.number.int(),
    favIconUrl: faker.system.fileName(),
    modifiedDate: faker.date.recent(),
    name: faker.word.noun(),
    title: faker.word.noun(),
    emailsAffected: Array.from({ length: 3 }, () => faker.internet.email()),
    isResolved,
    dataClassesEffected,
  };
}

export function createUserWithPremiumSubscription(): Session["user"] {
  return {
    email: "example@example.com",
    fxa: {
      locale: "us",
      twoFactorAuthentication: false,
      metricsEnabled: false,
      avatar: "https://profile.stage.mozaws.net/v1/avatar/e",
      avatarDefault: true,
      subscriptions: ["monitor"],
    },
  };
}

export function createRandomHibpListing(
  fixedData: Partial<HibpLikeDbBreach> = {},
): HibpLikeDbBreach {
  const breachDate = faker.date.recent({ days: 1000 });
  const addedDate = faker.date.between({ from: breachDate, to: Date.now() });
  const title = faker.company.name();
  const name = title.replaceAll(" ", "");
  const possibleDataClasses = [
    ...Object.values(BreachDataTypes).filter(
      (dataClass) => dataClass !== "general",
    ),
    // `BreachDataTypes` only enumers our priority data types, so ensure that,
    // like real breaches, the mock data sometimes also includes breached data
    // classes that are not part of our high-priority ones:
    "astrological-signs",
    "cryptocurrency-wallet-hashes",
    "device-serial-numbers",
    "ethnicities",
    "hiv-statuses",
  ];
  return {
    AddedDate: addedDate,
    BreachDate: breachDate.toISOString(),
    DataClasses: faker.helpers.arrayElements(possibleDataClasses),
    Description: faker.lorem.sentence(),
    Domain: faker.internet.domainName(),
    Id: faker.number.int(),
    IsFabricated: faker.datatype.boolean(),
    IsMalware: faker.datatype.boolean(),
    IsRetired: faker.datatype.boolean(),
    IsSensitive: faker.datatype.boolean(),
    IsSpamList: faker.datatype.boolean(),
    IsVerified: faker.datatype.boolean(),
    LogoPath: "unused",
    ModifiedDate: faker.date.between({ from: addedDate, to: Date.now() }),
    Name: name,
    PwnCount: faker.number.int(),
    Title: title,
    FaviconUrl: faker.helpers.maybe(() =>
      faker.image.url({
        height: faker.number.int({ min: 20, max: 36 }),
        width: faker.number.int({ min: 20, max: 36 }),
      }),
    ),
    ...fixedData,
  };
}
