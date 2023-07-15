/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import { Session } from "next-auth";
import { signIn, signOut } from "next-auth/react";

export type Props = {
  user: Session["user"] | null;
};

export const UserMenu = (props: Props) => {
  // Placeholder to enable login/logout until we create an actual menu
  if (!props.user) {
    return <button onClick={() => void signIn("fxa")}>Sign in</button>;
  }

  return (
    <button onClick={() => void signOut({ callbackUrl: "/" })}>Sign out</button>
  );
};
