/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import Script from "next/script";
import "./discoBall.css";
import { useHasRenderedClientSide } from "../../../hooks/useHasRenderedClientSide";

export const DiscoBall = () => {
  const hasRenderedClientSide = useHasRenderedClientSide();
  return (
    <>
      <div
        className={`discoBallWrapper ${hasRenderedClientSide ? "letsgo" : ""}`}
      >
        <div id="discoBallLight" className="discoBallLight"></div>
        <div className="discoBallString"></div>
        <div id="discoBall" className="discoBall">
          <div id="discoBallMiddle" className="discoBallMiddle"></div>
        </div>
      </div>
      <Script id="discoBallScript" src="./discoBall.js" />
    </>
  );
};
