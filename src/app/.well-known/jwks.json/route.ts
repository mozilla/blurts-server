/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { NextResponse } from "next/server";
import crypto from "crypto";
import { logger } from "../../functions/server/logging";

// Convert PEM public key to JWK format
// Note: This is a simplified conversion and might need adjustments
// based on the exact PEM format. It expects a standard PKCS#8 PEM format.
function pemToJwk(pem: string, kid: string) {
  try {
    const publicKey = crypto.createPublicKey(pem);
    const jwk = publicKey.export({ format: "jwk" });

    // Add required JWK parameters for RS256 signing key
    return {
      ...jwk,
      kid: kid, // Key ID
      alg: "RS256", // Algorithm
      use: "sig", // Key usage (signature)
    };
  } catch (error) {
    logger.error("pem_to_jwk_conversion_error", { error });
    return null;
  }
}

export async function GET() {
  const publicKeyPem = process.env.MOSCARY_JWT_PUBLIC_KEY;
  const keyId = process.env.MOSCARY_JWT_KEY_ID || "moscary-jwt-key"; // Ensure consistency

  if (!publicKeyPem) {
    logger.error("jwks_endpoint_error", {
      message: "MOSCARY_JWT_PUBLIC_KEY is not set",
    });
    return NextResponse.json(
      { error: "Server configuration error" },
      { status: 500 },
    );
  }

  const jwk = pemToJwk(publicKeyPem, keyId);

  if (!jwk) {
    return NextResponse.json(
      { error: "Failed to process public key" },
      { status: 500 },
    );
  }

  const jwks = {
    keys: [jwk],
  };

  return NextResponse.json(jwks, {
    headers: {
      "Content-Type": "application/json",
      // Cache for 1 hour, matching JWT expiration
      "Cache-Control": "public, max-age=3600, must-revalidate",
    },
  });
}
