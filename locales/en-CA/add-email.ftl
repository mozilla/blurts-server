# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.


### Dialog window that allows a user to add a new email address to be monitored

add-email-add-another-heading = Add another email address
close-dialog-alt = Close dialog
# $total is the number of emails a user is allowed to add
add-email-your-account-includes =
    { $total ->
        [one] Your account includes monitoring of { $total } email address. Add a new email address to see if it’s been involved in a breach.
       *[other] Your account includes monitoring of up to { $total } email addresses. Add a new email address to see if it’s been involved in a breach.
    }
add-email-address-input-label = Email Address
add-email-send-verification-button = Send verification link
# $email is the newly added email address. $settings-href is the URL for the Settings page. HTML tags should not be translated, e.g. `<a>`
add-email-verify-the-link = Verify the link sent to { $email } to add it to { -brand-fx-monitor }. Manage all email addresses in <a { $settings-href }>Settings</a>.
