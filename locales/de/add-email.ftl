# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.


### Dialog window that allows a user to add a new email address to be monitored

add-email-add-another-heading = Fügen Sie eine weitere E-Mail-Adresse hinzu
close-dialog-alt = Dialog schließen
# $total is the number of emails a user is allowed to add
add-email-your-account-includes =
    { $total ->
        [one] Ihr Konto überwacht bis zu { $total } E-Mail-Adresse. Fügen Sie eine neue E-Mail-Adresse hinzu, um zu sehen, ob sie von einem Datenleck betroffen war.
       *[other] Ihr Konto überwacht bis zu { $total } E-Mail-Adressen. Fügen Sie eine neue E-Mail-Adresse hinzu, um zu sehen, ob sie von einem Datenleck betroffen war.
    }
add-email-address-input-label = E-Mail-Adresse
add-email-send-verification-button = Bestätigungslink senden
# $email is the newly added email address. $settings-href is the URL for the Settings page. HTML tags should not be translated, e.g. `<a>`
# This string will be deprecated when the new Plus plan is live.
add-email-verify-the-link = Überprüfen Sie den an { $email } gesendeten Link, um sie zu { -brand-fx-monitor } hinzuzufügen. Verwalten Sie alle E-Mail-Adressen in den <a { $settings-href }>Einstellungen</a>.
# Variables:
#   $email (string) - An email address submitted by the user for monitoring, e.g. `example@example.com`
add-email-verify-the-link-2 = Bestätigen Sie den Link, der an <b>{ $email }</b> gesendet wurde, um sie zu { -brand-mozilla-monitor } hinzuzufügen.
