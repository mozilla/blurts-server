/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import type { Meta, StoryObj } from "@storybook/react";
import { View, Props as ViewProps } from "./LandingViewRedesign";
import { getL10n } from "../../../functions/l10n/storybookAndJest";
import { PublicShell } from "./PublicShell";
import { defaultExperimentData } from "../../../../telemetry/generated/nimbus/experiments";
import { AccountsMetricsFlowProvider } from "../../../../contextProviders/accounts-metrics-flow";
import { CONST_URL_MONITOR_LANDING_PAGE_ID } from "../../../../constants";

const meta: Meta<typeof View> = {
  title: "Pages/Public/Landing page/Redesign",
  component: (props: ViewProps) => {
    const experimentData =
      props.experimentData ?? defaultExperimentData["Features"];
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
          l10n={getL10n("en")}
          countryCode={props.countryCode}
          enabledFeatureFlags={["LandingPageRedesign"]}
          experimentData={{
            ...defaultExperimentData["Features"],
            "landing-page-redesign-plus-eligible-experiment": {
              enabled: true,
              variant: "redesign",
            },
          }}
        >
          <View {...props} experimentData={experimentData} />
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

export const LandingRedesignNonUs: Story = {
  name: "Non-US visitors",
  args: {
    eligibleForPremium: false,
    countryCode: "nz",
  },
};

export const LandingRedesignNonUsDe: Story = {
  name: "German",
  args: {
    eligibleForPremium: false,
    countryCode: "de",
    l10n: getL10n("de"),
  },
};

export const LandingRedesignNonUsFr: Story = {
  name: "French",
  args: {
    eligibleForPremium: false,
    countryCode: "fr",
    l10n: getL10n("fr"),
  },
};
