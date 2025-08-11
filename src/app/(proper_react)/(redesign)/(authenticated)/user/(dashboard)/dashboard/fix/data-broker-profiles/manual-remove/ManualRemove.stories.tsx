/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import type { Meta, StoryObj } from "@storybook/react";
import { OnerepScanRow } from "knex/types/tables";
import { ManualRemoveView } from "./ManualRemoveView";
import {
  createRandomBreach,
  createRandomOnerepScanResult,
  createUserWithPremiumSubscription,
} from "../../../../../../../../../../apiMocks/mockData";
import { Shell } from "../../../../../../../Shell/Shell";
import { getL10n } from "../../../../../../../../../functions/l10n/storybookAndJest";
import { LatestOnerepScanData } from "../../../../../../../../../../db/tables/onerep_scans";
import { hasPremium } from "../../../../../../../../../functions/universal/user";
import { defaultExperimentData } from "../../../../../../../../../../telemetry/generated/nimbus/experiments";

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
    createRandomOnerepScanResult({ status: "new", manually_resolved: false }),
  ),
};
const mockedBreaches = [...Array(5)].map(() => createRandomBreach());

const user = createUserWithPremiumSubscription();

const mockedSession = {
  expires: new Date().toISOString(),
  user: user,
};

const meta: Meta<typeof ManualRemoveView> = {
  title: "Pages/Logged in/Guided resolution/1c. Manually resolve brokers",
  component: ManualRemoveView,
};
export default meta;
type Story = StoryObj<typeof ManualRemoveView>;

export const ManualRemoveViewStory: Story = {
  name: "1c. Manually resolve brokers",
  render: (props) => {
    return (
      <Shell
        l10n={getL10n()}
        session={mockedSession}
        nonce=""
        countryCode="us"
        enabledFeatureFlags={[]}
        experimentData={defaultExperimentData["Features"]}
        announcements={[]}
      >
        <ManualRemoveView
          scanData={mockedScanData}
          breaches={mockedBreaches}
          countryCode="us"
          user={mockedSession.user}
          subscriberEmails={[]}
          isPremiumUser={hasPremium(user)}
          isEligibleForPremium={true}
          enabledFeatureFlags={props.enabledFeatureFlags ?? []}
        />
      </Shell>
    );
  },
};
