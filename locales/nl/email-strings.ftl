# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.


## Email headers

email-header-button-sign-in = Aanmelden

## Email footers

email-footer-support-heading = Vragen over { -brand-mozilla-monitor }?
email-footer-support-content = Bezoek ons <support-link>Ondersteuningscentrum</support-link> voor hulp
email-footer-trigger-transactional = U ontvangt dit e-mailbericht als abonnee van { -brand-mozilla-monitor }.
email-footer-reason-subscriber = U ontvangt dit geautomatiseerde e-mailbericht als abonnee van { -brand-mozilla-monitor }. Als u dit ten onrechte hebt ontvangen, hoeft u niets te doen. Bezoek voor meer informatie <support-link>{ -brand-mozilla } Support</support-link>.
email-footer-reason-subscriber-one-time = U ontvangt dit eenmalige geautomatiseerde e-mailbericht omdat u bent geabonneerd op { -brand-monitor-plus }. U ontvangt geen e-mailberichten meer zoals dit. Bezoek voor meer informatie <support-link>{ -brand-mozilla } Support</support-link>.
# Variables:
#    $support_link (string) - The URL the user can visit for support, e.g. "https://support.mozilla.org"
email-footer-support-content-plain =
    Bezoek ons Ondersteuningscentrum voor hulp:
    { $support_link }
# Variables:
#   $hibp_link (string) - URL to Have I Been Pwned, e.g. "https://haveibeenpwned.com".
email-footer-source-hibp-plain = Datalekgegevens aangeleverd door { -brand-HIBP }: { $hibp_link }
email-footer-source-hibp = Datalek aangeleverd door <hibp-link>{ -brand-HIBP }</hibp-link>
email-footer-logo-mozilla-alt = { -brand-mozilla }
email-footer-meta-privacy-notice = Privacy
# Firefox Relay is a product name and should not be translated.
-product-name-relay = Firefox Relay
# Mozilla VPN is a product name and should not be translated.
-product-name-vpn = Mozilla VPN
# Button text
verify-email-cta = E-mailadres verifiëren
# Headline of verification email
email-link-expires = Deze koppeling verloopt over 24 uur

##

# Subject line of email
email-subject-found-breaches = { -product-name } heeft uw gegevens gevonden in deze datalekken
# Subject line of email
email-subject-no-breaches = { -product-name } heeft geen bekende datalekken gevonden
# Subject line of email
email-subject-verify = Verifieer uw e-mailadres voor { -product-name }
fxm-warns-you-no-breaches =
    { -product-name } waarschuwt u voor datalekken met betrekking tot uw persoonlijke gegevens.
    Tot nu toe zijn er geen datalekken gevonden. We sturen u een melding als uw e-mailadres wordt weergegeven in een nieuw datalek.

## 2022 email template. HTML tags should not be translated, e.g. `<a>`

# Have I Been Pwned attribution
# Variables:
#   $hibp-link-attr (String) - Link to Have I Been Pwned
email-2022-hibp-attribution = Datalek aangeleverd door <a { $hibp-link-attr }>{ -brand-HIBP }</a>

## Verification email

email-verify-heading = Bescherm uw gegevens, per direct
email-verify-simply-click = Klik op de onderstaande koppeling om de verificatie van uw account te voltooien.

## Breach report

email-breach-summary = Hier is uw samenvatting van uw datalek
# Variables:
#   $email-address (string) - Email address, bolded
email-breach-detected = Zoekresultaten voor uw account { $email-address } hebben gedetecteerd dat uw e-mailadres mogelijk is gelekt. We raden u aan nu actie te ondernemen om dit datalek op te lossen.
email-dashboard-cta = Naar het dashboard

## Breach alert email

email-breach-alert-all-subject = Nieuw datalek gedetecteerd
email-breach-alert-all-preview = We leiden u door de stappen om dit op te lossen.
email-breach-alert-all-hero-heading = U bent getroffen door een nieuw datalek
email-breach-alert-all-hero-subheading = Geen zorgen, we kunnen u helpen dit lek op te lossen
email-breach-alert-all-lead = { -brand-mozilla-monitor } heeft het volgende datalek ontdekt dat uw persoonlijke gegevens bevat:
email-breach-alert-all-source-title = Bron van datalek:
email-breach-alert-all-data-points-title = Uw gelekte gegevens:
email-breach-alert-all-next-steps-lead = We helpen u stap voor stap hoe u dit datalek kunt oplossen.
email-breach-alert-all-next-steps-cta-label = Laten we beginnen
email-breach-alert-all-next-steps-button-dashboard = Naar het dashboard
