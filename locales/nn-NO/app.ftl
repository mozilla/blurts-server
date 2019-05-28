# String IDs beginning with "-product" and "-brand" should remain in English.
# They should not be:
# - Declined to adapt to grammatical case.
# - Transliterated.
# - Translated.
-product-name = Firefox Monitor
-product-name-nowrap = <span class="nowrap">{ -product-name }</span>
-product-short-name = Monitor
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
error-scan-page-token = Du freista å skanne for mange e-postadresser på kort tid. Av tryggingsårsaker har vi mellombels blokkert deg frå nye søk. Du vil kunne gjere nye søk seinare.
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
pwt-section-blurb = Passorda dine beskyttar meir enn kontoane dine. Dei vernar alle personlege opplysningar som finst i dei. Hackarar stolar på dårlege vanar, som når du brukar same passord overalt, eller brukar vanlege frasar (kor mange har til dømes brukt ‹‹123456››?) Brukar du passord fleire gongar, treng hackaren berre å skaffe seg tilgang til ein konto for å få tilgang til fleire kontoar. Men det er fleire ting du kan gjere for å beskytte kontoen din.
pwt-headline-1 = Bruk aldri same passordet på fleire kontoar
pwt-summary-1 = Brukar du same passord fleire gongar, lèt du døra stå open for identitetstjuveri. Alle som har dette passordet kan logge inn på alle kontoane dine.
pwt-headline-2 = Lag sterke passord som er vanskelege å gjette seg fram til
pwt-summary-2 =
    Hackarar brukar tusenvis av vanlege passord for å gjette passordet ditt.
    Dess lenger og meir tilfeldig passordet ditt er, dess vanskelegare vert det å gjette det.
pwt-headline-3 = Sjå på tryggingsspørsmål som ekstra passord
pwt-summary-3 =
    Nettstadar kontrollerer ikkje at svara dine er korrekte, berre at dei matchar kvar gong.
    Lag lange og tilfeldige svar og lagre dei på ein trygg stad.
pwt-headline-4 = Få hjelp til å hugse passorda dine
pwt-summary-4 =
    Passordhandterarar som 1Password, LastPass, Dashlane og Bitwarden genererer starke, unike passord. 
    Dei lagrar også passord trygt og fyller dei ut på nettsider for deg
pwt-headline-5 = Legg til ekstra sikkerheit med tofaktor-godkjenning
pwt-summary-5 = To faktor-godkjenning krev tilleggsinformasjon (t.d. ein eingangskode sendt via SMS) for å logge inn på kontoen din. Sjølv om nokon har passordet ditt, kan dei ikkje kome seg inn.
pwt-headline-6 = Registrer deg for { -product-name-nowrap }-åtvaringar
pwt-summary-6 = Nettstadlekkasjar aukar. Så snart ein ny lekkasje vert lagt til i databasen i vår, sender { -product-name-nowrap } deg ei åtvaring  — slik at du kan ta affære og beskytte kontoen din.
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
download-firefox-bar-blurb = { -product-name-nowrap } vert presentert av den <span class="nowrap">heilt nye { -brand-name }</span>.
download-firefox-bar-link = Last ned { -brand-name } no
download-firefox-banner-blurb = Ta kontroll over nettlesaren din
download-firefox-banner-button = Last ned { -brand-name }
signup-modal-headline = Registrer deg for { -product-name-nowrap }
signup-modal-blurb = Registrer deg for å sjå heile rapporten, få åtvaringar om nye datalekkasjar og sikkerheitstips frå { -product-name-nowrap }.
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
what-to-do-subhead-2 = Om du brukar eit eksponert passord på nytt, endre det.
what-to-do-subhead-3 = Ta ekstra forholdsreglar for å sikre bankkontoane dine
what-to-do-subhead-4 = Få hjelp til å lage gode passord og å oppebaver dei trygt.
what-to-do-blurb-4 = Passordhandterarar som 1Password, LastPass, Dashlane og Bitwarden genererer sterke passnord, lagrar dei sikkert og fyller dei ut på nettsider for deg.
# breach-date = the calendar date a particular data theft occurred. 
breach-date = Dato for datalekkasje:
# compromised accounts = the total number of user accounts exposed in data breach
compromised-accounts = Kompromiterte kontoar:
# compromised-data = the kind of user data exposed to hackers in data breach.
compromised-data = Kompromiterte data:
confirmed = Stadfesta!<br />Du abonnerer!
confirmed-blurb = { -product-name-nowrap } sender deg snart ein e-post med ein fullstendig rapport. Du får også tilsendt ein e-post om kontoen din er innblanda i nye datalekkasjar.
unsub-headline = Avslutt abonnementet på { -product-name-nowrap }
unsub-button = Avslutt abonnementet
fxa-unsub-headline = Stopp abonnement på { -product-name }-åtvaringar.
fxa-unsub-blurb =
    Du vil ikkje lenger få åtvaringar frå { -product-name }.
    { -brand-fxa } vil framleis vere aktivt, og du kan få annan
    kontorelatert kommunikasjon.
unsub-survey-form-label = Kvifor har du meldt deg av åtvartingar frå { -product-name-nowrap }?
unsub-reason-1 = Eg trur ikkje at åtvaringane gjer mine data sikrare
unsub-reason-2 = Eg får for mange e-postar frå { -product-name-nowrap }
unsub-reason-3 = Eg synest ikkje at tenesta er nyttig
unsub-reason-4 = Eg har allereie gjort noko for å verne kontoane mine
unsub-reason-5 = Eg brukar ei anna teneste til å halde auge med kontoane mine
unsub-reason-6 = Ingen av dei ovanfor
unsub-survey-thankyou = Takk for tilbakemeldinga di.
unsub-survey-error = Ver snill og velein.
unsub-survey-headline-v2 = Abonnentet er avslutta.
unsub-survey-blurb-v2 =
    Du vil ikkje lenger få åtvaringar frå { -product-name }.
    Har du tid til å svare på enkelte spørsmål om opplevinga di?
unsub-survey-button = Send inn svar
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
confirmation-headline = Din rapport frå { -product-name } er på veg.
share-email = E-postadresse
# Appears at the end of a list of email-clients and refers to any other unlisted email-client.
share-other = Andre
share-facebook-headline = Finn ut om du har vore utsett for ein datalekkasje.
share-facebook-blurb = Har kontoane dine på nettet blitt utsett for datalekkasje?
mozilla-security-blog = { -brand-Mozilla } sikkerheitsblogg
# A header for a list of links to share Firefox Monitor on various social media platforms.
layout-social = Sosialt
show-all = Vis alle
fxa-landing-blurb =
    Finn ut kva hackarar allereie veit om deg,
    og lær deg korleis du kan vere eitt steg framom dei.
fxa-scan-label = Sjå om du har vore involvert i ein datalekkasje.
fxa-welcome-headline = Velkomen til { -product-name }.
fxa-welcome-blurb = Du vil no få åtvaringar om { $userEmail } er involvert i ein datalekkasje.
fxa-scan-another-email = Vil du kontrollere ei anna e-postadresse?
# Search Firefox Monitor
fxa-scan-submit = Sök { -product-name }
sign-up-to-check = Registrer deg for å kontrollere
sign-in = Logg in
sign-out = Logg ut
full-report-headline = Din { -product-name }-rapport
see-full-report = Vis fullstendig rapport
# Manage Firefox Account, link to page where account holders can change their account settings.
manage-fxa = Handter { -brand-fxa }
fxa-download-firefox-bar-blurb = Presentert av  { -brand-name }. 2x raskare. Brukar 30% mindre minne enn { -brand-Chrome }.
fxa-download-firefox-bar-link = Last ned no
fxa-download-firefox-banner-blurb = Betre og raskare innlasting av sider og mindre bruk av datamaskinminne.
user-fb-compromised-headline = { $userEmail } har vore utsett for datalekkasjen { $breachName }.
guest-fb-compromised-headline = Denne e-postadressa var involvert i datalekkasjen { $breachName }.
user-zero-breaches-headline = { $userEmail } har ikkje vore involvert nokon datalekkasje.
guest-zero-breaches-headline = Denne e-postadressa har ikkje vore utsett for datalekkasjar.
user-scan-results-headline =
    { $breachCount ->
        [one] { $userEmail } har vore involvert i ein datalekkasje..
       *[other] { $userEmail } fhar vore utsett for { $breachCount } datalekkasjar.
    }
guest-scan-results-headline =
    { $breachCount ->
        [one] Denne e-postadressa har vore involvert i ein datalekkasje.
       *[other] Denne e-postadressa har vore involvert i { $breachCount } datalekkasjar.
    }
user-no-breaches-blurb = Vi vil varsle deg om denne adressa er involvert i ein datalekkasje.
user-one-breach-blurb = Denne datalekkasjen avslørte følgjande personleg informasjon.
user-fb-compromised-blurb =
    { $breachCount ->
        [one] E-postadressa di er også involvert i { $breachCount } annan datalekkasje.
       *[other] E-postadressa di er også involvert i { $breachCount } andre datalekkasjar.
    }
user-generic-fb-compromised-single = Denne datalekkasjen avslørde følgjande personlege informasjon.
# While English doesn’t use the actual number of breaches in this sentence,
# you can use {$breachCount} to display the number of breaches in your localization.
user-generic-found-breaches-blurb =
    { $breachCount ->
        [one] Denne datalekkasjen kompromitterte følgjande personlege opplysningar.
       *[other] Desse { $breachCount } datalekkasjane kompromitterte følgjande personlege opplysningar.
    }
have-an-account = Har du allereie ein konto?
fxa-pwt-section-blurb =
    Passord beskyttar all personleg informasjon på online-kontoane dine. 
    Hackarar er avhengig av dei dårlege vanane dine - som det at du brukar same passord
    overalt eller brukar vanlege passord (t.d. minkode1234) - slik at dei kan hacke 
    mange kontoar, viss dei berre hackar éin.
fxa-pwt-summary-2 =
    Korte passord med berre eitt ord er enkle for hackarar å gjette.
    Bruk minst to ord og ein kombinasjon av bokstavar, tal og spesialteikn.
fxa-pwt-summary-4 =
    Program for passordhandtering som 1Password, LastPass, Dashlane og Bitwarden lagrar passorda dine
    og fyller dei ut på nettsider for deg. Dei hjelper deg til og med med å lage eit sterkt passord.
fxa-pwt-summary-6 =
    Datalekkasjar aukar. Om din personlege informasjon vert avslørt i ein datalekkasje, 
    vil { -product-name } sende deg ei åtvaring - slik at du kan ta forholdsreglar og verne kontoane dine.
copyright = Delar av dette innhaldet er © 1999-{ $year } av einskilde mozilla.org-bidragsytarar.
content-available = Innhaldet er tilgjengeleg under ein Creative Commons-lisens.
# Alerts is a noun
sign-up-for-alerts = Registrer deg for varsel
sign-up-for-fxa-alerts = Registrer deg på { -product-name } for varsel.
create-free-account =
    Oprett ein gratis { -brand-fxa } og få tilgang til heile rapporten om tidlegare datalekkasjar, 
    åtvaringar om nye lekkasjar i tillegg til info om andre { -brand-Mozilla }-tenester.
get-your-report-and-sign-up = Få din rapport og registrer deg for åtvaringar.
# Link title
frequently-asked-questions = Vanlege spørsmål
about-firefox-monitor = Om { -product-name }
mozilla-dot-org = Mozilla.org
preferences = Innstillingar
# Link title.
home = Heim
# Link title
breaches = Datalekkasjar
# Link title
security-tips = Tryggingstips
fxa-account = { -brand-fxa }
# Aria button message to open menu. "Open Firefox Account Navigation"
open-fxa-menu = Opne navigering for { -brand-fxa }
# Appears above a snippet about the breach most recently reported to Firefox Monitor.
latest-breach = SISTE DATALEKASJE SOM ER LAGT TIL
breach-added = Rapporterte datalekkasjar:
breach-discovered = Oppdaga datalekkasjar:
# Link title
more-about-this-breach = Meir om denne datalekkasjen
take-control = Ta tilbake kontrollen over personopplysningane dine.
read-more-tips = Les fleire sikkerheitstips
how-hackers-work = Forstå korleis hackarar jobbar
monitor-your-online-accounts = Registrer deg for overvaking av datalekkasjar med { -brand-fxa }.
stay-alert = Ver på vakt for nye datalekkasjar
monitor-several-emails = Overvak fleire e-postadresser
take-action = Beskytt kontoane dine aktivt
keep-your-data-safe = Finn ut kva du må gjere for å beskytte dataa dine frå cyberkriminelle.
website-breach = Nettstadlekkasje
sensitive-breach = Sensitiv nettstadlekkasje
data-aggregator-breach = Datainnsamlingslekkasje
unverified-breach = Ubekrefta datalekkasje
spam-list-breach = Spamlistelekkasje
website-breach-plural = Nettstadlekkasjar
sensitive-breach-plural = Sensitive lekkasjar
data-aggregator-breach-plural = Datainnsamlingslekkasjar
unverified-breach-plural = Ubekrefta datalekkasjar
spam-list-breach-plural = Spamlistelekkasjar
what-data = Kva for nokre data er kompromitterte:
sensitive-sites = Korleis behandlar { -product-name } sensitive nettstadar?
delayed-reporting-headline = Kvifor tok det så lang tid å rapportere denne datalekkasjen?
about-fxm-headline = Om { -product-name }
# How Firefox Monitor works
how-fxm-works = Korleis { -product-name } fungerer
how-fxm-1-headline = Utfør eit enkelt søk
how-fxm-1-blurb =
    Søk etter e-postadressa di i offentlege datalekkasjar som
    går tilbake til 2007. Dette enkle søket  vil vise dei fleste datalekkasjar, men ikkje
    dei som inneheld kjenslevar, personleg informasjon.
how-fxm-2-headline = Registrer deg for datalekkasjeovervaking
how-fxm-3-headline = Få meldingar i nettlesaren din
wtd-after-website = Kva ein skal gjere gjere etter ein nettstadlekkasje
wtd-after-data-agg = Kva ein skal gjere etter ein datainnsamlingslekkasje
what-is-data-agg = Kva er ein datainnsamlar?
protect-your-privacy = Ta vare på personvernet ditt på nettet
avoid-personal-info = Unngå å bruke personleg informasjon i passord

## What to do after data breach tips

change-pw = Endre passordet ditt
create-strong-passwords = Slik lagar du sterke passord
stop-reusing-pw = Slutt med å bruke dei same passorda
five-myths = 5 myter om passordhandterarar
feat-sensitive = Avansert søk i sensitive datalekkasjar
sign-up-for-fxa = Opprett ein { -brand-fxa }
# This string is shown beneath each of the user’s email addresses to indicate
# how many known breaches that email address was found in. 
appears-in-x-breaches =
    { $breachCount ->
        [one] Er involvert i { $breachCount } kjend datalekkasje.
       *[other] Er involvert i { $breachCount } kjende datalekkasjar.
    }
check-for-breaches = Sjå etter datalekkasjar
back-to-top = Tilbake til toppen
add-new-email = Legg til ei ny e-postadresse
send-verification = Send stadfestingslenke
# This string is a header on the user preferences page and
# appears above a check-box list of user options which allow
# the user to choose whether or not they want to receive breach
# alerts for all of their monitored email addresses to a single 
# email address.
global-communication = Global kommun ikasjon
breach-summary = Datalekkasjeoppsummering
show-breaches-for-this-email = Vis alle datalekkasjar for denne e-postadressa.
link-change-primary = Endre primær e-postadresse
remove-fxm = Fjern { -product-name }
manage-email-addresses = Handter e-postadresser
latest-breach-link = Sjå om du har vore involvert i ein datalekkasje
welcome-back = Velkomen tilbake, { $userName }!
welcome-user = Velkomen, { $userName }!
breach-alert-subject = { -product-name } fann e-postadressa di i ein ny datalekkasje.
ba-next-step-2 = Slutt heilt med å bruke det eksponerte passordet.
new-breaches-found =
    { $breachCount ->
        [one] FANN { $breachCount } NY DATALEKKASJE
       *[other] FANN { $breachCount } NYE DATALEKKASJAR
    }
get-alerted = Få melding om nye datalekkasjar.
find-out-if = Finn ut om dine opplysningar vart eksponerte i denne datalekkasjen.
no-other-breaches-found = Ingen andre datalekkasjar vart funne i dette grunnleggjande søket.
all-breaches-headline = Alle datalekkasjar i { -product-name }
search-breaches = Søk etter datalekkasjar
# "Appears in-page as: Showing: All Breaches"
currently-showing = Viser:
all-breaches = Alle datalekkasjar

## Updated error messages

login-link-pre = Har du ein konto?
login-link = Logg inn
# This string is displayed under a large numeral that indicates the total number
# of data breaches that exposed a user’s password. Don’t add $passwords to
# your localization, because it would result in the number showing twice.
passwords-exposed =
    { $passwords ->
        [one] Passord eksponert i alle datalekkasjane
       *[other] Passorda eksponerte i alle datalekkasjane
    }
# A button on the All Breaches page that restores all of the breaches
# back to the page if the user has filtered some of them out.
see-all-breaches = Vis alle datalekkasjar
scan-results-known-breaches =
    { $breachCount ->
        [one] Denne e-postadressa er involvert i 1 kjend datalekkasje.
       *[other] Denne e-postadressa er involvert i { $breachCount } kjende datalekkasjar.
    }
# This string is shown at the top of the scan results page and is followed
# by the email address that the user searched.
# In page, it reads "Results for: searchedEmail@monitor.com"
results-for = Resultat for: { $userEmail }
other-monitored-emails = Andre overvaka e-postadresser
email-verification-required = E-poststadfesting påkravd
fxa-primary-email = { -brand-fxa } E-post - Primær
what-is-a-website-breach = Kva er ein nettstadlekkasje?
alert-about-new-breaches = Varsle meg om nye datalekkasjar
# This is a button and follows a headline reading "Was your info exposed in the ___ breach?"
find-out = Sjekk no
# This string appears on breach detail pages and is followed by a list
# of data classes that the breach exposed.
additional-information-including = Tilleggsinformasjon, inkludert:
# Title
email-addresses-title = E-postadresser
# Title appearing on the Preferences dashboard. 
monitor-preferences = { -product-short-name }-innstillingar
# When a user is signed in, this appears in the drop down menu 
# and is followed by the user's primary Firefox Account email. 
signed-in-as = Innlogga som: { $userEmail }
# Appears on the All Breaches page and is followed by a list of filter options
# that a user can filter the visible breaches by.
filter-by = Filtrer etter kategori:
# Title that appears in the mobile menu bar and opens the mobile menu when clicked.
menu = Meny
