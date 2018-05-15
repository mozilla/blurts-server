"use strict";

const got = require("got");

const AppConstants = require("../app-constants");
const DBUtils = require("../db/utils");
const pkg = require("../package.json");

const HIBP_AUTH = `Bearer ${AppConstants.HIBP_API_TOKEN}`;
const HIBP_USER_AGENT = `${pkg.name}/${pkg.version}`;


async function handleBreachesResponse(response) {
  try {
    const breachesJSON = JSON.parse(response.body);

    for (const breach of breachesJSON) {
      await DBUtils.createBreach(breach.Name, breach);
    }
  } catch (error) {
    debugger;
    console.error(error);
    // We can `process.exit()` here since it's a CLI script.
    // eslint-disable-next-line no-process-exit
    process.exit(1);
  }
}

(async () => {
  try {
    const breachesResponse = await got(
      `${AppConstants.HIBP_API_ROOT}/breaches`,
      {
        headers: {
          "User-Agent": HIBP_USER_AGENT,
        },
      }
    );
    await handleBreachesResponse(breachesResponse);
  } catch (error) {
    console.error(error);
    // We can `process.exit()` here since it's a CLI script.
    // eslint-disable-next-line no-process-exit
    process.exit(1);
  }
  console.log("Done handling breaches response.");
  process.exit();
})();
