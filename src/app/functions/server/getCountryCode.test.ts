/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { it, expect, jest } from "@jest/globals";
import { getCountryCode } from "./getCountryCode";
import { ReadonlyHeaders } from "next/dist/server/web/spec-extension/adapters/headers";

afterEach(() => {
  delete process.env.app_env;
});

/* eslint-disable @typescript-eslint/no-explicit-any */

it("returns the GCP-detected country", () => {
  const headers: Partial<jest.Mocked<ReadonlyHeaders>> = {
    get: jest.fn((header: string) => {
      if (header === "X-Client-Region") {
        return "NL";
      }
      return null;
    }),
  };
  expect(getCountryCode(headers as any)).toBe("nl");
});

it("returns the single language from the Accept-Language if no GCP-detected country is available", () => {
  const headers: Partial<jest.Mocked<ReadonlyHeaders>> = {
    get: jest.fn((header: string) => {
      if (header === "Accept-Language") {
        return "nl-NL";
      }
      return null;
    }),
  };
  expect(getCountryCode(headers as any)).toBe("nl");
});

it("returns the first language from the Accept-Language if no GCP-detected country is available", () => {
  const headers: Partial<jest.Mocked<ReadonlyHeaders>> = {
    get: jest.fn((header: string) => {
      if (header === "Accept-Language") {
        return "nl-NL, en-US";
      }
      return null;
    }),
  };
  expect(getCountryCode(headers as any)).toBe("nl");
});

it("returns the first language from the Accept-Language if no GCP-detected country is available, without weights being a problem", () => {
  const headers: Partial<jest.Mocked<ReadonlyHeaders>> = {
    get: jest.fn((header: string) => {
      if (header === "Accept-Language") {
        return "nl-NL;q=0.8, en-US";
      }
      return null;
    }),
  };
  expect(getCountryCode(headers as any)).toBe("nl");
});

it("returns the first language from the Accept-Language if no GCP-detected country is available, ignoring locales without a country code", () => {
  const headers: Partial<jest.Mocked<ReadonlyHeaders>> = {
    get: jest.fn((header: string) => {
      if (header === "Accept-Language") {
        return "nl;q=0.8, en-US";
      }
      return null;
    }),
  };
  expect(getCountryCode(headers as any)).toBe("us");
});

it("defaults to US", () => {
  const headers: Partial<jest.Mocked<ReadonlyHeaders>> = {
    get: jest.fn((_header: string) => {
      return null;
    }),
  };
  expect(getCountryCode(headers as any)).toBe("us");
});

it("falls back to language when region is missing and `app_env` is local", () => {
  process.env.app_env = "local";

  const headers: Partial<jest.Mocked<ReadonlyHeaders>> = {
    get: jest.fn((header: string) => {
      if (header === "Accept-Language") {
        return "fr";
      }
      return null;
    }),
  };

  expect(getCountryCode(headers as any)).toBe("fr");
});
