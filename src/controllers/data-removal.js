import { mainLayout } from '../views/layouts/main.js'
import { dataRemoval } from '../views/partials/data-removal.js'

function dataRemovalPage (req, res) {
  const data = {
    locale: req.appLocale,
    partial: dataRemoval
  }

  res.send(mainLayout(data))
}

export { dataRemovalPage }
