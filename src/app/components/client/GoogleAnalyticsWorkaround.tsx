/* eslint-disable header/header */

// Based on: https://github.com/vercel/next.js/blob/89fcf68c6acd62caf91a8cf0bfd3fdc566e75d9d/packages/third-parties/src/google/ga.tsx
// License for this specific file:
/*
The MIT License (MIT)

Copyright (c) 2024 Vercel, Inc.

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

"use client";

import type { GoogleAnalytics } from "@next/third-parties/google";
import Script, { ScriptProps } from "next/script";
import { ComponentProps, useEffect } from "react";

// We don't send Analytics events in tests:
/* c8 ignore start */

let currDataLayerName: string | undefined = undefined;

type GAParams = ComponentProps<typeof GoogleAnalytics>;

/**
 * This component is based on <GoogleAnalytics> from `@next/third-parties`, but accepting a nonce
 *
 * @param props
 */
export const GoogleAnalyticsWorkaround = (
  props: GAParams & { nonce?: ScriptProps["nonce"]; debugMode?: boolean },
) => {
  const { gaId, dataLayerName = "dataLayer", nonce, debugMode } = props;

  if (currDataLayerName === undefined) {
    // "Reassigning this value during render is a form of
    // side effect, which can cause unpredictable behavior
    // depending on when the component happens to re-render."
    // In our case, however, we only assign it once, so that
    // should result in the same value every render.
    // eslint-disable-next-line react-hooks/globals
    currDataLayerName = dataLayerName;
  }

  useEffect(() => {
    // performance.mark is being used as a feature use signal. While it is traditionally used for performance
    // benchmarking it is low overhead and thus considered safe to use in production and it is a widely available
    // existing API.
    // The performance measurement will be handled by Chrome Aurora

    performance.mark("mark_feature_usage", {
      detail: {
        feature: "next-third-parties-ga",
      },
    });
  }, []);

  return (
    <>
      <Script
        id="_next-ga-init"
        dangerouslySetInnerHTML={{
          __html: `
          window['${dataLayerName}'] = window['${dataLayerName}'] || [];
          function gtag(){window['${dataLayerName}'].push(arguments);}
          gtag('js', new Date());

          gtag('config', '${gaId}', { 'debug_mode': ${debugMode} });`,
        }}
        nonce={nonce}
      />
      <Script
        id="_next-ga"
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
        nonce={nonce}
      />
    </>
  );
};

export const sendGAEvent = (type: "event", eventName: string, args: object) => {
  if (process.env.NODE_ENV === "test") {
    return;
  }

  if (currDataLayerName === undefined) {
    console.warn(`@next/third-parties: GA has not been initialized`);
    return;
  }

  if (window[currDataLayerName]) {
    window.gtag(type, eventName, args);
  } else {
    console.warn(
      `@next/third-parties: GA dataLayer ${currDataLayerName} does not exist`,
    );
  }
};
/* c8 ignore stop */
