import { mainLayout } from '../views/main.js'
import { landing } from '../views/partials/landing.js'
import { userMenu } from '../views/partials/user-menu.js'

function landingPage (req, res) {
  const data = {
    partial: landing,
    userMenu: userMenu({
      avatar: '',
      email: 'test@email.com'
    })
  }

  res.send(mainLayout(data))
}

export { landingPage }
