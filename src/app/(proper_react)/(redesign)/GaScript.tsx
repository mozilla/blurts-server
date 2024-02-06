/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import Script from "next/script";
import { useHasRenderedClientSide } from "../../hooks/useHasRenderedClientSide";

export type Props = {
  nonce: string;
};

declare global {
  interface Window {
    dataLayer: unknown[];
  }
}

export const GaScript = ({ nonce }: Props) => {
  const hasRenderedClientSide = useHasRenderedClientSide();
  return hasRenderedClientSide &&
    typeof navigator !== "undefined" &&
    navigator.doNotTrack !== "1" ? (
    <Script
      type="module"
      src="/nextjs_migration/client/js/analytics.js"
      nonce={nonce}
    />
  ) : (
    <></>
  );
};
