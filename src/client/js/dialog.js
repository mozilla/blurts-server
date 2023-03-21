/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

const main = document.querySelector('body > main')
const observer = new MutationObserver(handleMutation)
const triggerLinks = main.querySelectorAll('a[href*="dialog/"], button[data-dialog]')
let dialogEl

function init (links) {
  if (!dialogEl) {
    dialogEl = document.createElement('dialog')
    document.body.append(dialogEl)
  }

  links.forEach(link => link.addEventListener('click', handleEvent))
}

function handleMutation (mutationList) {
  for (const mutation of mutationList) {
    if (!mutation.addedNodes.length) continue // ignore removed-node mutations
    const triggerLink = mutation.target.querySelector('a[href*="dialog/"], button[data-dialog]')
    if (triggerLink) init([triggerLink])
  }
}

function handleEvent (e) {
  switch (true) {
    case e.target.matches('a[href*="dialog/"]'):
      e.preventDefault()
      openDialog(e.target.href)
      gtag('event', 'click', { event_category: 'form_submit', event_label: 'verify email' })
      break
    case e.target.matches('button[data-dialog]'):
      openDialog(`dialog/${e.target.dataset.dialog}`)
      gtag('event', 'click', { event_category: 'button', event_label: 'verify email' })
      break
    case e.target.matches('dialog button.close'):
      // TODO does this catch https://developer.mozilla.org/en-US/docs/Web/API/HTMLDialogElement/cancel_event
      gtag('event', 'click', { event_category: 'button', event_label: 'dialog close' })
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
    const res = await fetch(path, {
      headers: {
        Accept: 'text/html' // set to request localized response
      }
    })

    if (!res.ok) throw new Error('Bad fetch response')

    const content = await res.text()
    dialogEl.insertAdjacentHTML('beforeend', content)

    try {
      const module = await import(`./partials/${partialName}.js`) // import module associated with dialog content
      module.default() // TODO: refactor filenames with camelCase to allow the filename as function name instead of default
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

if (triggerLinks.length) init(triggerLinks) // adds event listeners for dialog links already in DOM
observer.observe(main, { attributes: false, childList: true, subtree: true }) // watches for new dialog links dynamically added to DOM
