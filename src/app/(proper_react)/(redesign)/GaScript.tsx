/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import Script from "next/script";
import { CONST_GA4_MEASUREMENT_ID } from "../../../constants";

export type Props = {
  nonce: string;
};

declare global {
  interface Window {
    dataLayer: unknown[];
  }
}

export const GaScript = ({ nonce }: Props) => {
  /* c8 ignore next 2 */
  const ga4MeasurementId = CONST_GA4_MEASUREMENT_ID || "G-CXG8K4KW4P";

  const debugMode =
    // `NEXT_PUBLIC_GA4_DEBUG_MODE` being false doesn't negatively impact
    // the reliability of our tests:
    /* c8 ignore next 2 */
    process.env.NEXT_PUBLIC_GA4_DEBUG_MODE === "true" &&
    process.env.NODE_ENV !== "test";

  return typeof navigator !== "undefined" && navigator.doNotTrack !== "1" ? (
    <>
      <Script
        id="google-analytics"
        src={`https://www.googletagmanager.com/gtag/js?id=${ga4MeasurementId}`}
        nonce={nonce}
        onLoad={() => {
          window.dataLayer = window.dataLayer || [];
          window.gtag = function (...args: unknown[]) {
            window.dataLayer?.push(args);
          };
          window.gtag("js", new Date());
          window.gtag("config", CONST_GA4_MEASUREMENT_ID, {
            debug_mode: debugMode,
          });
        }}
      />
    </>
  ) : (
    <></>
  );
};
