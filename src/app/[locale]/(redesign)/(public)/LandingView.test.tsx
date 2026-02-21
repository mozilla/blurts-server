/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { it, expect, vi, beforeEach, type MockedFunction } from "vitest";
import { composeStory } from "@storybook/react";
import { act, render, screen, within } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { axe } from "vitest-axe";
import { signIn, useSession } from "next-auth/react";
import { useTelemetry } from "../../../hooks/useTelemetry";
import Meta, { Landing, LandingFr, LandingDe } from "./LandingView.stories";
import { deleteAllCookies } from "../../../functions/client/deleteAllCookies";
import { mockIsIntersecting } from "react-intersection-observer/test-utils";

vi.mock("next-auth/react", () => {
  return {
    signIn: vi.fn(),
    useSession: vi.fn(() => {
      return {};
    }),
  };
});
vi.mock("next/navigation", () => ({
  useSearchParams: () => ({
    toString: vi.fn(),
  }),
}));

vi.mock("../../../hooks/useTelemetry");
beforeEach(() => {
  // For reasons that are unclear to me, the mock implementation defind in the
  // call to `vi.mock` above forgets the implementation. I've spent way too
  // long debugging that already, so I'm settling for this :(
  const mockedUseSession = useSession as MockedFunction<typeof useSession>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  mockedUseSession.mockReturnValue({} as any);

  // Make the rebrand announcement banner show up by default
  deleteAllCookies();
});

it("passes the axe accessibility test suite", async () => {
  const ComposedDashboard = composeStory(Landing, Meta);
  const { container } = render(<ComposedDashboard />);
  expect(await axe(container)).toHaveNoViolations();
}, 10_000);

it("passes the user's email address to the identity provider", async () => {
  const user = userEvent.setup();

  const ComposedDashboard = composeStory(Landing, Meta);
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

it("sends telemetry when a free scan CTA is shown in the viewport", async () => {
  const mockedRecord = useTelemetry();
  const ComposedDashboard = composeStory(Landing, Meta);
  render(<ComposedDashboard />);

  // jsdom will complain about not being able to navigate to a different page
  // after clicking the link; suppress that error, as it's not relevant to the test:
  vi.spyOn(console, "error").mockImplementation(() => undefined);

  // The useViewTelemetry ref is attached to the form, not the button
  const submitButton = screen.getAllByRole("button", {
    name: "Get free scan",
  });
  const form = submitButton[0].closest("form");
  expect(form).toBeInTheDocument();

  // Trigger intersection on the form element
  await act(async () => {
    mockIsIntersecting(form!, true);
  });

  expect(mockedRecord).toHaveBeenCalledWith(
    "ctaButton",
    "view",
    expect.objectContaining({ button_id: "clicked_get_scan_header" }),
  );
});

it("does not show a 'Sign In' button in the header if the user is signed in", () => {
  const mockedUseSession = useSession as MockedFunction<typeof useSession>;
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

  const ComposedDashboard = composeStory(Landing, Meta);
  render(<ComposedDashboard />);

  const signInButton = screen.queryByRole("button", {
    name: "Sign In",
  });

  expect(signInButton).not.toBeInTheDocument();
});

it("shows a 'Sign In' button in the header if the user is not signed in", async () => {
  const ComposedDashboard = composeStory(Landing, Meta);
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
  const ComposedDashboard = composeStory(Landing, Meta);
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
  const ComposedDashboard = composeStory(Landing, Meta);
  render(<ComposedDashboard />);
  const quote = screen.getByText(
    "Data breaches happen every 11 minutes, exposing your private information — but don’t worry, we can help.",
  );
  expect(quote).toBeInTheDocument();
});

it("shows the scanning for exposures illustration in the fix your exposures section", () => {
  const ComposedDashboard = composeStory(Landing, Meta);
  render(<ComposedDashboard />);

  const scanningForExposuresIllustration = screen.getByTestId(
    "scanning-for-exposures-image",
  );
  expect(scanningForExposuresIllustration).toBeInTheDocument();
});

it("can initiate sign in from the Here's How We Help section", async () => {
  const ComposedDashboard = composeStory(Landing, Meta);
  render(<ComposedDashboard />);

  const user = userEvent.setup();

  const signInButton = screen.getByRole("button", {
    name: "Sign up for breach alerts",
  });
  await user.click(signInButton);

  expect(signIn).toHaveBeenCalledTimes(1);
});

it("shows the german scanning for exposures illustration", () => {
  const ComposedDashboard = composeStory(LandingDe, Meta);
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
  const ComposedDashboard = composeStory(LandingFr, Meta);
  render(<ComposedDashboard />);
  const scanningForExposuresIllustration = screen.getByTestId(
    "scanning-for-exposures-image",
  );
  expect(scanningForExposuresIllustration).toHaveAttribute(
    "data-country-code",
    "fr",
  );
});

it("does not show a confirmaton message if the user has just deleted their account", () => {
  global.fetch = vi.fn().mockImplementation(() =>
    Promise.resolve({
      success: true,
      json: vi.fn(() => ({
        flowData: null,
      })),
    }),
  );
  document.cookie = "justDeletedAccount=justDeletedAccount; max-age=0";

  const ComposedDashboard = composeStory(Landing, Meta);
  render(<ComposedDashboard />);

  const alert = screen.queryByRole("alert");

  expect(alert).not.toBeInTheDocument();
});

it("shows a confirmaton message if the user has just deleted their account", () => {
  global.fetch = vi.fn().mockImplementation(() =>
    Promise.resolve({
      success: true,
      json: vi.fn(() => ({
        flowData: null,
      })),
    }),
  );
  document.cookie = "justDeletedAccount=justDeletedAccount";

  const ComposedDashboard = composeStory(Landing, Meta);
  render(<ComposedDashboard />);

  const alert = screen.getByRole("alert");
  const confirmationMessage = within(alert).getByText(
    "Your ⁨Monitor⁩ account is now deleted.",
  );

  expect(alert).toBeInTheDocument();
  expect(confirmationMessage).toBeInTheDocument();
});

it("hides the 'account deletion' confirmation message when the user dismisses it", async () => {
  global.fetch = vi.fn().mockImplementation(() =>
    Promise.resolve({
      success: true,
      json: vi.fn(() => ({
        flowData: null,
      })),
    }),
  );
  const user = userEvent.setup();
  document.cookie = "justDeletedAccount=justDeletedAccount";

  const ComposedDashboard = composeStory(Landing, Meta);
  render(<ComposedDashboard />);

  const alert = screen.getByRole("alert");
  const dismissButton = within(alert).getByRole("button", { name: "Dismiss" });
  await user.click(dismissButton);

  expect(alert).not.toBeInTheDocument();
});

it("opens and closes an FAQ accordion item", async () => {
  const user = userEvent.setup();
  const ComposedDashboard = composeStory(Landing, Meta);
  render(<ComposedDashboard />);
  const faqQuestion = screen.getByRole("button", {
    name: new RegExp("What exactly is a data breach?"),
  });
  await user.click(faqQuestion);
  const faqAnswer = screen.getByText(
    "A data breach happens when personal or private information gets exposed, stolen or copied without permission.",
    { exact: false },
  );
  expect(faqAnswer).toHaveAttribute("aria-hidden", "false");
  await user.click(faqQuestion);
  expect(faqAnswer).toHaveAttribute("aria-hidden", "true");
});

it("only opens one FAQ at a time", async () => {
  const user = userEvent.setup();
  const ComposedDashboard = composeStory(Landing, Meta);
  render(<ComposedDashboard />);
  const faqQuestion1 = screen.getByRole("button", {
    // Partial match to avoid the CloseIcon svg
    name: new RegExp("What exactly is a data breach?"),
  });
  await user.click(faqQuestion1);
  const faqAnswer1 = screen.getByText(
    "A data breach happens when personal or private information gets exposed, stolen or copied without permission.",
    { exact: false },
  );
  expect(faqAnswer1).toHaveAttribute("aria-hidden", "false");
  const faqQuestion2 = screen.getByRole("button", {
    // Partial match to avoid the CloseIcon svg
    name: new RegExp(
      "I just found out I’m in a data breach. What do I do next?",
    ),
  });
  await user.click(faqQuestion2);
  expect(faqAnswer1).toHaveAttribute("aria-hidden", "true");
});

it("opens the see all FAQ link into a new page", async () => {
  const user = userEvent.setup();
  const ComposedDashboard = composeStory(Landing, Meta);
  render(<ComposedDashboard />);

  const seeAllFaqBtn = screen.getByRole("link", { name: "See all FAQs" });
  await user.click(seeAllFaqBtn);
  expect(seeAllFaqBtn).toHaveAttribute("target", "_blank");

  // jsdom will complain about not being able to navigate to a different page
  // after clicking the link; suppress that error, as it's not relevant to the
  // test:
  vi.spyOn(console, "error").mockImplementationOnce(() => undefined);
});
