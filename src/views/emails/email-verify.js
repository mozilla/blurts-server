/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { styles } from './resources/index.js'
import { getMessage } from '../../utils/fluent.js'

const verifyPartial = (data) => `
  <tr>
    <td style='${styles.verify.containerStyle}'>
      <p>
        ${getMessage('email-verify-simply-click')}
      </p>
      <a
        href='${data.ctaHref}'
        style='${styles.verify.ctaStyle}'
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
export { verifyPartial }
