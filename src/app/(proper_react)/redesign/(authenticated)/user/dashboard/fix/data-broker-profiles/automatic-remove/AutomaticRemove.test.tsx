/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { it, expect } from "@jest/globals";
import { render, screen } from "@testing-library/react";
import { composeStory } from "@storybook/react";
import { axe } from "jest-axe";

import Meta, { AutomaticRemoveViewStory } from "./AutomaticRemove.stories";

it("passes the axe accessibility test suite", async () => {
  const AutomaticRemoveView = composeStory(AutomaticRemoveViewStory, Meta);
  const { container } = render(<AutomaticRemoveView />);
  expect(await axe(container)).toHaveNoViolations();
});

it("hides the progress indicator on the automatic resolution Premium upsell", () => {
  const AutomaticRemoveView = composeStory(AutomaticRemoveViewStory, Meta);
  render(<AutomaticRemoveView />);

  const guidedStepsNavigation = screen.queryByRole("navigation", {
    name: "Guided steps",
  });
  expect(guidedStepsNavigation).not.toBeInTheDocument();
});
