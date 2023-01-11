import { mainLayout } from '../views/main.js'
import { settings } from '../views/partials/settings.js'

function settingsPage (req, res) {
  const data = {
    partialMain: settings
  }

  res.send(mainLayout(data))
}

export { settingsPage }
