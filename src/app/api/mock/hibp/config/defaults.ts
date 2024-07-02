/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { BinaryLike } from "crypto";
import { getSha1 } from "../../../../../utils/fxa";

export function MOCK_HIBP_DEFAULT_BREACHES_NAMES() {
  return ["000webhost", "123RF", "Bonobos"];
}

export function MOCK_HIBP_COMPUTE_SHA1(email: string) {
  return getSha1(email as BinaryLike)
    .slice(6)
    .toUpperCase();
}
