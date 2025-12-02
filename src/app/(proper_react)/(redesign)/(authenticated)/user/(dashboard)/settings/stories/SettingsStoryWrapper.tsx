/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import {
  EmailAddressRow,
  OnerepProfileRow,
  SubscriberRow,
} from "knex/types/tables";
import { fn } from "storybook/test";
import { SettingsView, TabType } from "../View";
import { Shell } from "../../../../../Shell/Shell";
import { defaultExperimentData } from "../../../../../../../../telemetry/generated/nimbus/experiments";
import { CountryCodeProvider } from "../../../../../../../../contextProviders/country-code";
import { SessionProvider } from "../../../../../../../../contextProviders/session";
import { FeatureFlagName } from "../../../../../../../../db/tables/featureFlags";
import { SubscriberEmailPreferencesOutput } from "../../../../../../../../db/tables/subscriber_email_preferences";
import {
  mockedSubscriber,
  mockedVerifiedEmailSecond,
  mockedVerifiedEmailThird,
  mockedVerifiedEmailFourth,
  mockedVerifiedEmailFifth,
} from "./settingsMockData";
import { SerializedSubscriber } from "../../../../../../../../next-auth";
import { getL10n } from "../../../../../../../functions/l10n/storybookAndJest";
import { onDeleteAccount } from "../actions";

export type SettingsWrapperProps = {
  activeTab: TabType;
  breaches: unknown;
  countryCode: string;
  enabledFeatureFlags: FeatureFlagName[];
  isMonthlySubscriber: boolean;
  subscriber: SubscriberRow;
  emailAddresses?: EmailAddressRow[];
  profileData?: OnerepProfileRow;
  data?: SubscriberEmailPreferencesOutput;
  hasPlus?: boolean;
};

export const mockedActions = {
  onAddEmail: fn().mockName("onAddEmail"),
  onRemoveEmail: fn().mockName("onRemoveEmail"),
  onDeleteAccount: fn<typeof onDeleteAccount>()
    .mockName("onDeleteAccount")
    .mockReturnValue(new Promise(() => {})),
  onHandleUpdateProfileData: fn().mockName("onHandleUpdateProfileData"),
};

export const SettingsWrapper = (props: SettingsWrapperProps) => {
  const user = {
    email: "example@example.com",
    fxa: {
      locale: "us",
      twoFactorAuthentication: false,
      metricsEnabled: false,
      avatar: "https://profile.stage.mozaws.net/v1/avatar/e",
      avatarDefault: true,
      subscriptions: props.hasPlus ? ["monitor"] : [],
    },
    subscriber: {
      id: 42,
    } as SerializedSubscriber,
  };
  const mockedSession = {
    expires: new Date().toISOString(),
    user,
  };
  const subscriber = mockedSubscriber;

  return (
    <SessionProvider session={mockedSession}>
      <CountryCodeProvider countryCode={props.countryCode}>
        <Shell
          l10n={getL10n()}
          session={mockedSession}
          nonce=""
          countryCode={props.countryCode}
          enabledFeatureFlags={props.enabledFeatureFlags}
          hideSidebar={props.activeTab === "edit-profile"}
          announcements={null}
        >
          <SettingsView
            l10n={getL10n()}
            user={user}
            subscriber={props.subscriber ?? subscriber}
            data={props.data}
            emailAddresses={props.emailAddresses ?? []}
            breachCountByEmailAddress={{
              [subscriber.primary_email]: 12,
              [mockedVerifiedEmailSecond.email]: 23,
              [mockedVerifiedEmailThird.email]: 45,
              [mockedVerifiedEmailFourth.email]: 56,
              [mockedVerifiedEmailFifth.email]: 78,
            }}
            fxaSettingsUrl=""
            enabledFeatureFlags={props.enabledFeatureFlags}
            experimentData={defaultExperimentData["Features"]}
            lastScanDate={new Date(Date.UTC(2024, 6, 31))}
            activeTab={props.activeTab}
            actions={mockedActions}
            userAnnouncements={[]}
          />
        </Shell>
      </CountryCodeProvider>
    </SessionProvider>
  );
};
