/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import { useEffect } from "react";
import { useCookies } from "react-cookie";
import { usePathname } from "next/navigation";
import { FeatureFlagName } from "../../../db/tables/featureFlags";
import { useTelemetry } from "../../hooks/useTelemetry";
import { GleanMetricMap } from "../../../telemetry/generated/_map";

export type Props = {
  experimentationId: string;
  enabledFlags: FeatureFlagName[];
};

// Empty component that records a page view on first load.
export const PageLoadEvent = (props: Props) => {
  const [cookies, setCookie] = useCookies([
    "attributionsFirstTouch",
    "attributionsLastTouch",
    "experimentationId",
  ]);
  const pathname = usePathname();

  const recordTelemetry = useTelemetry(props.experimentationId);

  if (props.experimentationId.startsWith("guest")) {
    if (!cookies.experimentationId) {
      setCookie("experimentationId", props.experimentationId);
    }
  }

  // On first load of the page, record a page view.
  useEffect(() => {
    const pageViewParams: GleanMetricMap["page"]["view"] = {
      ...getUtmParams(),
      path: pathname,
    };

    recordTelemetry("page", "view", pageViewParams);
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
      const referrerUrl = new URL(document.referrer);
      // Remove any query params.
      referrerUrl.search = "";
      // Remove any fragment identifiers.
      referrerUrl.hash = "";

      utmParams["referrer"] = referrerUrl.toString();
    } catch (ex) {
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
