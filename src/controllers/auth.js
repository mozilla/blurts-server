import { URL } from 'url'
import { randomBytes } from 'crypto'

import AppConstants from '../app-constants.js'
import { getSubscriberByEmail, updateFxAData, removeFxAData } from '../db/tables/subscribers.js'
import { addSubscriber } from '../db/tables/email_addresses.js'
// import { sendEmail, getEmailCtaHref, getUnsubscribeUrl } from '../email-utils'
import { getProfileData, FxAOAuthClient } from '../utils/fxa.js'
// import { getBreachesForEmail } from '../utils/hibp.js'
import { fluentError } from '../utils/fluent.js'
import mozlog from '../utils/log.js'
const { SERVER_URL } = AppConstants

const log = mozlog('controllers.auth')

function init (req, res, next, client = FxAOAuthClient) {
  // Set a random state string in a cookie so that we can verify
  // the user when they're redirected back to us after auth.
  const state = randomBytes(40).toString('hex')
  req.session.state = state
  const url = new URL(client.code.getUri({ state }))
  const fxaParams = new URL(req.url, SERVER_URL)

  req.session.utmContents = {}
  url.searchParams.append('prompt', 'login')
  url.searchParams.append('max_age', 0)
  url.searchParams.append('access_type', 'offline')
  url.searchParams.append('action', 'email')

  for (const param of fxaParams.searchParams.keys()) {
    url.searchParams.append(param, fxaParams.searchParams.get(param))
  }

  res.redirect(url)
}

async function confirmed (req, res, next, client = FxAOAuthClient) {
  if (!req.session.state) {
    log.error('oauth-invalid-session', 'req.session.state missing')
    throw fluentError('oauth-invalid-session')
  }

  if (req.session.state !== req.query.state) {
    log.error('oauth-invalid-session', 'req.session does not match req.query')
    throw fluentError('oauth-invalid-session')
  }

  const fxaUser = await client.code.getToken(req.originalUrl, { state: req.session.state })
  // Clear the session.state to clean up and avoid any replays
  req.session.state = null
  log.debug('fxa-confirmed-fxaUser', fxaUser)
  const fxaProfileData = await getProfileData(fxaUser.accessToken)
  log.debug('fxa-confirmed-profile-data', fxaProfileData)
  const email = JSON.parse(fxaProfileData).email

  const existingUser = await getSubscriberByEmail(email)
  req.session.user = existingUser

  const returnURL = new URL('user/breaches', SERVER_URL)
  const originalURL = new URL(req.originalUrl, SERVER_URL)

  for (const [key, value] of originalURL.searchParams.entries()) {
    if (key.startsWith('utm_')) returnURL.searchParams.append(key, value)
  }

  // Check if user is signing up or signing in,
  // then add new users to db and send email.
  if (!existingUser) {
    // req.session.newUser determines whether or not we show "fxa_new_user_bar" in template
    req.session.newUser = true
    const signupLanguage = req.appLocale
    const verifiedSubscriber = await addSubscriber(email, signupLanguage, fxaUser.accessToken, fxaUser.refreshToken, fxaProfileData)

    // TODO:
    // duping some of user/verify for now
    // let unsafeBreachesForEmail = []

    // unsafeBreachesForEmail = await getBreachesForEmail(
    //   sha1(email),
    //   req.app.locals.breaches,
    //   true
    // )

    // const utmID = 'report'
    // const reportSubject = unsafeBreachesForEmail.length ? req.fluentFormat('email-subject-found-breaches') : req.fluentFormat('email-subject-no-breaches')

    // await sendEmail(
    //   email,
    //   reportSubject,
    //   'email-2022',
    //   {
    //     supportedLocales: req.supportedLocales,
    //     breachedEmail: email,
    //     recipientEmail: email,
    //     date: req.fluentFormat(new Date()),
    //     unsafeBreachesForEmail,
    //     ctaHref: getEmailCtaHref(utmID, 'dashboard-cta'),
    //     utmCampaign: utmID,
    //     unsubscribeUrl: getUnsubscribeUrl(verifiedSubscriber, utmID),
    //     whichPartial: 'email_partials/report',
    //     heading: req.fluentFormat('email-breach-summary')
    //   }
    // )
    req.session.user = verifiedSubscriber

    return res.redirect(returnURL.pathname + returnURL.search)
  }
  // Update existing user's FxA data
  await updateFxAData(existingUser, fxaUser.accessToken, fxaUser.refreshToken, fxaProfileData)

  res.redirect(returnURL.pathname + returnURL.search)
}

/**
 * Controller to trigger a logout for user
 * @param {object} req contains session.user
 * @param {object} res redirects to homepage
 */
async function logout (req, res) {
  const subscriber = req.session?.user
  log.info('logout', subscriber?.primary_email)

  // delete oauth session info in database
  await removeFxAData(subscriber)

  // clear session cache
  req.session.destroy(s => {
    delete req.session
    res.redirect('/')
  })
}

export { init, confirmed, logout }
