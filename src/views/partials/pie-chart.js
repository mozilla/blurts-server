const chartLabels = ({ data }) => `
  <div class='chart-labels'>
    <h3 class='chart-title'>Labels title</h3>
    <ul class='chart-list'>
      ${data.map(({ name, color }) => (
        `<li class='chart-list-item' style='color: ${color}'>${name}</li>`
      )).join('')}
    </ul>
  </div>
`

export const pieChart = ({ chartData }) => {
  if (!chartData) {
    return ''
  }

  return `
    <div class='pie-chart'>
      <div class='chart-wrapper' data-chart='${JSON.stringify(chartData)}'></div>
      ${chartLabels(chartData)}
    </div>
  `
}
