/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { render, screen } from "@testing-library/react";
import { it, expect } from "@jest/globals";
import { composeStory } from "@storybook/react";
import { axe } from "jest-axe";
import { setupJestCanvasMock } from "jest-canvas-mock";
import Meta, {
  EmailStory,
  IpStory,
  PhoneStory,
  DoneStory,
} from "./SecurityRecommendations.stories";

jest.mock("../../../../../../../../../hooks/useTelemetry");
jest.mock("next/navigation", () => ({
  useRouter: () => ({
    push: jest.fn(),
  }),
  usePathname: jest.fn(),
}));

beforeEach(() => {
  setupJestCanvasMock();
});

it("passes the axe accessibility test suite for phone security recommendations", async () => {
  const ComposedComponent = composeStory(PhoneStory, Meta);
  const { container } = render(<ComposedComponent />);
  expect(await axe(container)).toHaveNoViolations();
});

it("passes the axe accessibility test suite for email security recommendations", async () => {
  const ComposedComponent = composeStory(EmailStory, Meta);
  const { container } = render(<ComposedComponent />);
  expect(await axe(container)).toHaveNoViolations();
});

it("passes the axe accessibility test suite for IP security recommendations", async () => {
  const ComposedComponent = composeStory(IpStory, Meta);
  const { container } = render(<ComposedComponent />);
  expect(await axe(container)).toHaveNoViolations();
});

it("passes the axe accessibility test suite for the security recommendations celebration view", async () => {
  const ComposedComponent = composeStory(DoneStory, Meta);
  const { container } = render(<ComposedComponent />);
  expect(await axe(container)).toHaveNoViolations();
});

it("marks the security recommendations step as the current one", () => {
  const ComposedComponent = composeStory(PhoneStory, Meta);

  render(<ComposedComponent />);

  const stepIndicator = screen
    .getAllByRole("listitem")
    .find((el) => el.textContent?.match(/Security recommendations/));
  expect(stepIndicator).toBeInTheDocument();
  expect(stepIndicator).toHaveAttribute("aria-current", "step");
});

it("shows the security recommendations celebration view", () => {
  const ComposedComponent = composeStory(DoneStory, Meta);

  render(<ComposedComponent />);

  const viewHeading = screen.getByRole("heading", {
    name: "You’ve completed all your recommendations!",
  });
  expect(viewHeading).toBeInTheDocument();

  const buttonLink = screen.getByRole("link", {
    name: "Go to your Dashboard",
  });
  expect(buttonLink).toHaveAttribute("href", "/user/dashboard");
});
