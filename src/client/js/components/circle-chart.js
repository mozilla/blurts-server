/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

/**
 * Circle chart
 *
 * Example usage:
 * ```
 * <circle-chart
 *   title='Circle chart'
 *   data=${JSON.stringify([
 *     {
 *       key: 'resolved',
 *       name: 'Resolved',
 *       count: 0,
 *       color: '#9059ff'
 *     },
 *     {
 *       key: 'unresolved',
 *       name: 'Unresolved',
 *       count: 10,
 *       color: '#321c64'
 *     }
 *   ])}
 *   show-percent-for='resolved'
 * >
 * </circle-chart>
 * ```
 *
 * Circle chart JSON schema:
 * ```
 * {
 *   "title": {
 *     "type": "string",
 *     "required": "false"
 *   },
 *   "data": {
 *     "type": "array",
 *     "items": {
 *       "type": "object",
 *       "properties": {
 *         "key": "string",
 *         "name": "string",
 *         "count": "number",
 *         "color": "hexcolor"
 *       },
 *       "required": [
 *         "key",
 *         "name",
 *         "count"
 *       ],
 *       "additionalProperties": false
 *     }
 *   },
 *   "show-percent-for": {
 *     "type": "string", // has to match key of an item in `data.items`
 *     "required": false,
 *   }
 * }
 * ```
 */

const CHART_RADIUS = 50
const CHART_DIAMETER = CHART_RADIUS * 2
const CHART_CIRCUMFERENCE = Math.PI * CHART_DIAMETER
const CHART_UPDATE_DURATION = 250

const styles = `
<style>
  .circle-chart {
    align-items: center;
    display: flex;
    gap: var(--padding-md);
    margin: 0;
    transition: opacity ${CHART_UPDATE_DURATION * 0.5}ms ease;
  }

  .circle-chart.updating {
    opacity: 0
  }

  .circle-chart-title {
    display: block;
    font-family: Inter, Inter-fallback, sans-serif;
    margin-bottom: var(--padding-xs);
  }

  .circle-chart-label {
    align-items: center;
    color: var(--gray-50);
    display: flex;
    gap: var(--padding-sm);
    position: relative;
  }

  .circle-chart-label::before {
    color: var(--color);
    content: '\\2B24'; /* Black Large Circle */
    font-size: 0.65em;
    padding-bottom: 0.175em;
  }

  .circle-chart svg {
    border-radius: 50%;
    height: var(--chart-diameter, 10vw);
    min-height: 100px;
    min-width: 100px;
    width: var(--chart-diameter, 10vw);
  }

  .circle-chart circle {
    cx: 50%;
    cy: 50%;
    fill: none;
    r: 50%;
    transform: rotate(-90deg);
    transform-origin: center;
  }

  .circle-chart text {
    font-family: metropolis, sans-serif;
    font-weight: 700;
    text-anchor: middle;
  }
</style>
`

const calcPercentage = (/** @type {number} */ total, /** @type {number} */ value) => {
  if (!total) {
    return 0
  }

  return parseFloat((value / total).toFixed(3))
}

var html = () => `
  ${styles}
  <figure class='circle-chart'></figure>
`

customElements.define('circle-chart', class extends HTMLElement {
  static get observedAttributes () {
    return [
      'data',
      'show-percent-for',
      'title'
    ]
  }

  constructor () {
    super()
    this.attachShadow({ mode: 'open' })

    // Chart properties
    this.data = null
    this.showPercentFor = ''
    this.title = ''

    this.svg = null
    this.total = 0
    this.updateTimeout = null

    this.render()
  }

  /**
   * Callback that fires when attributes change.
   *
   * @param {string} name
   * @param {string} oldValue
   * @param {string} newValue
   * @returns {undefined}
   */
  attributeChangedCallback (name, oldValue, newValue) {
    if (newValue === 'undefined' || newValue === oldValue) {
      return
    }

    switch (name) {
      case 'data':
        this.data = JSON.parse(newValue)
        this.createOrUpdateChart()
        break
      case 'show-percent-for':
        this.showPercentFor = newValue
        break
      case 'title':
        this.title = newValue
        break
      default:
        console.warn(`Unhandled attribute: ${name}`)
    }
  }

  composeCircles () {
    let sliceOffset = 0
    return `
      ${this.data.reduce((/** @type {string[]} */ acc, /** @type {{ count: any; color: any; }} */ curr) => {
        const percentage = calcPercentage(this.total, curr.count)
        const innerRadius = this.showPercentFor !== '' ? 0.85 : 0
        const strokeLength = CHART_CIRCUMFERENCE * percentage

        const circle = `
          <circle
            stroke='${curr.color}'
            stroke-dasharray='${strokeLength} ${CHART_CIRCUMFERENCE}'
            stroke-dashoffset='${-1 * CHART_CIRCUMFERENCE * sliceOffset}'
            stroke-width='${CHART_DIAMETER * (1 - innerRadius)}%'
          ></circle>
        `
        acc.push(circle)
        sliceOffset += percentage

        return acc
      }, []).join('')}
    `
  }

  createChartLabels () {
    return `
      ${this.title !== ''
        ? `<strong class='circle-chart-title'>${this.title}</strong>`
        : ''}
      ${this.data.map(({ name, color }) => (
        `<label class='circle-chart-label' style='--color: ${color}'>${name}</label>`
      )).join('')}
    `
  }

  createCircleLabel () {
    const relevantItem = this.data.find((/** @type {{ key: string; }} */ d) => d.key === this.showPercentFor)
    if (!relevantItem) {
      return ''
    }
    const percentage = calcPercentage(this.total, relevantItem.count)
    return `
      <text
        dy='${CHART_RADIUS * 0.15}'
        fill='${relevantItem.color}'
        font-size='${CHART_RADIUS * 0.4}'
        font-size='50'
        x='${CHART_RADIUS}'
        y='${CHART_RADIUS}'
      >
          ${Math.round(percentage * 100)}%
      </text>
    `
  }

  createChart () {
    // Create SVG with circles
    const circles = this.composeCircles()
    this.svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
    this.svg.setAttribute('viewBox', `0 0 ${CHART_DIAMETER} ${CHART_DIAMETER}`)
    this.svg.innerHTML = `
      ${circles}
      ${this.createCircleLabel()}
    `

    // Create labels
    this.labels = document.createElement('figcaption')
    this.labels.innerHTML = this.createChartLabels()

    // Add chart elements to DOM
    if (this.chartElement) {
      this.chartElement.append(this.svg)
      this.chartElement.append(this.labels)
    }
  }

  updateChart () {
    if (this.svg) {
      this.svg.innerHTML = `
      ${this.composeCircles()}
      ${this.createCircleLabel()}
    `
    }

    if (this.labels) {
      this.labels.innerHTML = this.createChartLabels()
    }
  }

  createOrUpdateChart () {
    if (this.updateTimeout) {
      clearTimeout(this.updateTimeout)
    }

    if (!this.data) {
      return
    }

    this.total = this.data.reduce((/** @type {any} */ acc, /** @type {{ count: any; }} */ curr) => acc + curr.count, 0)

    this.chartElement?.classList.add('updating')
    this.updateTimeout = setTimeout(() => {
      if (!this.svg) {
        this.createChart()
      } else {
        this.updateChart()
      }

      this.chartElement?.classList.remove('updating')
    }, this.svg ? CHART_UPDATE_DURATION : 0)
  }

  render () {
    if (this.shadowRoot) {
      this.shadowRoot.innerHTML = html()
      this.chartElement = this.shadowRoot.querySelector('.circle-chart')
    }
  }
})
