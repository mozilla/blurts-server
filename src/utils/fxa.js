/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import ClientOAuth2 from 'client-oauth2'
import crypto from 'crypto'
import { URL } from 'url'

import { InternalServerError } from '../utils/error.js'
import AppConstants from '../appConstants.js'

// This object exists instead of inlining the env vars to make it easy
// to abstract fetching API endpoints from the OAuth server (instead
// of specifying them in the environment) in the future.
const FxAOAuthUtils = {
  get authorizationUri() { return AppConstants.OAUTH_AUTHORIZATION_URI },
  get tokenUri() { return AppConstants.OAUTH_TOKEN_URI },
  // TODO: Add unit test when changing this code:
  /* c8 ignore next */
  get profileUri() { return AppConstants.OAUTH_PROFILE_URI }
}

const FxAOAuthClient = new ClientOAuth2({
  clientId: AppConstants.OAUTH_CLIENT_ID,
  clientSecret: AppConstants.OAUTH_CLIENT_SECRET,
  accessTokenUri: FxAOAuthUtils.tokenUri,
  authorizationUri: FxAOAuthUtils.authorizationUri,
  redirectUri: AppConstants.SERVER_URL + '/oauth/confirmed',
  scopes: ['profile']
})

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
 * @param {string} token
 */
// TODO: Add unit test when changing this code:
/* c8 ignore start */
async function verifyOAuthToken(token) {
  try {
    const response = await postTokenRequest('/v1/verify', token)
    return response
  } catch (e) {
    if (e instanceof Error) {
      console.error('verifyOAuthToken', { stack: e.stack })
    }
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
 * @param {any} accessToken
 */
// TODO: Add unit test when changing this code:
/* c8 ignore start */
async function getProfileData(accessToken) {
  try {
    const response = await fetch(FxAOAuthUtils.profileUri, {
      headers: { Authorization: `Bearer ${accessToken}` }
    })
    if (!response.ok) throw new InternalServerError(`bad response: ${response.status}`)
    return await response.text()
  } catch (e) {
    if (e instanceof Error) {
      console.warn('getProfileData', { stack: e.stack })
    }
    return e
  }
}
/* c8 ignore stop */

/**
 * @param {string} path
 */
// Not covered by tests; mostly side-effects. See test-coverage.md#mock-heavy 
/* c8 ignore start */
async function sendMetricsFlowPing(path) {
  const fxaMetricsFlowUrl = new URL(path, AppConstants.NEXT_PUBLIC_FXA_SETTINGS_URL)
  try {
    const response = await fetch(fxaMetricsFlowUrl, {
      headers: { Origin: AppConstants.SERVER_URL }
    })
    if (!response.ok) throw new InternalServerError(`bad response: ${response.status}`)
    console.info('pinged FXA metrics flow.')
    return response
  } catch (e) {
    if (e instanceof Error) {
      console.error('sendMetricsFlowPing', { stack: e.stack })
    }
    return false
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

    if (!getResp.ok) {
      throw new InternalServerError(`bad response: ${getResp.status}`)
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
        // throw new InternalServerError(`bad response: ${response.status}`)
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
 * @param {crypto.BinaryLike} email
 */
// TODO: Add unit test when changing this code:
/* c8 ignore next 3 */
function getSha1(email) {
  return crypto.createHash('sha1').update(email).digest('hex')
}

export {
  FxAOAuthClient,
  verifyOAuthToken,
  destroyOAuthToken,
  revokeOAuthTokens,
  getProfileData,
  sendMetricsFlowPing,
  getSha1,
  getSubscriptions,
  deleteSubscription
}
