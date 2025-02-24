/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { Locator, Page, expect } from "@playwright/test";
import { removeUnicodeChars } from "../utils/helpers";
import { DashboardPage } from "./dashBoardPage";

export class PurchasePage {
  readonly page: Page;
  readonly subscriptionHeader: Locator;
  readonly authorizationCheckbox: Locator;
  readonly payNowButton: Locator;
  readonly subscriptionConfirmation: Locator;
  readonly getStartedButton: Locator;
  readonly monitorPlusDetailsCard: Locator;
  readonly letsKeepGoingButton: Locator;
  readonly returnToDashboardButton: Locator;
  readonly goToNextStep: Locator;
  readonly planDetails: Locator;
  readonly paypalButton: Locator;

  constructor(page: Page) {
    this.page = page;

    this.subscriptionHeader = page.getByRole("heading", {
      name: "Set up your subscription",
    });
    this.authorizationCheckbox = page.getByTestId("confirm");
    this.payNowButton = page.getByText("Pay now");
    this.subscriptionConfirmation = page.getByRole("heading", {
      name: "Subscription confirmation",
    });
    this.getStartedButton = page.getByTestId("download-link");
    this.monitorPlusDetailsCard = page.getByTestId("plan-details-component");
    this.letsKeepGoingButton = page.getByRole("link", {
      name: "Let's keep going",
    });
    this.returnToDashboardButton = page.getByLabel("Return to dashboard");
    this.goToNextStep = page.getByLabel("Go to next step");
    this.planDetails = page.locator(".plan-details-description");
    this.paypalButton = this.page
      .frameLocator('//iframe[@title="PayPal"]')
      .first()
      .locator('div[role="link"]');
  }

  async fillOutStripeCardInfo() {
    // sometimes there's a reload, wait for idle before filling out form
    await this.page.waitForLoadState("domcontentloaded");

    let wait = 0;
    let frame = this.page.frame({ url: /elements-inner-card/ });

    while (!frame && wait < 30) {
      frame = this.page.frame({ url: /elements-inner-card/ });
      await this.page.waitForLoadState("domcontentloaded");
      await this.page.waitForTimeout(500);
      wait++;
    }

    const cardNameInputField = this.page.locator('[data-testid="name"]');
    await cardNameInputField.waitFor({ state: "attached" });
    await cardNameInputField.fill("Monitor Automation");

    if (!frame) {
      throw new Error("No frame found");
    }

    await frame.fill(".InputElement[name=cardnumber]", "");
    await frame.fill(".InputElement[name=cardnumber]", "4242424242424242");
    await frame.fill(".InputElement[name=exp-date]", "555");
    await frame.fill(".InputElement[name=cvc]", "333");
    await frame.fill(".InputElement[name=postal]", "77777");
  }

  async verifyMonthlyPlanDetails() {
    await this.subscriptionHeader.waitFor();
    const planDetails = removeUnicodeChars(
      (await this.planDetails.textContent()) as string,
    );
    expect(planDetails).toContain("monthly");
    await expect(this.subscriptionHeader).toBeVisible();
  }

  async verifyYearlyPlanDetails() {
    await this.subscriptionHeader.waitFor();
    const planDetails = removeUnicodeChars(
      (await this.planDetails.textContent()) as string,
    );
    expect(planDetails).toContain(
      `${process.env.E2E_TEST_ENV !== "production" ? "every 2 months" : "yearly"}`,
    );
  }

  async gotoPurchaseFromDashboard(
    dashboardPage: DashboardPage,
    yearly: boolean,
  ) {
    // navigate to subscription
    await dashboardPage.open();
    await dashboardPage.subscribeButton.click();

    // verify user purchase choices
    await expect(dashboardPage.subscribeDialogCloseButton).toBeVisible();
    await expect(dashboardPage.yearlyMonthlyTablist).toBeVisible();
    await dashboardPage.yearlyTab.click();
    await expect(
      dashboardPage.subscribeDialogSelectYearlyPlanLink,
    ).toBeVisible();

    await dashboardPage.monthlyTab.click();
    await expect(
      dashboardPage.subscribeDialogSelectMonthlyPlanLink,
    ).toBeVisible();

    if (yearly) {
      await dashboardPage.yearlyTab.click();
      await dashboardPage.subscribeDialogSelectYearlyPlanLink.click();
    } else {
      await dashboardPage.monthlyTab.click();
      await dashboardPage.subscribeDialogSelectMonthlyPlanLink.click();
    }
    await this.subscriptionHeader.waitFor();
  }
}
