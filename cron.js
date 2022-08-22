const cron = require('node-cron')

function initMonthlyCron (...jobs) {
  cron.schedule('* * 1 * *', () => {
    jobs.forEach(job => job())
  })
}

// For testing node-cron
function initMinuteCron (job) {
  console.log('running single cron job 1 minute from now')
  let killCron = false
  const cronMinute = cron.schedule('* * * * *', () => {
    console.log('running 1 minute cron job')
    killCron = true
    job()
  })

  const interval = setInterval(() => {
    console.log('interval')
    if (killCron) {
      console.log('stopping cron')
      cronMinute.stop()
      clearInterval(interval)
    }
  }, 10000)
}

module.exports = { initMonthlyCron, initMinuteCron }
