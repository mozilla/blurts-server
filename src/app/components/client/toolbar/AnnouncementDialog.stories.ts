/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import type { Meta, StoryObj } from "@storybook/react";
import { AnnouncementDialog } from "./AnnouncementDialog";
import { UserAnnouncementWithDetails } from "../../../../db/tables/user_announcements";
import { createRandomAnnouncement } from "../../../../apiMocks/mockData";

const meta: Meta<typeof AnnouncementDialog> = {
  title: "Layout/Navigation/Announcement",
  component: AnnouncementDialog,
};

export default meta;
type Story = StoryObj<typeof AnnouncementDialog>;

// All set to status: new
const mockedAnnouncementsAllUsers: UserAnnouncementWithDetails[] = [
  createRandomAnnouncement({ announcement_id: "test_one" }),
  createRandomAnnouncement({ announcement_id: "test_two" }),
  createRandomAnnouncement({ announcement_id: "test_three" }),
];

const mockedAnnouncementsWithSeenOrCleared: UserAnnouncementWithDetails[] = [
  createRandomAnnouncement({ announcement_id: "test_new" }),
  createRandomAnnouncement({ status: "seen" }),
  createRandomAnnouncement({ status: "cleared" }),
];

const noAnnouncements: UserAnnouncementWithDetails[] = [];

export const AnnouncementDialogDefault: Story = {
  args: {
    announcements: mockedAnnouncementsAllUsers,
  },
};

export const AnnouncementDialogSeenOrCleared: Story = {
  args: {
    announcements: mockedAnnouncementsWithSeenOrCleared,
  },
};

export const AnnouncementsNoAnnouncements: Story = {
  args: {
    announcements: noAnnouncements,
  },
};
