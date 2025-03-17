# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.


## Email headers

email-header-logo-alt = { -brand-mozilla-monitor }
email-header-button-sign-in = Prijava

## Email footers

email-footer-support-heading = Vprašanja o { -brand-mozilla-monitor(sklon: "mestnik") }?
email-footer-support-content = Za pomoč obiščite naše <support-link>središče za podporo</support-link>
email-footer-trigger-transactional = To e-poštno sporočilo ste prejeli kot naročnik na { -brand-mozilla-monitor(sklon: "tožilnik") }.
email-footer-source-hibp = Podatke o krajah podatkov posredoval <hibp-link>{ -brand-HIBP }</hibp-link>
email-footer-logo-mozilla-alt = { -brand-mozilla }
email-footer-meta-privacy-notice = Zasebnost
# Firefox Relay is a product name and should not be translated.
-product-name-relay = Firefox Relay
# Mozilla VPN is a product name and should not be translated.
-product-name-vpn = Mozilla VPN
# A link to legal information about mozilla products.
legal = Pravno obvestilo
# Button text
verify-email-cta = Potrdi e-poštni naslov
# Headline of verification email
email-link-expires = Ta povezava poteče v naslednjih 24 urah

##

# Subject line of email
email-subject-found-breaches = { -product-name } je našel vaše podatke v teh krajah
# Subject line of email
email-subject-no-breaches = { -product-name } ni našel nobenih znanih kraj
# Subject line of email
email-subject-verify = Potrdite e-pošto za { -product-name }
fxm-warns-you-no-breaches =
    { -product-name } vas opozori na kraje podatkov, ki vključujejo vaše osebne podatke.
    Do zdaj ni bilo ugotovljenih nobenih kraj. Če se bo vaš e-poštni naslov pojavil v novi kraji, vas bomo opozorili.
email-breach-alert-blurb =
    { -product-name } vas opozarja o krajah podatkov, ki vključujejo vaše osebne podatke.
    Pravkar smo prejeli podrobnosti o novi kraji podatkov.

## 2022 email template. HTML tags should not be translated, e.g. `<a>`

# Have I Been Pwned attribution
# Variables:
#   $hibp-link-attr (String) - Link to Have I Been Pwned
email-2022-hibp-attribution = Podatke o krajah zagotavlja <a { $hibp-link-attr }>{ -brand-HIBP }</a>

## Verification email

email-verify-heading = Začnite varovati svoje podatke
email-verify-subhead = Potrdite svoj e-poštni naslov in začnite varovati svoje podatke po kraji.
email-verify-simply-click = Preprosto kliknite spodnjo povezavo, da dokončate preverjanje računa.

## Breach report

email-breach-summary = Tukaj je povzetek kraje podatkov
# Variables:
#   $email-address (string) - Email address, bolded
email-breach-detected = Rezultati iskanja za vaš račun { $email-address } kažejo, da je bil vaš e-poštni naslov morda izpostavljen. Priporočamo, da takoj ukrepate in razrešite to krajo.
email-dashboard-cta = Pojdi na nadzorno ploščo

## Breach alert email

email-breach-alert-all-subject = Zaznana nova kraja podatkov
email-breach-alert-all-preview = Vodili vas bomo skozi korake za rešitev težave.
email-breach-alert-all-hero-heading = Bili ste vpleteni v novo krajo podatkov
email-breach-alert-all-hero-subheading = Brez skrbi, pomagamo vam lahko odpraviti to izpostavljenost
email-breach-alert-all-lead = { -brand-mozilla-monitor } je odkril naslednjo krajo podatkov, ki vključujejo vaše osebne podatke:
email-breach-alert-all-source-title = Vir kraje podatkov:
email-breach-alert-all-data-points-title = Vaši izpostavljeni podatki:
email-breach-alert-all-next-steps-lead = Korak za korakom vas bomo vodili, kako razrešiti krajo podatkov.
email-breach-alert-all-next-steps-cta-label = Pa začnimo
email-breach-alert-all-next-steps-button-dashboard = Pojdi na nadzorno ploščo
