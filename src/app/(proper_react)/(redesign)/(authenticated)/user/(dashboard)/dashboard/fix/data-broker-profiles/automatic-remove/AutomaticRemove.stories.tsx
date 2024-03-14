/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import type { Meta, StoryObj } from "@storybook/react";
import { OnerepScanRow } from "knex/types/tables";
import { AutomaticRemoveView } from "./AutomaticRemoveView";
import {
  createRandomBreach,
  createRandomScanResult,
  createUserWithPremiumSubscription,
} from "../../../../../../../../../../apiMocks/mockData";
import { Shell } from "../../../../../../../Shell";
import { getOneL10nSync } from "../../../../../../../../../functions/server/mockL10n";
import { LatestOnerepScanData } from "../../../../../../../../../../db/tables/onerep_scans";

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

const user = createUserWithPremiumSubscription();

const mockedSession = {
  expires: new Date().toISOString(),
  user: user,
};

const meta: Meta<typeof AutomaticRemoveView> = {
  title: "Pages/Logged in/Guided resolution/1d. Automatically resolve brokers",
  component: AutomaticRemoveView,
};
export default meta;
type Story = StoryObj<typeof AutomaticRemoveView>;

export const AutomaticRemoveViewStory: Story = {
  name: "1d. Automatically resolve brokers",
  render: () => {
    return (
      <Shell l10n={getOneL10nSync()} session={mockedSession} nonce="">
        <AutomaticRemoveView
          data={{
            countryCode: "us",
            latestScanData: mockedScanData,
            subscriberBreaches: mockedBreaches,
            user: mockedSession.user,
          }}
          subscriberEmails={[]}
          nextStep={{
            id: "HighRiskSsn",
            href: "/user/dashboard/fix/high-risk-data-breaches/social-security-number",
          }}
          currentSection="data-broker-profiles"
          monthlySubscriptionUrl="https://example.com/subscribe/monthly"
          yearlySubscriptionUrl="https://example.com/subscribe/yearly"
          subscriptionBillingAmount={{
            yearly: 13.37,
            monthly: 42.42,
          }}
        />
      </Shell>
    );
  },
};
