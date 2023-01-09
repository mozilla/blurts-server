import { mainLayout } from '../views/main.js'
import { settings } from '../views/partials/settings.js'
import { getUserMenuData } from '../utils/user-menu.js'

function settingsPage (req, res) {
  const userMenuData = getUserMenuData(req.user.fxa_profile_json)
  const data = {
    partial: settings,
    userMenuData
  }

  res.send(mainLayout(data))
}

export { settingsPage }
