/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { it, expect } from "@jest/globals";
import { render, screen } from "@testing-library/react";
import { composeStory } from "@storybook/react";
import { axe } from "jest-axe";
import { userEvent } from "@testing-library/user-event";

const mockedRouterRefresh = jest.fn();

jest.mock("next/navigation", () => {
  return {
    useRouter: () => ({
      refresh: mockedRouterRefresh,
    }),
    usePathname: jest.fn(),
  };
});

import Meta, { ManualRemoveViewStory } from "./ManualRemove.stories";

jest.mock("../../../../../../../../../hooks/useTelemetry");
jest.mock(
  "../../../../../../../../../components/client/exposure_card/DataBrokerImage",
  () => {
    return {
      // Mock this with an empty React component. Otherwise, tests will complain:
      // > Warning: A suspended resource finished loading inside a test, but the
      // > event was not wrapped in act(...).
      // > When testing, code that resolves suspended data should be wrapped into
      // > act(...)
      DataBrokerImage: () => null,
    };
  },
);

it("passes the axe accessibility test suite", async () => {
  const ComposedManualRemoveView = composeStory(ManualRemoveViewStory, Meta);
  const { container } = render(<ComposedManualRemoveView />);
  expect(await axe(container)).toHaveNoViolations();
}, 10_000);

it("removes the manual resolution button once a profile has been resolved", async () => {
  const user = userEvent.setup();
  global.fetch = jest.fn().mockResolvedValueOnce({ ok: true });
  const ComposedManualRemoveView = composeStory(ManualRemoveViewStory, Meta);
  render(<ComposedManualRemoveView />);

  const resolveButtonsBeforeResolving = screen.getAllByRole("button", {
    name: "Resolve exposures",
  });

  await user.click(resolveButtonsBeforeResolving[0]);

  const resolveButtonsAfterResolving = screen.getAllByRole("button", {
    name: "Resolve exposures",
  });
  expect(resolveButtonsAfterResolving.length).toBeLessThan(
    resolveButtonsBeforeResolving.length,
  );
});

it("refreshes the client-side router cache after resolving a profile", async () => {
  const user = userEvent.setup();
  global.fetch = jest.fn().mockResolvedValueOnce({ ok: true });
  const ComposedManualRemoveView = composeStory(ManualRemoveViewStory, Meta);
  render(<ComposedManualRemoveView />);

  expect(mockedRouterRefresh).not.toHaveBeenCalled();

  const resolveButtonsBeforeResolving = screen.getAllByRole("button", {
    name: "Resolve exposures",
  });

  await user.click(resolveButtonsBeforeResolving[0]);

  // See https://nextjs.org/docs/app/building-your-application/caching#4-nextjs-caching-on-the-client-router-cache
  expect(mockedRouterRefresh).toHaveBeenCalledTimes(1);
});

it("keeps the manual resolution button if resolving a profile failed", async () => {
  const user = userEvent.setup();
  global.fetch = jest.fn().mockResolvedValueOnce({ ok: false });
  const ComposedManualRemoveView = composeStory(ManualRemoveViewStory, Meta);
  render(<ComposedManualRemoveView />);

  const resolveButtonsBeforeResolving = screen.getAllByRole("button", {
    name: "Resolve exposures",
  });

  await user.click(resolveButtonsBeforeResolving[0]);

  const resolveButtonsAfterResolving = screen.getAllByRole("button", {
    name: "Resolve exposures",
  });
  expect(resolveButtonsAfterResolving.length).toBe(
    resolveButtonsBeforeResolving.length,
  );
});

it("shows the progress indicator on the manual resolution flow", () => {
  const ComposedManualRemoveView = composeStory(ManualRemoveViewStory, Meta);
  render(<ComposedManualRemoveView />);

  const guidedStepsNavigation = screen.queryByRole("navigation", {
    name: "Guided steps",
  });
  expect(guidedStepsNavigation).toBeInTheDocument();
});

it("expands one card at a time", async () => {
  const user = userEvent.setup();
  global.fetch = jest.fn().mockResolvedValueOnce({ ok: true });
  const ComposedManualRemoveView = composeStory(ManualRemoveViewStory, Meta);
  render(<ComposedManualRemoveView />);
  const expandButtons = screen.getAllByRole("button", {
    name: "Exposure details",
  });

  // the first card is expanded by default
  expect(expandButtons[0]).toHaveAttribute("aria-expanded", "true");

  await user.click(expandButtons[0]);

  expect(expandButtons[0]).toHaveAttribute("aria-expanded", "false");

  await user.click(expandButtons[1]);

  expect(expandButtons[0]).toHaveAttribute("aria-expanded", "false");
  expect(expandButtons[1]).toHaveAttribute("aria-expanded", "true");
});

it("closes previously active card onclick", async () => {
  const user = userEvent.setup();
  global.fetch = jest.fn().mockResolvedValueOnce({ ok: true });
  const ComposedManualRemoveView = composeStory(ManualRemoveViewStory, Meta);
  render(<ComposedManualRemoveView />);

  const initialState = screen.getAllByRole("button", {
    name: "Exposure details",
  });
  expect(initialState[0]).toHaveAttribute("aria-expanded", "true");

  await user.click(initialState[0]);
  expect(initialState[0]).toHaveAttribute("aria-expanded", "false");
});

it("confirms the correct link to the subscription plans page with the feature flag SubscriptionPlansPage disabled", () => {
  const ComposedManualRemoveView = composeStory(ManualRemoveViewStory, Meta);
  render(<ComposedManualRemoveView />);

  const cta = screen.getByRole("link", {
    name: "Remove them for me",
  });
  expect(cta).toHaveAttribute(
    "href",
    "/user/dashboard/fix/data-broker-profiles/automatic-remove",
  );
});

it("confirms the correct link to the subscription plans page with the feature flag SubscriptionPlansPage enabled", () => {
  const ComposedManualRemoveView = composeStory(ManualRemoveViewStory, Meta);
  render(
    <ComposedManualRemoveView
      enabledFeatureFlags={["SubscriptionPlansPage"]}
    />,
  );

  const cta = screen.getByRole("link", {
    name: "Remove them for me",
  });
  expect(cta).toHaveAttribute("href", "/subscription-plans");
});
