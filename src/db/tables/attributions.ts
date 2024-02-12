/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import createDbConnection from "../connect.js";
import { logger } from "../../app/functions/server/logging";
import { AttributionRow } from "knex/types/tables";

const knex = createDbConnection();

async function getAttributionsForSubscriber(subscriberId: number) {
  logger.info("getAttributionsForSubscriber", subscriberId);
  return (await knex("attributions")
    .orderBy("updated_at")
    .where("subscriber_id", subscriberId)
    .returning("*")) as AttributionRow[];
}

async function getLatestAttributionForSubscriberWithType(
  subscriberId: number,
  type: string,
) {
  logger.info("getLatestAttributionForSubscriberWithType", {
    subscriberId,
    type,
  });
  const res = await knex("attributions")
    .orderBy("created_at")
    .where("subscriber_id", subscriberId)
    .andWhere("type", type)
    .returning([
      "entrypoint",
      "utm_source",
      "utm_medium",
      "utm_term",
      "utm_campaign",
    ]);
  return res[0];
}

type AddAttribution = {
  subscriber_id?: number;
  type: string; // firstTouch, lastTouch
  utm_source?: string;
  utm_campaign?: string;
  utm_medium?: string;
  utm_term?: string;
  entrypoint?: string;
  other_utm_parameters?: Record<string, string>;
};

async function addAttributionForSubscriber(
  subscriberId: number,
  attribution: AddAttribution,
) {
  logger.info("addAttributionForSubscriber", { subscriberId, attribution });
  attribution.subscriber_id = subscriberId;
  let res;
  try {
    res = await knex("attributions").insert(attribution).returning("*");
  } catch (e) {
    if ((e as Error).message.includes("violates unique constraint")) {
      logger.info("addAttributionForSubscriber", {
        subscriberId,
        error: (e as Error).message,
      });
    } else {
      logger.error(e);
    }
  }
  return res?.[0];
}

async function deleteAttributionById(attributionId: number) {
  logger.info("deleteAttributionById", attributionId);
  await knex("attributions").where("id", attributionId).del();
}

async function deleteAttributionsForSubscriber(subscriberId: number) {
  logger.info("deleteAttributionsForSubscriber", subscriberId);
  await knex("attributions").where("subscriber_id", subscriberId).del();
}
type UpdateAttribution = Pick<
  AttributionRow,
  | "type"
  | "utm_source"
  | "utm_campaign"
  | "utm_medium"
  | "utm_term"
  | "entrypoint"
  | "other_utm_parameters"
  | "updated_at"
>;
async function updateAttribution(
  attributionId: number,
  attributionToUpdate: UpdateAttribution,
) {
  logger.info("updateAttribution", { attributionId, attributionToUpdate });

  // @ts-ignore knex.fn.now() results in it being set to a date,
  // even if it's not typed as a JS date object:
  attributionToUpdate.updated_at = knex.fn.now();

  const res = await knex("attributions")
    .where("id", attributionId)
    .update(attributionToUpdate)
    .returning("*");

  return res[0];
}

export {
  getAttributionsForSubscriber,
  getLatestAttributionForSubscriberWithType,
  addAttributionForSubscriber,
  deleteAttributionById,
  deleteAttributionsForSubscriber,
  updateAttribution,
};
