/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

const html = `
<style>
  :host{
    contain: style paint;
    position: relative;
    display: inline-block;
    width: min(100%, var(--option-w) + 20px);
    color: var(--purple-70);
  }

  :host([hidden]) {
    display: none 
  }

  select{
    appearance: none;
    background: none;
    border: none;
    outline: none;
    width: 100%;
    margin: 0;
    padding: 0 20px 0 0;
    overflow: hidden;
    text-overflow: ellipsis;
    font: inherit;
    color: inherit;
 }

  select.hidden{
    position: absolute;
    visibility: hidden;
    width: auto;
    padding: 0;
    pointer-events: none;
 }

  svg {
    position: absolute;
    top: 0;
    right: 0;
    width: 16px;
    height: 100%;
    color: inherit;
    pointer-events: none;
  }
</style>

<select></select>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor">
  <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/>
</svg>
`

customElements.define('custom-select', class extends HTMLElement {
  /** @type {HTMLSelectElement} */
  select

  constructor () {
    super()
    this.attachShadow({ mode: 'open' })
    this.shadowRoot.innerHTML = html
    // @ts-ignore: We know that this will not return null
    this.select = this.shadowRoot.querySelector('select')
    this.options = this.querySelectorAll('option')

    // move <option> elements into <select> (<slot> not permitted as <select> child)
    this.select.append(...this.options)
    this.setAttribute('value', this.select.value)
    this.setAttribute('selected-index', this.select.selectedIndex.toString())
  }

  get value () {
    return this.getAttribute('value')
  }

  get selectedIndex () {
    return this.getAttribute('selected-index')
  }

  connectedCallback () {
    this.matchOptionWidth()
    this.select?.addEventListener('change', this)
  }

  /**
   * @param {InputEvent & { target: HTMLSelectElement }} e
   */
  handleEvent (e) {
    switch (e.type) {
      case 'change':
        this.matchOptionWidth()
        this.setAttribute('value', e.target.value)
        this.setAttribute('selected-index', e.target.selectedIndex.toString())
        this.dispatchEvent(new Event('change'))
        break
    }
  }

  matchOptionWidth () {
    // update <select> width based on selected <option> (override fixed width based on largest <option>)
    /** @type {HTMLSelectElement & { w?: number }} */
    const temp = document.createElement('select')
    const selectedOption = this.options[this.select.selectedIndex]

    temp.className = 'hidden'
    temp.append(selectedOption.cloneNode(true))
    this.shadowRoot.append(temp)

    // let’s wait for the next tick to make sure that the dimensions of temp are available
    window.requestAnimationFrame(() => {
      temp.w = Math.ceil(temp.getBoundingClientRect().width) + 5 // adds 5px safety for font load delay or other quirks
      this.style.setProperty('--option-w', `${temp.w}px`)
      temp.remove()
    })
  }

  disconnectedCallback () {
    this.select.removeEventListener('change', this)
  }
})
