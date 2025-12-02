/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { it, expect } from "@jest/globals";
import { composeStory } from "@storybook/react";
import { render, screen, within } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { axe } from "jest-axe";
import { signIn, useSession } from "next-auth/react";
import { useTelemetry as useTelemetryImported } from "../../../hooks/useTelemetry";
import Meta, {
  LandingNonUs,
  LandingNonUsDe,
  LandingNonUsFr,
} from "./LandingView.stories";
import { deleteAllCookies } from "../../../functions/client/deleteAllCookies";

jest.mock("next-auth/react", () => {
  return {
    signIn: jest.fn(),
    useSession: jest.fn(() => {
      return {};
    }),
  };
});
jest.mock("next/navigation", () => ({
  useSearchParams: () => ({
    toString: jest.fn(),
  }),
}));

jest.mock("../../../hooks/useTelemetry");
// We need to override the types of `useTelemetry` here, because otherwise
// Jest infers incorrect types in `toHaveBeenCalledWith`, and throws an error.
// See https://github.com/jestjs/jest/issues/15703
const useTelemetry = useTelemetryImported as () => (
  module: string,
  eventName: string,
  data: Record<string, string>,
) => void;

beforeEach(() => {
  // For reasons that are unclear to me, the mock implementation defind in the
  // call to `jest.mock` above forgets the implementation. I've spent way too
  // long debugging that already, so I'm settling for this :(
  const mockedUseSession = useSession as jest.Mock;
  mockedUseSession.mockReturnValue({});

  // Make the rebrand announcement banner show up by default
  deleteAllCookies();
});

describe("When Premium is not available", () => {
  it("passes the axe accessibility test suite", async () => {
    const ComposedDashboard = composeStory(LandingNonUs, Meta);
    const { container } = render(<ComposedDashboard />);
    expect(await axe(container)).toHaveNoViolations();
  }, 10_000);

  it("passes the user's email address to the identity provider", async () => {
    const user = userEvent.setup();

    const ComposedDashboard = composeStory(LandingNonUs, Meta);
    render(<ComposedDashboard />);

    const inputField = screen.getAllByLabelText(
      "Enter your email address to check for data breach exposures.",
    );
    await user.type(inputField[0], "mail@example.com");

    const submitButton = screen.getAllByRole("button", {
      name: "Get free scan",
    });
    await user.click(submitButton[0]);

    expect(signIn).toHaveBeenCalledTimes(1);
    expect(signIn).toHaveBeenCalledWith(
      "fxa",
      expect.any(Object),
      expect.stringContaining(`email=mail%40example.com`),
    );
  });

  it("does not show a 'Sign In' button in the header if the user is signed in", () => {
    const mockedUseSession = useSession as jest.Mock<
      ReturnType<typeof useSession>,
      Parameters<typeof useSession>
    >;
    mockedUseSession.mockReturnValue({
      data: {
        user: {
          email: "arbitrary@example.com",
        },
        expires: "2023-06-18T14:48:00.000Z",
      },
      status: "authenticated",
      update: () => Promise.resolve(null),
    });

    const ComposedDashboard = composeStory(LandingNonUs, Meta);
    render(<ComposedDashboard />);

    const signInButton = screen.queryByRole("button", {
      name: "Sign In",
    });

    expect(signInButton).not.toBeInTheDocument();
  });

  it("shows a 'Sign In' button in the header if the user is not signed in", async () => {
    const ComposedDashboard = composeStory(LandingNonUs, Meta);
    render(<ComposedDashboard />);

    const user = userEvent.setup();

    const signInButton = screen.getByRole("button", {
      name: "Sign In",
    });
    await user.click(signInButton);

    expect(signInButton).toBeInTheDocument();
    expect(signIn).toHaveBeenCalledTimes(1);
  });

  it("counts the number of clicks on the sign-in button at the top", async () => {
    const mockedRecord = useTelemetry();
    const ComposedDashboard = composeStory(LandingNonUs, Meta);
    render(<ComposedDashboard />);

    const user = userEvent.setup();

    const signInButton = screen.getByRole("button", {
      name: "Sign In",
    });
    await user.click(signInButton);

    expect(mockedRecord).toHaveBeenCalledWith(
      "ctaButton",
      "click",
      expect.objectContaining({
        button_id: "sign_in",
      }),
    );
  });

  it("shows the data breaches quote", () => {
    const ComposedDashboard = composeStory(LandingNonUs, Meta);
    render(<ComposedDashboard />);
    const quote = screen.getByText(
      "Data breaches happen every 11 minutes, exposing your private information — but don’t worry, we can help.",
    );
    expect(quote).toBeInTheDocument();
  });

  it("shows the scanning for exposures illustration in the fix your exposures section", () => {
    const ComposedDashboard = composeStory(LandingNonUs, Meta);
    render(<ComposedDashboard />);

    const scanningForExposuresIllustration = screen.getByTestId(
      "scanning-for-exposures-image",
    );
    expect(scanningForExposuresIllustration).toBeInTheDocument();
  });

  it("can initiate sign in from the Here's How We Help section", async () => {
    const ComposedDashboard = composeStory(LandingNonUs, Meta);
    render(<ComposedDashboard />);

    const user = userEvent.setup();

    const signInButton = screen.getByRole("button", {
      name: "Sign up for breach alerts",
    });
    await user.click(signInButton);

    expect(signIn).toHaveBeenCalledTimes(1);
  });

  it("shows the german scanning for exposures illustration", () => {
    const ComposedDashboard = composeStory(LandingNonUsDe, Meta);
    render(<ComposedDashboard />);
    const scanningForExposuresIllustration = screen.getByTestId(
      "scanning-for-exposures-image",
    );
    expect(scanningForExposuresIllustration).toHaveAttribute(
      "data-country-code",
      "de",
    );
  });

  it("shows the french scanning for exposures illustration", () => {
    const ComposedDashboard = composeStory(LandingNonUsFr, Meta);
    render(<ComposedDashboard />);
    const scanningForExposuresIllustration = screen.getByTestId(
      "scanning-for-exposures-image",
    );
    expect(scanningForExposuresIllustration).toHaveAttribute(
      "data-country-code",
      "fr",
    );
  });
});

it("does not show a confirmaton message if the user has just deleted their account", () => {
  global.fetch = jest.fn().mockImplementation(() =>
    Promise.resolve({
      success: true,
      json: jest.fn(() => ({
        flowData: null,
      })),
    }),
  );
  document.cookie = "justDeletedAccount=justDeletedAccount; max-age=0";

  const ComposedDashboard = composeStory(LandingNonUs, Meta);
  render(<ComposedDashboard />);

  const alert = screen.queryByRole("alert");

  expect(alert).not.toBeInTheDocument();
});

it("shows a confirmaton message if the user has just deleted their account", () => {
  global.fetch = jest.fn().mockImplementation(() =>
    Promise.resolve({
      success: true,
      json: jest.fn(() => ({
        flowData: null,
      })),
    }),
  );
  document.cookie = "justDeletedAccount=justDeletedAccount";

  const ComposedDashboard = composeStory(LandingNonUs, Meta);
  render(<ComposedDashboard />);

  const alert = screen.getByRole("alert");
  const confirmationMessage = within(alert).getByText(
    "Your ⁨Monitor⁩ account is now deleted.",
  );

  expect(alert).toBeInTheDocument();
  expect(confirmationMessage).toBeInTheDocument();
});

it("hides the 'account deletion' confirmation message when the user dismisses it", async () => {
  global.fetch = jest.fn().mockImplementation(() =>
    Promise.resolve({
      success: true,
      json: jest.fn(() => ({
        flowData: null,
      })),
    }),
  );
  const user = userEvent.setup();
  document.cookie = "justDeletedAccount=justDeletedAccount";

  const ComposedDashboard = composeStory(LandingNonUs, Meta);
  render(<ComposedDashboard />);

  const alert = screen.getByRole("alert");
  const dismissButton = within(alert).getByRole("button", { name: "Dismiss" });
  await user.click(dismissButton);

  expect(alert).not.toBeInTheDocument();
});
