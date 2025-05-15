/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { composeStory } from "@storybook/react/*";
import Meta from "./BundleOnboardingView.stories";
import { render } from "@testing-library/react";
import { axe } from "jest-axe";
import { BundleOnboarding } from "./BundleOnboardingView.stories";

it("passes the axe accessibility test suite", async () => {
  const ComposedDashboard = composeStory(BundleOnboarding, Meta);
  const { container } = render(<ComposedDashboard />);
  expect(await axe(container)).toHaveNoViolations();
});
