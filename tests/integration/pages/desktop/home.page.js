'use strict'

class HomePage {
  /* Represents the Home page */

  waitForPageToLoad () {
    this.monitorLogo.waitForExist(5000)
    return this
  }

  get monitorLogo () { return $('.fx-monitor-logotype') }
  get breachCard () { return new BreachCard() }
  get breachEmailAddress () { return $('#scan-email') }
  get checkBreachesButton () {
    $('.input-group-button > input:nth-child(1)').click()
    const ScanResultsPage = require('./scanResults.page')

    return ScanResultsPage.waitForPageToLoad()
  }
}

class BreachCard {
  /* Represents the Breach card region */

  get latestBreachCard () { return $('.latest-breach') }
}

module.exports = new HomePage()
