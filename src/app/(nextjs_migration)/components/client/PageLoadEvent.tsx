/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import { useEffect, useMemo } from "react";
import { useCookies } from "react-cookie";
import { FeatureFlagName } from "../../../../db/tables/featureFlags";
import { useTelemetry } from "../../../hooks/useTelemetry";
import { GleanMetricMap } from "../../../../telemetry/generated/_map";

export type Props = {
  userId: string;
  enabledFlags: FeatureFlagName[];
};

// Empty component that records a page view on first load.
export const PageLoadEvent = (props: Props) => {
  const [cookies, setCookie] = useCookies(["userId"]);
  const userId = props.userId;

  const recordTelemetry = useTelemetry();

  const pageViewParams: GleanMetricMap["page"]["view"] = useMemo(() => {
    // If the user is not logged in, use randomly-generated user ID and store in cookie.
    if (userId.startsWith("guest")) {
      if (!cookies.userId) {
        setCookie("userId", userId);
      }
      return { user_id: userId };
    }

    if (props.enabledFlags.includes("FxaUidTelemetry")) {
      return { user_id: userId };
    } else {
      return {};
    }
  }, [cookies.userId, setCookie, userId, props.enabledFlags]);

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

      pageViewParams["referrer"] = referrerUrl.toString();
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
        pageViewParams[key] = params.get(key) ?? "";
      }
    });
  }

  // On first load of the page, record a page view.
  useEffect(() => {
    recordTelemetry("page", "view", pageViewParams);
  }, [recordTelemetry, pageViewParams]);

  // This component doesn't render anything.
  return <></>;
};
