// TODO: REMOVE -- this is just an example of updating breach resolution
console.log('breaches update test')
// update button
const b = document.getElementById('update-breaches')
b.addEventListener('click', async _ => {
  console.log('haha')
  try {
    const resp = await fetch('http://localhost:6060/api/v1/user/breaches', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        affectedEmail: 'josephyzhou@gmail.com',
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
