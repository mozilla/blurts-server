/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { it, expect } from "@jest/globals";
import { render } from "@testing-library/react";
import { composeStory } from "@storybook/react";
import { axe } from "jest-axe";
import Meta, {
  DashboardWithScan,
  DashboardWithoutScan,
} from "./Dashboard.stories";
import {
  DataBreach,
  DataBroker,
} from "../../../../../components/client/stories/ExposureCard.stories";

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

it("breach card passes the axe accessiblity test suite", async () => {
  const ComposedExposureCard = composeStory(DataBreach, Meta);
  const { container } = render(<ComposedExposureCard />);
  expect(await axe(container)).toHaveNoViolations();
});

it("broker data card passes the axe accessiblity test suite", async () => {
  const ComposedExposureCard = composeStory(DataBroker, Meta);
  const { container } = render(<ComposedExposureCard />);
  expect(await axe(container)).toHaveNoViolations();
});
