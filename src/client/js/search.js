/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

const search = document.getElementById('search')
search.addEventListener('keyup', (event) => {
  const breachCards = document.querySelectorAll('.breach-card')
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
})
