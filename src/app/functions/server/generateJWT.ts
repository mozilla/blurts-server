/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import jwt from "jsonwebtoken";
import { redisClient, REDIS_JWT_KEY_PREFIX } from "../../../db/redis/client";
import { isAdmin } from "../../api/utils/auth";
import { logger } from "./logging";
const rClient = redisClient();

// We'll need a key ID to identify the key used for signing
const KEY_ID = process.env.MOSCARY_JWT_KEY_ID || "moscary-jwt-key";
const EXPIRATION_TIME = 3600;

export async function getMoscaryJWT(fxaUid: string, email: string) {
  const REDIS_KEY = `${REDIS_JWT_KEY_PREFIX}${fxaUid}`;

  // if token is already exists in redis, return it
  let token = await rClient.get(REDIS_KEY);
  if (token) {
    logger.info("get_moscary_jwt_from_redis_success");
    return token;
  }
  // otherwise, generate new token
  // Use private key for signing instead of a secret
  const privateKey = process.env.MOSCARY_JWT_PRIVATE_KEY;
  if (!privateKey) {
    logger.error("generate_new_moscary_jwt_error", {
      message: "MOSCARY_JWT_PRIVATE_KEY is not set",
    });
    return;
  }
  token = jwt.sign(
    {
      sub: fxaUid,
      email: email,
      isAdmin: isAdmin(email),
    },
    privateKey, // Use the private key here
    {
      expiresIn: EXPIRATION_TIME,
      algorithm: "RS256", // Use RS256 algorithm
      issuer: process.env.SERVER_URL,
      audience: process.env.MOSCARY_URL || "",
      keyid: KEY_ID, // Include the key ID in the header
    },
  );
  // Store the token with a TTL matching its expiration
  // We'll parse '1h' to EXPIRATION_TIME seconds for Redis TTL
  await rClient.set(REDIS_KEY, token, "EX", EXPIRATION_TIME);
  logger.info("generate_new_moscary_jwt_success");
  return token;
}
