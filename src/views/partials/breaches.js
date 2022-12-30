import { getMessage, getLocale } from '../../utils/fluent.js'
import AppConstants from '../../app-constants.js'

const rowHtml = data => `
<details class='breach-row' data-email=${data.affectedEmail} hidden=${!data.primaryEmail}>
  <summary>
    <span>${data.companyName}</span><span>${data.dataClasses}</span><span>${data.addedDate}</span>
  </summary>
  <div>
    ${data.description}
  </div>
</details>
`

function createEmailOptions (data) {
  const emails = data.verifiedEmails.map(obj => obj.email)
  const optionElements = emails.map(email => `<option>${email}</option>`)

  return optionElements.join('')
}

function createEmailCTA (count) {
  const total = parseInt(AppConstants.MAX_NUM_ADDRESSES)

  if (count >= total) return '' // don't show CTA if additional emails are not available for monitor

  // TODO: link "add email" flow
  return `<a href='http://mozilla.org'>${getMessage('cta-add-email')}</a>`
}

function createBreachRows (data) {
  const locale = getLocale()
  const formattedBreaches = data.verifiedEmails.flatMap(account => {
    return account.breaches.map(breach => {
      const breachDate = Date.parse(breach.BreachDate)
      const addedDate = Date.parse(breach.AddedDate)
      const dataClassesTranslated = breach.DataClasses.map(item => getMessage(item))
      const formattedBreach = {
        affectedEmail: account.email,
        primaryEmail: account.primary,
        companyName: breach.Title,
        addedDate: new Intl.DateTimeFormat(locale, { year: 'numeric', month: '2-digit', day: '2-digit', timeZone: 'UTC' }).format(addedDate),
        dataClasses: new Intl.ListFormat(locale, { style: 'narrow' }).format(dataClassesTranslated),
        description: getMessage('breach-description', {
          companyName: breach.Title,
          breachDate: new Intl.DateTimeFormat(locale, { dateStyle: 'long', timeZone: 'UTC' }).format(breachDate),
          addedDate: new Intl.DateTimeFormat(locale, { dateStyle: 'long', timeZone: 'UTC' }).format(addedDate),
          dataClasses: new Intl.ListFormat(locale, { style: 'long' }).format(dataClassesTranslated)
        })
      }

      return rowHtml(formattedBreach)
    })
  })

  return formattedBreaches.join('')
}

export const breaches = data => `
<section>
  <header class='breaches-header'>
    <h1>${getMessage('breach-heading-email', { 'email-select': `<custom-select>${createEmailOptions(data.breachesData)}</custom-select>` })}</h1>
    <figure>
      <img src='/images/temp-diagram.png' width='80' height='80'>
      <figcaption class='breach-stats'>
        <strong>10 total breaches</strong>
        <label>Resolved</label>
        <label>Unresolved</label>
      </figcaption>
    </figure>
    <figure class='email-stats'>
      <img src='/images/icon-email.svg' width='55' height='30'>
      <figcaption>
        <strong>${getMessage('emails-monitored', { count: data.emailCount, total: AppConstants.MAX_NUM_ADDRESSES })}</strong>
        ${createEmailCTA(data.emailCount)}
      </figcaption>
    </figure>
  </header>
</section>
<section class='breaches-table'>
  <header>
    <span>${getMessage('column-company')}</span><span>${getMessage('column-breached-data')}</span><span>${getMessage('column-detected')}</span>
  </header>
  ${createBreachRows(data.breachesData)}
</section>
<section style='display:none'>
  <!--This is a temp section/button to test breach update post-->
  <button id="update-breaches">Update Breaches</button>
  <pre>${JSON.stringify(data.breachesData, null, 2)}</pre>
</section>
`
