/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

// See https://nextjs.org/docs/getting-started/react-essentials#rendering-third-party-context-providers-in-server-components
"use client";

import { SessionProvider as OriginalSessionProvider } from "next-auth/react";

export const SessionProvider: typeof OriginalSessionProvider = (props) => (
  <OriginalSessionProvider {...props} />
);
