import { mainLayout } from '../views/main.js'
import { settings } from '../views/partials/settings.js'

function settingsPage (req, res) {
  const data = {
    partial: settings
  }

  res.send(mainLayout(data))
}

export { settingsPage }
