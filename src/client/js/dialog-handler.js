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
  const partialName = path.substring(path.lastIndexOf('/') + 1)

  dialogEl.showModal() // provide immediate UI response by showing ::backdrop regardless of content load
  dialogEl.setAttribute('data-partial', partialName) // allow selector access, e.g. dialog[data-partial='add-email']
  dialogEl.addEventListener('click', handleEvent)
  dialogEl.addEventListener('close', resetDialog)

  try {
    const res = await fetch(path)

    if (!res.ok) throw new Error('Bad fetch response')

    const content = await res.text()
    dialogEl.insertAdjacentHTML('beforeend', content)

    try {
      await import(`./partials/${partialName}.js`) // try to import module associated with dialog content
    } catch (e) {
      console.log(`Dialog module "${partialName}.js" not found.`, e)
    }
  } catch (e) {
    dialogEl.close()
    console.error(`Could not load dialog content for ${partialName}.`, e)
  }
}

function resetDialog () {
  dialogEl.removeEventListener('click', handleEvent)
  dialogEl.removeEventListener('close', resetDialog)
  dialogEl.removeAttribute('data-partial')
  dialogEl.replaceChildren()
}

if (triggerLinks.length) init()
