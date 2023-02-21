# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.


# Settings page

settings-page-title = Nastavení { -product-short-name(case: "gen") }

## Breach alert preferences

settings-alert-preferences-title = Předvolby upozorňování na únik dat
settings-alert-preferences-option-one = Poslat upozornění na únik na postiženou e-mailovou adresu
settings-alert-preferences-option-two = Posílat všechna upozornění na úniky dat na primární e-mailovou adresu

## Monitored email addresses

# Variables:
#   $email (string) - Email address
settings-email-label-primary = { $email } (primární)
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

## Deactivate account


## Add email dialog

settings-send-email-verification-button = Zaslat ověřovací odkaz
