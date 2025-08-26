/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { createWriteStream, existsSync } from "fs";
import { Readable } from "stream";
import { finished } from "stream/promises";
import dotenvFlow from "dotenv-flow";

dotenvFlow.config();
const dataPath = "./locationAutocompleteData.json";

if (!existsSync(dataPath)) {
  const stream = createWriteStream(dataPath);
  try {
    const fetchUrl = `https://s3.amazonaws.com/${process.env.S3_BUCKET}/autocomplete/locationAutocompleteData.json`;
    console.debug({ fetchUrl });
    const { body } = await fetch(fetchUrl);
    if (!body) {
      throw new Error(`Failed to fetch: ${fetchUrl}`);
    }
    // @ts-ignore If body is `null` we are already throwing an error above.
    await finished(Readable.fromWeb(body).pipe(stream));
  } catch (e) {
    console.error(e);
  }
} else {
  console.log("file already exists: ", dataPath);
}
