import { mainLayout } from '../views/main.js'
import { landing } from '../views/partials/landing.js'
import { testPartial } from '../views/partials/test-partial.js'

function landingPage (req, res) {
  const data = {
    partialMain: landing,
    partials: [
      testPartial
    ]
  }

  res.send(mainLayout(data))
}

export { landingPage }
