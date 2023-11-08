/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { useGlean } from "../../../hooks/useGlean";

export type Props = {
  userId: string;
  channel: string;
  appEnv: string;
};

// Empty component that records a page view on first load.
export const PageLoadEvent = (props: Props) => {
  const userId = props.userId;

  const { pageEvents } = useGlean(props.channel, props.appEnv);
  const path = usePathname();

  let referrer = "";
  let utm_campaign = "";
  let utm_content = "";
  let utm_medium = "";
  let utm_source = "";
  let utm_term = "";

  if (
    typeof window !== "undefined" &&
    typeof document !== "undefined" &&
    window.location &&
    document.referrer
  ) {
    try {
      referrer = new URL(document.referrer).origin;
    } catch (ex) {
      console.error("Could not parse referrer as URL:", document.referrer);
    }

    const params = new URLSearchParams(window.location.search);
    utm_campaign = params.get("utm_campaign") ?? "";
    utm_content = params.get("utm_content") ?? "";
    utm_medium = params.get("utm_medium") ?? "";
    utm_source = params.get("utm_source") ?? "";
    utm_term = params.get("utm_term") ?? "";
  }

  // On first load of the page, record a page view.
  useEffect(() => {
    pageEvents.view.record({
      path,
      user_id: userId,
      utm_campaign,
      utm_content,
      utm_medium,
      utm_source,
      utm_term,
      referrer,
    });
  }, [
    pageEvents.view,
    path,
    userId,
    utm_campaign,
    utm_content,
    utm_medium,
    utm_source,
    utm_term,
    referrer,
  ]);

  // This component doesn't render anything.
  return <></>;
};
