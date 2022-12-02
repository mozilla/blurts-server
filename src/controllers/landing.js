import { mainLayout } from '../views/layouts/main.js'
import { landing } from '../views/partials/landing.js'

function landingPage (req, res) {
  const data = {
    locale: req.locale,
    partial: landing
  }

  res.send(mainLayout(data))
}

export { landingPage }
