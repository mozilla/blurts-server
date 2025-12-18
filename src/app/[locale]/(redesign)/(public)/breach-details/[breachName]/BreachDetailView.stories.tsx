/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import type { Meta, StoryObj } from "@storybook/nextjs";
import { BreachDetailsView, Props as ViewProps } from "./BreachDetailView";
import { getL10n } from "../../../../../functions/l10n/storybookAndJest";
import { PublicShell } from "../../PublicShell";
import { createRandomHibpListing } from "../../../../../../apiMocks/mockData";
import { defaultExperimentData } from "../../../../../../telemetry/generated/nimbus/experiments";

const meta: Meta<typeof BreachDetailsView> = {
  title: "Pages/Public/Breach listing",
  component: (props: ViewProps) => (
    <PublicShell
      l10n={getL10n("en")}
      countryCode="us"
      enabledFeatureFlags={[]}
      experimentData={defaultExperimentData["Features"]}
    >
      <BreachDetailsView {...props} />
    </PublicShell>
  ),
  args: {
    l10n: getL10n(),
  },
};

export default meta;
type Story = StoryObj<typeof BreachDetailsView>;

export const BreachDetailViewStory: Story = {
  name: "Breach listing",
  args: {
    breach: createRandomHibpListing(),
  },
};
