/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { it, expect } from "@jest/globals";
import { render, screen } from "@testing-library/react";
import { composeStory } from "@storybook/react";
import { axe } from "jest-axe";
import Meta, {
  MobileShellAuthenticated,
  MobileShellPublic,
} from "./MobileShell.stories";
import { userEvent } from "@testing-library/user-event";

describe("MobileShell public", () => {
  it("passes the axe accessibility test suite", async () => {
    const ComposedMobileShell = composeStory(MobileShellPublic, Meta);
    const { container } = render(<ComposedMobileShell />);
    expect(await axe(container)).toHaveNoViolations();
  });

  it("shows the sign-in buttons", () => {
    const ComposedMobileShell = composeStory(MobileShellPublic, Meta);
    render(<ComposedMobileShell />);

    // Depending on the viewport size we are showing a sign-in button in
    // the top navbar or collapsable menu.
    const signInButtons = screen.getAllByRole("button", {
      name: "Sign In",
    });
    expect(signInButtons.length).toBe(2);
    expect(signInButtons[0]).toBeInTheDocument();
    expect(signInButtons[1]).toBeInTheDocument();
  });

  it("opens and closes the menu", async () => {
    const user = userEvent.setup();
    const ComposedMobileShell = composeStory(MobileShellPublic, Meta);
    render(<ComposedMobileShell />);

    const menuButton = screen.getByRole("button", {
      name: "Expand menu",
    });

    await user.click(menuButton);
    expect(
      screen.getByRole("button", { name: "Collapse menu" }),
    ).toBeInTheDocument();
    await user.click(menuButton);
    expect(
      screen.getByRole("button", { name: "Expand menu" }),
    ).toBeInTheDocument();
  });
});

describe("MobileShell authenticated", () => {
  it("passes the axe accessibility test suite", async () => {
    const ComposedMobileShell = composeStory(MobileShellAuthenticated, Meta);
    const { container } = render(<ComposedMobileShell />);
    expect(await axe(container)).toHaveNoViolations();
  });

  it("does not show the sign-in button", () => {
    const ComposedMobileShell = composeStory(MobileShellAuthenticated, Meta);
    render(<ComposedMobileShell />);

    const signInButton = screen.queryByRole("button", {
      name: "Sign In",
    });
    expect(signInButton).not.toBeInTheDocument();
  });

  it("opens and closes the menu", async () => {
    const user = userEvent.setup();
    const ComposedMobileShell = composeStory(MobileShellAuthenticated, Meta);
    render(<ComposedMobileShell />);

    const menuButton = screen.getByRole("button", {
      name: "Expand menu",
    });

    await user.click(menuButton);
    expect(
      screen.getByRole("button", { name: "Collapse menu" }),
    ).toBeInTheDocument();
    await user.click(menuButton);
    expect(
      screen.getByRole("button", { name: "Expand menu" }),
    ).toBeInTheDocument();
  });
});
