/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { getMessage } from '../../utils/fluent.js'

export const error = data => {
  return `
<section class='error-page'>
  <img src="/images/error.svg" alt="" />
  <h1>
    ${getMessage('error-page-error-other-title', { errorCode: `<span class='error-code'>${data.statusCode}</span>` })}
  </h1>
  <p>${getMessage('error-page-error-other-copy')}</p>
</section>
`
}
