/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import type { Meta, StoryObj } from "@storybook/react";

import { OnerepScanResultDataBrokerRow, OnerepScanRow } from "knex/types/tables";
import { Session } from "next-auth";
import { EnvironmentConstants } from "../../../../../../functions/server/getEnvironmentConstants";
import { FeatureFlagName } from "../../../../../../../db/tables/featureFlags";
import { ExperimentData } from "../../../../../../../telemetry/generated/nimbus/experiments";
import { LatestOnerepScanData } from "../../../../../../../db/tables/onerep_scans";
import { SubscriberBreach } from "../../../../../../../utils/subscriberBreaches";
import { DataBrokerRemovalTime } from "../../../../../../functions/server/getDataBrokerRemovalTimeEstimates";
import { createRandomBreach, createRandomRemovalTimeEstimate, createRandomScanResult, createUserWithPremiumSubscription } from "../../../../../../../apiMocks/mockData";
import { DashboardShell } from "./DashboardShell";
import { getL10n } from "../../../../../../functions/l10n/storybookAndJest";

//#region Story helpers
export type TabWrapperProps = {
  session: Session;
  envConstants: EnvironmentConstants;
  enabledFeatureFlags: FeatureFlagName[];
  experimentData: ExperimentData["Features"];
  scanData: LatestOnerepScanData;
  userBreaches: SubscriberBreach[];
  countryCode: string;
  removalTimeEstimates: DataBrokerRemovalTime[];
};

const TabWrapper = (props: TabWrapperProps) => {
  return (
    <DashboardShell
      l10n={getL10n()}
      enabledFeatureFlags={props.enabledFeatureFlags}
      countryCode={props.countryCode}
      envConstants={props.envConstants}
      experimentData={props.experimentData}
      removalTimeEstimates={props.removalTimeEstimates}
      scanData={props.scanData}
      session={props.session}
      userBreaches={props.userBreaches}
      pathParams={{ tab: ["action-needed"] }}
      searchParams={{}}
    />
  );
};

const meta: Meta<typeof TabWrapper> = {
  title: "Pages/Logged in/Dashboard beta",
  component: TabWrapper,
  parameters: {
    nextjs: {
      navigation: {
        pathname: "/user/dashboard-beta/action-needed",
      },
    },
  },
  args: {
    session: {
      user: createUserWithPremiumSubscription(),
    } as Session,
    enabledFeatureFlags: ["SidebarNavigationRedesign"],
    countryCode: "nl",
    envConstants: {
      fxaSettingsUrl: "https://example.com",
      subscriptionInfo: {
        monthly: {
          billingAmount: 42,
          url: "https://example.com",
        },
        yearly: {
          billingAmount: 1337,
          url: "https://example.com",
        },
      },
    },
  },
};
export default meta;
type Story = StoryObj<typeof TabWrapper>;
//#endregion Story helpers

//#region Mock data
const mockedResolvedBreach: SubscriberBreach = createRandomBreach({
  dataClasses: [
    "email-addresses",
    "ip-addresses",
    "phone-numbers",
    "passwords",
    "pins",
    "social-security-numbers",
    "partial-credit-card-data",
    "security-questions-and-answers",
  ],
  addedDate: new Date("2023-06-18T14:48:00.000Z"),
  dataClassesEffected: [
    { "email-addresses": ["email1@gmail.com", "email2@gmail.com"] },
    { "ip-addresses": 1 },
    { "phone-numbers": 1 },
    { passwords: 1 },
  ],
  isResolved: true,
});

const mockedUnresolvedBreach: SubscriberBreach = createRandomBreach({
  dataClasses: ["email-addresses", "ip-addresses", "phone-numbers"],
  addedDate: new Date("2023-06-18T14:48:00.000Z"),
  dataClassesEffected: [
    { "email-addresses": ["email1@gmail.com", "email2@gmail.com"] },
    { "ip-addresses": 1 },
  ],
  isResolved: false,
});

const mockedScan: OnerepScanRow = {
  created_at: new Date(Date.UTC(1998, 2, 31)),
  updated_at: new Date(Date.UTC(1998, 2, 31)),
  id: 0,
  onerep_profile_id: 0,
  onerep_scan_id: 0,
  onerep_scan_reason: "initial",
  onerep_scan_status: "finished",
};

const mockedInProgressScanResults: OnerepScanResultDataBrokerRow[] = [
  createRandomScanResult({ status: "removed", manually_resolved: false }),
  createRandomScanResult({
    status: "waiting_for_verification",
    manually_resolved: false,
  }),
  createRandomScanResult({
    status: "optout_in_progress",
    manually_resolved: false,
  }),
];

const mockedAllResolvedScanResults: OnerepScanResultDataBrokerRow[] = [
  createRandomScanResult({ status: "removed", manually_resolved: false }),
  createRandomScanResult({ status: "removed", manually_resolved: false }),
];

const mockedUnresolvedScanResults: OnerepScanResultDataBrokerRow[] = [
  ...mockedInProgressScanResults,
  createRandomScanResult({ status: "new", manually_resolved: false }),
  createRandomScanResult({ status: "new", manually_resolved: false }),
  createRandomScanResult({ status: "new", manually_resolved: true }),
];

const mockedManuallyResolvedScanResults: OnerepScanResultDataBrokerRow[] = [
  createRandomScanResult({ status: "new", manually_resolved: true }),
  createRandomScanResult({
    status: "waiting_for_verification",
    manually_resolved: true,
  }),
  createRandomScanResult({
    status: "optout_in_progress",
    manually_resolved: true,
  }),
  createRandomScanResult({ status: "removed", manually_resolved: true }),
];
//#endregion Mock data


//#region Stories
export const Empty: Story = {
  args: {
    userBreaches: [],
    scanData: {
      scan: null,
      results: [],
    },
  },
};

export const BreachesAndScans: Story = {
  args: {
    // Only US users can have scans:
    countryCode: "us",
    userBreaches: [mockedResolvedBreach, mockedUnresolvedBreach],
    scanData: {
      scan: mockedScan,
      results: mockedUnresolvedScanResults,
    },
    removalTimeEstimates: mockedUnresolvedScanResults.map(result => createRandomRemovalTimeEstimate(result)),
  },
};
//#endregion Stories
