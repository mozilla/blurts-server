/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { getMessage } from '../../utils/fluent.js'
import { getAllPriorityDataClasses, getAllGenericRecommendations } from '../../utils/recommendations.js'

function getBreachCategory (breach) {
  if (['Exactis', 'Apollo', 'YouveBeenScraped', 'ElasticsearchSalesLeads', 'Estonia', 'MasterDeeds', 'PDL'].includes(breach.Name)) {
    return 'data-aggregator-breach'
  }
  if (breach.IsSensitive) {
    return 'sensitive-breach'
  }
  if (breach.Domain !== '') {
    return 'website-breach'
  }
  return 'data-aggregator-breach'
}

function compareBreachDates (breach) {
  const breachDate = new Date(breach.BreachDate)
  const addedDate = new Date(breach.AddedDate)
  const timeDiff = Math.abs(breachDate.getTime() - addedDate.getTime())
  const dayDiff = Math.ceil(timeDiff / (1000 * 3600 * 24))
  if (dayDiff > 90) {
    return true
  }
  return false
}

function getSortedDataClasses (breach, isUserBrowserFirefox = false, isUserLocaleEnUs = false, isUserLocalEn = false, changePWLink = false) {
  const priorityDataClasses = getAllPriorityDataClasses(isUserBrowserFirefox, isUserLocaleEnUs, changePWLink)

  const sortedDataClasses = {
    priority: [],
    lowerPriority: []
  }

  const dataClasses = breach.DataClasses
  dataClasses.forEach(dataClass => {
    const dataType = getMessage(dataClass)
    if (priorityDataClasses[dataClass]) {
      priorityDataClasses[dataClass].dataType = dataType
      sortedDataClasses.priority.push(priorityDataClasses[dataClass])
      return
    }
    sortedDataClasses.lowerPriority.push(dataType)
  })
  sortedDataClasses.priority.sort((a, b) => { return b.weight - a.weight })
  sortedDataClasses.lowerPriority = sortedDataClasses.lowerPriority.join(', ')
  return sortedDataClasses
}

function makeDataSection (breach) {
  const dataClasses = getSortedDataClasses(breach)

  let output = dataClasses.priority.map(dataClass =>
    `<li>
      <img src="${dataClass.pathToGlyph}.svg">
      ${dataClass.dataType}
    </li>`
  ).join('')

  output +=
    `<li>
      <img src="/images/more.svg">
      ${dataClasses.lowerPriority}
    </li>`

  return output
}

function makeRecommendationCards (breach) {
  const dataClasses = getSortedDataClasses(breach)

  let output = dataClasses.priority.map(dataClass =>
    dataClass.recommendations.map(r =>
    `<li>
      <h3>${getMessage(r.recommendationCopy.subhead)}</h3>
      <div class="rec-img ${r.recIconClassName}"></div>
      <div>${getMessage(r.recommendationCopy.body)}</div>
      ${r.cta ? `<a href="">${getMessage(r.recommendationCopy.cta)}</a>` : ''}
    </li>`)
  )

  output += getAllGenericRecommendations().map(dataClass =>
    `<li>
      <h3>${getMessage(dataClass.recommendationCopy.subhead)}</h3>
      <div class="rec-img ${dataClass.recIconClassName}"></div>
      <div>${getMessage(dataClass.recommendationCopy.body)}</div>
      ${dataClass.cta ? `<a href="">${getMessage(dataClass.recommendationCopy.cta)}</a>` : ''}
  </li>`
  )

  return output
}

function getBreachDetail (categoryId) {
  if (categoryId === 'data-aggregator-breach') {
    return {
      subhead: getMessage('what-is-data-agg'),
      body: getMessage('what-is-data-agg-blurb')

    }
  } else if (categoryId === 'sensitive-breach') {
    return {
      subhead: getMessage('sensitive-sites'),
      body: getMessage('sensitive-sites-copy')

    }
  } else {
    return {
      subhead: getMessage('what-is-a-website-breach'),
      body: getMessage('website-breach-blurb')
    }
  }
}

function makeBreachDetails (breach) {
  const breachDetail = getBreachDetail(breach)
  return `
  <h2>${breachDetail.subhead}</h2>
  <div>${breachDetail.body}</div>
  `
}

export const breachDetailsPartial = data => `
  <div>
    <div>
      <img class="breach-detail-logo breach-logo" alt="${data.breach.Name} logo" src="https://monitor.cdn.mozilla.net/img/logos/${data.breach.LogoPath}" />
    </div>
    <h2>${data.breach.Title}</h2>
    ${getBreachCategory(data.breach) === 'website-breach'
      ? `<a href="https://www.${data.breach.Domain}" rel="nofollow noopener noreferrer" data-event-label="${data.breach.Domain}" data-event-action="Engage" data-event-category="Breach Detail: Website URL Link" target="_blank">www.${data.breach.Domain}</a>`
      : ''}
    <br>
    <a href="#what-is-this-breach">${getMessage(getBreachCategory(data.breach))}</a>
  </div>

  <!-- Overview -->
  <section>
    <h2>Overview</h2>
    <div>${getMessage('breach-overview-new', { breachDate: data.breach.AddedDate, breachTitle: data.breach.Name, addedDate: data.breach.AddedDate })}</div>
    <br>
    ${compareBreachDates(data.breach) ? `<a href="#delayed-reporting">${getMessage('delayed-reporting-headline')}</a>` : ''}
    <br>
    <!--Exposed Data Classes -->
    <div>
      <h2>${getMessage('what-data')}</h2>
      <ul>
        ${makeDataSection(data.breach)}
      </ul>
      <br>
      <div>
      ${getMessage('email-2022-hibp-attribution', {
        'hibp-link-attr': 'href="https://haveibeenpwned.com/ rel="noopener"'
      })}
      </div>
    </div>
  </section>

  <!-- What to do tips -->
  <section id="what-to-do-next">
    <h2>${data.breach.DataClasses.includes('passwords') ? getMessage('rec-section-headline') : getMessage('rec-section-headline-no-pw')}</h2>
    ${data.breach.DataClasses.includes('passwords') ? getMessage('rec-section-subhead') : getMessage('rec-section-subhead-no-pw')}
    <ul>
    ${makeRecommendationCards(data.breach)}
    </ul>
  </section>

  <!-- What is this breach? / Why did it take you so long to report it?-->
  <section>
    <div id="what-is-this-breach">
      ${makeBreachDetails(getBreachCategory(data.breach))}
    </div>
${compareBreachDates(data.breach)
  ? `
      
    <div id="delayed-reporting">
      <h2>${getMessage('delayed-reporting-headline')}</h2>
      ${getMessage('delayed-reporting-copy')}
    </div>`
: ''}
  </section>

  <!-- Sign Up Banner -->
  <section>
    <div>
      <h2>${getMessage('find-out-if')}</h2>
      <span>${getMessage('stay-safe-with-tool')}</span>
      <button class="primary">${getMessage('check-for-breaches')}</button>
    </div>
  </section>
`
