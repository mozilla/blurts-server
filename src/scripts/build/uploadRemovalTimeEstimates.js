/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

/**
 * The data that is being downloaded in this script is provided by
 * GeoNames (https://www.geonames.org/). We are using the data to compile a set
 * of US cities and states that match the needs of this project. Their work is
 * licensed under a Creative Commons Attribution 4.0 License:
 * https://creativecommons.org/licenses/by/4.0/.
 *
 * All database dumps and table definitions can be found here:
 * https://download.geonames.org/export/dump/.
 */

import {
  existsSync,
  mkdirSync,
  writeFileSync,
  rmSync,
} from "fs";
import Sentry from "@sentry/nextjs";
import os from "os";
import path from "path";
import fs from "fs";

const REMOVAL_DATA_SOURCE_FILE_PATH = "path_to_data_broker_removal_times.csv";
const REMOVAL_DATA_DESTINATION_FILE_PATH = "removalTimeEstimatesData.json";
const SENTRY_SLUG = "create-removal-time-estimates";

Sentry.init({
  environment: process.env.APP_ENV,
  dsn: process.env.SENTRY_DSN,
  tracesSampleRate: 1.0,
});

const checkInId = Sentry.captureCheckIn({
  monitorSlug: SENTRY_SLUG,
  status: "in_progress",
});

try {
  console.info("Create data");

  const startTime = Date.now();
  const tmpDirPath = path.join(os.tmpdir(), "fx-monitor");

  console.info(`Creating data directory: ${tmpDirPath}`);
  if (!existsSync(tmpDirPath)) {
    mkdirSync(tmpDirPath);
  }

  const data = fs.readFileSync(REMOVAL_DATA_SOURCE_FILE_PATH).toString();
  const rows = data.split("\n");
  const removalDataParsed = rows.reduce((removalData, row) => {
    const [d, t] = row.trim().split(",");
    if (t !== "N/A") {
      removalData.push({ d, t });
    }
    return removalData;
  }, []);

  console.info(`Writing data to file: ${REMOVAL_DATA_DESTINATION_FILE_PATH}`);
  const removalDataFinal = {
    name: "fx-monitor-removal-time-estimates-data",
    description: "The data in this file are the average data broker removal time estimates for Monitor.",
    created_at: startTime,
    license: {
      type: "Mozilla Public License, v. 2.0",
      url: "http://mozilla.org/MPL/2.0/",
    },
    data: removalDataParsed,
  };
  writeFileSync(REMOVAL_DATA_DESTINATION_FILE_PATH, JSON.stringify(removalDataFinal));

  const readStream = fs.createReadStream(REMOVAL_DATA_DESTINATION_FILE_PATH);
  if (process.argv.includes("--skip-upload")) {
    console.debug("Skipping S3 upload");
  } else {
    const uploadToS3 = await import("../s3.js");
    await uploadToS3(`removal-time/${REMOVAL_DATA_DESTINATION_FILE_PATH}`, readStream);
  }

  rmSync(tmpDirPath, {
    recursive: true,
    force: true,
  });

  const endTime = Date.now();
  console.info(
    `Successfully created removal time estimates file: Executed in ${
      (endTime - startTime) / 1000
    }s`,
  );
} catch (error) {
  console.error("Creating removal time estimates file failed with:", error);
}

Sentry.captureCheckIn({
  checkInId,
  monitorSlug: SENTRY_SLUG,
  status: "ok",
});
setTimeout(process.exit, 1000);
