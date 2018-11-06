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
layout-support = Támogatás
# Link that takes the user to a Firefox Monitor survey. 
give-feedback = Adjon visszajelzést
terms-and-privacy = Feltételek és adatvédelem
error-not-subscribed = Ez az e-mail cím nincs feliratkozva a { -product-name }ra.
error-hibp-throttled = Túl sok kapcsolat a { -brand-HIBP } felé.
error-hibp-connect = Hiba a { -brand-HIBP }hoz kapcsolódáskor.
error-hibp-load-breaches = A betörések nem tölthetőek be.
hibp-notify-email-subject = { -product-name } figyelmeztetés: A fiókját érintette egy betörés.
home-title = { -product-name }
home-not-found = Az oldal nem található.
oauth-invalid-session = Érvénytelen munkamenet
oauth-confirmed-title = { -product-name } : Feliratkozott
scan-title = { -product-name } : Szkennelési eredmények
user-add-invalid-email = Érvénytelen e-mail cím
user-add-email-verify-subject = A { -product-name } feliratkozásának megerősítése.
user-add-title = { -product-name } : E-mail cím megerősítése
user-verify-token-error = Az ellenőrzési token lejárt.
user-verify-email-report-subject = Az Ön { -product-name } jelentése
user-verify-title = { -product-name } : Feliratkozott
user-unsubscribe-token-error = A leiratkozáshoz token szükséges.
user-unsubscribe-token-email-error = A leiratkozáshoz token és emailHash szükséges.
user-unsubscribe-title = { -product-name } : Leiratkozás
user-unsubscribe-survey-title = { -product-name } : Leiratkozási kérdőív
user-unsubscribed-title = { -product-name } : Leiratkozott

## Password Tips

pwt-section-headline = Erősebb jelszavak = jobb védelem
pwt-section-subhead = Személyes adatai csak annyira biztonságosak, mint a jelszavai.
pwt-section-blurb = A jelszavai több mindent védenek, mint a fiókjait. Megvédik az összes személyes információját, melyek azokban találhatóak. És a hackerek támaszkodnak a rossz szokásokra, például arra, hogy mindenhol ugyanazt a jelszót használja, vagy gyakori kifejezéseket használ (p@ssw0rd, valaki?), így ha egy fiókot megtörnek, akkor többet is meg tudnak. Így védheti meg jobban a fiókjait.
pwt-headline-1 = Használjon különböző jelszót minden fiókhoz
pwt-summary-1 =
    Ugyanannak a jelszónak az újra felhasználása nyitva hagyja az ajtót a személyazonosság ellopásának.
    Bárki, aki ismeri a jelszót, be tud jelentkezni az összes fiókjába.
pwt-headline-2 = Hozzon létre nehezen kitalálható jelszavakat
pwt-summary-2 =
    A hackerek több ezer gyakori jelszót használnak, hogy kitalálják az Önét.
    Minél hosszabb és véletlenszerűbb a jelszava, annál nehezebb kitalálni.
pwt-headline-3 = Kezelje további jelszavakként a biztonsági kérdéseket
pwt-summary-3 =
    A weboldalak nem ellenőrzik, hogy a válaszok pontosak-e, csak azt hogy minden alkalommal megegyeznek.
    Hozzon létre hosszú, véletlen válaszokat és tárolja őket biztonságosan.
pwt-headline-4 = Kérjen segítséget a jelszavai megjegyzésekor
pwt-summary-4 =
    A jelszókezelők, mint a 1Password, LastPass, Dashlane és a Bitwarden erős, egyedi jelszavakat állítanak elő.
    Biztonságosan tárolják a jelszavakat, és be is töltik őket a weboldalakon Ön helyett.
pwt-headline-5 = Kapjon nagyobb biztonságot kétfaktoros hitelesítéssel
pwt-summary-5 =
    A 2FA további információkat követel meg (például egyszer használatos kódot küld SMS-ben), hogy bejelentkezzen a fiókjába.
    Még akkor is, ha valaki rendelkezik a jelszavával, nem tud belépni.
pwt-headline-6 = Iratkozzon fel a { -product-name-nowrap } figyelmeztetésekre
pwt-summary-6 =
    A weboldalak betöréseinek száma növekszik. Amint egy új betörés kerül be az adatbázisunkba,
    a { -product-name-nowrap } figyelmeztetést küld – így lépéseket tehet és megvédheti fiókját.
landing-headline = Itt kezdődik a joga, hogy biztonságban legyen a hackerektől.
landing-blurb =
    A { -product-name-nowrap } felvértezi Önt az eszközökkel, hogy biztonságban tartsa a személyes információit.
    Tudja meg, hogy a hackerek mit tudnak Önről, és tudja meg hogyan lehet egy lépéssel előttük.
scan-label = Nézze meg, hogy érintette-e már betörés.
scan-placeholder = Adja meg az e-mail címét
scan-privacy = Az e-mail címe nem lesz tárolva.
scan-submit = Az e-mail címe keresése
scan-another-email = Másik e-mail cím szkennelése
scan-featuredbreach-label = Tudja meg, hogy veszélybe került-e a(z) <span class="bold"> { $featuredBreach } </span> fiókja.
scan-error = Érvényes e-mail címnek kell lennie.
signup-banner-headline = A { -product-name-nowrap } észleli az online fiókjaival szembeni fenyegetéseket.
signup-banner-blurb =
    A részletes { -product-name-nowrap } jelentés megjeleníti, hogy szivárgott-e már ki adata, vagy loptak-e el már információkat az online fiókjaiból.
    Figyelmeztetni fogjuk akkor is, ha a fiókja új weboldal betörésekben jelenik meg.
download-firefox-bar-blurb = A { -product-name-nowrap }t a <span class="nowrap">vadonatúj { -brand-name }</span> szállítja Önnek.
download-firefox-bar-link = A { -brand-name } letöltése most
download-firefox-banner-blurb = Vegye át a böngészője irányítását
download-firefox-banner-button = A { -brand-name } letöltése
signup-modal-headline = Regisztráljon a { -product-name-nowrap }ra
signup-modal-blurb = Iratkozzon fel a tejes jelentésre, és figyelmeztetésekre, ha betörés történik, valamint biztonsági tippekre a { -product-name-nowrap }tól.
signup-modal-close = Bezárás
get-your-report = Szerezze meg a jelentését
signup-modal-verify-headline = Erősítse meg a feliratkozását
signup-modal-verify-blurb = Küldtünk egy ellenőrző hivatkozást erre a címre: <span id="submitted-email" class="medium"></span>.
signup-modal-verify-expiration = Ez a hivatkozás 24 órán belül lejár.
signup-modal-verify-resend = Nincs a beérkezett vagy a levélszemét mappában? Újraküldés.
# Appears after Firefox Monitor has sent a verification email to a new user. 
signup-modal-sent = Elküldve
signup-with-fxa = Regisztráljon { -brand-name } fiókkal
form-signup-placeholder = Adja meg az e-mail címet
form-signup-checkbox = Kapja meg a legfrissebbeket a { -brand-Mozilla } és { -brand-name } háza tájáról.
sign-up = Regisztráció
form-signup-error = Érvényes e-mail címnek kell lennie
no-breaches-headline = Eddig jó.
found-breaches-headline = Az Ön adatai egy betörés részét képezték.
unsub-button = Leiratkozás
unsub-survey-headline = Ön már nincs feliratkozva.
unsub-survey-form-label = Miért iratkozik le a { -product-name-nowrap } figyelmeztetésekről?
unsub-reason-1 = Úgy gondolom, hogy a figyelmeztetések nem teszik biztonságosabbá az adataimat
unsub-reason-2 = Túl sok e-mailt kapok a { -product-name-nowrap }tól
unsub-reason-3 = Nem találom értékesnek a szolgáltatást
unsub-reason-4 = Már tettem lépéseket a fiókjaim védelme érdekében
unsub-reason-5 = Egy másik szolgáltatást használok a fiókjaim ellenőrzéséhez
unsub-reason-6 = A fentiek egyike sem
unsub-survey-thankyou = Köszönjük visszajelzését.
unsub-survey-error = Válasszon egyet.
# Link to share Firefox Monitor on Facebook. Positioned next to Facebook logo.
share = Megosztás
# Link to share Firefox Monitor on Twitter. Positioned next to Twitter logo.
tweet = Tweet
download-firefox-quantum = { -brand-Quantum } letöltése
download-firefox-mobile = Mobil { -brand-name } letöltése
# Features here refers to Firefox browser features. 
features = Funkciók
# beta-nightly-developer-edition refers to additional versions of Firefox Browser
beta-nightly-developer-edition = Beta, Nightly, Developer Edition
# The following string contains HTML markup which should not be translated. 
# Without HTML markup: copyright-info = Portions of this content are 1998-2018 by individual mozilla.org contributors. Content available under a Creative Commons license.
copyright-info =
    A tartalom egyes részeire egyéni mozilla.org közreműködők szerzői jogai vonatkoznak: &#x24B8; 1998-2018.<br />
    A tartalom <a href="https://www.mozilla.org/foundation/licensing/website-content/" target="_blank" rel="noopener">Creative Commons licenc</a> alatt érhető el.
# Breach data provided by Have I Been Pwned.
hibp-attribution = A betörési adatokat a { $hibp-link } biztosítja
site-description = A fiókjai kiszivárogtak vagy ellopták őket egy betörés során? Tudjon meg többet a { -product-name } segítségével. Keressen az adatbázisunkban, és iratkozzon fel a figyelmeztetésekre.
