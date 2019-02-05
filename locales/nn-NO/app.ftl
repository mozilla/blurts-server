# String IDs beginning with "-product" and "-brand" should remain in English.
# They should not be:
# - Declined to adapt to grammatical case.
# - Transliterated.
# - Translated.
-product-name = Firefox Monitor
-product-name-nowrap = <span class="nowrap">{ -product-name }</span>
-brand-name = Firefox
-brand-Quantum = Firefox Quantum
-brand-Mozilla = Mozilla
-brand-HIBP = Have I Been Pwned
-brand-fxa = Firefox-konto
-brand-Chrome = Chrome
layout-Firefox = { -brand-name }
# Descriptive headline for a column of links where users can give feedback, or get additional information about, Firefox Monitor.
layout-support = Hjelp
# Link that takes the user to a blog post on blog.mozilla.org about the alerts
about-firefox-alerts = Om Firefox-varsel
# Link that takes the user to a Firefox Monitor survey. 
give-feedback = Tilbakemelding
terms-and-privacy = Vilkår og personvern
error-could-not-add-email = Klarte ikkje å leggje til e-postadressa i databasen.
error-not-subscribed = Denne e-postadressa abonnerer ikkje på { -product-name }.
error-hibp-throttled = For mange tilkoplingar til { -brand-HIBP }.
error-hibp-connect = Klarte ikkje å kople til { -brand-HIBP }.
error-hibp-load-breaches = Klarte ikkje å laste datalekkasjar.
hibp-notify-email-subject = { -product-name } Åtvaring: Kontoen din har vore involvert i ein datalekasje.
home-title = { -product-name }
home-not-found = Fann ikkje sida.
oauth-invalid-session = Ugyldig økt
oauth-confirmed-title = { -product-name }: Abonnerer
scan-title = { -product-name } : Skanningsresultat
user-add-invalid-email = Ugyldig e-postadresse
user-add-email-verify-subject = Stadfest abonnementet ditt på { -product-name }.
user-add-title = { -product-name }: Stadfest e-postadressa
error-headline = Feil
user-verify-token-error = Stadfestings-token er påkravd.
user-verify-email-report-subject = Din { -product-name }-rapport
user-verify-title = { -product-name }: Abonnerer
user-unsubscribe-token-error = Avmelding krev eit token.
user-unsubscribe-token-email-error = Avmelding krev eit token og eit emailHash.
user-unsubscribe-title = { -product-name }: Avslutt abonnementet
user-unsubscribe-survey-title = { -product-name }: Avslutt undersøkinga
user-unsubscribed-title = { -product-name }: Avslutta

## Password Tips

pwt-section-headline = Sterkare passord = betre vern
pwt-section-subhead = Dei private opplysningane dine er berre so sikre som passorda dine er.
pwt-headline-1 = Bruk aldri same passordet på fleire kontoar
pwt-headline-2 = Lag sterke passord som er vanskelege å gjette seg fram til
pwt-headline-3 = Sjå på tryggingsspørsmål som ekstra passord
pwt-headline-4 = Få hjelp til å hugse passorda dine
pwt-headline-5 = Legg til ekstra sikkerheit med tofaktor-godkjenning
pwt-headline-6 = Registrer deg for { -product-name-nowrap }-åtvaringar
landing-headline = Ditt vern mot hackarar startar her.
scan-label = Sjå om du har vore innblanda i ein datalekkasje.
scan-placeholder = Skriv inn e-postadresse
scan-privacy = E-postadressa di vert ikkje lagra.
scan-submit = Søk etter e-postadressa di
scan-another-email = Skann ei anna e-postadresse
scan-featuredbreach-label = Finn ut om <span class="bold"> { $featuredBreach } </span>-kontoen din er kompromittert.
sensitive-breach-email-required = Datalekkasjen inneheld kjenslevare opplysningar. E-poststadfesting påkravd.
scan-error = E-postadressa må vere gyldig.
signup-banner-headline = { -product-name-nowrap } oppdagar truslar mot kontoane dine på nettet.
download-firefox-bar-link = Last ned { -brand-name } no
download-firefox-banner-blurb = Ta kontroll over nettlesaren din
download-firefox-banner-button = LAst ned { -brand-name }
signup-modal-headline = Registrer deg for { -product-name-nowrap }
signup-modal-close = Lat att
get-your-report = Få din rapport.
signup-modal-verify-headline = Stadfest abonnementet ditt.
signup-modal-verify-blurb = Vi sende ei stadfestingslenke til <span id="submitted-email" class="medium"></span>.
signup-modal-verify-expiration = Denne lenka går ut om 24 timar.
signup-modal-verify-resend = Ikkje i innboksen eller i søppelpostmappa? Send på nytt.
# Appears after Firefox Monitor has sent a verification email to a new user. 
signup-modal-sent = Sendt!
signup-with-fxa = Registrer deg med ein { -brand-name }-konto
form-signup-placeholder = Skriv inn e-postadresse
form-signup-checkbox = Få siste nytt frå { -brand-Mozilla } og { -brand-name }.
sign-up = Registrer deg
form-signup-error = E-postadressa må vere gyldig
no-breaches-headline = Så langt er alt godt.
found-breaches-headline = Din informasjon var ein del av ein datalekkasje.
show-more-breaches = Vis fleire
what-to-do-headline = Kva du skal gjere når informasjon din er utsett for ein datalekkasje
what-to-do-subhead-1 = Endre passorda dine, sjølv for gamle kontoar
what-to-do-subhead-3 = Ta ekstra forholdsreglar for å sikre bankkontoane dine
what-to-do-subhead-4 = Få hjelp til å lage gode passord og å oppebaver dei trygt.
# breach-date = the calendar date a particular data theft occurred. 
breach-date = Dato for datalekkasje:
# compromised accounts = the total number of user accounts exposed in data breach
compromised-accounts = Kompromiterte kontoar:
# compromised-data = the kind of user data exposed to hackers in data breach.
compromised-data = Kompromiterte data:
confirmed = Stadfesta!<br />Du abonnerer!
unsub-headline = Avslutt abonnementet på { -product-name-nowrap }
unsub-button = Avslutt abonnementet
unsub-survey-headline = Du abonnerer ikkje lenger.
unsub-reason-1 = Eg trur ikkje at åtvaringane gjer mine data sikrare
unsub-reason-2 = Eg får for mange e-postar frå { -product-name-nowrap }
unsub-reason-3 = Eg synest ikkje at tenesta er nyttig
unsub-reason-4 = Eg har allereie gjort noko for å verne kontoane mine
unsub-reason-5 = Eg brukar ei anna teneste til å halde auge med kontoane mine
unsub-reason-6 = Ingen av dei ovanfor
unsub-survey-thankyou = Takk for tilbakemeldinga di.
# Link to share Firefox Monitor on Facebook. Positioned next to Facebook logo.
share = Del
# Link to share Firefox Monitor on Twitter. Positioned next to Twitter logo.
tweet = Tweet
download-firefox-quantum = Last ned { -brand-Quantum }
download-firefox-mobile = Last ned { -brand-name } for mobil
# Features here refers to Firefox browser features. 
features = Funksjonar
# beta-nightly-developer-edition refers to additional versions of Firefox Browser
beta-nightly-developer-edition = Beta, Nightly, Developer Edition
# Breach data provided by Have I Been Pwned.
hibp-attribution = Informasjonen om datalekkasjen kjem frå { $hibp-link }
share-email = E-postadresse
# Appears at the end of a list of email-clients and refers to any other unlisted email-client.
share-other = Andre
# A header for a list of links to share Firefox Monitor on various social media platforms.
layout-social = Sosialt
show-all = Vis alle
# Search Firefox Monitor
fxa-scan-submit = Sök { -product-name }
sign-in = Logg in
sign-out = Logg ut
