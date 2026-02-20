/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { describe, it, expect, vi, beforeEach, type MockedFunction } from "vitest";
import { captureException } from "@sentry/node";
import { FeatureFlagName } from "../../../db/tables/featureFlags";

const headersMock: MockedFunction<() => Promise<Headers>> = vi.fn();
vi.mock("next/headers", () => ({ headers: headersMock }));

vi.mock("../../../config", () => {
  return {
    config: {},
  };
});

const captureExceptionMock: MockedFunction<typeof captureException> =
  vi.fn();
vi.mock("@sentry/node", () => ({ captureException: captureExceptionMock }));

const loggerMock = { info: vi.fn(), error: vi.fn() };
vi.mock("./logging", () => ({ logger: loggerMock }));

const getEnabledFeatureFlagsMock = vi.fn<() => FeatureFlagName[]>();
vi.mock("../../../db/tables/featureFlags", () => ({
  getEnabledFeatureFlags: getEnabledFeatureFlagsMock,
}));

const defaultExperimentDataMock = { Features: { defaulted: true } };
const localExperimentDataMock = { Features: { local: true } };
vi.mock("../../../telemetry/generated/nimbus/experiments", () => ({
  defaultExperimentData: defaultExperimentDataMock,
  localExperimentData: localExperimentDataMock,
}));

const fetchMock: MockedFunction<typeof fetch> = vi.fn();

beforeEach(async () => {
  vi.resetModules();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const configModule = await import("../../../config") as any;
  configModule.config.appEnv = "production";
  delete configModule.config.nimbusSidecarUrl;

  global.fetch = fetchMock;
});

describe("getExperiments", () => {
  it("returns defaultExperimentData when experimentationId is missing", async () => {
    headersMock.mockResolvedValue(new Headers([]));
    const { getExperiments } = await import("./getExperiments");
    const result = await getExperiments({
      experimentationId: undefined,
      locale: "en-US",
      countryCode: "nl",
    });

    expect(result).toEqual(defaultExperimentDataMock);
    expect(fetchMock).not.toHaveBeenCalled();
  });

  it("returns localExperimentData in local environments", async () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const configModule = await import("../../../config") as any;
    configModule.config.appEnv = "local";
    const { getExperiments } = await import("./getExperiments");

    const result = await getExperiments({
      experimentationId: "11111111-2222-3333-4444-555555555555",
      locale: "en-US",
      countryCode: "nl",
    });

    expect(result).toEqual(localExperimentDataMock);
    expect(fetchMock).not.toHaveBeenCalled();
  });

  it("calls Cirrus V2 with preview param", async () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const configModule = await import("../../../config") as any;
    configModule.config.nimbusSidecarUrl = "https://cirrus.example";
    headersMock.mockResolvedValue(
      new Headers([["x-nimbus-preview-mode", "true"]]),
    );

    const responseJson = {
      Features: { foo: { enabled: true } },
      Enrollments: { bar: { enrolled: true } },
    };

    fetchMock.mockResolvedValue({
      ok: true,
      status: 200,
      json: () => Promise.resolve(responseJson),
    } as Response);

    const { getExperiments } = await import("./getExperiments");

    const result = await getExperiments({
      experimentationId: "guest-aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa",
      locale: "en-US",
      countryCode: "us",
    });

    expect(fetchMock).toHaveBeenCalledTimes(1);
    const [calledUrl, calledInit] = fetchMock.mock.calls[0];
    expect(calledUrl.toString()).toMatch(
      "https://cirrus.example/v2/features?nimbus_preview=true",
    );

    expect(calledInit).toMatchObject({
      method: "POST",
      headers: { "Content-Type": "application/json" },
    });
    const body = JSON.parse(calledInit!.body as string);
    expect(body).toEqual({
      client_id: "guest-aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa",
      context: { language: "en", region: "US" },
    });

    expect(result).toEqual(responseJson);
    expect(loggerMock.info).toHaveBeenCalledWith(
      "Sending request to Cirrus",
      expect.objectContaining({
        serverUrl: "https://cirrus.example/v2/features?nimbus_preview=true",
        previewMode: true,
      }),
    );
  });

  it("fallsback to defaultExperimentData when not experiment data is returned by Cirrus", async () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const configModule = await import("../../../config") as any;
    configModule.config.nimbusSidecarUrl = "https://cirrus.example";
    headersMock.mockResolvedValue(
      new Headers([["x-nimbus-preview-mode", "true"]]),
    );

    fetchMock.mockResolvedValue({
      ok: true,
      status: 200,
      json: () => Promise.resolve(null),
    } as Response);

    const { getExperiments } = await import("./getExperiments");

    const result = await getExperiments({
      experimentationId: "guest-aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa",
      locale: "en-US",
      countryCode: "us",
    });

    expect(fetchMock).toHaveBeenCalledTimes(1);
    const [calledUrl, calledInit] = fetchMock.mock.calls[0];
    expect(calledUrl.toString()).toMatch(
      "https://cirrus.example/v2/features?nimbus_preview=true",
    );

    expect(calledInit).toMatchObject({
      method: "POST",
      headers: { "Content-Type": "application/json" },
    });
    const body = JSON.parse(calledInit!.body as string);
    expect(body).toEqual({
      client_id: "guest-aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa",
      context: { language: "en", region: "US" },
    });

    expect(result).toEqual(defaultExperimentDataMock);
    expect(loggerMock.info).toHaveBeenCalledWith(
      "Sending request to Cirrus",
      expect.objectContaining({
        serverUrl: "https://cirrus.example/v2/features?nimbus_preview=true",
        previewMode: true,
      }),
    );
  });

  it("logs error, captures exception, and returns defaultExperimentData on error response", async () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const configModule = await import("../../../config") as any;
    configModule.config.nimbusSidecarUrl = "https://cirrus.example";
    headersMock.mockResolvedValue(new Headers([]));

    global.fetch = vi.fn<typeof global.fetch>().mockResolvedValue({
      ok: false,
      status: 502,
      json: () => Promise.reject({ error: "error" }),
    } as Response);

    const { getExperiments } = await import("./getExperiments");

    const result = await getExperiments({
      experimentationId: "aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa",
      locale: "nl-NL",
      countryCode: "nl",
    });

    expect(loggerMock.error).toHaveBeenCalledWith(
      "Cirrus request failed",
      expect.objectContaining({
        status: 502,
        url: "https://cirrus.example/v2/features",
      }),
    );
    expect(loggerMock.error).toHaveBeenCalledWith(
      "Could not connect to Cirrus",
      expect.objectContaining({
        serverUrl: new URL("https://cirrus.example/v2/features"),
        previewMode: false,
      }),
    );
    expect(captureExceptionMock).toHaveBeenCalledTimes(1);
    expect(result).toEqual(defaultExperimentDataMock);
  });
});
