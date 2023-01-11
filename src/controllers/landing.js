import { mainLayout } from '../views/main.js'
import { landing } from '../views/partials/landing.js'
import { pieChart } from '../views/partials/pie-chart.js'

function landingPage (req, res) {
  const data = {
    partialMain: landing,
    partials: [
      pieChart
    ]
  }

  res.send(mainLayout(data))
}

export { landingPage }
