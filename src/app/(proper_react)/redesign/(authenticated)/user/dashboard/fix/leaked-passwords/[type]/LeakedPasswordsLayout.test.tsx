/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { render, screen } from "@testing-library/react";
import { it, expect } from "@jest/globals";
import { composeStory } from "@storybook/react";
import { axe } from "jest-axe";
import { setupJestCanvasMock } from "jest-canvas-mock";
import Meta, {
  PasswordsStory,
  SecurityQuestionsStory,
  PasswordsDoneSecurityQuestionsNextStory,
  PasswordsDoneSecurityTipsNextStory,
  PasswordsDoneNoNextStepStory,
  SecurityQuestionsDoneSecurityTipsNextStory,
  SecurityQuestionsDoneNoNextStepStory,
} from "./LeakedPasswords.stories";

beforeEach(() => {
  setupJestCanvasMock();
});

it("leaked passwords component passes the axe accessibility test suite", async () => {
  const ComposedLeakedPasswordsDataBreachComponent = composeStory(
    PasswordsStory,
    Meta,
  );
  const { container } = render(<ComposedLeakedPasswordsDataBreachComponent />);
  expect(await axe(container)).toHaveNoViolations();
});

it("security questions component passes the axe accessibility test suite", async () => {
  const ComposedLeakedPasswordsDataBreachComponent = composeStory(
    SecurityQuestionsStory,
    Meta,
  );
  const { container } = render(<ComposedLeakedPasswordsDataBreachComponent />);
  expect(await axe(container)).toHaveNoViolations();
});

it("passes the axe accessibility test suite for the leaked passwords celebration view, next step is security questions)", async () => {
  const ComposedLeakedPasswordsDataBreachComponent = composeStory(
    PasswordsDoneSecurityQuestionsNextStory,
    Meta,
  );
  const { container } = render(<ComposedLeakedPasswordsDataBreachComponent />);
  expect(await axe(container)).toHaveNoViolations();
});

it("passes the axe accessibility test suite for the leaked passwords celebration view, next step is security tips)", async () => {
  const ComposedLeakedPasswordsDataBreachComponent = composeStory(
    PasswordsDoneSecurityTipsNextStory,
    Meta,
  );
  const { container } = render(<ComposedLeakedPasswordsDataBreachComponent />);
  expect(await axe(container)).toHaveNoViolations();
});

it("passes the axe accessibility test suite for the leaked passwords celebration view, no next step)", async () => {
  const ComposedLeakedPasswordsDataBreachComponent = composeStory(
    PasswordsDoneNoNextStepStory,
    Meta,
  );
  const { container } = render(<ComposedLeakedPasswordsDataBreachComponent />);
  expect(await axe(container)).toHaveNoViolations();
});

it("passes the axe accessibility test suite for the security questions celebration view, next step is security tips)", async () => {
  const ComposedSecurityQuestionsDataBreachComponent = composeStory(
    SecurityQuestionsDoneSecurityTipsNextStory,
    Meta,
  );
  const { container } = render(
    <ComposedSecurityQuestionsDataBreachComponent />,
  );
  expect(await axe(container)).toHaveNoViolations();
});

it("passes the axe accessibility test suite for the security questions celebration view, no next step)", async () => {
  const ComposedSecurityQuestionsDataBreachComponent = composeStory(
    SecurityQuestionsDoneNoNextStepStory,
    Meta,
  );
  const { container } = render(
    <ComposedSecurityQuestionsDataBreachComponent />,
  );
  expect(await axe(container)).toHaveNoViolations();
});

it("shows the leaked passwords celebration view, next step is security questions", () => {
  const ComposedComponent = composeStory(
    PasswordsDoneSecurityQuestionsNextStory,
    Meta,
  );

  render(<ComposedComponent />);

  const viewHeading = screen.getByRole("heading", {
    name: "Your passwords are now protected!",
  });
  expect(viewHeading).toBeInTheDocument();
});

it("shows the leaked passwords celebration view, next step is passwords", () => {
  const ComposedComponent = composeStory(
    PasswordsDoneSecurityTipsNextStory,
    Meta,
  );

  render(<ComposedComponent />);

  const viewHeading = screen.getByRole("heading", {
    name: "Your passwords are now protected!",
  });
  expect(viewHeading).toBeInTheDocument();
});

it("shows the leaked passwords celebration view, no next step", () => {
  const ComposedComponent = composeStory(PasswordsDoneNoNextStepStory, Meta);

  render(<ComposedComponent />);

  const viewHeading = screen.getByRole("heading", {
    name: "Your passwords are now protected!",
  });
  expect(viewHeading).toBeInTheDocument();
});

it("shows the security questions celebration view, next step is security tips", () => {
  const ComposedComponent = composeStory(
    SecurityQuestionsDoneSecurityTipsNextStory,
    Meta,
  );

  render(<ComposedComponent />);

  const viewHeading = screen.getByRole("heading", {
    name: "Your security questions are protected!",
  });
  expect(viewHeading).toBeInTheDocument();
});

it("shows the security questions celebration view, no next step", () => {
  const ComposedComponent = composeStory(
    SecurityQuestionsDoneNoNextStepStory,
    Meta,
  );

  render(<ComposedComponent />);

  const viewHeading = screen.getByRole("heading", {
    name: "Your security questions are protected!",
  });
  expect(viewHeading).toBeInTheDocument();
});
