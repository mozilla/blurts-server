"use strict";

const got = require("got");
const AppConstants = require("../app-constants");


const BREACHES_COLLECTION = "fxmonitor-breaches";
const FX_RS_COLLECTION = `${AppConstants.FX_REMOTE_SETTINGS_WRITER_SERVER}/buckets/main-workspace/collections/${BREACHES_COLLECTION}`;
const FX_RS_RECORDS = `${FX_RS_COLLECTION}/records`;
const FX_RS_BEARER_TOKEN = AppConstants.FX_REMOTE_SETTINGS_BEARER_TOKEN;

const RemoteSettings = {

  async whichBreachesAreNotInRemoteSettingsYet(breaches) {
    const fxRSRecords = await got(FX_RS_RECORDS, {
      json: true,
      headers: {
        "authorization": `Bearer ${FX_RS_BEARER_TOKEN}`,
      },
    });
    const remoteSettingsBreachesSet = new Set(
      fxRSRecords.body.data.map(b => b.Name)
    );

    return breaches.filter( ({Name}) => !remoteSettingsBreachesSet.has(Name) );
  },

  async postNewBreachToBreachesCollection(data) {
    // Create the record
    await got.post(FX_RS_RECORDS, {
      headers: {
        "Content-Type": "application/json",
        "authorization": `Bearer ${FX_RS_BEARER_TOKEN}`,
      },
      body: JSON.stringify({data: data}),
    });
  },

  async requestReviewOnBreachesCollection() {
    await got.patch(FX_RS_COLLECTION, {
      headers: {
        "Content-Type": "application/json",
        "authorization": `Bearer ${FX_RS_BEARER_TOKEN}`,
      },
      body: JSON.stringify({data: {status: "to-review"}}),
    });
  },
};


module.exports = RemoteSettings;
