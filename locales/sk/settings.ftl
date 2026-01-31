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

settings-email-verification-callout = Vyžaduje sa overenie e‑mailovej adresy
settings-remove-email-button-label = Odstrániť
settings-email-addresses-header = E‑mailové adresy
settings-email-addresses-description = { -brand-monitor } vás upozorní, ak sa tieto e‑mailové adresy zobrazia v známych únikoch údajov.
settings-email-addresses-add-email-button = Pridať e‑mailovú adresu
# Variables:
#   $limit (number) - Number of emails that can be added for monitoring.
settings-email-addresses-add-email-indicator-limit = Pridať môžete maximálne { $limit }
settings-email-addresses-add-email-resend-button-label = Znova odoslať overovací odkaz
input-error-alt = Chyba

## Email address dialog

settings-email-addresses-initial-dialog-header = Pridať e‑mailovú adresu
settings-email-addresses-initial-dialog-description = Pošleme vám overovací odkaz, aby ste potvrdili, že ho chcete zahrnúť do budúceho skenovania službou { -brand-monitor }.
settings-email-addresses-initial-dialog-add-email-input-label = Zadajte e‑mailovú adresu
settings-email-addresses-initial-dialog-add-email-button-label = Odoslať overovací odkaz
# Variables:
#   $email (string) - Email address the confirmation has been sent to.
settings-email-addresses-confirmation-dialog-header = Overovací odkaz odoslaný na adresu <b>{ $email }</b>
settings-email-addresses-confirmation-dialog-description = Otvorte odkaz a pridajte ho do tohto účtu pre budúce skenovanie pomocou služby { -brand-monitor }.
settings-email-addresses-confirmation-dialog-close-button = Zavrieť

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

## Settings page redesign

# Label for a navigation bar link to settings for updating the users scan profile info – “update” is used as a verb.
settings-tab-label-update-scan-info = Aktualizovať informácie o skenovaní
settings-tab-label-edit-info = Upravte svoje informácie
settings-tab-label-notifications = Nastaviť upozornenia
settings-tab-label-manage-account = Spravovať účet
settings-tab-subtitle-manage-account = Spravujte svoj účet služby { -product-name }.
settings-tab-notifications-marketing-title = Marketingová komunikácia
settings-tab-notifications-marketing-text = Pravidelné aktualizácie o službe { -brand-monitor }, { -brand-mozilla(case: "loc") } a našich ďalších bezpečnostných produktoch.
settings-tab-notifications-marketing-link-label = Prejsť na nastavení e‑mailov od { -brand-mozilla(case: "gen") }
