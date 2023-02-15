const {test, expect } = require("../fixtures/basePage");

test.describe("Check landing page", () => {
  test.beforeEach(async ({ landingPage }) => {
    await landingPage.open();
  });

  test("Verify landing page elements", async ({ page }) => {
    // Click the get started link.
    await page.getByRole("link", { name: "Breaches" }).click();
    await page.waitForTimeout(2000);

    // Expects the URL to contain intro.
    await expect(page).toHaveURL(/breaches/);
  });
});
