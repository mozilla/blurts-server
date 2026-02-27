/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { expect, test, it, describe } from "vitest";
import { render } from "@testing-library/react";
import { composeStory } from "@storybook/react";
import { axe } from "vitest-axe";
import Meta, {
  TextInputFieldEmpty,
  TextInputFieldEmptyFloatingLabel,
  TextInputFieldFilled,
  TextInputFieldFilledFloatingLabel,
} from "./stories/InputField.stories";

describe("InputField", () => {
  test.each([
    TextInputFieldEmpty,
    TextInputFieldFilled,
    TextInputFieldEmptyFloatingLabel,
    TextInputFieldFilledFloatingLabel,
  ])("passes the axe accessibility test suite for %s", async (component) => {
    const ComposedInput = composeStory(component, Meta);
    const { container } = render(<ComposedInput hasFloatingLabel />);
    expect(await axe(container)).toHaveNoViolations();
  });

  it("applies floatingLabel class when hasFloatingLabel is true", () => {
    const ComposedInput = composeStory(TextInputFieldEmptyFloatingLabel, Meta);
    const { container } = render(<ComposedInput hasFloatingLabel />);

    const label = container.querySelector("label");
    expect(label).toHaveClass("floatingLabel");
    expect(label).not.toHaveClass("inputLabel");
  });

  it("applies inputLabel class when hasFloatingLabel is false", () => {
    const ComposedInput = composeStory(TextInputFieldEmpty, Meta);
    const { container } = render(<ComposedInput hasFloatingLabel={false} />);

    const label = container.querySelector("label");
    expect(label).toHaveClass("inputLabel");
    expect(label).not.toHaveClass("floatingLabel");
  });

  it("shows asterisk when field is required", () => {
    const ComposedInput = composeStory(TextInputFieldEmpty, Meta);
    const { container } = render(<ComposedInput isRequired />);

    const label = container.querySelector("label");
    const asterisk = label?.querySelector('span[aria-hidden="true"]');
    expect(asterisk).toBeInTheDocument();
    expect(asterisk).toHaveTextContent("*");
  });

  it("does not show asterisk when field is not required", () => {
    const ComposedInput = composeStory(TextInputFieldEmpty, Meta);
    const { container } = render(<ComposedInput isRequired={false} />);

    const label = container.querySelector("label");
    const asterisk = label?.querySelector('span[aria-hidden="true"]');
    expect(asterisk).not.toBeInTheDocument();
  });

  it("applies noValue class when input has no value", () => {
    const ComposedInput = composeStory(TextInputFieldEmpty, Meta);
    const { container } = render(<ComposedInput value="" />);

    const input = container.querySelector("input");
    expect(input).toHaveClass("inputField");
    expect(input).toHaveClass("noValue");
  });

  it("does not apply noValue class when input has a value", () => {
    const ComposedInput = composeStory(TextInputFieldFilled, Meta);
    const { container } = render(<ComposedInput value="test value" />);

    const input = container.querySelector("input");
    expect(input).toHaveClass("inputField");
    expect(input).not.toHaveClass("noValue");
  });

  it("applies hasError class when field is invalid", () => {
    const ComposedInput = composeStory(TextInputFieldEmpty, Meta);
    const { container } = render(
      <ComposedInput isInvalid errorMessage="Error message" />,
    );

    const input = container.querySelector("input");
    expect(input).toHaveClass("inputField");
    expect(input).toHaveClass("hasError");
  });
});
