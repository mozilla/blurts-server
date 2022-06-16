'use strict'

class ScanResultsPage {
  waitForPageToLoad () {
    $('.scan-results').waitForExist(5000)
    return this
  }

  get numberOfBreaches () {
    return $('.headline > span:nth-child(1)').getText()
  }

  get breachCards () { return $$('.breach-card') }
}

module.exports = new ScanResultsPage()
