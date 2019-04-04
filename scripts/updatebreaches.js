"use strict";

const got = require("got");

const AppConstants = require("../app-constants");
const HIBP = require("../hibp");


const BREACHES_COLLECTION = "fxmonitor-breaches";
const FX_RS_RECORDS = `${AppConstants.FX_REMOTE_SETTINGS_WRITER_SERVER}/buckets/main-workspace/collections/${BREACHES_COLLECTION}/records`;
const FX_RS_COLLECTION = `${AppConstants.FX_REMOTE_SETTINGS_WRITER_SERVER}/buckets/main-workspace/collections/${BREACHES_COLLECTION}`;
const FX_RS_BEARER_TOKEN = AppConstants.FX_REMOTE_SETTINGS_BEARER_TOKEN;


if (!FX_RS_BEARER_TOKEN) {
  console.error("updatebreaches requires FX_RS_BEARER_TOKEN.");
  process.exit(1);
}


async function whichBreachesAreNotInRemoteSettingsYet(hibpBreaches) {
  const fxRSRecords = await got(FX_RS_RECORDS, {
    json: true,
    headers: {
      "authorization": `Bearer ${FX_RS_BEARER_TOKEN}`,
    },
  });
  const remoteSettingsBreachesSet = new Set(
    fxRSRecords.body.data.map(b => b.Name)
  );

  return hibpBreaches.filter( ({Name}) => !remoteSettingsBreachesSet.has(Name) );
}


(async () => {
  const allHibpBreaches = await HIBP.req("/breaches");
  const verifiedSiteBreaches = HIBP.filterBreaches(allHibpBreaches.body);

  const newBreaches = await whichBreachesAreNotInRemoteSettingsYet(verifiedSiteBreaches);

  if (newBreaches.length <= 0) {
    console.log("No new breaches detected.");
    process.exit(0);
  }

  console.log(`${newBreaches.length} new breach(es) found.`);

  for (const breach of newBreaches) {
    const data = {
      Name: breach.Name,
      Domain: breach.Domain,
      BreachDate: breach.BreachDate,
      PwnCount: breach.PwnCount,
      AddedDate: breach.AddedDate,
    };

    try {
      // Create the record
      await got.post(FX_RS_RECORDS, {
        headers: {
          "Content-Type": "application/json",
          "authorization": `Bearer ${FX_RS_BEARER_TOKEN}`,
        },
        body: JSON.stringify({data: data}),
      });
    } catch (e) {
      console.error(e);
      process.exit(1);
    }
  }
  // Request a review on the collection
  await got.patch(FX_RS_COLLECTION, {
    headers: {
      "Content-Type": "application/json",
      "authorization": `Bearer ${FX_RS_BEARER_TOKEN}`,
    },
    body: JSON.stringify({data: {status: "to-review"}}),
  });
})();
