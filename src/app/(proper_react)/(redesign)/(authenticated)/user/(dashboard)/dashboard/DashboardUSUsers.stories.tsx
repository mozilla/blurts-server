/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import type { Meta, StoryObj } from "@storybook/nextjs";

import {
  OnerepScanResultDataBrokerRow,
  OnerepScanRow,
} from "knex/types/tables";
import { faker } from "@faker-js/faker";
import { View as DashboardEl } from "./View";
import { Shell } from "../../../../Shell/Shell";
import { getL10n } from "../../../../../../functions/l10n/storybookAndJest";
import {
  createRandomScanResult,
  createRandomBreach,
  createUserWithPremiumSubscription,
  createRandomAnnouncement,
} from "../../../../../../../apiMocks/mockData";
import { SubscriberBreach } from "../../../../../../../utils/subscriberBreaches";
import { LatestOnerepScanData } from "../../../../../../../db/tables/onerep_scans";
import { CountryCodeProvider } from "../../../../../../../contextProviders/country-code";
import { SessionProvider } from "../../../../../../../contextProviders/session";
import { defaultExperimentData } from "../../../../../../../telemetry/generated/nimbus/experiments";
import {
  breachOptions,
  brokerOptions,
  DashboardWrapperProps,
} from "./Dashboard.stories";
import { UserAnnouncementWithDetails } from "../../../../../../../db/tables/user_announcements";

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
  const scanData: LatestOnerepScanData = { scan: null, results: [] };

  if (props.breaches === "resolved") {
    breaches = [mockedResolvedBreach];
  }
  if (props.breaches === "unresolved") {
    breaches = [mockedResolvedBreach, mockedUnresolvedBreach];
  }

  const mockedScan: OnerepScanRow = {
    created_at: new Date(Date.UTC(1998, 2, 31)),
    updated_at: new Date(Date.UTC(1998, 2, 31)),
    id: 0,
    onerep_profile_id: 0,
    onerep_scan_id: 0,
    onerep_scan_reason: "initial",
    onerep_scan_status: "finished",
  };

  const mockedScanInProgress: OnerepScanRow = {
    ...mockedScan,
    onerep_scan_status: "in_progress",
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

  const mockedAnnouncements: UserAnnouncementWithDetails[] = [
    createRandomAnnouncement({ audience: "us_only" }),
    createRandomAnnouncement({ audience: "us_only" }),
    createRandomAnnouncement({ audience: "us_only" }),
  ];

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
            fxaSettingsUrl=""
            scanCount={scanCount}
            totalNumberOfPerformedScans={props.totalNumberOfPerformedScans}
            subscriptionBillingAmount={{
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
            countryCode={props.countryCode}
            shutdownState={{
              currentMoment: "ye-olden-days",
              hasPremium: props.countryCode === "us" && props.premium,
              ranScan: scanCount > 0,
            }}
          />
        </Shell>
      </CountryCodeProvider>
    </SessionProvider>
  );
};

const meta: Meta<typeof DashboardWrapper> = {
  title: "Pages/Logged in/Dashboard/US User/No Plus",
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

export const DashboardUsNoPremiumNoScanNoBreaches: Story = {
  name: "US user, without Premium, without scan, with 0 breaches",
  args: {
    countryCode: "us",
    premium: false,
    breaches: "empty",
    brokers: "no-scan",
    totalNumberOfPerformedScans: 0,
  },
};

export const DashboardUsNoPremiumNoScanUnresolvedBreaches: Story = {
  name: "US user, without Premium, without scan, with unresolved breaches",
  args: {
    countryCode: "us",
    premium: false,
    breaches: "unresolved",
    brokers: "no-scan",
  },
};

export const DashboardUsNoPremiumNoScanResolvedBreaches: Story = {
  name: "US user, without Premium, without scan, with all breaches resolved",
  args: {
    countryCode: "us",
    premium: false,
    breaches: "resolved",
    brokers: "no-scan",
    totalNumberOfPerformedScans: undefined,
  },
};

export const DashboardUsNoPremiumNoScanNoBreachesScanLimitReached: Story = {
  name: "US user, without Premium, without scan, with 0 breaches, Scan limit reached",
  args: {
    countryCode: "us",
    premium: false,
    breaches: "empty",
    brokers: "no-scan",
    totalNumberOfPerformedScans: 280000,
  },
};

export const DashboardUsNoPremiumNoScanNoBreachesDisabledScan: Story = {
  name: "US user, without Premium, without scan, with 0 breaches, Disabled Scans",
  args: {
    countryCode: "us",
    premium: false,
    breaches: "empty",
    brokers: "no-scan",
    enabledFeatureFlags: ["DisableOneRepScans"],
  },
};

export const DashboardUsNoPremiumEmptyScanNoBreaches: Story = {
  name: "US user, without Premium, with 0 scan results, with 0 breaches",
  args: {
    countryCode: "us",
    premium: false,
    breaches: "empty",
    brokers: "empty",
  },
};

export const DashboardUsNoPremiumEmptyScanUnresolvedBreaches: Story = {
  name: "US user, without Premium, with 0 scan results, with unresolved breaches",
  args: {
    countryCode: "us",
    premium: false,
    breaches: "unresolved",
    brokers: "empty",
  },
};

export const DashboardUsNoPremiumEmptyScanResolvedBreaches: Story = {
  name: "US user, without Premium, with 0 scan results, with all breaches resolved",
  args: {
    countryCode: "us",
    premium: false,
    breaches: "resolved",
    brokers: "empty",
  },
};

export const DashboardUsNoPremiumUnresolvedScanNoBreaches: Story = {
  name: "US user, without Premium, with unresolved scan results, with 0 breaches",
  args: {
    countryCode: "us",
    premium: false,
    breaches: "empty",
    brokers: "unresolved",
  },
};

export const DashboardUsNoPremiumUnresolvedScanUnresolvedBreaches: Story = {
  name: "US user, without Premium, with unresolved scan results, with unresolved breaches",
  args: {
    countryCode: "us",
    premium: false,
    breaches: "unresolved",
    brokers: "unresolved",
  },
};

export const DashboardUsNoPremiumUnresolvedScanResolvedBreaches: Story = {
  name: "US user, without Premium, with unresolved scan results, with all breaches resolved",
  args: {
    countryCode: "us",
    premium: false,
    breaches: "resolved",
    brokers: "unresolved",
  },
};

export const DashboardUsNoPremiumResolvedScanNoBreaches: Story = {
  name: "US user, without Premium, with all scan results resolved, with 0 breaches",
  args: {
    countryCode: "us",
    premium: false,
    breaches: "empty",
    brokers: "resolved",
  },
};

export const DashboardUsNoPremiumResolvedScanUnresolvedBreaches: Story = {
  name: "US user, without Premium, with all scan results resolved, with unresolved breaches",
  args: {
    countryCode: "us",
    premium: false,
    breaches: "unresolved",
    brokers: "resolved",
  },
};

export const DashboardUsNoPremiumResolvedScanResolvedBreaches: Story = {
  name: "US user, without Premium, with all scan results resolved, with all breaches resolved",
  args: {
    countryCode: "us",
    premium: false,
    breaches: "resolved",
    brokers: "resolved",
  },
};

export const DashboardUsNoPremiumScanInProgressNoBreaches: Story = {
  name: "US user, without Premium, scan in progress, with no breaches",
  args: {
    countryCode: "us",
    premium: false,
    breaches: "empty",
    brokers: "scan-in-progress",
  },
};

export const DashboardUsNoPremiumScanInProgressUnresolvedBreaches: Story = {
  name: "US user, without Premium, scan in progress, with unresolved breaches",
  args: {
    countryCode: "us",
    premium: false,
    breaches: "unresolved",
    brokers: "scan-in-progress",
  },
};

export const DashboardUsNoPremiumScanInProgressResolvedBreaches: Story = {
  name: "US user, without Premium, scan in progress, with resolved breaches",
  args: {
    countryCode: "us",
    premium: false,
    breaches: "resolved",
    brokers: "scan-in-progress",
  },
};

export const DashboardUsNoPremiumFirstScanRan: Story = {
  name: "US user, without Premium, first scan ran",
  args: {
    countryCode: "us",
    premium: false,
    brokers: "scan-in-progress",
    totalNumberOfPerformedScans: undefined,
  },
};
