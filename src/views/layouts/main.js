import { getMessage, getPattern } from '../../utils/fluent.js'

export default data => `
  <!doctype html>
  <html lang=${data.locale}>
    <head>
      <meta charset='utf-8'>
      <meta name="viewport" content="width=320, initial-scale=1">
      <title>${getPattern('home-title')}</title>
      <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      <link href="https://fonts.googleapis.com/css2?family=Inter&display=swap" rel="stylesheet"> 
      <link href='css/index.css' type='text/css' rel='stylesheet'>
      <script src='js/index.js' type='module'></script>
    </head>
    <body>
      <header>
        <a href='/'><img class='monitor-logo' src='images/monitor-logo-transparent.png' width='220' height='40'></a>
        <a href='/breach-details' class='button'>${getMessage('sign-up')}</a>
      </header>
      <nav>
      </nav>
      <main>
        ${data.partial}
      </main>
      <footer>
        <a href='https://www.mozilla.org' target='_blank'><img src='images/moz-logo-1color-white-rgb-01.svg' width='100'></a>
        <menu>
          <li><a href='https://www.mozilla.org/privacy/firefox-monitor' target='_blank'>${getMessage('terms-and-privacy')}</a></li>
          <li><a href='https://github.com/mozilla/blurts-server' target='_blank' rel='noreferrer'>GitHub</a></li>
        </menu>
      </footer>
    </body>
  </html>
`
