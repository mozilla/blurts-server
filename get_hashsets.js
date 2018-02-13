"use strict";

const AppConstants = require("./app-constants").init();

const fs = require("fs");
const path = require("path");
const request = require("request");

const pkg = require("./package.json");

const HIBP_AUTH = `Bearer ${AppConstants.HIBP_API_TOKEN}`;
const HIBP_USER_AGENT = `${pkg.name}/${pkg.version}`;
const BREACH_HASHSET_DIR = "breach_hashsets";


function getBreachHashset(breach) {
  /*
   * HIBP Breach, Object.keys(breach):
   * [ 'Title', 'Name', 'Domain', 'BreachDate', 'AddedDate', 'ModifiedDate', 'PwnCount', 'Description',
   *   'DataClasses', 'IsVerified', 'IsFabricated', 'IsSensitive', 'IsActive', 'IsRetired', 'IsSpamList',
   *   'LogoType' ]
   * See https://haveibeenpwned.com/API/v2#BreachModel for more
   */
  if (breach.IsActive && breach.IsVerified && breach.DataClasses.includes("Email addresses")) {
    const url = `${AppConstants.HIBP_API_ROOT}/enterprisesubscriber/hashset/${breach.Name}`;
    const headers = {
      "User-Agent": HIBP_USER_AGENT,
      "Authorization": HIBP_AUTH,
    };
    const hashsetRequestObject = {
      url,
      headers,
    };
    const BREACH_HASHSET_ZIP = path.join(BREACH_HASHSET_DIR, `${breach.Name}.zip`);

    console.log(`Active, verified breach with email addresses: ${breach.Name}`);
    console.log(`Fetching ${url}...`);
    request(hashsetRequestObject).pipe(fs.createWriteStream(BREACH_HASHSET_ZIP));
  }
}

function handleBreachesResponse(error, response, body) {
  if (error) {
    console.error(error);
    // We can `process.exit()` here since it's a CLI script.
    // eslint-disable-next-line no-process-exit
    process.exit(1);
  }

  try {
    const breachesJSON = JSON.parse(body);

    if (!fs.existsSync(BREACH_HASHSET_DIR)) {
      fs.mkdirSync(BREACH_HASHSET_DIR);
    }
    for (const breach of breachesJSON) {
      getBreachHashset(breach);
    }
  } catch (err) {
    console.error(err);
  }
}

function getBreaches() {
  const breachesRequestObject = {
    url: `${AppConstants.HIBP_API_ROOT}/breaches`,
    headers: {
      "User-Agent": HIBP_USER_AGENT,
    },
  };
  request(breachesRequestObject, handleBreachesResponse);
}

getBreaches();
