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

async function addAttributionForSubscriber(
  subscriberId: number,
  attribution: Partial<AttributionRow>,
) {
  logger.info("addAttributionForSubscriber", { subscriberId, attribution });
  attribution.subscriber_id = subscriberId;
  const res = await knex("attributions").insert(attribution).returning("*");
  return res[0] as AttributionRow;
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

  return res[0] as AttributionRow;
}

export {
  getAttributionsForSubscriber,
  addAttributionForSubscriber,
  deleteAttributionById,
  deleteAttributionsForSubscriber,
  updateAttribution,
};
