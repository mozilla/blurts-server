/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import NextAuth from "next-auth";
import { authOptions } from '../../utils/authOptions'

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
