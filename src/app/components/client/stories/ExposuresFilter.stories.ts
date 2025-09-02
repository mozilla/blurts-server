/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import type { Meta, StoryObj } from "@storybook/nextjs";

import { ExposuresFilter, FilterState } from "../ExposuresFilter";

const meta: Meta<typeof ExposuresFilter> = {
  title: "Dashboard/Exposures/FilterBar",
  component: ExposuresFilter,
};
export default meta;
type Story = StoryObj<typeof ExposuresFilter>;

const initialFilterState: FilterState = {
  exposureType: "show-all-exposure-type",
  dateFound: "show-all-date-found",
};

export const ExposuresFilterDefault: Story = {
  args: {
    initialFilterValues: initialFilterState,
    filterValues: initialFilterState,
    isEligibleForPremium: true,
  },
};
