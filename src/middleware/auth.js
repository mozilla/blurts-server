/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { v5 as uuidv5 } from 'uuid'

import AppConstants from '../app-constants.js'
import { getSubscriberById, updateFxAProfileData } from '../db/tables/subscribers.js'
import * as FXA from '../utils/fxa.js'
import { UnauthorizedError } from '../utils/error.js'

import * as monitorPings from '../generated/pings.js'
import * as monitorManagementMetrics from '../generated/monitor.js'
import * as userJourneyMetrics from '../generated/userJourney.js'

async function getRequestSessionUser (req, res, next) {
  if (req.session && req.session.user) {
    // make sure the user object has all subscribers and email_addresses properties
    return getSubscriberById(req.session.user.id)
  }
  return null
}

async function requireSessionUser (req, res, next) {
  const user = await getRequestSessionUser(req)
  if (!user) {
    const queryParams = new URLSearchParams(req.query).toString()
    return res.redirect(`/oauth/init?${queryParams}`)
  }
  const fxaProfileData = await FXA.getProfileData(user.fxa_access_token)
  if (Object.prototype.hasOwnProperty.call(fxaProfileData, 'name') && fxaProfileData.name === 'HTTPError') {
    delete req.session.user
    return res.redirect('/')
  }
  await updateFxAProfileData(user, fxaProfileData)
  req.session.user = user
  req.user = user

  userJourneyMetrics.pathname.set(req._parsedOriginalUrl.pathname)
  userJourneyMetrics.visit.set(new Date())

  const monitorId = uuidv5(req.user.fxa_uid, AppConstants.GLEAN_UUID_NAMESPACE)
  req.user.monitorId = monitorId

  monitorManagementMetrics.id.set(monitorId)
  monitorPings.userJourney.submit()

  next()
}

async function requireAdminUser (req, res, next) {
  const user = await getRequestSessionUser(req)
  if (!user) {
    const queryParams = new URLSearchParams(req.query).toString()
    return res.redirect(`/oauth/init?${queryParams}`)
  }
  const fxaProfileData = await FXA.getProfileData(user.fxa_access_token)

  // log for better debugging
  console.info('requireAdminUser - fxaProfileData:' + JSON.stringify(fxaProfileData))

  // https://stackoverflow.com/questions/30469261/checking-for-typeof-error-in-js
  // duck typing and instanceof check to make sure it's an error type
  if (fxaProfileData instanceof Error || (fxaProfileData && fxaProfileData.stack && fxaProfileData.message)) {
    delete req.session.user
    return res.redirect('/')
  }

  try {
    const admins = AppConstants.ADMINS?.split(',') || []
    const isAdmin = admins.includes(JSON.parse(fxaProfileData).email)
    if (!isAdmin) {
      next(new UnauthorizedError('User is not an admin'))
    }

    await updateFxAProfileData(user, fxaProfileData)
    req.session.user = user
    req.user = user
    next()
  } catch (e) {
    next(e)
  }
}

export { requireSessionUser, requireAdminUser }
