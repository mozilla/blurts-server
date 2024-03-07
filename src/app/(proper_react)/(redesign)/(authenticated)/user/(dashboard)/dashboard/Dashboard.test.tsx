/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { it, expect } from "@jest/globals";
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
import { axe } from "jest-axe";
import Meta, {
  DashboardNonUsNoBreaches,
  DashboardNonUsUnresolvedBreaches,
  DashboardNonUsResolvedBreaches,
  DashboardUsNoPremiumNoScanNoBreaches,
  DashboardUsNoPremiumNoScanUnresolvedBreaches,
  DashboardUsNoPremiumNoScanResolvedBreaches,
  DashboardUsNoPremiumNoScanNoBreachesScanLimitReached,
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
  DashboardUsPremiumManuallyResolvedScansNoBreaches,
} from "./Dashboard.stories";
import { useTelemetry } from "../../../../../../hooks/useTelemetry";

jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
  usePathname: jest.fn(),
}));
jest.mock("../../../../../../hooks/useTelemetry");

jest.mock(
  "../../../../../../components/client/exposure_card/DataBrokerImage",
  () => {
    return {
      // Mock this with an empty React component. Otherwise, tests will complain:
      // > Warning: A suspended resource finished loading inside a test, but the
      // > event was not wrapped in act(...).
      // > When testing, code that resolves suspended data should be wrapped into
      // > act(...)
      DataBrokerImage: () => null,
    };
  },
);

describe("axe accessibility test suite", () => {
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
    const ComposedDashboard = composeStory(
      DashboardNonUsResolvedBreaches,
      Meta,
    );
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

it("does not show a 'Contact Us' link for non-Plus users", async () => {
  const user = userEvent.setup();
  const ComposedDashboard = composeStory(
    DashboardUsNoPremiumEmptyScanNoBreaches,
    Meta,
  );
  render(<ComposedDashboard />);

  // Note: there are two user menus, for both small and wide screens:
  const userMenuTrigger = screen.getAllByRole("button", {
    name: "Open user menu",
  })[0];
  await user.click(userMenuTrigger);

  const contactUsEntry = screen.queryByRole("menuitem", { name: "Contact us" });

  expect(contactUsEntry).not.toBeInTheDocument();
});

it("shows a 'Contact Us' link for Plus users", async () => {
  const user = userEvent.setup();
  const ComposedDashboard = composeStory(
    DashboardUsPremiumEmptyScanNoBreaches,
    Meta,
  );
  render(<ComposedDashboard />);

  // Note: there are two user menus, for both small and wide screens:
  const userMenuTrigger = screen.getAllByRole("button", {
    name: "Open user menu",
  })[0];
  await user.click(userMenuTrigger);

  const contactUsEntry = screen.getByRole("menuitem", { name: "Contact us" });

  expect(contactUsEntry).toBeInTheDocument();
});

it("counts how often people click the 'Contact us' link", async () => {
  const mockedRecord = useTelemetry();
  const user = userEvent.setup();
  const ComposedDashboard = composeStory(
    DashboardUsPremiumEmptyScanNoBreaches,
    Meta,
  );
  render(<ComposedDashboard />);

  // Note: there are two user menus, for both small and wide screens:
  const userMenuTrigger = screen.getAllByRole("button", {
    name: "Open user menu",
  })[0];
  await user.click(userMenuTrigger);

  const contactUsEntry = screen.getByRole("menuitem", { name: "Contact us" });
  await user.click(contactUsEntry);

  expect(mockedRecord).toHaveBeenCalledWith(
    "ctaButton",
    "click",
    expect.objectContaining({
      button_id: "contact_us_user_menu",
    }),
  );
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
    DashboardUsNoPremiumUnresolvedScanUnresolvedBreaches,
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
    DashboardUsNoPremiumUnresolvedScanUnresolvedBreaches,
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

it("shows US users with Premium the upsell badge", () => {
  const ComposedDashboard = composeStory(
    DashboardUsPremiumEmptyScanNoBreaches,
    Meta,
  );
  render(<ComposedDashboard />);

  // We show an upsell badge on desktop in the toolbar and in the mobile menu
  const upsellBadges = screen.queryAllByRole("button", {
    name: "Automatic data removal: On",
  });
  expect(upsellBadges.length).toBe(2);
});

it("shows US users without Premium the upsell button", () => {
  const ComposedDashboard = composeStory(
    DashboardUsNoPremiumEmptyScanNoBreaches,
    Meta,
  );
  render(<ComposedDashboard />);

  // We show a CTA on desktop in the toolbar and in the mobile menu
  const premiumCtas = screen.queryAllByRole("button", {
    name: "Automatic data removal: Off",
  });
  expect(premiumCtas.length).toBe(2);
});

it("does not show non-US users the upsell badge", () => {
  const ComposedDashboard = composeStory(DashboardNonUsNoBreaches, Meta);
  render(<ComposedDashboard />);

  // We show an upsell badge on desktop in the toolbar and in the mobile menu
  const upsellBadges = screen.queryAllByRole("button", {
    name: "Automatic data removal: On",
  });
  expect(upsellBadges.length).toBe(0);
});

it("does not show non-US users the upsell button", () => {
  const ComposedDashboard = composeStory(DashboardNonUsNoBreaches, Meta);
  render(<ComposedDashboard />);

  // We show a CTA on desktop in the toolbar and in the mobile menu
  const premiumCtas = screen.queryAllByRole("button", {
    name: "Automatic data removal: Off",
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
    name: "Automatic data removal: Off",
  });
  expect(premiumCtas.length).toBe(2);

  // Shows the modal for the desktop layout
  await user.click(premiumCtas[0]);
  expect(
    screen.getByText("Turn on automatic data removal with ⁨Monitor Plus⁩"),
  ).toBeInTheDocument();
  const closeButtonIcon1 = screen.getByLabelText("Close");
  await user.click(closeButtonIcon1.parentElement as HTMLElement);
  expect(
    screen.queryByText("Turn on automatic data removal with ⁨Monitor Plus⁩"),
  ).not.toBeInTheDocument();

  // Shows the modal for the mobile layout
  await user.click(premiumCtas[1]);
  expect(
    screen.getByText("Turn on automatic data removal with ⁨Monitor Plus⁩"),
  ).toBeInTheDocument();
  const closeButtonIcon2 = screen.getByLabelText("Close");
  await user.click(closeButtonIcon2.parentElement as HTMLElement);
  expect(
    screen.queryByText("Turn on automatic data removal with ⁨Monitor Plus⁩"),
  ).not.toBeInTheDocument();
});

it("opens and closes the premium upsell dialog via the Premium upsell button", async () => {
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
    screen.getByText("Turn on automatic data removal with ⁨Monitor Plus⁩"),
  ).toBeInTheDocument();
  const closeButtonIcon1 = screen.getByLabelText("Close");
  await user.click(closeButtonIcon1.parentElement as HTMLElement);
  expect(
    screen.queryByText("Turn on automatic data removal with ⁨Monitor Plus⁩"),
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
    name: "Automatic data removal: Off",
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

it("shows chart tooltip on the action needed tab, non-US user", async () => {
  const user = userEvent.setup();
  const ComposedDashboard = composeStory(DashboardNonUsNoBreaches, Meta);
  render(<ComposedDashboard />);

  const chartCaption = screen.getByText(
    "This chart shows how many times your info is actively exposed.",
  );
  expect(chartCaption).toBeInTheDocument();
  const chartTooltip = within(chartCaption).getByRole("button", {
    name: "Open",
  });
  expect(chartTooltip).toBeInTheDocument();
  await user.click(chartTooltip);

  expect(
    screen.getByRole("dialog", {
      name: "About your number of active exposures",
    }),
  ).toBeInTheDocument();

  const dialogContentPart = screen.getByText(
    "This chart includes the total number of times we found each type of data exposed across all data breaches for up to ⁨5⁩ email addresses that you are currently monitoring.",
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
    name: "Open",
  });
  expect(chartTooltip).toBeInTheDocument();
  await user.click(chartTooltip);

  expect(
    screen.getByRole("dialog", {
      name: "About your number of fixed exposures",
    }),
  ).toBeInTheDocument();

  const dialogContentPart = screen.getByText(
    "This chart includes the total number of data breaches that have been fixed for all email addresses you’re currently monitoring. Once exposures are marked as fixed, they’ll be added to the total here.",
  );
  expect(dialogContentPart).toBeInTheDocument();
});

it("shows chart tooltip on the action needed tab, US user", async () => {
  const user = userEvent.setup();
  const ComposedDashboard = composeStory(
    DashboardUsNoPremiumNoScanNoBreaches,
    Meta,
  );
  render(<ComposedDashboard />);

  const chartCaption = screen.getByText(
    "This chart shows how many times your info is actively exposed.",
  );
  expect(chartCaption).toBeInTheDocument();
  const chartTooltip = within(chartCaption).getByRole("button", {
    name: "Open",
  });
  expect(chartTooltip).toBeInTheDocument();
  await user.click(chartTooltip);

  expect(
    screen.getByRole("dialog", {
      name: "About your number of active exposures",
    }),
  ).toBeInTheDocument();

  const dialogContentPart = screen.getByText(
    "This chart includes the total number of times we found each type of data exposed across all data broker profiles and all data breaches for up to ⁨5⁩ email addresses that you are currently monitoring.",
  );
  expect(dialogContentPart).toBeInTheDocument();
});

it("shows chart tooltip on the fixed tab, US user", async () => {
  const user = userEvent.setup();
  const ComposedDashboard = composeStory(
    DashboardUsNoPremiumNoScanNoBreaches,
    Meta,
  );
  render(<ComposedDashboard />);

  const fixedTab = screen.getByText("Fixed");
  await user.click(fixedTab);

  const chartCaption = screen.getByText(
    "This chart shows the total exposures that are fixed (⁨0⁩ out of ⁨0⁩)",
  );
  expect(chartCaption).toBeInTheDocument();
  const chartTooltip = within(chartCaption).getByRole("button", {
    name: "Open",
  });
  expect(chartTooltip).toBeInTheDocument();
  await user.click(chartTooltip);

  expect(
    screen.getByRole("dialog", {
      name: "About your number of fixed exposures",
    }),
  ).toBeInTheDocument();

  const dialogContentPart = screen.getByText(
    "This chart includes the total number of exposures that have been fixed across all data broker profiles and data breaches.It does not include any exposures that are in progress of being auto-removed. Once they are fully removed, they’ll be added to the total here.",
  );
  expect(dialogContentPart).toBeInTheDocument();
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
    name: "Automatic data removal: Off",
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
    name: "Automatic data removal: Off",
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
    name: "Automatic data removal: Off",
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

it("shows the correct dashboard banner CTA and sends telemetry for non-US users, no breaches", async () => {
  const ComposedDashboard = composeStory(DashboardNonUsNoBreaches, Meta);
  const mockedRecord = useTelemetry();
  const user = userEvent.setup();
  // jsdom will complain about not being able to navigate to a different page
  // after clicking the link; suppress that error, as it's not relevant to the
  // test:
  jest.spyOn(console, "error").mockImplementationOnce(() => undefined);
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
    "Let’s protect your data",
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
  jest.spyOn(console, "error").mockImplementationOnce(() => undefined);
  render(<ComposedDashboard />);

  const dashboardTopBanner = screen.getByRole("region", {
    name: "Dashboard summary",
  });
  const dashboardTopBannerCta = getByRole(dashboardTopBanner, "link", {
    name: "Let’s fix it",
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

it("shows the correct dashboard banner CTA and sends telemetry for non-US users, resolved breaches", async () => {
  const ComposedDashboard = composeStory(DashboardNonUsResolvedBreaches, Meta);
  const mockedRecord = useTelemetry();
  const user = userEvent.setup();
  // jsdom will complain about not being able to navigate to a different page
  // after clicking the link; suppress that error, as it's not relevant to the
  // test:
  jest.spyOn(console, "error").mockImplementationOnce(() => undefined);
  render(<ComposedDashboard />);

  const dashboardTopBanner = screen.getByRole("region", {
    name: "Dashboard summary",
  });
  const dashboardTopBannerCta = queryByRole(dashboardTopBanner, "button", {
    name: "See what’s fixed",
  });
  expect(dashboardTopBannerCta).toBeInTheDocument();
  await user.click(dashboardTopBannerCta);
  expect(mockedRecord).toHaveBeenCalledWith(
    "ctaButton",
    "click",
    expect.objectContaining({
      button_id: "non_eligible_premium_resolved_breaches",
    }),
  );
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

it("shows the correct dashboard banner CTA and sends telemetry for US users, without Premium, no scan, no breaches", async () => {
  const ComposedDashboard = composeStory(
    DashboardUsNoPremiumNoScanNoBreaches,
    Meta,
  );
  const mockedRecord = useTelemetry();
  const user = userEvent.setup();
  // jsdom will complain about not being able to navigate to a different page
  // after clicking the link; suppress that error, as it's not relevant to the
  // test:
  jest.spyOn(console, "error").mockImplementationOnce(() => undefined);
  render(<ComposedDashboard />);

  const dashboardTopBanner = screen.getByRole("region", {
    name: "Dashboard summary",
  });
  const dashboardTopBannerCta = getByRole(dashboardTopBanner, "link", {
    name: "Get first scan free",
  });
  expect(dashboardTopBannerCta).toBeInTheDocument();
  await user.click(dashboardTopBannerCta);
  expect(mockedRecord).toHaveBeenCalledWith(
    "ctaButton",
    "click",
    expect.objectContaining({
      button_id: "us_non_premium_no_scan",
    }),
  );
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

it("shows the correct dashboard banner CTA for US users, without Premium, no scan, unresolved breaches", async () => {
  const ComposedDashboard = composeStory(
    DashboardUsNoPremiumNoScanUnresolvedBreaches,
    Meta,
  );
  const mockedRecord = useTelemetry();
  const user = userEvent.setup();
  // jsdom will complain about not being able to navigate to a different page
  // after clicking the link; suppress that error, as it's not relevant to the
  // test:
  jest.spyOn(console, "error").mockImplementationOnce(() => undefined);
  render(<ComposedDashboard />);

  const dashboardTopBanner = screen.getByRole("region", {
    name: "Dashboard summary",
  });
  const dashboardTopBannerCta = getByRole(dashboardTopBanner, "link", {
    name: "Get first scan free",
  });
  expect(dashboardTopBannerCta).toBeInTheDocument();
  await user.click(dashboardTopBannerCta);
  expect(mockedRecord).toHaveBeenCalledWith(
    "ctaButton",
    "click",
    expect.objectContaining({
      button_id: "us_non_premium_no_scan_unresolved_breaches",
    }),
  );
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

it("shows the correct dashboard banner CTA and sends telemetry for US users, without Premium, no scan, resolved breaches", async () => {
  const ComposedDashboard = composeStory(
    DashboardUsNoPremiumNoScanResolvedBreaches,
    Meta,
  );
  const mockedRecord = useTelemetry();
  const user = userEvent.setup();
  // jsdom will complain about not being able to navigate to a different page
  // after clicking the link; suppress that error, as it's not relevant to the
  // test:
  jest.spyOn(console, "error").mockImplementationOnce(() => undefined);
  render(<ComposedDashboard />);

  const dashboardTopBanner = screen.getByRole("region", {
    name: "Dashboard summary",
  });
  const dashboardTopBannerCta = getByRole(dashboardTopBanner, "link", {
    name: "Get first scan free",
  });
  expect(dashboardTopBannerCta).toBeInTheDocument();
  await user.click(dashboardTopBannerCta);
  expect(mockedRecord).toHaveBeenCalledWith(
    "ctaButton",
    "click",
    expect.objectContaining({
      button_id: "us_non_premium_no_scan",
    }),
  );
});

it("shows and skips a dialog that informs US users, without Premium, when we hit the broker scan limit", async () => {
  const user = userEvent.setup();
  const ComposedDashboard = composeStory(
    DashboardUsNoPremiumNoScanNoBreachesScanLimitReached,
    Meta,
  );
  render(<ComposedDashboard />);

  const dashboardTopBanner = screen.getByRole("region", {
    name: "Dashboard summary",
  });
  const dashboardTopBannerCta = getByRole(dashboardTopBanner, "button", {
    name: "Get first scan free",
  });
  await user.click(dashboardTopBannerCta);
  expect(
    screen.getByRole("dialog", {
      name: "⁨Monitor⁩ is currently at capacity",
    }),
  ).toBeInTheDocument();
  const closeButton = screen.getByRole("button", {
    name: "Skip for now",
  });
  await user.click(closeButton);
  expect(
    screen.queryByRole("dialog", {
      name: "⁨Monitor⁩ is currently at capacity",
    }),
  ).not.toBeInTheDocument();
});

it("shows and closes a dialog that informs US users, without Premium, when we hit the broker scan limit", async () => {
  const user = userEvent.setup();
  const ComposedDashboard = composeStory(
    DashboardUsNoPremiumNoScanNoBreachesScanLimitReached,
    Meta,
  );
  render(<ComposedDashboard />);

  const dashboardTopBanner = screen.getByRole("region", {
    name: "Dashboard summary",
  });
  const dashboardTopBannerCta = getByRole(dashboardTopBanner, "button", {
    name: "Get first scan free",
  });
  await user.click(dashboardTopBannerCta);
  expect(
    screen.getByRole("dialog", {
      name: "⁨Monitor⁩ is currently at capacity",
    }),
  ).toBeInTheDocument();
  const closeButtonIcon1 = screen.getByLabelText("Close");
  await user.click(closeButtonIcon1.parentElement as HTMLElement);
  expect(
    screen.queryByRole("dialog", {
      name: "⁨Monitor⁩ is currently at capacity",
    }),
  ).not.toBeInTheDocument();
});

it("shows a dialog with a link to the waitlist to US users, without Premium, when we hit the broker scan limit", async () => {
  const user = userEvent.setup();
  const ComposedDashboard = composeStory(
    DashboardUsNoPremiumNoScanNoBreachesScanLimitReached,
    Meta,
  );
  render(<ComposedDashboard />);

  const dashboardTopBanner = screen.getByRole("region", {
    name: "Dashboard summary",
  });
  const dashboardTopBannerCta = getByRole(dashboardTopBanner, "button", {
    name: "Get first scan free",
  });
  await user.click(dashboardTopBannerCta);
  expect(
    screen.getByRole("dialog", {
      name: "⁨Monitor⁩ is currently at capacity",
    }),
  ).toBeInTheDocument();
  const waitlistLink = screen.getByRole("link", {
    name: "Join the waitlist",
  });
  expect(waitlistLink).toHaveAttribute(
    "href",
    "https://www.mozilla.org/products/monitor/waitlist-scan/",
  );
});

it("shows a dialog that informs US users, without Premium, when we hit the broker scan limit when clicking the exporsures zero state link", async () => {
  const user = userEvent.setup();
  const ComposedDashboard = composeStory(
    DashboardUsNoPremiumNoScanNoBreachesScanLimitReached,
    Meta,
  );
  render(<ComposedDashboard />);

  const dashboardTopBannerCta = screen.getByRole("button", {
    name: "start your free scan",
  });
  await user.click(dashboardTopBannerCta);
  expect(
    screen.getByRole("dialog", {
      name: "⁨Monitor⁩ is currently at capacity",
    }),
  ).toBeInTheDocument();
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

it("shows the correct dashboard banner CTA and sends telemetry for US users, without Premium, empty scan, unresolved breaches", async () => {
  const ComposedDashboard = composeStory(
    DashboardUsNoPremiumEmptyScanUnresolvedBreaches,
    Meta,
  );
  const mockedRecord = useTelemetry();
  const user = userEvent.setup();
  // jsdom will complain about not being able to navigate to a different page
  // after clicking the link; suppress that error, as it's not relevant to the
  // test:
  jest.spyOn(console, "error").mockImplementationOnce(() => undefined);
  render(<ComposedDashboard />);

  const dashboardTopBanner = screen.getByRole("region", {
    name: "Dashboard summary",
  });
  const dashboardTopBannerCta = getByRole(dashboardTopBanner, "link", {
    name: "Let’s keep going",
  });
  expect(dashboardTopBannerCta).toBeInTheDocument();
  await user.click(dashboardTopBannerCta);
  expect(mockedRecord).toHaveBeenCalledWith(
    "ctaButton",
    "click",
    expect.objectContaining({
      button_id: "us_non_premium_yes_scan_unresolved_breaches",
    }),
  );
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

it("shows the correct dashboard banner CTA and sends telemetry for US users, without Premium, unresolved scan, no breaches", async () => {
  const ComposedDashboard = composeStory(
    DashboardUsNoPremiumUnresolvedScanNoBreaches,
    Meta,
  );
  const mockedRecord = useTelemetry();
  const user = userEvent.setup();
  // jsdom will complain about not being able to navigate to a different page
  // after clicking the link; suppress that error, as it's not relevant to the
  // test:
  jest.spyOn(console, "error").mockImplementationOnce(() => undefined);
  render(<ComposedDashboard />);

  const dashboardTopBanner = screen.getByRole("region", {
    name: "Dashboard summary",
  });
  const dashboardTopBannerCta = getByRole(dashboardTopBanner, "link", {
    name: "Let’s fix it",
  });
  expect(dashboardTopBannerCta).toBeInTheDocument();
  await user.click(dashboardTopBannerCta);
  expect(mockedRecord).toHaveBeenCalledWith(
    "ctaButton",
    "click",
    expect.objectContaining({
      button_id: "us_non_premium_yes_scan_unresolved_brokers",
    }),
  );
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

it("shows the correct dashboard banner CTA and sends telemetry for US users, without Premium, Unresolved Scan, Unresolved breaches", async () => {
  const ComposedDashboard = composeStory(
    DashboardUsNoPremiumUnresolvedScanUnresolvedBreaches,
    Meta,
  );
  const mockedRecord = useTelemetry();
  const user = userEvent.setup();
  // jsdom will complain about not being able to navigate to a different page
  // after clicking the link; suppress that error, as it's not relevant to the
  // test:
  jest.spyOn(console, "error").mockImplementationOnce(() => undefined);
  render(<ComposedDashboard />);

  const dashboardTopBanner = screen.getByRole("region", {
    name: "Dashboard summary",
  });
  const dashboardTopBannerCta = getByRole(dashboardTopBanner, "link", {
    name: "Let’s keep going",
  });
  expect(dashboardTopBannerCta).toBeInTheDocument();
  await user.click(dashboardTopBannerCta);
  expect(mockedRecord).toHaveBeenCalledWith(
    "ctaButton",
    "click",
    expect.objectContaining({
      button_id: "us_non_premium_unresolved_breaches_unresolved_brokers",
    }),
  );
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

it("shows the correct dashboard banner CTA and sends telemetry for US users, without Premium, unresolved scan, resolved breaches", async () => {
  const ComposedDashboard = composeStory(
    DashboardUsNoPremiumUnresolvedScanResolvedBreaches,
    Meta,
  );
  const mockedRecord = useTelemetry();
  const user = userEvent.setup();
  // jsdom will complain about not being able to navigate to a different page
  // after clicking the link; suppress that error, as it's not relevant to the
  // test:
  jest.spyOn(console, "error").mockImplementationOnce(() => undefined);
  render(<ComposedDashboard />);

  const dashboardTopBanner = screen.getByRole("region", {
    name: "Dashboard summary",
  });
  const dashboardTopBannerCta = getByRole(dashboardTopBanner, "link", {
    name: "Let’s fix it",
  });
  expect(dashboardTopBannerCta).toBeInTheDocument();
  await user.click(dashboardTopBannerCta);
  expect(mockedRecord).toHaveBeenCalledWith(
    "ctaButton",
    "click",
    expect.objectContaining({
      button_id: "us_non_premium_yes_scan_unresolved_brokers",
    }),
  );
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

it("shows the correct dashboard banner CTA and sends telemetry for US users, without Premium, resolved scan, no breaches", async () => {
  const ComposedDashboard = composeStory(
    DashboardUsNoPremiumResolvedScanNoBreaches,
    Meta,
  );
  const mockedRecord = useTelemetry();
  const user = userEvent.setup();
  // jsdom will complain about not being able to navigate to a different page
  // after clicking the link; suppress that error, as it's not relevant to the
  // test:
  jest.spyOn(console, "error").mockImplementationOnce(() => undefined);
  render(<ComposedDashboard />);

  const dashboardTopBanner = screen.getByRole("region", {
    name: "Dashboard summary",
  });
  const dashboardTopBannerCta = queryByRole(dashboardTopBanner, "button", {
    name: "Get continuous protection",
  });
  expect(dashboardTopBannerCta).toBeInTheDocument();
  await user.click(dashboardTopBannerCta);
  expect(mockedRecord).toHaveBeenCalledWith(
    "upgradeIntent",
    "click",
    expect.objectContaining({
      button_id: "nav_upsell",
    }),
  );
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

it("shows the correct dashboard banner CTA and sends telemetry for US users, without Premium, resolved scan, unresolved breaches", async () => {
  const ComposedDashboard = composeStory(
    DashboardUsNoPremiumResolvedScanUnresolvedBreaches,
    Meta,
  );
  const mockedRecord = useTelemetry();
  const user = userEvent.setup();
  // jsdom will complain about not being able to navigate to a different page
  // after clicking the link; suppress that error, as it's not relevant to the
  // test:
  jest.spyOn(console, "error").mockImplementationOnce(() => undefined);
  render(<ComposedDashboard />);

  const dashboardTopBanner = screen.getByRole("region", {
    name: "Dashboard summary",
  });
  const dashboardTopBannerCta = getByRole(dashboardTopBanner, "link", {
    name: "Let’s keep going",
  });
  expect(dashboardTopBannerCta).toBeInTheDocument();
  await user.click(dashboardTopBannerCta);
  expect(mockedRecord).toHaveBeenCalledWith(
    "ctaButton",
    "click",
    expect.objectContaining({
      button_id: "us_non_premium_yes_scan_unresolved_breaches",
    }),
  );
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

it("shows the correct dashboard banner CTA and sends telemetry for US users, without Premium, resolved scan, resolved breaches", async () => {
  const ComposedDashboard = composeStory(
    DashboardUsNoPremiumResolvedScanResolvedBreaches,
    Meta,
  );
  const mockedRecord = useTelemetry();
  const user = userEvent.setup();
  // jsdom will complain about not being able to navigate to a different page
  // after clicking the link; suppress that error, as it's not relevant to the
  // test:
  jest.spyOn(console, "error").mockImplementationOnce(() => undefined);
  render(<ComposedDashboard />);

  const dashboardTopBanner = screen.getByRole("region", {
    name: "Dashboard summary",
  });
  const dashboardTopBannerCta = queryByRole(dashboardTopBanner, "button", {
    name: "Get continuous protection",
  });
  expect(dashboardTopBannerCta).toBeInTheDocument();
  await user.click(dashboardTopBannerCta);
  expect(mockedRecord).toHaveBeenCalledWith(
    "upgradeIntent",
    "click",
    expect.objectContaining({
      button_id: "nav_upsell",
    }),
  );
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

it("shows the correct dashboard banner CTA and sends telemetry for US user, with Premium, empty scan, no breaches", async () => {
  const ComposedDashboard = composeStory(
    DashboardUsPremiumEmptyScanNoBreaches,
    Meta,
  );
  const mockedRecord = useTelemetry();
  const user = userEvent.setup();
  // jsdom will complain about not being able to navigate to a different page
  // after clicking the link; suppress that error, as it's not relevant to the
  // test:
  jest.spyOn(console, "error").mockImplementationOnce(() => undefined);
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
      button_id: "us_premium_yes_scan_no_exposures",
    }),
  );
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

it("shows the correct dashboard banner CTA and sends telemetry for US user, with Premium, empty scan, unresolved breaches", async () => {
  const ComposedDashboard = composeStory(
    DashboardUsPremiumEmptyScanUnresolvedBreaches,
    Meta,
  );
  const mockedRecord = useTelemetry();
  const user = userEvent.setup();
  // jsdom will complain about not being able to navigate to a different page
  // after clicking the link; suppress that error, as it's not relevant to the
  // test:
  jest.spyOn(console, "error").mockImplementationOnce(() => undefined);
  render(<ComposedDashboard />);

  const dashboardTopBanner = screen.getByRole("region", {
    name: "Dashboard summary",
  });
  const dashboardTopBannerCta = getByRole(dashboardTopBanner, "link", {
    name: "Let’s keep going",
  });
  expect(dashboardTopBannerCta).toBeInTheDocument();
  await user.click(dashboardTopBannerCta);
  expect(mockedRecord).toHaveBeenCalledWith(
    "ctaButton",
    "click",
    expect.objectContaining({
      button_id: "us_premium_unresolved_breaches",
    }),
  );
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

it("shows the correct dashboard banner CTA and sends telemetry for US user, with Premium, empty scan, resolved breaches", async () => {
  const ComposedDashboard = composeStory(
    DashboardUsPremiumEmptyScanResolvedBreaches,
    Meta,
  );
  const mockedRecord = useTelemetry();
  const user = userEvent.setup();
  // jsdom will complain about not being able to navigate to a different page
  // after clicking the link; suppress that error, as it's not relevant to the
  // test:
  jest.spyOn(console, "error").mockImplementationOnce(() => undefined);
  render(<ComposedDashboard />);

  const dashboardTopBanner = screen.getByRole("region", {
    name: "Dashboard summary",
  });
  const dashboardTopBannerCta = queryByRole(dashboardTopBanner, "button", {
    name: "See what’s fixed",
  });
  expect(dashboardTopBannerCta).toBeInTheDocument();
  await user.click(dashboardTopBannerCta);
  expect(mockedRecord).toHaveBeenCalledWith(
    "ctaButton",
    "click",
    expect.objectContaining({
      button_id: "us_premium_yes_scan_all_resolved",
    }),
  );
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
    "Your data is protected",
  );
  expect(dashboardTopBannerTitle).toBeInTheDocument();
});

it("tells the user that they don't need to do anything now if they have Premium and have no breaches, even if there are still new scan results (for which opt-out requests will be sent later)", () => {
  const ComposedDashboard = composeStory(
    DashboardUsPremiumUnresolvedScanNoBreaches,
    Meta,
  );

  render(<ComposedDashboard />);

  const dashboardTopBanner = screen.getByRole("region", {
    name: "Dashboard summary",
  });
  const dashboardTopBannerCta = getByRole(dashboardTopBanner, "button", {
    name: "See what’s fixed",
  });
  expect(dashboardTopBannerCta).toBeInTheDocument();
});

it("sends telemetry when a US user, with Premium, an unresolved scan, and no breaches clicks the top banner CTA", async () => {
  const ComposedDashboard = composeStory(
    DashboardUsPremiumUnresolvedScanNoBreaches,
    Meta,
  );
  const mockedRecord = useTelemetry();
  const user = userEvent.setup();
  // jsdom will complain about not being able to navigate to a different page
  // after clicking the link; suppress that error, as it's not relevant to the
  // test:
  jest.spyOn(console, "error").mockImplementationOnce(() => undefined);
  render(<ComposedDashboard />);

  const dashboardTopBanner = screen.getByRole("region", {
    name: "Dashboard summary",
  });
  const dashboardTopBannerCta = getByRole(dashboardTopBanner, "button", {
    name: "See what’s fixed",
  });
  await user.click(dashboardTopBannerCta);
  expect(mockedRecord).toHaveBeenCalledWith(
    "ctaButton",
    "click",
    expect.objectContaining({
      button_id: "us_premium_yes_scan_all_resolved",
    }),
  );
});

// Check dashboard banner content for story DashboardUsPremiumUnresolvedScanUnresolvedBreaches
it("shows the correct dashboard banner title for US user, with Premium, UnresolvedScan, Unresolved breaches", () => {
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
    "Let’s keep protecting your data",
  );
  expect(dashboardTopBannerTitle).toBeInTheDocument();
});

it("shows the correct dashboard banner CTA for US user, with Premium, UnresolvedScan, Unresolved breaches", async () => {
  const ComposedDashboard = composeStory(
    DashboardUsPremiumUnresolvedScanUnresolvedBreaches,
    Meta,
  );
  const mockedRecord = useTelemetry();
  const user = userEvent.setup();
  // jsdom will complain about not being able to navigate to a different page
  // after clicking the link; suppress that error, as it's not relevant to the
  // test:
  jest.spyOn(console, "error").mockImplementationOnce(() => undefined);
  render(<ComposedDashboard />);

  const dashboardTopBanner = screen.getByRole("region", {
    name: "Dashboard summary",
  });
  const dashboardTopBannerCta = getByRole(dashboardTopBanner, "link", {
    name: "Let’s keep going",
  });
  expect(dashboardTopBannerCta).toBeInTheDocument();
  await user.click(dashboardTopBannerCta);
  expect(mockedRecord).toHaveBeenCalledWith(
    "ctaButton",
    "click",
    expect.objectContaining({
      button_id: "us_premium_unresolved_breaches",
    }),
  );
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
    "Your data is protected",
  );
  expect(dashboardTopBannerTitle).toBeInTheDocument();
});

it("tells the user that they don't need to do anything now if they have Premium and have resolved all breaches, even if there are still new scan results (for which opt-out requests will be sent later)", () => {
  const ComposedDashboard = composeStory(
    DashboardUsPremiumUnresolvedScanResolvedBreaches,
    Meta,
  );

  render(<ComposedDashboard />);

  const dashboardTopBanner = screen.getByRole("region", {
    name: "Dashboard summary",
  });
  const dashboardTopBannerCta = getByRole(dashboardTopBanner, "button", {
    name: "See what’s fixed",
  });
  expect(dashboardTopBannerCta).toBeInTheDocument();
});

it("sends telemetry when a US user, with Premium, an unresolved scan, and resolved breaches clicks the top banner CTA", async () => {
  const ComposedDashboard = composeStory(
    DashboardUsPremiumUnresolvedScanResolvedBreaches,
    Meta,
  );
  const mockedRecord = useTelemetry();
  const user = userEvent.setup();
  // jsdom will complain about not being able to navigate to a different page
  // after clicking the link; suppress that error, as it's not relevant to the
  // test:
  jest.spyOn(console, "error").mockImplementationOnce(() => undefined);
  render(<ComposedDashboard />);

  const dashboardTopBanner = screen.getByRole("region", {
    name: "Dashboard summary",
  });
  const dashboardTopBannerCta = getByRole(dashboardTopBanner, "button", {
    name: "See what’s fixed",
  });
  await user.click(dashboardTopBannerCta);
  expect(mockedRecord).toHaveBeenCalledWith(
    "ctaButton",
    "click",
    expect.objectContaining({
      button_id: "us_premium_yes_scan_all_resolved",
    }),
  );
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

it("shows the correct dashboard banner CTA for US user, with Premium, resolved scan, no breaches", async () => {
  const ComposedDashboard = composeStory(
    DashboardUsPremiumResolvedScanNoBreaches,
    Meta,
  );
  const mockedRecord = useTelemetry();
  const user = userEvent.setup();
  // jsdom will complain about not being able to navigate to a different page
  // after clicking the link; suppress that error, as it's not relevant to the
  // test:
  jest.spyOn(console, "error").mockImplementationOnce(() => undefined);
  render(<ComposedDashboard />);

  const dashboardTopBanner = screen.getByRole("region", {
    name: "Dashboard summary",
  });
  const dashboardTopBannerCta = queryByRole(dashboardTopBanner, "button", {
    name: "See what’s fixed",
  });
  expect(dashboardTopBannerCta).toBeInTheDocument();
  await user.click(dashboardTopBannerCta);
  expect(mockedRecord).toHaveBeenCalledWith(
    "ctaButton",
    "click",
    expect.objectContaining({
      button_id: "us_premium_yes_scan_all_resolved",
    }),
  );
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

it("shows the correct dashboard banner CTA and sends telemetry for US user, with Premium, resolved scan, unresolved breaches", async () => {
  const ComposedDashboard = composeStory(
    DashboardUsPremiumResolvedScanUnresolvedBreaches,
    Meta,
  );
  const mockedRecord = useTelemetry();
  const user = userEvent.setup();
  // jsdom will complain about not being able to navigate to a different page
  // after clicking the link; suppress that error, as it's not relevant to the
  // test:
  jest.spyOn(console, "error").mockImplementationOnce(() => undefined);
  render(<ComposedDashboard />);

  const dashboardTopBanner = screen.getByRole("region", {
    name: "Dashboard summary",
  });
  const dashboardTopBannerCta = getByRole(dashboardTopBanner, "link", {
    name: "Let’s keep going",
  });
  expect(dashboardTopBannerCta).toBeInTheDocument();
  await user.click(dashboardTopBannerCta);
  expect(mockedRecord).toHaveBeenCalledWith(
    "ctaButton",
    "click",
    expect.objectContaining({
      button_id: "us_premium_unresolved_breaches",
    }),
  );
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

it("shows the correct dashboard banner CTA and sends telemetry for US user, with Premium, resolved scan, resolved breaches", async () => {
  const ComposedDashboard = composeStory(
    DashboardUsPremiumResolvedScanResolvedBreaches,
    Meta,
  );
  const mockedRecord = useTelemetry();
  const user = userEvent.setup();
  // jsdom will complain about not being able to navigate to a different page
  // after clicking the link; suppress that error, as it's not relevant to the
  // test:
  jest.spyOn(console, "error").mockImplementationOnce(() => undefined);
  render(<ComposedDashboard />);

  const dashboardTopBanner = screen.getByRole("region", {
    name: "Dashboard summary",
  });
  const dashboardTopBannerCta = queryByRole(dashboardTopBanner, "button", {
    name: "See what’s fixed",
  });
  expect(dashboardTopBannerCta).toBeInTheDocument();
  await user.click(dashboardTopBannerCta);
  expect(mockedRecord).toHaveBeenCalledWith(
    "ctaButton",
    "click",
    expect.objectContaining({
      button_id: "us_premium_yes_scan_all_resolved",
    }),
  );
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

it("shows the correct dashboard banner CTA and sends telemetry for US user, without Premium, scan in progress, no breaches", async () => {
  const ComposedDashboard = composeStory(
    DashboardUsNoPremiumScanInProgressNoBreaches,
    Meta,
  );
  const mockedRecord = useTelemetry();
  const user = userEvent.setup();
  // jsdom will complain about not being able to navigate to a different page
  // after clicking the link; suppress that error, as it's not relevant to the
  // test:
  jest.spyOn(console, "error").mockImplementationOnce(() => undefined);
  render(<ComposedDashboard />);

  const dashboardTopBanner = screen.getByRole("region", {
    name: "Dashboard summary",
  });
  const dashboardTopBannerCta = getByRole(dashboardTopBanner, "link", {
    name: "Check more email addresses",
  });
  expect(dashboardTopBannerCta).toBeInTheDocument();
  await user.click(dashboardTopBannerCta);
  expect(mockedRecord).toHaveBeenCalledWith(
    "ctaButton",
    "click",
    expect.objectContaining({
      button_id: "us_non_premium_scan_in_progress_no_breaches",
    }),
  );
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

it("shows the correct dashboard banner CTA and sends telemetry for US user, without Premium, scan in progress, unresolved breaches", async () => {
  const ComposedDashboard = composeStory(
    DashboardUsNoPremiumScanInProgressUnresolvedBreaches,
    Meta,
  );
  const mockedRecord = useTelemetry();
  const user = userEvent.setup();
  // jsdom will complain about not being able to navigate to a different page
  // after clicking the link; suppress that error, as it's not relevant to the
  // test:
  jest.spyOn(console, "error").mockImplementationOnce(() => undefined);
  render(<ComposedDashboard />);

  const dashboardTopBanner = screen.getByRole("region", {
    name: "Dashboard summary",
  });
  const dashboardTopBannerCta = getByRole(dashboardTopBanner, "link", {
    name: "See what’s ready now",
  });
  expect(dashboardTopBannerCta).toBeInTheDocument();
  await user.click(dashboardTopBannerCta);
  expect(mockedRecord).toHaveBeenCalledWith(
    "ctaButton",
    "click",
    expect.objectContaining({
      button_id: "us_non_premium_scan_in_progress_unresolved_breaches",
    }),
  );
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

it("shows the correct dashboard banner CTA and sends telemetry for US user, without Premium, scan in progress, resolved breaches", async () => {
  const ComposedDashboard = composeStory(
    DashboardUsNoPremiumScanInProgressResolvedBreaches,
    Meta,
  );
  const mockedRecord = useTelemetry();
  const user = userEvent.setup();
  // jsdom will complain about not being able to navigate to a different page
  // after clicking the link; suppress that error, as it's not relevant to the
  // test:
  jest.spyOn(console, "error").mockImplementationOnce(() => undefined);
  render(<ComposedDashboard />);

  const dashboardTopBanner = screen.getByRole("region", {
    name: "Dashboard summary",
  });
  const dashboardTopBannerCta = getByRole(dashboardTopBanner, "link", {
    name: "Check more email addresses",
  });
  expect(dashboardTopBannerCta).toBeInTheDocument();
  await user.click(dashboardTopBannerCta);
  expect(mockedRecord).toHaveBeenCalledWith(
    "ctaButton",
    "click",
    expect.objectContaining({
      button_id: "us_non_premium_scan_in_progress_resolved_breaches",
    }),
  );
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

it("shows the correct dashboard banner CTA and sends telemetry for US user, with Premium, scan in progress, no breaches", async () => {
  const ComposedDashboard = composeStory(
    DashboardUsPremiumScanInProgressNoBreaches,
    Meta,
  );
  const mockedRecord = useTelemetry();
  const user = userEvent.setup();
  // jsdom will complain about not being able to navigate to a different page
  // after clicking the link; suppress that error, as it's not relevant to the
  // test:
  jest.spyOn(console, "error").mockImplementationOnce(() => undefined);
  render(<ComposedDashboard />);

  const dashboardTopBanner = screen.getByRole("region", {
    name: "Dashboard summary",
  });
  const dashboardTopBannerCta = getByRole(dashboardTopBanner, "link", {
    name: "Check more email addresses",
  });
  expect(dashboardTopBannerCta).toBeInTheDocument();
  await user.click(dashboardTopBannerCta);
  expect(mockedRecord).toHaveBeenCalledWith(
    "ctaButton",
    "click",
    expect.objectContaining({
      button_id: "us_premium_scan_in_progress_no_breaches",
    }),
  );
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

it("shows the correct dashboard banner CTA and sends telemetry for US user, with Premium, scan in progress, unresolved breaches", async () => {
  const ComposedDashboard = composeStory(
    DashboardUsPremiumScanInProgressUnresolvedBreaches,
    Meta,
  );
  const mockedRecord = useTelemetry();
  const user = userEvent.setup();
  // jsdom will complain about not being able to navigate to a different page
  // after clicking the link; suppress that error, as it's not relevant to the
  // test:
  jest.spyOn(console, "error").mockImplementationOnce(() => undefined);
  render(<ComposedDashboard />);

  const dashboardTopBanner = screen.getByRole("region", {
    name: "Dashboard summary",
  });
  const dashboardTopBannerCta = getByRole(dashboardTopBanner, "link", {
    name: "See what’s ready now",
  });
  expect(dashboardTopBannerCta).toBeInTheDocument();
  await user.click(dashboardTopBannerCta);
  expect(mockedRecord).toHaveBeenCalledWith(
    "ctaButton",
    "click",
    expect.objectContaining({
      button_id: "us_premium_scan_in_progress_unresolved_breaches",
    }),
  );
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

it("shows the correct dashboard banner CTA and sends telemetry for US user, with Premium, scan in progress, resolved breaches", async () => {
  const ComposedDashboard = composeStory(
    DashboardUsPremiumScanInProgressResolvedBreaches,
    Meta,
  );
  const mockedRecord = useTelemetry();
  const user = userEvent.setup();
  // jsdom will complain about not being able to navigate to a different page
  // after clicking the link; suppress that error, as it's not relevant to the
  // test:
  jest.spyOn(console, "error").mockImplementationOnce(() => undefined);
  render(<ComposedDashboard />);

  const dashboardTopBanner = screen.getByRole("region", {
    name: "Dashboard summary",
  });
  const dashboardTopBannerCta = getByRole(dashboardTopBanner, "link", {
    name: "Check more email addresses",
  });
  expect(dashboardTopBannerCta).toBeInTheDocument();
  await user.click(dashboardTopBannerCta);
  expect(mockedRecord).toHaveBeenCalledWith(
    "ctaButton",
    "click",
    expect.objectContaining({
      button_id: "us_premium_scan_in_progress_resolved_breaches",
    }),
  );
});

// Check dashboard banner content for story DashboardUsPremiumScanInProgressNoBreaches
it("shows the correct dashboard banner title for US user, with Premium, scan manually resolved, no breaches", () => {
  const ComposedDashboard = composeStory(
    DashboardUsPremiumManuallyResolvedScansNoBreaches,
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

it("shows the correct dashboard banner CTA and sends telemetry for US user, with Premium, scan manually resolved, no breaches", async () => {
  const ComposedDashboard = composeStory(
    DashboardUsPremiumManuallyResolvedScansNoBreaches,
    Meta,
  );
  const mockedRecord = useTelemetry();
  const user = userEvent.setup();
  // jsdom will complain about not being able to navigate to a different page
  // after clicking the link; suppress that error, as it's not relevant to the
  // test:
  jest.spyOn(console, "error").mockImplementationOnce(() => undefined);
  render(<ComposedDashboard />);

  const dashboardTopBanner = screen.getByRole("region", {
    name: "Dashboard summary",
  });
  const dashboardTopBannerCta = getByRole(dashboardTopBanner, "button", {
    name: "See what’s fixed",
  });
  expect(dashboardTopBannerCta).toBeInTheDocument();
  await user.click(dashboardTopBannerCta);
  expect(mockedRecord).toHaveBeenCalledWith(
    "dashboard",
    "view",
    expect.objectContaining({
      broker_count: 4,
    }),
  );
});

it("dashboard calculation for US user, with Premium, scan manually resolved, no breaches", async () => {
  const ComposedDashboard = composeStory(
    DashboardUsPremiumManuallyResolvedScansNoBreaches,
    Meta,
  );
  const user = userEvent.setup();
  // jsdom will complain about not being able to navigate to a different page
  // after clicking the link; suppress that error, as it's not relevant to the
  // test:
  jest.spyOn(console, "error").mockImplementationOnce(() => undefined);
  render(<ComposedDashboard />);

  const tabFixedTrigger = screen.getByRole("tab", {
    name: "Fixed",
  });
  await user.click(tabFixedTrigger);

  const fixedCounter = 32;
  const chartCaption = screen.getByText(
    `This chart shows the total exposures that are fixed (⁨${fixedCounter}⁩ out of ⁨${fixedCounter}⁩)`,
  );
  expect(chartCaption).toBeInTheDocument();
});

it("does not explain what 'in progress' means for users who cannot get Plus", async () => {
  const user = userEvent.setup();
  const ComposedDashboard = composeStory(DashboardNonUsNoBreaches, Meta);
  render(<ComposedDashboard />);

  const statusHeading = screen.getByText("Status");
  const statusExplainerDialogTrigger = getByRole(statusHeading, "button", {
    name: "Open",
  });
  await user.click(statusExplainerDialogTrigger);
  expect(
    screen.queryByText("This is a ⁨Monitor Plus⁩ feature.", { exact: false }),
  ).not.toBeInTheDocument();
});

it("explains what 'in progress' means for Plus users", async () => {
  const user = userEvent.setup();
  const ComposedDashboard = composeStory(
    DashboardUsPremiumEmptyScanNoBreaches,
    Meta,
  );
  render(<ComposedDashboard />);

  const statusHeading = screen.getByText("Status");
  const statusExplainerDialogTrigger = getByRole(statusHeading, "button", {
    name: "Open",
  });
  await user.click(statusExplainerDialogTrigger);
  expect(
    screen.getByText("This is a ⁨Monitor Plus⁩ feature.", { exact: false }),
  ).toBeInTheDocument();
});

it("does not show the 'exposure type' column for users who cannot scan for exposures other than data breaches", () => {
  const ComposedDashboard = composeStory(
    DashboardNonUsUnresolvedBreaches,
    Meta,
  );
  render(<ComposedDashboard />);

  // List items apparently don't have get their accessible name  from the
  // content by default, so we can't use `getByRole("listitem")`. See
  // https://stackoverflow.com/a/63080940:
  const exposureTypeColumnHeader = screen.queryByText("Exposure type", {
    selector: "li",
    exact: false,
  });
  // Likewise, `term`s and `definitions don't get their accessible name from the
  // content by default either, so we can't use `getByRole("term")`. See
  // https://github.com/testing-library/dom-testing-library/issues/1083#issuecomment-1003096525
  const exposureTypeCardLabels = screen.queryAllByText("Exposure type", {
    selector: "dt",
    exact: false,
  });
  expect(exposureTypeColumnHeader).not.toBeInTheDocument();
  expect(exposureTypeCardLabels).toHaveLength(0);
});

it("shows the 'exposure type' column for users who can scan for exposures other than data breaches", () => {
  const ComposedDashboard = composeStory(
    DashboardUsNoPremiumUnresolvedScanUnresolvedBreaches,
    Meta,
  );
  render(<ComposedDashboard />);

  // List items apparently don't have get their accessible name  from the
  // content by default, so we can't use `getByRole("listitem")`. See
  // https://stackoverflow.com/a/63080940:
  const exposureTypeColumnHeader = screen.getByText("Exposure type", {
    selector: "li",
    exact: false,
  });
  // Likewise, `term`s and `definitions don't get their accessible name from the
  // content by default either, so we can't use `getByRole("term")`. See
  // https://github.com/testing-library/dom-testing-library/issues/1083#issuecomment-1003096525
  const exposureTypeCardLabels = screen.getAllByText("Exposure type", {
    selector: "dt",
    exact: false,
  });
  expect(exposureTypeColumnHeader).toBeInTheDocument();
  expect(exposureTypeCardLabels.length).toBeGreaterThan(0);
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
    `InvalidUserState: {"relevantGuidedStep":{"href":"/user/dashboard/fix/data-broker-profiles/start-free-scan","id":"Scan","eligible":true,"completed":false},"hasExposures":true,"hasUnresolvedBreaches":false,"hasUnresolvedBrokers":false,"isEligibleForFreeScan":true,"isEligibleForPremium":false,"isPremiumUser":true,"scanInProgress":false}`,
  );
  expect(warnLogSpy).toHaveBeenCalledWith(
    "No matching condition for dashboard state found.",
  );
  warnLogSpy.mockReset();
});

it("expands one card at a time", async () => {
  const user = userEvent.setup();
  const ComposedDashboard = composeStory(
    DashboardUsNoPremiumUnresolvedScanUnresolvedBreaches,
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

it("allows Plus-eligible users to filter by exposure type", async () => {
  const user = userEvent.setup();
  const ComposedDashboard = composeStory(
    DashboardUsNoPremiumUnresolvedScanUnresolvedBreaches,
    Meta,
  );
  render(<ComposedDashboard />);

  const filterMenuButton = screen.getByRole("button", {
    name: "Select filters",
  });
  await user.click(filterMenuButton);

  const filterDialog = screen.getByRole("dialog");
  const exposureTypeRadioGroup = getByRole(filterDialog, "radiogroup", {
    name: "Exposure type",
  });

  expect(exposureTypeRadioGroup).toBeInTheDocument();
});

it("allows Plus users to filter by info for sale", async () => {
  const user = userEvent.setup();
  const ComposedDashboard = composeStory(
    DashboardUsNoPremiumUnresolvedScanUnresolvedBreaches,
    Meta,
  );
  render(<ComposedDashboard />);

  expect(
    screen.queryAllByText("Data breach", {
      selector: "dd",
    }).length,
  ).toBeGreaterThan(0);
  expect(
    screen.queryAllByText("Info for sale", {
      selector: "dd",
    }).length,
  ).toBeGreaterThan(0);

  const filterMenuButton = screen.getByRole("button", {
    name: "Select filters",
  });
  await user.click(filterMenuButton);

  const filterDialog = screen.getByRole("dialog");
  const exposureTypeInput = getByLabelText(filterDialog, "Your info for sale");
  await user.click(exposureTypeInput);

  const showResultsButton = getByRole(filterDialog, "button", {
    name: "Show results",
  });
  await user.click(showResultsButton);

  expect(
    screen.queryAllByText("Data breach", {
      selector: "dd",
    }).length,
  ).toBe(0);
  expect(
    screen.queryAllByText("Info for sale", {
      selector: "dd",
    }).length,
  ).toBeGreaterThan(0);
});

it("allows Plus users to filter by data breach", async () => {
  const user = userEvent.setup();
  const ComposedDashboard = composeStory(
    DashboardUsNoPremiumUnresolvedScanUnresolvedBreaches,
    Meta,
  );
  render(<ComposedDashboard />);

  expect(
    screen.queryAllByText("Data breach", {
      selector: "dd",
    }).length,
  ).toBeGreaterThan(0);
  expect(
    screen.queryAllByText("Info for sale", {
      selector: "dd",
    }).length,
  ).toBeGreaterThan(0);

  const filterMenuButton = screen.getByRole("button", {
    name: "Select filters",
  });
  await user.click(filterMenuButton);

  const filterDialog = screen.getByRole("dialog");
  const exposureTypeInput = getByLabelText(filterDialog, "Data breach");
  await user.click(exposureTypeInput);

  const showResultsButton = getByRole(filterDialog, "button", {
    name: "Show results",
  });
  await user.click(showResultsButton);

  expect(
    screen.queryAllByText("Data breach", {
      selector: "dd",
    }).length,
  ).toBeGreaterThan(0);
  expect(
    screen.queryAllByText("Info for sale", {
      selector: "dd",
    }).length,
  ).toBe(0);
});

it("allows users to filter for results in the last 7 days", async () => {
  const user = userEvent.setup();
  const ComposedDashboard = composeStory(
    DashboardUsPremiumUnresolvedScanUnresolvedBreaches,
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
  const ComposedDashboard = composeStory(
    DashboardUsPremiumUnresolvedScanUnresolvedBreaches,
    Meta,
  );
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
  const ComposedDashboard = composeStory(
    DashboardUsPremiumUnresolvedScanUnresolvedBreaches,
    Meta,
  );
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
    name: "these details about you",
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

it("send telemetry when users click on exposure chart free scan", async () => {
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

  const ctaButton = screen.queryAllByRole("link", {
    name: "Start a free scan",
  });
  await user.click(ctaButton[0]);
  expect(mockedRecord).toHaveBeenCalledWith(
    "link",
    "click",
    expect.objectContaining({
      link_id: "exposures_chart_free_scan",
    }),
  );
});
