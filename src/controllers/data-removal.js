import { mainLayout } from '../views/main.js'
import { dataRemoval } from '../views/partials/data-removal.js'

function dataRemovalPage (req, res) {
  const data = {
    partial: dataRemoval
  }

  res.send(mainLayout(data))
}

export { dataRemovalPage }
