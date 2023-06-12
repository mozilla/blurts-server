# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.


### Dialog window that allows a user to add a new email address to be monitored

add-email-add-another-heading = Pridanie ďalšej e-mailovej adresy
close-dialog-alt = Zavrieť dialógové okno
# $total is the number of emails a user is allowed to add
add-email-your-account-includes =
    { $total ->
        [one] Váš účet zahŕňa sledovanie { $total } e-mailovej adresy. Pridajte novú e-mailovú adresu, aby ste zistili, či nebola súčasťou nejakého úniku.
        [few] Váš účet zahŕňa sledovanie až { $total } e-mailových adries. Pridajte novú e-mailovú adresu, aby ste zistili, či nebola súčasťou nejakého úniku.
        [many] Váš účet zahŕňa sledovanie až { $total } e-mailových adries. Pridajte novú e-mailovú adresu, aby ste zistili, či nebola súčasťou nejakého úniku.
       *[other] Váš účet zahŕňa sledovanie až { $total } e-mailových adries. Pridajte novú e-mailovú adresu, aby ste zistili, či nebola súčasťou nejakého úniku.
    }
add-email-address-input-label = E-mailová adresa
add-email-send-verification-button = Odoslať overovací odkaz
# $email is the newly added email address. $settings-href is the URL for the Settings page. HTML tags should not be translated, e.g. `<a>`
add-email-verify-the-link = Pomocou odkazu odoslaného na adresu { $email } ju pridajte do služby { -brand-fx-monitor }. Všetky vaše e-mailové adresy môžete spravovať v <a { $settings-href }>Nastaveniach</a>.
