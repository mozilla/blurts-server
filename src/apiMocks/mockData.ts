/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { faker } from "@faker-js/faker";
import { AudienceRow } from "knex/types/tables";
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
import { SerializedSubscriber } from "../next-auth";
import { UserAnnouncementWithDetails } from "../db/tables/user_announcements";

export type RandomAnnouncementOptions = Partial<{
  status: string;
  audience: AudienceRow;
  announcement_id: string;
}>;

export function createRandomAnnouncement(
  options: RandomAnnouncementOptions = {},
): UserAnnouncementWithDetails {
  const adjective = faker.word.adjective();

  return {
    id: faker.number.int(),
    announcement_id: options.announcement_id ?? faker.string.alpha(),
    title: `${adjective.replace(/^./, (c) => c.toUpperCase())} new feature on Monitor`,
    description: faker.lorem.sentence(),
    small_image_path: faker.string.alpha(),
    big_image_path: faker.string.alpha(),
    cta_label: "Upgrade now",
    cta_link: faker.internet.url(),
    audience: options.audience ?? ("all_users" as AudienceRow),
    created_at: faker.date.recent({ days: 1 }),
    updated_at: faker.date.recent({ days: 1 }),
    label: "published",
    status: options.status ?? "new",
    seen_at: faker.date.recent({ days: 1 }),
    cleared_at: faker.date.recent({ days: 1 }),
    user_created_at: faker.date.recent({ days: 1 }),
    user_updated_at: faker.date.recent({ days: 1 }),
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

export function createRandomUser(): Session["user"] {
  return {
    email: "example@example.com",
    fxa: {
      locale: "us",
      twoFactorAuthentication: false,
      metricsEnabled: false,
      avatar: "https://profile.stage.mozaws.net/v1/avatar/e",
      avatarDefault: true,
      subscriptions: [],
    },
    subscriber: {
      id: 42,
    } as SerializedSubscriber,
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
    BreachDate: breachDate,
    DataClasses: faker.helpers.arrayElements(possibleDataClasses) as Array<
      (typeof BreachDataTypes)[keyof typeof BreachDataTypes]
    >,
    Description: faker.lorem.sentence(),
    Domain: faker.internet.domainName(),
    Id: faker.number.int({ max: 2147483647 }),
    IsFabricated: faker.datatype.boolean(),
    IsMalware: faker.datatype.boolean(),
    IsRetired: faker.datatype.boolean(),
    IsSensitive: faker.datatype.boolean(),
    IsSpamList: faker.datatype.boolean(),
    IsVerified: faker.datatype.boolean(),
    LogoPath: "unused",
    ModifiedDate: faker.date.between({ from: addedDate, to: Date.now() }),
    Name: name,
    PwnCount: faker.number.int({ max: 2147483647 }),
    Title: title,
    FaviconUrl: faker.helpers.maybe(() => {
      const dimension = faker.number.int({ min: 20, max: 36 });
      return faker.image.url({
        height: dimension,
        width: dimension,
      });
    }),
    ...fixedData,
  };
}
