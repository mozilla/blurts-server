/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { it, expect } from "@jest/globals";
import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { composeStory } from "@storybook/react";
import { axe } from "jest-axe";

import Meta, { AutomaticRemoveViewStory } from "./AutomaticRemove.stories";
import { useTelemetry } from "../../../../../../../../../hooks/useTelemetry";

jest.mock("../../../../../../../../../hooks/useTelemetry");

it("passes the axe accessibility test suite", async () => {
  const AutomaticRemoveView = composeStory(AutomaticRemoveViewStory, Meta);
  const { container } = render(<AutomaticRemoveView />);
  expect(await axe(container)).toHaveNoViolations();
}, 10_000);

it("toggles between the monthly and yearly plan view", async () => {
  const user = userEvent.setup();
  const AutomaticRemoveView = composeStory(AutomaticRemoveViewStory, Meta);
  render(<AutomaticRemoveView />);

  const productButtonMonthly = screen.getByRole("radio", { name: "Monthly" });
  await user.click(productButtonMonthly);
  const selectPlanButtonMonthly = screen.getByRole("link", {
    name: "Select monthly plan",
  });
  expect(selectPlanButtonMonthly).toBeInTheDocument();

  const productButtonYearly = screen.getByRole("radio", { name: "Yearly" });
  await user.click(productButtonYearly);
  const selectPlanButtonYearly = screen.getByRole("link", {
    name: "Select yearly plan",
  });
  expect(selectPlanButtonYearly).toBeInTheDocument();
});

it("hides the progress indicator on the automatic resolution Premium upsell", () => {
  const AutomaticRemoveView = composeStory(AutomaticRemoveViewStory, Meta);
  render(<AutomaticRemoveView />);

  const guidedStepsNavigation = screen.queryByRole("navigation", {
    name: "Guided steps",
  });
  expect(guidedStepsNavigation).not.toBeInTheDocument();
});

it("counts how often users exit the guided flow", async () => {
  const user = userEvent.setup();
  const mockedRecord = useTelemetry();
  const AutomaticRemoveView = composeStory(AutomaticRemoveViewStory, Meta);
  render(<AutomaticRemoveView />);

  const exitLink = screen.getByRole("link", { name: "Return to dashboard" });
  // jsdom will complain about not being able to navigate to a different page
  // after clicking the link; suppress that error, as it's not relevant to the
  // test:
  jest.spyOn(console, "error").mockImplementationOnce(() => undefined);
  await user.click(exitLink);

  expect(mockedRecord).toHaveBeenCalledWith("button", "click", {
    button_id: "exited_guided_experience",
  });
});

it("counts how often users skip to the next section", async () => {
  const user = userEvent.setup();
  const mockedRecord = useTelemetry();
  const AutomaticRemoveView = composeStory(AutomaticRemoveViewStory, Meta);
  render(<AutomaticRemoveView />);

  const skipArrowLink = screen.getByRole("link", { name: "Go to next step" });
  // jsdom will complain about not being able to navigate to a different page
  // after clicking the link; suppress that error, as it's not relevant to the
  // test:
  jest.spyOn(console, "error").mockImplementationOnce(() => undefined);
  await user.click(skipArrowLink);

  expect(mockedRecord).toHaveBeenCalledWith("button", "click", {
    button_id: "next_arrow",
  });
});
