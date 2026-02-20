/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { it, expect, describe } from "vitest";
import { render } from "@testing-library/react";
import { composeStory } from "@storybook/react";
import { axe } from "vitest-axe";
import Meta, { ShellAuthenticatedRedesign } from "./Shell.stories";

describe("ShellAuthenticated", () => {
  it("passes the axe accessibility test suite", async () => {
    const ShellComponent = composeStory(ShellAuthenticatedRedesign, Meta);
    const { container } = render(<ShellComponent />);
    expect(await axe(container)).toHaveNoViolations();
  }, 10_000);
});

describe("ShellAuthenticatedRedesign", () => {
  it("passes the axe accessibility test suite", async () => {
    const ShellComponent = composeStory(ShellAuthenticatedRedesign, Meta);
    const { container } = render(<ShellComponent />);
    expect(await axe(container)).toHaveNoViolations();
  }, 10_000);
});
