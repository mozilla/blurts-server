import ClientOAuth2 from 'client-oauth2'
import crypto from 'crypto'
import got from 'got'
import { URL } from 'url'

import AppConstants from '../app-constants.js'

// This object exists instead of inlining the env vars to make it easy
// to abstract fetching API endpoints from the OAuth server (instead
// of specifying them in the environment) in the future.
const FxAOAuthUtils = {
  get authorizationUri () { return AppConstants.OAUTH_AUTHORIZATION_URI },
  get tokenUri () { return AppConstants.OAUTH_TOKEN_URI },
  get profileUri () { return AppConstants.OAUTH_PROFILE_URI }
}

export const FxAOAuthClient = new ClientOAuth2({
  clientId: AppConstants.OAUTH_CLIENT_ID,
  clientSecret: AppConstants.OAUTH_CLIENT_SECRET,
  accessTokenUri: FxAOAuthUtils.tokenUri,
  authorizationUri: FxAOAuthUtils.authorizationUri,
  redirectUri: AppConstants.SERVER_URL + '/oauth/confirmed',
  scopes: ['profile']
})

async function postTokenRequest (path, token) {
  const fxaTokenOrigin = new URL(AppConstants.OAUTH_TOKEN_URI).origin
  const tokenUrl = `${fxaTokenOrigin}${path}`
  const tokenBody = (typeof token === 'object') ? token : { token }
  const tokenOptions = {
    method: 'POST',
    json: tokenBody,
    responseType: 'json'
  }

  try {
    const response = await got(tokenUrl, tokenOptions)
    return response
  } catch (e) {
    console.error('postTokenRequest', { stack: e.stack })
    return e
  }
}

export async function verifyOAuthToken (token) {
  try {
    const response = await postTokenRequest('/v1/verify', token)
    return response
  } catch (e) {
    console.error('verifyOAuthToken', { stack: e.stack })
  }
}

export async function destroyOAuthToken (token) {
  try {
    const response = await postTokenRequest('/v1/destroy', token)
    return response
  } catch (e) {
    console.error('destroyOAuthToken', { stack: e.stack })
  }
}

export async function revokeOAuthTokens (subscriber) {
  await destroyOAuthToken({ token: subscriber.fxa_access_token })
  await destroyOAuthToken({ refresh_token: subscriber.fxa_refresh_token })
}

export async function getProfileData (accessToken) {
  try {
    const data = await got(FxAOAuthUtils.profileUri,
      { headers: { Authorization: `Bearer ${accessToken}` } }
    )
    return data.body
  } catch (e) {
    console.warn('getProfileData', { stack: e.stack })
    return e
  }
}

export async function sendMetricsFlowPing (path) {
  const fxaMetricsFlowUrl = new URL(path, AppConstants.FXA_SETTINGS_URL)
  const fxaMetricsFlowOptions = {
    method: 'GET',
    headers: { Origin: AppConstants.SERVER_URL }
  }
  try {
    console.info(`GETting ${fxaMetricsFlowUrl}, with options: ${JSON.stringify(fxaMetricsFlowOptions)}`)
    const fxaResp = await got(fxaMetricsFlowUrl, fxaMetricsFlowOptions)
    console.info('pinged FXA metrics flow.')
    return fxaResp
  } catch (e) {
    console.error('sendMetricsFlowPing', { stack: e.stack })
    return false
  }
}

export function getSha1 (email) {
  return crypto.createHash('sha1').update(email).digest('hex')
}
