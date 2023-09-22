/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { it, expect } from "@jest/globals";
import { useGa } from "./useGa";
import { render } from "@testing-library/react";

afterEach(() => {
  delete window.gtag;
});

function GaTestButton() {
  const { gtag } = useGa();

  return (
    <button
      onClick={() => {
        gtag.record({
          type: "event",
          name: "testEvent",
          params: {
            testParam: "test",
          },
        });
      }}
    >
      GA button
    </button>
  );
}

it("initializes GA", () => {
  const { container } = render(<GaTestButton />);
  expect(container).toBeInTheDocument();
  expect(window.gtag).toBeDefined();
});

it("does not initialize GA if ”Do Not Track” is enabled", () => {
  Object.defineProperty(global.navigator, "doNotTrack", { value: "1" });

  const { container } = render(<GaTestButton />);
  expect(container).toBeInTheDocument();
  expect(window.gtag).toBeUndefined();
});
