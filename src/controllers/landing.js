import { mainLayout } from '../views/main.js'
import { landing } from '../views/partials/landing.js'

function landingPage (req, res) {
  const data = {
    partial: landing
  }

  res.send(mainLayout(data))
}

export { landingPage }
