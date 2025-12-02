/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import createDbConnection from "../connect";
import { seeds } from "../../test/db";
import { BreachRow } from "knex/types/tables";
import {
  addEmailNotification,
  markEmailAsNotified,
  isSubscriberNotifiedForBreach,
} from "./email_notifications";

describe("email_notifications repository", () => {
  const conn = createDbConnection();
  let insertedBreach: BreachRow;
  beforeEach(async () => {
    insertedBreach = (
      await conn("breaches").insert(seeds.breaches()).returning("*")
    )[0];
  });
  afterEach(async () => {
    await conn.raw(`TRUNCATE TABLE email_notifications CASCADE`);
    await conn.raw(`TRUNCATE TABLE subscribers CASCADE`);
    jest.restoreAllMocks();
  });
  afterAll(async () => {
    await conn.destroy();
  });
  describe("isSubscriberNotifiedForBreach", () => {
    it("returns true if subscriber notified for breach", async () => {
      const subscriber = (
        await conn("subscribers").insert(seeds.subscribers()).returning("*")
      )[0];
      await conn("email_notifications").insert(
        seeds.emailNotifications(subscriber.id, insertedBreach.id, {
          notified: true,
        }),
      );
      const actual = await isSubscriberNotifiedForBreach(
        insertedBreach.id,
        subscriber.id,
      );
      expect(actual).toBe(true);
    });
    it("returns false if subscriber not notified for breach (no record)", async () => {
      const actual = await isSubscriberNotifiedForBreach(
        insertedBreach.id,
        939349911,
      );
      expect(actual).toBe(false);
    });
    it("returns false if subscriber not notified for breach (notification=false)", async () => {
      const subscriber = (
        await conn("subscribers").insert(seeds.subscribers()).returning("*")
      )[0];
      await conn("email_notifications").insert(
        seeds.emailNotifications(subscriber.id, insertedBreach.id, {
          notified: false,
        }),
      );
      const actual = await isSubscriberNotifiedForBreach(
        insertedBreach.id,
        subscriber.id,
      );
      expect(actual).toBe(false);
    });
  });
  describe("addEmailNotification", () => {
    it("creates notification with expected data", async () => {
      jest.spyOn(console, "info").mockReturnValue();
      const subscriber = (
        await conn("subscribers").insert(seeds.subscribers()).returning("*")
      )[0];
      const data = {
        subscriberId: subscriber.id,
        breachId: insertedBreach.id,
        notified: true,
        email: "test@example.com",
        notificationType: "incident",
      };
      const actual = await addEmailNotification(data);
      expect(actual).toMatchObject({
        subscriber_id: data.subscriberId,
        breach_id: data.breachId,
        notified: data.notified,
        email: data.email,
        notification_type: data.notificationType,
      });
    });
    it("does nothing and returns undefined if row already exists", async () => {
      jest.spyOn(console, "info").mockReturnValue();
      const email = "test@example.com";
      const subscriber = (
        await conn("subscribers").insert(seeds.subscribers()).returning("*")
      )[0];
      await conn("email_notifications").insert(
        seeds.emailNotifications(subscriber.id, insertedBreach.id, {
          notified: false,
          email,
        }),
      );
      const data = {
        subscriberId: subscriber.id,
        breachId: insertedBreach.id,
        notified: true,
        email,
        notificationType: "incident",
      };
      const actual = await addEmailNotification(data);
      expect(actual).toBeUndefined();
      const roundTrip = await conn("email_notifications")
        .where("subscriber_id", subscriber.id)
        .andWhere("breach_id", insertedBreach.id)
        .andWhere("email", email)
        .first();
      expect(roundTrip).toMatchObject({ notified: false });
    });
  });
  describe("markEmailAsNotified", () => {
    it("marks email as notified", async () => {
      const email = "test@example.com";
      jest.spyOn(console, "info").mockReturnValue();
      const subscriber = (
        await conn("subscribers").insert(seeds.subscribers()).returning("*")
      )[0];
      await conn("email_notifications").insert(
        seeds.emailNotifications(subscriber.id, insertedBreach.id, {
          notified: false,
          email,
        }),
      );
      await markEmailAsNotified(subscriber.id, insertedBreach.id, email);
      const roundTrip = await conn("email_notifications")
        .where("subscriber_id", subscriber.id)
        .andWhere("breach_id", insertedBreach.id)
        .andWhere("email", email)
        .first();
      expect(roundTrip).toMatchObject({ notified: true });
    });
    it("returns 0 if the row does not exist", async () => {
      jest.spyOn(console, "info").mockReturnValue();
      const res = await markEmailAsNotified(
        1212121212,
        3434234,
        "nothere@example.com",
      );
      expect(res).toEqual(0);
    });
  });
});
