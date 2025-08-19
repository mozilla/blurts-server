/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import type { Meta, StoryObj } from "@storybook/react";
import { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { UpsellBadge, UpsellLinkButton } from "../toolbar/UpsellBadge";
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
  const mockedSession = {
    expires: new Date().toISOString(),
    user: props.user,
  };

  return (
    <SessionProvider session={mockedSession}>
      <CountryCodeProvider countryCode={props.countryCode}>
        {props.isBadge ? (
          <UpsellBadge
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
          <UpsellLinkButton
            variant="primary"
            small
            enabledFeatureFlags={props.enabledFeatureFlags}
            eventData={{
              button_id: "upsell_cta_story",
            }}
          >
            Get continuous protection
          </UpsellLinkButton>
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
    enabledFeatureFlags: [],
  },
};

export const UpsellBadgeNonUsUser: Story = {
  args: {
    countryCode: "nl",
    user: { email: "example@example.com" },
    isBadge: true,
    enabledFeatureFlags: [],
  },
};

export const UpsellBadgeUsUserNoSubscriber: Story = {
  args: {
    countryCode: "us",
    user: { email: "example@example.com" },
    isBadge: true,
    enabledFeatureFlags: [],
  },
};

export const UpsellBadgeActiveSubscriber: Story = {
  args: {
    countryCode: "us",
    user: createUserWithPremiumSubscription(),
    isBadge: true,
    enabledFeatureFlags: [],
  },
};
