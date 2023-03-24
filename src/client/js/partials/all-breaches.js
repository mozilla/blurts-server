/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

const allBreaches = document.querySelector('[data-partial="allBreaches"]')
let search, breachCards

function init () {
  search = document.getElementById('breach-search')
  search.value = ''
  search.addEventListener('keyup', filter)
  search.form.addEventListener('submit', filter)
  breachCards = allBreaches.querySelectorAll('.breach-card')
}

function filter (e) {
  e.preventDefault()

  if (search.value.length === 0) {
    breachCards.forEach(card => (card.style.display = ''))
  } else {
    breachCards.forEach(card => {
      if (card.text.toLowerCase().includes(search.value.toLowerCase())) {
        card.style.display = ''
      } else {
        card.style.display = 'none'
      }
    })
  }
}

if (allBreaches) init()
