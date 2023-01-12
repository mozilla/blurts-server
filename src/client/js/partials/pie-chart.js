function getPercentage (data, item) {
  const total = data.reduce((acc, curr) => acc + curr.count, 0)

  if (!total) {
    return 0
  }

  return Math.round(item.count / total * 100)
}

function createPieChart (chartElement) {
  const data = JSON.parse(chartElement.getAttribute('data-chart'))
  const { data: chartData, isDonut } = data

  const dimensions = chartElement.getBoundingClientRect()

  const { height, width } = dimensions

  const size = Math.min(height, width)
  const radius = size * 0.5
  const innerRadius = isDonut ? radius * 0.85 : 0

  const svg = d3.select(chartElement)
    .append('svg')
    .attr('width', size)
    .attr('height', size)
    .append('g')
    .attr('transform', `translate(${radius}, ${radius})`)

  const pie = d3.pie().value(d => d.count).sort(null)
  const arc = d3.arc().innerRadius(innerRadius).outerRadius(radius)

  svg.selectAll('arc')
    .data(pie(chartData))
    .enter()
    .append('path')
    .attr('d', arc)
    .attr('fill', d => d.data.color)

  if (isDonut) {
    const relevantItem = chartData.find(d => d.showPercentage)
    if (relevantItem) {
      svg.append('text')
        .attr('class', 'chart-percentage')
        .attr('x', 0)
        .attr('y', 0)
        .attr('dy', '0.3em')
        .attr('text-anchor', 'middle')
        .attr('font-size', innerRadius * 0.5)
        .attr('fill', relevantItem.color)
        .text(() => `${getPercentage(chartData, relevantItem)}%`)
    }
  }
}

const selector = '.chart-wrapper'
const charts = d3.selectAll(selector)
console.log(charts)

if (charts) {
  charts.nodes().forEach(chart => {
    createPieChart(chart)
  })
}
