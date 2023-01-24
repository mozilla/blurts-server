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
          count: 5,
          color: '#9059ff'
        },
        {
          key: 'unresolved',
          name: 'Unresolved',
          count: 0,
          color: '#321c64'
        }
      ],
      isDonut: true
    }))
  })
})
