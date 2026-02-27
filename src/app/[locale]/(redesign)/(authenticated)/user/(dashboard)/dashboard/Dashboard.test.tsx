/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { it, expect, vi, afterEach } from "vitest";
import {
  getByLabelText,
  getByRole,
  getByText,
  queryByRole,
  render,
  screen,
  within,
} from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { composeStory } from "@storybook/react";
import { axe } from "vitest-axe";
import Meta, {
  DashboardNonUsNoBreaches,
  DashboardNonUsUnresolvedBreaches,
  DashboardNonUsResolvedBreaches,
  DashboardInvalidState,
} from "./Dashboard.stories";
import { useTelemetry } from "../../../../../../hooks/useTelemetry";
import { deleteAllCookies } from "../../../../../../functions/client/deleteAllCookies";

vi.mock("next/navigation", () => ({
  useRouter: vi.fn(),
  usePathname: vi.fn(),
  useSearchParams: () => ({
    get: vi.fn(),
  }),
}));
vi.mock("../../../../../../hooks/useTelemetry");

afterEach(() => {
  // Make the CSAT banner show up again.
  deleteAllCookies();
});

it("passes the axe accessibility test suite", async () => {
  const ComposedDashboard = composeStory(DashboardNonUsNoBreaches, Meta);
  const { container } = render(<ComposedDashboard />);
  expect(await axe(container)).toHaveNoViolations();
}, 10_000);

it("renders the dashboard with the action needed tab selected when requested", () => {
  const ComposedDashboard = composeStory(DashboardNonUsResolvedBreaches, Meta);
  render(<ComposedDashboard activeTab="action-needed" />);

  const tabActionNeededTrigger = screen.getByRole("tab", {
    name: "Action needed",
  });
  expect(tabActionNeededTrigger.getAttribute("aria-selected")).toBe("true");
});

it("switches between tab panels", async () => {
  const user = userEvent.setup();
  const ComposedDashboard = composeStory(DashboardNonUsResolvedBreaches, Meta);
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

it("shows consistent counts in the chart on the fixed tab", async () => {
  const user = userEvent.setup();
  const ComposedDashboard = composeStory(
    DashboardNonUsUnresolvedBreaches,
    Meta,
  );
  render(<ComposedDashboard />);

  const tabFixedTrigger = screen.getByRole("tab", {
    name: "Fixed",
  });
  await user.click(tabFixedTrigger);

  const fixedCounter = 24;
  const chartElement = screen.getByRole("img", {
    name: `⁨${fixedCounter}⁩ exposures`,
  });
  expect(chartElement).toBeInTheDocument();
  const chartCaption = screen.getByText(
    `This chart shows the total exposures that are fixed (⁨${fixedCounter}⁩ out of ⁨42⁩)`,
  );
  expect(chartCaption).toBeInTheDocument();
});

it("does not show non-US users the date of their last scan", () => {
  const ComposedDashboard = composeStory(DashboardNonUsNoBreaches, Meta);
  render(<ComposedDashboard />);

  const lastScanIndicator = screen.queryByText("Last scan:");
  expect(lastScanIndicator).not.toBeInTheDocument();
});

it("shows chart tooltip on the action needed tab, non-US user", async () => {
  const user = userEvent.setup();
  const ComposedDashboard = composeStory(DashboardNonUsNoBreaches, Meta);
  render(<ComposedDashboard />);

  const chartCaption = screen.getByText(
    "This chart shows how many times your info is actively exposed.",
  );
  expect(chartCaption).toBeInTheDocument();
  const chartTooltip = within(chartCaption).getByRole("button", {
    name: "Open modal",
  });
  expect(chartTooltip).toBeInTheDocument();
  await user.click(chartTooltip);

  expect(
    screen.getByRole("dialog", {
      name: "About your number of active exposures",
    }),
  ).toBeInTheDocument();

  const dialogContentPart = screen.getByText(
    "This chart includes the total number of times we found each type of data exposed across all data breaches for up to ⁨20⁩ email addresses that you are currently monitoring.",
  );
  expect(dialogContentPart).toBeInTheDocument();
});

it("shows chart tooltip on the fixed tab, non-US user", async () => {
  const user = userEvent.setup();
  const ComposedDashboard = composeStory(DashboardNonUsNoBreaches, Meta);
  render(<ComposedDashboard />);

  const fixedTab = screen.getByText("Fixed");
  await user.click(fixedTab);

  const chartCaption = screen.getByText(
    "This chart shows the total exposures that are fixed (⁨0⁩ out of ⁨0⁩)",
  );
  expect(chartCaption).toBeInTheDocument();
  const chartTooltip = within(chartCaption).getByRole("button", {
    name: "Open modal",
  });
  expect(chartTooltip).toBeInTheDocument();
  await user.click(chartTooltip);

  expect(
    screen.getByRole("dialog", {
      name: "About your number of fixed exposures",
    }),
  ).toBeInTheDocument();

  const dialogContentPart = screen.getByText(
    "This chart includes the total number of data breaches that have been fixed for all email addresses you\u2019re currently monitoring. Once exposures are marked as fixed, they\u2019ll be added to the total here.",
  );
  expect(dialogContentPart).toBeInTheDocument();
});

it("shows a user who has resolved all exposures a CTA to check out what was fixed", async () => {
  const user = userEvent.setup();
  const ComposedDashboard = composeStory(DashboardNonUsResolvedBreaches, Meta);
  render(<ComposedDashboard />);

  // show banner CTA premium upgrade
  const bannerCta = screen.queryAllByRole("button", {
    name: "See what\u2019s fixed",
  });
  expect(bannerCta.length).toBe(1);

  // click on cta
  await user.click(bannerCta[0]);

  const fixedTab = screen.getByRole("tab", { name: "Fixed" });
  expect(fixedTab).toHaveAttribute("aria-selected", "true");
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

it("shows the correct dashboard banner CTA and sends telemetry for non-US users, no breaches", async () => {
  const ComposedDashboard = composeStory(DashboardNonUsNoBreaches, Meta);
  const mockedRecord = useTelemetry();
  const user = userEvent.setup();
  // jsdom will complain about not being able to navigate to a different page
  // after clicking the link; suppress that error, as it's not relevant to the
  // test:
  vi.spyOn(console, "error").mockImplementationOnce(() => undefined);
  render(<ComposedDashboard />);

  const dashboardTopBanner = screen.getByRole("region", {
    name: "Dashboard summary",
  });
  const dashboardTopBannerCta = getByRole(dashboardTopBanner, "link", {
    name: "Monitor more emails",
  });
  expect(dashboardTopBannerCta).toBeInTheDocument();
  await user.click(dashboardTopBannerCta);
  expect(mockedRecord).toHaveBeenCalledWith(
    "ctaButton",
    "click",
    expect.objectContaining({
      button_id: "non_eligible_premium_no_breaches",
    }),
  );
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
    "Let\u2019s protect your data",
  );
  expect(dashboardTopBannerTitle).toBeInTheDocument();
});

it("shows the correct dashboard banner CTA and sends telemetry for non-US users, unresolved breaches", async () => {
  const ComposedDashboard = composeStory(
    DashboardNonUsUnresolvedBreaches,
    Meta,
  );
  const mockedRecord = useTelemetry();
  const user = userEvent.setup();
  // jsdom will complain about not being able to navigate to a different page
  // after clicking the link; suppress that error, as it's not relevant to the
  // test:
  vi.spyOn(console, "error").mockImplementationOnce(() => undefined);
  render(<ComposedDashboard />);

  const dashboardTopBanner = screen.getByRole("region", {
    name: "Dashboard summary",
  });
  const dashboardTopBannerCta = getByRole(dashboardTopBanner, "link", {
    name: "Let\u2019s fix it",
  });
  expect(dashboardTopBannerCta).toBeInTheDocument();
  await user.click(dashboardTopBannerCta);
  expect(mockedRecord).toHaveBeenCalledWith(
    "ctaButton",
    "click",
    expect.objectContaining({
      button_id: "non_eligible_premium_unresolved_breaches",
    }),
  );
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

it("does not show How It Works page link to non-US users, resolved breaches", () => {
  const ComposedDashboard = composeStory(DashboardNonUsResolvedBreaches, Meta);
  render(<ComposedDashboard />);

  const howItWorksLink = screen.queryByTestId(
    "learn-more-link-to-how-it-works",
  );

  expect(howItWorksLink).not.toBeInTheDocument();
});

it("shows the correct dashboard banner CTA and sends telemetry for non-US users, resolved breaches", async () => {
  const ComposedDashboard = composeStory(DashboardNonUsResolvedBreaches, Meta);
  const mockedRecord = useTelemetry();
  const user = userEvent.setup();
  // jsdom will complain about not being able to navigate to a different page
  // after clicking the link; suppress that error, as it's not relevant to the
  // test:
  vi.spyOn(console, "error").mockImplementationOnce(() => undefined);
  render(<ComposedDashboard />);

  const dashboardTopBanner = screen.getByRole("region", {
    name: "Dashboard summary",
  });
  const dashboardTopBannerCta = getByRole(dashboardTopBanner, "button", {
    name: "See what\u2019s fixed",
  });
  await user.click(dashboardTopBannerCta);
  expect(mockedRecord).toHaveBeenCalledWith(
    "ctaButton",
    "click",
    expect.objectContaining({
      button_id: "non_eligible_premium_resolved_breaches",
    }),
  );
});

it("expands one card at a time", async () => {
  const user = userEvent.setup();
  const ComposedDashboard = composeStory(
    DashboardNonUsUnresolvedBreaches,
    Meta,
  );
  render(<ComposedDashboard />);

  // collapsed
  const expandButtons = screen.getAllByRole("button", {
    name: "Exposure details",
  });

  expect(expandButtons[0]).toHaveAttribute("aria-expanded", "false");

  await user.click(expandButtons[0]);

  expect(expandButtons[0]).toHaveAttribute("aria-expanded", "true");

  await user.click(expandButtons[1]);

  expect(expandButtons[0]).toHaveAttribute("aria-expanded", "false");
  expect(expandButtons[1]).toHaveAttribute("aria-expanded", "true");
});

it("closes previously active card onclick", async () => {
  const user = userEvent.setup();
  const ComposedDashboard = composeStory(
    DashboardNonUsUnresolvedBreaches,
    Meta,
  );
  render(<ComposedDashboard />);

  const initialState = screen.getAllByRole("button", {
    name: "Exposure details",
  });

  expect(initialState[0]).toHaveAttribute("aria-expanded", "false");

  await user.click(initialState[0]);

  expect(initialState[0]).toHaveAttribute("aria-expanded", "true");

  await user.click(initialState[0]);

  expect(initialState[0]).toHaveAttribute("aria-expanded", "false");
});

it("does not allow non-US users to filter by exposure type, since they can only see a single exposure type (i.e. breaches)", async () => {
  const user = userEvent.setup();
  const ComposedDashboard = composeStory(
    DashboardNonUsUnresolvedBreaches,
    Meta,
  );
  render(<ComposedDashboard />);

  const filterMenuButton = screen.getByRole("button", {
    name: "Select filters",
  });
  await user.click(filterMenuButton);

  const filterDialog = screen.getByRole("dialog");
  const exposureTypeRadioGroup = queryByRole(filterDialog, "radiogroup", {
    name: "Exposure type",
  });

  expect(exposureTypeRadioGroup).not.toBeInTheDocument();
});

it("allows users to filter for results in the last 7 days", async () => {
  const user = userEvent.setup();
  const ComposedDashboard = composeStory(
    DashboardNonUsUnresolvedBreaches,
    Meta,
  );
  render(<ComposedDashboard />);

  const filterMenuButton = screen.getByRole("button", {
    name: "Select filters",
  });
  await user.click(filterMenuButton);

  const filterDialog = screen.getByRole("dialog");
  const exposureTypeInput = getByLabelText(filterDialog, "Last 7 days");
  await user.click(exposureTypeInput);

  const showResultsButton = getByRole(filterDialog, "button", {
    name: "Show results",
  });
  await user.click(showResultsButton);

  expect(showResultsButton).not.toBeInTheDocument();
});

it("allows users to filter for results in the last 30 days", async () => {
  const user = userEvent.setup();
  const ComposedDashboard = composeStory(DashboardNonUsResolvedBreaches, Meta);
  render(<ComposedDashboard />);

  const filterMenuButton = screen.getByRole("button", {
    name: "Select filters",
  });
  await user.click(filterMenuButton);

  const filterDialog = screen.getByRole("dialog");
  const exposureTypeInput = getByLabelText(filterDialog, "Last 30 days");
  await user.click(exposureTypeInput);

  const showResultsButton = getByRole(filterDialog, "button", {
    name: "Show results",
  });
  await user.click(showResultsButton);

  expect(showResultsButton).not.toBeInTheDocument();
});

it("allows users to filter for results in the last year", async () => {
  const user = userEvent.setup();
  const ComposedDashboard = composeStory(DashboardNonUsResolvedBreaches, Meta);
  render(<ComposedDashboard />);

  const filterMenuButton = screen.getByRole("button", {
    name: "Select filters",
  });
  await user.click(filterMenuButton);

  const filterDialog = screen.getByRole("dialog");
  const exposureTypeInput = getByLabelText(filterDialog, "Last year");
  await user.click(exposureTypeInput);

  const showResultsButton = getByRole(filterDialog, "button", {
    name: "Show results",
  });
  await user.click(showResultsButton);

  expect(showResultsButton).not.toBeInTheDocument();
});

it("send telemetry when users toggle between action needed and fixed tabs", async () => {
  const user = userEvent.setup();
  const ComposedDashboard = composeStory(DashboardNonUsResolvedBreaches, Meta);
  const mockedRecord = useTelemetry();
  render(<ComposedDashboard />);

  // jsdom will complain about not being able to navigate to a different page
  // after clicking the link; suppress that error, as it's not relevant to the
  // test:
  vi.spyOn(console, "error").mockImplementationOnce(() => undefined);

  // We show a CTA on desktop in the toolbar and in the mobile menu
  const fixedTab = screen.getByText("Fixed");
  const actionNeededTab = screen.getByText("Action needed");
  await user.click(fixedTab);
  expect(mockedRecord).toHaveBeenCalledWith(
    "dashboard",
    "view",
    expect.objectContaining({
      dashboard_tab: "fixed",
    }),
  );
  await user.click(actionNeededTab);
  expect(mockedRecord).toHaveBeenCalledWith(
    "dashboard",
    "view",
    expect.objectContaining({
      dashboard_tab: "action-needed",
    }),
  );
});

it("send telemetry when users click on dashboard nav menu items", async () => {
  const user = userEvent.setup();
  const ComposedDashboard = composeStory(DashboardNonUsResolvedBreaches, Meta);
  const mockedRecord = useTelemetry();
  render(<ComposedDashboard />);

  // jsdom will complain about not being able to navigate to a different page
  // after clicking the link; suppress that error, as it's not relevant to the
  // test:
  vi.spyOn(console, "error").mockImplementationOnce(() => undefined);

  const dashboardMenuItem = screen.queryAllByRole("link", {
    name: "Dashboard",
  });
  await user.click(dashboardMenuItem[0]);
  expect(mockedRecord).toHaveBeenCalledWith(
    "link",
    "click",
    expect.objectContaining({
      link_id: "navigation_dashboard",
    }),
  );
});

it("send telemetry when users click on the monitor logo", async () => {
  const user = userEvent.setup();
  const ComposedDashboard = composeStory(DashboardNonUsResolvedBreaches, Meta);
  const mockedRecord = useTelemetry();
  render(<ComposedDashboard />);

  // jsdom will complain about not being able to navigate to a different page
  // after clicking the link; suppress that error, as it's not relevant to the
  // test:
  vi.spyOn(console, "error").mockImplementationOnce(() => undefined);

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
  const ComposedDashboard = composeStory(DashboardNonUsResolvedBreaches, Meta);
  const mockedRecord = useTelemetry();
  render(<ComposedDashboard />);

  // jsdom will complain about not being able to navigate to a different page
  // after clicking the link; suppress that error, as it's not relevant to the
  // test:
  vi.spyOn(console, "error").mockImplementationOnce(() => undefined);

  const faqMenuItem = screen.queryAllByRole("link", { name: "FAQs" });
  await user.click(faqMenuItem[0]);
  expect(mockedRecord).toHaveBeenCalledWith(
    "link",
    "click",
    expect.objectContaining({
      link_id: "navigation_faq",
    }),
  );
});

it("send telemetry when users open/close 'number of active exposure' info popup", async () => {
  const user = userEvent.setup();
  const ComposedDashboard = composeStory(DashboardNonUsResolvedBreaches, Meta);
  const mockedRecord = useTelemetry();
  render(<ComposedDashboard />);

  // jsdom will complain about not being able to navigate to a different page
  // after clicking the link; suppress that error, as it's not relevant to the
  // test:
  vi.spyOn(console, "error").mockImplementationOnce(() => undefined);

  const numberOfExposuresInfoPopup = screen.queryAllByLabelText("Open modal");
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

it("send telemetry when users click on data breach link", async () => {
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
  vi.spyOn(console, "error").mockImplementationOnce(() => undefined);

  // expands first row
  const expandButtons = screen.getAllByRole("button", {
    name: "Exposure details",
  });
  await user.click(expandButtons[0]);

  expect(expandButtons[0]).toHaveAttribute("aria-expanded", "true");

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
  await user.click(expandButtons[0]);
  expect(expandButtons[0]).toHaveAttribute("aria-expanded", "false");
});

it("logs a warning and error in the story for an invalid user state", () => {
  const ComposedDashboard = composeStory(DashboardInvalidState, Meta);

  const errorLogSpy = vi
    .spyOn(global.console, "error")
    .mockImplementation(() => undefined);
  const warnLogSpy = vi
    .spyOn(global.console, "warn")
    .mockImplementation(() => undefined);
  render(<ComposedDashboard />);

  expect(errorLogSpy).toHaveBeenCalledWith(
    `InvalidUserState: {"relevantGuidedStep":{"href":"/user/dashboard","id":"Done","eligible":true,"completed":false},"hasExposures":true,"hasUnresolvedBreaches":true}`,
  );
  expect(warnLogSpy).toHaveBeenCalledWith(
    "No matching condition for dashboard state found.",
  );
  warnLogSpy.mockReset();
});
