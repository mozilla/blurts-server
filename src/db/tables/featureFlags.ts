/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import initKnex from "knex";
import knexConfig from "../knexfile.js";
import mozlog from "../../utils/log.js";
import { FeatureFlagRow } from "knex/types/tables";
const knex = initKnex(knexConfig);
const log = mozlog("DB.flags");

export type FeatureFlag = {
  name: string;
  isEnabled: boolean;
  description?: string;
  dependencies?: string[];
  allowList?: string[];
  waitList?: string[];
  expiredAt?: Date;
  deletedAt?: Date;
  owner?: string;
};

async function getAllFeatureFlags() {
  return await knex("feature_flags")
    .whereNull("deleted_at")
    .orderBy("name")
    .returning("*");
}

async function getFeatureFlagByName(name: string) {
  log.info("getFeatureFlagByName", name);
  const res = await knex("feature_flags").where("name", name);

  return res[0] || null;
}

async function addFeatureFlag(flag: FeatureFlag) {
  log.info("addFeatureFlag", flag);
  const featureFlagDb: FeatureFlagRow = {
    name: flag.name,
    is_enabled: flag.isEnabled,
    description: flag.description,
    dependencies: flag.dependencies,
    allow_list: flag.allowList?.reduce((acc: string[], e: string) => {
      e = e.trim();
      if (e) acc.push(e);
      return acc;
    }, []),
    wait_list: flag.waitList?.reduce((acc: string[], e: string) => {
      e = e.trim();
      if (e) acc.push(e);
      return acc;
    }, []),
    expired_at: flag.expiredAt,
    owner: flag.owner,
  };
  const res = await knex("feature_flags").insert(featureFlagDb).returning("*");

  return res[0];
}

async function deleteFeatureFlagByName(name: string) {
  log.info("deleteFeatureFlagByName", name);
  const res = await knex("feature_flags")
    .where("name", name)
    .update({
      // @ts-ignore knex.fn.now() results in it being set to a date,
      // even if it's not typed as a JS date object:
      deleted_at: knex.fn.now(),
    })
    .returning("*");
  return res[0];
}

async function updateDependencies(name: string, dependencies: string[]) {
  log.info("updateDependencies", { name, dependencies });
  const res = await knex("feature_flags")
    .where("name", name)
    .update({
      dependencies,
      // @ts-ignore knex.fn.now() results in it being set to a date,
      // even if it's not typed as a JS date object:
      modified_at: knex.fn.now(),
    })
    .returning("*");

  return res[0];
}

async function updateOwner(name: string, owner: string) {
  log.info("updateOwner", { name, owner });
  const res = await knex("feature_flags")
    .where("name", name)
    .update({
      owner: owner,
      // @ts-ignore knex.fn.now() results in it being set to a date,
      // even if it's not typed as a JS date object:
      modified_at: knex.fn.now(),
    })
    .returning("*");

  return res[0];
}

async function updateAllowList(name: string, allowList: string[]) {
  allowList = allowList.reduce((acc: string[], e: string) => {
    e = e.trim();
    if (e) acc.push(e);
    return acc;
  }, []);
  log.info("updateAllowList", { name, allowList });
  const res = await knex("feature_flags")
    .where("name", name)
    .update({
      allow_list: allowList,
      // @ts-ignore knex.fn.now() results in it being set to a date,
      // even if it's not typed as a JS date object:
      modified_at: knex.fn.now(),
    })
    .returning("*");

  return res[0];
}

async function updateWaitList(name: string, waitList: string[]) {
  waitList = waitList.reduce((acc: string[], e: string) => {
    e = e.trim();
    if (e) acc.push(e);
    return acc;
  }, []);
  log.info("updateWaitList", { name, waitList });
  const res = await knex("feature_flags")
    .where("name", name)
    .update({
      wait_list: waitList,
      // @ts-ignore knex.fn.now() results in it being set to a date,
      // even if it's not typed as a JS date object:
      modified_at: knex.fn.now(),
    })
    .returning("*");

  return res[0];
}

async function enableFeatureFlagByName(name: string, isEnabled: boolean) {
  log.info("enableFeatureFlagByName", name);
  const res = await knex("feature_flags")
    .where("name", name)
    .update({
      is_enabled: isEnabled,
      // @ts-ignore knex.fn.now() results in it being set to a date,
      // even if it's not typed as a JS date object:
      modified_at: knex.fn.now(),
    })
    .returning("*");

  return res[0];
}

async function disableFeatureFlagByName(name: string) {
  log.info("disableFeatureFlagByName", name);
  const res = await knex("feature_flags")
    .where("name", name)
    .update({
      is_enabled: false,
      // @ts-ignore knex.fn.now() results in it being set to a date,
      // even if it's not typed as a JS date object:
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
  updateDependencies,
  updateOwner,
  updateWaitList,
  enableFeatureFlagByName,
  disableFeatureFlagByName,
};
