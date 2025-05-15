/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import { useSearchParams } from "next/navigation";
import { useTelemetry } from "../../../hooks/useTelemetry";
import { useEffect } from "react";

export const BundlePageViewTelemetry = () => {
  const recordTelemetry = useTelemetry();
  const searchParams = useSearchParams();

  useEffect(() => {
    const utm_campaign =
      searchParams.get("utm_campaign") ?? "bundle_onboarding";
    const utm_source = searchParams.get("utm_source") ?? "";

    recordTelemetry("page", "view", { utm_campaign, utm_source });
  }, [recordTelemetry, searchParams]);

  return null;
};
