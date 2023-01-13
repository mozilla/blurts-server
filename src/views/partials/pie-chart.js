const calcPercentage = (total, value) => {
  if (!total) {
    return 0
  }

  return parseFloat((value / total).toFixed(3, 10))
}

const chartLabels = chartData => `
  <div class='pie-chart-labels'>
    <h3 class='pie-chart-title'>${chartData.title}</h3>
    <ul class='pie-chart-list'>
      ${chartData.data.map(({ name, color }) => (
        `<li class='pie-chart-item' style='color: ${color}'>${name}</li>`
      )).join('')}
    </ul>
  </div>
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

export const pieChart = ({ chartData }) => {
  if (!chartData) {
    return ''
  }

  const { isDonut } = chartData
  const innerRadius = isDonut ? 0.85 : 0

  const total = chartData.data.reduce((acc, curr) => acc + curr.count, 0)
  let sliceOffset = 0

  return `
    <div class='pie-chart'>
      <div class='pie-chart-wrapper'>
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
      </div>
      ${chartLabels(chartData)}
    </div>
  `
}
