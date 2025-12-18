/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { it, expect } from "@jest/globals";
import { composeStory } from "@storybook/react";
import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";
import Meta, { HowItWorks } from "./HowItWorksView.stories";
import { userEvent } from "@testing-library/user-event";
import { useSession } from "next-auth/react";
import { deleteAllCookies } from "../../../../functions/client/deleteAllCookies";
import { useTelemetry as useTelemetryImported } from "../../../../hooks/useTelemetry";

jest.mock("next-auth/react", () => {
  return {
    signIn: jest.fn(),
    useSession: jest.fn(() => {
      return {};
    }),
  };
});

jest.mock("../../../../hooks/useTelemetry");
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

describe("How it works page", () => {
  it("passes the axe accessibility test suite", async () => {
    const ComposedPage = composeStory(HowItWorks, Meta);
    const { container } = render(<ComposedPage />);
    expect(await axe(container)).toHaveNoViolations();
  }, 10_000);

  it("Free Scan button enters user into account.mozilla.com", async () => {
    const mockedRecord = useTelemetry();
    const ComposedPage = composeStory(HowItWorks, Meta);
    render(<ComposedPage />);

    const user = userEvent.setup();

    const [getFreeScanBtn1, getFreeScanBtn2] = screen.getAllByRole("link", {
      name: "Get free scan",
    });

    expect(getFreeScanBtn1).toBeInTheDocument();
    expect(getFreeScanBtn2).toBeInTheDocument();
    // jsdom will complain about not being able to navigate to a different page
    // after clicking the link; suppress that error, as it's not relevant to the
    // test:
    jest.spyOn(console, "error").mockImplementation(() => undefined);

    await user.click(getFreeScanBtn1);
    expect(mockedRecord).toHaveBeenCalledWith(
      "ctaButton",
      "click",
      expect.objectContaining({ button_id: "free_scan_first" }),
    );

    await user.click(getFreeScanBtn2);
    expect(mockedRecord).toHaveBeenCalledWith(
      "ctaButton",
      "click",
      expect.objectContaining({ button_id: "free_scan_second" }),
    );
  });

  it("CTA input in footer section shows correct placeholder text", () => {
    const ComposedPage = composeStory(HowItWorks, Meta);
    render(<ComposedPage />);

    const getFreeScanInputField = screen.getByTestId("signup-form-input");

    expect(getFreeScanInputField).toBeInTheDocument();
    expect(getFreeScanInputField).toHaveAttribute(
      "placeholder",
      "example@example.com",
    );
  });
});
