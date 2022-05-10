'use strict'

const HIBP = require('../hibp')

// https://stackoverflow.com/a/8528531
function dhm (t) {
  const cd = 24 * 60 * 60 * 1000
  const ch = 60 * 60 * 1000
  const pad = (n) => { return n < 10 ? '0' + n : n }
  let d = Math.floor(t / cd)
  let h = Math.floor((t - d * cd) / ch)
  let m = Math.round((t - d * cd - h * ch) / 60000)
  if (m === 60) {
    h++
    m = 0
  }
  if (h === 24) {
    d++
    h = 0
  }
  return [d, pad(h), pad(m)].join(':')
}

(async () => {
  const breaches = await HIBP.req('/breaches')

  let oldestBreachDate = new Date()
  let oldestBreach = ''
  let fastestResponseTime = Math.abs(new Date() - new Date(0))
  let fastestResponseBreach = ''

  for (const breach of breaches.body) {
    console.log('checking breach: ', breach.Name)
    const breachDate = new Date(breach.BreachDate)
    if (breachDate < oldestBreachDate) {
      oldestBreachDate = breachDate
      oldestBreach = breach.Name
    }
    const responseTime = Math.abs(breachDate - new Date(breach.AddedDate))
    if (responseTime < fastestResponseTime) {
      fastestResponseTime = responseTime
      fastestResponseBreach = breach.Name
    }
  }

  console.log('===========================')
  console.log('oldest breach: ', oldestBreach, ' on date: ', oldestBreachDate)
  console.log('fastest breach response time (dd:hh:mm): ', dhm(Math.abs(fastestResponseTime)), ' for breach: ', fastestResponseBreach)
})()
