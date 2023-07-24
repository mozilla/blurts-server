/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { it, expect } from "@jest/globals";
import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { composeStory } from "@storybook/react";
import { axe } from "jest-axe";
import Meta, { Onboarding } from "./Onboarding.stories";

it("passes the axe accessibility test suite on step 1", async () => {
  const ComposedOnboarding = composeStory(Onboarding, Meta);
  const { container } = render(<ComposedOnboarding />);
  expect(await axe(container)).toHaveNoViolations();
});

it("passes the axe accessibility test suite on step 2", async () => {
  const user = userEvent.setup();
  const ComposedOnboarding = composeStory(Onboarding, Meta);
  const { container } = render(<ComposedOnboarding />);
  const explainerTrigger = screen.getByRole("button", {
    name: "Start my free scan",
  });
  await user.click(explainerTrigger);
  expect(await axe(container)).toHaveNoViolations();
});

function populateEnterInfoForm(container: HTMLElement) {
  const firstNameInput = screen.getByPlaceholderText("Enter first name");
  const lastNameInput = screen.getByPlaceholderText("Enter last name");
  const locationInput = screen.getByPlaceholderText("Enter city and state");
  const dateInput = container.querySelector("input[type='date']");

  expect(firstNameInput).toBeInTheDocument();
  expect(lastNameInput).toBeInTheDocument();
  expect(locationInput).toBeInTheDocument();
  expect(dateInput).toBeInTheDocument();

  const firstName = "User";
  const lastName = "Name";
  const locationString = "New York, NY, USA";
  const dateString = "2000-01-01";

  fireEvent.change(firstNameInput, { target: { value: firstName } });
  fireEvent.change(lastNameInput, { target: { value: lastName } });
  fireEvent.change(locationInput, { target: { value: locationString } });

  if (dateInput) {
    fireEvent.change(dateInput, { target: { value: dateString } });
  }

  expect(screen.getByDisplayValue(firstName)).toBe(firstNameInput);
  expect(screen.getByDisplayValue(lastName)).toBe(lastNameInput);
  expect(screen.getByDisplayValue(locationString)).toBe(locationInput);
  expect(screen.getByDisplayValue(dateString)).toBe(dateInput);
}

it("passes the axe accessibility test suite on step 3", async () => {
  const user = userEvent.setup();
  const ComposedOnboarding = composeStory(Onboarding, Meta);
  const { container } = render(<ComposedOnboarding />);
  const explainerTrigger = screen.getByRole("button", {
    name: "Start my free scan",
  });
  await user.click(explainerTrigger);

  populateEnterInfoForm(container);

  const nextButton = screen.getByRole("button", {
    name: "Find exposures",
  });
  await user.click(nextButton);

  // const confirmButton = screen.getByRole("button", {
  //   name: "Confirm",
  // });
  // await user.click(confirmButton);

  expect(await axe(container)).toHaveNoViolations();
});

it("can open a dialog with more information", async () => {
  const user = userEvent.setup();
  const ComposedOnboarding = composeStory(Onboarding, Meta);
  render(<ComposedOnboarding />);
  expect(screen.queryByRole("dialog")).not.toBeInTheDocument();

  const explainerTrigger = screen.getByRole("button", {
    name: "See how we protect your data",
  });
  await user.click(explainerTrigger);
  expect(screen.getByRole("dialog")).toBeInTheDocument();
});
