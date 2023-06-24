/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { faker } from "@faker-js/faker";
import { OneRepScanResult } from "../../customTypes";

// This is a full list of scan results, all pages, and would normally be
// stored in the `onerep_scan_results.onerep_scan_results` column
// as `jsonb`.

export const mockedOneRepScanResult = {
  data: [
    {
      id: 3038059606048768,
      age: 3392703368790016,
      url: "https://clever-tool.net",
      link: "https://wobbly-oven.biz/",
      emails: [
        "Anabelle31@example.com",
        "Michael66@example.org",
        "Claire21@example.com",
      ],
      phones: ["902-602-3091 x509", "1-318-888-9751 x074", "(807) 405-5785"],
      status: "new",
      scan_id: 135690459283456,
      addresses: [
        {
          zip: "74731",
          city: "East Madelynn",
          state: "Kansas",
          street: "Romaguera Stream",
        },
        {
          zip: "05558",
          city: "Lake Destinymouth",
          state: "Louisiana",
          street: "Clay Ranch",
        },
        {
          zip: "85247-5956",
          city: "Fort Al",
          state: "Idaho",
          street: "O'Reilly Cape",
        },
      ],
      last_name: "Leuschke",
      relatives: ["Dr. Domingo Schiller", "Merle Mraz", "Simon Dickinson"],
      created_at: "2022-08-23T12:46:21.535Z",
      first_name: "Webster",
      profile_id: 446077205479424,
      updated_at: "2022-09-12T03:07:15.412Z",
      data_broker: "glorious-decline.com",
      middle_name: "Avery",
      data_broker_id: 6245106222891008,
    },
    {
      id: 2422458204291072,
      age: 8783681059553280,
      url: "https://raw-implication.name",
      link: "https://utilized-patina.biz/",
      emails: [
        "Austin_Ratke20@example.com",
        "Conrad_Dibbert@example.net",
        "Roberta93@example.org",
      ],
      phones: [
        "545-229-2095 x433",
        "(640) 265-5486 x461",
        "270.888.9724 x60324",
      ],
      status: "new",
      scan_id: 3231762513657856,
      addresses: [
        {
          zip: "38895-6870",
          city: "West Edwardofort",
          state: "Louisiana",
          street: "Huel Islands",
        },
        {
          zip: "71651",
          city: "Fort Kiarraburgh",
          state: "New Jersey",
          street: "Grady Overpass",
        },
        {
          zip: "19071-2650",
          city: "North Violetberg",
          state: "Georgia",
          street: "Karson Greens",
        },
      ],
      last_name: "Jenkins",
      relatives: ["Anthony Spinka", "Roxanne Pagac MD", "Sheri Gerlach"],
      created_at: "2022-12-20T19:56:25.278Z",
      first_name: "Augusta",
      profile_id: 8939173994037248,
      updated_at: "2023-05-08T12:05:54.004Z",
      data_broker: "fragrant-abbreviation.biz",
      middle_name: "Logan",
      data_broker_id: 3216214182592512,
    },
    {
      id: 5430061092044800,
      age: 287951200190464,
      url: "https://chubby-breakthrough.org",
      link: "https://outlandish-nerve.biz/",
      emails: [
        "Alyce.Roberts16@example.org",
        "Hiram_Skiles@example.net",
        "Bruce32@example.net",
      ],
      phones: ["1-402-293-7617 x15609", "593-714-2275 x290", "1-224-949-6071"],
      status: "new",
      scan_id: 6575382260088832,
      addresses: [
        {
          zip: "54177-5937",
          city: "Blandatown",
          state: "Minnesota",
          street: "Schiller Points",
        },
        {
          zip: "29714",
          city: "Barnstable Town",
          state: "West Virginia",
          street: "Effertz Pike",
        },
        {
          zip: "78097-9935",
          city: "Whitefield",
          state: "Maryland",
          street: "Heidenreich Circles",
        },
      ],
      last_name: "Okuneva",
      relatives: ["Elias Dickens", "Bobby Durgan", "Mamie Pouros DDS"],
      created_at: "2022-09-15T15:19:51.973Z",
      first_name: "Ursula",
      profile_id: 6133019091927040,
      updated_at: "2022-09-22T15:23:08.758Z",
      data_broker: "long-term-try.net",
      middle_name: "Addison",
      data_broker_id: 1875589522784256,
    },
  ],
};

export function createRandomScan(): OneRepScanResult {
  return {
    id: faker.number.int() || null,
    age: faker.number.int(),
    url: faker.internet.url(),
    link: faker.internet.url(),
    emails: [
      faker.internet.exampleEmail(),
      faker.internet.exampleEmail(),
      faker.internet.exampleEmail(),
    ],
    phones: [faker.phone.number(), faker.phone.number(), faker.phone.number()],
    status: "new", // TODO
    scan_id: faker.number.int(),
    addresses: [
      {
        zip: faker.location.zipCode(),
        city: faker.location.city(),
        state: faker.location.state(),
        street: faker.location.street(),
      },
      {
        zip: faker.location.zipCode(),
        city: faker.location.city(),
        state: faker.location.state(),
        street: faker.location.street(),
      },
      {
        zip: faker.location.zipCode(),
        city: faker.location.city(),
        state: faker.location.state(),
        street: faker.location.street(),
      },
    ],
    last_name: faker.person.lastName(),
    relatives: [
      faker.person.fullName(),
      faker.person.fullName(),
      faker.person.fullName(),
    ],
    created_at: faker.date.past(),
    first_name: faker.person.firstName(),
    profile_id: faker.number.int(),
    updated_at: faker.date.past(),
    data_broker: faker.internet.domainName(),
    middle_name: faker.person.middleName(),
    data_broker_id: faker.number.int(),
  };
}
