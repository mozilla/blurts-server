import { mainLayout } from '../views/layouts/main.js'
import { settings } from '../views/partials/settings.js'

function settingsPage (req, res) {
  const data = {
    locale: req.appLocale,
    partial: settings
  }

  res.send(mainLayout(data))
}

export { settingsPage }
