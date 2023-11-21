/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { it, expect } from "@jest/globals";
import { composeStory } from "@storybook/react";
import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { axe } from "jest-axe";
import { signIn } from "next-auth/react";
import Meta, { LandingNonUs, LandingUs } from "./LandingView.stories";

jest.mock("next-auth/react");

describe("When Premium is not available", () => {
  it("passes the axe accessibility test suite", async () => {
    const ComposedDashboard = composeStory(LandingNonUs, Meta);
    const { container } = render(<ComposedDashboard />);
    expect(await axe(container)).toHaveNoViolations();
  });

  it("passes the user's email address to the identity provider", async () => {
    const user = userEvent.setup();

    const ComposedDashboard = composeStory(LandingNonUs, Meta);
    render(<ComposedDashboard />);

    const inputField = screen.getByLabelText(
      "Enter your email address to check for data breach exposures.",
    );
    await user.type(inputField, "mail@example.com");

    const submitButton = screen.getByRole("button", { name: "Get free scan" });
    await user.click(submitButton);

    expect(signIn).toHaveBeenCalledTimes(1);
    expect(signIn).toHaveBeenCalledWith("fxa", expect.any(Object), {
      email: "mail@example.com",
    });
  });
});

describe("When Premium is available", () => {
  it("passes the axe accessibility test suite", async () => {
    const ComposedDashboard = composeStory(LandingUs, Meta);
    const { container } = render(<ComposedDashboard />);
    expect(await axe(container)).toHaveNoViolations();
  });

  it("can open and close the tooltip with the keyboard", async () => {
    const user = userEvent.setup();

    const ComposedDashboard = composeStory(LandingUs, Meta);
    render(<ComposedDashboard />);

    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();

    const moreInfoButton = screen.getAllByRole("button", {
      name: "More info",
    })[0];
    await user.click(moreInfoButton);

    expect(screen.getByRole("dialog")).toBeInTheDocument();

    await user.keyboard("[Escape]");
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });

  it("can switch from the yearly to the monthly plan with the keyboard", async () => {
    const user = userEvent.setup();

    const ComposedDashboard = composeStory(LandingUs, Meta);
    render(<ComposedDashboard />);

    // Regular expression:
    //
    //   Save   Starts with the characters `Save `,
    //
    //   (.+?)  followed by one or more (`+`) arbitrary characters (`.`), until
    //          the next part of the regular expression matches…
    //
    //   %      …which is a single `%` character.
    //
    // All that combines to a string like "Save 13.37%".
    expect(screen.getByText(/Save (.+?)%/)).toBeInTheDocument();

    const yearlyToggle = screen.getByRole("radio", { name: "Yearly" });
    await user.click(yearlyToggle);
    await user.keyboard("[ArrowRight][Space]");

    // Regular expression:
    //
    //   Save   Starts with the characters `Save `,
    //
    //   (.+?)  followed by one or more (`+`) arbitrary characters (`.`), until
    //          the next part of the regular expression matches…
    //
    //   %      …which is a single `%` character.
    //
    // All that combines to a string like "Save 13.37%".
    expect(screen.queryByText(/Save (.+?)%/)).not.toBeInTheDocument();
  });

  it("can move to the subscribe button with the keyboard", async () => {
    const user = userEvent.setup();

    const ComposedDashboard = composeStory(LandingUs, Meta);
    render(<ComposedDashboard />);

    const plusSubscribeButton = screen.getByRole("link", {
      name: "Get data removal",
    });
    expect(plusSubscribeButton).not.toHaveFocus();

    const yearlyToggle = screen.getByRole("radio", { name: "Yearly" });
    await user.click(yearlyToggle);
    await user.keyboard("[ArrowRight][ArrowRight]");

    expect(plusSubscribeButton).toHaveFocus();
  });

  it("can initiate sign in from the pricing table", async () => {
    const user = userEvent.setup();

    const ComposedDashboard = composeStory(LandingUs, Meta);
    render(<ComposedDashboard />);

    expect(signIn).not.toHaveBeenCalled();

    const yearlyToggle = screen.getByRole("radio", { name: "Yearly" });
    await user.click(yearlyToggle);
    await user.keyboard("[ArrowLeft][Space]");

    expect(signIn).toHaveBeenCalledTimes(1);
  });
});
