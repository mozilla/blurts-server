import AppConstants from '../app-constants.js'
import { getSubscriberById, updateFxAProfileData } from '../db/index.js'
import * as FXA from '../utils/fxa.js'

async function _getRequestSessionUser (req, res, next) {
  if (req.session && req.session.user) {
    // make sure the user object has all subscribers and email_addresses properties
    return getSubscriberById(req.session.user.id)
  }
  return null
}

export async function requireSessionUser (req, res, next) {
  const user = await _getRequestSessionUser(req)
  if (!user) {
    const queryParams = new URLSearchParams(req.query).toString()
    return res.redirect(`/auth/init?${queryParams}`)
  }
  const fxaProfileData = await FXA.getProfileData(user.fxa_access_token)
  if (fxaProfileData.hasOwnProperty('name') && fxaProfileData.name === 'HTTPError') {
    delete req.session.user
    return res.redirect('/')
  }
  await updateFxAProfileData(user, fxaProfileData)
  req.session.user = user
  req.user = user
  next()
}

export async function requireAdminUser (req, res, next) {
  const user = await _getRequestSessionUser(req)
  if (!user) {
    const queryParams = new URLSearchParams(req.query).toString()
    return res.redirect(`/auth/init?${queryParams}`)
  }
  const fxaProfileData = await FXA.getProfileData(user.fxa_access_token)
  const admins = AppConstants.ADMINS?.split(',') || []
  const isAdmin = admins.includes(JSON.parse(fxaProfileData).email)

  const hasFxaError = Object.prototype.hasOwnProperty.call(fxaProfileData, 'name') && fxaProfileData.name
  if (hasFxaError) {
    delete req.session.user
  }
  if (!isAdmin || hasFxaError) {
    return res.sendStatus(401)
  }

  await updateFxAProfileData(user, fxaProfileData)
  req.session.user = user
  req.user = user
  next()
}
