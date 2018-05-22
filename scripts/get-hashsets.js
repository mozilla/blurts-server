"use strict";

const request = require("request");
const S3 = require("aws-sdk/clients/s3");

const AppConstants = require("../app-constants");
// Disable eslint here till this file gets updated to use DBUtils.
// eslint-disable-next-line node/no-missing-require
const models = require("../db/models");
const pkg = require("../package.json");

const HIBP_AUTH = `Bearer ${AppConstants.HIBP_API_TOKEN}`;
const HIBP_USER_AGENT = `${pkg.name}/${pkg.version}`;

const s3 = new S3();
const BREACH_HASHSET_BUCKET_NAME = "mozilla.breach_alerts.stage.breach_hashsets";


function getBreachHashset(breach) {
  /*
   * HIBP Breach, Object.keys(breach):
   * [ 'Title', 'Name', 'Domain', 'BreachDate', 'AddedDate', 'ModifiedDate', 'PwnCount', 'Description',
   *   'DataClasses', 'IsVerified', 'IsFabricated', 'IsSensitive', 'IsActive', 'IsRetired', 'IsSpamList',
   *   'LogoType' ]
   * See https://haveibeenpwned.com/API/v2#BreachModel for more
   */
  const url = `${AppConstants.HIBP_API_ROOT}/enterprisesubscriber/hashset/${breach.Name}`;
  const headers = {
    "User-Agent": HIBP_USER_AGENT,
    "Authorization": HIBP_AUTH,
  };
  const hashsetRequestObject = {
    url,
    headers,
  };

  console.log(`Fetching ${url}...`);

  request(hashsetRequestObject, async (error, response, body) => {
    if (response.statusCode === 200) {
      console.log("Uploading to S3 ...");
      const uploadParams = {
        Bucket: BREACH_HASHSET_BUCKET_NAME,
        Key: `${breach.Name}.zip`,
        Body: body,
      };
      s3.upload(uploadParams, (err, data) => {
        if (err) {
          console.error(`err: ${err}`);
          throw(err);
        }
        console.log(`Uploaded to ${data.Location}`);
      });
    }
  });
}

async function handleBreachesResponse(error, response, body) {
  if (error) {
    console.error(error);
    process.exit(1);
  }

  try {
    const breachesJSON = JSON.parse(body);

    for (const breach of breachesJSON) {
      models.Breach.findOrCreate({where: {
        name: breach.Name,
      }}).spread((ourBreach, created) => {
        if (breach.IsActive && breach.IsVerified && breach.DataClasses.includes("Email addresses")) {
          console.log(`Active, verified breach with email addresses: ${breach.Name}. Checking if we have the latest data ...`);
          if (created || Date(ourBreach.updatedAt) < Date(breach.ModifiedDate)) {
            console.log("New breach, or breach modified since last update. Getting Hashset ...");
            getBreachHashset(breach);
          } else {
            console.log("Breach not modified since last update. Done.");
          }
        }
      });
    }
  } catch (err) {
    console.error(err);
    throw(err);
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

models.sequelize.sync().then(()=>{
  getBreaches();
});
