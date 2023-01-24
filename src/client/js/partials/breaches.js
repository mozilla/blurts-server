/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

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

  state.selectedEmail = emailSelect.value // triggers render

  emailSelect.addEventListener('change', handleEvent)
  statusFilter.addEventListener('change', handleEvent)
  breachesTable.addEventListener('change', handleEvent)
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
      updateBreachStatus(e.target)
      break
  }
}

async function updateBreachStatus (input) {
  const affectedEmail = state.selectedEmail
  const breachId = input.name
  const checkedInputs = Array.from(input.closest('.resolve-list').querySelectorAll('input:checked'))

  try {
    const res = await fetch('/api/v1/user/breaches', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'x-csrf-token': breachesTable.dataset.token
      },
      body: JSON.stringify({
        affectedEmail,
        recencyIndex: breachId,
        resolutionsChecked: checkedInputs.map(input => input.value)
      })
    })

    if (!res.ok) throw new Error('Bad fetch response')

    const data = await res.json()
    input.closest('.breach-row').dataset.status = data[affectedEmail][breachId].isResolved ? 'resolved' : 'unresolved'
    renderResolvedCounts()
  } catch (e) {
    console.error('Could not update user breach resolve status:', e)
  }
}

function renderResolvedCounts () {
  resolvedCountOutput.textContent = breachesPartial.querySelectorAll(`[data-status='resolved'][data-email='${state.selectedEmail}']`).length
  unresolvedCountOutput.textContent = breachesPartial.querySelectorAll(`[data-status='unresolved'][data-email='${state.selectedEmail}']`).length
}

function renderBreachRows () {
  let delay = 0
  let hidden

  breachRows.forEach(breach => {
    hidden = (breach.dataset.email !== state.selectedEmail) || (breach.dataset.status !== state.selectedStatus)
    breach.toggleAttribute('hidden', hidden)
    breach.removeAttribute('open')
    if (!hidden) {
      breach.style.setProperty('--delay', `${delay}ms`)
      delay += 50
    }
  })
}

function render () {
  // render split into separate functions to allow independent trigger
  // e.g. if user marks all steps resolved – update the count, but leave the breach in place for further user interaction
  renderResolvedCounts()
  renderBreachRows()
}

if (breachesPartial) init()
