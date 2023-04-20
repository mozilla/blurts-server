/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { createProfile, createScan, parseExposureScanData } from '../../../external/onerep.js'
import { setOnerepProfileId } from '../../../db/tables/subscribers.js'

/**
 * @typedef {{ success: false }} StoreExposureScanDataErrorResponse
 * @typedef {{ success: true }} StoreExposureScanDataSuccessResponse
 * @typedef {StoreExposureScanDataErrorResponse | StoreExposureScanDataSuccessResponse} StoreExposureScanDataResponse
 */

/** @type {import('express').RequestHandler<import('../external/onerep').ProfileData, StoreExposureScanDataResponse>} */
async function storeExposureScanData (req, res, next) {
  if (req.method !== 'POST' || !req.user) {
    return next()
  }
  if (typeof req.user.onerep_profile_id === 'number') {
    // Exposure scan data is already set for this user
    res.status(409).send({ success: false })
    return
  }
  const exposureScanInput = parseExposureScanData(req.body)
  if (exposureScanInput === null) {
    res.status(400).send({ success: false })
    return
  }

  try {
    const onerepProfileId = await createProfile(exposureScanInput)
    await createScan(onerepProfileId)
    await setOnerepProfileId(req.user, onerepProfileId)

    /** @type {StoreExposureScanDataSuccessResponse} */
    const successResponse = {
      success: true
    }
    res.json(successResponse)
    return
  } catch (ex) {
    res.status(500).send({ success: false })
  }
}

export { storeExposureScanData }
