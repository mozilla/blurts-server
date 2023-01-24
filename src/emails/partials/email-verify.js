import { getMessage } from '../../utils/fluent.js'

export default (data) => `
<tr>
  <td style="color: black; background: #f9f9fa; padding: 36px 0 24px;">
    <p>${getMessage('email-verify-simply-click')}</p>
    <a href="${data.ctaHref}"
      style="display: inline-block; margin: auto; color: white; background-color: #0060df; border-radius: 4px; padding: 12px 24px; margin: 24px 0">${getMessage(
        'verify-email-cta'
      )}</a>
    <p>
      <strong>${getMessage('email-link-expires')}</strong>
    </p>
  </td>
  </tr>
`
