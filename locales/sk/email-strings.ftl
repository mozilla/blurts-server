# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.

# Firefox Monitor is a product name and should not be translated.
-product-name = Firefox Monitor
# Firefox is a brand name and should not be translated.
-brand-name = Firefox
# Firefox Relay is a product name and should not be translated.
-product-name-relay = Firefox Relay
# Mozilla VPN is a product name and should not be translated.
-product-name-vpn = Mozilla VPN
# A link to legal information about mozilla products.
legal = Právne informácie
# Unsubscribe link in email.
email-unsub-link = Odhláste sa
# This string appears in the footer of breach report and breach alert emails.
# { $unsubLink } is a link to the user's dashboard where they can unsubscribe from Monitor
# and uses the text from { email-unsub-link }. { $faqLink } is a link to the
# Firefox Monitor SUMO page and uses the text from { frequently-asked-questions }.
email-footer-blurb =
    Tento e‑mail ste dostali, pretože ste sa prihlásili na odber upozornení zo služby { -product-name }.
    Neželáte si už dostávať podobné e‑maili? { $unsubLink }. Toto je automaticky generovaná správa. Podporu nájdete na { $faqLink }.
# Button text
verify-email-cta = Overiť e‑mailovú adresu
# Headline of verification email
email-link-expires = Platnosť tohto odkazu vyprší o 24 hodín

##

# Subject line of email
email-subject-found-breaches = Služba { -product-name } odhalila vaše údaje v týchto únikoch
# Subject line of email
email-subject-no-breaches = { -product-name } nenašiel žiadne známe úniky
# Subject line of email
email-subject-verify = Overte svoju e‑mailovú adresu pre { -product-name }
fxm-warns-you-no-breaches =
    Služba { -product-name } vás upozorňuje na úniky údajov, ktorých súčasťou boli aj vaše údaje.
    Zatiaľ ste sa neobjavili v žiadnom úniku. Ak sa vaša e‑mailová adresa objaví v novom úniku, budeme vás o tom informovať.
email-breach-alert-blurb =
    Služba { -product-name } vás upozorňuje na úniky údajov, ktorých súčasťou boli aj vaše údaje.
    Práve sme dostali informácie o ďalšom úniku údajov.

## 2022 email template. HTML tags should not be translated, e.g. `<a>`

# Have I Been Pwned attribution
# Variables:
#   $hibp-link-attr (String) - Link to Have I Been Pwned
email-2022-hibp-attribution = Údaje o úniku poskytuje <a { $hibp-link-attr }>{ -brand-HIBP }</a>

## Verification email

email-verify-heading = Chráňte svoje údaje, začnite hneď teraz
email-verify-subhead = Overte svoj e‑mail a začnite chrániť svoje údaje po úniku údajov.
email-verify-simply-click = Overenie účtu dokončíte kliknutím na odkaz nižšie.

## Breach report

email-breach-summary = Tu je sumár únikov údajov
# Variables:
#   $email-address (string) - Email address, bolded
email-breach-detected = Výsledky vyhľadávania pre váš účet { $email-address } zistili, že váš e‑mail mohol byť odhalený. Odporúčame vám, aby ste okamžite začali daný únik riešiť.
# Variables:
#   $email-address (string) - Email address
email-breach-detected-2 = Výsledky vyhľadávania pre váš účet <b>{ $email-address }</b> zistili, že váš e‑mail mohol byť súčasťou úniku. Odporúčame vám, aby ste okamžite začali daný únik riešiť.
email-dashboard-cta = Prejsť na nástenku

## Breach alert

email-spotted-new-breach = Zistili sme nový únik údajov
