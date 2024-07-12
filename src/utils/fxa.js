/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import crypto from 'crypto'
import { URL } from 'url'

import { InternalServerError } from '../utils/error.js'
import AppConstants from '../appConstants.js'

/**
 * @param {string} path
 * @param {any} token
 */
// TODO: Add unit test when changing this code:
/* c8 ignore start */
async function postTokenRequest(path, token) {
  const fxaTokenOrigin = new URL(AppConstants.OAUTH_TOKEN_URI).origin
  const tokenUrl = `${fxaTokenOrigin}${path}`
  const tokenBody = (typeof token === 'object') ? token : { token }
  const tokenOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(tokenBody)
  }

  try {
    const response = await fetch(tokenUrl, tokenOptions)
    if (!response.ok) throw new InternalServerError(`bad response: ${response.status}`)
    return await response.json()
  } catch (e) {
    if (e instanceof Error) {
      console.error('postTokenRequest', { stack: e.stack })
    }
    return e
  }
}
/* c8 ignore stop */

/**
 * fxa doc: https://mozilla.github.io/ecosystem-platform/api#tag/Oauth/operation/postOauthDestroy
 *
 * @param {{ token?: string; token_type_hint?: string; }} token
 */
// TODO: Add unit test when changing this code:
/* c8 ignore start */
async function destroyOAuthToken(token) {
  const tokenBody = {
    ...token,
    client_id: AppConstants.OAUTH_CLIENT_ID,
    client_secret: AppConstants.OAUTH_CLIENT_SECRET
  }
  try {
    const response = await postTokenRequest('/v1/oauth/destroy', tokenBody)
    return response
  } catch (e) {
    if (e instanceof Error) {
      console.error('destroyOAuthToken', { stack: e.stack })
    }
  }
}
/* c8 ignore stop */

/**
 * @param {{ fxa_access_token: string; fxa_refresh_token: string; }} subscriber
 */
// TODO: Add unit test when changing this code:
/* c8 ignore next 4 */
async function revokeOAuthTokens(subscriber) {
  await destroyOAuthToken({ token: subscriber.fxa_access_token, token_type_hint: "access_token" })
  await destroyOAuthToken({ token: subscriber.fxa_refresh_token, token_type_hint: "refresh_token" })
}

/**
 * @param {string} refreshToken
 * @returns {Promise<{access_token: string, refresh_token: string, expires_in: number}>}
 */
// Not covered by tests; mostly side-effects. See test-coverage.md#mock-heavy
/* c8 ignore start */
async function refreshOAuthTokens(refreshToken) {
  const subscriptionIdUrl = `${AppConstants.OAUTH_ACCOUNT_URI}/oauth/token`
  try {
    const postResp = await fetch(subscriptionIdUrl, {
      headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                  client_id: AppConstants.OAUTH_CLIENT_ID,
                  client_secret: AppConstants.OAUTH_CLIENT_SECRET,
                  grant_type: "refresh_token",
                  refresh_token: refreshToken,
                  ttl: 604800, // request 7 days ttl
                }),
                method: "POST",
              
    })

    const responseTokens = await postResp.json();
    if (!postResp.ok) throw responseTokens;
    return responseTokens

  } catch (e) {
    if (e instanceof Error) {
      console.error('refresh_fxa_access_token', { stack: e.stack })
    }
    throw e
  }
}
/* c8 ignore stop */

/**
 * @param {string} bearerToken
 * @returns {Promise<Array<any> | null>}
 */
// Not covered by tests; mostly side-effects. See test-coverage.md#mock-heavy
/* c8 ignore start */
async function getSubscriptions(bearerToken) {
  const subscriptionIdUrl = `${AppConstants.OAUTH_ACCOUNT_URI}/oauth/subscriptions/active`
  try {
    const getResp = await fetch(subscriptionIdUrl, {
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${bearerToken}`
      }
    })
    const resp = getResp.json()
    if (!getResp.ok) throw resp;

    console.info(`get_fxa_subscriptions: success`)
    return resp;
  
  } catch (e) {
    if (e instanceof Error) {
      console.error('get_fxa_subscriptions', { stack: e.stack })
    }
    return null
  }
}

/**
 * Calls https://mozilla.github.io/ecosystem-platform/api#tag/Subscriptions/operation/getOauthMozillasubscriptionsCustomerBillingandsubscriptions
 *
 * Note that we currently only look at the subscriptions and their plan IDs, so
 * the return type definition isn't exhaustive yet. If you need more data, look
 * at the above docs to expand the return type definition.
 *
 * @param {string} bearerToken
 * @returns {Promise<
 *   null
 *   | {
 *       subscriptions: Array<{
 *         plan_id: string;
 *         product_id: string;
 *         current_period_end: number;
 *         cancel_at_period_end: boolean;
 *         status: "active" | "canceled" | "trialing" | "unpaid" | string;
 *       }>
 *     }
 * >}
 */

async function getBillingAndSubscriptions(bearerToken) {
  const subscriptionIdUrl = `${process.env.OAUTH_API_URI}/oauth/mozilla-subscriptions/customer/billing-and-subscriptions`
  
  try {
    const getResp = await fetch(subscriptionIdUrl, {
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${bearerToken}`
      }
    })

    if (!getResp.ok) {
      throw new InternalServerError(`bad response: [${getResp.status}] [${getResp.statusText}]`)
    } else {
      console.info(`get_fxa_subscriptions: success`)
      return await getResp.json()
    }
  } catch (e) {
    if (e instanceof Error) {
      console.error('get_fxa_subscriptions', { stack: e.stack })
    }
    return null
  }
}
/* c8 ignore stop */

/**
 * @param {string} bearerToken
 * @returns {Promise<boolean>}
 */
// Not covered by tests; mostly side-effects. See test-coverage.md#mock-heavy
/* c8 ignore start */
async function deleteSubscription(bearerToken) {
  try {
    const subs = await getSubscriptions(bearerToken) ?? []
    let subscriptionId;
    for (const sub of subs) {
      if (sub && sub.productId && sub.productId === AppConstants.PREMIUM_PRODUCT_ID) {
        subscriptionId = sub.subscriptionId
      }
    }
    if (subscriptionId) {
      const deleteUrl = `${AppConstants.OAUTH_ACCOUNT_URI}/oauth/subscriptions/active/${subscriptionId}`
      const response = await fetch(deleteUrl, {
        method: "DELETE",
        headers: {
          Accept: 'application/json',
          Authorization: `Bearer ${bearerToken}`
        }
      })
      if (!response.ok) {
        throw new Error(await response.text())
      } else {
        console.info(`delete_fxa_subscription: success - ${JSON.stringify(await response.json())}`)
      }
    }
    return true
  } catch (e) {
    if (e instanceof Error) {
      console.error('delete_fxa_subscription', { stack: e.stack })
    }
    return false
  }
}
/* c8 ignore stop */

/**
 * @param {string} bearerToken
 * @param {string} couponCodeId
 * @returns
 */
// Not covered by tests; mostly side-effects. See test-coverage.md#mock-heavy
/* c8 ignore start */
async function applyCoupon(bearerToken, couponCodeId) {
  try {
    const subs = await getSubscriptions(bearerToken) ?? []
    let subscriptionId;
    for (const sub of subs) {
      if (sub && sub.productId && sub.productId === AppConstants.PREMIUM_PRODUCT_ID) {
        subscriptionId = sub.subscriptionId
      }
    }
    if (subscriptionId) {
      const applyCouponUrl = `${AppConstants.OAUTH_ACCOUNT_URI}/oauth/subscriptions/coupon/apply`
      const response = await fetch(applyCouponUrl, {
        method: "PUT",
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Authorization: `Bearer ${bearerToken}`
        },
        body: JSON.stringify({
          promotionId: couponCodeId,
          subscriptionId
        })
      })
      if (!response.ok) {
        const errMsg = await response.text()
        console.error(`apply_coupon: failed - ${errMsg}`)
        throw new Error(`apply_coupon: failed - ${errMsg}`)
      } else {
        console.info(`apply_coupon: success - ${JSON.stringify(await response.json())}`)
      }
    }
  } catch (e) {
    if (e instanceof Error) {
      console.error('apply_coupon', { stack: e.stack })
    }
    throw e;
  }
}
/* c8 ignore stop */


/**
 * @param {crypto.BinaryLike} email
 */
// TODO: Add unit test when changing this code:
/* c8 ignore next 3 */
function getSha1(email) {
  return crypto.createHash('sha1').update(email).digest('hex')
}

export {
  refreshOAuthTokens,
  destroyOAuthToken,
  revokeOAuthTokens,
  getSha1,
  getSubscriptions,
  getBillingAndSubscriptions,
  deleteSubscription,
  applyCoupon
}
