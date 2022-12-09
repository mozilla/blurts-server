import { getMessage, getLocale } from '../../utils/fluent.js'

const rowHtml = data => `
<details>
  <summary>
    <span>${data.companyName}</span><span>${data.dataClasses}</span><span>${data.breachDate}</span>
  </summary>
  <div>
    ${data.description}
  </div>
</details>
`

function createRows (data) {
  const locale = getLocale()
  const allEmailBreaches = data.verifiedEmails.flatMap(item => item.breaches)
  let breachDate, addedDate, dataClassesTranslated

  const formattedBreaches = allEmailBreaches.map(breach => {
    breachDate = Date.parse(breach.BreachDate)
    addedDate = Date.parse(breach.AddedDate)
    dataClassesTranslated = breach.DataClasses.map(item => getMessage(item))

    return {
      companyName: breach.Title,
      breachDate: new Intl.DateTimeFormat(locale, { year: 'numeric', month: '2-digit', day: '2-digit', timeZone: 'UTC' }).format(breachDate),
      dataClasses: new Intl.ListFormat(locale, { style: 'narrow' }).format(dataClassesTranslated),
      description: getMessage('breach-description', {
        companyName: breach.Title,
        breachDate: new Intl.DateTimeFormat(locale, { dateStyle: 'long', timeZone: 'UTC' }).format(breachDate),
        addedDate: new Intl.DateTimeFormat(locale, { dateStyle: 'long', timeZone: 'UTC' }).format(addedDate),
        dataClasses: new Intl.ListFormat(locale, { style: 'long' }).format(dataClassesTranslated)
      })
    }
  })

  return formattedBreaches.map(breach => rowHtml(breach)).join('')
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
