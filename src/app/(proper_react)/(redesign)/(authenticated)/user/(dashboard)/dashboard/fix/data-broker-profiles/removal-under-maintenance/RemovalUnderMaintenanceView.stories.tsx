/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import type { Meta, StoryObj } from "@storybook/react";
import { OnerepScanRow } from "knex/types/tables";
import {
  createRandomAnnouncement,
  createRandomBreach,
  createRandomScanResult,
  createUserWithPremiumSubscription,
} from "../../../../../../../../../../apiMocks/mockData";
import { Shell } from "../../../../../../../Shell/Shell";
import { getL10n } from "../../../../../../../../../functions/l10n/storybookAndJest";
import { LatestOnerepScanData } from "../../../../../../../../../../db/tables/onerep_scans";
import { RemovalUnderMaintenanceView } from "./RemovalUnderMaintenanceView";
import { defaultExperimentData } from "../../../../../../../../../../telemetry/generated/nimbus/experiments";
import { UserAnnouncementWithDetails } from "../../../../../../../../../../db/tables/user_announcements";

const meta: Meta<typeof RemovalUnderMaintenanceView> = {
  title: "Pages/Logged in/Guided resolution/1d. Removal Under Maintenance",
  component: RemovalUnderMaintenanceView,
};
export default meta;
type Story = StoryObj<typeof RemovalUnderMaintenanceView>;

const user = createUserWithPremiumSubscription();

const mockedSession = {
  expires: new Date().toISOString(),
  user: user,
};
const mockedScan: OnerepScanRow = {
  created_at: new Date(1998, 2, 31),
  updated_at: new Date(1998, 2, 31),
  id: 0,
  onerep_profile_id: 0,
  onerep_scan_id: 0,
  onerep_scan_reason: "initial",
  onerep_scan_status: "finished",
};

const mockedScanData: LatestOnerepScanData = {
  scan: mockedScan,
  results: [...Array(5)].map(() =>
    createRandomScanResult({ status: "new", manually_resolved: false }),
  ),
};
const mockedBreaches = [...Array(5)].map(() => createRandomBreach());

const mockedAnnouncements: UserAnnouncementWithDetails[] = [
  createRandomAnnouncement({ audience: "premium_users" }),
  createRandomAnnouncement({ audience: "premium_users" }),
  createRandomAnnouncement({ audience: "premium_users" }),
];

export const RemovalUnderMaintenanceViewStory: Story = {
  render: () => {
    return (
      <Shell
        l10n={getL10n()}
        session={mockedSession}
        nonce=""
        countryCode="us"
        enabledFeatureFlags={[]}
        experimentData={defaultExperimentData["Features"]}
        announcements={mockedAnnouncements}
      >
        <RemovalUnderMaintenanceView
          data={mockedScanData}
          stepDeterminationData={{
            countryCode: "us",
            latestScanData: { results: [], scan: null },
            subscriberBreaches: mockedBreaches,
            user: mockedSession.user,
          }}
          subscriberEmails={[]}
          enabledFeatureFlags={[]}
        />
      </Shell>
    );
  },
};
