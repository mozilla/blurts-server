import mainLayout from '../views/layouts/main.js'
import landingPartial from '../views/partials/landing.js'

function landingPage (req, res) {
  const data = {
    locale: req.appLocale,
    partial: landingPartial()
  }

  res.send(mainLayout(data))
}

export { landingPage }
