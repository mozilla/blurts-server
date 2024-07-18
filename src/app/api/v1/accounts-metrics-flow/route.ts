/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { captureException } from "@sentry/node";
import { MetricFlowData } from "../../../functions/universal/getFreeScanSearchParams";
import { logger } from "../../../functions/server/logging";

async function fetchMetricsFlowParams(searchParams: URLSearchParams) {
  const endpoint = new URL(process.env.OAUTH_METRICS_FLOW_URI as string);
  for (const [key, value] of Array.from(searchParams)) {
    if (value) {
      endpoint.searchParams.set(key, value);
    }
  }

  const response = await fetch(endpoint.href, {
    ...(process.env.APP_ENV !== "local" && {
      headers: {
        origin: process.env.SERVER_URL as string,
      },
    }),
  });

  if (!response.ok) {
    throw new Error(
      `Fetching metrics flow parameters failed with ${response.status}: ${response.statusText}`,
    );
  }

  const data: MetricFlowData = await response.json();
  return data;
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const flowData = await fetchMetricsFlowParams(searchParams);
    return NextResponse.json({ success: true, flowData }, { status: 200 });
  } catch (error) {
    captureException(error);
    logger.error("Could not fetch metrics flow metrics", {
      error: JSON.stringify(error),
    });
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
