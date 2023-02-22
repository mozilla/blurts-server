/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

const breachesPartial = document.querySelector("[data-partial='breaches']")
const state = new Proxy({
  selectedEmail: null,
  selectedStatus: 'unresolved',
  resolvedCount: null,
  unresolvedCount: null,
  emailCount: null,
  emailTotal: null
}, {
  set (target, key, value) {
    if (target[key] === value) return true

    target[key] = value
    if (key === 'selectedEmail' || key === 'selectedStatus') render()
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

  state.emailCount = parseInt(breachesPartial.querySelector('.email-stats').dataset.count)
  state.emailTotal = parseInt(breachesPartial.querySelector('.email-stats').dataset.total)
  state.selectedEmail = emailSelect.value // triggers render

  emailSelect.addEventListener('change', handleEvent)
  statusFilter.addEventListener('change', handleEvent)
  breachesTable.addEventListener('change', handleEvent)
  document.body.addEventListener('email-added', handleEvent)
}

function handleEvent (e) {
  switch (true) {
    case e.target.matches('custom-select[name="email-account"]'):
      state.selectedEmail = e.target.value
      breachesTable.querySelectorAll('span[data-email]').forEach(message => message.toggleAttribute('hidden', message.dataset.email !== e.target.value))
      break
    case e.target.matches('input[name="breaches-status"]'):
      state.selectedStatus = e.target.value
      statusFilter.dataset.selected = e.target.value
      break
    case e.target.matches('.resolve-list-item [type="checkbox"]'):
      updateBreachStatus(e.target)
      break
    case e.type === 'email-added':
      state.emailCount = e.detail.newEmailCount
      renderZeroState()
      break
  }
}

/**
 * @param {HTMLInputElement} input
 */
async function updateBreachStatus (input) {
  const affectedEmail = state.selectedEmail
  const breachId = input.name
  const checkedInputs = Array.from(input.closest('.resolve-list').querySelectorAll('input:checked'))
  input.disabled = true

  try {
    const res = await fetch('/api/v1/user/breaches', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'x-csrf-token': breachesTable.dataset.token
      },
      body: JSON.stringify({
        affectedEmail,
        breachId,
        resolutionsChecked: checkedInputs.map(input => input.value)
      })
    })

    if (!res.ok) throw new Error('Bad fetch response')

    const data = await res.json()
    input.closest('.breach-row').dataset.status = data[affectedEmail][breachId].isResolved ? 'resolved' : 'unresolved'
    renderResolvedCounts()
  } catch (e) {
    console.error('Could not update user breach resolve status:', e)
  } finally {
    input.disabled = false
  }
}

function renderResolvedCounts () {
  state.resolvedCount = breachesPartial.querySelectorAll(`[data-status='resolved'][data-email='${state.selectedEmail}']`).length
  state.unresolvedCount = breachesPartial.querySelectorAll(`[data-status='unresolved'][data-email='${state.selectedEmail}']`).length
  resolvedCountOutput.textContent = state.resolvedCount
  unresolvedCountOutput.textContent = state.unresolvedCount
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

function renderZeroState () {
  let temp

  breachesTable.querySelector('.zero-state')?.remove()
  statusFilter.toggleAttribute('disabled', state.resolvedCount === 0 && state.unresolvedCount === 0)

  switch (true) {
    case state.resolvedCount === 0 && state.unresolvedCount === 0:
      temp = breachesPartial.querySelector('template.no-breaches')
      break
    case state.resolvedCount > 0 && state.unresolvedCount === 0:
      if (state.selectedStatus !== 'unresolved') return // only show zero-state on empty unresolved screen
      temp = breachesPartial.querySelector('template.all-breaches-resolved')
      break
    default:
      return
  }

  const content = temp.content.cloneNode(true)
  content.querySelector('.current-email').textContent = state.selectedEmail
  content.querySelector('.add-email-cta').toggleAttribute('hidden', state.emailCount >= state.emailTotal)
  breachesTable.append(content)
}

function renderPieChart () {
  const visibleRows = Array.from(breachesTable.querySelectorAll('.breach-row:not([hidden])'))
  const classesForSelectedEmail = visibleRows.flatMap(row => row.dataset.classes.split(','))
  const classesMap = classesForSelectedEmail.reduce((acc, cur) => {
    acc.set(cur, (acc.get(cur) ?? 0) + 1) // set count for each class key
    return acc
  }, new Map())
  const classesDesc = [...classesMap.keys()].sort((a, b) => classesMap.get(b) - classesMap.get(a))
  const otherClassesTotal = classesForSelectedEmail.length - classesMap.get(classesDesc[0]) - classesMap.get(classesDesc[1]) - classesMap.get(classesDesc[2])
  const chartData = [
    {key: classesDesc[0], name: classesDesc[0], count: classesMap.get(classesDesc[0]), color: '#321C64'},
    {key: classesDesc[1], name: classesDesc[1], count: classesMap.get(classesDesc[1]), color: '#AB71FF'},
    {key: classesDesc[2], name: classesDesc[2], count: classesMap.get(classesDesc[2]), color: '#952BB9'},
    {key: 'Other', name: 'Other', count: otherClassesTotal, color: '#D74CF0'}
  ]

  pieChart.setAttribute('data', JSON.stringify(chartData))
  console.log(classesMap)
  console.log(classesDesc)
  console.log(chartData)
}

function render () {
  // render split into separate functions to allow independent trigger
  // e.g. if user marks all steps resolved – update the count, but leave the breach in place for further user interaction
  renderResolvedCounts()
  renderBreachRows()
  renderZeroState()
}

if (breachesPartial) init()
