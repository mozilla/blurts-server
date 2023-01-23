/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

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
    color: var(--gray-40);
    display: flex;
    font-size: 0.875rem;
    gap: var(--padding-sm);
    position: relative;
  }

  .circle-chart-label::before {
    color: inherit;
    content: '\\2B24'; /* Black Large Circle */
    font-size: 0.65em;
    padding-bottom: 0.175em;
  }

  .circle-chart svg {
    border-radius: 50%;
    height: 10vw;
    min-height: 100px;
    min-width: 100px;
    width: 10vw;
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

const calcPercentage = (total, value) => {
  if (!total) {
    return 0
  }

  return parseFloat((value / total).toFixed(3, 10))
}

const html = () => `
  ${styles}
  <figure class='circle-chart'></figure>
`

customElements.define('circle-chart', class extends HTMLElement {
  static get observedAttributes () { return ['data-chart'] }

  constructor () {
    super()
    this.attachShadow({ mode: 'open' })

    // Chart properties
    this.data = null
    this.innerRadius = 0
    this.isDonut = false
    this.svg = null
    this.total = 0

    this.updateTimeout = null

    this.render()
  }

  attributeChangedCallback (name, oldValue, newValue) {
    // Update cirles when chart data changes
    if (name === 'data-chart' && newValue !== oldValue) {
      this.data = JSON.parse(newValue)
      this.createOrUpdateChart()
    }
  }

  composeCircles () {
    let sliceOffset = 0
    return `
      ${this.data.data.reduce((acc, curr) => {
        const percentage = calcPercentage(this.total, curr.count)
        const strokeLength = CHART_CIRCUMFERENCE * percentage

        const circle = `
          <circle
            stroke='${curr.color}'
            stroke-dasharray='${strokeLength} ${CHART_CIRCUMFERENCE}'
            stroke-dashoffset='${-1 * CHART_CIRCUMFERENCE * sliceOffset}'
            stroke-width='${CHART_DIAMETER * (1 - this.innerRadius)}%'
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
      <strong class='circle-chart-title'>${this.data.title}</strong>
      ${this.data.data.map(({ name, color }) => (
        `<label class='circle-chart-label' style='color: ${color}'>${name}</label>`
      )).join('')}
    `
  }

  createCircleLabel () {
    const relevantItem = this.data.data.find(d => d.showPercentage)
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
    this.chartElement.append(this.svg)
    this.chartElement.append(this.labels)
  }

  updateChart () {
    this.svg.innerHTML = `
      ${this.composeCircles()}
      ${this.createCircleLabel()}
    `
    this.labels.innerHTML = this.createChartLabels()
  }

  createOrUpdateChart () {
    if (this.updateTimeout) {
      clearTimeout(this.updateTimeout)
    }

    if (!this.data) {
      return
    }

    const { data, isDonut } = this.data

    // Set chart properties from data
    this.innerRadius = isDonut ? 0.85 : 0
    this.isDonut = isDonut
    this.total = data.reduce((acc, curr) => acc + curr.count, 0)

    this.chartElement.classList.add('updating')
    this.updateTimeout = setTimeout(() => {
      if (!this.svg) {
        this.createChart()
      } else {
        this.updateChart()
      }

      this.chartElement.classList.remove('updating')
    }, this.svg ? CHART_UPDATE_DURATION : 0)
  }

  render () {
    this.shadowRoot.innerHTML = html()
    this.chartElement = this.shadowRoot.querySelector('.circle-chart')
  }
})
