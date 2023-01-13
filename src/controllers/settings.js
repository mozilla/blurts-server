import { mainLayout } from '../views/main.js'
import { settings } from '../views/partials/settings.js'

function settingsPage (req, res) {
  const data = {
    fxaProfile: req.user.fxa_profile_json,
    partial: settings
  }

  res.send(mainLayout(data))
}

export { settingsPage }
