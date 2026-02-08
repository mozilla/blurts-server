# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.


# Settings page

settings-page-title = Nastavení { -product-short-name(case: "gen") }

## Breach alert preferences

settings-alert-email-preferences-title = Nastavení e-mailů
settings-alert-email-preferences-subtitle = Řekněte nám, které e-maily chcete dostávat.
settings-alert-preferences-allow-breach-alerts-title = Okamžitá upozornění na úniky dat
settings-alert-preferences-allow-breach-alerts-subtitle = Tato upozornění jsou odesílána okamžitě po zjištění úniku dat
settings-alert-preferences-option-one = Upozornění poslat na postiženou e-mailovou adresu
settings-alert-preferences-option-two = Všechna upozornění posílat na primární e-mailovou adresu

## Monitored email addresses

settings-email-verification-callout = Vyžadováno ověření e-mailové adresy
settings-remove-email-button-label = Odebrat
settings-email-addresses-header = E-mailové adresy
settings-email-addresses-description = { -brand-monitor } vás upozorní, jestliže se tyto e-mailové adresy objeví ve známém úniku dat.
settings-email-addresses-add-email-button = Přidat e-mailovou adresu
# Variables:
#   $limit (number) - Number of emails that can be added for monitoring.
settings-email-addresses-add-email-indicator-limit = Přidat můžete až { $limit }
settings-email-addresses-add-email-resend-button-label = Znovu odeslat ověřovací odkaz
input-error-alt = Chyba

## Email address dialog

settings-email-addresses-initial-dialog-header = Přidání e-mailové adresy
settings-email-addresses-initial-dialog-description = Zašleme vám ověřovací odkaz, abyste potvrdili, že ji chcete do budoucna zahrnout do skenování službou ⁨{ -brand-monitor }.
settings-email-addresses-initial-dialog-add-email-input-label = Zadejte e-mailovou adresu
settings-email-addresses-initial-dialog-add-email-button-label = Odeslat ověřovací odkaz
# Variables:
#   $email (string) - Email address the confirmation has been sent to.
settings-email-addresses-confirmation-dialog-header = Odkaz pro ověření byl odeslán na <b>{ $email }</b>
settings-email-addresses-confirmation-dialog-description = Otevře odkaz pro jeho přidání do tohoto účtu pro budoucí kontroly za { -brand-monitor }.
settings-email-addresses-confirmation-dialog-close-button = Zavřít

## Delete Monitor account

settings-delete-monitor-free-account-title = Smazání účtu { -brand-monitor }
settings-delete-monitor-free-account-description = Tímto trvale smažete svůj účet u služby { -brand-monitor } a vypnete všechna oznámení.
settings-delete-monitor-free-account-cta-label = Smazat účet
settings-delete-monitor-free-account-dialog-title = Váš účet u služby { -brand-monitor } bude trvale smazán
settings-delete-monitor-free-account-dialog-lead-v2 = Všechny informace o vašem účtu { -brand-monitor } budou odstraněny a nebudeme již sledovat nová narušení dat. Nedojde k odstranění vašeho { -brand-mozilla-account }.
settings-delete-monitor-free-account-dialog-cta-label = Smazat účet
settings-delete-monitor-free-account-dialog-cancel-button-label = Rozmyslel(a) jsem si to
settings-delete-monitor-account-confirmation-toast-label-2 = Váš účet { -brand-monitor } je nyní smazán.
settings-delete-monitor-account-confirmation-toast-dismiss-label = Zavřít

## Settings page redesign

# Label for a navigation bar link to settings for updating the users scan profile info – “update” is used as a verb.
settings-tab-label-update-scan-info = Aktualizovat informace o skenování
settings-tab-label-edit-info = Upravit své údaje
settings-tab-label-notifications = Nastavení upozornění
settings-tab-label-manage-account = Správa účtu
settings-tab-subtitle-manage-account = Spravujte svůj účet služby { -product-name }.
settings-tab-notifications-marketing-title = Marketingová komunikace
settings-tab-notifications-marketing-text = Pravidelné aktualizace o službě { -brand-monitor }, { -brand-mozilla(case: "loc") } a dalších našich bezpečnostních produktech.
settings-tab-notifications-marketing-link-label = Přejít do nastavení e-mailu { -brand-mozilla(case: "gen") }
