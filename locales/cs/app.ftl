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
-brand-fxa = Účet Firefoxu
-brand-Chrome = Chrome
layout-Firefox = { -brand-name }
# Descriptive headline for a column of links where users can give feedback, or get additional information about, Firefox Monitor.
layout-support = Podpora
# Link that takes the user to a blog post on blog.mozilla.org about the alerts
about-firefox-alerts = O oznámeních od Firefoxu
# Link that takes the user to a Firefox Monitor survey. 
give-feedback = Poskytnout zpětnou vazbu
terms-and-privacy = Podmínky a ochrana soukromí
error-scan-page-token = Pokusili jste se zkontrolovat příliš mnoho e-mailových adres ve velmi krátkém čase. Z bezpečnostních důvodů jsme další vyhledávání dočasně zablokovali. Zkuste to prosím znovu později.
error-could-not-add-email = E-mailovou adresu se nepodařilo přidat do databáze.
error-not-subscribed = Tato e-mailová adresa není přihlášena k odběru ze služby { -product-name }.
error-hibp-throttled = Příliš mnoho spojení ke službě { -brand-HIBP }.
error-hibp-connect = Chyba při připojování k { -brand-HIBP }.
error-hibp-load-breaches = Nepodařilo se načíst informace o únicích.
hibp-notify-email-subject = { -product-name } - upozornění, váš účet byl součástí úniku dat.
home-title = { -product-name }
home-not-found = Stránka nenalezena.
oauth-invalid-session = Neplatná relace
oauth-confirmed-title = { -product-name } - přihlášení k odběru
scan-title = { -product-name } - výsledky skenu
user-add-invalid-email = Neplatný e-mail
user-add-email-verify-subject = Potvrďte své přihlášení k odběru ze služby { -product-name }.
user-add-title = { -product-name } - potvrzovací e-mail
error-headline = Chyba
user-verify-token-error = Je vyžadován ověřovací token.
user-verify-email-report-subject = Vaše hlášení ze služby { -product-name }
user-verify-title = { -product-name } - přihlášení dokončeno
user-unsubscribe-token-error = Pro odhlášení je vyžadován token.
user-unsubscribe-token-email-error = Pro odhlášení je vyžadován token a emailHash.
user-unsubscribe-title = { -product-name } - odhlášení
user-unsubscribe-survey-title = { -product-name } - dotazník k odhlášení
user-unsubscribed-title = { -product-name } - odhlášení dokončeno

## Password Tips

pwt-section-headline = Silnější hesla = lepší ochrana
pwt-section-subhead = Vaše osobní informace jsou jen tak v bezpečí jak bezpečná jsou vaše hesla.
pwt-section-blurb =
    Vaše hesla chrání víc než jen samotné přihlášení k účtu. Chrání všechna vaše data, která jsou skrze něj dostupná.
    Hackeři spoléhají na špatné zvyky jako je používání stejného hesla na více místech, nebo příliš běžného a lehce uhodnutého hesla (h3sl0).
    Takže pokud se jim podaří prolomit jeden váš účet, dostanou se velmi rychle dostat i k ostatním. Jak se můžete chránit?
pwt-headline-1 = Používejte rozdílná hesla pro každý účet
pwt-summary-1 =
    Používání stejného hesla pro všechny účty nechává otevřené dveře pro krádež vaší identity.
    Kdokoliv uhodne vaše heslo získá přístup ke všem vašim účtům najednou.
pwt-headline-2 = Vytvářejte silná a těžko uhodnutelná hesla.
pwt-summary-2 = Hackeři používají tisíce běžně používaných hesel, aby se pokusili uhodnout to vaše. Čím delší a náhodnější je vaše heslo, tím těžší ho bude uhádnout.
pwt-headline-3 = Považujte bezpečnostní otázky jako hesla
pwt-summary-3 =
    Webové stránky nekontrolují, jestli jsou vaše odpovědi správně, jenom jestli jsou pokaždé stejné.
    Připravte si dlouhé a náhodné odpovědi a někam si je bezpečně uložte.
pwt-headline-4 = Získejte pomoc při pamatování vašich hesel
pwt-summary-4 =
    Správci hesel jako 1Password, LastPass, Dashlane a Bitwarden umí vygenerovat silná a unikátní hesla. 
    Navíc umí hesla bezpečně uložit a automaticky je pro vás na webových stránkách vyplnit.
pwt-headline-5 = Využívejte přidaného zabezpečení pomocí dvoufázového ověřování
pwt-summary-5 =
    Dvoufázové ověřování vyžaduje pro úspěšné přihlášení zadat nějakou dodatečnou informaci (většinou jednorázový kód poslaný přes SMS).
    I pokud někdo bude znát vaše heslo, bez tohoto ověření přístup k vašemu účtu nezíská.
pwt-headline-6 = Přihlásit se k odběru oznámení ze služby { -product-name-nowrap }
pwt-summary-6 = Počet úniků dat z webových stránek stoupá. Kdykoliv je nový únik přidán do databáze, { -product-name-nowrap } vám pošle upozornění, abyste mohli co nejrychleji zareagovat a ochránit svůj účet.
landing-headline = Každý má právo na bezpečí před hackery.
landing-blurb =
    { -product-name-nowrap } vás vybaví nástroji na uchování vašich osobních údajů v bezpečí.
    Odhalte, co už o vás hackeři vědí, a zůstaňte o krok před nimi.
scan-label = Podívejte se, jestli nebyly vaše účty součástí nějakého úniku dat.
scan-placeholder = Zadejte e-mailovou adresu
scan-privacy = Zadanou e-mailovou adresu si nebudeme nikam ukládat.
scan-submit = Vyhledat e-mailovou adresu
scan-another-email = Vyhledat další e-mailovou adresu
scan-featuredbreach-label = Zjistěte, jestli byl váš účet z <span class="bold">{ $featuredBreach }</span> kompromitován.
sensitive-breach-email-required = Únik obsahuje citlivé informace. Ověřte svou e-mailovou adresu.
scan-error = Zadaná e-mailová adresa není platná.
signup-banner-headline = { -product-name-nowrap } zjišťuje hrozby pro vaše účty registrované na internetu.
signup-banner-blurb =
    Podrobné hlášení ze služby { -product-name-nowrap } vám ukáže, jestli byly vaše účty na internetu součástí nějakého úniku nebo krádeže dat.
    Upozorníme vás také kdykoliv se váš účet objeví jako součást nově zjištěného úniku dat.
download-firefox-bar-blurb = Službu { -product-name-nowrap } zajišťuje <span class="nowrap">{ -brand-name }</span>.
download-firefox-bar-link = Stáhněte si { -brand-name }
download-firefox-banner-blurb = Převezměte kontrolu nad svým prohlížečem
download-firefox-banner-button = Stáhnout { -brand-name }
signup-modal-headline = Přihlášení ke službě { -product-name-nowrap }
signup-modal-blurb = Přihlaste se k zaslání kompletního hlášení, upozornění na nové úniky a bezpečnostních tipů od služby { -product-name-nowrap }.
signup-modal-close = Zavřít
get-your-report = Dostávejte hlášení o svém účtu
signup-modal-verify-headline = Potvrďte své přihlášení k odběru
signup-modal-verify-blurb = Poslali jsme potvrzovací e-mail na <span id="submitted-email" class="medium"></span>.
signup-modal-verify-expiration = Platnost odkazu vyprší za 24 hodin.
signup-modal-verify-resend = Nenašli jste e-mail ve schránce ani ve spamu? Poslat znovu.
# Appears after Firefox Monitor has sent a verification email to a new user. 
signup-modal-sent = Odesláno!
signup-with-fxa = Přihlaste se účtem Firefoxu
form-signup-placeholder = Zadejte e-mailovou adresu
form-signup-checkbox = Nechte si posílat nejnovější informace o společnosti { -brand-Mozilla } a aplikaci { -brand-name }.
sign-up = Zaregistrovat
form-signup-error = Neplatná e-mailová adresa
no-breaches-headline = Zatím jde všechno dobře.
found-breaches-headline = Vaše informace byly součástí úniku dat.
no-breaches =
    Základní sken vaši e-mailovou adresu nenašel.
    To je dobrá zpráva, ale k úniku dat může dojít kdykoliv a pořád ještě můžete něco zlepšovat.
    Přihlaste se k odběru informací ze služby { -product-name-nowrap } pro kompletní hlášení, upozornění na nové úniky a tipy pro ochranu vašich hesel.
featured-breach-results =
    { $breachCount ->
        [0] Váš účet byl nalezen jen v úniku dat <span class="bold">{ $featuredBreach }</span>.
        [one] Váš účet byl nalezen v úniku dat <span class="bold">{ $featuredBreach }</span> a ještě jednom dalším.
        [few] Váš účet byl nalezen v úniku dat <span class="bold">{ $featuredBreach }</span> a ještě ve { $breachCount } dalších.
       *[other] Váš účet byl nalezen v úniku dat <span class="bold">{ $featuredBreach }</span> a ještě v { $breachCount } dalších.
    }
featured-breach-not-compromised =
    { $breachCount ->
        [0] { no-breaches }
        [one] Váš účet nebyl nalezen v úniku dat <span class="bold">{ $featuredBreach }</span>, ale byl nalezen v jednom dalším.
        [few] Váš účet nebyl nalezen v úniku dat <span class="bold">{ $featuredBreach }</span>, ale byl nalezen ve { $breachCount } dalších.
       *[other] Váš účet nebyl nalezen v úniku dat <span class="bold">{ $featuredBreach }</span>, ale byl nalezen v { $breachCount } dalších.
    }
scan-results =
    { $breachCount ->
        [0] { no-breaches }
        [one] Váš účet byl nalezen v jednom úniku dat.
        [few] Účty s vaší e-mailovou adresou byly nalezeny ve { $breachCount } dalších únicích.
       *[other] Účty s vaší e-mailovou adresou byly nalezeny v { $breachCount } dalších únicích.
    }
show-more-breaches = Zobrazit více
what-to-do-headline = Co udělat když jsou vaše data součástí nějakého úniku
what-to-do-subhead-1 = Změňte svá hesla i pro staré účty
what-to-do-blurb-1 =
    Pokud se nemůžete přihlásit, kontaktujte správce webové stránky a zeptejte se, jak můžete obnovit přístup ke svému účtu, nebo účet zcela zrušit.
    Vidíte účet, o kterém vůbec nevíte? Stránka mohla změnit svůj název nebo účet někdo vytvořil za vás.
what-to-do-subhead-2 = Pokud používáte stejné heslo, jako o uniklého účtu, změňte ho
what-to-do-blurb-2 =
    Hackeři mohou použít získaná hesla a dostat se s nimi do dalších vašich účtů.
    Používejte pro každou webovou stránku jiné heslo, hlavně pokud jde o internetové
    bankovnictví, e-mailovou schránku nebo další stránky, kde ukládáte svá osobní data.
what-to-do-subhead-3 = Věnujte speciální péči zabezpečení peněžních účtů
what-to-do-blurb-3 =
    Většina úniků obsahuje vaši e-mailovou adresu a hesla, ale mohou v nich být také citlivé finanční informace.
    Pokud bylo součástí úniku číslo vašeho účtu nebo karty, informujte svou banku a sledujte, jestli nedochází k nečekaným změnám stavu na vašem účtu.
what-to-do-subhead-4 = Nechte si pomoci s vytvářením dobrých hesel a jejich bezpečným uložením.
what-to-do-blurb-4 = Správci hesel jako 1Password, LastPass, Dashlane a Bitwarden umí vygenerovat silná hesla, bezpečně je uložit a automaticky je pro vás na webových stránkách vyplnit.
# breach-date = the calendar date a particular data theft occurred. 
breach-date = Datum úniku:
# compromised accounts = the total number of user accounts exposed in data breach
compromised-accounts = Počet kompromitovaných účtů:
# compromised-data = the kind of user data exposed to hackers in data breach.
compromised-data = Kompromitovaná data:
confirmed = Potvrzeno!<br />Jste přihlášeni k odběru.
confirmed-blurb = { -product-name-nowrap } vám za chvíli pošle e-mail s kompletním hlášením a také vám bude posílat upozornění, kdykoliv se váš účet objeví v nějakém nově nahlášeném úniku.
confirmed-social-blurb = Pokud unikla vaše data, je velká šance, že se tak stalo i u někoho z vaší rodiny, přátel nebo lidí, se kterými se znáte na internetu. Řekněte jim o službě { -product-name-nowrap }.
unsub-headline = Odhlásit odběr ze služby { -product-name-nowrap }
unsub-blurb = Tímto smažete svou e-mailovou adresu ze seznamu služby { -product-name-nowrap } a nebudete nadále dostávat upozornění na nově oznámené úniky dat.
unsub-button = Odhlásit
unsub-survey-headline = Již nejste přihlášeni.
unsub-survey-blurb =
    Vaše e-mailová adresa byly odhlášena. Děkujeme vám za využití služby { -product-name-nowrap }.
    Máte prosím okamžik pro odpověď na jednu otázku, jak se vám naše služba používala?
unsub-survey-form-label = Z jakého důvodu ohlašujete zasílání upozornění ze služby { -product-name-nowrap }?
unsub-reason-1 = Nemyslím si, že upozornění pomáhají zabezpečit má data
unsub-reason-2 = Dostávám ze služby { -product-name-nowrap } příliš mnoho e-mailů
unsub-reason-3 = Služba mi nijak nepomáhá
unsub-reason-4 = Své účty jsem již zabezpečil(a)
unsub-reason-5 = Pro sledování svých účtů používám jinou službu
unsub-reason-6 = Nic z výše uvedeného
unsub-survey-thankyou = Děkujeme za vaši zpětnou vazbu.
unsub-survey-error = Vyberte prosím jednu z možností.
# Link to share Firefox Monitor on Facebook. Positioned next to Facebook logo.
share = Sdílet
# Link to share Firefox Monitor on Twitter. Positioned next to Twitter logo.
tweet = Tweetnout
download-firefox-quantum = Stáhnout { -brand-Quantum }
download-firefox-mobile = Stáhnout { -brand-name } pro mobil
# Features here refers to Firefox browser features. 
features = Funkce
# beta-nightly-developer-edition refers to additional versions of Firefox Browser
beta-nightly-developer-edition = Beta, Nightly, Developer Edition
# Breach data provided by Have I Been Pwned.
hibp-attribution = Data o únicích poskytuje { $hibp-link }
site-description = Byly vaše účty součástí úniku, nebo přímo ukradeny? { -product-name } to zjistí. Prohledejte databázi a přihlaste se k odběru upozornění.
confirmation-headline = Vaše hlášení od { -product-name } už je na cestě.
confirmation-blurb = Únik dat může postihnout kohokoliv. Dejte vědět svým přátelům a rodině aby si taky zkontrolovali své účty.
share-email = E-mail
# Appears at the end of a list of email-clients and refers to any other unlisted email-client.
share-other = Další
share-twitter = Většina lidí má na internetu okolo stovky účtů. Zjistěte, jestli nebyl některý z těch vašich součástí úniku dat.
share-facebook-headline = Zjistěte, zda byla vaše data součástí nějakého úniku
share-facebook-blurb = Byl některý z vašich účtů součástí nějakého úniku dat?
og-site-description = { -product-name } zjistí, jestli byla vaše data součástí nějakého úniku. Pro větší bezpečí se také přihlaste k zasílání výstrah o budoucích únicích.
mozilla-security-blog = Bezpečnostní blog Mozilly
# A header for a list of links to share Firefox Monitor on various social media platforms.
layout-social = Sociální sítě
show-all = Zobrazit vše
fxa-signup-banner-headline = Sledujte hrozby pro vaše online účty.
fxa-signup-banner-blurb = Založte si { -brand-fxa } a nechte si posílat podrobná hlášení o nových únicích dat.
fxa-landing-blurb = Odhalte, co už o vás hackeři vědí, a zůstaňte o krok před nimi.
fxa-scan-label = Podívejte se, jestli byl váš e-mail součástí nějakého úniku dat.
fxa-welcome-headline = Vítá vás { -product-name }.
fxa-welcome-blurb = Vše je nastaveno a pokud se { $userEmail } objeví v nějakém úniku dat, dostanete upozornění.
fxa-scan-another-email = Chcete zkontrolovat další e-mail?
# Search Firefox Monitor
fxa-scan-submit = Prohledat { -product-name }
sign-up-to-check = Pro kontrolu se zaregistrujte
sign-in = Přihlásit se
sign-out = Odhlášení
full-report-headline = Hlášení služby { -product-name }
see-full-report = Zobrazit úplné hlášení
# Manage Firefox Account, link to page where account holders can change their account settings.
manage-fxa = Správa účtu Firefoxu
fxa-download-firefox-bar-blurb = Službu zajišťuje { -brand-name }. 2x rychlejší a o 30 % úspornější na paměť než { -brand-Chrome }.
fxa-download-firefox-bar-link = Stáhnout
fxa-download-firefox-banner-blurb = Lepší, rychlejší načítání stránek, které snižuje používání operační paměti.
user-fb-compromised-headline = Adresa { $userEmail } byla součástí úniku dat - { $breachName }.
guest-fb-compromised-headline = Tato adresa byla součástí úniku dat - { $breachName }.
user-zero-breaches-headline = Adresa { $userEmail } nebyla součástí žádného úniku dat.
guest-zero-breaches-headline = Tato adresa nebyla součástí žádného úniku dat.
user-scan-results-headline =
    { $breachCount ->
        [one] Adresa { $userEmail } byla součástí jednoho úniku dat.
        [few] Adresa { $userEmail } byla součástí { $breachCount } úniků dat.
       *[other] Adresa { $userEmail } byla součástí { $breachCount } úniků dat.
    }
guest-scan-results-headline =
    { $breachCount ->
        [one] Tato adresa byla součástí jednoho úniků dat.
        [few] Tato adresa byla součástí { $breachCount } úniků dat.
       *[other] Tato adresa byla součástí { $breachCount } úniků dat.
    }
user-no-breaches-blurb = Pokud se tento e-mail objeví v nějakém úniku dat, dostanete upozornění.
guest-no-breaches-blurb = Pro nahlédnutí, jestli byl tento e-mail součástí nějakého úniku dat, si prosím vytvořte { -brand-fxa }. Pokud se tento e-mail objeví v nějakém úniku dat v budoucnu, dostanete upozornění.
user-one-breach-blurb = Tento únik obsahoval následující osobní informace.
user-fb-compromised-blurb =
    { $breachCount ->
        [one] Vaše e-mailová adresa byla součástí také jednoho dalšího úniku.
        [few] Vaše e-mailová adresa byla součástí také { $breachCount } dalších úniků.
       *[other] Vaše e-mailová adresa byla součástí také { $breachCount } dalších úniků.
    }
user-generic-fb-compromised-blurb =
    { $breachCount ->
        [one] Tato e-mailová adresa byla součástí také jednoho dalšího úniku.
        [few] Tato e-mailová adresa byla součástí také { $breachCount } dalších úniků.
       *[other] Tato e-mailová adresa byla součástí také { $breachCount } dalších úniků.
    }
user-fb-compromised-single = Tento únik obsahoval následující osobní informace. Pokud jste tak ještě neučinili, doporučujeme si změnit heslo.
user-generic-fb-compromised-single = Tento únik obsahoval následující osobní informace.
guest-fb-compromised-single = Tento únik obsahoval následující osobní informace. Zaregistrujte si { -brand-fxa } a nechce si poslat podrobné hlášení a upozornění na případné nové úniky.
guest-fb-compromised-blurb =
    { $breachCount ->
        [one] Tato e-mailová adresa byla součástí také jednoho dalšího úniku. Zaregistrujte si { -brand-fxa } a nechce si poslat podrobné hlášení a upozornění na případné nové úniky.
        [few] Tato e-mailová adresa byla součástí také { $breachCount } dalších úniků. Zaregistrujte si { -brand-fxa } a nechce si poslat podrobné hlášení a upozornění na případné nové úniky.
       *[other] Tato e-mailová adresa byla součástí také { $breachCount } dalších úniků. Zaregistrujte si { -brand-fxa } a nechce si poslat podrobné hlášení a upozornění na případné nové úniky.
    }
user-fb-not-compromised-blurb =
    { $breachCount ->
        [one] Vaše e-mailová adresa nebyla součástí úniku dat { $breachName }, ale našli jsme ji v jiném.
        [few] Vaše e-mailová adresa nebyla součástí úniku dat { $breachName }, ale našli jsme ji v jiných.
       *[other] Vaše e-mailová adresa nebyla součástí úniku dat { $breachName }, ale našli jsme ji v jiných.
    }
user-generic-fb-not-compromised-blurb =
    { $breachCount ->
        [one] Tato e-mailová adresa nebyla součástí úniku dat { $breachName }, ale našli jsme ji v jiném.
        [few] Tato e-mailová adresa nebyla součástí úniku dat { $breachName }, ale našli jsme ji v jiných.
       *[other] Tato e-mailová adresa nebyla součástí úniku dat { $breachName }, ale našli jsme ji v jiných.
    }
guest-fb-not-compromised-blurb =
    { $breachCount ->
        [one] Tato e-mailová adresa nebyla součástí úniku dat { $breachName }, ale našli jsme ji v jiném. Zaregistrujte si { -brand-fxa } a nechce si poslat podrobné hlášení a upozornění na případné nové úniky.
        [few] Tato e-mailová adresa nebyla součástí úniku dat { $breachName }, ale našli jsme ji v jiných. Zaregistrujte si { -brand-fxa } a nechce si poslat podrobné hlášení a upozornění na případné nové úniky.
       *[other] Tato e-mailová adresa nebyla součástí úniku dat { $breachName }, ale našli jsme ji v jiných. Zaregistrujte si { -brand-fxa } a nechce si poslat podrobné hlášení a upozornění na případné nové úniky.
    }
# While English doesn’t use the actual number of breaches in this sentence,
# you can use {$breachCount} to display the number of breaches in your localization.
user-found-breaches-blurb =
    { $breachCount ->
        [one] Tento únik obsahoval následující osobní informace. Pokud jste tak ještě neučinili, doporučujeme si změnit heslo.
        [few] Tyto úniky obsahovaly následující osobní informace. Pokud jste tak ještě neučinili, doporučujeme si změnit hesla.
       *[other] Tyto úniky obsahovaly následující osobní informace. Pokud jste tak ještě neučinili, doporučujeme si změnit hesla.
    }
# While English doesn’t use the actual number of breaches in this sentence,
# you can use {$breachCount} to display the number of breaches in your localization.
user-generic-found-breaches-blurb =
    { $breachCount ->
        [one] Tento únik obsahoval následující osobní informace.
        [few] Tyto úniky obsahovaly následující osobní informace.
       *[other] Tyto úniky obsahovaly následující osobní informace.
    }
# While English doesn’t use the actual number of breaches in this sentence,
# you can use {$breachCount} to display the number of breaches in your localization.
guest-found-breaches-blurb =
    { $breachCount ->
        [one] Tento únik obsahoval následující osobní informace. Zaregistrujte si { -brand-fxa } a nechce si poslat podrobné hlášení a upozornění na případné nové úniky.
        [few] Tyto úniky obsahovaly následující osobní informace. Zaregistrujte si { -brand-fxa } a nechce si poslat podrobné hlášení a upozornění na případné nové úniky.
       *[other] Tyto úniky obsahovaly následující osobní informace. Zaregistrujte si { -brand-fxa } a nechce si poslat podrobné hlášení a upozornění na případné nové úniky.
    }
have-an-account = Už máte účet?
signup-banner-sensitive-blurb =
    Odhalte, co už o vás hackeři vědí, a zůstaňte o krok před nimi.
    Nechte si posílat upozornění, pokud se váš účet objeví v novém úniku.
fxa-pwt-section-blurb =
    Hesla chrání všechny vaše osobní údaje a online účty. Hackeři spoléhají
    na špatné zvyky jako je používání stejného hesla na více místech, nebo
    příliš běžného a lehce uhodnutého hesla (h3sl0). Takže pokud se jim podaří
    prolomit jeden váš účet, dostanou se velmi rychle dostat i k ostatním.
fxa-pwt-summary-2 =
    Krátké jednoslovné heslo je velmi snadné uhodnout. Používejte alespoň
    dvouslovná hesla s kombinací malých a velkých písmen, čísel a speciálních znaků.
fxa-pwt-summary-4 = Správci hesel jako 1Password, LastPass, Dashlane a Bitwarden umí vaše hesla bezpečně uložit a automaticky je pro vás na webových stránkách vyplnit. Pomohou vám i s vytvořením silného hesla.
fxa-pwt-summary-6 = Počet úniků dat z webových stránek stoupá. Kdykoliv je nový únik přidán do databáze, { -product-name } vám pošle upozornění, abyste mohli co nejrychleji zareagovat a ochránit svůj účet.
fxa-what-to-do-blurb-1 = Pokud se nemůžete přihlásit, kontaktujte správce webové stránky a zeptejte se, jak můžete své heslo změnit. Vidíte účet, o kterém vůbec nevíte? Stránka mohla změnit svůj název nebo jste na nepoužívaný účet už zapomněli.
fxa-what-to-do-subhead-2 = Přestaňte používat uniklé heslo a změňte ho všude, kde jste ho použili.
fxa-wtd-blurb-2 = Hackeři mohou použít stejné heslo a e-mail a dostat se i do dalších účtů. Pro každý účet používejte jiné heslo, zejména pro internetové bankovnictví a další stránky, které mají vaše citlivé osobní údaje.
fxa-what-to-do-blurb-3 = Většina úniků obsahuje jen e-mailové adresy a hesla. V některých ale mohou být citlivé bankovní údaje. Pokud bylo v úniku číslo vašeho účtu nebo platební karty, informujte neprodleně svou banku o možném zneužití. Sledujte také stav svého účtu, jestli se nečekaně nezměnil.
fxa-what-to-do-subhead-4 = Nemusíte si sami pamatovat všechna svá hesla.
fxa-what-to-do-blurb-4 = Správci hesel jako 1Password, LastPass, Dashlane a Bitwarden umí vaše hesla bezpečně uložit a automaticky je pro vás na webových stránkách vyplnit. Používejte správce hesel na mobilu i počítači a už si svá hesla nebudete muset pamatovat.
fb-landing-headline = Byly vaše údaje součástí úniku dat - { $breachName }?
copyright = Části tohoto obsahu jsou © 1999-{ $year } jednotlivými přispěvateli mozilla.org.
content-available = Obsah je dostupný pod licencí Creative Commons.
