/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { it, expect } from "@jest/globals";
import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { composeStory } from "@storybook/react";
import { axe } from "jest-axe";
import Meta, { UserMenuDefault } from "./UserMenu.stories";
import { signOut } from "next-auth/react";

jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
  usePathname: jest.fn(),
}));

jest.mock("next-auth/react", () => ({
  signOut: jest.fn().mockResolvedValue(undefined),
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
  jest.spyOn(console, "error").mockImplementationOnce(() => undefined);

  const user = userEvent.setup();
  const ComposedDashboard = composeStory(UserMenuDefault, Meta);
  render(<ComposedDashboard />);

  const menuTrigger = screen.getByRole("button");
  await user.click(menuTrigger);

  // We are currently showing four menu items.
  const menuItems = screen.queryAllByRole("menuitem");
  expect(menuItems.length).toBe(4);

  // FxA link
  const fxaItem = screen.getByRole("menuitem", {
    name: /Manage your ⁨Mozilla account⁩/i,
  });
  expect(fxaItem).toBeInTheDocument();
  await user.click(fxaItem);
  expect(fxaItem).toHaveAttribute("href");

  // Settings link
  await user.click(menuTrigger);
  const settingsItem = screen.getByRole("menuitem", { name: /Settings/i });
  expect(settingsItem).toBeInTheDocument();
  await user.click(settingsItem);
  expect(settingsItem).toHaveAttribute("href");

  // Help and support link
  await user.click(menuTrigger);
  const helpAndSupportItem = screen.getByRole("menuitem", {
    name: /Help and support/i,
  });
  expect(helpAndSupportItem).toBeInTheDocument();
  await user.click(helpAndSupportItem);
  expect(helpAndSupportItem).toHaveAttribute("href");

  // Sign out button
  await user.click(menuTrigger);
  const signOutItem = screen.getByRole("menuitem", { name: /Sign out/i });
  expect(signOutItem).toBeInTheDocument();
  await user.click(signOutItem);
  expect(signOut).toHaveBeenCalledWith({ callbackUrl: "/" });
});
