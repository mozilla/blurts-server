/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */
 
import { Upload } from "@aws-sdk/lib-storage";
import { S3 } from "@aws-sdk/client-s3";
import "dotenv/config"

import { logger } from "../app/functions/server/logging";

const accessKeyId = process.env.AWS_ACCESS_KEY_ID;
const secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY;
const region = process.env.AWS_REGION;
const Bucket = process.env.S3_BUCKET;

if (!accessKeyId || !secretAccessKey || !region || !Bucket) {
  logger.error("Environment vars for s3 upload are not set correctly")
  process.exit()
}

const s3 = new S3({
  region,
  credentials: {
    accessKeyId,
    secretAccessKey,
  },
});

export async function uploadToS3(fileName, fileStream) {
  logger.log('Attempt to upload to s3: ', fileName)
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
    logger.log('Successfully uploaded data to ' + Bucket + '/' + fileName)
  } catch (err) {
    logger.error(err, err.stack)
  }
}