/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import { useSession } from "next-auth/react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

import { hasPremium } from "../../../../../../functions/universal/user";
import { captureException } from "@sentry/browser";

/**
 * Client-side page to update session info.
 *
 * Next-Auth does not have a simple way to do this purely from the client-side, so we
 * use this page to check and redirect appropriately.
 *
 * NOTE: this does not replace doing server-side `hasPremium` checks! This is just
 * a convenience so users do not need to sign out and back in to refresh their session
 * after subscribing.
 */
export default function Subscribed() {
  const { update } = useSession();
  const router = useRouter();

  useEffect(() => {
    async function updateSession() {
      try {
        const result = await update();
        console.debug(result, hasPremium(result?.user));
        if (hasPremium(result?.user)) {
          router.replace(
            `/redesign/user/dashboard/fix/data-broker-profiles/welcome-to-premium`
          );
        } else {
          router.replace(`/`);
        }
      } catch (ex) {
        console.error(ex);
        captureException(ex);
        router.replace(`/`);
      }
    }
    void updateSession();
  }, [update, router]);

  return <div>Please wait...</div>;
}
