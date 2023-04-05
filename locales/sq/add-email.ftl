# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.


### Dialog window that allows a user to add a new email address to be monitored

add-email-add-another-heading = Shtoni adresë tjetër email
# $total is the number of emails a user is allowed to add
add-email-your-account-includes =
    { $total ->
        [one] Llogaria juaj përfshin mbikëqyrjen e { $total } adrese email. Shtoni një adresë të re email, që të shihni nëse është përfshirë në një cenim.
       *[other] Llogaria juaj përfshin mbikëqyrjen e { $total } adresash email. Shtoni një adresë të re email, që të shihni nëse është përfshirë në një cenim.
    }
add-email-address-input-label = Adresë email
add-email-send-verification-button = Dërgo lidhje verifikimi
# $email is the newly added email address. $settings-href is the URL for the Settings page. HTML tags should not be translated, e.g. `<a>`
add-email-verify-the-link = Verifikoni lidhjen e dërguar te { $email } për ta shtuar te { -brand-fx-monitor }. Administroni krejt adresat email, që nga <a { $settings-href }>Rregullimet</a>.
