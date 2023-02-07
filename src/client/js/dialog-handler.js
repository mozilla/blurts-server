/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

const triggerLinks = Array.from(document.querySelectorAll('a[href*="dialog/"]'))
let dialogEl

function init () {
  dialogEl = document.createElement('dialog')
  document.body.append(dialogEl)

  triggerLinks.forEach(link => link.addEventListener('click', handleEvent))
}

function handleEvent (e) {
  switch (true) {
    case triggerLinks.includes(e.target):
      e.preventDefault()
      openDialog(e.target.href)
      break
    case e.target.matches('dialog button.close'):
      dialogEl.close()
      break
  }
}

async function openDialog (path) {
  dialogEl.showModal() // provide immediate UI response by showing ::backdrop regardless of content load
  dialogEl.setAttribute('data-partial', path.substring(path.lastIndexOf('/') + 1))
  dialogEl.addEventListener('click', handleEvent)
  dialogEl.addEventListener('close', resetDialog)

  try {
    const res = await fetch(path)

    if (!res.ok) throw new Error('Bad fetch response')

    const content = await res.text()
    dialogEl.insertAdjacentHTML('beforeend', content)
  } catch (e) {
    console.error('Could not load dialog:', e)
    dialogEl.close()
  }
}

function resetDialog () {
  dialogEl.removeEventListener('click', handleEvent)
  dialogEl.removeEventListener('close', resetDialog)
  dialogEl.removeAttribute('data-partial')
  dialogEl.replaceChildren()
}

if (triggerLinks.length) init()
