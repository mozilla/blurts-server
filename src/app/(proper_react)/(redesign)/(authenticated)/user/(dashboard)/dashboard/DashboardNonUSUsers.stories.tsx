/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import type { Meta, StoryObj } from "@storybook/nextjs";

import {
  OnerepScanResultDataBrokerRow,
  OnerepScanRow,
} from "knex/types/tables";
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

  const mockedAnnouncements: UserAnnouncementWithDetails[] = [
    createRandomAnnouncement({ audience: "non_us" }),
    createRandomAnnouncement({ audience: "non_us" }),
    createRandomAnnouncement({ audience: "non_us" }),
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
            fxaSettingsUrl=""
            isNewUser={true}
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
            signInCount={props.signInCount ?? null}
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
  title: "Pages/Logged in/Dashboard/Non US User",
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

export const DashboardNonUsNoBreaches: Story = {
  name: "Non-US user, with 0 breaches",
  args: {
    countryCode: "nl",
    breaches: "empty",
  },
};

export const DashboardNonUsUnresolvedBreaches: Story = {
  name: "Non-US user, with unresolved breaches",
  args: {
    countryCode: "nl",
    breaches: "unresolved",
  },
};

export const DashboardNonUsResolvedBreaches: Story = {
  name: "Non-US user, with all breaches resolved",
  args: {
    countryCode: "nl",
    breaches: "resolved",
  },
};
