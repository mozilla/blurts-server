/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { it, expect, describe } from "@jest/globals";
import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { composeStory } from "@storybook/react";
import { useTelemetry as useTelemetryImported } from "../../../../../../../hooks/useTelemetry";
import Meta, { FixViewStory } from "./FixView.stories";

jest.mock("../../../../../../../hooks/useTelemetry");
// We need to override the types of `useTelemetry` here, because otherwise
// Jest infers incorrect types in `toHaveBeenCalledWith`, and throws an error.
// See https://github.com/jestjs/jest/issues/15703
const useTelemetry = useTelemetryImported as () => (
  module: string,
  eventName: string,
  data: Record<string, string>,
) => void;

describe("FixView telemetry", () => {
  it("records telemetry when user clicks the exit button", async () => {
    const mockedRecord = useTelemetry();
    const user = userEvent.setup();

    const ComposedFixView = composeStory(FixViewStory, Meta);
    render(<ComposedFixView />);

    const exitButton = screen.getByLabelText("Return to dashboard");
    // jsdom will complain about not being able to navigate to a different page
    // after clicking the link; suppress that error, as it's not relevant to the test:
    jest.spyOn(console, "error").mockImplementationOnce(() => undefined);
    await user.click(exitButton);

    expect(mockedRecord).toHaveBeenCalledWith(
      "button",
      "click",
      expect.objectContaining({
        button_id: "exited_guided_experience",
      }),
    );
  });

  it("records telemetry when user clicks the next arrow button", async () => {
    const mockedRecord = useTelemetry();
    const user = userEvent.setup();

    const ComposedFixView = composeStory(FixViewStory, Meta);
    render(<ComposedFixView />);

    const nextArrow = screen.getByLabelText("Go to next step");
    // jsdom will complain about not being able to navigate to a different page
    // after clicking the link; suppress that error, as it's not relevant to the test:
    jest.spyOn(console, "error").mockImplementationOnce(() => undefined);
    await user.click(nextArrow);

    expect(mockedRecord).toHaveBeenCalledWith(
      "button",
      "click",
      expect.objectContaining({
        button_id: "next_arrow",
      }),
    );
  });
});
