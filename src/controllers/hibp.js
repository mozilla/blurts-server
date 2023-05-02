/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import AppConstants from '../appConstants.js'
import notifyWorker from '../workers/hibp.js'

import { CloudTasksClient } from '@google-cloud/tasks'
import { credentials } from '@grpc/grpc-js'

/**
 * Whenever a breach is detected on the HIBP side, HIBP sends a request to this endpoint.
 * This function attempts to retrieve the breach info from the local cache, if not found
 * it retrieves it from the database
 * A breach notification contains the following parameters:
 * - breachName
 * - hashPrefix
 * - hashSuffixes
 * More about how account identities are anonymized: https://blog.mozilla.org/security/2018/06/25/scanning-breached-accounts-k-anonymity/
 *
 * @param {object} req
 * @param {object} res
 */
async function notify (req, res) {
  try {
    if (AppConstants.NODE_ENV === 'dev') {
      return notifyWorker(req, res)
    } else {
      const url = '' // TODO

      const client = new CloudTasksClient({
        port: 8123,
        servicePath: 'localhost',
        sslCreds: credentials.createInsecure()
      })

      const serviceAccountEmail = AppConstants.SERVICE_ACCOUNT_EMAIL
      const parent = AppConstants.GCP_PROJECT
      const queueName = `${parent}/queues/hibp`

      const { breachName, hashPrefix, hashSuffixes } = req.body

      const payload = {
        breachName,
        hashPrefix,
        hashSuffixes
      }

      let queue
      try {
        queue = await client.getQueue({ name: queueName })
      } catch (ex) {
        console.info(ex.message)
      }

      if (!queue) {
        await client.createQueue({ parent, queue: { name: queueName } })
      }

      await client.createTask({
        parent: queueName,
        task: {
          httpRequest: {
            httpMethod: 'POST',
            url,
            body: Buffer.from(JSON.stringify(payload)).toString('base64'),
            headers: {
              'Content-Type': 'application/json'
            },
            oidcToken: {
              serviceAccountEmail
            }
          }
        }
      })

      return res
        .status(200)
        .json({
          info: 'Queued breach notification.'
        })
    }
  } catch (error) {
    throw new Error(`Notifying subscribers of breach failed: ${error}`)
  }
}

export { notify }
