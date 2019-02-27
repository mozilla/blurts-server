"use strict";

const DEBUG = true;

const got = require("got");

const SERVER = "https://settings-writer.prod.mozaws.net/v1";
const CID = "fxmonitor-breaches";
/* eslint-disable-next-line no-process-env */
const USERNAME = process.env.KINTO_USERNAME;
/* eslint-disable-next-line no-process-env */
const PASSWORD = process.env.KINTO_PASSWORD;
if (!USERNAME || !PASSWORD) {
  console.error("Please set credentials in the environment.");
  return;
}

const AUTH = Buffer.from(`${USERNAME}:${PASSWORD}`).toString("base64");

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
          "authorization": `Basic ${AUTH}`,
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
