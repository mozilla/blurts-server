/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { getMessage } from '../../utils/fluent.js'

export const notFound = data => `
<section class='not-found'>
  <img src="/images/404.svg" alt="" />
  <h1>
    ${getMessage('error-page-error-404-title', { errorCode: "<span class='error-code'>404</span>" })}
  </h1>
  <p>${getMessage('error-page-error-404-copy')}</p>
  <a id="home-cta" href="/" class="button primary">${getMessage('error-page-error-404-cta-button')}</a>
  <button id="back-cta" class="primary" hidden>${getMessage('error-page-error-404-cta-button')}</button>
</section>
`
