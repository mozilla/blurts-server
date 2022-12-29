const select = document.querySelector('.breaches-header custom-select')
const statusFilter = document.querySelector('.breaches-filter')
const breaches = document.querySelectorAll('.breach-row')
const stateHandler = {
  set (target, key, value) {
    const oldValue = target[key]

    if (value === oldValue) return true

    target[key] = value
    render()
    return true
  }
}

const state = new Proxy({
  selectedEmail: select?.value,
  statusFilter: 'unresolved'
}, stateHandler)

function handleChange (e) {
  switch (e.currentTarget) {
    case select:
      state.selectedEmail = select.value
      break
    case statusFilter:
      state.statusFilter = e.target.value
      break
  }
  console.log('handleChange', e)
}

function render () {
  let delay = 0
  let hidden

  breaches.forEach(breach => {
    hidden = (breach.dataset.email !== state.selectedEmail) || (breach.dataset.status !== state.statusFilter)
    breach.toggleAttribute('hidden', hidden)
    if (!hidden) {
      breach.style.setProperty('--delay', `${delay}ms`)
      delay += 50
    }
  })
}

if (select) select.addEventListener('change', handleChange)
if (statusFilter) statusFilter.addEventListener('change', handleChange)

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
