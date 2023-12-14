/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import { useSession } from "next-auth/react";
import { useEffect } from "react";

export const SubscriptionCheck = () => {
  const { update } = useSession();

  // Poll for the session every minute.
  useEffect(() => {
    const interval = setInterval(() => void update(), 1000 * 60);
    console.debug("update");
    return () => clearInterval(interval);
  }, [update]);

  return <></>;
};
