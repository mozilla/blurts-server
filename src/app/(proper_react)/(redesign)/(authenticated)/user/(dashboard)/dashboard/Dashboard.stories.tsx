/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import type { Meta, StoryObj } from "@storybook/react";

import { faker } from "@faker-js/faker";
import { View as DashboardEl, TabType } from "./View";
import { Shell } from "../../../../Shell/Shell";
import { getL10n } from "../../../../../../functions/l10n/storybookAndJest";
import {
  createRandomBreach,
  createUserWithPremiumSubscription,
  createRandomAnnouncement,
  createRandomMoscaryScanResult,
} from "../../../../../../../apiMocks/mockData";
import { SubscriberBreach } from "../../../../../../../utils/subscriberBreaches";
import { CountryCodeProvider } from "../../../../../../../contextProviders/country-code";
import { SessionProvider } from "../../../../../../../contextProviders/session";
import {
  ExperimentData,
  defaultExperimentData,
} from "../../../../../../../telemetry/generated/nimbus/experiments";
import { FeatureFlagName } from "../../../../../../../db/tables/featureFlags";
import { UserAnnouncementWithDetails } from "../../../../../../../db/tables/user_announcements";
import {
  MoscaryData,
  ScanData,
} from "../../../../../../functions/server/moscary";

export const brokerOptions = {
  "no-scan": "No scan started",
  empty: "No scan results",
  unresolved: "With unresolved scan results",
  resolved: "All scan results resolved",
  "scan-in-progress": "Scan is in progress",
  "manually-resolved": "Manually resolved",
};
export const breachOptions = {
  empty: "No data breaches",
  unresolved: "With unresolved data breaches",
  resolved: "All data breaches resolved",
};
export type DashboardWrapperProps = (
  | {
      countryCode: "us";
      brokers: keyof typeof brokerOptions;
      premium: boolean;
    }
  | {
      countryCode: "nl";
    }
) & {
  brokers: keyof typeof brokerOptions;
  breaches: keyof typeof breachOptions;
  elapsedTimeInDaysSinceInitialScan?: number;
  totalNumberOfPerformedScans?: number;
  activeTab?: TabType;
  enabledFeatureFlags?: FeatureFlagName[];
  experimentData?: ExperimentData["Features"];
  hasFirstMonitoringScan?: boolean;
  signInCount?: number;
};
const DashboardWrapper = (props: DashboardWrapperProps) => {
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

  let breaches: SubscriberBreach[] = [];
  const scanData: ScanData = { scan: null, results: [] };

  if (props.breaches === "resolved") {
    breaches = [mockedResolvedBreach];
  }
  if (props.breaches === "unresolved") {
    breaches = [mockedResolvedBreach, mockedUnresolvedBreach];
  }

  const mockedScan: MoscaryData["Scan"] = {
    created_at: "1998-03-31T00:00:00.000Z",
    updated_at: "1998-03-31T00:00:00.000Z",
    id: "11111111-1111-1111-1111-111111111111",
    profile_id: "00000000-0000-0000-0000-000000000000",
    reason: "initial",
    status: "finished",
  };

  const mockedScanInProgress: MoscaryData["Scan"] = {
    ...mockedScan,
    status: "in_progress",
  };

  const mockedInProgressScanResults: MoscaryData["ScanResult"][] = [
    createRandomMoscaryScanResult({
      status: "removed",
      manually_resolved: false,
    }),
    createRandomMoscaryScanResult({
      status: "waiting_for_verification",
      manually_resolved: false,
    }),
    createRandomMoscaryScanResult({
      status: "optout_in_progress",
      manually_resolved: false,
    }),
  ];

  const mockedAllResolvedScanResults: MoscaryData["ScanResult"][] = [
    createRandomMoscaryScanResult({
      status: "removed",
      manually_resolved: false,
    }),
    createRandomMoscaryScanResult({
      status: "removed",
      manually_resolved: false,
    }),
  ];

  const mockedUnresolvedScanResults: MoscaryData["ScanResult"][] = [
    ...mockedInProgressScanResults,
    createRandomMoscaryScanResult({ status: "new", manually_resolved: false }),
    createRandomMoscaryScanResult({ status: "new", manually_resolved: false }),
    createRandomMoscaryScanResult({ status: "new", manually_resolved: true }),
  ];

  const mockedManuallyResolvedScanResults: MoscaryData["ScanResult"][] = [
    createRandomMoscaryScanResult({ status: "new", manually_resolved: true }),
    createRandomMoscaryScanResult({
      status: "waiting_for_verification",
      manually_resolved: true,
    }),
    createRandomMoscaryScanResult({
      status: "optout_in_progress",
      manually_resolved: true,
    }),
    createRandomMoscaryScanResult({
      status: "removed",
      manually_resolved: true,
    }),
  ];

  const mockedAnnouncements: UserAnnouncementWithDetails[] = [
    createRandomAnnouncement(),
    createRandomAnnouncement(),
    createRandomAnnouncement(),
  ];

  let scanCount = 0;

  if (props.countryCode === "us") {
    if (props.brokers && props.brokers !== "no-scan") {
      const scanInProgress = props.brokers === "scan-in-progress";
      scanData.scan = scanInProgress ? mockedScanInProgress : mockedScan;

      if (scanInProgress) {
        scanCount = 1;
      }
      if (props.brokers === "resolved") {
        scanData.results = mockedAllResolvedScanResults;
      }
      if (props.brokers === "unresolved") {
        scanData.results = mockedUnresolvedScanResults;
      }

      if (props.brokers === "manually-resolved") {
        scanData.results = mockedManuallyResolvedScanResults;
      }
    }
  }

  const user = createUserWithPremiumSubscription();
  if ((props.countryCode !== "us" || !props.premium) && user.fxa) {
    user.fxa.subscriptions = [];
  }

  const mockedSession = {
    expires: new Date().toISOString(),
    user: user,
  };

  const mockedRemovalTimeEstimates = scanData.results
    .map((scan) => ({
      d: scan.data_broker,
      t: faker.number.float({ min: 0, max: 200 }),
    }))
    .filter(() => Math.random() < 0.1);

  return (
    <SessionProvider session={mockedSession}>
      <CountryCodeProvider countryCode={props.countryCode}>
        <Shell
          l10n={getL10n()}
          session={mockedSession}
          nonce=""
          countryCode={props.countryCode}
          enabledFeatureFlags={props.enabledFeatureFlags ?? []}
          experimentData={
            props.experimentData ?? {
              ...defaultExperimentData["Features"],
              "last-scan-date": {
                enabled: true,
              },
            }
          }
          announcements={mockedAnnouncements}
        >
          <DashboardEl
            user={user}
            userBreaches={breaches}
            userScanData={scanData}
            isEligibleForPremium={props.countryCode === "us"}
            isEligibleForFreeScan={props.countryCode === "us" && !scanData.scan}
            monthlySubscriptionUrl=""
            yearlySubscriptionUrl=""
            fxaSettingsUrl=""
            scanCount={scanCount}
            totalNumberOfPerformedScans={props.totalNumberOfPerformedScans}
            subscriptionBillingAmount={{
              yearly: 13.37,
              monthly: 42.42,
            }}
            isNewUser={true}
            elapsedTimeInDaysSinceInitialScan={
              props.elapsedTimeInDaysSinceInitialScan
            }
            enabledFeatureFlags={props.enabledFeatureFlags ?? []}
            experimentData={
              props.experimentData ?? {
                ...defaultExperimentData["Features"],
                "last-scan-date": {
                  enabled: true,
                },
              }
            }
            activeTab={props.activeTab ?? "action-needed"}
            hasFirstMonitoringScan={props.hasFirstMonitoringScan ?? false}
            signInCount={props.signInCount ?? null}
            removalTimeEstimates={mockedRemovalTimeEstimates}
            userAnnouncements={mockedAnnouncements}
          />
        </Shell>
      </CountryCodeProvider>
    </SessionProvider>
  );
};

const meta: Meta<typeof DashboardWrapper> = {
  title: "Pages/Logged in/Dashboard",
  component: DashboardWrapper,
  argTypes: {
    brokers: {
      options: Object.keys(brokerOptions),
      description: "Scan results",
      control: {
        type: "radio",
        labels: brokerOptions,
      },
    },
    breaches: {
      options: Object.keys(breachOptions),
      control: {
        type: "radio",
        labels: breachOptions,
      },
    },
    elapsedTimeInDaysSinceInitialScan: {
      name: "Days since initial scan",
      control: {
        type: "number",
      },
    },
    hasFirstMonitoringScan: {
      name: "Has first monitoring scan",
      control: {
        type: "boolean",
      },
    },
    signInCount: {
      name: "Sign-in count",
      control: {
        type: "number",
      },
    },
  },
};
export default meta;
type Story = StoryObj<typeof DashboardWrapper>;

export const DashboardInvalidPremiumUserNoScanResolvedBreaches: Story = {
  name: "Invalid state: US user, with Premium, with no scan, with resolved breaches",
  args: {
    countryCode: "us",
    premium: true,
    breaches: "resolved",
    brokers: "no-scan",
  },
};
