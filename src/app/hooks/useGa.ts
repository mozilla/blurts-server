/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import { useEffect } from "react";
import { useHasRenderedClientSide } from "./useHasRenderedClientSide";

type Ga4EventOptions = {
  type: "event";
  name: string;
  params: object;
};

export const useGa = (): {
  gtag: {
    record: (options: Ga4EventOptions) => void;
  };
} => {
  const hasRenderedClientSide = useHasRenderedClientSide();
  const debugMode =
    // `NEXT_PUBLIC_GA4_DEBUG_MODE` being false doesn't negatively impact
    // the reliability of our tests:
    /* c8 ignore next 2 */
    process.env.NEXT_PUBLIC_GA4_DEBUG_MODE === "true" &&
    process.env.NODE_ENV !== "test";

  useEffect(() => {
    // Enable upload only if the user has not opted out of tracking.
    const uploadEnabled = navigator.doNotTrack !== "1";

    if (!uploadEnabled) {
      // Never run in tests:
      /* c8 ignore next 3 */
      if (debugMode) {
        console.info("Did not initialize GA4 due to DoNotTrack.");
      }
      return;
    }
  }, [debugMode]);

  return {
    gtag: {
      record: (options) => {
        if (hasRenderedClientSide && window !== undefined && window.gtag) {
          window.gtag(options);
          // Only relevant for local development
          /* c8 ignore next 3 */
        } else if (hasRenderedClientSide && !window.gtag && debugMode) {
          console.info("GA4 is not initialized.");
        }
      },
    },
  };
};
