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
  const ComposedComponent = composeStory(PasswordsStory, Meta);
  const { container } = render(<ComposedComponent />);
  expect(await axe(container)).toHaveNoViolations();
});

it("security questions component passes the axe accessibility test suite", async () => {
  const ComposedComponent = composeStory(SecurityQuestionsStory, Meta);
  const { container } = render(<ComposedComponent />);
  expect(await axe(container)).toHaveNoViolations();
});

it("passes the axe accessibility test suite for the leaked passwords celebration view, next step is security questions", async () => {
  const ComposedComponent = composeStory(
    PasswordsDoneSecurityQuestionsNextStory,
    Meta,
  );
  const { container } = render(<ComposedComponent />);
  expect(await axe(container)).toHaveNoViolations();
});

it("passes the axe accessibility test suite for the leaked passwords celebration view, next step is security tips", async () => {
  const ComposedComponent = composeStory(
    PasswordsDoneSecurityTipsNextStory,
    Meta,
  );
  const { container } = render(<ComposedComponent />);
  expect(await axe(container)).toHaveNoViolations();
});

it("passes the axe accessibility test suite for the leaked passwords celebration view, no next step", async () => {
  const ComposedComponent = composeStory(PasswordsDoneNoNextStepStory, Meta);
  const { container } = render(<ComposedComponent />);
  expect(await axe(container)).toHaveNoViolations();
});

it("passes the axe accessibility test suite for the security questions celebration view, next step is security tips", async () => {
  const ComposedComponent = composeStory(
    SecurityQuestionsDoneSecurityTipsNextStory,
    Meta,
  );
  const { container } = render(<ComposedComponent />);
  expect(await axe(container)).toHaveNoViolations();
});

it("passes the axe accessibility test suite for the security questions celebration view, no next step", async () => {
  const ComposedComponent = composeStory(
    SecurityQuestionsDoneNoNextStepStory,
    Meta,
  );
  const { container } = render(<ComposedComponent />);
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

  const buttonLink = screen.getByRole("link", {
    name: "Let’s keep going",
  });
  expect(buttonLink).toBeInTheDocument();
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

  const buttonLink = screen.getByRole("link", {
    name: "See recommendations",
  });
  expect(buttonLink).toBeInTheDocument();
});

it("shows the leaked passwords celebration view, no next step", () => {
  const ComposedComponent = composeStory(PasswordsDoneNoNextStepStory, Meta);

  render(<ComposedComponent />);

  const viewHeading = screen.getByRole("heading", {
    name: "Your passwords are now protected!",
  });
  expect(viewHeading).toBeInTheDocument();

  const buttonLink = screen.getByRole("link", {
    name: "Go to your Dashboard",
  });
  expect(buttonLink).toBeInTheDocument();
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

  const buttonLink = screen.getByRole("link", {
    name: "See recommendations",
  });
  expect(buttonLink).toBeInTheDocument();
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

  const buttonLink = screen.getByRole("link", {
    name: "Go to your Dashboard",
  });
  expect(buttonLink).toBeInTheDocument();
});
