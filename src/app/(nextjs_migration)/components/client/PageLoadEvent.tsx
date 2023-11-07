/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { useGlean } from "../../../hooks/useGlean";
import { useCookies } from "react-cookie";

export type Props = {
  userId: string;
  channel: string;
  appEnv: string;
};

// Empty component that records a page view on first load.
export const PageLoadEvent = (props: Props) => {
  const [cookies, setCookie] = useCookies(["userId"]);
  const userId = props.userId;

  const { pageEvents } = useGlean(props.channel, props.appEnv);
  const pathname = usePathname();
  const origin =
    typeof window !== "undefined" && window.location.origin
      ? window.location.origin
      : "";
  const url = new URL(pathname, origin).toString();

  // On first load of the page, record a page view.
  useEffect(() => {
    if (!cookies.userId && userId.startsWith("guest")) {
      setCookie("userId", userId);
    }
    pageEvents.view.record({ url, user_id: userId });
  }, [cookies.userId, setCookie, pageEvents.view, url, userId]);

  // This component doesn't render anything.
  return <></>;
};
