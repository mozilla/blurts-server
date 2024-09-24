/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import { signIn } from "next-auth/react";
import { ReactNode, useEffect } from "react";

export const AutoSignIn = (): ReactNode => {
  useEffect(() => {
    void signIn("fxa");
  }, []);

  return null;
};
