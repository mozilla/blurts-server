/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";
/* c8 ignore start */
import { MutableRefObject, useEffect, useRef } from "react";

// Based on https://overreacted.io/making-setinterval-declarative-with-react-hooks/
export function useInterval(callback: () => void, delay: number) {
  const savedCallback: MutableRefObject<(() => void) | undefined> = useRef();

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      if (savedCallback && savedCallback.current) {
        savedCallback.current();
      }
    }
    if (delay !== null) {
      const id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}
/* c8 ignore stop */
