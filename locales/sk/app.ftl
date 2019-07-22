# String IDs beginning with "-product" and "-brand" should remain in English.
# They should not be:
# - Declined to adapt to grammatical case.
# - Transliterated.
# - Translated.
-product-name =
    { $case ->
       *[nom] Firefox Monitor
        [gen] Firefox Monitora
        [dat] Firefox Monitoru
        [acc] Firefox Monitor
        [loc] Firefox Monitore
        [ins] Firefox Monitorom
    }
-product-name-nowrap = <span class="nowrap">{ -product-name }</span>
-product-short-name =
    { $case ->
       *[nom] Monitor
        [gen] Monitora
        [dat] Monitoru
        [acc] Monitor
        [loc] Monitore
        [ins] Monitorom
    }
-brand-name =
    { $case ->
       *[nom] Firefox
        [gen] Firefoxu
        [dat] Firefoxu
        [acc] Firefox
        [loc] Firefoxe
        [ins] Firefoxom
    }
-brand-Mozilla =
    { $case ->
       *[nom] Mozilla
        [gen] Mozilly
        [dat] Mozille
        [acc] Mozillu
        [loc] Mozille
        [ins] Mozillou
    }
-brand-HIBP = Have I Been Pwned
-brand-fxa =
    { $case ->
        [nom] Účet Firefox
        [gen] Účtu Firefox
        [dat] Účtu Firefox
        [acc] Účet Firefox
        [loc] Účte Firefox
       *[ins] Účtom Firefox
    }
terms-and-privacy = Podmienky a ochrana súkromia
GitHub-link-title = GitHub
error-scan-page-token = Vo veľmi krátkom čase ste sa pokúsili skontrolovať príliš mnoho e-mailových adries. Z bezpečnostných dôvodov sme vám ďalšie vyhľadávanie dočasne zablokovali. Skúste to, prosím, neskôr.
error-could-not-add-email = E-mailovú adresu sa nepodarilo pridať do databázy.
error-not-subscribed = Táto e-mailová adresa nie je prihlásená na odber upozornení { -product-name(case: "gen") }.
error-hibp-throttled = Príliš mnoho spojení k službe { -brand-HIBP }.
error-hibp-connect = Chyba pri pripájaní k { -brand-HIBP }.
error-hibp-load-breaches = Nepodarilo sa načítať údaje o únikoch.
error-must-be-signed-in = Musíte byť prihlásení do svojho { -brand-fxa(case: "gen") }.
error-to-finish-verifying = Na dokončenie overenia tejto e-mailovej adresy v službe { -product-name } musíte byť prihlásení pod svojim hlavným účtom.
home-title = { -product-name }
home-not-found = Stránka nebola nájdená.
oauth-invalid-session = Neplatná relácia
scan-title = { -product-name } - výsledky skenu
user-add-invalid-email = Neplatná e-mailová adresa
user-add-email-verify-subject = Potvrďte svoje prihlásenie k odberu z { -product-name(case: "gen") }.
user-add-duplicate-email = Táto e-mailová adresa už bola do { -product-name(case: "gen") } pridaná.
user-add-duplicate-email-part-2 = Ak chcete zistiť stav e-mailovej adresy { $userEmail }, prejdite do sekcie { $preferencesLink }.
error-headline = Chyba
user-verify-token-error = Vyžaduje sa overovací token.
user-verify-email-report-subject = Vaša správa z { -product-name(case: "gen") }.
user-unsubscribe-token-error = Pre odhlásenie je vyžadovaný token.
user-unsubscribe-token-email-error = Pre odhlásenie je vyžadovaný token a emailHash.
user-unsubscribe-title = { -product-name } - odhlásenie
pwt-section-headline = Silnejšie heslá = lepšia ochrana
landing-headline = Každý má právo byť v bezpečí pred hackermi.
scan-placeholder = Zadajte e-mailovú adresu
scan-submit = Vyhľadajte svoju e-mailovú adresu
scan-error = Zadaná e-mailová adresa nie je platná.
download-firefox-banner-button = Prevziať { -brand-name(case: "acc") }
# Appears after Firefox Monitor has sent a verification email to a new user. 
signup-modal-sent = Odoslané!
sign-up = Zaregistrujte sa
form-signup-error = Zadaná e-mailová adresa nie je platná.
# breach-date = the calendar date a particular data theft occurred. 
breach-date = Dátum úniku:
# compromised accounts = the total number of user accounts exposed in data breach
compromised-accounts = Počet kompromitovaných účtov:
# compromised-data = the kind of user data exposed to hackers in data breach.
compromised-data = Kompromitované údaje:
unsub-headline = Zrušiť odber upozornení z { -product-name-nowrap(case: "gen") }
unsub-blurb = Týmto odstránite svoju e-mailovú adresu zo zoznamu { -product-name-nowrap(case: "gen") } a nebudete naďalej dostávať upozornenia na novo oznámené úniky dát.
unsub-button = Odhlásiť sa
# Breach data provided by Have I Been Pwned.
hibp-attribution = Údaje o únikoch poskytuje { $hibp-link }
share-twitter = Väčšina ľudí má na internete okolo 100 účtov. Zistite, či nebol niektorý z tých vašich súčasťou úniku dát.
share-facebook-headline = Zistite, či boli vaše údaje súčasťou nejakého úniku
share-facebook-blurb = Bol niektorý z vašich účtov súčasťou nejakého úniku dát?
og-site-description = { -product-name(case: "nom") } zistí, či boli vaše dáta súčasťou nejakého úniku. Pre väčšiu bezpečnosť sa taktiež prihláste k zasielaniu výstrah o únikoch v budúcnosti.
show-all = Zobraziť všetko
fxa-scan-another-email = Chcete skontrolovať ďalšiu e-mailovú adresu?
sign-in = Prihlásiť sa
sign-out = Odhlásiť sa
# Manage Firefox Account, link to page where account holders can change their account settings.
manage-fxa = Spravovať { -brand-fxa(case: "acc") }
have-an-account = Už ho máte?
fxa-pwt-summary-2 =
    Krátke, jednoslovné heslá možno ľahko uhádnuť.
    Používajte aspoň dvojslovné heslá s kombináciou malých a veľkých písmen, čísel a špeciálnych znakov.
fxa-pwt-summary-4 =
    Správcovia hesiel, ako je 1Password, LastPass, Dashlane a Bitwarden vedia vaše heslá bezpečne uložiť
    a automaticky ich pre vás na webových stránkach vyplniť. Pomôžu vám as s vytvorením silného hesla.
fxa-pwt-summary-6 =
    Počet únikov dát stúpa. Kedykoľvek sa vaše údaje objavia v novom úniku,
    { -product-name(case: "nom") } vám pošle upozornenie, aby ste mohli čo najrýchlejšie zareagovať.
fxa-what-to-do-blurb-1 =
    Ak sa nemôžete prihlásiť, kontaktujte webovú stránku a spýtajte sa, ako môžete svoje heslo zmeniť.
    Vidíte účet, o ktorom vôbec neviete? Stránka mohla zmeniť svoj názov alebo majiteľa.
    Takisto ste na daný účet mohli len zabudnúť.
fxa-what-to-do-subhead-2 = Prestaňte používať uniknuté heslo a zmeňte ho všade, kde ste ho použili.
fxa-wtd-blurb-2 =
    Hackeri môžu použiť rovnaké heslo a e-mailovú adresu a dostať sa aj do vašich ďalších účtov.
    Pre každý účet používajte iné heslo, obzvlášť pre internetové bankovníctvo, e-mailovú schránku 
    a ďalšie webové stránky, ktoré majú vaše citlivé údaje.
fxa-what-to-do-blurb-3 =
    Väčšina únikov obsahuje len e-mailové adresy a heslá, no niektoré obsahujú aj citlivé údaje finančného charakteru.
    Ak uniklo číslo vášho účtu alebo platobnej karty, okamžite informujte svoju banku.
    Sledujte taktiež stav svojho účtu, či na ňom nedošlo k zmenám.
fxa-what-to-do-subhead-4 = Nemusíte si sami pamätať všetky svoje heslá.
fxa-what-to-do-blurb-4 =
    Správcovia hesiel, ako je 1Password, LastPass, Dashlane a Bitwarden vedia vaše heslá bezpečne uložiť
    a automaticky ich pre vás na webových stránkach vyplniť. Používajte správcu hesiel na mobile aj počítači
    a svoje heslá si už nebudete musieť pamätať.
# Alerts is a noun
sign-up-for-alerts = Prihláste sa na odber upozornení
# Link title
frequently-asked-questions = Často kladené otázky
about-firefox-monitor = O { -product-name(case: "gen") }
# Link title
preferences = Nastavenia
# Link title
home = Domov
# Link title
breaches = Úniky
# Link title
security-tips = Bezpečnostné tipy
fxa-account = { -brand-fxa }
# Aria button message to open menu. "Open Firefox Account Navigation"
open-fxa-menu = Otvoriť ponuku { -brand-fxa(case: "gen") }
# Appears above a snippet about the breach most recently reported to Firefox Monitor.
latest-breach = NAPOSLEDY PRIDANÝ ÚNIK
# Link title
more-about-this-breach = Ďalšie informácie o tomto úniku
take-control = Získajte opäť kontrolu nad svojimi osobnými údajmi.
cant-stop-hackers = Nemôžete zabrániť hackerom v hackovaní. No môžete sa vyvarovať zlých zvykov a sťažiť im prácu.
read-more-tips = Ďalšie bezpečnostné tipy
how-hackers-work = Porozumejte tomu, ako hackeri pracujú
monitor-your-online-accounts = Zaregistrujte sa na monitorovanie únikov pomocou { -brand-fxa(case: "gen") }.
stay-alert = Buďte informovaní o nových únikoch
if-your-info = Ak budú vaše údaje súčasťou nového úniku dát, pošleme vám upozornenie.
search-all-emails = Vyhľadajte všetky svoje e-mailové adresy v únikoch dát a dostávajte upozornenia na nové úniky.
monitor-several-emails = Monitorujte niekoľko e-mailových adries
take-action = Podniknite kroky na ochranu svojich účtov
keep-your-data-safe = Pozrite sa, aké kroky musíte urobiť, aby ste boli v bezpečí pred kyberkriminálnikmi.
website-breach = Únik z webových stránok
sensitive-breach = Únik citlivých údajov z webových stránok
data-aggregator-breach = Únik z agregátora dát
unverified-breach = Nepotvrdený únik
spam-list-breach = Únik zo spamového zoznamu adries
website-breach-plural = Úniky z webových stránok
sensitive-breach-plural = Úniky citlivých údajov
data-aggregator-breach-plural = Úniky z agregátorov dát
unverified-breach-plural = Nepotvrdené úniky
spam-list-breach-plural = Úniky zo spamových zoznamov adries
what-data = Aké údaje boli kompromitované:
sensitive-sites = Ako sa { -product-name(case: "nom") } chová v prípade webov obsahujúcich citlivé údaje?
delayed-reporting-headline = Prečo nahlásenie tohto úniku trvalo tak dlho?
about-fxm-headline = O { -product-name(case: "gen") }.
# How Firefox Monitor works
how-fxm-works = Ako { -product-name(case: "nom") } funguje
wtd-after-website = Čo robiť po úniku z webovej stránky:
wtd-after-data-agg = Čo robiť po úniku z agregátora dát:
what-is-data-agg = Čo je agregátor dát?
what-is-data-agg-blurb =
    Agregátory dát či sprostredkovatelia údajov zbierajú údaje z verejných 
    záznamov alebo ich kupujú od iných spoločností. Tieto údaje zhromažďujú za účelom ich 
    predaja rôznym spoločnostiam na marketingové účely. U obetí týchto únikov síce existuje 
    menšia pravdepodobnosť spáchania bankového podvodu, no hackeri by mohli tieto údaje použiť na ich profilovanie.
protect-your-privacy = Chráňte svoje súkromie na internete
no-pw-to-change = Na rozdiel od únikov z webových stránok, tu nie je žiadne heslo, ktoré by sa dalo zmeniť.
avoid-personal-info = Nepoužívajte v heslách osobné údaje
avoid-personal-info-blurb = Na internete je jednoduché nájsť dátumy narodenia, adresy a mená členov rodiny. Takéto slová určite nepoužívajte ako heslá.

## What to do after data breach tips

change-pw = Zmeňte svoje heslo
even-for-old = Aj pre staré účty platí, že je dôležité vytvoriť si nové heslo.
make-new-pw-unique = Dbajte na to, aby bolo nové heslo odlišné a jedinečné
strength-of-your-pw = Sila vašich hesiel má priamy vplyv na vašu bezpečnosť na internete.
create-strong-passwords = Ako si vytvoriť silné heslá
stop-reusing-pw = Prestaňte používať rovnaké heslá
create-unique-pw = Vytvorte si jedinečné heslá a uschovajte si ich na nejakom bezpečnom mieste, napríklad v správcovi hesiel.
five-myths = 5 mýtov o správcoch hesiel
create-a-fxa = Vytvorte si { -brand-fxa(case: "nom") } a dostávajte upozornenia na nové úniky. Dostanete taktiež kompletnú správu o únikoch.
feat-security-tips = Bezpečnostné tipy na zabezpečenie účtov
feat-sensitive = Pokročilé vyhľadávanie v únikoch citlivých dát
feat-enroll-multiple = Nechajte si monitorovať viacero e-mailových adries
# This string is shown beneath each of the user’s email addresses to indicate
# how many known breaches that email address was found in. 
appears-in-x-breaches =
    { $breachCount ->
        [one] Vyskytuje sa v { $breachCount } známom úniku.
        [few] Vyskytuje sa v { $breachCount } známych únikoch.
       *[other] Vyskytuje sa v { $breachCount } známych únikoch.
    }
check-for-breaches = Prehľadať úniky
find-out-what-hackers-know = Odhaľte, čo o vás hackeri už vedia. Zistite, ako byť stále o krok pred nimi.
search-for-your-email = Vyhľadajte svoju e-mailovú adresu vo verejne dostupných únikoch dát siahajúcich do roku 2007.
back-to-top = Návrat hore
stop-monitoring-this = Zastaviť monitorovanie tejto e-mailovej adresy.
resend-verification = Znova poslať overovací e-mail
add-new-email = Pridanie novej e-mailovej adresy
send-verification = Poslať overovací odkaz
# This string is a header on the user preferences page and
# appears above a check-box list of user options which allow
# the user to choose whether or not they want to receive breach
# alerts for all of their monitored email addresses to a single 
# email address.
breach-summary = Súhrnné informácie
show-breaches-for-this-email = Zobraziť všetky úniky pre túto e-mailovú adresu.
link-change-primary = Zmeniť primárnu e-mailovú adresu
remove-fxm = Vypnúť { -product-name(case: "nom") }
remove-fxm-blurb = Týmto zrušíte odosielanie upozornení z { -product-name(case: "gen") }. Váš { -brand-fxa(case: "nom") } zostane aktívny a môžete dostávať iné správy týkajúce sa vášho účtu.
# Button title
manage-email-addresses = Správa e-mailových adries
# Link title
latest-breach-link = Pozrite sa, či ste boli súčasťou tohto úniku
welcome-back = Vitajte späť, { $userName }!
welcome-user = Vitajte, { $userName }!
breach-alert-subject = { -product-name(case: "nom") } našiel vašu e-mailovú adresu v novom úniku dát
your-info-was-discovered-headline = Vaše údaje boli nájdené v novom úniku dát.
what-to-do-after-breach = Čo robiť po úniku dát
ba-next-step-1 = Zmeňte si heslo a nové vytvorte silné a jedinečné.
ba-next-step-2 = Prestaňte s používaním uniknutého hesla.
ba-next-step-3 = Získajte pomoc s tvorbou lepších hesiel a ich uchovávaním v bezpečí.
faq1 = Túto spoločnosť alebo webovú stránku nepoznám. Prečo som súčasťou tohto úniku?
faq2 = Prečo trvalo tak dlho, než ste ma informovali o úniku?
faq3 = Ako zistím, že táto e-mailová správa pochádza naozaj zo služby { -product-name }?
new-breaches-found =
    { $breachCount ->
        [one] BOL NÁJDENÝ { $breachCount } NOVÝ ÚNIK DÁT
        [few] BOLI NÁJDENÉ { $breachCount } NOVÉ ÚNIKY DÁT
       *[other] BOLO NÁJDENÝCH { $breachCount } NOVÝCH ÚNIKOV DÁT
    }
no-results-blurb = Ľutujeme, ale tento únik sa v našej databáze nenachádza.
all-breaches-headline = Všetky úniky obsiahnuté vo { -product-name(case: "loc") }
# "Appears in-page as: Showing: All Breaches"
currently-showing = Zobrazené:

## Updated error messages

error-bot-headline = Vyhľadávanie bolo dočasne pozastavené
error-csrf-headline = Vypršal časový limit relácie
error-csrf-blurb = Kliknite v prehliadači na tlačidlo Späť, obnovte stránku a skúste to znova.
error-invalid-unsub = Ako zruším odber upozornení z { -product-name(case: "gen") }
login-link = Prihlásiť sa
# This string is displayed under a large numeral that indicates the total number
# of email address a user has signed up for monitoring. Don’t add $emails to
# your localization, because it would result in the number showing twice.
email-addresses-being-monitored =
    { $emails ->
        [one] e-mailová adresa je monitorovaná
        [few] e-mailové adresy sú monitorované
       *[other] e-mailových adries je monitorovaných
    }
# This string is displayed under a large numeral that indicates the total number
# of data breaches that have exposed the user’s information. Don’t add $breaches to
# your localization, because it would result in the number showing twice.
data-breaches-exposed =
    { $breaches ->
        [one] únik dát vyzradil vaše údaje
        [few] úniky dát vyzradili vaše údaje
       *[other] únikov dát vyzradilo vaše údaje
    }
# This string is displayed under a large numeral that indicates the total number
# of data breaches that exposed a user’s password. Don’t add $passwords to
# your localization, because it would result in the number showing twice.
passwords-exposed =
    { $passwords ->
        [one] heslo uniklo súhrnne vo všetkých únikoch
        [few] heslá unikli súhrnne vo všetkých únikoch
       *[other] hesiel uniklo súhrnne vo všetkých únikoch
    }
# This string is displayed under a large numeral that indicates the total number
# of data breaches that have exposed the user’s information. Don’t add $breaches to
# your localization, because it would result in the number showing twice.
known-data-breaches-exposed =
    { $breaches ->
        [one] známy únik dát vyzradil vaše údaje
        [few] známe úniky dát vyzradili vaše údaje
       *[other] známych únikov dát vyzradilo vaše údaje
    }
# Button
see-additional-breaches = Zobraziť ďalšie úniky
scan-results-known-breaches =
    { $breachCount ->
        [one] Táto e-mailová adresa sa objavila v 1 známom úniku dát.
        [few] Táto e-mailová adresa sa objavila v { $breachCount } známych únikoch dát.
       *[other] Táto e-mailová adresa sa objavila v { $breachCount } známych únikoch dát.
    }
# This string is shown at the top of the scan results page and is followed
# by the email address that the user searched.
# In page, it reads "Results for: searchedEmail@monitor.com"
results-for = Výsledky pre: { $userEmail }
other-monitored-emails = Ďalšie monitorované e-mailové adresy
email-verification-required = Vyžaduje sa overenie e-mailovej adresy
fxa-primary-email = E-mailová adresa { -brand-fxa(case: "gen") } (primárna)
what-is-a-website-breach = Čo je únik dát z webovej stránky?
security-tips-headline = Bezpečnostné tipy na ochranu pred hackermi
# Title appearing on the Preferences dashboard. 
monitor-preferences = Nastavenia { -product-short-name(case: "gen") }
# When a user is signed in, this appears in the drop down menu 
# and is followed by the user's primary Firefox Account email. 
signed-in-as = Prihlásení ako: { $userEmail }
# Appears on the All Breaches page and is followed by a list of filter options
# that a user can filter the visible breaches by.
filter-by = Filtrovať podľa kategórie:
# Title that appears in the mobile menu bar and opens the mobile menu when clicked.
menu = Ponuka
# This string appears in a banner at the top of each page and is followed by a "Learn More" link.
join-firefox = Existuje spôsob, ako chrániť svoje súkromie. Prihláste sa do { -brand-name(case: "gen") }.
# Link title
learn-more-link = Ďalšie informácie
email-sent = E-mail bol odoslaný!
# Form title
want-to-add = Chcete pridať ďalšiu e-mailovú adresu?
# This is part of a confirmation message that appears after a user has submitted
# the form to add an additional email to Firefox Monitor.
verify-the-link = Pre pridanie e-mailovej adresy { $userEmail } do { -product-name(case: "gen") }, overte odkaz zaslaný na túto adresu.
# This is part of a confirmation message that appears after a user has submited the
# form to add an additional email to Firefox Monitor. { $preferencesLink } is a link
# to the Preferences page. The code and text for the link is generated elsewhere
# using the { preferences } string.
manage-all-emails = Pre správu všetkých e-mailových adries navštívte { $preferencesLink }.
# This string is a header on the user preferences page and
# appears above a check-box list of user options which allow
# the user to choose whether or not they want to receive breach
# alerts for all of their monitored email addresses to a single 
# email address.
breach-alert-notifications = Upozornenia na úniky
# This string is a label for the calendar date a breach is added to the database
# and is followed by that date. 
breach-added-label = Dátum pridania:
how-hackers-work-desc = Chráňte svoje heslá pred kybernetickými zločincami - zaujímajú ich totiž najviac.
what-to-do-after-breach-desc = Uzavrite svoje účty, aby sa vaše údaje nedostali do cudzích rúk.
create-strong-passwords-desc = Vytvárajte silné, bezpečné a ťažko uhádnuteľné heslá.
steps-to-protect-desc = Porozumejte najbežnejším hrozbám a zistite, na čo si je treba dávať pozor.
five-myths-desc = Zistite, ako sa vyvarovať zlozvykom, ktoré hackerom uľahčujú prácu.
take-further-steps-desc = Zistite, ako znížiť riziko krádeže identity a predísť tak finančnej strate.
