/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import { signIn, useSession } from "next-auth/react";
import { useL10n } from "../../hooks/l10n";
import { Button, ButtonProps } from "./Button";
import { useTelemetry } from "../../hooks/useTelemetry";

export const SignInButton = (props: ButtonProps) => {
  const l10n = useL10n();
  const session = useSession();
  const recordTelemetry = useTelemetry();

  if (typeof session.data?.user.email === "string") {
    return null;
  }

  return (
    <Button
      {...props}
      variant="secondary"
      onPress={() => {
        recordTelemetry("ctaButton", "click", {
          button_id: "sign_in",
        });
        void signIn("fxa", { callbackUrl: "/user/dashboard" });
      }}
    >
      {l10n.getString("sign-in")}
    </Button>
  );
};
