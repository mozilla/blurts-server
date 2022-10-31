import { mainLayout } from '../views/layouts/main.js'
import { breaches } from '../views/partials/breaches.js'

function breachesPage (req, res) {
  const data = {
    locale: req.appLocale,
    partial: breaches
  }

  res.send(mainLayout(data))
}

export { breachesPage }
