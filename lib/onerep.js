'use strict'

const got = require('got')

const AppConstants = require('../app-constants')
const DB = require('../db/DB')
const mozlog = require('../log')

const log = mozlog('onerep')

const OneRep = {
  eventTypes: ['scan.started', 'scan.completed', 'scan_result.created', 'scan_result.updated'],

  async init () {
    const endpointUrl = `${AppConstants.ONEREP_WEBHOOK_ROOT}/brokers/onerep_event`
    // Create necessary webhooks if necessary
    const webhooks = await this.listWebhooks()
    for (const eventType of this.eventTypes) {
      if (!webhooks.map(hook => hook.event_type).includes(eventType)) {
        log.info(`webhook not found for ${eventType}, creating ...`)
        this.createWebhook(eventType, endpointUrl)
      }
    }
  },

  async _authorizedRequest (method, path, data = null, opts = null) {
    const url = `${AppConstants.ONEREP_API_BASE}${path}`
    const defaultOpts = {
      headers: {
        Authorization: `Bearer ${AppConstants.ONEREP_API_KEY}`,
        'Content-Type': 'application/json'
      },
      method,
      responseType: 'json'
    }
    const finalOpts = Object.assign(defaultOpts, opts)
    const finalOptsWithData = data !== null ? Object.assign(finalOpts, { json: data }) : finalOpts
    try {
      log.info(`_authorizedRequest, ${method} ${url}`)
      const resp = await got(url, finalOptsWithData)
      return resp
    } catch (e) {
      log.error('_authorizedRequest', { stack: e.stack })
      const errorBody = e.response.body
      log.error('_authorizedReqeust, error body:', { errorBody })
      return e
    }
  },

  async getProfile (subscriber) {
    const resp = await this._authorizedRequest('GET', `/profiles/${subscriber.onerep_profile_id}`)
    return resp.body
  },

  /**
   * @param {*} subscriber
   * @param {*} data See https://docs.onerep.com/#operation/createProfile
   */
  async createProfile (subscriber, data) {
    const resp = await this._authorizedRequest('POST', '/profiles', data)
    await DB.setOneRepID(subscriber, resp.body.id)
    return resp.body
  },

  async listScans (subscriber) {
    if (!subscriber.onerep_profile_id) {
      return []
    }
    const resp = await this._authorizedRequest('GET', `/profiles/${subscriber.onerep_profile_id}/scans?per_page=100`)
    return resp.body.data
  },

  async getScan (subscriber, scanID) {
    const resp = await this._authorizedRequest('GET', `/profiles/${subscriber.onerep_profile_id}/scans/${scanID}`)
    return resp.body
  },

  async createScan (subscriber) {
    const resp = await this._authorizedRequest('POST', `/profiles/${subscriber.onerep_profile_id}/scans`, {})
    return resp.body
  },

  async getScanResults (subscriber) {
    const profileIDsArray = subscriber.onerep_profile_id
    const resp = await this._authorizedRequest('GET', `/scan-results?per_page=100&profile_id[]=${profileIDsArray}`)
    return resp.body
  },

  async activate (subscriber) {
    const resp = await this._authorizedRequest('PUT', `/profiles/${subscriber.onerep_profile_id}/activate`)
    return resp.body
  },

  async optout (subscriber) {
    const resp = await this._authorizedRequest('POST', `/profiles/${subscriber.onerep_profile_id}/optout`)
    // HACK: returning the resp object here instead of the body,
    // but that's the only way to test on the status code
    return resp
  },

  async createWebhook (eventType, url) {
    const resp = await this._authorizedRequest('POST', '/webhook-endpoints', {
      endpoint_url: url,
      event_type: eventType,
      enabled: true
    })
    return resp
  },

  async listWebhooks () {
    const resp = await this._authorizedRequest('GET', '/webhook-endpoints')
    return resp.body.data
  },

  async clearAllWebhooks () {
    const allWebhooks = await this.listWebhooks()
    for (const webhook of allWebhooks) {
      await this._authorizedRequest('DELETE', `/webhook-endpoints/${webhook.id}`)
    }
  },

  async recordEvent (eventId, eventType, eventData) {
    await DB.recordOneRepEvent(eventId, eventType, eventData)
  }
}

module.exports = OneRep
