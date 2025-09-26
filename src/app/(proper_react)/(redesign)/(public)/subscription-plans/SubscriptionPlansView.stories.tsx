/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { FC } from "react";
import type { Meta, StoryObj } from "@storybook/nextjs";
import { PublicShell } from "../PublicShell";
import { SubscriptionPlansView } from "./SubscriptionPlansView";
import { LandingPageProps } from "../LandingViewRedesign";
import { getL10n } from "../../../../functions/l10n/storybookAndJest";
import {
  getPremiumSubscriptionUrl,
  getSubscriptionBillingAmount,
} from "../../../../functions/server/getPremiumSubscriptionInfo";
import { defaultExperimentData } from "../../../../../telemetry/generated/nimbus/experiments";

const meta: Meta<
  FC<
    Omit<
      LandingPageProps,
      | "subscriptionBillingAmount"
      | "premiumSubscriptionUrl"
      | "bundleProductUrl"
    >
  >
> = {
  title: "Pages/Public/Subscription plans",
  component: (props) => (
    <PublicShell
      l10n={getL10n("en")}
      countryCode={props.countryCode}
      enabledFeatureFlags={props.enabledFeatureFlags}
      experimentData={defaultExperimentData["Features"]}
    >
      <SubscriptionPlansView
        subscriptionBillingAmount={getSubscriptionBillingAmount()}
        premiumSubscriptionUrl={{
          monthly: getPremiumSubscriptionUrl({
            type: "monthly",
            enabledFeatureFlags: props.enabledFeatureFlags,
          }),
          bundle: getPremiumSubscriptionUrl({
            type: "bundle",
            enabledFeatureFlags: props.enabledFeatureFlags,
          }),
        }}
        bundleProductUrl={{
          relay: process.env.FIREFOX_RELAY_LANDING_URL ?? "",
          vpn: process.env.MOZILLA_VPN_LANDING_URL ?? "",
        }}
        {...props}
      />
    </PublicShell>
  ),
  args: {
    l10n: getL10n("en"),
  },
};

export default meta;
type Story = StoryObj<typeof SubscriptionPlansView>;

export const SubscriptionPlans: Story = {
  name: "Subscription plans",
  args: {
    eligibleForPremium: true,
    scanLimitReached: false,
    enabledFeatureFlags: [],
  },
};
