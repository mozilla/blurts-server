# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.


### Dialog window that allows a user to add a new email address to be monitored

add-email-add-another-heading = Shtoni adresë tjetër email
close-dialog-alt = Mbylle dialogun
# $total is the number of emails a user is allowed to add
add-email-your-account-includes =
    { $total ->
        [one] Llogaria juaj përfshin mbikëqyrjen e { $total } adrese email. Shtoni një adresë të re email, që të shihni nëse është përfshirë në një cenim.
       *[other] Llogaria juaj përfshin mbikëqyrjen e { $total } adresash email. Shtoni një adresë të re email, që të shihni nëse është përfshirë në një cenim.
    }
add-email-address-input-label = Adresë email
add-email-send-verification-button = Dërgo lidhje verifikimi
# $email is the newly added email address. $settings-href is the URL for the Settings page. HTML tags should not be translated, e.g. `<a>`
# This string will be deprecated when the new Plus plan is live.
add-email-verify-the-link = Verifikoni lidhjen e dërguar te { $email } për ta shtuar te { -brand-fx-monitor }. Administroni krejt adresat email, që nga <a { $settings-href }>Rregullimet</a>.
# Variables:
#   $email (string) - An email address submitted by the user for monitoring, e.g. `example@example.com`
add-email-verify-the-link-2 = Verifikoni lidhjen e dërguar te <b>{ $email }</b> për ta shtuar te { -brand-mozilla-monitor }.
