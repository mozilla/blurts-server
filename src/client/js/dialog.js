/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

const main = document.querySelector('body > main')
const observer = new MutationObserver(handleMutation)
const triggerLinks = main.querySelectorAll('a[href*="dialog/"], button[data-dialog]')
/**
 * @type {string | Node}
 */
let dialogEl

/**
 * @param {any[] | NodeListOf<Element> | undefined} [links]
 */
function init (links) {
  if (!dialogEl) {
    dialogEl = document.createElement('dialog')
    document.body.append(dialogEl)
  }

  links?.forEach((/** @type {{ addEventListener: (arg0: string, arg1: { (e: any): void; (e: any): void; (e: any): void; (event: any): Promise<void>; (event: any): void; }) => any; }} */ link) => link.addEventListener('click', handleEvent))
}

/**
 * @param {any} mutationList
 */
function handleMutation (mutationList) {
  for (const mutation of mutationList) {
    if (!mutation.addedNodes.length) continue // ignore removed-node mutations
    const triggerLink = mutation.target.querySelector('a[href*="dialog/"], button[data-dialog]')
    if (triggerLink) init([triggerLink])
  }
}

/**
 * @param {{ target: { matches: (arg0: string) => boolean; href: any; dataset: { dialog: any; }; }; preventDefault: () => void; }} e
 */
function handleEvent (e) {
  switch (true) {
    case e.target.matches('a[href*="dialog/"]'):
      e.preventDefault()
      openDialog(e.target.href)
      break
    case e.target.matches('button[data-dialog]'):
      openDialog(`dialog/${e.target.dataset.dialog}`)
      break
    case e.target.matches('dialog button.close'):
      dialogEl.close()
      break
  }
}

/**
 * @param {RequestInfo | URL} path
 */
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
    window.gtag('event', 'dialog', { action: 'open', result: 'success', page_location: location.href })

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
    window.gtag('event', 'dialog', { action: 'open', result: 'failed', page_location: location.href })
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
