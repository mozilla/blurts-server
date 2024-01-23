# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.


### Dialog window that allows a user to add a new email address to be monitored

add-email-add-another-heading = Přidání další e-mailové adresy
close-dialog-alt = Zavřít dialog
# $total is the number of emails a user is allowed to add
add-email-your-account-includes =
    { $total ->
        [one] Váš účet nabízí možnost sledování { $total } e-mailové adresy. Přidejte novou e-mailovou adresu, abyste se dozvěděli, zda se nestala součástí úniku dat.
        [few] Váš účet nabízí možnost sledování až { $total } e-mailových adres. Přidejte novou e-mailovou adresu, abyste se dozvěděli, zda se nestala součástí úniku dat.
        [many] Váš účet nabízí možnost sledování až { $total } e-mailových adres. Přidejte novou e-mailovou adresu, abyste se dozvěděli, zda se nestala součástí úniku dat.
       *[other] Váš účet nabízí možnost sledování až { $total } e-mailových adres. Přidejte novou e-mailovou adresu, abyste se dozvěděli, zda se nestala součástí úniku dat.
    }
add-email-address-input-label = E-mailová adresa
add-email-send-verification-button = Zaslat ověřovací odkaz
# $email is the newly added email address. $settings-href is the URL for the Settings page. HTML tags should not be translated, e.g. `<a>`
# This string will be deprecated when the new Plus plan is live.
add-email-verify-the-link = Ověřte odkaz odeslaný na adresu { $email } pro její přidání do { -brand-fx-monitor(case: "gen") }. Všechny své e-mailové adresy můžete spravovat v <a { $settings-href }>Nastavení</a>.
# Variables:
#   $email (string) - An email address submitted by the user for monitoring, e.g. `example@example.com`
add-email-verify-the-link-2 = Pomocí odkazu odeslaného na adresu <b>{ $email }</b> tuto přidáte do služby { -brand-mozilla-monitor }.
