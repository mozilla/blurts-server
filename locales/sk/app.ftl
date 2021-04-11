## The following messages are brand and should be kept entirely in English
## unless otherwise indicated.

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
       *[nom] Účet Firefox
        [gen] Účtu Firefox
        [dat] Účtu Firefox
        [acc] Účet Firefox
        [loc] Účte Firefox
        [ins] Účtom Firefox
    }
-brand-pocket = Pocket
-brand-lockwise = Firefox Lockwise
-brand-send = Firefox Send
-brand-fpn = Firefox Private Network
-brand-mozilla-vpn = Mozilla VPN
-brand-relay = Firefox Relay

##

# “account” can be localized, “Firefox” must be treated as a brand,
# and kept in English.
-brand-fx-account = účet Firefox
terms-and-privacy = Podmienky a ochrana súkromia
GitHub-link-title = GitHub
error-scan-page-token = Vo veľmi krátkom čase ste sa pokúsili skontrolovať príliš mnoho e-mailových adries. Z bezpečnostných dôvodov sme vám ďalšie vyhľadávanie dočasne zablokovali. Skúste to, prosím, neskôr.
error-could-not-add-email = E-mailovú adresu sa nepodarilo pridať do databázy.
error-not-subscribed = Táto e-mailová adresa nie je prihlásená na odber upozornení { -product-name(case: "gen") }.
error-hibp-throttled = Príliš mnoho pripojení k službe { -brand-HIBP }.
error-hibp-connect = Chyba pri pripájaní k { -brand-HIBP }.
error-hibp-load-breaches = Nepodarilo sa načítať údaje o únikoch.
error-must-be-signed-in = Musíte byť prihlásení do svojho { -brand-fxa(case: "gen") }.
error-to-finish-verifying = Na dokončenie overenia tejto e-mailovej adresy v službe { -product-name } musíte byť prihlásení pod svojim hlavným účtom.
home-title = { -product-name }
home-not-found = Stránka nebola nájdená.
oauth-invalid-session = Neplatná relácia
scan-title = { -product-name } - výsledky skenu
user-add-invalid-email = Neplatná e-mailová adresa
user-add-too-many-emails = Monitorujete maximálny počet e-mailových adries.
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
about-firefox-monitor = O { -product-name(case: "loc") }
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
# This survey question is periodically shown to signed-in users along the very
# top of the site. It is followed by a list of clickable buttons labeled 1-10.
micro-survey-nps-prompt = Aká je pravdepodobnosť, že na stupnici od 1 do 10 odporučíte { -product-short-name } priateľovi alebo kolegovi?
# This is a survey response to the micro-survey-nps-prompt question.
micro-survey-not-likely-response = Malá pravdepodobnosť
# This is a survey response to the micro-survey-nps-prompt question.
micro-survey-very-likely-response = Veľká pravdepodobnosť
# This survey question is periodically shown to signed-in users along the very
# top of the site. It is followed by a list of clickable buttons labeled:
# strongly-disagree, disagree, unsure, agree, strongly-agree
micro-survey-usability-prompt = Používa sa { -product-short-name } jednoducho?
# This survey question is periodically shown to signed-in users along the very
# top of the site. It is followed by a list of clickable buttons labeled:
# strongly-disagree, disagree, unsure, agree, strongly-agree
micro-survey-credibility-prompt = Máte pocit, že je produkt { -product-short-name } dôveryhodný?
# This survey question is periodically shown to signed-in users along the very
# top of the site. It is followed by a list of clickable buttons labeled:
# strongly-disagree, disagree, unsure, agree, strongly-agree
micro-survey-appearance-prompt = Pôsobí na vás { -product-short-name } čistým a jednoduchým dojmom?
# This is a survey response that follows the usability, credibility, and
# appearance prompts
micro-survey-strongly-disagree-response = Rozhodne nesúhlasím
# This is a survey response that follows the usability, credibility, and
# appearance prompts
micro-survey-disagree-response = Nesúhlasím
# This is a survey response that follows the usability, credibility, and
# appearance prompts
micro-survey-unsure-response = Neviem
# This is a survey response that follows the usability, credibility, and
# appearance prompts
micro-survey-agree-response = Súhlasím
# This is a survey response that follows the usability, credibility, and
# appearance prompts
micro-survey-strongly-agree-response = Rozhodne súhlasím
# This survey question is periodically shown to signed-in users along the very
# top of the site. It is followed by a list of clickable buttons labeled:
# very-disappointed, somewhat-disappointed, dont-care
micro-survey-pmf-prompt = Ako by ste sa cítili, ak by ste { -product-short-name } už nemohli používať?
# This is a survey response that follows the pmf prompt
micro-survey-very-disappointed-response = Veľmi sklamane
# This is a survey response that follows the pmf prompt
micro-survey-somewhat-disappointed-response = Trochu sklamane
# This is a survey response that follows the pmf prompt
micro-survey-dont-care-response = Bolo by mi to jedno
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
sensitive-sites-copy =
    { -product-name } zverejňuje tieto účty iba v prípade, že je e-mailová adresa overená. 
    Znamená to, že vy ste jediná osoba, ktorá môže zistiť, či boli vaše údaje súčasťou tohto úniku 
    (ak teda nemá do vášho počítača prístup niekto iný).
delayed-reporting-headline = Prečo nahlásenie tohto úniku trvalo tak dlho?
delayed-reporting-copy =
    Niekedy môže trvať mesiace či roky, než sa prihlasovacie údaje vyzradené v úniku 
    objavia na dark webe. Úniky sú pridávané do našej databázy hneď, akonáhle sú odhalené a potvrdené.
about-fxm-headline = O { -product-name(case: "loc") }.
about-fxm-blurb =
    { -product-name } vás upozorní, keď boli vaše účty súčasťou úniku dát. 
    Zistite, či ste boli súčasťou nejakého úniku dát, dostávajte upozornenia na nové úniky 
    a podniknite kroky na ochranu svojich účtov. { -product-name } zaisťuje organizácia { -brand-Mozilla }.
fxm-warns-you =
    { -product-name } vás upozorní, keď bola vaša e-mailová adresa vyzradená v nejakom úniku dát 
    Zistite, či boli vaše informácie súčasťou úniku dát, zistite, ako lepšie ochrániť svoje účty a 
    dostávajte upozornenia v prípade, že sa vaša e-mailová adresa objaví v novom úniku.
# How Firefox Monitor works
how-fxm-works = Ako { -product-name(case: "nom") } funguje
how-fxm-1-headline = Vykonajte základné vyhľadávanie
how-fxm-1-blurb =
    Vyhľadajte svoju e-mailovú adresu vo verejne dostupných únikoch dát 
    siahajúcich do roku 2007. Toto základné vyhľadávanie zobrazí všetky úniky 
    s výnimkou únikov citlivých údajov.
how-fxm-2-headline = Prihláste sa na monitorovanie únikov
how-fxm-2-blurb =
    Vytvorte si { -brand-fxa }, aby ste mohli monitorovať svoju e-mailovú adresu pre prípad budúcich únikov. 
    Akonáhle overíte svoju e-mailovú adresu, obdržíte taktiež kompletné hlásenie o predchádzajúcich únikoch, 
    vrátane únikov citlivých údajov.
how-fxm-3-headline = Dostávajte upozornenia vo svojom prehliadači
how-fxm-3-blurb =
    Ak používate { -brand-name }, uvidíte upozornenie vždy, keď navštívite stránku, 
    na ktorej došlo k úniku dát. Hneď tak môžete zistiť, či ste boli súčasťou tohto úniku.
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
change-pw-site = Zmeňte si na tejto stránke heslo
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
get-email-alerts = Zostaňte v bezpečí - nechajte si posielať na svoju e-mailovú adresu upozornenia vždy, keď sa vaše dáta objavia v úniku dát
search-for-your-email = Vyhľadajte svoju e-mailovú adresu vo verejne dostupných únikoch dát siahajúcich do roku 2007.
back-to-top = Návrat hore
comm-opt-0 = Poslať mi e-mail, ak sa jedna z mojich e-mailových adries objaví v nejakom úniku dát.
comm-opt-1 = Posielať všetky upozornenia na úniky na { $primaryEmail }.
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
your-info-was-discovered-blurb =
    Ste prihlásení na odber upozornení zo služby { -product-name }, 
    v prípade ak sa vaša e-mailová adresa objaví v nejakom úniku dát. Tu je všetko, čo o tomto úniku vieme.
what-to-do-after-breach = Čo robiť po úniku dát
ba-next-step-1 = Zmeňte si heslo a nové vytvorte silné a jedinečné.
ba-next-step-blurb-1 =
    Silné heslo pozostáva z kombinácie veľkých a malých písmen, 
    špeciálnych znakov a čísel. Neobsahuje osobné údaje, ako napríklad 
    adresu, dátum narodenia či priezvisko.
ba-next-step-2 = Prestaňte s používaním uniknutého hesla.
ba-next-step-blurb-2 =
    Kybernetickí zločinci môžu nájsť vaše heslo na dark webe a použiť ho 
    na prihlásenie sa do iných vašich účtov. Najlepší spôsob, ako ochrániť svoje účty 
    je používať pri každom z nich jedinečné heslo.
ba-next-step-3 = Získajte pomoc s tvorbou lepších hesiel a ich uchovávaním v bezpečí.
ba-next-step-blurb-3 = Pre vytvorenie silných a jedinečných hesiel používajte správcu hesiel. Správci hesiel bezpečne uchovávajú všetky vaše prihlasovacie údaje, takže k nim máte prístup na všetkých svojich zariadeniach.
faq1 = Túto spoločnosť alebo webovú stránku nepoznám. Prečo som súčasťou tohto úniku?
faq2 = Prečo trvalo tak dlho, než ste ma informovali o úniku?
faq3 = Ako zistím, že táto e-mailová správa pochádza naozaj zo služby { -product-name }?
new-breaches-found =
    { $breachCount ->
        [one] BOL NÁJDENÝ { $breachCount } NOVÝ ÚNIK DÁT
        [few] BOLI NÁJDENÉ { $breachCount } NOVÉ ÚNIKY DÁT
       *[other] BOLO NÁJDENÝCH { $breachCount } NOVÝCH ÚNIKOV DÁT
    }
sign-up-headline-1 = Dostávajte priebežné upozornenia pomocou { -brand-fxa(case: "gen") }.
account-not-required = Pre vytvorenie { -brand-fxa(case: "gen") } nie je nutné mať prehliadač { -brand-name }. Môžete dostávať informácie o službách { -brand-Mozilla(case: "gen") }.
was-your-info-exposed = Boli vaše údaje súčasťou úniku { $breachName }?
find-out-if = Zistite, či boli vaše údaje súčasťou nejakého úniku.
fb-not-comp = Táto e-mailová adresa sa nevyskytuje v úniku { $breachName }.
other-breaches-found =
    { $breachCount ->
        [one] Vyskytuje sa však v { $breachCount } ďalšom úniku dát.
        [few] Vyskytuje sa však v { $breachCount } ďalších únikoch dát.
       *[other] Vyskytuje sa však v { $breachCount } ďalších únikoch dát.
    }
fb-comp-only = Táto e-mailová adresa sa vyskytuje v úniku { $breachName }.
fb-comp-and-others =
    { $breachCount ->
        [one] Táto e-mailová adresa sa vyskytuje v { $breachCount } známom úniku dát, vrátane úniku { $breachName }.
        [few] Táto e-mailová adresa sa vyskytuje v { $breachCount } známych únikoch dát, vrátane úniku { $breachName }.
       *[other] Táto e-mailová adresa sa vyskytuje v { $breachCount } známych únikoch dát, vrátane úniku { $breachName }.
    }
no-other-breaches-found = Základné vyhľadávanie nenašlo žiadne ďalšie úniky.
no-results-blurb = Ľutujeme, ale tento únik sa v našej databáze nenachádza.
all-breaches-headline = Všetky úniky obsiahnuté vo { -product-name(case: "loc") }
search-breaches = Hľadať
# This string contains nested markup that is later used to style and link the text inside of it.
# Please do not modify or remove "<a>", "</a>", "<span>" and "</span>".
facebook-breach-note =
    <span>Vaša e-mailová adresa sa v tomto úniku neobjavuje,
    ale vaše telefónne číslo môže byť stále zraniteľné.</span> Niektoré z účtov
    kompromitovaných pri úniku Facebooku zahŕňali telefónne čísla a ďalšie
    osobné informácie, ale nie e-mailové adresy. Ak ste si niekedy zaregistrovali
    účet na Facebooku - aj keď ho teraz nepoužívate - odporúčame vám
    podniknúť tieto kroky na svoju ochranu
# This string contains nested markup that is later used to style and link the text inside of it.
# Please do not modify or remove "<a>", "</a>", "<span>" and "</span>".
facebook-breach-what-to-do-1-headline = <span>Vo <a>svojom profile na Facebooku</a> nastavte pri citlivých informáciách voľbu „Iba ja“ alebo na iné neverejné nastavenie.</span>
facebook-breach-what-to-do-1-copy =
    Počas tohto úniku hackeri získali informácie,
    ktoré boli nastavené ako „otvorené pre verejnosť“ alebo „zdieľané s priateľmi“.
    Tieto informácie možno kombinovať s inými údajmi, a získať tak
    ďalšie osobné údaje a účty.
facebook-breach-what-to-do-3 = Prečítajte si všetky odporúčania na našej stránke o úniku informácií z Facebooku
# "Appears in-page as: Showing: All Breaches"
currently-showing = Zobrazené:

## Updated error messages

error-bot-headline = Vyhľadávanie bolo dočasne pozastavené
error-bot-blurb =
    Obávame sa, že by ste mohli byť bot, pretože ste v krátkom čase 
    hľadali niekoľko e-mailových adries. Na teraz máte ďalšie vyhľadávanie 
    zakázané. Môžete to skúsiť opäť neskôr.
error-csrf-headline = Vypršal časový limit relácie
error-csrf-blurb = Kliknite v prehliadači na tlačidlo Späť, obnovte stránku a skúste to znova.
error-invalid-unsub = Ako zruším odber upozornení z { -product-name(case: "gen") }
error-invalid-unsub-blurb =
    Zrušiť odber budete musieť prostredníctvom jednej z e-mailových správ, 
    ktorú vám { -product-name } odoslal. Pohľadajte vo svojej schránke správu od 
    { -brand-team-email }. V dolnej časti správy kliknite na odkaz pre zrušenie odberu.
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
website-breach-blurb = Únik dát z webovej stránky sa odohrá, keď kybernetickí zločinci odcudzia, skopírujú alebo zverejnia osobné údaje z internetových účtov. Spravidla je to výsledkom činnosti hackerov, ktorí našli slabé miesto v zabezpečení webu. K úniku osobných údajov z účtov však môže dôjsť aj nedopatrením.
security-tips-headline = Bezpečnostné tipy na ochranu pred hackermi
steps-to-protect = Aké kroky podniknúť na ochranu svojej internetovej identity
take-further-steps = Podniknite ďalšie kroky na ochranu svojej internetovej identity
alert-about-new-breaches = Upozorniť ma na nové úniky
see-if-youve-been-part = Pozrite sa, či ste neboli súčasťou internetového úniku dát.
get-ongoing-breach-monitoring = Nechajte si priebežne monitorovať viacero e-mailových adries.
# This is a button and follows a headline reading "Was your info exposed in the ___ breach?"
find-out = Zistiť
new-unsub-error = Zrušiť odber budete musieť prostredníctvom jednej z e-mailových správ, ktorú vám { -product-name } poslal.
other-known-breaches-found =
    { $breachCount ->
        [one] Objavila sa však v { $breachCount } ďalšom úniku.
        [few] Objavila sa však v { $breachCount } ďalších únikoch.
       *[other] Objavila sa však v { $breachCount } ďalších únikoch.
    }
# This string appears on breach detail pages and is followed by a list
# of data classes that the breach exposed.
additional-information-including = Ďalšie informácie, menovite:
# Title
email-addresses-title = E-mailové adresy
# This is a section headline on the breach detail page that appears above
# a short summary about the breach.
breach-overview-title = Prehľad
# This is a standardized breach overview blurb that appears on all breach detail pages.
# $breachTitle is the name of the breached company or website.
# $breachDate and $addedDate are calendar dates.
breach-overview-new = Dňa { $breachDate } došlo k úniku dát { $breachTitle }. Ihneď po odhalení a potvrdení bol dňa { $addedDate } pridaný do našej databázy.
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
to-affected-email = Posielať upozornenia na únik na danú e-mailovú adresu
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

## These are part of a confirmation page that appears after a user has verified
## an additional email to Firefox Monitor.

email-verified = E-mailová adresa bola úspešne overená!
email-added-to-subscription = Ak sa e-mailová adresa { $email } objaví v nejakom úniku dát, dostanete upozornenie.
# This message is displayed after the user has verified their email address.
# { $nestedSignInLink } is replaced by a link, using sign-in-nested as text ("sign in" for English).
email-verified-view-dashboard = Pre zobrazenie a správu adries, ktoré ste prihlásili na odber informácií o únikoch dát, { $nestedSignInLink }.
# This message is used as a text for the subscribe link in email-verified-view-dashboard
sign-in-nested = sa prihláste

##

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
# This message appears after a user has successfully updated their communication settings.
changes-saved = Zmeny boli uložené!
# Section headline
rec-section-headline = Čo robiť s týmto únikom dát
rec-section-subhead = Pre ochranu vašich osobných údajov a vašej digitálnej identity odporúčame nasledujúce kroky.
# Section headline
rec-section-headline-no-pw = Čo robiť pre ochranu vašich osobných údajov
rec-section-subhead-no-pw = Napriek tomu, že súčasťou úniku neboli heslá, odporúčame urobiť nasledujúce kroky pre lepšiu ochranu vašich osobných údajov.
# Button
see-additional-recs = Pozrite sa na ďalšie odporúčania

## This string contains nested markup that becomes a link later in the code.
## Please do not modify or remove "<a>" and "</a>".

resolve-top-notification = E-mailová adresa { $affectedEmail } sa objavila v tomto úniku. <a>Čo ďalej</a>
resolve-top-notification-plural =
    { $numAffectedEmails ->
        [one] { $numAffectedEmails } vaša e-mailová adresa sa objavila v tomto úniku. <a>Čo ďalej</a>
        [few] { $numAffectedEmails } vaše e-mailové adresy sa objavili v tomto úniku. <a>Čo ďalej</a>
       *[other] { $numAffectedEmails } vašich e-mailových adries sa objavilo v tomto úniku. <a>Čo ďalej</a>
    }

##

marking-this-subhead = Kedy mám označiť únik ako vyriešený
# This string contains nested markup that is later used to style the text inside of it.
# Please do not modify or remove "<span>" and "</span>".
marking-this-body =
    <span>Ak ste urobili kroky na odstránenie následkov tohto úniku</span>,
    môžete ho označiť ako vyriešený. Podrobnosti o tomto úniku 
    si môžete kedykoľvek pozrieť z nástenky.
mark-as-resolve-button = Označiť ako vyriešené
marked-as-resolved-label = Označené ako vyriešené
undo-button = Späť
confirmation-1-subhead = Super! Práve ste vyriešili svoj prvý únik dát.
confirmation-1-body = Nepoľavujte. Vaša nástenka vám povie, či vás čaká ešte nejaká práca.
confirmation-2-subhead = Toto hackeri určite nečakali.
confirmation-2-body = Robíte dôležité kroky k ochrane svojich online účtov.
confirmation-3-subhead = Vyriešili ste ďalší únik. Skvelá práca!
# This string contains nested markup that becomes a link later in the code.
# Please do not modify or remove "<a>" and "</a>".
confirmation-3-body = Je vaše nové heslo jedinečné, silné a ťažko uhádnuteľné? <a>Zistite to</a>
generic-confirmation-subhead = Tento únik dát bol označený ako vyriešený
generic-confirmation-message =
    { $numUnresolvedBreaches ->
        [one] Zostávajúci únik nájdete na nástenke.
        [few] Zostávajúce úniky nájdete na nástenke.
       *[other] Zostávajúce úniky nájdete na nástenke.
    }
return-to-breach-details-link = Späť na podrobnosti o úniku
go-to-dashboard-link = Prejsť na nástenku
# This string appears above a breach resolution progress bar and indicates
# the percentage of breaches a user has resolved. For instance, "27% complete".
progress-percent-complete = Hotovo na { $percentComplete } %
# This string appears in the purple callouts at the top of the user dashboard and shows
# the total number of breaches a user has resolved. For instance, "5 Resolved".
num-resolved =
    { $numResolvedBreaches ->
        [one] { $numResolvedBreaches } vyriešený únik
        [few] { $numResolvedBreaches } vyriešené úniky
       *[other] { $numResolvedBreaches } vyriešených únikov
    }
progress-intro-subhead = Novinka vo { -product-name(case: "loc") }: označovanie únikov ako vyriešené
progress-intro-message =
    Po preskúmaní podrobností o úniku a prijatí opatrení na ochranu 
    vašich osobných údajov môžete označiť úniky ako vyriešené.
progress-status =
    { $numTotalBreaches ->
        [one] Počet únikov označených ako vyriešené: { $numResolvedBreaches } z { $numTotalBreaches }
        [few] Počet únikov označených ako vyriešené: { $numResolvedBreaches } z { $numTotalBreaches }
       *[other] Počet únikov označených ako vyriešené: { $numResolvedBreaches } z { $numTotalBreaches }
    }
progress-complete = Všetky známe úniky boli označené ako vyriešené

## These strings contain nested markup that is later used to style the text inside of it.
## Please do not modify or remove "<span>" and "</span>".

progress-message-1 = <span>Toto je vynikajúci začiatok!</span> Skontrolujte aj ostatné úniky dát.
progress-message-2 = <span>Len do toho!</span> Malé zmeny, ako napríklad zmena hesla majú veľký vplyv na bezpečnosť vašich údajov.
progress-message-3 = <span>Pekná práca s tými únikmi!</span> Ešte vám ich však pár zostáva.
progress-message-4 = <span>Už máte takmer hotovo!</span> Od cieľovej rovinky ste naozaj blízko.
progress-complete-message =
    <span>Je to dobrý pocit, však?</span> Ak stále nemáte dosť, 
    môžete si zmeniť heslá aj v ostatných účtoch.

##

resolve-this-breach-link = Vyriešiť tento únik
# This string appears in resolved breach cards and is followed by 
# the date the user marked the breach as resolved.
marked-resolved = Označený ako vyriešený:
hide-resolved-button = Skryť vyriešené
show-resolved-button = Zobraziť vyriešené
unresolved-passwords-exposed =
    { $numPasswords ->
        [one] heslo uniklo v nevyriešených únikoch dát
        [few] heslá unikli v nevyriešených únikoch dát
       *[other] hesiel uniklo v nevyriešených únikoch dát
    }
known-data-breaches-resolved =
    { $numResolvedBreaches ->
        [one] známy únik dát označený ako vyriešený
        [few] známe úniky dát označené ako vyriešené
       *[other] známych únikov dát označených ako vyriešených
    }
# A status indicator that appears in the top right corner of new breach cards
new-breach = Nový
mobile-promo-headline = { -brand-name } na vašom telefóne a tablete
mobile-promo-body = Rýchle, súkromné a bezpečné prehliadanie. Nájdite { -brand-name } v Obchode Play a v App Store.
mobile-promo-cta = Prevziať { -brand-name } na Androide a iOS
promo-lockwise-headline = Vezmite si svoje heslá so sebou
lockwise-promo-body = Majte prehľad o svojich prihlasovacích údajoch. Môžete ich upravovať z počítača, telefónu či tabletu.
promo-lockwise-cta = Prevziať { -brand-lockwise }
fpn-promo-headline = Skryte svoju polohu pred webovými stránkami a sledovacími prvkami
promo-fpn-body = { -brand-fpn } maskuje vašu skutočnú ID adresu a bráni webovým stránkam vo vašom profilovaní kvôli lepšiemu cieleniu reklamy.
promo-fpn-cta = Prevziať { -brand-fpn }
monitor-promo-headline = Buďte informovaní o nových únikoch dát
monitor-promo-body = Pošleme vám upozornenie vždy, keď sa vaše údaje objavia v známom úniku dát.
ecosystem-promo-headline = Celý rad produktov zameraných na súkromie
ecosystem-promo-body = Všetky produkty s označením { -brand-name } vychádzajú zo zásady, že menej dát je niekedy viac. Vaše dáta udržiavame v bezpečí a nemáme pred vami žiadne tajomstvá.
promo-ecosystem-cta = Zobraziť všetky produkty
steps-to-resolve-headline = Kroky vedúce k vyriešeniu tohto úniku
vpn-promo-headline = Teraz je ten správny čas na zvýšenie vašej bezpečnosti online.
vpn-promo-copy = Virtuálna súkromná sieť spoločnosti { -brand-Mozilla } pomáha chrániť vaše internetové pripojenie pred hackermi a špiónmi.
vpn-promo-cta = Vyskúšajte { -brand-mozilla-vpn }
