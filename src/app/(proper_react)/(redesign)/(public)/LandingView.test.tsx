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
  within,
} from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { axe } from "jest-axe";
import { signIn, useSession } from "next-auth/react";
import { useTelemetry } from "../../../hooks/useTelemetry";
import Meta, {
  LandingNonUs,
  LandingNonUsDe,
  LandingNonUsFr,
  LandingUs,
  LandingUsScanLimit,
} from "./LandingView.stories";

jest.mock("next-auth/react", () => {
  return {
    signIn: jest.fn(),
    useSession: jest.fn(() => {
      return {};
    }),
  };
});
jest.mock("../../../hooks/useTelemetry");

beforeEach(() => {
  // For reasons that are unclear to me, the mock implementation defind in the
  // call to `jest.mock` above forgets the implementation. I've spent way too
  // long debugging that already, so I'm settling for this :(
  const mockedUseSession = useSession as jest.Mock;
  mockedUseSession.mockReturnValue({});

  // Delete all cookies, to make the rebrand announcement banner show up by
  // default (I hate the document.cookie API ¬_¬):
  const cookieParts = document.cookie.split(";");
  const cookieNames = cookieParts.map((part) => part.split("=")[0]);
  cookieNames.forEach((cookieName) => {
    document.cookie = `${cookieName}=; Thu, 01 Jan 1970 00:00:00 GMT`;
  });
});

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
      },
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

  it("displays a banner announcing the rebrand to 'Mozilla Monitor' by default", () => {
    const ComposedDashboard = composeStory(LandingNonUs, Meta);
    render(<ComposedDashboard />);

    const rebrandAnnouncement = screen.getByText(
      "New name, look and even more ways to",
      { exact: false },
    );

    expect(rebrandAnnouncement).toBeInTheDocument();
  });

  it("hides the banner announcing the rebrand to 'Mozilla Monitor' after clicking the dismiss button", async () => {
    const ComposedDashboard = composeStory(LandingNonUs, Meta);
    render(<ComposedDashboard />);

    const rebrandAnnouncement = screen
      .getAllByRole("complementary")
      .find((el) =>
        el.textContent?.includes(
          "⁨Mozilla Monitor⁩: New name, look and even more ways to reclaim your privacy.",
        ),
      )!;
    const dismissButton = within(rebrandAnnouncement).getByRole("button", {
      name: "OK",
    });

    const user = userEvent.setup();
    await user.click(dismissButton);

    expect(rebrandAnnouncement).not.toBeInTheDocument();
  });

  it("counts how often people close the banner announcing the rebrand to `'Mozilla Monitor'", async () => {
    const mockedRecord = useTelemetry();
    const ComposedDashboard = composeStory(LandingNonUs, Meta);
    render(<ComposedDashboard />);

    const rebrandAnnouncement = screen.getByText(
      "New name, look and even more ways to",
      { exact: false },
    );
    const dismissButton = within(rebrandAnnouncement.parentElement!).getByRole(
      "button",
      { name: "OK" },
    );

    const user = userEvent.setup();
    await user.click(dismissButton);

    expect(mockedRecord).toHaveBeenCalledWith(
      "button",
      "click",
      expect.objectContaining({ button_id: "rebrand_announcement_dismiss" }),
    );
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

  it("counts the number of clicks on the pricing table billing period toggle", async () => {
    const mockedRecord = useTelemetry();
    const ComposedDashboard = composeStory(LandingUs, Meta);
    render(<ComposedDashboard />);

    const user = userEvent.setup();
    const pricingTable = screen.getByRole("grid");
    const monthlyToggle = getByRole(pricingTable, "radio", { name: "Monthly" });
    const yearlyToggle = getByRole(pricingTable, "radio", { name: "Yearly" });

    await user.click(monthlyToggle);
    expect(mockedRecord).toHaveBeenCalledWith(
      "button",
      "click",
      expect.objectContaining({
        button_id: "selected_monthly_plan",
      }),
    );

    await user.click(yearlyToggle);
    expect(mockedRecord).toHaveBeenCalledWith(
      "button",
      "click",
      expect.objectContaining({
        button_id: "selected_yearly_plan",
      }),
    );
  });

  it("counts the number of clicks on the pricing table free tier button", async () => {
    const mockedRecord = useTelemetry();
    const ComposedDashboard = composeStory(LandingUs, Meta);
    render(<ComposedDashboard />);

    const user = userEvent.setup();
    const pricingTable = screen.getByRole("grid");
    const freeButton = getByRole(pricingTable, "button", {
      name: "Start free monitoring",
    });

    await user.click(freeButton);
    expect(mockedRecord).toHaveBeenCalledWith(
      "ctaButton",
      "click",
      expect.objectContaining({
        button_id: "clicked_free_pricing_grid",
      }),
    );
  });

  it("counts the number of clicks on the pricing table upsell button", async () => {
    const mockedRecord = useTelemetry();
    const ComposedDashboard = composeStory(LandingUs, Meta);
    render(<ComposedDashboard />);

    const user = userEvent.setup();
    const pricingTable = screen.getByRole("grid");
    const monthlyToggle = getByRole(pricingTable, "radio", { name: "Monthly" });
    const upsellButton = getByRole(pricingTable, "link", {
      name: "Get data removal",
    });
    // jsdom will complain about not being able to navigate to a different page
    // after clicking the link; suppress that error, as it's not relevant to the
    // test:
    jest
      .spyOn(console, "error")
      .mockImplementationOnce(() => undefined)
      .mockImplementationOnce(() => undefined);

    await user.click(upsellButton);
    expect(mockedRecord).toHaveBeenCalledWith(
      "upgradeIntent",
      "click",
      expect.objectContaining({
        button_id: "purchase_yearly_landing_page",
      }),
    );

    await user.click(monthlyToggle);
    await user.click(upsellButton);
    expect(mockedRecord).toHaveBeenCalledWith(
      "upgradeIntent",
      "click",
      expect.objectContaining({
        button_id: "purchase_monthly_landing_page",
      }),
    );
  });

  it("counts the number of clicks on the pricing card billing period toggle", async () => {
    const mockedRecord = useTelemetry();
    const ComposedDashboard = composeStory(LandingUs, Meta);
    render(<ComposedDashboard />);

    const user = userEvent.setup();
    const cards = screen.getAllByRole("group");
    const premiumCard = cards[0];
    const monthlyToggle = getByRole(premiumCard, "radio", { name: "Monthly" });
    const yearlyToggle = getByRole(premiumCard, "radio", { name: "Yearly" });

    await user.click(monthlyToggle);
    expect(mockedRecord).toHaveBeenCalledWith(
      "button",
      "click",
      expect.objectContaining({
        button_id: "selected_monthly_plan",
      }),
    );

    await user.click(yearlyToggle);
    expect(mockedRecord).toHaveBeenCalledWith(
      "button",
      "click",
      expect.objectContaining({
        button_id: "selected_yearly_plan",
      }),
    );
  });

  it("counts the number of clicks on the pricing card upsell button", async () => {
    const mockedRecord = useTelemetry();
    const ComposedDashboard = composeStory(LandingUs, Meta);
    render(<ComposedDashboard />);

    const user = userEvent.setup();
    const cards = screen.getAllByRole("group");
    const premiumCard = cards[0];
    const upsellButton = getByRole(premiumCard, "link", {
      name: "Get data removal",
    });
    const monthlyToggle = getByRole(premiumCard, "radio", { name: "Monthly" });
    // jsdom will complain about not being able to navigate to a different page
    // after clicking the link; suppress that error, as it's not relevant to the
    // test:
    jest
      .spyOn(console, "error")
      .mockImplementationOnce(() => undefined)
      .mockImplementationOnce(() => undefined);

    await user.click(upsellButton);
    expect(mockedRecord).toHaveBeenCalledWith(
      "upgradeIntent",
      "click",
      expect.objectContaining({
        button_id: "purchase_yearly_landing_page",
      }),
    );

    await user.click(monthlyToggle);
    await user.click(upsellButton);
    expect(mockedRecord).toHaveBeenCalledWith(
      "upgradeIntent",
      "click",
      expect.objectContaining({
        button_id: "purchase_monthly_landing_page",
      }),
    );
  });

  it("counts the number of clicks on the pricing card free button", async () => {
    const mockedRecord = useTelemetry();
    const ComposedDashboard = composeStory(LandingUs, Meta);
    render(<ComposedDashboard />);

    const user = userEvent.setup();
    const cards = screen.getAllByRole("group");
    const freeCard = cards[1];
    const freeButton = getByRole(freeCard, "button", {
      name: "Start free monitoring",
    });

    await user.click(freeButton);
    expect(mockedRecord).toHaveBeenCalledWith(
      "ctaButton",
      "click",
      expect.objectContaining({
        button_id: "clicked_free_pricing_grid",
      }),
    );
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
    const waitlistCta = screen.getAllByRole("link", {
      name: "Join waitlist",
    });
    // jsdom will complain about not being able to navigate to a different page
    // after clicking the link; suppress that error, as it's not relevant to the
    // test:
    jest.spyOn(console, "error").mockImplementationOnce(() => undefined);

    await user.click(waitlistCta[0]);

    expect(waitlistCta[0]).toHaveAttribute(
      "href",
      "https://www.mozilla.org/products/monitor/waitlist-scan/",
    );
  });

  it("opens and closes an FAQ accordion item", async () => {
    const user = userEvent.setup();
    const ComposedDashboard = composeStory(LandingUs, Meta);
    render(<ComposedDashboard />);
    const faqQuestion = screen.getByRole("button", {
      name: new RegExp("What kinds of websites sell my personal information?"),
    });
    await user.click(faqQuestion);
    const faqAnswer = screen.getByText(
      "Certain websites are in the business of collecting and selling people’s personal information without their consent, which is unfortunately legal in the US.",
      { exact: false },
    );
    expect(faqAnswer).toHaveAttribute("aria-hidden", "false");
    await user.click(faqQuestion);
    expect(faqAnswer).toHaveAttribute("aria-hidden", "true");
  });

  it("only opens one FAQ at a time", async () => {
    const user = userEvent.setup();
    const ComposedDashboard = composeStory(LandingUs, Meta);
    render(<ComposedDashboard />);
    const faqQuestion1 = screen.getByRole("button", {
      // Partial match to avoid the CloseIcon svg
      name: new RegExp("What kinds of websites sell my personal information?"),
    });
    await user.click(faqQuestion1);
    const faqAnswer1 = screen.getByText(
      "Certain websites are in the business of collecting and selling people’s personal information without their consent, which is unfortunately legal in the US.",
      { exact: false },
    );
    expect(faqAnswer1).toHaveAttribute("aria-hidden", "false");
    const faqQuestion2 = screen.getByRole("button", {
      // Partial match to avoid the CloseIcon svg
      name: new RegExp("How does continuous data removal work?"),
    });
    await user.click(faqQuestion2);
    expect(faqAnswer1).toHaveAttribute("aria-hidden", "true");
  });

  it("opens the see all FAQ link into a new page", async () => {
    const user = userEvent.setup();
    const ComposedDashboard = composeStory(LandingUs, Meta);
    render(<ComposedDashboard />);

    const seeAllFaqBtn = screen.getByRole("link", { name: "See all FAQs" });
    await user.click(seeAllFaqBtn);
    expect(seeAllFaqBtn).toHaveAttribute("target", "_blank");

    // jsdom will complain about not being able to navigate to a different page
    // after clicking the link; suppress that error, as it's not relevant to the
    // test:
    jest.spyOn(console, "error").mockImplementationOnce(() => undefined);
  });
});

it("does not show a confirmaton message if the user has just deleted their account", () => {
  document.cookie = "justDeletedAccount=justDeletedAccount; max-age=0";

  const ComposedDashboard = composeStory(LandingNonUs, Meta);
  render(<ComposedDashboard />);

  const alert = screen.queryByRole("alert");

  expect(alert).not.toBeInTheDocument();
});

it("shows a confirmaton message if the user has just deleted their account", () => {
  document.cookie = "justDeletedAccount=justDeletedAccount";

  const ComposedDashboard = composeStory(LandingNonUs, Meta);
  render(<ComposedDashboard />);

  const alert = screen.getByRole("alert");
  const confirmationMessage = within(alert).getByText(
    "Your ⁨Monitor⁩ account is now permanently deleted.",
  );

  expect(alert).toBeInTheDocument();
  expect(confirmationMessage).toBeInTheDocument();
});

it("hides the 'account deletion' confirmation message when the user dismisses it", async () => {
  const user = userEvent.setup();
  document.cookie = "justDeletedAccount=justDeletedAccount";

  const ComposedDashboard = composeStory(LandingNonUs, Meta);
  render(<ComposedDashboard />);

  const alert = screen.getByRole("alert");
  const dismissButton = within(alert).getByRole("button", { name: "Dismiss" });
  await user.click(dismissButton);

  expect(alert).not.toBeInTheDocument();
});
