/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { it, expect } from "@jest/globals";
import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { composeStory } from "@storybook/react";
import Meta, { AppPickerDefault } from "./AppPicker.stories";
import { axe } from "jest-axe";
import { gaEvent } from "../../../functions/client/gaEvent";

jest.mock("../../../hooks/useTelemetry");

jest.mock("../../../functions/client/gaEvent", () => ({
  gaEvent: jest.fn(),
}));

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

it("fires a GA event when an app link is clicked", async () => {
  const user = userEvent.setup();
  const ComposedAppPicker = composeStory(AppPickerDefault, Meta);
  render(<ComposedAppPicker />);

  const trigger = screen.getByRole("button", {
    name: "⁨Mozilla⁩ apps and services",
  });
  await user.click(trigger);

  const vpnLink = screen.getByRole("menuitem", { name: /vpn/i });
  await user.click(vpnLink);

  expect(gaEvent).toHaveBeenCalledWith({
    category: "bento",
    action: "bento-app-link-click",
    label: "vpn",
  });
});

it("fires a GA event when the 'By Mozilla' link is clicked", async () => {
  const user = userEvent.setup();
  const ComposedAppPicker = composeStory(AppPickerDefault, Meta);
  render(<ComposedAppPicker />);

  const trigger = screen.getByRole("button", {
    name: "⁨Mozilla⁩ apps and services",
  });
  await user.click(trigger);

  const mozillaLink = screen.getByRole("menuitem", {
    name: "Made by ⁨Mozilla⁩",
  });
  await user.click(mozillaLink);

  expect(gaEvent).toHaveBeenCalledWith({
    category: "bento",
    action: "bento-app-link-click",
    label: "Mozilla",
  });
});

it("activates a link with Enter or Space via keyboard navigation", async () => {
  const user = userEvent.setup();
  const ComposedAppPicker = composeStory(AppPickerDefault, Meta);
  render(<ComposedAppPicker />);

  const trigger = screen.getByRole("button", {
    name: "⁨Mozilla⁩ apps and services",
  });
  await user.click(trigger);

  // Navigate to the VPN item using the keyboard
  await user.keyboard("{ArrowDown}");

  const vpnLink = screen.getByRole("menuitem", { name: /vpn/i });
  expect(vpnLink).toHaveFocus();

  // press Enter
  await user.keyboard("{Enter}");
  expect(gaEvent).toHaveBeenCalledWith({
    category: "bento",
    action: "bento-app-link-click",
    label: "vpn",
  });

  await user.click(trigger);

  // Navigate to VPN item again
  await user.keyboard("{ArrowDown}");

  // press Space
  await user.keyboard(" ");
  expect(gaEvent).toHaveBeenCalledWith({
    category: "bento",
    action: "bento-app-link-click",
    label: "vpn",
  });
});
