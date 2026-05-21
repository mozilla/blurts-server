# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.


## Email headers

email-header-button-sign-in = Logg inn

## Email footers

email-footer-support-heading = Spørsmål om { -brand-mozilla-monitor }?
email-footer-support-content = Besøk <support-link>brukarstøttesenteret</support-link> vårt for å få hjelp
email-footer-trigger-transactional = Du får denne e-posten fordi du abonnerer på { -brand-mozilla-monitor }.
email-footer-reason-subscriber = Du får denne automatiske e-posten fordi du abonnerer på { -brand-mozilla-monitor }. Om du har teke imot han ved ein feil, treng du ikkje å gjere noko. For meir informasjon kan du besøkje <support-link>{ -brand-mozilla } kundestøtte</support-link>.
email-footer-reason-subscriber-one-time = Du har fått denne eingongs automatiserte e-posten fordi du abonnerer på { -brand-monitor-plus }. Du vil ikkje få fleire e-postar som denne. For meir informasjon kan du besøkje <support-link>{ -brand-mozilla }-brukarstøtte</support-link>.
# Variables:
#    $support_link (string) - The URL the user can visit for support, e.g. "https://support.mozilla.org"
email-footer-support-content-plain =
    Besøk brukarstøttesenteret vårt for hjelp:
    { $support_link }
# Variables:
#   $hibp_link (string) - URL to Have I Been Pwned, e.g. "https://haveibeenpwned.com".
email-footer-source-hibp-plain = Datalekkasjeinformasjon levert av { -brand-HIBP }: { $hibp_link }
email-footer-source-hibp = Informasjon om datalekkasje er levert av <hibp-link>{ -brand-HIBP }</hibp-link>
email-footer-logo-mozilla-alt = { -brand-mozilla }
email-footer-meta-privacy-notice = Personvern
email-unsubscribe-link = <link_to_unsub>Avslutt abonnementet</link_to_unsub>
# Variables:
#   $unsub_link (string) - URL to the unsubscribe page, e.g. "https://monitor.mozilla.org/unsubscribe/...".
email-unsubscribe-link-plain = Avslutt abonnementet: { $unsub_link }
# Firefox Relay is a product name and should not be translated.
-product-name-relay = Firefox Relay
# Mozilla VPN is a product name and should not be translated.
-product-name-vpn = Mozilla VPN
# Button text
verify-email-cta = Stadfest e-post
# Headline of verification email
email-link-expires = Denne lenka går ut om 24 timar

##

# Subject line of email
email-subject-found-breaches = { -product-name } fann informasjonen din i desse datalekkasjane
# Subject line of email
email-subject-no-breaches = { -product-name } fann ingen kjende datalekkasjar
# Subject line of email
email-subject-verify = Stadfest e-posten din for { -product-name }
fxm-warns-you-no-breaches =
    { -product-name } åtvarar deg om datalekkasjar som involverer din personlege informasjon. 
    Så langt har det ikkje hendt. Vi sender deg eit varsel dersom e-postadressa di er i ein ny datalekkasje.

## 2022 email template. HTML tags should not be translated, e.g. `<a>`

# Have I Been Pwned attribution
# Variables:
#   $hibp-link-attr (String) - Link to Have I Been Pwned
email-2022-hibp-attribution = Informasjon om datalekkasje er levert av <a { $hibp-link-attr }>{ -brand-HIBP }</a>

## Verification email

email-verify-heading = Sikre dataa dine frå no av
email-verify-simply-click = Trykk på lenka nedanfor for å fullføre stadfestinga av kontoen din.

## Breach report

email-breach-summary = Her er oversynet ditt over datalekkasjar
# Variables:
#   $email-address (string) - Email address, bolded
email-breach-detected = Søkjeresultat for { $email-address }-kontoen din har oppdaga at e-posten din kan vere utsett. Vil tilrår at du handlar no for å løyse denne datalekkasjen.
email-dashboard-cta = Gå til oversynet

## Breach alert email

email-breach-alert-all-subject = Ny datalekkasje oppdaga
email-breach-alert-all-preview = Vi guidar deg gjennom stega for å løyse det.
email-breach-alert-all-hero-heading = Du er ramma av ein ny datalekkasje
email-breach-alert-all-hero-subheading = Ikkje bekymre deg, vi kan hjelpe deg med å løyse denne eksponeringa
email-breach-alert-all-lead = { -brand-mozilla-monitor } oppdaga følgjande datalekkasje som inkluderer personlege informasjon om deg:
email-breach-alert-all-source-title = Lekkasjekjelde:
email-breach-alert-all-data-points-title = Dine eksponerte data:
email-breach-alert-all-next-steps-lead = Vi guidar deg steg for steg om korleis du løyser denne datalekkasjen.
email-breach-alert-all-next-steps-cta-label = La oss kome i gang
email-breach-alert-all-next-steps-button-dashboard = Gå til oversynet

## Breach alert redesigned strings

# $company-name is the name of the company/site that was breached.
email-breach-alert-all-hero-heading-1 = Detaljar om datalekkasje hos { $company-name }
# $company-name is the name of the company/site that was breached.
# $breach-date is the date of the breach.
email-breach-alert-all-lead-1 = { -brand-mozilla-monitor } fann opplysningane dine i ein datalekkasje hos { $company-name } den { $breach-date }. Du får dette varselet fordi du registrerte deg for <link_to_settings>varsel om datalekkasjar</link_to_settings>.
email-breach-alert-all-source-title-1 = Datalekasjedetaljar
email-breach-alert-company = Firma:
email-breach-alert-date-of-breach = Dato for datalekkasje:
email-breach-alert-info-exposed = Din eksponerte informasjon:
email-breach-alert-next-steps = Neste steg
email-breach-alert-next-steps-description = <sign_in_link>Logg inn</sign_in_link> på kontrollpanelet ditt i { -brand-mozilla-monitor }. Vi rettleiar deg gjennom stega som trengst for å løyse det.
email-breach-alert-all-next-steps-button-resolve-breach-on-dashboard = Løys datalekkasjen i oversynet
email-breach-alert-faqs-title = Vanlege spørsmål (FAQ)
email-breach-alert-faq-qn-1 = Kvifor får eg dette?
email-breach-alert-faq-ans-1 = Du registrerte deg for varsel om datalekkasjar. <link_to_settings>Oppdater innstillingane dine</link_to_settings> når som helst i innstillingar.
email-breach-alert-faq-qn-2 = Kvifor kjenner eg ikkje igjen dette firmaet, eller nettstaden?
email-breach-alert-faq-ans-2 = Han kan ha endra eigarskap eller namn, vere knytt til ein gammal konto eller ein som vart oppretta for deg, eller kome frå ei kjøpt liste med eksponert personleg informasjon.
email-breach-alert-faq-qn-3 = Kva er eit datalekkasjevarsel?
email-breach-alert-faq-ans-3 = Eit varsel som { -brand-mozilla-monitor } sender når personopplysningar du overvakar blir eksponerte, stolne eller kopierte utan løyve.
email-breach-alert-faq-qn-4 = Kva er { -brand-mozilla-monitor }?
email-breach-alert-faq-ans-4 = Ei gratis varslingsteneste for datalekkasjar som åtvarar deg viss nettkontoane dine har vore involverte i ein datalekkasje.
