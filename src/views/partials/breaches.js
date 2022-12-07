import { getMessage } from '../../utils/fluent.js'
import { formatDate } from '../../utils/date-time.js'

const rowHtml = data => `
<details>
  <summary>
    <span class='company'>${data.Title}</span><span class='data-types'>${data.DataClassesFormatted.join(', ')}</span><span class='date'>${formatDate(data.AddedDate)}</span>
  </summary>
  <div>
    ${data.Description}
  </div>
</details>
`

function createRows (data) {
  const allEmailBreaches = data.verifiedEmails.flatMap(item => item.breaches)
  allEmailBreaches.forEach(breach => {
    breach.DataClassesFormatted = breach.DataClasses.map(item => getMessage(item))
  })
  const html = allEmailBreaches.map(breach => rowHtml(breach)).join('')
  return html
}

export const breaches = data => `
<section class='breach-rows'>
  <header>
    <span>COMPANY</span><span>BREACHED DATA</span><span>DETECTED</span>
  </header>
  ${createRows(data.breachesData)}
</section>
<section style='display:none'>
  <button id="update-breaches">Update Breaches</button>
  <pre>${JSON.stringify(data.breachesData, null, 2)}</pre>
</section>
`
