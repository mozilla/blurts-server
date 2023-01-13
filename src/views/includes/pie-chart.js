const styles = `
<style>
  .pie-chart {
    align-items: center;
    display: flex;
    gap: var(--padding-md);
  }

  .pie-chart-title {
    display: block;
    font-family: Inter, Inter-fallback, sans-serif;
    margin-bottom: var(--padding-xs);
  }

  .pie-chart-label {
    align-items: center;
    color: var(--gray-40);
    display: flex;
    font-size: 0.875rem;
    gap: var(--padding-sm);
    position: relative;
  }

  .pie-chart-label::before {
    color: inherit;
    content: '\\2B24'; /* Black Large Circle */
    font-size: 0.65em;
    padding-bottom: 0.175em;
  }

  .pie-chart svg {
    border-radius: 50%;
    height: 10vw;
    min-height: 100px;
    min-width: 100px;
    transform: rotate(-90deg);
    width: 10vw;
  }

  .pie-chart circle {
    cx: 50%;
    cy: 50%;
    fill: none;
    r: 50%;
  }

  .pie-chart text {
    font-family: metropolis, sans-serif;
    font-weight: 700;
    text-anchor: middle;
    transform: rotate(90deg);
    transform-origin: center;
  }
</style>
`

const calcPercentage = (total, value) => {
  if (!total) {
    return 0
  }

  return parseFloat((value / total).toFixed(3, 10))
}

const chartLabels = chartData => `
  <figcaption>
    <strong class='pie-chart-title'>${chartData.title}</strong>
    ${chartData.data.map(({ name, color }) => (
      `<label class='pie-chart-label' style='color: ${color}'>${name}</label>`
    )).join('')}
  </figcaption>
`

const getCircleLabel = (data, total) => {
  const relevantItem = data.find(d => d.showPercentage)

  if (!relevantItem) {
    return ''
  }

  const percentage = calcPercentage(total, relevantItem.count)
  return `
    <text
      fill='${relevantItem.color}'
      font-size='0.2'
      x='0.5'
      y='0.5'
      dy='0.065'
    >
        ${Math.round(percentage * 100)}%
    </text>
  `
}

export const pieChart = (chartData) => {
  if (!chartData) {
    return ''
  }

  const { isDonut } = chartData
  const innerRadius = isDonut ? 0.85 : 0

  const total = chartData.data.reduce((acc, curr) => acc + curr.count, 0)
  let sliceOffset = 0

  return `
    ${styles}
    <figure class='pie-chart'>
      <svg viewBox='0 0 1 1'>
        <g>
          ${chartData.data.reduce((acc, curr) => {
            const percentage = calcPercentage(total, curr.count)
            const circle = `
              <circle
                stroke='${curr.color}'
                stroke-dasharray='${Math.PI * percentage} ${Math.PI}'
                stroke-dashoffset='${-Math.PI * sliceOffset}'
                stroke-width='${100 - 100 * innerRadius}%'
              ></circle>
            `
            acc.push(circle)
            sliceOffset += percentage

            return acc
          }, []).join('')}
        </g>

        ${isDonut ? getCircleLabel(chartData.data, total) : ''}
      </svg>
      ${chartLabels(chartData)}
    </figure>
  `
}
