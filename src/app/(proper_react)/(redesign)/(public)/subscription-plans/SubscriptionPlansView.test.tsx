/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { it, expect } from "@jest/globals";
import { composeStory } from "@storybook/react";
import { screen, render, getByRole } from "@testing-library/react";
import { axe } from "jest-axe";
import Meta, { SubscriptionPlans } from "./SubscriptionPlansView.stories";
import { useSession } from "next-auth/react";
import { userEvent } from "@testing-library/user-event";

jest.mock("next-auth/react", () => {
  return {
    signIn: jest.fn(),
    useSession: jest.fn(() => {
      return {};
    }),
  };
});

jest.mock("next/navigation", () => ({
  usePathname: () => "/subscription-plans",
  useSearchParams: () => ({
    toString: jest.fn(),
  }),
}));

jest.mock("../../../../hooks/useTelemetry");

beforeEach(() => {
  // For reasons that are unclear to me, the mock implementation defind in the
  // call to `jest.mock` above forgets the implementation. I've spent way too
  // long debugging that already, so I'm settling for this :(
  const mockedUseSession = useSession as jest.Mock;
  mockedUseSession.mockReturnValue({});
});

describe("Subscription plans", () => {
  it("passes the axe accessibility test suite", async () => {
    const ComposedSubscriptionPlans = composeStory(SubscriptionPlans, Meta);
    const { container } = render(<ComposedSubscriptionPlans />);
    expect(await axe(container)).toHaveNoViolations();
  }, 10_000);

  it("confirms that the pricing card yearly upsell has the correct link for SubPlat2", async () => {
    const ComposedStory = composeStory(SubscriptionPlans, Meta);
    render(<ComposedStory />);

    const plusCard = screen.getByLabelText("Monitor Plus");
    const upsellButton = getByRole(plusCard, "link", {
      name: "Get started",
    });
    expect(upsellButton).toHaveAttribute(
      "href",
      "https://accounts.stage.mozaws.net/subscriptions/products/prod_NErZh679W62lai?plan=price_1NvqawKb9q6OnNsLRTnYrtrV&entrypoint=monitor.mozilla.org-monitor-product-page&form_type=button&data_cta_position=pricing&utm_source=monitor-product&utm_medium=monitor&utm_campaign=in-product-pricing-grid&utm_content=get-started-us",
    );
  });

  it("confirms that the pricing card monthly upsell has the correct link for SubPlat2", async () => {
    const user = userEvent.setup();
    const ComposedStory = composeStory(SubscriptionPlans, Meta);
    render(<ComposedStory />);

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
      "https://accounts.stage.mozaws.net/subscriptions/products/prod_NErZh679W62lai?plan=price_1MUNq0Kb9q6OnNsL4BoJgepf&entrypoint=monitor.mozilla.org-monitor-product-page&form_type=button&data_cta_position=pricing&utm_source=monitor-product&utm_medium=monitor&utm_campaign=in-product-pricing-grid&utm_content=get-started-us",
    );
  });

  it("confirms that the pricing card bundle upsell has the correct link for SubPlat2", async () => {
    const ComposedStory = composeStory(SubscriptionPlans, Meta);
    render(<ComposedStory />);

    const bundleCard = screen.getByLabelText("Privacy Protection Plan");
    const upsellButton = getByRole(bundleCard, "link", {
      name: "Get started",
    });
    expect(upsellButton).toHaveAttribute(
      "href",
      "https://accounts.stage.mozaws.net/subscriptions/products/prod_SFb8iVuZIOPREe?plan=price_1RMAopKb9q6OnNsLSGe1vLtt&entrypoint=monitor.mozilla.org-monitor-product-page&form_type=button&data_cta_position=pricing&utm_source=monitor-product&utm_medium=monitor&utm_campaign=in-product-pricing-grid&utm_content=get-started-us",
    );
  });

  it("confirms that the pricing card yearly upsell has the correct link for SubPlat3", async () => {
    const ComposedStory = composeStory(SubscriptionPlans, Meta);
    render(<ComposedStory enabledFeatureFlags={["SubPlat3"]} />);

    const bundleCard = screen.getByLabelText("Privacy Protection Plan");
    const upsellButton = getByRole(bundleCard, "link", {
      name: "Get started",
    });
    expect(upsellButton).toHaveAttribute(
      "href",
      "https://payments-next.stage.fxa.nonprod.webservices.mozgcp.net/privacyprotectionplan/yearly/landing?entrypoint=monitor.mozilla.org-monitor-product-page&form_type=button&data_cta_position=pricing&utm_source=monitor-product&utm_medium=monitor&utm_campaign=in-product-pricing-grid&utm_content=get-started-us",
    );
  });

  it("confirms that the pricing card monthly upsell has the correct link for SubPlat3", async () => {
    const user = userEvent.setup();
    const ComposedStory = composeStory(SubscriptionPlans, Meta);
    render(<ComposedStory enabledFeatureFlags={["SubPlat3"]} />);

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
      "https://payments-next.stage.fxa.nonprod.webservices.mozgcp.net/monitorplusstage/monthly/landing?entrypoint=monitor.mozilla.org-monitor-product-page&form_type=button&data_cta_position=pricing&utm_source=monitor-product&utm_medium=monitor&utm_campaign=in-product-pricing-grid&utm_content=get-started-us",
    );
  });

  it("confirms that the pricing card bundle upsell has the correct link for SubPlat3", async () => {
    const ComposedStory = composeStory(SubscriptionPlans, Meta);
    render(<ComposedStory enabledFeatureFlags={["SubPlat3"]} />);

    const bundleCard = screen.getByLabelText("Privacy Protection Plan");
    const upsellButton = getByRole(bundleCard, "link", {
      name: "Get started",
    });
    expect(upsellButton).toHaveAttribute(
      "href",
      "https://payments-next.stage.fxa.nonprod.webservices.mozgcp.net/privacyprotectionplan/yearly/landing?entrypoint=monitor.mozilla.org-monitor-product-page&form_type=button&data_cta_position=pricing&utm_source=monitor-product&utm_medium=monitor&utm_campaign=in-product-pricing-grid&utm_content=get-started-us",
    );
  });

  it("does not show the free tier card", async () => {
    const ComposedDashboard = composeStory(SubscriptionPlans, Meta);
    render(<ComposedDashboard />);

    const freeCard = screen.queryByLabelText("Monitor");
    expect(freeCard).not.toBeInTheDocument();
  });
});
