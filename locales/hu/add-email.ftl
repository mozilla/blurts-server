# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.


### Dialog window that allows a user to add a new email address to be monitored

add-email-add-another-heading = Másik e-mail-cím hozzáadása
close-dialog-alt = Párbeszédablak bezárása
# $total is the number of emails a user is allowed to add
add-email-your-account-includes =
    { $total ->
        [one] A fiókja { $total } e-mail-cím figyelését tartalmazza. Adjon hozzá egy új e-mail-címet, hogy lássa, hogy szerepelt-e valamilyen adatvédelmi incidensben.
       *[other] A fiókja { $total } e-mail-cím figyelését tartalmazza. Adjon hozzá egy új e-mail-címet, hogy lássa, hogy szerepelt-e valamilyen adatvédelmi incidensben.
    }
add-email-address-input-label = E-mail-cím
add-email-send-verification-button = Ellenőrző hivatkozás küldése
# $email is the newly added email address. $settings-href is the URL for the Settings page. HTML tags should not be translated, e.g. `<a>`
# This string will be deprecated when the new Plus plan is live.
add-email-verify-the-link = Erősítse meg az { $email } címre küldött hivatkozást, hogy hozzáadja a { -brand-fx-monitor }hoz. Az összes e-mail-címet a <a { $settings-href }>Beállításokban</a> kezelheti.
# Variables:
#   $email (string) - An email address submitted by the user for monitoring, e.g. `example@example.com`
add-email-verify-the-link-2 = Erősítse meg a(z) <b>{ $email }</b> címre küldött hivatkozást, hogy hozzáadja a { -brand-mozilla-monitor }hoz.
