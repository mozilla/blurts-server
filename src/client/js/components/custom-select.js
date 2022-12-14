const html = `
<style>
  span{
    --chevron-w: 16px;
    position: relative;
    display: inline-flex;
    color: var(--purple-70);
  }

  select{
    box-sizing: content-box;
    appearance: none;
    background: none;
    border: none;
    outline: none;
    padding: 0 calc(var(--chevron-w) + 4px) 0 0;
    font: inherit;
    color: inherit;
 }

 select.hidden{
    visibility: hidden;
    position: absolute;
    pointer-events: none;
 }

  svg {
    position: absolute;
    top: 0;
    right: 0;
    width: var(--chevron-w);
    height: 100%;
    color: inherit;
    pointer-events: none;
  }
</style>

<span>
  <select></select>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor">
    <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/>
  </svg>
</span>  
`

customElements.define('custom-select', class extends HTMLElement {
  constructor () {
    super()
    this.attachShadow({ mode: 'open' })
    this.shadowRoot.innerHTML = html
    this.select = this.shadowRoot.querySelector('select')
    this.options = this.querySelectorAll('option')

    // move <option> elements into <select> (<slot> not permitted as <select> child)
    this.select.append(...this.options)
    this.select.addEventListener('change', this)

    this.matchOptionWidth()
  }

  handleEvent (e) {
    switch (e.type) {
      case 'change':
        this.matchOptionWidth()
        break
    }
  }

  matchOptionWidth () {
    // update <select> width based on selected <option> (override fixed width based on largest <option>)
    const temp = document.createElement('select')
    const selectedOption = this.options[this.select.selectedIndex]
    temp.className = 'hidden'
    temp.append(selectedOption.cloneNode(true))
    this.shadowRoot.append(temp)
    this.select.style.width = `${temp.offsetWidth}px`
    temp.remove()
  }
})
