/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import * as Sentry from "@sentry/nextjs";
import NextError from "next/error";
import { useEffect } from "react";

/**
 * @param {Object} props
 * @param {Error} props.error - The error object
 * @param {number} props.statusCode - HTTP error status code (default: 500)
 */
export default function GlobalError({ error, statusCode = 500 }) {
  useEffect(() => {
    Sentry.captureException(error);
  }, [error]);

  return (
    <html>
      <body>
        {/* This is the default Next.js error component. */}
        <NextError statusCode={statusCode} />
      </body>
    </html>
  );
}
