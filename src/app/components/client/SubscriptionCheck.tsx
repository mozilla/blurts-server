/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import { useSession } from "next-auth/react";
import { useInterval } from "../../hooks/useInterval";
import { useEffect } from "react";

// This component ensures that the client session is synced with the
// server session and is not being mounted when running unit tests.
/* c8 ignore start */
export const SubscriptionCheck = () => {
  const { update } = useSession();

  useEffect(() => {
    void update();

    // This should only run once per page load - `update` will always appear to be changed.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Poll for the session every minute.
  useInterval(() => {
    void update();
  }, 1000 * 60);
  return <></>;
};
/* c8 ignore end */
