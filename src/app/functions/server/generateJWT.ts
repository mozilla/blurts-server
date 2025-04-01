/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import jwt from "jsonwebtoken";
import { redisClient, REDIS_JWT_KEY_PREFIX } from "../../../db/redis/client";
import { getSubscriberByFxaUid } from "../../../db/tables/subscribers";
import { isAdmin } from "../../api/utils/auth";
import { logger } from "./logging";
const rClient = redisClient();

export async function getMoscaryJWT(fxaUid: string) {
  const REDIS_KEY = `${REDIS_JWT_KEY_PREFIX}${fxaUid}`;
  // if token is already exists in redis, return it
  let token = await rClient.get(REDIS_KEY);
  if (token) {
    logger.info("get_moscary_jwt_from_redis_success");
    return token;
  }
  // oteherwise, generate new token
  if (!process.env.NEXTAUTH_SECRET) {
    logger.error("get_moscary_jwt_from_redis", {
      message: "NEXTAUTH_SECRET is not set",
    });
    return;
  }
  const subscriber = await getSubscriberByFxaUid(fxaUid);
  if (!subscriber) {
    logger.error("get_moscary_jwt_from_redis", {
      message: "Subscriber not found",
      fxaUid,
    });
    return;
  }
  token = jwt.sign(
    {
      sub: subscriber.fxa_uid,
      email: subscriber.primary_email,
      isAdmin: isAdmin(subscriber.primary_email),
    },
    process.env.NEXTAUTH_SECRET,
    {
      expiresIn: "1h",
      algorithm: "HS256",
      issuer: process.env.SERVER_URL,
      audience: process.env.MOSCARY_URL,
    },
  );
  await rClient.set(REDIS_KEY, token);
  logger.info("generate_new_moscary_jwt_success");
  return token;
}
