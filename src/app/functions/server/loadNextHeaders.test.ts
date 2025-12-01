/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { it, expect, jest } from "@jest/globals";

describe("loadNextHeaders", () => {
  beforeEach(() => {
    jest.resetModules();
    jest.unmock("next/headers");
  });

  it("gets the correct header value", async () => {
    const mockHeaders = jest.fn(() => new Headers([["x-test-header", "test"]]));
    jest.mock("next/headers", () => ({ headers: mockHeaders }));

    const { loadNextHeaders } = await import("./loadNextHeaders");

    const nextHeadersModule = await loadNextHeaders();
    expect(nextHeadersModule).not.toBeNull();

    const nextHeaders = await nextHeadersModule?.headers();
    expect(nextHeaders?.get("x-test-header")).toBe("test");
  });

  it("caches the `next/headers` import", async () => {
    const { loadNextHeaders } = await import("./loadNextHeaders");

    const nextHeaders1 = loadNextHeaders();
    const nextHeaders2 = loadNextHeaders();
    expect(nextHeaders1).toBe(nextHeaders2);

    const nextHeadersModule1 = await nextHeaders1;
    const nextHeadersModule2 = await nextHeaders2;
    expect(nextHeadersModule1).toBe(nextHeadersModule2);
  });

  it("resolves to `null` if the import fails", async () => {
    // Fail by throwing during import
    jest.mock("next/headers", () => {
      throw new Error("Loading next/headers failed");
    });

    const { loadNextHeaders } = await import("./loadNextHeaders");

    const nextHeadersModule = await loadNextHeaders();
    expect(nextHeadersModule).toBeNull();
  });
});
