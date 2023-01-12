function createPieChart (chartElement) {
  const data = JSON.parse(chartElement.getAttribute('data-chart'))
  console.log(data)
  const { data: chartData, isDonut } = data

  const dimensions = chartElement.getBoundingClientRect()

  const { height, width } = dimensions

  const size = Math.min(height, width)
  const radius = size * 0.5
  const innerRadius = isDonut ? radius * 0.5 : 0

  const svg = d3.select(chartElement)
    .append('svg')
    .attr('width', size)
    .attr('height', size)
    .append('g')
    .attr('transform', `translate(${radius}, ${radius})`)

  const pie = d3.pie().value(d => d.count)
  const arc = d3.arc().innerRadius(innerRadius).outerRadius(radius)

  svg.selectAll('arc')
    .data(pie(chartData))
    .enter()
    .append('path')
    .attr('d', arc)
    .attr('stroke', 'transparent')
    .style('stroke-width', 2)
    .attr('fill', d => d.data.color)
}

const selector = '.chart-wrapper'
const charts = d3.selectAll(selector)
console.log(charts)

if (charts) {
  charts.nodes().forEach(chart => {
    createPieChart(chart)
  })
}
