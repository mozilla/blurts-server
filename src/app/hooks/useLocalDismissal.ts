/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { useState } from "react";
import { useCookies } from "react-cookie";

export const COOKIE_DISMISSAL_MAX_AGE_IN_SECONDS = 100 * 365 * 24 * 60 * 60;

export type DismissOptions = {
  /** If true, the dismissal won't take effect right away, but the cookie to store the dismissal _will_ be set. */
  soft?: boolean;
};

export type DismissalData = {
  isDismissed: boolean;
  dismiss: (options?: DismissOptions) => void;
};

export type DismissalOptions = {
  /** How long the dismissal should last, in seconds. Note that by default, the cookie will be deleted in 30 days. */
  duration?: number;
};

/**
 * This can be used to store a cookie to remember that something was dismissed.
 *
 * @param key Key to identity the item-to-be-dismissed with (i.e. to use in the cookie name). Tip: incorporate the user's ID to make a dismissal user-specific.
 * @param options See {@link DismissalOptions}.
 * @returns Whether the item has been dismissed yet, and a function to call to dismiss the item.
 */
export function useLocalDismissal(
  key: string,
  options: DismissalOptions = {},
): DismissalData {
  const cookieId = key + "_dismissed";
  const [cookies, setCookie] = useCookies([cookieId], {
    doNotUpdate: false,
  });
  const cookieValue = cookies[cookieId] as string | undefined;

  const [isDismissed, setIsDismissed] = useState(
    hasDismissedCookie(cookieValue, options.duration),
  );

  const dismiss = (dismissOptions?: DismissOptions) => {
    const maxAgeInSeconds =
      /* c8 ignore next 6 */
      // Since the Node 20.10 upgrade, it's been intermittently marking this
      // (and this comment) as uncovered, even though I think it's covered by
      // tests.
      typeof options.duration === "number"
        ? options.duration
        : COOKIE_DISMISSAL_MAX_AGE_IN_SECONDS;
    setCookie(cookieId, Date.now().toString(), {
      maxAge: maxAgeInSeconds,
    });
    if (dismissOptions?.soft !== true) {
      setIsDismissed(true);
    }
  };

  return {
    isDismissed: isDismissed,
    dismiss: dismiss,
  };
}

function hasDismissedCookie(cookieValue?: string, duration?: number): boolean {
  const dismissalTimeStamp =
    /* c8 ignore next 4 */
    // Since the Node 20.10 upgrade, it's been intermittently marking this (and
    // this comment) as uncovered, even though I think it's covered by tests.
    typeof cookieValue === "string"
      ? Number.parseInt(cookieValue, 10)
      : // Unfortunately react-cookie seems to implicitly parse the cookie value
        // into a number based on unknown heuristics. Ideally, we'd just
        // explicitly do that ourselves (i.e. on the line above) and remove this
        // condition, but it's not currently possible to pass the `doNotParse`
        // option to the hook. See
        // https://github.com/bendotcodes/cookies/issues/448
        typeof cookieValue === "number"
        ? cookieValue
        : undefined;

  const wasDismissedBefore =
    // To be dismissed, the cookie has to be set, and either...
    typeof dismissalTimeStamp === "number" &&
    //   ...the dismissal should not be limited in duration, or...
    /* c8 ignore next 3: useful for banners, we removed <RebrandAnnouncement> in MNTOR-3026*/
    (typeof duration !== "number" ||
      //   ...the dismissal was long enough ago:
      Date.now() - dismissalTimeStamp <= duration * 1000);

  return wasDismissedBefore;
}
