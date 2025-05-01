/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import type { Meta, StoryObj } from "@storybook/react";
import { View, LandingPageProps } from "../LandingViewRedesign";
import { PublicShell } from "../PublicShell";
import { getL10n } from "../../../../functions/l10n/storybookAndJest";
import { defaultExperimentData } from "../../../../../telemetry/generated/nimbus/experiments";
import { AccountsMetricsFlowProvider } from "../../../../../contextProviders/accounts-metrics-flow";
import { CONST_URL_MONITOR_LANDING_PAGE_ID } from "../../../../../constants";
import {
  getPremiumSubscriptionUrl,
  getSubscriptionBillingAmount,
} from "../../../../functions/server/getPremiumSubscriptionInfo";

const meta: Meta<typeof View> = {
  title: "Pages/Public/Landing page/Redesign",
  component: (props: LandingPageProps) => {
    const experimentData = props.experimentData ?? {
      ...defaultExperimentData["Features"],
      "landing-page-redesign-plus-eligible-experiment": {
        enabled: true,
        variant: "redesign",
      },
    };
    const enabledFeatureFlags = props.enabledFeatureFlags ?? [
      "LandingPageRedesign",
    ];
    return (
      <AccountsMetricsFlowProvider
        enabled={
          experimentData["landing-page-redesign-plus-eligible-experiment"]
            .enabled
        }
        metricsFlowParams={{
          entrypoint: CONST_URL_MONITOR_LANDING_PAGE_ID,
          entrypoint_experiment:
            "landing-page-redesign-plus-eligible-experiment",
          entrypoint_variation:
            experimentData["landing-page-redesign-plus-eligible-experiment"]
              .variant,
          form_type: "email",
          service: process.env.OAUTH_CLIENT_ID as string,
        }}
      >
        <PublicShell
          countryCode={props.countryCode}
          l10n={getL10n("en")}
          enabledFeatureFlags={enabledFeatureFlags}
          experimentData={experimentData}
        >
          <View
            {...props}
            experimentData={experimentData}
            enabledFeatureFlags={enabledFeatureFlags}
            bundleProductUrl={{
              relay: process.env.FIREFOX_RELAY_LANDING_URL ?? "",
              vpn: process.env.MOZILLA_VPN_LANDING_URL ?? "",
            }}
            premiumSubscriptionUrl={{
              monthly: getPremiumSubscriptionUrl({
                type: "monthly",
                enabledFeatureFlags,
              }),
              yearly: getPremiumSubscriptionUrl({
                type: "yearly",
                enabledFeatureFlags,
              }),
              bundle: getPremiumSubscriptionUrl({
                type: "bundle",
                enabledFeatureFlags,
              }),
            }}
            subscriptionBillingAmount={getSubscriptionBillingAmount()}
          />
        </PublicShell>
      </AccountsMetricsFlowProvider>
    );
  },
  args: {
    l10n: getL10n(),
  },
};

export default meta;
type Story = StoryObj<typeof View>;

export const LandingRedesignUs: Story = {
  name: "US visitors",
  args: {
    eligibleForPremium: true,
    countryCode: "us",
    scanLimitReached: false,
  },
};

export const LandingRedesignUsScanLimit: Story = {
  name: "US visitors - Scan limit reached",
  args: {
    eligibleForPremium: true,
    countryCode: "us",
    scanLimitReached: true,
  },
};

export const LandingRedesignUsWithPrivacyProductBundle: Story = {
  name: "US visitors - With Privacy Product Bundle",
}
export const LandingRedesignUsDisableOneRepScans: Story = {
  name: "US visitors - Disable OneRep Scans",
  args: {
    eligibleForPremium: true,
    countryCode: "us",
    scanLimitReached: false,
    enabledFeatureFlags: ["LandingPageRedesign", "PrivacyProductsBundle", "DisableOneRepScans"],
  },
};

export const LandingRedesignUsScanLimitWithPrivacyProductBundle: Story = {
  name: "US visitors - Scan limit reached and with Privacy Product Bundle",
  args: {
    eligibleForPremium: true,
    countryCode: "us",
    scanLimitReached: true,
    enabledFeatureFlags: ["LandingPageRedesign", "PrivacyProductsBundle"],
  },
};
