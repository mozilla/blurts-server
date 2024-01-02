/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { it, expect } from "@jest/globals";
import {
  getByRole,
  getByText,
  queryByRole,
  render,
  screen,
} from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { composeStory } from "@storybook/react";
import { axe } from "jest-axe";
import Meta, {
  DashboardNonUsNoBreaches,
  DashboardNonUsUnresolvedBreaches,
  DashboardNonUsResolvedBreaches,
  DashboardUsNoPremiumNoScanNoBreaches,
  DashboardUsNoPremiumNoScanUnresolvedBreaches,
  DashboardUsNoPremiumNoScanResolvedBreaches,
  DashboardUsNoPremiumEmptyScanNoBreaches,
  DashboardUsNoPremiumEmptyScanUnresolvedBreaches,
  DashboardUsNoPremiumEmptyScanResolvedBreaches,
  DashboardUsNoPremiumUnresolvedScanNoBreaches,
  DashboardUsNoPremiumUnresolvedScanUnresolvedBreaches,
  DashboardUsNoPremiumUnresolvedScanResolvedBreaches,
  DashboardUsNoPremiumResolvedScanNoBreaches,
  DashboardUsNoPremiumResolvedScanUnresolvedBreaches,
  DashboardUsNoPremiumResolvedScanResolvedBreaches,
  DashboardUsPremiumEmptyScanNoBreaches,
  DashboardUsPremiumEmptyScanUnresolvedBreaches,
  DashboardUsPremiumEmptyScanResolvedBreaches,
  DashboardUsPremiumUnresolvedScanNoBreaches,
  DashboardUsPremiumUnresolvedScanUnresolvedBreaches,
  DashboardUsPremiumUnresolvedScanResolvedBreaches,
  DashboardUsPremiumResolvedScanNoBreaches,
  DashboardUsPremiumResolvedScanUnresolvedBreaches,
  DashboardUsPremiumResolvedScanResolvedBreaches,
  DashboardUsNoPremiumScanInProgressNoBreaches,
  DashboardUsNoPremiumScanInProgressUnresolvedBreaches,
  DashboardUsNoPremiumScanInProgressResolvedBreaches,
  DashboardUsPremiumScanInProgressNoBreaches,
  DashboardUsPremiumScanInProgressUnresolvedBreaches,
  DashboardUsPremiumScanInProgressResolvedBreaches,
  DashboardInvalidPremiumUserNoScanResolvedBreaches,
} from "./Dashboard.stories";
import { useTelemetry } from "../../../../../../hooks/useTelemetry";

jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
  usePathname: jest.fn(),
}));
jest.mock("../../../../../../hooks/useTelemetry");

jest.mock("../../../../../../components/client/DataBrokerImage", () => {
  return {
    // Mock this with an empty React component. Otherwise, tests will complain:
    // > Warning: A suspended resource finished loading inside a test, but the
    // > event was not wrapped in act(...).
    // > When testing, code that resolves suspended data should be wrapped into
    // > act(...)
    DataBrokerImage: () => null,
  };
});

it("passes the axe accessibility test suite for DashboardNonUsNoBreaches", async () => {
  const ComposedDashboard = composeStory(DashboardNonUsNoBreaches, Meta);
  const { container } = render(<ComposedDashboard />);
  expect(await axe(container)).toHaveNoViolations();
});

it("passes the axe accessibility test suite for DashboardNonUsUnresolvedBreaches", async () => {
  const ComposedDashboard = composeStory(
    DashboardNonUsUnresolvedBreaches,
    Meta,
  );
  const { container } = render(<ComposedDashboard />);
  expect(await axe(container)).toHaveNoViolations();
});

it("passes the axe accessibility test suite for DashboardNonUsResolvedBreaches", async () => {
  const ComposedDashboard = composeStory(DashboardNonUsResolvedBreaches, Meta);
  const { container } = render(<ComposedDashboard />);
  expect(await axe(container)).toHaveNoViolations();
});

it("passes the axe accessibility test suite for DashboardUsNoPremiumNoScanNoBreaches", async () => {
  const ComposedDashboard = composeStory(
    DashboardUsNoPremiumNoScanNoBreaches,
    Meta,
  );
  const { container } = render(<ComposedDashboard />);
  expect(await axe(container)).toHaveNoViolations();
});

it("passes the axe accessibility test suite for DashboardUsNoPremiumNoScanUnresolvedBreaches", async () => {
  const ComposedDashboard = composeStory(
    DashboardUsNoPremiumNoScanUnresolvedBreaches,
    Meta,
  );
  const { container } = render(<ComposedDashboard />);
  expect(await axe(container)).toHaveNoViolations();
});

it("passes the axe accessibility test suite for DashboardUsNoPremiumNoScanResolvedBreaches", async () => {
  const ComposedDashboard = composeStory(
    DashboardUsNoPremiumNoScanResolvedBreaches,
    Meta,
  );
  const { container } = render(<ComposedDashboard />);
  expect(await axe(container)).toHaveNoViolations();
});

it("passes the axe accessibility test suite for DashboardUsNoPremiumEmptyScanNoBreaches", async () => {
  const ComposedDashboard = composeStory(
    DashboardUsNoPremiumEmptyScanNoBreaches,
    Meta,
  );
  const { container } = render(<ComposedDashboard />);
  expect(await axe(container)).toHaveNoViolations();
});

it("passes the axe accessibility test suite for DashboardUsNoPremiumEmptyScanUnresolvedBreaches", async () => {
  const ComposedDashboard = composeStory(
    DashboardUsNoPremiumEmptyScanUnresolvedBreaches,
    Meta,
  );
  const { container } = render(<ComposedDashboard />);
  expect(await axe(container)).toHaveNoViolations();
});

it("passes the axe accessibility test suite for DashboardUsNoPremiumEmptyScanResolvedBreaches", async () => {
  const ComposedDashboard = composeStory(
    DashboardUsNoPremiumEmptyScanResolvedBreaches,
    Meta,
  );
  const { container } = render(<ComposedDashboard />);
  expect(await axe(container)).toHaveNoViolations();
});

it("passes the axe accessibility test suite for DashboardUsNoPremiumUnresolvedScanNoBreaches", async () => {
  const ComposedDashboard = composeStory(
    DashboardUsNoPremiumUnresolvedScanNoBreaches,
    Meta,
  );
  const { container } = render(<ComposedDashboard />);
  expect(await axe(container)).toHaveNoViolations();
});

it("passes the axe accessibility test suite for DashboardUsNoPremiumUnresolvedScanUnresolvedBreaches", async () => {
  const ComposedDashboard = composeStory(
    DashboardUsNoPremiumUnresolvedScanUnresolvedBreaches,
    Meta,
  );
  const { container } = render(<ComposedDashboard />);
  expect(await axe(container)).toHaveNoViolations();
});

it("passes the axe accessibility test suite for DashboardUsNoPremiumUnresolvedScanResolvedBreaches", async () => {
  const ComposedDashboard = composeStory(
    DashboardUsNoPremiumUnresolvedScanResolvedBreaches,
    Meta,
  );
  const { container } = render(<ComposedDashboard />);
  expect(await axe(container)).toHaveNoViolations();
});

it("passes the axe accessibility test suite for DashboardUsNoPremiumResolvedScanNoBreaches", async () => {
  const ComposedDashboard = composeStory(
    DashboardUsNoPremiumResolvedScanNoBreaches,
    Meta,
  );
  const { container } = render(<ComposedDashboard />);
  expect(await axe(container)).toHaveNoViolations();
});

it("passes the axe accessibility test suite for DashboardUsNoPremiumResolvedScanUnresolvedBreaches", async () => {
  const ComposedDashboard = composeStory(
    DashboardUsNoPremiumResolvedScanUnresolvedBreaches,
    Meta,
  );
  const { container } = render(<ComposedDashboard />);
  expect(await axe(container)).toHaveNoViolations();
});

it("passes the axe accessibility test suite for DashboardUsNoPremiumResolvedScanResolvedBreaches", async () => {
  const ComposedDashboard = composeStory(
    DashboardUsNoPremiumResolvedScanResolvedBreaches,
    Meta,
  );
  const { container } = render(<ComposedDashboard />);
  expect(await axe(container)).toHaveNoViolations();
});

it("passes the axe accessibility test suite for DashboardUsPremiumEmptyScanNoBreaches", async () => {
  const ComposedDashboard = composeStory(
    DashboardUsPremiumEmptyScanNoBreaches,
    Meta,
  );
  const { container } = render(<ComposedDashboard />);
  expect(await axe(container)).toHaveNoViolations();
});

it("passes the axe accessibility test suite for DashboardUsPremiumEmptyScanUnresolvedBreaches", async () => {
  const ComposedDashboard = composeStory(
    DashboardUsPremiumEmptyScanUnresolvedBreaches,
    Meta,
  );
  const { container } = render(<ComposedDashboard />);
  expect(await axe(container)).toHaveNoViolations();
});

it("passes the axe accessibility test suite for DashboardUsPremiumEmptyScanResolvedBreaches", async () => {
  const ComposedDashboard = composeStory(
    DashboardUsPremiumEmptyScanResolvedBreaches,
    Meta,
  );
  const { container } = render(<ComposedDashboard />);
  expect(await axe(container)).toHaveNoViolations();
});

it("passes the axe accessibility test suite for DashboardUsPremiumUnresolvedScanNoBreaches", async () => {
  const ComposedDashboard = composeStory(
    DashboardUsPremiumUnresolvedScanNoBreaches,
    Meta,
  );
  const { container } = render(<ComposedDashboard />);
  expect(await axe(container)).toHaveNoViolations();
});

it("passes the axe accessibility test suite for DashboardUsPremiumUnresolvedScanUnresolvedBreaches", async () => {
  const ComposedDashboard = composeStory(
    DashboardUsPremiumUnresolvedScanUnresolvedBreaches,
    Meta,
  );
  const { container } = render(<ComposedDashboard />);
  expect(await axe(container)).toHaveNoViolations();
});

it("passes the axe accessibility test suite for DashboardUsPremiumUnresolvedScanResolvedBreaches", async () => {
  const ComposedDashboard = composeStory(
    DashboardUsPremiumUnresolvedScanResolvedBreaches,
    Meta,
  );
  const { container } = render(<ComposedDashboard />);
  expect(await axe(container)).toHaveNoViolations();
});

it("passes the axe accessibility test suite for DashboardUsPremiumResolvedScanNoBreaches", async () => {
  const ComposedDashboard = composeStory(
    DashboardUsPremiumResolvedScanNoBreaches,
    Meta,
  );
  const { container } = render(<ComposedDashboard />);
  expect(await axe(container)).toHaveNoViolations();
});

it("passes the axe accessibility test suite for DashboardUsPremiumResolvedScanUnresolvedBreaches", async () => {
  const ComposedDashboard = composeStory(
    DashboardUsPremiumResolvedScanUnresolvedBreaches,
    Meta,
  );
  const { container } = render(<ComposedDashboard />);
  expect(await axe(container)).toHaveNoViolations();
});

it("passes the axe accessibility test suite for DashboardUsPremiumResolvedScanResolvedBreaches", async () => {
  const ComposedDashboard = composeStory(
    DashboardUsPremiumResolvedScanResolvedBreaches,
    Meta,
  );
  const { container } = render(<ComposedDashboard />);
  expect(await axe(container)).toHaveNoViolations();
});

it("passes the axe accessibility test suite for DashboardUsPremiumScanEmptyInProgressNoBreaches", async () => {
  const ComposedDashboard = composeStory(
    DashboardUsNoPremiumScanInProgressNoBreaches,
    Meta,
  );
  const { container } = render(<ComposedDashboard />);
  expect(await axe(container)).toHaveNoViolations();
});

it("passes the axe accessibility test suite for DashboardUsPremiumScanEmptyInProgressUnresolvedBreaches", async () => {
  const ComposedDashboard = composeStory(
    DashboardUsNoPremiumScanInProgressUnresolvedBreaches,
    Meta,
  );
  const { container } = render(<ComposedDashboard />);
  expect(await axe(container)).toHaveNoViolations();
});

it("passes the axe accessibility test suite for DashboardUsPremiumScanUnresolvedInProgressNoBreaches", async () => {
  const ComposedDashboard = composeStory(
    DashboardUsNoPremiumScanInProgressResolvedBreaches,
    Meta,
  );
  const { container } = render(<ComposedDashboard />);
  expect(await axe(container)).toHaveNoViolations();
});

it("passes the axe accessibility test suite for DashboardUsPremiumScanUnresolvedInProgressUnresolvedBreaches", async () => {
  const ComposedDashboard = composeStory(
    DashboardUsPremiumScanInProgressNoBreaches,
    Meta,
  );
  const { container } = render(<ComposedDashboard />);
  expect(await axe(container)).toHaveNoViolations();
});

it("passes the axe accessibility test suite for DashboardUsPremiumScanInProgressUnresolvedBreaches", async () => {
  const ComposedDashboard = composeStory(
    DashboardUsPremiumScanInProgressUnresolvedBreaches,
    Meta,
  );
  const { container } = render(<ComposedDashboard />);
  expect(await axe(container)).toHaveNoViolations();
});

it("passes the axe accessibility test suite for DashboardUsPremiumScanInProgressResolvedBreaches", async () => {
  const ComposedDashboard = composeStory(
    DashboardUsPremiumScanInProgressResolvedBreaches,
    Meta,
  );
  const { container } = render(<ComposedDashboard />);
  expect(await axe(container)).toHaveNoViolations();
});

it("shows the 'Start a free scan' CTA to free US-based users who haven't performed a scan yet", () => {
  const ComposedDashboard = composeStory(
    DashboardUsNoPremiumNoScanNoBreaches,
    Meta,
  );
  render(<ComposedDashboard />);

  const freeScanCta = screen.getByRole("link", { name: "Start a free scan" });
  expect(freeScanCta).toBeInTheDocument();
});

it("does not show the 'Start a free scan' CTA for non-US users", () => {
  const ComposedDashboard = composeStory(DashboardNonUsNoBreaches, Meta);
  render(<ComposedDashboard />);

  const freeScanCta = screen.queryByRole("link", { name: "Start a free scan" });
  expect(freeScanCta).not.toBeInTheDocument();
});

it("switches between tab panels", async () => {
  const user = userEvent.setup();
  const ComposedDashboard = composeStory(
    DashboardUsNoPremiumNoScanNoBreaches,
    Meta,
  );
  render(<ComposedDashboard />);

  const tabActionNeededTrigger = screen.getByRole("tab", {
    name: "Action needed",
  });
  expect(tabActionNeededTrigger.getAttribute("aria-selected")).toBe("true");
  const tabFixedTrigger = screen.getByRole("tab", {
    name: "Fixed",
  });
  tabFixedTrigger.getAttribute("aria-selected");
  expect(tabFixedTrigger.getAttribute("aria-selected")).toBe("false");
  await user.click(tabFixedTrigger);
  expect(tabFixedTrigger.getAttribute("aria-selected")).toBe("true");
  expect(tabActionNeededTrigger.getAttribute("aria-selected")).toBe("false");
});

it("shows consistent counts in the chart on the active tab", () => {
  const ComposedDashboard = composeStory(
    DashboardUsPremiumUnresolvedScanUnresolvedBreaches,
    Meta,
  );
  render(<ComposedDashboard />);

  const exposureCounter = 25;
  const chartElement = screen.getByRole("img", {
    name: `⁨${exposureCounter}⁩ exposures`,
  });
  expect(chartElement).toBeInTheDocument();

  const listSubheading = screen.getByText(
    new RegExp(
      `We found your information exposed ⁨${exposureCounter}⁩ times over (.*?) data breaches and ⁨2⁩ data broker sites that are selling your personal info.`,
    ),
  );
  expect(listSubheading).toBeInTheDocument();
});

it("shows consistent counts in the chart on the fixed tab", async () => {
  const user = userEvent.setup();
  const ComposedDashboard = composeStory(
    DashboardUsPremiumUnresolvedScanUnresolvedBreaches,
    Meta,
  );
  render(<ComposedDashboard />);

  const tabFixedTrigger = screen.getByRole("tab", {
    name: "Fixed",
  });
  await user.click(tabFixedTrigger);

  const fixedCounter = 40;
  const chartElement = screen.getByRole("img", {
    name: `⁨${fixedCounter}⁩ exposures`,
  });
  expect(chartElement).toBeInTheDocument();
  const chartCaption = screen.getByText(
    `This chart shows the total exposures that are fixed (⁨${fixedCounter}⁩ out of ⁨81⁩)`,
  );
  expect(chartCaption).toBeInTheDocument();
});

it("shows US users with Premium the Premium badge", () => {
  const ComposedDashboard = composeStory(
    DashboardUsPremiumEmptyScanNoBreaches,
    Meta,
  );
  render(<ComposedDashboard />);

  // We show a Premium badge on desktop in the toolbar and in the mobile menu
  const premiumBadges = screen.queryAllByText("Premium");
  expect(premiumBadges.length).toBe(2);
});

it("shows US users without Premium the upsell button", () => {
  const ComposedDashboard = composeStory(
    DashboardUsNoPremiumEmptyScanNoBreaches,
    Meta,
  );
  render(<ComposedDashboard />);

  // We show a CTA on desktop in the toolbar and in the mobile menu
  const premiumCtas = screen.queryAllByRole("button", {
    name: "Upgrade to ⁨Premium⁩",
  });
  expect(premiumCtas.length).toBe(2);
});

it("does not show non-US users the Premium badge", () => {
  const ComposedDashboard = composeStory(DashboardNonUsNoBreaches, Meta);
  render(<ComposedDashboard />);

  // We show a Premium badge on desktop in the toolbar and in the mobile menu
  const premiumBadges = screen.queryAllByText("Premium");
  expect(premiumBadges.length).toBe(0);
});

it("does not show non-US users the upsell button", () => {
  const ComposedDashboard = composeStory(DashboardNonUsNoBreaches, Meta);
  render(<ComposedDashboard />);

  // We show a CTA on desktop in the toolbar and in the mobile menu
  const premiumCtas = screen.queryAllByRole("button", {
    name: "Upgrade to ⁨Premium⁩",
  });
  expect(premiumCtas.length).toBe(0);
});

it("opens and closes the premium upsell dialog via the Premium upsell badge)", async () => {
  const user = userEvent.setup();
  const ComposedDashboard = composeStory(
    DashboardUsNoPremiumNoScanNoBreaches,
    Meta,
  );
  render(<ComposedDashboard />);

  // We show a CTA on desktop in the toolbar and in the mobile menu
  const premiumCtas = screen.queryAllByRole("button", {
    name: "Upgrade to ⁨Premium⁩",
  });
  expect(premiumCtas.length).toBe(2);

  // Shows the modal for the desktop layout
  await user.click(premiumCtas[0]);
  expect(
    screen.getByText("Choose the level of protection that’s right for you"),
  ).toBeInTheDocument();
  const closeButtonIcon1 = screen.getByLabelText("Close");
  await user.click(closeButtonIcon1.parentElement as HTMLElement);
  expect(
    screen.queryByText("Choose the level of protection that’s right for you"),
  ).not.toBeInTheDocument();

  // Shows the modal for the mobile layout
  await user.click(premiumCtas[1]);
  expect(
    screen.getByText("Choose the level of protection that’s right for you"),
  ).toBeInTheDocument();
  const closeButtonIcon2 = screen.getByLabelText("Close");
  await user.click(closeButtonIcon2.parentElement as HTMLElement);
  expect(
    screen.queryByText("Choose the level of protection that’s right for you"),
  ).not.toBeInTheDocument();
});

it("opens and closes the premium upsell dialog via the Premium upsell button)", async () => {
  const user = userEvent.setup();
  const ComposedDashboard = composeStory(
    DashboardUsNoPremiumEmptyScanResolvedBreaches,
    Meta,
  );
  render(<ComposedDashboard />);

  const premiumCta = screen.getByRole("button", {
    name: "Get continuous protection",
  });
  expect(premiumCta).toBeInTheDocument();

  await user.click(premiumCta);
  expect(
    screen.getByText("Choose the level of protection that’s right for you"),
  ).toBeInTheDocument();
  const closeButtonIcon1 = screen.getByLabelText("Close");
  await user.click(closeButtonIcon1.parentElement as HTMLElement);
  expect(
    screen.queryByText("Choose the level of protection that’s right for you"),
  ).not.toBeInTheDocument();
});

it("toggles between the product offerings in the premium upsell dialog", async () => {
  const user = userEvent.setup();
  const ComposedDashboard = composeStory(
    DashboardUsNoPremiumNoScanNoBreaches,
    Meta,
  );
  render(<ComposedDashboard />);

  // We show a CTA on desktop in the toolbar and in the mobile menu
  const premiumCtas = screen.queryAllByRole("button", {
    name: "Upgrade to ⁨Premium⁩",
  });
  expect(premiumCtas.length).toBe(2);

  await user.click(premiumCtas[0]);

  const productTabYearly1 = screen.getByRole("tab", { name: "Yearly" });
  expect(productTabYearly1?.getAttribute("aria-selected")).toBe("true");
  const productTabMonthly1 = screen.getByRole("tab", { name: "Monthly" });
  expect(productTabMonthly1?.getAttribute("aria-selected")).toBe("false");
  const productYearlyCta = screen.getByRole("link", {
    name: "Select yearly plan",
  });
  expect(productYearlyCta).toBeInTheDocument();

  await user.click(productTabMonthly1);

  const productTabYearly2 = screen.getByRole("tab", { name: "Yearly" });
  expect(productTabYearly2?.getAttribute("aria-selected")).toBe("false");
  const productTabMonthly2 = screen.getByRole("tab", { name: "Monthly" });
  expect(productTabMonthly2?.getAttribute("aria-selected")).toBe("true");

  const productMontlyCta = screen.getByRole("link", {
    name: "Select monthly plan",
  });
  expect(productMontlyCta).toBeInTheDocument();
});

it("counts in Glean how often people click the upgrade CTA to purchase the monthly plan", async () => {
  const user = userEvent.setup();
  const ComposedDashboard = composeStory(
    DashboardUsNoPremiumNoScanNoBreaches,
    Meta,
  );
  const mockedRecord = useTelemetry();
  render(<ComposedDashboard />);

  // We show a CTA on desktop in the toolbar and in the mobile menu
  const premiumCtas = screen.queryAllByRole("button", {
    name: "Upgrade to ⁨Premium⁩",
  });
  await user.click(premiumCtas[0]);
  const productTabMonthly = screen.getByRole("tab", { name: "Monthly" });
  await user.click(productTabMonthly);
  const confirmButton = screen.getByRole("link", {
    name: "Select monthly plan",
  });
  // jsdom will complain about not being able to navigate to a different page
  // after clicking the link; suppress that error, as it's not relevant to the
  // test:
  jest.spyOn(console, "error").mockImplementationOnce(() => undefined);
  await user.click(confirmButton);

  expect(mockedRecord).toHaveBeenCalledWith(
    "upgradeIntent",
    "click",
    expect.objectContaining({
      button_id: "intent_to_purchase_monthly_plan_nav_modal",
    }),
  );
});

it("counts in Glean how often people click the upgrade CTA to purchase the yearly plan", async () => {
  const user = userEvent.setup();
  const ComposedDashboard = composeStory(
    DashboardUsNoPremiumNoScanNoBreaches,
    Meta,
  );
  const mockedRecord = useTelemetry();
  render(<ComposedDashboard />);

  // We show a CTA on desktop in the toolbar and in the mobile menu
  const premiumCtas = screen.queryAllByRole("button", {
    name: "Upgrade to ⁨Premium⁩",
  });
  await user.click(premiumCtas[0]);
  // Switch to the monthly tab by clicking it...
  const productTabMonthly = screen.getByRole("tab", { name: "Monthly" });
  await user.click(productTabMonthly);
  // ...then back to the yearly tab by pressing the left arrow on the keyboard.
  await user.keyboard("[ArrowLeft]");
  const confirmButton = screen.getByRole("link", {
    name: "Select yearly plan",
  });
  // jsdom will complain about not being able to navigate to a different page
  // after clicking the link; suppress that error, as it's not relevant to the
  // test:
  jest.spyOn(console, "error").mockImplementationOnce(() => undefined);
  await user.click(confirmButton);

  expect(mockedRecord).toHaveBeenCalledWith(
    "upgradeIntent",
    "click",
    expect.objectContaining({
      button_id: "intent_to_purchase_yearly_plan_nav_modal",
    }),
  );
});

it("shows returned free user who has resolved all tasks premium upsell and all fixed description", async () => {
  const user = userEvent.setup();
  const ComposedDashboard = composeStory(
    DashboardUsNoPremiumResolvedScanResolvedBreaches,
    Meta,
  );
  render(<ComposedDashboard />);

  // We show a CTA on desktop in the toolbar and in the mobile menu
  const premiumCtas = screen.queryAllByRole("button", {
    name: "Upgrade to ⁨Premium⁩",
  });
  expect(premiumCtas.length).toBe(2);

  // show banner CTA premium upgrade
  const bannerPremiumCta = screen.queryAllByRole("button", {
    name: "Get continuous protection",
  });
  expect(bannerPremiumCta.length).toBe(1);

  // click on cta
  await user.click(bannerPremiumCta[0]);
  expect(screen.getByRole("dialog")).toBeInTheDocument();
});

it("shows a user who has resolved all exposures a CTA to check out what was fixed", async () => {
  const user = userEvent.setup();
  const ComposedDashboard = composeStory(DashboardNonUsResolvedBreaches, Meta);
  render(<ComposedDashboard />);

  // show banner CTA premium upgrade
  const bannerPremiumCta = screen.queryAllByRole("button", {
    name: "See what’s fixed",
  });
  expect(bannerPremiumCta.length).toBe(1);

  // click on cta
  await user.click(bannerPremiumCta[0]);

  const fixedTab = screen.getByRole("tab", { name: "Fixed" });
  expect(fixedTab).toHaveAttribute("aria-selected", "true");
});

it("shows a returning Premium user who has resolved all tasks a CTA to check out what was fixed", async () => {
  const user = userEvent.setup();
  const ComposedDashboard = composeStory(
    DashboardUsPremiumResolvedScanResolvedBreaches,
    Meta,
  );
  render(<ComposedDashboard />);

  // show banner CTA premium upgrade
  const bannerPremiumCta = screen.queryAllByRole("button", {
    name: "See what’s fixed",
  });
  expect(bannerPremiumCta.length).toBe(1);

  // click on cta
  await user.click(bannerPremiumCta[0]);

  const fixedTab = screen.getByRole("tab", { name: "Fixed" });
  expect(fixedTab).toHaveAttribute("aria-selected", "true");
});

it("shows a returning Premium user who has zero scan results and resolved breaches a CTA to check out what was fixed", async () => {
  const user = userEvent.setup();
  const ComposedDashboard = composeStory(
    DashboardUsPremiumEmptyScanResolvedBreaches,
    Meta,
  );
  render(<ComposedDashboard />);

  // show banner CTA premium upgrade
  const seeWhatsFixedCta = screen.getByRole("button", {
    name: "See what’s fixed",
  });
  expect(seeWhatsFixedCta).toBeInTheDocument();

  // click on cta
  await user.click(seeWhatsFixedCta);

  const fixedTab = screen.getByRole("tab", { name: "Fixed" });
  expect(fixedTab).toHaveAttribute("aria-selected", "true");
});

it("shows scan in progress indicators on the dashboard with no breaches", () => {
  const ComposedDashboard = composeStory(
    DashboardUsPremiumScanInProgressNoBreaches,
    Meta,
  );
  render(<ComposedDashboard />);

  const bannerContent = screen.getByText("Your scan is still in progress");
  expect(bannerContent).toBeInTheDocument();

  const chartPrompt = screen.getByText("Scan in progress:");
  expect(chartPrompt).toBeInTheDocument();

  const exposureTableDescription = screen.getByText(
    "We didn’t find any data breaches, but we’re still scanning sites that may be selling your personal info.",
  );
  expect(exposureTableDescription).toBeInTheDocument();
});

it("shows scan in progress indicators on the dashboard for users with breaches", () => {
  const ComposedDashboard = composeStory(
    DashboardUsPremiumScanInProgressUnresolvedBreaches,
    Meta,
  );
  render(<ComposedDashboard />);

  const bannerContent = screen.getByText("Your scan is still in progress");
  expect(bannerContent).toBeInTheDocument();
  const bannerContentCta = screen.getByRole("link", {
    name: "See what’s ready now",
  });
  expect(bannerContentCta).toBeInTheDocument();

  const chartPrompt = screen.getByText("Scan in progress:");
  expect(chartPrompt).toBeInTheDocument();

  const exposureTableDescription = screen.getByText(
    "We found ⁨9⁩ exposures so far, but we’re still scanning sites that sell your personal info. This should be done within a few minutes.",
    { exact: false },
  );
  expect(exposureTableDescription).toBeInTheDocument();
});

it("shows scan in progress indicators on the dashboard and no breaches", () => {
  const ComposedDashboard = composeStory(
    DashboardUsNoPremiumScanInProgressNoBreaches,
    Meta,
  );
  render(<ComposedDashboard />);

  const bannerContent = screen.getByText("Your scan is still in progress");
  expect(bannerContent).toBeInTheDocument();
  const bannerContentCta = screen.getByRole("link", {
    name: "Check more email addresses",
  });
  expect(bannerContentCta).toBeInTheDocument();

  const chartPrompt = screen.getByText("Scan in progress:");
  expect(chartPrompt).toBeInTheDocument();

  const exposureTableDescription = screen.getByText(
    "We found ⁨0⁩ exposures so far, but we’re still scanning sites that sell your personal info. This should be done within a few minutes.",
    { exact: false },
  );
  expect(exposureTableDescription).toBeInTheDocument();
});

it("shows scan in progress indicators on the dashboard and unresolved breaches", () => {
  const ComposedDashboard = composeStory(
    DashboardUsNoPremiumScanInProgressUnresolvedBreaches,
    Meta,
  );
  render(<ComposedDashboard />);

  const bannerContent = screen.getByText("Your scan is still in progress");
  expect(bannerContent).toBeInTheDocument();
  const bannerContentCta = screen.getByRole("link", {
    name: "See what’s ready now",
  });
  expect(bannerContentCta).toBeInTheDocument();

  const chartPrompt = screen.getByText("Scan in progress:");
  expect(chartPrompt).toBeInTheDocument();

  const exposureTableDescription = screen.getByText(
    "We found ⁨9⁩ exposures so far, but we’re still scanning sites that sell your personal info. This should be done within a few minutes.",
    { exact: false },
  );
  expect(exposureTableDescription).toBeInTheDocument();
});

// Check dashboard banner content for story DashboardNonUsNoBreaches
it("shows the correct dashboard banner title for non-US users, no breaches", () => {
  const ComposedDashboard = composeStory(DashboardNonUsNoBreaches, Meta);
  render(<ComposedDashboard />);

  const dashboardTopBanner = screen.getByRole("region", {
    name: "Dashboard summary",
  });
  const dashboardTopBannerTitle = getByText(
    dashboardTopBanner,
    "No exposures found",
  );
  expect(dashboardTopBannerTitle).toBeInTheDocument();
});

it("shows the correct dashboard banner CTA for non-US users, no breaches", () => {
  const ComposedDashboard = composeStory(DashboardNonUsNoBreaches, Meta);
  render(<ComposedDashboard />);

  const dashboardTopBanner = screen.getByRole("region", {
    name: "Dashboard summary",
  });
  const dashboardTopBannerCta = getByRole(dashboardTopBanner, "link", {
    name: "Monitor more emails",
  });
  expect(dashboardTopBannerCta).toBeInTheDocument();
});

// Check dashboard banner content for story DashboardNonUsUnresolvedBreaches
it("shows the correct dashboard banner title for non-US users, unresolved breaches", () => {
  const ComposedDashboard = composeStory(
    DashboardNonUsUnresolvedBreaches,
    Meta,
  );
  render(<ComposedDashboard />);

  const dashboardTopBanner = screen.getByRole("region", {
    name: "Dashboard summary",
  });
  const dashboardTopBannerTitle = getByText(
    dashboardTopBanner,
    "Let’s protect your data",
  );
  expect(dashboardTopBannerTitle).toBeInTheDocument();
});

it("shows the correct dashboard banner CTA for non-US users, unresolved breaches", () => {
  const ComposedDashboard = composeStory(
    DashboardNonUsUnresolvedBreaches,
    Meta,
  );
  render(<ComposedDashboard />);

  const dashboardTopBanner = screen.getByRole("region", {
    name: "Dashboard summary",
  });
  const dashboardTopBannerCta = getByRole(dashboardTopBanner, "link", {
    name: "Let’s fix it",
  });
  expect(dashboardTopBannerCta).toBeInTheDocument();
});

// Check dashboard banner content for story DashboardNonUsResolvedBreaches
it("shows the correct dashboard banner title for non-US users, resolved breaches", () => {
  const ComposedDashboard = composeStory(DashboardNonUsResolvedBreaches, Meta);
  render(<ComposedDashboard />);

  const dashboardTopBanner = screen.getByRole("region", {
    name: "Dashboard summary",
  });
  const dashboardTopBannerTitle = getByText(
    dashboardTopBanner,
    "Your data is protected",
  );
  expect(dashboardTopBannerTitle).toBeInTheDocument();
});

it("shows the correct dashboard banner CTA for non-US users, resolved breaches", () => {
  const ComposedDashboard = composeStory(DashboardNonUsResolvedBreaches, Meta);
  render(<ComposedDashboard />);

  const dashboardTopBanner = screen.getByRole("region", {
    name: "Dashboard summary",
  });
  const dashboardTopBannerCta = queryByRole(dashboardTopBanner, "button", {
    name: "See what’s fixed",
  });
  expect(dashboardTopBannerCta).toBeInTheDocument();
});

// Check dashboard banner content for story DashboardUsNoPremiumNoScanNoBreaches
it("shows the correct dashboard banner title for US users, without Premium, no scan, no breaches", () => {
  const ComposedDashboard = composeStory(
    DashboardUsNoPremiumNoScanNoBreaches,
    Meta,
  );
  render(<ComposedDashboard />);

  const dashboardTopBanner = screen.getByRole("region", {
    name: "Dashboard summary",
  });
  const dashboardTopBannerTitle = getByText(
    dashboardTopBanner,
    "⁨Monitor⁩ now protects you even more",
  );
  expect(dashboardTopBannerTitle).toBeInTheDocument();
});

it("shows the correct dashboard banner CTA for US users, without Premium, no scan, no breaches", () => {
  const ComposedDashboard = composeStory(
    DashboardUsNoPremiumNoScanNoBreaches,
    Meta,
  );
  render(<ComposedDashboard />);

  const dashboardTopBanner = screen.getByRole("region", {
    name: "Dashboard summary",
  });
  const dashboardTopBannerCta = getByRole(dashboardTopBanner, "link", {
    name: "Get first scan free",
  });
  expect(dashboardTopBannerCta).toBeInTheDocument();
});

// Check dashboard banner content for story DashboardUsNoPremiumNoScanUnresolvedBreaches
it("shows the correct dashboard banner title for US users, without Premium, no scan, unresolved breaches", () => {
  const ComposedDashboard = composeStory(
    DashboardUsNoPremiumNoScanUnresolvedBreaches,
    Meta,
  );
  render(<ComposedDashboard />);

  const dashboardTopBanner = screen.getByRole("region", {
    name: "Dashboard summary",
  });
  const dashboardTopBannerTitle = getByText(
    dashboardTopBanner,
    "⁨Monitor⁩ now protects you even more",
  );
  expect(dashboardTopBannerTitle).toBeInTheDocument();
});

it("shows the correct dashboard banner CTA for US users, without Premium, no scan, unresolved breaches", () => {
  const ComposedDashboard = composeStory(
    DashboardUsNoPremiumNoScanUnresolvedBreaches,
    Meta,
  );
  render(<ComposedDashboard />);

  const dashboardTopBanner = screen.getByRole("region", {
    name: "Dashboard summary",
  });
  const dashboardTopBannerCta = getByRole(dashboardTopBanner, "link", {
    name: "Get first scan free",
  });
  expect(dashboardTopBannerCta).toBeInTheDocument();
});

// Check dashboard banner content for story DashboardUsNoPremiumNoScanResolvedBreaches
it("shows the correct dashboard banner title for US users, without Premium, no scan, resolved breaches", () => {
  const ComposedDashboard = composeStory(
    DashboardUsNoPremiumNoScanResolvedBreaches,
    Meta,
  );
  render(<ComposedDashboard />);

  const dashboardTopBanner = screen.getByRole("region", {
    name: "Dashboard summary",
  });
  const dashboardTopBannerTitle = getByText(
    dashboardTopBanner,
    "⁨Monitor⁩ now protects you even more",
  );
  expect(dashboardTopBannerTitle).toBeInTheDocument();
});

it("shows the correct dashboard banner CTA for US users, without Premium, no scan, resolved breaches", () => {
  const ComposedDashboard = composeStory(
    DashboardUsNoPremiumNoScanResolvedBreaches,
    Meta,
  );
  render(<ComposedDashboard />);

  const dashboardTopBanner = screen.getByRole("region", {
    name: "Dashboard summary",
  });
  const dashboardTopBannerCta = getByRole(dashboardTopBanner, "link", {
    name: "Get first scan free",
  });
  expect(dashboardTopBannerCta).toBeInTheDocument();
});

// Check dashboard banner content for story DashboardUsNoPremiumEmptyScanNoBreaches
it("shows the correct dashboard banner title for US users, without Premium, empty scan, no breaches", () => {
  const ComposedDashboard = composeStory(
    DashboardUsNoPremiumEmptyScanNoBreaches,
    Meta,
  );
  render(<ComposedDashboard />);

  const dashboardTopBanner = screen.getByRole("region", {
    name: "Dashboard summary",
  });
  const dashboardTopBannerTitle = getByText(
    dashboardTopBanner,
    "No exposures found",
  );
  expect(dashboardTopBannerTitle).toBeInTheDocument();
});

it("shows the correct dashboard banner CTA for US users, without Premium, empty scan, no breaches", () => {
  const ComposedDashboard = composeStory(
    DashboardUsNoPremiumEmptyScanNoBreaches,
    Meta,
  );
  render(<ComposedDashboard />);

  const dashboardTopBanner = screen.getByRole("region", {
    name: "Dashboard summary",
  });
  const dashboardTopBannerCta = getByRole(dashboardTopBanner, "button", {
    name: "Get continuous protection",
  });
  expect(dashboardTopBannerCta).toBeInTheDocument();
});

// Check dashboard banner content for story DashboardUsNoPremiumEmptyScanUnresolvedBreaches
it("shows the correct dashboard banner title for US users, without Premium, empty scan, unresolved breaches", () => {
  const ComposedDashboard = composeStory(
    DashboardUsNoPremiumEmptyScanUnresolvedBreaches,
    Meta,
  );
  render(<ComposedDashboard />);

  const dashboardTopBanner = screen.getByRole("region", {
    name: "Dashboard summary",
  });
  const dashboardTopBannerTitle = getByText(
    dashboardTopBanner,
    "Let’s keep protecting your data",
  );
  expect(dashboardTopBannerTitle).toBeInTheDocument();
});

it("shows the correct dashboard banner CTA for US users, without Premium, empty scan, unresolved breaches", () => {
  const ComposedDashboard = composeStory(
    DashboardUsNoPremiumEmptyScanUnresolvedBreaches,
    Meta,
  );
  render(<ComposedDashboard />);

  const dashboardTopBanner = screen.getByRole("region", {
    name: "Dashboard summary",
  });
  const dashboardTopBannerCta = getByRole(dashboardTopBanner, "link", {
    name: "Let’s keep going",
  });
  expect(dashboardTopBannerCta).toBeInTheDocument();
});

// Check dashboard banner content for story DashboardUsNoPremiumEmptyScanResolvedBreaches
it("shows the correct dashboard banner title for US users, without Premium, empty scan, resolved breaches", () => {
  const ComposedDashboard = composeStory(
    DashboardUsNoPremiumEmptyScanResolvedBreaches,
    Meta,
  );
  render(<ComposedDashboard />);

  const dashboardTopBanner = screen.getByRole("region", {
    name: "Dashboard summary",
  });
  const dashboardTopBannerTitle = getByText(
    dashboardTopBanner,
    "Your data is protected",
  );
  expect(dashboardTopBannerTitle).toBeInTheDocument();
});

it("shows the correct dashboard banner CTA for US users, without Premium, empty scan, resolved breaches", () => {
  const ComposedDashboard = composeStory(
    DashboardUsNoPremiumEmptyScanResolvedBreaches,
    Meta,
  );
  render(<ComposedDashboard />);

  const dashboardTopBanner = screen.getByRole("region", {
    name: "Dashboard summary",
  });
  const dashboardTopBannerCta = queryByRole(dashboardTopBanner, "button", {
    name: "Get continuous protection",
  });
  expect(dashboardTopBannerCta).toBeInTheDocument();
});

// Check dashboard banner content for story DashboardUsNoPremiumUnresolvedScanNoBreaches
it("shows the correct dashboard banner title for US users, without Premium, unresolved scan, no breaches", () => {
  const ComposedDashboard = composeStory(
    DashboardUsNoPremiumUnresolvedScanNoBreaches,
    Meta,
  );
  render(<ComposedDashboard />);

  const dashboardTopBanner = screen.getByRole("region", {
    name: "Dashboard summary",
  });
  const dashboardTopBannerTitle = getByText(
    dashboardTopBanner,
    "Let’s protect your data",
  );
  expect(dashboardTopBannerTitle).toBeInTheDocument();
});

it("shows the correct dashboard banner CTA for US users, without Premium, unresolved scan, no breaches", () => {
  const ComposedDashboard = composeStory(
    DashboardUsNoPremiumUnresolvedScanNoBreaches,
    Meta,
  );
  render(<ComposedDashboard />);

  const dashboardTopBanner = screen.getByRole("region", {
    name: "Dashboard summary",
  });
  const dashboardTopBannerCta = getByRole(dashboardTopBanner, "link", {
    name: "Let’s fix it",
  });
  expect(dashboardTopBannerCta).toBeInTheDocument();
});

// Check dashboard banner content for story DashboardUsNoPremiumUnresolvedScanUnresolvedBreaches
it("shows the correct dashboard banner title for US users, without Premium, UnresolvedScanUnresolved breaches", () => {
  const ComposedDashboard = composeStory(
    DashboardUsNoPremiumUnresolvedScanUnresolvedBreaches,
    Meta,
  );
  render(<ComposedDashboard />);

  const dashboardTopBanner = screen.getByRole("region", {
    name: "Dashboard summary",
  });
  const dashboardTopBannerTitle = getByText(
    dashboardTopBanner,
    "Let’s keep protecting your data",
  );
  expect(dashboardTopBannerTitle).toBeInTheDocument();
});

it("shows the correct dashboard banner CTA for US users, without Premium, UnresolvedScanUnresolved breaches", () => {
  const ComposedDashboard = composeStory(
    DashboardUsNoPremiumUnresolvedScanUnresolvedBreaches,
    Meta,
  );
  render(<ComposedDashboard />);

  const dashboardTopBanner = screen.getByRole("region", {
    name: "Dashboard summary",
  });
  const dashboardTopBannerCta = getByRole(dashboardTopBanner, "link", {
    name: "Let’s keep going",
  });
  expect(dashboardTopBannerCta).toBeInTheDocument();
});

// Check dashboard banner content for story DashboardUsNoPremiumUnresolvedScanResolvedBreaches
it("shows the correct dashboard banner title for US users, without Premium, unresolved scan, resolved breaches", () => {
  const ComposedDashboard = composeStory(
    DashboardUsNoPremiumUnresolvedScanResolvedBreaches,
    Meta,
  );
  render(<ComposedDashboard />);

  const dashboardTopBanner = screen.getByRole("region", {
    name: "Dashboard summary",
  });
  const dashboardTopBannerTitle = getByText(
    dashboardTopBanner,
    "Let’s protect your data",
  );
  expect(dashboardTopBannerTitle).toBeInTheDocument();
});

it("shows the correct dashboard banner CTA for US users, without Premium, unresolved scan, resolved breaches", () => {
  const ComposedDashboard = composeStory(
    DashboardUsNoPremiumUnresolvedScanResolvedBreaches,
    Meta,
  );
  render(<ComposedDashboard />);

  const dashboardTopBanner = screen.getByRole("region", {
    name: "Dashboard summary",
  });
  const dashboardTopBannerCta = getByRole(dashboardTopBanner, "link", {
    name: "Let’s fix it",
  });
  expect(dashboardTopBannerCta).toBeInTheDocument();
});

// Check dashboard banner content for story DashboardUsNoPremiumResolvedScanNoBreaches
it("shows the correct dashboard banner title for US users, without Premium, resolved scan, no breaches", () => {
  const ComposedDashboard = composeStory(
    DashboardUsNoPremiumResolvedScanNoBreaches,
    Meta,
  );
  render(<ComposedDashboard />);

  const dashboardTopBanner = screen.getByRole("region", {
    name: "Dashboard summary",
  });
  const dashboardTopBannerTitle = getByText(
    dashboardTopBanner,
    "Your data is protected",
  );
  expect(dashboardTopBannerTitle).toBeInTheDocument();
});

it("shows the correct dashboard banner CTA for US users, without Premium, resolved scan, no breaches", () => {
  const ComposedDashboard = composeStory(
    DashboardUsNoPremiumResolvedScanNoBreaches,
    Meta,
  );
  render(<ComposedDashboard />);

  const dashboardTopBanner = screen.getByRole("region", {
    name: "Dashboard summary",
  });
  const dashboardTopBannerCta = queryByRole(dashboardTopBanner, "button", {
    name: "Get continuous protection",
  });
  expect(dashboardTopBannerCta).toBeInTheDocument();
});

// Check dashboard banner content for story DashboardUsNoPremiumResolvedScanUnresolvedBreaches
it("shows the correct dashboard banner title for US users, without Premium, resolved scan, unresolved breaches", () => {
  const ComposedDashboard = composeStory(
    DashboardUsNoPremiumResolvedScanUnresolvedBreaches,
    Meta,
  );
  render(<ComposedDashboard />);

  const dashboardTopBanner = screen.getByRole("region", {
    name: "Dashboard summary",
  });
  const dashboardTopBannerTitle = getByText(
    dashboardTopBanner,
    "Let’s keep protecting your data",
  );
  expect(dashboardTopBannerTitle).toBeInTheDocument();
});

it("shows the correct dashboard banner CTA for US users, without Premium, resolved scan, unresolved breaches", () => {
  const ComposedDashboard = composeStory(
    DashboardUsNoPremiumResolvedScanUnresolvedBreaches,
    Meta,
  );
  render(<ComposedDashboard />);

  const dashboardTopBanner = screen.getByRole("region", {
    name: "Dashboard summary",
  });
  const dashboardTopBannerCta = getByRole(dashboardTopBanner, "link", {
    name: "Let’s keep going",
  });
  expect(dashboardTopBannerCta).toBeInTheDocument();
});

// Check dashboard banner content for story DashboardUsNoPremiumResolvedScanResolvedBreaches
it("shows the correct dashboard banner title for US users, without Premium, resolved scan, resolved breaches", () => {
  const ComposedDashboard = composeStory(
    DashboardUsNoPremiumResolvedScanResolvedBreaches,
    Meta,
  );
  render(<ComposedDashboard />);

  const dashboardTopBanner = screen.getByRole("region", {
    name: "Dashboard summary",
  });
  const dashboardTopBannerTitle = getByText(
    dashboardTopBanner,
    "Your data is protected",
  );
  expect(dashboardTopBannerTitle).toBeInTheDocument();
});

it("shows the correct dashboard banner CTA for US users, without Premium, resolved scan, resolved breaches", () => {
  const ComposedDashboard = composeStory(
    DashboardUsNoPremiumResolvedScanResolvedBreaches,
    Meta,
  );
  render(<ComposedDashboard />);

  const dashboardTopBanner = screen.getByRole("region", {
    name: "Dashboard summary",
  });
  const dashboardTopBannerCta = queryByRole(dashboardTopBanner, "button", {
    name: "Get continuous protection",
  });
  expect(dashboardTopBannerCta).toBeInTheDocument();
});

// Check dashboard banner content for story DashboardUsPremiumEmptyScanNoBreaches
it("shows the correct dashboard banner title for US user, with Premium, empty scan, no breaches", () => {
  const ComposedDashboard = composeStory(
    DashboardUsPremiumEmptyScanNoBreaches,
    Meta,
  );
  render(<ComposedDashboard />);

  const dashboardTopBanner = screen.getByRole("region", {
    name: "Dashboard summary",
  });
  const dashboardTopBannerTitle = getByText(
    dashboardTopBanner,
    "No exposures found",
  );
  expect(dashboardTopBannerTitle).toBeInTheDocument();
});

it("shows the correct dashboard banner CTA for US user, with Premium, empty scan, no breaches", () => {
  const ComposedDashboard = composeStory(
    DashboardUsPremiumEmptyScanNoBreaches,
    Meta,
  );
  render(<ComposedDashboard />);

  const dashboardTopBanner = screen.getByRole("region", {
    name: "Dashboard summary",
  });
  const dashboardTopBannerCta = getByRole(dashboardTopBanner, "link", {
    name: "Monitor more emails",
  });
  expect(dashboardTopBannerCta).toBeInTheDocument();
});

// Check dashboard banner content for story DashboardUsPremiumEmptyScanUnresolvedBreaches
it("shows the correct dashboard banner title for US user, with Premium, empty scan, unresolved breaches", () => {
  const ComposedDashboard = composeStory(
    DashboardUsPremiumEmptyScanUnresolvedBreaches,
    Meta,
  );
  render(<ComposedDashboard />);

  const dashboardTopBanner = screen.getByRole("region", {
    name: "Dashboard summary",
  });
  const dashboardTopBannerTitle = getByText(
    dashboardTopBanner,
    "Let’s keep protecting your data",
  );
  expect(dashboardTopBannerTitle).toBeInTheDocument();
});

it("shows the correct dashboard banner CTA for US user, with Premium, empty scan, unresolved breaches", () => {
  const ComposedDashboard = composeStory(
    DashboardUsPremiumEmptyScanUnresolvedBreaches,
    Meta,
  );
  render(<ComposedDashboard />);

  const dashboardTopBanner = screen.getByRole("region", {
    name: "Dashboard summary",
  });
  const dashboardTopBannerCta = getByRole(dashboardTopBanner, "link", {
    name: "Let’s keep going",
  });
  expect(dashboardTopBannerCta).toBeInTheDocument();
});

// Check dashboard banner content for story DashboardUsPremiumEmptyScanResolvedBreaches
it("shows the correct dashboard banner title for US user, with Premium, empty scan, resolved breaches", () => {
  const ComposedDashboard = composeStory(
    DashboardUsPremiumEmptyScanResolvedBreaches,
    Meta,
  );
  render(<ComposedDashboard />);

  const dashboardTopBanner = screen.getByRole("region", {
    name: "Dashboard summary",
  });
  const dashboardTopBannerTitle = getByText(
    dashboardTopBanner,
    "Your data is protected",
  );
  expect(dashboardTopBannerTitle).toBeInTheDocument();
});

it("shows the correct dashboard banner CTA for US user, with Premium, empty scan, resolved breaches", () => {
  const ComposedDashboard = composeStory(
    DashboardUsPremiumEmptyScanResolvedBreaches,
    Meta,
  );
  render(<ComposedDashboard />);

  const dashboardTopBanner = screen.getByRole("region", {
    name: "Dashboard summary",
  });
  const dashboardTopBannerCta = queryByRole(dashboardTopBanner, "button", {
    name: "See what’s fixed",
  });
  expect(dashboardTopBannerCta).toBeInTheDocument();
});

// Check dashboard banner content for story DashboardUsPremiumUnresolvedScanNoBreaches
it("shows the correct dashboard banner title for US user, with Premium, unresolved scan, no breaches", () => {
  const ComposedDashboard = composeStory(
    DashboardUsPremiumUnresolvedScanNoBreaches,
    Meta,
  );
  render(<ComposedDashboard />);

  const dashboardTopBanner = screen.getByRole("region", {
    name: "Dashboard summary",
  });
  const dashboardTopBannerTitle = getByText(
    dashboardTopBanner,
    "Let’s keep protecting your data",
  );
  expect(dashboardTopBannerTitle).toBeInTheDocument();
});

it("shows the correct dashboard banner CTA for US user, with Premium, unresolved scan, no breaches", () => {
  const ComposedDashboard = composeStory(
    DashboardUsPremiumUnresolvedScanNoBreaches,
    Meta,
  );
  render(<ComposedDashboard />);

  const dashboardTopBanner = screen.getByRole("region", {
    name: "Dashboard summary",
  });
  const dashboardTopBannerCta = getByRole(dashboardTopBanner, "link", {
    name: "Let’s keep going",
  });
  expect(dashboardTopBannerCta).toBeInTheDocument();
});

// Check dashboard banner content for story DashboardUsPremiumUnresolvedScanUnresolvedBreaches
it("shows the correct dashboard banner title for US user, with Premium, UnresolvedScanUnresolved breaches", () => {
  const ComposedDashboard = composeStory(
    DashboardUsPremiumUnresolvedScanUnresolvedBreaches,
    Meta,
  );
  render(<ComposedDashboard />);

  const dashboardTopBanner = screen.getByRole("region", {
    name: "Dashboard summary",
  });
  const dashboardTopBannerTitle = getByText(
    dashboardTopBanner,
    "Let’s protect your data",
  );
  expect(dashboardTopBannerTitle).toBeInTheDocument();
});

it("shows the correct dashboard banner CTA for US user, with Premium, UnresolvedScanUnresolved breaches", () => {
  const ComposedDashboard = composeStory(
    DashboardUsPremiumUnresolvedScanUnresolvedBreaches,
    Meta,
  );
  render(<ComposedDashboard />);

  const dashboardTopBanner = screen.getByRole("region", {
    name: "Dashboard summary",
  });
  const dashboardTopBannerCta = getByRole(dashboardTopBanner, "link", {
    name: "Let’s fix it",
  });
  expect(dashboardTopBannerCta).toBeInTheDocument();
});

// Check dashboard banner content for story DashboardUsPremiumUnresolvedScanResolvedBreaches
it("shows the correct dashboard banner title for US user, with Premium, unresolved scan, resolved breaches", () => {
  const ComposedDashboard = composeStory(
    DashboardUsPremiumUnresolvedScanResolvedBreaches,
    Meta,
  );
  render(<ComposedDashboard />);

  const dashboardTopBanner = screen.getByRole("region", {
    name: "Dashboard summary",
  });
  const dashboardTopBannerTitle = getByText(
    dashboardTopBanner,
    "Let’s keep protecting your data",
  );
  expect(dashboardTopBannerTitle).toBeInTheDocument();
});

it("shows the correct dashboard banner CTA for US user, with Premium, unresolved scan, resolved breaches", () => {
  const ComposedDashboard = composeStory(
    DashboardUsPremiumUnresolvedScanResolvedBreaches,
    Meta,
  );
  render(<ComposedDashboard />);

  const dashboardTopBanner = screen.getByRole("region", {
    name: "Dashboard summary",
  });
  const dashboardTopBannerCta = getByRole(dashboardTopBanner, "link", {
    name: "Let’s keep going",
  });
  expect(dashboardTopBannerCta).toBeInTheDocument();
});

// Check dashboard banner content for story DashboardUsPremiumResolvedScanNoBreaches
it("shows the correct dashboard banner title for US user, with Premium, resolved scan, no breaches", () => {
  const ComposedDashboard = composeStory(
    DashboardUsPremiumResolvedScanNoBreaches,
    Meta,
  );
  render(<ComposedDashboard />);

  const dashboardTopBanner = screen.getByRole("region", {
    name: "Dashboard summary",
  });
  const dashboardTopBannerTitle = getByText(
    dashboardTopBanner,
    "Your data is protected",
  );
  expect(dashboardTopBannerTitle).toBeInTheDocument();
});

it("shows the correct dashboard banner CTA for US user, with Premium, resolved scan, no breaches", () => {
  const ComposedDashboard = composeStory(
    DashboardUsPremiumResolvedScanNoBreaches,
    Meta,
  );
  render(<ComposedDashboard />);

  const dashboardTopBanner = screen.getByRole("region", {
    name: "Dashboard summary",
  });
  const dashboardTopBannerCta = queryByRole(dashboardTopBanner, "button", {
    name: "See what’s fixed",
  });
  expect(dashboardTopBannerCta).toBeInTheDocument();
});

// Check dashboard banner content for story DashboardUsPremiumResolvedScanUnresolvedBreaches
it("shows the correct dashboard banner title for US user, with Premium, resolved scan, unresolved breaches", () => {
  const ComposedDashboard = composeStory(
    DashboardUsPremiumResolvedScanUnresolvedBreaches,
    Meta,
  );
  render(<ComposedDashboard />);

  const dashboardTopBanner = screen.getByRole("region", {
    name: "Dashboard summary",
  });
  const dashboardTopBannerTitle = getByText(
    dashboardTopBanner,
    "Let’s keep protecting your data",
  );
  expect(dashboardTopBannerTitle).toBeInTheDocument();
});

it("shows the correct dashboard banner CTA for US user, with Premium, resolved scan, unresolved breaches", () => {
  const ComposedDashboard = composeStory(
    DashboardUsPremiumResolvedScanUnresolvedBreaches,
    Meta,
  );
  render(<ComposedDashboard />);

  const dashboardTopBanner = screen.getByRole("region", {
    name: "Dashboard summary",
  });
  const dashboardTopBannerCta = getByRole(dashboardTopBanner, "link", {
    name: "Let’s keep going",
  });
  expect(dashboardTopBannerCta).toBeInTheDocument();
});

// Check dashboard banner content for story DashboardUsPremiumResolvedScanResolvedBreaches
it("shows the correct dashboard banner title for US user, with Premium, resolved scan, resolved breaches", () => {
  const ComposedDashboard = composeStory(
    DashboardUsPremiumResolvedScanResolvedBreaches,
    Meta,
  );
  render(<ComposedDashboard />);

  const dashboardTopBanner = screen.getByRole("region", {
    name: "Dashboard summary",
  });
  const dashboardTopBannerTitle = getByText(
    dashboardTopBanner,
    "Your data is protected",
  );
  expect(dashboardTopBannerTitle).toBeInTheDocument();
});

it("shows the correct dashboard banner CTA for US user, with Premium, resolved scan, resolved breaches", () => {
  const ComposedDashboard = composeStory(
    DashboardUsPremiumResolvedScanResolvedBreaches,
    Meta,
  );
  render(<ComposedDashboard />);

  const dashboardTopBanner = screen.getByRole("region", {
    name: "Dashboard summary",
  });
  const dashboardTopBannerCta = queryByRole(dashboardTopBanner, "button", {
    name: "See what’s fixed",
  });
  expect(dashboardTopBannerCta).toBeInTheDocument();
});

// Check dashboard banner content for story DashboardUsNoPremiumScanInProgressNoBreaches
it("shows the correct dashboard banner title for US user, without Premium, scan in progress, no breaches", () => {
  const ComposedDashboard = composeStory(
    DashboardUsNoPremiumScanInProgressNoBreaches,
    Meta,
  );
  render(<ComposedDashboard />);

  const dashboardTopBanner = screen.getByRole("region", {
    name: "Dashboard summary",
  });
  const dashboardTopBannerTitle = getByText(
    dashboardTopBanner,
    "Your scan is still in progress",
  );
  expect(dashboardTopBannerTitle).toBeInTheDocument();
});

it("shows the correct dashboard banner CTA for US user, without Premium, scan in progress, no breaches", () => {
  const ComposedDashboard = composeStory(
    DashboardUsNoPremiumScanInProgressNoBreaches,
    Meta,
  );
  render(<ComposedDashboard />);

  const dashboardTopBanner = screen.getByRole("region", {
    name: "Dashboard summary",
  });
  const dashboardTopBannerCta = getByRole(dashboardTopBanner, "link", {
    name: "Check more email addresses",
  });
  expect(dashboardTopBannerCta).toBeInTheDocument();
});

// Check dashboard banner content for story DashboardUsNoPremiumScanInProgressUnresolvedBreaches
it("shows the correct dashboard banner title for US user, without Premium, scan in progress, unresolved breaches", () => {
  const ComposedDashboard = composeStory(
    DashboardUsNoPremiumScanInProgressUnresolvedBreaches,
    Meta,
  );
  render(<ComposedDashboard />);

  const dashboardTopBanner = screen.getByRole("region", {
    name: "Dashboard summary",
  });
  const dashboardTopBannerTitle = getByText(
    dashboardTopBanner,
    "Your scan is still in progress",
  );
  expect(dashboardTopBannerTitle).toBeInTheDocument();
});

it("shows the correct dashboard banner CTA for US user, without Premium, scan in progress, unresolved breaches", () => {
  const ComposedDashboard = composeStory(
    DashboardUsNoPremiumScanInProgressUnresolvedBreaches,
    Meta,
  );
  render(<ComposedDashboard />);

  const dashboardTopBanner = screen.getByRole("region", {
    name: "Dashboard summary",
  });
  const dashboardTopBannerCta = getByRole(dashboardTopBanner, "link", {
    name: "See what’s ready now",
  });
  expect(dashboardTopBannerCta).toBeInTheDocument();
});

// Check dashboard banner content for story DashboardUsNoPremiumScanInProgressResolvedBreaches
it("shows the correct dashboard banner title for US user, without Premium, scan in progress, resolved breaches", () => {
  const ComposedDashboard = composeStory(
    DashboardUsNoPremiumScanInProgressResolvedBreaches,
    Meta,
  );
  render(<ComposedDashboard />);

  const dashboardTopBanner = screen.getByRole("region", {
    name: "Dashboard summary",
  });
  const dashboardTopBannerTitle = getByText(
    dashboardTopBanner,
    "Your scan is still in progress",
  );
  expect(dashboardTopBannerTitle).toBeInTheDocument();
});

it("shows the correct dashboard banner CTA for US user, without Premium, scan in progress, resolved breaches", () => {
  const ComposedDashboard = composeStory(
    DashboardUsNoPremiumScanInProgressResolvedBreaches,
    Meta,
  );
  render(<ComposedDashboard />);

  const dashboardTopBanner = screen.getByRole("region", {
    name: "Dashboard summary",
  });
  const dashboardTopBannerCta = getByRole(dashboardTopBanner, "link", {
    name: "Check more email addresses",
  });
  expect(dashboardTopBannerCta).toBeInTheDocument();
});

// Check dashboard banner content for story DashboardUsPremiumScanInProgressNoBreaches
it("shows the correct dashboard banner title for US user, with Premium, scan in progress, no breaches", () => {
  const ComposedDashboard = composeStory(
    DashboardUsPremiumScanInProgressNoBreaches,
    Meta,
  );
  render(<ComposedDashboard />);

  const dashboardTopBanner = screen.getByRole("region", {
    name: "Dashboard summary",
  });
  const dashboardTopBannerTitle = getByText(
    dashboardTopBanner,
    "Your scan is still in progress",
  );
  expect(dashboardTopBannerTitle).toBeInTheDocument();
});

it("shows the correct dashboard banner CTA for US user, with Premium, scan in progress, no breaches", () => {
  const ComposedDashboard = composeStory(
    DashboardUsPremiumScanInProgressNoBreaches,
    Meta,
  );
  render(<ComposedDashboard />);

  const dashboardTopBanner = screen.getByRole("region", {
    name: "Dashboard summary",
  });
  const dashboardTopBannerCta = getByRole(dashboardTopBanner, "link", {
    name: "Check more email addresses",
  });
  expect(dashboardTopBannerCta).toBeInTheDocument();
});

// Check dashboard banner content for story DashboardUsPremiumScanInProgressUnresolvedBreaches
it("shows the correct dashboard banner title for US user, with Premium, scan in progress, unresolved breaches", () => {
  const ComposedDashboard = composeStory(
    DashboardUsPremiumScanInProgressUnresolvedBreaches,
    Meta,
  );
  render(<ComposedDashboard />);

  const dashboardTopBanner = screen.getByRole("region", {
    name: "Dashboard summary",
  });
  const dashboardTopBannerTitle = getByText(
    dashboardTopBanner,
    "Your scan is still in progress",
  );
  expect(dashboardTopBannerTitle).toBeInTheDocument();
});

it("shows the correct dashboard banner CTA for US user, with Premium, scan in progress, unresolved breaches", () => {
  const ComposedDashboard = composeStory(
    DashboardUsPremiumScanInProgressUnresolvedBreaches,
    Meta,
  );
  render(<ComposedDashboard />);

  const dashboardTopBanner = screen.getByRole("region", {
    name: "Dashboard summary",
  });
  const dashboardTopBannerCta = getByRole(dashboardTopBanner, "link", {
    name: "See what’s ready now",
  });
  expect(dashboardTopBannerCta).toBeInTheDocument();
});

// Check dashboard banner content for story DashboardUsPremiumScanInProgressResolvedBreaches
it("shows the correct dashboard banner title for US user, with Premium, scan in progress, resolved breaches", () => {
  const ComposedDashboard = composeStory(
    DashboardUsPremiumScanInProgressResolvedBreaches,
    Meta,
  );
  render(<ComposedDashboard />);

  const dashboardTopBanner = screen.getByRole("region", {
    name: "Dashboard summary",
  });
  const dashboardTopBannerTitle = getByText(
    dashboardTopBanner,
    "Your scan is still in progress",
  );
  expect(dashboardTopBannerTitle).toBeInTheDocument();
});

it("shows the correct dashboard banner CTA for US user, with Premium, scan in progress, resolved breaches", () => {
  const ComposedDashboard = composeStory(
    DashboardUsPremiumScanInProgressResolvedBreaches,
    Meta,
  );
  render(<ComposedDashboard />);

  const dashboardTopBanner = screen.getByRole("region", {
    name: "Dashboard summary",
  });
  const dashboardTopBannerCta = getByRole(dashboardTopBanner, "link", {
    name: "Check more email addresses",
  });
  expect(dashboardTopBannerCta).toBeInTheDocument();
});

// Check dashboard banner content for story DashboardInvalidNonPremiumUserScanUnresolvedInProgressResolvedBreaches
it("logs a warning and error in the story for an invalid user state", () => {
  const ComposedDashboard = composeStory(
    DashboardInvalidPremiumUserNoScanResolvedBreaches,
    Meta,
  );

  const errorLogSpy = jest.spyOn(global.console, "error").mockImplementation();
  const warnLogSpy = jest.spyOn(global.console, "warn").mockImplementation();
  render(<ComposedDashboard />);

  expect(errorLogSpy).toHaveBeenCalledWith(
    `InvalidUserState: {"relevantGuidedStep":{"href":"/redesign/user/dashboard/fix/data-broker-profiles/start-free-scan","id":"Scan","eligible":true,"completed":false},"hasExposures":true,"hasUnresolvedBreaches":false,"hasUnresolvedBrokers":false,"isEligibleForFreeScan":true,"isEligibleForPremium":false,"isPremiumUser":true,"scanInProgress":false}`,
  );
  expect(warnLogSpy).toHaveBeenCalledWith(
    "No matching condition for dashboard state found.",
  );
  warnLogSpy.mockReset();
});

it("expands one card at a time", async () => {
  const user = userEvent.setup();
  const ComposedDashboard = composeStory(
    DashboardUsPremiumUnresolvedScanUnresolvedBreaches,
    Meta,
  );
  render(<ComposedDashboard />);

  const expandButtons = screen.getAllByRole("button", { name: "Expand" });
  const collapseButtons = screen.queryAllByRole("button", { name: "Collapse" });
  // Only expanded cards have a collapse button:
  expect(collapseButtons).toHaveLength(0);

  await user.click(expandButtons[0]);
  const afterExpand1ExpandButtons = screen.getAllByRole("button", {
    name: "Expand",
  });
  const afterExpand1CollapseButtons = screen.queryAllByRole("button", {
    name: "Collapse",
  });
  expect(afterExpand1ExpandButtons).toHaveLength(expandButtons.length - 1);
  expect(afterExpand1CollapseButtons).toHaveLength(1);

  await user.click(afterExpand1ExpandButtons[0]);
  const afterExpand2ExpandButtons = screen.getAllByRole("button", {
    name: "Expand",
  });
  const afterExpand2CollapseButtons = screen.queryAllByRole("button", {
    name: "Collapse",
  });
  expect(afterExpand2ExpandButtons).toHaveLength(
    afterExpand1ExpandButtons.length,
  );
  expect(afterExpand2CollapseButtons).toHaveLength(1);
});

it("closes previously active card onclick", async () => {
  const user = userEvent.setup();
  const ComposedDashboard = composeStory(
    DashboardUsPremiumUnresolvedScanUnresolvedBreaches,
    Meta,
  );
  render(<ComposedDashboard />);

  const initialState = screen.getAllByRole("button", { name: "Expand" });
  await user.click(initialState[0]);
  const afterExpand = screen.getAllByRole("button", { name: "Collapse" });
  await user.click(afterExpand[0]);
  const afterCollapse = screen.getAllByRole("button", { name: "Expand" });
  expect(initialState.length).toBe(afterCollapse.length);
});

it("send Telemetry when users click on free scans when all exposures are fixed", async () => {
  const user = userEvent.setup();
  const ComposedDashboard = composeStory(
    DashboardUsNoPremiumNoScanNoBreaches,
    Meta,
  );
  const mockedRecord = useTelemetry();
  render(<ComposedDashboard />);

  // jsdom will complain about not being able to navigate to a different page
  // after clicking the link; suppress that error, as it's not relevant to the
  // test:
  jest.spyOn(console, "error").mockImplementationOnce(() => undefined);

  const freeScanLink = screen.queryAllByRole("link", {
    name: "start your free scan",
  });
  await user.click(freeScanLink[0]);

  expect(mockedRecord).toHaveBeenCalledWith(
    "link",
    "click",
    expect.objectContaining({
      link_id: "exposures_all_fixed_free_scan",
    }),
  );
});

it("send telemetry when users toggle between action needed and fixed tabs", async () => {
  const user = userEvent.setup();
  const ComposedDashboard = composeStory(
    DashboardUsNoPremiumNoScanNoBreaches,
    Meta,
  );
  const mockedRecord = useTelemetry();
  render(<ComposedDashboard />);

  // jsdom will complain about not being able to navigate to a different page
  // after clicking the link; suppress that error, as it's not relevant to the
  // test:
  jest.spyOn(console, "error").mockImplementationOnce(() => undefined);

  // We show a CTA on desktop in the toolbar and in the mobile menu
  const fixedTab = screen.getByText("Fixed");
  const actionNeededTab = screen.getByText("Action needed");
  await user.click(fixedTab);
  expect(mockedRecord).toHaveBeenCalledWith(
    "ctaButton",
    "click",
    expect.objectContaining({
      button_id: "header_fixed",
    }),
  );
  await user.click(actionNeededTab);
  expect(mockedRecord).toHaveBeenCalledWith(
    "ctaButton",
    "click",
    expect.objectContaining({
      button_id: "header_action_needed",
    }),
  );
});

it("send telemetry when users click on dashboard nav menu items", async () => {
  const user = userEvent.setup();
  const ComposedDashboard = composeStory(
    DashboardUsNoPremiumNoScanNoBreaches,
    Meta,
  );
  const mockedRecord = useTelemetry();
  render(<ComposedDashboard />);

  // jsdom will complain about not being able to navigate to a different page
  // after clicking the link; suppress that error, as it's not relevant to the
  // test:
  jest.spyOn(console, "error").mockImplementationOnce(() => undefined);

  const dashboardMenuItem = screen.queryAllByRole("link", {
    name: "Dashboard",
  });
  await user.click(dashboardMenuItem[0]);
  expect(mockedRecord).toHaveBeenCalledWith(
    "ctaButton",
    "click",
    expect.objectContaining({
      button_id: "navigation_dashboard",
    }),
  );
});

it("send telemetry when users click on the monitor logo", async () => {
  const user = userEvent.setup();
  const ComposedDashboard = composeStory(
    DashboardUsNoPremiumNoScanNoBreaches,
    Meta,
  );
  const mockedRecord = useTelemetry();
  render(<ComposedDashboard />);

  // jsdom will complain about not being able to navigate to a different page
  // after clicking the link; suppress that error, as it's not relevant to the
  // test:
  jest.spyOn(console, "error").mockImplementationOnce(() => undefined);

  const monitorLogo = screen.queryAllByAltText("Home");
  await user.click(monitorLogo[0]);
  expect(mockedRecord).toHaveBeenCalledWith(
    "ctaButton",
    "click",
    expect.objectContaining({
      button_id: "monitor_logo",
    }),
  );
});

it("send telemetry when users click on faq nav menu items", async () => {
  const user = userEvent.setup();
  const ComposedDashboard = composeStory(
    DashboardUsNoPremiumNoScanNoBreaches,
    Meta,
  );
  const mockedRecord = useTelemetry();
  render(<ComposedDashboard />);

  // jsdom will complain about not being able to navigate to a different page
  // after clicking the link; suppress that error, as it's not relevant to the
  // test:
  jest.spyOn(console, "error").mockImplementationOnce(() => undefined);

  const faqMenuItem = screen.queryAllByRole("link", { name: "FAQs" });
  await user.click(faqMenuItem[0]);
  expect(mockedRecord).toHaveBeenCalledWith(
    "ctaButton",
    "click",
    expect.objectContaining({
      button_id: "navigation_faq",
    }),
  );
});

it("send telemetry when users open/close 'number of active exposure' info popup", async () => {
  const user = userEvent.setup();
  const ComposedDashboard = composeStory(
    DashboardUsNoPremiumNoScanNoBreaches,
    Meta,
  );
  const mockedRecord = useTelemetry();
  render(<ComposedDashboard />);

  // jsdom will complain about not being able to navigate to a different page
  // after clicking the link; suppress that error, as it's not relevant to the
  // test:
  jest.spyOn(console, "error").mockImplementationOnce(() => undefined);

  const numberOfExposuresInfoPopup = screen.queryAllByLabelText("Open");
  await user.click(numberOfExposuresInfoPopup[0]);
  expect(mockedRecord).toHaveBeenCalledWith(
    "popup",
    "view",
    expect.objectContaining({
      popup_id: "number_of_exposures_info",
    }),
  );

  const numberOfExposuresInfoPopupExit = screen.queryAllByRole("button", {
    name: "OK",
  });
  await user.click(numberOfExposuresInfoPopupExit[0]);
  expect(mockedRecord).toHaveBeenCalledWith(
    "popup",
    "exit",
    expect.objectContaining({
      popup_id: "number_of_exposures_info",
    }),
  );
});

it("send telemetry when users click on data broker info link", async () => {
  const user = userEvent.setup();
  const ComposedDashboard = composeStory(
    DashboardUsNoPremiumUnresolvedScanNoBreaches,
    Meta,
  );
  const mockedRecord = useTelemetry();
  render(<ComposedDashboard />);

  // jsdom will complain about not being able to navigate to a different page
  // after clicking the link; suppress that error, as it's not relevant to the
  // test:
  jest.spyOn(console, "error").mockImplementationOnce(() => undefined);

  // expands first row
  const expandButtons = screen.getAllByRole("button", { name: "Expand" });
  await user.click(expandButtons[0]);

  const detailsAboutYouLink = screen.queryAllByRole("link", {
    name: "details about you.",
  });
  await user.click(detailsAboutYouLink[0]);
  expect(mockedRecord).toHaveBeenCalledWith(
    "link",
    "click",
    expect.objectContaining({
      link_id: expect.stringContaining("data_broker_"),
    }),
  );

  // collapses first row
  const collapseButton = screen.getAllByRole("button", { name: "Collapse" });
  await user.click(collapseButton[0]);
});

it("send telemetry when users click on data breach link", async () => {
  const user = userEvent.setup();
  const ComposedDashboard = composeStory(
    DashboardUsNoPremiumNoScanUnresolvedBreaches,
    Meta,
  );
  const mockedRecord = useTelemetry();
  render(<ComposedDashboard />);

  // jsdom will complain about not being able to navigate to a different page
  // after clicking the link; suppress that error, as it's not relevant to the
  // test:
  jest.spyOn(console, "error").mockImplementationOnce(() => undefined);

  // expands first row
  const expandButtons = screen.getAllByRole("button", { name: "Expand" });
  await user.click(expandButtons[0]);

  const dataBreachLink = screen.queryAllByRole("link", {
    name: /^.*data breach on.*$/,
  });
  await user.click(dataBreachLink[0]);
  expect(mockedRecord).toHaveBeenCalledWith(
    "link",
    "click",
    expect.objectContaining({
      link_id: expect.stringContaining("data_breach_"),
    }),
  );

  // collapses first row
  const collapseButton = screen.getAllByRole("button", { name: "Collapse" });
  await user.click(collapseButton[0]);
});

it("send telemetry when users click on learn more link", async () => {
  const user = userEvent.setup();
  const ComposedDashboard = composeStory(
    DashboardUsNoPremiumNoScanNoBreaches,
    Meta,
  );
  const mockedRecord = useTelemetry();
  render(<ComposedDashboard />);

  // jsdom will complain about not being able to navigate to a different page
  // after clicking the link; suppress that error, as it's not relevant to the
  // test:
  jest.spyOn(console, "error").mockImplementationOnce(() => undefined);

  const learnMoreLink = screen.queryAllByRole("link", {
    name: "Learn more",
  });
  await user.click(learnMoreLink[0]);
  expect(mockedRecord).toHaveBeenCalledWith(
    "link",
    "click",
    expect.objectContaining({
      link_id: "learn_more",
    }),
  );
});

it("send telemetry when non eligible users, no breaches click on CTA", async () => {
  const user = userEvent.setup();
  const ComposedDashboard = composeStory(DashboardNonUsNoBreaches, Meta);
  const mockedRecord = useTelemetry();
  render(<ComposedDashboard />);

  // jsdom will complain about not being able to navigate to a different page
  // after clicking the link; suppress that error, as it's not relevant to the
  // test:
  jest.spyOn(console, "error").mockImplementationOnce(() => undefined);

  const ctaButtons = screen.queryAllByRole("link", {
    name: "Monitor more emails",
  });
  await user.click(ctaButtons[0]);
  expect(mockedRecord).toHaveBeenCalledWith(
    "ctaButton",
    "click",
    expect.objectContaining({
      button_id: "non_eligible_premium_no_breaches",
    }),
  );
});

it("send telemetry when non eligible users, unresolved breaches click on CTA", async () => {
  const user = userEvent.setup();
  const ComposedDashboard = composeStory(
    DashboardNonUsUnresolvedBreaches,
    Meta,
  );
  const mockedRecord = useTelemetry();
  render(<ComposedDashboard />);

  // jsdom will complain about not being able to navigate to a different page
  // after clicking the link; suppress that error, as it's not relevant to the
  // test:
  jest.spyOn(console, "error").mockImplementationOnce(() => undefined);

  const ctaButtons = screen.queryAllByRole("link", {
    name: "Let’s fix it",
  });
  await user.click(ctaButtons[0]);
  expect(mockedRecord).toHaveBeenCalledWith(
    "ctaButton",
    "click",
    expect.objectContaining({
      button_id: "non_eligible_premium_unresolved_breaches",
    }),
  );
});

it("send telemetry when US non-premium users, no scan, no breaches click on CTA", async () => {
  const user = userEvent.setup();
  const ComposedDashboard = composeStory(
    DashboardUsNoPremiumNoScanNoBreaches,
    Meta,
  );
  const mockedRecord = useTelemetry();
  render(<ComposedDashboard />);

  // jsdom will complain about not being able to navigate to a different page
  // after clicking the link; suppress that error, as it's not relevant to the
  // test:
  jest.spyOn(console, "error").mockImplementationOnce(() => undefined);

  const ctaButtons = screen.queryAllByRole("link", {
    name: "Get first scan free",
  });
  await user.click(ctaButtons[0]);
  expect(mockedRecord).toHaveBeenCalledWith(
    "ctaButton",
    "click",
    expect.objectContaining({
      button_id: expect.stringContaining("us_non_premium_no_scan"),
    }),
  );
});

it("send telemetry when US non-premium users, no scan, unresolved breaches click on CTA", async () => {
  const user = userEvent.setup();
  const ComposedDashboard = composeStory(
    DashboardUsNoPremiumNoScanUnresolvedBreaches,
    Meta,
  );
  const mockedRecord = useTelemetry();
  render(<ComposedDashboard />);

  // jsdom will complain about not being able to navigate to a different page
  // after clicking the link; suppress that error, as it's not relevant to the
  // test:
  jest.spyOn(console, "error").mockImplementationOnce(() => undefined);

  const ctaButtons = screen.queryAllByRole("link", {
    name: "Get first scan free",
  });
  await user.click(ctaButtons[0]);
  expect(mockedRecord).toHaveBeenCalledWith(
    "ctaButton",
    "click",
    expect.objectContaining({
      button_id: "us_non_premium_no_scan_unresolved_breaches",
    }),
  );
});

it("send telemetry when US non-premium users, yes scan, unresolved exposures click on CTA", async () => {
  const user = userEvent.setup();
  const ComposedDashboard = composeStory(
    DashboardUsNoPremiumUnresolvedScanNoBreaches,
    Meta,
  );
  const mockedRecord = useTelemetry();
  render(<ComposedDashboard />);

  // jsdom will complain about not being able to navigate to a different page
  // after clicking the link; suppress that error, as it's not relevant to the
  // test:
  jest.spyOn(console, "error").mockImplementationOnce(() => undefined);

  const ctaButtons = screen.queryAllByRole("link", {
    name: "Let’s fix it",
  });
  await user.click(ctaButtons[0]);
  expect(mockedRecord).toHaveBeenCalledWith(
    "ctaButton",
    "click",
    expect.objectContaining({
      button_id: "us_non_premium_yes_scan_unresolved_exposures",
    }),
  );
});
