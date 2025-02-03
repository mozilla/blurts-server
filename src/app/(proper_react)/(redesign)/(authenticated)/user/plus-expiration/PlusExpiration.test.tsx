/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { it, expect } from "@jest/globals";
import { render, screen } from "@testing-library/react";
import { composeStory } from "@storybook/react";
import { axe } from "jest-axe";
import userEvent from "@testing-library/user-event";
import Meta, {
  CouponAlreadyApplied,
  FreeUser,
  HappyPath,
  NotExpiring,
} from "./PlusExpiration.stories";

it("passes the axe accessibility test suite", async () => {
  const PlusExpirationView = composeStory(HappyPath, Meta);
  const { container } = render(<PlusExpirationView />);
  expect(await axe(container)).toHaveNoViolations();
});

it("includes a link to the terms on the renewal page", () => {
  const PlusExpirationView = composeStory(HappyPath, Meta);
  render(<PlusExpirationView />);

  const termsLink = screen.getByRole("link", {
    name: "Limited terms and restrictions apply Open link in a new tab",
  });
  expect(termsLink).toBeInTheDocument();
});

it("confirms the renewal after it's applied", async () => {
  const user = userEvent.setup();
  const applyCouponPromise = new Promise((resolve) => {
    resolve({
      success: true,
    });
  });
  const PlusExpirationView = composeStory(HappyPath, Meta);
  render(
    <PlusExpirationView
      applyCouponAction={jest.fn().mockReturnValue(applyCouponPromise)}
    />,
  );

  expect(
    screen.queryByRole("heading", {
      name: "Thanks for renewing your subscription",
    }),
  ).not.toBeInTheDocument();

  const renewalButton = screen.getByRole("button", {
    name: "Renew subscription",
  });
  await user.click(renewalButton);
  await applyCouponPromise;

  expect(
    screen.getByRole("heading", {
      name: "Thanks for renewing your subscription",
    }),
  ).toBeInTheDocument();
});

it("shows an error if applying the coupon failed", async () => {
  const user = userEvent.setup();
  const applyCouponPromise = new Promise((resolve) => {
    resolve({
      success: false,
      error: "apply_renewal_coupon_error",
    });
  });
  const PlusExpirationView = composeStory(HappyPath, Meta);
  render(
    <PlusExpirationView
      applyCouponAction={jest.fn().mockReturnValue(applyCouponPromise)}
    />,
  );

  await applyCouponPromise;
  expect(
    screen.queryByText(/Couldn’t renew subscription./),
  ).not.toBeInTheDocument();

  const renewalButton = screen.getByRole("button", {
    name: "Renew subscription",
  });
  await user.click(renewalButton);

  expect(screen.getByText(/Couldn’t renew subscription./)).toBeInTheDocument();
});

it("hides the error after dismissing it", async () => {
  const user = userEvent.setup();
  const applyCouponErrorPromise = new Promise((resolve) => {
    resolve({
      success: false,
      error: "apply_renewal_coupon_error",
    });
  });
  const PlusExpirationView = composeStory(HappyPath, Meta);
  render(
    <PlusExpirationView
      applyCouponAction={jest.fn().mockReturnValue(applyCouponErrorPromise)}
    />,
  );

  const renewalButton = screen.getByRole("button", {
    name: "Renew subscription",
  });
  await user.click(renewalButton);
  await applyCouponErrorPromise;

  expect(screen.getByText(/Couldn’t renew subscription./)).toBeInTheDocument();

  const dismissButton = screen.getByRole("button", { name: "Dismiss" });
  await user.click(dismissButton);
  expect(
    screen.queryByText(/Couldn’t renew subscription./),
  ).not.toBeInTheDocument();
});

it("allows retrying after an error", async () => {
  const user = userEvent.setup();
  const PlusExpirationView = composeStory(HappyPath, Meta);
  const applyCouponErrorPromise = new Promise((resolve) => {
    resolve({
      success: false,
      error: "apply_renewal_coupon_error",
    });
  });
  const applyCouponSuccessPromise = new Promise((resolve) => {
    resolve({
      success: true,
    });
  });
  render(
    <PlusExpirationView
      applyCouponAction={jest
        .fn()
        .mockReturnValueOnce(applyCouponErrorPromise)
        .mockReturnValueOnce(applyCouponSuccessPromise)}
    />,
  );

  const renewalButton = screen.getByRole("button", {
    name: "Renew subscription",
  });
  await user.click(renewalButton);
  await applyCouponErrorPromise;

  expect(screen.getByText(/Couldn’t renew subscription./)).toBeInTheDocument();

  const retryButton = screen.getByRole("button", { name: "Try again" });
  await user.click(retryButton);
  await applyCouponSuccessPromise;
  expect(
    screen.queryByText(/Couldn’t renew subscription./),
  ).not.toBeInTheDocument();
  expect(
    screen.getByRole("heading", {
      name: "Thanks for renewing your subscription",
    }),
  ).toBeInTheDocument();
});

it("tells free users that this is only available to existing Plus users", () => {
  const PlusExpirationView = composeStory(FreeUser, Meta);
  render(<PlusExpirationView />);

  const heading = screen.getByRole("heading", {
    name: "Discount valid for current ⁨Monitor Plus⁩ customers",
  });
  const cta = screen.getByRole("link", {
    name: "Subscribe to ⁨Monitor Plus⁩",
  });
  expect(heading).toBeInTheDocument();
  expect(cta).toBeInTheDocument();
});

it("doesn't allow people to apply the coupon twice", () => {
  const PlusExpirationView = composeStory(CouponAlreadyApplied, Meta);
  render(<PlusExpirationView />);

  const heading = screen.getByRole("heading", {
    name: "Discount code already applied",
  });
  expect(heading).toBeInTheDocument();
});

it("only applies to people whose subscriptions are expiring", () => {
  const PlusExpirationView = composeStory(NotExpiring, Meta);
  render(<PlusExpirationView />);

  const heading = screen.getByRole("heading", {
    name: "Your ⁨Monitor Plus⁩ subscription is still active",
  });
  expect(heading).toBeInTheDocument();
});
