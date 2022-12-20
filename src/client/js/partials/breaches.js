const select = document.querySelector('.breaches-header custom-select')
let breaches

function handleChange (e) {
  let i = 0

  breaches.forEach(breach => {
    const hidden = breach.toggleAttribute('hidden', breach.dataset.email !== e.target.value)
    if (!hidden) {
      breach.style.setProperty('--delay', `${i}ms`)
      i += 50
    }
  })
}

if (select) {
  breaches = document.querySelectorAll('.breach-row')
  select.addEventListener('change', handleChange)
}

// TODO: REMOVE -- this is just an example of updating breach resolution
// update button
const b = document.getElementById('update-breaches')
if (b) {
  console.log('breaches update test')
  b.addEventListener('click', async _ => {
    try {
      const resp = await fetch('api/v1/user/breaches', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          affectedEmail: 'affected@email.com',
          recencyIndex: '13',
          resolutionsChecked: ['passwords',
            'dates-of-birth', 'email-addresses']
        })
      })

      console.log('completed: ', resp.json())
    } catch (err) {
      console.error(`Error: ${err}`)
    }
  })
}
