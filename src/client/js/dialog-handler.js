/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

const triggerBtns = document.querySelectorAll('button[data-dialog]')
let contentMap, dialogEl // expect a single dialog on page at any time

function init () {
  contentMap = new Map()
  dialogEl = document.createElement('dialog')
  document.body.append(dialogEl)

  triggerBtns.forEach(btn => btn.addEventListener('click', handleEvent))
}

function handleEvent (e) {
  switch (true) {
    case e.target.matches('button[data-dialog]'):
      openDialog(e.target.dataset.dialog)
      break
    case e.target.matches('dialog button.close'):
      dialogEl.close()
      break
  }
}

async function openDialog (partialName) {
  dialogEl.showModal() // provide immediate UI response by showing ::backdrop regardless of content load
  dialogEl.addEventListener('click', handleEvent)
  dialogEl.addEventListener('close', resetDialog)

  const content = contentMap.get(partialName) ?? await fetchContent(partialName)

  if (content) {
    dialogEl.insertAdjacentHTML('beforeend', content)
  } else {
    dialogEl.close()
  }
}

async function fetchContent (partialName) {
  let content
  try {
    const res = await fetch(`/dialog/${partialName}`)

    if (!res.ok) throw new Error('Bad fetch response')

    content = await res.text()
    contentMap.set(partialName, content)
  } catch (e) {
    console.error('Could not load dialog:', e)
  }
  return content
}

function resetDialog () {
  dialogEl.removeEventListener('click', handleEvent)
  dialogEl.removeEventListener('close', resetDialog)
  dialogEl.replaceChildren()
}

if (triggerBtns.length) init()
