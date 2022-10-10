import mainLayout from '../views/layouts/main.js'
import breachDetailsPartial from '../views/partials/breach-details.js'

function breachDetailsPage (req, res) {
  const data = {
    locale: req.appLocale,
    partial: breachDetailsPartial()
  }

  res.send(mainLayout(data))
}

export { breachDetailsPage }
