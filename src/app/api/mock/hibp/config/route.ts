/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { NextRequest, NextResponse } from "next/server";
// import { isAdmin } from "../../../utils/auth";
import fs from "fs";
import path from "path";
import { errorIfNotLocal } from "../../../utils/errorThrower";
import mockBreaches from "../mockData/mockBreaches.json";
import { logger } from "../../../../functions/server/logging";

// type hibpConfigReq = {
//   email: string;
//   breachesNames: string[];
//   erase?: boolean;
// };

export function PUT(req: NextRequest) {
  const checks = errorIfNotLocal();
  if (checks !== null) return checks;

  logger.info(
    `Mock OneRep endpoint: Attempted to access ${updateJsonFile.name}. (${req.bodyUsed})`,
  );
  return NextResponse.json(
    { error: "Endpoint not available yet" },
    { status: 403 },
  );

  // const data = await req.json();
  // const { email, erase = false, breachesNames } = data as hibpConfigReq;

  // if (!isAdmin(email)) {
  //   return NextResponse.json(
  //     { error: "Mock endpoint HIBP: Unauthorized to access the endpoint" },
  //     { status: 401 },
  //   );
  // }
  // return updateJsonFile(erase, breachesNames);
}

function updateJsonFile(erase: boolean, breachesNames: string[]) {
  // Define the path to the JSON file
  const jsonFilePath = path.join(
    process.cwd(),
    "./src/app/api/mock/hibp/data/mockBreaches.json",
  );

  // Read the current JSON from the file
  const fileData = fs.readFileSync(jsonFilePath, "utf8");
  const jsonData = JSON.parse(fileData);

  try {
    jsonData.data = [
      {
        hashSuffix: "",
        websites: erase ? mockBreaches.default : breachesNames,
      },
    ];

    fs.writeFileSync(
      jsonFilePath,
      JSON.stringify(jsonData, null, 2) + "\n",
      "utf8",
    );

    return NextResponse.json(
      {
        message:
          "Mock endpoint HIBP: default JSON data has been successfully updated.",
      },
      { status: 200 },
    );
  } catch (error) {
    console.error("Mock endpoint HIBP: Failed to update JSON:", error);
    return NextResponse.json(
      { message: "Mock endpoint HIBP: Failed to update JSON data." },
      { status: 500 },
    );
  }
}
