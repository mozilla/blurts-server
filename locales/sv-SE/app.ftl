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
layout-Firefox = { -brand-name }
# Descriptive headline for a column of links where users can give feedback, or get additional information about, Firefox Monitor.
layout-support = Hjälp
# Link that takes the user to a Firefox Monitor survey. 
give-feedback = Ge återkoppling
terms-and-privacy = Villkor och sekretess
error-not-subscribed = Den här e-postadressen prenumererar inte på { -product-name }.
error-hibp-throttled = För många anslutningar till { -brand-HIBP }.
error-hibp-connect = Det gick inte att ansluta till { -brand-HIBP }.
error-hibp-load-breaches = Kunde inte ladda överträdelser.
hibp-notify-email-subject = { -product-name } varning: Ditt konto var inblandat i en överträdelse.
home-title = { -product-name }
home-not-found = Sidan hittades inte.
oauth-invalid-session = Ogiltig session
oauth-confirmed-title = { -product-name }: Prenumererar
scan-title = { -product-name }: Skanna resultat
user-add-invalid-email = Ogiltig e-postadress
user-add-email-verify-subject = Verifiera din prenumeration på { -product-name }.
user-add-title = { -product-name }: Bekräfta e-postadress
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
pwt-summary-6 = Webbplatsöverträdelser ökar. Så snart en ny överträdelse läggs till i vår databas skickar { -product-name-nowrap } dig en varning - så du kan vidta åtgärder och skydda ditt konto.
landing-headline = Din rätt att vara säker från hackare börjar här.
landing-blurb =
    { -product-name-nowrap } ger dig verktyg för att hålla din personliga information säker. 
    Ta reda på vad hackare redan vet om dig, och lära dig hur du kan ligga ett steg före dem.
scan-label = Se om du har varit inblandad i en dataöverträdelse.
scan-placeholder = Ange e-postadress
scan-privacy = Din e-post lagras inte.
scan-submit = Sök efter din e-postadress
scan-another-email = Skanna en annan e-postadress
scan-featuredbreach-label = Ta reda på om ditt <span class="bold"> { $featuredBreach } </span> konto har äventyrats.
scan-error = Måste vara en giltig e-postadress.
signup-banner-headline = { -product-name-nowrap } upptäcker hot mot dina konton på nätet.
signup-banner-blurb = Din detaljerade rapport från { -product-name-nowrap } visar om information från dina konton på nätet har läckt eller stulits. Vi kommer också att varna dig om dina konton visas på nya webbsidor.
download-firefox-bar-blurb = { -product-name-nowrap } presenteras av <span class="nowrap">helt nya { -brand-name }</span>.
download-firefox-bar-link = Hämta { -brand-name } nu
download-firefox-banner-blurb = Ta kontroll över din webbläsare
download-firefox-banner-button = Hämta { -brand-name }
signup-modal-headline = Registrera dig för { -product-name-nowrap }
signup-modal-blurb = Registrera dig för din fullständiga rapport, varningar när nya överträdelser inträffar och säkerhetsanvisningar från { -product-name-nowrap }.
signup-modal-close = Stäng
get-your-report = Få din rapport
signup-modal-verify-headline = Verifiera din prenumeration
signup-modal-verify-blurb = Vi skickade en verifieringslänk till <span id="submitted-email" class="medium"></span>.
signup-modal-verify-expiration = Den här länken upphör om 24 timmar.
form-signup-placeholder = Ange e-postadress
sign-up = Registrera dig
form-signup-error = Måste vara en giltig e-postadress
no-breaches-headline = Än så länge verkar allt bra.
found-breaches-headline = Din information var en del av en dataöverträdelse.
show-more-breaches = Visa mer
unsub-button = Avsluta prenumeration
unsub-survey-headline = Du prenumererar inte längre.
unsub-survey-thankyou = Tack för din återkoppling.
unsub-survey-error = Var god välj en.
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
