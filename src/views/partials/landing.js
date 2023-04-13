/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { getMessage } from '../../utils/fluent.js'

export const landing = () => `
<section class='hero section-transition'>
  <div>
    <h1>${getMessage('exposure-landing-hero-heading')}</h1>
    <p>${getMessage('exposure-landing-hero-lead')}</p>
    <form hidden class="exposure-scan">
      <label for="scan-email-adddress" class="visually-hidden">
        ${getMessage('exposure-landing-hero-email-label')}
      </label>
      <input
        id="scan-email-address"
        name="email"
        type="email"
        placeholder="${getMessage('exposure-landing-hero-email-placeholder')}"
        required
      />
      <button
        type="submit"
        class='button primary'
        data-cta-id='exposure-landing-1'
      >
        ${getMessage('exposure-landing-hero-cta-label')}
      </button>
    </form>
  </div>
  <figure>
    <img srcset='images/landing-hero.webp 530w, images/landing-hero@2x.webp 1059w' width='530' height='406' alt=''>
  </figure>
</section>
<section class='why-use-monitor section-transition'>
  <h2>${getMessage('why-use-monitor')}</h2>
  <p>${getMessage('identifying-breaches')}</p>
  <ul>
    <li>
      <h3>${getMessage('protect-account')}</h3>
      <p>${getMessage('protect-account-prevent-hackers')}</p>
    </li>
    <li>
      <h3>${getMessage('prevent-fraud')}</h3>
      <p>${getMessage('prevent-fraud-keep-info')}</p>
    </li>
    <li>
      <h3>${getMessage('get-alerts')}</h3>
      <p>${getMessage('get-alerts-find-out')}</p>
    </li>
  </ul>
</section>
<section class='how-it-works section-transition'>
  <h2>${getMessage('how-it-works')}</h2>
  <ol>
    <li>
      <img srcset='images/landing-laptop.webp 250w, images/landing-laptop@2x.webp 500w' width='250' height='139' loading='lazy' alt=''>
      <h3>${getMessage('check-for-breaches')}</h3>
      <p>${getMessage('check-for-breaches-we-search')}</p>
    </li>
    <li>
      <img srcset='images/landing-lock.webp 204w, images/landing-lock@2x.webp 408w' width='204' height='148' loading='lazy' alt=''>
      <h3>${getMessage('protect-accounts')}</h3>
      <p>${getMessage('protect-accounts-clear-steps')}</p>
    </li>
    <li>
      <img srcset='images/landing-mail.webp 170w, images/landing-mail@2x.webp 340w' width='170' height='148' loading='lazy' alt=''>
      <h3>${getMessage('alerts-for-breaches')}</h3>
      <p>${getMessage('alerts-for-breaches-monitor-new')}</p>
    </li>
  </ol>
</section>
<section class='safe-with-us section-transition'>
  <div>
    <h2>${getMessage('safe-with-us')}</h2>
    <p>${getMessage('parent-company')}</p>
    <p>${getMessage('our-mission')}</p>
    <p><a href='https://www.mozilla.org/mission/' target='_blank'>${getMessage('learn-more-mission')}</a></p>
  </div>
  <figure>
    <img srcset='images/landing-nature-phone.webp 539w, images/landing-nature-phone@2x.webp 1078w' width='539' height='503' loading='lazy' alt=''>
  </figure>
</section>
<section class='top-questions-about-monitor section-transition'>
  <div>
    <h2>${getMessage('top-questions-about-monitor')}</h2>
    <a href='https://support.mozilla.org/kb/firefox-monitor-faq' target='_blank'>${getMessage('see-all-faq')}</a>
  </div>
  <div>
    <details>
      <summary>${getMessage('what-is-breach')}</summary>
      <p>${getMessage('when-info-exposed')}</p>
    </details>
    <details>
      <summary>${getMessage('what-do-i-do')}</summary>
      <p>${getMessage('visit-monitor-to-learn')}</p>
    </details>
    <details>
      <summary>${getMessage('what-gets-exposed')}</summary>
      <p>${getMessage('depends-on-hackers')}</p>
    </details>
  </div>
</section>
<section class='see-if-data-breach section-transition'>
  <h2>${getMessage('see-if-data-breach')}</h2>
  <a class='button primary' data-cta-id='landing-2' href='/user/breaches'>${getMessage('get-started')}</a>
</section>
`
