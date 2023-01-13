import { mainLayout } from '../views/main.js'
import { dashboard } from '../views/partials/dashboard.js'

function dashboardPage (req, res) {
  const data = {
    fxaProfile: req.user.fxa_profile_json,
    partial: dashboard
  }

  res.send(mainLayout(data))
}

export { dashboardPage }
