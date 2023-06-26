/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { faker } from "@faker-js/faker";
import type { ScanResult } from "../app/functions/server/onerep.d";

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
 */
function createRandomScan(): ScanResult {
  return {
    id: faker.number.int(),
    age: faker.number.int({ min: 14, max: 120 }),
    url: faker.internet.url(),
    link: faker.internet.url(),
    emails: [
      faker.internet.exampleEmail(),
      faker.internet.exampleEmail(),
      faker.internet.exampleEmail(),
    ],
    phones: [faker.phone.number(), faker.phone.number(), faker.phone.number()],
    status: "new", // state is always "new" by default, see the `ScanResult` type definition.
    scan_id: faker.number.int(),
    addresses: Array.from({ length: 3 }, () => ({
      zip: faker.location.zipCode(),
      city: faker.location.city(),
      state: faker.location.state(),
      street: faker.location.street(),
    })),
    last_name: faker.person.lastName(),
    relatives: Array.from({ length: 3 }, () => faker.person.fullName()),
    created_at: faker.date.past().toString(),
    first_name: faker.person.firstName(),
    profile_id: faker.number.int(),
    updated_at: faker.date.past().toString(),
    data_broker: faker.internet.domainName(),
    middle_name: faker.person.middleName(),
    data_broker_id: faker.number.int(),
  };
}
