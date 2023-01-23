console.log('Hello World from app.js')

const circleCharts = document.querySelectorAll('.chart-test')
circleCharts.forEach(chart => {
  chart.addEventListener('click', () => {
    chart.setAttribute('data-chart', JSON.stringify({
      title: 'Chart updated',
      data: [
        {
          key: 'resolved',
          name: 'Resolved',
          count: 1,
          color: '#9059ff',
          showPercentage: true
        },
        {
          key: 'unresolved',
          name: 'Unresolved',
          count: 5,
          color: '#321c64'
        }
      ],
      isDonut: true
    }))
  })
})
