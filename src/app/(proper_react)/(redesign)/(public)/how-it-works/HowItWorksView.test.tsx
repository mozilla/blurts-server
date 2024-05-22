/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { it, expect } from "@jest/globals";
import { composeStory } from "@storybook/react";
import {
  //  getAllByRole,
  //  getByRole,
  //  getByText,
  //  queryByRole,
  //  queryByText,
  render,
  //  screen,
  //  within,
} from "@testing-library/react";
//  import { userEvent } from "@testing-library/user-event";
import { axe } from "jest-axe";
import Meta, { HowItWorks } from "./HowItWorksView.stories";

jest.mock("../../../../hooks/useTelemetry");

describe("How it works page", () => {
  it("passes the axe accessibility test suite", async () => {
    const ComposedPage = composeStory(HowItWorks, Meta);
    const { container } = render(<ComposedPage />);
    expect(await axe(container)).toHaveNoViolations();
  });

  it("Data Removal button enters user into premium subscription flow", () => {});

  it("Free Scan button enters user into account.mozilla.com", () => {});

  it("Only shows to users in US", () => {});
});

// it("shows a 'Sign In' button in the header if the user is not signed in", async () => {
//   const ComposedDashboard = composeStory(LandingNonUs, Meta);
//   render(<ComposedDashboard />);

//   const user = userEvent.setup();

//   const signInButton = screen.getByRole("button", {
//     name: "Sign In",
//   });
//   await user.click(signInButton);

//   expect(signInButton).toBeInTheDocument();
//   expect(signIn).toHaveBeenCalledTimes(1);
// });
