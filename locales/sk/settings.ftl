# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.


# Settings page

settings-meta-title = { -brand-fx-monitor } - nastavenia
settings-page-title = Nastavenia { -product-short-name(case: "gen") }

## Breach alert preferences

settings-alert-preferences-title = Predvoľby upozornení na únik údajov
settings-alert-preferences-option-one = Upozornenia na únik údajov posielať na dotknutú e-mailovú adresu
settings-alert-preferences-option-two = Všetky upozornenia na únik údajov posielať na primárnu e-mailovú adresu

## Monitored email addresses

# Variables:
#   $email (string) - Email address
settings-email-label-primary = { $email } (primárna adresa)
settings-email-list-title = Monitorované e-mailové adresy
# Variables:
#   $limit (number) - Number of email addresses included in the plan
settings-email-limit-info =
    { $limit ->
        [one] Váš účet zahŕňa sledovanie { $limit } e-mailovej adresy.
        [few] Váš účet zahŕňa sledovanie až { $limit } e-mailových adries.
        [many] Váš účet zahŕňa sledovanie až { $limit } e-mailových adries.
       *[other] Váš účet zahŕňa sledovanie až { $limit } e-mailových adries.
    }
settings-email-verification-callout = Vyžaduje sa overenie e-mailovej adresy
settings-resend-email-verification-link = Znova poslať overovací e-mail
settings-add-email-button = Pridať e-mailovú adresu
settings-delete-email-button = Odstrániť e-mailovú adresu
# This string is shown beneath each of the user’s email addresses to indicate
# how many known breaches that email address was found in.
# Variables:
#   $breachCount (numer) - Number of breaches
settings-email-number-of-breaches-info =
    { $breachCount ->
        [one] Vyskytuje sa v { $breachCount } známom úniku.
        [few] Vyskytuje sa v { $breachCount } známych únikoch.
        [many] Vyskytuje sa v { $breachCount } známych únikoch.
       *[other] Vyskytuje sa v { $breachCount } známych únikoch.
    }

## Cancel Premium subscription

settings-cancel-premium-subscription-title = Zrušiť predplatné { -brand-premium }
settings-cancel-premium-subscription-info = Po skončení aktuálneho fakturačného cyklu sa vaše predplatné vráti na bezplatný účet. Vaše výsledky kontroly ochrany súkromia budú natrvalo odstránené a monitorovanie únikov údajov budete mať len na 1 e-mailovej adrese.
settings-cancel-premium-subscription-link-label = Zrušiť z vášho { -brand-fx-account(case: "gen", capitalization: "lower") }

## Deactivate account

settings-deactivate-account-title = Deaktivovať účet
settings-deactivate-account-info = Službu { -product-short-name } môžete deaktivovať odstránením svojho { -brand-fx-account(case: "gen", capitalization: "lower") }.
settings-fxa-link-label = Prejsť do Nastavení { -brand-firefox(case: "gen") }

## Add email dialog

settings-email-dialog-title = Pridanie ďalšej e-mailovej adresy
settings-add-email-text = Pridajte novú e-mailovú adresu, aby ste zistili, či nebola súčasťou nejakého úniku údajov.
settings-email-input-label = E-mailová adresa
settings-send-email-verification-button = Odoslať overovací odkaz

## Unsubscribe Dialog Survey

settings-unsubscribe-dialog-title = Mrzí nás, že odchádzate.<br />Môžete nám povedať svoje dôvody?
settings-unsubscribe-dialog-info = Vaše skúsenosti sú pre nás dôležité. Každú odpoveď čítame a berieme do úvahy.
settings-unsubscribe-dialog-message-placeholder = Čo mohlo ísť lepšie?
# $faq_href is the URL for the faq page. HTML tags should not be translated, e.g. `<a>`
settings-unsubscribe-dialog-confirmation = Upozorňujeme, že všetky vaše služby { -brand-monitor-premium } budú <a { $faq_href }>natrvalo odstránené</a> po skončení aktuálneho fakturačného cyklu.
settings-unsubscribe-dialog-continue = Pokračovať v zrušení
