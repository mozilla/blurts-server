/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

'use client'

import { signIn, useSession } from "next-auth/react";

export const SigninButton = () => {
  const session = useSession()
  return <button onClick={() => signIn('fxa')}>Sign in ({JSON.stringify(session)})</button>;
}
