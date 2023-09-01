/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { it, expect } from "@jest/globals";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { composeStory } from "@storybook/react";
import { axe } from "jest-axe";
import Meta, {
  SignInButtonDefault,
  SignInButtonAuto,
} from "./SignInButton.stories";

jest.mock("next-auth/react", () => ({
  signIn: jest.fn(),
}));

jest.mock("next/navigation", () => ({
  usePathname: () => "/",
}));

it("passes the axe accessibility test suite", async () => {
  const ComposedDashboard = composeStory(SignInButtonDefault, Meta);
  const { container } = render(<ComposedDashboard />);
  expect(await axe(container)).toHaveNoViolations();
});

it("shows the SignInButton", () => {
  const ComposedDashboard = composeStory(SignInButtonDefault, Meta);
  render(<ComposedDashboard />);
  const button = screen.getByRole("button", {
    name: "Sign In",
  });
  expect(button).toBeInTheDocument();
});

it("triggers user authentication on click", async () => {
  const user = userEvent.setup();
  const ComposedDashboard = composeStory(SignInButtonDefault, Meta);
  render(<ComposedDashboard />);

  const button = screen.getByRole("button", {
    name: "Sign In",
  });
  await user.click(button);
});

it("triggers user authentication automatically", () => {
  const user = userEvent.setup();
  const ComposedDashboard = composeStory(SignInButtonAuto, Meta);
  render(<ComposedDashboard />);
});
