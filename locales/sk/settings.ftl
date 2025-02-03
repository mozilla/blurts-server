# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.


# Settings page

settings-page-title = Nastavenia { -product-short-name(case: "gen") }

## Breach alert preferences

settings-alert-email-preferences-title = Predvoľby e‑mailov
settings-alert-email-preferences-subtitle = Povedzte nám, aké e‑maily chcete dostávať.
settings-alert-preferences-allow-breach-alerts-title = Okamžité upozornenia na únik
settings-alert-preferences-allow-breach-alerts-subtitle = Tieto upozornenia sa odosielajú okamžite po zistení úniku údajov
settings-alert-preferences-option-one = Upozornenia na únik údajov posielať na dotknutú e‑mailovú adresu
settings-alert-preferences-option-two = Všetky upozornenia na únik údajov posielať na hlavnú e‑mailovú adresu

## Monitored email addresses

# Variables:
#   $email (string) - Email address
settings-email-list-title = Monitorované e‑mailové adresy
# Variables:
#   $limit (number) - Number of email addresses included in the plan
settings-email-limit-info =
    { $limit ->
        [one] Váš účet umožňuje sledovanie { $limit } e‑mailovej adresy.
        [few] Váš účet umožňuje sledovanie až { $limit } e‑mailových adries.
        [many] Váš účet umožňuje sledovanie až { $limit } e‑mailových adries.
       *[other] Váš účet umožňuje sledovanie až { $limit } e‑mailových adries.
    }
settings-email-verification-callout = Vyžaduje sa overenie e‑mailovej adresy
settings-resend-email-verification-link = Znova poslať overovací e‑mail
settings-add-email-button = Pridať e‑mailovú adresu
settings-remove-email-button-label = Odstrániť
# Variables:
#   $emailAddress (string) - The email address to remove, e.g. `billnye@example.com`
settings-remove-email-button-tooltip = Zastaviť monitorovanie adresy { $emailAddress }
# This string is shown beneath each of the user’s email addresses to indicate
# how many known breaches that email address was found in.
# Variables:
#   $breachCount (number) - Number of breaches
settings-email-number-of-breaches-info =
    { $breachCount ->
        [one] Vyskytuje sa v { $breachCount } známom úniku.
        [few] Vyskytuje sa v { $breachCount } známych únikoch.
        [many] Vyskytuje sa v { $breachCount } známych únikoch.
       *[other] Vyskytuje sa v { $breachCount } známych únikoch.
    }

## Delete Monitor account

settings-delete-monitor-free-account-title = Odstrániť účet služby { -brand-monitor }
settings-delete-monitor-free-account-description = Týmto natrvalo odstránite svoj účet služby { -brand-monitor } a vypnete všetky upozornenia.
settings-delete-monitor-free-account-cta-label = Odstrániť účet
settings-delete-monitor-free-account-dialog-title = Váš účet služby { -brand-monitor } bude natrvalo odstránený.
settings-delete-monitor-free-account-dialog-lead-v2 = Všetky informácie o vašom účte služby { -brand-monitor } budú odstránené a my už nebudeme monitorovať nové úniky údajov. Týmto sa neodstráni váš { -brand-mozilla-account(capitalization: "lower") }.
settings-delete-monitor-free-account-dialog-cta-label = Odstrániť účet
settings-delete-monitor-free-account-dialog-cancel-button-label = Rozmyslel som si to
settings-delete-monitor-account-confirmation-toast-label-2 = Váš účet služby { -brand-monitor } je teraz odstránený.
settings-delete-monitor-account-confirmation-toast-dismiss-label = Zavrieť

## Monthly Monitor Report

settings-alert-preferences-allow-monthly-monitor-report-title = Mesačný prehľad { -brand-monitor(case: "gen") }
settings-alert-preferences-allow-monthly-monitor-report-subtitle = Mesačný prehľad nových únikov, toho, čo bolo opravené a čo si vyžaduje vašu pozornosť.

## Settings page redesign

settings-tab-label-edit-info = Upravte svoje informácie
settings-tab-label-notifications = Nastaviť upozornenia
settings-tab-label-manage-account = Spravovať účet
settings-tab-subtitle-manage-account = Spravujte svoj účet služby { -product-name }.
settings-tab-notifications-marketing-title = Marketingová komunikácia
settings-tab-notifications-marketing-text = Pravidelné aktualizácie o službe { -brand-monitor }, { -brand-mozilla(case: "loc") } a našich ďalších bezpečnostných produktoch.
settings-tab-notifications-marketing-link-label = Prejsť na nastavení e‑mailov od { -brand-mozilla(case: "gen") }
