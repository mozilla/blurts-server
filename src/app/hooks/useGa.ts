/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import { useEffect } from "react";
import { CONST_GA4_MEASUREMENT_ID } from "../../constants";

declare global {
  interface Window {
    dataLayer: unknown[];
  }
}

interface InitGaProps {
  ga4MeasurementId: string;
  debugMode: boolean;
}

const initGa4 = ({ ga4MeasurementId, debugMode }: InitGaProps) => {
  /* c8 ignore next 4 */
  // Never run in tests:
  if (debugMode) {
    console.info("Initialize GA4");
  }

  // GA4 setup
  window.dataLayer = window.dataLayer || [];
  if (!window.gtag) {
    window.gtag = function (...args: unknown[]) {
      window.dataLayer.push(args);
    };
    window.gtag("js", new Date());
    window.gtag("config", ga4MeasurementId, {
      cookie_domain: window.location.hostname,
      cookie_flags: "SameSite=None;Secure",
      debug_mode: debugMode,
    });
  }
};

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
  const debugMode =
    process.env.NEXT_PUBLIC_NODE_ENV !== "production" &&
    process.env.NODE_ENV !== "test";

  useEffect(() => {
    // Enable upload only if the user has not opted out of tracking.
    const uploadEnabled = navigator.doNotTrack !== "1";

    /* c8 ignore next 7 */
    // Never run in tests:
    if (!uploadEnabled) {
      if (debugMode) {
        console.info("Did not initialize GA4 due to DoNotTrack.");
      }
      return;
    }

    if (!window.gtag) {
      /* c8 ignore next 2 */
      const ga4MeasurementId = CONST_GA4_MEASUREMENT_ID || "G-CXG8K4KW4P";
      initGa4({ ga4MeasurementId, debugMode });
    }
  }, [debugMode]);

  return {
    gtag: {
      record: (options) => {
        if (window.gtag) {
          window.gtag(options);
          // Only relevant for local development
          /* c8 ignore next 3 */
        } else if (!window.gtag && debugMode) {
          console.info("GA4 is not initialized.");
        }
      },
    },
  };
};
