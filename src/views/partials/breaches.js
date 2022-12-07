import { getMessage } from '../../utils/fluent.js'
import { formatDate } from '../../utils/date-time.js'

const rowHtml = data => `
<details>
  <summary>
    <span class='company'>${data.Title}</span><span class='data-types'>${data.dataClassesFormatted}</span><span class='date'>${data.addedDateShort}</span>
  </summary>
  <div>
    ${data.descriptionFormatted}
  </div>
</details>
`

function createRows (data) {
  const allEmailBreaches = data.verifiedEmails.flatMap(item => item.breaches)

  allEmailBreaches.forEach(breach => {
    breach.dataClassesFormatted = breach.DataClasses.map(item => getMessage(item)).join(', ')
    breach.addedDateShort = formatDate(breach.AddedDate)
    breach.descriptionFormatted = getMessage('breach-description', {
      companyName: breach.Title,
      dateBreached: formatDate(breach.BreachDate, { month: 'long' }),
      dateAdded: formatDate(breach.AddedDate, { month: 'long' }),
      dataClasses: breach.dataClassesFormatted
    })
  })

  return allEmailBreaches.map(breach => rowHtml(breach)).join('')
}

export const breaches = data => `
<section class='breach-rows'>
  <header>
    <span>${getMessage('column-company')}</span><span>${getMessage('column-breached-data')}</span><span>${getMessage('column-detected')}</span>
  </header>
  ${createRows(data.breachesData)}
</section>
<section style='display:none'>
  <button id="update-breaches">Update Breaches</button>
  <pre>${JSON.stringify(data.breachesData, null, 2)}</pre>
</section>
`
