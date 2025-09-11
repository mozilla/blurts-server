/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import type { Meta, StoryObj } from "@storybook/nextjs";

import { View as OnboardingEl } from "./View";
import { defaultExperimentData } from "../../../../../../telemetry/generated/nimbus/experiments";

const meta: Meta<typeof OnboardingEl> = {
  title: "Pages/Logged in/Onboarding",
  component: OnboardingEl,
};
export default meta;
type Story = StoryObj<typeof OnboardingEl>;

export const Onboarding: Story = {
  render: (props) => (
    <OnboardingEl
      {...props}
      user={{ email: "example@example.com" }}
      dataBrokerCount={190}
      breachesTotalCount={678}
      previousRoute={props.previousRoute}
      experimentData={{
        ...defaultExperimentData["Features"],
        "welcome-scan-optional-info": {
          enabled: true,
          variant: "suffixAndMiddleName",
        },
        moscary: {
          enabled: true,
        },
      }}
      enabledFeatureFlags={[]}
    />
  ),
};
