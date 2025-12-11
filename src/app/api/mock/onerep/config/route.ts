/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { NextRequest, NextResponse } from "next/server";
import { randomInt } from "crypto";
import { logger } from "../../../../functions/server/logging";
import fs from "fs";
import path from "path";
import { Broker } from "./config";
// import { errorIfNotLocal } from "../../../utils/errorThrower";

// type onerepConfigReq = {
//   email: string;
//   erase?: boolean;
//   brokers: [Broker];
// };

export function PUT(req: NextRequest) {
  logger.info(
    `Mock OneRep endpoint: Attempted to access ${updateJsonFile.name}. (${req.bodyUsed})`,
  );
  return NextResponse.json(
    { error: "Endpoint not available yet" },
    { status: 403 },
  );
  /*
  const checks = errorIfNotLocal();
  if (checks !== null) return checks;

  const data = await req.json();
  const { email, erase = false, brokers } = data as onerepConfigReq;

  if (!isAdmin(email)) {
    return NextResponse.json(
      { error: "Mock endpoint OneRep: Unauthorized to access the endpoint" },
      { status: 401 },
    );
  }
  return updateJsonFile(erase, brokers); 
  */
}

function updateJsonFile(erase: boolean, brokers: [Broker]) {
  // Define the path to the JSON file
  const jsonFilePath = path.join(
    process.cwd(),
    "./src/app/api/mock/onerep/config/mockUser.json",
  );

  // Read the current JSON from the file
  const fileData = fs.readFileSync(jsonFilePath, "utf8");
  const jsonData = JSON.parse(fileData);

  try {
    if (erase) {
      jsonData.BROKERS_LIST.data = [];
      jsonData.BROKERS_LIST.valid = false;
      jsonData.MAGIC_NUM_0 = randomInt(1000, 100000);
    } else {
      jsonData.BROKERS_LIST.data = brokers;
      jsonData.BROKERS_LIST.valid = true;
    }

    fs.writeFileSync(
      jsonFilePath,
      JSON.stringify(jsonData, null, 2) + "\n",
      "utf8",
    );

    return NextResponse.json(
      {
        message:
          "Mock endpoint OneRep: JSON data has been successfully updated.",
      },
      { status: 200 },
    );
  } catch (error) {
    console.error("Mock endpoint OneRep: Failed to update JSON:", error);
    return NextResponse.json(
      { message: "Mock endpoint OneRep: Failed to update JSON data." },
      { status: 500 },
    );
  }
}
