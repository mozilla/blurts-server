/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { it, expect } from "@jest/globals";
import { render, screen, within } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { composeStory } from "@storybook/react";
import { axe } from "jest-axe";
import Meta, {
  ExposuresFilterDefault,
} from "./stories/ExposuresFilter.stories";

jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
  usePathname: jest.fn(),
}));

jest.mock("../../hooks/useTelemetry");

it("passes the axe accessibility test suite", async () => {
  const ExposuresFilter = composeStory(ExposuresFilterDefault, Meta);
  const { container } = render(<ExposuresFilter enabledFeatureFlags={[]} />);
  expect(await axe(container)).toHaveNoViolations();
}, 10_000);

it("shows and hides the status explainer", async () => {
  const user = userEvent.setup();
  const ExposuresFilter = composeStory(ExposuresFilterDefault, Meta);
  render(<ExposuresFilter enabledFeatureFlags={[]} />);

  const exposureTypeHeader = screen.getByText("Status");
  const explainerTrigger = within(exposureTypeHeader).getByRole("button", {
    name: "Open modal",
  });
  await user.click(explainerTrigger);

  const explainerDialog = screen.getByRole("dialog");
  expect(explainerDialog).toBeInTheDocument();
  const explainerCloseButton = within(explainerDialog).getByRole("button", {
    name: "Got it",
  });
  await user.click(explainerCloseButton);
  expect(explainerDialog).not.toBeInTheDocument();
});
