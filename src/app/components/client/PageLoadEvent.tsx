/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import { useEffect } from "react";
import { useCookies } from "react-cookie";
import { usePathname } from "next/navigation";
import GleanMetrics from "@mozilla/glean/metrics";
import { useTelemetry } from "../../hooks/useTelemetry";
import { GleanMetricMap } from "../../../telemetry/generated/_map";

// Empty component that records a page view on first load.
export const PageLoadEvent = () => {
  const [cookies, setCookie] = useCookies([
    "attributionsFirstTouch",
    "attributionsLastTouch",
  ]);
  const pathname = usePathname();

  const recordTelemetry = useTelemetry();

  // On first load of the page, record a page view.
  useEffect(() => {
    const pageViewParams: GleanMetricMap["page"]["view"] = {
      ...getUtmParams(),
      path: pathname,
    };

    recordTelemetry("page", "view", pageViewParams);
    // Also record Glean's native page load events. They have less metadata,
    // but can be used for auto-generated reports.
    // See https://mozilla.github.io/glean.js/automatic_instrumentation/page_load_events/#page-load-event-api
    GleanMetrics.pageLoad({ url: document.location.href });
  }, [recordTelemetry, pathname]);

  useEffect(() => {
    // record attributions on page load
    if (window.location.search?.length > 0) {
      if (!cookies.attributionsFirstTouch) {
        setCookie("attributionsFirstTouch", window.location.search, {
          path: "/",
        });
      }
      setCookie("attributionsLastTouch", window.location.search, { path: "/" });
    }
  }, [setCookie, cookies.attributionsFirstTouch]);
  // This component doesn't render anything.
  return <></>;
};

function getUtmParams() {
  const utmParams: Pick<
    GleanMetricMap["page"]["view"],
    | "referrer"
    | "utm_campaign"
    | "utm_content"
    | "utm_medium"
    | "utm_source"
    | "utm_term"
  > = {};

  if (
    typeof window !== "undefined" &&
    typeof document !== "undefined" &&
    window.location
  ) {
    try {
      if (document.referrer && /^(https?:\/\/)/.test(document.referrer)) {
        const referrerUrl = new URL(document.referrer);
        referrerUrl.search = ""; // Remove query params
        referrerUrl.hash = ""; // Remove fragments
        utmParams["referrer"] = referrerUrl.toString();
      }
    } catch {
      console.error("Could not parse referrer as URL:", document.referrer);
    }

    const params = new URLSearchParams(window.location.search);
    (
      [
        "utm_campaign",
        "utm_content",
        "utm_medium",
        "utm_source",
        "utm_term",
      ] as const
    ).forEach((key) => {
      if (params.has(key)) {
        utmParams[key] = params.get(key) ?? "";
      }
    });
  }

  return utmParams;
}
