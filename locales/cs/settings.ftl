# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.


# Settings page

settings-meta-title = { -brand-fx-monitor } - Nastavení
settings-page-title = Nastavení { -product-short-name(case: "gen") }

## Breach alert preferences

settings-alert-preferences-title = Předvolby upozorňování na únik dat
settings-alert-preferences-option-one = Upozornění poslat na postiženou e-mailovou adresu
settings-alert-preferences-option-two = Všechna upozornění posílat na primární e-mailovou adresu

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
# Deprecated
settings-delete-email-button = Smazat e-mailovou adresu
settings-remove-email-button-label = Odebrat
# Variables:
#   $emailAddress (string) - The email address to remove, e.g. `billnye@example.com`
settings-remove-email-button-tooltip = Ukončit monitorování { $emailAddress }
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

## Cancel Premium subscription

settings-cancel-premium-subscription-title = Zrušit předplatné { -brand-premium }
settings-cancel-premium-subscription-info = Po skončení aktuálního fakturačního období se vaše předplatné vrátí na bezplatný účet. Vaše výsledky kontroly ochrany soukromí budou trvale smazány a budete mít monitorování narušení dat pouze pro 1 e-mailovou adresu.

## Deactivate account

settings-deactivate-account-title = Deaktivovat účet
settings-deactivate-account-info-2 = { -product-short-name } můžete deaktivovat odstraněním svého { -brand-mozilla-account(case: "gen", capitalization: "lower") }.
settings-fxa-link-label-3 = Přejít do nastavení { -brand-mozilla-account(case: "gen", capitalization: "lower") }.

## Add email dialog

settings-email-dialog-title = Přidání další e-mailové adresy
settings-add-email-text = Přidejte novou e-mailovou adresu, abyste zjistili, zda nebyla součástí nějakého úniku dat.
settings-email-input-label = E-mailová adresa
settings-send-email-verification-button = Zaslat ověřovací odkaz

## Unsubscribe Dialog Survey

settings-unsubscribe-dialog-title = Mrzí nás, že odcházíte. <br />Můžete nám sdělit své důvody?
settings-unsubscribe-dialog-info = Vaše zkušenosti jsou pro nás důležité. Každá odpověď se počítá a bereme je v úvahu.
settings-unsubscribe-dialog-message-placeholder = Co mohlo být lepší?
# $faq_href is the URL for the faq page. HTML tags should not be translated, e.g. `<a>`
settings-unsubscribe-dialog-confirmation = Upozorňujeme, že všechny vaše služby { -brand-monitor-premium } budou <a { $faq_href }>trvale smazány</a> po skončení aktuálního fakturačního období.
settings-unsubscribe-dialog-continue = Pokračovat v rušení
settings-unsubscribe-dialog-cancel = Rozmyslel(a) jsem si to
