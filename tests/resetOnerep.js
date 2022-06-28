'use strict'

const OneRep = require('../lib/onerep')

beforeAll(async () => {
  await OneRep.clearAllWebhooks();
})

afterAll(async () => {
  await OneRep.clearAllWebhooks();
})
