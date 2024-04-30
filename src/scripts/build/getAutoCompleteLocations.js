/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { createWriteStream, existsSync } from "fs";
import { Readable } from "stream";
import { finished } from "stream/promises";
import "dotenv/config";

const dataPath = "./locationAutocompleteData.json";

if (!existsSync(dataPath)) {
  const stream = createWriteStream(dataPath);
  try {
    const fetchUrl = `https://s3.amazonaws.com/${process.env.S3_BUCKET}/autocomplete/locationAutocompleteData.json`;
    console.debug({ fetchUrl });
    const { body } = await fetch(fetchUrl);
    await finished(Readable.fromWeb(body).pipe(stream));
  } catch (e) {
    console.error(e);
  }
} else {
  console.log("file already exists: ", dataPath);
}
