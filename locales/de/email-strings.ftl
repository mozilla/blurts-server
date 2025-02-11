# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.


## Email headers

email-header-logo-alt = { -brand-mozilla-monitor }
email-header-button-sign-in = Anmelden

## Email footers

email-footer-support-heading = Fragen zu { -brand-mozilla-monitor }?
email-footer-support-content = Besuchen Sie unser <support-link>Hilfe-Zentrum</support-link>, um Unterstützung zu erhalten
email-footer-trigger-transactional = Sie erhalten diese E-Mail als Abonnent von { -brand-mozilla-monitor }.
email-footer-source-hibp = Die Informationen zu Datenlecks wurden bereitgestellt von <hibp-link>{ -brand-HIBP }</hibp-link>
email-footer-logo-mozilla-alt = { -brand-mozilla }
email-footer-meta-privacy-notice = Datenschutz
# Firefox Relay is a product name and should not be translated.
-product-name-relay = Firefox Relay
# Mozilla VPN is a product name and should not be translated.
-product-name-vpn = Mozilla VPN
# A link to legal information about mozilla products.
legal = Rechtliches
# Button text
verify-email-cta = E-Mail-Adresse bestätigen
# Headline of verification email
email-link-expires = Dieser Link läuft in 24 Stunden ab

##

# Subject line of email
email-subject-found-breaches = { -product-name } hat Ihre Daten in den folgenden Datenlecks gefunden
# Subject line of email
email-subject-no-breaches = { -product-name } hat keine bekannten Datenlecks gefunden
# Subject line of email
email-subject-verify = Bestätige deine E-Mail-Adresse für { -product-name }
fxm-warns-you-no-breaches =
     { -product-name } warnt dich vor Datenlecks, die deine persönlichen Daten betreffen.
    Bisher wurden keine Datenlecks festgestellt. Wir senden dir eine Benachrichtigung, wenn deine E-Mail-Adresse in einem neuen Datenleck auftaucht.
email-breach-alert-blurb =
    { -product-name } warnt dich vor Datenlecks, die deine persönlichen Daten betreffen.
    Wir haben soeben Informationen über ein Datenleck bei einem anderen Unternehmen erhalten.

## 2022 email template. HTML tags should not be translated, e.g. `<a>`

# Have I Been Pwned attribution
# Variables:
#   $hibp-link-attr (String) - Link to Have I Been Pwned
email-2022-hibp-attribution = Die Informationen zu Datenlecks wurden bereitgestellt von <a { $hibp-link-attr }>{ -brand-HIBP }</a>

## Verification email

email-verify-heading = Schützen Sie Ihre Daten ab sofort
email-verify-subhead = Bestätigen Sie Ihre E-Mail-Adresse, um Ihre Daten nach einem Leck zu schützen.
email-verify-simply-click = Klicken Sie einfach auf den folgenden Link, um die Verifizierung Ihres Kontos abzuschließen.

## Breach report

email-breach-summary = Hier ist die Zusammenfassung Ihrer Datenlecks
# Variables:
#   $email-address (string) - Email address, bolded
email-breach-detected = Suchergebnisse für Ihr Konto { $email-address } haben gezeigt, dass Ihre E-Mail-Adresse möglicherweise offengelegt wurde. Wir empfehlen Ihnen, jetzt zu handeln, um dieses Datenleck zu beheben.
email-dashboard-cta = Zur Übersicht

## Breach alert email

email-breach-alert-all-subject = Neues Datenleck erkannt
email-breach-alert-all-preview = Wir führen Sie durch die Schritte, um das Problem zu lösen.
email-breach-alert-all-hero-heading = Sie sind von einem neuen Datenleck betroffen
email-breach-alert-all-hero-subheading = Keine Sorge, wir können Ihnen bei der Lösung dieses Problems helfen
email-breach-alert-all-lead = { -brand-mozilla-monitor } hat das folgenden Datenleck entdeckt, das Ihre persönlichen Daten betrifft:
email-breach-alert-all-source-title = Quelle des Datenlecks:
email-breach-alert-all-data-points-title = Ihre offengelegten Daten:
email-breach-alert-all-next-steps-lead = Wir führen Sie durch die Schritte zur Behebung dieses Datenlecks.
email-breach-alert-all-next-steps-cta-label = Erste Schritte
email-breach-alert-all-next-steps-button-dashboard = Zur Übersicht
