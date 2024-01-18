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
  LeakedPasswordsDoneStory,
} from "./LeakedPasswords.stories";

jest.mock("../../../../../../../../../hooks/useTelemetry");
jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
  usePathname: jest.fn(),
}));

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

it("passes the axe accessibility test suite for the leaked passwords celebration view", async () => {
  const ComposedComponent = composeStory(LeakedPasswordsDoneStory, Meta);
  const { container } = render(<ComposedComponent />);
  expect(await axe(container)).toHaveNoViolations();
});

it("shows the leaked passwords celebration view, next step is security questions", () => {
  const ComposedComponent = composeStory(LeakedPasswordsDoneStory, Meta);

  render(
    <ComposedComponent
      type="passwords-done"
      nextUnresolvedBreachType="SecurityQuestions"
    />,
  );

  const viewHeading = screen.getByRole("heading", {
    name: "Your passwords are now protected!",
  });
  expect(viewHeading).toBeInTheDocument();

  const buttonLink = screen.getByRole("link", {
    name: "Let’s keep going",
  });
  expect(buttonLink).toHaveAttribute(
    "href",
    "/user/dashboard/fix/leaked-passwords/security-questions",
  );
});

it("shows the leaked passwords celebration view, next step is security tips", () => {
  const ComposedComponent = composeStory(LeakedPasswordsDoneStory, Meta);

  render(
    <ComposedComponent
      type="passwords-done"
      nextUnresolvedBreachType="Email"
    />,
  );

  const viewHeading = screen.getByRole("heading", {
    name: "Your passwords are now protected!",
  });
  expect(viewHeading).toBeInTheDocument();

  const buttonLink = screen.getByRole("link", {
    name: "See recommendations",
  });
  expect(buttonLink).toHaveAttribute(
    "href",
    "/user/dashboard/fix/security-recommendations/email",
  );
});

it("shows the leaked passwords celebration view, no next step", () => {
  const ComposedComponent = composeStory(LeakedPasswordsDoneStory, Meta);

  render(<ComposedComponent type="passwords-done" />);

  const viewHeading = screen.getByRole("heading", {
    name: "Your passwords are now protected!",
  });
  expect(viewHeading).toBeInTheDocument();

  const buttonLink = screen.getByRole("link", {
    name: "Go to your Dashboard",
  });
  expect(buttonLink).toHaveAttribute("href", "/user/dashboard");
});

it("shows the security questions celebration view, next step is security tips", () => {
  const ComposedComponent = composeStory(LeakedPasswordsDoneStory, Meta);

  render(
    <ComposedComponent
      type="security-questions-done"
      nextUnresolvedBreachType="IP"
    />,
  );

  const viewHeading = screen.getByRole("heading", {
    name: "Your security questions are protected!",
  });
  expect(viewHeading).toBeInTheDocument();

  const buttonLink = screen.getByRole("link", {
    name: "See recommendations",
  });
  expect(buttonLink).toHaveAttribute(
    "href",
    "/user/dashboard/fix/security-recommendations/ip",
  );
});

it("shows the security questions celebration view, no next step", () => {
  const ComposedComponent = composeStory(LeakedPasswordsDoneStory, Meta);

  render(<ComposedComponent type="security-questions-done" />);

  const viewHeading = screen.getByRole("heading", {
    name: "Your security questions are protected!",
  });
  expect(viewHeading).toBeInTheDocument();

  const buttonLink = screen.getByRole("link", {
    name: "Go to your Dashboard",
  });
  expect(buttonLink).toHaveAttribute("href", "/user/dashboard");
});
