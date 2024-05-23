/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { Page } from "@playwright/test";

export async function mockHIBPRangeAPI(page: Page) {
  // Mock the /api/data endpoint
  await page.route(/haveibeenpwned/g, async (route) => {
    // const mockedResponse = {
    //   status: 200,
    //   body: [
    //     {
    //       hashSuffix: "e1780641db14593c6bb19661d536002a70",
    //       websites: [
    //         "OnlinerSpambot",
    //         "2844Breaches",
    //         "Adobe",
    //         "Collection1",
    //         "Deezer",
    //         "SHEIN",
    //         "Tumblr",
    //         "VerificationsIO",
    //       ],
    //     },
    //     {
    //       hashSuffix: "0141B67784FEE8A408E5443784A4038294",
    //       websites: ["PDL"],
    //     },
    //   ],
    // };
    // await route.fulfill({
    //   status: mockedResponse.status,
    //   contentType: "application/json",
    //   body: JSON.stringify(mockedResponse.body),
    // });

    // log
    console.log("[E2E_LOG] - Route mocked: HIBP");
    await route.continue();
  });

  await page.route(/stage.mozaws.net/g, async (route) => {
    console.log("[E2E_LOG] - route mocked: fxa");
    await route.continue();
  });

  await page.route(/onerep/g, async (route) => {
    console.log("[E2E_LOG] - route mocked: onerep");
    await route.continue();
  });
}
