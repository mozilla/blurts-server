/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { it, expect } from "@jest/globals";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { composeStory } from "@storybook/react";
import { axe } from "jest-axe";
import Meta, {
  DashboardWithScan,
  DashboardWithoutScan,
} from "./Dashboard.stories";

jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
  usePathname: jest.fn(),
}));

it("passes the axe accessibility test suite", async () => {
  const ComposedDashboard = composeStory(DashboardWithScan, Meta);
  const { container } = render(<ComposedDashboard />);
  expect(await axe(container)).toHaveNoViolations();
});

it("passes the axe accessibility test suite", async () => {
  const ComposedDashboard = composeStory(DashboardWithoutScan, Meta);
  const { container } = render(<ComposedDashboard />);
  expect(await axe(container)).toHaveNoViolations();
});

it("switches between tab panels", async () => {
  const user = userEvent.setup();
  const ComposedDashboard = composeStory(DashboardWithoutScan, Meta);
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
