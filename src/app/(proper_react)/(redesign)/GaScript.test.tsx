/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { it, expect } from "@jest/globals";
import { render } from "@testing-library/react";
import { GaScript } from "./GaScript";

afterEach(() => {
  // Clean up script elements
  [...document.getElementsByTagName("script")].forEach((element) => {
    const isGaScriptElement = element.src.includes(
      "https://www.googletagmanager.com/gtag/js",
    );
    if (isGaScriptElement) {
      element.remove();
    }
  });
});

it("renders the GA script tag", () => {
  const { container } = render(<GaScript nonce="" />);
  expect(container).toBeInTheDocument();

  expect(document.getElementsByTagName("script").length).toBe(1);
});

it("does not render anything", () => {
  // Enable DoNotTrack
  Object.defineProperty(global.navigator, "doNotTrack", {
    value: "1",
  });

  const { container } = render(<GaScript nonce="" />);
  expect(container).toBeInTheDocument();

  expect(document.getElementsByTagName("script").length).toBe(0);
});
