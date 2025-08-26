/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import type { Meta, StoryObj } from "@storybook/react";
import { ManualRemoveView } from "./ManualRemoveView";
import {
  createRandomBreach,
  createRandomMoscaryScanResult,
  createUserWithPremiumSubscription,
} from "../../../../../../../../../../apiMocks/mockData";
import { Shell } from "../../../../../../../Shell/Shell";
import { getL10n } from "../../../../../../../../../functions/l10n/storybookAndJest";
import { hasPremium } from "../../../../../../../../../functions/universal/user";
import { defaultExperimentData } from "../../../../../../../../../../telemetry/generated/nimbus/experiments";
import {
  MoscaryData,
  ScanData,
} from "../../../../../../../../../functions/server/moscary";

const mockedScan: MoscaryData["Scan"] = {
  created_at: "1998-03-31T00:00:00.000Z",
  updated_at: "1998-03-31T00:00:00.000Z",
  id: "11111111-1111-1111-1111-111111111111",
  profile_id: "00000000-0000-0000-0000-000000000000",
  reason: "initial",
  status: "finished",
};

const mockedScanData: ScanData = {
  scan: mockedScan,
  results: [...Array(5)].map(() =>
    createRandomMoscaryScanResult({ status: "new", manually_resolved: false }),
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
