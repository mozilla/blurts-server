import { mainLayout } from '../views/main.js'
import { dashboard } from '../views/partials/dashboard.js'

function dashboardPage (req, res) {
  const data = {
    partial: dashboard
  }

  res.send(mainLayout(data))
}

export { dashboardPage }
