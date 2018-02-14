"use strict";

const fs = require("fs");
const request = require("request");
const S3 = require("aws-sdk/clients/s3");

const AppConstants = require("../app-constants").init();
const pkg = require("../package.json");

const HIBP_AUTH = `Bearer ${AppConstants.HIBP_API_TOKEN}`;
const HIBP_USER_AGENT = `${pkg.name}/${pkg.version}`;

const s3 = new S3();
const BREACH_HASHSET_DIR = "../breach_hashsets";
const BREACH_HASHSET_BUCKET_NAME = "mozilla.breach_alerts.stage.breach_hashsets";


async function getBreachHashset(breach) {
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

    console.log(`Active, verified breach with email addresses: ${breach.Name}`);
    console.log(`Fetching ${url}...`);

    request(hashsetRequestObject, async (error, response, body) => {
      if (response.statusCode === 200) {
        console.log("Uploading to S3 ...");
        const uploadParams = {
          Bucket: BREACH_HASHSET_BUCKET_NAME,
          Key: `${breach.Name}.zip`,
          Body: body,
        };
        try {
          const uploadData = await s3.upload(uploadParams);
          console.log(`Uploaded to ${uploadData.Location}`);
        } catch (err) {
          console.error(`err: ${err}`);
        }
      }
    });
  }
}

async function handleBreachesResponse(error, response, body) {
  if (error) {
    console.error(error);
    // We can `process.exit()` here since it's a CLI script.
    // eslint-disable-next-line no-process-exit
    process.exit(1);
  }

  try {
    const breachesJSON = JSON.parse(body);

    const listData = await s3.listObjects({Bucket: BREACH_HASHSET_BUCKET_NAME});
    console.log(`listData: ${listData}`);

    const bucketData = await s3.createBucket({Bucket: BREACH_HASHSET_BUCKET_NAME});
    console.log(`bucketData: ${bucketData}`);

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
