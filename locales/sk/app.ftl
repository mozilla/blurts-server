# String IDs beginning with "-product" and "-brand" should remain in English.
# They should not be:
# - Declined to adapt to grammatical case.
# - Transliterated.
# - Translated.
-product-name = Firefox Monitor
-product-name-nowrap = <span class="nowrap">{ -product-name }</span>
-product-short-name = Monitor
-brand-name = Firefox
-brand-Mozilla = Mozilla
-brand-HIBP = Have I Been Pwned
-brand-fxa = Účet Firefox
terms-and-privacy = Podmienky a ochrana súkromia
GitHub-link-title = GitHub
error-scan-page-token = Vo veľmi krátkom čase ste sa pokúsili skontrolovať príliš mnoho e-mailových adries. Z bezpečnostných dôvodov sme vám ďalšie vyhľadávanie dočasne zablokovali. Skúste to, prosím, neskôr.
error-could-not-add-email = E-mailovú adresu sa nepodarilo pridať do databázy.
error-not-subscribed = Táto e-mailová adresa nie je prihlásená na odber zo služby { -product-name }.
error-hibp-throttled = Príliš mnoho spojení k službe { -brand-HIBP }.
error-hibp-connect = Chyba pri pripájaní k { -brand-HIBP }.
error-hibp-load-breaches = Nepodarilo sa načítať údaje o únikoch.
error-must-be-signed-in = Musíte byť prihlásení do svojho { -brand-fxa(case: "gen") }.
home-title = { -product-name }
home-not-found = Stránka nebola nájdená.
oauth-invalid-session = Neplatná relácia
scan-title = { -product-name } - výsledky skenu
user-add-invalid-email = Neplatná e-mailová adresa
user-add-email-verify-subject = Potvrďte svoje prihlásenie k odberu zo služby { -product-name }.
error-headline = Chyba
user-verify-token-error = Vyžaduje sa overovací token.
user-verify-email-report-subject = Vaša správa zo služby { -product-name }
user-unsubscribe-token-error = Pre odhlásenie je vyžadovaný token.
user-unsubscribe-token-email-error = Pre odhlásenie je vyžadovaný token a emailHash.
user-unsubscribe-title = { -product-name } - odhlásenie
pwt-section-headline = Silnejšie heslá = lepšia ochrana
landing-headline = Každý má právo byť v bezpečí pred hackermi.
scan-placeholder = Zadajte e-mailovú adresu
scan-submit = Vyhľadajte svoju e-mailovú adresu
scan-error = Zadaná e-mailová adresa nie je platná.
download-firefox-banner-button = Prevziať { -brand-name }
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
unsub-headline = Odhlásiť odber zo služby { -product-name-nowrap }
unsub-blurb = Týmto odstránite svoju e-mailovú adresu zo zoznamu služby { -product-name-nowrap } a nebudete naďalej dostávať upozornenia na novo oznámené úniky dát.
unsub-button = Odhlásiť sa
# Breach data provided by Have I Been Pwned.
hibp-attribution = Údaje o únikoch poskytuje { $hibp-link }
share-twitter = Väčšina ľudí má na internete okolo 100 účtov. Zistite, či nebol niektorý z tých vašich súčasťou úniku dát.
share-facebook-headline = Zistite, či boli vaše údaje súčasťou nejakého úniku
share-facebook-blurb = Bol niektorý z vašich účtov súčasťou nejakého úniku dát?
og-site-description = { -product-name } zistí, či boli vaše dáta súčasťou nejakého úniku. Pre väčšiu bezpečnosť sa taktiež prihláste k zasielaniu výstrah o únikoch v budúcnosti.
show-all = Zobraziť všetko
fxa-scan-another-email = Chcete skontrolovať ďalšiu e-mailovú adresu?
sign-in = Prihlásiť sa
sign-out = Odhlásiť sa
# Manage Firefox Account, link to page where account holders can change their account settings.
manage-fxa = Spravovať { -brand-fxa }
have-an-account = Už ho máte?
fxa-pwt-summary-2 =
    Krátke, jednoslovné heslá možno ľahko uhádnuť.
    Používajte aspoň dvojslovné heslá s kombináciou malých a veľkých písmen, čísel a špeciálnych znakov.
fxa-pwt-summary-4 =
    Správcovia hesiel, ako je 1Password, LastPass, Dashlane a Bitwarden vedia vaše heslá bezpečne uložiť
    a automaticky ich pre vás na webových stránkach vyplniť. Pomôžu vám as s vytvorením silného hesla.
fxa-pwt-summary-6 =
    Počet únikov dát stúpa. Kedykoľvek sa vaše údaje objavia v novom úniku,
    { -product-name } vám pošle upozornenie, aby ste mohli čo najrýchlejšie zareagovať.
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
sensitive-sites = Ako sa { -product-name } chová v prípade webov obsahujúcich citlivé údaje?
delayed-reporting-headline = Prečo nahlásenie tohto úniku trvalo tak dlho?
about-fxm-headline = O { -product-name(case: "gen") }.
# How Firefox Monitor works
how-fxm-works = Ako { -product-name } funguje
what-is-data-agg = Čo je agregátor dát?

## What to do after data breach tips


## Updated error messages

login-link = Prihlásiť sa
# Title appearing on the Preferences dashboard. 
monitor-preferences = Nastavenia { -product-short-name(case: "gen") }
# Title that appears in the mobile menu bar and opens the mobile menu when clicked.
menu = Ponuka
# Link title
learn-more-link = Ďalšie informácie
email-sent = E-mail bol odoslaný!
# Form title
want-to-add = Chcete pridať ďalšiu e-mailovú adresu?
# This is part of a confirmation message that appears after a user has submitted
# the form to add an additional email to Firefox Monitor.
verify-the-link = Pre pridanie adresy { $userEmail } do služby { -product-name }, overte odkaz zaslaný na túto adresu.
# This string is a label for the calendar date a breach is added to the database
# and is followed by that date. 
breach-added-label = Dátum pridania:
