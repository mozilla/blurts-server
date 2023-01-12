const chartLabels = ({ data }) => `
  <ul class='chart-labels'>
    ${data.map(({ name, color }) => (
      `<li class='chart-labels-item' style='color: ${color}'>${color} - ${name} test</li>`
    )).join('')}
  </ul>
`

export const pieChart = ({ chartData }) => {
  if (!chartData) {
    return ''
  }

  return `
    <div class='pie-chart'>
      Pie chart
      <div class='chart-wrapper' data-chart='${JSON.stringify(chartData)}'></div>
      ${chartLabels(chartData)}
    </div>
  `
}
