/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { Upload } from "@aws-sdk/lib-storage";
import { S3, HeadObjectCommand, NotFound } from "@aws-sdk/client-s3";
import { config } from "../config";
import { logger } from "../app/functions/server/logging";

const { accessKeyId, secretAccessKey, region, s3: s3Config } = config.aws;
const Bucket = s3Config.logoBucket;

if (!accessKeyId || !secretAccessKey || !region || !Bucket) {
  logger.error("Environment vars for s3 upload are not set correctly");
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
 * Multi-part upload a provided buffer to S3,
 * to the bucket defined in S3_BUCKET environment variable.
 * Log but do not throw if fail to upload.
 *
 * @param fileName S3 file key
 * @param fileStream file buffer
 */
export async function uploadToS3(fileName: string, fileStream: Buffer) {
  logger.info("Attempt to upload to s3", { fileName, bucket: Bucket });
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
    logger.info("Successfully uploaded data to s3", {
      bucket: Bucket,
      fileName,
    });
  } catch (err) {
    logger.error("Failure uploading to s3", {
      err,
      fileName,
      bucket: Bucket,
    });
  }
}

/**
 * Check if an object exists in S3 and return its metadata if it does.
 *
 * @param fileName S3 object key to check
 * @returns Object metadata if exists, null if not found
 */
export async function checkS3ObjectExists(fileName: string): Promise<boolean> {
  try {
    const command = new HeadObjectCommand({
      Bucket,
      Key: fileName,
    });
    await s3.send(command);
    // If command does not throw, it exists
    return true;
  } catch (error) {
    if (error instanceof NotFound) {
      return false;
    }
    // For other errors, log and rethrow
    logger.error("Error checking S3 object existence", {
      fileName,
      error,
    });
    throw error;
  }
}
