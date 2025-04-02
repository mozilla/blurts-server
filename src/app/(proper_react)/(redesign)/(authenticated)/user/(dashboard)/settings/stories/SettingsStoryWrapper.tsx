/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import {
  EmailAddressRow,
  OnerepProfileRow,
  SubscriberRow,
} from "knex/types/tables";
import { SettingsView, TabType } from "../View";
import { Shell } from "../../../../../Shell/Shell";
import { getL10n } from "../../../../../../../functions/l10n/storybookAndJest";
import { createUserWithPremiumSubscription } from "../../../../../../../../apiMocks/mockData";
import { defaultExperimentData } from "../../../../../../../../telemetry/generated/nimbus/experiments";
import { CountryCodeProvider } from "../../../../../../../../contextProviders/country-code";
import { SessionProvider } from "../../../../../../../../contextProviders/session";
import { FeatureFlagName } from "../../../../../../../../db/tables/featureFlags";
import { SubscriberEmailPreferencesOutput } from "../../../../../../../../db/tables/subscriber_email_preferences";
import {
  mockedSubscriber,
  breachCountByEmailAddress,
} from "./settingsMockData";

export type SettingsWrapperProps = {
  activeTab: TabType;
  breaches: unknown;
  countryCode: string;
  enabledFeatureFlags?: FeatureFlagName[];
  isMonthlySubscriber: boolean;
  isEligibleForPremium: boolean;
  subscriber: SubscriberRow;
  breachCountByEmailAddress: Record<string, number>;
  emailAddresses?: EmailAddressRow[];
  profileData?: OnerepProfileRow;
  data?: SubscriberEmailPreferencesOutput;
};

export const SettingsWrapper = (props: SettingsWrapperProps) => {
  const user = createUserWithPremiumSubscription();
  const mockedSession = {
    expires: new Date().toISOString(),
    user,
  };

  return (
    <SessionProvider session={mockedSession}>
      <CountryCodeProvider countryCode={props.countryCode}>
        <Shell
          l10n={getL10n()}
          session={mockedSession}
          nonce=""
          countryCode={props.countryCode}
          enabledFeatureFlags={props.enabledFeatureFlags ?? []}
          experimentData={defaultExperimentData["Features"]}
        >
          <SettingsView
            l10n={getL10n()}
            user={user}
            subscriber={props.subscriber ?? mockedSubscriber}
            data={props.data}
            emailAddresses={props.emailAddresses ?? []}
            breachCountByEmailAddress={
              props.breachCountByEmailAddress ?? breachCountByEmailAddress
            }
            fxaSettingsUrl=""
            fxaSubscriptionsUrl=""
            monthlySubscriptionUrl=""
            yearlySubscriptionUrl=""
            subscriptionBillingAmount={{
              yearly: 13.37,
              monthly: 42.42,
            }}
            enabledFeatureFlags={props.enabledFeatureFlags ?? []}
            experimentData={defaultExperimentData["Features"]}
            lastScanDate={new Date(Date.UTC(2024, 6, 31))}
            isMonthlySubscriber={props.isMonthlySubscriber}
            activeTab={props.activeTab ?? "action-needed"}
          />
        </Shell>
      </CountryCodeProvider>
    </SessionProvider>
  );
};
