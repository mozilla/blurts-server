"use strict";

const got = require("got");
const createDOMPurify = require("dompurify");
const { JSDOM } = require("jsdom");

const AppConstants = require("../app-constants");
const DBUtils = require("../db/utils");
const pkg = require("../package.json");

const HIBP_USER_AGENT = `${pkg.name}/${pkg.version}`;


const DOMPurify = createDOMPurify((new JSDOM("")).window);

async function handleBreachesResponse(response) {
  try {
    const breachesJSON = JSON.parse(response.body);

    for (const breach of breachesJSON) {
      // purify the description going into the DB
      breach.Description = DOMPurify.sanitize(breach.Description, {ALLOWED_TAGS: []});
      await DBUtils.createBreach(breach.Name, breach);
    }
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

(async () => {
  try {
    const breachesResponse = await got(
      AppConstants.HIBP_BREACH_API_URL,
      {
        headers: {
          "User-Agent": HIBP_USER_AGENT,
        },
      }
    );
    await handleBreachesResponse(breachesResponse);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
  console.log("Done handling breaches response.");
  process.exit();
})();
