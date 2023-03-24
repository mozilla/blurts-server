/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { getLocale, getMessage } from '../../utils/fluent.js'
import { getBreachLogo } from '../../utils/breach-logo.js'

function makeBreachCard (breach, logos) {
  return `
  <a href="/breach-details/${breach.Name}" class="breach-card">
    <h3>
      <span class="logo-wrapper">${getBreachLogo(breach, logos)}</span>
      <span>${breach.Title}</span>
    </h3>
    <div class="breach-main">
      <dl>
        <div>
          <dt>${getMessage('breach-added-label')}</dt>
          <dd>${new Date(breach.AddedDate).toLocaleString(getLocale(), { year: 'numeric', month: 'long', day: 'numeric' })}</dd>
        </div>
        <div>
          <dt>${getMessage('exposed-data')}</dt>
          <dd>
            ${formatList(breach.DataClasses.map(a => getMessage(a)))}
          </dd>
        </div>
      </dl>
      <span class="breach-detail-link">${getMessage('more-about-this-breach')}</span>
    </div>
  </a>
  `
}

export const allBreaches = data => `
<div id="breaches-loader" class="ab-bg breaches-loader"></div>
<main>
  <div class="all-breaches-front-matter">
    <header class="all-breaches-header">
      <div>
        <h1>${getMessage('all-breaches-headline-2')}</h1>
        <p>${getMessage('all-breaches-lead')}</p>
      </div>
    </header>
    <form class="all-breaches-filter" autocomplete="off">
      <label for="breach-search">
        <svg
          role="img"
          aria-label="${getMessage('search-breaches')}"
          class="search-icon"
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
        >
          <title>${getMessage('search-breaches')}</title>
          <path fill="#5b5b66" d="M15.707 14.293l-4.822-4.822a6.019 6.019 0 1 0-1.414 1.414l4.822 4.822a1 1 0 0 0 1.414-1.414zM6 10a4 4 0 1 1 4-4 4 4 0 0 1-4 4z"></path>
        </svg>
      </label>
      <input id="breach-search" type="search" autofocus></input>
    </form>
  </div>
  <section>
    <div>
      <div class="card-container">
        ${data.breaches
          .filter(a => !a.IsSensitive)
          .sort((a, b) => new Date(a.AddedDate).getTime() < new Date(b.AddedDate).getTime() ? 1 : -1)
          .map(breach => makeBreachCard(breach, data.breachLogos))
          .join('')}
      </div>
    </div>
    <div class="row flx-col">
      <!-- TODO span id="no-results-blurb" class="no-results-blurb">${getMessage('no-results-blurb')}</span -->
    </div>
  </section>
</main>
`

function formatList (list) {
  if (typeof Intl.ListFormat === 'undefined') {
    return list.join(', ')
  }

  return (new Intl.ListFormat(getLocale(), { type: 'unit', style: 'short' })).format(list)
}
