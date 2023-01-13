import AppConstants from '../app-constants.js'
import { getMessage } from '../utils/fluent.js'

const emailHeader = (data) => `
<tr class="logo">
  <td height="100"
    style="height: 100px; background: #F9F9FA url('${
      AppConstants.SERVER_URL
    }/img/email_images/monitor-logo-bg-f9f9fa.png') no-repeat 50%; background-size: 240px 50px;">
  </td>
</tr>
<tr class="header">
  <td>
    <table style="width: 100%; height: 331px; background-color: #321C64; color: white; text-align: left;"
      role="presentation" border="0" cellpadding="0" cellspacing="0">
      <tr>
        <td>
          <h1>${getMessage(data.heading)}</h1>
          <p>${getMessage(data.subhead)}</p>
        </td>
        <td class="header-image" style="width: 50%; background-color: #321C64; vertical-align: bottom;">
          <img src="${
            AppConstants.SERVER_URL
          }/img/email_images/person-at-desk.png" width="476" height="331"
            style="display: block; max-width: 100%; margin-left: auto; object-fit: cover; object-position: left;"
            alt="">
        </td>
      </tr>
    </table>
  </td>
</tr>
`

const emailFooter = (data) => `
<tr class="footer">
  <td style="border-top: 1px solid #ddd; padding: 24px 0; background: #F9F9FA;">
    <p>${getEmailFooterCopy(data)}</p>
    <p>${getMessage('email-2022-hibp-attribution',
      { 'hibp-link-attr': 'href="https://haveibeenpwned.com/" rel="noopener"'
    })}
    </p>
    <img src="${
      AppConstants.SERVER_URL
    }/img/email_images/mozilla-logo-bw-rgb.png" width="130px"
      style="display: block; margin: 24px auto 0;" alt="Mozilla">
    <p>
      2 Harrison St. #175, San Francisco, California 94105 USA
    </p>
    <p>
      <a
        href="https://www.mozilla.org/about/legal?utm_source=fx-monitor&utm_medium=email&utm_campaign=${
          data.utmCampaign
        }&utm_content=email-footer-link">${getMessage('legal')}</a> • <a
        href="https://www.mozilla.org/privacy/firefox-monitor?utm_source=fx-monitor&utm_medium=email&utm_campaign=${
          data.utmCampaign
        }&utm_content=email-footer-link">${getMessage('terms-and-privacy')}</a>
    </p>
  </td>
</tr>
`
function getEmailFooterCopy (data) {
  let faqLink = getMessage(
    'frequently-asked-questions'
  )
  faqLink = `<a href="https://support.mozilla.org/kb/firefox-monitor-faq">${faqLink}</a>`

  if (!(data.whichPartial === 'email_partials/email-monthly-unresolved')) {
    return getMessage('email-verify-footer-copy', {
      faqLink
    })
  }

  const unsubUrl = data.unsubscribeUrl
  const unsubLinkText = getMessage('email-unsub-link')
  const unsubLink = `<a href="${unsubUrl}">${unsubLinkText}</a>`

  const localizedFooterCopy = getMessage(
    'email-footer-blurb',
    {
      unsubLink,
      faqLink
    }
  )

  return localizedFooterCopy
}

const verifyPartial = (data) => `
<tr>
  <td style="color: black; background: #F9F9FA; padding: 36px 0 24px;">
    <p>${getMessage('email-verify-simply-click')}</p>
    <a href="${data.ctaHref}"
      style="display: inline-block; margin: auto; color: white; background-color: #0060DF; border-radius: 4px; padding: 12px 24px; margin: 24px 0">${getMessage(
        'verify-email-cta'
      )}</a>
    <p>
      <strong>${getMessage('email-link-expires')}</strong>
    </p>
  </td>
  </tr>
`

const getTemplate = (whichPartial, data) => `
<!doctype html>
<html>

<head>
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />

  <title>Firefox Monitor</title>

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
      color: #592ACB;
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

<body style="font: normal 16px/1.2 sans-serif; color: black">
  <table style="width: 100%; max-width:1080px; margin: auto; text-align: center;" role="presentation" border="0"
    cellpadding="0" cellspacing="0">
    ${emailHeader({
      heading: 'email-verify-heading',
      subhead: 'email-verify-subhead'
    })}
    ${whichPartial(data)}
    ${emailFooter(data)}
  </table>
</body>

</html>
`

export { getTemplate, verifyPartial }
