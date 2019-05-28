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
hibp-notify-email-subject = { -product-name } advarsel: Din konto har været ramt af en datalæk.
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
breach-added = Datalæk rapporteret:
breach-discovered = Datalæk opdaget:
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
delayed-reporting-copy =
    Det kan nogle gange tage måneder eller år, før data involveret 
    i datalæk dukker op på websteder, der bruges af kriminelle. Datalæk bliver føjet til
    vores database, så snart de opdages og er blevet verificeret.
about-fxm-headline = Om { -product-name }
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

## What to do after data breach tips


## Updated error messages

