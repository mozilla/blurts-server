/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import { signIn } from "next-auth/react";
import { useL10n } from "../../../hooks/l10n";

export type Props = {
  autoSignIn?: boolean;
};

function initSignIn() {
  void signIn("fxa", { callbackUrl: "/user/breaches" });
}

export const SignInButton = ({ autoSignIn }: Props) => {
  const l10n = useL10n();

  if (autoSignIn) {
    initSignIn();
    return null;
  }

  return (
    <button
      onClick={() => initSignIn()}
      data-cta-id="sign-in-1"
      className="button secondary"
    >
      {l10n.getString("sign-in")}
    </button>
  );
};
