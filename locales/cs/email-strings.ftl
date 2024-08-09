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
legal = Právní informace
# Unsubscribe link in email.
email-unsub-link = Zrušte jejich příjem
# This string appears in the footer of breach report and breach alert emails.
# { $unsubLink } is a link to the user's dashboard where they can unsubscribe from Monitor
# and uses the text from { email-unsub-link }. { $faqLink } is a link to the
# Firefox Monitor SUMO page and uses the text from { frequently-asked-questions }.
email-footer-blurb = Tento e-mail jste obdrželi, protože jste se zaregistrovali k příjmu upozornění od { -product-name(case: "gen") }. Nepřejete si už tyto e-maily dostávat? { $unsubLink }. Toto je automaticky zaslaný e-mail. Potřebujete-li pomoc, navštivte { $faqLink }.
# Button text
verify-email-cta = Ověřit e-mailovou adresu
# Headline of verification email
email-link-expires = Platnost tohoto odkazu vyprší za 24 hodin

##

# Subject line of email
email-subject-found-breaches = { -product-name } našel vaše údaje v těchto únicích dat
# Subject line of email
email-subject-no-breaches = { -product-name } nenašel žádné známé úniky dat
# Subject line of email
email-subject-verify = Ověření e-mailové adresy pro { -product-name(case: "acc") }
fxm-warns-you-no-breaches =
    { -product-name } vás upozorňuje na úniky dat, jejichž součástí byly vaše osobní údaje.
    Dosud jste nebyli součástí žádného úniku. Pošleme vám upozornění, jestliže se vaše e-mailová adresa vyskytne v novém úniku dat.
email-breach-alert-blurb = { -product-name } vás upozorňuje na úniky dat, jejichž součástí byly vaše osobní údaje. Právě jsme obdrželi informace o dalším úniku dat.

## 2022 email template. HTML tags should not be translated, e.g. `<a>`

# Have I Been Pwned attribution
# Variables:
#   $hibp-link-attr (String) - Link to Have I Been Pwned
email-2022-hibp-attribution = Údaje o únicích poskytl <a { $hibp-link-attr }>{ -brand-HIBP }</a>

## Verification email

email-verify-heading = Chraňte svá data, začněte hned teď.
email-verify-subhead = Ověřte svůj e-mail a začněte chránit své údaje po úniku dat.
email-verify-simply-click = Ověření účtu dokončíte kliknutím na odkaz níže.

## Breach report

email-breach-summary = Zde jsou vaše souhrnné informace
# Variables:
#   $email-address (string) - Email address, bolded
email-breach-detected = Z výsledků vyhledávání pro váš účet { $email-address } bylo zjištěno, že vaše e-mailová adresa mohla být vyzrazena. Doporučujeme vám, abyste okamžitě začali daný únik řešit.
# Variables:
#   $email-address (string) - Email address
email-breach-detected-2 = Podle výsledků vyhledávání pro váš účet <b>{ $email-address }</b> mohla být vaše e-mailová adresa vyzrazena. Doporučujeme jednat a tento únik vyřešit.
email-dashboard-cta = Přejít na nástěnku

## Breach alert

email-spotted-new-breach = Zjistili jsme nový únik dat
