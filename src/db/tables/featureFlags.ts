/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import Knex from "knex";
import knexConfig from "../knexfile.js";
import mozlog from "../../utils/log.js";
const knex = Knex(knexConfig);
const log = mozlog("DB.flags");

type FeatureFlagDB = {
  name: string;
  is_enabled: boolean;
  description?: string;
  dependencies?: [string];
  allow_list?: [string];
  wait_list?: [string];
  added_at?: number;
  modified_at?: number;
  expired_at?: number;
  owner?: string;
};

export type FeatureFlag = {
  name: string;
  isEnabled: boolean;
  description?: string;
  dependencies?: [string];
  allowList?: [string];
  waitList?: [string];
  expiredAt?: number;
  owner?: string;
};

async function getAllFeatureFlags() {
  return await knex("feature_flags").returning("*");
}

async function getFeatureFlagByName(name: string) {
  log.info("getFeatureFlagByName", name);
  const res = await knex("feature_flags").where("name", "=", name);

  return res[0] || null;
}

async function addFeatureFlag(flag: FeatureFlag) {
  log.info("addFeatureFlag", flag);
  const featureFlagDb: FeatureFlagDB = {
    name: flag.name,
    is_enabled: flag.isEnabled,
    description: flag.description,
    dependencies: flag.dependencies,
    allow_list: flag.allowList,
    wait_list: flag.waitList,
    expired_at: flag.expiredAt,
    owner: flag.owner,
  };
  const res = await knex("feature_flags").insert(featureFlagDb).returning("*");

  return res[0];
}

async function deleteFeatureFlagByName(name: string) {
  log.info("deleteFeatureFlagByName", name);
  await knex("feature_flags").where("name", "=", name).delete();
}

async function updateAllowList(name: string, allowList: string[]) {
  log.info("updateAllowList", name, allowList);
  const res = await knex("feature_flags")
    .where("name", "=", name)
    .update({
      allow_list: allowList,
      modified_at: knex.fn.now(),
    })
    .returning("*");

  return res[0];
}

async function updateWaitList(name: string, waitList: string[]) {
  log.info("updateWaitList", name, waitList);
  const res = await knex("feature_flags")
    .where("name", "=", name)
    .update({
      wait_list: waitList,
      modified_at: knex.fn.now(),
    })
    .returning("*");

  return res[0];
}

async function enableFeatureFlagByName(name: string) {
  log.info("enableFeatureFlagByName", name);
  const res = await knex("feature_flags")
    .where("name", "=", name)
    .update({
      is_enabled: true,
      modified_at: knex.fn.now(),
    })
    .returning("*");

  return res[0];
}

async function disableFeatureFlagByName(name: string) {
  log.info("disableFeatureFlagByName", name);
  const res = await knex("feature_flags")
    .where("name", "=", name)
    .update({
      is_enabled: false,
      modified_at: knex.fn.now(),
    })
    .returning("*");

  return res[0];
}

export {
  getAllFeatureFlags,
  getFeatureFlagByName,
  addFeatureFlag,
  deleteFeatureFlagByName,
  updateAllowList,
  updateWaitList,
  enableFeatureFlagByName,
  disableFeatureFlagByName,
};
