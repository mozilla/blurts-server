# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.


### Dialog window that allows a user to add a new email address to be monitored

add-email-add-another-heading = Pridanie ďalšej e‑mailovej adresy
close-dialog-alt = Zavrieť dialógové okno
# $total is the number of emails a user is allowed to add
add-email-your-account-includes =
    { $total ->
        [one] Váš účet umožňuje sledovanie { $total } e‑mailovej adresy. Pridajte novú e‑mailovú adresu, aby ste zistili, či nebola súčasťou nejakého úniku.
        [few] Váš účet umožňuje sledovanie až { $total } e‑mailových adries. Pridajte novú e‑mailovú adresu, aby ste zistili, či nebola súčasťou nejakého úniku.
        [many] Váš účet umožňuje sledovanie až { $total } e‑mailových adries. Pridajte novú e‑mailovú adresu, aby ste zistili, či nebola súčasťou nejakého úniku.
       *[other] Váš účet umožňuje sledovanie až { $total } e‑mailových adries. Pridajte novú e‑mailovú adresu, aby ste zistili, či nebola súčasťou nejakého úniku.
    }
add-email-address-input-label = E‑mailová adresa
add-email-send-verification-button = Odoslať overovací odkaz
# $email is the newly added email address. $settings-href is the URL for the Settings page. HTML tags should not be translated, e.g. `<a>`
# This string will be deprecated when the new Plus plan is live.
add-email-verify-the-link = Pomocou odkazu odoslaného na adresu { $email } ju pridajte do služby { -brand-fx-monitor }. Všetky vaše e‑mailové adresy môžete spravovať v <a { $settings-href }>Nastaveniach</a>.
# Variables:
#   $email (string) - An email address submitted by the user for monitoring, e.g. `example@example.com`
add-email-verify-the-link-2 = Pomocou odkazu odoslaného na adresu <b>{ $email }</b> túto pridáte do služby { -brand-mozilla-monitor }.
