/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

/**
 * Toast alert
 *
 * Displays a short message towards the top of user's screen,
 * and auto removes itself after a period of time (default ~6s)
 *
 * Client JS example:
 * ```
 * const toast = document.createElement('toast-alert')
 * toast.textContent = 'Alert message here'
 * document.body.append(toast)
 * ```
 *
 * SSR/HTML example:
 * ```
 * <toast-alert>Alert message here</toast-alert>
 * ```
 */

const html = ttl => `
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
    transition: transform 300ms;
    animation: fly-in 300ms, fade-out 600ms ${ttl}ms forwards;
    z-index: 2;
    pointer-events: none;
  }

  :host(:hover){
    animation-play-state: paused, paused;
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
    background-color: var(--red-70);
    pointer-events: auto;
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

customElements.define('toast-alert', class extends HTMLElement {
  constructor () {
    super()
    this.ttl = 6000 // ms before fade-out starts
    this.gap = 10 // px space between toasts

    this.attachShadow({ mode: 'open' })
    this.shadowRoot.innerHTML = html(this.ttl, this.fadeDuration)
  }

  connectedCallback () {
    const toasts = Array.from(document.querySelectorAll('toast-alert')).reverse()

    for (let i = 1, y = 0; i < toasts.length; i++) {
      // start at index 1 to push old toasts down with aggregated toast heights
      y += toasts[i - 1].getBoundingClientRect().height + this.gap
      toasts[i].style.setProperty('--toast-y', `${y}px`)
    }

    this.addEventListener('click', this)
    this.addEventListener('animationend', this)
  }

  handleEvent (e) {
    const target = e.composedPath()[0]

    switch (true) {
      case target.matches('button'):
        this.remove()
        break
      case e.animationName === 'fade-out':
        this.remove()
        break
    }
  }

  disconnectedCallback () {
    this.removeEventListener('click', this)
    this.removeEventListener('animationend', this)
  }
})
