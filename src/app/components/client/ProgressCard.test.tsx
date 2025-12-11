/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { it, expect } from "@jest/globals";
import { render, screen, within } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { composeStory } from "@storybook/react";
import { axe } from "jest-axe";
import Meta, {
  ProgressCardItemUsNonPremium,
  ProgressCardItemUsPremium,
} from "./stories/ProgressCard.stories";

jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
  usePathname: jest.fn(),
}));

const mockedRecordTelemetry = jest.fn();

jest.mock("../../hooks/useTelemetry", () => {
  return {
    useTelemetry: () => mockedRecordTelemetry,
  };
});

it("passes the axe accessibility test suite", async () => {
  const ComposedProgressCard = composeStory(ProgressCardItemUsPremium, Meta);
  const { container } = render(<ComposedProgressCard />);
  expect(await axe(container)).toHaveNoViolations();
}, 10_000);

it("shows and hides the explainer dialog", async () => {
  const user = userEvent.setup();
  const ComposedProgressCard = composeStory(ProgressCardItemUsPremium, Meta);
  render(<ComposedProgressCard />);

  const explainerTrigger = screen.getByLabelText("Open modal");
  await user.click(explainerTrigger);

  const explainerDialog = screen.getByRole("dialog");
  expect(explainerDialog).toBeInTheDocument();
  const explainerCloseButton = within(explainerDialog).getByRole("button", {
    name: "OK",
  });
  await user.click(explainerCloseButton);
  expect(explainerDialog).not.toBeInTheDocument();
});

it("shows the greyed out auto-removed stat if a user is not premium", () => {
  const ComposedProgressCard = composeStory(ProgressCardItemUsNonPremium, Meta);
  render(<ComposedProgressCard />);

  const autoRemovedText = screen.getByText("Auto-removed");
  expect(autoRemovedText.parentElement as HTMLElement).toHaveClass("greyedOut");
});
