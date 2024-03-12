/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { getStringLookup } from '../utils/fluent.js'

const containerStyle = `
  background: #f9f9fa;
  color: black;
  padding: 36px 0 24px;
`

const ctaStyle = `
  background-color: #0060df;
  border-radius: 4px;
  color: white;
  display: inline-block;
  margin: 24px 0;
  margin: auto;
  padding: 12px 24px;
`

/**
 * @param {{ ctaHref: string; }} data
 * @param {import("@fluent/react").ReactLocalization} [l10n]
 */
const verifyPartial = (data, l10n) => {
  const getMessage = getStringLookup(l10n);

  return `
    <tr>
      <td style='${containerStyle}'>
        <p>
          ${getMessage('email-verify-simply-click')}
        </p>
        <a
          href='${data.ctaHref}'
          style='${ctaStyle}'
        >
          ${getMessage('verify-email-cta')}
        </a>
        <p>
          <strong>
            ${getMessage('email-link-expires')}
          </strong>
        </p>
      </td>
    </tr>
  `
}
export { verifyPartial }
