/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { it, expect } from "@jest/globals";
import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { composeStory } from "@storybook/react";
import { axe } from "jest-axe";
import Meta, { ProgressCardItem } from "./stories/ProgressCard.stories";

jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
  usePathname: jest.fn(),
}));

it("passes the axe accessibility test suite", async () => {
  const ComposedProgressCard = composeStory(ProgressCardItem, Meta);
  const { container } = render(<ComposedProgressCard />);
  expect(await axe(container)).toHaveNoViolations();
});

it("shows and hides the explainer dialog", async () => {
  const user = userEvent.setup();
  const ComposedProgressCard = composeStory(ProgressCardItem, Meta);
  render(<ComposedProgressCard />);

  const progressCardHeader = screen.getByText("Here is what we fixed");
  const explainerTrigger =
    within(progressCardHeader).getByLabelText("Open modal");
  await user.click(explainerTrigger);

  const explainerDialog = screen.getByRole("dialog");
  expect(explainerDialog).toBeInTheDocument();
  const explainerCloseButton = within(explainerDialog).getByRole("button", {
    name: "OK",
  });
  await user.click(explainerCloseButton);
  expect(explainerDialog).not.toBeInTheDocument();
});
