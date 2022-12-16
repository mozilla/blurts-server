const select = document.querySelector('custom-select')
let breaches

if (select) {
  console.log('custom-select has been found')
  breaches = document.querySelectorAll('.breach-row')
  select.addEventListener('change', handleChange)

  function handleChange (e) {
    breaches.forEach(breach => breach.toggleAttribute('hidden', breach.dataset.email !== e.target.value))
  }
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
