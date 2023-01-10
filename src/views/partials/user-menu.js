import { getMessage } from '../../utils/fluent.js'

const userMenuButton = data => `
<button
  aria-expanded='false'
  aria-haspopup='true'
  class='user-menu-button'
  title='${getMessage('menu-button-title')}'
>
  <img src='${data.avatar}' alt='${getMessage('menu-button-alt')}' />
</button>
`

const userMenuPopover = data => `
  <ul class='user-menu-list user-menu-popover' role='menu' hidden>
    <li role='menuitem' tabindex='1'>
      <a href='https://accounts.firefox.com/' class='user-menu-header'>
        <b class='user-menu-email'>${data.email}</b>
        <div class='user-menu-subtitle'>
          ${getMessage('menu-item-fxa')}
          <img src='/images/icon-open-in.svg' />
        </div>
      </a>
    </li>
    <li role='menuitem'>
      <a href='/user/settings' class='user-menu-link'>
        <img src='/images/icon-settings.svg' />
        ${getMessage('menu-item-settings')}
      </a>
    </li>
    <li role='menuitem'>
      <a href='https://accounts.firefox.com/settings' class='user-menu-link'>
        <img src='/images/icon-contact.svg' />
        ${getMessage('menu-item-contact')}
      </a>
    </li>
    <li role='menuitem'>
      <a href='https://support.mozilla.org/kb/firefox-monitor' class='user-menu-link'>
        <img src='/images/icon-help.svg' />
        ${getMessage('menu-item-help')}
      </a>
    </li>
    <li role='menuitem'>
      <a href='/user/logout' class='user-menu-link'>
        <img src='/images/icon-signout.svg' />
        ${getMessage('menu-item-logout')}
      </a>
    </li>
  </ul>
`

export const userMenu = (data) => `
<div class='user-menu-wrapper' tabindex='-1'>
  ${userMenuButton(data)}
  ${userMenuPopover(data)}
</div>
`
