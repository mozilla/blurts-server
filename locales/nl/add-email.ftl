# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.


### Dialog window that allows a user to add a new email address to be monitored

add-email-add-another-heading = Nog een e-mailadres toevoegen
close-dialog-alt = Dialoogvenster sluiten
# $total is the number of emails a user is allowed to add
add-email-your-account-includes =
    { $total ->
        [one] Uw account omvat het monitoren van { $total } e-mailadres. Voeg een nieuw e-mailadres toe om te bekijken of het getroffen is door een datalek.
       *[other] Uw account omvat het monitoren van { $total } e-mailadressen. Voeg een nieuw e-mailadres toe om te bekijken of het getroffen is door een datalek.
    }
add-email-address-input-label = E-mailadres
add-email-send-verification-button = Verificatiekoppeling versturen
# $email is the newly added email address. $settings-href is the URL for the Settings page. HTML tags should not be translated, e.g. `<a>`
# This string will be deprecated when the new Plus plan is live.
add-email-verify-the-link = Verifieer de koppeling die is verstuurd naar { $email } om dit aan { -brand-fx-monitor } toe te voegen. U kunt alle e-mailadressen beheren in <a { $settings-href }>Instellingen</a>.
# Variables:
#   $email (string) - An email address submitted by the user for monitoring, e.g. `example@example.com`
add-email-verify-the-link-2 = Verifieer de koppeling die naar <b>{ $email }</b> is verzonden om dit aan { -brand-mozilla-monitor } toe te voegen.
