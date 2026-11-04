/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import { signInToFxa } from "../../functions/client/signInToFxa";
import { ReactNode, useEffect } from "react";

export const AutoSignIn = (): ReactNode => {
  useEffect(() => {
    signInToFxa("fxa");
  }, []);

  return null;
};
