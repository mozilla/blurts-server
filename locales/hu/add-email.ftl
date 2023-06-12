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
add-email-verify-the-link = Erősítse meg az { $email } címre küldött hivatkozást, hogy hozzáadja a { -brand-fx-monitor }hoz. Az összes e-mail-címet a <a { $settings-href }>Beállításokban</a> kezelheti.
