/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { Knex } from "knex";
import createDbConnection from "../../db/connect";
import { PubSub } from "@google-cloud/pubsub";

describe("Email breach functional tests", () => {
  let conn: Knex;
  beforeAll(() => {
    conn = createDbConnection();
  });
  afterAll(async () => {
    await conn.destroy();
  });
  it("connects to the database", async () => {
    const res = await conn.raw(`select 1 as connected`);
    expect(res.rows).toStrictEqual([{ connected: 1 }]);
  });
  it("connects to pubsub", () => {
    const projectId = process.env.GCP_PUBSUB_PROJECT_ID;
    const subscriptionName = process.env.GCP_PUBSUB_SUBSCRIPTION_NAME!;
    const pubsub = new PubSub({ projectId });
    expect(() => pubsub.subscription(subscriptionName)).not.toThrow();
  });
});
