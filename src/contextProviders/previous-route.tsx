/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import { usePathname } from "next/navigation";
import { ReactNode, createContext, useEffect, useRef } from "react";

export type Props = {
  children: ReactNode;
  referrer: string;
};

export const PreviousRouteContext = createContext("");

export function PreviousRouteProvider({ children, referrer }: Props) {
  const pathname = usePathname();
  const pathnameRef = useRef(referrer);

  useEffect(() => {
    pathnameRef.current = pathname;
  }, [pathname]);

  return (
    <PreviousRouteContext.Provider value={pathnameRef.current}>
      {children}
    </PreviousRouteContext.Provider>
  );
}
