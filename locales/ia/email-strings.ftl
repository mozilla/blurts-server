# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.


## Email headers

email-header-button-sign-in = Aperir session

## Email footers

email-footer-support-heading = Questiones re { -brand-mozilla-monitor }?
email-footer-support-content = Visita nostre <support-link>Centro de supporto</support-link> pro adjuta
email-footer-trigger-transactional = Tu recipe iste email como abonato de { -brand-mozilla-monitor }.
email-footer-reason-subscriber = Tu recipe iste email automatisate como abonato de { -brand-mozilla-monitor }. Si tu ha recipite illo per error, nulle action es necesse. Pro altere informationes, visita le <support-link>Supporto de { -brand-mozilla }</support-link>.
email-footer-reason-subscriber-one-time = Tu ha recipite iste email automatisate de un-vice perque tu es abonate a { -brand-monitor-plus }. Tu non recipera alcun ulterior email assi. Pro altere informationes, visita le <support-link>Supporto de { -brand-mozilla }</support-link>.
# Variables:
#    $support_link (string) - The URL the user can visit for support, e.g. "https://support.mozilla.org"
email-footer-support-content-plain =
    Visita nostre centro de supporto pro adjuta:
    { $support_link }
# Variables:
#   $hibp_link (string) - URL to Have I Been Pwned, e.g. "https://haveibeenpwned.com".
email-footer-source-hibp-plain = Violation de datos fornite per { -brand-HIBP }: { $hibp_link }
email-footer-source-hibp = Violation de datos fornite per <hibp-link>{ -brand-HIBP }</hibp-link>
email-footer-logo-mozilla-alt = { -brand-mozilla }
email-footer-meta-privacy-notice = Confidentialitate
# Firefox Relay is a product name and should not be translated.
-product-name-relay = Firefox Relay
# Mozilla VPN is a product name and should not be translated.
-product-name-vpn = Mozilla VPN
# Button text
verify-email-cta = Verificar le email
# Headline of verification email
email-link-expires = Iste ligamine expira in 24 horas

##

# Subject line of email
email-subject-found-breaches = { -product-name } trovava i tu informationes in le violationes sequente
# Subject line of email
email-subject-no-breaches = { -product-name } non ha trovate alcun violation cognoscite
# Subject line of email
email-subject-verify = Verifica tu adresse de e-mail pro { -product-name }
fxm-warns-you-no-breaches =
    { -product-name } te adverti sur violationes de datos que implica tu informationes personal. 
    Presentemente, nulle violationes ha essite trovate. Nos te inviara un aviso si tu adresse de e-mail appare in un nove violation.

## 2022 email template. HTML tags should not be translated, e.g. `<a>`

# Have I Been Pwned attribution
# Variables:
#   $hibp-link-attr (String) - Link to Have I Been Pwned
email-2022-hibp-attribution = Violation de datos fornite per <a { $hibp-link-attr }>{ -brand-HIBP }</a>

## Verification email

email-verify-heading = Salveguarda tu datos, desde subito
email-verify-simply-click = Simplemente clicca le ligamine infra pro finir de verificar tu conto.

## Breach report

email-breach-summary = Ecce tu summario de violationes de datos
# Variables:
#   $email-address (string) - Email address, bolded
email-breach-detected = Le resultatos del recerca pro tu conto { $email-address } ha disvelate que tu email forsan ha essite exponite. Nos consilia que tu ora age pro resolver iste violation.
email-dashboard-cta = Va al pannello de controlo

## Breach alert email

email-breach-alert-all-subject = Nove violation de datos disvelate
email-breach-alert-all-preview = Nos te guidara passo a passo pro resolver lo.
email-breach-alert-all-hero-heading = Te concerne un nove violation de datos
email-breach-alert-all-hero-subheading = Non te preoccupa, nos pote adjutar te a resolver iste exposition
email-breach-alert-all-lead = { -brand-mozilla-monitor } discoperiva le sequente violation de datos que include tu informationes personal:
email-breach-alert-all-source-title = Fonte del violation:
email-breach-alert-all-data-points-title = Tu datos exponite:
email-breach-alert-all-next-steps-lead = Nos te guidara passo a passo re como resolver iste violation de datos.
email-breach-alert-all-next-steps-cta-label = Que nos comencia
email-breach-alert-all-next-steps-button-dashboard = Va al pannello de controlo
