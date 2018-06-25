"use strict";

const arg = require("arg");
const got = require("got");
const createDOMPurify = require("dompurify");
const { JSDOM } = require("jsdom");

const AppConstants = require("../app-constants");
const DBUtils = require("../db/utils");
const pkg = require("../package.json");

const HIBP_USER_AGENT = `${pkg.name}/${pkg.version}`;


const DOMPurify = createDOMPurify((new JSDOM("")).window);

const args = arg({
  "--createExampleBreach": Boolean,
  "--help": Boolean,
});

if (args["--help"]) {
  console.log("Usage: node load-breaaches.js [--createExampleBreach]");
  console.log("--createExampleBreach creates the 'ExampleBreach' test fixture breach.");
  process.exit();
}

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
  if (args["--createExampleBreach"]) {
    await DBUtils.createBreach("ExampleBreach", {
      Title: "Example",
      BreachDate: "2015-12-06",
      DataClasses: ["Email addresses", "IP addresses", "Passwords", "Usernames", "Website activity"],
      PwnCount: 1436486,
      LogoType: "svg",
      Description: "This is an example of the data available for each breach. Compromised Data classes are not limited to the classes listed above.",
    });
  }
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
    process.exit(1);
  }
  console.log("Done handling breaches response.");
  process.exit();
})();
