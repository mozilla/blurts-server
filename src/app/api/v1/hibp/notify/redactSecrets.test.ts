/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { describe, it, expect } from "vitest";
import { redactSecrets, SECRET_KEYS } from "./redactSecrets";

describe("redactSecrets", () => {
  it.each(SECRET_KEYS)("redacts the value of a %s key", (word) => {
    expect(redactSecrets({ [word]: "sensitive" })).toEqual({
      [word]: "[REDACTED]",
    });
  });

  it("matches keys case insensitively and as a substring", () => {
    expect(
      redactSecrets({
        Authorization: "a",
        accessToken: "b",
        "x-goog-api-key": "c",
        CLIENT_SECRET: "d",
      }),
    ).toEqual({
      Authorization: "[REDACTED]",
      accessToken: "[REDACTED]",
      "x-goog-api-key": "[REDACTED]",
      CLIENT_SECRET: "[REDACTED]",
    });
  });

  it("keeps non secret values", () => {
    expect(redactSecrets({ projectId: "p", universeDomain: "u" })).toEqual({
      projectId: "p",
      universeDomain: "u",
    });
  });

  it("redacts nested objects, arrays and Maps at any depth", () => {
    expect(
      redactSecrets({
        a: { b: { token: "deep" } },
        list: [{ secret: "x" }, "safe"],
        meta: new Map([["authorization", ["Bearer y"]]]),
      }),
    ).toEqual({
      a: { b: { token: "[REDACTED]" } },
      list: [{ secret: "[REDACTED]" }, "safe"],
      meta: { authorization: "[REDACTED]" },
    });
  });

  it("returns primitives unchanged", () => {
    expect(redactSecrets("hi")).toBe("hi");
    expect(redactSecrets(42)).toBe(42);
    expect(redactSecrets(null)).toBe(null);
  });

  it("does not infinitely loop on a self referencing object", () => {
    const a: Record<string, unknown> = { token: "t" };
    a.self = a;
    expect(redactSecrets(a)).toEqual({
      token: "[REDACTED]",
      self: "[Circular]",
    });
  });

  it("does not infinitely loop on a mutual cycle", () => {
    const a: Record<string, unknown> = { name: "a" };
    const b: Record<string, unknown> = { name: "b" };
    a.b = b;
    b.a = a;
    expect(redactSecrets(a)).toEqual({
      name: "a",
      b: { name: "b", a: "[Circular]" },
    });
  });
});
