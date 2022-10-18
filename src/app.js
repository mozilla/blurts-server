import express from 'express'
import session from 'express-session'
import connectRedis from 'connect-redis'
// import Helmet from 'helmet'
import accepts from 'accepts'
import redis from 'redis'

import AppConstants from './app-constants.js'
import { initFluentBundles, updateAppLocale } from './utils/fluent.js'
import indexRouter from './routes/index.js'

const app = express()

/**
* Determine from where to serve client code/assets.
* Build script is triggered for `npm start` – code/assets are served from /dist.
* Build script is NOT run for `npm run dev` – code/assets are served from /src and nodemon restarts server without build (faster dev).
*/
const staticPath = process.env.npm_lifecycle_event === 'start' ? '../dist' : './client'

await initFluentBundles()

function getRedisStore () {
  const RedisStoreConstructor = connectRedis(session)
  // if (['', 'redis-mock'].includes(AppConstants.REDIS_URL)) {
  //   const redis = require('redis-mock')
  //   return new RedisStoreConstructor({ client: redis.createClient() })
  // }
  return new RedisStoreConstructor({ client: redis.createClient({ url: AppConstants.REDIS_URL }) })
}

// if (AppConstants.FXA_ENABLED) {
//   const fxaSrc = new URL(AppConstants.OAUTH_PROFILE_URI).origin;
//   [imgSrc, connectSrc].forEach(arr => {
//     arr.push(fxaSrc)
//   })
// }

// middleware
app.use(express.json())
app.use((req, res, next) => {
  const accept = accepts(req)
  req.appLocale = updateAppLocale(accept.languages())
  next()
})

// session
const SESSION_DURATION_HOURS = AppConstants.SESSION_DURATION_HOURS || 48
app.use(session({
  cookie: {
    httpOnly: true,
    maxAge: SESSION_DURATION_HOURS * 60 * 60 * 1000, // 48 hours
    rolling: true,
    sameSite: 'lax',
    secure: AppConstants.NODE_ENV !== 'dev'
  },
  resave: false,
  saveUninitialized: true,
  secret: AppConstants.COOKIE_SECRET,
  store: getRedisStore()
}))

// routing
app.use('/', indexRouter)
app.use(express.static(staticPath))

app.listen(AppConstants.PORT, function () {
  console.log(`MONITOR V2: Server listening at ${this.address().port}`)
  console.log(`Static files served from ${staticPath}`)
})
