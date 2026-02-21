/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { it, expect, describe } from "vitest";
import { render, screen } from "@testing-library/react";
import { composeStory } from "@storybook/react";
import Meta, { Primary, PrimaryLink } from "./stories/Button.stories";

describe("<Button> as a button", () => {
  it("tells screen readers to read out content changes if they happen", () => {
    const ComposedButton = composeStory(Primary, Meta);
    render(
      <ComposedButton isLoading>
        This content will be replaced by a loading message while isLoading is
        true.
      </ComposedButton>,
    );

    const button = screen.getByRole("button");
    expect(button).toHaveAttribute("aria-live", "polite");
    expect(button).toHaveAccessibleName("Loading");
  });

  it("tells screen readers to read out content changes if they might happen (i.e. isLoading is not undefined)", () => {
    const ComposedButton = composeStory(Primary, Meta);
    render(<ComposedButton isLoading={false}>Some content</ComposedButton>);

    const button = screen.getByRole("button");
    expect(button).toHaveAttribute("aria-live", "polite");
    expect(button).toHaveAccessibleName("Some content");
  });

  it("does not tell screen readers to read out content changes if they won't happen (i.e. isLoading is not defined)", () => {
    const ComposedButton = composeStory(Primary, Meta);
    render(<ComposedButton>Some content</ComposedButton>);

    const button = screen.getByRole("button");
    expect(button).not.toHaveAttribute("aria-live");
    expect(button).toHaveAccessibleName("Some content");
  });
});

describe("<Button> as a link", () => {
  it("tells screen readers to read out content changes if they happen", () => {
    const ComposedButton = composeStory(PrimaryLink, Meta);
    render(
      <ComposedButton isLoading>
        This content will be replaced by a loading message while isLoading is
        true.
      </ComposedButton>,
    );

    const button = screen.getByRole("link");
    expect(button).toHaveAttribute("aria-live", "polite");
    expect(button).toHaveAccessibleName("Loading");
  });

  it("tells screen readers to read out content changes if they might happen (i.e. isLoading is not undefined)", () => {
    const ComposedButton = composeStory(PrimaryLink, Meta);
    render(<ComposedButton isLoading={false}>Some content</ComposedButton>);

    const button = screen.getByRole("link");
    expect(button).toHaveAttribute("aria-live", "polite");
    expect(button).toHaveAccessibleName("Some content");
  });

  it("does not tell screen readers to read out content changes if they won't happen (i.e. isLoading is not defined)", () => {
    const ComposedButton = composeStory(PrimaryLink, Meta);
    render(<ComposedButton>Some content</ComposedButton>);

    const button = screen.getByRole("link");
    expect(button).not.toHaveAttribute("aria-live");
    expect(button).toHaveAccessibleName("Some content");
  });
});
