/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import type { Meta, StoryObj } from "@storybook/react";
import { BreachDetailsView, Props as ViewProps } from "./BreachDetailView";
import { getOneL10nSync } from "../../../../../functions/server/mockL10n";
import { PublicShell } from "../../PublicShell";
import { createRandomHibpListing } from "../../../../../../apiMocks/mockData";

const meta: Meta<typeof BreachDetailsView> = {
  title: "Pages/Public/Breach listing",
  component: (props: ViewProps) => (
    <PublicShell l10n={getOneL10nSync("en")}>
      <BreachDetailsView {...props} />
    </PublicShell>
  ),
  args: {
    l10n: getOneL10nSync(),
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
