/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { Upload } from "@aws-sdk/lib-storage";
import { S3 } from "@aws-sdk/client-s3";
import "../initializeEnvVars.js";

const accessKeyId = process.env.AWS_ACCESS_KEY_ID;
const secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY;
const region = process.env.AWS_REGION;
const Bucket = process.env.S3_BUCKET;

if (!accessKeyId || !secretAccessKey || !region || !Bucket) {
  console.error("Environment vars for s3 upload are not set correctly");
  process.exit();
}

const s3 = new S3({
  region,
  credentials: {
    accessKeyId,
    secretAccessKey,
  },
});

/**
 * @param {string} fileName
 * @param {Buffer} fileStream
 */
export async function uploadToS3(fileName, fileStream) {
  console.log("Attempt to upload to s3: ", fileName);
  const uploadParams = {
    Bucket,
    Key: fileName,
    Body: fileStream,
  };
  try {
    await new Upload({
      client: s3,
      params: uploadParams,
    }).done();
    console.log("Successfully uploaded data to " + Bucket + "/" + fileName);
  } catch (/** @type {any} */ err) {
    console.error(err, err.stack);
  }
}
