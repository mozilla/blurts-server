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

const mockedAnnouncements: UserAnnouncementWithDetails[] = [
  createRandomAnnouncement(),
  createRandomAnnouncement(),
  createRandomAnnouncement(),
];

export const AnnouncementDialogDefault: Story = {
  args: {
    announcements: mockedAnnouncements,
  },
};
