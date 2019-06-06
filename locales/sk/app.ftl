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
-brand-fxa = Účet Firefox
-brand-Chrome = Chrome
layout-Firefox = { -brand-name }
# Descriptive headline for a column of links where users can give feedback, or get additional information about, Firefox Monitor.
layout-support = Podpora
# Link that takes the user to a blog post on blog.mozilla.org about the alerts
about-firefox-alerts = O upozorneniach vo Firefoxe
# Link that takes the user to a Firefox Monitor survey. 
give-feedback = Poskytnúť spätnú väzbu
terms-and-privacy = Podmienky a ochrana súkromia
error-scan-page-token = Vo veľmi krátkom čase ste sa pokúsili skontrolovať príliš mnoho e-mailových adries. Z bezpečnostných dôvodov sme vám ďalšie vyhľadávanie dočasne zablokovali. Skúste to, prosím, neskôr.
error-could-not-add-email = E-mailovú adresu sa nepodarilo pridať do databázy.
error-not-subscribed = Táto e-mailová adresa nie je prihlásená na odber zo služby { -product-name }.
error-hibp-throttled = Príliš mnoho spojení k službe { -brand-HIBP }.
error-hibp-connect = Chyba pri pripájaní k { -brand-HIBP }.
error-hibp-load-breaches = Nepodarilo sa načítať údaje o únikoch.
error-must-be-signed-in = Musíte byť prihlásení do svojho { -brand-fxa(case: "gen") }.
hibp-notify-email-subject = { -product-name } - upozornenie, váš účet bol súčasťou úniku dát.
home-title = { -product-name }
home-not-found = Stránka nebola nájdená.
oauth-invalid-session = Neplatná relácia
oauth-confirmed-title = { -product-name } - prihlásenie na odber
scan-title = { -product-name } - výsledky skenu
user-add-invalid-email = Neplatná e-mailová adresa
user-add-email-verify-subject = Potvrďte svoje prihlásenie k odberu zo služby { -product-name }.
user-add-title = { -product-name } - potvrdzovací e-mail
error-headline = Chyba
user-verify-token-error = Vyžaduje sa overovací token.
user-verify-email-report-subject = Vaša správa zo služby { -product-name }
user-verify-title = { -product-name } - prihlásenie je dokončené
user-unsubscribe-token-error = Pre odhlásenie je vyžadovaný token.
user-unsubscribe-token-email-error = Pre odhlásenie je vyžadovaný token a emailHash.
user-unsubscribe-title = { -product-name } - odhlásenie
user-unsubscribe-survey-title = { -product-name } - dotazník k odhláseniu
user-unsubscribed-title = { -product-name } - odhlásenie je dokončené

## Password Tips

pwt-section-headline = Silnejšie heslá = lepšia ochrana
pwt-section-subhead = Vaše osobné údaje sú len tak v bezpečí, ako sú bezpečné vaše heslá.
pwt-section-blurb =
    Vaše heslá chránia viac než len samotné prihlásenie k účtu. Chránia všetky vaše dáta, ktoré sú ich prostredníctvom dostupné. 
    Hackeri sa spoliehajú na zlozvyky, ako je napríklad používanie rovnakého hesla na viacerých miestach alebo používanie ľahko uhádnuteľného hesla (h3slo). 
    Takže ak sa im podarí prelomiť jeden váš účet, dokážu sa veľmi rýchlo dostať aj k ostatným. Tu je pár tipov, ako sa môžete ochrániť.
pwt-headline-1 = Používajte rozdielne heslá pre každý účet
pwt-summary-1 =
    Používanie rovnakého hesla pre všetky vaše účty necháva otvorené dvere pre krádež vašej identity. 
    Ktokoľvek, kto pozná vaše heslo sa môže dostať do všetkých vašich účtov.
pwt-headline-2 = Vytvárajte silné a ťažko uhádnuteľné heslá
pwt-summary-2 =
    Hackeri používajú zoznam bežne používaných hesiel, aby sa pokúsili uhádnuť to vaše. 
    Čím je vaše heslo dlhšie a náhodnejšie, tým ťažšie ho bude možné uhádnuť.
pwt-headline-3 = Považujte bezpečnostné otázky za prídavné heslá
pwt-summary-3 =
    Webové stránky nekontrolujú, či sú vaše odpovede správne, iba či sa zhodujú 
    Vytvorte si dlhé a náhodné odpovede a niekam si ich uložte.
pwt-headline-4 = Získajte pomoc pri pamätaní si vašich hesiel
pwt-summary-4 =
    Správcovia hesiel, ako je 1Password, LastPass, Dashlane a Bitwarden vedia vygenerovať silné a jedinečné heslá.
    Naviac ich vedia bezpečne uložiť a automaticky ich pre vás na webových stránkach vyplnia.
pwt-headline-5 = Využívajte dvojstupňové overenie
pwt-summary-5 =
    Dvojstupňové overenie vyžaduje pre úspešné prihlásenie zadať nejakú dodatočnú informáciu (napríklad jednorázový kód poslaný cez SMS).
    Aj ak niekto pozná vaše heslo, bez tohto overenia prístup ku vášmu účtu nezíska.
pwt-headline-6 = Prihláste sa na odber upozornení zo služby { -product-name-nowrap }
pwt-summary-6 =
    Počet únikov dát z webových stránok stúpa. Kedykoľvek je nový únik pridaný do našej databázy,
    { -product-name-nowrap } vám pošle upozornenie, aby ste mohli čo najrýchlejšie zareagovať a ochrániť svoj účet.
landing-headline = Každý má právo byť v bezpečí pred hackermi.
landing-blurb =
    { -product-name-nowrap } je vašou zbraňou v boji za ochranu vašich osobných údajov. 
    Zistite, čo o vás hackeri už vedia, a ako zostať krok pred nimi.
scan-label = Pozrite sa, či boli vaše účty súčasťou úniku dát.
scan-placeholder = Zadajte e-mailovú adresu
scan-privacy = Vašu e-mailovú adresu nebudeme nikam ukladať.
scan-submit = Vyhľadajte svoju e-mailovú adresu
scan-another-email = Vyhľadajte ďalšiu e-mailovú adresu
scan-featuredbreach-label = Zistite, či bol váš účet z <span class="bold"> { $featuredBreach } </span>  kompromitovaný.
sensitive-breach-email-required = Únik obsahuje citlivé informácie. Overte svoju e-mailovú adresu.
scan-error = Zadaná e-mailová adresa nie je platná.
signup-banner-headline = { -product-name-nowrap } zisťuje hrozby pre vaše internetové účty.
signup-banner-blurb =
    Podrobná správa zo služby { -product-name-nowrap } vám ukáže, či boli vaše účty na internete súčasťou nejakého úniku alebo krádeže. 
    Taktiež vás upozorníme, keď sa váš účet objaví ako súčasť novo zisteného úniku dát.
download-firefox-bar-blurb = Službu { -product-name-nowrap } vám prináša <span class="nowrap">{ -brand-name }</span>.
download-firefox-bar-link = Prevezmite si { -brand-name }
download-firefox-banner-blurb = Prevezmite kontrolu nad svojim prehliadačom
download-firefox-banner-button = Prevziať { -brand-name }
signup-modal-headline = Prihlásenie sa k službe { -product-name-nowrap }
signup-modal-blurb = Prihláste sa na zaslanie kompletnej správy, na odber upozornení na nové úniky a zistite dobré tipy na ochranu dát od služby { -product-name-nowrap }.
signup-modal-close = Zavrieť
get-your-report = Získajte správu o svojom účte
signup-modal-verify-headline = Potvrďte svoje prihlásenie na odber
signup-modal-verify-blurb = Poslali sme potvrdzovací odkaz na <span id="submitted-email" class="medium"></span>.
signup-modal-verify-expiration = Platnosť tohto odkazu uplynie o 24 hodín.
signup-modal-verify-resend = Nenašli ste e-mail v schránke ani v spame? Poslať znova.
# Appears after Firefox Monitor has sent a verification email to a new user. 
signup-modal-sent = Odoslané!
signup-with-fxa = Prihláste sa pomocou účtu { -brand-name }
form-signup-placeholder = Zadajte e-mailovú adresu
form-signup-checkbox = Nechajte si posielať najnovšie informácie o organizácii { -brand-Mozilla } a o aplikácii { -brand-name }.
sign-up = Zaregistrujte sa
form-signup-error = Zadaná e-mailová adresa nie je platná.
no-breaches-headline = Zatiaľ je všetko v poriadku.
found-breaches-headline = Vaše informácie boli súčasťou úniku dát.
no-breaches =
    Základný sken vašu e-mailovú adresu nenašiel.
    To je dobrá správa, no k úniku dát môže dôjsť kedykoľvek a stále je priestor na zlepšenie. 
    Prihláste sa na odber správ zo služby { -product-name-nowrap } pre kompletnú správu, upozornenia na nové úniky a tipy pre ochranu vašich hesiel.
featured-breach-results =
    { $breachCount ->
        [0] Váš účet bol nájdený s úniku dát <span class="bold">{ $featuredBreach }</span>, no neobjavuje sa v žiadnom ďalšom.
        [one] Váš účet bol nájdený s úniku dát <span class="bold">{ $featuredBreach }</span> a ešte v jednom.
        [few] Váš účet bol nájdený s úniku dát <span class="bold">{ $featuredBreach }</span> a ešte v { $breachCount } ďalších.
       *[other] Váš účet bol nájdený s úniku dát <span class="bold">{ $featuredBreach }</span> a ešte v { $breachCount } ďalších.
    }
featured-breach-not-compromised =
    { $breachCount ->
        [0] { no-breaches }
        [one] Váš účet sa neobjavil v úniku dát <span class="bold">{ $featuredBreach }</span>, no bol nájdený v inom.
        [few] Váš účet sa neobjavil v úniku dát <span class="bold">{ $featuredBreach }</span>, no bol nájdený v { $breachCount } ďalších.
       *[other] Váš účet sa neobjavil v úniku dát <span class="bold">{ $featuredBreach }</span>, no bol nájdený v { $breachCount } ďalších.
    }
scan-results =
    { $breachCount ->
        [0] { no-breaches }
        [one] Váš účet bol objavený v { $breachCount } úniku.
        [few] Účty s vašou e-mailovou adresou boli nájdené v { $breachCount } únikoch.
       *[other] Účty s vašou e-mailovou adresou boli nájdené v { $breachCount } únikoch.
    }
show-more-breaches = Zobraziť viac
what-to-do-headline = Čo urobiť, keď sú vaše údaje súčasťou nejakého úniku
what-to-do-subhead-1 = Zmeňte svoje heslá, aj pre staré účty
what-to-do-blurb-1 =
    Ak sa nemôžete prihlásiť, kontaktujte správcu webovej stránky a spýtajte sa, ako môžete obnoviť prístup k svojmu účtu alebo účet odstrániť. 
    Vidíte účet, o ktorom vôbec neviete? Stránka mohla zmeniť svoj názov alebo účet vytvoril niekto za vás.
what-to-do-subhead-2 = Ak niekde používate rovnaké heslo, ako k uniknutému účtu, zmeňte ho
what-to-do-blurb-2 =
    Hackeri môžu použiť získané heslá a dostať sa s nimi do vašich ďalších účtov. 
    Používajte pre každú webovú stránku  iné heslo, hlavne pokiaľ ide o internetové bankovníctvo, 
    e-mailovú schránku alebo ďalšie stránky, kde ukladáte svoje osobné údaje.
what-to-do-subhead-3 = Venujte špeciálnu pozornosť zabezpečeniu finančných účtov
what-to-do-blurb-3 =
    Väčšina únikov obsahuje vašu e-mailovú adresu a heslá, ale môžu v nich byť taktiež citlivé finančné informácie. 
    Ak bolo súčasťou úniku číslo vášho účtu alebo karty, informujte svoju banku a sledujte, či nedochádza k neočakávaným zmenám stavu na vašom účte.
what-to-do-subhead-4 = Nechajte si pomôcť s vytváraním dobrých hesiel a ich bezpečným uložením.
what-to-do-blurb-4 =
    Správcovia hesiel, ako je 1Password, LastPass, Dashlane a Bitwarden vedia vygenerovať silné a jedinečné heslá, 
    bezpečne ich uložiť a automaticky ich pre vás na webových stránkach vyplniť.
# breach-date = the calendar date a particular data theft occurred. 
breach-date = Dátum úniku:
# compromised accounts = the total number of user accounts exposed in data breach
compromised-accounts = Počet kompromitovaných účtov:
# compromised-data = the kind of user data exposed to hackers in data breach.
compromised-data = Kompromitované údaje:
confirmed = Potvrdené!<br />Ste prihlásení na odber.
confirmed-blurb = { -product-name-nowrap } vám o chvíľu pošle e-mail s kompletnou správou a taktiež vám bude posielať upozornenia, kedykoľvek sa váš účet objaví v nejakom novo nahlásenom úniku.
confirmed-social-blurb = Ak unikli vaše údaje, je veľká šanca, že sa to stalo aj členom vašej rodiny či vašim priateľom. Povedzte im o službe { -product-name-nowrap }.
unsub-headline = Odhlásiť odber zo služby { -product-name-nowrap }
unsub-blurb = Týmto odstránite svoju e-mailovú adresu zo zoznamu služby { -product-name-nowrap } a nebudete naďalej dostávať upozornenia na novo oznámené úniky dát.
unsub-button = Odhlásiť sa
fxa-unsub-headline = Zrušiť odosielanie upozornení zo služby { -product-name }.
fxa-unsub-blurb =
    Už nebudete dostávať upozornenia zo služby { -product-name }. 
    Váš { -brand-fxa } zostane aktívny a môžete aj naďalej dostávať 
    informácie, súvisiace s ním.
unsub-survey-form-label = Z akého dôvodu sa odhlasujete zo zasielania upozornení zo služby { -product-name-nowrap }?
unsub-reason-1 = Nemyslím si, že upozornenia pomáhajú zabezpečiť moje údaje
unsub-reason-2 = Zo služby { -product-name-nowrap } dostávam príliš veľa e-mailov
unsub-reason-3 = Nepovažujem službu za užitočnú
unsub-reason-4 = Svoje účty už chránim
unsub-reason-5 = Pre sledovanie svojich účtov používam inú službu
unsub-reason-6 = Nič z vyššie uvedeného
unsub-survey-thankyou = Ďakujeme za vašu spätnú väzbu.
unsub-survey-error = Prosím, vyberte jednu možnosť.
unsub-survey-headline-v2 = Boli ste odhlásení.
unsub-survey-blurb-v2 =
    Už nebudete dostávať upozornenia zo služby { -product-name }. 
    Nájdete si chvíľu na otázku o vašej skúsenosti s našou službou?
unsub-survey-button = Odoslať odpoveď
# Link to share Firefox Monitor on Facebook. Positioned next to Facebook logo.
share = Zdieľať
# Link to share Firefox Monitor on Twitter. Positioned next to Twitter logo.
tweet = Tweetovať
download-firefox-quantum = Prevziať { -brand-Quantum }
download-firefox-mobile = Prevziať { -brand-name } pre mobil
# Features here refers to Firefox browser features. 
features = Funkcie
# beta-nightly-developer-edition refers to additional versions of Firefox Browser
beta-nightly-developer-edition = Beta, Nightly, Developer Edition
# Breach data provided by Have I Been Pwned.
hibp-attribution = Údaje o únikoch poskytuje { $hibp-link }
site-description = Boli vaše účty súčasťou úniku? { -product-name } to zistí. Prehľadajte databázu a prihláste sa na odber upozornení.
confirmation-headline = Vaša správa zo služby { -product-name } už je na ceste.
confirmation-blurb = Únik dát môže postihnúť kohokoľvek. Povedzte svojim priateľom a rodine, aby si skontrolovali svoje účty.
share-email = E-mail
# Appears at the end of a list of email-clients and refers to any other unlisted email-client.
share-other = Ďalšie
share-twitter = Väčšina ľudí má na internete okolo 100 účtov. Zistite, či nebol niektorý z tých vašich súčasťou úniku dát.
share-facebook-headline = Zistite, či boli vaše údaje súčasťou nejakého úniku
share-facebook-blurb = Bol niektorý z vašich účtov súčasťou nejakého úniku dát?
og-site-description = { -product-name } zistí, či boli vaše dáta súčasťou nejakého úniku. Pre väčšiu bezpečnosť sa taktiež prihláste k zasielaniu výstrah o únikoch v budúcnosti.
mozilla-security-blog = Bezpečnostný blog organizácie { -brand-Mozilla }
# A header for a list of links to share Firefox Monitor on various social media platforms.
layout-social = Sociálne siete
show-all = Zobraziť všetko
fxa-landing-blurb = Zistite, čo o vás hackeri už vedia a zostaňte o krok pred nimi.
fxa-scan-label = Pozrite sa, či bol váš e-mail súčasťou nejakého úniku.
fxa-welcome-headline = Víta vás { -product-name }.
fxa-welcome-blurb = Všetko je nastavené, a ak sa { $userEmail } objaví v nejakom úniku, dostanete upozornenie.
fxa-scan-another-email = Chcete skontrolovať ďalšiu e-mailovú adresu?
# Search Firefox Monitor
fxa-scan-submit = Hľadať v službe { -product-name }
sign-up-to-check = Pre kontrolu sa zaregistrujte
sign-in = Prihláste sa
sign-out = Odhlásiť sa
full-report-headline = Vaša správa zo služby { -product-name }
see-full-report = Zobraziť kompletnú správu
# Manage Firefox Account, link to page where account holders can change their account settings.
manage-fxa = Spravovať { -brand-fxa }
fxa-download-firefox-bar-blurb = Službu zaisťuje { -brand-name }. 2x rýchlejší. Používa o 30 % menej pamäte než { -brand-Chrome }.
fxa-download-firefox-bar-link = Prevziať
fxa-download-firefox-banner-blurb = Lepšie a rýchlejšie načítavanie stránok, ktoré zaberá menej pamäte počítača.
user-fb-compromised-headline = E-mailová adresa { $userEmail } bola súčasťou úniku dát - { $breachName }.
guest-fb-compromised-headline = Táto e-mailová adresa bola súčasťou úniku dát - { $breachName }.
user-zero-breaches-headline = E-mailová adresa { $userEmail } nebola súčasťou žiadneho úniku dát.
guest-zero-breaches-headline = Táto e-mailová adresa nebola súčasťou žiadneho úniku dát.
user-scan-results-headline =
    { $breachCount ->
        [one] E-mailová adresa { $userEmail } bola súčasťou 1 úniku dát.
        [few] E-mailová adresa { $userEmail } bola súčasťou { $breachCount } únikov dát.
       *[other] E-mailová adresa { $userEmail } bola súčasťou { $breachCount } únikov dát.
    }
guest-scan-results-headline =
    { $breachCount ->
        [one] Táto e-mailová adresa bola súčasťou 1 úniku dát.
        [few] Táto e-mailová adresa bola súčasťou { $breachCount } únikov dát.
       *[other] Táto e-mailová adresa bola súčasťou { $breachCount } únikov dát.
    }
user-no-breaches-blurb = Ak sa táto e-mailová adresa objaví v nejakom úniku dát, dostanete upozornenie.
guest-no-breaches-blurb =
    Ak chcete zistiť, či bola táto e-mailová adresa súčasťou nejakého úniku dát, vytvorte si, prosím, { -brand-fxa }.
    Ak sa vaša e-mailová adresa objaví v nejakom úniku dát v budúcnosti, upozorníme vás na to.
user-one-breach-blurb = Tento únik obsahoval nasledujúce údaje.
user-fb-compromised-blurb =
    { $breachCount ->
        [one] Vaša e-mailová adresa bola taktiež súčasťou { $breachCount } ďalšieho úniku.
        [few] Vaša e-mailová adresa bola taktiež súčasťou { $breachCount } ďalších únikov.
       *[other] Vaša e-mailová adresa bola taktiež súčasťou { $breachCount } ďalších únikov.
    }
user-generic-fb-compromised-blurb =
    { $breachCount ->
        [one] Táto e-mailová adresa bola taktiež súčasťou { $breachCount } ďalšieho úniku.
        [few] Táto e-mailová adresa bola taktiež súčasťou { $breachCount } ďalších únikov.
       *[other] Táto e-mailová adresa bola taktiež súčasťou { $breachCount } ďalších únikov.
    }
user-fb-compromised-single =
    Tento únik obsahoval nasledujúce údaje. Odporúčame vám 
    zmeniť si svoje heslo.
user-generic-fb-compromised-single = Tento únik obsahoval nasledujúce údaje.
guest-fb-compromised-single-v2 =
    Tento únik obsahoval nasledujúce osobné údaje.
    Vytvorte si bezplatný { -brand-fxa } a získajte kompletnú správu o predchádzajúcich únikoch.
    Dostanete taktiež informácie o nových únikoch a informácie o ďalších službách organizácie { -brand-Mozilla }.
guest-fb-compromised-blurb-v2 =
    { $breachCount ->
        [one] Táto e-mailová adresa bola taktiež súčasťou { $breachCount } ďalšieho úniku. Vytvorte si bezplatný { -brand-fxa } a dostanete kompletnú správu o predošlých únikoch dát. Dostanete taktiež informácie o nových únikoch a ďalších službách organizácie { -brand-Mozilla }.
        [few] Táto e-mailová adresa bola taktiež súčasťou { $breachCount } ďalších únikov. Vytvorte si bezplatný { -brand-fxa } a dostanete kompletnú správu o predošlých únikoch dát. Dostanete taktiež informácie o nových únikoch a ďalších službách organizácie { -brand-Mozilla }.
       *[other] Táto e-mailová adresa bola taktiež súčasťou { $breachCount } ďalších únikov. Vytvorte si bezplatný { -brand-fxa } a dostanete kompletnú správu o predošlých únikoch dát. Dostanete taktiež informácie o nových únikoch a ďalších službách organizácie { -brand-Mozilla }.
    }
user-fb-not-compromised-blurb =
    { $breachCount ->
        [one] Vaša e-mailová adresa nebola súčasťou úniku dát { $breachName }, no našli sme ju v inom.
        [few] Vaša e-mailová adresa nebola súčasťou úniku dát { $breachName }, no našli sme ju v iných.
       *[other] Vaša e-mailová adresa nebola súčasťou úniku dát { $breachName }, no našli sme ju v iných.
    }
user-generic-fb-not-compromised-blurb =
    { $breachCount ->
        [one] Táto e-mailová adresa nebola súčasťou úniku dát { $breachName }, no našli sme ju v inom.
        [few] Táto e-mailová adresa nebola súčasťou úniku dát { $breachName }, no našli sme ju v iných.
       *[other] Táto e-mailová adresa nebola súčasťou úniku dát { $breachName }, no našli sme ju v iných.
    }
guest-fb-not-compromised-blurb-v2 =
    { $breachCount ->
        [one] Táto e-mailová adresa nebola súčasťou úniku dát - { $breachName }, no našli sme ju v inom. Vytvorte si bezplatný { -brand-fxa } a dostanete kompletnú správu o predošlých únikoch dát. Dostanete taktiež informácie o nových únikoch a ďalších službách organizácie { -brand-Mozilla }.
        [few] Táto e-mailová adresa nebola súčasťou úniku dát - { $breachName }, no našli sme ju v iných. Vytvorte si bezplatný { -brand-fxa } a dostanete kompletnú správu o predošlých únikoch dát. Dostanete taktiež informácie o nových únikoch a ďalších službách organizácie { -brand-Mozilla }.
       *[other] Táto e-mailová adresa nebola súčasťou úniku dát - { $breachName }, no našli sme ju v iných. Vytvorte si bezplatný { -brand-fxa } a dostanete kompletnú správu o predošlých únikoch dát. Dostanete taktiež informácie o nových únikoch a ďalších službách organizácie { -brand-Mozilla }.
    }
# While English doesn’t use the actual number of breaches in this sentence,
# you can use {$breachCount} to display the number of breaches in your localization.
user-found-breaches-blurb =
    { $breachCount ->
        [one] Tento únik obsahoval nasledujúce údaje. Odporúčame vám zmeniť si svoje heslo.
        [few] Tieto úniky obsahovali nasledujúce údaje. Odporúčame vám zmeniť si svoje heslo.
       *[other] Tieto úniky obsahovali nasledujúce údaje. Odporúčame vám zmeniť si svoje heslo.
    }
# While English doesn’t use the actual number of breaches in this sentence,
# you can use {$breachCount} to display the number of breaches in your localization.
user-generic-found-breaches-blurb =
    { $breachCount ->
        [one] Tento únik obsahoval nasledujúce údaje.
        [few] Tieto úniky obsahovali nasledujúce údaje.
       *[other] Tieto úniky obsahovali nasledujúce údaje.
    }
have-an-account = Už ho máte?
signup-banner-sensitive-blurb =
    Zistite, čo o vás hackeri vedia a zostaňte krok pred nimi. 
    Nechajte si posielať upozornenia, ak sa váš účet objaví v novom úniku.
fxa-pwt-section-blurb =
    Heslá chránia všetky osobné údaje vo vašich online účtoch.
    Hackeri sa spoliehajú na zlé zvyky, ako je napríklad používanie rovnakého hesla
    na viacerých miestach alebo používanie príliš jednoduchého hesla (h3slo). Takže 
    ak sa im podarí prelomiť jeden váš účet, dostanú sa veľmi rýchlo aj k tým ostatným.
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
fb-landing-headline = Boli vaše údaje súčasťou úniku dát - { $breachName }?
copyright = Časť tohto obsahu bola v rokoch © 1999 - { $year } vytvorená individuálnymi prispievateľmi mozilla.org.
content-available = Obsah je dostupný v rámci licencie Creative Commons.
# Alerts is a noun
sign-up-for-alerts = Prihláste sa na odber upozornení
sign-up-for-fxa-alerts = Prihláste sa na odber upozornení zo služby { -product-name }.
create-free-account =
    Vytvorte si bezplatný { -brand-fxa } a dostanete kompletnú správu o predošlých únikoch dát.
    Dostanete taktiež informácie o nových únikoch a ďalších službách organizácie { -brand-Mozilla }.
get-your-report-and-sign-up = Získajte správu a prihláste sa na odber upozornení.
# Link title
frequently-asked-questions = Často kladené otázky
about-firefox-monitor = O { -product-name(case: "gen") }
mozilla-dot-org = Mozilla.org
preferences = Možnosti
# Link title.
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
breach-added = Dátum nahlásenia:
breach-discovered = Dátum odhalenia:
# Link title
more-about-this-breach = Ďalšie informácie o tomto úniku
take-control = Získajte opäť kontrolu nad svojimi osobnými údajmi.
cant-stop-hackers = Nemôžete zabrániť hackerom v hackovaní. No môžete sa vyvarovať zlých zvykov a sťažiť im prácu.
read-more-tips = Ďalšie bezpečnostné tipy
how-hackers-work = Porozumejte tomu, ako hackeri pracujú
stay-alert = Buďte informovaní o nových únikoch
monitor-several-emails = Monitorujte niekoľko e-mailových adries
take-action = Podniknite kroky na ochranu svojich účtov

## What to do after data breach tips


## Updated error messages

login-link-pre = Už ho máte?
login-link = Prihláste sa
# Link title
learn-more-link = Ďalšie informácie
