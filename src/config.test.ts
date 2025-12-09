/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { describe, it, expect } from "@jest/globals";
import { getEnvEnum, getEnvInt, getEnvString } from "./config";

describe("getEnvString", () => {
  it("throws an error when attempting to access an undefined environment variable", () => {
    expect(() => getEnvString("UNDEFINED_ENV_VAR")).toThrow(
      "Variable $UNDEFINED_ENV_VAR is not defined in `.env`, `.env.test`, `.env.local` and `.env.test.local`, nor as an environment variable.",
    );
  });

  it("returns the fallback value when no value is defined and a fallback value is given", () => {
    expect(
      getEnvString("UNDEFINED_ENV_VAR", {
        fallbackValue: "Some fallback value",
      }),
    ).toBe("Some fallback value");
  });

  it("returns the value when defined", () => {
    expect(getEnvString("NODE_ENV")).toBe("test");
  });
});

describe("getEnvInt", () => {
  it("throws an error when attempting to access an undefined environment variable", () => {
    expect(() => getEnvInt("UNDEFINED_ENV_VAR")).toThrow(
      "Variable $UNDEFINED_ENV_VAR is not defined in `.env`, `.env.test`, `.env.local` and `.env.test.local`, nor as an environment variable.",
    );
  });

  it("returns the fallback value when attempting to access an undefined environment variable and one is given", () => {
    expect(getEnvInt("UNDEFINED_ENV_VAR", { fallbackValue: 1337 })).toBe(1337);
  });

  it("throws an error when attempting to access an environment variable that is set to something other than a valid integer", () => {
    process.env.TEST_INVALID_VAR = "Not a number";

    expect(() => getEnvInt("TEST_INVALID_VAR")).toThrow(
      "Variable $TEST_INVALID_VAR is set to [Not a number], which is not a valid number.",
    );

    delete process.env.TEST_INVALID_VAR;
  });

  it("returns the fallback value when attempting to access an environment variable that is set to something other than a valid integer and one is given", () => {
    process.env.TEST_INVALID_VAR = "Not a number";

    expect(getEnvInt("TEST_INVALID_VAR", { fallbackValue: 1337 })).toBe(1337);

    delete process.env.TEST_INVALID_VAR;
  });

  it("returns the integer value when defined", () => {
    process.env.TEST_INT_VAR = "42";

    expect(getEnvInt("TEST_INT_VAR")).toBe(42);
    expect(getEnvInt("TEST_INT_VAR")).not.toBe("42");

    delete process.env.TEST_INT_VAR;
  });
});

describe("getEnvEnum", () => {
  it("throws an error when attempting to access an undefined environment variable", () => {
    expect(() =>
      getEnvEnum("UNDEFINED_ENV_VAR", ["Valid value 1", "Valid value 2"]),
    ).toThrow(
      "Variable $UNDEFINED_ENV_VAR is not defined in `.env`, `.env.test`, `.env.local` and `.env.test.local`, nor as an environment variable.",
    );
  });

  it("returns the fallback value when attempting to access an undefined environment variable and one is given", () => {
    expect(
      getEnvEnum("UNDEFINED_ENV_VAR", ["Valid value 1", "Valid value 2"], {
        fallbackValue: "Valid value 1",
      }),
    ).toBe("Valid value 1");
  });

  it("throws an error when attempting to access an environment variable that is set to something other than one of the valid values", () => {
    process.env.TEST_INVALID_VAR = "Not a valid value";

    expect(() =>
      getEnvEnum("TEST_INVALID_VAR", ["Valid value 1", "Valid value 2"]),
    ).toThrow(
      'Variable $TEST_INVALID_VAR is set to [Not a valid value], which is not one of the allowed values: ["Valid value 1","Valid value 2"].',
    );

    delete process.env.TEST_INVALID_VAR;
  });

  it("returns the fallback value when attempting to access an environment variable that is set to something other than one of the valid values and one is given", () => {
    process.env.TEST_INVALID_VAR = "Not a valid value";

    expect(
      getEnvEnum("TEST_INVALID_VAR", ["Valid value 1", "Valid value 2"], {
        fallbackValue: "Valid value 1",
      }),
    ).toBe("Valid value 1");

    delete process.env.TEST_INVALID_VAR;
  });

  it("returns the integer value when defined", () => {
    process.env.TEST_ENUM_VAR = "Valid value 2";

    expect(
      getEnvEnum("TEST_ENUM_VAR", ["Valid value 1", "Valid value 2"]),
    ).toBe("Valid value 2");

    delete process.env.TEST_ENUM_VAR;
  });
});
