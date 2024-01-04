# Firefox Monitor is a product name and should not be translated.
-product-name = Firefox Monitor
# Firefox is a brand name and should not be translated.
-brand-name = Firefox

# Firefox Relay is a product name and should not be translated.
-product-name-relay = Firefox Relay
# Mozilla VPN is a product name and should not be translated.
-product-name-vpn = Mozilla VPN

# A Firefox Monitor Report is an emailed statement from Firefox Monitor containing a list of known data breaches where the user’s email address was found amongst the stolen data.
firefox-monitor-report = { -product-name }-rapport
report-date = Rapportdatum:
email-address = E-mailadres:

# A link to legal information about mozilla products.
legal = Juridisch

# Unsubscribe link in email.
email-unsub-link = Abonnement opzeggen

# This string appears in the footer of breach report and breach alert emails.
# { $unsubLink } is a link to the user's dashboard where they can unsubscribe from Monitor
# and uses the text from { email-unsub-link }. { $faqLink } is a link to the 
# Firefox Monitor SUMO page and uses the text from { frequently-asked-questions }.
email-footer-blurb =
    U ontvangt dit e-mailbericht omdat u zich hebt aangemeld voor { -product-name }-waarschuwingen.
    Wilt u deze e-mailberichten niet meer ontvangen? { $unsubLink }. Dit is een geautomatiseerd e-mailbericht. Ga voor ondersteuning naar { $faqLink }.

# This string appears in the footer of verification emails. { $faqLink } is a link
# to the Firefox Monitor SUMO page and uses the text from { frequently-asked-questions }.
email-verify-footer-copy =
    U ontvangt dit e-mailbericht omdat u zich hebt aangemeld voor { -product-name }-waarschuwingen.
    Dit is een geautomatiseerd e-mailbericht. Ga voor ondersteuning naar { $faqLink }.

# Button text
verify-email-cta = E-mailadres verifiëren

# Button text
see-all-breaches = Alle datalekken bekijken

# Headline of verification email
email-link-expires = Deze koppeling verloopt over 24 uur
email-verify-blurb = Verifieer uw e-mailadres om deze toe te voegen aan { -product-name } en meld u aan voor datalekmeldingen.

# Email headline
email-found-breaches-hl = Hierbij een overzicht van eerdere datalekken

## Variables:
##   $userEmail (string) - User email address

# Email headline
email-breach-summary-for-email = Datalekoverzicht voor { $userEmail }

# Email headline
email-no-breaches-hl = { $userEmail } is in 0 bekende datalekken verschenen

# Email headline
email-alert-hl = { $userEmail } is in een bekend datalek verschenen

##

# Subject line of email
email-subject-found-breaches = { -product-name } heeft uw gegevens gevonden in deze datalekken

# Subject line of email
email-subject-no-breaches = { -product-name } heeft geen bekende datalekken gevonden

# Subject line of email
email-subject-verify = Verifieer uw e-mailadres voor { -product-name }

# { $fxmLink } is a link to Firefox Monitor and uses the text from { -product-name }.
learn-more-about-fxm = Meer info over { $fxmLink }

email-sensitive-disclaimer =
    Vanwege de gevoelige aard van dit datalek, zijn de e-mailberichten die hierbij betrokken zijn niet publiekelijk vindbaar.
    U ontvangt deze melding omdat u de geverifieerde eigenaar van dit e-mailadres bent.

fxm-warns-you-no-breaches =
    { -product-name } waarschuwt u voor datalekken met betrekking tot uw persoonlijke gegevens.
    Tot nu toe zijn er geen datalekken gevonden. We sturen u een melding als uw e-mailadres wordt weergegeven in een nieuw datalek.

fxm-warns-you-found-breaches =
    { -product-name } waarschuwt u voor datalekken met betrekking tot uw persoonlijke gegevens.
    U bent ook aangemeld om meldingen te ontvangen als uw e-mailadres wordt weergegeven in een nieuw datalek.

email-breach-alert-blurb =
    { -product-name } waarschuwt u voor datalekken met betrekking tot uw persoonlijke gegevens.
    We hebben zojuist informatie ontvangen over een datalek van een ander bedrijf.

# Section headline
monitor-another-email = Wilt u een ander e-mailadres volgen?

## 2022 email template. HTML tags should not be translated, e.g. `<a>`

email-2022-unsubscribe = U ontvangt dit automatische e-mailbericht als abonnee van { -product-name }. <br>Voel u vrij om uw e-mailvoorkeuren op elk moment <a { $unsubscribe-link-attr }>hier</a> te wijzigen.
# Have I Been Pwned attribution
email-2022-hibp-attribution = Datalek aangeleverd door <a { $hibp-link-attr }>{ -brand-HIBP }</a>

## Monthly email for unresolved breaches. HTML tags should not be translated, e.g. `<br>`

## Monthly email for unresolved breaches. HTML tags should not be translated, e.g. `<br>`
## Variables:
##   $email-address (string) - Email address

email-unresolved-heading = U hebt onopgeloste datalekken
email-unresolved-subhead = Uw e-mail is blootgesteld. <br>Los het meteen op met { -product-name }.
email-is-affected = Uw e-mailadres, { $email-address }, is getroffen door ten minste één datalek
email-more-detail = Meld u nu aan bij { -product-name } om meer details over uw datalekken te zien (inclusief wanneer ze hebben plaatsgevonden en welke gegevens zijn blootgesteld) en ontdek wat u moet doen wanneer uw e-mailadres is blootgesteld aan een datalek.
email-breach-status = Huidige datalekstatus
# table row 1 label
email-monitored = Totaal aantal gecontroleerde e-mailberichten:
# table row 2 label
email-breach-total = Totaal aantal datalekken:
# table row 3 label
email-resolved = Opgeloste datalekken:
# table row 4 label
email-unresolved = Onopgeloste datalekken:
email-resolve-cta = Datalekken oplossen

## Verification email

email-verify-heading = Bescherm uw gegevens, per direct
email-verify-subhead = Verifieer uw e-mailadres om uw gegevens te beschermen na een datalek.
email-verify-simply-click = Klik op de onderstaande koppeling om de verificatie van uw account te voltooien.

## Breach report

## Breach report
## Variables:
##   $email-address (string) - Email address

email-breach-summary = Hier is uw samenvatting van uw datalek
email-breach-detected = Zoekresultaten voor uw account { $email-address } hebben gedetecteerd dat uw e-mailadres mogelijk is gelekt. We raden u aan nu actie te ondernemen om dit datalek op te lossen.
email-no-breach-detected = Geweldig nieuws! We hebben geen datalekken gevonden die van invloed zijn op uw e-mailadres, { $email-address }.
email-dashboard-cta = Naar het dashboard

## Breach alert

email-may-have-been-exposed = Uw e-mailadres is mogelijk gelekt bij een datalek
email-spotted-new-breach = We hebben een nieuw datalek ontdekt
