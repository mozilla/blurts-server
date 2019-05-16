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
layout-support = Hjälp
# Link that takes the user to a blog post on blog.mozilla.org about the alerts
about-firefox-alerts = Om Firefox-varningar
# Link that takes the user to a Firefox Monitor survey. 
give-feedback = Ge återkoppling
terms-and-privacy = Villkor och sekretess
error-scan-page-token = Du försökte skanna för många e-postadresser inom en kort tidsperiod. Av säkerhetsskäl har vi tillfälligt blockerat dig från nya sökningar. Du kommer att kunna försöka igen senare.
error-could-not-add-email = Kunde inte lägga till e-postadress i databasen.
error-not-subscribed = Den här e-postadressen prenumererar inte på { -product-name }.
error-hibp-throttled = För många anslutningar till { -brand-HIBP }.
error-hibp-connect = Det gick inte att ansluta till { -brand-HIBP }.
error-hibp-load-breaches = Kunde inte ladda intrång.
hibp-notify-email-subject = { -product-name } varning: Ditt konto var inblandat i ett intrång.
home-title = { -product-name }
home-not-found = Sidan hittades inte.
oauth-invalid-session = Ogiltig session
oauth-confirmed-title = { -product-name }: Prenumererar
scan-title = { -product-name }: Skanna resultat
user-add-invalid-email = Ogiltig e-postadress
user-add-email-verify-subject = Verifiera din prenumeration på { -product-name }.
user-add-title = { -product-name }: Bekräfta e-postadress
error-headline = Fel
user-verify-token-error = Verifieringstecken är obligatoriskt.
user-verify-email-report-subject = Ditt rapport för { -product-name }
user-verify-title = { -product-name }: Prenumererar
user-unsubscribe-token-error = Avsluta prenumeration kräver ett tecken.
user-unsubscribe-token-email-error = Avsluta prenumeration kräver ett tecken och emailHash.
user-unsubscribe-title = { -product-name }: Avsluta prenumeration
user-unsubscribe-survey-title = { -product-name }: Avsluta undersökning
user-unsubscribed-title = { -product-name }: Avslutat prenumeration

## Password Tips

pwt-section-headline = Starkare lösenord = bättre skydd
pwt-section-subhead = Din privata information är endast lika säker som dina lösenord.
pwt-section-blurb = Dina lösenord skyddar mer än dina konton. De skyddar alla personliga uppgifter som finns i dem. Hackare litar på dåliga vanor, som att använda samma lösenord överallt eller använda vanliga fraser (p@ssw0rd, någon?) så att de kan hacka många om de hackar ett konto. Så här skyddar du dina konton bättre.
pwt-headline-1 = Använd olika lösenord för varje konto
pwt-summary-1 = Återanvändning av samma lösenord överallt lämnar dörren öppen för identitetsstöld. Alla med det lösenordet kan logga in på alla dina konton.
pwt-headline-2 = Skapa starka, svåra lösenord att gissa
pwt-summary-2 =
    Hackers använder tusentals vanliga lösenord för att försöka gissa ditt.
    Ju längre och mer slumpmässigt ditt lösenord är desto svårare blir det att gissa.
pwt-headline-3 = Behandla säkerhetsfrågor som extra lösenord
pwt-summary-3 =
    Webbplatser kontrollerar inte att dina svar är korrekta, bara att de matchar varje gång.
    Skapa långa, slumpmässiga svar och lagra dem någonstans säkert.
pwt-headline-4 = Få hjälp med att komma ihåg dina lösenord
pwt-summary-4 =
    Lösenordshanterare som 1Password, LastPass, Dashlane och Bitwarden genererar starka, unika lösenord. 
    De lagrar också lösenord säkert och fyller i dem på webbplatser åt dig
pwt-headline-5 = Lägg till extra säkerhet med tvåfaktorsautentisering
pwt-summary-5 = 2FA kräver ytterligare information (en engångskod som skickas via SMS) för att logga in på ditt konto. Även om någon har ditt lösenord kan de inte komma in.
pwt-headline-6 = Registrera dig för varningar från { -product-name-nowrap }
pwt-summary-6 = Webbplatsintrång ökar. Så snart ett nytt intrång läggs till i vår databas skickar { -product-name-nowrap } dig en varning - så du kan vidta åtgärder och skydda ditt konto.
landing-headline = Din rätt att vara säker från hackare börjar här.
landing-blurb =
    { -product-name-nowrap } ger dig verktyg för att hålla din personliga information säker. 
    Ta reda på vad hackare redan vet om dig, och lära dig hur du kan ligga ett steg före dem.
scan-label = Se om du har varit inblandad i en dataintrång.
scan-placeholder = Ange e-postadress
scan-privacy = Din e-post lagras inte.
scan-submit = Sök efter din e-postadress
scan-another-email = Skanna en annan e-postadress
scan-featuredbreach-label = Ta reda på om ditt <span class="bold"> { $featuredBreach } </span> konto har äventyrats.
sensitive-breach-email-required = Intrång innehåller känslig information. E-postbekräftelse krävs.
scan-error = Måste vara en giltig e-postadress.
signup-banner-headline = { -product-name-nowrap } upptäcker hot mot dina konton på nätet.
signup-banner-blurb = Din detaljerade rapport från { -product-name-nowrap } visar om information från dina konton på nätet har läckt eller stulits. Vi kommer också att varna dig om dina konton visas på nya webbsidor.
download-firefox-bar-blurb = { -product-name-nowrap } presenteras av <span class="nowrap">helt nya { -brand-name }</span>.
download-firefox-bar-link = Hämta { -brand-name } nu
download-firefox-banner-blurb = Ta kontroll över din webbläsare
download-firefox-banner-button = Hämta { -brand-name }
signup-modal-headline = Registrera dig för { -product-name-nowrap }
signup-modal-blurb = Registrera dig för din fullständiga rapport, varningar när nya intrång inträffar och säkerhetsanvisningar från { -product-name-nowrap }.
signup-modal-close = Stäng
get-your-report = Få din rapport
signup-modal-verify-headline = Verifiera din prenumeration
signup-modal-verify-blurb = Vi skickade en verifieringslänk till <span id="submitted-email" class="medium"></span>.
signup-modal-verify-expiration = Den här länken upphör om 24 timmar.
signup-modal-verify-resend = Inte i inkorg eller skräppost? Skicka igen.
# Appears after Firefox Monitor has sent a verification email to a new user. 
signup-modal-sent = Skickat!
signup-with-fxa = Registrera dig med { -brand-name }-konto
form-signup-placeholder = Ange e-postadress
form-signup-checkbox = Få det senaste från { -brand-Mozilla } och { -brand-name }.
sign-up = Registrera dig
form-signup-error = Måste vara en giltig e-postadress
no-breaches-headline = Än så länge verkar allt bra.
found-breaches-headline = Din information var en del av ett dataintrång.
no-breaches =
    Din e-postadress visas inte i vår grundläggande skanning. 
    Det är bra nyheter, men dataintrång kan hända när som helst och det finns fortfarande mer du kan göra. 
    Prenumerera på { -product-name-nowrap } för en fullständig rapport, som varnar när nya intrång uppstår och tipsar om hur du skyddar dina lösenord.
featured-breach-results =
    { $breachCount ->
        [0] Ditt konto förkommer i dataintrånget <span class="bold">{ $featuredBreach }</span>, men verkar inte förekomma i några andra kända dataintrång.
        [one] Ditt konto förekom i intrånget <span class="bold">{ $featuredBreach }</span>, liksom { $breachCount } annat intrång.
       *[other] Ditt konto förekom i intrånget <span class="bold">{ $featuredBreach }</span>, liksom { $breachCount } andra intrång.
    }
featured-breach-not-compromised =
    { $breachCount ->
        [0] { no-breaches }
        [one] Ditt konto förekom inte i intrånget <span class="bold">{ $featuredBreach }</span>, men förekom i ett annat intrång.
       *[other] Ditt konto förekom inte i intrånget <span class="bold">{ $featuredBreach }</span>, men förekom i { $breachCount } andra intrång.
    }
scan-results =
    { $breachCount ->
        [0] { no-breaches }
        [one] Ditt konto förekom i { $breachCount } intrång.
       *[other] Konton som är kopplade till din e-postadress förekom i följande { $breachCount } intrång.
    }
show-more-breaches = Visa mer
what-to-do-headline = Vad ska du göra när din information är utsatt för ett dataintrång
what-to-do-subhead-1 = Ändra dina lösenord, även för gamla konton
what-to-do-blurb-1 = Om du inte kan logga in, kontakta webbplatsen för att fråga hur du kan återställa eller stänga av kontot. Ser du ett konto du inte känner igen? Webbplatsen kan ha ändrat namn eller någon kan ha skapat ett konto åt dig.
what-to-do-subhead-2 = Om du återanvänder ett exponerat lösenord, ändra det
what-to-do-blurb-2 = Hackare kan försöka återanvända ditt exponerade lösenord för att komma in på andra konton. Skapa ett annat lösenord för varje webbplats, särskilt för ditt bankkonto, e-post och andra webbplatser där du sparar personlig information.
what-to-do-subhead-3 = Ta extra steg för att säkra dina finansiella konton
what-to-do-blurb-3 = De flesta intrång visar bara e-postadresser och lösenord, men vissa inkluderar känslig finansiell information. Om ditt bankkonto eller kreditkortsnummer ingår i ett intrång, varna din bank för eventuella bedrägerier och bevaka avgifter som du inte känner igen.
what-to-do-subhead-4 = Få hjälp med att skapa bra lösenord och hålla dem säkra.
what-to-do-blurb-4 = Lösenordshanterare som 1Password, LastPass, Dashlane och Bitwarden genererar starka lösenord, lagrar dem säkert och fyller i dem på webbplatser åt dig.
# breach-date = the calendar date a particular data theft occurred. 
breach-date = Intrångsdatum:
# compromised accounts = the total number of user accounts exposed in data breach
compromised-accounts = Berörda konton:
# compromised-data = the kind of user data exposed to hackers in data breach.
compromised-data = Berörd data:
confirmed = Bekräftat!<br />Du är prenumerant!
confirmed-blurb = { -product-name-nowrap } skickar dig en fullständig rapport inom kort och varnar om ditt konto visas i ett nytt rapporterat intrång.
confirmed-social-blurb = Om du har drabbats av ett intrång är chansen stor att dina vänner, familj eller kontakter på nätet har drabbats med. Berätta för dem om { -product-name-nowrap }.
unsub-headline = Avsluta prenumerationen från { -product-name-nowrap }
unsub-blurb = Detta kommer att ta bort din e-postadress från listan { -product-name-nowrap } och du får inte längre varningar när nya intrång meddelas.
unsub-button = Avsluta prenumeration
fxa-unsub-headline = Avbryt prenumerationen av varningar från { -product-name }.
fxa-unsub-blurb =
    Du får inte längre varningar från { -product-name }.
    Ditt { -brand-fxa } kommer att förbli aktivt, och du kan få annan
    kontorelaterad kommunikation.
unsub-survey-form-label = Varför avslutar du varningar från { -product-name-nowrap }?
unsub-reason-1 = Jag tror att varningarna inte gör mina data säkrare
unsub-reason-2 = Jag får för många e-postmeddelanden från { -product-name-nowrap }
unsub-reason-3 = Jag finner inte tjänsten värdefull
unsub-reason-4 = Jag har redan vidtagit åtgärder för att skydda mina konton
unsub-reason-5 = Jag använder en annan tjänst för att övervaka mina konton
unsub-reason-6 = Inget av ovanstående
unsub-survey-thankyou = Tack för din återkoppling.
unsub-survey-error = Var god välj en.
unsub-survey-headline-v2 = Din prenumeration har avslutats.
unsub-survey-blurb-v2 =
    Du kommer inte längre att få varningar från { -product-name }.
    Vill du ta en stund och svara på frågor om din upplevelse?
unsub-survey-button = Skicka in svar
# Link to share Firefox Monitor on Facebook. Positioned next to Facebook logo.
share = Dela
# Link to share Firefox Monitor on Twitter. Positioned next to Twitter logo.
tweet = Tweet
download-firefox-quantum = Hämta { -brand-Quantum }
download-firefox-mobile = Hämta { -brand-name } för mobil
# Features here refers to Firefox browser features. 
features = Funktioner
# beta-nightly-developer-edition refers to additional versions of Firefox Browser
beta-nightly-developer-edition = Beta, Nightly, Developer Edition
# Breach data provided by Have I Been Pwned.
hibp-attribution = Breach data tillhandahålls av { $hibp-link }
site-description = Har dina konton läckt eller blivit stulna vid ett dataintrång? Ta reda på det hos { -product-name }. Sök i vår databas och registrera dig för varningar.
confirmation-headline = Din rapport från { -product-name } är på väg.
confirmation-blurb = Dataintrång kan påverka alla. Sprid ordet så att dina vänner och familj kan kontrollera om deras konton på nätet är säkra.
share-email = E-postadress
# Appears at the end of a list of email-clients and refers to any other unlisted email-client.
share-other = Övriga
share-twitter = De flesta har cirka 100 konton på nätet. Har något av dessa blivit utsatt för ett dataintrång? Ta reda på det.
share-facebook-headline = Ta reda på om du har blivit utsatt för ett dataintrång
share-facebook-blurb = Har dina konton på nätet blivit utsatta för ett dataintrång?
og-site-description = Ta reda på om du har blivit utsatt för ett dataintrång med { -product-name }. Registrera dig för varningar om framtida intrång och få tips för att hålla dina konton säkra.
mozilla-security-blog = { -brand-Mozilla } säkerhetsblogg
# A header for a list of links to share Firefox Monitor on various social media platforms.
layout-social = Socialt
show-all = Visa alla
fxa-landing-blurb =
    Ta reda på vad hackare redan vet om dig,
    och lära dig hur du kan vara ett steg före dem.
fxa-scan-label = Se ifall du har förekommit i ett dataintrång.
fxa-welcome-headline = Välkommen till { -product-name }.
fxa-welcome-blurb = Du är redo att få varningar om { $userEmail } visas i ett dataintrång.
fxa-scan-another-email = Vill du kontrollera en annan e-postadress?
# Search Firefox Monitor
fxa-scan-submit = Sök { -product-name }
sign-up-to-check = Registrera dig för att kontrollera
sign-in = Logga in
sign-out = Logga ut
full-report-headline = Din  rapport från { -product-name }
see-full-report = Se fullständig rapport
# Manage Firefox Account, link to page where account holders can change their account settings.
manage-fxa = Hantera { -brand-fxa }
fxa-download-firefox-bar-blurb = Presenteras av  { -brand-name }. 2x snabbare. Använder 30% mindre minne än { -brand-Chrome }.
fxa-download-firefox-bar-link = Hämta nu
fxa-download-firefox-banner-blurb = Bättre, snabbare sidladdning som använder mindre datorminne.
user-fb-compromised-headline = { $userEmail } förekom i dataintrång { $breachName }.
guest-fb-compromised-headline = Denna e-postadress förekom i dataintrång { $breachName }.
user-zero-breaches-headline = { $userEmail } förekom i noll dataintrång.
guest-zero-breaches-headline = Denna e-postadress förekom i noll dataintrång.
user-scan-results-headline =
    { $breachCount ->
        [one] { $userEmail } förekom i ett dataintrång.
       *[other] { $userEmail } förekom i { $breachCount } dataintrång.
    }
guest-scan-results-headline =
    { $breachCount ->
        [one] Denna e-postadress förekom i ett dataintrång.
       *[other] Denna e-postadress förekom i { $breachCount } dataintrång.
    }
user-no-breaches-blurb = Vi meddelar dig om den här e-postadressen visas i ett nytt dataintrång.
guest-no-breaches-blurb =
    För att se om denna e-postadress visas vid känsliga dataintrång, skapa ett { -brand-fxa }.
    Vi meddelar dig även om den här adressen visas i nya dataintrång.
user-one-breach-blurb = Detta intrång avslöjade följande personliga information.
user-fb-compromised-blurb =
    { $breachCount ->
        [one] Din e-postadress förekom också i { $breachCount } annat dataintrång.
       *[other] Din e-postadress förekom också i { $breachCount } andra dataintrång.
    }
user-generic-fb-compromised-blurb =
    { $breachCount ->
        [one] Denna e-postadress förekom i { $breachCount } annat dataintrång.
       *[other] Denna e-postadress förekom i { $breachCount } andra dataintrång.
    }
user-fb-compromised-single =
    Denna intrång avslöjade följande personliga information. Om du inte redan 
    har gjort det, ändra dina lösenord.
user-generic-fb-compromised-single = Detta intrång avslöjade följande personliga information.
guest-fb-compromised-single-v2 =
    Detta intrång avslöjade följande personliga information.
    Skapa ett gratis { -brand-fxa } för din fullständiga rapport om tidigare intrång, nya intrångsvarningar
    och information om andra { -brand-Mozilla }-tjänster.
guest-fb-compromised-blurb-v2 =
    { $breachCount ->
        [one]
            Denna e-postadress förekom också i { $breachCount } annat intrång. Skapa ett
            gratis { -brand-fxa } för din fullständiga rapport om tidigare intrång, nya intrångsvarningar
            och information om andra { -brand-Mozilla }-tjänster.
       *[other]
            Denna e-postadress förekom också i { $breachCount } andra intrång. Skapa ett
            gratis { -brand-fxa } för din fullständiga rapport om tidigare intrång, nya intrångsvarningar
            och information om andra { -brand-Mozilla }-tjänster.
    }
user-fb-not-compromised-blurb =
    { $breachCount ->
        [one] Du var inte med i intrånget { $breachName }, men vi hittade e-postadressen i en annan.
       *[other] Du var inte med i intrånget { $breachName }, men vi hittade e-postadressen i andra.
    }
user-generic-fb-not-compromised-blurb =
    { $breachCount ->
        [one] Denna e-postadress var inte med i intrånget { $breachName }, men hittades i en annan.
       *[other] Denna e-postadress var inte med i intrånget { $breachName }, men hittades i andra.
    }
guest-fb-not-compromised-blurb-v2 =
    { $breachCount ->
        [one]
            Denna e-postadress var inte med i  { $breachName }, men hittades i en annan.
            Skapa ett gratis { -brand-fxa } för din fullständiga rapport om tidigare intrång,
            nya intrångsvarningar och information om andra { -brand-Mozilla }-tjänster.
       *[other]
            Denna e-postadress var inte med i  { $breachName }, men hittades andra.
            Skapa ett gratis { -brand-fxa } för din fullständiga rapport om tidigare intrång,
            nya intrångsvarningar och information om andra { -brand-Mozilla }-tjänster.
    }
# While English doesn’t use the actual number of breaches in this sentence,
# you can use {$breachCount} to display the number of breaches in your localization.
user-found-breaches-blurb =
    { $breachCount ->
        [one] Detta intrång avslöjade följande personliga information. Ändrat ditt lösenord, om du redan inte har gjort det.
       *[other] Detta intrång avslöjade följande personliga information. Ändrat dina lösenord, om du redan inte har gjort det.
    }
# While English doesn’t use the actual number of breaches in this sentence,
# you can use {$breachCount} to display the number of breaches in your localization.
user-generic-found-breaches-blurb =
    { $breachCount ->
        [one] Detta intrång avslöjade följande personliga information.
       *[other] Dessa intrång avslöjade följande personliga information.
    }
have-an-account = Har du redan ett konto?
signup-banner-sensitive-blurb =
    Ta reda på vad hackare redan vet om dig, och lär dig hur
    du kan vara ett steg före dem. Få varningar om ditt konto visas
    i nya dataintrång.
fxa-pwt-section-blurb =
    Lösenorden skyddar all personlig information i dina online-konton. Och
    hackare litar på dåliga vanor, som att använda samma lösenord överallt eller använda
    vanliga fraser (@p@ssw0rd, någon?) så att om de hackar ett konto, så kan de
    hacka fler.
fxa-pwt-summary-2 =
    Korta lösenord med ett ord är enkla för hackare att gissa.
    Använd minst två ord och en kombination av bokstäver, siffror och specialtecken.
fxa-pwt-summary-4 =
    Lösenordshanterare som 1Password, LastPass, Dashlane och Bitwarden lagrar dina
    lösenord och fyller i dem på webbplatser åt dig. De hjälper till och med att skapa starka lösenord.
fxa-pwt-summary-6 =
    Dataintrång ökar. Om din personliga information avslöjas i ett nytt dataintrång, 
    skickar { -product-name } dig en varning - så du kan vidta åtgärder och skydda dina konton.
fxa-what-to-do-blurb-1 =
    Om du inte kan logga in, kontakta webbplatsen för att fråga hur du uppdaterar den.
    Ser du ett konto du inte känner igen? Dina uppgifter kan ha sålts
    eller skickats vidare. Det här kan också vara ett konto du glömt bort
    eller ett företag som bytt namn.
fxa-what-to-do-subhead-2 = Sluta använda det exponerade lösenordet och ändra det överallt där du använt det.
fxa-wtd-blurb-2 =
    Hackare kan försöka använda samma lösenord och e-postadress för att komma in på andra konton.
    Skapa ett annat och unikt lösenord för varje konto, särskilt för ditt bankkonto,
    e-post och andra webbplatser där du sparar personlig information.
fxa-what-to-do-blurb-3 =
    De flesta intrång visar bara e-postadress och lösenord, men vissa inkluderar känslig finansiell information.
    Om ditt bankkonto eller kreditkortsnummer har blivit utsatta, varna din bank för eventuella bedrägerier.
    Var uppmärksam över kontohändelser du inte känner igen.
fxa-what-to-do-subhead-4 = Få hjälp med att komma ihåg alla dina lösenord och hålla dem säkra.
fxa-what-to-do-blurb-4 =
    Lösenordshanterare som 1Password, LastPass, Dashlane och Bitwarden lagrar dina
    lösenord säkert och fyller i dem på webbplatser åt dig. Använd en lösenordshanterare
    på din telefon och dator så att du inte behöver komma ihåg dem alla.
fb-landing-headline = Var din information utsatt för dataintrång { $breachName }?
copyright = Delar av detta innehåll är © 1999-{ $year } av enskilda mozilla.org-bidragsgivare.
content-available = Innehåll tillgängligt under en Creative Commons-licens.
# Alerts is a noun
sign-up-for-alerts = Registrera dig för varningar
sign-up-for-fxa-alerts = Registrera dig för varningar från { -product-name }.
create-free-account =
    Skapa ett gratis { -brand-fxa } för din fullständiga rapport om tidigare intrång, nya intrångsvarningar
    och information om andra { -brand-Mozilla }-tjänster.
get-your-report-and-sign-up = Få din rapport och registrera dig för varningar.
# Link title
frequently-asked-questions = Vanliga frågor
about-firefox-monitor = Om { -product-name }
mozilla-dot-org = Mozilla.org
preferences = Inställningar
# Link title.
home = Hem
# Link title
breaches = Intrång
# Link title
security-tips = Säkerhetstips
fxa-account = { -brand-fxa }
# Aria button message to open menu. "Open Firefox Account Navigation"
open-fxa-menu = { -brand-fxa } öppna navigering
# Appears above a snippet about the breach most recently reported to Firefox Monitor.
latest-breach = Senaste tillagda intrång
breach-added = Intrång rapporterad:
breach-discovered = Intrång upptäckt:
# Link title
more-about-this-breach = Mer om detta intrång
take-control = Ta tillbaka kontrollen över dina personuppgifter.
cant-stop-hackers = Du kan inte stoppa hackare från att hacka. Men du kan undvika dåliga vanor som gör deras jobb enkelt.
read-more-tips = Läs fler säkerhetstips
how-hackers-work = Förstå hur hackare arbetar
monitor-your-online-accounts = Registrera dig för övervakning av intrång med { -brand-fxa }.
stay-alert = Var uppmärksam på nya intrång
if-your-info = Om din information kommer upp i ett nytt dataintrång, skickar vi dig en varning.
search-all-emails = Sök igenom alla dina e-postadresser för intrång och få varningar om nya hot.
monitor-several-emails = Övervaka flera e-postadresser
take-action = Vidta åtgärder för att skydda dina konton
keep-your-data-safe = Ta reda på vad du behöver göra för att hålla din data säker från cyberkriminella.
website-breach = Webbplatsintrång
sensitive-breach = Känsligt webbplatsintrång
data-aggregator-breach = Datainsamlingsintrång
unverified-breach = Overifierat intrång
spam-list-breach = Spamlistintrång
website-breach-plural = Webbplatsintrång
sensitive-breach-plural = Känsliga intrång
data-aggregator-breach-plural = Datainsamlingsintrång
unverified-breach-plural = Overifierade intrång
spam-list-breach-plural = Spamlistintrång
what-data = Vilka data har äventyrats:
sensitive-sites = Hur behandlar { -product-name } känsliga webbplatser?
sensitive-sites-copy =
    { -product-name } avslöjar bara konton som är kopplade till dessa
    typer av intrång efter att en e-postadress har verifierats. Det betyder att du är
    den enda person som kan se om din information förkom i detta intrång (om inte någon
    annan har tillgång till ditt e-postkonto).
delayed-reporting-headline = Varför tog det så lång tid att anmäla detta intrång?
delayed-reporting-copy =
    Det kan ibland ta några månader eller år för uppgifter
    i ett dataintrång att synas på dark web. Intrång läggs till i vår databas så
    snart som de har upptäckts och verifierats.
about-fxm-headline = Om { -product-name }
about-fxm-blurb =
    { -product-name } varnar om dina onlinekonton var inblandade i ett
    dataintrång. Ta reda på om du har förekommit i ett dataintrång, få varningar om nya intrång,
    och vidta åtgärder för att skydda dina onlinekonton. { -product-name } tillhandahålls
    av { -brand-Mozilla }.
fxm-warns-you =
    { -product-name } varnar dig om din e-postadress har blivit utsatt
    i ett dataintrång på nätet. Se om din information har blivit utsatt, lär dig hur
    du bättre kan skydda dina onlinekonton och bli varnad om din e-postadress
    visas i ett nytt intrång.
# How Firefox Monitor works
how-fxm-works = Hur { -product-name } fungerar
how-fxm-1-headline = Gör en grundläggande sökning
how-fxm-1-blurb =
    Sök efter din e-postadress i offentliga dataintrång som
    går tillbaka till 2007. Denna grundläggande sökning kommer att nudda vid de flesta dataintrång, men inte
    sådana som innehåller känslig personlig information.
how-fxm-2-headline = Registrera dig för intrångsövervakning
how-fxm-3-headline = Få meddelanden i din webbläsare
how-fxm-3-blurb =
    Om du använder { -brand-name } får du ett meddelande om du besöker en
    webbplats som har haft intrång. Ta reda på om du är en del av detta intrång
    och vad du kan göra åt det.
wtd-after-website = Vad man ska göra efter ett webbplatsintrång
what-is-data-agg = Vad är en datainsamlare?
protect-your-privacy = Skydda ditt privatliv på Internet
avoid-personal-info = Undvik att använda personlig information i lösenord
avoid-personal-info-blurb = Det är enkelt att hitta födelsedagar, adresser och familjemedlemmar på nätet. Unvik dessa ord i dina lösenord.

## What to do after data breach tips

change-pw = Ändra ditt lösenord
even-for-old = Även för gamla konton är det viktigt att uppdatera ditt lösenord.
make-new-pw-unique = Gör det nya lösenordet annorlunda och unikt
strength-of-your-pw = Styrkan på dina lösenord påverkar direkt din säkerhet online.
create-strong-passwords = Så här skapar du starka lösenord
stop-reusing-pw = Sluta återanvända samma lösenord
create-unique-pw = Skapa unika lösenord och spara dem någonstans säkert, som en lösenordshanterare.
five-myths = 5 myter om lösenordshanterare
create-a-fxa = Skapa ett { -brand-fxa } för din fullständiga rapport om intrång och för att få varningar.
feat-security-tips = Säkerhetstips för att skydda dina konton
feat-sensitive = Avancerad sökning i känsliga intrång
feat-enroll-multiple = Anmäl flera e-postadresser vid intrångsövervakning
sign-up-for-fxa = Registrera dig för ett { -brand-fxa }
check-for-breaches = Sök efter intrång
find-out-what-hackers-know = Ta reda på vad hackare redan vet om dig. Lär dig hur du kan vara ett steg före dem.
search-for-your-email = Sök efter din e-postadress i offentliga dataintrång som går tillbaka till 2007.
back-to-top = Tillbaka till toppen
comm-opt-0 = Mejla mig om en av mina e-postadresser nedan förekommer i ett dataintrång.
comm-opt-1 = Skicka alla intrångsvarningar till { $primaryEmail }.
stop-monitoring-this = Sluta övervaka denna e-postadress.
resend-verification = Skicka e-postbekräftelse igen
add-new-email = Lägg till en ny e-postadress
send-verification = Skicka verifieringslänk
# This string is a header on the user preferences page and
# appears above a check-box list of user options which allow
# the user to choose whether or not they want to receive breach
# alerts for all of their monitored email addresses to a single 
# email address.
global-communication = Global kommunikation
breach-summary = Intrångssammanfattning
show-breaches-for-this-email = Visa alla intrång för denna e-post.
link-change-primary = Ändra primär e-postadress
remove-fxm = Ta bort { -product-name }
manage-email-addresses = Hantera e-postadresser
welcome-back = Välkommen tillbaka, { $userName }!
welcome-user = Välkommen, { $userName }!
your-info-was-discovered-headline = Dina uppgifter upptäcktes i ett nytt dataintrång.
your-info-was-discovered-blurb =
    Du är registrerad för att ta emot { -product-name }-varningar
    när din e-post förekommer i ett dataintrång. Här är vad vi vet om detta intrång.
what-to-do-after-breach = Vad ska man göra efter ett dataintrång
ba-next-step-1 = Ändra ditt lösenord till ett starkt, unikt lösenord.
ba-next-step-blurb-1 =
    Ett starkt lösenord använder en kombination av stora och små bokstäver,
    specialtecken och siffror. Det innehåller inte personlig information som
    din adress, födelsedag eller familjenamn.
ba-next-step-2 = Sluta använda det exponerade lösenordet helt.
ba-next-step-blurb-2 =
    Cyberkriminella kan hitta ditt lösenord på dark web och använda den
    för att logga in på dina andra konton. Det bästa sättet att skydda dina konton
    är att använda unika lösenord för var och ett.
ba-next-step-3 = Få hjälp med att skapa bättre lösenord och hålla dem säkra.
ba-next-step-blurb-3 =
    Använd en lösenordshanterare för att skapa starka, unika lösenord. Lösenordshanterare lagrar säkert alla dina
    inloggningar så att du kan komma åt dem på alla dina enheter.
faq1 = Jag känner inte igen detta företag eller webbplats. Varför finns jag med i detta intrång?
faq2 = Varför tog det så lång tid att meddela mig om detta intrång?
faq3 = Hur vet jag att detta är ett legitimt e-postmeddelande från { -product-name }?
get-alerted = Bli varnad om nya intrång.
was-your-info-exposed = Var dina uppgifter utsatt för dataintrång { $breachName }?
find-out-if = Ta reda på om dina uppgifter har exponerats i detta intrång.
fb-not-comp = Denna e-postadress förekom inte i intrång { $breachName }.
fb-comp-only = Denna e-postadress förekom i intrång{ $breachName }.
no-other-breaches-found = Inga andra intrång hittades från en grundläggande sökning.
no-results-blurb = Tyvärr, intrånget finns inte i vår databas.
all-breaches-headline = Alla intrång  i { -product-name }
search-breaches = Sök intrång
# "Appears in-page as: Showing: All Breaches"
currently-showing = Visar:
all-breaches = Alla intrång

## Updated error messages

error-bot-blurb =
    Vi misstänker att du kan vara en bot eftersom du sökte
    flera e-postadresser inom en kort tidsperiod. För tillfället är du blockerad
    från nya sökningar. Du kan försöka igen senare.
error-csrf-headline = Sessionen avbröts
error-invalid-unsub = Hur man avregistrerar från { -product-name }-varningar
login-link-pre = Har du ett konto?
login-link = Logga in
# Button
see-additional-breaches = Se ytterligare intrång
# A button on the All Breaches page that restores all of the breaches
# back to the page if the user has filtered some of them out.
see-all-breaches = Se alla intrång
# This string is shown at the top of the scan results page and is followed
# by the email address that the user searched.
# In page, it reads "Results for: searchedEmail@monitor.com"
results-for = Resultat för: { $userEmail }
email-verification-required = E-postbekräftelse krävs
fxa-primary-email = { -brand-fxa } E-post - Primär
what-is-a-website-breach = Vad är ett webbplatsintrång?
security-tips-headline = Säkerhetstips för att skydda dig från hackare
steps-to-protect = Åtgärder för att skydda din onlineidentitet
take-further-steps = Ta ytterligare steg för att skydda din identitet
alert-about-new-breaches = Varna mig om nya intrång
see-if-youve-been-part = Se om du har varit en del av ett dataintrång på nätet.
get-ongoing-breach-monitoring = Få kontinuerlig intrångsövervakning för flera e-postadresser.
# This is a button and follows a headline reading "Was your info exposed in the ___ breach?"
find-out = Ta reda på
new-unsub-error = Du måste avbryta prenumerationen från ett av de e-postmeddelanden som { -product-name } skickade.
# This string appears on breach detail pages and is followed by a list
# of data classes that the breach exposed.
additional-information-including = Ytterligare information, inklusive:
# Title
email-addresses-title = E-postadresser
