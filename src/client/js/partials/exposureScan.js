/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

/** @type {HTMLDivElement} */
// @ts-ignore: We guard against a null value by not calling init():
const exposureScanPartial = document.querySelector("[data-partial='exposureScan']")

if (exposureScanPartial) {
  init()
}

async function init () {
  const urlParams = new URLSearchParams(document.location.hash.substring(1))
  const emailFromUrl = urlParams.get('email')
  /** @type {HTMLTemplateElement} */
  const dataEl = exposureScanPartial.querySelector('#data')
  dataEl.dataset.email = emailFromUrl
  const sanitizedEmail = dataEl.dataset.email.trim()

  try {
    const res = await fetch('/api/v1/scan/', {
      headers: {
        'Content-Type': 'application/json',
        'x-csrf-token': dataEl.dataset.csrfToken,
        Accept: 'application/json'
      },
      mode: 'same-origin',
      method: 'POST',
      body: JSON.stringify({
        email: sanitizedEmail
      })
    })

    if (!res.ok) {
      throw new Error('Immediately caught to show an error message.')
    }

    /** @type {import("../../../controllers/request-breach-scan").RequestBreachScanResponse} */
    const responseBody = await res.json()

    if (!responseBody.success) {
      throw new Error('Immediately caught to show an error message.')
    }

    if (responseBody.total > 6) {
      showOverflowingBreachResults(responseBody, { sanitizedEmail })
    } else if (responseBody.total > 0) {
      showSomeBreachResults(responseBody, { sanitizedEmail })
    } else {
      showNoBreachesResult(responseBody, { sanitizedEmail })
    }
  } catch (e) {
    exposureScanPartial.querySelector('#exposure-scan-loading').hidden = true
    exposureScanPartial.querySelector('#exposure-scan-error').hidden = false
  }
}

/**
 * @param {import("../../../controllers/request-breach-scan").RequestBreachScanSuccessResponse} response
 * @param { sanitizedEmail: string } params
 */
function showOverflowingBreachResults (response, params) {
  const heading = document.createElement('h1')
  heading.innerHTML = response.heading
  const emailEl = heading.querySelector('.breach-result-email')
  emailEl.setAttribute('title', params.sanitizedEmail)
  emailEl.textContent = params.sanitizedEmail

  exposureScanPartial.querySelector('#exposure-scan-results-overflow .exposure-scan-hero-content').insertAdjacentElement('afterbegin', heading)
  const breachCards = response.breaches.map((breach, index) => getBreachCard(breach, response.logos[index], response.dataClassStrings[index]))
  const breachContainer = exposureScanPartial.querySelector('#exposure-scan-results-overflow .exposure-scan-breaches')
  breachCards.forEach(card => breachContainer.appendChild(card))

  exposureScanPartial.querySelector('#exposure-scan-loading').hidden = true
  exposureScanPartial.querySelector('#exposure-scan-results-overflow').hidden = false
}

/**
 * @param {import("../../../controllers/request-breach-scan").RequestBreachScanSuccessResponse} response
 * @param { sanitizedEmail: string } params
 */
function showSomeBreachResults (response, params) {
  const heading = document.createElement('h1')
  heading.innerHTML = response.heading
  const emailEl = heading.querySelector('.breach-result-email')
  emailEl.setAttribute('title', params.sanitizedEmail)
  emailEl.textContent = params.sanitizedEmail
  exposureScanPartial.querySelector('#exposure-scan-results-some .exposure-scan-hero-content').insertAdjacentElement('afterbegin', heading)
  const breachCards = response.breaches.map((breach, index) => getBreachCard(breach, response.logos[index], response.dataClassStrings[index]))
  const breachContainer = exposureScanPartial.querySelector('#exposure-scan-results-some .exposure-scan-breaches')
  breachCards.forEach(card => breachContainer.appendChild(card))

  exposureScanPartial.querySelector('#exposure-scan-loading').hidden = true
  exposureScanPartial.querySelector('#exposure-scan-results-some').hidden = false
}

/**
 * @param {import("../../../controllers/request-breach-scan").RequestBreachScanSuccessResponse} response
 * @param { sanitizedEmail: string } params
 */
function showNoBreachesResult (response, params) {
  const heading = document.createElement('h1')
  heading.innerHTML = response.heading
  const emailEl = heading.querySelector('.breach-result-email')
  emailEl.setAttribute('title', params.sanitizedEmail)
  emailEl.textContent = params.sanitizedEmail
  exposureScanPartial.querySelector('#exposure-scan-results-none .exposure-scan-hero-content').insertAdjacentElement('afterbegin', heading)

  exposureScanPartial.querySelector('#exposure-scan-loading').hidden = true
  exposureScanPartial.querySelector('#exposure-scan-results-none').hidden = false
}

function getBreachCard (breach, logo, dataClassStrings) {
  const newCard = document.getElementById('breach-template').content.cloneNode(true)
  newCard.querySelector('.exposure-scan-breach-company-logo').innerHTML = logo
  newCard.querySelector('.exposure-scan-breach-company-name').textContent = breach.Title
  newCard.querySelector('.exposure-scan-breach-added dd').textContent = new Date(breach.AddedDate).toLocaleString(navigator.languages, { year: 'numeric', month: 'long', day: 'numeric' })
  newCard.querySelector('.exposure-scan-breach-data dd').textContent = formatList(dataClassStrings)

  return newCard
}

function formatList (list) {
  if (typeof Intl.ListFormat === 'undefined') {
    return list.join(', ')
  }

  return (new Intl.ListFormat(navigator.languages, { type: 'unit', style: 'short' })).format(list)
}
