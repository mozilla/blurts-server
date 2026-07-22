# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.


## Email headers

email-header-button-sign-in = Oanmelde

## Email footers

email-footer-support-heading = Fragen oer { -brand-mozilla-monitor }?
email-footer-support-content = Besykje ús <support-link>Stipesintrum</support-link> foar help
email-footer-trigger-transactional = Jo ûntfange dit e-mailberjocht as abonnee fan { -brand-mozilla-monitor }.
email-footer-reason-subscriber = Jo ûntfange dit automatyske e-mailberjocht as abonnee fan { -brand-mozilla-monitor }. As jo it per fersin ûntfongen hawwe, hoege jo gjin aksje te ûndernimmen. Besykje foar mear ynformaasje <support-link>{ -brand-mozilla } Support</support-link>.
email-footer-reason-subscriber-one-time = Jo ûntfange dit ienmalige automatyske e-mailberjocht omdat jo abonnearre binne op { -brand-monitor-plus }. As jo it per fersin ûntfongen hawwe, hoege jo gjin aksje te ûndernimmen. Besykje foar mear ynformaasje <support-link>{ -brand-mozilla } Support</support-link>.
# Variables:
#    $support_link (string) - The URL the user can visit for support, e.g. "https://support.mozilla.org"
email-footer-support-content-plain =
    Besykje ús Stipesintrum foar help:
    { $support_link }
# Variables:
#   $hibp_link (string) - URL to Have I Been Pwned, e.g. "https://haveibeenpwned.com".
email-footer-source-hibp-plain = Datalek oanlevere troch { -brand-HIBP }: { $hibp_link }
email-footer-source-hibp = Datalek oanlevere troch <hibp-link>{ -brand-HIBP }</hibp-link>
email-footer-logo-mozilla-alt = { -brand-mozilla }
email-footer-meta-privacy-notice = Privacy
email-unsubscribe-link = <link_to_unsub>Ofmelde</link_to_unsub>
# Variables:
#   $unsub_link (string) - URL to the unsubscribe page, e.g. "https://monitor.mozilla.org/unsubscribe/...".
email-unsubscribe-link-plain = Ofmelde: { $unsub_link }
# Firefox Relay is a product name and should not be translated.
-product-name-relay = Firefox Relay
# Mozilla VPN is a product name and should not be translated.
-product-name-vpn = Mozilla VPN
# Button text
verify-email-cta = E-mailadres ferifiearje
# Headline of verification email
email-link-expires = Dizze keppeling ferrint oer 24 oeren

##

# Subject line of email
email-subject-found-breaches = { -product-name } hat jo gegevens fûn yn dizze datalekken
# Subject line of email
email-subject-no-breaches = { -product-name } hat gjin bekende datalekken fûn
# Subject line of email
email-subject-verify = Ferifiearje jo e-mailadres foar { -product-name }
fxm-warns-you-no-breaches =
    { -product-name } warskôget jo foar datalekken mei betrekking ta jo persoanlike gegevens.
    Oant no ta binne der gjin datalekken fûn. Wy stjoere jo in melding as jo e-mailadres werjûn wurdt yn in nij datalek.

## 2022 email template. HTML tags should not be translated, e.g. `<a>`

# Have I Been Pwned attribution
# Variables:
#   $hibp-link-attr (String) - Link to Have I Been Pwned
email-2022-hibp-attribution = Datalek oanlevere troch <a { $hibp-link-attr }>{ -brand-HIBP }</a>

## Verification email

email-verify-heading = Beskermje jo gegevens, daliks
email-verify-simply-click = Klik op de ûndersteande keppeling om de ferifikaasje fan jo account te foltôgjen.

## Breach report

email-breach-summary = Hjir is jo gearfetting fan jo datalek
# Variables:
#   $email-address (string) - Email address, bolded
email-breach-detected = Sykresultaten foar jo account { $email-address } hawwe ûntdutsen dat jo e-mailadres mooglik lekt is. Wy rekommandearje oan dat jo no hannelje om dit datalek op te lossen.
email-dashboard-cta = Nei it dashboerd

## Breach alert email

email-breach-alert-all-subject = Nij datalek detektearre
email-breach-alert-all-preview = Wy liede jo troch de stappen om dit op te lossen.
email-breach-alert-all-hero-heading = Jo binne troffen troch in nij datalek
email-breach-alert-all-hero-subheading = Gjin soargen, wy kinne jo helpe om dit lek op te lossen
email-breach-alert-all-lead = { -brand-mozilla-monitor } hat it folgjende datalek ûntdutsen dat jo persoanlike gegevens befettet:
email-breach-alert-all-source-title = Boarne fan datalek:
email-breach-alert-all-data-points-title = Jo lekte gegevens:
email-breach-alert-all-next-steps-lead = Wy helpe jo stap foar stap hoe’t jo dit datalek oplosse kinne.
email-breach-alert-all-next-steps-cta-label = Litte wy begjinne
email-breach-alert-all-next-steps-button-dashboard = Nei it dashboerd

## Breach alert redesigned strings

# $company-name is the name of the company/site that was breached.
email-breach-alert-all-hero-heading-1 = Details oer { $company-name }-datalekken
# $company-name is the name of the company/site that was breached.
# $breach-date is the date of the breach.
email-breach-alert-all-lead-1 = { -brand-mozilla-monitor } hat op { $breach-date } jo gegevens fûn yn in { $company-name }-datalek. Jo krije dizze melding omdat jo jo oanmeld hawwe foar <link_to_settings>meldingen fan datalekken</link_to_settings>.
email-breach-alert-all-source-title-1 = Datalekdetails
email-breach-alert-company = Bedriuw:
email-breach-alert-date-of-breach = Datum fan datalek:
email-breach-alert-info-exposed = Jo lekte gegevens:
email-breach-alert-next-steps = Folgjende stappen
email-breach-alert-next-steps-description = <sign_in_link>Meld jo oan</sign_in_link> by jo { -brand-mozilla-monitor }-dashboerd. Wy liede jo troch de stappen dy’t nedich binne om dit op te lossen.
email-breach-alert-all-next-steps-button-resolve-breach-on-dashboard = Datalek op dashboerd oplosse
email-breach-alert-faqs-title = FAQ’s
email-breach-alert-faq-qn-1 = Wêrom ûntfang ik dit?
email-breach-alert-faq-ans-1 = Jo hawwe jo oanmeld foar warskôgingen oer datalekken. <link_to_settings>Wurkje op elk winske momint jo foarkarren by</link_to_settings> yn jo ynstellingen.
email-breach-alert-faq-qn-2 = Wêrom werken ik dit bedriuw of dizze website net?
email-breach-alert-faq-ans-2 = Dizze kin fan eigener of namme feroare wêze, in âlde of foar jo oanmakke account oanbelangje, of ôfkomstich wêze fan in kochte list mei lekte persoanlike gegevens.
email-breach-alert-faq-qn-3 = Wat is in datalekwarskôging?
email-breach-alert-faq-ans-3 = In melding dy’t { -brand-mozilla-monitor } ferstjoert wannear’t persoanlike gegevens dy’t jo beweitsje sûnder tastimming lekt, stellen of kopiearre wurde.
email-breach-alert-faq-qn-4 = Wat is { -brand-mozilla-monitor }?
email-breach-alert-faq-ans-4 = In fergeze meldtsjinst foar datalekken dy’t jo warskôgje as jo online accounts belutsen binne by in datalek.
