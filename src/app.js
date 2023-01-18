import express from 'express'
import session from 'express-session'
import connectRedis from 'connect-redis'
import helmet from 'helmet'
import accepts from 'accepts'
import redis from 'redis'
import cookieParser from 'cookie-parser'

import AppConstants from './app-constants.js'
import { localStorage } from './utils/local-storage.js'
import { errorHandler } from './middleware/error.js'
import { doubleCsrfProtection } from './utils/csrf.js'
import { initFluentBundles, updateLocale } from './utils/fluent.js'
import { loadBreachesIntoApp } from './utils/hibp.js'
import indexRouter from './routes/index.js'

const app = express()
const isDev = AppConstants.NODE_ENV === 'dev'

// Determine from where to serve client code/assets:
// Build script is triggered for `npm start` and assets are served from /dist.
// Build script is NOT run for `npm run dev`, assets are served from /src, and nodemon restarts server without build (faster dev).
const staticPath = process.env.npm_lifecycle_event === 'start' ? '../dist' : './client'

await initFluentBundles()

async function getRedisStore () {
  const RedisStoreConstructor = connectRedis(session)
  if (['', 'redis-mock'].includes(AppConstants.REDIS_URL)) {
    const redisMock = await import('redis-mock') // for devs without local redis
    return new RedisStoreConstructor({ client: redisMock.default.createClient() })
  }
  return new RedisStoreConstructor({ client: redis.createClient({ url: AppConstants.REDIS_URL }) })
}

// middleware
app.use(
  helmet({
    crossOriginEmbedderPolicy: false
  })
)

const imgSrc = [
  "'self'"
]

if (AppConstants.FXA_ENABLED) {
  const fxaSrc = new URL(AppConstants.OAUTH_PROFILE_URI).origin
  imgSrc.push(fxaSrc)
}

// disable forced https to allow localhost on Safari
app.use(
  helmet.contentSecurityPolicy({
    directives: {
      imgSrc,
      upgradeInsecureRequests: isDev ? null : []
    }
  })
)

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

// MNTOR-1009:
// Because of heroku's proxy settings, request / cookies are not persisted between calls
// Setting the trust proxy to high and securing the cookie allowed the cookie to persist
// If cookie.secure is set as true, for nodejs behind proxy, "trust proxy" needs to be set
if (AppConstants.NODE_ENV === 'heroku') {
  app.set('trust proxy', 1)
}

// session
const SESSION_DURATION_HOURS = AppConstants.SESSION_DURATION_HOURS || 48
app.use(session({
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
}))

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

// routing
app.use('/', indexRouter)
app.use(errorHandler)

// start server
app.listen(AppConstants.PORT, function () {
  console.log(`MONITOR V2: Server listening at ${this.address().port}`)
  console.log(`Static files served from ${staticPath}`)
})
