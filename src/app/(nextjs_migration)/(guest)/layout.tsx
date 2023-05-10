/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

'use client'

import { ReactNode } from 'react'
import '../../../client/css/index.css'
import { useL10n } from '../../hooks/l10n'
import Image from 'next/image'
import MonitorLogo from '../../../client/images/monitor-logo-transparent@2x.webp'
import MozillaLogo from '../../../client/images/moz-logo-1color-white-rgb-01.svg'

export type Props = {
  children: ReactNode
}

const GuestLayout = (props: Props) => {
  const l10n = useL10n()

  return (
    <>
      <header>
        <a href='/'>
          <Image className='monitor-logo' src={MonitorLogo} width='213' height='33' alt={l10n.getString('brand-fx-monitor')}/>
        </a>
        <menu>
          <li><a href='/user/breaches' data-cta-id='sign-in-1' className='button secondary'>{l10n.getString('sign-in')}</a></li>
        </menu>
      </header>
      <main>
        {props.children}
      </main>
      <footer className='site-footer'>
        <a href='https://www.mozilla.org' target='_blank'>
          <Image src={MozillaLogo} width='100' height='29' loading='lazy' alt={l10n.getString('mozilla')}/>
        </a>
        <menu>
          <li><a href='/breaches'>{l10n.getString('footer-nav-all-breaches')}</a></li>
          <li><a href='https://support.mozilla.org/kb/firefox-monitor-faq' target='_blank'>FAQ</a></li>
          <li><a href='https://www.mozilla.org/privacy/firefox-monitor' target='_blank'>{l10n.getString('terms-and-privacy')}</a></li>
          <li><a href='https://github.com/mozilla/blurts-server' target='_blank'>{l10n.getString('github')}</a></li>
        </menu>
      </footer>
    </>
  )
}

export default GuestLayout
