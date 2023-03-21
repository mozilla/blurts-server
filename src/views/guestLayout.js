/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import AppConstants from '../app-constants.js'
import { getMessage, getLocale } from '../utils/fluent.js'

const guestLayout = data => `
<!doctype html>
<html lang=${getLocale()}>
  <head>
    <title>${getMessage('brand-fx-monitor')}</title>
    <style>html {display: none;}</style>

    <meta charset='utf-8'>
    <meta name='viewport' content='width=320, initial-scale=1'>
    <meta name='description' content='${getMessage('meta-desc')}'>
    <meta name='twitter:card' content='summary_large_image'>
    <meta property='og:title' content='${getMessage('brand-fx-monitor')}'>
    <meta property='og:type' content='website'>
    <meta property='og:url' content='${AppConstants.SERVER_URL}'>
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

    <!-- Google tag (gtag.js) -->
    <script nonce='${data.nonce}'>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtag/js?id='+i+dl;var n=d.querySelector('[nonce]');
    n&&j.setAttribute('nonce',n.nonce||n.getAttribute('nonce'));f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','${AppConstants.GA4_MEASUREMENT_ID}');
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date()); gtag('config', '${AppConstants.GA4_MEASUREMENT_ID}');</script>
    <!-- End Google tag (gtag.js) -->
  </head>
  <body>
    <header>
      <a href='/'>
        <img class='monitor-logo' srcset='/images/monitor-logo-transparent.webp 213w, /images/monitor-logo-transparent@2x.webp 425w' width='213' height='33' alt='${getMessage('brand-fx-monitor')}'>
      </a>
      <menu>
        <li><a href='/user/breaches' class='button secondary'>${getMessage('sign-in')}</a></li>
      </menu>
    </header>
    <main data-partial='${data.partial.name}'>
      ${data.partial(data)}
    </main>
    <footer>
      <a href='https://www.mozilla.org' target='_blank'>
        <img src='/images/moz-logo-1color-white-rgb-01.svg' width='100' height='29' loading='lazy' alt='${getMessage('mozilla')}'>
      </a>
      <menu>
        <li><a href='https://support.mozilla.org/kb/firefox-monitor-faq' target='_blank'>FAQ</a></li>
        <li><a href='https://www.mozilla.org/privacy/firefox-monitor' target='_blank'>${getMessage('terms-and-privacy')}</a></li>
        <li><a href='https://github.com/mozilla/blurts-server' target='_blank'>${getMessage('github')}</a></li>
      </menu>
    </footer>
  </body>
</html>
`

export { guestLayout }
