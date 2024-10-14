# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.


## Email headers

email-header-logo-alt = { -brand-mozilla-monitor }
email-header-button-sign-in = Přihlásit se

## Email footers

email-footer-support-heading = Máte otázky k { -brand-mozilla-monitor(case: "dat") }?
email-footer-support-content = Pro pomoc navštivte naše <support-link>centrum podpory</support-link>
email-footer-trigger-transactional = Tento e-mail dostáváte jako předplatitel { -brand-mozilla-monitor(case: "gen") }.
email-footer-source-hibp = Údaje o únicích poskytuje <hibp-link>{ -brand-HIBP }</hibp-link>
email-footer-logo-mozilla-alt = { -brand-mozilla }
email-footer-meta-privacy-notice = Soukromí
# Firefox Relay is a product name and should not be translated.
-product-name-relay = Firefox Relay
# Mozilla VPN is a product name and should not be translated.
-product-name-vpn = Mozilla VPN
# A link to legal information about mozilla products.
legal = Právní informace
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
# Deprecated after the redesigned breach alert email is launched
# Variables:
#   $email-address (string) - Email address
email-breach-detected-2 = Podle výsledků vyhledávání pro váš účet <b>{ $email-address }</b> mohla být vaše e-mailová adresa vyzrazena. Doporučujeme jednat a tento únik vyřešit.
email-dashboard-cta = Přejít na nástěnku

## Breach alert

# Deprecated after the redesigned breach alert email is launched
email-spotted-new-breach = Zjistili jsme nový únik dat

## Redesigned breach alert email

email-breach-alert-all-subject = Zjištěn nový únik údajů
email-breach-alert-all-preview = Provedeme vás kroky k jeho vyřešení.
email-breach-alert-all-hero-heading = Vaše data jsou v novém úniku dat
email-breach-alert-all-hero-subheading = Nemusíte se obávat, můžeme vám pomoci tento problém vyřešit
email-breach-alert-all-lead = { -brand-mozilla-monitor } zjistil následující únik dat, který obsahuje vaše osobní údaje:
email-breach-alert-all-source-title = Zdroj úniku:
email-breach-alert-all-data-points-title = Vaše uniklé údaje:
email-breach-alert-all-next-steps-lead = Provedeme vás krok za krokem, jak tento únik údajů vyřešit.
email-breach-alert-all-next-steps-cta-label = Začínáme!
email-breach-alert-all-next-steps-button-dashboard = Přejít na nástěnku
