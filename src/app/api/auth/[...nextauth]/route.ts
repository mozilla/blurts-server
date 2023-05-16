/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import NextAuth, { AuthOptions } from 'next-auth'
import AppConstants from '../../../../appConstants.js'

export const authOptions: AuthOptions = {
  debug: true,
  providers: [
    {
      // As per https://mozilla.slack.com/archives/C4D36CAJW/p1683642497940629?thread_ts=1683642325.465929&cid=C4D36CAJW,
      // we should file a ticket against SVCSE with the `fxa` component to add
      // a redirect URL of /api/auth/callback/fxa for Firefox Monitor,
      // for every environment we deploy to:
      id: 'fxa',
      name: 'Firefox Accounts',
      type: 'oauth',
      authorization: {
        url: AppConstants.OAUTH_AUTHORIZATION_URI,
        params: {
          scope: 'profile'
        }
      },
      token: AppConstants.OAUTH_TOKEN_URI,
      userinfo: AppConstants.OAUTH_PROFILE_URI,
      clientId: AppConstants.OAUTH_CLIENT_ID,
      clientSecret: AppConstants.OAUTH_CLIENT_SECRET,
      profile: async (profile) => {
        return {
          id: profile.sub
        }
      }
    }
  ]
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
