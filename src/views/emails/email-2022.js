/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { images, links, styles } from './resources/index.js'
import { getMessage } from '../../utils/fluent.js'

const companyAddress = '2 Harrison St. #175, San Francisco, California 94105 USA'

const emailHeader = (data) => `
  <tr class='logo'>
    <td height='100'></td>
  </tr>
  <tr class='header'>
    <td>
      <table
        border='0'
        cellpadding='0'
        cellspacing='0'
        role='presentation'
        style='${styles.main.headerTable}'
      >
        <tr>
          <td>
            <h1>
              ${getMessage(data.heading)}
            </h1>
            ${data.subhead !== ''
              ? `<p>${getMessage(data.subhead)}</p>`
              : ''
            }
          </td>
          <td
            class='header-image'
            style='${styles.main.headerImageContainer}'
          >
            <img
              alt=''
              height='331'
              src='${images.header}'
              style='${styles.main.headerImage}'
              width='476'
            >
          </td>
        </tr>
      </table>
    </td>
  </tr>
`

const emailFooter = (data) => `
  <tr class='footer'>
    <td style='${styles.main.footerContainer}'>
      <p>
        ${getEmailFooterCopy(data)}
      </p>
      <p>
        ${getMessage('email-2022-hibp-attribution', {
          'hibp-link-attr': `href='${links(data).hibp}' rel='noopener'`
        })}
      </p>
      <img
        alt='${getMessage('mozilla')}'
        src='${images.footer}'
        style='${styles.main.footerImage}'
        width='130px'
      >
      <p>
        ${companyAddress}
      </p>
      <p>
        <a href='${links(data).legal}'>
          ${getMessage('legal')}
        </a>
        ${' • '}
        <a href='${links(data).termsAndPrivacy}'>
          ${getMessage('terms-and-privacy')}
        </a>
      </p>
    </td>
  </tr>
`

function getEmailFooterCopy (data) {
  const unsubLink = `
    <a href='${data.unsubscribeUrl}'>
      ${getMessage('email-unsub-link')}
    </a>
  `
  const faqLink = `
    <a href='${links(data).faq}'>${getMessage('frequently-asked-questions')}</a>
  `

  return getMessage('email-footer-blurb', {
    unsubLink,
    faqLink
  })
}

const getEmailContent = (data, partial) => {
  return `
    <table
      border='0'
      class='email-container'
      cellpadding='0'
      cellspacing='0'
      role='presentation'
      style='${styles.main.table}'
    >
      ${emailHeader({
        heading: data.heading,
        subhead: data.subheading ?? ''
      })}
      ${partial(data)}
      ${emailFooter(data)}
    </table>
  `
}

const getPreviewTemplate = (data, partial) => `
  <style>
    ${styles.main.global}
  </style>
  ${getEmailContent(data, partial)}
`

const getTemplate = (data, partial) => {
  return `
    <!doctype html>
    <html>
      <head>
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta http-equiv='Content-Type' content='text/html; charset=UTF-8' />

        <title>
          ${getMessage('brand-fx-monitor')}
        </title>

        <style>
          ${styles.main.global}
        </style>
      </head>

      <body class='email-body' style='${styles.main.body}'>
        ${getEmailContent(data, partial)}
      </body>
    </html>
  `
}

export { getPreviewTemplate, getTemplate }
