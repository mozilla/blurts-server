const userMenuButton = `
<button id='user-menu-button' class='user-menu-button' aria-label='Open menu'>
  <img src='' alt='Open menu' aria-label='User avatar' />
</button>
`

const userMenuPopover = `
<div class='user-menu-popover'>
  <a href='#' class='user-menu-header'>
    <b class='user-menu-email'>lee@gmail.com</b>
    <div class='user-menu-subtitle'>
      Manage your Firefox account
      <img src='/images/icon-open-in.svg' />
    </div>
  </a>

  <ul class='user-menu-list'>
    <li>
      <a href='/user/settings' class='user-menu-link'>
        <img src='/images/icon-settings.svg' />
        Settings
      </a>
    </li>
    <li>
      <a href='https://accounts.firefox.com/settings' class='user-menu-link'>
        <img src='/images/icon-contact.svg' />
        Contact us
      </a>
    </li>
    <li>
      <a href='https://support.mozilla.org/en-US/kb/firefox-monitor' class='user-menu-link'>
        <img src='/images/icon-help.svg' />
        Help and support
      </a>
    </li>
    <li>
      <a href='/logout' class='user-menu-link'>
        <img src='/images/icon-signout.svg' />
        Sign out
      </a>
    </li>
  </ul>
</div>
`

const html = `
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
      background: linear-gradient(-90deg,#ff9100,#f10366 50%,#6173ff);
      bottom: 0;
      content: "";
      display: block;
      height: 4px;
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

  <div id='user-menu-wrapper' class='user-menu-wrapper'>${userMenuButton}</div>
`
class UserMenu extends HTMLElement {
  constructor () {
    super()

    this.handleEvent = this.handleEvent.bind(this)
    this.attachShadow({ mode: 'open' })
    this.shadowRoot.innerHTML = html

    this.menuWrapper = this.shadowRoot.getElementById('user-menu-wrapper')
    this.menuWrapper.addEventListener('blur', this.handleEvent)

    const triggerButton = this.shadowRoot.getElementById('user-menu-button')
    triggerButton.addEventListener('click', this.handleEvent)

    this.popover = null
  }

  connectedCallback () {
    this.handleEvent()
  }

  handleEvent () {
    if (this.popover) {
      this.popover.remove()
      this.popover = null
    } else {
      this.popover = document.createElement('div')
      this.popover.innerHTML = userMenuPopover

      this.menuWrapper.appendChild(this.popover)
      this.menuWrapper.focus()
    }
  }
}

customElements.define('user-menu', UserMenu)
