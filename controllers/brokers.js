'use strict'

const OneRep = require('../lib/onerep')

async function _getScansOrCreateScan (subscriber) {
  const existingScans = await OneRep.listScans(subscriber)
  if (existingScans.length > 0) {
    return existingScans
  }
  await OneRep.createScan(subscriber)
  const newScans = await OneRep.listScans(subscriber)
  return newScans
}

async function get (req, res) {
  const profileData = req.user.onerep_profile_id ? await OneRep.getProfile(req.user) : null
  const scans = profileData ? await _getScansOrCreateScan(req.user) : []
  const scanResults = scans.length > 0 ? await OneRep.getScanResults(req.user) : []
  res.render('brokers', {
    csrfToken: req.csrfToken(),
    profileData,
    scans,
    scanResults: scanResults.data
  })
}

async function post (req, res) {
  const { first_name, last_name, city, state } = req.body
  const profileData = {
    first_name,
    last_name,
    addresses: [
      { city, state }
    ]
  }
  await OneRep.createProfile(req.user, profileData)
  await OneRep.createScan(req.user)
  await OneRep.activate(req.user)
  await OneRep.optout(req.user)
  res.redirect('/brokers')
}

module.exports = {
  get,
  post
}
