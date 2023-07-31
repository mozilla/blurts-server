import { resolve } from 'node:path'
import { createWriteStream } from 'fs';
import { Readable } from 'stream';
import { finished } from 'stream/promises';
import "dotenv/config"

const stream = createWriteStream(resolve('./locationAutocompleteData.json'));
try {
  const fetchUrl = `https://s3.amazonaws.com/${process.env.S3_BUCKET}/autocomplete/locationAutocompleteData.json`;
  console.debug({fetchUrl})
const { body } = await fetch(fetchUrl);
await finished(Readable.fromWeb(body).pipe(stream));
} catch(e) {
  console.error(e)
}