/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import AppConstants from '../appConstants.js'
import { getMessage, getLocale } from '../utils/fluent.js'
import { floatingBanner } from '../views/partials/floatingBanner.js'

/**
 * @type {ViewPartial<MainViewPartialData<any>>}
 */
const mainLayout = data => {
  const siteTitle = data.meta?.title ?? getMessage('brand-fx-monitor')
  const metaTitle = data.meta?.socialTitle ?? getMessage('brand-fx-monitor')
  const metaDescription = data.meta?.socialDescription ?? getMessage('meta-desc-2')
  const pageUrl = `${AppConstants.SERVER_URL}${data.pathname ?? '/'}`
  const pageHasFloatingBanner = AppConstants.FLOATING_BANNER_PAGES?.split(',').includes(data.pathname)

  const showRecruitmentBanner = () => {
    // Only show if ENVs are set, user language is set to "en" and user locale is set to the United States.
    // Otherwise, return empty string
    if (
      AppConstants.RECRUITMENT_BANNER_TEXT &&
      AppConstants.RECRUITMENT_BANNER_LINK &&
      getLocale().includes('en') &&
      data.countryCode === 'us'
    ) {
      return recruitmentBannerMarkup()
    }
    return ''
  }

  const recruitmentBannerMarkup = () => ` 
    <div class="recruitment-banner" hidden>
      <a id="recruitment-banner-link" class="text-link" href="${AppConstants.RECRUITMENT_BANNER_LINK}" target="_blank" rel="noopener noreferrer" data-ga="send-ga-pings" data-event-category="Recruitment" data-event-label="${AppConstants.RECRUITMENT_BANNER_TEXT}">${AppConstants.RECRUITMENT_BANNER_TEXT}</a>
      <button id="recruitment-banner-dimiss" class="dismiss-btn">
        <svg aria-label="Close" class="x-close-icon" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/></svg>
      </button>
    </div>
  `

  return `
    <!doctype html>
    <html lang=${getLocale()}>
      <head>
        <title>${siteTitle}</title>
        <style>html {display: none;}</style>

        <meta charset='utf-8'>
        <meta name='viewport' content='width=320, initial-scale=1'>
        <meta name='description' content='${metaDescription}'>
        <meta name='twitter:card' content='summary_large_image'>
        <meta name='twitter:title' content='${metaTitle}'>
        <meta name='twitter:description' content='${metaDescription}'>
        <meta name='twitter:image' content='${AppConstants.SERVER_URL}/images/og-image.webp'>
        <meta property='og:title' content='${metaTitle}'>
        <meta property='og:description' content='${metaDescription}'>
        <meta property='og:site_name' content='${getMessage('brand-fx-monitor')}'>
        <meta property='og:type' content='website'>
        <meta property='og:url' content='${pageUrl}'>
        <meta property='og:image' content='${AppConstants.SERVER_URL}/images/og-image.webp'>

        <link rel='preload' href='/fonts/Metropolis-Bold.woff2' as='font' type='font/woff2' crossorigin>
        <link rel='preload' href='/fonts/Inter-Regular-latin.woff2' as='font' type='font/woff2' crossorigin>
        <link rel='stylesheet' href='/css/index.css' type='text/css'>
        <link rel='stylesheet' href='/css/partials/${data.partial.name}.css' type='text/css'>
        <link rel='icon' href='/images/favicon-16.webp' sizes='16x16'>
        <link rel='icon' href='/images/favicon-32.webp' sizes='32x32'>
        <link rel='icon' href='/images/favicon-48.webp' sizes='48x48'>
        <link rel='icon' href='/images/favicon-96.webp' sizes='96x96'>
        <link rel='icon' href='/images/favicon-144.webp' sizes='144x144'>
        <link rel='icon' href='/images/favicon-256.webp' sizes='256x256'>
        <link rel='apple-touch-icon' href='/images/apple-touch-icon.webp' sizes='180x180'>

        <script src='/js/index.js' type='module'></script>
        ${data.skipPartialModule ? '' : `<script src='/js/partials/${data.partial.name}.js' type='module'></script>`}
      </head>
      <body>
        <header>
          ${/* Cancel Premium Subscription */ ''}
          ${showRecruitmentBanner()}
          <div class="header-wrapper">
            <a href='/user/breaches'>
              <img class='monitor-logo' srcset='/images/monitor-logo-transparent.webp 213w, /images/monitor-logo-transparent@2x.webp 425w' width='213' height='33' alt='${getMessage('brand-fx-monitor')}'>
            </a>
            <div class='nav-wrapper'>
              <button class='nav-toggle'>
                <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 10 8' width='20'>
                  <path d='M1 1h8M1 4h8M1 7h8' stroke='#000' stroke-width='1' stroke-linecap='round'/>
                </svg>
              </button>
              ${userMenu(data)}
            </div>
          </div>
        </header>

        <nav class='site-nav'>
          <div class='pages-nav'>
            <a href='/user/breaches' class='nav-item ${data.partial.name === 'breaches' ? 'current' : ''}'>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M10.5942 20.049C9.87439 21.3816 10.8394 22.9996 12.3539 22.9996H19.657C21.1692 22.9996 22.1344 21.3862 21.4193 20.0538L17.7796 13.2724C17.0264 11.8689 15.0148 11.8662 14.2577 13.2676L10.5942 20.049Z" fill="white" stroke="currentcolor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M16 21C16.5523 21 17 20.5523 17 20C17 19.4477 16.5523 19 16 19C15.4477 19 15 19.4477 15 20C15 20.5523 15.4477 21 16 21Z" fill="currentcolor"/>
                <path d="M16 17V16" stroke="currentcolor" stroke-width="2" stroke-linecap="round"/>
                <path d="M7 22H5C3.89543 22 3 21.1046 3 20V11C3 9.89543 3.89543 9 5 9H19C20.1046 9 21 9.89543 21 11V13" stroke="currentcolor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M7 9V7C7 4.23858 9.23858 2 12 2C14.7614 2 17 4.23858 17 7V9" stroke="currentcolor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              ${getMessage('site-nav-breaches-link')}
            </a>
          </div>
          <div class='meta-nav'>
            <a href='/user/settings' class='nav-item ${data.partial.name === 'settings' ? 'current' : ''}'>
              ${getMessage('site-nav-settings-link')}
            </a>
            <a target="_blank" href='https://support.mozilla.org/kb/firefox-monitor' class='nav-item'>
              ${getMessage('site-nav-help-link')}
            </a>
          </div>
          <div class='callouts'>
            <p>${getMessage('site-nav-ad-callout')}</p>
            <a href='https://relay.firefox.com/?utm_medium=mozilla-websites&utm_source=monitor&utm_campaign=&utm_content=nav-bar-global' target='_blank'><img src='/images/logo-relay.svg' width='416' height='92' alt='${getMessage('brand-relay')}'></a>
            <a href='https://www.mozilla.org/products/vpn?utm_medium=mozilla-websites&utm_source=monitor&utm_campaign=&utm_content=nav-bar-global' target='_blank'><img src='/images/logo-vpn.svg' width='232' height='48' alt='${getMessage('brand-mozilla-vpn')}'></a>
          </div>
        </nav>

        <main data-partial='${data.partial.name}'>
          ${data.partial(data)}
        </main>
        ${pageHasFloatingBanner ? floatingBanner() : ''}
        <footer class='site-footer'>
          <a href='https://www.mozilla.org' target='_blank'>
            <img src='/images/moz-logo-1color-white-rgb-01.svg' width='100' height='29' loading='lazy' alt='${getMessage('mozilla')}'>
          </a>
          <menu>
            <li><a href='/breaches'>${getMessage('footer-nav-all-breaches')}</a></li>
            <li><a href='https://support.mozilla.org/kb/firefox-monitor-faq' target='_blank'>FAQ</a></li>
            <li><a href='https://www.mozilla.org/privacy/firefox-monitor' target='_blank'>${getMessage('terms-and-privacy')}</a></li>
            <li><a href='https://github.com/mozilla/blurts-server' target='_blank'>${getMessage('github')}</a></li>
          </menu>
        </footer>
      </body>
    </html>
  `
}

/**
 * @type {ViewPartial<MainViewPartialData>}
 */
const userMenu = data => `
<div class='user-menu-wrapper' tabindex='-1'>
  <button
    aria-expanded='false'
    aria-haspopup='true'
    class='user-menu-button'
    title='${getMessage('menu-button-title')}'
  >
    <img src='${data.fxaProfile?.avatar}' alt='${getMessage('menu-button-alt')}' />
  </button>
  <menu
    aria-label='${getMessage('menu-list-accessible-label')}'
    class='user-menu-container user-menu-popover'
    role='navigation'
    hidden
  >
    <li tabindex='1'>
      <a href='${AppConstants.FXA_SETTINGS_URL}' target='_blank' class='user-menu-header'>
        <b class='user-menu-email'>${data.fxaProfile?.email}</b>
        <div class='user-menu-subtitle'>
          ${getMessage('menu-item-fxa')}
          <img src='/images/icon-open-in.svg' alt='${getMessage('menu-item-fxa-alt')}' />
        </div>
      </a>
    </li>
    <hr>
    <li>
      <a href='/user/settings' class='user-menu-link'>
        <img src='/images/icon-settings.svg' alt='${getMessage('menu-item-settings-alt')}' />
        ${getMessage('menu-item-settings')}
      </a>
    </li>
    <li>
      <a href='https://support.mozilla.org/kb/firefox-monitor' target='_blank' class='user-menu-link'>
        <img src='/images/icon-help.svg' ${getMessage('menu-item-help-alt')} />
        ${getMessage('menu-item-help')}
      </a>
    </li>
    <li>
      <a href='/user/logout' class='user-menu-link'>
        <img src='/images/icon-signout.svg' alt='${getMessage('menu-item-logout')}' />
        ${getMessage('menu-item-logout')}
      </a>
    </li>
  </menu>
</div>
`

export { mainLayout }
