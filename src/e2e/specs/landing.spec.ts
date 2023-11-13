/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { test, expect } from "../fixtures/basePage.js";
import {
  defaultScreenshotOpts,
  waitForUrlOrTimeout,
} from "../utils/helpers.js";

test.describe(`${process.env.E2E_TEST_ENV} - Landing Page element verification`, () => {
  test.beforeEach(async ({ landingPage }) => {
    await landingPage.open();
  });

  test(" Verify that the site footer options work correctly ", async ({
    landingPage,
  }) => {
    // link to testrail case
    test.info().annotations.push({
      type: "testrail",
      description:
        "https://testrail.stage.mozaws.net/index.php?/cases/view/2095095",
    });

    const links = landingPage.links();

    // verify the actual hrefs in the footer matches expected
    expect(await landingPage.MozillaFooterLogoLink.getAttribute("href")).toBe(
      links.mozillaLogoUrl,
    );
    expect(await landingPage.AllBreachesLink.getAttribute("href")).toContain(
      links.allBreachesUrl,
    );
    expect(await landingPage.FAQLink.getAttribute("href")).toContain(
      links.FAQUrl,
    );
    expect(await landingPage.TermsLink.getAttribute("href")).toContain(
      links.TermsUrl,
    );
    expect(await landingPage.GithubLink.getAttribute("href")).toBe(
      links.GithubUrl,
    );
  });

  test("Verify landing page elements", async ({ landingPage }) => {
    // confirm landing page elements are visible
    await expect(landingPage.whyUseMonitorSec).toBeVisible();
    await expect(landingPage.howItWorksSec).toBeVisible();
    await expect(landingPage.questionsAboutSec).toBeVisible();
    await expect(landingPage.seeIfDataBreachSec).toBeVisible();
  });

  test("Verify that the site footer is displayed correctly @ui", async ({
    landingPage,
  }) => {
    // clear any possible banner
    await landingPage.maybeClearBanner();

    // link to testrail case
    test.info().annotations.push({
      type: "testrail",
      description:
        "https://testrail.stage.mozaws.net/index.php?/cases/view/2095094",
    });

    // visually verify landing page footer is displayed correctly
    await expect(landingPage.landingFooter).toHaveScreenshot(
      `${process.env.E2E_TEST_ENV}-landingFooter.png`,
      defaultScreenshotOpts,
    );
  });
});

test.describe(`${process.env.E2E_TEST_ENV} - Landing Page Functionality Verification`, () => {
  test("Verify landing page elements - free scan", async ({
    landingPage,
    scanPage,
    page,
  }) => {
    // link to testrail case
    test.info().annotations.push({
      type: "testrail",
      description:
        "https://testrail.stage.mozaws.net/index.php?/cases/view/2255913",
    });

    await page.goto(process.env.E2E_TEST_BASE_URL as string, {
      waitUntil: "networkidle",
    });

    // generate email
    const randomEmail = `${Date.now()}_auto@restmail.net`;

    // enter email for free scan
    await landingPage.enterScanEmail(randomEmail);

    const freeScanRedirect = await waitForUrlOrTimeout(page, "/scan", 5000);
    if (freeScanRedirect) {
      // verify scan page items
      // verify hero header text content
      expect(await scanPage.heroHeader.textContent()).toContain("We found");
      expect(await scanPage.heroHeader.textContent()).toContain(randomEmail);

      // verify first CTA button
      await expect(scanPage.getAlertsAboutBreachesButton).toBeVisible();

      // verify second CTA button
      await expect(scanPage.signUpForAlerts).toBeVisible();

      // verify redirect to sign in('/user/breaches')
      expect(await scanPage.signUpForAlerts.getAttribute("href")).toBe(
        "/user/breaches",
      );
      expect(
        await scanPage.getAlertsAboutBreachesButton.getAttribute("href"),
      ).toBe("/user/breaches");

      // verify 'have i been pwned' website redirect
      expect(await scanPage.haveIBeenPwnedLink.getAttribute("href")).toBe(
        "https://haveibeenpwned.com/",
      );
    } else {
      console.log(
        "[e2e] - Timeout reached without being redirect to the free scan results page",
      );
      expect(page.url().includes("/scan")).toBeTruthy();
    }
  });
});
