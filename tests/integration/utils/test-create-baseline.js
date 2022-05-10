/*
  This file is used to create a baseline image for a webpage.
*/

'use strict'

describe('Firefox Monitor homepage', function () {
  this.retries(2)

  beforeEach(function () {
    browser.url('/')
  })

  it('should look like normal', function () {
    browser.saveFullPageScreen('Home_Page', {
      hideElements: [
        $$('.breach-info-wrapper')
      ]
    })
    expect(browser.checkFullPageScreen('Home_Page', {
      hideElements: [
        $$('.breach-info-wrapper')
      ]
    })).to.equal(0)
  })
})
