/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { useGlean } from "../../../hooks/useGlean";

// Empty component that records a page view on first load.
export const PageLoadEvent = () => {
  const { appEvents } = useGlean();
  const pathname = usePathname();

  // On first load of the page, record a page view.
  useEffect(() => {
    appEvents.pageView.record({ path: pathname });
  }, [appEvents.pageView, pathname]);

  // This component doesn't render anything.
  return <></>;
};
