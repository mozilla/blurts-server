/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { getBreachIcons, getBreaches } from '../../../functions/getBreaches'
import { View } from './view'
import { getBreachLogo } from '../../../../utils/breachLogo'

export default async function PublicScan () {
  const allBreaches = await getBreaches()
  const breachLogos = await Promise.all(allBreaches.map(async breach => getBreachLogo(breach, await getBreachIcons(allBreaches))))

  return (
    <View breaches={allBreaches} breachLogos={breachLogos} />
  )
}
