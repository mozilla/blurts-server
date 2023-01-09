const userMenuButton = data => `
<button id='user-menu-button' class='user-menu-button' aria-label='Open menu'>
  <img src='${data.avatar.src}' alt='${data.avatar.alt}' />
</button>
`

const menuItem = data => {
  const { iconSrc, linkTarget, linkText } = data
  return `
    <li>
      <a href='${linkTarget}' class='user-menu-link'>
        <img src='${iconSrc}' />
        ${linkText}
      </a>
    </li>
  `
}

const userMenuPopover = data => {
  console.log('lol', data)
  const { linkTarget, email, iconSrc, items } = data
  return `
    <div class='user-menu-popover'>
      <a href='${linkTarget}' class='user-menu-header'>
        <b class='user-menu-email'>${email}</b>
        <div class='user-menu-subtitle'>
          Manage your Firefox account
          <img src='${iconSrc}' />
        </div>
      </a>
      <ul class='user-menu-list'>
        ${items.map(menuItem).join('')}
      </ul>
    </div>
  `
}

const html = data => `
  <style>
    .user-menu-wrapper {
      font: normal 14px/1.5 Inter, Inter-fallback, sans-serif;
      position: relative;
    }
    
    .user-menu-button {
      border: none;
      background: var(--gray-10);
      cursor: pointer;
      display: block;
      border-radius: 50%;
      height: 42px;
      overflow: hidden;
      width: 42px;
    }

    .user-menu-popover {
      background: white;
      border-radius: 6px;
      box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.1);
      margin-top: 16px;
      min-width: 320px;
      position: absolute;
      right: 0;
    }
    
    .user-menu-popover::after {
      background-color: white;
      border-top-left-radius: 1px;
      content: '';
      display: block;
      height: 14px;
      margin: auto;
      position: absolute;
      right: 0;
      top: 0;
      transform: translate(-100%, -50%) rotate(45deg);
      width: 14px;
    }
    
    .user-menu-header {
      align-items: flex-start;
      display: flex;
      gap: 4px;
      flex-direction: column;
      padding: 16px 24px;
      position: relative;
      text-decoration: none;
    }

    .user-menu-header::after {
      background: var(--monitor-gradient);
      bottom: 0;
      content: "";
      display: block;
      height: 2px;
      left: 0;
      position: absolute;
      width: 100%;
    }

    .user-menu-email {
      color: var(--purple-90);
      font: normal 14px/1.5 Inter, Inter-fallback, sans-serif;
      font-weight: 600;
    }

    .user-menu-list {
      list-style: none;
      padding: 8px 0;
      margin: 0;
    }

    .user-menu-fxa {
      align-items: center;
      display: flex;
      gap: 8px;
    }

    .user-menu-link,
    .user-menu-subtitle {
      align-items: center;
      color: var(--gray-50);
      display: flex;
      gap: 8px;
      padding: 12px 24px;
      text-decoration: none;
    }

    .user-menu-subtitle {
      padding: 0;
    }

    .user-menu-link:hover {
      background-color: var(--gray-5);
    }
  </style>

  <div id='user-menu-wrapper' class='user-menu-wrapper'>
    ${userMenuButton(data)}
  </div>
`
class UserMenu extends HTMLElement {
  constructor () {
    super()
    this.attachShadow({ mode: 'open' })

    this.handleEvent = this.handleEvent.bind(this)
    this.addEventListeners = this.addEventListeners.bind(this)
    this.render = this.render.bind(this)

    this.popover = null
    this.data = {}
  }

  connectedCallback () {
    if (this.hasAttribute('profile-data')) {
      this.data = JSON.parse(this.getAttribute('profile-data'))
    }

    this.render()
    this.addEventListeners()
    this.handleEvent()
  }

  addEventListeners () {
    this.menuWrapper = this.shadowRoot.getElementById('user-menu-wrapper')
    this.menuWrapper.addEventListener('blur', this.handleEvent)

    const triggerButton = this.shadowRoot.getElementById('user-menu-button')
    triggerButton.addEventListener('click', this.handleEvent)
  }

  handleEvent () {
    if (this.popover) {
      this.popover.remove()
      this.popover = null
    } else {
      this.popover = document.createElement('div')
      this.popover.innerHTML = userMenuPopover(this.data)

      this.menuWrapper.appendChild(this.popover)
    }
  }

  render () {
    this.shadowRoot.innerHTML = html(this.data)
  }
}

customElements.define('user-menu', UserMenu)
