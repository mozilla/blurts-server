/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

console.log('Hello World from app.js')

const circleCharts = document.querySelectorAll('.chart-test')
circleCharts.forEach(chart => {
  chart.addEventListener('click', () => {
    chart.setAttribute('title', 'Updated')
    chart.setAttribute('data', JSON.stringify([
      {
        key: 'resolved',
        name: 'Resolved',
        count: 5,
        color: '#9059ff'
      },
      {
        key: 'unresolved',
        name: 'Unresolved',
        count: 0,
        color: '#321c64'
      }
    ]))
  })
})
