/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { getMessage, getLocale } from '../../utils/fluent.js'
import AppConstants from '../../app-constants.js'

function createEmailOptions (data, selectedEmailIndex) {
  const emails = data.verifiedEmails.map(obj => obj.email)
  const optionElements = emails.map((email, index) => `<option ${selectedEmailIndex === index ? 'selected' : ''}>${email}</option>`)

  return optionElements.join('')
}

function createBreachRows (data, logos) {
  const locale = getLocale()
  const shortDate = new Intl.DateTimeFormat(locale, { year: 'numeric', month: '2-digit', day: '2-digit', timeZone: 'UTC' })
  const shortList = new Intl.ListFormat(locale, { style: 'narrow' })
  const longDate = new Intl.DateTimeFormat(locale, { dateStyle: 'long', timeZone: 'UTC' })
  const longList = new Intl.ListFormat(locale, { style: 'long' })
  const breachRowsHTML = data.verifiedEmails.flatMap(account => {
    return account.breaches.map(breach => {
      const isHidden = !account.primary || breach.IsResolved // initial breach hidden state
      const status = breach.IsResolved ? 'resolved' : 'unresolved'
      const breachDate = Date.parse(breach.BreachDate)
      const addedDate = Date.parse(breach.AddedDate)
      const dataClassesTranslated = breach.DataClasses.map(item => getMessage(item))
      const description = getMessage('breach-description', {
        companyName: breach.Title,
        breachDate: longDate.format(breachDate),
        addedDate: longDate.format(addedDate),
        dataClasses: longList.format(dataClassesTranslated)
      })
      const logoPath = logos.get(breach.Domain) ?? '/images/fallback-logo.svg'

      return `
      <details class='breach-row' data-status=${status} data-email=${account.email} data-classes='${dataClassesTranslated}' ${isHidden ? 'hidden' : ''}>
        <summary>
          <span>
            <a href='https://${breach.Domain}' target='_blank' class='breach-company'>
              <img src='${logoPath}' alt='' class='breach-logo' height='32' />
              ${breach.Title}
            </a>
          </span>
          <span>${shortList.format(dataClassesTranslated)}</span>
          <span>
            <span class='resolution-badge is-resolved'>${getMessage('column-status-badge-resolved')}</span>
            <span class='resolution-badge is-active'>${getMessage('column-status-badge-active')}</span>
          </span>
          <span>${shortDate.format(addedDate)}</span>
        </summary>
        <article>
          <p>${description}</p>
          <p><strong>Resolve this breach:</strong></p>
          <ol class='resolve-list'>${createResolveSteps(breach)}</ol>
        </article>
      </details>
      `
    })
  })

  return breachRowsHTML.join('')
}

function createResolveSteps (breach) {
  const checkedArr = breach.ResolutionsChecked || []
  const resolveStepsHTML = Object.entries(breach.breachChecklist).map(([key, value]) => `
  <li class='resolve-list-item'>
    <input name='${breach.Id}' value='${key}' type='checkbox' ${checkedArr.includes(key) ? 'checked' : ''}>
    <p>${value.header}<br><i>${value.body}</i></p>
  </li>
  `)

  return resolveStepsHTML.join('')
}

export const breaches = data => `
<section>
  <header class='breaches-header'>
    <h1>${getMessage('breach-heading-email', { 'email-select': `<custom-select name='email-account'>${createEmailOptions(data.breachesData, data.selectedEmailIndex)}</custom-select>` })}</h1>
    <circle-chart 
      class='breach-chart' 
      title='${getMessage('breach-chart-title')}' 
      data-txt-other='${getMessage('other-data-class')}' 
      data-txt-none='${getMessage('none-data-class')}'>
    </circle-chart>
    <figure class='email-stats' data-count=${data.emailTotalCount} data-total=${AppConstants.MAX_NUM_ADDRESSES}>
      <img src='/images/icon-email.svg' width='55' height='30'>
      <figcaption>
        <strong>${getMessage('emails-monitored', { count: data.emailVerifiedCount, total: AppConstants.MAX_NUM_ADDRESSES })}</strong>
        <a href='/user/settings'>${getMessage('manage-emails-link')}</a>
      </figcaption>
    </figure>
  </header>
</section>
<fieldset class='breaches-filter'>
  <input id='breaches-unresolved' type='radio' name='breaches-status' value='unresolved' autocomplete='off' checked>
  <label for='breaches-unresolved'><output>&nbsp;</output>${getMessage('filter-label-unresolved')}</label>
  <input id='breaches-resolved' type='radio' name='breaches-status' value='resolved' autocomplete='off'>
  <label for='breaches-resolved'><output>&nbsp;</output>${getMessage('filter-label-resolved')}</label>
</fieldset>
<section class='breaches-table' data-token=${data.csrfToken}>
  <header>
    <span>${getMessage('column-company')}</span>
    <span>${getMessage('column-breached-data')}</span>
    ${
      /*
       * The active/resolved badge does not have a column header, but by
       * including an empty <span>, we can re-use the `nth-child`-based
       * selectors for the content columns.
       */
      '<span></span>'
    }
    <span>${getMessage('column-detected')}</span>
  </header>
  ${createBreachRows(data.breachesData, data.breachLogos)}
  <template class='no-breaches'>
    <div class="zero-state no-breaches-message">
      <img src='/images/breaches-none.svg' alt='' width="136" height="102" />
      <h2>${getMessage('breaches-none-headline')}</h2>
      <p>${getMessage('breaches-none-copy', { email: '<b class="current-email"></b>' })}</p>
      <p class='add-email-cta'>
        <span>${getMessage('breaches-none-cta-blurb')}</span>
        <button class='primary' data-dialog='add-email'>${getMessage('breaches-none-cta-button')}</button>
      </p>
    </div>
  </template>
  <template class='all-breaches-resolved'>
    <div class="zero-state all-breaches-resolved-message">
      <img src='/images/breaches-all-resolved.svg' alt='' width="136" height="102" />
      <h2>${getMessage('breaches-all-resolved-headline')}</h2>
      <p>${getMessage('breaches-all-resolved-copy', { email: '<b class="current-email"></b>' })}</p>
      <p class='add-email-cta'>
        <span>${getMessage('breaches-all-resolved-cta-blurb')}</span>
        <button class='primary' data-dialog='add-email'>${getMessage('breaches-all-resolved-cta-button')}</button>
      </p>
    </div>
  </template>
</section>
`
