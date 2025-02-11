# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.


## Email headers

email-header-logo-alt = { -brand-mozilla-monitor }
email-header-button-sign-in = Prihlásiť sa

## Email footers

email-footer-support-heading = Máte otázky týkajúce sa { -brand-mozilla-monitor(case: "gen") }?
email-footer-support-content = Ak potrebujete pomoc, navštívte naše <support-link>Centrum podpory</support-link>
email-footer-trigger-transactional = Tento e‑mail ste dostali ako odberateľ služby { -brand-mozilla-monitor }.
email-footer-source-hibp = Údaje o úniku poskytuje <hibp-link>{ -brand-HIBP }</hibp-link>
email-footer-logo-mozilla-alt = { -brand-mozilla }
email-footer-meta-privacy-notice = Súkromie
# Firefox Relay is a product name and should not be translated.
-product-name-relay = Firefox Relay
# Mozilla VPN is a product name and should not be translated.
-product-name-vpn = Mozilla VPN
# A link to legal information about mozilla products.
legal = Právne informácie
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
email-dashboard-cta = Prejsť na nástenku

## Breach alert email

email-breach-alert-all-subject = Bol zistený nový únik údajov
email-breach-alert-all-preview = Prevedieme vás krokmi, ako to vyriešiť.
email-breach-alert-all-hero-heading = Vaše údaje sú súčasťou nového úniku údajov
email-breach-alert-all-hero-subheading = Nebojte sa, môžeme vám pomôcť tento únik vyriešiť
email-breach-alert-all-lead = { -brand-mozilla-monitor } zistil nasledujúci únik údajov, ktorý zahŕňa vaše osobné údaje:
email-breach-alert-all-source-title = Zdroj úniku:
email-breach-alert-all-data-points-title = Vaše uniknuté údaje:
email-breach-alert-all-next-steps-lead = Prevedieme vás krok za krokom, ako vyriešiť tento únik údajov.
email-breach-alert-all-next-steps-cta-label = Začíname
email-breach-alert-all-next-steps-button-dashboard = Prejsť na nástenku
