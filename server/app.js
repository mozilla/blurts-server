import express from 'express'
import accepts from 'accepts'

import { initFluentBundles, updateAppLocale } from './utils/fluent.js'
import defaultLayout from './views/layouts/default.js'

const app = express()
const port = process.env.NODE_ENV !== 'development' ? 3333 : null

await initFluentBundles()

app.use(express.json())
app.use((req, res, next) => {
  const accept = accepts(req)
  req.appLocale = updateAppLocale(accept.languages())
  next()
})

app.get('/', (req, res) => res.send(defaultLayout(null)))

app.listen(port, function () {
  console.log(`Server ready: listening at ${this.address().port}`)
})
