/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import { signIn } from "next-auth/react";
import { usePathname } from "next/navigation";
import { useL10n } from "../../../hooks/l10n";
import { useGlean } from "../../../hooks/useGlean";

export type Props = {
  autoSignIn?: boolean;
};

function initSignIn(callbackUrl: string) {
  void signIn("fxa", { callbackUrl });
}

export const SignInButton = ({ autoSignIn }: Props) => {
  const l10n = useL10n();
  const pathname = usePathname();
  const { appEvents } = useGlean();

  const callbackUrl = pathname === "/" ? "/user/breaches" : pathname;
  if (autoSignIn) {
    initSignIn(callbackUrl);
    return null;
  }

  const signInClick = () => {
    appEvents.buttonClick.record({ label: "sign-in" });
    initSignIn(callbackUrl);
  };

  return (
    <button
      onClick={() => signInClick()}
      data-cta-id="sign-in-1"
      className="button secondary"
    >
      {l10n.getString("sign-in")}
    </button>
  );
};
