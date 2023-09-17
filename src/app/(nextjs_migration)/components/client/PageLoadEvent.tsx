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
};

// Empty component that records a page view on first load.
export const PageLoadEvent = (props: Props) => {
  const [cookies, setCookie] = useCookies(["userId"]);
  const userId = props.userId;

  // TODO decide if we want to do this here or on the server side
  if (!cookies.userId && !userId.startsWith("guest")) {
    setCookie("userId", userId);
  }

  const { pageEvents } = useGlean();
  const pathname = usePathname();

  // On first load of the page, record a page view.
  useEffect(() => {
    pageEvents.view.record({ path: pathname, user_id: userId });
  }, [pageEvents.view, pathname, userId]);

  // This component doesn't render anything.
  return <></>;
};
