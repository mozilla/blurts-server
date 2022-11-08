import express from 'express'
import session from 'express-session'
import connectRedis from 'connect-redis'
import helmet from 'helmet'
import accepts from 'accepts'
import redis from 'redis'

import AppConstants from './app-constants.js'
import { initFluentBundles, updateAppLocale } from './utils/fluent.js'
import { loadBreachesIntoApp } from './utils/hibp.js'
import indexRouter from './routes/index.js'

const app = express()

/**
* Determine from where to serve client code/assets.
* Build script is triggered for `npm start` – code/assets are served from /dist.
* Build script is NOT run for `npm run dev` – code/assets are served from /src and nodemon restarts server without build (faster dev).
*/
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
app.use(express.json())
app.use(helmet())
app.use((req, res, next) => {
  const accept = accepts(req)
  req.appLocale = updateAppLocale(accept.languages())
  next()
})

// session
const SESSION_DURATION_HOURS = AppConstants.SESSION_DURATION_HOURS || 48
app.use(session({
  cookie: {
    maxAge: SESSION_DURATION_HOURS * 60 * 60 * 1000, // 48 hours
    rolling: true,
    sameSite: 'lax',
    secure: AppConstants.NODE_ENV !== 'dev'
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

// routing
app.use('/', indexRouter)
app.use(express.static(staticPath))

// start server
app.listen(AppConstants.PORT, function () {
  console.log(`MONITOR V2: Server listening at ${this.address().port}`)
  console.log(`Static files served from ${staticPath}`)
})
