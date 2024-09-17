/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { describe, it, expect } from "@jest/globals";
import { SubscriberRow } from "knex/types/tables";
import { hasPremium } from "./user";
import { Session } from "next-auth";

describe("hasPremium", () => {
  it("returns false if user is undefined", () => {
    expect(hasPremium(undefined)).toBe(false);
  });

  it("returns false when given a row from the `subscribers` table without a Plus subscription", () => {
    const subscriber = {
      fxa_profile_json: {
        subscriptions: ["not-monitor-plus"],
      } as SubscriberRow["fxa_profile_json"],
    } as SubscriberRow;
    expect(hasPremium(subscriber)).toBe(false);
  });

  it("returns true when given a row from the `subscribers` table with a Plus subscription", () => {
    const subscriber = {
      fxa_profile_json: {
        subscriptions: ["monitor"],
      },
    } as SubscriberRow;
    expect(hasPremium(subscriber)).toBe(true);
  });

  it("returns false when given a session object without a Plus subscription", () => {
    const user = {
      fxa: {
        subscriptions: ["not-monitor-plus"],
      },
    } as Session["user"];

    expect(hasPremium(user)).toBe(false);
  });

  it("returns true when given a session object with a Plus subscription", () => {
    const user = {
      fxa: {
        subscriptions: ["monitor"],
      },
    } as Session["user"];

    expect(hasPremium(user)).toBe(true);
  });
});
