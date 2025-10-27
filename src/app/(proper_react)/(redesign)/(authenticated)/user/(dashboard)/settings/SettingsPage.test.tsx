/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { it, expect } from "@jest/globals";
import { render } from "@testing-library/react";
import { Session } from "next-auth";
import type { EmailAddressRow, SubscriberRow } from "knex/types/tables";
import { getL10n } from "../../../../../../functions/l10n/storybookAndJest";
import { TestComponentWrapper } from "../../../../../../../TestComponentWrapper";
import { SerializedSubscriber } from "../../../../../../../next-auth";

const mockedSessionUpdate = jest.fn();
const mockedRecordTelemetry = jest.fn();
jest.mock("next-auth/react", () => {
  return {
    useSession: () => {
      return {
        update: mockedSessionUpdate,
      };
    },
  };
});

jest.mock("../../../../../../hooks/useTelemetry", () => {
  return {
    useTelemetry: () => mockedRecordTelemetry,
  };
});

const mockedRouterRefresh = jest.fn();

jest.mock("next/navigation", () => ({
  usePathname: () => "/user/settings",
  useRouter: () => ({
    push: jest.fn(),
    refresh: mockedRouterRefresh,
  }),
}));

import { SettingsView } from "./View";
import { defaultExperimentData } from "../../../../../../../telemetry/generated/nimbus/experiments";
import { Shell } from "../../../../Shell/Shell";
import { ComponentProps, ReactNode } from "react";
import { FeatureFlagName } from "../../../../../../../db/tables/featureFlags";
import { UserAnnouncementWithDetails } from "../../../../../../../db/tables/user_announcements";
import { createRandomAnnouncement } from "../../../../../../../apiMocks/mockData";

const subscriberId = 7;
const mockedSerializedSubscriber: SerializedSubscriber = {
  id: subscriberId,
  all_emails_to_primary: true,
} as SerializedSubscriber;
const mockedSubscriber: SubscriberRow = {
  updated_at: new Date(),
  fx_newsletter: true,
  all_emails_to_primary: true,
  waitlists_joined: true,
  email_addresses: [],
  id: 12346,
  created_at: new Date("2022-06-07 14:29:00.000-05"),
  primary_sha1: "abcabc",
  primary_email: "test@test.com",
  primary_verification_token: "c165711a-69d1-42f1-9850-ce74754f36de",
  primary_verified: true,
  fxa_access_token:
    "5a4792b89434153f1a6262fbd6a4510c00834ff842585fc4f4d972da158f0fc0",
  fxa_refresh_token:
    "5a4792b89434153f1a6262fbd6a4510c00834ff842585fc4f4d972da158f0fc1",
  fxa_session_expiry: new Date(0),
  fxa_uid: "12346",
  fxa_profile_json: {
    uid: "123",
    email: "test@test.com",
    avatar: "https://profile.stage.mozaws.net/v1/avatar/abc",
    locale: "en-US,en;q=0.5",
    amrValues: ["pwd", "email"],
    avatarDefault: false,
    metricsEnabled: true,
    twoFactorAuthentication: false,
  },
  breaches_last_shown: new Date("2022-07-08 14:19:00.000-05"),
  breaches_resolved: { "has-breaches@example.com": [] },
  breach_stats: {
    passwords: {
      count: 1,
      numResolved: 0,
    },
    numBreaches: {
      count: 2,
      numResolved: 1,
      numUnresolved: 1,
    },
    monitoredEmails: {
      count: 1,
    },
  },
  breach_resolution: {
    useBreachId: true,
    "test@test.com": {
      "8": {
        resolutionsChecked: ["passwords", "email-addresses"],
      },
      "40": {
        resolutionsChecked: [
          "email-addresses",
          "passwords",
          "social-security-numbers",
        ],
      },
      "252": {
        resolutionsChecked: ["email-addresses"],
      },
      "320": {
        resolutionsChecked: ["email-addresses"],
      },
    },
  },
  monthly_email_at: "2022-08-07 14:22:00.000-05",
  monthly_email_optout: false,
  signup_language: "fr-CH, fr;q=0.9, en;q=0.8, de;q=0.7,*;q=0.5",
  onerep_profile_id: null,
  monthly_monitor_report_at: null,
  monthly_monitor_report: false,
  sign_in_count: null,
  first_broker_removal_email_sent: false,
  churn_prevention_email_sent_at: null,
};

const mockedUser: Session["user"] = {
  email: "primary@example.com",
  subscriber: mockedSerializedSubscriber,
  fxa: {
    subscriptions: ["monitor"],
    avatar: "",
    avatarDefault: false,
    locale: "en-GB",
    metricsEnabled: false,
    twoFactorAuthentication: false,
  },
};

const mockedSecondaryVerifiedEmail: EmailAddressRow = {
  id: 1337,
  email: "secondary_verified@example.com",
  sha1: "arbitrary string",
  subscriber_id: subscriberId,
  verified: true,
  created_at: new Date("1337-04-02T04:02:42.000Z"),
  updated_at: new Date("1337-04-02T04:02:42.000Z"),
  verification_token: "arbitrary_token",
};
const mockedSubscriptionBillingAmount = {
  yearly: 13.37,
  monthly: 42.42,
};

const mockedSession = {
  expires: new Date().toISOString(),
  user: mockedUser,
};

const mockedActions: ComponentProps<typeof SettingsView>["actions"] = {
  onRemoveEmail: jest.fn(),
  onAddEmail: jest.fn(),
  onDeleteAccount: () => new Promise(() => undefined),
  onHandleUpdateProfileData: jest.fn(),
};

const mockedAnnouncements: UserAnnouncementWithDetails[] = [
  createRandomAnnouncement(),
  createRandomAnnouncement(),
  createRandomAnnouncement(),
];

const SettingsWrapper = (props: {
  children: ReactNode;
  enabledFeatureFlags?: FeatureFlagName[];
}) => (
  <TestComponentWrapper>
    <Shell
      l10n={getL10n()}
      session={mockedSession}
      nonce=""
      countryCode="en"
      enabledFeatureFlags={props.enabledFeatureFlags ?? []}
      experimentData={defaultExperimentData["Features"]}
      announcements={mockedAnnouncements}
    >
      {props.children}
    </Shell>
  </TestComponentWrapper>
);

describe("Settings page", () => {
  it("does not crash if no email preferences were found for the current user", () => {
    const component = (
      <SettingsWrapper>
        <SettingsView
          activeTab="notifications"
          l10n={getL10n()}
          user={mockedUser}
          subscriber={mockedSubscriber}
          breachCountByEmailAddress={{
            [mockedUser.email]: 42,
            [mockedSecondaryVerifiedEmail.email]: 42,
          }}
          emailAddresses={[mockedSecondaryVerifiedEmail]}
          fxaSettingsUrl=""
          fxaSubscriptionsUrl=""
          monthlySubscriptionUrl=""
          subscriptionBillingAmount={mockedSubscriptionBillingAmount}
          enabledFeatureFlags={[]}
          experimentData={defaultExperimentData["Features"]}
          isMonthlySubscriber={true}
          data={undefined}
          isEligibleForPremium={false}
          actions={mockedActions}
          userAnnouncements={mockedAnnouncements}
        />
      </SettingsWrapper>
    );

    expect(() => render(component)).not.toThrow();
  });
});
