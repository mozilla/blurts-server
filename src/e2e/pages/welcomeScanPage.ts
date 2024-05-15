/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { Locator, Page, expect } from "@playwright/test";
import { DashboardPage } from "./dashBoardPage";

export class WelcomePage {
  readonly page: Page;
  readonly startFreeScanButton: Locator;
  readonly howWeProtectYourDataLink: Locator;
  readonly welcomePageTitle: Locator;

  readonly getStartedStep: Locator;
  readonly enterInfoStep: Locator;
  readonly findExposuresStep: Locator;

  readonly enterInfoStepTitle: Locator;
  readonly whyDoWeNeedThisInfoLink: Locator;
  readonly firstNameInputField: Locator;
  readonly lastNameInputField: Locator;
  readonly dobInputField: Locator;
  readonly cityStateInputField: Locator;
  readonly goBackButton: Locator;
  readonly findExposuresButton: Locator;

  readonly isThisCorrectModal: Locator;
  readonly modalConfirmButton: Locator;
  readonly modalEditButton: Locator;

  constructor(page: Page) {
    this.page = page;

    this.startFreeScanButton = page.getByRole("button", {
      name: "Start my free scan",
    });
    this.howWeProtectYourDataLink = page.getByRole("button", {
      name: "See how we protect your data",
    });
    this.welcomePageTitle = page.getByRole("heading");
    this.getStartedStep = page.locator("li");
    this.enterInfoStep = page.locator("li").filter({ hasText: "Enter info" });
    this.findExposuresStep = page
      .locator("li")
      .filter({ hasText: "Find exposures" });

    this.enterInfoStepTitle = page.getByRole("heading", {
      name: "Enter the details you want to protect",
    });
    this.whyDoWeNeedThisInfoLink = page.getByRole("button", {
      name: "Why do we need this info?",
    });
    this.firstNameInputField = page.getByRole("textbox", {
      name: "First name",
    });
    this.lastNameInputField = page.getByRole("textbox", { name: "Last name" });
    this.dobInputField = page.getByLabel("Date of birth");
    this.cityStateInputField = page.getByRole("combobox", {
      name: "City and state",
    });
    this.goBackButton = page.getByRole("button", { name: "Go back" });
    this.findExposuresButton = page.getByRole("button", {
      name: "Find exposures",
    });

    // confirmation popup
    this.isThisCorrectModal = page.getByLabel("Is this correct?");
    this.modalConfirmButton = page.getByRole("button", { name: "Confirm" });
    this.modalEditButton = page.getByRole("button", { name: "Edit" });
  }

  async goThroughFirstScan() {
    // confirm get started step elements
    expect(await this.getStartedStep.count()).toEqual(3);
    await expect(this.page.getByText("Get started")).toBeVisible();
    await expect(this.page.getByText("Enter info")).toBeVisible();
    await expect(this.page.getByText("Find exposures")).toBeVisible();

    // navigate to enter info step
    await this.startFreeScanButton.click();

    // confirm enter info step
    await this.firstNameInputField.fill("Monitor");
    await this.lastNameInputField.fill("Automation1");
    await this.cityStateInputField.pressSequentially("Atlanta, GA, USA");
    await this.page.getByText("AtlantaGA, USA", { exact: true }).click();
    await this.dobInputField.fill("2002-01-01");
    await this.findExposuresButton.click();

    await this.modalConfirmButton.click();
    // Waiting for scan to complete
    const dashboardPage = new DashboardPage(this.page);
    await dashboardPage.actionNeededTab.waitFor();
  }
}
