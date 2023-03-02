/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import crypto from 'node:crypto'

import express from 'express'
import session from 'express-session'
import helmet from 'helmet'
import accepts from 'accepts'
import { createClient } from 'redis'
import RedisStore from 'connect-redis'
import cookieParser from 'cookie-parser'
import rateLimit from 'express-rate-limit'
import Sentry from '@sentry/node'
import '@sentry/tracing'

import AppConstants from './app-constants.js'
import { localStorage } from './utils/local-storage.js'
import { errorHandler } from './middleware/error.js'
import { doubleCsrfProtection } from './utils/csrf.js'
import { initFluentBundles, updateLocale, getMessageWithLocale, getMessage } from './utils/fluent.js'
import { loadBreachesIntoApp } from './utils/hibp.js'
import { RateLimitError } from './utils/error.js'
import { initEmail } from './utils/email.js'
import indexRouter from './routes/index.js'

const app = express()
const isDev = AppConstants.NODE_ENV === 'dev'

// init sentry
Sentry.init({
  dsn: AppConstants.SENTRY_DSN,
  environment: AppConstants.NODE_ENV,
  debug: isDev,
  beforeSend (event, hint) {
    if (!hint.originalException.locales || hint.originalException.locales[0] === 'en') return event // return if no localization or localization is in english

    // try to force an english translation for the error message if localized
    if (hint.originalException.fluentID) {
      event.exception.values[0].value = getMessageWithLocale(hint.originalException.fluentID, 'en') || getMessage(hint.originalException.fluentID)
    }

    return event
  }
})

// Determine from where to serve client code/assets:
// Build script is triggered for `npm start` and assets are served from /dist.
// Build script is NOT run for `npm run dev`, assets are served from /src, and nodemon restarts server without build (faster dev).
const staticPath =
  process.env.npm_lifecycle_event === 'start' ? '../dist' : './client'

await initFluentBundles()

async function getRedisStore () {
  if (['', 'redis-mock'].includes(AppConstants.REDIS_URL)) {
    // allow mock redis for setups without local redis server
    const { redisMockClient } = await import('./utils/redis-mock.js')
    return new RedisStore({ client: redisMockClient })
  }

  const redisClient = createClient({ url: AppConstants.REDIS_URL })
  await redisClient.connect().catch(console.error)
  return new RedisStore({ client: redisClient })
}

// middleware
app.use(
  helmet({
    crossOriginEmbedderPolicy: false
  })
)

app.use(
  Sentry.Handlers.requestHandler({
    request: ['headers', 'method', 'url'], // omit cookies, data, query_string
    user: ['id'] // omit username, email
  })
)

const imgSrc = [
  "'self'"
]

if (AppConstants.FXA_ENABLED) {
  const fxaSrc = new URL(AppConstants.OAUTH_PROFILE_URI).origin
  imgSrc.push(fxaSrc)
}

// Support GA4 per https://developers.google.com/tag-platform/tag-manager/web/csp
imgSrc.push('www.googletagmanager.com')

// disable forced https to allow localhost on Safari
app.use((_req, res, _next) => {
  res.locals.nonce = crypto.randomBytes(16).toString('hex')
  helmet.contentSecurityPolicy({
    directives: {
      upgradeInsecureRequests: isDev ? null : [],
      scriptSrc: [
        "'self'",
        // Support GA4 per https://developers.google.com/tag-platform/tag-manager/web/csp
        `'nonce-${res.locals.nonce}'`
      ],
      imgSrc,
      connectSrc: [
        "'self'",
        // Support GA4 per https://developers.google.com/tag-platform/tag-manager/web/csp
        'https://*.google-analytics.com',
        'https://*.analytics.google.com',
        'https://*.googletagmanager.com'
      ]
    }
  })(_req, res, _next)
})

// fallback to default 'no-referrer' only when 'strict-origin-when-cross-origin' not available
app.use(
  helmet.referrerPolicy({
    policy: ['no-referrer', 'strict-origin-when-cross-origin']
  })
)

// When a text/html request is received, negotiate and store the requested language
// Using asyncLocalStorage avoids having to pass req context down through every function (e.g. getMessage())
app.use((req, res, next) => {
  if (!req.headers.accept?.startsWith('text/html')) return next()

  localStorage.run(new Map(), () => {
    req.locale = updateLocale(accepts(req).languages())
    localStorage.getStore().set('locale', req.locale)
    next()
  })
})

// MNTOR-1009, 1117:
// Because of proxy settings, request / cookies are not persisted between calls
// Setting the trust proxy to high and securing the cookie allowed the cookie to persist
// If cookie.secure is set as true, for nodejs behind proxy, "trust proxy" needs to be set
app.set('trust proxy', 1)

// session
const SESSION_DURATION_HOURS = AppConstants.SESSION_DURATION_HOURS || 48
app.use(
  session({
    cookie: {
      maxAge: SESSION_DURATION_HOURS * 60 * 60 * 1000, // 48 hours
      rolling: true,
      sameSite: 'lax',
      secure: !isDev
    },
    resave: false,
    saveUninitialized: true,
    secret: AppConstants.COOKIE_SECRET,
    store: await getRedisStore()
  })
)

// Load breaches into namespaced cache
try {
  await loadBreachesIntoApp(app)
} catch (error) {
  console.error('Error loading breaches into app.locals', error)
}

app.use(express.static(staticPath))
app.use(express.json())
app.use(cookieParser(AppConstants.COOKIE_SECRET))
app.use(doubleCsrfProtection)

const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false // Disable the `X-RateLimit-*` headers
})

app.use('/api', apiLimiter)

// routing
app.use('/', indexRouter)

// sentry error handler
app.use(Sentry.Handlers.errorHandler({
  shouldHandleError (error) {
    if (error instanceof RateLimitError) return true
  }
}))

// app error handler
app.use(errorHandler)

app.listen(AppConstants.PORT, async function () {
  console.info(`MONITOR V2: Server listening at ${this.address().port}`)
  console.info(`Static files served from ${staticPath}`)
  try {
    await initEmail()
    console.info('Email initialized')
  } catch (ex) {
    console.error('try-initialize-email-error', { ex })
  }
})
