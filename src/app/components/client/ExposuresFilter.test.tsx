/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { it, expect, vi } from "vitest";
import { render, screen, within } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { composeStory } from "@storybook/react";
import { axe } from "vitest-axe";
import Meta, {
  ExposuresFilterDefault,
} from "./stories/ExposuresFilter.stories";
import { useTelemetry as useTelemetryImported } from "../../hooks/useTelemetry";

vi.mock("next/navigation", () => ({
  useRouter: vi.fn(),
  usePathname: vi.fn(),
}));

vi.mock("../../hooks/useTelemetry");
// We need to override the types of `useTelemetry` here, because otherwise
// Jest infers incorrect types in `toHaveBeenCalledWith`, and throws an error.
// See https://github.com/jestjs/jest/issues/15703
const useTelemetry = useTelemetryImported as () => (
  module: string,
  eventName: string,
  data: Record<string, string>,
) => void;

it("passes the axe accessibility test suite", async () => {
  const ExposuresFilter = composeStory(ExposuresFilterDefault, Meta);
  const { container } = render(<ExposuresFilter enabledFeatureFlags={[]} />);
  expect(await axe(container)).toHaveNoViolations();
}, 10_000);

it("shows and hides the status explainer", async () => {
  const mockedRecord = useTelemetry();
  const user = userEvent.setup();
  const ExposuresFilter = composeStory(ExposuresFilterDefault, Meta);
  render(<ExposuresFilter enabledFeatureFlags={[]} />);

  const exposureTypeHeader = screen.getByText("Status");
  const explainerTrigger = within(exposureTypeHeader).getByRole("button", {
    name: "Open modal",
  });
  await user.click(explainerTrigger);
  expect(mockedRecord).toHaveBeenCalledWith(
    "popup",
    "view",
    expect.objectContaining({
      popup_id: "exposure_status_info",
    }),
  );

  const explainerDialog = screen.getByRole("dialog");
  expect(explainerDialog).toBeInTheDocument();
  const explainerCloseButton = within(explainerDialog).getByRole("button", {
    name: "Got it",
  });
  await user.click(explainerCloseButton);
  expect(explainerDialog).not.toBeInTheDocument();
});
