/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

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

const SOURCE_CSV_FILE_PATH = process.argv[2] || "path_to_data_broker_removal_times.csv";
const DESTINATION_FILE_NAME = "removalTimeEstimatesData.json";
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

  const data = fs.readFileSync(SOURCE_CSV_FILE_PATH).toString();
  const rows = data.split("\n");
  const removalDataParsed = rows.reduce((removalData, row) => {
    const [d, t] = row.trim().split(",");
    if (d && t && t !== "N/A") {
      removalData.push({ d, t: Math.ceil(t) });
    }
    return removalData;
  }, []);

  console.info(`Writing data to file: ${DESTINATION_FILE_NAME}`);
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
  writeFileSync(DESTINATION_FILE_NAME, JSON.stringify(removalDataFinal));

  const readStream = fs.createReadStream(DESTINATION_FILE_NAME);
  if (process.argv.includes("--skip-upload")) {
    console.debug("Skipping S3 upload");
  } else {
    const { uploadToS3 } = await import("../s3.js");
    await uploadToS3(`removal-time/${DESTINATION_FILE_NAME}`, readStream);
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
