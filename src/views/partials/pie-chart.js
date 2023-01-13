const calcPercentage = (total, value) => {
  if (!total) {
    return 0
  }

  return parseFloat((value / total).toFixed(3, 10))
}

const chartLabels = chartData => `
  <div class='chart-labels'>
    <h3 class='chart-title'>${chartData.title}</h3>
    <ul class='chart-list'>
      ${chartData.data.map(({ name, color }) => (
        `<li class='chart-list-item' style='color: ${color}'>${name}</li>`
      )).join('')}
    </ul>
  </div>
`

const getCircleLabel = (data, total) => {
  const relevantItem = data.find(d => d.showPercentage)
  const percentageParsed = Math.round(calcPercentage(total, relevantItem.count) * 100)

  if (!relevantItem) {
    return ''
  }

  return `
    <text
      class='chart-percentage'
      fill='${relevantItem.color}'
      font-size='0.2'
      x='0.5'
      y='0.5'
      dy='0.065'
    >
        ${percentageParsed}%
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
      <div class='chart-wrapper' data-chart='${JSON.stringify(chartData)}'></div>
      <div class='test-chart'>
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
            }, []).join()}
          </g>

          ${isDonut ? getCircleLabel(chartData.data, total) : ''}
        </svg>
      </div>
      ${chartLabels(chartData)}
    </div>
  `
}
