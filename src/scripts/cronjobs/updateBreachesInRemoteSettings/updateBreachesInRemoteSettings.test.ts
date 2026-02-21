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

import {
  vi,
  describe,
  it,
  expect,
  beforeEach,
  beforeAll,
  afterAll,
} from "vitest";
import * as HIBP from "../../../utils/hibp";
import { logger } from "../../../app/functions/server/logging";
import { RemoteSettingsClient } from "../../../utils/remoteSettingsClient";
import { validateConfig, main } from "./updateBreachesInRemoteSettings";
import HibpData from "../../../test/seeds/hibpBreachResponse.json";
import * as configModule from "../../../config";
import * as Sentry from "@sentry/node";

// These can't be run because of jsdom environment and interaction
// with logger. Skipping them results in coverage failure since the file
// is loaded.
// I tried to mock the logger, but I couldn't mock the event handler
// because setImmediate isn't in jsdom
// And I can't run this in jest node environment because then the
// current jest setup fails.
// I don't know 100% if these tests work, but when we refactor to run
// node tests in the appropriate environment they can be revisited.
// It just seemed wasteful not to include.
// For now I'm relying on manual testing via dev environment.
// TODO: [MNTOR-1880]

describe.todo("updateBreachesInRemoteSettings job", () => {
  const fetchBreachesSpy = vi.spyOn(
    RemoteSettingsClient.prototype,
    "fetchRemoteBreachNames",
  );
  const addBreachSpy = vi.spyOn(RemoteSettingsClient.prototype, "addNewBreach");
  const reviewSpy = vi.spyOn(
    RemoteSettingsClient.prototype,
    "requestBreachesReview",
  );

  beforeEach(async () => {
    vi.resetAllMocks();

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
    // Spies are created inside beforeAll so they don't run during describe
    // evaluation when the suite is skipped (ESM exports can't be spied on
    // at module-evaluation time in Vitest).
    let endSpy: ReturnType<typeof vi.spyOn>;
    let sentrySpy: ReturnType<typeof vi.spyOn>;
    let sentryFlushSpy: ReturnType<typeof vi.spyOn>;
    beforeAll(() => {
      endSpy = vi.spyOn(logger, "end");
      sentrySpy = vi.spyOn(Sentry, "isInitialized").mockReturnValue(true);
      sentryFlushSpy = vi.spyOn(Sentry, "flush").mockResolvedValue(true);
    });
    afterAll(() => {
      endSpy.mockRestore();
      sentrySpy.mockRestore();
      sentryFlushSpy.mockRestore();
    });
    it("Ensures logs are sent and flushes Sentry prior to exiting", async () => {
      vi.mocked(HIBP.fetchHibpBreaches).mockResolvedValue([]);
      fetchBreachesSpy.mockResolvedValueOnce(new Set([]));
      await main(logger);
      expect(endSpy).toHaveBeenCalled();
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
      await main(logger);
      expect(reviewSpy).not.toHaveBeenCalled();
    });
    it("skips review request if nothing new was posted", async () => {
      const breach = HibpData[0] as HIBP.HibpGetBreachesResponse[number];
      vi.mocked(HIBP.fetchHibpBreaches).mockResolvedValue([breach]);
      fetchBreachesSpy.mockResolvedValueOnce(new Set([breach.Name]));
      await main(logger);
      expect(reviewSpy).not.toHaveBeenCalled();
    });
    it("happy path: logs counts, posts filtered breaches, requests review, and exits", async () => {
      const breaches = HibpData.slice(2) as HIBP.HibpGetBreachesResponse;
      vi.mocked(HIBP.fetchHibpBreaches).mockResolvedValue(breaches);
      fetchBreachesSpy.mockResolvedValueOnce(new Set([]));
      addBreachSpy.mockResolvedValue(undefined);
      reviewSpy.mockResolvedValue(undefined);

      await main(logger);
      expect(vi.mocked(HIBP.fetchHibpBreaches)).toHaveBeenCalledTimes(1);
      expect(addBreachSpy).toHaveBeenCalledTimes(2);
      expect(reviewSpy).toHaveBeenCalledTimes(1);
    });
    it("happy path: exits with code 1 if review fails", async () => {
      const breaches = HibpData.slice(2) as HIBP.HibpGetBreachesResponse;
      vi.mocked(HIBP.fetchHibpBreaches).mockResolvedValue(breaches);
      fetchBreachesSpy.mockResolvedValueOnce(new Set([]));
      addBreachSpy.mockResolvedValue(undefined);
      reviewSpy.mockRejectedValueOnce(new Error("Nope"));

      // Probably undefined
      const prevExitCode = process.exitCode;
      delete process.exitCode;

      await main(logger);
      expect(vi.mocked(HIBP.fetchHibpBreaches)).toHaveBeenCalledTimes(1);
      expect(addBreachSpy).toHaveBeenCalledTimes(2);
      expect(reviewSpy).toHaveBeenCalledTimes(1);
      expect(process.exitCode).toEqual(1);

      process.exitCode = prevExitCode;
    });
  });
});
