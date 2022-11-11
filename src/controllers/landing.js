import { mainLayout } from '../views/layouts/main.js'
import { landing } from '../views/partials/landing.js'

function landingPage (req, res) {
  const data = {
    locale: req.appLocale,
    partial: landing
  }

  console.log('DEBUG HEROKU LOCALES PATH')
  console.log(import.meta.url)
  console.log(new URL('../', import.meta.url))
  console.log(new URL('../../', import.meta.url))
  console.log(new URL('../../locales/', import.meta.url))
  console.log(new URL('../../locales/en', import.meta.url))

  res.send(mainLayout(data))
}

export { landingPage }
