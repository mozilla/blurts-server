/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import { signIn, useSession } from "next-auth/react";
import Link from "next/link";
import { useL10n } from "../../hooks/l10n";
import { Button } from "./Button";

export const SignInButton = () => {
  const l10n = useL10n();
  const session = useSession();

  if (typeof session.data?.user.email === "string") {
    return (
      <Link href="/redesign/user/dashboard">
        {l10n.getString("main-nav-link-dashboard-label")}
      </Link>
    );
  }

  return (
    <Button
      variant="secondary"
      onPress={() =>
        void signIn("fxa", { callbackUrl: "/redesign/user/dashboard/" })
      }
    >
      {l10n.getString("sign-in")}
    </Button>
  );
};
