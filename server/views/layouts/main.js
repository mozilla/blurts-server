import { getMessage } from '../../utils/fluent.js'

export default data => `
  <!doctype html>
  <html lang=${data.locale}>
    <head>
      <meta charset="utf-8">
      <title>${getMessage('take-control')}</title>
      <link href="app.css" type="text/css" rel='stylesheet'>
      <script src="app.js" type="text/javascript" defer></script>
    </head>
    <body>
      <header>
        <h1>${getMessage('terms-and-privacy')}</h1>
        <h2>${getMessage('take-control')}</h2>
      </header>
      <nav>
      </nav>
      <main>
        ${data.partial}
      </main>
      <footer>
        <img src='images/moz-logo-1color-white-rgb-01.svg' width='100'>
        <p>MOZILLA footer image</p>
      </footer>
    </body>
  </html>
`
