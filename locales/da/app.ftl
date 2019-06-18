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
layout-support = Support
# Link that takes the user to a blog post on blog.mozilla.org about the alerts
about-firefox-alerts = Om advarsler i Firefox
# Link that takes the user to a Firefox Monitor survey. 
give-feedback = Giv feedback
terms-and-privacy = Vilkår og beskyttelse af personlige oplysninger
error-scan-page-token = Du har forsøgt at skanne for mange mail-adresser inden for et kort tidsrum. Vi har af sikkerhedsgrunde blokeret din mulighed for at søge indtil videre. Du kan prøve igen senere.
error-could-not-add-email = Kunne ikke tilføje mailadressen til databasen.
error-not-subscribed = Denne mailadresse er ikke tilmeldt { -product-name }.
error-hibp-throttled = For mange forbindelser til { -brand-HIBP }.
error-hibp-connect = Kan ikke forbinde til { -brand-HIBP }.
error-hibp-load-breaches = Kunne ikke indlæse datalæk.
error-must-be-signed-in = Du skal være logget ind på din { -brand-fxa }.
home-title = { -product-name }
home-not-found = Side ikke fundet.
oauth-invalid-session = Ugyldig session
oauth-confirmed-title = { -product-name } : Tilmeldt
scan-title = { -product-name } : Skanningsresultater
user-add-invalid-email = Ugyldig mailadresse
user-add-email-verify-subject = Bekræft din tilmelding til { -product-name }.
user-add-title = { -product-name } : Bekræft mailadresse
error-headline = Fejl
user-verify-token-error = Der kræves et bekræftelses-token.
user-verify-email-report-subject = Din { -product-name }-rapport
user-verify-title = { -product-name } : Tilmeldt
user-unsubscribe-token-error = Afmelding kræver et token.
user-unsubscribe-token-email-error = Afmelding kræver et token og en e-mailHash.
user-unsubscribe-title = { -product-name } : Afmeld
user-unsubscribe-survey-title = { -product-name } : Afmeldingsundersøgelse
user-unsubscribed-title = { -product-name } : Afmeldt

## Password Tips

pwt-section-headline = Stærkere adgangskoder = Bedre beskyttelse
pwt-section-subhead = Dine private oplysninger er kun så sikre som dine adgangskoder.
pwt-section-blurb = Dine adgangskoder giver adgang til mere end dine konti. De giver adgang til alle de personlige oplysninger, kontoen indeholder. Hackere udnytter folks dårlige vaner, som når man bruger adgangskoder, der er for nemme at gætte (hvor mange har fx brugt "123456"?), eller når man genbruger den samme adgangskode alle steder. Genbruger man en adgangskode, skal hackeren kun skaffe sig adgang til én konto for at få adgang flere konti. Men der er mange ting, du kan gøre for at beskytte dine konti bedre.
pwt-headline-1 = Benyt forskellige adgangskoder til forskellige konti
pwt-summary-1 =
    Hvis du genbruger den samme adgangskode overalt, åbner du en ladeport for identitetstyveri. 
    Enhver der har adgangskoden, vil kunne logge ind på alle dine konti.
pwt-headline-2 = Brug stærke adgangskoder, der er svære at gætte
pwt-summary-2 =
    Hackere prøver tusindvis af almindelige adgangskoder for at gætte din.
    Jo længere og mere tilfældigt din er, desto sværere vil den være at gætte.
pwt-headline-3 = Brug sikkerhedsspørgsmål som ekstra adgangskode
pwt-summary-3 =
    Websteder tjekker ikke, om du svarer rigtigt på sikkerhedsspørgsmål - de tjekker kun, at svaret matcher med det, du har oplyst.
    Lav lange, tilfældige svar og gem dem på et sikkert sted.
pwt-headline-4 = Få hjælp til at huske dine adgangskoder
pwt-summary-4 =
    Adgangskodeprogrammer som 1Password, LastPass, Dashlane og Bitwarden laver stærke, unikke adgangskoder.
    De gemmer også adgangskoder sikkert og udfylder dem automatisk for dig på websteder
pwt-headline-5 = Få ekstra sikkerhed med to faktor-godkendelse
pwt-summary-5 =
    To faktor-godkendelse kræver yderligere oplysninger (fx en engangskode sendt via SMS) for at logge dig ind på dine konti.
    Så selv hvis nogen har din adgangskode, vil de ikke kunne komme ind.
pwt-headline-6 = Tilmeld dig { -product-name-nowrap }-advarsler
pwt-summary-6 =
    Læk af data fra websteder bliver mere og mere almindelige. Så snart en læk registreres i vores database, 
    sender { -product-name-nowrap } dig en advarsel — på den måde kan du tage affære og beskytte din konto.
landing-headline = Din beskyttelse mod hackere begynder her.
landing-blurb =
    Med { -product-name-nowrap } får du en række værktøjer, så du kan beskytte dine personlige oplysninger. 
    Find ud af, hvor meget hackerne allerede ved om dig, og hvordan du kan komme et skridt foran dem.
scan-label = Se om du har været omfattet af en datalæk.
scan-placeholder = Indtast en mailadresse
scan-privacy = Din mailadresse bliver ikke gemt.
scan-submit = Søg efter din mailadresse
scan-another-email = Skan en anden mailadresse
scan-featuredbreach-label = Find ud af, om din <span class="bold"> { $featuredBreach } </span>-konto er blevet kompromitteret.
sensitive-breach-email-required = Datalækken indeholder følsomme oplysninger. Der kræves en email-bekræftelse.
scan-error = Mailadressen skal være gyldig.
signup-banner-headline = { -product-name-nowrap } finder trusler mod dine online-konti.
signup-banner-blurb =
    Din detaljerede { -product-name-nowrap }-rapport viser, om oplysninger fra dine online-konti er blevet lækket eller stjålet.
    Vi vil også advare dig, hvis dine konti vises i nye datalæk.
download-firefox-bar-blurb = { -product-name-nowrap } præsenteres af den <span class="nowrap">nye { -brand-name }</span>.
download-firefox-bar-link = Hent { -brand-name } nu
download-firefox-banner-blurb = Tag kontrollen over din browser
download-firefox-banner-button = Hent { -brand-name }
signup-modal-headline = Tilmeld dig { -product-name-nowrap }
signup-modal-blurb = Tilmeld dig for at se den fulde rapport, få advarsler om nye datalæk og for at få tips om sikkerhed fra { -product-name-nowrap }.
signup-modal-close = Luk
get-your-report = Få din rapport
signup-modal-verify-headline = Bekræft din tilmelding
signup-modal-verify-blurb = Vi har sendt et bekræftelseslink til <span id="submitted-email" class="medium"></span>.
signup-modal-verify-expiration = Dette link udløber om 24 timer.
signup-modal-verify-resend = Ikke i indbakken eller spam-mappen? Send igen.
# Appears after Firefox Monitor has sent a verification email to a new user. 
signup-modal-sent = Sendt!
signup-with-fxa = Tilmeld dig med en { -brand-name }-konto
form-signup-placeholder = Indtast en mailadresse
form-signup-checkbox = Få seneste nyt fra { -brand-Mozilla } og { -brand-name }.
sign-up = Tilmeld dig
form-signup-error = Mailadressen skal være gyldig
no-breaches-headline = Så langt, så godt.
found-breaches-headline = Dine oplysninger er blevet kompromitteret i en datalæk.
no-breaches =
    Din mailadresse dukkede ikke op i vores grundlæggende søgning. 
    Det er gode nyheder - men datalæk kan ske når som helst. Heldigvis kan du selv gøre noget. 
    Tilmeld dig { -product-name-nowrap } for at få en fuldstændig rapport, advarsler om nye datalæk samt tips til at beskytte dine adgangskoder.
featured-breach-results =
    { $breachCount ->
        [0] Din konto optræder i datalækken <span class="bold">{ $featuredBreach }</span>, men ikke i andre kendte datalæk.
        [one] Din konto optræder i datalækken <span class="bold">{ $featuredBreach }</span> samt en anden datalæk.
       *[other] Din konto optræder i datalækken <span class="bold">{ $featuredBreach }</span> samt i { $breachCount } andre datalæk.
    }
featured-breach-not-compromised =
    { $breachCount ->
        [0] { no-breaches }
        [one] Din konto optræder ikke i datalækken <span class="bold">{ $featuredBreach }</span>, men findes i en anden datalæk.
       *[other] Din konto optræder ikke i datalækken <span class="bold">{ $featuredBreach }</span>, men findes i { $breachCount } andre datalæk.
    }
scan-results =
    { $breachCount ->
        [0] { no-breaches }
        [one] Din konto optræder i { $breachCount } datalæk.
       *[other] Konti associeret med din mailadresse optræder i de følgende { $breachCount } datalæk.
    }
show-more-breaches = Vis flere
what-to-do-headline = Hvad du skal gøre, når din information er ramt af en datalæk
what-to-do-subhead-1 = Skift dine adgangskoder, selv for gamle konti
what-to-do-blurb-1 =
    Kan du ikke logge ind? Kontakt webstedet og spørg, hvordan du kan få en ny adgangskode eller hvordan du kan lukke kontoen. 
    Er der en konto, du ikke genkender? Webstedet kan have skiftet navn eller en anden kan have oprettet kontoen for dig.
what-to-do-subhead-2 = Hvis du genbruger en kompromitteret adgangskode, så skift den.
what-to-do-blurb-2 =
    Hackere kan prøve at genbruge dine kompromitterede adgangskoder til at komme ind på andre konti.
    Lav en nyt adgangskode for hvert websted - det er især vigtigt, når det handler om
    din bankkonto, din mailkonto og andre steder, hvor du gemmer personlig information.
what-to-do-subhead-3 = Tag ekstra forholdsregler for at sikre dine bankkonti
what-to-do-blurb-3 = De fleste datalæk indholder kun mailadresser og adgangskoder, men nogle datalæk indeholder også følsom finansiel information. Hvis din bankkonto eller information om dine betalingskort har været med i en datalæk, så skal du tage kontakt til din bank og bede dem gennemgå dine kontobevægelser for at afsløre svindel eller udgifter, du ikke genkender.
what-to-do-subhead-4 = Få hjælp til at lave gode adgangskoder og til at opbevare dem sikkert.
what-to-do-blurb-4 = Der findes software, der kan hjælpe dig med at oprette sikre adgangskoder, opbevare dem sikkert og lade dig sætte dem automatisk ind på websteder. Eksempler er 1Password, LastPass, Dashlane og Bitwarden.
# breach-date = the calendar date a particular data theft occurred. 
breach-date = Dato for datalæk:
# compromised accounts = the total number of user accounts exposed in data breach
compromised-accounts = Kompromitterede konti:
# compromised-data = the kind of user data exposed to hackers in data breach.
compromised-data = Kompromitterede data:
confirmed = Bekræftet!<br />Du er nu tilmeldt!
confirmed-blurb = { -product-name-nowrap } sender dig snart en mail med en fuldstændig rapport. Du får også tilsendt en mail, hvis din konto optræder i nye datalæk.
confirmed-social-blurb = Hvis din konto har været involveret i en datalæk, så er der stor risiko for, at dine venner, net-bekendtskaber og din familie også er blevet ramt. Fortæl dem om { -product-name-nowrap }.
unsub-headline = Afmeld { -product-name-nowrap }
unsub-blurb = Dette vil fjerne din mailadresse fra { -product-name-nowrap }s database, og du vil ikke længere modtage advarsler, når nye datalæk opdages.
unsub-button = Stop abonnement
fxa-unsub-headline = Stop abonnement på { -product-name }-advarsler.
fxa-unsub-blurb =
    Du vil ikke længere modtage { -product-name }-advarsler. 
    Din { -brand-fxa } vil fortsat være aktiv, og du vil muligvis
    modtage andre meddelelser vedrørende din konto.
unsub-survey-form-label = Hvorfor har du frameldt dig advarsler fra { -product-name-nowrap }?
unsub-reason-1 = Jeg tror ikke, at advarslerne gør mine data sikrere
unsub-reason-2 = Jeg får for mange mails fra { -product-name-nowrap }
unsub-reason-3 = Jeg synes ikke, at tjenesten er nyttig
unsub-reason-4 = Jeg har allerede taget skridt til at beskytte mine konti
unsub-reason-5 = Jeg bruger en anden tjeneste til at holde øje med mine konti
unsub-reason-6 = Intet af det ovenstående
unsub-survey-thankyou = Tak for din feedback
unsub-survey-error = Vælg venligst en.
unsub-survey-headline-v2 = Du er blevet afmeldt.
unsub-survey-blurb-v2 =
    Du vil ikke længere modtage { -product-name }-advarsler. 
    Har du tid til at besvare et enkelt spørgsmål om din oplevelse?
unsub-survey-button = Indsend svar
# Link to share Firefox Monitor on Facebook. Positioned next to Facebook logo.
share = Del
# Link to share Firefox Monitor on Twitter. Positioned next to Twitter logo.
tweet = Tweet
download-firefox-quantum = Hent { -brand-Quantum }
download-firefox-mobile = Hent mobil-versionen af { -brand-name }
# Features here refers to Firefox browser features. 
features = Funktioner
# beta-nightly-developer-edition refers to additional versions of Firefox Browser
beta-nightly-developer-edition = Beta, Nightly, Developer Edition
# Breach data provided by Have I Been Pwned.
hibp-attribution = Information om datalæk stammer fra { $hibp-link }
site-description = Er dine konti blevet lækket eller stjålet i en datalæk? Find ud af det med { -product-name }. Søg i vores database, og tilmeld dig for at modtage advarsler.
confirmation-headline = Din { -product-name }-rapport er på vej.
confirmation-blurb = Datalæk kan ramme alle. Spred budskabet, så dine venner og din familie kan finde ud af, om deres konti er i sikkerhed.
share-email = Mailadresse
# Appears at the end of a list of email-clients and refers to any other unlisted email-client.
share-other = Andre
share-twitter = De fleste mennesker har omkring 100 online-konti. Er nogle af dine konti blevet kompromitteret i en datalæk? Find ud af det.
share-facebook-headline = Find ud af, om du er blevet udsat for en datalæk.
share-facebook-blurb = Er dine online-konti blevet ramt i en datalæk?
og-site-description = Brug { -product-name } til at finde ud af, om du er blevet ramt af en datalæk. Tilmeld dig for at få advarsler om nye datalæk og få tips til at beskytte dine konti.
mozilla-security-blog = { -brand-Mozilla }s sikkerhedsblog
# A header for a list of links to share Firefox Monitor on various social media platforms.
layout-social = Sociale medier
show-all = Vis alle
fxa-landing-blurb =
    Find ud af, hvor meget hackerne allerede ved om dig, 
    og lær hvordan du kan komme et skridt foran dem.
fxa-scan-label = Se om du har været omfattet af en datalæk.
fxa-welcome-headline = Velkommen til { -product-name }.
fxa-welcome-blurb = Du vil nu modtage advarsler, hvis { $userEmail } optræder i en datalæk.
fxa-scan-another-email = Vil du tjekke en anden mailadresse?
# Search Firefox Monitor
fxa-scan-submit = Søg i { -product-name }
sign-up-to-check = Tilmeld dig for at tjekke
sign-in = Log ind
sign-out = Log ud
full-report-headline = Din { -product-name }-rapport
see-full-report = Se den komplette rapport
# Manage Firefox Account, link to page where account holders can change their account settings.
manage-fxa = Håndter { -brand-fxa }
fxa-download-firefox-bar-blurb = Præsenteret af { -brand-name }. 2 X hurtigere. Bruger 30% mindre hukommelse end { -brand-Chrome }.
fxa-download-firefox-bar-link = Hent nu
fxa-download-firefox-banner-blurb = Bedre og hurtigere indlæsning af sider og mindre brug af computerens hukommelse.
user-fb-compromised-headline = { $userEmail } optrådte i datalækken { $breachName }.
guest-fb-compromised-headline = Denne mailadresse optrådte i datalækken { $breachName }.
user-zero-breaches-headline = { $userEmail } optrådte i nul datalæk.
guest-zero-breaches-headline = Denne mailadresse optrådte i nul datalæk.
user-scan-results-headline =
    { $breachCount ->
        [one] { $userEmail } optrådte i 1 datalæk.
       *[other] { $userEmail } optrådte i { $breachCount } datalæk.
    }
guest-scan-results-headline =
    { $breachCount ->
        [one] Denne mailadresse optrådte i 1 datalæk.
       *[other] Denne mailadresse optrådte i { $breachCount } datalæk.
    }
user-no-breaches-blurb = Vi vil advare dig, hvis denne mailadresse optræder i en ny datalæk.
guest-no-breaches-blurb =
    Opret en { -brand-fxa } for at se, om denne mailadresse optræder i læk af følsomme data.
    Vi giver dig desuden besked, hvis mailadressen optræder i nye datalæk.
user-one-breach-blurb = Denne datalæk kompromitterede følgende personlige oplysninger.
user-fb-compromised-blurb =
    { $breachCount ->
        [one] Din mailadresse optrådte også i { $breachCount } anden datalæk.
       *[other] Din mailadresse optrådte også i { $breachCount } andre datalæk.
    }
user-generic-fb-compromised-blurb =
    { $breachCount ->
        [one] Denne mailadresse optrådte også i { $breachCount } anden datalæk.
       *[other] Denne mailadresse optrådte også i { $breachCount } andre datalæk.
    }
user-fb-compromised-single = Denne datalæk kompromitterede følgende personlige oplysninger. Skift dine adgangskoder, hvis du ikke allerede har gjort det.
user-generic-fb-compromised-single = Denne datalæk kompromitterede følgende personlige oplysninger.
guest-fb-compromised-single-v2 =
    Denne datalæk kompromitterede følgende personlige oplysninger.
    Opret en gratis { -brand-fxa } og få adgang til din fulde rapport
    med tidligere datalæk, advarsler om nye læk samt info om andre
    { -brand-Mozilla }-tjenester.
guest-fb-compromised-blurb-v2 =
    { $breachCount ->
        [one]
            Denne mailadresse optrådte også i { $breachCount } anden datalæk. Opret en 
            gratis { -brand-fxa } og få adgang til din fulde rapport med tidligere datalæk, 
            advarsler om nye læk samt info om andre { -brand-Mozilla }-tjenester.
       *[other]
            Denne mailadresse optrådte også i { $breachCount } andre datalæk. Opret en 
            gratis { -brand-fxa } og få adgang til din fulde rapport med tidligere datalæk, 
            advarsler om nye læk samt info om andre { -brand-Mozilla }-tjenester.
    }
user-fb-not-compromised-blurb =
    { $breachCount ->
        [one] Du er ikke blevet ramt af datalækken { $breachName }, men vi har fundet mailadressen i en anden datalæk.
       *[other] Du er ikke blevet ramt af datalækken { $breachName }, men vi har fundet mailadressen i andre datalæk.
    }
user-generic-fb-not-compromised-blurb =
    { $breachCount ->
        [one] Denne mailadresse optræder ikke i datalækken { $breachName }, men findes i en anden datalæk.
       *[other] Denne mailadresse optræder ikke i datalækken { $breachName }, men findes i andre datalæk.
    }
guest-fb-not-compromised-blurb-v2 =
    { $breachCount ->
        [one]
            Denne mailadresse optræder ikke i datalækken { $breachName }, men findes i en anden datalæk. Opret en gratis { -brand-fxa } og få adgang til din fulde rapport 
            med tidligere datalæk, advarsler om nye læk samt info om andre { -brand-Mozilla }-tjenester.
       *[other]
            Denne mailadresse optræder ikke i datalækken { $breachName }, men findes i andre datalæk. Opret en gratis { -brand-fxa } og få adgang til din fulde rapport 
            med tidligere datalæk, advarsler om nye læk samt info om andre { -brand-Mozilla }-tjenester.
    }
# While English doesn’t use the actual number of breaches in this sentence,
# you can use {$breachCount} to display the number of breaches in your localization.
user-found-breaches-blurb =
    { $breachCount ->
        [one] Denne datalæk kompromitterede følgende personlige oplysninger. Skift din adgangskode, hvis du ikke allerede har gjort det.
       *[other] Disse { $breachCount } datalæk kompromitterede følgende personlige oplysninger. Skift dine adgangskoder, hvis du ikke allerede har gjort det.
    }
# While English doesn’t use the actual number of breaches in this sentence,
# you can use {$breachCount} to display the number of breaches in your localization.
user-generic-found-breaches-blurb =
    { $breachCount ->
        [one] Denne datalæk kompromitterede følgende personlige oplysninger.
       *[other] Disse { $breachCount } datalæk kompromitterede følgende personlige oplysninger.
    }
have-an-account = Har du allerede en konto?
signup-banner-sensitive-blurb =
    Find ud af, hvad hackerne allerede ved om dig - og lær,
    hvordan du altid kan være et skridt foran dem.
    Få en advarsel, hvis din konto optræder i nye datalæk.
fxa-pwt-section-blurb =
    Adgangskoder beskytter alle personlige informationer på dine online-konti. 
    Hackere er afhængige af dine dårlige vaner - som at bruge den samme adgangskode 
    overalt eller at bruge generiske adgangskoder (fx minkode1234) - så de kan hacke 
    mange konti, hvis de bare kan hacke én.
fxa-pwt-summary-2 =
    Det er nemt for en hacker at gætte en adgangskode bestående af et enkelt ord.
    Brug som minimum to ord samt en kombination af bogstaver, tal og specielle tegn.
fxa-pwt-summary-4 =
    Programmer til at håndtere adgangskoder, som fx 1Password, LastPass, Dashlane og Bitwarden gemmer 
    dine adgangskoder og sætter dem ind på websteder for dig. De kan også hjælpe dig med at lave sikre adgangskoder.
fxa-pwt-summary-6 =
    Der bliver stadig flere datalæk. { -product-name }  sender dig en advarsel, hvis dine personlige
    data optræder i en ny datalæk - så du kan tage forholdsregler og beskytte dine konti.
fxa-what-to-do-blurb-1 =
    Hvis du ikke kan logge ind, så kontakt webstedet og spørg, hvordan du logger ind.
    Er der en konto, du ikke genkender? Dine data kan være blevet solgt eller givet videre.
    Der kan også være tale om en konto, du har glemt, at du har oprettet - eller 
    en virksomhed, der har skiftet navn.
fxa-what-to-do-subhead-2 = Stop med at anvende den kompromitterede adgangskode, og skift den ud overalt, du har brugt den.
fxa-wtd-blurb-2 =
    Hackere kan forsøge at bruge din mailadresse og samme adgangskode til at logge ind på andre konti.
    Opret en ny og unik adgangskode for hver konto - det er især vigtigt for din netbank, din mailadresse
    og andre websteder, hvor du har gemt personlige oplysninger.
fxa-what-to-do-blurb-3 =
    De fleste datalæk indeholder kun mailadresser og adgangskoder, men nogle indeholder følsom økonomisk information.
    Hvis din bankkonto eller dit betalingskort-nummer er blevet lækket, så tag kontakt med din bank. 
    Hold øje med konto-bevægelser, du ikke kan genkende.
fxa-what-to-do-subhead-4 = Få hjælp til at huske alle din adgangskoder og til at beskytte dem.
fxa-what-to-do-blurb-4 =
    Programmer til at håndtere adgangskoder, som fx 1Password, LastPass, Dashlane og Bitwarden 
    gemmer dine adgangskoder og sætter dem ind på websteder for dig. Brug et program til at håndtere
    adgangskoder på din telefon og computer, så du ikke behøver at huske dem.
fb-landing-headline = Er dine oplysninger blevet kompromitteret i datalækken { $breachName }?
copyright = Dele af dette indhold er © 1999-{ $year } af individuelle bidragsydere til mozilla.org.
content-available = Indholdet er tilgængeligt under en Creative Commons-licens.
# Alerts is a noun
sign-up-for-alerts = Tilmeld dig advarsler
sign-up-for-fxa-alerts = Tilmeld dig { -product-name }-advarsler
create-free-account =
    Opret en gratis { -brand-fxa } og få adgang til din fulde rapport med tidligere datalæk, 
    advarsler om nye læk samt info om andre { -brand-Mozilla }-tjenester.
get-your-report-and-sign-up = Få din rapport og tilmeld dig advarsler
# Link title
frequently-asked-questions = Ofte stillede spørgsmål
about-firefox-monitor = Om { -product-name }
mozilla-dot-org = Mozilla.org
preferences = Indstillinger
# Link title.
home = Hjem
# Link title
breaches = Datalæk
# Link title
security-tips = Sikkerhedstips
fxa-account = { -brand-fxa }
# Aria button message to open menu. "Open Firefox Account Navigation"
open-fxa-menu = Åbn { -brand-fxa }-navigation
# Appears above a snippet about the breach most recently reported to Firefox Monitor.
latest-breach = SENEST TILFØJEDE DATALÆK
# Link title
more-about-this-breach = Mere om denne datalæk
take-control = Tag kontrollen over dine personlige data tilbage.
cant-stop-hackers = Du kan ikke forhindre hackere i at hacke. Men du kan undgå dårlige vaner, der gør det nemt for dem.
read-more-tips = Læs flere sikkerhedstips
how-hackers-work = Forstå hvordan hackere arbejder
monitor-your-online-accounts = Tilmeld dig overvågning af datalæk med en { -brand-fxa }.
stay-alert = Få advarsler om nye datalæk
if-your-info = Vi sender dig en advarsel, hvis dine informationer dukker op i nye datalæk.
search-all-emails = Gennemsøg alle din mailadresser for datalæk - og få advarsler om nye trusler.
monitor-several-emails = Overvåg flere mailadresser
take-action = Beskyt dine konti
keep-your-data-safe = Find ud af hvad du skal gøre for at sikre dine data mod cyber-kriminelle.
website-breach = Websteds-datalæk
sensitive-breach = Datalæk på websted med følsomme data
data-aggregator-breach = Datalæk for data-aggregator
unverified-breach = Ubekræftet datalæk
spam-list-breach = Datalæk for spam-liste
website-breach-plural = Websteds-datalæk
sensitive-breach-plural = Datalæk af følsomme data
data-aggregator-breach-plural = Datalæk for data-aggregator
unverified-breach-plural = Ubekræftede datalæk
spam-list-breach-plural = Datalæk for spam-lister
what-data = Hvilke data blev kompromitteret:
sensitive-sites = Hvordan behandler { -product-name } følsomme websteder?
sensitive-sites-copy =
    { -product-name } viser kun konti associeret med denne type af læk, 
    når en mailadresse er bekræftet. Det betyder, at du er den eneste, der kan se, 
    om dine informationer er en del af denne læk (medmindre andre har adgang 
    til din mailkonto).
delayed-reporting-headline = Hvorfor tog det så lang tid at rapportere denne datalæk?
delayed-reporting-copy =
    Det kan nogle gange tage måneder eller år, før data involveret 
    i datalæk dukker op på websteder, der bruges af kriminelle. Datalæk bliver føjet til
    vores database, så snart de opdages og er blevet verificeret.
about-fxm-headline = Om { -product-name }
about-fxm-blurb =
    { -product-name } advarer dig, hvis dine online-konti har været involveret 
    i en datalæk. Find ud af, om du er blevet ramt af en datalæk, få advarsler om nye
    datalæk, og tag forholdsregler for at beskytte dine konti. { -product-name } er lavet 
    af { -brand-Mozilla }.
fxm-warns-you =
    { -product-name } advarer dig, hvis din mailadresse har været involveret 
    i en datalæk. Find ud af, om dine informationer er blevet lækket, lær at tage
    forholdsregler for at beskytte dine konti og få en advarsel, hvis din 
    mailadresse optræder i en ny datalæk.
# How Firefox Monitor works
how-fxm-works = Sådan virker { -product-name }
how-fxm-1-headline = Foretag en grundlæggende søgning
how-fxm-1-blurb =
    Søg efter din mailadresse i offentlige datalæk helt tilbage 
    fra 2007. Denne grundlæggende søgning vil afsløre de fleste datalæk, 
    men ikke dem, der indeholder følsomme personlige informationer.
how-fxm-2-headline = Tilmeld dig overvågning af datalæk
how-fxm-2-blurb =
    Opret en { -brand-fxa } for at se, om din mailadresse bliver ramt af nye datalæk. 
    Så snart du har bekræftet din mailadresse, modtager du en fuld rapport over  
    tidligere datalæk, inklusive læk af følsomme data.
how-fxm-3-headline = Få besked i din browser
how-fxm-3-blurb =
    Når du bruger { -brand-name }, får du vist en advarsel, når du besøger 
    et websted, der er blevet udsat for datalæk. Se med det samme, om du 
    er ramt af datalækken - og hvad du kan gøre ved det.
wtd-after-website = Hvad skal jeg gøre efter datalæk på et websted?
wtd-after-data-agg = Hvad skal du gøre efter en datalæk for en data-aggregator?
what-is-data-agg = Hvad er en data-aggregator?
what-is-data-agg-blurb =
    Data-aggregatorer (også kaldet datamæglere) indsamler information fra  
    registre og køber information fra andre virksomheder. De sammenstiller disse data for 
    at sælge dem til virksomheder, der bruger dem i forbindelse med markedsføring. 
    Ofre for disse datalæk er mindre udsatte for økonomisk bedrageri, men 
    hackere kan anvende informationerne til at udgive sig for at være dig, eller de kan profilere dig.
protect-your-privacy = Beskyt dit privatliv på nettet
no-pw-to-change = I modsætning til et websteds-læk, er der ikke nogen adgangskode at ændre.
avoid-personal-info = Undgå at bruge personlige informationer i adgangskoder
avoid-personal-info-blurb = Det er nemt at finde fødselsdatoer, adresser og navne på familiemedlemmer på nettet. Brug ikke disse ord i dine adgangskoder.

## What to do after data breach tips

change-pw = Skift din adgangskode
even-for-old = Selv for gamle konti er det vigtigt at opdatere dine adgangskoder.
make-new-pw-unique = Gør den nye adgangskode forskellig og unik
strength-of-your-pw = Hvor sikker du er på nettet afhænger af, hvor sikre dine adgangskoder er.
create-strong-passwords = Sådan opretter du stærke adgangskoder
stop-reusing-pw = Stop med at genbruge den samme adgangskode
create-unique-pw = Opret unikke adgangskoder og gem dem et sikkert sted, som fx i et program til håndtering af adgangskoder.
five-myths = 5 myter om programmer til håndtering af adgangskoder
create-a-fxa = Opret en { -brand-fxa } for at modtage din fuldstændige rapport over datalæk og fremtidige advarsler.
feat-security-tips = Sikkerhedstips til at beskytte dine konti
feat-sensitive = Avanceret søgning i datalæk af følsomme data
feat-enroll-multiple = Få overvåget flere mailadresser for datalæk
sign-up-for-fxa = Opret en { -brand-fxa }
# This string is shown beneath each of the user’s email addresses to indicate
# how many known breaches that email address was found in. 
appears-in-x-breaches =
    { $breachCount ->
        [one] Optræder i { $breachCount } kendt datalæk.
       *[other] Optræder i { $breachCount } kendte datalæk.
    }
see-if-breached = Se om du har været ramt af en datalæk.
check-for-breaches = Undersøg for datalæk
find-out-what-hackers-know = Find ud af, hvad hackerne allerede ved om dig. Lær, hvordan du kan være et skridt foran dem.
search-for-your-email = Søg efter din mailadresse i offentlige datalæk helt tilbage fra 2007.
back-to-top = Tilbage til toppen
comm-opt-0 = Send mig en mail, hvis en af mine nedenstående mailadresser optræder i en datalæk.
comm-opt-1 = Send alle advarsler om datalæk til { $primaryEmail }.
stop-monitoring-this = Stop med at overvåge denne mailadresse.
resend-verification = Send bekræftelsesmail igen
add-new-email = Tilføj en ny mailadresse
send-verification = Send bekræftelseslink
# This string is a header on the user preferences page and
# appears above a check-box list of user options which allow
# the user to choose whether or not they want to receive breach
# alerts for all of their monitored email addresses to a single 
# email address.
breach-summary = Opsummering af datalæk
show-breaches-for-this-email = Vis alle datalæk for denne mailadresse.
link-change-primary = Skift primær mailadresse
remove-fxm = Fjern { -product-name }
remove-fxm-blurb = Slå { -product-name }-advarsler fra. Din { -brand-fxa } vil fortsat være aktiv, og du vil muligvis modtage andre meddelelser vedrørende din konto.
manage-email-addresses = Håndter mailadresser
latest-breach-link = Se, om du er ramt af denne datalæk
welcome-back = Velkommen tilbage, { $userName }!
welcome-user = Velkommen { $userName }!
breach-alert-subject = { -product-name } fandt din mailadresse i en ny datalæk.
your-info-was-discovered-headline = Dine informationer er blevet fundet i en ny datalæk.
your-info-was-discovered-blurb =
    Du har tilmeldt dig advarsler fra { -product-name },
    når din mailadresse optræder i en datalæk. Her er, hvad vi ved om denne datalæk.
what-to-do-after-breach = Hvad du skal gøre efter en datalæk:
ba-next-step-1 = Skift din adgangskode, så den bliver stærk og unik.
ba-next-step-blurb-1 =
    En stærk adgangskode består af en kombination af store og små bogstaver,
    specialtegn og tal. Den indeholder ikke personlig information såsom din
    adresse, din fødselsdag eller navne på familiemedlemmer.
ba-next-step-2 = Stop helt med at anvende den kompromitterede adgangskode.
ba-next-step-blurb-2 =
    Cyber-kriminelle kan finde din adgangskode på svært tilgængelige dele af 
    internettet (det såkaldte "dark web") og bruge din kode til at logge ind på
    dine andre konti. Den bedste måde at beskytte dine konti på er ved at 
    bruge forskellige adgangskoder for alle dine konti.
ba-next-step-3 = Få hjælp til at lave bedre adgangskoder og til at opbevare dem sikkert.
ba-next-step-blurb-3 =
    Brug et program til at oprette stærke, unikke adgangskoder. Programmer til håndtering af adgangskoder 
    gemmer dine logins på en sikker måde, så du kan anvende dem på alle dine enheder.
faq1 = Jeg genkender ikke dette firma eller websted. Hvorfor er jeg i denne datalæk?
faq2 = Hvorfor tog det så lang tid at give mig besked om denne datalæk?
faq3 = Hvordan ved jeg, at dette er en legitim mail fra { -product-name }?
new-breaches-found =
    { $breachCount ->
        [one] { $breachCount } NY DATALÆK FUNDET
       *[other] { $breachCount } NYE DATALÆK FUNDET
    }
sign-up-headline-1 = Få de nyeste advarsler med en { -brand-fxa }.
account-not-required = Du behøver ikke at have { -brand-name } for at bruge en { -brand-fxa }. Ved at tilmelde dig kan du modtage information om tjenester fra { -brand-Mozilla }.
get-alerted = Bliv advaret om nye datalæk.
was-your-info-exposed = Er dine oplysninger blevet kompromitteret i datalækken { $breachName }?
find-out-if = Find ud af, om dine data er blevet kompromitteret i denne datalæk.
fb-not-comp = Denne mailadresse optrådte ikke i datalækken { $breachName }.
other-breaches-found =
    { $breachCount ->
        [one] Men den optrådte i { $breachCount } anden datalæk.
       *[other] Men den optrådte i { $breachCount } andre datalæk.
    }
fb-comp-only = Denne mailadresse optrådte i datalækken { $breachName }.
fb-comp-and-others =
    { $breachCount ->
        [one] Denne mailadresse optrådte i { $breachCount } kendt datalæk, herunder { $breachName }.
       *[other] Denne mailadresse optrådte i { $breachCount } kendte datalæk, herunder { $breachName }.
    }
no-other-breaches-found = Den grundlæggende søgning fandt ikke andre datalæk.
no-results-blurb = Beklager, men den datalæk er ikke i vores database.
all-breaches-headline = Alle datalæk i { -product-name }
search-breaches = Søg efter datalæk
# "Appears in-page as: Showing: All Breaches"
currently-showing = Viser:
all-breaches = Alla datalæk

## Updated error messages

error-bot-headline = Søgninger er midlertidigt suspenderet
error-bot-blurb =
    Du har søgt efter adskillige mailadresser på meget kort tid.
    Så vores kode er bekymret for, om du kan være et computer-program.
    Indtil videre er du blokeret fra at søge. Prøv igen senere.
error-csrf-headline = Sessionens tidsfrist udløb
error-csrf-blurb = Brug din browsers Tilbage-knap, genindlæs siden og prøv igen.
error-invalid-unsub = Sådan framelder du advarsler fra { -product-name }
error-invalid-unsub-blurb =
    Du kan afmelde dig i én af de mails, som
    du har fået fra { -product-name }. Kig i din indbakke, og find en mail fra
    { -brand-team-email }. Klik så på linket i bunden af mailen for at afmelde.
login-link-pre = Har du en konto?
login-link = Log ind
# This string is displayed under a large numeral that indicates the total number
# of email address a user has signed up for monitoring. Don’t add $emails to
# your localization, because it would result in the number showing twice.
email-addresses-being-monitored =
    { $emails ->
        [one] mailadresse overvåges
       *[other] mailadresser overvåges
    }
# This string is displayed under a large numeral that indicates the total number
# of data breaches that have exposed the user’s information. Don’t add $breaches to
# your localization, because it would result in the number showing twice.
data-breaches-exposed =
    { $breaches ->
        [one] datalæk har kompromitteret dine oplysninger
       *[other] datalæk har kompromitteret dine oplysninger
    }
# This string is displayed under a large numeral that indicates the total number
# of data breaches that exposed a user’s password. Don’t add $passwords to
# your localization, because it would result in the number showing twice.
passwords-exposed =
    { $passwords ->
        [one] adgangskode kompromitteret i alle datalæk
       *[other] adgangskoder kompromitteret i alle datalæk
    }
# This string is displayed under a large numeral that indicates the total number
# of data breaches that have exposed the user’s information. Don’t add $breaches to
# your localization, because it would result in the number showing twice.
known-data-breaches-exposed =
    { $breaches ->
        [one] Kendt datalæk har kompromitteret dine oplysninger
       *[other] Kendte datalæk har kompromitteret dine oplysninger
    }
# Button
see-additional-breaches = Se yderligere datalæk
# A button on the All Breaches page that restores all of the breaches
# back to the page if the user has filtered some of them out.
see-all-breaches = Se alle datalæk
scan-results-known-breaches =
    { $breachCount ->
        [one] Denne mailadresse optrådte i 1 kendt datalæk.
       *[other] Denne mailadresse optrådte i { $breachCount } kendte datalæk.
    }
# This string is shown at the top of the scan results page and is followed
# by the email address that the user searched.
# In page, it reads "Results for: searchedEmail@monitor.com"
results-for = Resultater for: { $userEmail }
other-monitored-emails = Andre overvågede mailadresser
email-verification-required = Bekræftelse af mailadresse påkrævet
fxa-primary-email = Primær mailadresse til { -brand-fxa }
what-is-a-website-breach = Hvad er et websteds-læk?
website-breach-blurb = En datalæk på et websted kan skyldes cyber-kriminelle, der stjæler, kopier eller eksponerer personlig information fra online-konti. Det er som regel resultatet af, at hackere har fundet et svagt punkt i webstedets sikkerhedsforanstaltninger. Datalæk kan også finde sted, når konto-information lækkes ved et uheld.
security-tips-headline = Sikkerhedstips til at beskytte dig mod hackere
steps-to-protect = Hvad du kan gøre for at beskytte din identitet på nettet
take-further-steps = Tag yderligere forholdsregler for at beskytte din identitet
alert-about-new-breaches = Advar mig om nye datalæk
see-if-youve-been-part = Se, om du er omfattet af en datalæk på nettet.
get-ongoing-breach-monitoring = Få løbende overvågning af flere mailadresser for datalæk.
# This is a button and follows a headline reading "Was your info exposed in the ___ breach?"
find-out = Undersøg
new-unsub-error = Du skal framelde dig i én af de mails, { -product-name } har sendt dig.
other-known-breaches-found =
    { $breachCount ->
        [one] Men den optrådte i { $breachCount } anden kendt datalæk.
       *[other] Men den optrådte i { $breachCount } andre kendte datalæk.
    }
# This string appears on breach detail pages and is followed by a list
# of data classes that the breach exposed.
additional-information-including = Yderligere information, inklusive:
# Title
email-addresses-title = Mailadresser
# This is a standardized breach overview blurb that appears on all breach detail pages.
# $breachTitle is the name of the breached company or website.
# $breachDate and $addedDate are calendar dates.
breach-overview = Den { $breachDate } blev { $breachTitle } udsat for en datalæk. Da datalækken blev opdaget og bekræftet, blev den tilføjet til vores database den { $addedDate }.
# Title appearing on the Preferences dashboard. 
monitor-preferences = { -product-short-name }-indstillinger
# When a user is signed in, this appears in the drop down menu 
# and is followed by the user's primary Firefox Account email. 
signed-in-as = Logget ind som: { $userEmail }
# Appears on the All Breaches page and is followed by a list of filter options
# that a user can filter the visible breaches by.
filter-by = Filtrer efter kategori:
# Title that appears in the mobile menu bar and opens the mobile menu when clicked.
menu = Menu
to-affected-email = Send alle advarsler om datalæk til den berørte mailadresse
# This string appears in a banner at the top of each page and is followed by a "Learn More" link.
join-firefox = Beskyt dit privatliv på nettet. Slut dig til { -brand-name }.
# Link title
learn-more-link = Læs mere.
email-sent = Mailen blev sendt!
# Form title
want-to-add = Vil du tilføje en mailadresse mere?
# This is part of a confirmation message that appears after a user has submitted
# the form to add an additional email to Firefox Monitor.
verify-the-link = Bekræft linket sendt til { $userEmail } for at føje mailadressen til { -product-name }.
# This is part of a confirmation message that appears after a user has submited the
# form to add an additional email to Firefox Monitor. { $preferencesLink } is a link
# to the Preferences page. The code and text for the link is generated elsewhere
# using the { preferences } string.
manage-all-emails = Håndter alle mailadresser i { $preferencesLink }.
# This string is a header on the user preferences page and
# appears above a check-box list of user options which allow
# the user to choose whether or not they want to receive breach
# alerts for all of their monitored email addresses to a single 
# email address.
breach-alert-notifications = Advarsler om datalæk
# This string is a label for the calendar date a breach is added to the database
# and is followed by that date. 
breach-added-label = Datalæk tilføjet:
