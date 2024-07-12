/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import { useState } from "react";

interface clearProps {
  hibp: boolean;
  onerep: boolean;
}

const ResetButton = (props: clearProps) => {
  const [isResolved, setIsResolved] = useState(false);

  const { hibp, onerep } = props;

  const makeClearReq = async () => {
    const param1 = `${hibp ? "hibp=true" : ""}`;
    const param2 = `${onerep ? "onerep=true" : ""}`;
    let delim = "";
    if (param1 && param2) delim = "&";
    const params = param1 + delim + param2;
    return await fetch(`/api/mock/resetTestData?` + params);
  };

  const handleClick = () => {
    void makeClearReq().then((res) => {
      console.log(
        `Request to clear data reached! Status: ${res.status}, ${res.ok ? "ok" : "not ok."}`,
      );
      setIsResolved(true);
    });
  };

  return (
    <div>
      <button onClick={handleClick}>Clear Data</button>
      {isResolved && <div>Request was successful!</div>}
    </div>
  );
};

export default ResetButton;
