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
# Link that takes the user to a Firefox Monitor survey. 
give-feedback = Poskytnúť spätnú väzbu
terms-and-privacy = Podmienky a ochrana súkromia
error-not-subscribed = Táto e-mailová adresa nie je prihlásená na odber zo služby { -product-name }.
error-hibp-throttled = Príliš mnoho spojení k službe { -brand-HIBP }.
error-hibp-connect = Chyba pri pripájaní k { -brand-HIBP }.
error-hibp-load-breaches = Nepodarilo sa načítať údaje o únikoch.
home-title = { -product-name }
home-not-found = Stránka nebola nájdená.
oauth-invalid-session = Neplatná relácia
user-add-invalid-email = Neplatná e-mailová adresa
user-verify-token-error = Vyžaduje sa overovací token.
user-verify-email-report-subject = Vaša správa zo služby { -product-name }

## Password Tips

pwt-section-headline = Silnejšie heslá = lepšia ochrana
pwt-headline-1 = Používajte rozdielne heslá pre každý účet
pwt-headline-2 = Vytvárajte silné a ťažko uhádnuteľné heslá
pwt-headline-3 = Považujte bezpečnostné otázky za prídavné heslá
pwt-summary-3 =
    Webové stránky nekontrolujú, či sú vaše odpovede správne, iba či sa zhodujú 
    Vytvorte si dlhé a náhodné odpovede a niekam si ich uložte.
pwt-headline-4 = Získajte pomoc pri pamätaní si vašich hesiel
pwt-summary-4 =
    Správcovia hesiel, ako je 1Password, LastPass, Dashlane a Bitwarden vedia vygenerovať silné a jedinečné heslá.
    Naviac ich vedia bezpečne uložiť a automaticky ich pre vás na webových stránkach vyplnia.
pwt-headline-5 = Využívajte dvojstupňové overenie
landing-headline = Každý má právo byť v bezpečí pred hackermi.
scan-label = Pozrite sa, či boli vaše účty súčasťou úniku dát.
scan-placeholder = Zadajte e-mailovú adresu
scan-privacy = Vašu e-mailovú adresu nebudeme nikam ukladať.
scan-submit = Vyhľadajte svoju e-mailovú adresu
scan-another-email = Vyhľadajte ďalšiu e-mailovú adresu
scan-error = Zadaná e-mailová adresa nie je platná.
download-firefox-bar-link = Prevezmite si { -brand-name }
download-firefox-banner-blurb = Prevezmite kontrolu nad svojim prehliadačom
download-firefox-banner-button = Prevziať { -brand-name }
signup-modal-headline = Prihlásenie sa k službe { -product-name-nowrap }
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
show-more-breaches = Zobraziť viac
what-to-do-subhead-1 = Zmeňte svoje heslá, aj pre staré účty
what-to-do-subhead-2 = Ak niekde používate rovnaké heslo, ako k uniknutému účtu, zmeňte ho
what-to-do-subhead-3 = Venujte špeciálnu pozornosť zabezpečeniu finančných účtov
# breach-date = the calendar date a particular data theft occurred. 
breach-date = Dátum úniku:
# compromised accounts = the total number of user accounts exposed in data breach
compromised-accounts = Počet kompromitovaných účtov:
# compromised-data = the kind of user data exposed to hackers in data breach.
compromised-data = Kompromitované údaje:
confirmed = Potvrdené!<br />Ste prihlásení na odber.
unsub-button = Odhlásiť sa
unsub-survey-headline = Už nie ste prihlásení na odber.
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
