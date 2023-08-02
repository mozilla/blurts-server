/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { faker } from "@faker-js/faker";
import { ScanResult } from "../app/functions/server/onerep";
import { StateAbbr } from "../utils/states";

// Setting this to a constant value produces the same result when the same methods
// with the same version of faker are called.
// @see https://faker.readthedocs.io/en/master/index.html#seeding-the-generator
const fakerSeed = 123;

// This is a full list of scan results, all pages, and would normally be
// stored in the `onerep_scan_results.onerep_scan_results` column
// as `jsonb`.
export function mockedOneRepScanResults() {
  faker.seed(fakerSeed);
  return {
    data: Array.from({ length: 3 }, () => createRandomScan()),
  };
}

/**
 * Generates scan result with randomly-generated mock data.
 *
 * @returns {ScanResult} - A single scan result.
 */
export function createRandomScan(): ScanResult {
  return {
    id: faker.number.int(),
    profile_id: faker.number.int(),
    first_name: faker.person.firstName(),
    last_name: faker.person.lastName(),
    middle_name: faker.person.middleName(),
    age: faker.number.int({ min: 14, max: 120 }).toString(),
    // state is always "new" by default, see the `ScanResult` type definition.
    status: faker.helpers.arrayElement([
      "new",
      "optout_in_progress",
      "waiting_for_verification",
      "removed",
    ]),
    addresses: Array.from({ length: 3 }, () => ({
      zip: faker.location.zipCode(),
      city: faker.location.city(),
      state: faker.location.state({ abbreviated: true }) as StateAbbr,
      street: faker.location.street(),
    })),
    phones: [faker.phone.number()],
    emails: [faker.internet.exampleEmail()],
    relatives: Array.from({ length: 3 }, () => faker.person.fullName()),
    link: faker.internet.url(),
    data_broker: faker.internet.domainName(),
    data_broker_id: faker.number.int(),
    created_at: faker.date.recent({ days: 2 }).toISOString(),
    updated_at: faker.date.recent({ days: 1 }).toISOString(),
    url: faker.internet.url(),
  };
}
