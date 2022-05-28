import { dntEnabled } from './analytics_dnt-helper.js'

const hasParent = (el, selector) => {
  while (el.parentNode) {
    el = el.parentNode
    if (el.dataset && el.dataset.analyticsId === selector) { return el }
  }
  return null
}

function getLocation () {
  const eventLocation = document.querySelectorAll('[data-page-label]')
  if (eventLocation.length > 0) {
    return `Page ID: ${eventLocation[0].dataset.pageLabel}`
  } else {
    return 'Page ID: Undefined Page'
  }
}

async function sendPing (el, eventAction, eventLabel = null, options = null) {
  if (typeof (window.ga) !== 'undefined' && !el.classList.contains('hide')) {
    if (!eventLabel) {
      eventLabel = `${getLocation()}`
    }
    const eventCategory = `[v2] ${el.dataset.eventCategory}`
    return window.ga('send', 'event', eventCategory, eventAction, eventLabel, options)
  }
}

function appendFxaParams (url, storageObject) {
  getUTMNames().forEach(param => {
    if (storageObject[param] && !url.searchParams.get(param)) {
      // Bug #2011 - This logic only allows params to be set/passed
      // on to FxA if that param isn't already set.
      // (Example: Overwriting a utm_source)
      url.searchParams.append(param, encodeURIComponent(storageObject[param]))
    }
  })
  return url
}

function getFxaUtms (url) {
  if (sessionStorage) {
    url = appendFxaParams(url, sessionStorage)
  }

  return appendFxaParams(url, document.body.dataset)
}

function saveReferringPageData (utmParams) {
  if (sessionStorage) {
    getUTMNames().forEach(param => {
      if (utmParams.get(param)) {
        sessionStorage[param] = utmParams.get(param)
      }
    })
  }
}

function getUTMNames () {
  return ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content']
}

function sendRecommendationPings (ctaSelector) {
  document.querySelectorAll(ctaSelector).forEach(cta => {
    const eventLabel = cta.dataset.eventLabel
    window.ga('send', 'event', 'Breach Detail: Recommendation CTA', 'View', eventLabel, { nonInteraction: true })
    cta.addEventListener('click', () => {
      window.ga('send', 'event', 'Breach Detail: Recommendation CTA', 'Engage', eventLabel, { transport: 'beacon' })
    })
  })
}

function setMetricsIds (el) {
  if (el.dataset.entrypoint && hasParent(el, 'sign-up-banner')) {
    el.dataset.eventCategory = `${el.dataset.eventCategory} - Banner`
    el.dataset.entrypoint = `${el.dataset.entrypoint}-banner`
  }
}

function setGAListeners () {
  // Send "View" pings for any visible recommendation CTAs.
  sendRecommendationPings('.first-four-recs')

  document.querySelectorAll('.send-ga-ping, [data-send-ga-ping]').forEach((el) => {
    el.addEventListener('click', (e) => {
      const eventCategory = e.target.dataset.eventCategory
      const eventAction = e.target.dataset.eventAction
      const eventLabel = e.target.dataset.eventLabel
      window.ga('send', 'event', eventCategory, eventAction, eventLabel, { transport: 'beacon' })
    })
  })

  // Update data-event-category and data-fxa-entrypoint if the element
  // is nested inside a sign up banner.
  document.querySelectorAll('#scan-user-email, .open-oauth').forEach(el => {
    setMetricsIds(el)
  })

  document.querySelectorAll('.open-oauth').forEach(async (el) => {
    const fxaUrl = new URL('/metrics-flow?', document.body.dataset.fxaAddress)

    try {
      const response = await fetch(fxaUrl, { credentials: 'omit' })
      fxaUrl.searchParams.append('entrypoint', encodeURIComponent(el.dataset.entrypoint))
      if (response && response.status === 200) {
        const { flowId, flowBeginTime } = await response.json()
        el.dataset.flowId = flowId
        el.dataset.flowBeginTime = flowBeginTime
      }
    } catch (e) {
      // should we do anything with this?
    }
  })

  if (typeof (window.ga) !== 'undefined') {
    const pageLocation = getLocation()
    const intersectElements = []
    const intersectObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !intersectElements.includes(entry.target)) {
          intersectElements.push(entry.target)
          window.ga('send', 'event', 'Ad Unit', 'view', `ad-unit-${entry.target.dataset.adUnit}`)
        }
      })
    }, { threshold: 1 })

    // Elements for which we send Google Analytics "View" pings...
    const eventTriggers = [
      '#scan-user-email',
      '#add-another-email-form',
      '.open-oauth:not(.product-promo-wrapper)', // The promo entrypoint events are handled elsewhere.
      '#vpnPromoCloseButton'
    ]
    // Send number of foundBreaches on Scan, Full Report, and User Dashboard pageviews
    if (pageLocation === ('Scan Results')) {
      const breaches = document.querySelectorAll('.breach-card')
      window.ga('send', 'event', '[v2] Breach Count', 'Returned Breaches', `${pageLocation}`, breaches.length)
    }

    // Send "View" pings and add event listeners.
    document.querySelectorAll(eventTriggers).forEach(el => {
      sendPing(el, 'View', pageLocation, { nonInteraction: true })
      if (['BUTTON', 'A'].includes(el.tagName)) {
        el.addEventListener('click', async (e) => {
          await sendPing(el, 'Engage', pageLocation, { transport: 'beacon' })
        })
      }
    })

    // Add event listeners to event triggering elements
    // for which we do not send "View" pings.
    document.querySelectorAll('[data-ga-link]').forEach((el) => {
      el.addEventListener('click', async (e) => {
        const linkId = `Link ID: ${e.target.dataset.eventLabel}`
        await sendPing(el, 'Click', `${linkId}`)
      })
    })

    document.querySelectorAll('[data-ad-unit]').forEach(el => {
      const cta = el.querySelector('.ad-unit-cta')
      const video = el.querySelector('video')
      const label = `ad-unit-${el.dataset.adUnit}`

      intersectObserver.observe(el)

      if (cta) {
        cta.addEventListener('click', () => {
          window.ga('send', 'event', 'Ad Unit', 'click', label)
        })
      }

      if (video) {
        video.addEventListener('play', e => {
          if (e.target.currentTime > 0) return // only track initial play event
          window.ga('send', 'event', 'Ad Unit', 'play', label)
        })
      }
    })
  }

  window.sessionStorage.setItem('gaInit', true)
}

function isGoogleAnalyticsAvailable () {
  return (typeof (window.ga) !== 'undefined')
}

(() => {
  const win = window
  const winLocationSearch = win.location.search

  let winLocation = win.location

  /* eslint-disable no-unused-expressions, no-sequences */
  // Check for DoNotTrack header before running GA script
  if (!dntEnabled()) {
    (function (i, s, o, g, r, a, m) {
      i.GoogleAnalyticsObject = r; i[r] = i[r] || function () {
        (i[r].q = i[r].q || []).push(arguments)
      }, i[r].l = 1 * new Date(); a = s.createElement(o),
      m = s.getElementsByTagName(o)[0]; a.async = 1; a.src = g; m.parentNode.insertBefore(a, m)
    })(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga')
  }
  /* eslint-enable no-unused-expressions, no-sequences */

  // Remove token and hash values from URL so that they aren't sent to GA
  if (winLocationSearch.includes('token=') || winLocationSearch.includes('hash=')) {
    winLocation = winLocation.toString().replace(/[?&]token=[A-Za-z0-9_-]+/, '').replace(/&hash=[A-Za-z0-9_-]+/, '')
    win.history.replaceState({}, '', winLocation)
  }

  const gaEnabled = (typeof (window.ga) !== 'undefined')
  const utmParamsInUrl = (winLocationSearch.includes('utm_'))

  const removeUtmsFromUrl = () => {
    if (utmParamsInUrl) {
      win.history.replaceState({}, '', winLocation.toString().replace(/[?&]utm_.*/g, ''))
    }
  }

  // Store UTM params in session
  if (utmParamsInUrl) {
    saveReferringPageData(new URL(winLocation).searchParams)
  }

  const gaInit = new Event('gaInit')

  if (gaEnabled) {
    window.ga('create', 'UA-77033033-16')
    window.ga('set', 'anonymizeIp', true)
    window.ga('set', 'dimension6', `${document.body.dataset.signedInUser}`)

    window.ga('send', 'pageview', {
      hitCallback: function () {
        removeUtmsFromUrl()
        sessionStorage.removeItem('gaInit')
        document.dispatchEvent(gaInit)
      }
    })

    document.addEventListener('gaInit', (e) => {
      if (sessionStorage.getItem('gaInit')) {
        return
      }
      setGAListeners()
    }, false)
  } else {
    removeUtmsFromUrl()
  }
})()

export { sendPing, sendRecommendationPings, getFxaUtms }
