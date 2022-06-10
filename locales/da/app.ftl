# Strings for the main app


## The following messages are brand and should be kept entirely in English
## unless otherwise indicated.

-product-name = Firefox Monitor
-product-name-nowrap = <span class="nowrap">{ -product-name }</span>
-product-short-name = Monitor
-brand-name = Firefox
-brand-Mozilla = Mozilla
-brand-HIBP = Have I Been Pwned
-brand-fxa = Firefox-konto
-brand-pocket = Pocket
-brand-lockwise = Firefox Lockwise
-brand-send = Firefox Send
-brand-fpn = Firefox Private Network
-brand-mozilla-vpn = Mozilla VPN
-brand-relay = Firefox Relay

##

# “account” can be localized, “Firefox” must be treated as a brand,
# and kept in English.
-brand-fx-account = Firefox-konto
terms-and-privacy = Vilkår og beskyttelse af personlige oplysninger
GitHub-link-title = GitHub
error-scan-page-token = Du har forsøgt at skanne for mange mail-adresser inden for et kort tidsrum. Vi har af sikkerhedsgrunde blokeret din mulighed for at søge indtil videre. Du kan prøve igen senere.
error-could-not-add-email = Kunne ikke tilføje mailadressen til databasen.
error-not-subscribed = Denne mailadresse er ikke tilmeldt { -product-name }.
error-hibp-throttled = For mange forbindelser til { -brand-HIBP }.
error-hibp-connect = Kan ikke forbinde til { -brand-HIBP }.
error-hibp-load-breaches = Kunne ikke indlæse datalæk.
error-must-be-signed-in = Du skal være logget ind på din { -brand-fxa }.
error-to-finish-verifying = For at afslutte bekræftelsen af denne mailadresse til { -product-name } skal du være logget ind med din primære mailadresse til din konto.
home-title = { -product-name }
home-not-found = Side ikke fundet.
oauth-invalid-session = Ugyldig session
scan-title = { -product-name } : Skanningsresultater
user-add-invalid-email = Ugyldig mailadresse
user-add-too-many-emails = Du overvåger det maksimale antal mailadresser.
user-add-email-verify-subject = Bekræft din tilmelding til { -product-name }.
user-add-duplicate-email = Denne mailadresse er allerede føjet til { -product-name }.
user-add-duplicate-email-part-2 = Besøg { $preferencesLink } for at kontrollere status af { $userEmail }.
error-headline = Fejl
user-verify-token-error = Der kræves et bekræftelses-token.
user-verify-email-report-subject = Din { -product-name }-rapport
user-unsubscribe-token-error = Afmelding kræver et token.
user-unsubscribe-token-email-error = Afmelding kræver et token og en e-mailHash.
user-unsubscribe-title = { -product-name } : Afmeld
pwt-section-headline = Stærkere adgangskoder = Bedre beskyttelse
landing-headline = Din beskyttelse mod hackere begynder her.
scan-placeholder = Indtast en mailadresse
scan-submit = Søg efter din mailadresse
scan-error = Mailadressen skal være gyldig.
download-firefox-banner-button = Hent { -brand-name }
# Appears after Firefox Monitor has sent a verification email to a new user. 
signup-modal-sent = Sendt!
sign-up = Tilmeld dig
form-signup-error = Mailadressen skal være gyldig
# breach-date = the calendar date a particular data theft occurred. 
breach-date = Dato for datalæk:
# compromised accounts = the total number of user accounts exposed in data breach
compromised-accounts = Kompromitterede konti:
# compromised-data = the kind of user data exposed to hackers in data breach.
compromised-data = Kompromitterede data:
unsub-headline = Afmeld { -product-name-nowrap }
unsub-blurb = Dette vil fjerne din mailadresse fra { -product-name-nowrap }s database, og du vil ikke længere modtage advarsler, når nye datalæk opdages.
unsub-button = Stop abonnement
# Breach data provided by Have I Been Pwned.
hibp-attribution = Information om datalæk stammer fra { $hibp-link }
share-twitter = De fleste mennesker har omkring 100 online-konti. Er nogle af dine konti blevet kompromitteret i en datalæk? Find ud af det.
share-facebook-headline = Find ud af, om du er blevet udsat for en datalæk.
share-facebook-blurb = Er dine online-konti blevet ramt i en datalæk?
og-site-description = Brug { -product-name } til at finde ud af, om du er blevet ramt af en datalæk. Tilmeld dig for at få advarsler om nye datalæk og få tips til at beskytte dine konti.
show-all = Vis alle
fxa-scan-another-email = Vil du tjekke en anden mailadresse?
sign-in = Log ind
sign-out = Log ud
# Manage Firefox Account, link to page where account holders can change their account settings.
manage-fxa = Håndter { -brand-fxa }
have-an-account = Har du allerede en konto?
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
# Alerts is a noun
sign-up-for-alerts = Tilmeld dig advarsler
# Link title
frequently-asked-questions = Ofte stillede spørgsmål
about-firefox-monitor = Om { -product-name }
# Link title
preferences = Indstillinger
# Link title
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
sensitive-sites = Hvordan behandler { -product-name } websteder, der har følsomme data om sine brugere?
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
change-pw-site = Skift adgangskode for dette websted
even-for-old = Selv for gamle konti er det vigtigt at opdatere dine adgangskoder.
make-new-pw-unique = Gør den nye adgangskode anderledes og unik
strength-of-your-pw = Hvor sikker du er på nettet afhænger af, hvor sikre dine adgangskoder er.
create-strong-passwords = Sådan opretter du stærke adgangskoder
stop-reusing-pw = Stop med at genbruge den samme adgangskode
create-unique-pw = Opret unikke adgangskoder og gem dem et sikkert sted, fx i et program til håndtering af adgangskoder.
five-myths = 5 myter om programmer til håndtering af adgangskoder
create-a-fxa = Opret en { -brand-fxa } for at modtage din fuldstændige rapport over datalæk og fremtidige advarsler.
feat-security-tips = Sikkerhedstips til at beskytte dine konti
feat-sensitive = Avanceret søgning i datalæk af følsomme data
feat-enroll-multiple = Få overvåget flere mailadresser for datalæk
# This string is shown beneath each of the user’s email addresses to indicate
# how many known breaches that email address was found in. 
appears-in-x-breaches =
    { $breachCount ->
        [one] Optræder i { $breachCount } kendt datalæk.
       *[other] Optræder i { $breachCount } kendte datalæk.
    }
check-for-breaches = Undersøg for datalæk
find-out-what-hackers-know = Find ud af, hvad hackerne allerede ved om dig. Lær, hvordan du kan være et skridt foran dem.
get-email-alerts = Beskyt dig selv: Få advarsler via mail, når dine data optræder i en kendt datalæk
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
# Button title
manage-email-addresses = Håndter mailadresser
# Link title
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
was-your-info-exposed = Er dine oplysninger blevet kompromitteret i { $breachName }-datalækken?
find-out-if = Find ud af, om dine data er blevet kompromitteret i denne datalæk.
fb-not-comp = Denne mailadresse optrådte ikke i { $breachName }-datalækken.
other-breaches-found =
    { $breachCount ->
        [one] Men den optrådte i { $breachCount } anden datalæk.
       *[other] Men den optrådte i { $breachCount } andre datalæk.
    }
fb-comp-only = Denne mailadresse optrådte i { $breachName }-datalækken.
fb-comp-and-others =
    { $breachCount ->
        [one] Denne mailadresse optrådte i { $breachCount } kendt datalæk, herunder { $breachName }.
       *[other] Denne mailadresse optrådte i { $breachCount } kendte datalæk, herunder { $breachName }.
    }
no-other-breaches-found = Den grundlæggende søgning fandt ikke andre datalæk.
no-results-blurb = Beklager, men den datalæk er ikke i vores database.
all-breaches-headline = Alle datalæk i { -product-name }
search-breaches = Søg efter datalæk
# This string contains nested markup that is later used to style and link the text inside of it.
# Please do not modify or remove "<a>", "</a>", "<span>" and "</span>".
facebook-breach-note =
    <span>Din mailadresse optræder ikke i denne læk,
    men dit telefonnummer kan stadig være i fare. </span> Nogle af de kompromitterede
    konti i Facebook-lækken inkluderede telefonnumre og andre personlige oplysninger - 
    men ikke mailadresser. Hvis du på et tidspunkt har registreret en konto på Facebook
    så anbefaler vi, at du følger disse trin for at beskytte dig selv. Også selvom du ikke bruger
    kontoen længere.
# This string contains nested markup that is later used to style and link the text inside of it.
# Please do not modify or remove "<a>", "</a>", "<span>" and "</span>".
facebook-breach-what-to-do-1-headline = <span>Sæt din information til "Kun mig" eller en anden ikke-offentlig indstilling på <a>din Facebook-profil</a></span>
facebook-breach-what-to-do-1-copy =
    I denne læk kom hackere i besiddelse af
    oplysninger, der var sat til "tilgængeligt for alle" eller "delt med venner."
    Disse oplysninger kan kombineres med andre data for at få adgang til flere
    af dine personlige oplysninger og konti.
# This string contains nested markup that is later used to style and link the text inside of it.
# Please do not modify or remove "<a>", "</a>", "<span>" and "</span>".
facebook-breach-what-to-do-2-headline =
    <span>Skift adgangskode, PIN eller andre sikkerheds-oplysninger for
    konti, der vedrører <a>dine mobil-abonnementer</a> for at forhindre at svindlere overtager dit telefonnummer ved hjælp af SIM-swapping</span>.
facebook-breach-what-to-do-2-copy =
    SIM-swapping - eller SIM-jacking - handler om, 
    at en hacker bruger telefonnumre, fødselsdato eller andre personlige data
    til at overtage andre menneskers mobiltelefonnumre og derefter få adgang til deres mailkonti, 
    profiler på sociale medier eller sågar deres bankkonti.
facebook-breach-what-to-do-3 = Se alle anbefalingerne på vores side om Facebok-lækken
# "Appears in-page as: Showing: All Breaches"
currently-showing = Viser:

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
# This string is displayed under a large numeral that indicates the total number
# of email address a user has signed up for monitoring. Don’t add $emails to
# your localization, because it would result in the number showing twice.
email-addresses-being-monitored =
    { $emails ->
        [one] mailadresse overvåges
       *[other] mailadresser overvåges
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
        [one] kendt datalæk har kompromitteret dine oplysninger
       *[other] kendte datalæk har kompromitteret dine oplysninger
    }
# Button
see-additional-breaches = Se yderligere datalæk
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
# This is a section headline on the breach detail page that appears above
# a short summary about the breach.
breach-overview-title = Oversigt
# This is a standardized breach overview blurb that appears on all breach detail pages.
# $breachTitle is the name of the breached company or website.
# $breachDate and $addedDate are calendar dates.
breach-overview-new = Den { $breachDate } blev { $breachTitle } udsat for en datalæk. Da datalækken blev opdaget og bekræftet, blev den føjet til vores database den { $addedDate }.
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

## These are part of a confirmation page that appears after a user has verified
## an additional email to Firefox Monitor.

email-verified = Mailadresse bekræftet!
email-added-to-subscription = Vi vil advare dig, hvis { $email } optræder i en datalæk.
# This message is displayed after the user has verified their email address.
# { $nestedSignInLink } is replaced by a link, using sign-in-nested as text ("sign in" for English).
email-verified-view-dashboard = { $nestedSignInLink } for at se og håndtere alle de mailadresser, du har tilmeldt overvågning af datalæk.
# This message is used as a text for the subscribe link in email-verified-view-dashboard
sign-in-nested = Log ind

##

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
how-hackers-work-desc = Beskyt dine adgangskoder mod kriminelle på nettet – det er dem, de er mest interesserede i.
what-to-do-after-breach-desc = Skift adgangskoder til dine konti, så dine informationer ikke falder i de forkerte hænder.
create-strong-passwords-desc = Gør dine adgangskoder stærke, sikre og svære at gætte.
steps-to-protect-desc = Forstå de mest almindelige trusler, og hvad du skal holde øje med.
five-myths-desc = Undgå dårlige adgangskode-vaner, som gør det nemt for hackerne.
take-further-steps-desc = Find ud af, hvordan du mindsker riskoen for identitetstyveri og undgår økonomiske tab.
# This message appears after a user has successfully updated their communication settings.
changes-saved = Ændringer gemt!
# Section headline
rec-section-headline = Hvad skal jeg gøre ved denne datalæk?
rec-section-subhead = Vi anbefaler, at du følger disse forholdsregler til at sikre dine personlige data og beskytte din digitale identitet.
# Section headline
rec-section-headline-no-pw = Hvad skal jeg gøre for at beskytte mine personlige data?
rec-section-subhead-no-pw = Selvom adgangskoder ikke blev kompromitteret i dette datalæk, er der stadig forholdsregler, du kan tage for bedre at beskytte dine personlige data.
# Button
see-additional-recs = Se flere anbefalinger

## This string contains nested markup that becomes a link later in the code.
## Please do not modify or remove "<a>" and "</a>".

resolve-top-notification = { $affectedEmail } optrådte i denne datalæk. <a>Hvad skal jeg gøre?</a>
resolve-top-notification-plural =
    { $numAffectedEmails ->
        [one] { $numAffectedEmails } af dine mailadresser optrådte i denne datalæk. <a>Hvad skal jeg gøre?</a>
       *[other] { $numAffectedEmails } af dine mailadresser optrådte i denne datalæk. <a>Hvad skal jeg gøre?</a>
    }

##

marking-this-subhead = Markerer denne datalæk som løst
# This string contains nested markup that is later used to style the text inside of it.
# Please do not modify or remove "<span>" and "</span>".
marking-this-body =
    <span>Når du har taget de forholdsregler, du kan for at løse denne datalæk</span>,
    kan du markere den som løst. Du kan se detaljer om datalækken 
    når som helst fra din oversigt.
mark-as-resolve-button = Marker som løst
marked-as-resolved-label = Markeret som løst
undo-button = Fortryd
confirmation-1-subhead = Godt gået! Du har lige løst din første datalæk.
confirmation-1-body = Hold dampen oppe. Kontrollér din oversigt for at se, om der er mere at gøre.
confirmation-2-subhead = Tag dén, hackere!
confirmation-2-body = Du tager vigtige skridt i retning af at beskytte dine online-konti.
confirmation-3-subhead = Endnu én klaret. Godt arbejde!
# This string contains nested markup that becomes a link later in the code.
# Please do not modify or remove "<a>" and "</a>".
confirmation-3-body = Er din nye adgangskode unik, stærk og svær at gætte? <a>Find ud af det</a>
generic-confirmation-subhead = Denne datalæk er blevet markeret som løst
generic-confirmation-message =
    { $numUnresolvedBreaches ->
        [one] Gå til din oversigt for at se den tilbageværende datalæk.
       *[other] Gå til din oversigt for at se de tilbageværende datalæk.
    }
return-to-breach-details-link = Vend tilbage til detaljer om datalæk
go-to-dashboard-link = Gå til oversigten
# This string appears above a breach resolution progress bar and indicates
# the percentage of breaches a user has resolved. For instance, "27% complete".
progress-percent-complete = { $percentComplete }% fuldført
# This string appears in the purple callouts at the top of the user dashboard and shows
# the total number of breaches a user has resolved. For instance, "5 Resolved".
num-resolved =
    { $numResolvedBreaches ->
        [one] { $numResolvedBreaches } løst
       *[other] { $numResolvedBreaches } løste
    }
progress-intro-subhead = Nyt i { -product-name }: Markér datalæk som løst
progress-intro-message =
    Når du har gennemgået detaljerne om en datalæk og taget skridt til at beskytte 
    dine personlige oplysninger, kan du markere lækken som løst.
progress-status =
    { $numTotalBreaches ->
        [one] { $numResolvedBreaches } ud af { $numTotalBreaches } datalæk markeret som løst
       *[other] { $numResolvedBreaches } ud af { $numTotalBreaches } datalæk markeret som løste
    }
progress-complete = Alle kendte datalæk er blevet markeret som løste

## These strings contain nested markup that is later used to style the text inside of it.
## Please do not modify or remove "<span>" and "</span>".

progress-message-1 =
    <span>Du er kommet godt fra start!</span> Undersøg de resterende datalæk for at lære, 
    hvilke forholdsregler du skal tage.
progress-message-2 =
    <span>Bliv ved!</span> Små ændringer som at opdatere adgangskoder har stor betydning 
    for at dine personlige oplysninger er sikre.
progress-message-3 = <span>Godt gået med at få løst de datalæk!</span> Fortsæt lidt endnu - du har stadig nogle at få styr på.
progress-message-4 = <span>Næsten færdig!</span> Du er tæt på at være i mål.
progress-complete-message =
    <span>Var det ikke rart?</span> Hvis du har lyst til at fortsætte, så er det et godt tidspunkt at
    gøre dine andre logins mere sikre med nogle stærkere adgangskoder.

##

resolve-this-breach-link = Løs denne datalæk
# This string appears in resolved breach cards and is followed by 
# the date the user marked the breach as resolved.
marked-resolved = Markeret som løst:
hide-resolved-button = Skjul løste
show-resolved-button = Vis løste
unresolved-passwords-exposed =
    { $numPasswords ->
        [one] Adgangskode kompromitteret i uløste datalæk
       *[other] Adgangskoder kompromitteret i uløste datalæk
    }
known-data-breaches-resolved =
    { $numResolvedBreaches ->
        [one] Kendt datalæk markeret som løst
       *[other] Kendte datalæk markeret som løste
    }
# A status indicator that appears in the top right corner of new breach cards
new-breach = Ny
mobile-promo-headline = Få { -brand-name } på din telefon og tablet
mobile-promo-body = Hurtig, privat og sikker browsing uanset hvor du er. Find { -brand-name } på Google Play og App Store.
mobile-promo-cta = Få { -brand-name } til Android og iOS
promo-lockwise-headline = Tag dine adgangskoder med overalt
lockwise-promo-body = Hold styr på dine logins på tværs af enheder. Opret sikkert adgang til dem fra din computer, telefon eller tablet.
promo-lockwise-cta = Hent { -brand-lockwise }
fpn-promo-headline = Skjul din placering fra websteder og sporings-mekanismer
promo-fpn-body = { -brand-fpn } skjuler din rigtige IP-adresse fra websteder og dataindsamlere, der skaber profiler af dig ved hjælp af reklamer.
promo-fpn-cta = Få { -brand-fpn }
monitor-promo-headline = Hold dig opdateret om nye datalæk
monitor-promo-body = Få besked næste gang dine personlige data bliver kompromitteret i en kendt datalæk
ecosystem-promo-headline = Beskyt dit online-liv med produkter, der sætter privatlivet først
ecosystem-promo-body = Alle { -brand-name }-produkter lever op til vores løfte om personlige data: Gem mindre. Beskyt alt. Ingen hemmeligheder.
promo-ecosystem-cta = Se alle produkter
steps-to-resolve-headline = Fremgangsmåde til at løse denne datalæk
vpn-promo-headline = Nu er det tid til at forbedre din sikkerhed på internettet.
vpn-promo-copy = { -brand-Mozilla }s Virtual Private Network beskytter din internetforbindelse mod hackere og spioner.
vpn-promo-cta = Få { -brand-mozilla-vpn }
vpn-promo-headline-new = Spar 50% med et årsabonnement
vpn-promo-copy-new = Beskyt dine online-data - vælg et VPN-abonnement, der passer til dine behov.

## VPN promotional banner.  HTML tags should not be translated, e.g. `<em>`

# user's IP location is determined dynamically by 3rd-party, eg: "Your location: Los Angeles, CA".  The 3rd-party service provides its own localization.
vpn-banner-location = Din placering: { $ip-location }
vpn-banner-protect-yourself-with-vpn = <em>Beskyt dig selv</em> med { -brand-mozilla-vpn }.
vpn-banner-protected-with-vpn = <em>Beskyttet</em> med { -brand-mozilla-vpn }.
vpn-banner-title-1 = Du er beskyttet — Tak fordi du bruger { -brand-mozilla-vpn }.
vpn-banner-title-2 = Din placering kan spores, hvis du ikke bruger en VPN.
vpn-banner-subtitle-2 = Beskyt din placering og surf sikkert i 3 trin
vpn-banner-status-protected = Nuværende status: <em>Beskyttet ✓</em>
vpn-banner-status-not-protected = Nuværende status: <em>Ikke beskyttet ⚠</em>
# user's IP address is determined dynamically, eg: "IP address: 192.168.1.1"
vpn-banner-ip-address = IP-adresse: { $ip-address }
vpn-banner-step-1 = Abonner på { -brand-mozilla-vpn }
vpn-banner-step-2 = Vælg en VPN-placering
vpn-banner-step-3 = Aktiver VPN og surf sikkert
vpn-banner-cta = Få { -brand-mozilla-vpn }
# button to expand panel
vpn-banner-cta-expand = Udvid
# button to close panel
vpn-banner-cta-close = Luk

## Relay and VPN educational/ad units

ad-unit-relay-cta = Læs mere om { -brand-relay }
ad-unit-vpn-cta = Læs mere om { -brand-mozilla-vpn }
# ad 1 heading
ad-unit-1-how-do-you-keep = Hvordan holder du din mailadresse hemmelig?
# ad 2 heading
ad-unit-2-do-you-worry = Er du bekymret for sikkerheden på offentlige wi-fi?
# ad 3 heading
ad-unit-3-stay-in-the-game = Hold fokus!
ad-unit-3-lets-you-keep = { -brand-mozilla-vpn } sørger for, at din forbindelse er stabil og sikker, når du spiller spil eller streamer film.
# ad 3 list item 1
ad-unit-3-prevent-throttling = Undgå neddrosling
# ad 3 list item 2
ad-unit-3-be-anywhere = Vær hvor som helst i verden
# ad 3 list item 3
ad-unit-3-access-more = Få adgang til mere
# ad 4 heading
ad-unit-4-shopping-with = Maskér din mailadresse, når du handler ind
ad-unit-4-want-to-buy = Vil du købe noget på nettet, selvom du ikke kender eller stoler på butikken?
ad-unit-4-shop-online = Maskér din mailadresse, når du handler på nettet. Få bekræftelsen sendt til din rigtige mailadresse, og deaktiver nemt maskeringen, når det passer dig.
ad-unit-5-instantly-make = Maskér hurtigt din mailadresse, uanset hvor du er.
ad-unit-5-privately-sign-in = Maskér din mailadresse, når du vil logge ind privat på din yndlingscafé eller et offentligt wi-fi
ad-unit-5-share-custom-email = Brug en maskeret mailadresse til at modtage kvitteringer fra butikker - uden at dele din rigtige mailadresse
# ad 5 subheading 3
ad-unit-5-use-on-phone = Brug det på din telefon
ad-unit-5-no-matter-where = Maskér lynhurtigt din mailadresse, uanset hvor du er
ad-unit-6-want-to-start = Vil du starte et nyt abonnement, svare på en indbydelse eller få en rabatkode uden at din indbakke bliver fyldt med spam?
ad-unit-6-before-you-complete = Maskér din mailadresse for at beskytte dine oplysninger og behold kontrollen over din indbakke, næste gang du skal oprette dig som bruger et sted
