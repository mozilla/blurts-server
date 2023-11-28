/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import { useEffect, useMemo } from "react";
import { usePathname } from "next/navigation";
import { useCookies } from "react-cookie";
import { GleanExtraKeys, useGlean } from "../../../hooks/useGlean";
import { FeatureFlagName } from "../../../../db/tables/featureFlags";

export type Props = {
  userId: string;
  channel: string;
  appEnv: string;
  enabledFlags: FeatureFlagName[];
};

type RequiredKeys = {
  path: string;
};

type OptionalKeys = {
  user_id?: string;
  referrer?: string;
  utm_campaign?: string;
  utm_content?: string;
  utm_medium?: string;
  utm_source?: string;
  utm_term?: string;
};

// Empty component that records a page view on first load.
export const PageLoadEvent = (props: Props) => {
  const [cookies, setCookie] = useCookies(["userId"]);
  const userId = props.userId;

  const path = usePathname();
  const glean = useGlean();

  const required: RequiredKeys = useMemo(() => {
    return { path };
  }, [path]);

  const optional: OptionalKeys = useMemo(() => {
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

      optional["referrer"] = referrerUrl.toString();
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
        optional[key] = params.get(key) ?? "";
      }
    });
  }

  const keys = useMemo(
    () => Object.assign(required, optional) as GleanExtraKeys,
    [required, optional],
  );

  // On first load of the page, record a page view.
  useEffect(() => {
    glean?.page.view.record(keys);
  }, [glean, keys]);

  // This component doesn't render anything.
  return <></>;
};
