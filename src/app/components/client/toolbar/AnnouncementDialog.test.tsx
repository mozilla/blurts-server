/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { it, expect } from "@jest/globals";
import { render, screen, waitFor } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { composeStory } from "@storybook/react";
import Meta, {
  AnnouncementDialogDefault,
  AnnouncementDialogSeenOrCleared,
  AnnouncementsNoAnnouncements,
} from "./AnnouncementDialog.stories";
import { axe } from "jest-axe";

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
  // suppress fluent-id warning
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

it("seen or cleared announcements should only be in the All tab", async () => {
  // suppress fluent-id warning
  jest.spyOn(console, "warn").mockImplementation(() => {});

  const user = userEvent.setup();
  const ComposedAnnouncementDialog = composeStory(
    AnnouncementDialogSeenOrCleared,
    Meta,
  );
  render(<ComposedAnnouncementDialog />);

  const announcementTrigger = screen.getByRole("button", {
    name: "Open announcements",
  });

  await user.click(announcementTrigger);

  const allTab = screen.getByRole("tab", { name: "All" });

  await user.click(allTab);

  expect(allTab).toHaveAttribute("aria-selected", "true");

  const announcementItems = await screen.findAllByRole("group");
  expect(announcementItems.length).toBeGreaterThan(1);
});

it("mark a new announcement as seen", async () => {
  // suppress fluent-id warning
  jest.spyOn(console, "warn").mockImplementation(() => {});

  // suppress error from trying to hit the /seen endpoint
  jest.spyOn(console, "error").mockImplementation(() => {});

  global.fetch = jest.fn().mockImplementation(() =>
    Promise.resolve({
      ok: true,
      json: () => Promise.resolve({ success: true }),
    }),
  );

  const user = userEvent.setup();
  const ComposedAnnouncementDialog = composeStory(
    AnnouncementDialogSeenOrCleared,
    Meta,
  );

  render(<ComposedAnnouncementDialog />);

  const announcementTrigger = screen.getByRole("button", {
    name: "Open announcements",
  });

  await user.click(announcementTrigger);

  const announcementItems = await screen.findAllByRole("group");

  await user.click(announcementItems[0]);

  await waitFor(() => {
    // The first randomized announcement is the only one that's new
    expect(global.fetch).toHaveBeenCalledWith(
      `/api/v1/user/announcements/test_new/seen`,
      expect.objectContaining({
        method: "PUT",
      }),
    );
  });

  const upgradeNow = screen.getByText("Upgrade now");
  expect(upgradeNow).toBeInTheDocument();

  const newTab = screen.getByRole("tab", { name: "New" });

  await user.click(newTab);
  expect(upgradeNow).not.toBeInTheDocument();
});

it("mark all announcements as cleared", async () => {
  // suppress fluent-id warning
  jest.spyOn(console, "warn").mockImplementation(() => {});

  // suppress error from trying to hit the /cleared endpoint
  jest.spyOn(console, "error").mockImplementation(() => {});

  global.fetch = jest.fn().mockImplementation(() =>
    Promise.resolve({
      ok: true,
      json: () => Promise.resolve({ success: true }),
    }),
  );

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

  const markAllAsReadBtn = screen.getByRole("button", {
    name: "Mark all as read",
  });

  const announcementItemsNewAnnouncements = await screen.findAllByRole("group");
  expect(announcementItemsNewAnnouncements).toHaveLength(3);

  await user.click(markAllAsReadBtn);

  const updatedNewAnnouncements = screen.queryAllByRole("group");
  expect(updatedNewAnnouncements).toHaveLength(0);

  await waitFor(() => {
    expect(global.fetch).toHaveBeenCalledWith(
      `/api/v1/user/announcements/test_one/cleared`,
      expect.objectContaining({
        method: "PUT",
      }),
    );
    expect(global.fetch).toHaveBeenCalledWith(
      `/api/v1/user/announcements/test_two/cleared`,
      expect.objectContaining({
        method: "PUT",
      }),
    );
    expect(global.fetch).toHaveBeenCalledWith(
      `/api/v1/user/announcements/test_three/cleared`,
      expect.objectContaining({
        method: "PUT",
      }),
    );
  });

  // Empty state in the new tab when all announcements are cleared
  const noUpdates = screen.getByText("No updates");
  expect(noUpdates).toBeInTheDocument();

  const allTab = screen.getByRole("tab", { name: "All" });
  await user.click(allTab);

  const announcementItemsAllAnnouncements = await screen.findAllByRole("group");
  expect(announcementItemsAllAnnouncements).toHaveLength(3);
});

it("only moves new announcements to all if cleared", async () => {
  // suppress fluent-id warning
  jest.spyOn(console, "warn").mockImplementation(() => {});

  // suppress error from trying to hit the /cleared endpoint
  jest.spyOn(console, "error").mockImplementation(() => {});

  global.fetch = jest.fn().mockImplementation(() =>
    Promise.resolve({
      ok: true,
      json: () => Promise.resolve({ success: true }),
    }),
  );

  const user = userEvent.setup();
  const ComposedAnnouncementDialog = composeStory(
    AnnouncementDialogSeenOrCleared,
    Meta,
  );

  render(<ComposedAnnouncementDialog />);

  const announcementTrigger = screen.getByRole("button", {
    name: "Open announcements",
  });

  await user.click(announcementTrigger);

  const announcementItemsNewAnnouncements = await screen.findAllByRole("group");
  expect(announcementItemsNewAnnouncements).toHaveLength(1);

  const markAllAsReadBtn = screen.getByRole("button", {
    name: "Mark all as read",
  });

  await user.click(markAllAsReadBtn);

  await waitFor(() => {
    expect(global.fetch).toHaveBeenCalledWith(
      `/api/v1/user/announcements/test_new/cleared`,
      expect.objectContaining({
        method: "PUT",
      }),
    );
  });

  const allTab = screen.getByRole("tab", { name: "All" });
  await user.click(allTab);

  const announcementItemsAllAnnouncements = await screen.findAllByRole("group");
  expect(announcementItemsAllAnnouncements).toHaveLength(3);
});

it("dismisses the popup", async () => {
  // suppress fluent-id warning
  jest.spyOn(console, "warn").mockImplementation(() => {});

  const user = userEvent.setup();
  const ComposedAnnouncementDialog = composeStory(
    AnnouncementDialogSeenOrCleared,
    Meta,
  );

  const { container } = render(<ComposedAnnouncementDialog />);

  const announcementTrigger = screen.getByRole("button", {
    name: "Open announcements",
  });

  await user.click(announcementTrigger);

  const announcementItemsNewAnnouncements = await screen.findAllByRole("group");
  expect(announcementItemsNewAnnouncements).toHaveLength(1);

  const dismissBtn = screen.getByRole("button", {
    name: "Close modal",
  });

  await user.click(dismissBtn);

  const dialog = screen.queryByRole("dialog", {
    name: "List of announcements",
  });
  expect(dialog).not.toBeInTheDocument();

  await user.click(announcementTrigger);

  const dialogAgain = await screen.findByRole("dialog", {
    name: "List of announcements",
  });
  expect(dialogAgain).toBeInTheDocument();

  await user.click(container);

  const dialogDismissed = screen.queryByRole("dialog", {
    name: "List of announcements",
  });
  expect(dialogDismissed).not.toBeInTheDocument();
});

it("shows an empty state if announcements were not loaded", async () => {
  // suppress fluent-id warning
  jest.spyOn(console, "warn").mockImplementation(() => {});

  const user = userEvent.setup();

  const ComposedAnnouncementDialog = composeStory(
    AnnouncementsNoAnnouncements,
    Meta,
  );
  render(<ComposedAnnouncementDialog />);
  const announcementTrigger = screen.getByRole("button", {
    name: "Open announcements",
  });

  await user.click(announcementTrigger);

  // Empty state in the new tab when there are no announcements
  const noUpdates = screen.getByText("No updates");
  expect(noUpdates).toBeInTheDocument();
});
