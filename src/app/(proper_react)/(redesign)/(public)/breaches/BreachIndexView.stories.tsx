/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import type { Meta, StoryObj } from "@storybook/react";
import { faker } from "@faker-js/faker";
import { BreachIndexView, Props as ViewProps } from "./BreachIndexView";
import { getOneL10nSync } from "../../../../functions/server/mockL10n";
import { PublicShell } from "../PublicShell";
import { createRandomHibpListing } from "../../../../../apiMocks/mockData";

const meta: Meta<typeof BreachIndexView> = {
  title: "Pages/Public/Breach index",
  component: (props: ViewProps) => (
    <PublicShell l10n={getOneL10nSync("en")}>
      <BreachIndexView {...props} />
    </PublicShell>
  ),
};

export default meta;
type Story = StoryObj<typeof BreachIndexView>;

export const BreachIndexViewStory: Story = {
  name: "Breach index",
  args: {
    allBreaches: faker.helpers.multiple(createRandomHibpListing, {
      count: { min: 7, max: 200 },
    }),
  },
};
