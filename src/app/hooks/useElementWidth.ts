/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { RefObject, useEffect, useState } from "react";

// Ignored for test coverage, as tests would be too mock-heavy to be useful:
/* c8 ignore start */
const useElementWidthImp = (ref: RefObject<HTMLElement | null> | undefined) => {
  const [width, setWidth] = useState<number>(0);

  useEffect(() => {
    const handleResize = () => setWidth(ref?.current?.clientWidth || 0);
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, [ref]);

  return width;
};

export const useElementWidth =
  typeof window === "undefined" || typeof window.matchMedia !== "function"
    ? () => 0
    : useElementWidthImp;
/* c8 ignore stop */
