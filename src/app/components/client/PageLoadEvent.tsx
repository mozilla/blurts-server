/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import { useEffect, useMemo } from "react";
import { useCookies } from "react-cookie";
import { usePathname } from "next/navigation";
import { FeatureFlagName } from "../../../db/tables/featureFlags";
import { useTelemetry } from "../../hooks/useTelemetry";
import { GleanMetricMap } from "../../../telemetry/generated/_map";

export type Props = {
  userId: string;
  enabledFlags: FeatureFlagName[];
};

// Empty component that records a page view on first load.
export const PageLoadEvent = (props: Props) => {
  const [cookies, setCookie] = useCookies([
    "userId",
    "attributionsFirstTouch",
    "attributionsLastTouch",
  ]);
  const pathname = usePathname();

  const recordTelemetry = useTelemetry();

  const userId: GleanMetricMap["page"]["view"]["user_id"] = useMemo(() => {
    // If the user is not logged in, use randomly-generated user ID and store in cookie.
    if (props.userId.startsWith("guest")) {
      if (!cookies.userId) {
        setCookie("userId", props.userId);
      }
      return props.userId;
    }

    if (props.enabledFlags.includes("FxaUidTelemetry")) {
      return props.userId;
    } else {
      return undefined;
    }
  }, [cookies.userId, setCookie, props.userId, props.enabledFlags]);

  // On first load of the page, record a page view.
  useEffect(() => {
    const pageViewParams: GleanMetricMap["page"]["view"] = {
      ...getUtmParams(),
      path: pathname,
    };
    if (typeof userId === "string") {
      pageViewParams.user_id = userId;
    }

    recordTelemetry("page", "view", pageViewParams);
  }, [recordTelemetry, pathname, userId]);

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
