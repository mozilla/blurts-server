const getUserMenuData = (user) => ({
  avatar: {
    alt: 'Open menu',
    src: user.avatar
  },
  email: user.email,
  iconSrc: '/images/icon-open-in.svg',
  linkTarget: 'https://accounts.firefox.com/',
  subtitle: 'Manage your Firefox account',
  items: [
    {
      iconSrc: '/images/icon-settings.svg',
      linkTarget: '/user/settings',
      linkText: 'Settings'
    },
    {
      iconSrc: '/images/icon-contact.svg',
      linkTarget: 'https://accounts.firefox.com/settings',
      linkText: 'Contact us'
    },
    {
      iconSrc: '/images/icon-help.svg',
      linkTarget: 'https://support.mozilla.org/en-US/kb/firefox-monitor',
      linkText: 'Help and support'
    },
    {
      iconSrc: '/images/icon-signout.svg',
      linkTarget: '/logout',
      linkText: 'Sign out'
    }
  ]
})

export { getUserMenuData }
