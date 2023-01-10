import { mainLayout } from '../views/main.js'
import { dataRemoval } from '../views/partials/data-removal.js'
import { userMenu } from '../views/partials/user-menu.js'

function dataRemovalPage (req, res) {
  const fxaProfileData = req.user.fxa_profile_json

  const data = {
    partial: dataRemoval,
    userMenu: userMenu(fxaProfileData)
  }

  res.send(mainLayout(data))
}

export { dataRemovalPage }
