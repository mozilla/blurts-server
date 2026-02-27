/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import * as jose from "jose";
import { config } from "../config";

// Transparent configuration code does not need unit tests
/* c8 ignore start */
let _JWKS: ReturnType<typeof jose.createRemoteJWKSet> | undefined = undefined;

/**
 * Get or create a cached instance of jose JWKs provider.
 * The provider is edge-runtime compatible and handles
 * cooldown, caching, etc.
 */
export function jwksClient() {
  if (_JWKS != null) {
    return _JWKS;
  }
  _JWKS = jose.createRemoteJWKSet(new URL(`${config.oauthAccountUri}/jwks`));
  return _JWKS;
}
/* c8 ignore end */
