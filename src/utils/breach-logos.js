import * as dotenv from 'dotenv'
import fetch from 'node-fetch'
import https from 'node:https'

dotenv.config({ path: '.env' })

const { HIBP_API_ROOT, HIBP_USER_AGENT } = process.env
const blobs = []

const response = await fetch(`${HIBP_API_ROOT}/breaches`, {
  headers: { 'User-Agent': HIBP_USER_AGENT }
})
const data = await response.json()

const iconUrls = data.map(item => `https://${item.Domain}/favicon.ico`)

const httpsAgent = new https.Agent({
  rejectUnauthorized: false,
  maxSockets: 100
})

const controller = new AbortController()

let timeout = setTimeout(() => controller.abort(), 10000)

console.log('iconUrls.length:', iconUrls.length)
const totalUrls = iconUrls.length
const t0 = performance.now()

// This function "guesses" the favicon location and attempts to fetch from each individual company website, with a ~50% success rate
//
// await Promise.allSettled(data.map(async item => {
//   const res = await fetch(`https://${item.Domain}/favicon.ico`, {
//     signal: controller.signal,
//     agent: httpsAgent
//   }).catch(e => console.log(e.message))

//   if (res) handleResponse(res)
// }))

// This function uses an undocumented API to fetch favicons, and appears to have a 100% success rate.
// A similar API is also available via https://s2.googleusercontent.com/s2/favicons?domain=mozilla.org&sz=32
//
await Promise.allSettled(data.map(async item => {
  const res = await fetch(`https://icons.duckduckgo.com/ip3/${item.Domain}.ico`, {
    signal: controller.signal,
    agent: httpsAgent
  }).catch(e => console.log(e.message))

  if (res) handleResponse(res)
}))

async function handleResponse (res) {
  clearTimeout(timeout)
  timeout = setTimeout(() => controller.abort(), 10000)
  const blob = await res.blob()
  console.log(res.url, blob.type, blob.size)
  if (!blob.size || !blob.type.startsWith('image')) return
  blobs.push(blob)
}

const t1 = performance.now()
console.log(`${t1 - t0} milliseconds elapsed`)
console.log('complete:', blobs.length)
console.log('percent images available:', `${Math.round(blobs.length / totalUrls * 100)}%`)
