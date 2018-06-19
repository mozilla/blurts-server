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
  console.log("\n\n  Usage: node load-breaches.js [--createExampleBreach]");
  console.log("  --createExampleBreach creates an example breach.");
  console.log("  start the server and navigate to 'localhost:6060/?breach=Example' to see the Example Breach.\n\n");
  process.exit();
}

async function handleBreachesResponse(response) {
  try {
    const breachesJSON = JSON.parse(response.body);

    for (const breach of breachesJSON) {
      // purify the description going into the DB
      breach.Description = DOMPurify.sanitize(breach.Description, {ALLOWED_TAGS: []});
      await DBUtils.createBreach(breach.Name, breach.Domain, breach);
    }
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

(async () => {
  if (args["--createExampleBreach"]) {
    await DBUtils.createBreach("Example", {
      Name: "Example Breach Name",
      BreachDate: "2018-012-06",
      DataClasses: ["Email addresses", "IP addresses", "Passwords", "Usernames", "Website activity"],
      PwnCount: 1234567,
      LogoType: "svg",
      Description: "This is example breach data. Users arrive on this page by clicking the 'Go to Firefox Monitor' button from the Firefox Monitor Add-on (https://github.com/mozilla/blurts-addon) after visiting a site with known data breaches. ",
    });
  }
  try {
    const breachesResponse = await got(
      `${AppConstants.HIBP_STAGE_API_ROOT}/breaches`,
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

