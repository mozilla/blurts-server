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
layout-support = Podpora
# Link that takes the user to a blog post on blog.mozilla.org about the alerts
about-firefox-alerts = O upozorneniach vo Firefoxe
# Link that takes the user to a Firefox Monitor survey. 
give-feedback = Poskytnúť spätnú väzbu
terms-and-privacy = Podmienky a ochrana súkromia
error-not-subscribed = Táto e-mailová adresa nie je prihlásená na odber zo služby { -product-name }.
error-hibp-throttled = Príliš mnoho spojení k službe { -brand-HIBP }.
error-hibp-connect = Chyba pri pripájaní k { -brand-HIBP }.
error-hibp-load-breaches = Nepodarilo sa načítať údaje o únikoch.
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
    Aj ak niekto pozná vaše heslo, bez tohoto overenia prístup ku vášmu účtu nezíska.
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
sign-up = Prihlásiť sa
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
unsub-survey-headline = Už nie ste prihlásení na odber.
unsub-survey-blurb =
    Vaša e-mailová adresa bola odhlásená. Ďakujeme vám za využitie služby { -product-name-nowrap }.
    Nájdete si chvíľku pre odpoveď na jednu otázku o našej službe?
unsub-survey-form-label = Z akého dôvodu sa odhlasujete zo zasielania upozornení zo služby { -product-name-nowrap }?
unsub-reason-1 = Nemyslím si, že upozornenia pomáhajú zabezpečiť moje údaje
unsub-reason-2 = Zo služby { -product-name-nowrap } dostávam príliš veľa e-mailov
unsub-reason-3 = Nepovažujem službu za užitočnú
unsub-reason-4 = Svoje účty už chránim
unsub-reason-5 = Pre sledovanie svojich účtov používam inú službu
unsub-reason-6 = Nič z vyššie uvedeného
unsub-survey-thankyou = Ďakujeme za vašu spätnú väzbu.
unsub-survey-error = Prosím, vyberte jednu možnosť.
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
# The following string contains HTML markup which should not be translated. 
# Without HTML markup: copyright-info = Portions of this content are 1998-2018 by individual mozilla.org contributors. Content available under a Creative Commons license.
copyright-info =
    Časti tohoto obsahu sú &#x24B8; 1998-2018 individuálnymi prispievateľmi mozilla.org. <br />
    Obsah je dostupný v rámci licencie <a href="https://www.mozilla.org/foundation/licensing/website-content/" target="_blank" rel="noopener">Creative Commons</a>.
# Breach data provided by Have I Been Pwned.
hibp-attribution = Údaje o únikoch poskytuje { $hibp-link }
site-description = Boli vaše účty súčasťou úniku? { -product-name } to zistí. Prehľadajte databázu a prihláste sa na odber upozornení.
share-email = E-mail
# Appears at the end of a list of email-clients and refers to any other unlisted email-client.
share-other = Ďalšie
