# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.

# Firefox Monitor is a product name and should not be translated.
-product-name = Firefox Monitor
# Firefox is a brand name and should not be translated.
-brand-name = Firefox

# Firefox Relay is a product name and should not be translated.
-product-name-relay = Firefox Relay
# Mozilla VPN is a product name and should not be translated.
-product-name-vpn = Mozilla VPN

# A link to legal information about mozilla products.
legal = Juridisk informasjon

# Unsubscribe link in email.
email-unsub-link = Avslutt abonnementet

# This string appears in the footer of breach report and breach alert emails.
# { $unsubLink } is a link to the user's dashboard where they can unsubscribe from Monitor
# and uses the text from { email-unsub-link }. { $faqLink } is a link to the 
# Firefox Monitor SUMO page and uses the text from { frequently-asked-questions }.
email-footer-blurb =
    Du får denne e-postmeldinga fordi du registrerte deg for { -product-name }-varsel.
    Vil du ikkje lenger ha desse e-postmeldingane? { $unsubLink }. Dette er ein automatisert e-post. Dersom du ønskjer brukarstøtte, gå til { $faqLink }.

# Button text
verify-email-cta = Stadfest e-post

# Headline of verification email
email-link-expires = Denne lenka går ut om 24 timar

## Variables:
##   $userEmail (string) - User email address

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

email-breach-alert-blurb =
    { -product-name } åtvarar deg om datalekkasjer som involverer din personlege informasjon. 
    Vi har nettopp fått detaljer om ein datalekkasje til eit anna selskap.

## 2022 email template. HTML tags should not be translated, e.g. `<a>`

# Have I Been Pwned attribution
email-2022-hibp-attribution = Datalekkasjedataa er levert av <a { $hibp-link-attr }>{ -brand-HIBP }</a>

## Monthly email for unresolved breaches. HTML tags should not be translated, e.g. `<br>`

## Monthly email for unresolved breaches. HTML tags should not be translated, e.g. `<br>`
## Variables:
##   $email-address (string) - Email address

email-unresolved-heading = Du har uløyste datalekkasjar
email-unresolved-subhead = E-postadressa di er utsett. <br>Løys det med ein gong { -product-name }.
email-is-affected = E-posten din, { $email-address }, er påverka av minst ein datalekkasje
email-more-detail = Logg inn no på { -product-name } for å sjå meir om datalekkasjane dine (inkludert når dei skjedde, og kva for data som vart avslørt), og les kva du skal gjere når e-postadressa di er utsett for ein datalekkasje.
email-breach-status = Gjeldande datalekkasjestatus
# table row 1 label
email-monitored = Totalt antal overvaka e-postadreser:
# table row 2 label
email-breach-total = Totalt antal datalekkasjar:
# table row 3 label
email-resolved = Løyste datalekkasjar:
# table row 4 label
email-unresolved = Uløyste datalekkasjar:
email-resolve-cta = Løys datalekkasjar

## Verification email

email-verify-heading = Sikre dataa dine frå no av
email-verify-subhead = Stadfest e-postadressa di for å byrje å verne dine data etter ein datalekkasje.
email-verify-simply-click = Trykk på lenka nedanfor for å fullføre stadfestinga av kontoen din.

## Breach report

## Breach report
## Variables:
##   $email-address (string) - Email address

email-breach-summary = Her er oversynet ditt over datalekkasjar
email-breach-detected = Søkjeresultat for { $email-address }-kontoen din har oppdaga at e-posten din kan vere utsett. Vil tilrår at du handlar no for å løyse denne datalekkasjen.
email-dashboard-cta = Gå til oversynet

## Breach alert

email-spotted-new-breach = Vi har oppdaga ein ny datalekkasje
