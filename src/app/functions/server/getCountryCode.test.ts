/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { it, expect, vi, afterEach } from "vitest";
import { getCountryCode } from "./getCountryCode";
import { ReadonlyHeaders } from "next/dist/server/web/spec-extension/adapters/headers";
import { createTestClientRegionToken } from "./testCountryCodeToken";

afterEach(() => {
  delete process.env.E2E_TEST_SECRET;
});

/* eslint-disable @typescript-eslint/no-explicit-any */

it("returns the GCP-detected country", () => {
  const headers: Partial<ReturnType<typeof vi.fn> & ReadonlyHeaders> = {
    get: vi.fn((header: string) => {
      if (header === "X-Client-Region") {
        return "NL";
      }
      return null;
    }),
  };
  expect(getCountryCode(headers as any)).toBe("nl");
});

it("returns the forced country for functional tests", () => {
  process.env.E2E_TEST_SECRET = "test-secret";
  const token = createTestClientRegionToken("NL");
  const headers: Partial<Headers> = {
    get: (header: string) => {
      if (header.toLowerCase() === "x-forced-client-region-token") {
        return token;
      }
      return null;
    },
  };

  const result = getCountryCode(headers as any);
  expect(result).toBe("nl");
});

it("returns the single language from the Accept-Language if no GCP-detected country is available", () => {
  const headers: Partial<ReturnType<typeof vi.fn> & ReadonlyHeaders> = {
    get: vi.fn((header: string) => {
      if (header === "Accept-Language") {
        return "nl-NL";
      }
      return null;
    }),
  };
  expect(getCountryCode(headers as any)).toBe("nl");
});

it("returns the first language from the Accept-Language if no GCP-detected country is available", () => {
  const headers: Partial<ReturnType<typeof vi.fn> & ReadonlyHeaders> = {
    get: vi.fn((header: string) => {
      if (header === "Accept-Language") {
        return "nl-NL, en-US";
      }
      return null;
    }),
  };
  expect(getCountryCode(headers as any)).toBe("nl");
});

it("returns the first language from the Accept-Language if no GCP-detected country is available, without weights being a problem", () => {
  const headers: Partial<ReturnType<typeof vi.fn> & ReadonlyHeaders> = {
    get: vi.fn((header: string) => {
      if (header === "Accept-Language") {
        return "nl-NL;q=0.8, en-US";
      }
      return null;
    }),
  };
  expect(getCountryCode(headers as any)).toBe("nl");
});

it("returns the first language from the Accept-Language if no GCP-detected country is available, ignoring locales without a country code", () => {
  const headers: Partial<ReturnType<typeof vi.fn> & ReadonlyHeaders> = {
    get: vi.fn((header: string) => {
      if (header === "Accept-Language") {
        return "nl;q=0.8, en-US";
      }
      return null;
    }),
  };
  expect(getCountryCode(headers as any)).toBe("us");
});

it("defaults to US", () => {
  const headers: Partial<ReturnType<typeof vi.fn> & ReadonlyHeaders> = {
    get: vi.fn((_header: string) => {
      return null;
    }),
  };
  expect(getCountryCode(headers as any)).toBe("us");
});
