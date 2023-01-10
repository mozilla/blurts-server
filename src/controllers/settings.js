import { mainLayout } from '../views/main.js'
import { settings } from '../views/partials/settings.js'
import { userMenu } from '../views/partials/user-menu.js'

function settingsPage (req, res) {
  const fxaProfileData = req.user.fxa_profile_json

  const data = {
    partial: settings,
    userMenu: userMenu(fxaProfileData)
  }

  res.send(mainLayout(data))
}

export { settingsPage }
