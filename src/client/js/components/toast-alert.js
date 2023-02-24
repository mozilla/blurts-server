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
    padding: var(--padding-sm) var(--padding-xl);
  }

  button{
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    padding: 0 var(--padding-md);
    border: none;
    cursor: pointer;
    font-size: 1rem;
    color: white;
    background-color: transparent;
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
<output><slot></slot></output>
<button>✕</button>
`

customElements.define('toast-alert', class extends HTMLElement {
  constructor () {
    super()
    this.ttl = 6000 // ms before fade-out starts
    this.fadeDuration = 600 // ms duration of fade-out animation

    this.attachShadow({ mode: 'open' })
    this.shadowRoot.innerHTML = html(this.ttl, this.fadeDuration)
    this.siblingToasts = Array.from(document.querySelectorAll('toast-alert')).reverse()

    this.addEventListener('click', this)
  }

  connectedCallback () {
    this.siblingToasts.forEach((toast, i) => {
      toast.style.setProperty('--toast-y', `${110 * (i + 1)}%`)
    })

    this.timeout = setTimeout(() => this.kill(), this.ttl + this.fadeDuration)
  }

  handleEvent (e) {
    const target = e.composedPath()[0]

    switch (true) {
      case target.matches('button'):
        this.kill()
        break
    }
  }

  kill () {
    clearTimeout(this.timeout)
    this.remove()
  }
})
