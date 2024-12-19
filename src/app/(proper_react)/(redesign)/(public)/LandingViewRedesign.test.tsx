/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { it, expect } from "@jest/globals";
import { composeStory } from "@storybook/react";
import { render, screen, within } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { axe } from "jest-axe";
import { signIn, useSession } from "next-auth/react";
import { useTelemetry } from "../../../hooks/useTelemetry";
import Meta, {
  LandingRedesignNonUs,
  LandingRedesignUs,
} from "./LandingViewRedesign.stories";
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
  usePathname: jest.fn(),
}));

jest.mock("../../../hooks/useTelemetry");

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
    const ComposedLanding = composeStory(LandingRedesignNonUs, Meta);
    const { container } = render(<ComposedLanding />);
    expect(await axe(container)).toHaveNoViolations();
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

    const ComposedLanding = composeStory(LandingRedesignNonUs, Meta);
    render(<ComposedLanding />);

    const signInButton = screen.queryByRole("button", {
      name: "Sign In",
    });

    expect(signInButton).not.toBeInTheDocument();
  });

  it("shows a 'Sign In' button in the header if the user is not signed in", async () => {
    const ComposedLanding = composeStory(LandingRedesignNonUs, Meta);
    render(<ComposedLanding />);

    const user = userEvent.setup();

    const signInButtons = screen.getAllByRole("button", {
      name: "Sign In",
    });
    await user.click(signInButtons[0]);
    await user.click(signInButtons[1]);
    expect(signIn).toHaveBeenCalledTimes(2);
  });

  it("counts the number of clicks on the sign-in button at the top", async () => {
    const mockedRecord = useTelemetry();
    const ComposedLanding = composeStory(LandingRedesignNonUs, Meta);
    render(<ComposedLanding />);

    const user = userEvent.setup();

    const signInButtons = screen.getAllByRole("button", {
      name: "Sign In",
    });
    await user.click(signInButtons[0]);
    await user.click(signInButtons[1]);
    expect(signIn).toHaveBeenCalledTimes(2);

    expect(mockedRecord).toHaveBeenCalledWith(
      "ctaButton",
      "click",
      expect.objectContaining({
        button_id: "sign_in",
      }),
    );
  });
});

describe("When Premium is available", () => {
  it("passes the axe accessibility test suite", async () => {
    const ComposedLanding = composeStory(LandingRedesignUs, Meta);
    const { container } = render(<ComposedLanding />);
    expect(await axe(container)).toHaveNoViolations();
  });

  it.each([
    {
      name: "How it works",
      id: "navbar_how_it_works",
    },
    {
      name: "Pricing",
      id: "navbar_pricing",
    },
    {
      name: "FAQs",
      id: "navbar_faqs",
    },
    {
      name: "Recent data breaches",
      id: "navbar_recent_breaches",
    },
  ])("counts the number of clicks %s link in top navbar", async (link) => {
    const mockedRecord = useTelemetry();
    const ComposedLanding = composeStory(LandingRedesignUs, Meta);
    render(<ComposedLanding />);

    const user = userEvent.setup();

    const navbarLinks = screen.getAllByRole("link", { name: link.name });
    // jsdom will complain about not being able to navigate to a different page
    // after clicking the link; suppress that error, as it's not relevant to the
    // test:
    jest
      .spyOn(console, "error")
      .mockImplementationOnce(() => undefined)
      .mockImplementationOnce(() => undefined);
    await user.click(navbarLinks[0]);
    await user.click(navbarLinks[1]);
    expect(mockedRecord).toHaveBeenNthCalledWith(
      2,
      "link",
      "click",
      expect.objectContaining({
        link_id: link.id,
      }),
    );
  });
});

describe("Account deletion confirmation", () => {
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

    const ComposedLanding = composeStory(LandingRedesignNonUs, Meta);
    render(<ComposedLanding />);

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

    const ComposedLanding = composeStory(LandingRedesignNonUs, Meta);
    render(<ComposedLanding />);

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

    const ComposedLanding = composeStory(LandingRedesignNonUs, Meta);
    render(<ComposedLanding />);

    const alert = screen.getByRole("alert");
    const dismissButton = within(alert).getByRole("button", {
      name: "Dismiss",
    });
    await user.click(dismissButton);

    expect(alert).not.toBeInTheDocument();
  });
});
