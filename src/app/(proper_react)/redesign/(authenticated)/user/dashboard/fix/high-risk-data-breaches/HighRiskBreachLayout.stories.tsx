/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import type { Meta, StoryObj } from "@storybook/react";

import FixLayout from "../layout";
import { View as HighRiskDataBreaches } from "./View";
import { SubscriberBreach } from "../../../../../../../../utils/subscriberBreaches";
import { createRandomBreach } from "../../../../../../../../apiMocks/mockData";
import { guidedExperienceBreaches } from "../../../../../../../functions/server/getUserBreaches";

const breachesArraySample: SubscriberBreach[] = Array.from(
  { length: 5 },
  createRandomBreach
);

const meta: Meta<typeof HighRiskDataBreaches> = {
  title: "High Risk Breach",
  component: HighRiskDataBreaches,
};

export default meta;
type Story = StoryObj<typeof HighRiskDataBreaches>;

export const SocialSecurityNumberBreach: Story = {
  render: () => (
    <FixLayout navArrowBackVisible={false}>
      <HighRiskDataBreaches
        breaches={guidedExperienceBreaches(breachesArraySample)}
      />
    </FixLayout>
  ),
};
