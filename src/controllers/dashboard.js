import { mainLayout } from '../views/main.js'
import { dashboard } from '../views/partials/dashboard.js'
import { getUserMenuData } from '../utils/user-menu.js'

function dashboardPage (req, res) {
  const userMenuData = getUserMenuData(req.user.fxa_profile_json)
  const data = {
    partial: dashboard,
    userMenuData
  }

  res.send(mainLayout(data))
}

export { dashboardPage }
