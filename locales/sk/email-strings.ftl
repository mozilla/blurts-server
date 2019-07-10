# Firefox Monitor is a product name and should not be translated.
-product-name = Firefox Monitor
# Firefox is a brand name and should not be translated.
-brand-name = Firefox
click-to-verify =
    Potvrďte svoje prihlásenie ku službe Firefox Monitor do 24 hodín od odoslania tohto e-mailu. 
    Správu o vašich účtoch vám pošleme čo najskôr.
verify-my-email = Overiť e-mailovú adresu
report-scan-another-email = Vyhľadajte ďalšiu e-mailovú adresu v službe { -product-name }
automated-message = Toto je automaticky generovaná správa. Ak ste si ju nevyžiadali, môžete ju ignorovať.
# Without HTML markup reads: We sent this message to [user’s email address] because the email address opted into alerts from Firefox Monitor.
we-sent-this-alert = Túto správu sme poslali na adresu { $userEmail }, pretože ste ju vy alebo niekto iný prihlásili na odber upozornení zo služby { -product-name }.
unsubscribe-email-link = Ak už nechcete dostávať upozornenia zo služby { -product-name }, odhláste sa.
# A Firefox Monitor Report is an emailed statement from Firefox Monitor containing a list of known data breaches where the user’s email address was found amongst the stolen data.
firefox-monitor-report = Správa zo služby { -product-name }
report-date = Dátum nahlásenia:
email-address = E-mailová adresa:
# A list of next steps someone should take if their information has been involved in a data breach.
what-to-do-next = Čo ďalej
report-headline =
    { $breachCount ->
        [0] Zatiaľ je všetko v poriadku.
        [one] Váš účet bol nájdený v { $breachCount } úniku dát.
        [few] Váš účet bol nájdený v { $breachCount } únikoch dát.
       *[other] Váš účet bol nájdený v { $breachCount } únikoch dát.
    }
report-subhead-no-breaches =
    Váš účet nie je súčasťou našej databázy únikov dát. 
    To je dobrá správa, no stále je čo zlepšovať. 
    K ďalšiemu úniku dát môže dôjsť kedykoľvek. Prečítajte si, ako môžete ochrániť svoje heslá.
report-subhead-found-breaches = Tu je kompletná správa zo služby Firefox Monitor, ktorá obsahuje všetky známe úniky dát s touto e-mailovou adresou.
report-pwt-blurb =
    Heslá sú veľmi cenné a preto sú ich denne odcudzené tisíce. Tie sú následne vymieňané alebo predávané na čiernom trhu.
    Silnejšie heslá lepšie chránia vaše účty a osobné údaje, ktoré v nich máte uložené.
report-pwt-headline-1 = Používajte rozdielne heslá pre každý účet
report-pwt-summary-1 =
    Používaním rovnakého hesla nechávate hackerom otvorené dvere. 
    Aj oni môžu použiť rovnaké heslo pre prihlásenie ku všetkým vašim účtom.
report-pwt-headline-2 = Vytvárajte si silné a unikátne heslá
report-pwt-summary-2 =
    Hackeri používajú zoznam bežne používaných hesiel, aby sa pokúsili uhádnuť to vaše. 
    Čím je vaše heslo dlhšie a náhodnejšie, tým ťažšie ho bude možné uhádnuť.
report-pwt-headline-3 = Považujte bezpečnostné otázky za prídavné heslá
report-pwt-summary-3 =
    Webové stránky nekontrolujú, či sú vaše odpovede správne, iba či sa zhodujú 
    Vytvorte si dlhé a náhodné odpovede a niekam si ich uložte.
report-pwt-headline-4 = Používajte správcu hesiel
report-pwt-summary-4 = Správcovia hesiel, ako je 1Password, LastPass, Dashlane a Bitwarden vedia vygenerovať silné heslá, bezpečne ich uložiť a automaticky ich pre vás na webových stránkach vyplniť, takže si nemusíte každé pamätať.
# A link to legal information about mozilla products.
legal = Právne informácie
# Share Firefox Monitor by email subject line
share-by-email-subject = Pozrite sa, či vaše údaje boli súčasťou nejakého úniku.
# Share Firefox Monitor by email message. {"https://monitor.firefox.com"} should not be translated or modified. 
share-by-email-message =
    Zdravím,
    { -brand-name } je služba, ktorá je zdarma a pomocou ktorej môžete skontrolovať, či boli niektoré vaše osobné údaje na internete súčasťou úniku. Takto to funguje:
    1. Otvorte { "https://monitor.firefox.com" } a zadajte do vyhľadávacieho poľa svoju e-mailovú adresu.
    2. Pozrite sa, či bol váš účet súčasťou nejakého úniku dát.
    3. { -product-name } vám ponúkne pár tipov, ako ostať naďalej v bezpečí.
# Unsubscribe link in email.
email-unsub-link = Odhláste sa
# This string appears in the footer of breach report and breach alert emails.
# { $unsubLink } is a link to the user's dashboard where they can unsubscribe from Monitor
# and uses the text from { email-unsub-link }. { $faqLink } is a link to the 
# Firefox Monitor SUMO page and uses the text from { frequently-asked-questions }.
email-footer-blurb =
    Tento e-mail ste dostali, pretože ste sa prihlásili na odber upozornení zo služby { -product-name }.
    Neželáte si už dostávať podobné e-maili? { $unsubLink }. Toto je automatický e-mail. Podporu nájdete na { $faqLink }.
# This string appears in the footer of verification emails. { $faqLink } is a link
# to the Firefox Monitor SUMO page and uses the text from { frequently-asked-questions }.
email-verify-footer-copy =
    Tento e-mail ste dostali, pretože ste sa prihlásili na odber upozornení zo služby { -product-name }.
    Toto je automatický e-mail. Podporu nájdete na { $faqLink }.
# Button text that takes the user to their signed in user dashboard.
view-my-dashboard-cta = Zobraziť moju nástenku
# Button text
verify-email-cta = Overiť e-mailovú adresu
# Headline of verification email
email-link-expires = Platnosť tohto odkazu vyprší o 24 hodín
email-verify-blurb = Overte svoju e-mailovú adresu a prihláste sa tak v službe { -product-name } k odberu upozornení.
# Email headline
email-found-breaches-hl = Tu je váš súhrn predchádzajúcich únikov
# Email headline
email-breach-summary-for-email = Súhrn únikov pre { $userEmail }
# Email headline
email-no-breaches-hl = E-mailová adresa { $userEmail } sa neobjavila v žiadnom známom úniku
# Email headline
email-alert-hl = E-mailová adresa { $userEmail } sa objavila v novom úniku dát
# Subject line of email
email-subject-found-breaches = Služba { -product-name } odhalila vaše údaje v týchto únikoch
# Subject line of email
email-subject-no-breaches = { -product-name } nenašiel žiadne známe úniky
# Subject line of email
email-subject-verify = Overte svoju e-mailovú adresu pre { -product-name }
# { $fxmLink } is a link to Firefox Monitor and uses the text from { -product-name }.
learn-more-about-fxm = Ďalšie informácie o { $fxmLink }
email-sensitive-disclaimer =
    Kvôli citlivej povahe tohto úniku nie sú uniknuté e-mailové adresy verejne dostupné.
    Toto upozornenie ste dostali, pretože ste overeným majiteľom tejto e-mailovej adresy.
fxm-warns-you-no-breaches =
    Služba { -product-name } vás upozorňuje na úniky dát, ktorých súčasťou boli aj vaše údaje.
    Zatiaľ ste sa neobjavili v žiadnom úniku. Ak sa vaša e-mailová adresa objaví v novom úniku, budeme vás o tom informovať.
fxm-warns-you-found-breaches =
    Služba { -product-name } vás upozorňuje na úniky dát, ktorých súčasťou boli aj vaše údaje.
    Ste taktiež zaregistrovaní na odber upozornení v prípade, že sa vaša e-mailová adresa objaví v novom úniku.
email-breach-alert-blurb =
    Služba { -product-name } vás upozorňuje na úniky dát, ktorých súčasťou boli aj vaše údaje.
    Práve sme dostali informácie o ďalšom úniku dát.
# List headline
faq-list-headline = Často kladené otázky
# Link Title
faq-v2-1 = Nepoznám niektorú z daných spoločností alebo webových stránok. Prečo som súčasťou tohto úniku dát?
# Link Title
faq-v2-2 = Musím niečo urobiť, ak sa únik odohral pred rokmi alebo ak ide o starý účet?
# Link Title
faq-v2-3 = Moje údaje boli súčasťou úniku dát. Čo teraz?
# Link Title
faq-v2-4 = Ako { -product-name } narába s chúlostivými stránkami?
