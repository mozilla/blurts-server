/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import * as jwt from 'jsonwebtoken'
import jwkToPem from 'jwk-to-pem'
import { captureException } from '@sentry/node'
import { UnauthorizedError } from '../utils/error.js'
import { deleteSubscriberByFxAUID, getSubscriberByFxaUid, updateFxAProfileData } from '../db/tables/subscribers.js'
import mozlog from '../utils/log.js'
import appConstants from '../appConstants.js'
const log = mozlog('controllers.fxa-rp-events')

const FXA_PROFILE_CHANGE_EVENT = 'https://schemas.accounts.firefox.com/event/profile-change'
const FXA_SUBSCRIPTION_CHANGE_EVENT = 'https://schemas.accounts.firefox.com/event/subscription-state-change'
const FXA_DELETE_USER_EVENT = 'https://schemas.accounts.firefox.com/event/delete-user'

/**
 * Fetch FxA JWT Public for verification
 *
 * @returns {Promise<Array<jwt.JwtPayload> | undefined>} keys an array of FxA JWT keys
 */
const getJwtPubKey = async () => {
  const jwtKeyUri = `${appConstants.OAUTH_ACCOUNT_URI}/jwt`
  try {
    const res = await fetch(jwtKeyUri, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const { keys } = res
    log.info('getJwtPubKey', `fetched jwt public keys from: ${jwtKeyUri} - ${keys}`)
    return keys
  } catch (e) {
    captureException('Could not get JWT public key', jwtKeyUri)
  }
}

/**
 * Authenticate FxA JWT for FxA relay event requests
 *
 * @param {import('express').Request} req
 * @returns {Promise<jwt.JwtPayload>} decoded JWT data, which should contain FxA events
 */
const authenticateFxaJWT = async (req) => {
  // Assuming this is how you retrieve your auth header.
  const authHeader = req?.headers?.authorization

  // Require an auth header
  if (!authHeader) {
    captureException('No auth header found', req?.headers)
    throw UnauthorizedError('No auth header found')
  }

  // Extract the first portion which should be 'Bearer'
  const headerType = authHeader.substr(0, authHeader.indexOf(' '))
  if (headerType !== 'Bearer') {
    throw UnauthorizedError('Invalid auth type')
  }

  // The remaining portion, which should be the token
  const headerToken = authHeader.substr(authHeader.indexOf(' ') + 1)

  // Decode the token, require it to come out ok as an object
  const token = jwt.decode(headerToken, { complete: true })
  if (!token || typeof token === 'string') {
    throw UnauthorizedError('Invalid token type')
  }

  // Verify we have a key for this kid, this assumes that you have fetched
  // the publicJwks from FxA and put both them in an Array.
  const publicJwks = await getJwtPubKey()
  const jwk = publicJwks.find(j => j.kid === token.header.kid)
  if (!jwk) {
    throw UnauthorizedError('No jwk found for this kid: ' + token.header.kid)
  }
  const jwkPem = jwkToPem(jwk)

  // Verify the token is valid
  const decoded = jwt.verify(headerToken, jwkPem, {
    algorithms: ['RS256']
  })
  // This is the JWT data itself.
  return decoded
}

/**
 * Handler for FxA events, used by FxA as a callback URI endpoint
 * Example events include FxA user deletion, profile changes, and subscription changes
 *
 * @param {*} req
 * @param {*} res
 * @returns
 */
const fxaRpEvents = async (req, res) => {
  let decodedJWT
  try {
    decodedJWT = await authenticateFxaJWT(req)
  } catch (e) {
    log.error('fxaRpEvents', e)
    captureException(e)
    res.status(202)
  }

  if (!decodedJWT?.events) {
    // capture an exception in Sentry only. Throwing error will trigger FXA retry
    log.error('fxaRpEvents', decodedJWT)
    captureException(new Error('fxaRpEvents: decodedJWT is missing attribute "events"', decodedJWT))
    res.status(202)
  }

  const fxaUserId = decodedJWT?.sub
  if (!fxaUserId) {
    // capture an exception in Sentry only. Throwing error will trigger FXA retry
    captureException(new Error('fxaRpEvents: decodedJWT is missing attribute "sub"', decodedJWT))
    res.status(202)
  }

  const subscriber = getSubscriberByFxaUid(fxaUserId)

  // reference example events: https://github.com/mozilla/fxa/blob/main/packages/fxa-event-broker/README.md
  for (const event in decodedJWT?.events) {
    switch (event) {
      case FXA_DELETE_USER_EVENT:
        log.debug('fxa_delete_user', {
          event
        })

        // delete user events only have keys. Keys point to empty objects
        await deleteSubscriberByFxAUID(fxaUserId)
        break
      case FXA_PROFILE_CHANGE_EVENT: {
        const updatedProfileFromEvent = decodedJWT.events[event]
        log.debug('fxa_profile_update', {
          event,
          updatedProfileFromEvent
        })

        // get current profiledata
        const { fxa_profile_json: currentFxAProfile } = subscriber

        // merge new event into existing profile data
        for (const key in updatedProfileFromEvent) {
          if (currentFxAProfile[key]) currentFxAProfile[key] = updatedProfileFromEvent[key]
        }

        // update fxa profile data
        await updateFxAProfileData(subscriber, currentFxAProfile)
        break
      }
      case FXA_SUBSCRIPTION_CHANGE_EVENT:
        // TODO: to be implemented after subplat
        break
      default:
        log.warn('unhandled_event', {
          event
        })
        break
    }
  }

  res.status(200)
}

export {
  fxaRpEvents
}
