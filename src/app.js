/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

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

import AppConstants from './appConstants.js'
import { localStorage } from './utils/localStorage.js'
import { errorHandler } from './middleware/error.js'
import { initFluentBundles, updateLocale, getMessageWithLocale, getMessage } from './utils/fluent.js'
import { loadBreachesIntoApp } from './utils/hibp.js'
import { RateLimitError } from './utils/error.js'
import { initEmail } from './utils/email.js'
import indexRouter from './routes/index.js'
import { noSearchEngineIndex } from './middleware/noSearchEngineIndex.js'

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
    const { redisMockClient } = await import('./utils/redisMock.js')
    return new RedisStore({ client: redisMockClient })
  }

  const redisClient = createClient({ url: AppConstants.REDIS_URL })
  // the following event handlers are currently required for Heroku server stability: https://github.com/Shopify/shopify-app-js/issues/129
  redisClient.on('error', err => console.error('Redis client error', err))
  redisClient.on('connect', () => console.log('Redis client is connecting'))
  redisClient.on('reconnecting', () => console.log('Redis client is reconnecting'))
  redisClient.on('ready', () => console.log('Redis client is ready'))
  await redisClient.connect().catch(console.error)
  return new RedisStore({ client: redisClient })
}

// middleware
app.use(
  helmet({
    crossOriginResourcePolicy: { policy: 'cross-origin' },
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
  "'self'",
  // Support GA4 per https://developers.google.com/tag-platform/tag-manager/web/csp
  'https://*.google-analytics.com',
  'https://*.googletagmanager.com',
  'https://firefoxusercontent.com',
  'https://mozillausercontent.com/',
  'https://monitor.cdn.mozilla.net/'
]

if (AppConstants.FXA_ENABLED) {
  const fxaSrc = new URL(AppConstants.OAUTH_PROFILE_URI).origin
  imgSrc.push(fxaSrc)
}

app.use((_req, res, _next) => {
  helmet.contentSecurityPolicy({
    directives: {
      upgradeInsecureRequests: isDev ? null : [], // disable forced https to allow localhost on Safari
      scriptSrc: [
        "'self'",
        // Support GA4 per https://developers.google.com/tag-platform/tag-manager/web/csp
        'https://*.googletagmanager.com'
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

// For text/html or */* (if Accept has not been set), negotiate and store the requested language.
// This filter avoids running unecessary locale functions for every image/webp request, for example.
// Using AsyncLocalStorage avoids having to pass req context down through every function (e.g. for getMessage())
app.use((req, res, next) => {
  if (!['text/html', '*/*'].includes(accepts(req).types()[0])) return next()

  req.locale = updateLocale(accepts(req).languages())
  localStorage.run(new Map(), () => {
    localStorage.getStore().set('locale', req.locale)
    next() // call next() inside this function to pass asyncLocalStorage context to other middleware.
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

app.use(noSearchEngineIndex)
app.use(express.static(staticPath, {
  setHeaders: (res, path, stat) => {
    if (path.substring(0, path.lastIndexOf('.')).endsWith('.hashed')) {
      // Files with extensions like `.hashed.js` have a content hash in their
      // file name, and hence will have a new filename if their content changes.
      // Thus, it can be cached basically forever:
      res.set('Cache-Control', 'max-age=31536000, immutable')
    }
  }
}))
app.use(express.json())
app.use(cookieParser(AppConstants.COOKIE_SECRET))

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
