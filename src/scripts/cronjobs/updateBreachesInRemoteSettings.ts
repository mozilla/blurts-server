/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use strict";

/**
 * Cron: Daily
 * From all the HIBP breaches, we parse out the new breaches that are not already present
 * in firefox remote settings, and update the data source accordingly
 */

/*
 *
 *
 *
 *
 *********************************** Warning ***********************************
 *
 * This script was in the repository unused, and referenced a module
 * `remote-settings.js` that no longer existed at the time of writing (it was
 * deleted in commit c727bfe968937e51b0cd42efefd010c7c401aeae).
 * I dug it up from the Git history, inlined it in this file, and made sure
 * it compiled, but I didn't get to actually run it.
 *
 * Thus, it could be used as a starting point when re-enabling the remote
 * settings upload, but shouldn't be expected to work without modifications.
 *
 *********************************** Warning ***********************************
 *
 *
 *
 *
 *
 *
 *
 *
 */

import * as HIBP from "../../utils/hibp";

type RemoteSettingsBreach = Pick<
  HIBP.HibpGetBreachesResponse[number],
  "Name" | "Domain" | "BreachDate" | "PwnCount" | "AddedDate" | "DataClasses"
>;

const FX_REMOTE_SETTINGS_WRITER_USER =
  process.env.FX_REMOTE_SETTINGS_WRITER_USER;
const FX_REMOTE_SETTINGS_WRITER_PASS =
  process.env.FX_REMOTE_SETTINGS_WRITER_PASS;
const FX_REMOTE_SETTINGS_WRITER_SERVER =
  process.env.FX_REMOTE_SETTINGS_WRITER_SERVER;

if (
  !FX_REMOTE_SETTINGS_WRITER_USER ||
  !FX_REMOTE_SETTINGS_WRITER_PASS ||
  !FX_REMOTE_SETTINGS_WRITER_SERVER
) {
  console.error(
    "updatebreaches requires FX_REMOTE_SETTINGS_WRITER_SERVER, FX_REMOTE_SETTINGS_WRITER_USER, FX_REMOTE_SETTINGS_WRITER_PASS.",
  );
  process.exit(1);
}

const BREACHES_COLLECTION = "fxmonitor-breaches";
const FX_RS_COLLECTION = `${FX_REMOTE_SETTINGS_WRITER_SERVER}/buckets/main-workspace/collections/${BREACHES_COLLECTION}`;
const FX_RS_RECORDS = `${FX_RS_COLLECTION}/records`;
const FX_RS_WRITER_USER = FX_REMOTE_SETTINGS_WRITER_USER;
const FX_RS_WRITER_PASS = FX_REMOTE_SETTINGS_WRITER_PASS;

async function whichBreachesAreNotInRemoteSettingsYet(
  breaches: HIBP.HibpGetBreachesResponse,
) {
  const response = await fetch(FX_RS_RECORDS, {
    headers: {
      Authorization: `Basic ${Buffer.from(FX_RS_WRITER_USER + ":" + FX_RS_WRITER_PASS).toString("base64")}`,
    },
  });
  const fxRSRecords = await response.json();
  const remoteSettingsBreachesSet = new Set(
    fxRSRecords.body.data.map(
      (b: HIBP.HibpGetBreachesResponse[number]) => b.Name,
    ),
  );

  return breaches.filter(({ Name }) => !remoteSettingsBreachesSet.has(Name));
}

async function postNewBreachToBreachesCollection(data: RemoteSettingsBreach) {
  // Create the record
  const response = await fetch(FX_RS_RECORDS, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
      Authorization: `Basic ${Buffer.from(FX_RS_WRITER_USER + ":" + FX_RS_WRITER_PASS).toString("base64")}`,
    },
  });
  return response.json();
}

async function requestReviewOnBreachesCollection() {
  const response = await fetch(FX_RS_COLLECTION, {
    method: "PATCH",
    body: JSON.stringify({ data: { status: "to-review" } }),
    headers: {
      "Content-Type": "application/json",
      Authorization: `Basic ${Buffer.from(FX_RS_WRITER_USER + ":" + FX_RS_WRITER_PASS).toString("base64")}`,
    },
  });
  return response.json();
}

(async () => {
  const allHibpBreaches = await HIBP.fetchHibpBreaches();
  const verifiedSiteBreaches = allHibpBreaches.filter((breach) => {
    return (
      !breach.IsRetired &&
      !breach.IsSpamList &&
      !breach.IsFabricated &&
      breach.IsVerified &&
      breach.Domain !== ""
    );
  });
  const verifiedSiteBreachesWithPWs = verifiedSiteBreaches.filter((breach) =>
    breach.DataClasses.includes("Passwords"),
  );

  const newBreaches = await whichBreachesAreNotInRemoteSettingsYet(
    verifiedSiteBreachesWithPWs,
  );

  if (newBreaches.length <= 0) {
    console.log("No new breaches detected.");
    process.exit(0);
  }

  console.log(`${newBreaches.length} new breach(es) found.`);

  for (const breach of newBreaches) {
    const data: RemoteSettingsBreach = {
      Name: breach.Name,
      Domain: breach.Domain,
      BreachDate: breach.BreachDate,
      PwnCount: breach.PwnCount,
      AddedDate: breach.AddedDate,
      DataClasses: breach.DataClasses,
    };

    console.log("New breach detected: \n", data);

    try {
      await postNewBreachToBreachesCollection(data);
    } catch (e) {
      console.error(e);
      process.exit(1);
    }
  }

  console.log("Requesting review on breaches collection");
  await requestReviewOnBreachesCollection();
})();
