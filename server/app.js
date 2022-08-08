import express from 'express'
import accepts from 'accepts'

import { initFluentBundles, updateAppLocale } from './utils/fluent.js'
import indexRouter from './routes/index.js'

const app = express()
const port = process.env.NODE_ENV !== 'development' ? 3333 : null

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
app.use(express.static('client/dist'))

app.listen(port, function () {
  console.log(`Server ready: listening at ${this.address().port}`)
})
