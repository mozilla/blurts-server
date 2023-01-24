console.log('Hello World from app.js')

const circleCharts = document.querySelectorAll('.chart-test')
circleCharts.forEach(chart => {
  chart.addEventListener('click', () => {
    chart.setAttribute('title', 'Updated')
    chart.setAttribute('data', JSON.stringify([
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
    ]))
  })
})
