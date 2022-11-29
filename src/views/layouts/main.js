import AppConstants from '../../app-constants.js'
import { getMessage } from '../../utils/fluent.js'

const { SERVER_URL } = AppConstants

const mainLayout = data => `
<!doctype html>
<html lang=${data.locale}>
  <head>
    <title>${getMessage('brand-fx-monitor')}</title>
    <meta charset='utf-8'>
    <meta name='viewport' content='width=320, initial-scale=1'>
    <meta name='description' content='${getMessage('meta-desc')}'>
    <meta name='twitter:card' content='summary_large_image'>
    <meta property='og:title' content='${getMessage('brand-fx-monitor')}'>
    <meta property='og:type' content='website'>
    <meta property='og:url' content='${SERVER_URL}'>
    <meta property='og:image' content='${SERVER_URL}/images/og-image.png'>
    <link href='/css/index.css' type='text/css' rel='stylesheet'>
    <link rel='icon' href='/images/favicon-16.png' sizes='16x16'>
    <link rel='icon' href='/images/favicon-32.png' sizes='32x32'>
    <link rel='icon' href='/images/favicon-48.png' sizes='48x48'>
    <link rel='icon' href='/images/favicon-96.png' sizes='96x96'>
    <link rel='icon' href='/images/favicon-144.png' sizes='144x144'>
    <link rel='icon' href='/images/favicon-256.png' sizes='256x256'>
    <link rel='apple-touch-icon' href='/images/apple-touch-icon.png' sizes='180x180'>
    <script src='/js/index.js' type='module'></script>
  </head>
  <body>
    ${data.partial.name === 'landing' ? landingHeader(data) : mainHeader(data)}
    <main>
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

const mainHeader = data => `
<header>
  <a href='/user/breaches'>
    <img class='monitor-logo' srcset='/images/monitor-logo-transparent.png 213w, /images/monitor-logo-transparent@2x.png 425w' width='213' height='33' alt='${getMessage('brand-fx-monitor')}'>
  </a>
  <menu>
    <li>
      <button class='nav-toggle'>
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 10 8' width='20'>
          <path d='M1 1h8M1 4h8M1 7h8' stroke='#000' stroke-width='1' stroke-linecap='round'/>
        </svg>
      </button>
    </li>
  </menu>
</header>
<nav>
  <a href='/user/dashboard' class='nav-item ${data.partial.name === 'dashboard' ? 'current' : ''}'>Dashboard</a>
  <a href='/user/breaches' class='nav-item ${data.partial.name === 'breaches' ? 'current' : ''}'>Data breaches</a>
  <a href='/user/data-removal' class='nav-item ${data.partial.name === 'dataRemoval' ? 'current' : ''}'>Data removal</a>
  <a href='/user/settings' class='nav-item ${data.partial.name === 'settings' ? 'current' : ''}'>Settings</a>
</nav>
`

const landingHeader = data => `
<header>
  <a href='/'>
    <img class='monitor-logo' srcset='/images/monitor-logo-transparent.png 213w, /images/monitor-logo-transparent@2x.png 425w' width='213' height='33' alt='${getMessage('brand-fx-monitor')}'>
  </a>
  <menu>
    <li><a href='/user/breaches' class='button secondary'>${getMessage('sign-in')}</a></li>
  </menu>
</header>
`

export { mainLayout }
