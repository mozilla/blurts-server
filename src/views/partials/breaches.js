import { formatDate } from '../../utils/date-time.js'

const rowHtml = data => `
<details style='border: 1px solid gray;'>
  <summary>
    <span>${data.Title}</span> <span>${data.DataClasses.join(', ')}</span> <span>${formatDate(data.AddedDate)}</span>
  </summary>
  <div>
    ${data.Description}
  </div>
</details>
`

function createRows (data) {
  const allEmailBreaches = data.verifiedEmails.flatMap(item => item.breaches)
  const html = allEmailBreaches.map(breach => rowHtml(breach)).join('')
  return html
}

export const breaches = data => `
<section>
  <h1>This is the breaches partial</h1>
  ${createRows(data.breachesData)}
  <button id="update-breaches">Update Breaches</button>
  <pre>${JSON.stringify(data.breachesData, null, 2)}</pre>
</section>
`
