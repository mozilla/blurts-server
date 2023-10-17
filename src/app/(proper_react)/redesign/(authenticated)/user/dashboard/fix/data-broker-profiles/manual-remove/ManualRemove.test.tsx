/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { it, expect } from "@jest/globals";
import { render, screen } from "@testing-library/react";
import { composeStory } from "@storybook/react";
import { axe } from "jest-axe";
import { userEvent } from "@testing-library/user-event";

jest.mock("../../../../../../../../functions/server/l10n");

import Meta, { ManualRemoveViewStory } from "./ManualRemove.stories";

jest.mock("../../../../../../../../components/client/DataBrokerImage", () => {
  return {
    // Mock this with an empty React component. Otherwise, tests will complain:
    // > Warning: A suspended resource finished loading inside a test, but the
    // > event was not wrapped in act(...).
    // > When testing, code that resolves suspended data should be wrapped into
    // > act(...)
    DataBrokerImage: () => null,
  };
});

it("passes the axe accessibility test suite", async () => {
  const ComposedManualRemoveView = composeStory(ManualRemoveViewStory, Meta);
  const { container } = render(<ComposedManualRemoveView />);
  expect(await axe(container)).toHaveNoViolations();
});

it("removes the manual resolution button once a profile has been resolved", async () => {
  const user = userEvent.setup();
  global.fetch = jest.fn().mockResolvedValueOnce({ ok: true });
  const ComposedManualRemoveView = composeStory(ManualRemoveViewStory, Meta);
  render(<ComposedManualRemoveView />);

  const resolveButtonsBeforeResolving = screen.getAllByRole("button", {
    name: "Mark as fixed",
  });

  await user.click(resolveButtonsBeforeResolving[0]);

  const resolveButtonsAfterResolving = screen.getAllByRole("button", {
    name: "Mark as fixed",
  });
  expect(resolveButtonsAfterResolving.length).toBeLessThan(
    resolveButtonsBeforeResolving.length,
  );
});

it("keeps the manual resolution button if resolving a profile failed", async () => {
  const user = userEvent.setup();
  global.fetch = jest.fn().mockResolvedValueOnce({ ok: false });
  const ComposedManualRemoveView = composeStory(ManualRemoveViewStory, Meta);
  render(<ComposedManualRemoveView />);

  const resolveButtonsBeforeResolving = screen.getAllByRole("button", {
    name: "Mark as fixed",
  });

  await user.click(resolveButtonsBeforeResolving[0]);

  const resolveButtonsAfterResolving = screen.getAllByRole("button", {
    name: "Mark as fixed",
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
