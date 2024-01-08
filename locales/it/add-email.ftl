# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.


### Dialog window that allows a user to add a new email address to be monitored

add-email-add-another-heading = Aggiungi un altro indirizzo email
close-dialog-alt = Chiudi finestra di dialogo
# $total is the number of emails a user is allowed to add
add-email-your-account-includes =
    { $total ->
        [one] Il tuo account include il controllo di { $total } indirizzo email. Aggiungi un nuovo indirizzo per verificare se è stato coinvolto in una violazione.
       *[other] Il tuo account include il controllo di un massimo di { $total } indirizzi email. Aggiungi un nuovo indirizzo per verificare se è stato coinvolto in una violazione.
    }
add-email-address-input-label = Indirizzo email
add-email-send-verification-button = Invia link di verifica
# $email is the newly added email address. $settings-href is the URL for the Settings page. HTML tags should not be translated, e.g. `<a>`
# This string will be deprecated when the new Plus plan is live.
add-email-verify-the-link = Verifica il link inviato a { $email } per aggiungerlo a { -brand-fx-monitor }. Gestisci tutti gli indirizzi email nelle <a { $settings-href }>Impostazioni</a>.
# Variables:
#   $email (string) - An email address submitted by the user for monitoring, e.g. `example@example.com`
add-email-verify-the-link-2 = Verifica il link inviato a <b>{ $email }</b> per aggiungerlo a { -brand-mozilla-monitor }.
