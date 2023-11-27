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
});
