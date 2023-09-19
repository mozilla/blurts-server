/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { it, expect } from "@jest/globals";
import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { composeStory } from "@storybook/react";
import { axe } from "jest-axe";
import Meta, {
  DashboardNonUsNoBreaches,
  DashboardUsNoPremiumNoScanNoBreaches,
  DashboardUsNoPremiumResolvedScanResolvedBreaches,
  DashboardUsNoPremiumUnresolvedScanNoBreaches,
  DashboardUsNoPremiumUnresolvedScanUnresolvedBreaches,
  DashboardUsPremiumResolvedScanResolvedBreaches,
  DashboardUsPremiumResolvedScanUnresolvedBreaches,
  breachOptions,
  brokerOptions,
} from "./Dashboard.stories";

function enablePremium() {
  process.env.NEXT_PUBLIC_PREMIUM_ENABLED = "true";
}

function disablePremium() {
  process.env.NEXT_PUBLIC_PREMIUM_ENABLED = "false";
}

beforeEach(() => {
  disablePremium();
});

afterAll(() => {
  disablePremium();
});

jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
  usePathname: jest.fn(),
}));

it("passes the axe accessibility test suite 1", async () => {
  const ComposedDashboard = composeStory(DashboardNonUsNoBreaches, Meta);
  const { container } = render(<ComposedDashboard />);
  expect(await axe(container)).toHaveNoViolations();
});

it("passes the axe accessibility test suite 2", async () => {
  const ComposedDashboard = composeStory(
    DashboardUsNoPremiumUnresolvedScanUnresolvedBreaches,
    Meta
  );
  const { container } = render(<ComposedDashboard />);
  expect(await axe(container)).toHaveNoViolations();
});

it("passes the axe accessibility test suite 3", async () => {
  const ComposedDashboard = composeStory(
    DashboardUsPremiumResolvedScanUnresolvedBreaches,
    Meta
  );
  const { container } = render(<ComposedDashboard />);
  expect(await axe(container)).toHaveNoViolations();
});

it("shows the “let’s fix it” banner content", () => {
  const ComposedDashboard = composeStory(
    DashboardUsNoPremiumUnresolvedScanNoBreaches,
    Meta
  );
  render(<ComposedDashboard />);

  const letsFixItBannerContent = screen.getByText("Let’s protect your data");
  expect(letsFixItBannerContent).toBeInTheDocument();
});

/**
 * Verify that a property holds in (nearly) all dashboard states
 *
 * The dashboard has a lot of invariants:
 * - Where is the user located?
 * - Do they have a Premium subscription?
 * - Have they been in, and resolved, data breaches?
 * - Have they run a data broker scan, find results, and resolved them?
 *
 * Some properties have to hold in all or most of these invariants. For example,
 * a "get Premium" button should never be shown for a user who already has
 * Premium, regardless of e.g. whether they have already run a scan and what the
 * results are.
 *
 * This function makes it easier to write a test that verifies that.
 *
 * Usage example:
 *
 *     it("does not show 'Get Premium" for Premium users", () => {
 *       runTestPermutations(
 *         {
 *           staticPermutation: ["premium", true],
 *           // There is one `expect` call in the function below:
 *           nrAssertions: 1,
 *         },
 *         () => {
 *           const premiumButton = screen.queryByRole("link", "Get Premium");
 *           expect(premiumButton).not.toBeInTheDocument();
 *         },
 *       );
 *     });
 *
 * @param config
 * @param config.staticPermutation the specific config that you're testing and
 *                                 thus do _not_ want to vary. Example:
 *                                     ["premium", true]
 * @param config.nrAssertions the number of `expect` calls you make in your
 *                            `test` function. This ensures that the test
 *                            doesn't pass even though it never actually ran.
 * @param test the actual test function, without the setup part (i.e. no
 *             `render` call).
 */
function runTestPermutations(
  config: {
    nrAssertions: number;
    staticPermutation?:
      | ["premium", boolean]
      | ["us", boolean]
      | ["scanResult", keyof typeof brokerOptions]
      | ["breach", keyof typeof breachOptions];
  },
  test: () => void
): void {
  const ComposedDashboard = composeStory(
    DashboardUsNoPremiumNoScanNoBreaches,
    Meta
  );

  const staticPermutation = config.staticPermutation;
  const testPermutations: Array<() => void> = [];
  (["us", "nl"] as const).forEach((countryCode) => {
    if (
      staticPermutation?.[0] === "us" &&
      staticPermutation[1] !== (countryCode === "us")
    ) {
      // If we're keeping the country code static,
      // skip the test that isn't the given country code (US or non-US):
      return;
    }
    if (countryCode !== "us") {
      if (
        staticPermutation?.[0] === "premium" &&
        staticPermutation[1] === true
      ) {
        // If we're testing in Premium situations, the user can't be from
        // outside the US:
        return;
      }

      if (
        staticPermutation?.[0] === "scanResult" &&
        staticPermutation[1] !== "no-scan"
      ) {
        // If we're testing scan result options, the user can't be from
        // outside the US, where broker scanning is not available:
        return;
      }
    }

    (Object.keys(breachOptions) as Array<keyof typeof breachOptions>).forEach(
      (breachOption) => {
        if (
          staticPermutation?.[0] === "breach" &&
          staticPermutation[1] !== breachOption
        ) {
          // If we're keeping the breach data static,
          // skip the tests that aren't the given type of breach data:
          return;
        }

        if (countryCode !== "us") {
          // Outside the US, Premium and broker scanning isn't available,
          // so we only need to test the different types of breach data:
          testPermutations.push(() => {
            render(
              <ComposedDashboard
                countryCode={countryCode}
                breaches={breachOption}
              />
            );
            try {
              test();
            } catch (e) {
              console.error("Failure with permutation:", {
                countryCode,
                breachOption,
              });
              throw e;
            }
            cleanup();
          });
          return;
        }

        [true, false].forEach((premium) => {
          if (
            staticPermutation?.[0] === "premium" &&
            staticPermutation[1] !== premium
          ) {
            // If we're keeping whether the user has Premium static,
            // skip the tests where the user does/does not have Premium:
            return;
          }

          (
            Object.keys(brokerOptions) as Array<keyof typeof brokerOptions>
          ).forEach((brokerOption) => {
            if (
              staticPermutation?.[0] === "scanResult" &&
              staticPermutation[1] !== brokerOption
            ) {
              // If we're keeping the type of the scan results static,
              // skip the tests that aren't the given type of scan results:
              return;
            }
            if (
              countryCode !== "us" &&
              (premium || brokerOption !== "no-scan")
            ) {
              // Premium and data broker scanning is not available outside the US:
              return;
            }

            testPermutations.push(() => {
              render(
                <ComposedDashboard
                  premium={premium}
                  countryCode={countryCode}
                  breaches={breachOption}
                  brokers={brokerOption}
                />
              );
              try {
                test();
              } catch (e) {
                console.error("Failure with permutation:", {
                  premium,
                  countryCode,
                  breachOption,
                  brokerOption,
                });
                throw e;
              }
              cleanup();
            });
            return;
          });
        });
      }
    );
  });

  expect.hasAssertions();
  expect.assertions(testPermutations.length * config.nrAssertions);
  testPermutations.forEach((runTest) => runTest());
}

it("shows the 'Start a free scan' CTA to free US-based users who haven't performed a scan yet", () => {
  const ComposedDashboard = composeStory(
    DashboardUsNoPremiumNoScanNoBreaches,
    Meta
  );
  render(<ComposedDashboard />);

  const freeScanCta = screen.getByRole("link", { name: "Start a free scan" });
  expect(freeScanCta).toBeInTheDocument();
});

it("does not show the 'Start a free scan' CTA for non-US users", () => {
  runTestPermutations(
    { staticPermutation: ["us", false], nrAssertions: 1 },
    () => {
      const freeScanCta = screen.queryByRole("link", {
        name: "Start a free scan",
      });
      expect(freeScanCta).not.toBeInTheDocument();
    }
  );
});

it("switches between tab panels", async () => {
  const user = userEvent.setup();
  const ComposedDashboard = composeStory(
    DashboardUsNoPremiumNoScanNoBreaches,
    Meta
  );
  render(<ComposedDashboard />);

  const tabActionNeededTrigger = screen.getByRole("tab", {
    name: "Action needed",
  });
  expect(tabActionNeededTrigger.getAttribute("aria-selected")).toBe("true");
  const tabFixedTrigger = screen.getByRole("tab", {
    name: "Fixed",
  });
  tabFixedTrigger.getAttribute("aria-selected");
  expect(tabFixedTrigger.getAttribute("aria-selected")).toBe("false");
  await user.click(tabFixedTrigger);
  expect(tabFixedTrigger.getAttribute("aria-selected")).toBe("true");
  expect(tabActionNeededTrigger.getAttribute("aria-selected")).toBe("false");
});

it("shows the premium upgrade cta if the user is not a premium subscriber", () => {
  enablePremium();
  runTestPermutations(
    {
      staticPermutation: ["premium", false],
      nrAssertions: 1,
    },
    () => {
      // We show a CTA on desktop in the toolbar and in the mobile menu
      const premiumCtas = screen.queryAllByRole("button", {
        name: "Upgrade to ⁨Premium⁩",
      });
      expect(premiumCtas.length).toBe(2);
    }
  );
});

it("opens and closes the premium upsell dialog", async () => {
  enablePremium();
  const user = userEvent.setup();
  const ComposedDashboard = composeStory(
    DashboardUsNoPremiumNoScanNoBreaches,
    Meta
  );
  render(<ComposedDashboard />);

  // We show a CTA on desktop in the toolbar and in the mobile menu
  const premiumCtas = screen.queryAllByRole("button", {
    name: "Upgrade to ⁨Premium⁩",
  });
  expect(premiumCtas.length).toBe(2);

  // Shows the modal for the desktop layout
  await user.click(premiumCtas[0]);
  expect(
    screen.getByText("Choose the level of protection that’s right for you")
  ).toBeInTheDocument();
  const closeButtonIcon1 = screen.getByLabelText("Close");
  await user.click(closeButtonIcon1.parentElement as HTMLElement);
  expect(
    screen.queryByText("Choose the level of protection that’s right for you")
  ).not.toBeInTheDocument();

  // Shows the modal for the mobile layout
  await user.click(premiumCtas[1]);
  expect(
    screen.getByText("Choose the level of protection that’s right for you")
  ).toBeInTheDocument();
  const closeButtonIcon2 = screen.getByLabelText("Close");
  await user.click(closeButtonIcon2.parentElement as HTMLElement);
  expect(
    screen.queryByText("Choose the level of protection that’s right for you")
  ).not.toBeInTheDocument();
});

it("toggles between the product offerings in the premium upsell dialog", async () => {
  enablePremium();
  const user = userEvent.setup();
  const ComposedDashboard = composeStory(
    DashboardUsNoPremiumNoScanNoBreaches,
    Meta
  );
  render(<ComposedDashboard />);

  // We show a CTA on desktop in the toolbar and in the mobile menu
  const premiumCtas = screen.queryAllByRole("button", {
    name: "Upgrade to ⁨Premium⁩",
  });
  expect(premiumCtas.length).toBe(2);

  await user.click(premiumCtas[0]);

  const productTabYearly1 = screen.queryByRole("tab", { name: "Yearly" });
  expect(productTabYearly1?.getAttribute("aria-selected")).toBe("true");
  const productTabMonthly1 = screen.queryByRole("tab", { name: "Monthly" });
  expect(productTabMonthly1?.getAttribute("aria-selected")).toBe("false");
  const productYearlyCta = screen.queryByRole("link", {
    name: "Select yearly plan",
  });
  expect(productYearlyCta).toBeInTheDocument();

  await user.click(productTabMonthly1 as HTMLElement);

  const productTabYearly2 = screen.queryByRole("tab", { name: "Yearly" });
  expect(productTabYearly2?.getAttribute("aria-selected")).toBe("false");
  const productTabMonthly2 = screen.queryByRole("tab", { name: "Monthly" });
  expect(productTabMonthly2?.getAttribute("aria-selected")).toBe("true");

  const productMontlyCta = screen.queryByRole("link", {
    name: "Select monthly plan",
  });
  expect(productMontlyCta).toBeInTheDocument();
});

it("shows the premium badge if the user is a premium subscriber", () => {
  enablePremium();
  runTestPermutations(
    { staticPermutation: ["premium", true], nrAssertions: 1 },
    () => {
      // We show a CTA on desktop in the toolbar and in the mobile menu
      const premiumBadges = screen.queryAllByText("Premium");
      expect(premiumBadges.length).toBe(2);
    }
  );
});

it("shows returned free user who has resolved all tasks premium upsell and all fixed description", async () => {
  enablePremium();
  const user = userEvent.setup();
  const ComposedDashboard = composeStory(
    DashboardUsNoPremiumResolvedScanResolvedBreaches,
    Meta
  );
  render(<ComposedDashboard />);

  // We show a CTA on desktop in the toolbar and in the mobile menu
  const premiumCtas = screen.queryAllByRole("button", {
    name: "Upgrade to ⁨Premium⁩",
  });
  expect(premiumCtas.length).toBe(2);

  // show banner CTA premium upgrade
  const bannerPremiumCta = screen.queryAllByRole("button", {
    name: "Get Continuous Protection",
  });
  expect(bannerPremiumCta.length).toBe(1);

  // click on cta
  await user.click(bannerPremiumCta[0]);
  expect(screen.getByRole("dialog")).toBeInTheDocument();
});

it("shows a returning Premium user who has resolved all tasks a CTA to check out what was fixed", async () => {
  enablePremium();
  const user = userEvent.setup();
  const ComposedDashboard = composeStory(
    DashboardUsPremiumResolvedScanResolvedBreaches,
    Meta
  );
  render(<ComposedDashboard />);

  // We show a CTA on desktop in the toolbar and in the mobile menu
  const premiumBadges = screen.queryAllByText("Premium");
  expect(premiumBadges.length).toBe(2);

  // show banner CTA premium upgrade
  const bannerPremiumCta = screen.queryAllByRole("button", {
    name: "See what’s fixed",
  });
  expect(bannerPremiumCta.length).toBe(1);

  // click on cta
  await user.click(bannerPremiumCta[0]);

  const fixedTab = screen.getByRole("tab", { name: "Fixed" });
  expect(fixedTab).toHaveAttribute("aria-selected", "true");
});
