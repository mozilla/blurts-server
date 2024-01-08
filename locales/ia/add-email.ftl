# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.


### Dialog window that allows a user to add a new email address to be monitored

add-email-add-another-heading = Adder un altere adresse email
close-dialog-alt = Clauder fenestra de dialogo
# $total is the number of emails a user is allowed to add
add-email-your-account-includes =
    { $total ->
        [one] Tu conto include le surveliantia de { $total } adresse email. Adde un nove adresse email pro vider si illo era implicate in un violation.
       *[other] Tu conto include le surveliantia de { $total } adresses email. Adde un nove adresse email pro vider si illo era implicate in un violation.
    }
add-email-address-input-label = Adresse email
add-email-send-verification-button = Inviar ligamine de verification
# $email is the newly added email address. $settings-href is the URL for the Settings page. HTML tags should not be translated, e.g. `<a>`
# This string will be deprecated when the new Plus plan is live.
add-email-verify-the-link = Verifica le ligamine inviate a { $email } pro adder lo a { -brand-fx-monitor }. Gere tote le adresses email in <a { $settings-href }>Parametros</a>.
# Variables:
#   $email (string) - An email address submitted by the user for monitoring, e.g. `example@example.com`
add-email-verify-the-link-2 = Verifica le ligamine inviate a <b>{ $email }</b> pro adder lo a  { -brand-mozilla-monitor }.
