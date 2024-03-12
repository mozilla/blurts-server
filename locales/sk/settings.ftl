# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.


# Settings page

settings-meta-title = { -brand-fx-monitor } - nastavenia
settings-page-title = Nastavenia { -product-short-name(case: "gen") }

## Breach alert preferences

settings-alert-preferences-title = Predvoľby upozornení na únik údajov
settings-alert-preferences-option-one = Upozornenia na únik údajov posielať na dotknutú e‑mailovú adresu
settings-alert-preferences-option-two = Všetky upozornenia na únik údajov posielať na hlavnú e‑mailovú adresu

## Monitored email addresses

# Variables:
#   $email (string) - Email address
settings-email-label-primary = { $email } (primárna adresa)
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
# Deprecated
settings-delete-email-button = Odstrániť e‑mailovú adresu
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

## Cancel Premium subscription

settings-cancel-premium-subscription-title = Zrušiť predplatné { -brand-premium }
settings-cancel-premium-subscription-info = Po skončení aktuálneho fakturačného cyklu sa vaše predplatné vráti na bezplatný účet. Vaše výsledky kontroly ochrany súkromia budú natrvalo odstránené a monitorovanie únikov údajov budete mať len na 1 e‑mailovej adrese.

## Deactivate account

settings-deactivate-account-title = Deaktivovať účet
settings-deactivate-account-info-2 = { -product-short-name } môžete deaktivovať odstránením svojho { -brand-mozilla-account(case: "gen", capitalization: "lower") }.
settings-fxa-link-label-3 = Prejsť do Nastavení { -brand-mozilla-account(case: "gen", capitalization: "lowe") }

## Delete Monitor account

settings-delete-monitor-free-account-title = Odstrániť účet služby { -brand-monitor }
settings-delete-monitor-free-account-description = Týmto natrvalo odstránite svoj účet služby { -brand-monitor } a vypnete všetky upozornenia.
settings-delete-monitor-free-account-cta-label = Odstrániť účet
settings-delete-monitor-free-account-dialog-title = Váš účet služby { -brand-monitor } bude natrvalo odstránený.
settings-delete-monitor-free-account-dialog-lead = Všetky informácie o vašom účte služby { -brand-monitor } budú odstránené a my už nebudeme monitorovať nové úniky údajov. Týmto sa neodstráni váš účet { -brand-mozilla }.
settings-delete-monitor-free-account-dialog-cta-label = Odstrániť účet
settings-delete-monitor-free-account-dialog-cancel-button-label = Rozmyslel som si to
settings-delete-monitor-plus-account-title = Odstrániť účet služby { -brand-monitor }
settings-delete-monitor-plus-account-description = Týmto natrvalo odstránite svoj účet služby { -brand-monitor } a okamžite ukončíte platené predplatné { -brand-monitor-plus }.
settings-delete-monitor-plus-account-cta-label = Odstrániť účet
settings-delete-monitor-plus-account-dialog-title = Váš účet služby { -brand-monitor } bude natrvalo odstránený.
settings-delete-monitor-plus-account-dialog-lead-p1 = Všetky informácie o vašom účte služby { -brand-monitor } budú odstránené a my už nebudeme monitorovať nové úniky údajov alebo vystavenie sprostredkovateľom údajov. Týmto sa neodstráni váš účet { -brand-mozilla }.
settings-delete-monitor-plus-account-dialog-lead-p2 = Vaše platené predplatné sa dnes skončí a za zvyšok predplatného vám nebude vyplatená pomerná časť.
settings-delete-monitor-plus-account-dialog-cta-label = Odstrániť účet
settings-delete-monitor-plus-account-dialog-cancel-button-label = Rozmyslel som si to
settings-delete-monitor-account-confirmation-toast-label = Váš účet služby { -brand-monitor } je teraz natrvalo odstránený.
settings-delete-monitor-account-confirmation-toast-dismiss-label = Zavrieť

## Add email dialog

settings-email-dialog-title = Pridanie ďalšej e‑mailovej adresy
settings-add-email-text = Pridajte novú e‑mailovú adresu, aby ste zistili, či nebola súčasťou nejakého úniku údajov.
settings-email-input-label = E‑mailová adresa
settings-send-email-verification-button = Odoslať overovací odkaz

## Unsubscribe Dialog Survey

settings-unsubscribe-dialog-title = Mrzí nás, že odchádzate.<br />Môžete nám povedať svoje dôvody?
settings-unsubscribe-dialog-info = Vaše skúsenosti sú pre nás dôležité. Každú odpoveď čítame a berieme do úvahy.
settings-unsubscribe-dialog-message-placeholder = Čo mohlo ísť lepšie?
# $faq_href is the URL for the faq page. HTML tags should not be translated, e.g. `<a>`
settings-unsubscribe-dialog-confirmation = Upozorňujeme, že všetky vaše služby { -brand-monitor-premium } budú <a { $faq_href }>natrvalo odstránené</a> po skončení aktuálneho fakturačného cyklu.
settings-unsubscribe-dialog-continue = Pokračovať v zrušení
settings-unsubscribe-dialog-cancel = Rozmyslel som si to
