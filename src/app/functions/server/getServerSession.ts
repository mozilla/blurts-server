/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

// This ESLint rule is there to get people to use this wrapper - but the wrapper
// itself needs to access the original, of course:
/* eslint-disable-next-line no-restricted-imports */
import * as nextAuth from "next-auth";
import { authOptions } from "../../api/utils/auth";

export const getServerSession = () => nextAuth.getServerSession(authOptions);
