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
report-date = Rapportdato:
email-address = E-postadresse:

# A link to legal information about mozilla products.
legal = Juridisk

# Unsubscribe link in email.
email-unsub-link = Avslutt abonnement

# This string appears in the footer of breach report and breach alert emails.
# { $unsubLink } is a link to the user's dashboard where they can unsubscribe from Monitor
# and uses the text from { email-unsub-link }. { $faqLink } is a link to the 
# Firefox Monitor SUMO page and uses the text from { frequently-asked-questions }.
email-footer-blurb =
    Du mottar denne e-postmeldingen fordi du registrerte deg for { -product-name }-varsler.
    Vil du ikke lenger ha disse e-postmeldingene? { $unsubLink }. Dette er en automatisert e-post. Hvis du ønsker brukerstøtte, besøk { $faqLink }.

# This string appears in the footer of verification emails. { $faqLink } is a link
# to the Firefox Monitor SUMO page and uses the text from { frequently-asked-questions }.
email-verify-footer-copy =
    Du mottar denne e-postmeldingen fordi du registrerte deg for { -product-name }-varsler. 
    Dette er en automatisert e-post. Hvis du ønsker brukerstøtte, besøk { $faqLink }.

# Button text
verify-email-cta = Bekreft e-post

# Button text
see-all-breaches = Vis alle datalekkasjer

# Headline of verification email
email-link-expires = Denne lenken utløper om 24 timer
email-verify-blurb = Bekreft e-postadressen din for å legge den til { -product-name } og registrere deg for varsler om datalekkasjer.

# Email headline
email-found-breaches-hl = Her er et sammendrag av tidligere datalekkasjer

## Variables:
##   $userEmail (string) - User email address

# Email headline
email-breach-summary-for-email = Datalekkasje-oppsummering for { $userEmail }

# Email headline
email-no-breaches-hl = { $userEmail } dukket opp i 0 kjente datalekkasjer

# Email headline
email-alert-hl = { $userEmail } dukket opp i en ny datalekkasje

##

# Subject line of email
email-subject-found-breaches = { -product-name } fant din informasjon i disse datalekkasjene

# Subject line of email
email-subject-no-breaches = { -product-name } fant ingen kjente datalekkasjer

# Subject line of email
email-subject-verify = Bekreft e-postadressen din for { -product-name }

# { $fxmLink } is a link to Firefox Monitor and uses the text from { -product-name }.
learn-more-about-fxm = Les mer om { $fxmLink }

email-sensitive-disclaimer =
    På grunn av denne datalekkasjens følsomme natur, er de involverte e-postadressene ikke offentlig tilgjengelig. 
    Du mottar dette varselet fordi du er den bekreftede eieren av denne e-postadressen.

fxm-warns-you-no-breaches =
    { -product-name } advarer deg om datalekkasjer som involverer din personlige informasjon. 
    Så langt har det ikke hendt. Vi sender deg et varsel hvis e-postadressen din vises i en ny datalekkasje.

fxm-warns-you-found-breaches =
    { -product-name } advarer deg om datalekkasjer som involverer din personlige informasjon. 
    Du er også registrert for å motta varsler hvis e-postadressen din opptrer i en ny datalekkasje.

email-breach-alert-blurb =
    { -product-name } advarer deg om datalekkasjer som involverer din personlige informasjon. 
    Vi har nettopp mottatt detaljer om et annet selskaps datalekkasje.

# Section headline
monitor-another-email = Vil du overvåke en annen e-postadresse?

## 2022 email template. HTML tags should not be translated, e.g. `<a>`

## Monthly email for unresolved breaches. HTML tags should not be translated, e.g. `<br>`
## Variables:
##   $email-address (string) - Email address

## Verification email

## Breach report
## Variables:
##   $email-address (string) - Email address

## Breach alert

