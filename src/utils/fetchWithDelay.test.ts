/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { describe, it, expect, vi } from "vitest";
import { faker } from "@faker-js/faker";
import fetchWithDelay from "./fetchWithDelay";

describe("fetchWithDelay", () => {
  it("resolves after the delay", async () => {
    global.fetch = vi.fn().mockResolvedValueOnce({
      json: () => Promise.resolve({ success: true }),
    });
    const response = await fetchWithDelay(`${faker.internet.url()}/api/test`, {
      delay: 750,
    });
    const data = await response.json();
    expect(data).toStrictEqual({ success: true });
  });

  it("throws an error", async () => {
    global.fetch = vi.fn().mockRejectedValueOnce(new Error("fetch failed"));
    await expect(
      fetchWithDelay(`${faker.internet.url()}/api/test`, {
        delay: 750,
      }),
    ).rejects.toThrow("fetch failed");
  });
});
