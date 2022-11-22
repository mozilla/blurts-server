import { getMessage } from '../../utils/fluent.js'

const landingHeader = data => `
<header>
  <a href='/'>
    <img class='monitor-logo' srcset='/images/monitor-logo-transparent.png 213w, /images/monitor-logo-transparent@2x.png 425w' alt='${getMessage('brand-fx-monitor')}'>
  </a>
  <menu>
    <li><a href='/user/breaches' class='button secondary'>${getMessage('sign-in')}</a></li>
  </menu>
</header>
`

const mainHeader = data => `
<header>
  <a href='/user/breaches'><img class='monitor-logo' srcset='/images/monitor-logo-transparent.png 213w, /images/monitor-logo-transparent@2x.png 425w'></a>
  <menu>
    <li>
      <button class='nav-toggle'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 8" width="20">
          <path d="M1 1h8M1 4h8M1 7h8" stroke="#000" stroke-width="1" stroke-linecap="round"/>
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

export const mainLayout = data => `
<!doctype html>
<html lang=${data.locale}>
  <head>
    <meta charset='utf-8'>
    <meta name="viewport" content="width=320, initial-scale=1">
    <title>${getMessage('brand-fx-monitor')}</title>
    <link href='/css/index.css' type='text/css' rel='stylesheet'>
    <script src='/js/index.js' type='module'></script>
  </head>
  <body>
    ${data.partial.name === 'landing' ? landingHeader(data) : mainHeader(data)}
    <main>
      ${data.partial(data)}
    </main>
    <footer>
      <a href='https://www.mozilla.org' target='_blank'>
        <img src='/images/moz-logo-1color-white-rgb-01.svg' width='100' loading='lazy' alt='${getMessage('mozilla')}'>
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
