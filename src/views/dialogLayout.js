/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { getAssetPath } from '../utils/getAssetPath.js'

export const dialogLayout = data => `
<link rel='stylesheet' href='${getAssetPath(`/css/partials/${data.partial.name}.css`)}' type='text/css'>
${data.partial(data)}
`
