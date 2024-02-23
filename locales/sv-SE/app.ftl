# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.


# Strings for the main app


## The following messages are brand and should be kept entirely in English
## unless otherwise indicated.

-product-name = Mozilla Monitor
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

##

GitHub-link-title = GitHub
error-scan-page-token = Du försökte skanna för många e-postadresser inom en kort tidsperiod. Av säkerhetsskäl har vi tillfälligt blockerat dig från nya sökningar. Du kommer att kunna försöka igen senare.
error-could-not-add-email = Kunde inte lägga till e-postadress i databasen.
error-not-subscribed = Den här e-postadressen prenumererar inte på { -product-name }.
error-hibp-throttled = För många anslutningar till { -brand-HIBP }.
error-hibp-connect = Det gick inte att ansluta till { -brand-HIBP }.
error-hibp-load-breaches = Kunde inte ladda intrång.
error-must-be-signed-in = Du måste vara inloggad på ditt { -brand-fxa }.
error-to-finish-verifying = För att slutföra verifieringen av denna e-postadress för { -product-name }, måste du vara inloggad under din primära e-postadress.
home-title = { -product-name }
home-not-found = Sidan hittades inte.
oauth-invalid-session = Ogiltig session
scan-title = { -product-name }: Skanna resultat
user-add-invalid-email = Ogiltig e-postadress
user-add-too-many-emails = Du övervakar det maximala antalet e-postadresser.
user-add-email-verify-subject = Verifiera din prenumeration på { -product-name }.
user-add-duplicate-email = Det här e-postadressen har redan lagts till i { -product-name }.
# Variables:
#   $preferencesLink (String) - Link to preferences
#   $userEmail (String) - User email address
user-add-duplicate-email-part-2 = Besök { $preferencesLink } för att kontrollera statusen för { $userEmail }.
user-add-verification-email-just-sent = Ett annat verifieringsmeddelande kan inte skickas så här snabbt. Försök igen senare.
user-add-unknown-error = Något gick fel när ytterligare en e-postadress skulle läggas till. Försök igen senare.
user-delete-unknown-error = Något gick fel när en e-postadress skulle tas bort. Försök igen senare.
error-headline = Fel
user-verify-token-error = Verifieringstecken är obligatoriskt.
user-verify-email-report-subject = Ditt rapport för { -product-name }
user-unsubscribe-token-error = Avsluta prenumeration kräver ett tecken.
user-unsubscribe-token-email-error = Avsluta prenumeration kräver ett tecken och emailHash.
user-unsubscribe-title = { -product-name }: Avsluta prenumeration
pwt-section-headline = Starkare lösenord = bättre skydd
landing-headline = Din rätt att vara säker från hackare börjar här.
scan-placeholder = Ange e-postadress
scan-submit = Sök efter din e-postadress
scan-error = Måste vara en giltig e-postadress.
download-firefox-banner-button = Hämta { -brand-name }
# Appears after Firefox Monitor has sent a verification email to a new user.
signup-modal-sent = Skickat!
sign-up = Registrera dig
form-signup-error = Måste vara en giltig e-postadress
# breach-date = the calendar date a particular data theft occurred.
breach-date = Intrångsdatum:
# compromised accounts = the total number of user accounts exposed in data breach
compromised-accounts = Berörda konton:
# compromised-data = the kind of user data exposed to hackers in data breach.
compromised-data = Berörd data:
unsub-headline = Avsluta prenumerationen från { -product-name-nowrap }
unsub-blurb = Detta kommer att ta bort din e-postadress från listan { -product-name-nowrap } och du får inte längre varningar när nya intrång meddelas.
unsub-button = Avsluta prenumeration
# Breach data provided by Have I Been Pwned.
# Variables:
#   $hibp-link (String) - Link to Have I Been Pwned
hibp-attribution = Breach data tillhandahålls av { $hibp-link }
share-twitter = De flesta har cirka 100 konton på nätet. Har något av dessa blivit utsatt för ett dataintrång? Ta reda på det.
share-facebook-headline = Ta reda på om du har blivit utsatt för ett dataintrång
share-facebook-blurb = Har dina konton på nätet blivit utsatta för ett dataintrång?
og-site-description = Ta reda på om du har blivit utsatt för ett dataintrång med { -product-name }. Registrera dig för varningar om framtida intrång och få tips för att hålla dina konton säkra.
show-all = Visa alla
fxa-scan-another-email = Vill du kontrollera en annan e-postadress?
sign-out = Logga ut
# Manage Firefox Account, link to page where account holders can change their account settings.
manage-fxa = Hantera { -brand-fxa }
have-an-account = Har du redan ett konto?
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
# Alerts is a noun
sign-up-for-alerts = Registrera dig för varningar
# Link title
frequently-asked-questions = Vanliga frågor
about-firefox-monitor = Om { -product-name }
# Link title
preferences = Inställningar
# Link title
home = Hem
# Link title
security-tips = Säkerhetstips
fxa-account = { -brand-fxa }
# Aria button message to open menu. "Open Firefox Account Navigation"
open-fxa-menu = { -brand-fxa } öppna navigering
# Appears above a snippet about the breach most recently reported to Firefox Monitor.
latest-breach = Senaste tillagda intrång
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
how-fxm-2-blurb =
    Skapa ett { -brand-fxa } för att övervaka din e-postadress för pågående intrång.
    När du har verifierat din e-postadress får du också en fullständig rapport om tidigare intrång,
    inklusive känsliga intrång.
how-fxm-3-headline = Få meddelanden i din webbläsare
how-fxm-3-blurb =
    Om du använder { -brand-name } får du ett meddelande om du besöker en
    webbplats som har haft intrång. Ta reda på om du är en del av detta intrång
    och vad du kan göra åt det.
wtd-after-website = Vad man ska göra efter ett webbplatsintrång
wtd-after-data-agg = Vad ska man göra efter ett datainsamlingsintrång
what-is-data-agg = Vad är en datainsamlare?
what-is-data-agg-blurb =
    Datainsamlare, eller datamäklare, samlar information från offentliga
    register och köper det från andra företag. De sammanställer dessa data för att sälja den till företag
    för marknadsföring. Offren för dessa intrång är mindre benägna att uppleva ekonomiska
    bedrägerier, men hackare skulle kunna använda dessa uppgifter för att efterlikna eller profilera dem.
protect-your-privacy = Skydda ditt privatliv på Internet
no-pw-to-change = Till skillnad från en webbplatsintrång finns det inget lösenord att ändra.
avoid-personal-info = Undvik att använda personlig information i lösenord
avoid-personal-info-blurb = Det är enkelt att hitta födelsedagar, adresser och familjemedlemmar på nätet. Unvik dessa ord i dina lösenord.

## What to do after data breach tips

change-pw = Ändra ditt lösenord
change-pw-site = Ändra lösenord för den här webbplatsen
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
# This string is shown beneath each of the user’s email addresses to indicate
# how many known breaches that email address was found in.
# Variables:
#   $breachCount (Integer) - Number of breaches
appears-in-x-breaches =
    { $breachCount ->
        [one] Förekommer i { $breachCount } känt intrång.
       *[other] Förekommer i { $breachCount } kända intrång.
    }
check-for-breaches = Sök efter intrång
find-out-what-hackers-know = Ta reda på vad hackare redan vet om dig. Lär dig hur du kan vara ett steg före dem.
get-email-alerts = Håll dig säker: Få e-postvarningar när din information förekommer i ett känt intrång
search-for-your-email = Sök efter din e-postadress i offentliga dataintrång som går tillbaka till 2007.
back-to-top = Tillbaka till toppen
comm-opt-0 = Mejla mig om en av mina e-postadresser nedan förekommer i ett dataintrång.
# Variables:
#   $primaryEmail (String) - User primary email address
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
breach-summary = Intrångssammanfattning
show-breaches-for-this-email = Visa alla intrång för denna e-post.
link-change-primary = Ändra primär e-postadress
remove-fxm = Ta bort { -product-name }
remove-fxm-blurb =
    Stäng av  { -product-name }-varningar. Ditt { -brand-fxa } kommer att förbli aktiv, och du kan få
    annan kontorelaterad kommunikation.
# Button title
manage-email-addresses = Hantera e-postadresser
# Link title
latest-breach-link = Se om du förekom i detta intrång

## Variables:
##   $userName (String) - Username

welcome-back = Välkommen tillbaka, { $userName }!
welcome-user = Välkommen, { $userName }!

##

breach-alert-subject = { -product-name } hittade din e-postadress i ett nytt dataintrång.
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
# Variables:
#   $breachCount (Integer) - Number of breaches
new-breaches-found =
    { $breachCount ->
        [one] { $breachCount } NYTT INTRÅNG HITTADES
       *[other] { $breachCount } NYA INTRÅNG HITTADES
    }
sign-up-headline-1 = Få pågående varningar med { -brand-fxa }.
account-not-required = { -brand-name } webbläsare krävs inte för ett { -brand-fxa }. Du kan få information om { -brand-Mozilla }-tjänster.

## Variables:
##   $breachName (String) - Number of the breach

was-your-info-exposed = Var dina uppgifter utsatt för dataintrång { $breachName }?
fb-not-comp = Denna e-postadress förekom inte i intrång { $breachName }.
# Variables:
#   $breachCount (Integer) - Number of breaches
other-breaches-found =
    { $breachCount ->
        [one] Men det förekommer i { $breachCount } annat intrång.
       *[other] Men det förekommer i  { $breachCount } andra intrång.
    }
fb-comp-only = Denna e-postadress förekom i intrång{ $breachName }.
# Variables:
#   $breachCount (Integer) - Number of breaches
fb-comp-and-others =
    { $breachCount ->
        [one] Denna e-postadress förekom i { $breachCount } känt dataintrång, inklusive { $breachName }.
       *[other] Denna e-postadress förekom i { $breachCount } kända dataintrång, inklusive { $breachName }.
    }

##

no-other-breaches-found = Inga andra intrång hittades från en grundläggande sökning.
no-results-blurb = Tyvärr, intrånget finns inte i vår databas.
# This string contains nested markup that is later used to style and link the text inside of it.
# Please do not modify or remove "<a>", "</a>", "<span>" and "</span>".
facebook-breach-note =
    <span>Din e-postadress finns inte med i denna läcka,
    men ditt telefonnummer kan fortfarande vara sårbart.</span> Några av de konton
    som komprometteras med Facebook-läckan innehöll telefonnummer och annan
    personlig information men inte e-postadresser. Om du någonsin har registrerat dig
    för ett Facebook-konto — även om du inte använder det nu — rekommenderar vi
    att du vidtar dessa steg för att skydda dig själv
# This string contains nested markup that is later used to style and link the text inside of it.
# Please do not modify or remove "<a>", "</a>", "<span>" and "</span>".
facebook-breach-what-to-do-1-headline = <span>Ställ in din information till "Endast jag" eller annan icke-offentlig inställning i <a>din Facebook-profil</a>.</span>
facebook-breach-what-to-do-1-copy =
    Under denna läcka tog hackare profilinformation
    som var inställd som "öppen för allmänheten" eller "delade med vänner."
    Denna information kan kombineras med annan data för att få åtkomst till
    ännu mer av din personliga information och konton.
# This string contains nested markup that is later used to style and link the text inside of it.
# Please do not modify or remove "<a>", "</a>", "<span>" and "</span>".
facebook-breach-what-to-do-2-headline =
    <span>Ändra lösenordet, PIN-koden eller andra säkerhetsuppgifter på dina
    <a>mobiloperatörskonton</a> för att förhindra SIM-kortsbedrägeri</span>.
facebook-breach-what-to-do-2-copy =
    SIM-kortsbedrägeri, som också kallas SIM-jacking,
    är när en hackare använder telefonnummer, födelsedatum och annan data för att ta över
    en persons mobilnummer och sedan hacka in i deras e-post, sociala medier och till och med finansiella konton.
facebook-breach-what-to-do-3 = Se alla rekommendationer på vår sida om Facebook-läckan
# "Appears in-page as: Showing: All Breaches"
currently-showing = Visar:

## Updated error messages

error-bot-headline = Sökningar tillfälligt avstängda
error-bot-blurb =
    Vi misstänker att du kan vara en bot eftersom du sökte
    flera e-postadresser inom en kort tidsperiod. För tillfället är du blockerad
    från nya sökningar. Du kan försöka igen senare.
error-csrf-headline = Sessionen avbröts
error-csrf-blurb = Välj webbläsarens tillbaka-knapp, ladda om sidan och försök igen.
error-invalid-unsub = Hur man avregistrerar från { -product-name }-varningar
error-invalid-unsub-blurb =
    Du måste avregistrera dig från en av
    e-postmeddelanden { -product-name } skickade dig. Kontrollera din inkorg för meddelanden från
    { -brand-team-email }. Välj avregistreringslänken längst ner i e-postmeddelandet.
# This string is displayed under a large numeral that indicates the total number
# of email address a user has signed up for monitoring. Don’t add $emails to
# your localization, because it would result in the number showing twice.
email-addresses-being-monitored =
    { $emails ->
        [one] E-postadress som övervakas
       *[other] E-postadresser som övervakas
    }
# This string is displayed under a large numeral that indicates the total number
# of data breaches that exposed a user’s password. Don’t add $passwords to
# your localization, because it would result in the number showing twice.
passwords-exposed =
    { $passwords ->
        [one] Lösenord exponerades i alla intrång
       *[other] Lösenord exponerades i alla intrång
    }
# This string is displayed under a large numeral that indicates the total number
# of data breaches that have exposed the user’s information. Don’t add $breaches to
# your localization, because it would result in the number showing twice.
known-data-breaches-exposed =
    { $breaches ->
        [one] Känt dataintrång har avslöjat din information
       *[other] Kända dataintrång har avslöjat din information
    }
# Button
see-additional-breaches = Se ytterligare intrång
# Variables:
#   $breachCount (Integer) - Number of breaches
scan-results-known-breaches =
    { $breachCount ->
        [one] Denna e-postadress förekom i 1 känt dataintrång.
       *[other] Denna e-postadress förekom i { $breachCount } kända dataintrång.
    }
# This string is shown at the top of the scan results page and is followed
# by the email address that the user searched.
# In page, it reads "Results for: searchedEmail@monitor.com"
# Variables:
#   $userEmail (String) - User email address
results-for = Resultat för: { $userEmail }
other-monitored-emails = Andra övervakade e-postadresser
email-verification-required = E-postbekräftelse krävs
fxa-primary-email = { -brand-fxa } E-post - Primär
what-is-a-website-breach = Vad är ett webbplatsintrång?
website-breach-blurb = Ett intrång mot webbplatsen händer när cyberkriminella stjäl, kopierar eller avslöjar personuppgifter från onlinekonton. Det är oftast ett resultat av att hackare hittar en svag punkt i webbplatsens säkerhet. Intrånget kan också hända när kontouppgifter läckas av misstag.
security-tips-headline = Säkerhetstips för att skydda dig från hackare
steps-to-protect = Åtgärder för att skydda din onlineidentitet
take-further-steps = Ta ytterligare steg för att skydda din identitet
alert-about-new-breaches = Varna mig om nya intrång
see-if-youve-been-part = Se om du har varit en del av ett dataintrång på nätet.
get-ongoing-breach-monitoring = Få kontinuerlig intrångsövervakning för flera e-postadresser.
# This is a button and follows a headline reading "Was your info exposed in the ___ breach?"
find-out = Ta reda på
new-unsub-error = Du måste avbryta prenumerationen från ett av de e-postmeddelanden som { -product-name } skickade.
# Variables:
#   $breachCount (Integer) - Number of breaches
other-known-breaches-found =
    { $breachCount ->
        [one] Men det förekom i { $breachCount } annat känt intrång.
       *[other] Men det förekom i { $breachCount } andra kända intrång.
    }
# This string appears on breach detail pages and is followed by a list
# of data classes that the breach exposed.
additional-information-including = Ytterligare information, inklusive:
# Title
email-addresses-title = E-postadresser
# This is a section headline on the breach detail page that appears above
# a short summary about the breach.
breach-overview-title = Översikt
# This is a standardized breach overview blurb that appears on all breach detail pages.
# $breachTitle is the name of the breached company or website.
# $breachDate and $addedDate are calendar dates.
breach-overview-new = Den { $breachDate }, hade { $breachTitle } ett intrång. När intrånget upptäcktes och verifierades lades det till vår databas den { $addedDate }.
# Title appearing on the Preferences dashboard.
monitor-preferences = { -product-short-name } Inställningar
# When a user is signed in, this appears in the drop down menu
# and is followed by the user's primary Firefox Account email.
# Variables:
#   $userEmail (String) - User email address
signed-in-as = Inloggad som: { $userEmail }
# Appears on the All Breaches page and is followed by a list of filter options
# that a user can filter the visible breaches by.
filter-by = Filtrera efter kategori:
# Title that appears in the mobile menu bar and opens the mobile menu when clicked.
menu = Meny
to-affected-email = Skicka intrångsvarningar till den drabbade e-postadressen
# This string appears in a banner at the top of each page and is followed by a "Learn More" link.
join-firefox = Det finns ett sätt att skydda din integritet. Gå med i { -brand-name }.
# Link title
learn-more-link = Läs mer.
email-sent = E-post har skickats!
# Form title
want-to-add = Vill du lägga till en annan e-postadress?
# This is part of a confirmation message that appears after a user has submitted
# the form to add an additional email to Firefox Monitor.
# Variables:
#   $userEmail (String) - User email address
verify-the-link = Verifiera länken som skickades till { $userEmail } för att lägga till den i { -product-name }.

## These are part of a confirmation page that appears after a user has verified
## an additional email to Firefox Monitor.

email-verified = E-post bekräftad!
# Variables:
#   $email (String) - User email address
email-added-to-subscription = Vi varnar dig om { $email } förekommer i ett dataintrång.
# This message is displayed after the user has verified their email address.
# { $nestedSignInLink } is replaced by a link, using sign-in-nested as text ("sign in" for English).
email-verified-view-dashboard = För att se och hantera alla e-postadresser du har registrerat dig för övervakning av intrång, { $nestedSignInLink }.
# This message is used as a text for the subscribe link in email-verified-view-dashboard
sign-in-nested = logga in

##

# This is part of a confirmation message that appears after a user has submited the
# form to add an additional email to Firefox Monitor. { $preferencesLink } is a link
# to the Preferences page. The code and text for the link is generated elsewhere
# using the { preferences } string.
# Variables:
#   $preferencesLink (String) - Link to preferences
manage-all-emails = Hantera alla e-postadresser i { $preferencesLink }.
# This string is a header on the user preferences page and
# appears above a check-box list of user options which allow
# the user to choose whether or not they want to receive breach
# alerts for all of their monitored email addresses to a single
# email address.
breach-alert-notifications = Varningsmeddelande om intrång
# This string is a label for the calendar date a breach is added to the database
# and is followed by that date.
breach-added-label = Intrång tillagt:
how-hackers-work-desc = Skydda dina lösenord från cyberkriminella, eftersom det är det som de bryr sig mest om.
what-to-do-after-breach-desc = Säkra dina konton för att förhindra att dina data hamnar i orätta händer.
create-strong-passwords-desc = Gör dina lösenord starka, säkra och svåra att gissa.
steps-to-protect-desc = Förstå de vanligaste hoten och lär dig vad du ska leta efter.
five-myths-desc = Lär dig hur du undviker dåliga lösenordsvanor som gör en hackars jobb enklare.
take-further-steps-desc = Ta reda på hur man kan mildra riskerna för identitetsstöld för att förhindra ekonomisk förlust.
# This message appears after a user has successfully updated their communication settings.
changes-saved = Ändringar sparade!
# Section headline
rec-section-headline = Vad du ska göra för detta intrång
rec-section-subhead = Vi rekommenderar att du vidtar dessa steg för att skydda din personliga information och skydda din digitala identitet.
# Section headline
rec-section-headline-no-pw = Vad du ska göra för att skydda din personliga information
rec-section-subhead-no-pw = Även om lösenord inte avslöjades i detta intrång, finns det fortfarande åtgärder du kan vidta för att bättre skydda din personliga information.
# Button
see-additional-recs = Se ytterligare rekommendationer

## This string contains nested markup that becomes a link later in the code.
## Please do not modify or remove "<a>" and "</a>".

# Variables:
#   $affectedEmail (String) - User email address
resolve-top-notification = { $affectedEmail } förekom i detta intrång. <a>Vad ska jag göra nu?</a>
# Variables:
#   $numAffectedEmails (Integer) - Number of affected email address
resolve-top-notification-plural =
    { $numAffectedEmails ->
        [one] { $numAffectedEmails } av dina e-postadresser förekom i detta intrång. <a>Vad ska jag göra härnäst?</a>
       *[other] { $numAffectedEmails } av dina e-postadresser förekom i detta intrång. <a>Vad ska jag göra härnäst?</a>
    }

##

marking-this-subhead = Markera detta intrång som löst
# This string contains nested markup that is later used to style the text inside of it.
# Please do not modify or remove "<span>" and "</span>".
marking-this-body =
    <span>När du har vidtagit stegen du kan för att hantera detta intrång</span>,
    kan du markera det som löst. Du kan fortfarande få åtkomst till detaljer om intrånget
    från din översikt när som helst.
mark-as-resolve-button = Markera som löst
marked-as-resolved-label = Markerad som löst
undo-button = Ångra
confirmation-1-subhead = Mycket bra! Du har precis löst ditt första intrång.
confirmation-1-body = Fortsätt så. Kontrollera översikten för att se om mer behöver göras.
confirmation-2-subhead = Ta det, hackare!
confirmation-2-body = Du tar viktiga steg för att skydda dina onlinekonton.
confirmation-3-subhead = Ännu en färdig. Bra gjort!
# This string contains nested markup that becomes a link later in the code.
# Please do not modify or remove "<a>" and "</a>".
confirmation-3-body = Är ditt nya lösenord unikt, starkt och svårt att gissa? <a>Ta reda på det</a>
generic-confirmation-subhead = Detta intrång har markerats som löst
# Variables:
#   $numUnresolvedBreaches (Integer) - Number of resolved breaches
generic-confirmation-message =
    { $numUnresolvedBreaches ->
        [one] Gå till översikten för att se återstående intrång.
       *[other] Gå till översikten för att se alla återstående intrång.
    }
return-to-breach-details-link = Återgå till intrångsdetaljer
go-to-dashboard-link = Gå till översikten
# This string appears above a breach resolution progress bar and indicates
# the percentage of breaches a user has resolved. For instance, "27% complete".
# Variables:
#   $percentComplete (String) - Completion percentage
progress-percent-complete = { $percentComplete }% färdig
# This string appears in the purple callouts at the top of the user dashboard and shows
# the total number of breaches a user has resolved. For instance, "5 Resolved".
# Variables:
#   $numResolvedBreaches (Integer) - Number of resolved breaches
num-resolved =
    { $numResolvedBreaches ->
        [one] { $numResolvedBreaches } löst
       *[other] { $numResolvedBreaches } lösta
    }
progress-intro-subhead = Nytt i { -product-name }: Markera intrång som lösta
progress-intro-message =
    När du har granskat detaljerna om ett intrång och vidtagit åtgärder för att skydda 
    din personliga information kan du markera intrången som lösta.
# Variables:
#   $numResolvedBreaches (Integer) - Number of resolved breaches
#   $numTotalBreaches (Integer) - Total number of breaches
progress-status =
    { $numTotalBreaches ->
        [one] { $numResolvedBreaches } av { $numTotalBreaches } intrång markerat som löst
       *[other] { $numResolvedBreaches } av { $numTotalBreaches } intrång markerade som lösta
    }
progress-complete = Alla kända intrång har markerats som lösta

## These strings contain nested markup that is later used to style the text inside of it.
## Please do not modify or remove "<span>" and "</span>".

progress-message-1 =
    <span>Det är en bra början!</span> Kolla in de återstående intrången för att lära dig 
    vilka steg du ska vidta.
progress-message-2 =
    <span>Fortsätt så!</span> Små förändringar som att uppdatera lösenord har stor inverkan på 
    att skydda din personliga information.
progress-message-3 = <span>Bra jobbat med att lösa dessa intrång! </span> Fortsätt så. Du har några kvar.
progress-message-4 = <span>Nästan klar!</span> Du är nästan i mål.
progress-complete-message =
    <span>Det känns bra eller hur?</span> Om du vill fortsätta är det en bra tid att 
    uppdatera andra inloggningar med starkare lösenord.

##

resolve-this-breach-link = Lös detta intrång
# This string appears in resolved breach cards and is followed by
# the date the user marked the breach as resolved.
marked-resolved = Markerad som löst:
hide-resolved-button = Dölj lösta
show-resolved-button = Visa lösta
# Variables:
#   $numPasswords (Integer) - Number of exposed passwords
unresolved-passwords-exposed =
    { $numPasswords ->
        [one] Lösenord exponerat i olösta intrång
       *[other] Lösenord exponerade i olösta intrång
    }
# Variables:
#   $numResolvedBreaches (Integer) - Number of resolved breaches
known-data-breaches-resolved =
    { $numResolvedBreaches ->
        [one] Känt dataintrång markerat som löst
       *[other] Kända dataintrång markerade som lösta
    }
# A status indicator that appears in the top right corner of new breach cards
new-breach = Nytt
mobile-promo-headline = Hämta { -brand-name } till din telefon och surfplatta
mobile-promo-body = Snabb, privat och säker surfning överallt där du befinner dig. Hitta { -brand-name } i Google Play och App Store.
mobile-promo-cta = Hämta { -brand-name } till Android och iOS
promo-lockwise-headline = Ta med dina lösenord överallt
lockwise-promo-body = Håll koll på dina inloggningar på alla enheter. Få åtkomst till dem säkert från din dator, telefon eller surfplatta.
promo-lockwise-cta = Hämta { -brand-lockwise }
fpn-promo-headline = Dölj din position från webbplatser och spårare
promo-fpn-body = { -brand-fpn } lurar webbplatser och datainsamlare som profilerar dig med annonser genom att maskera din riktiga IP-adress.
promo-fpn-cta = Hämta { -brand-fpn }
monitor-promo-headline = Få reda på nya dataintrång
monitor-promo-body = Bli meddelad nästa gång din personliga information exponeras i ett känt intrång.
ecosystem-promo-headline = Skydda ditt liv på nätet med integritetsprodukter
ecosystem-promo-body = Alla produkter från { -brand-name } respekterar vårt löfte om personlig data: Samla in mindre. Förvara det säkert. Inga hemligheter.
promo-ecosystem-cta = Se alla produkter
steps-to-resolve-headline = Åtgärder för att lösa detta intrång
vpn-promo-headline = Nu är det dags att öka din säkerhet online.
vpn-promo-copy = { -brand-Mozilla }:s VPN hjälper till att skydda din internetanslutning från hackare och spioner.
vpn-promo-cta = Hämta { -brand-mozilla-vpn }
vpn-promo-headline-new = Spara 50% med en helårsprenumeration
vpn-promo-copy-new = Skydda dina onlinedata—och välj en VPN-prenumerationsplan som fungerar för dig.

## VPN promotional banner.  HTML tags should not be translated, e.g. `<em>`

# Variables:
#   $ip-location (String) - User's IP location is determined dynamically by 3rd-party,
#                           eg: "Your location: Los Angeles, CA".  The 3rd-party service
#                           provides its own localization.
vpn-banner-location = Din plats: { $ip-location }
vpn-banner-protect-yourself-with-vpn = <em>Skydda dig själv</em> med { -brand-mozilla-vpn }.
vpn-banner-protected-with-vpn = <em>Skyddad</em> med { -brand-mozilla-vpn }.
vpn-banner-title-1 = Du är skyddad — tack för att du använder { -brand-mozilla-vpn }.
vpn-banner-title-2 = Din plats kan spåras om du inte använder ett VPN.
vpn-banner-subtitle-2 = Skydda din plats och surfa säkert i tre steg
vpn-banner-status-protected = Aktuell status: <em>Skyddad ✓</em>
vpn-banner-status-not-protected = Aktuell status: <em>Inte skyddad ⚠</em>
# Variables:
#   $ip-address (String) - User's IP address is determined dynamically, eg: "IP address: 192.168.1.1"
vpn-banner-ip-address = IP-adress: { $ip-address }
vpn-banner-step-1 = Prenumerera på { -brand-mozilla-vpn }
vpn-banner-step-2 = Välj en VPN-plats
vpn-banner-step-3 = Aktivera VPN och surfa säkert
vpn-banner-cta = Hämta { -brand-mozilla-vpn }
# button to expand panel
vpn-banner-cta-expand = Expandera
# button to close panel
vpn-banner-cta-close = Stäng

## Relay and VPN educational/ad units

ad-unit-relay-cta = Läs mer om { -brand-relay }
ad-unit-vpn-cta = Läs mer om { -brand-mozilla-vpn }
# ad 1 heading
ad-unit-1-how-do-you-keep = Hur håller du din e-postadress hemlig?
# ad 2 heading
ad-unit-2-do-you-worry = Oroar du dig för säkerheten på ett offentligt Wi-Fi?
# ad 3 heading
ad-unit-3-stay-in-the-game = Håll dig uppdaterad!
ad-unit-3-lets-you-keep = { -brand-mozilla-vpn } låter dig hålla en säker och stabil anslutning medan du spelar spel eller streamar filmer.
# ad 3 list item 1
ad-unit-3-prevent-throttling = Ingen begränsning
# ad 3 list item 2
ad-unit-3-be-anywhere = Var var som helst i världen
# ad 3 list item 3
ad-unit-3-access-more = Få tillgång till fler
# ad 4 heading
ad-unit-4-shopping-with = Shopping med e-postalias
ad-unit-4-want-to-buy = Vill du köpa något online och inte känner till eller litar helt på butiken?
ad-unit-4-shop-online = Använd ett e-postalias när du handlar online. Få bekräftelsen skickad till din riktiga e-post och stäng sedan enkelt av alias när som helst senare.
# ad 5 heading
ad-unit-5-on-the-go = På språng med { -brand-relay }
ad-unit-5-instantly-make = Gör omedelbart ett anpassat e-postalias var som helst och var du än går!
# ad 5 subheading 1
ad-unit-5-connect-on-the-go = Anslut när du är på språng
ad-unit-5-privately-sign-in = Använd ditt e-postalias när du vill logga in privat på ditt favoritkafé eller offentliga Wi-Fi
# ad 5 subheading 2
ad-unit-5-email-receipts = Få e-postkvitton
ad-unit-5-share-custom-email = Dela ett anpassat e-postalias för shoppingkvitton i butik utan att dela din riktiga e-postadress
# ad 5 subheading 3
ad-unit-5-use-on-phone = Använd på din telefon
ad-unit-5-no-matter-where = Oavsett var du är, skapa ett anpassat e-postalias på några sekunder för allt du vill göra
# ad 6 heading
ad-unit-6-worry-free = Bekymmersfria registreringar
ad-unit-6-want-to-start = Vill du starta en ny prenumeration, svara på en inbjudan eller få en fyndkampanjkod utan att skräpposten svämmar över din inkorg?
ad-unit-6-before-you-complete = Innan du slutför nästa registrering, använd ett e-postalias istället för din riktiga för att skydda din information och behålla kontrollen över din inkorg

# Monitor V2


## The following messages are brands and should be kept entirely in English

-brand-firefox = Firefox
-brand-monitor = Monitor
-brand-fx-monitor = Mozilla Monitor
-brand-mozilla = Mozilla
-brand-premium = Premium
-brand-monitor-premium = Monitor Premium
-brand-mozilla-foundation = Mozilla Foundation
-brand-github = GitHub
-brand-mozilla-vpn = Mozilla VPN
-brand-relay = Firefox Relay
-brand-mozilla-monitor = Mozilla Monitor
-brand-monitor-plus = Monitor Plus

##

# “account” can be localized, “Mozilla” must be treated as a brand,
# and kept in English.
-brand-mozilla-account = Mozilla-konto
open-in-new-tab-alt = Öppna länk i ny flik

## Search Engine Optimization

meta-desc-2 = Ta reda på om du har varit en del av ett dataintrång med { -brand-fx-monitor }. Vi hjälper dig att förstå vad du ska göra härnäst och övervakar kontinuerligt efter eventuella nya intrång.

## Header

# Deprecated
brand-fx-monitor = { -brand-fx-monitor }
sign-in = Logga in
brand-mozilla-monitor = { -brand-fx-monitor }

## Site navigation

site-nav-breaches-link = Åtgärda dataintrång
site-nav-settings-link = Inställningar
site-nav-help-link = Hjälp och support
# This call-out is above 2 image links for Firefox Relay and Mozilla VPN
site-nav-ad-callout = Prova våra andra säkerhetsverktyg:
brand-relay = { -brand-relay }
brand-mozilla-vpn = { -brand-mozilla-vpn }
mobile-menu-label = Huvudmeny
main-nav-button-collapse-label = Fäll ihop meny
main-nav-button-collapse-tooltip = Fäll ihop meny
main-nav-button-expand-label = Expandera meny
main-nav-button-expand-tooltip = Expandera meny
main-nav-label = Navigering
main-nav-link-home-label = Hem
main-nav-link-dashboard-label = Översikt
main-nav-link-settings-label = Inställningar
main-nav-link-faq-label = Vanliga frågor
main-nav-link-faq-tooltip = Vanliga frågor

## User menu

# Obsolete
menu-button-title = Användarmeny
# Obsolete
menu-button-alt = Öppna användarmenyn
# Obsolete
menu-list-accessible-label = Kontomeny
# Obsolete
menu-item-fxa-2 = Hantera ditt { -brand-mozilla-account }
# Obsolete
menu-item-settings = Inställningar
# Obsolete
menu-item-help = Hjälp och support
# Obsolete
menu-item-logout = Logga ut
user-menu-trigger-label = Öppna användarmeny
user-menu-trigger-tooltip = Profil
user-menu-manage-fxa-label = Hantera ditt { -brand-mozilla-account }
user-menu-settings-label = Inställningar
user-menu-settings-tooltip = Konfigurera { -brand-mozilla-monitor }
user-menu-help-label = Hjälp och support
user-menu-help-tooltip = Få hjälp med att använda { -brand-mozilla-monitor }
user-menu-signout-label = Logga ut
user-menu-signout-tooltip = Logga ut från { -brand-mozilla-monitor }

## Footer

mozilla = { -brand-Mozilla }
terms-of-service = Användarvillkor
privacy-notice = Sekretessmeddelande
github = { -brand-github }
footer-nav-all-breaches = Alla intrång
footer-external-link-faq-label = Vanliga frågor
footer-external-link-faq-tooltip = Vanliga frågor

## Error page

# Variables:
#   $errorCode (number) - "404"
error-page-error-404-title = { $errorCode } sidan hittades inte
error-page-error-404-copy = Vi är ledsna, sidan du letar efter finns inte längre.
error-page-error-404-cta-button = Gå tillbaka
# Variables:
#   $errorCode (number) - the status code of the error, e.g. 403
error-page-error-other-title = { $errorCode } Något gick fel
error-page-error-other-copy = Försök igen eller kom tillbaka senare

## Breach overview page

all-breaches-headline-2 = Alla intrång som upptäckts av { -brand-fx-monitor }
all-breaches-lead = Vi övervakar alla kända dataintrång för att ta reda på om din personliga information har äventyrats. Här är en komplett lista över alla överträdelser som har rapporterats sedan 2007.
search-breaches = Sök intrång
# the kind of user data exposed to hackers in data breach.
exposed-data = Exponerad data:

## Public breach detail page

find-out-if-2 = Ta reda på om du var inblandad i detta intrång
find-out-if-description = Vi hjälper dig att snabbt kontrollera om din e-postadress har varit inblandad i detta intrång och hur du ska gå vidare.
breach-detail-cta-signup = Sök efter intrång

## Floating banner

floating-banner-text = Öka din onlinesäkerhet med nyheter, tips och uppdateringar från { -brand-Mozilla }.
floating-banner-link-label = Registrera dig
floating-banner-dismiss-button-label = Nej tack

## Firefox Monitor -> Mozilla Monitor rebrand banner

banner-monitor-rebrand-text = <b>{ -brand-mozilla-monitor }</b>: Nytt namn, utseende och ännu fler sätt att <b>återställa din integritet</b>.
banner-monitor-rebrand-dismiss-button-label = OK
banner-monitor-rebrand-dismiss-button-tooltip = Ignorera
loading-accessibility = Laddar
