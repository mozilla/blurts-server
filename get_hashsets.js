"use strict";

const AppConstants = require("./app-constants").init();

const fs = require("fs");
const path = require("path");
const request = require("request");

const pkg = require("./package.json");

const HIBP_AUTH = `Bearer ${AppConstants.HIBP_API_TOKEN}`;
const USER_AGENT = `${pkg.name}@${pkg.version}`;
const BREACH_HASHSET_DIR = "breach_hashsets";


function getBreachHashset(breach) {
  /*
   * HIBP Breach, Object.keys(breach):
   * [ 'Title', 'Name', 'Domain', 'BreachDate', 'AddedDate', 'ModifiedDate', 'PwnCount', 'Description',
       'DataClasses', 'IsVerified', 'IsFabricated', 'IsSensitive', 'IsActive', 'IsRetired', 'IsSpamList',
       'LogoType' ]
  * See https://haveibeenpwned.com/API/v2#BreachModel for more
  */
  if (breach.IsActive && breach.IsVerified && breach.DataClasses.includes("Email addresses")) {
    console.log("Active, verified breach with email addresses: " + breach.Name);
    const url = AppConstants.HIBP_API_ROOT + "/enterprisesubscriber/hashset/" + breach.Name;
    console.log("url: " + url);

    const headers = {
      "User-Agent": USER_AGENT,
      "Authorization": HIBP_AUTH,
    };
    const hashsetRequestObject = {
      url: url,
      headers: headers,
    };

    request(hashsetRequestObject).pipe(fs.createWriteStream(path.join(BREACH_HASHSET_DIR, `${breach.Name}.zip`)));
  }
}

function handleBreachesResponse(error, response, body) {
  let breachesJSON = JSON.parse(body);
  for (let breach of breachesJSON) {
    getBreachHashset(breach);
  }
}

const breachesRequestObject = {
  url: AppConstants.HIBP_API_ROOT + "/breaches",
  headers: {
    "User-Agent": USER_AGENT,
  }
};

if (!fs.existsSync(BREACH_HASHSET_DIR)) {
  fs.mkdirSync(BREACH_HASHSET_DIR);
}
request(breachesRequestObject, handleBreachesResponse);
