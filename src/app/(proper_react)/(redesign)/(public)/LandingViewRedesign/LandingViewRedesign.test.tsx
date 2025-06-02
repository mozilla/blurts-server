/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { it, expect } from "@jest/globals";
import { composeStory } from "@storybook/react";
import {
  getByRole,
  getByText,
  queryByText,
  render,
  screen,
  waitFor,
  within,
} from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { axe } from "jest-axe";
import { signIn, useSession } from "next-auth/react";
import Meta, {
  LandingRedesignUs,
  LandingRedesignUsDisableOneRepScans,
  LandingRedesignUsScanLimit,
  LandingRedesignUsScanLimitWithPrivacyProductBundle,
  LandingRedesignUsWithPrivacyProductBundle,
} from "./LandingViewRedesign.stories";
import { useTelemetry } from "../../../../hooks/useTelemetry";
import { deleteAllCookies } from "../../../../functions/client/deleteAllCookies";
import { Cookies } from "react-cookie";

jest.mock("next-auth/react", () => {
  return {
    signIn: jest.fn(),
    useSession: jest.fn(() => {
      return {};
    }),
  };
});

jest.mock("next/navigation", () => {
  return {
    useSearchParams: () => ({
      toString: jest.fn(),
    }),
    usePathname: () => "/",
  };
});

jest.mock("../../../../hooks/useTelemetry");

beforeEach(() => {
  // For reasons that are unclear to me, the mock implementation defind in the
  // call to `jest.mock` above forgets the implementation. I've spent way too
  // long debugging that already, so I'm settling for this :(
  const mockedUseSession = useSession as jest.Mock;
  mockedUseSession.mockReturnValue({});

  // Make the rebrand announcement banner show up by default
  deleteAllCookies();
});

describe("Navigation and authentication", () => {
  it("passes the axe accessibility test suite", async () => {
    const ComposedLanding = composeStory(LandingRedesignUs, Meta);
    const { container } = render(<ComposedLanding />);
    expect(await axe(container)).toHaveNoViolations();
  }, 10_000);

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

    const ComposedLanding = composeStory(LandingRedesignUs, Meta);
    render(<ComposedLanding />);

    const signInButton = screen.queryByRole("button", {
      name: "Sign In",
    });

    expect(signInButton).not.toBeInTheDocument();
  });

  it("shows a 'Sign In' button in the header if the user is not signed in", async () => {
    const ComposedLanding = composeStory(LandingRedesignUs, Meta);
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
    const ComposedLanding = composeStory(LandingRedesignUs, Meta);
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
      // we expect the error to get logged twice (once for each click below)
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

describe("FAQ", () => {
  it.each([
    {
      question: "What kinds of websites sell my personal information?",
      answer:
        "Certain websites are in the business of collecting and selling people’s personal information without their consent, which is unfortunately legal in the US. These sites are called data brokers and they make up a $240 billion dollar industry. They use sophisticated methods to collect personal, financial, location, and even health information, often without your consent or even your knowledge. They’ll sell what they’ve collected to third parties, profiting from your information and leaving you open to violations of your privacy and security.",
    },
    {
      question: "How does continuous data removal work?",
      answer:
        "Every month, we use the information you provided about yourself (name, location and birthdate) to search across ⁨190⁩ data broker sites that sell people’s private information. If we find your data on any of these sites, we initiate the request for removal. This feature is available for ⁨Monitor Plus⁩ users only.",
    },
    {
      question: "What exactly is a data breach?",
      answer:
        "A data breach happens when personal or private information gets exposed, stolen or copied without permission. These security incidents can result from cyber attacks on websites, apps or any database where people’s personal information resides. A data breach can also happen accidentally, like if someone’s login credentials get posted publicly.",
    },
    {
      question: "I just found out I’m in a data breach. What do I do next?",
      answer:
        "Visit ⁨Mozilla Monitor⁩ to learn what to do after a data breach and get guided steps to resolve exposures of your personal info. Hackers rely on people reusing passwords, so it’s important to create strong, unique passwords for all your accounts. Keep your passwords in a safe place that only you have access to; this could be the same place where you store important documents or a password manager.",
    },
    {
      question: "What information gets exposed in data breaches?",
      answer:
        "Not all breaches expose all the same info. It just depends on what hackers can access. Many data breaches expose email addresses and passwords. Others expose more sensitive information such as credit card numbers, PIN numbers, and social security numbers.",
    },
  ])("opens and closes the FAQ accordion item %s", async (item) => {
    const user = userEvent.setup();
    const ComposedDashboard = composeStory(LandingRedesignUs, Meta);
    render(<ComposedDashboard />);
    const faqQuestion = screen.getByRole("button", {
      name: new RegExp(item.question),
    });
    await user.click(faqQuestion);
    const faqAnswer = screen.getByText(item.answer, { exact: false });
    expect(faqAnswer).toHaveAttribute("aria-hidden", "false");
    await user.click(faqQuestion);
    expect(faqAnswer).toHaveAttribute("aria-hidden", "true");
  });

  it("only opens one FAQ at a time", async () => {
    const user = userEvent.setup();
    const ComposedDashboard = composeStory(LandingRedesignUs, Meta);
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

  it("opens the read all FAQ link into a new page", async () => {
    const user = userEvent.setup();
    const ComposedDashboard = composeStory(LandingRedesignUs, Meta);
    render(<ComposedDashboard />);

    const seeAllFaqBtn = screen.getByRole("link", { name: "Read all FAQs" });
    await user.click(seeAllFaqBtn);
    expect(seeAllFaqBtn).toHaveAttribute("target", "_blank");

    // jsdom will complain about not being able to navigate to a different page
    // after clicking the link; suppress that error, as it's not relevant to the
    // test:
    jest.spyOn(console, "error").mockImplementationOnce(() => undefined);
  });
});

describe("Pricing plan", () => {
  it("can switch from the yearly to the monthly plan with the keyboard", async () => {
    const user = userEvent.setup();

    const ComposedDashboard = composeStory(LandingRedesignUs, Meta);
    render(<ComposedDashboard />);
    const plusCard = screen.getByLabelText("Monitor Plus");

    // Regular expressions:
    //
    //   \$     Starts with the character `$`,
    //
    //   (.+?)  followed by one or more (`+`) arbitrary characters (`.`), until
    //          the next part of the regular expression matches…
    //
    // All that combines to a string like "$160.44 total".
    const priceRegex = /\$(.+?) total/;
    expect(getByText(plusCard, priceRegex)).toBeInTheDocument();

    const yearlyToggle = getByRole(plusCard, "radio", { name: "Yearly" });
    await user.click(yearlyToggle);
    await user.keyboard("[ArrowRight][Space]");

    expect(queryByText(plusCard, priceRegex)).not.toBeInTheDocument();
  });

  it("can switch from the yearly to the monthly plan with the mouse", async () => {
    const user = userEvent.setup();

    const ComposedDashboard = composeStory(LandingRedesignUs, Meta);
    render(<ComposedDashboard />);
    const plusCard = screen.getByLabelText("Monitor Plus");

    // Regular expressions:
    //
    //   \$     Starts with the character `$`,
    //
    //   (.+?)  followed by one or more (`+`) arbitrary characters (`.`), until
    //          the next part of the regular expression matches…
    //
    // All that combines to a string like "$160.44 total".
    const priceRegex = /\$(.+?) total/;
    expect(getByText(plusCard, priceRegex)).toBeInTheDocument();

    const monthlyToggle = getByRole(plusCard, "radio", { name: "Monthly" });
    await user.click(monthlyToggle);

    expect(queryByText(plusCard, priceRegex)).not.toBeInTheDocument();
  });

  it("rounds the percentage savings of the yearly plan down (i.e. under- rather than overpromise) to whole numbers", async () => {
    const user = userEvent.setup();

    const ComposedDashboard = composeStory(LandingRedesignUs, Meta);
    render(<ComposedDashboard />);
    const plusCard = screen.getByLabelText("Monitor Plus");

    // Regular expression:
    //
    //   Save   Starts with the characters `Save `,
    //
    //   (.+?)  followed by one or more (`+`) arbitrary characters (`.`), until
    //          the next part of the regular expression matches…
    //
    //   %      …which is a single `%` character.
    //
    // All that combines to a string like "Save 68%".
    const savingsEl = getByText(plusCard, /Save (.+?)%/);
    // Regular expressions:
    //
    //   \$     Starts with the character `$`,
    //
    //   (.+?)  followed by one or more (`+`) arbitrary characters (`.`), until
    //          the next part of the regular expression matches…
    //
    //  \/mo.  …which consists of the characters `/mo`.
    //
    // All that combines to a string like "Save 13.37%".
    const priceRegex = /\$(.+?)\/mo/;
    const yearlyPriceEl = getByText(plusCard, priceRegex);
    const yearlyPrice = Number.parseFloat(
      yearlyPriceEl.textContent!.split("$")[1].split("/")[0],
    );
    const monthlyToggle = getByRole(plusCard, "radio", { name: "Monthly" });
    await user.click(monthlyToggle);
    const monthlyPriceEl = getByText(plusCard, priceRegex);
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

    const ComposedDashboard = composeStory(LandingRedesignUs, Meta);
    render(<ComposedDashboard />);
    const plusCard = screen.getByLabelText("Monitor Plus");

    const plusSubscribeButton = getByRole(plusCard, "link", {
      name: "Get ⁨Monitor Plus⁩",
    });
    expect(plusSubscribeButton).not.toHaveFocus();

    const yearlyToggle = getByRole(plusCard, "radio", { name: "Yearly" });
    await user.click(yearlyToggle);
    await user.keyboard("[Tab]");

    expect(plusSubscribeButton).toHaveFocus();
  });

  it("can initiate sign in from the pricing plan", async () => {
    const user = userEvent.setup();

    const ComposedDashboard = composeStory(LandingRedesignUs, Meta);
    render(<ComposedDashboard />);
    const plusCard = screen.getByLabelText("Monitor Plus");

    expect(signIn).not.toHaveBeenCalled();

    const yearlyToggle = getByRole(plusCard, "radio", { name: "Yearly" });
    await user.click(yearlyToggle);
    await user.keyboard("[Tab][Tab][Space]");

    expect(signIn).toHaveBeenCalledTimes(1);
  });

  it("can initiate sign in from the Monitor (Free) pricing card", async () => {
    const user = userEvent.setup();

    const ComposedDashboard = composeStory(LandingRedesignUs, Meta);
    render(<ComposedDashboard />);
    const freeCard = screen.getByLabelText("Monitor");

    expect(signIn).not.toHaveBeenCalled();

    const signInButton = getByRole(freeCard, "button", {
      name: "Get ⁨Monitor⁩ (Free)",
    });
    await user.click(signInButton);

    expect(signIn).toHaveBeenCalledTimes(1);
  });

  it("counts the number of clicks on the pricing plan billing period toggle", async () => {
    const mockedRecord = useTelemetry();
    const ComposedDashboard = composeStory(LandingRedesignUs, Meta);
    render(<ComposedDashboard />);

    const user = userEvent.setup();
    const plusCard = screen.getByLabelText("Monitor Plus");
    const monthlyToggle = getByRole(plusCard, "radio", { name: "Monthly" });
    const yearlyToggle = getByRole(plusCard, "radio", { name: "Yearly" });

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

  it("counts the number of clicks on the pricing plan free tier button", async () => {
    const mockedRecord = useTelemetry();
    const ComposedDashboard = composeStory(LandingRedesignUs, Meta);
    render(<ComposedDashboard />);

    const user = userEvent.setup();
    const freeCard = screen.getByLabelText("Monitor");
    const freeButton = getByRole(freeCard, "button", {
      name: "Get ⁨Monitor⁩ (Free)",
    });

    await user.click(freeButton);
    expect(mockedRecord).toHaveBeenCalledWith(
      "ctaButton",
      "click",
      expect.objectContaining({
        button_id: "clicked_free_pricing_card",
      }),
    );
  });

  it("counts the number of clicks on the pricing plan upsell button", async () => {
    const mockedRecord = useTelemetry();
    const ComposedDashboard = composeStory(LandingRedesignUs, Meta);
    render(<ComposedDashboard />);

    const user = userEvent.setup();
    const plusCard = screen.getByLabelText("Monitor Plus");
    const monthlyToggle = getByRole(plusCard, "radio", { name: "Monthly" });
    const upsellButton = getByRole(plusCard, "link", {
      name: "Get ⁨Monitor Plus⁩",
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
    const ComposedDashboard = composeStory(LandingRedesignUs, Meta);
    render(<ComposedDashboard />);

    const user = userEvent.setup();
    const plusCard = screen.getByLabelText("Monitor Plus");
    const monthlyToggle = getByRole(plusCard, "radio", { name: "Monthly" });
    const yearlyToggle = getByRole(plusCard, "radio", { name: "Yearly" });

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
    const ComposedDashboard = composeStory(LandingRedesignUs, Meta);
    render(<ComposedDashboard />);

    const user = userEvent.setup();
    const plusCard = screen.getByLabelText("Monitor Plus");
    const upsellButton = getByRole(plusCard, "link", {
      name: "Get ⁨Monitor Plus⁩",
    });
    const monthlyToggle = getByRole(plusCard, "radio", { name: "Monthly" });
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
    const ComposedDashboard = composeStory(LandingRedesignUs, Meta);
    render(<ComposedDashboard />);

    const user = userEvent.setup();
    const freeCard = screen.getByLabelText("Monitor");
    const freeButton = getByRole(freeCard, "button", {
      name: "Get ⁨Monitor⁩ (Free)",
    });

    await user.click(freeButton);
    expect(mockedRecord).toHaveBeenCalledWith(
      "ctaButton",
      "click",
      expect.objectContaining({
        button_id: "clicked_free_pricing_card",
      }),
    );
  });

  it("confirms that the pricing card yearly upsell has the correct link for SubPlat2", async () => {
    const ComposedStory = composeStory(LandingRedesignUs, Meta);
    render(<ComposedStory />);

    const plusCard = screen.getByLabelText("Monitor Plus");
    const upsellButton = getByRole(plusCard, "link", {
      name: "Get ⁨Monitor Plus⁩",
    });
    expect(upsellButton).toHaveAttribute(
      "href",
      "https://accounts.stage.mozaws.net/subscriptions/products/prod_NErZh679W62lai?plan=price_1NvqawKb9q6OnNsLRTnYrtrV&entrypoint=monitor.mozilla.org-monitor-product-page&form_type=button&data_cta_position=pricing&utm_source=product&utm_medium=monitor&utm_campaign=pricing",
    );
  });

  it("confirms that the pricing card monthly upsell has the correct link for SubPlat2", async () => {
    const ComposedStory = composeStory(LandingRedesignUs, Meta);
    render(<ComposedStory />);

    const user = userEvent.setup();
    const plusCard = screen.getByLabelText("Monitor Plus");
    const upsellButton = getByRole(plusCard, "link", {
      name: "Get ⁨Monitor Plus⁩",
    });
    const monthlyToggle = getByRole(plusCard, "radio", { name: "Monthly" });
    // jsdom will complain about not being able to navigate to a different page
    // after clicking the link; suppress that error, as it's not relevant to the
    // test:
    jest.spyOn(console, "error").mockImplementationOnce(() => undefined);
    await user.click(monthlyToggle);

    expect(upsellButton).toHaveAttribute(
      "href",
      "https://accounts.stage.mozaws.net/subscriptions/products/prod_NErZh679W62lai?plan=price_1MUNq0Kb9q6OnNsL4BoJgepf&entrypoint=monitor.mozilla.org-monitor-product-page&form_type=button&data_cta_position=pricing&utm_source=product&utm_medium=monitor&utm_campaign=pricing",
    );
  });

  it("confirms that the pricing card yearly upsell has the correct link with UTM parameters for SubPlat2", async () => {
    const cookies = new Cookies(null);
    cookies.set("attributionsLastTouch", {
      utm_source: "source_last_touch",
      utm_medium: "medium_last_touch",
      utm_campaign: "campaign_last_touch",
    });
    const ComposedStory = composeStory(LandingRedesignUs, Meta);
    render(<ComposedStory />);

    const plusCard = screen.getByLabelText("Monitor Plus");
    const upsellButton = getByRole(plusCard, "link", {
      name: "Get ⁨Monitor Plus⁩",
    });
    expect(upsellButton).toHaveAttribute(
      "href",
      "https://accounts.stage.mozaws.net/subscriptions/products/prod_NErZh679W62lai?plan=price_1NvqawKb9q6OnNsLRTnYrtrV&utm_source=source_last_touch&utm_medium=medium_last_touch&utm_campaign=campaign_last_touch&entrypoint=monitor.mozilla.org-monitor-product-page&form_type=button&data_cta_position=pricing",
    );
  });

  it("confirms that the pricing card yearly upsell has the correct link for SubPlat3", async () => {
    const ComposedStory = composeStory(LandingRedesignUs, Meta);
    render(
      <ComposedStory
        enabledFeatureFlags={["LandingPageRedesign", "SubPlat3"]}
      />,
    );

    const plusCard = screen.getByLabelText("Monitor Plus");
    const upsellButton = getByRole(plusCard, "link", {
      name: "Get ⁨Monitor Plus⁩",
    });
    expect(upsellButton).toHaveAttribute(
      "href",
      "https://payments-next.stage.fxa.nonprod.webservices.mozgcp.net/monitorplusstage/yearly/landing?entrypoint=monitor.mozilla.org-monitor-product-page&form_type=button&data_cta_position=pricing&utm_source=product&utm_medium=monitor&utm_campaign=pricing",
    );
  });

  it("confirms that the pricing card monthly upsell has the correct link for SubPlat3", async () => {
    const ComposedStory = composeStory(LandingRedesignUs, Meta);
    render(
      <ComposedStory
        enabledFeatureFlags={["LandingPageRedesign", "SubPlat3"]}
      />,
    );

    const user = userEvent.setup();
    const plusCard = screen.getByLabelText("Monitor Plus");
    const upsellButton = getByRole(plusCard, "link", {
      name: "Get ⁨Monitor Plus⁩",
    });
    const monthlyToggle = getByRole(plusCard, "radio", { name: "Monthly" });
    // jsdom will complain about not being able to navigate to a different page
    // after clicking the link; suppress that error, as it's not relevant to the
    // test:
    jest.spyOn(console, "error").mockImplementationOnce(() => undefined);
    await user.click(monthlyToggle);

    expect(upsellButton).toHaveAttribute(
      "href",
      "https://payments-next.stage.fxa.nonprod.webservices.mozgcp.net/monitorplusstage/monthly/landing?entrypoint=monitor.mozilla.org-monitor-product-page&form_type=button&data_cta_position=pricing&utm_source=product&utm_medium=monitor&utm_campaign=pricing",
    );
  });

  it("confirms that the pricing card yearly upsell has the correct link with UTM parameters for SubPlat3", async () => {
    const cookies = new Cookies(null);
    cookies.set("attributionsLastTouch", {
      utm_source: "source_last_touch",
      utm_medium: "medium_last_touch",
      utm_campaign: "campaign_last_touch",
    });
    const ComposedStory = composeStory(LandingRedesignUs, Meta);
    render(
      <ComposedStory
        enabledFeatureFlags={["LandingPageRedesign", "SubPlat3"]}
      />,
    );

    const plusCard = screen.getByLabelText("Monitor Plus");
    const upsellButton = getByRole(plusCard, "link", {
      name: "Get ⁨Monitor Plus⁩",
    });
    expect(upsellButton).toHaveAttribute(
      "href",
      "https://payments-next.stage.fxa.nonprod.webservices.mozgcp.net/monitorplusstage/yearly/landing?utm_source=source_last_touch&utm_medium=medium_last_touch&utm_campaign=campaign_last_touch&entrypoint=monitor.mozilla.org-monitor-product-page&form_type=button&data_cta_position=pricing",
    );
  });
});

describe("Privacy product bundle banner", () => {
  it("confirms that the banner CTA has the correct link for SubPlat2", async () => {
    const ComposedStory = composeStory(
      LandingRedesignUsWithPrivacyProductBundle,
      Meta,
    );
    render(<ComposedStory />);

    const upsellLink = screen.getByRole("link", {
      name: "Get year-round protection",
    });
    expect(upsellLink).toHaveAttribute(
      "href",
      "https://accounts.stage.mozaws.net/subscriptions/products/prod_SFb8iVuZIOPREe?plan=price_1RMAopKb9q6OnNsLSGe1vLtt&utm_medium=monitor&utm_source=monitor-product&utm_campaign=landing-page-banner&utm_content=banner-us",
    );
  });

  it("confirms that the banner CTA has the correct link for SubPlat3", async () => {
    const ComposedStory = composeStory(
      LandingRedesignUsWithPrivacyProductBundle,
      Meta,
    );
    render(
      <ComposedStory
        enabledFeatureFlags={[
          "LandingPageRedesign",
          "PrivacyProductsBundle",
          "SubPlat3",
        ]}
      />,
    );

    const upsellLink = screen.getByRole("link", {
      name: "Get year-round protection",
    });
    expect(upsellLink).toHaveAttribute(
      "href",
      "https://payments-next.stage.fxa.nonprod.webservices.mozgcp.net/privacyprotectionplan/yearly/landing?utm_medium=monitor&utm_source=monitor-product&utm_campaign=landing-page-banner&utm_content=banner-us",
    );
  });

  it("counts the number of clicks on the banner CTA", async () => {
    const mockedRecord = useTelemetry();
    const ComposedDashboard = composeStory(
      LandingRedesignUsWithPrivacyProductBundle,
      Meta,
    );
    render(<ComposedDashboard />);

    const user = userEvent.setup();
    const upsellLink = screen.getByRole("link", {
      name: "Get year-round protection",
    });

    // jsdom will complain about not being able to navigate to a different page
    // after clicking the link; suppress that error, as it's not relevant to the
    // test:
    jest.spyOn(console, "error").mockImplementationOnce(() => undefined);

    await user.click(upsellLink);
    expect(mockedRecord).toHaveBeenCalledWith(
      "upgradeIntent",
      "click",
      expect.objectContaining({
        button_id: "purchase_bundle_banner_landing_page",
      }),
    );
  });
});

describe("Pricing plan with bundle", () => {
  it("passes the axe accessibility test suite", async () => {
    const ComposedLanding = composeStory(
      LandingRedesignUsWithPrivacyProductBundle,
      Meta,
    );
    const { container } = render(<ComposedLanding />);
    expect(await axe(container)).toHaveNoViolations();
  }, 10_000);

  it("can switch from the yearly to the monthly plan with the keyboard", async () => {
    const user = userEvent.setup();

    const ComposedDashboard = composeStory(
      LandingRedesignUsWithPrivacyProductBundle,
      Meta,
    );
    render(<ComposedDashboard />);
    const plusCard = screen.getByLabelText("Monitor Plus");

    // Regular expressions:
    //
    //   \$     Starts with the character `$`,
    //
    //   (.+?)  followed by one or more (`+`) arbitrary characters (`.`), until
    //          the next part of the regular expression matches…
    //
    // All that combines to a string like "$160.44 billed yearly".
    const yearlyPriceRegex = /\$(.+?) billed yearly/;
    const monthlyLabel = "Billed monthly";
    expect(getByText(plusCard, yearlyPriceRegex)).toBeInTheDocument();
    expect(queryByText(plusCard, monthlyLabel)).not.toBeInTheDocument();

    const yearlyToggle = getByRole(plusCard, "radio", { name: "Yearly" });
    await user.click(yearlyToggle);
    await user.keyboard("[ArrowRight][Space]");

    expect(queryByText(plusCard, yearlyPriceRegex)).not.toBeInTheDocument();
    expect(getByText(plusCard, monthlyLabel)).toBeInTheDocument();
  });

  it("can switch from the yearly to the monthly plan with the mouse", async () => {
    const user = userEvent.setup();

    const ComposedDashboard = composeStory(
      LandingRedesignUsWithPrivacyProductBundle,
      Meta,
    );
    render(<ComposedDashboard />);
    const plusCard = screen.getByLabelText("Monitor Plus");

    // Regular expressions:
    //
    //   \$     Starts with the character `$`,
    //
    //   (.+?)  followed by one or more (`+`) arbitrary characters (`.`), until
    //          the next part of the regular expression matches…
    //
    // All that combines to a string like "$160.44 billed yearly".
    const yearlyPriceRegex = /\$(.+?) billed yearly/;
    const monthlyLabel = "Billed monthly";
    expect(getByText(plusCard, yearlyPriceRegex)).toBeInTheDocument();
    expect(queryByText(plusCard, monthlyLabel)).not.toBeInTheDocument();

    const monthlyToggle = getByRole(plusCard, "radio", { name: "Monthly" });
    await user.click(monthlyToggle);

    expect(queryByText(plusCard, yearlyPriceRegex)).not.toBeInTheDocument();
    expect(getByText(plusCard, monthlyLabel)).toBeInTheDocument();
  });

  it("rounds the percentage savings of the bundle plan down (i.e. under- rather than overpromise) to whole numbers", async () => {
    const ComposedDashboard = composeStory(
      LandingRedesignUsWithPrivacyProductBundle,
      Meta,
    );
    render(<ComposedDashboard />);
    const bundleCard = screen.getByLabelText("Privacy Protection Plan");

    // Regular expression:
    //
    //   Save   Starts with the characters `Save `,
    //
    //   (.+?)  followed by one or more (`+`) arbitrary characters (`.`), until
    //          the next part of the regular expression matches…
    //
    //   %      …which is a single `%` character.
    //
    // All that combines to a string like "Best value, save 68%".
    const savingsEl = getByText(bundleCard, /Best value, save (.+?)%/);
    const priceEl = getByText(bundleCard, /\$(.+?)\/mo/);
    const individualPrice = Number.parseFloat(
      priceEl.textContent!.split("$")[1],
    );
    const bundlePrice = Number.parseFloat(
      priceEl.textContent!.split("$")[2].replace("/mo", ""),
    );

    expect(savingsEl.textContent).not.toMatch(".");
    expect(
      Number.parseInt(
        savingsEl
          .textContent!.split("%")[0]
          .split("Best value, save ")[1]
          // Replace the special characters Fluent inserts around variables:
          .replace("⁨", "")
          .replace("⁩", ""),
        10,
      ),
    ).toBeLessThanOrEqual(
      ((individualPrice - bundlePrice) * 100) / individualPrice,
    );
  });

  it("can move to the subscribe button with the keyboard", async () => {
    const user = userEvent.setup();

    const ComposedDashboard = composeStory(
      LandingRedesignUsWithPrivacyProductBundle,
      Meta,
    );
    render(<ComposedDashboard />);
    const plusCard = screen.getByLabelText("Monitor Plus");

    const plusSubscribeButton = getByRole(plusCard, "link", {
      name: "Get started",
    });
    expect(plusSubscribeButton).not.toHaveFocus();

    const yearlyToggle = getByRole(plusCard, "radio", { name: "Yearly" });
    await user.click(yearlyToggle);
    await user.keyboard("[Tab]");

    expect(plusSubscribeButton).toHaveFocus();
  });

  it("links to the Mozilla privacy products from the bundle pricing plan", async () => {
    const ComposedDashboard = composeStory(
      LandingRedesignUsWithPrivacyProductBundle,
      Meta,
    );
    render(<ComposedDashboard />);
    const bundleCard = screen.getByLabelText("Privacy Protection Plan");

    const mozillaVpnLink = getByRole(bundleCard, "link", {
      name: /Mozilla VPN/,
    });
    const relayPremiumLink = getByRole(bundleCard, "link", {
      name: /Relay Premium/,
    });
    const mozillaMonitorLink = getByRole(bundleCard, "link", {
      name: /Monitor Plus/,
    });

    expect(mozillaVpnLink).not.toHaveAttribute("href", "");
    expect(relayPremiumLink).not.toHaveAttribute("href", "");
    expect(mozillaMonitorLink).toHaveAttribute("href", "/");
  });

  it("can initiate sign in from the Monitor Plus pricing plan", async () => {
    const user = userEvent.setup();

    const ComposedDashboard = composeStory(
      LandingRedesignUsWithPrivacyProductBundle,
      Meta,
    );
    render(<ComposedDashboard />);
    const plusCard = screen.getByLabelText("Monitor Plus");

    expect(signIn).not.toHaveBeenCalled();

    const yearlyToggle = getByRole(plusCard, "radio", { name: "Yearly" });
    await user.click(yearlyToggle);
    await user.keyboard("[Tab][Tab][Space]");

    expect(signIn).toHaveBeenCalledTimes(1);
  });

  it("can initiate sign in from the Monitor (free) pricing card", async () => {
    const user = userEvent.setup();

    const ComposedDashboard = composeStory(
      LandingRedesignUsWithPrivacyProductBundle,
      Meta,
    );
    render(<ComposedDashboard />);
    const freeCard = screen.getByLabelText("Monitor");

    expect(signIn).not.toHaveBeenCalled();

    const signInButton = getByRole(freeCard, "button", {
      name: "Get started",
    });
    await user.click(signInButton);

    expect(signIn).toHaveBeenCalledTimes(1);
  });

  it("counts the number of clicks on the pricing plan billing period toggle", async () => {
    const mockedRecord = useTelemetry();
    const ComposedDashboard = composeStory(
      LandingRedesignUsWithPrivacyProductBundle,
      Meta,
    );
    render(<ComposedDashboard />);

    const user = userEvent.setup();
    const plusCard = screen.getByLabelText("Monitor Plus");
    const monthlyToggle = getByRole(plusCard, "radio", { name: "Monthly" });
    const yearlyToggle = getByRole(plusCard, "radio", { name: "Yearly" });

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

  it("counts the number of clicks on the pricing plan free tier button", async () => {
    const mockedRecord = useTelemetry();
    const ComposedDashboard = composeStory(
      LandingRedesignUsWithPrivacyProductBundle,
      Meta,
    );
    render(<ComposedDashboard />);

    const user = userEvent.setup();
    const freeCard = screen.getByLabelText("Monitor");
    const freeButton = getByRole(freeCard, "button", {
      name: "Get started",
    });

    await user.click(freeButton);
    expect(mockedRecord).toHaveBeenCalledWith(
      "ctaButton",
      "click",
      expect.objectContaining({
        button_id: "clicked_free_pricing_card",
      }),
    );
  });

  it("counts the number of clicks on the pricing plan upsell button", async () => {
    const mockedRecord = useTelemetry();
    const ComposedDashboard = composeStory(
      LandingRedesignUsWithPrivacyProductBundle,
      Meta,
    );
    render(<ComposedDashboard />);

    const user = userEvent.setup();
    const plusCard = screen.getByLabelText("Monitor Plus");
    const monthlyToggle = getByRole(plusCard, "radio", { name: "Monthly" });
    const upsellButton = getByRole(plusCard, "link", {
      name: "Get started",
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
    const ComposedDashboard = composeStory(
      LandingRedesignUsWithPrivacyProductBundle,
      Meta,
    );
    render(<ComposedDashboard />);

    const user = userEvent.setup();
    const plusCard = screen.getByLabelText("Monitor Plus");
    const monthlyToggle = getByRole(plusCard, "radio", { name: "Monthly" });
    const yearlyToggle = getByRole(plusCard, "radio", { name: "Yearly" });

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

  it("counts the number of clicks on the pricing card bundle upsell button", async () => {
    const mockedRecord = useTelemetry();
    const ComposedDashboard = composeStory(
      LandingRedesignUsWithPrivacyProductBundle,
      Meta,
    );
    render(<ComposedDashboard />);

    const user = userEvent.setup();
    const bundleCard = screen.getByLabelText("Privacy Protection Plan");
    const upsellButton = getByRole(bundleCard, "link", {
      name: "Get started",
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
        button_id: "purchase_bundle_landing_page",
      }),
    );
  });

  it("counts the number of clicks on the pricing card Plus upsell button", async () => {
    const mockedRecord = useTelemetry();
    const ComposedDashboard = composeStory(
      LandingRedesignUsWithPrivacyProductBundle,
      Meta,
    );
    render(<ComposedDashboard />);

    const user = userEvent.setup();
    const plusCard = screen.getByLabelText("Monitor Plus");
    const upsellButton = getByRole(plusCard, "link", {
      name: "Get started",
    });
    const monthlyToggle = getByRole(plusCard, "radio", { name: "Monthly" });
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
    const ComposedDashboard = composeStory(
      LandingRedesignUsWithPrivacyProductBundle,
      Meta,
    );
    render(<ComposedDashboard />);

    const user = userEvent.setup();
    const freeCard = screen.getByLabelText("Monitor");
    const freeButton = getByRole(freeCard, "button", {
      name: "Get started",
    });

    await user.click(freeButton);
    expect(mockedRecord).toHaveBeenCalledWith(
      "ctaButton",
      "click",
      expect.objectContaining({
        button_id: "clicked_free_pricing_card",
      }),
    );
  });

  it("confirms that the pricing card yearly upsell has the correct link for SubPlat2", async () => {
    const ComposedStory = composeStory(
      LandingRedesignUsWithPrivacyProductBundle,
      Meta,
    );
    render(<ComposedStory />);

    const plusCard = screen.getByLabelText("Monitor Plus");
    const upsellButton = getByRole(plusCard, "link", {
      name: "Get started",
    });
    expect(upsellButton).toHaveAttribute(
      "href",
      "https://accounts.stage.mozaws.net/subscriptions/products/prod_NErZh679W62lai?plan=price_1NvqawKb9q6OnNsLRTnYrtrV&entrypoint=monitor.mozilla.org-monitor-product-page&form_type=button&data_cta_position=pricing&utm_source=product&utm_medium=monitor&utm_campaign=pricing",
    );
  });

  it("confirms that the pricing card monthly upsell has the correct link for SubPlat2", async () => {
    const ComposedStory = composeStory(
      LandingRedesignUsWithPrivacyProductBundle,
      Meta,
    );
    render(<ComposedStory />);

    const user = userEvent.setup();
    const plusCard = screen.getByLabelText("Monitor Plus");
    const upsellButton = getByRole(plusCard, "link", {
      name: "Get started",
    });
    const monthlyToggle = getByRole(plusCard, "radio", { name: "Monthly" });
    // jsdom will complain about not being able to navigate to a different page
    // after clicking the link; suppress that error, as it's not relevant to the
    // test:
    jest.spyOn(console, "error").mockImplementationOnce(() => undefined);
    await user.click(monthlyToggle);

    expect(upsellButton).toHaveAttribute(
      "href",
      "https://accounts.stage.mozaws.net/subscriptions/products/prod_NErZh679W62lai?plan=price_1MUNq0Kb9q6OnNsL4BoJgepf&entrypoint=monitor.mozilla.org-monitor-product-page&form_type=button&data_cta_position=pricing&utm_source=product&utm_medium=monitor&utm_campaign=pricing",
    );
  });

  it("confirms that the pricing card yearly upsell has the correct link with UTM parameters for SubPlat2", async () => {
    const cookies = new Cookies(null);
    cookies.set("attributionsLastTouch", {
      utm_source: "source_last_touch",
      utm_medium: "medium_last_touch",
      utm_campaign: "campaign_last_touch",
    });
    const ComposedStory = composeStory(
      LandingRedesignUsWithPrivacyProductBundle,
      Meta,
    );
    render(<ComposedStory />);

    const plusCard = screen.getByLabelText("Monitor Plus");
    const upsellButton = getByRole(plusCard, "link", {
      name: "Get started",
    });
    expect(upsellButton).toHaveAttribute(
      "href",
      "https://accounts.stage.mozaws.net/subscriptions/products/prod_NErZh679W62lai?plan=price_1NvqawKb9q6OnNsLRTnYrtrV&utm_source=source_last_touch&utm_medium=medium_last_touch&utm_campaign=campaign_last_touch&entrypoint=monitor.mozilla.org-monitor-product-page&form_type=button&data_cta_position=pricing",
    );
  });

  it("confirms that the pricing card bundle upsell has the correct link with UTM parameters for SubPlat2", async () => {
    const cookies = new Cookies(null);
    cookies.set("attributionsLastTouch", {
      utm_source: "monitor-product",
      utm_medium: "monitor",
      utm_campaign: "landing-page-pricing-grid",
      utm_content: "pricing-grid-us",
    });
    const ComposedStory = composeStory(
      LandingRedesignUsWithPrivacyProductBundle,
      Meta,
    );
    render(<ComposedStory />);

    const bundleCard = screen.getByLabelText("Privacy Protection Plan");
    const upsellButton = getByRole(bundleCard, "link", {
      name: "Get started",
    });
    expect(upsellButton).toHaveAttribute(
      "href",
      "https://accounts.stage.mozaws.net/subscriptions/products/prod_SFb8iVuZIOPREe?plan=price_1RMAopKb9q6OnNsLSGe1vLtt&utm_source=monitor-product&utm_medium=monitor&utm_campaign=landing-page-pricing-grid&utm_content=pricing-grid-us&entrypoint=monitor.mozilla.org-monitor-product-page&form_type=button&data_cta_position=pricing",
    );
  });

  it("confirms that the pricing card yearly upsell has the correct link for SubPlat3", async () => {
    const ComposedStory = composeStory(
      LandingRedesignUsWithPrivacyProductBundle,
      Meta,
    );
    render(
      <ComposedStory
        enabledFeatureFlags={[
          "LandingPageRedesign",
          "PrivacyProductsBundle",
          "SubPlat3",
        ]}
      />,
    );

    const plusCard = screen.getByLabelText("Monitor Plus");
    const upsellButton = getByRole(plusCard, "link", {
      name: "Get started",
    });
    expect(upsellButton).toHaveAttribute(
      "href",
      "https://payments-next.stage.fxa.nonprod.webservices.mozgcp.net/monitorplusstage/yearly/landing?entrypoint=monitor.mozilla.org-monitor-product-page&form_type=button&data_cta_position=pricing&utm_source=product&utm_medium=monitor&utm_campaign=pricing",
    );
  });

  it("confirms that the pricing card monthly upsell has the correct link for SubPlat3", async () => {
    const ComposedStory = composeStory(
      LandingRedesignUsWithPrivacyProductBundle,
      Meta,
    );
    render(
      <ComposedStory
        enabledFeatureFlags={[
          "LandingPageRedesign",
          "PrivacyProductsBundle",
          "SubPlat3",
        ]}
      />,
    );

    const user = userEvent.setup();
    const plusCard = screen.getByLabelText("Monitor Plus");
    const upsellButton = getByRole(plusCard, "link", {
      name: "Get started",
    });
    const monthlyToggle = getByRole(plusCard, "radio", { name: "Monthly" });
    // jsdom will complain about not being able to navigate to a different page
    // after clicking the link; suppress that error, as it's not relevant to the
    // test:
    jest.spyOn(console, "error").mockImplementationOnce(() => undefined);
    await user.click(monthlyToggle);

    expect(upsellButton).toHaveAttribute(
      "href",
      "https://payments-next.stage.fxa.nonprod.webservices.mozgcp.net/monitorplusstage/monthly/landing?entrypoint=monitor.mozilla.org-monitor-product-page&form_type=button&data_cta_position=pricing&utm_source=product&utm_medium=monitor&utm_campaign=pricing",
    );
  });

  it("confirms that the pricing card yearly upsell has the correct link with UTM parameters for SubPlat3", async () => {
    const cookies = new Cookies(null);
    cookies.set("attributionsLastTouch", {
      utm_source: "source_last_touch",
      utm_medium: "medium_last_touch",
      utm_campaign: "campaign_last_touch",
    });
    const ComposedStory = composeStory(
      LandingRedesignUsWithPrivacyProductBundle,
      Meta,
    );
    render(
      <ComposedStory
        enabledFeatureFlags={[
          "LandingPageRedesign",
          "PrivacyProductsBundle",
          "SubPlat3",
        ]}
      />,
    );

    const plusCard = screen.getByLabelText("Monitor Plus");
    const upsellButton = getByRole(plusCard, "link", {
      name: "Get started",
    });
    expect(upsellButton).toHaveAttribute(
      "href",
      "https://payments-next.stage.fxa.nonprod.webservices.mozgcp.net/monitorplusstage/yearly/landing?utm_source=source_last_touch&utm_medium=medium_last_touch&utm_campaign=campaign_last_touch&entrypoint=monitor.mozilla.org-monitor-product-page&form_type=button&data_cta_position=pricing",
    );
  });

  it("confirms that the pricing card bundle upsell has the correct link with UTM parameters for SubPlat3", async () => {
    const cookies = new Cookies(null);
    cookies.set("attributionsLastTouch", {
      utm_source: "monitor-product",
      utm_medium: "monitor",
      utm_campaign: "landing-page-pricing-grid",
      utm_content: "pricing-grid-us",
    });
    const ComposedStory = composeStory(
      LandingRedesignUsWithPrivacyProductBundle,
      Meta,
    );
    render(
      <ComposedStory
        enabledFeatureFlags={[
          "LandingPageRedesign",
          "PrivacyProductsBundle",
          "SubPlat3",
        ]}
      />,
    );

    const bundleCard = screen.getByLabelText("Privacy Protection Plan");
    const upsellButton = getByRole(bundleCard, "link", {
      name: "Get started",
    });
    expect(upsellButton).toHaveAttribute(
      "href",
      "https://payments-next.stage.fxa.nonprod.webservices.mozgcp.net/privacyprotectionplan/yearly/landing?utm_source=monitor-product&utm_medium=monitor&utm_campaign=landing-page-pricing-grid&utm_content=pricing-grid-us&entrypoint=monitor.mozilla.org-monitor-product-page&form_type=button&data_cta_position=pricing",
    );
  });
});

describe("Scan limit reached", () => {
  it("passes the axe accessibility test suite", async () => {
    const ComposedLanding = composeStory(LandingRedesignUsScanLimit, Meta);
    const { container } = render(<ComposedLanding />);
    expect(await axe(container)).toHaveNoViolations();
  }, 10_000);

  it("shows the scan limit and waitlist cta when it hits the threshold", () => {
    const ComposedDashboard = composeStory(LandingRedesignUsScanLimit, Meta);
    render(<ComposedDashboard />);

    // In total there are fixe “free scan” CTAs on the landing page.
    const limitDescriptions = screen.getAllByText(
      "We’ve reached the maximum scans for the month. Enter your email to get on our waitlist.",
    );
    expect(limitDescriptions).toHaveLength(5);
  });

  it("opens the waitlist page when the join waitlist cta is selected", async () => {
    const user = userEvent.setup();
    const ComposedDashboard = composeStory(LandingRedesignUsScanLimit, Meta);
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

  it("shows the waitlist CTA when the scan limit is reached", async () => {
    global.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        success: true,
        json: jest.fn(() => ({
          flowData: null,
        })),
      }),
    );
    const ComposedDashboard = composeStory(
      LandingRedesignUsScanLimitWithPrivacyProductBundle,
      Meta,
    );
    render(<ComposedDashboard />);

    await waitFor(() => {
      const waitlistCta = screen.getAllByRole("link", {
        name: "Join waitlist",
      });
      expect(waitlistCta[0]).toBeInTheDocument();
    });
  });
});

describe("Show limit reached flow when the DisableOneRepScans flag is on", () => {
  it("passes the axe accessibility test suite", async () => {
    const ComposedLanding = composeStory(
      LandingRedesignUsDisableOneRepScans,
      Meta,
    );
    const { container } = render(<ComposedLanding />);
    expect(await axe(container)).toHaveNoViolations();
  });

  it("shows the scan limit and waitlist cta when it hits the threshold", () => {
    const ComposedDashboard = composeStory(
      LandingRedesignUsDisableOneRepScans,
      Meta,
    );
    render(<ComposedDashboard />);

    // In total there are fixe “free scan” CTAs on the landing page.
    const limitDescriptions = screen.getAllByText(
      "We’ve reached the maximum scans for the month. Enter your email to get on our waitlist.",
    );
    expect(limitDescriptions).toHaveLength(5);
  });

  it("opens the waitlist page when the join waitlist cta is selected", async () => {
    const user = userEvent.setup();
    const ComposedDashboard = composeStory(
      LandingRedesignUsDisableOneRepScans,
      Meta,
    );
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

  it("shows the waitlist CTA when the scan limit is reached", async () => {
    global.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        success: true,
        json: jest.fn(() => ({
          flowData: null,
        })),
      }),
    );
    const ComposedDashboard = composeStory(
      LandingRedesignUsDisableOneRepScans,
      Meta,
    );
    render(<ComposedDashboard />);
    const waitlistCta = screen.getAllByRole("link", {
      name: "Join waitlist",
    });
    expect(waitlistCta[0]).toBeInTheDocument();
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

    const ComposedLanding = composeStory(LandingRedesignUs, Meta);
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

    const ComposedLanding = composeStory(LandingRedesignUs, Meta);
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

    const ComposedLanding = composeStory(LandingRedesignUs, Meta);
    render(<ComposedLanding />);

    const alert = screen.getByRole("alert");
    const dismissButton = within(alert).getByRole("button", {
      name: "Dismiss",
    });
    await user.click(dismissButton);

    expect(alert).not.toBeInTheDocument();
  });
});
