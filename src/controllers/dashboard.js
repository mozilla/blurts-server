import { mainLayout } from '../views/main.js'
import { dashboard } from '../views/partials/dashboard.js'
import { userMenu } from '../views/partials/user-menu.js'

function dashboardPage (req, res) {
  const fxaProfileData = req.user.fxa_profile_json

  const data = {
    partial: dashboard,
    userMenu: userMenu(fxaProfileData)
  }

  res.send(mainLayout(data))
}

export { dashboardPage }
