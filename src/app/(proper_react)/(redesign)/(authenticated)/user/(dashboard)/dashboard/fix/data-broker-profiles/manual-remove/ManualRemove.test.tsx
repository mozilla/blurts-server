/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { it, expect } from "@jest/globals";
import { render, screen } from "@testing-library/react";
import { composeStory } from "@storybook/react";
import { axe } from "jest-axe";
import { userEvent } from "@testing-library/user-event";

import Meta, { ManualRemoveViewStory } from "./ManualRemove.stories";
import { useTelemetry as useTelemetryImported } from "../../../../../../../../../hooks/useTelemetry";

const mockedRouterRefresh = jest.fn();

jest.mock("next/navigation", () => {
  return {
    useRouter: () => ({
      refresh: mockedRouterRefresh,
    }),
    usePathname: jest.fn(),
  };
});

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

// We need to override the types of `useTelemetry` here, because otherwise
// Jest infers incorrect types in `toHaveBeenCalledWith`, and throws an error.
// See https://github.com/jestjs/jest/issues/15703
const useTelemetry = useTelemetryImported as () => (
  module: string,
  eventName: string,
  data: Record<string, string>,
) => void;

it("passes the axe accessibility test suite", async () => {
  const ComposedManualRemoveView = composeStory(ManualRemoveViewStory, Meta);
  const { container } = render(<ComposedManualRemoveView />);
  expect(await axe(container)).toHaveNoViolations();
}, 10_000);

it("removes the manual resolution button once a profile has been resolved", async () => {
  const user = userEvent.setup();
  const resolveScanResult = jest.fn().mockResolvedValueOnce({ ok: true });
  const ComposedManualRemoveView = composeStory(ManualRemoveViewStory, Meta);
  render(<ComposedManualRemoveView resolveScanResult={resolveScanResult} />);

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
  const resolveScanResult = jest.fn().mockResolvedValueOnce({ ok: true });
  const ComposedManualRemoveView = composeStory(ManualRemoveViewStory, Meta);
  render(<ComposedManualRemoveView resolveScanResult={resolveScanResult} />);

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
  const resolveScanResult = jest
    .fn()
    .mockRejectedValueOnce(new Error("Failed to resolve scan result"));
  const ComposedManualRemoveView = composeStory(ManualRemoveViewStory, Meta);
  render(<ComposedManualRemoveView resolveScanResult={resolveScanResult} />);

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
  const ComposedManualRemoveView = composeStory(ManualRemoveViewStory, Meta);
  render(<ComposedManualRemoveView />);

  const initialState = screen.getAllByRole("button", {
    name: "Exposure details",
  });
  expect(initialState[0]).toHaveAttribute("aria-expanded", "true");

  await user.click(initialState[0]);
  expect(initialState[0]).toHaveAttribute("aria-expanded", "false");
});

it("confirms the correct link to the subscription plans page", () => {
  const ComposedManualRemoveView = composeStory(ManualRemoveViewStory, Meta);
  render(<ComposedManualRemoveView />);

  const cta = screen.getByRole("link", {
    name: "Remove them for me",
  });
  expect(cta).toHaveAttribute("href", "/subscription-plans");
});

it("counts how often users exit the guided flow", async () => {
  const user = userEvent.setup();
  const mockedRecord = useTelemetry();
  const AutomaticRemoveView = composeStory(ManualRemoveViewStory, Meta);
  render(<AutomaticRemoveView />);

  const exitLink = screen.getByRole("link", { name: "Return to dashboard" });
  // jsdom will complain about not being able to navigate to a different page
  // after clicking the link; suppress that error, as it's not relevant to the
  // test:
  jest.spyOn(console, "error").mockImplementationOnce(() => undefined);
  await user.click(exitLink);

  expect(mockedRecord).toHaveBeenCalledWith("button", "click", {
    button_id: "exited_guided_experience",
  });
});

it("counts how often users skip to the next section", async () => {
  const user = userEvent.setup();
  const mockedRecord = useTelemetry();
  const AutomaticRemoveView = composeStory(ManualRemoveViewStory, Meta);
  render(<AutomaticRemoveView />);

  const skipArrowLink = screen.getByRole("link", { name: "Go to next step" });
  // jsdom will complain about not being able to navigate to a different page
  // after clicking the link; suppress that error, as it's not relevant to the
  // test:
  jest.spyOn(console, "error").mockImplementationOnce(() => undefined);
  await user.click(skipArrowLink);

  expect(mockedRecord).toHaveBeenCalledWith("button", "click", {
    button_id: "next_arrow",
  });
});
