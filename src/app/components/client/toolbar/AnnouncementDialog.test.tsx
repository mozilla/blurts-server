/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { it, expect } from "@jest/globals";
import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { composeStory } from "@storybook/react";
import Meta from "./AnnouncementDialog.stories";
import { axe } from "jest-axe";
import { AnnouncementDialogDefault } from "./AnnouncementDialog.stories";

jest.mock("../../../hooks/useTelemetry");

it("passes the axe accessibility test suite", async () => {
  const ComposedAnnouncementDialog = composeStory(
    AnnouncementDialogDefault,
    Meta,
  );
  const { container } = render(<ComposedAnnouncementDialog />);
  expect(await axe(container)).toHaveNoViolations();
});

it("closes and opens the announcement button", async () => {
  global.fetch = jest.fn().mockImplementation(() =>
    Promise.resolve({
      success: true,
      json: jest.fn(() => Promise.resolve([])),
    }),
  );

  // jsdom will complain about not being able to find the right fluent-id which we can ignore
  jest.spyOn(console, "warn").mockImplementation(() => {});

  const user = userEvent.setup();
  const ComposedAnnouncementDialog = composeStory(
    AnnouncementDialogDefault,
    Meta,
  );
  const { container } = render(<ComposedAnnouncementDialog />);

  const announcementTrigger = screen.getByRole("button", {
    name: "Open announcements",
  });

  await user.click(announcementTrigger);

  expect(announcementTrigger).toHaveAttribute("aria-expanded", "true");
  await user.click(container);

  expect(
    screen.queryByRole("dialog", { name: "List of announcements" }),
  ).not.toBeInTheDocument();
});

it("switches between new and all tab", async () => {
  global.fetch = jest.fn().mockImplementation(() =>
    Promise.resolve({
      success: true,
      json: jest.fn(() => Promise.resolve([])),
    }),
  );

  // jsdom will complain about not being able to find the right fluent-id which we can ignore
  jest.spyOn(console, "warn").mockImplementation(() => {});

  const user = userEvent.setup();
  const ComposedAnnouncementDialog = composeStory(
    AnnouncementDialogDefault,
    Meta,
  );
  render(<ComposedAnnouncementDialog />);

  const announcementTrigger = screen.getByRole("button", {
    name: "Open announcements",
  });

  await user.click(announcementTrigger);

  // const announcementTabList = screen.getByRole("tablist");
  const newTab = screen.getByRole("tab", { name: "New" });
  const allTab = screen.getByRole("tab", { name: "All" });

  // Default to new tab
  expect(newTab).toHaveAttribute("aria-selected", "true");
  expect(allTab).toHaveAttribute("aria-selected", "false");

  await user.click(allTab);

  // Switch to all tab
  expect(newTab).toHaveAttribute("aria-selected", "false");
  expect(allTab).toHaveAttribute("aria-selected", "true");
});
