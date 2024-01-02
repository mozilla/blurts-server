/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { it, expect } from "@jest/globals";
import { composeStory } from "@storybook/react";
import {
  getAllByRole,
  getByRole,
  getByText,
  queryByRole,
  queryByText,
  render,
  screen,
} from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { axe } from "jest-axe";
import { signIn } from "next-auth/react";
import Meta, {
  LandingNonUs,
  LandingNonUsDe,
  LandingNonUsFr,
  LandingUs,
  LandingUsScanLimit,
} from "./LandingView.stories";

jest.mock("next-auth/react");
jest.mock("../../../hooks/useTelemetry");

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

    const inputField = screen.getAllByLabelText(
      "Enter your email address to check for data breach exposures.",
    );
    await user.type(inputField[0], "mail@example.com");

    const submitButton = screen.getAllByRole("button", {
      name: "Get free scan",
    });
    await user.click(submitButton[0]);

    expect(signIn).toHaveBeenCalledTimes(1);
    expect(signIn).toHaveBeenCalledWith("fxa", expect.any(Object), {
      email: "mail@example.com",
    });
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
    // We limit our queries to the pricing table, so as not to match similar
    // elements that are also present in the pricing _cards_, i.e. the elements
    // shown on small screens:
    const pricingTable = screen.getByRole("grid");

    expect(queryByRole(pricingTable, "dialog")).not.toBeInTheDocument();

    const moreInfoButton = getAllByRole(pricingTable, "button", {
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
    // We limit our queries to the pricing table, so as not to match similar
    // elements that are also present in the pricing _cards_, i.e. the elements
    // shown on small screens:
    const pricingTable = screen.getByRole("grid");

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
    expect(getByText(pricingTable, /Save (.+?)%/)).toBeInTheDocument();

    const yearlyToggle = getByRole(pricingTable, "radio", { name: "Yearly" });
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
    expect(queryByText(pricingTable, /Save (.+?)%/)).not.toBeInTheDocument();
  });

  it("can switch from the yearly to the monthly plan with the mouse", async () => {
    const user = userEvent.setup();

    const ComposedDashboard = composeStory(LandingUs, Meta);
    render(<ComposedDashboard />);
    // We limit our queries to the pricing table, so as not to match similar
    // elements that are also present in the pricing _cards_, i.e. the elements
    // shown on small screens:
    const pricingTable = screen.getByRole("grid");

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
    expect(getByText(pricingTable, /Save (.+?)%/)).toBeInTheDocument();

    const monthlyToggle = getByRole(pricingTable, "radio", { name: "Monthly" });
    await user.click(monthlyToggle);

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
    expect(queryByText(pricingTable, /Save (.+?)%/)).not.toBeInTheDocument();
  });

  it("switching to the monthly plan in portrait mode is preserved when changing to landscape mode", async () => {
    const user = userEvent.setup();

    const ComposedDashboard = composeStory(LandingUs, Meta);
    render(<ComposedDashboard />);
    const pricingTable = screen.getByRole("grid");
    const cards = screen.getAllByRole("group");
    const plusCard = cards[0];

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
    expect(getByText(plusCard, /Save (.+?)%/)).toBeInTheDocument();
    expect(getByText(pricingTable, /Save (.+?)%/)).toBeInTheDocument();

    const monthlyToggle = getByRole(plusCard, "radio", { name: "Monthly" });
    await user.click(monthlyToggle);

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
    expect(queryByText(plusCard, /Save (.+?)%/)).not.toBeInTheDocument();
    expect(queryByText(pricingTable, /Save (.+?)%/)).not.toBeInTheDocument();
  });

  it("rounds the percentage savings of the yearly plan down (i.e. under- rather than overpromise) to whole numbers", async () => {
    const user = userEvent.setup();

    const ComposedDashboard = composeStory(LandingUs, Meta);
    render(<ComposedDashboard />);
    // We limit our queries to the pricing table, so as not to match similar
    // elements that are also present in the pricing _cards_, i.e. the elements
    // shown on small screens:
    const pricingTable = screen.getByRole("grid");

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
    const savingsEl = getByText(pricingTable, /Save (.+?)%/);
    // Regular expressions:
    //
    //   \$     Starts with the character `$`,
    //
    //   (.+?)  followed by one or more (`+`) arbitrary characters (`.`), until
    //          the next part of the regular expression matches…
    //
    //   \/mo.  …which consists of the characters `/mo.`.
    //
    // All that combines to a string like "$13.37/mo.".
    const priceRegex = /\$(.+?)\/mo./;
    const yearlyPriceEl = getByText(pricingTable, priceRegex);
    const yearlyPrice = Number.parseFloat(
      yearlyPriceEl.textContent!.split("$")[1].split("/")[0],
    );
    const monthlyToggle = getByRole(pricingTable, "radio", { name: "Monthly" });
    await user.click(monthlyToggle);
    const monthlyPriceEl = getByText(pricingTable, priceRegex);
    const monthlyPrice = Number.parseFloat(
      monthlyPriceEl.textContent!.split("$")[1].split("/")[0],
    );

    expect(savingsEl.textContent).not.toMatch(".");
    expect(
      Number.parseInt(
        savingsEl
          .textContent!.split("%")[0]
          .split("Save ")[1]
          // Replace the special characters Fluent inserts around variables:
          .replace("⁨", "")
          .replace("⁩", ""),
        10,
      ),
    ).toBeLessThanOrEqual(((monthlyPrice - yearlyPrice) * 100) / monthlyPrice);
  });

  it("can move to the subscribe button with the keyboard", async () => {
    const user = userEvent.setup();

    const ComposedDashboard = composeStory(LandingUs, Meta);
    render(<ComposedDashboard />);
    // We limit our queries to the pricing table, so as not to match similar
    // elements that are also present in the pricing _cards_, i.e. the elements
    // shown on small screens:
    const pricingTable = screen.getByRole("grid");

    const plusSubscribeButton = getByRole(pricingTable, "link", {
      name: "Get data removal",
    });
    expect(plusSubscribeButton).not.toHaveFocus();

    const yearlyToggle = getByRole(pricingTable, "radio", { name: "Yearly" });
    await user.click(yearlyToggle);
    await user.keyboard("[ArrowRight][ArrowRight]");

    expect(plusSubscribeButton).toHaveFocus();
  });

  it("can initiate sign in from the pricing table", async () => {
    const user = userEvent.setup();

    const ComposedDashboard = composeStory(LandingUs, Meta);
    render(<ComposedDashboard />);
    const pricingTable = screen.getByRole("grid");

    expect(signIn).not.toHaveBeenCalled();

    const yearlyToggle = getByRole(pricingTable, "radio", { name: "Yearly" });
    await user.click(yearlyToggle);
    await user.keyboard("[ArrowLeft][Space]");

    expect(signIn).toHaveBeenCalledTimes(1);
  });

  it("can initiate sign in from the pricing cards", async () => {
    const user = userEvent.setup();

    const ComposedDashboard = composeStory(LandingUs, Meta);
    render(<ComposedDashboard />);
    const cards = screen.getAllByRole("group");
    const freeCard = cards[1];

    expect(signIn).not.toHaveBeenCalled();

    const signInButton = getByRole(freeCard, "button", {
      name: "Start free monitoring",
    });
    await user.click(signInButton);

    expect(signIn).toHaveBeenCalledTimes(1);
  });

  it("shows the data brokers quote", () => {
    const ComposedDashboard = composeStory(LandingUs, Meta);
    render(<ComposedDashboard />);
    const quote = screen.getByText(
      "There’s a $240 billion industry of data brokers selling your private information for profit. It’s time to take back your privacy.",
    );
    expect(quote).toBeInTheDocument();
  });

  it("shows the progress card illustration in the fix your exposures section", () => {
    const ComposedDashboard = composeStory(LandingUs, Meta);
    render(<ComposedDashboard />);

    const progressCardIllustration = screen.getByTestId("progress-card-image");
    expect(progressCardIllustration).toBeInTheDocument();
  });

  it("shows the scan limit and waitlist cta when it hits the threshold", () => {
    const ComposedDashboard = composeStory(LandingUsScanLimit, Meta);
    render(<ComposedDashboard />);

    const limitDescription = screen.getByText(
      "We’ve reached the maximum scans for the month. Enter your email to get on our waitlist.",
    );
    expect(limitDescription).toBeInTheDocument();
  });

  it("opens the waitlist page when the join waitlist cta is selected", async () => {
    const user = userEvent.setup();
    const ComposedDashboard = composeStory(LandingUsScanLimit, Meta);
    render(<ComposedDashboard />);
    const waitlistCta = screen.getByRole("button", {
      name: "Join waitlist",
    });
    await user.click(waitlistCta);

    expect(waitlistCta).toHaveAttribute(
      "href",
      "https://www.mozilla.org/products/monitor/waitlist-scan/",
    );
  });
});
