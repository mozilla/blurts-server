/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

//@vitest-environment node

vi.mock("../../../utils/hibp", () => {
  return {
    fetchHibpBreaches: vi.fn(), // overwrite in tests
  };
});

vi.mock("../../../config", () => {
  return {
    config: {},
  };
});

vi.mock("@sentry/node", async (importOriginal) => {
  const actual = await importOriginal<typeof import("@sentry/node")>();
  return {
    ...actual,
    isInitialized: vi.fn(),
    flush: vi.fn(),
  };
});

import { vi, describe, it, expect, beforeEach } from "vitest";
import * as HIBP from "../../../utils/hibp";
import { RemoteSettingsClient } from "../../../utils/remoteSettingsClient";
import { validateConfig, main } from "./updateBreachesInRemoteSettings";
import HibpData from "../../../test/seeds/hibpBreachResponse.json";
import * as configModule from "../../../config";
import * as Sentry from "@sentry/node";
import { mockLogger } from "../../../test/helpers/mockLogger";

describe("updateBreachesInRemoteSettings job", () => {
  let fetchBreachesSpy: ReturnType<typeof vi.spyOn>;
  let addBreachSpy: ReturnType<typeof vi.spyOn>;
  let reviewSpy: ReturnType<typeof vi.spyOn>;
  let mockLog: ReturnType<typeof mockLogger>;

  beforeEach(async () => {
    vi.resetAllMocks();
    mockLog = mockLogger();
    fetchBreachesSpy = vi.spyOn(
      RemoteSettingsClient.prototype,
      "fetchRemoteBreachNames",
    );
    addBreachSpy = vi.spyOn(RemoteSettingsClient.prototype, "addNewBreach");
    reviewSpy = vi.spyOn(
      RemoteSettingsClient.prototype,
      "requestBreachesReview",
    );

    // The `config` object is typed as readonly, because in normal code,
    // we don't want to write to it. We're fine overriding them in tests though,
    // hence the `as any`:
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (configModule.config as any).fxRemoteSettingsWriterUser = "user";
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (configModule.config as any).fxRemoteSettingsWriterPass = "pass";
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (configModule.config as any).fxRemoteSettingsWriterServer =
      "https://example.com/v1";
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (configModule.config as any).appEnv = "local";
  });
  describe("validation", () => {
    it("throws if environment variables are missing", () => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      delete (configModule as any).config.fxRemoteSettingsWriterUser;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      delete (configModule as any).config.fxRemoteSettingsWriterPass;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      delete (configModule as any).config.fxRemoteSettingsWriterServer;

      expect(() => validateConfig()).toThrow(
        /requires FX_REMOTE_SETTINGS_WRITER_SERVER/i,
      );
    });
    it("returns the config when all required env vars present", () => {
      const config = validateConfig();
      expect(config).toEqual({
        user: "user",
        password: "pass",
        server: "https://example.com/v1",
        breachesPath: "buckets/main-workspace/collections/fxmonitor-breaches",
      });
    });
  });
  describe("shutdown handling", () => {
    let sentrySpy: ReturnType<typeof vi.spyOn>;
    let sentryFlushSpy: ReturnType<typeof vi.spyOn>;
    beforeEach(() => {
      sentrySpy = vi.spyOn(Sentry, "isInitialized").mockReturnValue(true);
      sentryFlushSpy = vi.spyOn(Sentry, "flush").mockResolvedValue(true);
    });
    it("Ensures logs are sent and flushes Sentry prior to exiting", async () => {
      vi.mocked(HIBP.fetchHibpBreaches).mockResolvedValue([]);
      fetchBreachesSpy.mockResolvedValueOnce(new Set([]));
      await main(mockLog);
      // main() calls parentLogger.child() and then child.end() — verify that.
      const childLog = vi.mocked(mockLog.child).mock.results[0]
        .value as ReturnType<typeof mockLogger>;
      expect(childLog.end).toHaveBeenCalled();
      expect(sentrySpy).toHaveBeenCalled();
      expect(sentryFlushSpy).toHaveBeenCalled();
    });
  });
  describe("main job", () => {
    it("skips review request if all posts failed", async () => {
      const breach = HibpData[0] as HIBP.HibpGetBreachesResponse[number];
      vi.mocked(HIBP.fetchHibpBreaches).mockResolvedValue([breach]);
      fetchBreachesSpy.mockResolvedValueOnce(new Set([]));
      addBreachSpy.mockRejectedValueOnce(new Error("Nope"));
      await main(mockLog);
      expect(reviewSpy).not.toHaveBeenCalled();
    });
    it("skips review request if nothing new was posted", async () => {
      const breach = HibpData[0] as HIBP.HibpGetBreachesResponse[number];
      vi.mocked(HIBP.fetchHibpBreaches).mockResolvedValue([breach]);
      fetchBreachesSpy.mockResolvedValueOnce(new Set([breach.Name]));
      await main(mockLog);
      expect(reviewSpy).not.toHaveBeenCalled();
    });
    it("happy path: logs counts, posts filtered breaches, requests review, and exits", async () => {
      const breaches = HibpData.slice(0, 3) as HIBP.HibpGetBreachesResponse;
      vi.mocked(HIBP.fetchHibpBreaches).mockResolvedValue(breaches);
      fetchBreachesSpy.mockResolvedValueOnce(new Set([]));
      addBreachSpy.mockResolvedValue(undefined);
      reviewSpy.mockResolvedValue(undefined);

      await main(mockLog);
      expect(vi.mocked(HIBP.fetchHibpBreaches)).toHaveBeenCalledTimes(1);
      // First mock breach is ignored because of no passwords
      expect(addBreachSpy).toHaveBeenCalledTimes(2);
      expect(reviewSpy).toHaveBeenCalledTimes(1);
    });
    it("happy path: exits with code 1 if review fails", async () => {
      const breaches = HibpData.slice(0, 3) as HIBP.HibpGetBreachesResponse;
      vi.mocked(HIBP.fetchHibpBreaches).mockResolvedValue(breaches);
      fetchBreachesSpy.mockResolvedValueOnce(new Set([]));
      addBreachSpy.mockResolvedValue(undefined);
      reviewSpy.mockRejectedValueOnce(new Error("Nope"));

      const prevExitCode = process.exitCode;
      process.exitCode = undefined;

      await main(mockLog);
      expect(vi.mocked(HIBP.fetchHibpBreaches)).toHaveBeenCalledTimes(1);
      expect(addBreachSpy).toHaveBeenCalledTimes(2);
      expect(reviewSpy).toHaveBeenCalledTimes(1);
      expect(process.exitCode).toEqual(1);

      process.exitCode = prevExitCode;
    });
  });
});
