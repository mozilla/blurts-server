import AppConstants from '../../app-constants.js'
import { getMessage } from '../../utils/fluent.js'

const headeLogoInlineStyle = `
  background-size: 240px 50px;
  background: #f9f9fa url('${AppConstants.SERVER_URL}/img/email_images/monitor-logo-bg-f9f9fa.png')
  height: 100px;
  no-repeat 50%;
`
const headeTableInlineStyle = `
  background-color: #321c64;
  color: white;
  height: 331px;
  text-align: left;
  width: 100%;
`
const headerImageContainerInlineStyle = `
  vertical-align: bottom;
  width: 50%;
`
const headerImageInlineStyle = `
  display: block;
  margin-left: auto;
  max-width: 100%;
  object-fit: cover;
  object-position: left;
`

const emailHeader = (data) => `
  <tr class='logo'>
    <td height='100'
      style='${headeLogoInlineStyle}'>
    </td>
  </tr>
  <tr class='header'>
    <td>
      <table
        border='0'
        cellpadding='0'
        cellspacing='0'
        role='presentation'
        style='${headeTableInlineStyle}'
      >
        <tr>
          <td>
            <h1>${getMessage(data.heading)}</h1>
            <p>${getMessage(data.subhead)}</p>
          </td>
          <td
            background-color: #321c64;
            class='header-image'
            style='${headerImageContainerInlineStyle}'
          >
            <img
              alt=''
              height='331'
              src='${AppConstants.SERVER_URL}/img/email_images/person-at-desk.png'
              style='${headerImageInlineStyle}'
              width='476'
            >
          </td>
        </tr>
      </table>
    </td>
  </tr>
`

const footerContainerInlineStyle = `
  background: #f9f9fa;
  border-top: 1px solid #dddddd;
  padding: 24px 0;
`

const footerImageInlineStyle = `
  display: block;
  margin: 24px auto 0;
`

const emailFooter = (data) => `
  <tr class='footer'>
    <td style='${footerContainerInlineStyle}'>
      <p>${getEmailFooterCopy(data)}</p>
      <p>
        ${getMessage('email-2022-hibp-attribution', {
          'hibp-link-attr': "href='https://haveibeenpwned.com/' rel='noopener'"
        })}
      </p>
      <img
        alt='${getMessage('mozilla')}'
        src='${AppConstants.SERVER_URL}/img/email_images/mozilla-logo-bw-rgb.png'
        style='${footerImageInlineStyle}'
        width='130px'
      >
      <p>
        2 Harrison St. #175, San Francisco, California 94105 USA
      </p>
      <p>
        <a href='https://www.mozilla.org/about/legal?utm_source=fx-monitor&utm_medium=email&utm_campaign=${data.utmCampaign}&utm_content=email-footer-link'>
          ${getMessage('legal')}
        </a>
        ${' • '}
        <a href='https://www.mozilla.org/privacy/firefox-monitor?utm_source=fx-monitor&utm_medium=email&utm_campaign=${data.utmCampaign}&utm_content=email-footer-link'>
          ${getMessage('terms-and-privacy')}
        </a>
      </p>
    </td>
  </tr>
`
function getEmailFooterCopy (data) {
  const unsubUrl = data.unsubscribeUrl
  const unsubLinkText = getMessage('email-unsub-link')
  const unsubLink = `<a href='${unsubUrl}'>${unsubLinkText}</a>`

  const getFaqLink = linkContent => `
    <a href='https://support.mozilla.org/kb/firefox-monitor-faq'>
      ${linkContent}
    </a>
  `
  const faqLink = getFaqLink(data.whichPartial !== 'email_partials/email-monthly-unresolved'
    ? getMessage('email-verify-footer-copy')
    : getMessage('frequently-asked-questions'))

  const localizedFooterCopy = getMessage('email-footer-blurb', {
    unsubLink,
    faqLink
  })

  return localizedFooterCopy
}

const bodyInlineStyle = `
  color: black;
  font: normal 16px/1.2 sans-serif;
`
const tableInlineStyle = `
  margin: auto;
  max-width: 1080px;
  text-align: center;
  width: 100%;
`

const getTemplate = data => `
  <!doctype html>
  <html>
    <head>
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      <meta http-equiv='Content-Type' content='text/html; charset=UTF-8' />

      <title>${getMessage('brand-fx-monitor')}</title>

      <style>
        * {
          margin: 0;
          padding: 0;
        }

        body {
          font: normal 16px/1.2 sans-serif;
          color: black;
        }

        h1,
        p {
          max-width: 600px;
          margin: 12px auto;
          padding: 0 24px;
        }

        a {
          color: #592acb;
          text-decoration: none;
        }

        table {
          table-layout: fixed;
        }

        @media screen and (max-width:600px) {
          .header-image {
            display: none;
          }
        }

        @media (prefers-color-scheme: dark) {
          .logo > td {
            background-image: url(${
              AppConstants.SERVER_URL
            }/img/email_images/monitor-logo-transparent-dark-mode.png)
          }
        }
      </style>

    </head>

    <body style='${bodyInlineStyle}'>
      <table
        border='0'
        cellpadding='0'
        cellspacing='0'
        role='presentation'
        style='${tableInlineStyle}'
      >
        ${emailHeader({
          heading: 'email-verify-heading',
          subhead: 'email-verify-subhead'
        })}
        <!-- TODO: Pass or get partial -->
        ${data.partial}
        ${emailFooter(data)}
      </table>
    </body>
  </html>
`

export { getTemplate }
