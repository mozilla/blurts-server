# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.


## Email headers

email-header-button-sign-in = Anmelden

## Email footers

email-footer-support-heading = Fragen zu { -brand-mozilla-monitor }?
email-footer-support-content = Besuchen Sie unser <support-link>Hilfe-Zentrum</support-link>, um Unterstützung zu erhalten
email-footer-trigger-transactional = Sie erhalten diese E-Mail als Abonnent von { -brand-mozilla-monitor }.
email-footer-reason-subscriber = Sie erhalten diese automatische E-Mail als Abonnent von { -brand-mozilla-monitor }. Wenn Sie diese irrtümlich erhalten haben, müssen Sie nichts tun. Weitere Informationen erhalten Sie bei der <support-link>{ -brand-mozilla }-Hilfe</support-link>.
email-footer-reason-subscriber-one-time = Sie haben diese einmalige automatische E-Mail erhalten, weil Sie { -brand-monitor-plus } abonniert haben. Sie erhalten keine weiteren solche E-Mails. Weitere Informationen erhalten Sie bei der <support-link>{ -brand-mozilla }-Hilfe</support-link>.
# Variables:
#    $support_link (string) - The URL the user can visit for support, e.g. "https://support.mozilla.org"
email-footer-support-content-plain =
    Besuchen Sie unser Hilfe-Center, um Hilfe zu erhalten:
    { $support_link }
# Variables:
#   $hibp_link (string) - URL to Have I Been Pwned, e.g. "https://haveibeenpwned.com".
email-footer-source-hibp-plain = Die Informationen zu Datenlecks wurden von { -brand-HIBP } bereitgestellt: { $hibp_link }
email-footer-source-hibp = Die Informationen zu Datenlecks wurden bereitgestellt von <hibp-link>{ -brand-HIBP }</hibp-link>
email-footer-logo-mozilla-alt = { -brand-mozilla }
email-footer-meta-privacy-notice = Datenschutz
# Firefox Relay is a product name and should not be translated.
-product-name-relay = Firefox Relay
# Mozilla VPN is a product name and should not be translated.
-product-name-vpn = Mozilla VPN
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
    { " " }{ -product-name } warnt dich vor Datenlecks, die deine persönlichen Daten betreffen.
    Bisher wurden keine Datenlecks festgestellt. Wir senden dir eine Benachrichtigung, wenn deine E-Mail-Adresse in einem neuen Datenleck auftaucht.

## 2022 email template. HTML tags should not be translated, e.g. `<a>`

# Have I Been Pwned attribution
# Variables:
#   $hibp-link-attr (String) - Link to Have I Been Pwned
email-2022-hibp-attribution = Die Informationen zu Datenlecks wurden bereitgestellt von <a { $hibp-link-attr }>{ -brand-HIBP }</a>

## Verification email

email-verify-heading = Schützen Sie Ihre Daten ab sofort
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
