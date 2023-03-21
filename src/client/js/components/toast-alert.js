/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

/**
 * Toast alert
 *
 * Displays a short message towards the top of user's screen,
 * and auto removes itself after a period of time (default ~7s)
 *
 * Client JS examples:
 * ```
 * const toast = document.createElement('toast-alert')
 * toast.textContent = 'Alert message here'
 * document.body.append(toast)
 * ```
 *
 * ```
 * const toast = document.createElement('toast-alert')
 * toast.textContent = 'Another alert message here'
 * toast.ttl = 10 // seconds before fade-out (defaults to 7)
 * toast.type = 'error' // 'error' (default) or 'success'
 * document.body.append(toast)
 * ```
 *
 * SSR/HTML examples:
 * ```
 * <toast-alert>Alert message here</toast-alert>
 * <toast-alert ttl='10' type='error'>Another alert message here</toast-alert>
 * ```
 */

const html = `
<style>
  :host{
    contain: layout style;
    position: fixed;
    top: var(--padding-md);
    left: 0;
    width: 100%;
    text-align: center;
    font-size: .875rem;
    color: white;
    transform: translateY(var(--toast-y, 0));
    transition: transform 0.3s;
    animation: fade-out 0.6s var(--ttl, 7s) forwards;
    z-index: 2;
    pointer-events: none;
  }

  :host(:hover){
    animation-play-state: paused;
  }

  :host([hidden]) {
    display: none 
  }

  output{
    position: relative;
    display: inline-block;
    padding: var(--padding-sm) var(--padding-xl);
    border-radius: var(--border-radius);
    box-shadow: 0 0 6px -3px black;
    animation: fly-in 0.3s forwards;
    pointer-events: auto;
  }

  :host([type="error"]) output {
    background-color: var(--red-70);
  }

  :host([type="success"]) output {
    background-color: var(--green-80);
  }

  button{
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    padding: 0 var(--padding-md);
    border: none;
    cursor: pointer;
    font: inherit;
    color: inherit;
    background-color: transparent;
  }

  button:hover{
    box-shadow: inset 0 0 64px #fc95;
  }

  @keyframes fly-in{
    from{
      opacity: 0;
      transform: translateY(-30%);
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

<output>
  <slot></slot>
  <button aria-label="Close">✕</button>
</output>
`

const ToastTypes = {
  Error: 'error',
  Success: 'success'
}

customElements.define('toast-alert', class extends HTMLElement {
  constructor () {
    super()
    this.attachShadow({ mode: 'open' })
    this.shadowRoot.innerHTML = html
  }

  get ttl () {
    return this.getAttribute('ttl')
  }

  set ttl (value) {
    this.setAttribute('ttl', value)
    this.style.setProperty('--ttl', `${value}s`) // seconds before fade-out starts
  }

  get type () {
    return this.getAttribute('type')
  }

  set type (value) {
    const isValidType = Object.values(ToastTypes).includes(value)
    if (!isValidType) {
      console.warning(`Unknown toast type ${value}.`)
    }

    this.setAttribute('type', value)
  }

  connectedCallback () {
    const toasts = Array.from(document.querySelectorAll('toast-alert')).reverse()

    for (let i = 1, y = 0; i < toasts.length; i++) {
      // start at index 1 to push old toasts down with aggregated toast heights plus 10px gap
      y += toasts[i - 1].getBoundingClientRect().height + 10
      toasts[i].style.setProperty('--toast-y', `${y}px`)
    }

    if (this.hasAttribute('ttl')) {
      this.ttl = this.getAttribute('ttl')
    }

    if (this.hasAttribute('type')) {
      this.type = this.getAttribute('type')
    } else {
      this.type = ToastTypes.Error
    }

    this.shadowRoot.addEventListener('click', this)
    this.addEventListener('animationend', this)
  }

  handleEvent (e) {
    switch (true) {
      case e.target.matches('button'):
        this.remove()
        gtag('event', 'click', { event_category: 'button', event_label: 'dismiss toast alert' })
        break
      case e.animationName === 'fade-out':
        this.remove()
        gtag('event', 'click', { event_category: 'button', event_label: 'faded toast alert' })
        break
    }
  }

  disconnectedCallback () {
    this.shadowRoot.removeEventListener('click', this)
    this.removeEventListener('animationend', this)
  }
})
