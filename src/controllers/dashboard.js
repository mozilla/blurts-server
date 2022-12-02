import { mainLayout } from '../views/layouts/main.js'
import { dashboard } from '../views/partials/dashboard.js'

function dashboardPage (req, res) {
  const data = {
    locale: req.locale,
    partial: dashboard
  }

  res.send(mainLayout(data))
}

export { dashboardPage }
