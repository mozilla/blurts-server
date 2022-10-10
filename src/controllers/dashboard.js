import mainLayout from '../views/layouts/main.js'
import dashboardPartial from '../views/partials/dashboard.js'

function dashboardPage (req, res) {
  const data = {
    locale: req.appLocale,
    partial: dashboardPartial()
  }

  res.send(mainLayout(data))
}

export { dashboardPage }
