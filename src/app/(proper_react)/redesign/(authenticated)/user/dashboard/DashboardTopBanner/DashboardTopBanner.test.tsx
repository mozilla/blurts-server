/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { it, expect } from "@jest/globals";
import { render, screen } from "@testing-library/react";
import { composeStory } from "@storybook/react";
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
  DashboardUsPremiumScanEmptyInProgressNoBreaches,
  DashboardUsPremiumScanEmptyInProgressUnresolvedBreaches,
  DashboardUsPremiumScanUnresolvedInProgressNoBreaches,
  DashboardUsPremiumScanUnresolvedInProgressUnresolvedBreaches,
  DashboardInvalidNonPremiumUserScanUnresolvedInProgressResolvedBreaches,
} from "../Dashboard.stories";

jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
  usePathname: jest.fn(),
}));

function getTopBannerContentCta(ctas: HTMLElement[]) {
  return ctas.filter((element) =>
    element.parentElement?.parentElement?.classList.contains("explainerContent")
  )[0];
}

it("shows the correct dashboard banner CTA in the story NonUsNoBreaches", () => {
  const ComposedDashboard = composeStory(DashboardNonUsNoBreaches, Meta);
  render(<ComposedDashboard />);

  const dashboardTopBannerCta = screen.queryAllByRole("link", {
    name: "Monitor more emails",
  });
  expect(getTopBannerContentCta(dashboardTopBannerCta)).toBeInTheDocument();
});

it("shows the correct dashboard banner CTA in the story NonUsUnresolvedBreaches", () => {
  const ComposedDashboard = composeStory(
    DashboardNonUsUnresolvedBreaches,
    Meta
  );
  render(<ComposedDashboard />);

  const dashboardTopBannerCta = screen.queryAllByRole("link", {
    name: "Let’s fix it",
  });
  expect(getTopBannerContentCta(dashboardTopBannerCta)).toBeInTheDocument();
});

it("shows the correct dashboard banner CTA in the story NonUsResolvedBreaches", () => {
  const ComposedDashboard = composeStory(DashboardNonUsResolvedBreaches, Meta);
  render(<ComposedDashboard />);

  const dashboardTopBannerCta = screen.queryAllByRole("button", {
    name: "See what’s fixed",
  });
  expect(getTopBannerContentCta(dashboardTopBannerCta)).toBeInTheDocument();
});

it("shows the correct dashboard banner CTA in the story UsNoPremiumNoScanNoBreaches", () => {
  const ComposedDashboard = composeStory(
    DashboardUsNoPremiumNoScanNoBreaches,
    Meta
  );
  render(<ComposedDashboard />);

  const dashboardTopBannerCta = screen.queryAllByRole("link", {
    name: "Get first scan free",
  });
  expect(getTopBannerContentCta(dashboardTopBannerCta)).toBeInTheDocument();
});

it("shows the correct dashboard banner CTA in the story UsNoPremiumNoScanUnresolvedBreaches", () => {
  const ComposedDashboard = composeStory(
    DashboardUsNoPremiumNoScanUnresolvedBreaches,
    Meta
  );
  render(<ComposedDashboard />);

  const dashboardTopBannerCta = screen.queryAllByRole("link", {
    name: "Get first scan free",
  });
  expect(getTopBannerContentCta(dashboardTopBannerCta)).toBeInTheDocument();
});

it("shows the correct dashboard banner CTA in the story UsNoPremiumNoScanResolvedBreaches", () => {
  const ComposedDashboard = composeStory(
    DashboardUsNoPremiumNoScanResolvedBreaches,
    Meta
  );
  render(<ComposedDashboard />);

  const dashboardTopBannerCta = screen.queryAllByRole("link", {
    name: "Get first scan free",
  });
  expect(getTopBannerContentCta(dashboardTopBannerCta)).toBeInTheDocument();
});

it("shows the correct dashboard banner CTA in the story UsNoPremiumEmptyScanNoBreaches", () => {
  const ComposedDashboard = composeStory(
    DashboardUsNoPremiumEmptyScanNoBreaches,
    Meta
  );
  render(<ComposedDashboard />);

  const dashboardTopBannerCta = screen.queryAllByRole("link", {
    name: "Get continuous protection",
  });
  expect(getTopBannerContentCta(dashboardTopBannerCta)).toBeInTheDocument();
});

it("shows the correct dashboard banner CTA in the story UsNoPremiumEmptyScanUnresolvedBreaches", () => {
  const ComposedDashboard = composeStory(
    DashboardUsNoPremiumEmptyScanUnresolvedBreaches,
    Meta
  );
  render(<ComposedDashboard />);

  const dashboardTopBannerCta = screen.queryAllByRole("link", {
    name: "Let’s keep going",
  });
  expect(getTopBannerContentCta(dashboardTopBannerCta)).toBeInTheDocument();
});

it("shows the correct dashboard banner CTA in the story UsNoPremiumEmptyScanResolvedBreaches", () => {
  const ComposedDashboard = composeStory(
    DashboardUsNoPremiumEmptyScanResolvedBreaches,
    Meta
  );
  render(<ComposedDashboard />);

  const dashboardTopBannerCta = screen.queryAllByRole("button", {
    name: "Get continuous protection",
  });
  expect(getTopBannerContentCta(dashboardTopBannerCta)).toBeInTheDocument();
});

it("shows the correct dashboard banner CTA in the story UsNoPremiumUnresolvedScanNoBreaches", () => {
  const ComposedDashboard = composeStory(
    DashboardUsNoPremiumUnresolvedScanNoBreaches,
    Meta
  );
  render(<ComposedDashboard />);

  const dashboardTopBannerCta = screen.queryAllByRole("link", {
    name: "Let’s fix it",
  });
  expect(getTopBannerContentCta(dashboardTopBannerCta)).toBeInTheDocument();
});

it("shows the correct dashboard banner CTA in the story UsNoPremiumUnresolvedScanUnresolvedBreaches", () => {
  const ComposedDashboard = composeStory(
    DashboardUsNoPremiumUnresolvedScanUnresolvedBreaches,
    Meta
  );
  render(<ComposedDashboard />);

  const dashboardTopBannerCta = screen.queryAllByRole("link", {
    name: "Let’s keep going",
  });
  expect(getTopBannerContentCta(dashboardTopBannerCta)).toBeInTheDocument();
});

it("shows the correct dashboard banner CTA in the story UsNoPremiumUnresolvedScanResolvedBreaches", () => {
  const ComposedDashboard = composeStory(
    DashboardUsNoPremiumUnresolvedScanResolvedBreaches,
    Meta
  );
  render(<ComposedDashboard />);

  const dashboardTopBannerCta = screen.queryAllByRole("link", {
    name: "Let’s fix it",
  });
  expect(getTopBannerContentCta(dashboardTopBannerCta)).toBeInTheDocument();
});

it("shows the correct dashboard banner CTA in the story UsNoPremiumResolvedScanNoBreaches", () => {
  const ComposedDashboard = composeStory(
    DashboardUsNoPremiumResolvedScanNoBreaches,
    Meta
  );
  render(<ComposedDashboard />);

  const dashboardTopBannerCta = screen.queryAllByRole("button", {
    name: "Get continuous protection",
  });
  expect(getTopBannerContentCta(dashboardTopBannerCta)).toBeInTheDocument();
});

it("shows the correct dashboard banner CTA in the story UsNoPremiumResolvedScanUnresolvedBreaches", () => {
  const ComposedDashboard = composeStory(
    DashboardUsNoPremiumResolvedScanUnresolvedBreaches,
    Meta
  );
  render(<ComposedDashboard />);

  const dashboardTopBannerCta = screen.queryAllByRole("link", {
    name: "Let’s keep going",
  });
  expect(getTopBannerContentCta(dashboardTopBannerCta)).toBeInTheDocument();
});

it("shows the correct dashboard banner CTA in the story UsNoPremiumResolvedScanResolvedBreaches", () => {
  const ComposedDashboard = composeStory(
    DashboardUsNoPremiumResolvedScanResolvedBreaches,
    Meta
  );
  render(<ComposedDashboard />);

  const dashboardTopBannerCta = screen.queryAllByRole("button", {
    name: "Get continuous protection",
  });
  expect(getTopBannerContentCta(dashboardTopBannerCta)).toBeInTheDocument();
});

it("shows the correct dashboard banner CTA in the story UsPremiumEmptyScanNoBreaches", () => {
  const ComposedDashboard = composeStory(
    DashboardUsPremiumEmptyScanNoBreaches,
    Meta
  );
  render(<ComposedDashboard />);

  const dashboardTopBannerCta = screen.queryAllByRole("link", {
    name: "Monitor more emails",
  });
  expect(getTopBannerContentCta(dashboardTopBannerCta)).toBeInTheDocument();
});

it("shows the correct dashboard banner CTA in the story UsPremiumEmptyScanUnresolvedBreaches", () => {
  const ComposedDashboard = composeStory(
    DashboardUsPremiumEmptyScanUnresolvedBreaches,
    Meta
  );
  render(<ComposedDashboard />);

  const dashboardTopBannerCta = screen.queryAllByRole("link", {
    name: "Let’s keep going",
  });
  expect(getTopBannerContentCta(dashboardTopBannerCta)).toBeInTheDocument();
});

it("shows the correct dashboard banner CTA in the story UsPremiumEmptyScanResolvedBreaches", () => {
  const ComposedDashboard = composeStory(
    DashboardUsPremiumEmptyScanResolvedBreaches,
    Meta
  );
  render(<ComposedDashboard />);

  const dashboardTopBannerCta = screen.queryAllByRole("button", {
    name: "See what’s fixed",
  });
  expect(getTopBannerContentCta(dashboardTopBannerCta)).toBeInTheDocument();
});

it("shows the correct dashboard banner CTA in the story UsPremiumUnresolvedScanNoBreaches", () => {
  const ComposedDashboard = composeStory(
    DashboardUsPremiumUnresolvedScanNoBreaches,
    Meta
  );
  render(<ComposedDashboard />);

  const dashboardTopBannerCta = screen.queryAllByRole("link", {
    name: "Let’s keep going",
  });
  expect(getTopBannerContentCta(dashboardTopBannerCta)).toBeInTheDocument();
});

it("shows the correct dashboard banner CTA in the story UsPremiumUnresolvedScanUnresolvedBreaches", () => {
  const ComposedDashboard = composeStory(
    DashboardUsPremiumUnresolvedScanUnresolvedBreaches,
    Meta
  );
  render(<ComposedDashboard />);

  const dashboardTopBannerCta = screen.queryAllByRole("link", {
    name: "Let’s fix it",
  });
  expect(getTopBannerContentCta(dashboardTopBannerCta)).toBeInTheDocument();
});

it("shows the correct dashboard banner CTA in the story UsPremiumUnresolvedScanResolvedBreaches", () => {
  const ComposedDashboard = composeStory(
    DashboardUsPremiumUnresolvedScanResolvedBreaches,
    Meta
  );
  render(<ComposedDashboard />);

  const dashboardTopBannerCta = screen.queryAllByRole("link", {
    name: "Let’s keep going",
  });
  expect(getTopBannerContentCta(dashboardTopBannerCta)).toBeInTheDocument();
});

it("shows the correct dashboard banner CTA in the story UsPremiumResolvedScanNoBreaches", () => {
  const ComposedDashboard = composeStory(
    DashboardUsPremiumResolvedScanNoBreaches,
    Meta
  );
  render(<ComposedDashboard />);

  const dashboardTopBannerCta = screen.queryAllByRole("button", {
    name: "See what’s fixed",
  });
  expect(getTopBannerContentCta(dashboardTopBannerCta)).toBeInTheDocument();
});

it("shows the correct dashboard banner CTA in the story UsPremiumResolvedScanUnresolvedBreaches", () => {
  const ComposedDashboard = composeStory(
    DashboardUsPremiumResolvedScanUnresolvedBreaches,
    Meta
  );
  render(<ComposedDashboard />);

  const dashboardTopBannerCta = screen.queryAllByRole("link", {
    name: "Let’s keep going",
  });
  expect(getTopBannerContentCta(dashboardTopBannerCta)).toBeInTheDocument();
});

it("shows the correct dashboard banner CTA in the story UsPremiumResolvedScanResolvedBreaches", () => {
  const ComposedDashboard = composeStory(
    DashboardUsPremiumResolvedScanResolvedBreaches,
    Meta
  );
  render(<ComposedDashboard />);

  const dashboardTopBannerCta = screen.queryAllByRole("button", {
    name: "See what’s fixed",
  });
  expect(getTopBannerContentCta(dashboardTopBannerCta)).toBeInTheDocument();
});

it("shows the correct dashboard banner CTA in the story UsPremiumScanEmptyInProgressNoBreaches", () => {
  const ComposedDashboard = composeStory(
    DashboardUsPremiumScanEmptyInProgressNoBreaches,
    Meta
  );
  render(<ComposedDashboard />);
});

it("shows the correct dashboard banner CTA in the story UsPremiumScanEmptyInProgressUnresolvedBreaches", () => {
  const ComposedDashboard = composeStory(
    DashboardUsPremiumScanEmptyInProgressUnresolvedBreaches,
    Meta
  );
  render(<ComposedDashboard />);
});

it("shows the correct dashboard banner CTA in the story UsPremiumScanUnresolvedInProgressNoBreaches", () => {
  const ComposedDashboard = composeStory(
    DashboardUsPremiumScanUnresolvedInProgressNoBreaches,
    Meta
  );
  render(<ComposedDashboard />);

  const dashboardTopBannerCta = screen.queryAllByRole("link", {
    name: "See what’s ready now",
  });
  expect(getTopBannerContentCta(dashboardTopBannerCta)).toBeInTheDocument();
});

it("shows the correct dashboard banner CTA in the story UsPremiumScanUnresolvedInProgressUnresolvedBreaches", () => {
  const ComposedDashboard = composeStory(
    DashboardUsPremiumScanUnresolvedInProgressUnresolvedBreaches,
    Meta
  );
  render(<ComposedDashboard />);

  const dashboardTopBannerCta = screen.queryAllByRole("link", {
    name: "See what’s ready now",
  });
  expect(getTopBannerContentCta(dashboardTopBannerCta)).toBeInTheDocument();
});

it("shows the correct dashboard banner CTA in the story InvalidNonPremiumUserScanUnresolvedInProgressResolvedBreaches", () => {
  const ComposedDashboard = composeStory(
    DashboardInvalidNonPremiumUserScanUnresolvedInProgressResolvedBreaches,
    Meta
  );

  const warnLogSpy = jest.spyOn(global.console, "warn").mockImplementation();
  render(<ComposedDashboard />);

  expect(warnLogSpy).toHaveBeenCalledWith(
    "No matching condition for dashboard state found."
  );
  warnLogSpy.mockReset();
});

it("shows the correct dashboard banner CTA in the story DashboardInvalidNonPremiumUserScanUnresolvedInProgressResolvedBreaches", () => {
  const ComposedDashboard = composeStory(
    DashboardInvalidNonPremiumUserScanUnresolvedInProgressResolvedBreaches,
    Meta
  );

  const warnLogSpy = jest.spyOn(global.console, "warn").mockImplementation();
  render(<ComposedDashboard />);

  expect(warnLogSpy).toHaveBeenCalledWith(
    "No matching condition for dashboard state found."
  );
  warnLogSpy.mockReset();
});
