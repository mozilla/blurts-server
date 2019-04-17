"use strict";

const AppConstants = require("../app-constants");
const HIBP = require("../hibp");
const RemoteSettings = require("../lib/remote-settings");


if (
  !AppConstants.FX_REMOTE_SETTINGS_BEARER_TOKEN ||
  !AppConstants.FX_REMOTE_SETTINGS_WRITER_SERVER
) {
  console.error("updatebreaches requires FX_RS_BEARER_TOKEN.");
  process.exit(1);
}


(async () => {
  const allHibpBreaches = await HIBP.req("/breaches");
  const verifiedSiteBreaches = HIBP.filterBreaches(allHibpBreaches.body);

  const newBreaches = await RemoteSettings.whichBreachesAreNotInRemoteSettingsYet(verifiedSiteBreaches);

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

    console.log("New breach detected: \n", data);

    try {
      await RemoteSettings.postNewBreachToBreachesCollection(data);
    } catch (e) {
      console.error(e);
      process.exit(1);
    }
  }

  console.log("Requesting review on breaches collection");
  await RemoteSettings.requestReviewOnBreachesCollection();

})();
