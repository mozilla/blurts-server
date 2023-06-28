/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

/* Cron: Daily
 * Fetches the list of breaches from HIBP, sync database with the latest breaches list
 *
 * Usage:
 * node scripts/syncBreaches.js
 */

import { req, formatDataClassesArray } from '../utils/hibp.js'
import { getAllBreaches, upsertBreaches } from '../db/tables/breaches.js'
import { readdir } from "node:fs/promises";
import { resolve as pathResolve } from "node:path";
import { finished } from 'node:stream/promises';
import { createWriteStream } from "node:fs";
import { Readable } from 'node:stream';
import os from 'node:os';
import { Upload } from "@aws-sdk/lib-storage";
import { S3 } from "@aws-sdk/client-s3";

// Get breaches logos and uploads to s3
const accessKeyId = process.env.AWS_ACCESS_KEY_ID;
const secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY;
const region = process.env.AWS_REGION;
const Bucket = process.env.S3_BUCKET;

const s3 = new S3({
  region,
  credentials: {
    accessKeyId,
    secretAccessKey,
  },
});

async function uploadToS3(fileName, fileStream) {
  console.log('Attempt to upload to s3: ', fileName)
  const uploadParams = {
    Bucket,
    Key: fileName,
    Body: fileStream
  }
  try {
    await new Upload({
      client: s3,
      params: uploadParams
    }).done()
    console.log('Successfully uploaded data to ' + Bucket + '/' + fileName)
  } catch (err) {
    console.error(err, err.stack)
  }
}

export async function getBreachIcons(breaches) {
  const breachDomains = breaches
    .map((breach) => breach.Domain)
    .filter((breachDomain) => breachDomain.length > 0);

  // make logofolder if it doesn't exist
  const logoFolder = os.tmpdir();
  console.log(`Logo folder: ${logoFolder}`)

  // read existing logos
  const existingLogos = await readdir(logoFolder);
  console.log(`existing logos: ${existingLogos.length}`)

  (await Promise.all(
    breachDomains.map(async (breachDomain) => {
      const logoFilename = breachDomain.toLowerCase() + ".ico";
      const logoPath = pathResolve(logoFolder, logoFilename);
      if (existingLogos.includes(logoFilename)) {
        console.log('skipping ', logoFilename)
        return;
      }
      console.log(`fetching: , ${logoFilename}`)
      const res = await fetch(
        `https://icons.duckduckgo.com/ip3/${breachDomain}.ico`);
      if (res.status !== 200) {
        return;
      }
      await uploadToS3(logoFilename, Buffer.from(await res.arrayBuffer()))
      const fileStream = createWriteStream(logoPath, { flags: 'wx' });
      const bodyReadable = Readable.fromWeb(res.body)
      await finished(bodyReadable.pipe(fileStream));
    })
  ));
}


// Get breaches and upserts to DB
const breachesResponse = await req('/breaches')
const breaches = []
const seen = new Set()
for (const breach of breachesResponse) {
  breach.DataClasses = formatDataClassesArray(breach.DataClasses)
  breach.LogoPath = /[^/]*$/.exec(breach.LogoPath)[0]
  breaches.push(breach)
  seen.add(breach.Name + breach.BreachDate)

  // sanity check: corrupt data structure
  if (!isValidBreach(breach)) throw new Error('Breach data structure is not valid', JSON.stringify(breach))
}

console.log('Breaches found: ', breaches.length)
console.log('Unique breaches based on Name + BreachDate', seen.size)
await getBreachIcons(breaches)

// sanity check: no duplicate breaches with Name + BreachDate
if (seen.size !== breaches.length) {
  throw new Error('Breaches contain duplicates. Stopping script...')
} else {
  await upsertBreaches(breaches)

  // get
  const result = await getAllBreaches()
  console.log(result.length)
  process.exit()
}


/**
 * Null check for some required field
 *
 * @param {object} breach breach object from HIBP
 * @returns Boolean is it a valid breach
 */
function isValidBreach(breach) {
  return breach.Name !== undefined &&
    breach.BreachDate !== undefined &&
    breach.Title !== undefined &&
    breach.Domain !== undefined &&
    breach.DataClasses !== undefined
}
