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
give-feedback = Poskytnout zpětnou vazbu
terms-and-privacy = Podmínky a ochrana soukromí
error-not-subscribed = Tato e-mailová adresa není přihlášena k odběru ze služby { -product-name }.
error-hibp-throttled = Příliš mnoho spojení ke službě { -brand-HIBP }.
error-hibp-connect = Chyba při připojování k { -brand-HIBP }.
hibp-notify-email-subject = { -product-name } - upozornění, váš účet byl součástí úniku dat.
home-title = { -product-name }
home-not-found = Stránka nenalezena.
oauth-invalid-session = Neplatná relace
oauth-confirmed-title = { -product-name } - přihlášení k odběru
scan-title = { -product-name } - výsledky skenu
user-add-invalid-email = Neplatný e-mail
user-add-email-verify-subject = Potvrďte své přihlášení k odběru ze služby { -product-name }.
user-add-title = { -product-name } - potvrzovací e-mail
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
pwt-headline-1 = Používejte rozdílná hesla pro každý účet.
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
scan-placeholder = Zadejte e-mailovou adresu
scan-privacy = Zadanou e-mailovou adresu nebudeme nikde ukládat.
scan-submit = Vyhledejte svou e-mailovou adresu
scan-another-email = Vyhledat další e-mailovou adresu
scan-featuredbreach-label = Zjistěte, jestli byl váš účet z <span class="bold">{ $featuredBreach }</span> kompromitován.
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
signup-modal-close = Zavřít
get-your-report = Získejte hlášení o svém účtu
signup-modal-verify-headline = Potvrďte své přihlášení k odběru
signup-modal-verify-blurb = Poslali jsme potvrzovací e-mail na <span id="submitted-email" class="medium"></span>.
signup-modal-verify-expiration = Platnost odkazu vyprší za 24 hodin.
signup-modal-verify-resend = Nenašli jste e-mail ve schránce ani ve spamu? Poslat znovu.
# Appears after Firefox Monitor has sent a verification email to a new user. 
signup-modal-sent = Odesláno!
signup-with-fxa = Přihlaste se účtem Firefoxu
form-signup-placeholder = Zadejte e-mailovou adresu
form-signup-checkbox = Nechte si posílat nejnovější informace o společnosti { -brand-Mozilla } a aplikaci { -brand-name }.
sign-up = Přihlásit
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
        [one] Váš účet byl nalezen jen v jednom úniku dat.
        [few] Účty s vaší e-mailovou adresou byly nalezeny ve { $breachCount } dalších únicích.
       *[other] Účty s vaší e-mailovou adresou byly nalezeny v { $breachCount } dalších únicích.
    }
show-more-breaches = Zobrazit více
what-to-do-subhead-1 = Změňte svá hesla i pro staré účty
# breach-date = the calendar date a particular data theft occurred. 
breach-date = Datum úniku:
# compromised accounts = the total number of user accounts exposed in data breach
compromised-accounts = Počet kompromitovaných účtů:
# compromised-data = the kind of user data exposed to hackers in data breach.
compromised-data = Kompromitovaná data:
confirmed = Potvrzeno!<br />Jste přihlášeni k odběru.
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
