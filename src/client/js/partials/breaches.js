const breachesPartial = document.querySelector("[data-partial='breaches']")
const state = new Proxy({
  selectedEmail: null,
  selectedStatus: 'unresolved'
}, {
  set (target, key, value) {
    if (target[key] !== value) {
      target[key] = value
      render()
    }

    return true
  }
})

let breachesTable, breachRows, emailSelect, statusFilter, resolvedCountOutput, unresolvedCountOutput

function init () {
  breachesTable = breachesPartial.querySelector('.breaches-table')
  breachRows = breachesTable.querySelectorAll('.breach-row')
  emailSelect = breachesPartial.querySelector('.breaches-header custom-select')
  statusFilter = breachesPartial.querySelector('.breaches-filter')
  resolvedCountOutput = statusFilter.querySelector("label[for='breaches-resolved'] output")
  unresolvedCountOutput = statusFilter.querySelector("label[for='breaches-unresolved'] output")

  state.selectedEmail = emailSelect.value
  emailSelect.addEventListener('change', handleEvent)
  statusFilter.addEventListener('change', handleEvent)
  breachesTable.addEventListener('change', handleEvent)
  render()
}

function handleEvent (e) {
  switch (true) {
    case e.target.matches('custom-select[name="email-account"]'):
      state.selectedEmail = e.target.value
      break
    case e.target.matches('input[name="breaches-status"]'):
      state.selectedStatus = e.target.value
      break
    case e.target.matches('.resolve-list-item [type="checkbox"]'):
      console.log(e.target.name, e.target.value, e.target.checked)
      e.target.closest('li').setAttribute('data-checked', e.target.checked)
      console.log(e.target.closest('.resolve-list').querySelectorAll('[type="checkbox"]:checked'))
      updateResolved(e.target)
      break
  }
}

async function updateResolved (checkbox) {
  const checkedItems = Array.from(checkbox.closest('.resolve-list').querySelectorAll(':checked'))
  try {
    const resp = await fetch('api/v1/user/breaches', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'x-csrf-token': breachesTable.dataset.token
      },
      body: JSON.stringify({
        affectedEmail: state.selectedEmail,
        recencyIndex: checkbox.name,
        resolutionsChecked: checkedItems.map(item => item.value)
      })
    })

    console.log('completed: ', resp.json())
  } catch (err) {
    console.error(`Error: ${err}`)
  }
}

function render () {
  let delay = 0
  let hidden

  resolvedCountOutput.textContent = breachesPartial.querySelectorAll(`[data-status='resolved'][data-email='${state.selectedEmail}']`).length
  unresolvedCountOutput.textContent = breachesPartial.querySelectorAll(`[data-status='unresolved'][data-email='${state.selectedEmail}']`).length

  breachRows.forEach(breach => {
    hidden = (breach.dataset.email !== state.selectedEmail) || (breach.dataset.status !== state.selectedStatus)
    breach.toggleAttribute('hidden', hidden)
    if (!hidden) {
      breach.style.setProperty('--delay', `${delay}ms`)
      delay += 50
    }
  })
}

if (breachesPartial) init()

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
