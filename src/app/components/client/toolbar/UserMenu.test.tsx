/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { it, expect } from "@jest/globals";
import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { composeStory } from "@storybook/react";
import { axe } from "jest-axe";
import Meta, { UserMenuDefault } from "./UserMenu.stories";

jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
  usePathname: jest.fn(),
}));

jest.mock("next-auth/react", () => ({
  signOut: jest.fn(),
}));

jest.mock("../../../hooks/useTelemetry");

it("passes the axe accessibility test suite", async () => {
  const ComposedDashboard = composeStory(UserMenuDefault, Meta);
  const { container } = render(<ComposedDashboard />);
  expect(await axe(container)).toHaveNoViolations();
}, 10_000);

it("opens and closes the user menu", async () => {
  const user = userEvent.setup();
  const ComposedDashboard = composeStory(UserMenuDefault, Meta);
  const { container } = render(<ComposedDashboard />);
  expect(screen.queryByText("example@example.com")).not.toBeInTheDocument();

  const menuTrigger = screen.getByRole("button");
  await user.click(menuTrigger);
  expect(screen.queryByText("example@example.com")).toBeInTheDocument();

  await user.click(container);
  expect(screen.queryByText("example@example.com")).not.toBeInTheDocument();
});

it("checks if the user menu items are interactive", async () => {
  const user = userEvent.setup();
  const ComposedDashboard = composeStory(UserMenuDefault, Meta);
  render(<ComposedDashboard />);

  const menuTrigger = screen.getByRole("button");
  await user.click(menuTrigger);

  // We are currently showing four menu items.
  const menuItems = screen.queryAllByRole("menuitem");
  expect(menuItems.length).toBe(4);

  // FxA link
  const fxaItem = screen.getByText("Manage your ⁨Mozilla account⁩");
  expect(fxaItem).toBeInTheDocument();
  const fxaItemWrapper = fxaItem.parentElement;
  const clickFxAItemSpy = jest.spyOn(fxaItem, "click");
  await user.click(fxaItemWrapper as HTMLElement);
  expect(clickFxAItemSpy).toHaveBeenCalled();

  // Settings link
  await user.click(menuTrigger);
  const settingsItem = screen.getByText("Settings");
  expect(settingsItem).toBeInTheDocument();
  const settingsItemWrapper = settingsItem.parentElement;
  const clickSettingsItemSpy = jest.spyOn(settingsItem, "click");
  // Prevent the click from actually executing; otherwise we'll get a warning
  // that JSDOM doesn't know how to mock switching from one page to another:
  clickSettingsItemSpy.mockImplementationOnce(() => undefined);
  await user.click(settingsItemWrapper as HTMLElement);
  expect(clickSettingsItemSpy).toHaveBeenCalled();

  // Help and support link
  await user.click(menuTrigger);
  const helpAndSupportItem = screen.getByText("Help and support");
  expect(helpAndSupportItem).toBeInTheDocument();
  const helpAndSupportItemWrapper = helpAndSupportItem.parentElement;
  const clickHelpAndSupportItemSpy = jest.spyOn(helpAndSupportItem, "click");
  await user.click(helpAndSupportItemWrapper as HTMLElement);
  expect(clickHelpAndSupportItemSpy).toHaveBeenCalled();

  // Sign out button
  await user.click(menuTrigger);
  const signOutItem = screen.getByText("Sign out");
  expect(signOutItem).toBeInTheDocument();
  const signOutItemWrapper = signOutItem.parentElement;
  const signOutItemSpy = jest.spyOn(signOutItem, "click");
  await user.click(signOutItemWrapper as HTMLElement);
  expect(signOutItemSpy).toHaveBeenCalled();
});
