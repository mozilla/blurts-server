/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import type { Meta, StoryObj } from "@storybook/react";
import { UpsellBadge } from "../UpsellBadge";
import { createUserWithPremiumSubscription } from "../../../../apiMocks/mockData";
import { CountryCodeProvider } from "../../../../contextProviders/country-code";
import { Session } from "next-auth";

type UpsellBadgeWrapperProps = {
  countryCode: string;
  user: Session["user"];
};

const UpsellBadgeWrapper = (props: UpsellBadgeWrapperProps) => {
  return (
    <CountryCodeProvider countryCode={props.countryCode}>
      <UpsellBadge
        user={props.user}
        label="Subscribe to Monitor Plus"
        monthlySubscriptionUrl="price_monthly"
        yearlySubscriptionUrl="price_yearly"
      />
    </CountryCodeProvider>
  );
};

const meta: Meta<typeof UpsellBadgeWrapper> = {
  title: "Upsell",
  component: UpsellBadgeWrapper,
};
export default meta;
type Story = StoryObj<typeof UpsellBadgeWrapper>;

export const UpsellCtaUsUser: Story = {
  args: {
    countryCode: "us",
    user: { email: "example@example.com" },
  },
};

export const UpsellCtaNonUsUser: Story = {
  args: {
    countryCode: "nl",
    user: { email: "example@example.com" },
  },
};

export const UpsellBadgeNoSubscriber: Story = {
  args: {
    countryCode: "us",
    user: { email: "example@example.com" },
  },
};

export const UpsellBadgeActiveSubscriber: Story = {
  args: {
    countryCode: "us",
    user: createUserWithPremiumSubscription(),
  },
};
