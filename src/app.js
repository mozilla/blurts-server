import express from 'express'
import accepts from 'accepts'

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

// middleware
app.use(express.json())
app.use((req, res, next) => {
  const accept = accepts(req)
  req.appLocale = updateAppLocale(accept.languages())
  next()
})

// routing
app.use('/', indexRouter)
app.use(express.static(staticPath))

app.listen(AppConstants.PORT, function () {
  console.log(`MONITOR V2: Server listening at ${this.address().port}`)
  console.log(`Static files served from ${staticPath}`)
})
