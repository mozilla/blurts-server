/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import AppConstants from '../appConstants.js'
import { getMessage, getLocale } from '../utils/fluent.js'

/**
 * @type {ViewPartial<GuestViewPartialData<any>>}
 */
const guestLayout = data => {
  const siteTitle = data.meta?.title ?? getMessage('brand-fx-monitor')
  const metaTitle = data.meta?.socialTitle ?? getMessage('brand-fx-monitor')
  const metaDescription = data.meta?.socialDescription ?? getMessage('meta-desc-2')
  const pageUrl = `${AppConstants.SERVER_URL}${data.pathname ?? '/'}`

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

        <noscript>
          <style>
            :root {
              --enter-transition-opacity: 1;
              --enter-transition-y: 0;
            }
          </style>
        </noscript>
        ${data.skipPartialModule ? '' : `<script src='/js/partials/${data.partial.name}.js' type='module'></script>`}
      </head>
      <body>
        <header>
          <div class="header-wrapper">
            <a href='/'>
              <img class='monitor-logo' srcset='/images/monitor-logo-transparent.webp 213w, /images/monitor-logo-transparent@2x.webp 425w' width='213' height='33' alt='${getMessage('brand-fx-monitor')}'>
            </a>
            <menu>
              <li><a href='/user/breaches' data-cta-id='sign-in-1' class='button secondary'>${getMessage('sign-in')}</a></li>
            </menu>
          </div>
        </header>
        <main data-partial='${data.partial.name}'>
          ${data.partial(data)}
        </main>
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

export { guestLayout }
