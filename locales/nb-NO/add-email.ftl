# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.


### Dialog window that allows a user to add a new email address to be monitored

add-email-add-another-heading = Legg til enda en e-postadresse
# $total is the number of emails a user is allowed to add
add-email-your-account-includes =
    { $total ->
        [one] Kontoen din inkluderer overvåking av { $total } e-postadresse. Legg til en ny e-postadresse for å se om den har vært involvert i en datalekkasje.
       *[other] Kontoen din inkluderer overvåking av opptil { $total } e-postadresser. Legg til en ny e-postadresse for å se om den har vært involvert i en datalekkasje.
    }
add-email-address-input-label = E-postadresse
add-email-send-verification-button = Send bekreftelseslenke
# $email is the newly added email address. $settings-href is the URL for the Settings page. HTML tags should not be translated, e.g. `<a>`
# This string will be deprecated when the new Plus plan is live.
add-email-verify-the-link = Bekreft lenken som ble sendt til { $email } for å legge den til i { -brand-fx-monitor }. Behandle alle e-postadresser i <a { $settings-href }>Innstillinger</a>.
# Variables:
#   $email (string) - An email address submitted by the user for monitoring, e.g. `example@example.com`
add-email-verify-the-link-2 = Bekreft lenken som ble sendt til <b>{ $email }</b> for å legge den til i { -brand-mozilla-monitor }.
