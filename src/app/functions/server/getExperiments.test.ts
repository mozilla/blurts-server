/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import {
  describe,
  it,
  expect,
  jest,
  beforeEach,
  afterAll,
} from "@jest/globals";
import { captureException } from "@sentry/node";
import { FeatureFlagName } from "../../../db/tables/featureFlags";

const headersMock: jest.Mock<() => Promise<Headers>> = jest.fn();
jest.mock("next/headers", () => ({ headers: headersMock }));

const captureExceptionMock: jest.MockedFunction<typeof captureException> =
  jest.fn();
jest.mock("@sentry/node", () => ({ captureException: captureExceptionMock }));

const loggerMock = { info: jest.fn(), error: jest.fn() };
jest.mock("./logging", () => ({ logger: loggerMock }));

const getEnabledFeatureFlagsMock = jest.fn<() => FeatureFlagName[]>();
jest.mock("../../../db/tables/featureFlags", () => ({
  getEnabledFeatureFlags: getEnabledFeatureFlagsMock,
}));

const defaultExperimentDataMock = { Features: { defaulted: true } };
const localExperimentDataMock = { Features: { local: true } };
jest.mock("../../../telemetry/generated/nimbus/experiments", () => ({
  defaultExperimentData: defaultExperimentDataMock,
  localExperimentData: localExperimentDataMock,
}));

const ORIGINAL_ENV = process.env;
const fetchMock: jest.MockedFunction<typeof fetch> = jest.fn();

beforeEach(() => {
  jest.resetModules();
  jest.clearAllMocks();
  process.env = { ...ORIGINAL_ENV };

  process.env.APP_ENV = "production";
  delete process.env.NIMBUS_SIDECAR_URL;

  global.fetch = fetchMock;
});

afterAll(() => {
  process.env = ORIGINAL_ENV;
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

  it.each(["local", undefined])(
    "returns localExperimentData in [%s] environments",
    async (environment) => {
      process.env.APP_ENV = environment;
      const { getExperiments } = await import("./getExperiments");

      const result = await getExperiments({
        experimentationId: "11111111-2222-3333-4444-555555555555",
        locale: "en-US",
        countryCode: "nl",
      });

      expect(result).toEqual(localExperimentDataMock);
      expect(fetchMock).not.toHaveBeenCalled();
    },
  );

  it("throws if NIMBUS_SIDECAR_URL is missing", async () => {
    headersMock.mockResolvedValue(new Headers([]));
    const { getExperiments } = await import("./getExperiments");

    await expect(
      getExperiments({
        experimentationId: "11111111-2222-3333-4444-555555555555",
        locale: "en-US",
        countryCode: "us",
      }),
    ).rejects.toThrow("env var NIMBUS_SIDECAR_URL not set");
    expect(fetchMock).not.toHaveBeenCalled();
  });

  it("calls Cirrus V2 when feature flag is enabled with preview param", async () => {
    process.env.NIMBUS_SIDECAR_URL = "https://cirrus.example";
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
    process.env.NIMBUS_SIDECAR_URL = "https://cirrus.example";
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
    process.env.NIMBUS_SIDECAR_URL = "https://cirrus.example/";
    headersMock.mockResolvedValue(new Headers([]));

    global.fetch = jest.fn<typeof global.fetch>().mockResolvedValue({
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
