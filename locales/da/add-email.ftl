# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.


### Dialog window that allows a user to add a new email address to be monitored

add-email-add-another-heading = Tilføj en mailadresse til
close-dialog-alt = Luk dialog
# $total is the number of emails a user is allowed to add
add-email-your-account-includes =
    { $total ->
        [one] Din konto inkluderer overvågning af { $total } mailadresse. Tilføj en ny mailadresse for at se, om den har været involveret i en datalæk.
       *[other] Din konto inkluderer overvågning af { $total } mailadresser. Tilføj en ny mailadresse for at se, om den har været involveret i en datalæk.
    }
add-email-address-input-label = Mailadresse
add-email-send-verification-button = Send bekræftelseslink
# $email is the newly added email address. $settings-href is the URL for the Settings page. HTML tags should not be translated, e.g. `<a>`
# This string will be deprecated when the new Plus plan is live.
add-email-verify-the-link = Bekræft linket sendt til { $email } for at føje mailadressen til { -brand-fx-monitor }. Håndter alle mailadresser i <a { $settings-href }>Indstillinger</a>.
# Variables:
#   $email (string) - An email address submitted by the user for monitoring, e.g. `example@example.com`
add-email-verify-the-link-2 = Bekræft linket sendt til <b>{ $email }</b> for at føje mailadressen til { -brand-mozilla-monitor }.
