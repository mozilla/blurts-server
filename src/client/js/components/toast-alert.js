/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

const html = `
<style>
  :host{
    contain: style paint;
    position: fixed;
    top: 0;
    margin: var(--padding-md) 0;
    border-radius: var(--border-radius);
    color: white;
    background-color: var(--red-70);
    left: 50%;
    transform: translateX(-50%);
    z-index: 2;
  }

  :host([hidden]) {
    display: none 
  }
</style>
`

customElements.define('toast-alert', class extends HTMLElement {
  constructor () {
    super()
    this.attachShadow({ mode: 'open' })
    this.shadowRoot.innerHTML = html
  }

  get message () {
    return this.shadowRoot.querySelector('output').textContent
  }

  set message (txt) {
    console.log('set message')
    const output = document.createElement('output')
    output.delay = setTimeout(this.killMessage, 6000, output, this)
    output.textContent = txt
    this.shadowRoot.append(output)
  }

  connectedCallback () {
    const toasts = document.querySelectorAll('toast-alert')
    toasts.forEach((toast, i) => {
      const y = 100 * (toasts.length - 1 - i)
      toast.style.setProperty('transform', `translateY(${y}%)`)
    })
  }

  killMessage (output, host) {
    clearTimeout(output.delay)
    host.remove()
  }
})
