/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { it, expect } from "@jest/globals";
import { getByText, queryByText, render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { composeStory } from "@storybook/react";
import { type ReactNode } from "react";
import { axe } from "jest-axe";
import Meta, { Onboarding } from "./Onboarding.stories";
import { useTelemetry as useTelemetryImported } from "../../../../../hooks/useTelemetry";

jest.mock("next/navigation", () => ({
  useRouter: () => ({
    back: jest.fn(),
    push: jest.fn(),
  }),
  usePathname: jest.fn(),
  useSearchParams: () => ({
    get: jest.fn(),
  }),
}));

jest.mock("react-aria", () => ({
  ...jest.requireActual("react-aria"),
  // FocusScope's autoFocus triggers a React state update on mount,
  // which causes Jest to throw an "update not wrapped in act(...)" warning.
  // Hence, we disable FocusScope behaviour during tests..
  FocusScope: ({ children }: { children: ReactNode }) => <>{children}</>,
}));

jest.mock("../../../../../hooks/useTelemetry");
// We need to override the types of `useTelemetry` here, because otherwise
// Jest infers incorrect types in `toHaveBeenCalledWith`, and throws an error.
// See https://github.com/jestjs/jest/issues/15703
const useTelemetry = useTelemetryImported as () => (
  module: string,
  eventName: string,
  data: Record<string, string>,
) => void;
jest.mock("../../../../../hooks/locationSuggestions");

it("passes the axe accessibility test suite on step 1", async () => {
  const ComposedOnboarding = composeStory(Onboarding, Meta);
  const { container } = render(<ComposedOnboarding />);
  expect(await axe(container)).toHaveNoViolations();
}, 10_000);

it("shows the explainer dialog on step 1", async () => {
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

it("passes the axe accessibility test suite on step 2", async () => {
  const ComposedOnboarding = composeStory(Onboarding, Meta);
  const { container } = render(<ComposedOnboarding stepId="enterInfo" />);
  const proceedButton = screen.getByRole("button", {
    name: "Find exposures",
  });
  expect(proceedButton).toBeInTheDocument();
  expect(await axe(container)).toHaveNoViolations();
}, 10_000);

it("can open the explainer dialog shows on step 1", async () => {
  const user = userEvent.setup();
  const ComposedOnboarding = composeStory(Onboarding, Meta);
  render(<ComposedOnboarding />);

  expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  const explainerTrigger = screen.getByRole("button", {
    name: "See how we protect your data",
  });
  await user.click(explainerTrigger);
  expect(screen.getByRole("dialog")).toBeInTheDocument();

  const confirmButton = screen.getByRole("button", {
    name: "OK",
  });
  await user.click(confirmButton);

  expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
});

it("can go to step 2 from step 1", async () => {
  const user = userEvent.setup();
  const ComposedOnboarding = composeStory(Onboarding, Meta);
  render(<ComposedOnboarding />);

  expect(
    screen.queryByRole("heading", {
      name: "Enter the details you want to protect",
    }),
  ).not.toBeInTheDocument();

  const startButton = screen.getByRole("button", {
    name: "Start my free scan",
  });
  await user.click(startButton);

  expect(
    screen.getByRole("heading", {
      name: "Enter the details you want to protect",
    }),
  ).toBeInTheDocument();
});

it("can go back to step 1 after moving on to step 2", async () => {
  const user = userEvent.setup();
  const ComposedOnboarding = composeStory(Onboarding, Meta);
  render(<ComposedOnboarding />);

  const startButton = screen.getByRole("button", {
    name: "Start my free scan",
  });
  await user.click(startButton);

  expect(
    screen.queryByRole("heading", {
      name: "Welcome to ⁨Monitor⁩. Let’s find your exposed information.",
    }),
  ).not.toBeInTheDocument();

  const backButton = screen.getByRole("button", {
    name: "Go back",
  });
  await user.click(backButton);

  expect(
    screen.getByRole("heading", {
      name: "Welcome to ⁨Monitor⁩. Let’s find your exposed information.",
    }),
  ).toBeInTheDocument();
});

it("shows the explainer dialog on step 2", async () => {
  const user = userEvent.setup();
  const ComposedOnboarding = composeStory(Onboarding, Meta);
  render(<ComposedOnboarding stepId="enterInfo" />);

  expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  const explainerTrigger = screen.getByRole("button", {
    name: "Why do we need this info?",
  });
  await user.click(explainerTrigger);
  expect(screen.getByRole("dialog")).toBeInTheDocument();

  await user.keyboard("[Tab][Tab][Tab][Enter]");

  expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
});

it("shows the confirm dialog on step 2", async () => {
  const user = userEvent.setup();
  const ComposedOnboarding = composeStory(Onboarding, Meta);
  render(<ComposedOnboarding stepId="enterInfo" />);

  expect(screen.queryByRole("dialog")).not.toBeInTheDocument();

  const firstNameField = screen.getByLabelText("First name*");
  const lastNameField = screen.getByLabelText("Last name*");
  const proceedButton = screen.getByRole("button", {
    name: "Find exposures",
  });
  const dobField = screen.getByLabelText("Date of birth*");
  await user.type(firstNameField, "User");
  await user.type(lastNameField, "Name");
  await user.type(dobField, "2000-01-01");
  await user.keyboard("[Tab]Tu[ArrowDown][Enter][Tab]");

  await user.click(proceedButton);

  expect(screen.getByRole("dialog")).toBeInTheDocument();
  expect(screen.getByText("Is this correct?")).toBeInTheDocument();

  const cancelButton = screen.getByRole("button", {
    name: "Edit",
  });
  await user.click(cancelButton);

  expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  expect(screen.queryByText("Is this correct?")).not.toBeInTheDocument();
});

it("shows the confirm dialog with mandatory user information on step 2", async () => {
  const user = userEvent.setup();
  const ComposedOnboarding = composeStory(Onboarding, Meta);
  render(<ComposedOnboarding stepId="enterInfo" />);

  expect(screen.queryByRole("dialog")).not.toBeInTheDocument();

  const firstNameField = screen.getByLabelText("First name*");
  const lastNameField = screen.getByLabelText("Last name*");
  const proceedButton = screen.getByRole("button", {
    name: "Find exposures",
  });
  const dobField = screen.getByLabelText("Date of birth*");
  await user.type(firstNameField, "User");
  await user.type(lastNameField, "Name");
  await user.type(dobField, "2000-01-01");
  await user.keyboard("[Tab]Tu[ArrowDown][Enter][Tab]");

  await user.click(proceedButton);

  const dialog = screen.getByRole("dialog");
  expect(dialog).toBeInTheDocument();
  expect(queryByText(dialog, "Is this correct?")).toBeInTheDocument();

  expect(getByText(dialog, /First name/i)).toBeInTheDocument();
  expect(queryByText(dialog, /Middle name/i)).not.toBeInTheDocument();
  expect(getByText(dialog, /Last name/i)).toBeInTheDocument();
  expect(queryByText(dialog, /Suffix/i)).not.toBeInTheDocument();
  expect(getByText(dialog, /Date of birth/i)).toBeInTheDocument();
  expect(getByText(dialog, /City and state/i)).toBeInTheDocument();
});

it("shows the confirm dialog with optional user information on step 2", async () => {
  const user = userEvent.setup();
  const ComposedOnboarding = composeStory(Onboarding, Meta);
  render(<ComposedOnboarding stepId="enterInfo" />);

  expect(screen.queryByRole("dialog")).not.toBeInTheDocument();

  const firstNameField = screen.getByLabelText("First name*");
  const middleNameField = screen.getByLabelText("Middle name");
  const lastNameField = screen.getByLabelText("Last name*");
  const nameSuffixField = screen.getByLabelText("Suffix");
  const proceedButton = screen.getByRole("button", {
    name: "Find exposures",
  });
  const dobField = screen.getByLabelText("Date of birth*");
  await user.type(firstNameField, "User");
  await user.type(middleNameField, "Middle");
  await user.type(lastNameField, "Name");
  await user.type(nameSuffixField, "Jr.");
  await user.type(dobField, "2000-01-01");
  await user.keyboard("[Tab]Tu[ArrowDown][Enter][Tab]");

  await user.click(proceedButton);

  const dialog = screen.getByRole("dialog");
  expect(dialog).toBeInTheDocument();
  expect(getByText(dialog, "Is this correct?")).toBeInTheDocument();

  expect(getByText(dialog, /First name/i)).toBeInTheDocument();
  expect(getByText(dialog, /Middle name/i)).toBeInTheDocument();
  expect(getByText(dialog, /Last name/i)).toBeInTheDocument();
  expect(getByText(dialog, /Suffix/i)).toBeInTheDocument();
  expect(getByText(dialog, /Date of birth/i)).toBeInTheDocument();
  expect(getByText(dialog, /City and state/i)).toBeInTheDocument();
});

it("doesn't allow proceeding without typing a valid location", async () => {
  const user = userEvent.setup();
  const ComposedOnboarding = composeStory(Onboarding, Meta);
  render(<ComposedOnboarding stepId="enterInfo" />);

  expect(screen.queryByRole("dialog")).not.toBeInTheDocument();

  const firstNameField = screen.getByLabelText("First name*");
  const lastNameField = screen.getByLabelText("Last name*");
  const locationField = screen.getByLabelText("City and state*");
  const proceedButton = screen.getByRole("button", {
    name: "Find exposures",
  });
  const dobField = screen.getByLabelText("Date of birth*");
  await user.type(firstNameField, "User");
  await user.type(lastNameField, "Name");
  await user.type(locationField, "Invalid location");
  await user.type(dobField, "2000-01-01");

  await user.click(proceedButton);

  expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  expect(screen.queryByText("Is this correct?")).not.toBeInTheDocument();
});

it("shows an invalid state error when a user moves focus away from the first name field", async () => {
  const user = userEvent.setup();
  const ComposedOnboarding = composeStory(Onboarding, Meta);
  render(<ComposedOnboarding stepId="enterInfo" />);

  expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  const firstNameField = screen.getByLabelText("First name*");

  await user.click(firstNameField);
  await user.keyboard("{Tab}");
  expect(firstNameField.getAttribute("aria-invalid")).toBe("true");
});

it("doesn’t show an invalid state error for mandatory form input elements if left empty on step 2", async () => {
  const user = userEvent.setup();
  const ComposedOnboarding = composeStory(Onboarding, Meta);
  const { container } = render(<ComposedOnboarding stepId="enterInfo" />);

  const firstNameInput = screen.getByPlaceholderText("Enter first name");
  const lastNameInput = screen.getByPlaceholderText("Enter last name");
  const locationInput = screen.getByPlaceholderText("Enter city and state");
  const dateInput = container.querySelector("input[type='date']");
  expect(firstNameInput.getAttribute("aria-invalid")).toBe(null);
  expect(lastNameInput.getAttribute("aria-invalid")).toBe(null);
  expect(locationInput.getAttribute("aria-invalid")).toBe(null);
  expect(dateInput?.getAttribute("aria-invalid")).toBe(null);

  const proceedButton = screen.getByRole("button", {
    name: "Find exposures",
  });
  await user.click(proceedButton);

  expect(firstNameInput.getAttribute("aria-invalid")).toBe("true");
  expect(lastNameInput.getAttribute("aria-invalid")).toBe("true");
  expect(locationInput.getAttribute("aria-invalid")).toBe("true");
  expect(dateInput?.getAttribute("aria-invalid")).toBe("true");
});

it("optional form input elements don’t have invalid state if left empty on step 2", async () => {
  const user = userEvent.setup();
  const ComposedOnboarding = composeStory(Onboarding, Meta);
  render(<ComposedOnboarding stepId="enterInfo" />);

  const middleNameInput = screen.getByPlaceholderText("Enter middle name");
  const nameSuffixInput = screen.getByPlaceholderText("Enter suffix");
  expect(middleNameInput.getAttribute("aria-invalid")).toBe(null);
  expect(nameSuffixInput.getAttribute("aria-invalid")).toBe(null);

  const proceedButton = screen.getByRole("button", {
    name: "Find exposures",
  });
  await user.click(proceedButton);

  expect(middleNameInput.getAttribute("aria-invalid")).toBe(null);
  expect(nameSuffixInput.getAttribute("aria-invalid")).toBe(null);
});

it("passes the axe accessibility test suite on step 3", async () => {
  const ComposedOnboarding = composeStory(Onboarding, Meta);
  const { container } = render(<ComposedOnboarding stepId="findExposures" />);
  expect(await axe(container)).toHaveNoViolations();
}, 10_000);

it("shows a condensed version of the onboarding skipping step “Get started”", () => {
  const ComposedOnboarding = composeStory(Onboarding, Meta);
  render(<ComposedOnboarding stepId="enterInfo" />);
  const proceedButton = screen.getByRole("button", {
    name: "Find exposures",
  });
  expect(proceedButton).toBeInTheDocument();
});

it("does not show the go back button on step 2 of the onboarding when there is no previous route", () => {
  const ComposedOnboarding = composeStory(Onboarding, Meta);
  render(<ComposedOnboarding stepId="enterInfo" />);

  const backButton = screen.queryByRole("button", {
    name: "Go back",
  });
  expect(backButton).not.toBeInTheDocument();
});

it("does not navigate back to step 1 of the onboarding when directly linking to the `enterInfo` step if there is previous route", async () => {
  const user = userEvent.setup();
  const ComposedOnboarding = composeStory(Onboarding, Meta);
  render(
    <ComposedOnboarding stepId="enterInfo" previousRoute="/user/dashboard/" />,
  );

  const backButton = screen.getByRole("button", {
    name: "Go back",
  });
  await user.click(backButton);

  expect(
    screen.queryByRole("heading", {
      name: "Welcome to ⁨Monitor⁩. Let’s find your exposed information.",
    }),
  ).not.toBeInTheDocument();
});

it("sends telemetry to Glean when starting the free scan", async () => {
  const user = userEvent.setup();
  const ComposedOnboarding = composeStory(Onboarding, Meta);
  const mockedRecord = useTelemetry();
  render(<ComposedOnboarding />);

  const startButton = screen.getByRole("button", {
    name: "Start my free scan",
  });
  await user.click(startButton);

  expect(mockedRecord).toHaveBeenCalledWith(
    "ctaButton",
    "click",
    expect.objectContaining({
      button_id: "welcome_start",
    }),
  );
});

it("sends telemetry to Glean when opening explainer on the “Get started” step", async () => {
  const user = userEvent.setup();
  const ComposedOnboarding = composeStory(Onboarding, Meta);
  const mockedRecord = useTelemetry();
  render(<ComposedOnboarding />);

  const explainerTrigger = screen.getByRole("button", {
    name: "See how we protect your data",
  });
  await user.click(explainerTrigger);

  expect(mockedRecord).toHaveBeenCalledWith(
    "button",
    "click",
    expect.objectContaining({
      button_id: "welcome_data_protection",
    }),
  );
});

it("sends telemetry to Glean when clicking “Find exposures”", async () => {
  const user = userEvent.setup();
  const ComposedOnboarding = composeStory(Onboarding, Meta);
  const mockedRecord = useTelemetry();
  render(<ComposedOnboarding stepId="enterInfo" />);

  const proceedButton = screen.getByRole("button", {
    name: "Find exposures",
  });
  await user.click(proceedButton);

  expect(mockedRecord).toHaveBeenCalledWith(
    "ctaButton",
    "click",
    expect.objectContaining({
      button_id: "started_free_scan",
    }),
  );
});

it("sends telemetry to Glean when entering info", async () => {
  const user = userEvent.setup();
  const ComposedOnboarding = composeStory(Onboarding, Meta);
  const mockedRecord = useTelemetry();
  render(<ComposedOnboarding stepId="enterInfo" />);

  const firstNameField = screen.getByLabelText("First name*");
  const middleNameField = screen.getByLabelText("Middle name");
  const lastNameField = screen.getByLabelText("Last name*");
  const nameSuffixField = screen.getByLabelText("Suffix");
  const dobField = screen.getByLabelText("Date of birth*");
  await user.type(firstNameField, "User");
  await user.type(middleNameField, "Middle");
  await user.type(lastNameField, "Name");
  await user.type(nameSuffixField, "Jr.");
  await user.type(dobField, "2000-01-01");
  await user.keyboard("[Tab]Tu[ArrowDown][Enter][Tab]");

  [
    "first_name",
    "middle_name",
    "last_name",
    "name_suffix",
    "location",
    "date_of_birth",
  ].forEach((inputKey) => {
    expect(mockedRecord).toHaveBeenCalledWith(
      "field",
      "focus",
      expect.objectContaining({
        field_id: inputKey,
      }),
    );
  });
});

it("sends telemetry to Glean editing info", async () => {
  global.fetch = jest.fn().mockResolvedValueOnce({
    json: () =>
      Promise.resolve({
        success: true,
      }),
  });

  const user = userEvent.setup();
  const ComposedOnboarding = composeStory(Onboarding, Meta);
  const mockedRecord = useTelemetry();
  render(<ComposedOnboarding stepId="enterInfo" />);

  const proceedButton = screen.getByRole("button", {
    name: "Find exposures",
  });

  const firstNameField = screen.getByLabelText("First name*");
  const middleNameField = screen.getByLabelText("Middle name");
  const lastNameField = screen.getByLabelText("Last name*");
  const nameSuffixField = screen.getByLabelText("Suffix");
  const dobField = screen.getByLabelText("Date of birth*");
  await user.type(firstNameField, "User");
  await user.type(middleNameField, "Middle");
  await user.type(lastNameField, "Name");
  await user.type(nameSuffixField, "Jr.");
  await user.type(dobField, "2000-01-01");
  await user.keyboard("[Tab]Tu[ArrowDown][Enter][Tab]");
  await user.click(proceedButton);

  const editButton = screen.getByRole("button", {
    name: "Edit",
  });
  await user.click(editButton);

  expect(mockedRecord).toHaveBeenCalledWith(
    "ctaButton",
    "click",
    expect.objectContaining({
      button_id: "started_free_scan",
    }),
  );

  expect(mockedRecord).toHaveBeenCalledWith(
    "button",
    "click",
    expect.objectContaining({
      button_id: "edit_free_scan",
    }),
  );
});

it("sends telemetry to Glean when starting the scan", async () => {
  global.fetch = jest.fn().mockResolvedValueOnce({
    json: () =>
      Promise.resolve({
        success: true,
      }),
  });

  const user = userEvent.setup();
  const ComposedOnboarding = composeStory(Onboarding, Meta);
  const mockedRecord = useTelemetry();
  render(<ComposedOnboarding stepId="enterInfo" />);

  const proceedButton = screen.getByRole("button", {
    name: "Find exposures",
  });

  const firstNameField = screen.getByLabelText("First name*");
  const middleNameField = screen.getByLabelText("Middle name");
  const lastNameField = screen.getByLabelText("Last name*");
  const nameSuffixField = screen.getByLabelText("Suffix");
  const dobField = screen.getByLabelText("Date of birth*");
  await user.type(firstNameField, "User");
  await user.type(middleNameField, "Middle");
  await user.type(lastNameField, "Name");
  await user.type(nameSuffixField, "Jr.");
  await user.type(dobField, "2000-01-01");
  await user.keyboard("[Tab]Tu[ArrowDown][Enter][Tab]");
  await user.click(proceedButton);

  const confirmButton = screen.getByRole("button", {
    name: "Confirm",
  });
  await user.click(confirmButton);

  ["started_free_scan", "confirmed_free_scan"].forEach((ctaId) => {
    expect(mockedRecord).toHaveBeenCalledWith(
      "ctaButton",
      "click",
      expect.objectContaining({
        button_id: ctaId,
      }),
    );
  });
});
