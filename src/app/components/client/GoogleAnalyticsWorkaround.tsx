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

import { GAParams } from "@next/third-parties/dist/types/google";
import Script from "next/script";
import { useEffect } from "react";

let currDataLayerName: string | undefined = undefined;

export const GoogleAnalyticsWorkaround = (props: GAParams) => {
  const { gaId, dataLayerName = "dataLayer" } = props;

  if (currDataLayerName === undefined) {
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

          gtag('config', '${gaId}');`,
        }}
      />
      <Script
        id="_next-ga"
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
      />
    </>
  );
};

export const sendGAEvent = (...args: object[]) => {
  if (currDataLayerName === undefined) {
    console.warn(`@next/third-parties: GA has not been initialized`);
    return;
  }

  if (window[currDataLayerName]) {
    window[currDataLayerName].push(...args);
  } else {
    console.warn(
      `@next/third-parties: GA dataLayer ${currDataLayerName} does not exist`,
    );
  }
};
