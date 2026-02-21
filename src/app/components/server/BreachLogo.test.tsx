/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";

import { FallbackLogo } from "./BreachLogo";

describe("<FallbackLogo>", () => {
  it("displays the first letter of the given name, with a coloured background derived from that name", () => {
    render(<FallbackLogo name="Some name" />);

    const iconNotHiddenForScreenReaders = screen.queryByRole("img");
    expect(iconNotHiddenForScreenReaders).not.toBeInTheDocument();

    const icon = screen.getByRole("presentation", { hidden: true });
    expect(icon).toHaveTextContent("S");
    expect(icon).toHaveClass("purple10");
  });
});
