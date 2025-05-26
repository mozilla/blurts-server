/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { it, expect } from "@jest/globals";
import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { composeStory } from "@storybook/react";
import Meta, { AppPickerDefault } from "./AppPicker.stories";
import { axe } from "jest-axe";
jest.mock("../../../hooks/useTelemetry");

it("passes the axe accessibility test suite", async () => {
  const ComposedAppPicker = composeStory(AppPickerDefault, Meta);
  const { container } = render(<ComposedAppPicker />);
  expect(await axe(container)).toHaveNoViolations();
}, 10_000);

it("opens and closes the app picker", async () => {
  const user = userEvent.setup();
  const ComposedDashboard = composeStory(AppPickerDefault, Meta);
  const { container } = render(<ComposedDashboard />);
  expect(
    screen.queryByRole("menu", { name: "⁨Mozilla⁩ apps and services" }),
  ).not.toBeInTheDocument();

  const appPickerTrigger = screen.getByRole("button", {
    name: "⁨Mozilla⁩ apps and services",
  });

  await user.click(appPickerTrigger);
  expect(
    screen.getByRole("menu", { name: "⁨Mozilla⁩ apps and services" }),
  ).toBeInTheDocument();

  await user.click(container);
  expect(
    screen.queryByRole("menu", { name: "⁨Mozilla⁩ apps and services" }),
  ).not.toBeInTheDocument();
});
