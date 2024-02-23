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
-brand-fxa = Firefox-account
-brand-pocket = Pocket
-brand-lockwise = Firefox Lockwise
-brand-send = Firefox Send
-brand-fpn = Firefox Private Network

##

GitHub-link-title = GitHub
error-scan-page-token = Jo hawwe te folle e-mailadressen yn in koart tiidrek probearre te scannen. Om befeiligingsredenen hawwe wy jo sykmooglikheid tydlik blokkearre. Jo kinne it letter wer probearje.
error-could-not-add-email = Koe e-mailadres net oan database tafoegje.
error-not-subscribed = Dit e-mailadres is net abonnearre op { -product-name }.
error-hibp-throttled = Te folle ferbiningen mei { -brand-HIBP }.
error-hibp-connect = Flater by ferbinen mei { -brand-HIBP }.
error-hibp-load-breaches = Koe datalekken net lade.
error-must-be-signed-in = Jo moatte by jo { -brand-fxa } oanmeld wêze.
error-to-finish-verifying = Om de ferifikaasje fan dit e-mailadres foar { -product-name } te foltôgjen, moatte jo ûnder jo primêre e-mailadres oanmeld wêze.
home-title = { -product-name }
home-not-found = Side net fûn.
oauth-invalid-session = Unjildige sesje
scan-title = { -product-name } : Scanresultaten
user-add-invalid-email = Unjildich e-mailadres
user-add-too-many-emails = Jo bewekje it maksimale oantal e-mailadressen.
user-add-email-verify-subject = Ferifiearje jo abonnemint op { -product-name }.
user-add-duplicate-email = Dit e-mailadres is al oan { -product-name } tafoege.
# Variables:
#   $preferencesLink (String) - Link to preferences
#   $userEmail (String) - User email address
user-add-duplicate-email-part-2 = Besykje jo { $preferencesLink } om de steat fan { $userEmail } te kontrolearjen.
user-add-verification-email-just-sent = Sa gau kin in oar ferifikaasje-e-mailberjocht net ferstjoerd wurde. Probearje it letter opnij.
user-add-unknown-error = Der is wat misgien by it tafoegjen fan in oar e-mailadres. Probearje it letter opnij.
user-delete-unknown-error = Der is wat misgien by it fuortsmiten fan in e-mailadres. Probearje it letter opnij.
error-headline = Flater
user-verify-token-error = Ferifikaasjetoken is fereaske.
user-verify-email-report-subject = Jo { -product-name }-rapport
user-unsubscribe-token-error = Jo hawwe in token nedich om jo út te skriuwen.
user-unsubscribe-token-email-error = Jo hawwe in token en in emailHash nedich om jo út te skriuwen.
user-unsubscribe-title = { -product-name } : Utskriuwe
pwt-section-headline = Sterkere wachtwurden = Bettere beskerming
landing-headline = Jo rjocht om feilich foar hackers te wêzen begjint hjir.
scan-placeholder = Fier in e-mailadres yn
scan-submit = Jo e-mailadres sykje
scan-error = Moat in jildich e-mailadres wêze.
download-firefox-banner-button = { -brand-name } downloade
# Appears after Firefox Monitor has sent a verification email to a new user.
signup-modal-sent = Ferstjoerd!
sign-up = Ynskriuwe
form-signup-error = Moat in jildich e-mailadres wêze
# breach-date = the calendar date a particular data theft occurred.
breach-date = Datum fan datalek:
# compromised accounts = the total number of user accounts exposed in data breach
compromised-accounts = Troffen accounts:
# compromised-data = the kind of user data exposed to hackers in data breach.
compromised-data = Troffen gegevens:
unsub-headline = Utskriuwe fan { -product-name-nowrap }
unsub-blurb = Dit smyt jo e-mailadres fuort út de list fan { -product-name-nowrap } en jo ûntfange gjin warskôgingen mear wannear’t nije lekken bekendmakke wurde.
unsub-button = Utskriuwe
# Breach data provided by Have I Been Pwned.
# Variables:
#   $hibp-link (String) - Link to Have I Been Pwned
hibp-attribution = Gegevens fan datalekken ferstrekt troch { $hibp-link }
share-twitter = De measte minsken hawwe ûngefear 100 online accounts. Is ien fan dy fan jo belutsen by in datalek? Untdek it.
share-facebook-headline = Untdek oft jo troffen binne troch in datalek
share-facebook-blurb = Binne jo online accounts troffen troch in datalek?
og-site-description = Untdek mei { -product-name } oft jo troffen binne troch in datalek. Skriuw jo yn foar warskôgingen oer takomstige lekken en ûntfang tips oer hoe’t jo jo accounts feilich hâlde.
show-all = Alles toane
fxa-scan-another-email = Wolle jo in oar e-mailadres kontrolearje?
sign-out = Ofmelde
# Manage Firefox Account, link to page where account holders can change their account settings.
manage-fxa = { -brand-fxa } beheare
have-an-account = Hawwe jo al in account?
fxa-pwt-summary-2 =
    Koarte út ien wurd besteande wachtwurden binne foar hackers ienfâldich te rieden. 
    Brûk op syn minst twa wurden en in kombinaasje fan letters, sifers en spesjale tekens.
fxa-pwt-summary-4 =
    Wachtwurdbehearders as 1Password, LastPass, Dashlane en Bitwarden bewarje jo wachtwurden 
    en folje se foar jo yn op websites. Se helpe jo sels by iet oanmeitsjen fan sterke wachtwurden.
fxa-pwt-summary-6 =
    Datalekken komme hieltyd faker foar. As jo persoanlike gegevens yn in nij datalek ferskine,
    stjoert { -product-name } jo in warskôging - sadat jo yn aksje komme kinne en jo accounts beskermje kinne.
fxa-what-to-do-blurb-1 = As jo jo net oanmelde kinne, nim dan kontakt op mei de website en freegje hoe’t jo it bywurkje kinne. Sjogge jo in account dy’t jo net werkenne? Mooglik binne jo gegevens dan ferkocht of opnij ferdield. Dit kin ek in ferjitten account wêze, of in bedriuw dat fan namme wizige is.
fxa-what-to-do-subhead-2 = Stop mei it gebrûk fan it lekte wachtwurd, en wizigje it op de plakken wêr’t jo it brûkt hawwe.
fxa-wtd-blurb-2 =
    Hackers kinne probearje itselde wachtwurd en jo e-mailadres te brûken foar tagong ta oare accounts.  
    Meitsje foar elk account in oar en unyk wachtwurd oan, foaral foar jo bankrekken, 
    e-mailaccount en oare websites wêr’t jo persoanlike gegevens bewarje.
fxa-what-to-do-blurb-3 =
    De measte lekken omfetsje allinnich e-mailadressen en wachtwurden, mar guon befetsje ek gefoelige finansjele ynformaasje. 
    As jo bankrekkening of creditcardnûmers lekt binne, warskôgje dan jo bank foar mooglike fraude. 
    Let op ôfskriuwingen dy’t jo net werkenne.
fxa-what-to-do-subhead-4 = Brûk help by it ûnthâlden fan al jo wachtwurden en it feilich hâlden derfan.
fxa-what-to-do-blurb-4 =
    Wachtwurdbehearders as 1Password, LastPass, Dashlane en Bitwarden bewarje jo 
    wachtwurden feilich en folje se foar jo op websites yn. Brûk in wachtwurdbehearder 
    op jo telefoan en jo kompjûter, sadat jo se net allegearre hoege te ûnthâlden.
# Alerts is a noun
sign-up-for-alerts = Ynskriuwe foar warskôgingen
# Link title
frequently-asked-questions = Faak stelde fragen
about-firefox-monitor = Oer { -product-name }
# Link title
preferences = Foarkarren
# Link title
home = Startside
# Link title
security-tips = Befeiligingstips
fxa-account = { -brand-fxa }
# Aria button message to open menu. "Open Firefox Account Navigation"
open-fxa-menu = { -brand-fxa }-navigaasje iepenje
# Appears above a snippet about the breach most recently reported to Firefox Monitor.
latest-breach = LÊST TAFOEGE DATALEK
# Link title
more-about-this-breach = Mear oer dit datalek
take-control = Nim jo persoanlike gegevens wer ûnder kontrôle.
cant-stop-hackers = Jo kinne hackers net stopje om te hacken. Mar jo kinne minne gewoanten dy’t harren wurk maklik meitsje mije.
read-more-tips = Mear befeiligingstips
how-hackers-work = Begryp hoe’t hackers te wurk gean
monitor-your-online-accounts = Meld jo oan foar beweitsjen fan datalekken mei in { -brand-fxa }
stay-alert = Bliuw alert op nije datalekken
if-your-info = As jo gegevens foarkomme yn in nij datalek, stjoere wy jo in melding.
search-all-emails = Kontrolearje al jo e-mailadressen op datalekken en ûntfang meldingen oer nije bedrigingen.
monitor-several-emails = Beweitsje ferskate e-mailadressen
take-action = Undernim aksje om jo accounts te beskermjen
keep-your-data-safe = Untdek wat jo dwaan moatte om jo gegevens te beskermjen tsjin cyberkriminelen.
website-breach = Websitedatalek
sensitive-breach = Gefoelich websitedatalek
data-aggregator-breach = Datalek gegevenssamling
unverified-breach = Net-ferifiearre datalek
spam-list-breach = Spamlistdatalek
website-breach-plural = Websitedatalek
sensitive-breach-plural = Gefoelige datalekken
data-aggregator-breach-plural = Datalekken gegevenssamling
unverified-breach-plural = Net-ferifiearre datalekken
spam-list-breach-plural = Spamlistdatalekken
what-data = Hokker gegevens binne kompromittearre:
sensitive-sites = Hoe behannelet { -product-name } gefoelige websites?
sensitive-sites-copy =
    { -product-name } ûntbleatet allinnich accounts dy’t troffen binne troch dit
    soarte datalekken nei ferifikaasje fan in e-mailadres. Dit betsjut dat jo de
    iennige persoan binne dy’t sjen kin oft jo ynformaasje yn dit datalek foar komt
    (útsein in oar tagong ta jo e-mailaccount hat).
delayed-reporting-headline = Wêrom duorre it sa lang eardat dit datalek meld waard?
delayed-reporting-copy =
    It kin somtiden moannen of jierren duorje eardat de oanmeldgegevens dy’t yn in datalek
    foar komme op it dark web ferskine. Datalekken wurde, sa gau as se ûntdekt binne en
    ferifiearre, oan ús database tafoege.
about-fxm-headline = Oer { -product-name }
about-fxm-blurb =
    { -product-name } warskôget as jo online accounts belutsen binne by in
    datalek. Untdek oft jo troffen binne troch in datalek, ûntfang meldingen oer nije datalekken,
    en ûndernim stappen om jo online accounts te beskermjen. { -product-name } wurdt oanbean
    troch { -brand-Mozilla }.
fxm-warns-you =
    { -product-name } warskôget jo as jo e-mailadres foar komt
    yn in online datalek. Sjoch oft jo ynformaasje lekt is, lês hoe’t
    jo jo online accounts better beskermje kinne en ûntfang in warskôging
    as jo e-mailadres foar komt yn in nij datalek.
# How Firefox Monitor works
how-fxm-works = Hoe { -product-name } wurket
how-fxm-1-headline = In ienfâldige sykopdracht útfiere
how-fxm-1-blurb =
    Sykje nei jo e-mailadres yn bekende datalekken weromgeand
    oant 2007. Dizze ienfâldige sykopdracht sil de measte datalekken werjaan, mar net
    de datalekken dy’t gefoelige persoanlike ynformaasje befetsje.
how-fxm-2-headline = Skriuw jo yn foar it beweitsjen fan datalekken
how-fxm-2-blurb =
    Meitsje in { -brand-fxa } om jo e-mailadres trochgeand te kontrolearjen op datalekken.
    Nei ferifikaasje fan jo e-mailadres, ûntfange jo ek in folslein rapport oer eardere datalekken,
    ynklusyf gefoelige datalekken.
how-fxm-3-headline = Untfang meldingen yn jo browser
how-fxm-3-blurb =
    As jo { -brand-name } brûke, ûntfange jo in melding as jo in besite bringe oan in
    website dy’t skeind is. Untdek it daliks as jo yn it datalek foar komme en
    wat jo der oan dwaan kinne.
wtd-after-website = Wat te dwaan nei in datalek fan de website
wtd-after-data-agg = Wat te dwaan nei in datalek fan in gegevenssamler
what-is-data-agg = Wat is in gegevenssamler?
what-is-data-agg-blurb =
    Data-samlers of gegevenshannelers sammelje ynformaasje út iepenbiere
    boarnen en keapje dizze fan oare bedriuwen. Se fetsje dizze gegevens tegearre om se foar marketingdoeleinen
    oan bedriuwen te ferkeapjen. Slachtoffers fan dizze lekken hawwe minder kâns om troch finansjele fraude troffen te
    wurden, mar hackers soene dizze gegevens brûke kinne om harren as har foar te dwaan of harren te profilearjen.
protect-your-privacy = Jo online privacy beskermje
no-pw-to-change = Yn tsjinstelling ta in websitedatalek, is der gjin wachtwurd dat wizige wurde moat.
avoid-personal-info = Mij it gebrûk fan persoanlike gegevens yn wachtwurden
avoid-personal-info-blurb = It is maklik om jierdagen, adressen en nammen fan famyljeleden online te finen. Mij gebrûk fan dizze wurden yn jo wachtwurden.

## What to do after data breach tips

change-pw = Wizigje jo wachtwurd
change-pw-site = Wachtwurd foar dizze website wizigje
even-for-old = Sels foar âlde accounts is it wichtich om jo wachtwurd by te wurkjen.
make-new-pw-unique = Meitsje it nije wachtwurd oars en unyk
strength-of-your-pw = De krêft fan jo wachtwurden hat daliks ynfloed op jo online feilichheid.
create-strong-passwords = Hoe meitsje jo sterke wachtwurden
stop-reusing-pw = Stop mei it opnij brûken fan deselde wachtwurden
create-unique-pw = Meitsje unike wachtwurden en bewarje se op in feilich plak, lykas in wachtwurdbehearder.
five-myths = 5 myten oer wachtwurdbehearders
create-a-fxa = Meitsje in { -brand-fxa } foar jo folsleine rapport fan datalekken en om meldingen te ûntfangen.
feat-security-tips = Befeiligingstips om jo accounts te beskermjen
feat-sensitive = Avansearre sykje yn gefoelige datalekken
feat-enroll-multiple = Registrearje mear e-mailadressen foar beweitsjen fan datalekken
# This string is shown beneath each of the user’s email addresses to indicate
# how many known breaches that email address was found in.
# Variables:
#   $breachCount (Integer) - Number of breaches
appears-in-x-breaches =
    { $breachCount ->
        [one] Komt foar yn { $breachCount } bekend datalek.
       *[other] Komt foar yn { $breachCount } bekende datalekken.
    }
check-for-breaches = Kontrolearje op datalekken
find-out-what-hackers-know = Untdek wat hackers al oer jo witte. Lear hoe’t jo harren in stap yn it foar bliuwe kinne.
get-email-alerts = Bliuw feilich: ûntfang e-mailberjochten wannear’t jo gegevens foarkomme yn in bekend datalek
search-for-your-email = Sykje werom oant 2007 nei jo e-mailadres yn iepenbiere datalekken.
back-to-top = Werom nei boppe
comm-opt-0 = Stjoer my in e-mailberjocht as ien fan myn e-mailadressen hjirûnder yn in datalek ferskynt.
# Variables:
#   $primaryEmail (String) - User primary email address
comm-opt-1 = Stjoer alle datalekwarskôgingen nei { $primaryEmail }.
stop-monitoring-this = Stop mei it kontrolearjen fan dit e-mailadres.
resend-verification = Ferifikaasje-e-mailberjocht opnij ferstjoere
add-new-email = In nij e-mailadres tafoegje
send-verification = Ferifikaasjekeppeling ferstjoere
# This string is a header on the user preferences page and
# appears above a check-box list of user options which allow
# the user to choose whether or not they want to receive breach
# alerts for all of their monitored email addresses to a single
# email address.
breach-summary = Gearfetting datalek
show-breaches-for-this-email = Toan alle datalekken foar dit e-mailadres.
link-change-primary = Primêre e-mailadres wizigje
remove-fxm = { -product-name } fuortsmite
remove-fxm-blurb =
    Skeakelje warskôgingen fan { -product-name } út. Jo { -brand-fxa } bliuwt aktyf en jo ûntfange
    mooglik oare accountrelatearre kommunikaasje.
# Button title
manage-email-addresses = E-mailadressen beheare
# Link title
latest-breach-link = Sjoch oft jo yn dit datalek foar komme

## Variables:
##   $userName (String) - Username

welcome-back = Wolkom werom, { $userName }!
welcome-user = Wolkom, { $userName }!

##

breach-alert-subject = { -product-name } hat jo e-mailadres fûn yn in nij datalek.
your-info-was-discovered-headline = Jo gegevens binne ûntdekt yn in nij datalek.
your-info-was-discovered-blurb =
    Jo binne oanmeld om { -product-name }-meldingen te ûntfangen
    wannear jo e-mailadres ferskynt yn in datalek. Dit is wat wy witte oer dit datalek.
what-to-do-after-breach = Wat te dwaan nei in datalek
ba-next-step-1 = Wizigje jo wachtwurd yn in sterk, unyk wachtwurd.
ba-next-step-blurb-1 =
    In sterk wachtwurd brûkt in kombinaasje fan haadletters en lytse letters,
    spesjale tekens en sifers. It befettet gjin persoanlike ynformaasje lykas
    jo adres, bertedatum of famyljenammen.
ba-next-step-2 = Stop folslein it gebrûk fan dat lekte wachtwurd.
ba-next-step-blurb-2 =
    Cyberkriminelen kinne jo wachtwurd op it dark web fine en it brûke
    om harren oan te melden by jo oare accounts. De bêste manier om jo accounts te beskermjen
    is it gebrûk fan unike wachtwurden foar elk derfan.
ba-next-step-3 = Lit jo helpe by it meitsjen fan bettere wachtwurden en se feilich te hâlden.
ba-next-step-blurb-3 =
    Brûk in wachtwurdbehearder om sterke, unike wachtwurden te meitsjen. Wachtwurdbehearders bewarje al
    jo oanmeldgegevens feilich, sadat jo se op al jo apparaten iepenje kinne.
faq1 = Ik werken dit bedriuw of dizze website net. Wêrom kom ik foar yn dit datalek?
faq2 = Wêrom duorre it sa lang om my fan dit datalek op de hichte te stellen?
faq3 = Hoe wit ik dat dit in legitym e-mailberjocht fan { -product-name } is?
# Variables:
#   $breachCount (Integer) - Number of breaches
new-breaches-found =
    { $breachCount ->
        [one] { $breachCount } NIJ DATALEK FÛN
       *[other] { $breachCount } NIJE DATALEKKEN FÛN
    }
sign-up-headline-1 = Untfang trochgeand warskôgingen mei in { -brand-fxa }.
account-not-required = De { -brand-name }-browser is net fereaske foar in { -brand-fxa }. Jo ûntfange mooglik ynformaasje oer tsjinsten fan { -brand-Mozilla }.

## Variables:
##   $breachName (String) - Number of the breach

was-your-info-exposed = Binne jo gegevens lekt yn it datalek { $breachName }?
fb-not-comp = Dit e-mailadres komt net foar yn it datalek { $breachName }.
# Variables:
#   $breachCount (Integer) - Number of breaches
other-breaches-found =
    { $breachCount ->
        [one] It komt lykwols wol foar yn { $breachCount } oar datalek.
       *[other] It komt lykwols wol foar yn { $breachCount } oare datalekken.
    }
fb-comp-only = Dit e-mailadres komt foar yn it datalek { $breachName }.
# Variables:
#   $breachCount (Integer) - Number of breaches
fb-comp-and-others =
    { $breachCount ->
        [one] Dit e-mailadres komt foar yn { $breachCount } bekend datalek, ynklusyf { $breachName }.
       *[other] Dit e-mailadres komt foar yn { $breachCount } bekende datalekken, ynklusyf { $breachName }.
    }

##

no-other-breaches-found = Gjin oare datalekken fûn yn in basissykopdracht.
no-results-blurb = Sorry, dat datalek stiet net yn ús database.
# This string contains nested markup that is later used to style and link the text inside of it.
# Please do not modify or remove "<a>", "</a>", "<span>" and "</span>".
facebook-breach-note =
    <span>Jo e-mailadres komt net foar yn dit lek,
    mar jo telefoannûmer kin noch hieltyd kwetsber wêze.</span> Guon fan de accounts
    dy’t by it Facebook-lek bleatsteld binne befetsje telefoannûmers en oare
    persoanlike gegevens, mar gjin e-mailadressen. As jo ea in Facebook-account oanmakke hawwe – sels as jo dizze no net brûke – rekommandearje wy jo oan
    dizze stappen te nimmen om josels te beskermjen
# This string contains nested markup that is later used to style and link the text inside of it.
# Please do not modify or remove "<a>", "</a>", "<span>" and "</span>".
facebook-breach-what-to-do-1-headline = <span>Stel jo gegevens yn op ‘Allinnich ik’ of in oare net-iepenbiere ynstelling yn <a>jo Facebook-profyl</a>.</span>
facebook-breach-what-to-do-1-copy =
    By dit lek hawwe hackers profylgegevens
    dy’t ynsteld wien op ‘iepenbier’ of ‘dield mei freonen’ bútmakke.
    Dizze gegevens kinne kombinearre wurde mei oare gegevens om noch mear
    fan jo persoanlike gegevens en account te benaderen.
# This string contains nested markup that is later used to style and link the text inside of it.
# Please do not modify or remove "<a>", "</a>", "<span>" and "</span>".
facebook-breach-what-to-do-2-headline =
    <span>Wizigje it wachtwurd, de pinkoade of oare befeiligingsgegevens fan jo <a>accounts fan
    telefoanoanbieders</a> om sim-swapping foar te kommen</span>.
facebook-breach-what-to-do-2-copy =
    Sim-swapping, ek wol sim-jacking neamd,
    bart as in hacker telefoannûmer, bertedatum en oare gegevens brûkt om
    ien syn/har mobile telefoannûmer oer te nimmen en dêrnei op harren e-mail-, sosjale media- en sels finansjele accounts yn te brekken.
facebook-breach-what-to-do-3 = Lês alle oanrekommandaasjes op ús side oer it Facebook-lek
# "Appears in-page as: Showing: All Breaches"
currently-showing = Resultaat:

## Updated error messages

error-bot-headline = Sykopdrachten tydlik útsteld
error-bot-blurb =
    Wy binne bang dat jo miskien in bot binne, omdat jo yn in koart tiidsrek
    socht hawwe nei ferskate e-mailadressen. Nije sykopdrachten binne
    foarearst blokkearre. Jo kinne it letter opnij probearje.
error-csrf-headline = Sesje ferrûn
error-csrf-blurb = Selektearje de knop Tebek fan jo browser, laad de side opnij en probearje it nochris.
error-invalid-unsub = Hoe ôf te melden fan warskôgingen fan { -product-name }
error-invalid-unsub-blurb =
    Jo moatte jo ôfmelde fan ien fan de
    e-mailberichten út dy’t { -product-name } jo stjoerd hat. Sjoch yn jo Postfek YN foar berjochten
    fan { -brand-team-email }. Selektear ûnderoan it e-mailberjocht de keppeling foar ôfmelden.
# This string is displayed under a large numeral that indicates the total number
# of email address a user has signed up for monitoring. Don’t add $emails to
# your localization, because it would result in the number showing twice.
email-addresses-being-monitored =
    { $emails ->
        [one] E-mailadres wurdt yn 'e gaten holden
       *[other] E-mailadressen wurde yn 'e gaten holden
    }
# This string is displayed under a large numeral that indicates the total number
# of data breaches that exposed a user’s password. Don’t add $passwords to
# your localization, because it would result in the number showing twice.
passwords-exposed =
    { $passwords ->
        [one] Wachtwurd lekt yn alle datalekken
       *[other] Wachtwurden lekt yn alle datalekken
    }
# This string is displayed under a large numeral that indicates the total number
# of data breaches that have exposed the user’s information. Don’t add $breaches to
# your localization, because it would result in the number showing twice.
known-data-breaches-exposed =
    { $breaches ->
        [one] In bekend datalek hat jo gegevens lekt
       *[other] Bekende datalekken hawwe jo gegevens lekt
    }
# Button
see-additional-breaches = Mear datalekken besjen
# Variables:
#   $breachCount (Integer) - Number of breaches
scan-results-known-breaches =
    { $breachCount ->
        [one] Dit e-mailadres komt foar yn in bekend datalek
       *[other] Dit e-mailadres komt foar yn { $breachCount } bekende datalekken
    }
# This string is shown at the top of the scan results page and is followed
# by the email address that the user searched.
# In page, it reads "Results for: searchedEmail@monitor.com"
# Variables:
#   $userEmail (String) - User email address
results-for = Resultaten foar: { $userEmail }
other-monitored-emails = Oare yn 'e gaten holden e-mailadressen
email-verification-required = E-mailferifikaasje fereaske
fxa-primary-email = { -brand-fxa } E-mailadres – Primêr
what-is-a-website-breach = Wat is in websitedatalek?
website-breach-blurb = In datalek fan in website bart, wannear cyberkriminelen persoanlike gegevens út online-accounts stelle, kopiearje of bleatlizze. Dat bart it meast, wannear hackers in swak plak yn de befeiliging fan de website fine. It kin lykwols ek barre as accountynformaasje by fersin lekt wurdt.
security-tips-headline = Befeiligingstips om josels tsjin hackers te beskermjen
steps-to-protect = Te nimmen stappen om jo online identiteit te beskermjen
take-further-steps = Undernim fierdere stappen om jo identiteit te beskermjen
alert-about-new-breaches = Warskôgje my oer nije datalekken
see-if-youve-been-part = Sjoch oft jo ûnderdiel binne fan in online datalek.
get-ongoing-breach-monitoring = Krij kontinue bewekking foar mear e-mailadressen.
# This is a button and follows a headline reading "Was your info exposed in the ___ breach?"
find-out = No útprobearje
new-unsub-error = Jo moatte jo ôfmelde fan ien fan de troch { -product-name } ferstjoerde e-mailberjochten út.
# Variables:
#   $breachCount (Integer) - Number of breaches
other-known-breaches-found =
    { $breachCount ->
        [one] It is lykwols wol tefoaren kommen yn { $breachCount } oar bekend lek.
       *[other] It is lykwols wol tefoaren kommen yn { $breachCount } oare bekende lekken.
    }
# This string appears on breach detail pages and is followed by a list
# of data classes that the breach exposed.
additional-information-including = Oanfoljende ynformaasje, wêrûnder:
# Title
email-addresses-title = E-mailadressen
# This is a section headline on the breach detail page that appears above
# a short summary about the breach.
breach-overview-title = Oersjoch
# This is a standardized breach overview blurb that appears on all breach detail pages.
# $breachTitle is the name of the breached company or website.
# $breachDate and $addedDate are calendar dates.
breach-overview-new = Op { $breachDate } is in lek bard op { $breachTitle }. Nei ûntdutsing en ferifikaasje fan it lek, is it op { $addedDate } tafoege oan ús database.
# Title appearing on the Preferences dashboard.
monitor-preferences = { -product-short-name }-foarkarren
# When a user is signed in, this appears in the drop down menu
# and is followed by the user's primary Firefox Account email.
# Variables:
#   $userEmail (String) - User email address
signed-in-as = Oanmeld as: { $userEmail }
# Appears on the All Breaches page and is followed by a list of filter options
# that a user can filter the visible breaches by.
filter-by = Filterje op kategory:
# Title that appears in the mobile menu bar and opens the mobile menu when clicked.
menu = Menu
to-affected-email = Warskôgingen oer datalekken nei it troffen e-mailadres stjoere
# This string appears in a banner at the top of each page and is followed by a "Learn More" link.
join-firefox = Der is in manier om jo privacy te beskermjen. Doch mei mei { -brand-name }.
# Link title
learn-more-link = Mear ynfo.
email-sent = E-mailberjocht ferstjoerd!
# Form title
want-to-add = Wolle jo noch in e-mailadres tafoegje?
# This is part of a confirmation message that appears after a user has submitted
# the form to add an additional email to Firefox Monitor.
# Variables:
#   $userEmail (String) - User email address
verify-the-link = Ferifiearje de keppeling dy’t nei { $userEmail } ferstjoerd is om dy oan { -product-name } ta te foegjen.

## These are part of a confirmation page that appears after a user has verified
## an additional email to Firefox Monitor.

email-verified = E-mailadres mei sukses ferifiearre!
# Variables:
#   $email (String) - User email address
email-added-to-subscription = Wy stjoere jo in warskôging as { $email } troch in datalek troffen is.
# This message is displayed after the user has verified their email address.
# { $nestedSignInLink } is replaced by a link, using sign-in-nested as text ("sign in" for English).
email-verified-view-dashboard = { $nestedSignInLink } om alle e-mailadressen dy’t jo oanmeld hawwe foar beweitsjen op lekken te besjen en te behearen.
# This message is used as a text for the subscribe link in email-verified-view-dashboard
sign-in-nested = oanmelde

##

# This is part of a confirmation message that appears after a user has submited the
# form to add an additional email to Firefox Monitor. { $preferencesLink } is a link
# to the Preferences page. The code and text for the link is generated elsewhere
# using the { preferences } string.
# Variables:
#   $preferencesLink (String) - Link to preferences
manage-all-emails = Behear alle e-mailadressen yn { $preferencesLink }.
# This string is a header on the user preferences page and
# appears above a check-box list of user options which allow
# the user to choose whether or not they want to receive breach
# alerts for all of their monitored email addresses to a single
# email address.
breach-alert-notifications = Datalekmeldingen
# This string is a label for the calendar date a breach is added to the database
# and is followed by that date.
breach-added-label = Datalek tafoege:
how-hackers-work-desc = Beskermje jo wachtwurden tsjin cyberkriminelen, want dêr jouwe se it meast om.
what-to-do-after-breach-desc = Beskoattelje jo accounts om jo gegevens út de ferkearde hannen te hâlden.
create-strong-passwords-desc = Meitsje jo wachtwurden sterk, feilich en swier te rieden.
steps-to-protect-desc = Meitsje josels paadwiis yn de meast foarkommende bedriegingen en lear wêr’t jo op lette moatte.
five-myths-desc = Lear hoe’t jo slimme wachtwurdgewoanten, dy’t it wurk fan in hacker maklik meitsje, mije kinne.
take-further-steps-desc = Untdek hoe’t jo de risiko’s fan identiteitstellerij beheine kinne om finansjeel ferlies te mijen.
# This message appears after a user has successfully updated their communication settings.
changes-saved = Wizigingen bewarre!
# Section headline
rec-section-headline = Wat kinne jo dwaan foar dit datalek
rec-section-subhead = Wy riede jo oan de folgjende stappen te nimmen om jo persoanlike gegevens feilich te hâlden en jo digitale identiteit te beskermjen.
# Section headline
rec-section-headline-no-pw = Wat kinne jo dwaan om jo persoanlike gegevens te beskermjen
rec-section-subhead-no-pw = Hoewol by dit datalek gjin wachtwurden lekt binne, binne der noch hieltyd stappen dy’t jo nimme kinne om jo personlike gegevens better te beskermjen.
# Button
see-additional-recs = Oanfoljende oanrekommandaasjes

## This string contains nested markup that becomes a link later in the code.
## Please do not modify or remove "<a>" and "</a>".

# Variables:
#   $affectedEmail (String) - User email address
resolve-top-notification = { $affectedEmail } komt foar yn dit lek. <a>Wat jo no dwaan moatte</a>
# Variables:
#   $numAffectedEmails (Integer) - Number of affected email address
resolve-top-notification-plural =
    { $numAffectedEmails ->
        [one] { $numAffectedEmails } fan jo e-mailadressen komt foar yn dit lek. <a>Wat jo no dwaan moatte</a>
       *[other] { $numAffectedEmails } fan jo e-mailadressen komme foar yn dit lek. <a>Wat jo no dwaan moatte</a>
    }

##

marking-this-subhead = Dit datalek as oplost markearje
# This string contains nested markup that is later used to style the text inside of it.
# Please do not modify or remove "<span>" and "</span>".
marking-this-body =
    <span>Neidat jo de stappen nommen hawwe om dit datalek oan te pakken</span>.
    kinne jo it as oplost markearje. Jo kinne noch hieltyd op elk winske momint 
    fan jo dashboerd ôf de details fan it lek besjen.
mark-as-resolve-button = As oplost markearje
marked-as-resolved-label = As oplost markearre
undo-button = Ungedien meitsje
confirmation-1-subhead = Moai! Jo hawwe sakrekt jo earste datalek oplost.
confirmation-1-body = Gean sa troch. Sjoch op jo dashboerd om te sjen oft der noch mear te dwaan is.
confirmation-2-subhead = Pak oan, hackers!
confirmation-2-body = Jo nimme wichtige stappen om jo online accounts te beskermjen.
confirmation-3-subhead = Noch ien dien. Goed wurk!
# This string contains nested markup that becomes a link later in the code.
# Please do not modify or remove "<a>" and "</a>".
confirmation-3-body = Is jo nije wachtwurd unyk, sterk en swier te rieden? <a>Untdek it hjir</a>
generic-confirmation-subhead = Dit lek is as oplost markearre
# Variables:
#   $numUnresolvedBreaches (Integer) - Number of resolved breaches
generic-confirmation-message =
    { $numUnresolvedBreaches ->
        [one] Gean nei jo dashboerd om it restearjende lek te besjen.
       *[other] Gean nei jo dashboerd om de restearjende lekken te besjen.
    }
return-to-breach-details-link = Tebek nei details fan it datalek
go-to-dashboard-link = Nei it dashboerd
# This string appears above a breach resolution progress bar and indicates
# the percentage of breaches a user has resolved. For instance, "27% complete".
# Variables:
#   $percentComplete (String) - Completion percentage
progress-percent-complete = { $percentComplete }% foltôge
# This string appears in the purple callouts at the top of the user dashboard and shows
# the total number of breaches a user has resolved. For instance, "5 Resolved".
# Variables:
#   $numResolvedBreaches (Integer) - Number of resolved breaches
num-resolved =
    { $numResolvedBreaches ->
        [one] { $numResolvedBreaches } oplost
       *[other] { $numResolvedBreaches } oplost
    }
progress-intro-subhead = Nij yn { -product-name }: Datalekken as oplost markearje
progress-intro-message =
    Neidat jo de details oer in datalek besjoen hawwe en stappen om jo persoanlike 
    gegevens te beskermjen nommen hawwe, kinne jo lekken as oplost markearje.
# Variables:
#   $numResolvedBreaches (Integer) - Number of resolved breaches
#   $numTotalBreaches (Integer) - Total number of breaches
progress-status =
    { $numTotalBreaches ->
        [one] { $numResolvedBreaches } van { $numTotalBreaches } lek as oplost markearre
       *[other] { $numResolvedBreaches } van { $numTotalBreaches } lekken as oplost markearre
    }
progress-complete = Alle bekende lekken binne as oplost markearre

## These strings contain nested markup that is later used to style the text inside of it.
## Please do not modify or remove "<span>" and "</span>".

progress-message-1 =
    <span>Jo begjinne goed!</span> Besjoch de restearjende lekken om te lêzen hokker 
    stappen jo nimme kinne.
progress-message-2 =
    <span>Gean sa troch!</span> Lytse wizigingen, lykas it bywurkjen fan wachtwurden, hawwe grutte ynfloed op
    it feilich hâlden fan jo persoanlike gegevens.
progress-message-3 = <span>Goed wurk om dy lekken op te lossen!</span> Gean sa troch. Jo hawwe der noch in pear oer.
progress-message-4 = <span>Hast klear!</span> Jo binne hast by de einstreek.
progress-complete-message =
    <span>Fielt goed net?</span> As jo troch gean wolle, is dit in goed momint om
    oare oanmeldingen mei sterkere wachtwurden by te wurkjen.

##

resolve-this-breach-link = Dit datalek oplosse
# This string appears in resolved breach cards and is followed by
# the date the user marked the breach as resolved.
marked-resolved = As oplost markearre:
hide-resolved-button = Oplost ferstopje
show-resolved-button = Oplost toane
# Variables:
#   $numPasswords (Integer) - Number of exposed passwords
unresolved-passwords-exposed =
    { $numPasswords ->
        [one] Wachtwurd lekt yn net oploste datalekken
       *[other] Wachtwurden lekt yn net oploste datalekken
    }
# Variables:
#   $numResolvedBreaches (Integer) - Number of resolved breaches
known-data-breaches-resolved =
    { $numResolvedBreaches ->
        [one] Bekend datalek as oplost markearre
       *[other] Bekende datalekken as oplost markearre
    }
# A status indicator that appears in the top right corner of new breach cards
new-breach = Nij
mobile-promo-headline = Bring { -brand-name } nei jo telefoan en tablet
mobile-promo-body = Fluch, privee en feilich sneupe oeral wêr’t jo ek binne. Sykje { -brand-name } yn de Google Play en App Store.
mobile-promo-cta = Download { -brand-name } op Android en iOS
promo-lockwise-headline = Nim jo wachtwurden oeral mei hinne
lockwise-promo-body = Hâld jo oanmeldingen by op alle apparaten. Benaderje se feilich fan jo kompjûter, telefoan of tablet ôf.
promo-lockwise-cta = Download { -brand-lockwise }
fpn-promo-headline = Maskearje jo lokaasje foar websites en trackers
promo-fpn-body = { -brand-fpn } smyt de websites en gegevenssammelers dy’t jo mei advertinsjes profilearje fuort, troch jo wiere IP-adres te maskearjen.
promo-fpn-cta = Download { -brand-fpn }
monitor-promo-headline = Kom mear te witten oer nije datalekken
monitor-promo-body = Untfang de folgjende kear in melding wannear’t jo persoanlike gegevens foarkomme yn in bekend datalek.
ecosystem-promo-headline = Beskermje jo onlinelibben mei produkten dy’t privacy foarop stelle
ecosystem-promo-body = Alles wat { -brand-name } docht, stiet yn it teken fan ús belofte foar persoanlike gegevens: nim minder. Hâld it feilich. Gjin geheimen.
promo-ecosystem-cta = Alle produkten
steps-to-resolve-headline = Stappen om dit lek op te lossen
vpn-promo-headline = Dit is it momint om jo online feilichheid te ferbetterjen.
vpn-promo-copy = { -brand-Mozilla }’s Virtual Private Network helpt jo ynternetferbining ôf te skermjen fan hackers en spionnen.
vpn-promo-cta = { -brand-mozilla-vpn } downloade
vpn-promo-headline-new = Besparje 50% mei in jierabonnemint
vpn-promo-copy-new = Beskermje jo onlinegegevens – en kies in VPN-abonnemint dat by jo past.

## VPN promotional banner.  HTML tags should not be translated, e.g. `<em>`

# Variables:
#   $ip-location (String) - User's IP location is determined dynamically by 3rd-party,
#                           eg: "Your location: Los Angeles, CA".  The 3rd-party service
#                           provides its own localization.
vpn-banner-location = Jo lokaasje: { $ip-location }
vpn-banner-protect-yourself-with-vpn = <em>Beskermje josels</em> mei { -brand-mozilla-vpn }.
vpn-banner-protected-with-vpn = <em>Beskerme</em> mei { -brand-mozilla-vpn }.
vpn-banner-title-1 = Jo binne beskerme – tank dat jo { -brand-mozilla-vpn } brûke.
vpn-banner-title-2 = Jo lokaasje kin folge wurde as jo gjin VPN brûke.
vpn-banner-subtitle-2 = Beskermje jo lokaasje en navigearje feilich yn trije stappen
vpn-banner-status-protected = Aktuele steat: <em>Beskerme ✓</em>
vpn-banner-status-not-protected = Aktuele steat: <em>Net beskerme ⚠</em>
# Variables:
#   $ip-address (String) - User's IP address is determined dynamically, eg: "IP address: 192.168.1.1"
vpn-banner-ip-address = IP-adres: { $ip-address }
vpn-banner-step-1 = Abonnearje op { -brand-mozilla-vpn }
vpn-banner-step-2 = Selektearje in VPN-lokaasje
vpn-banner-step-3 = Aktivearje VPN en navigearje feilich
vpn-banner-cta = { -brand-mozilla-vpn } downloade
# button to expand panel
vpn-banner-cta-expand = Utklappe
# button to close panel
vpn-banner-cta-close = Slute

## Relay and VPN educational/ad units

ad-unit-relay-cta = Mear ynfo oer { -brand-relay }
ad-unit-vpn-cta = Mear ynfo oer { -brand-mozilla-vpn }
# ad 1 heading
ad-unit-1-how-do-you-keep = Hoe hâlde jo jo e-mailadres geheim?
# ad 2 heading
ad-unit-2-do-you-worry = Meitsje jo jo soargen oer feilichheid op iepenbiere wifi-netwurken?
# ad 3 heading
ad-unit-3-stay-in-the-game = Bliuw yn it spul!
ad-unit-3-lets-you-keep = Mei { -brand-mozilla-vpn } kinne jo in stabile ferbining feilich hâlde, wylst jo games spylje of films streame.
# ad 3 list item 1
ad-unit-3-prevent-throttling = Foarkom beheining
# ad 3 list item 2
ad-unit-3-be-anywhere = Wês oeral yn de wrâld
# ad 3 list item 3
ad-unit-3-access-more = Tagong ta mear
# ad 4 heading
ad-unit-4-shopping-with = Winkelje mei e-mailmaskers
ad-unit-4-want-to-buy = Wolle jo wat online keapje en kenne jo de winkel net of fertrouwe jo dizze net folslein?
ad-unit-4-shop-online = Brûk in e-mailmasker as jo online winkelje. Untfang de befêstiging nei jo wiere e-mailadres en skeakelje dan it masker letter maklik út.
# ad 5 heading
ad-unit-5-on-the-go = Underweis mei { -brand-relay }
ad-unit-5-instantly-make = Meitsje direkt en oeral in oanpast e-mailmasker!
# ad 5 subheading 1
ad-unit-5-connect-on-the-go = Underweis ferbining meitsje
ad-unit-5-privately-sign-in = Brûk jo e-mailmasker wannear’t jo jo privee oanmelde wolle by jo favorite hoarekagelegenheid of iepenbiere wifi
# ad 5 subheading 2
ad-unit-5-email-receipts = Untfang ûntfangstbewizen per e-mail
ad-unit-5-share-custom-email = Diel in oanpast e-mailmasker foar kassabonnen yn de winkel sûnder jo wiere e-mailadres te dielen
# ad 5 subheading 3
ad-unit-5-use-on-phone = Brûke op jo telefoan
ad-unit-5-no-matter-where = Wêr’t jo ek binne, meitsje binnen inkelde sekonden in oanpast e-mailmasker foar alles wat jo dwaan wolle
# ad 6 heading
ad-unit-6-worry-free = Soargeleas oanmelde
ad-unit-6-want-to-start = Wolle jo in nij abonnemint starte, reagearje op in útnûging of in promokoade mei foardiel krije sûnder dat spam jo Postfek YN oerrint?
ad-unit-6-before-you-complete = Brûk, eardat jo jo folgjende registraasje foltôgje, in e-mailmasker yn stee fan jo wiere adres om jo gegevens te beskermjen en kontrôle te hâlden oer jo Postfek YN

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
-brand-mozilla-account = Mozilla-account
open-in-new-tab-alt = Keppeling iepenje yn in nij ljepblêd

## Search Engine Optimization

meta-desc-2 = Untdek mei { -brand-fx-monitor } of jo ûnderdiel binne fan in datalek. Wy helpe jo te begripen wat jo dêrnei dwaan moatte en kontrolearje trochgeand op nije datalekken.

## Header

# Deprecated
brand-fx-monitor = { -brand-fx-monitor }
sign-in = Oanmelde
brand-mozilla-monitor = { -brand-fx-monitor }

## Site navigation

site-nav-breaches-link = Datalekken oplosse
site-nav-settings-link = Ynstellingen
site-nav-help-link = Help en stipe
# This call-out is above 2 image links for Firefox Relay and Mozilla VPN
site-nav-ad-callout = Probearje ús oare befeiligingsark:
brand-relay = { -brand-relay }
brand-mozilla-vpn = { -brand-mozilla-vpn }
mobile-menu-label = Haadmenu
main-nav-button-collapse-label = Menu ynklappe
main-nav-button-collapse-tooltip = Menu ynklappe
main-nav-button-expand-label = Menu útklappe
main-nav-button-expand-tooltip = Menu útklappe
main-nav-label = Navigaasje
main-nav-link-home-label = Startside
main-nav-link-dashboard-label = Dashboerd
main-nav-link-settings-label = Ynstellingen
main-nav-link-faq-label = FAQ’s
main-nav-link-faq-tooltip = Faak stelde fragen

## User menu

# Obsolete
menu-button-title = Brûkersmenu
# Obsolete
menu-button-alt = Brûkersmenu iepenje
# Obsolete
menu-list-accessible-label = Accountmenu
# Obsolete
menu-item-fxa-2 = Jo { -brand-mozilla-account } beheare
# Obsolete
menu-item-settings = Ynstellingen
# Obsolete
menu-item-help = Help en stipe
# Obsolete
menu-item-logout = Ofmelde
user-menu-trigger-label = Brûkersmenu iepenje
user-menu-trigger-tooltip = Profyl
user-menu-manage-fxa-label = Jo { -brand-mozilla-account } beheare
user-menu-settings-label = Ynstellingen
user-menu-settings-tooltip = { -brand-mozilla-monitor } konfigurearje
user-menu-help-label = Help en stipe
user-menu-help-tooltip = Krij help mei it brûken fan { -brand-mozilla-monitor }
user-menu-signout-label = Ofmelde
user-menu-signout-tooltip = Ofmelde by { -brand-mozilla-monitor }

## Footer

mozilla = { -brand-Mozilla }
terms-of-service = Tsjinstbetingsten
privacy-notice = Privacyferklearring
github = { -brand-github }
footer-nav-all-breaches = Alle datalekken
footer-external-link-faq-label = FAQ’s
footer-external-link-faq-tooltip = Faak stelde fragen

## Error page

# Variables:
#   $errorCode (number) - "404"
error-page-error-404-title = { $errorCode } Side net fûn
error-page-error-404-copy = It spyt ús, de side dêr’t jo nei sykje bestiet net mear.
error-page-error-404-cta-button = Tebek
# Variables:
#   $errorCode (number) - the status code of the error, e.g. 403
error-page-error-other-title = { $errorCode } Der is wat misgien
error-page-error-other-copy = Probearje it opnij of kom letter werom

## Breach overview page

all-breaches-headline-2 = Alle troch { -brand-fx-monitor } detektearre datalekken
all-breaches-lead = Wy folgje alle bekende datalekken om derefter te kommen oft jo persoanlike gegevens yn gefaar brocht binne. Hjir is in folsleine list fan alle datalekken dy’t sûnt 2007 meld binne.
search-breaches = Datalekken sykje
# the kind of user data exposed to hackers in data breach.
exposed-data = Lekte gegevens:

## Public breach detail page

find-out-if-2 = Untdek oft jo troffen binne troch dit lek
find-out-if-description = Wy helpe jo fluch te sjen oft jo e-mailadres lekt is by dit datalek en te begripen wat jo dêrnei dwaan moatte.
breach-detail-cta-signup = Kontrolearje op datalekken

## Floating banner

floating-banner-text = Ferheegje jo online feiligens mei nijs, tips en updates fan { -brand-Mozilla }.
floating-banner-link-label = Registrearje
floating-banner-dismiss-button-label = Nee, tankewol

## Firefox Monitor -> Mozilla Monitor rebrand banner

banner-monitor-rebrand-text = <b>{ -brand-mozilla-monitor }</b>: Nije namme, uterlik en noch mear manieren om <b>jo privacy werom te winnen</b>.
banner-monitor-rebrand-dismiss-button-label = OK
banner-monitor-rebrand-dismiss-button-tooltip = Slute
loading-accessibility = Lade
