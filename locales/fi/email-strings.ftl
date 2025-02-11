# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.


## Email headers

email-header-logo-alt = { -brand-mozilla-monitor }
email-header-button-sign-in = Kirjaudu sisään

## Email footers

email-footer-support-heading = Onko sinulla kysyttävää { -brand-mozilla-monitor }iin liittyen?
email-footer-support-content = Vieraile <support-link>tukikeskuksessamme</support-link> saadaksesi apua
email-footer-trigger-transactional = Saat tämän sähköpostin { -brand-mozilla-monitor }-palvelun tilaajana.
email-footer-source-hibp = Vuototiedot tarjoaa <hibp-link>{ -brand-HIBP }</hibp-link>
email-footer-logo-mozilla-alt = { -brand-mozilla }
email-footer-meta-privacy-notice = Yksityisyys
# Firefox Relay is a product name and should not be translated.
-product-name-relay = Firefox Relay
# Mozilla VPN is a product name and should not be translated.
-product-name-vpn = Mozilla VPN
# A link to legal information about mozilla products.
legal = Juridiset asiat
# Button text
verify-email-cta = Vahvista sähköposti
# Headline of verification email
email-link-expires = Tämä linkki vanhenee 24 tunnissa

##

# Subject line of email
email-subject-found-breaches = { -product-name } löysi tietojasi näistä vuodoista
# Subject line of email
email-subject-no-breaches = { -product-name } ei löytänyt tunnettuja vuotoja
# Subject line of email
email-subject-verify = Vahvista sähköpostiosoitteesi { -product-name }iin
fxm-warns-you-no-breaches =
    { -product-name } varoittaa sinua tietovuodoista, kun joudut sellaisen uhriksi. 
    Toistaiseksi vuotoja ei ole löytynyt. Lähetämme sinulle hälytyksen, jos sähköpostiosoitteesi ilmenee uudessa vuodossa.
email-breach-alert-blurb =
    { -product-name } varoittaa sinua tietovuodoista, kun joudut sellaisen uhriksi. 
    Saimme yksityiskohtia yritykseen kohdistuneesta tietovuodosta.

## 2022 email template. HTML tags should not be translated, e.g. `<a>`

# Have I Been Pwned attribution
# Variables:
#   $hibp-link-attr (String) - Link to Have I Been Pwned
email-2022-hibp-attribution = Vuototiedot tarjoaa <a { $hibp-link-attr }>{ -brand-HIBP }</a>

## Verification email

email-verify-heading = Suojaa tietosi heti
email-verify-subhead = Vahvista sähköpostiosoitteesi, jotta voit aloittaa tietojesi suojaamisen tietovuodon jälkeen.
email-verify-simply-click = Viimeistele tilisi vahvistaminen napsauttamalla alla olevaa linkkiä.

## Breach report

email-breach-summary = Tässä on yhteenveto tietovuodosta
# Variables:
#   $email-address (string) - Email address, bolded
email-breach-detected = Tiliäsi { $email-address } koskevissa hakutuloksissa havaittiin, että sähköpostiosoitteesi on saattanut paljastua. Suosittelemme, että toimit nyt tämän vuodon ratkaisemiseksi.
email-dashboard-cta = Siirry kojelaudalle

## Breach alert email

email-breach-alert-all-subject = Uusi tietovuoto havaittu
email-breach-alert-all-hero-heading = Olet joutunut uuden tietovuodon joukkoon
email-breach-alert-all-lead = { -brand-mozilla-monitor } havaitsi seuraavan tietovuodon, joka sisältää henkilökohtaisia tietojasi:
email-breach-alert-all-source-title = Vuodon lähde:
email-breach-alert-all-data-points-title = Altistuneet tietosi:
email-breach-alert-all-next-steps-lead = Opastamme sinua vaihe vaiheelta tämän tietovuodon ratkaisemisessa.
email-breach-alert-all-next-steps-cta-label = Aloitetaan
email-breach-alert-all-next-steps-button-dashboard = Siirry kojelaudalle
