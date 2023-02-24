/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

const html = (ttl, fadeDuration) => `
<style>
  :host{
    contain: content;
    position: fixed;
    top: var(--padding-md);
    left: 50%;
    transform: translate(-50%, var(--toast-y, 0));
    border-radius: var(--border-radius);
    background-color: var(--red-70);
    color: white;
    z-index: 2;
    transition: transform 300ms;
    animation: fly-in 500ms, fade-out ${fadeDuration}ms ${ttl}ms forwards;
  }

  :host([hidden]) {
    display: none 
  }

  output{
    display: inline-block;
    padding: var(--padding-sm) var(--padding-lg);
  }

  @keyframes fly-in{
    from{
      opacity: 0;
      transform: translate(-50%, -100%);
    }
    to{
      opacity: 1;
    }
  }

  @keyframes fade-out{
    from{
      opacity: 1;
    }
    to{
      opacity: 0;
    }
  }
</style>
<output></output>
`

customElements.define('toast-alert', class extends HTMLElement {
  constructor () {
    super()

    this.ttl = 6000
    this.fadeDuration = 600

    this.attachShadow({ mode: 'open' })
    this.shadowRoot.innerHTML = html(this.ttl, this.fadeDuration)
    this.output = this.shadowRoot.querySelector('output')
  }

  get message () {
    return this.shadowRoot.querySelector('output').textContent
  }

  set message (txt) {
    this.output.textContent = txt
  }

  connectedCallback () {
    const toasts = Array.from(document.querySelectorAll('toast-alert'))
    const otherToasts = toasts.filter(toast => toast !== this).reverse()

    otherToasts.forEach((toast, i) => {
      toast.style.setProperty('--toast-y', `${110 * (i + 1)}%`)
    })

    this.timeout = setTimeout(() => this.kill(), this.ttl + this.fadeDuration)
  }

  kill () {
    clearTimeout(this.timeout)
    this.remove()
  }
})
