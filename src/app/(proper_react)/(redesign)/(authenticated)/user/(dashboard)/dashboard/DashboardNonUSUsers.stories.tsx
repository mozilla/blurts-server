/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import type { Meta, StoryObj } from "@storybook/nextjs";
import { View as DashboardEl } from "./View";
import { Shell } from "../../../../Shell/Shell";
import { getL10n } from "../../../../../../functions/l10n/storybookAndJest";
import {
  createRandomBreach,
  createRandomAnnouncement,
  createRandomUser,
} from "../../../../../../../apiMocks/mockData";
import { SubscriberBreach } from "../../../../../../../utils/subscriberBreaches";
import { CountryCodeProvider } from "../../../../../../../contextProviders/country-code";
import { SessionProvider } from "../../../../../../../contextProviders/session";
import { breachOptions, DashboardWrapperProps } from "./Dashboard.stories";
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

  if (props.breaches === "resolved") {
    breaches = [mockedResolvedBreach];
  }
  if (props.breaches === "unresolved") {
    breaches = [mockedResolvedBreach, mockedUnresolvedBreach];
  }

  const scanCount = 0;

  const user = createRandomUser();

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
          announcements={mockedAnnouncements}
        >
          <DashboardEl
            user={user}
            userBreaches={breaches}
            fxaSettingsUrl=""
            isNewUser={true}
            enabledFeatureFlags={props.enabledFeatureFlags ?? []}
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
    breaches: {
      options: Object.keys(breachOptions),
      control: {
        type: "radio",
        labels: breachOptions,
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
