/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import type { Meta, StoryObj } from "@storybook/react";
import { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { UpsellBadge, UpsellButton } from "../toolbar/UpsellBadge";
import { createUserWithPremiumSubscription } from "../../../../apiMocks/mockData";
import { CountryCodeProvider } from "../../../../contextProviders/country-code";
import { defaultExperimentData } from "../../../../telemetry/generated/nimbus/experiments";
import { FeatureFlagName } from "../../../../db/tables/featureFlags";

type UpsellCtaWrapperProps = {
  countryCode: string;
  isBadge: boolean;
  user: Session["user"];
  enabledFeatureFlags: FeatureFlagName[];
};

const UpsellCtaWrapper = (props: UpsellCtaWrapperProps) => {
  const monthlySubscriptionUrl = "price_monthly";
  const yearlySubscriptionUrl = "price_yearly";
  const subscriptionBillingAmount = {
    yearly: 13.37,
    monthly: 42.42,
  };
  const mockedSession = {
    expires: new Date().toISOString(),
    user: props.user,
  };

  return (
    <SessionProvider session={mockedSession}>
      <CountryCodeProvider countryCode={props.countryCode}>
        {props.isBadge ? (
          <UpsellBadge
            monthlySubscriptionUrl={monthlySubscriptionUrl}
            yearlySubscriptionUrl={yearlySubscriptionUrl}
            subscriptionBillingAmount={subscriptionBillingAmount}
            lastScanDate={new Date(Date.UTC(1998, 2, 31))}
            experimentData={{
              ...defaultExperimentData["Features"],
              "last-scan-date": {
                enabled: true,
              },
            }}
            enabledFeatureFlags={props.enabledFeatureFlags}
          />
        ) : (
          <UpsellButton
            label="Get continuous protection"
            monthlySubscriptionUrl={monthlySubscriptionUrl}
            yearlySubscriptionUrl={yearlySubscriptionUrl}
            subscriptionBillingAmount={subscriptionBillingAmount}
          />
        )}
      </CountryCodeProvider>
    </SessionProvider>
  );
};

const meta: Meta<typeof UpsellCtaWrapper> = {
  title: "Design Systems/Atoms/Misc/Upsell CTA",
  component: UpsellCtaWrapper,
};
export default meta;
type Story = StoryObj<typeof UpsellCtaWrapper>;

export const UpsellCtaButton: Story = {
  args: {
    countryCode: "us",
    user: { email: "example@example.com" },
  },
};

export const UpsellBadgeNonUsUser: Story = {
  args: {
    countryCode: "nl",
    user: { email: "example@example.com" },
    isBadge: true,
  },
};

export const UpsellBadgeUsUserNoSubscriber: Story = {
  args: {
    countryCode: "us",
    user: { email: "example@example.com" },
    isBadge: true,
  },
};

export const UpsellBadgeActiveSubscriber: Story = {
  args: {
    countryCode: "us",
    user: createUserWithPremiumSubscription(),
    isBadge: true,
  },
};
