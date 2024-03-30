# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.


# Settings page

settings-page-title = Nastavení { -product-short-name(case: "gen") }

## Breach alert preferences

settings-alert-preferences-title = Předvolby upozorňování na únik dat
settings-alert-preferences-option-one = Upozornění poslat na postiženou e-mailovou adresu
settings-alert-preferences-option-two = Všechna upozornění posílat na primární e-mailovou adresu

## Monitored email addresses

# Variables:
#   $email (string) - Email address
settings-email-list-title = Monitorované e-mailové adresy
# Variables:
#   $limit (number) - Number of email addresses included in the plan
settings-email-limit-info =
    { $limit ->
        [one] Váš účet nabízí možnost monitorování { $limit } e-mailové adresy.
        [few] Váš účet nabízí možnost monitorování až { $limit } e-mailových adres.
        [many] Váš účet nabízí možnost monitorování až { $limit } e-mailových adres.
       *[other] Váš účet nabízí možnost monitorování { $limit } e-mailových adres.
    }
settings-email-verification-callout = Vyžadováno ověření e-mailové adresy
settings-resend-email-verification-link = Znovu poslat ověřovací e-mail
settings-add-email-button = Přidat e-mailové adresy
settings-remove-email-button-label = Odebrat
# Variables:
#   $emailAddress (string) - The email address to remove, e.g. `billnye@example.com`
settings-remove-email-button-tooltip = Ukončit monitorování adresy { $emailAddress }
# This string is shown beneath each of the user’s email addresses to indicate
# how many known breaches that email address was found in.
# Variables:
#   $breachCount (number) - Number of breaches
settings-email-number-of-breaches-info =
    { $breachCount ->
        [one] Vyskytuje se v { $breachCount } známém úniku.
        [few] Vyskytuje se ve { $breachCount } známých únicích.
        [many] Vyskytuje se v { $breachCount } známých únicích.
       *[other] Vyskytuje se v { $breachCount } známých únicích.
    }

## Deactivate account

settings-deactivate-account-title = Deaktivovat účet
settings-deactivate-account-info-2 = { -product-short-name } můžete deaktivovat odstraněním svého { -brand-mozilla-account(case: "gen", capitalization: "lower") }.
settings-fxa-link-label-3 = Přejít do nastavení { -brand-mozilla-account(case: "gen", capitalization: "lower") }.

## Delete Monitor account

settings-delete-monitor-free-account-title = Smazání účtu { -brand-monitor }
settings-delete-monitor-free-account-description = Tímto trvale smažete svůj účet u služby { -brand-monitor } a vypnete všechna oznámení.
settings-delete-monitor-free-account-cta-label = Smazat účet
settings-delete-monitor-free-account-dialog-title = Váš účet u služby { -brand-monitor } bude trvale smazán
settings-delete-monitor-free-account-dialog-lead = Všechny informace o vašem účtu { -brand-monitor } budou smazány a my už nebudeme nadále sledovat nové úniky údajů. Tímto nesmažete svůj účet { -brand-mozilla }.
settings-delete-monitor-free-account-dialog-cta-label = Smazat účet
settings-delete-monitor-free-account-dialog-cancel-button-label = Rozmyslel(a) jsem si to
settings-delete-monitor-account-confirmation-toast-label-2 = Váš účet { -brand-monitor } je nyní smazán.
settings-delete-monitor-account-confirmation-toast-dismiss-label = Zavřít
