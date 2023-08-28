/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { render, screen } from "@testing-library/react";
import { it, expect } from "@jest/globals";
import { composeStory } from "@storybook/react";
import Meta, {
  FalseDoorBannerDashboard,
  FalseDoorBannerDefault,
} from "./FalseDoorBanner.stories";

it("shows false door test variant on dashboard", () => {
  const ComposedFalseDoorBanner = composeStory(FalseDoorBannerDashboard, Meta);
  render(<ComposedFalseDoorBanner />);
  // substring match https://testing-library.com/docs/queries/about/#textmatch
  const bannerElem = screen.getByText(
    "Automatically remove data from broker sites",
    { exact: false }
  );
  expect(bannerElem).toBeInTheDocument();
});

it("shows false door test", () => {
  const ComposedFalseDoorBanner = composeStory(FalseDoorBannerDefault, Meta);
  render(<ComposedFalseDoorBanner />);
  // substring match https://testing-library.com/docs/queries/about/#textmatch
  const bannerElem = screen.getByText(
    "Automatically remove data from sketchy sites",
    { exact: false }
  );
  expect(bannerElem).toBeInTheDocument();
});
