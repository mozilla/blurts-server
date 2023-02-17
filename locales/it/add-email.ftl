# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.


### Dialog window that allows a user to add a new email address to be monitored

add-email-add-another-heading = Aggiungi un altro indirizzo email
# $total is the number of emails a user is allowed to add
add-email-your-account-includes =
    { $totale ->
        [one] Il tuo account include il controllo di { $total } indirizzi email. Aggiungi un nuovo indirizzo per verificare se è stato coinvolto in una violazione.
       *[other] Il tuo account include il controllo di un massimo di { $total } indirizzi email. Aggiungi un nuovo indirizzo per verificare se è stato coinvolto in una violazione.
    }
add-email-address-input-label = Indirizzo email
add-email-send-verification-button = Invia link di verifica
# $email is the newly added email address. $settings-href is the URL for the Settings page. HTML tags should not be translated, e.g. `<a>`
add-email-verify-the-link = Verifica il link inviato a { $email } per aggiungerlo a { -brand-fx-monitor }. Gestisci tutti gli indirizzi email nelle <a { $settings-href }>Impostazioni</a>.
