/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { vi, describe, it, expect } from "vitest";
import { type Mock } from "vitest";
import { act, renderHook } from "@testing-library/react";
import {
  COOKIE_DISMISSAL_MAX_AGE_IN_SECONDS,
  useLocalDismissal,
} from "./useLocalDismissal";
import { useCookies } from "react-cookie";

vi.mock("react-cookie", () => {
  return {
    useCookies: vi.fn(),
  };
});

const mockedUseCookies = useCookies as Mock;

describe("useLocalDismissal", () => {
  it("marks a dismissal as dismissed if the dismissal cookie is present", () => {
    mockedUseCookies.mockReturnValueOnce([
      { some_key_dismissed: Date.now().toString() },
    ]);
    const { result } = renderHook(() => useLocalDismissal("some_key"));

    const dismissal = result.current;
    expect(dismissal.isDismissed).toBe(true);
  });

  it("marks a dismissal as dismissed if the dismissal cookie is present and returned as a number (see https://github.com/bendotcodes/cookies/issues/448)", () => {
    mockedUseCookies.mockReturnValueOnce([{ some_key_dismissed: Date.now() }]);
    const { result } = renderHook(() => useLocalDismissal("some_key"));

    const dismissal = result.current;
    expect(dismissal.isDismissed).toBe(true);
  });

  it("does not mark a dismissal as dismissed if the dismissal cookie is present, but too far in the past", () => {
    // The dismissal cookie should have been set more than a second (the
    // `duration`) ago:
    mockedUseCookies.mockReturnValueOnce([
      { some_key_dismissed: (Date.now() - 1001).toString() },
    ]);
    const { result } = renderHook(() =>
      useLocalDismissal("some_key", { duration: 1 }),
    );

    const dismissal = result.current;
    expect(dismissal.isDismissed).toBe(false);
  });

  it("immediately marks a dismissal as dismissed by default", () => {
    mockedUseCookies.mockReturnValue([{}, vi.fn()]);
    const { result } = renderHook(() => useLocalDismissal("arbitrary_key"));

    act(() => {
      result.current.dismiss();
    });

    const dismissal = result.current;
    expect(dismissal.isDismissed).toBe(true);
  });

  it("sets a cookie with a default expiration time of 100 years", () => {
    const mockedSetCookie = vi.fn();
    mockedUseCookies.mockReturnValue([{}, mockedSetCookie]);
    const { result } = renderHook(() => useLocalDismissal("some_key"));

    act(() => {
      result.current.dismiss();
    });

    expect(mockedSetCookie).toHaveBeenCalledWith(
      "some_key_dismissed",
      expect.any(String),
      { maxAge: COOKIE_DISMISSAL_MAX_AGE_IN_SECONDS },
    );
  });

  it("sets the cookie's expiration time to the given value", () => {
    const mockedSetCookie = vi.fn();
    mockedUseCookies.mockReturnValue([{}, mockedSetCookie]);
    const { result } = renderHook(() =>
      useLocalDismissal("some_key", { duration: 1337 }),
    );

    act(() => {
      result.current.dismiss();
    });

    expect(mockedSetCookie).toHaveBeenCalledWith(
      "some_key_dismissed",
      expect.any(String),
      { maxAge: 1337 },
    );
  });

  it("does not immediately mark a dismissal as dismissed if the `soft` option is passed", () => {
    mockedUseCookies.mockReturnValue([{}, vi.fn()]);
    const { result } = renderHook(() => useLocalDismissal("arbitrary_key"));

    act(() => {
      result.current.dismiss({ soft: true });
    });

    const dismissal = result.current;
    expect(dismissal.isDismissed).toBe(false);
  });

  it("sets a cookie with a default expiration time of 100 years, also for `soft` dismissals", () => {
    const mockedSetCookie = vi.fn();
    mockedUseCookies.mockReturnValue([{}, mockedSetCookie]);
    const { result } = renderHook(() => useLocalDismissal("some_key"));

    act(() => {
      result.current.dismiss({ soft: true });
    });

    expect(mockedSetCookie).toHaveBeenCalledWith(
      "some_key_dismissed",
      expect.any(String),
      { maxAge: COOKIE_DISMISSAL_MAX_AGE_IN_SECONDS },
    );
  });

  it("sets the cookie's expiration time to the given value, also for `soft` dismissals", () => {
    const mockedSetCookie = vi.fn();
    mockedUseCookies.mockReturnValue([{}, mockedSetCookie]);
    const { result } = renderHook(() =>
      useLocalDismissal("some_key", { duration: 1337 }),
    );

    act(() => {
      result.current.dismiss({ soft: true });
    });

    expect(mockedSetCookie).toHaveBeenCalledWith(
      "some_key_dismissed",
      expect.any(String),
      { maxAge: 1337 },
    );
  });
});
