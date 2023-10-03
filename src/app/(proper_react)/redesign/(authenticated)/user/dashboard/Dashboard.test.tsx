/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { it, expect } from "@jest/globals";
import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { composeStory } from "@storybook/react";
import { axe } from "jest-axe";
import Meta, {
  DashboardNonUsNoBreaches,
  DashboardUsNoPremiumEmptyScanResolvedBreaches,
  DashboardUsNoPremiumNoScanNoBreaches,
  DashboardUsNoPremiumResolvedScanResolvedBreaches,
  DashboardUsNoPremiumUnresolvedScanNoBreaches,
  DashboardUsNoPremiumUnresolvedScanUnresolvedBreaches,
  DashboardUsPremiumEmptyScanResolvedBreaches,
  DashboardUsPremiumNoScanNoBreaches,
  DashboardUsPremiumResolvedScanResolvedBreaches,
  DashboardUsPremiumResolvedScanUnresolvedBreaches,
  DashboardUsPremiumScanEmptyInProgressNoBreaches,
  DashboardUsPremiumScanEmptyInProgressUnresolvedBreaches,
  DashboardUsPremiumScanUnresolvedInProgressNoBreaches,
  DashboardUsPremiumScanUnresolvedInProgressUnresolvedBreaches,
} from "./Dashboard.stories";

jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
  usePathname: jest.fn(),
}));

it("passes the axe accessibility test suite 1", async () => {
  const ComposedDashboard = composeStory(DashboardNonUsNoBreaches, Meta);
  const { container } = render(<ComposedDashboard />);
  expect(await axe(container)).toHaveNoViolations();
});

it("passes the axe accessibility test suite 2", async () => {
  const ComposedDashboard = composeStory(
    DashboardUsNoPremiumUnresolvedScanUnresolvedBreaches,
    Meta
  );
  const { container } = render(<ComposedDashboard />);
  expect(await axe(container)).toHaveNoViolations();
});

it("passes the axe accessibility test suite 3", async () => {
  const ComposedDashboard = composeStory(
    DashboardUsPremiumResolvedScanUnresolvedBreaches,
    Meta
  );
  const { container } = render(<ComposedDashboard />);
  expect(await axe(container)).toHaveNoViolations();
});

it("shows the “let’s fix it” banner content", () => {
  const ComposedDashboard = composeStory(
    DashboardUsNoPremiumUnresolvedScanNoBreaches,
    Meta
  );
  render(<ComposedDashboard />);

  const letsFixItBannerContent = screen.getByText("Let’s protect your data");
  expect(letsFixItBannerContent).toBeInTheDocument();
});

it("shows the 'Start a free scan' CTA to free US-based users who haven't performed a scan yet", () => {
  const ComposedDashboard = composeStory(
    DashboardUsNoPremiumNoScanNoBreaches,
    Meta
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
    Meta
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

it("shows the premium upgrade cta if the user is not a premium subscriber", () => {
  const ComposedDashboard = composeStory(
    DashboardUsNoPremiumNoScanNoBreaches,
    Meta
  );
  render(<ComposedDashboard />);

  // We show a CTA on desktop in the toolbar and in the mobile menu
  const premiumCtas = screen.queryAllByRole("button", {
    name: "Upgrade to ⁨Premium⁩",
  });
  expect(premiumCtas.length).toBe(2);
});

it("opens and closes the premium upsell dialog via the Premium upsell badge)", async () => {
  const user = userEvent.setup();
  const ComposedDashboard = composeStory(
    DashboardUsNoPremiumNoScanNoBreaches,
    Meta
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
    screen.getByText("Choose the level of protection that’s right for you")
  ).toBeInTheDocument();
  const closeButtonIcon1 = screen.getByLabelText("Close");
  await user.click(closeButtonIcon1.parentElement as HTMLElement);
  expect(
    screen.queryByText("Choose the level of protection that’s right for you")
  ).not.toBeInTheDocument();

  // Shows the modal for the mobile layout
  await user.click(premiumCtas[1]);
  expect(
    screen.getByText("Choose the level of protection that’s right for you")
  ).toBeInTheDocument();
  const closeButtonIcon2 = screen.getByLabelText("Close");
  await user.click(closeButtonIcon2.parentElement as HTMLElement);
  expect(
    screen.queryByText("Choose the level of protection that’s right for you")
  ).not.toBeInTheDocument();
});

it("opens and closes the premium upsell dialog via the Premium upsell button)", async () => {
  const user = userEvent.setup();
  const ComposedDashboard = composeStory(
    DashboardUsNoPremiumEmptyScanResolvedBreaches,
    Meta
  );
  render(<ComposedDashboard />);

  const premiumCta = screen.queryByRole("button", {
    name: "Get Continuous Protection",
  });
  expect(premiumCta).toBeInTheDocument();

  await user.click(premiumCta as HTMLElement);
  expect(
    screen.getByText("Choose the level of protection that’s right for you")
  ).toBeInTheDocument();
  const closeButtonIcon1 = screen.getByLabelText("Close");
  await user.click(closeButtonIcon1.parentElement as HTMLElement);
  expect(
    screen.queryByText("Choose the level of protection that’s right for you")
  ).not.toBeInTheDocument();
});

it("toggles between the product offerings in the premium upsell dialog", async () => {
  const user = userEvent.setup();
  const ComposedDashboard = composeStory(
    DashboardUsNoPremiumNoScanNoBreaches,
    Meta
  );
  render(<ComposedDashboard />);

  // We show a CTA on desktop in the toolbar and in the mobile menu
  const premiumCtas = screen.queryAllByRole("button", {
    name: "Upgrade to ⁨Premium⁩",
  });
  expect(premiumCtas.length).toBe(2);

  await user.click(premiumCtas[0]);

  const productTabYearly1 = screen.queryByRole("tab", { name: "Yearly" });
  expect(productTabYearly1?.getAttribute("aria-selected")).toBe("true");
  const productTabMonthly1 = screen.queryByRole("tab", { name: "Monthly" });
  expect(productTabMonthly1?.getAttribute("aria-selected")).toBe("false");
  const productYearlyCta = screen.queryByRole("link", {
    name: "Select yearly plan",
  });
  expect(productYearlyCta).toBeInTheDocument();

  await user.click(productTabMonthly1 as HTMLElement);

  const productTabYearly2 = screen.queryByRole("tab", { name: "Yearly" });
  expect(productTabYearly2?.getAttribute("aria-selected")).toBe("false");
  const productTabMonthly2 = screen.queryByRole("tab", { name: "Monthly" });
  expect(productTabMonthly2?.getAttribute("aria-selected")).toBe("true");

  const productMontlyCta = screen.queryByRole("link", {
    name: "Select monthly plan",
  });
  expect(productMontlyCta).toBeInTheDocument();
});

it("shows the premium badge if the user is a premium subscriber", () => {
  const ComposedDashboard = composeStory(
    DashboardUsPremiumNoScanNoBreaches,
    Meta
  );
  render(<ComposedDashboard />);

  // We show a CTA on desktop in the toolbar and in the mobile menu
  const premiumBadges = screen.queryAllByText("Premium");
  expect(premiumBadges.length).toBe(2);
});

it("shows returned free user who has resolved all tasks premium upsell and all fixed description", async () => {
  const user = userEvent.setup();
  const ComposedDashboard = composeStory(
    DashboardUsNoPremiumResolvedScanResolvedBreaches,
    Meta
  );
  render(<ComposedDashboard />);

  // We show a CTA on desktop in the toolbar and in the mobile menu
  const premiumCtas = screen.queryAllByRole("button", {
    name: "Upgrade to ⁨Premium⁩",
  });
  expect(premiumCtas.length).toBe(2);

  // show banner CTA premium upgrade
  const bannerPremiumCta = screen.queryAllByRole("button", {
    name: "Get Continuous Protection",
  });
  expect(bannerPremiumCta.length).toBe(1);

  // click on cta
  await user.click(bannerPremiumCta[0]);
  expect(screen.getByRole("dialog")).toBeInTheDocument();
});

it("shows a returning Premium user who has resolved all tasks a CTA to check out what was fixed", async () => {
  const user = userEvent.setup();
  const ComposedDashboard = composeStory(
    DashboardUsPremiumResolvedScanResolvedBreaches,
    Meta
  );
  render(<ComposedDashboard />);

  // We show a CTA on desktop in the toolbar and in the mobile menu
  const premiumBadges = screen.queryAllByText("Premium");
  expect(premiumBadges.length).toBe(2);

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
    Meta
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

it("shows scan in progress indicators on the dashboard with no breaches", () => {
  const ComposedDashboard = composeStory(
    DashboardUsPremiumScanEmptyInProgressNoBreaches,
    Meta
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
    "We didn’t find any data breaches, but we’re still scanning sites that may be selling your personal info."
  );
  expect(exposureTableDescription).toBeInTheDocument();
});

it("shows scan in progress indicators on the dashboard for users with breaches", () => {
  const ComposedDashboard = composeStory(
    DashboardUsPremiumScanEmptyInProgressUnresolvedBreaches,
    Meta
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
    "We found your information exposed",
    { exact: false }
  );
  expect(exposureTableDescription).toBeInTheDocument();
});

it("shows scan in progress indicators on the dashboard with results and no breaches", () => {
  const ComposedDashboard = composeStory(
    DashboardUsPremiumScanUnresolvedInProgressNoBreaches,
    Meta
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
    "We found your information exposed",
    { exact: false }
  );
  expect(exposureTableDescription).toBeInTheDocument();
});

it("shows scan in progress indicators on the dashboard with results and unresolved breaches", () => {
  const ComposedDashboard = composeStory(
    DashboardUsPremiumScanUnresolvedInProgressUnresolvedBreaches,
    Meta
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
    "We found your information exposed",
    { exact: false }
  );
  expect(exposureTableDescription).toBeInTheDocument();
});
