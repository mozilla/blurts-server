# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.


### Dialog window that allows a user to add a new email address to be monitored

add-email-add-another-heading = Emoĩve ambue ñanduti veve kundaharape
close-dialog-alt = Emboty ñomongeta
# $total is the number of emails a user is allowed to add
add-email-your-account-includes =
    { $total ->
        [one] Ne mba’ete ogueroike jehechajey { $total } ñanduti veve kundaharape peve. Embojuaju ñanduti veve kundaharape pyahu eikuaa hag̃ua oñembyaikuaápara’e.
       *[other] Ne mba’ete ogueroike jehechajey { $total } ñanduti veve kundaharape peve. Embojuaju ñanduti veve kundaharape pyahu eikuaa hag̃ua oñembyaikuaápara’e.
    }
add-email-address-input-label = Ñanduti veve kundaharape
add-email-send-verification-button = Emondo juajuha jehechajeyrã
# $email is the newly added email address. $settings-href is the URL for the Settings page. HTML tags should not be translated, e.g. `<a>`
# This string will be deprecated when the new Plus plan is live.
add-email-verify-the-link = Ehechajey juajuha emondóva { $email }-pe embojuaju { -brand-fx-monitor } rehe. Eñangareko ñanduti veve kundaharapére <a { $settings-href }>Moĩporã</a>.
# Variables:
#   $email (string) - An email address submitted by the user for monitoring, e.g. `example@example.com`
add-email-verify-the-link-2 = Ehechajey juajuha mondpyre <b>{ $email }</b>-pe embojuaju hag̃ua { -brand-mozilla-monitor } rehe.
