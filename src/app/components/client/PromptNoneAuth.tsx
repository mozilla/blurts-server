/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import { ReactNode, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { signIn } from "next-auth/react";
import { containsExpectedSearchParams } from "../../functions/universal/attributions";
import { CONST_MOZILLA_ACCOUNTS_SETTINGS_PROMO_SEARCH_PARAMS } from "../../../constants";

export const PromptNoneAuth = (): ReactNode => {
  const searchParams = useSearchParams();

  useEffect(() => {
    const isPromptNoneAuthAttempt = containsExpectedSearchParams(
      CONST_MOZILLA_ACCOUNTS_SETTINGS_PROMO_SEARCH_PARAMS,
      searchParams,
    );
    if (isPromptNoneAuthAttempt) {
      void signIn(
        "fxa",
        { callbackUrl: "/user/dashboard/action-needed?dialog=subscriptions" },
        { prompt: "none" },
      );
    }
    // This effect should only run once
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return null;
};
