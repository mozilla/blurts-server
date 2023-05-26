/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import * as jwt from 'jsonwebtoken'
import jwkToPem from 'jwk-to-pem'
import { captureException, captureMessage } from '@sentry/node'
import { UnauthorizedError, BadRequestError } from '../utils/error.js'
import { deleteSubscriber, getSubscriberByFxaUid, updateFxAProfileData, updatePrimaryEmail } from '../db/tables/subscribers.js'
import mozlog from '../utils/log.js'
import appConstants from '../appConstants.js'
const log = mozlog('controllers.fxa-rp-events')

const FXA_PROFILE_CHANGE_EVENT = 'https://schemas.accounts.firefox.com/event/profile-change'
const FXA_PASSWORD_CHANGE_EVENT = 'https://schemas.accounts.firefox.com/event/password-change'
const FXA_SUBSCRIPTION_CHANGE_EVENT = 'https://schemas.accounts.firefox.com/event/subscription-state-change'
const FXA_DELETE_USER_EVENT = 'https://schemas.accounts.firefox.com/event/delete-user'

/**
 * Fetch FxA JWT Public for verification
 *
 * @returns {Promise<Array<jwt.JwtPayload> | undefined>} keys an array of FxA JWT keys
 */
const getJwtPubKey = async () => {
  const jwtKeyUri = `${appConstants.OAUTH_ACCOUNT_URI}/jwks`
  try {
    const response = await fetch(jwtKeyUri, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const { keys } = await response.json()
    log.info('getJwtPubKey', `fetched jwt public keys from: ${jwtKeyUri} - ${keys.length}`)
    return keys
  } catch (e) {
    log.error('getJwtPubKey', `Could not get JWT public key: ${jwtKeyUri}`)
    captureException(new Error(`Could not get JWT public key: ${jwtKeyUri}`, e))
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
    captureMessage('No auth header found', req?.headers)
    throw new UnauthorizedError('No auth header found')
  }

  // Extract the first portion which should be 'Bearer'
  const headerType = authHeader.substring(0, authHeader.indexOf(' '))
  if (headerType !== 'Bearer') {
    throw new UnauthorizedError('Invalid auth type')
  }

  // The remaining portion, which should be the token
  const headerToken = authHeader.substring(authHeader.indexOf(' ') + 1)

  // Verify we have a key for this kid, this assumes that you have fetched
  // the publicJwks from FxA and put both them in an Array.
  const publicJwks = await getJwtPubKey()
  const jwk = publicJwks[0]
  if (!jwk) {
    throw new UnauthorizedError('No public jwk found')
  }

  // Verify the token is valid
  const jwkPem = jwkToPem(jwk)
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
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 * @returns
 */
const fxaRpEvents = async (req, res) => {
  let decodedJWT
  try {
    decodedJWT = await authenticateFxaJWT(req)
  } catch (e) {
    log.error('fxaRpEvents', e)
    captureException(e)
    throw new BadRequestError('Bad Request')
  }

  if (!decodedJWT?.events) {
    // capture an exception in Sentry only. Throwing error will trigger FXA retry
    log.error('fxaRpEvents', decodedJWT)
    captureMessage('fxaRpEvents: decodedJWT is missing attribute "events"', decodedJWT)
    throw new BadRequestError('Bad Request')
  }

  const fxaUserId = decodedJWT?.sub
  if (!fxaUserId) {
    // capture an exception in Sentry only. Throwing error will trigger FXA retry
    captureMessage('fxaRpEvents: decodedJWT is missing attribute "sub"', decodedJWT)
    throw new BadRequestError('Bad Request')
  }

  const subscriber = await getSubscriberByFxaUid(fxaUserId)

  // highly unlikely, though it is a possible edge case from QA tests.
  // To reproduce, perform the following two actions in sequence very quickly in FxA settings portal:
  // 1. swap primary email and secondary email
  // 2. quickly follow step 1 with deleting the account
  // There's a chance that the fxa event from deletion gets to our service first, in which case, the user will be deleted from the db prior to the profile change event hitting our service
  if (!subscriber) {
    const e = new Error(`could not find subscriber with fxa user id: ${fxaUserId}`)
    log.error('fxaRpEvents', e)
    captureException(e)
    res.status(200).send('OK')
  }

  // reference example events: https://github.com/mozilla/fxa/blob/main/packages/fxa-event-broker/README.md
  for (const event in decodedJWT?.events) {
    switch (event) {
      case FXA_DELETE_USER_EVENT:
        log.debug('fxa_delete_user', {
          subscriber,
          event
        })

        // delete user events only have keys. Keys point to empty objects
        await deleteSubscriber(subscriber)
        break
      case FXA_PROFILE_CHANGE_EVENT: {
        const updatedProfileFromEvent = decodedJWT.events[event]
        log.debug('fxa_profile_update', {
          fxaUserId,
          event,
          updatedProfileFromEvent
        })

        // get current profiledata
        const currentFxAProfile = subscriber?.fxa_profile_json || {}

        // merge new event into existing profile data
        for (const key in updatedProfileFromEvent) {
          // primary email change
          if (key === 'email') {
            await updatePrimaryEmail(subscriber, updatedProfileFromEvent[key])
          }
          if (currentFxAProfile[key]) {
            currentFxAProfile[key] = updatedProfileFromEvent[key]
          }
        }

        // update fxa profile data
        await updateFxAProfileData(subscriber, currentFxAProfile)
        break
      }
      case FXA_PASSWORD_CHANGE_EVENT: {
        const updateFromEvent = decodedJWT.events[event]
        log.debug('fxa_password_change', {
          fxaUserId,
          event,
          updateFromEvent
        })
        break
      }
      case FXA_SUBSCRIPTION_CHANGE_EVENT: {
        // TODO: to be implemented after subplat
        const updatedSubscriptionFromEvent = decodedJWT.events[event]
        log.debug('fxa_subscription_change', {
          fxaUserId,
          event,
          updatedSubscriptionFromEvent
        })
        break
      }
      default:
        log.warn('unhandled_event', {
          event
        })
        break
    }
  }

  res.status(200).send('OK')
}

export {
  fxaRpEvents
}
