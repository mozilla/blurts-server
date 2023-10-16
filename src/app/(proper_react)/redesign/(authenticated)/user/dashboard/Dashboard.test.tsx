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

jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
  usePathname: jest.fn(),
}));

// Filter out elements that are not a child of the top banner content.
function getRelevantBannerContentElement(elements: HTMLElement[]) {
  return elements.filter(
    (element) => element.closest(".explainerContent")?.contains(element),
  )[0];
}

jest.mock("../../../../../components/client/DataBrokerImage", () => {
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

  const dashboardTopBannerTitle = screen.queryAllByText("No exposures found");
  expect(
    getRelevantBannerContentElement(dashboardTopBannerTitle),
  ).toBeInTheDocument();
});

it("shows the correct dashboard banner CTA for non-US users, no breaches", () => {
  const ComposedDashboard = composeStory(DashboardNonUsNoBreaches, Meta);
  render(<ComposedDashboard />);

  const dashboardTopBannerCta = screen.queryAllByRole("link", {
    name: "Monitor more emails",
  });
  expect(
    getRelevantBannerContentElement(dashboardTopBannerCta),
  ).toBeInTheDocument();
});

// Check dashboard banner content for story DashboardNonUsUnresolvedBreaches
it("shows the correct dashboard banner title for non-US users, unresolved breaches", () => {
  const ComposedDashboard = composeStory(
    DashboardNonUsUnresolvedBreaches,
    Meta,
  );
  render(<ComposedDashboard />);

  const dashboardTopBannerTitle = screen.queryAllByText(
    "Let’s protect your data",
  );
  expect(
    getRelevantBannerContentElement(dashboardTopBannerTitle),
  ).toBeInTheDocument();
});

it("shows the correct dashboard banner CTA for non-US users, unresolved breaches", () => {
  const ComposedDashboard = composeStory(
    DashboardNonUsUnresolvedBreaches,
    Meta,
  );
  render(<ComposedDashboard />);

  const dashboardTopBannerCta = screen.queryAllByRole("link", {
    name: "Let’s fix it",
  });
  expect(
    getRelevantBannerContentElement(dashboardTopBannerCta),
  ).toBeInTheDocument();
});

// Check dashboard banner content for story DashboardNonUsResolvedBreaches
it("shows the correct dashboard banner title for non-US users, resolved breaches", () => {
  const ComposedDashboard = composeStory(DashboardNonUsResolvedBreaches, Meta);
  render(<ComposedDashboard />);

  const dashboardTopBannerTitle = screen.queryAllByText(
    "Your data is protected",
  );
  expect(
    getRelevantBannerContentElement(dashboardTopBannerTitle),
  ).toBeInTheDocument();
});

it("shows the correct dashboard banner CTA for non-US users, resolved breaches", () => {
  const ComposedDashboard = composeStory(DashboardNonUsResolvedBreaches, Meta);
  render(<ComposedDashboard />);

  const dashboardTopBannerCta = screen.queryAllByRole("button", {
    name: "See what’s fixed",
  });
  expect(
    getRelevantBannerContentElement(dashboardTopBannerCta),
  ).toBeInTheDocument();
});

// Check dashboard banner content for story DashboardUsNoPremiumNoScanNoBreaches
it("shows the correct dashboard banner title for US users, without Premium, no scan, no breaches", () => {
  const ComposedDashboard = composeStory(
    DashboardUsNoPremiumNoScanNoBreaches,
    Meta,
  );
  render(<ComposedDashboard />);

  const dashboardTopBannerTitle = screen.queryAllByText(
    "⁨Monitor⁩ now protects you even more",
  );
  expect(
    getRelevantBannerContentElement(dashboardTopBannerTitle),
  ).toBeInTheDocument();
});

it("shows the correct dashboard banner CTA for US users, without Premium, no scan, no breaches", () => {
  const ComposedDashboard = composeStory(
    DashboardUsNoPremiumNoScanNoBreaches,
    Meta,
  );
  render(<ComposedDashboard />);

  const dashboardTopBannerCta = screen.queryAllByRole("link", {
    name: "Get first scan free",
  });
  expect(
    getRelevantBannerContentElement(dashboardTopBannerCta),
  ).toBeInTheDocument();
});

// Check dashboard banner content for story DashboardUsNoPremiumNoScanUnresolvedBreaches
it("shows the correct dashboard banner title for US users, without Premium, no scan, unresolved breaches", () => {
  const ComposedDashboard = composeStory(
    DashboardUsNoPremiumNoScanUnresolvedBreaches,
    Meta,
  );
  render(<ComposedDashboard />);

  const dashboardTopBannerTitle = screen.queryAllByText(
    "⁨Monitor⁩ now protects you even more",
  );
  expect(
    getRelevantBannerContentElement(dashboardTopBannerTitle),
  ).toBeInTheDocument();
});

it("shows the correct dashboard banner CTA for US users, without Premium, no scan, unresolved breaches", () => {
  const ComposedDashboard = composeStory(
    DashboardUsNoPremiumNoScanUnresolvedBreaches,
    Meta,
  );
  render(<ComposedDashboard />);

  const dashboardTopBannerCta = screen.queryAllByRole("link", {
    name: "Get first scan free",
  });
  expect(
    getRelevantBannerContentElement(dashboardTopBannerCta),
  ).toBeInTheDocument();
});

// Check dashboard banner content for story DashboardUsNoPremiumNoScanResolvedBreaches
it("shows the correct dashboard banner title for US users, without Premium, no scan, resolved breaches", () => {
  const ComposedDashboard = composeStory(
    DashboardUsNoPremiumNoScanResolvedBreaches,
    Meta,
  );
  render(<ComposedDashboard />);

  const dashboardTopBannerTitle = screen.queryAllByText(
    "⁨Monitor⁩ now protects you even more",
  );
  expect(
    getRelevantBannerContentElement(dashboardTopBannerTitle),
  ).toBeInTheDocument();
});

it("shows the correct dashboard banner CTA for US users, without Premium, no scan, resolved breaches", () => {
  const ComposedDashboard = composeStory(
    DashboardUsNoPremiumNoScanResolvedBreaches,
    Meta,
  );
  render(<ComposedDashboard />);

  const dashboardTopBannerCta = screen.queryAllByRole("link", {
    name: "Get first scan free",
  });
  expect(
    getRelevantBannerContentElement(dashboardTopBannerCta),
  ).toBeInTheDocument();
});

// Check dashboard banner content for story DashboardUsNoPremiumEmptyScanNoBreaches
it("shows the correct dashboard banner title for US users, without Premium, empty scan, no breaches", () => {
  const ComposedDashboard = composeStory(
    DashboardUsNoPremiumEmptyScanNoBreaches,
    Meta,
  );
  render(<ComposedDashboard />);

  const dashboardTopBannerTitle = screen.queryAllByText("No exposures found");
  expect(
    getRelevantBannerContentElement(dashboardTopBannerTitle),
  ).toBeInTheDocument();
});

it("shows the correct dashboard banner CTA for US users, without Premium, empty scan, no breaches", () => {
  const ComposedDashboard = composeStory(
    DashboardUsNoPremiumEmptyScanNoBreaches,
    Meta,
  );
  render(<ComposedDashboard />);

  const dashboardTopBannerCta = screen.queryAllByRole("link", {
    name: "Get continuous protection",
  });
  expect(
    getRelevantBannerContentElement(dashboardTopBannerCta),
  ).toBeInTheDocument();
});

// Check dashboard banner content for story DashboardUsNoPremiumEmptyScanUnresolvedBreaches
it("shows the correct dashboard banner title for US users, without Premium, empty scan, unresolved breaches", () => {
  const ComposedDashboard = composeStory(
    DashboardUsNoPremiumEmptyScanUnresolvedBreaches,
    Meta,
  );
  render(<ComposedDashboard />);

  const dashboardTopBannerTitle = screen.queryAllByText(
    "Let’s keep protecting your data",
  );
  expect(
    getRelevantBannerContentElement(dashboardTopBannerTitle),
  ).toBeInTheDocument();
});

it("shows the correct dashboard banner CTA for US users, without Premium, empty scan, unresolved breaches", () => {
  const ComposedDashboard = composeStory(
    DashboardUsNoPremiumEmptyScanUnresolvedBreaches,
    Meta,
  );
  render(<ComposedDashboard />);

  const dashboardTopBannerCta = screen.queryAllByRole("link", {
    name: "Let’s keep going",
  });
  expect(
    getRelevantBannerContentElement(dashboardTopBannerCta),
  ).toBeInTheDocument();
});

// Check dashboard banner content for story DashboardUsNoPremiumEmptyScanResolvedBreaches
it("shows the correct dashboard banner title for US users, without Premium, empty scan, resolved breaches", () => {
  const ComposedDashboard = composeStory(
    DashboardUsNoPremiumEmptyScanResolvedBreaches,
    Meta,
  );
  render(<ComposedDashboard />);

  const dashboardTopBannerTitle = screen.queryAllByText(
    "Your data is protected",
  );
  expect(
    getRelevantBannerContentElement(dashboardTopBannerTitle),
  ).toBeInTheDocument();
});

it("shows the correct dashboard banner CTA for US users, without Premium, empty scan, resolved breaches", () => {
  const ComposedDashboard = composeStory(
    DashboardUsNoPremiumEmptyScanResolvedBreaches,
    Meta,
  );
  render(<ComposedDashboard />);

  const dashboardTopBannerCta = screen.queryAllByRole("button", {
    name: "Get continuous protection",
  });
  expect(
    getRelevantBannerContentElement(dashboardTopBannerCta),
  ).toBeInTheDocument();
});

// Check dashboard banner content for story DashboardUsNoPremiumUnresolvedScanNoBreaches
it("shows the correct dashboard banner title for US users, without Premium, unresolved scan, no breaches", () => {
  const ComposedDashboard = composeStory(
    DashboardUsNoPremiumUnresolvedScanNoBreaches,
    Meta,
  );
  render(<ComposedDashboard />);

  const dashboardTopBannerTitle = screen.queryAllByText(
    "Let’s protect your data",
  );
  expect(
    getRelevantBannerContentElement(dashboardTopBannerTitle),
  ).toBeInTheDocument();
});

it("shows the correct dashboard banner CTA for US users, without Premium, unresolved scan, no breaches", () => {
  const ComposedDashboard = composeStory(
    DashboardUsNoPremiumUnresolvedScanNoBreaches,
    Meta,
  );
  render(<ComposedDashboard />);

  const dashboardTopBannerCta = screen.queryAllByRole("link", {
    name: "Let’s fix it",
  });
  expect(
    getRelevantBannerContentElement(dashboardTopBannerCta),
  ).toBeInTheDocument();
});

// Check dashboard banner content for story DashboardUsNoPremiumUnresolvedScanUnresolvedBreaches
it("shows the correct dashboard banner title for US users, without Premium, UnresolvedScanUnresolved breaches", () => {
  const ComposedDashboard = composeStory(
    DashboardUsNoPremiumUnresolvedScanUnresolvedBreaches,
    Meta,
  );
  render(<ComposedDashboard />);

  const dashboardTopBannerTitle = screen.queryAllByText(
    "Let’s keep protecting your data",
  );
  expect(
    getRelevantBannerContentElement(dashboardTopBannerTitle),
  ).toBeInTheDocument();
});

it("shows the correct dashboard banner CTA for US users, without Premium, UnresolvedScanUnresolved breaches", () => {
  const ComposedDashboard = composeStory(
    DashboardUsNoPremiumUnresolvedScanUnresolvedBreaches,
    Meta,
  );
  render(<ComposedDashboard />);

  const dashboardTopBannerCta = screen.queryAllByRole("link", {
    name: "Let’s keep going",
  });
  expect(
    getRelevantBannerContentElement(dashboardTopBannerCta),
  ).toBeInTheDocument();
});

// Check dashboard banner content for story DashboardUsNoPremiumUnresolvedScanResolvedBreaches
it("shows the correct dashboard banner title for US users, without Premium, unresolved scan, resolved breaches", () => {
  const ComposedDashboard = composeStory(
    DashboardUsNoPremiumUnresolvedScanResolvedBreaches,
    Meta,
  );
  render(<ComposedDashboard />);

  const dashboardTopBannerTitle = screen.queryAllByText(
    "Let’s protect your data",
  );
  expect(
    getRelevantBannerContentElement(dashboardTopBannerTitle),
  ).toBeInTheDocument();
});

it("shows the correct dashboard banner CTA for US users, without Premium, unresolved scan, resolved breaches", () => {
  const ComposedDashboard = composeStory(
    DashboardUsNoPremiumUnresolvedScanResolvedBreaches,
    Meta,
  );
  render(<ComposedDashboard />);

  const dashboardTopBannerCta = screen.queryAllByRole("link", {
    name: "Let’s fix it",
  });
  expect(
    getRelevantBannerContentElement(dashboardTopBannerCta),
  ).toBeInTheDocument();
});

// Check dashboard banner content for story DashboardUsNoPremiumResolvedScanNoBreaches
it("shows the correct dashboard banner title for US users, without Premium, resolved scan, no breaches", () => {
  const ComposedDashboard = composeStory(
    DashboardUsNoPremiumResolvedScanNoBreaches,
    Meta,
  );
  render(<ComposedDashboard />);

  const dashboardTopBannerTitle = screen.queryAllByText(
    "Your data is protected",
  );
  expect(
    getRelevantBannerContentElement(dashboardTopBannerTitle),
  ).toBeInTheDocument();
});

it("shows the correct dashboard banner CTA for US users, without Premium, resolved scan, no breaches", () => {
  const ComposedDashboard = composeStory(
    DashboardUsNoPremiumResolvedScanNoBreaches,
    Meta,
  );
  render(<ComposedDashboard />);

  const dashboardTopBannerCta = screen.queryAllByRole("button", {
    name: "Get continuous protection",
  });
  expect(
    getRelevantBannerContentElement(dashboardTopBannerCta),
  ).toBeInTheDocument();
});

// Check dashboard banner content for story DashboardUsNoPremiumResolvedScanUnresolvedBreaches
it("shows the correct dashboard banner title for US users, without Premium, resolved scan, unresolved breaches", () => {
  const ComposedDashboard = composeStory(
    DashboardUsNoPremiumResolvedScanUnresolvedBreaches,
    Meta,
  );
  render(<ComposedDashboard />);

  const dashboardTopBannerTitle = screen.queryAllByText(
    "Let’s keep protecting your data",
  );
  expect(
    getRelevantBannerContentElement(dashboardTopBannerTitle),
  ).toBeInTheDocument();
});

it("shows the correct dashboard banner CTA for US users, without Premium, resolved scan, unresolved breaches", () => {
  const ComposedDashboard = composeStory(
    DashboardUsNoPremiumResolvedScanUnresolvedBreaches,
    Meta,
  );
  render(<ComposedDashboard />);

  const dashboardTopBannerCta = screen.queryAllByRole("link", {
    name: "Let’s keep going",
  });
  expect(
    getRelevantBannerContentElement(dashboardTopBannerCta),
  ).toBeInTheDocument();
});

// Check dashboard banner content for story DashboardUsNoPremiumResolvedScanResolvedBreaches
it("shows the correct dashboard banner title for US users, without Premium, resolved scan, resolved breaches", () => {
  const ComposedDashboard = composeStory(
    DashboardUsNoPremiumResolvedScanResolvedBreaches,
    Meta,
  );
  render(<ComposedDashboard />);

  const dashboardTopBannerTitle = screen.queryAllByText(
    "Your data is protected",
  );
  expect(
    getRelevantBannerContentElement(dashboardTopBannerTitle),
  ).toBeInTheDocument();
});

it("shows the correct dashboard banner CTA for US users, without Premium, resolved scan, resolved breaches", () => {
  const ComposedDashboard = composeStory(
    DashboardUsNoPremiumResolvedScanResolvedBreaches,
    Meta,
  );
  render(<ComposedDashboard />);

  const dashboardTopBannerCta = screen.queryAllByRole("button", {
    name: "Get continuous protection",
  });
  expect(
    getRelevantBannerContentElement(dashboardTopBannerCta),
  ).toBeInTheDocument();
});

// Check dashboard banner content for story DashboardUsPremiumEmptyScanNoBreaches
it("shows the correct dashboard banner title for US user, with Premium, empty scan, no breaches", () => {
  const ComposedDashboard = composeStory(
    DashboardUsPremiumEmptyScanNoBreaches,
    Meta,
  );
  render(<ComposedDashboard />);

  const dashboardTopBannerTitle = screen.queryAllByText("");
  expect(
    getRelevantBannerContentElement(dashboardTopBannerTitle),
  ).toBeInTheDocument();
});

it("shows the correct dashboard banner CTA for US user, with Premium, empty scan, no breaches", () => {
  const ComposedDashboard = composeStory(
    DashboardUsPremiumEmptyScanNoBreaches,
    Meta,
  );
  render(<ComposedDashboard />);

  const dashboardTopBannerCta = screen.queryAllByRole("link", {
    name: "Monitor more emails",
  });
  expect(
    getRelevantBannerContentElement(dashboardTopBannerCta),
  ).toBeInTheDocument();
});

// Check dashboard banner content for story DashboardUsPremiumEmptyScanUnresolvedBreaches
it("shows the correct dashboard banner title for US user, with Premium, empty scan, unresolved breaches", () => {
  const ComposedDashboard = composeStory(
    DashboardUsPremiumEmptyScanUnresolvedBreaches,
    Meta,
  );
  render(<ComposedDashboard />);

  const dashboardTopBannerTitle = screen.queryAllByText(
    "Let’s keep protecting your data",
  );
  expect(
    getRelevantBannerContentElement(dashboardTopBannerTitle),
  ).toBeInTheDocument();
});

it("shows the correct dashboard banner CTA for US user, with Premium, empty scan, unresolved breaches", () => {
  const ComposedDashboard = composeStory(
    DashboardUsPremiumEmptyScanUnresolvedBreaches,
    Meta,
  );
  render(<ComposedDashboard />);

  const dashboardTopBannerCta = screen.queryAllByRole("link", {
    name: "Let’s keep going",
  });
  expect(
    getRelevantBannerContentElement(dashboardTopBannerCta),
  ).toBeInTheDocument();
});

// Check dashboard banner content for story DashboardUsPremiumEmptyScanResolvedBreaches
it("shows the correct dashboard banner title for US user, with Premium, empty scan, resolved breaches", () => {
  const ComposedDashboard = composeStory(
    DashboardUsPremiumEmptyScanResolvedBreaches,
    Meta,
  );
  render(<ComposedDashboard />);

  const dashboardTopBannerTitle = screen.queryAllByText(
    "Your data is protected",
  );
  expect(
    getRelevantBannerContentElement(dashboardTopBannerTitle),
  ).toBeInTheDocument();
});

it("shows the correct dashboard banner CTA for US user, with Premium, empty scan, resolved breaches", () => {
  const ComposedDashboard = composeStory(
    DashboardUsPremiumEmptyScanResolvedBreaches,
    Meta,
  );
  render(<ComposedDashboard />);

  const dashboardTopBannerCta = screen.queryAllByRole("button", {
    name: "See what’s fixed",
  });
  expect(
    getRelevantBannerContentElement(dashboardTopBannerCta),
  ).toBeInTheDocument();
});

// Check dashboard banner content for story DashboardUsPremiumUnresolvedScanNoBreaches
it("shows the correct dashboard banner title for US user, with Premium, unresolved scan, no breaches", () => {
  const ComposedDashboard = composeStory(
    DashboardUsPremiumUnresolvedScanNoBreaches,
    Meta,
  );
  render(<ComposedDashboard />);

  const dashboardTopBannerTitle = screen.queryAllByText(
    "Let’s keep protecting your data",
  );
  expect(
    getRelevantBannerContentElement(dashboardTopBannerTitle),
  ).toBeInTheDocument();
});

it("shows the correct dashboard banner CTA for US user, with Premium, unresolved scan, no breaches", () => {
  const ComposedDashboard = composeStory(
    DashboardUsPremiumUnresolvedScanNoBreaches,
    Meta,
  );
  render(<ComposedDashboard />);

  const dashboardTopBannerCta = screen.queryAllByRole("link", {
    name: "Let’s keep going",
  });
  expect(
    getRelevantBannerContentElement(dashboardTopBannerCta),
  ).toBeInTheDocument();
});

// Check dashboard banner content for story DashboardUsPremiumUnresolvedScanUnresolvedBreaches
it("shows the correct dashboard banner title for US user, with Premium, UnresolvedScanUnresolved breaches", () => {
  const ComposedDashboard = composeStory(
    DashboardUsPremiumUnresolvedScanUnresolvedBreaches,
    Meta,
  );
  render(<ComposedDashboard />);

  const dashboardTopBannerTitle = screen.queryAllByText(
    "Let’s protect your data",
  );
  expect(
    getRelevantBannerContentElement(dashboardTopBannerTitle),
  ).toBeInTheDocument();
});

it("shows the correct dashboard banner CTA for US user, with Premium, UnresolvedScanUnresolved breaches", () => {
  const ComposedDashboard = composeStory(
    DashboardUsPremiumUnresolvedScanUnresolvedBreaches,
    Meta,
  );
  render(<ComposedDashboard />);

  const dashboardTopBannerCta = screen.queryAllByRole("link", {
    name: "Let’s fix it",
  });
  expect(
    getRelevantBannerContentElement(dashboardTopBannerCta),
  ).toBeInTheDocument();
});

// Check dashboard banner content for story DashboardUsPremiumUnresolvedScanResolvedBreaches
it("shows the correct dashboard banner title for US user, with Premium, unresolved scan, resolved breaches", () => {
  const ComposedDashboard = composeStory(
    DashboardUsPremiumUnresolvedScanResolvedBreaches,
    Meta,
  );
  render(<ComposedDashboard />);

  const dashboardTopBannerTitle = screen.queryAllByText(
    "Let’s keep protecting your data",
  );
  expect(
    getRelevantBannerContentElement(dashboardTopBannerTitle),
  ).toBeInTheDocument();
});

it("shows the correct dashboard banner CTA for US user, with Premium, unresolved scan, resolved breaches", () => {
  const ComposedDashboard = composeStory(
    DashboardUsPremiumUnresolvedScanResolvedBreaches,
    Meta,
  );
  render(<ComposedDashboard />);

  const dashboardTopBannerCta = screen.queryAllByRole("link", {
    name: "Let’s keep going",
  });
  expect(
    getRelevantBannerContentElement(dashboardTopBannerCta),
  ).toBeInTheDocument();
});

// Check dashboard banner content for story DashboardUsPremiumResolvedScanNoBreaches
it("shows the correct dashboard banner title for US user, with Premium, resolved scan, no breaches", () => {
  const ComposedDashboard = composeStory(
    DashboardUsPremiumResolvedScanNoBreaches,
    Meta,
  );
  render(<ComposedDashboard />);

  const dashboardTopBannerTitle = screen.queryAllByText(
    "Your data is protected",
  );
  expect(
    getRelevantBannerContentElement(dashboardTopBannerTitle),
  ).toBeInTheDocument();
});

it("shows the correct dashboard banner CTA for US user, with Premium, resolved scan, no breaches", () => {
  const ComposedDashboard = composeStory(
    DashboardUsPremiumResolvedScanNoBreaches,
    Meta,
  );
  render(<ComposedDashboard />);

  const dashboardTopBannerCta = screen.queryAllByRole("button", {
    name: "See what’s fixed",
  });
  expect(
    getRelevantBannerContentElement(dashboardTopBannerCta),
  ).toBeInTheDocument();
});

// Check dashboard banner content for story DashboardUsPremiumResolvedScanUnresolvedBreaches
it("shows the correct dashboard banner title for US user, with Premium, resolved scan, unresolved breaches", () => {
  const ComposedDashboard = composeStory(
    DashboardUsPremiumResolvedScanUnresolvedBreaches,
    Meta,
  );
  render(<ComposedDashboard />);

  const dashboardTopBannerTitle = screen.queryAllByText(
    "Let’s keep protecting your data",
  );
  expect(
    getRelevantBannerContentElement(dashboardTopBannerTitle),
  ).toBeInTheDocument();
});

it("shows the correct dashboard banner CTA for US user, with Premium, resolved scan, unresolved breaches", () => {
  const ComposedDashboard = composeStory(
    DashboardUsPremiumResolvedScanUnresolvedBreaches,
    Meta,
  );
  render(<ComposedDashboard />);

  const dashboardTopBannerCta = screen.queryAllByRole("link", {
    name: "Let’s keep going",
  });
  expect(
    getRelevantBannerContentElement(dashboardTopBannerCta),
  ).toBeInTheDocument();
});

// Check dashboard banner content for story DashboardUsPremiumResolvedScanResolvedBreaches
it("shows the correct dashboard banner title for US user, with Premium, resolved scan, resolved breaches", () => {
  const ComposedDashboard = composeStory(
    DashboardUsPremiumResolvedScanResolvedBreaches,
    Meta,
  );
  render(<ComposedDashboard />);

  const dashboardTopBannerTitle = screen.queryAllByText(
    "Your data is protected",
  );
  expect(
    getRelevantBannerContentElement(dashboardTopBannerTitle),
  ).toBeInTheDocument();
});

it("shows the correct dashboard banner CTA for US user, with Premium, resolved scan, resolved breaches", () => {
  const ComposedDashboard = composeStory(
    DashboardUsPremiumResolvedScanResolvedBreaches,
    Meta,
  );
  render(<ComposedDashboard />);

  const dashboardTopBannerCta = screen.queryAllByRole("button", {
    name: "See what’s fixed",
  });
  expect(
    getRelevantBannerContentElement(dashboardTopBannerCta),
  ).toBeInTheDocument();
});

// Check dashboard banner content for story DashboardUsNoPremiumScanInProgressNoBreaches
it("shows the correct dashboard banner title for US user, without Premium, scan in progress, no breaches", () => {
  const ComposedDashboard = composeStory(
    DashboardUsNoPremiumScanInProgressNoBreaches,
    Meta,
  );
  render(<ComposedDashboard />);

  const dashboardTopBannerTitle = screen.queryAllByText(
    "Your scan is still in progress",
  );
  expect(
    getRelevantBannerContentElement(dashboardTopBannerTitle),
  ).toBeInTheDocument();
});

it("shows the correct dashboard banner CTA for US user, without Premium, scan in progress, no breaches", () => {
  const ComposedDashboard = composeStory(
    DashboardUsNoPremiumScanInProgressNoBreaches,
    Meta,
  );
  render(<ComposedDashboard />);

  const dashboardTopBannerCta = screen.queryAllByRole("link", {
    name: "Check more email addresses",
  });
  expect(
    getRelevantBannerContentElement(dashboardTopBannerCta),
  ).toBeInTheDocument();
});

// Check dashboard banner content for story DashboardUsNoPremiumScanInProgressUnresolvedBreaches
it("shows the correct dashboard banner title for US user, without Premium, scan in progress, unresolved breaches", () => {
  const ComposedDashboard = composeStory(
    DashboardUsNoPremiumScanInProgressUnresolvedBreaches,
    Meta,
  );
  render(<ComposedDashboard />);

  const dashboardTopBannerTitle = screen.queryAllByText(
    "Your scan is still in progress",
  );
  expect(
    getRelevantBannerContentElement(dashboardTopBannerTitle),
  ).toBeInTheDocument();
});

it("shows the correct dashboard banner CTA for US user, without Premium, scan in progress, unresolved breaches", () => {
  const ComposedDashboard = composeStory(
    DashboardUsNoPremiumScanInProgressUnresolvedBreaches,
    Meta,
  );
  render(<ComposedDashboard />);

  const dashboardTopBannerCta = screen.queryAllByRole("link", {
    name: "See what’s ready now",
  });
  expect(
    getRelevantBannerContentElement(dashboardTopBannerCta),
  ).toBeInTheDocument();
});

// Check dashboard banner content for story DashboardUsNoPremiumScanInProgressResolvedBreaches
it("shows the correct dashboard banner title for US user, without Premium, scan in progress, resolved breaches", () => {
  const ComposedDashboard = composeStory(
    DashboardUsNoPremiumScanInProgressResolvedBreaches,
    Meta,
  );
  render(<ComposedDashboard />);

  const dashboardTopBannerTitle = screen.queryAllByText(
    "Your scan is still in progress",
  );
  expect(
    getRelevantBannerContentElement(dashboardTopBannerTitle),
  ).toBeInTheDocument();
});

it("shows the correct dashboard banner CTA for US user, without Premium, scan in progress, resolved breaches", () => {
  const ComposedDashboard = composeStory(
    DashboardUsNoPremiumScanInProgressResolvedBreaches,
    Meta,
  );
  render(<ComposedDashboard />);

  const dashboardTopBannerCta = screen.queryAllByRole("link", {
    name: "Check more email addresses",
  });
  expect(
    getRelevantBannerContentElement(dashboardTopBannerCta),
  ).toBeInTheDocument();
});

// Check dashboard banner content for story DashboardUsPremiumScanInProgressNoBreaches
it("shows the correct dashboard banner title for US user, with Premium, scan in progress, no breaches", () => {
  const ComposedDashboard = composeStory(
    DashboardUsPremiumScanInProgressNoBreaches,
    Meta,
  );
  render(<ComposedDashboard />);

  const dashboardTopBannerTitle = screen.queryAllByText(
    "Your scan is still in progress",
  );
  expect(
    getRelevantBannerContentElement(dashboardTopBannerTitle),
  ).toBeInTheDocument();
});

it("shows the correct dashboard banner CTA for US user, with Premium, scan in progress, no breaches", () => {
  const ComposedDashboard = composeStory(
    DashboardUsPremiumScanInProgressNoBreaches,
    Meta,
  );
  render(<ComposedDashboard />);

  const dashboardTopBannerCta = screen.queryAllByRole("link", {
    name: "Check more email addresses",
  });
  expect(
    getRelevantBannerContentElement(dashboardTopBannerCta),
  ).toBeInTheDocument();
});

// Check dashboard banner content for story DashboardUsPremiumScanInProgressUnresolvedBreaches
it("shows the correct dashboard banner title for US user, with Premium, scan in progress, unresolved breaches", () => {
  const ComposedDashboard = composeStory(
    DashboardUsPremiumScanInProgressUnresolvedBreaches,
    Meta,
  );
  render(<ComposedDashboard />);

  const dashboardTopBannerTitle = screen.queryAllByText(
    "Your scan is still in progress",
  );
  expect(
    getRelevantBannerContentElement(dashboardTopBannerTitle),
  ).toBeInTheDocument();
});

it("shows the correct dashboard banner CTA for US user, with Premium, scan in progress, unresolved breaches", () => {
  const ComposedDashboard = composeStory(
    DashboardUsPremiumScanInProgressUnresolvedBreaches,
    Meta,
  );
  render(<ComposedDashboard />);

  const dashboardTopBannerCta = screen.queryAllByRole("link", {
    name: "See what’s ready now",
  });
  expect(
    getRelevantBannerContentElement(dashboardTopBannerCta),
  ).toBeInTheDocument();
});

// Check dashboard banner content for story DashboardUsPremiumScanInProgressResolvedBreaches
it("shows the correct dashboard banner title for US user, with Premium, scan in progress, resolved breaches", () => {
  const ComposedDashboard = composeStory(
    DashboardUsPremiumScanInProgressResolvedBreaches,
    Meta,
  );
  render(<ComposedDashboard />);

  const dashboardTopBannerTitle = screen.queryAllByText(
    "Your scan is still in progress",
  );
  expect(
    getRelevantBannerContentElement(dashboardTopBannerTitle),
  ).toBeInTheDocument();
});

it("shows the correct dashboard banner CTA for US user, with Premium, scan in progress, resolved breaches", () => {
  const ComposedDashboard = composeStory(
    DashboardUsPremiumScanInProgressResolvedBreaches,
    Meta,
  );
  render(<ComposedDashboard />);

  const dashboardTopBannerCta = screen.queryAllByRole("link", {
    name: "Check more email addresses",
  });
  expect(
    getRelevantBannerContentElement(dashboardTopBannerCta),
  ).toBeInTheDocument();
});

// Check dashboard banner content for story DashboardInvalidNonPremiumUserScanUnresolvedInProgressResolvedBreaches
it("logs a warning in the story for an invalid user state", () => {
  const ComposedDashboard = composeStory(
    DashboardInvalidPremiumUserNoScanResolvedBreaches,
    Meta,
  );

  const warnLogSpy = jest.spyOn(global.console, "warn").mockImplementation();
  render(<ComposedDashboard />);

  expect(warnLogSpy).toHaveBeenCalledWith(
    "No matching condition for dashboard state found.",
  );
  warnLogSpy.mockReset();
});
