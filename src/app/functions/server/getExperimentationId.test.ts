/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { it, expect, jest } from "@jest/globals";
import { SubscriberRow } from "knex/types/tables";
import { Session } from "next-auth";

const loggerMock = {
  error: jest.fn(),
  info: jest.fn(),
};
jest.mock("./logging", () => ({ logger: loggerMock }));

const loadNextHeadersMock =
  jest.fn<() => Promise<{ headers: () => Promise<Headers> } | null>>();
jest.mock("./loadNextHeaders", () => ({
  loadNextHeaders: loadNextHeadersMock,
}));

jest.mock("uuid", () => ({
  v5: jest.fn(() => "11111111-2222-3333-4444-555555555555"),
}));

describe("getExperimentationId", () => {
  const originalEnv = process.env;

  beforeEach(() => {
    jest.resetModules();

    process.env = { ...originalEnv };
    delete process.env.NIMBUS_UUID_NAMESPACE;
  });

  afterAll(() => {
    process.env = originalEnv;
  });

  it("returns a UUID derived from subscriberId when NIMBUS_UUID_NAMESPACE is set", async () => {
    process.env.NIMBUS_UUID_NAMESPACE = "00000000-0000-0000-0000-000000000000";
    const { getExperimentationIdFromSubscriber } = await import(
      "./getExperimentationId"
    );

    const result = await getExperimentationIdFromSubscriber({
      id: 42,
    } as SubscriberRow);
    expect(loadNextHeadersMock).not.toHaveBeenCalled();

    const { v5: uuidv5 } = await import("uuid");
    expect(uuidv5).toHaveBeenCalledWith(
      "42",
      "00000000-0000-0000-0000-000000000000",
    );

    expect(result).toBe("11111111-2222-3333-4444-555555555555");
    expect(loggerMock.error).not.toHaveBeenCalled();
    expect(loggerMock.info).not.toHaveBeenCalled();
  });

  it("throws and logs if NIMBUS_UUID_NAMESPACE is missing", async () => {
    const { v5: uuidv5 } = await import("uuid");
    const { getExperimentationIdFromSubscriber } = await import(
      "./getExperimentationId"
    );

    await expect(
      getExperimentationIdFromSubscriber({ id: 42 } as SubscriberRow),
    ).rejects.toThrow(
      "NIMBUS_UUID_NAMESPACE not set, cannot create experimentationId",
    );

    expect(loggerMock.error).toHaveBeenCalledWith(
      "NIMBUS_UUID_NAMESPACE environment variable is missing. Cannot generate experimentationId.",
    );
    expect(uuidv5).not.toHaveBeenCalled();
  });

  it("getExperimentationIdFromUserSession passes through the subscriber id", async () => {
    process.env.NIMBUS_UUID_NAMESPACE = "aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa";
    const { getExperimentationIdFromUserSession } = await import(
      "./getExperimentationId"
    );

    const user = { subscriber: { id: 42 } };
    const result = await getExperimentationIdFromUserSession(
      user as Session["user"],
    );

    const { v5: uuidv5 } = await import("uuid");
    expect(uuidv5).toHaveBeenCalledWith(
      "42",
      "aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa",
    );
    expect(result).toBe("11111111-2222-3333-4444-555555555555");
  });

  it("uses x-experimentation-id from headers for guests and logs info", async () => {
    loadNextHeadersMock.mockResolvedValue({
      headers: async () => new Headers([["x-experimentation-id", "guest-123"]]),
    });

    const { getExperimentationIdFromUserSession } = await import(
      "./getExperimentationId"
    );

    const result = await getExperimentationIdFromUserSession(null);

    expect(result).toBe("guest-123");
    expect(loggerMock.info).toHaveBeenCalledWith(
      "Using experimentationId from header for guest user",
      { experimentationId: "guest-123" },
    );
  });

  it("returns guest-no-experimentation-id-set-by-monitor-middleware and logs an error when header is missing", async () => {
    loadNextHeadersMock.mockResolvedValue({
      headers: async () => new Headers([["x-other-id", "value-123"]]),
    });

    const { getExperimentationIdFromUserSession } = await import(
      "./getExperimentationId"
    );

    const result = await getExperimentationIdFromUserSession(null);
    expect(result).toBe(
      "guest-no-experimentation-id-set-by-monitor-middleware",
    );
    expect(loggerMock.error).toHaveBeenCalledTimes(1);
  });

  it("logs info and returns undefined if loadNextHeaders returns null", async () => {
    loadNextHeadersMock.mockResolvedValue(null);

    const { getExperimentationIdFromUserSession } = await import(
      "./getExperimentationId"
    );

    const result = await getExperimentationIdFromUserSession(null);
    expect(result).toBeUndefined();
    expect(loggerMock.info).toHaveBeenCalledWith(
      "get_experimentation_id_get_x-experimentation-id_header_failed",
      expect.any(Error),
    );
  });

  it("logs info and returns undefined if next/headers throws", async () => {
    jest.mock("next/headers", () => {
      throw new Error("import failed");
    });

    const { getExperimentationIdFromUserSession } = await import(
      "./getExperimentationId"
    );

    const result = await getExperimentationIdFromUserSession(null);
    expect(result).toBeUndefined();
    expect(loggerMock.info).toHaveBeenCalledWith(
      "get_experimentation_id_get_x-experimentation-id_header_failed",
      expect.any(Error),
    );
  });
});
