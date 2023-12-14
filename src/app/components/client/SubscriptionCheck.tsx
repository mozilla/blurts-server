/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import { useSession } from "next-auth/react";
import { useEffect } from "react";

export const SubscriptionCheck = () => {
  const { update } = useSession();

  // Polling the session every minute.
  useEffect(() => {
    // TIP: You can also use `navigator.onLine` and some extra event handlers
    // to check if the user is online and only update the session if they are.
    // https://developer.mozilla.org/en-US/docs/Web/API/Navigator/onLine
    const interval = setInterval(() => void update(), 1000 * 60);
    console.debug("update");
    return () => clearInterval(interval);
  }, [update]);

  return <></>;
};
