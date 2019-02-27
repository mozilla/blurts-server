"use strict";

const got = require("got");

const SERVER = "https://settings-writer.prod.mozaws.net/v1";
const CID = "fxmonitor-breaches";
const DEBUG = true;

async function run() {
  const RemoteSettingsBreachesSet = new Set((await got(
    "https://firefox.settings.services.mozilla.com/v1/buckets/main/collections/fxmonitor-breaches/records",
    { json: true }
  )).body.data.map(b => b.Name));

  const hibp_breaches = (await got(
    "https://haveibeenpwned.com/api/v2/breaches",
    { json: true }
  )).body;

  const new_breaches = [];

  for (const breach of hibp_breaches) {
    if (breach.IsSpamList || breach.IsRetired || !breach.IsVerified || !breach.Domain) {
      continue;
    }

    if (RemoteSettingsBreachesSet.has(breach.Name)) {
      continue;
    }

    new_breaches.push(breach);
  }
  for (const breach of new_breaches) {
    const data = {
      Name: breach.Name,
      Domain: breach.Domain,
      BreachDate: breach.BreachDate,
      PwnCount: breach.PwnCount,
      AddedDate: breach.AddedDate,
    };

    if (DEBUG) {
      console.log(data);
      continue;
    }

    try {
      await got.post(`${SERVER}/buckets/main-workspace/collections/${CID}/records`, {
        headers: {
          "Content-Type": "application/json",
          "authorization": "Bearer <insert token here>",
        },
        body: JSON.stringify({data: data}),
      });
    } catch (e) {
      console.log(e);
      return;
    }
  }
}

run();
