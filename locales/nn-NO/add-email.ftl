# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.


### Dialog window that allows a user to add a new email address to be monitored

add-email-add-another-heading = Legg til ei ny e-postadresse
# $total is the number of emails a user is allowed to add
add-email-your-account-includes =
    { $total ->
        [one] Kontoen din inkluderer overvaking av { $total } e-postadresse. Legg til ei ny e-postadresse for å sjå om den har vore innblanda i ein datalekkasje.
       *[other] Kontoen din inkluderer overvaking av { $total } e-postadresser. Legg til ei ny e-postadresse for å sjå om den har vore innblanda i ein datalekkasje.
    }
add-email-address-input-label = E-postadresse
add-email-send-verification-button = Send stadfestingslenke
# $email is the newly added email address. $settings-href is the URL for the Settings page. HTML tags should not be translated, e.g. `<a>`
# This string will be deprecated when the new Plus plan is live.
add-email-verify-the-link = Stadfest lenka som vart sendt til { $email } for å leggje henne til i { -brand-fx-monitor }. Handsam alle e-postadresser i <a { $settings-href }>Innstillingar</a>.
# Variables:
#   $email (string) - An email address submitted by the user for monitoring, e.g. `example@example.com`
add-email-verify-the-link-2 = Stadfest lenka som vart sendt til <b>{ $email }</b> for å leggje henne til i { -brand-mozilla-monitor }.
