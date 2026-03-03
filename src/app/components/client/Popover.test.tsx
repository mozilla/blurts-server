/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { composeStory } from "@storybook/react";
import Meta, { PopoverDefault, PopoverClosed } from "./stories/Popover.stories";

it("renders children when open", () => {
  const Popover = composeStory(PopoverDefault, Meta);
  render(<Popover />);
  expect(screen.getByText("Popover content")).toBeInTheDocument();
});

it("does not render children when closed", () => {
  const Popover = composeStory(PopoverClosed, Meta);
  render(<Popover />);
  expect(screen.queryByText("Popover content")).not.toBeInTheDocument();
});

it("registers an orientation change listener on mount and removes it on unmount", () => {
  const orientationMock = globalThis.screen.orientation;

  const Popover = composeStory(PopoverDefault, Meta);
  const { unmount } = render(<Popover />);

  expect(orientationMock.addEventListener).toHaveBeenCalledWith(
    "change",
    expect.any(Function),
  );

  const addCallCount = vi.mocked(orientationMock.addEventListener).mock.calls
    .length;
  unmount();

  expect(orientationMock.removeEventListener).toHaveBeenCalledWith(
    "change",
    expect.any(Function),
  );
  // Ensure we removed the exact same number of handlers we added
  expect(vi.mocked(orientationMock.removeEventListener).mock.calls.length).toBe(
    addCallCount,
  );
});
