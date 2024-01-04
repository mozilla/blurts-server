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
report-date = Dato for rapport:
email-address = Mailadresse:

# A link to legal information about mozilla products.
legal = Juridisk

# Unsubscribe link in email.
email-unsub-link = Afslut abonnementet

# This string appears in the footer of breach report and breach alert emails.
# { $unsubLink } is a link to the user's dashboard where they can unsubscribe from Monitor
# and uses the text from { email-unsub-link }. { $faqLink } is a link to the 
# Firefox Monitor SUMO page and uses the text from { frequently-asked-questions }.
email-footer-blurb = Du modtager denne mail, fordi du har tilmeldt dig alarmer fra { -product-name }. { $unsubLink }, hvis du ikke længere ønsker at modtage disse mails. Dette er en automatisk udsendt mail. Hvis du ønsker support, så besøg siden { $faqLink }.

# This string appears in the footer of verification emails. { $faqLink } is a link
# to the Firefox Monitor SUMO page and uses the text from { frequently-asked-questions }.
email-verify-footer-copy = Du modtager denne mail, fordi du har tilmeldt dig alarmer fra { -product-name }. Dette er en automatisk udsendt mail. Hvis du ønsker support, så besøg siden { $faqLink }.

# Button text
verify-email-cta = Bekræft mailadresse

# Button text
see-all-breaches = Se alle datalæk

# Headline of verification email
email-link-expires = Dette link udløber om 24 timer
email-verify-blurb = Bekræft din mailadresse for at føje den til { -product-name } og tilmelde dig advarsler om datalæk.

# Email headline
email-found-breaches-hl = Her er din oversigt over tidligere datalæk

## Variables:
##   $userEmail (string) - User email address

# Email headline
email-breach-summary-for-email = Opsummering af datalæk for { $userEmail }

# Email headline
email-no-breaches-hl = { $userEmail } optrådte i 0 kendte datalæk

# Email headline
email-alert-hl = { $userEmail } optrådte i en ny datalæk

##

# Subject line of email
email-subject-found-breaches = { -product-name } fandt dine informationer i disse datalæk

# Subject line of email
email-subject-no-breaches = { -product-name } fandt ingen kendte datalæk

# Subject line of email
email-subject-verify = Bekræft din mailadresse for { -product-name }

# { $fxmLink } is a link to Firefox Monitor and uses the text from { -product-name }.
learn-more-about-fxm = Læs mere om { $fxmLink }

email-sensitive-disclaimer =
    På grund af denne datalæks følsomme karakter er de involverede mailadresser ikke offentligt tilgængelige.
    Du modtager denne advarsel, fordi du er den bekræftede ejer af denne mailadresse.

fxm-warns-you-no-breaches =
    { -product-name } advarer dig om datalæk, der omfatter dine personlige data.
    Indtil videre er det ikke sket. Vi sender dig en advarsel, hvis din mailadresse optræder i en ny datalæk.

fxm-warns-you-found-breaches =
    { -product-name } advarer dig om datalæk, der omfatter dine personlige data.
    Du har også tilmeldt dig advarsler, hvis din mailadresse optræder i en ny datalæk.

email-breach-alert-blurb =
    { -product-name } advarer dig om datalæk, der omfatter dine personlige data.
    Vi har lige modtaget detaljer om et andet firmas datalæk.

# Section headline
monitor-another-email = Vil du overvåge en anden mailadresse?

## 2022 email template. HTML tags should not be translated, e.g. `<a>`

email-2022-unsubscribe = Du modtager denne automatisk udsendte mail som abonnent på { -product-name }. <br>Du kan når som helst ændre dine mailpræferencer <a { $unsubscribe-link-attr }>her</a>.
# Have I Been Pwned attribution
email-2022-hibp-attribution = Information om datalæk stammer fra <a { $hibp-link-attr }>{ -brand-HIBP }</a>

## Monthly email for unresolved breaches. HTML tags should not be translated, e.g. `<br>`

## Monthly email for unresolved breaches. HTML tags should not be translated, e.g. `<br>`
## Variables:
##   $email-address (string) - Email address

email-unresolved-heading = Du har uløste datalæk
email-unresolved-subhead = Din mailadresse har været involveret i en datalæk. <br>Løs det med det samme med { -product-name }.
email-is-affected = Din mailadresse, { $email-address }, er berørt af mindst en datalæk
email-more-detail = Log ind på { -product-name } nu for at se flere detaljer om dine datalæk (herunder hvornår de fandt sted og hvilke data, der er blevet kompromitteret), og find ud af, hvad du skal gøre, når din mailadresse er blevet kompromitteret i en datalæk.
email-breach-status = Nuværende lækstatus
# table row 1 label
email-monitored = Overvågede mailadresser i alt:
# table row 2 label
email-breach-total = Datalæk i alt:
# table row 3 label
email-resolved = Løste datalæk:
# table row 4 label
email-unresolved = Uløste datalæk:
email-resolve-cta = Løs datalæk

## Verification email

email-verify-heading = Beskyt dine data med det samme
email-verify-subhead = Bekræft din mailadresse for at beskytte dine data efter en datalæk.
email-verify-simply-click = Klik på linket nedenfor for at færdiggøre bekræften af din konto.

## Breach report

## Breach report
## Variables:
##   $email-address (string) - Email address

email-breach-summary = Her er din oversigt over datalæk
email-breach-detected = Resultatet af en søgning efter { $email-address } viser, at din mailadresse kan være involveret i en datalæk. Vi anbefaler, at du reagerer med det samme for at løse denne datalæk.
email-no-breach-detected = Gode nyheder! Vi har ikke fundet nogen datalæk, der påvirker din mailadresse, { $email-address }.
email-dashboard-cta = Gå til oversigten

## Breach alert

email-may-have-been-exposed = Din mailadresse kan have været involveret i en datalæk.
email-spotted-new-breach = Vi har opdaget en ny datalæk
