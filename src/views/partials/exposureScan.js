/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { getMessage } from '../../utils/fluent.js'

/**
 * @typedef {object} PartialParameters
 * @property {string} csrfToken
 */

/**
 * @type {ViewPartial<PartialParameters>}
 */
export const exposureScan = data => `
  <template id="data" data-csrf-token="${data.csrfToken}"></template>
  <div id="exposure-scan-loading">
    ${getMessage('exposure-landing-result-loading')}
  </div>
  <div hidden id="exposure-scan-error" aria-live="polite">
    ${getMessage('exposure-landing-result-error')}
  </div>
  <template id="breach-template">
    <li class="exposure-scan-breach">
      <h3>
        ${/* The company logo and name will be added client-side, after running the scan */''}
        <span class="exposure-scan-breach-company-logo"></span>
        <span class="exposure-scan-breach-company-name"></span>
      </h3>
      <div class="exposure-scan-breach-main">
        <dl>
          <div class="exposure-scan-breach-added">
            <dt>${getMessage('exposure-landing-result-card-added')}</dt>
            ${/* The added date will be added client-side, after running the scan */''}
            <dd></dd>
          </div>
          <div class="exposure-scan-breach-data">
            <dt>${getMessage('exposure-landing-result-card-data')}</dt>
            ${/* The breached data will be added client-side, after running the scan */''}
            <dd></dd>
          </div>
        </dl>
      </div>
    </li>
  </template>
  <div hidden id="exposure-scan-results-overflow" class="exposure-scan-results" aria-live="polite">
    <header class="exposure-scan-hero">
      <div class="exposure-scan-hero-content">
        <p>${getMessage('exposure-landing-result-overflow-hero-lead')}</p>
        <a href='/user/breaches' data-cta-id='exposure-landing-result-overflow-cta-hero' class='button primary'>${getMessage('exposure-landing-result-overflow-hero-cta-label')}</a>
      </div>
      <img alt="" src="/images/exposure-scan-hero.svg" />
    </header>
    <ul class="exposure-scan-breaches">
    </ul>
    <footer class="exposure-scan-footer">
      <a href='/user/breaches' data-cta-id='exposure-landing-result-overflow-cta-footer' class='button primary'>${getMessage('exposure-landing-result-overflow-footer-cta-label')}</a>
      <p class="hibp-attribution">
        ${getMessage('exposure-landing-result-footer-attribution').replace('<hibp-link>', '<a href="https://haveibeenpwned.com/" target="_blank">').replace('</hibp-link>', '</a>')}
      </p>
    </footer>
  </div>
  <div hidden id="exposure-scan-results-some" class="exposure-scan-results" aria-live="polite">
    <header class="exposure-scan-hero">
      <div class="exposure-scan-hero-content">
        <p>${getMessage('exposure-landing-result-some-hero-lead')}</p>
        <a href='/user/breaches' data-cta-id='exposure-landing-result-some-cta-hero' class='button primary'>${getMessage('exposure-landing-result-some-hero-cta-label')}</a>
      </div>
      <img alt="" src="/images/exposure-scan-hero.svg" />
    </header>
    <ul class="exposure-scan-breaches">
    </ul>
    <footer class="exposure-scan-footer">
      <a href='/user/breaches' data-cta-id='exposure-landing-result-some-cta-footer' class='button primary'>${getMessage('exposure-landing-result-some-footer-cta-label')}</a>
      <p class="hibp-attribution">
        ${getMessage('exposure-landing-result-footer-attribution').replace('<hibp-link>', '<a href="https://haveibeenpwned.com/" target="_blank">').replace('</hibp-link>', '</a>')}
      </p>
    </footer>
  </div>
  <div hidden id="exposure-scan-results-none" class="exposure-scan-results" aria-live="polite">
    <header class="exposure-scan-hero">
      <div class="exposure-scan-hero-content">
        <p>${getMessage('exposure-landing-result-none-hero-lead')}</p>
        <a href='/user/breaches' data-cta-id='exposure-landing-result-none-cta-hero' class='button primary'>${getMessage('exposure-landing-result-none-hero-cta-label')}</a>
      </div>
      <img alt="" src="/images/exposure-scan-hero.svg" />
    </header>
    <div class="exposure-scan-breaches">
      <div class="exposure-scan-breach">
        <img alt="" src="/images/breaches-none.svg" />
        ${getMessage('exposure-landing-result-card-nothing')}
      </div>
    </div>
    <footer class="exposure-scan-footer">
      <a href='/user/breaches' data-cta-id='exposure-landing-result-none-cta-footer' class='button primary'>${getMessage('exposure-landing-result-none-footer-cta-label')}</a>
      <p class="hibp-attribution">
        ${getMessage('exposure-landing-result-footer-attribution').replace('<hibp-link>', '<a href="https://haveibeenpwned.com/" target="_blank">').replace('</hibp-link>', '</a>')}
      </p>
    </footer>
  </div>
`
