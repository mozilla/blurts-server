/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { getLocale, getMessage } from '../../utils/fluent.js'
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
      <img src="${dataClass.pathToGlyph}.svg" width="24" alt="">
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
    dataClass.recommendations?.map(r =>
    `<div class="breach-detail-recommendation ${r.recIconClassName}">
      <dt>${getMessage(r.recommendationCopy.subhead)}</dt>
      <dd>
        <p>${getMessage(r.recommendationCopy.body)}</p>
        ${r.recommendationCopy.cta ? `<a href="${r.ctaHref}" target="${r.ctaShouldOpenInNewTab ? '_blank' : '_self'}">${getMessage(r.recommendationCopy.cta)}</a>` : ''}
      </dd>
    </div>`).join('')
  ).join('')

  output += getAllGenericRecommendations().map(dataClass =>
    `<div class="breach-detail-recommendation ${dataClass.recIconClassName}">
      <dt>${getMessage(dataClass.recommendationCopy.subhead)}</dt>
      <dd>
        <p>${getMessage(dataClass.recommendationCopy.body)}</p>
        ${dataClass.recommendationCopy.cta ? `<a href="${dataClass.ctaHref}" target="${dataClass.ctaShouldOpenInNewTab ? '_blank' : '_self'}">${getMessage(dataClass.recommendationCopy.cta)}</a>` : ''}
      </dd>
    </div>`
  ).join('')

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

export const breachDetails = data => `
  <header class="breach-detail-header">
    <img class="breach-detail-logo breach-logo" alt="" src="https://monitor.cdn.mozilla.net/img/logos/${data.breach.LogoPath}" />
    <div class="breach-detail-meta">
      <h1>${data.breach.Title}</h1>
      ${getBreachCategory(data.breach) === 'website-breach'
        ? `<a href="https://${data.breach.Domain}" class="breach-detail-meta-domain" rel="nofollow noopener noreferrer" data-event-label="${data.breach.Domain}" data-event-action="Engage" data-event-category="Breach Detail: Website URL Link" target="_blank">${data.breach.Domain}</a>`
        : ''}
      <a href="#what-is-this-breach" class="breach-detail-meta-more-info">${getMessage(getBreachCategory(data.breach))}</a>
    </div>
  </header>

  <!-- Overview -->
  <div class="breach-detail-overview">
    <div class="breach-detail-overview-blurb">
      <h2>${getMessage('breach-overview-title')}</h2>
      <div>${getMessage(
        'breach-overview-new',
        {
          breachDate: data.breach.BreachDate.toLocaleString(getLocale(), { year: 'numeric', month: 'long', day: 'numeric' }),
          breachTitle: data.breach.Name,
          addedDate: data.breach.AddedDate.toLocaleString(getLocale(), { year: 'numeric', month: 'long', day: 'numeric' })
        })}</div>
      ${compareBreachDates(data.breach) ? `<a href="#delayed-reporting">${getMessage('delayed-reporting-headline')}</a>` : ''}
    </div>
    <!--Exposed Data Classes -->
    <div>
      <h3>${getMessage('what-data')}</h3>
      <ul class="breach-detail-compromised-list">
        ${makeDataSection(data.breach)}
      </ul>
      <p class="breach-detail-attribution">
      ${getMessage('email-2022-hibp-attribution', {
        'hibp-link-attr': 'href="https://haveibeenpwned.com/" target="_blank"'
      })}
      </p>
    </div>
  </div>

  <!-- Sign Up Banner -->
  <div class="breach-detail-sign-up">
    <img alt="" src="/images/breach-detail-scan.svg" width="120" />
    <div class="breach-detail-sign-up-content">
        <h2>${getMessage('find-out-if-2')}</h2>
        <span>${getMessage('find-out-if-description')}</span>
    </div>
    <div class="breach-detail-sign-up-cta-wrapper">
      <a href="/user/breaches" data-cta-id='breaches-detail' class="button primary">${getMessage('breach-detail-cta-signup')}</a>
    </div>
  </div>

  <!-- What to do tips -->
  <div id="what-to-do-next">
    <div class="breach-detail-recommendation-lead">
      <h2>${data.breach.DataClasses.includes('passwords') ? getMessage('rec-section-headline') : getMessage('rec-section-headline-no-pw')}</h2>
      <p>${data.breach.DataClasses.includes('passwords') ? getMessage('rec-section-subhead') : getMessage('rec-section-subhead-no-pw')}</p>
    </div>
    <dl class="breach-detail-recommendation-list">
      ${makeRecommendationCards(data.breach)}
    </dl>
  </div>

  <!-- What is this breach? / Why did it take you so long to report it?-->
  <div class="breach-detail-info">
    <div id="what-is-this-breach">
      ${makeBreachDetails(getBreachCategory(data.breach))}
    </div>
    ${compareBreachDates(data.breach)
      ? `
        <div id="delayed-reporting">
          <h2>${getMessage('delayed-reporting-headline')}</h2>
          ${getMessage('delayed-reporting-copy')}
        </div>`
      : ''
    }
  </div>
`
