/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { useEffect, useState } from "react";

function useMediaQueryImp(mediaQuery: string): boolean {
  const [mediaQueryList, setMediaQueryList] = useState(
    window.matchMedia(mediaQuery),
  );
  useEffect(() => {
    setMediaQueryList(window.matchMedia(mediaQuery));
  }, [mediaQuery]);

  const [matches, setMatches] = useState(mediaQueryList.matches);
  useEffect(() => {
    const changeListener: Parameters<MediaQueryList["addEventListener"]>[1] = (
      _changedList,
    ) => {
      setMatches(mediaQueryList.matches);
    };
    mediaQueryList.addEventListener("change", changeListener);
    return () => {
      mediaQueryList.removeEventListener("change", changeListener);
    };
  }, [mediaQueryList]);

  return matches;
}

export const useMediaQuery =
  typeof window === "undefined" || typeof window.matchMedia !== "function"
    ? () => false
    : useMediaQueryImp;
