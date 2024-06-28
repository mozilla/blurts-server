/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import { randomInt } from "crypto";

/* 

Example fetch, where obj conforms to Broker interface in config.ts

fetch('/api/mock/onerep/config', {
  method: 'POST',
  headers: {
      'Content-Type': 'application/json',
  },
  body: JSON.stringify({
      brokers: obj,
	    erase: true
  })
})
.then(response => response.json()).then(data => console.log(data))


*/

export async function POST(req: NextRequest) {
  // Define the path to the JSON file
  const jsonFilePath = path.join(
    process.cwd(),
    "./src/app/api/mock/onerep/config/mockUser.json",
  );

  // Read the current JSON from the file
  const fileData = fs.readFileSync(jsonFilePath, "utf8");
  const jsonData = JSON.parse(fileData);

  try {
    const newData = await req.json();
    const erase = newData.erase;

    if (erase) {
      jsonData.BROKERS_LIST.data = [];
      jsonData.BROKERS_LIST.valid = false;
      jsonData.MAGIC_NUM_0 = randomInt(1000, 100000);
    } else {
      if (!newData.brokers || !newData.brokers.data) {
        return NextResponse.json(
          { error: "Bad Request: Data format is unexpected!" },
          { status: 400 },
        );
      }

      jsonData.BROKERS_LIST.data = newData.brokers.data;
      jsonData.BROKERS_LIST.valid = true;
    }

    fs.writeFileSync(jsonFilePath, JSON.stringify(jsonData, null, 2), "utf8");

    return NextResponse.json(
      { message: "JSON data has been successfully updated." },
      { status: 200 },
    );
  } catch (error) {
    console.error("Mock endpoint OneRep: Failed to update JSON:", error);
    return NextResponse.json(
      { message: "Failed to update JSON data." },
      { status: 500 },
    );
  }
}
