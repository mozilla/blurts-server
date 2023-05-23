/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import { Session } from "next-auth";
import { signIn } from "next-auth/react";
import { useL10n } from "../../hooks/l10n";

export type Props = {
  session: Session | null;
};

export const UserMenu = (props: Props) => {
  const l10n = useL10n();

  if (!props.session || !props.session.user) {
    return (
      <button onClick={() => signIn("fxa")}>{l10n.getString("sign-in")}</button>
    );
  }

  return <p>U R {props.session.user.email}</p>;
};
