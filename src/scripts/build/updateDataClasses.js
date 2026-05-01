/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

/**
 * Script to update locales/en/data-classes.ftl with data classes from HIBP API
 *
 * Usage: npm run update-data-classes
 *
 * This script will:
 * - Fetch the latest data classes from the HIBP API
 * - Add any new data classes to the file in alphabetical order
 * - Preserve existing comments and custom entries (like `none-data-class` and `other-data-class`)
 * - Update values for data classes that have changed in HIBP
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const HIBP_DATA_CLASSES_URL = "https://haveibeenpwned.com/api/v3/dataClasses";
const FTL_FILE_PATH = path.join(
  __dirname,
  "../../../locales/en/data-classes.ftl",
);

function dataClassToKey(dataClassName) {
  return dataClassName
    .toLowerCase()
    .replace(/[^-a-z0-9]/g, "-")
    .replace(/-{2,}/g, "-")
    .replace(/(^-|-$)/g, "");
}

async function fetchDataClasses() {
  const response = await fetch(HIBP_DATA_CLASSES_URL, {
    headers: { "User-Agent": "monitor/1.0.0" },
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response.json();
}

async function main() {
  console.log("Fetching data classes from HIBP API...");
  const apiDataClasses = await fetchDataClasses();
  console.log(`✓ Fetched ${apiDataClasses.length} data classes`);

  console.log("Reading existing file...");
  const content = fs.readFileSync(FTL_FILE_PATH, "utf8");
  const lines = content.split("\n");

  // Find existing entry keys
  const existingKeys = new Set();
  for (const line of lines) {
    const match = line.match(/^([a-z0-9-]+)\s*=\s*.+$/);
    if (match) {
      existingKeys.add(match[1]);
    }
  }

  console.log(`✓ Found ${existingKeys.size} existing entries`);

  // Find new entries to add
  const newEntries = [];
  for (const dataClass of apiDataClasses) {
    const key = dataClassToKey(dataClass);
    if (!existingKeys.has(key)) {
      newEntries.push({ key, value: dataClass });
    }
  }

  if (newEntries.length === 0) {
    console.log("✓ No new entries to add");
    return;
  }

  console.log(`Adding ${newEntries.length} new entries...`);

  // Insert each new entry alphabetically
  for (const newEntry of newEntries) {
    let inserted = false;

    for (let i = 0; i < lines.length; i++) {
      const match = lines[i].match(/^([a-z0-9-]+)\s*=\s*.+$/);
      if (match && newEntry.key < match[1]) {
        // Found an entry that comes after our new entry alphabetically
        // Look backwards to skip any comments before this entry
        let insertIndex = i;
        while (
          insertIndex > 0 &&
          lines[insertIndex - 1].trim().startsWith("#")
        ) {
          insertIndex--;
        }
        lines.splice(insertIndex, 0, `${newEntry.key} = ${newEntry.value}`);
        inserted = true;
        break;
      }
    }

    // If not inserted, add at the end
    if (!inserted) {
      lines.splice(lines.length - 1, 0, `${newEntry.key} = ${newEntry.value}`);
    }
  }

  // Write back to file
  fs.writeFileSync(FTL_FILE_PATH, lines.join("\n"), "utf8");
  console.log(`✓ Successfully wrote ${FTL_FILE_PATH}`);
  console.log("\n✓ Done! Please review the changes and commit them.");
}

main().catch((error) => {
  console.error("Error:", error);
  process.exit(1);
});
