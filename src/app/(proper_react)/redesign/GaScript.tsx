/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import Script from "next/script";

export type Props = {
  nonce: string;
};

export const GaScript = ({ nonce }: Props) => {
  /* c8 ignore next 2 */
  const ga4MeasurementId =
    process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID || "G-CXG8K4KW4P";

  return navigator && navigator.doNotTrack !== "1" ? (
    <Script
      src={`https://www.googletagmanager.com/gtag/js?id=${ga4MeasurementId}`}
      nonce={nonce}
    />
  ) : (
    <></>
  );
};
