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
-brand-fxa = Firefox-fiók
-brand-Chrome = Chrome
layout-Firefox = { -brand-name }
# Descriptive headline for a column of links where users can give feedback, or get additional information about, Firefox Monitor.
layout-support = Támogatás
# Link that takes the user to a blog post on blog.mozilla.org about the alerts
about-firefox-alerts = A Firefox figyelmeztetéseiről
# Link that takes the user to a Firefox Monitor survey. 
give-feedback = Adjon visszajelzést
terms-and-privacy = Feltételek és adatvédelem
error-scan-page-token = Túl sok e-mail címet próbált ellenőrizni rövid idő alatt. Biztonsági okokból ideiglenesen letiltottuk az új kereséseket. Később újra próbálkozhat.
error-could-not-add-email = Nem sikerült hozzáadni az e-mail címet az adatbázishoz.
error-not-subscribed = Ez az e-mail cím nincs feliratkozva a { -product-name }ra.
error-hibp-throttled = Túl sok kapcsolat a { -brand-HIBP } felé.
error-hibp-connect = Hiba a { -brand-HIBP }hoz kapcsolódáskor.
error-hibp-load-breaches = A adatsértések nem tölthetőek be.
hibp-notify-email-subject = { -product-name } figyelmeztetés: A fiókját érintette egy adatsértés.
home-title = { -product-name }
home-not-found = Az oldal nem található.
oauth-invalid-session = Érvénytelen munkamenet
oauth-confirmed-title = { -product-name } : Feliratkozott
scan-title = { -product-name } : Szkennelési eredmények
user-add-invalid-email = Érvénytelen e-mail cím
user-add-email-verify-subject = A { -product-name } feliratkozásának megerősítése.
user-add-title = { -product-name } : E-mail cím megerősítése
error-headline = Hiba
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
    Ha valaki rendelkezik is a jelszavával, még akkor sem tud belépni.
pwt-headline-6 = Iratkozzon fel a { -product-name-nowrap } figyelmeztetésekre
pwt-summary-6 =
    A weboldalak adatsértéseinek száma növekszik. Amint egy új adatsértés kerül be az adatbázisunkba,
    a { -product-name-nowrap } figyelmeztetést küld – így lépéseket tehet és megvédheti fiókját.
landing-headline = Itt kezdődik a joga, hogy biztonságban legyen a hackerektől.
landing-blurb =
    A { -product-name-nowrap } felvértezi Önt az eszközökkel, hogy biztonságban tartsa a személyes információit.
    Tudja meg, hogy a hackerek mit tudnak Önről, és tudja meg hogyan lehet egy lépéssel előttük.
scan-label = Nézze meg, hogy érintette-e már adatsértés.
scan-placeholder = Adja meg az e-mail címét
scan-privacy = Az e-mail címe nem lesz tárolva.
scan-submit = Az e-mail címe keresése
scan-another-email = Másik e-mail cím szkennelése
scan-featuredbreach-label = Tudja meg, hogy veszélybe került-e a(z) <span class="bold"> { $featuredBreach } </span> fiókja.
sensitive-breach-email-required = Az adatsértés érzékeny információkat érint. E-mailes megerősítés szükséges.
scan-error = Érvényes e-mail címnek kell lennie.
signup-banner-headline = A { -product-name-nowrap } észleli az online fiókjaival szembeni fenyegetéseket.
signup-banner-blurb =
    A részletes { -product-name-nowrap } jelentés megjeleníti, hogy szivárgott-e már ki adata, vagy loptak-e el már információkat az online fiókjaiból.
    Figyelmeztetni fogjuk akkor is, ha a fiókja új weboldal adatsértésekben jelenik meg.
download-firefox-bar-blurb = A { -product-name-nowrap }t a <span class="nowrap">vadonatúj { -brand-name }</span> szállítja Önnek.
download-firefox-bar-link = A { -brand-name } letöltése most
download-firefox-banner-blurb = Vegye át a böngészője irányítását
download-firefox-banner-button = A { -brand-name } letöltése
signup-modal-headline = Regisztráljon a { -product-name-nowrap }ra
signup-modal-blurb = Iratkozzon fel a tejes jelentésre, és figyelmeztetésekre, ha adatsértés történik, valamint biztonsági tippekre a { -product-name-nowrap }tól.
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
found-breaches-headline = Az Ön adatai egy adatsértésben szerepelnek.
no-breaches =
    Az Ön e-mail címe nem jelent meg az alapvető vizsgálatunkban.
    Ez jó hír, de adatsértések bármikor történhetnek, és többet is tehet.
    Iratkozzon fel a { -product-name-nowrap }ra a teljes jelentésért, az adatsértésekkor történő figyelmeztetésekért, valamint a jelszavai védelméről szóló tippekért.
featured-breach-results =
    { $breachCount ->
        [0] A fiókja szerepel a(z) <span class="bold">{ $featuredBreach }</span> adatsértésben, de más ismert adatsértésben nem jelenik meg.
        [one] A fiókja szerepel a(z) <span class="bold">{ $featuredBreach }</span> adatsértésben, és egy másik adatsértésben is.
       *[other] A fiókja szerepel a(z) <span class="bold">{ $featuredBreach }</span> adatsértésben, de más ismert { $breachCount } adatsértésekben is.
    }
featured-breach-not-compromised =
    { $breachCount ->
        [0] { no-breaches }
        [one] A fiókja nem jelent meg a(z) <span class="bold">{ $featuredBreach }</span> adatsértésben, de egy másikban igen.
       *[other] A fiókja nem jelent meg a(z) <span class="bold">{ $featuredBreach }</span> adatsértésben, de { $breachCount } másikban igen.
    }
scan-results =
    { $breachCount ->
        [0] { no-breaches }
        [one] A fiókja { $breachCount } adatsértésben jelent meg.
       *[other] Az e-mail címéhez társított fiókok a következő { $breachCount } adatsértésben jelentek meg.
    }
show-more-breaches = Több megjelenítése
what-to-do-headline = Mi a teendő, ha az Ön információi érintettek egy adatsértésben?
what-to-do-subhead-1 = Módosítsa jelszavait, még a régi fiókok esetén is
what-to-do-blurb-1 =
    Ha nem tud bejelentkezni, lépjen kapcsolatba a webhellyel, és kérdezze meg, hogyan tudja visszaállítani vagy letiltani a fiókját.
    Olyan fiókot lát, amelyet nem ismer? A webhely megváltoztathatta a nevét, vagy más hozhatott létre fiókot Önnek.
what-to-do-subhead-2 = Ha újra felhasznál egy kikerült jelszót, változtassa meg
what-to-do-blurb-2 =
    A hackerek megpróbálhatják újra felhasználni a kikerült jelszavát, hogy más fiókokba jussanak be.
    Hozzon létre különböző jelszót minden webhelyhez, különösen a bankszámlájához,
    e-mail fiókjához és más weboldalakon, ahol személyes adatokat ment el.
what-to-do-subhead-3 = Tegyen további lépéseket a pénzügyi fiókok biztosításához
what-to-do-blurb-3 =
    A legtöbb adatsértés csak e-mail címek és jelszavak kikerülését okozza, de néhány érzékeny pénzügyi adatokat is tartalmaz.
    Ha a bankszámlaszáma, vagy hitelkártyaszáma érintett volt egy adatsértésben, akkor értesítse a bankját a lehetséges csalásról,
    és kövesse a levonásokat, melyeket nem ismer fel.
what-to-do-subhead-4 = Kapjon segítséget a jó jelszavak létrehozásában és biztonságban tartásában.
what-to-do-blurb-4 =
    Az olyan jelszókezelők, mint a 1Password, a LastPass, a Dashlane és a Bitwarden erős jelszavakat
    állítanak elő, biztonságosan tárolják őket, és betöltik azokat a weboldalakon Ön helyett.
# breach-date = the calendar date a particular data theft occurred. 
breach-date = Az adatsértés dátuma:
# compromised accounts = the total number of user accounts exposed in data breach
compromised-accounts = Veszélyeztetett fiókok:
# compromised-data = the kind of user data exposed to hackers in data breach.
compromised-data = Veszélyeztetett adatok:
confirmed = Megerősítve!<br />Ön feliratkozott!
confirmed-blurb = A { -product-name-nowrap } hamarosan e-mailt küld a teljes jelentéssel, és figyelmeztetést fog küldeni, ha egy új bejelentett adatsértésben jelenik meg a fiókja.
confirmed-social-blurb = Ha adatsértés áldozata lett, akkor lehetséges, hogy a barátai, a családja vagy az online kapcsolatai is érintettek. Szóljon nekik a { -product-name-nowrap }ról.
unsub-headline = Leiratkozás a { -product-name-nowrap }ról
unsub-blurb = Ez eltávolítja az e-mail címét a { -product-name-nowrap } listáról, és nem fog több figyelmeztetést kapni, ha új adatsértéseket jelentenek be.
unsub-button = Leiratkozás
fxa-unsub-headline = Leiratkozás a { -product-name } figyelmeztetésekről.
fxa-unsub-blurb =
    Többé nem kap { -product-name } figyelmeztetéseket.
    A { -brand-fxa }ja aktív marad, így más fiókkal kapcsolatos
    értesítéseket még kaphat.
unsub-survey-form-label = Miért iratkozik le a { -product-name-nowrap } figyelmeztetésekről?
unsub-reason-1 = Úgy gondolom, hogy a figyelmeztetések nem teszik biztonságosabbá az adataimat
unsub-reason-2 = Túl sok e-mailt kapok a { -product-name-nowrap }tól
unsub-reason-3 = Nem találom értékesnek a szolgáltatást
unsub-reason-4 = Már tettem lépéseket a fiókjaim védelme érdekében
unsub-reason-5 = Egy másik szolgáltatást használok a fiókjaim ellenőrzéséhez
unsub-reason-6 = A fentiek egyike sem
unsub-survey-thankyou = Köszönjük visszajelzését.
unsub-survey-error = Válasszon egyet.
unsub-survey-headline-v2 = Leiratkozott.
unsub-survey-blurb-v2 =
    Többé nem kap { -product-name } figyelmeztetéseket.
    Rászán egy pillanatot, és válaszol egy kérdésre a tapasztalataival kapcsolatban?
unsub-survey-button = Válasz beküldése
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
# Breach data provided by Have I Been Pwned.
hibp-attribution = Az adatsértési adatokat a { $hibp-link } biztosítja
site-description = A fiókjai kiszivárogtak vagy ellopták őket egy adatsértés során? Tudjon meg többet a { -product-name } segítségével. Keressen az adatbázisunkban, és iratkozzon fel a figyelmeztetésekre.
confirmation-headline = Úton van a { -product-name } jelentése.
confirmation-blurb = Az adatsértések bárkit érinthetnek. Mondja el barátainak és családtagjainak, hogy ellenőrizhessék, hogy biztonságosak-e az online fiókjaik.
share-email = E-mail
# Appears at the end of a list of email-clients and refers to any other unlisted email-client.
share-other = Egyéb
share-twitter = A legtöbb embernek körülbelül 100 online fiókja van. Vannak olyanok, amelyek kikerültek egy adatsértéskor? Tudja meg.
share-facebook-headline = Tudja meg, hogy része volt-e adatsértésnek
share-facebook-blurb = Kikerült-e online fiókja egy adatsértés miatt?
og-site-description = Tudja meg, hogy része volt-e adatsértésnek a { -product-name } segítségével. Iratkozzon fel a figyelmeztetésekre, és kapjon tippeket arról, hogyan tartsa biztonságban a fiókjait.
mozilla-security-blog = { -brand-Mozilla } biztonsági blog
# A header for a list of links to share Firefox Monitor on various social media platforms.
layout-social = Közösségi média
show-all = Összes megjelenítése
fxa-landing-blurb =
    Tudja meg, hogy a hackerek mit tudnak már Önről,
    és hogyan lehet egy lépéssel előttük.
fxa-scan-label = Nézze meg, hogy szerepelt-e adatsértésben.
fxa-welcome-headline = Üdvözli a { -product-name }.
fxa-welcome-blurb = Minden kész, hogy értesítést kapjon, ha a(z) { $userEmail } megjelenik egy adatsértésben.
fxa-scan-another-email = Szeretne ellenőrizni egy másik e-mail címet is?
# Search Firefox Monitor
fxa-scan-submit = { -product-name } keresés
sign-up-to-check = Regisztráció az ellenőrzéshez
sign-in = Bejelentkezés
sign-out = Kijelentkezés
full-report-headline = A { -product-name } jelentése
see-full-report = Teljes jelentés megtekintése
# Manage Firefox Account, link to page where account holders can change their account settings.
manage-fxa = { -brand-fxa } kezelése
fxa-download-firefox-bar-blurb = A { -brand-name }tól. 2× gyorsabb. 30%-kal kevesebb memóriát használt, mint a { -brand-Chrome }.
fxa-download-firefox-bar-link = Letöltés most
fxa-download-firefox-banner-blurb = Jobb, gyorsabb oldalbetöltés, kevesebb memóriával.
user-fb-compromised-headline = A(z) { $userEmail } e-mail cím { $breachName } adatsértésben volt érintett.
guest-fb-compromised-headline = Ez az e-mail cím érintett volt a(z) { $breachName } adatsértésben.
user-zero-breaches-headline = A(z) { $userEmail } e-mail cím egyetlen adatsértésben sem volt érintett.
guest-zero-breaches-headline = Ez az e-mail cím egyetlen adatsértésben sem volt érintett.
user-scan-results-headline =
    { $breachCount ->
        [one] A(z) { $userEmail } e-mail cím 1 adatsértésben volt érintett.
       *[other] A(z) { $userEmail } e-mail cím { $breachCount } adatsértésben volt érintett.
    }
guest-scan-results-headline =
    { $breachCount ->
        [one] Ez az e-mail cím 1 adatsértésben volt érintett.
       *[other] Ez az e-mail cím { $breachCount } adatsértésben volt érintett.
    }
user-no-breaches-blurb = Értesítjük, ha ez az e-mail cím egy új adatsértésben jelenik meg.
guest-no-breaches-blurb =
    Hogy megnézze, hogy szerepel-e az e-mail cím érzékeny betörésekben, hozzon létre egy { -brand-fxa }ot.
    Értesíteni fogjuk, ha ez a cím új adatsértésekben jelenik meg.
user-one-breach-blurb = Ez az adatsértés a következő személyes adatok kikerülését eredményezte.
user-fb-compromised-blurb =
    { $breachCount ->
        [one] Az Ön e-mail címe { $breachCount } további adatsértésben volt érintett.
       *[other] Az Ön e-mail címe { $breachCount } további adatsértésben volt érintett.
    }
user-generic-fb-compromised-blurb =
    { $breachCount ->
        [one] Ez az e-mail cím { $breachCount } további adatsértésben volt érintett.
       *[other] Ez az e-mail cím { $breachCount } további adatsértésben volt érintett.
    }
user-fb-compromised-single =
    Ez az adatsértés a következő személyes adatait fedte fel. Ha még nem tette,
    akkor módosítsa a jelszavait.
user-generic-fb-compromised-single = Ez az adatsértés a következő személyes adatait fedte fel.
guest-fb-compromised-single-v2 =
    Ez az adatsértés a következő személyes adatait fedte fel.
    Hozzon létre egy ingyenes { -brand-fxa }ot a múltbeli adatsértésekről szóló
    teljes jelentéséért, az új adatsértési figyelmeztetésekért, és a többi { -brand-Mozilla }
    szolgáltatással kapcsolatos információért.
guest-fb-compromised-blurb-v2 =
    { $breachCount ->
        [one]
            Ez az e-mail cím { $breachCount } egyéb adatsértésben szerepelt.
            Hozzon létre egy ingyenes { -brand-fxa }ot a múltbeli adatszegésekről szóló
            teljes jelentéséért, az új adatszegési figyelmeztetésekért, és a többi { -brand-Mozilla }
            szolgáltatással kapcsolatos információért.
       *[other]
            Ez az e-mail cím { $breachCount } egyéb adatsértésben szerepelt.
            Hozzon létre egy ingyenes { -brand-fxa }ot a múltbeli adatszegésekről szóló
            teljes jelentéséért, az új adatszegési figyelmeztetésekért, és a többi { -brand-Mozilla }
            szolgáltatással kapcsolatos információért.
    }
user-fb-not-compromised-blurb =
    { $breachCount ->
        [one] A(z) { $breachName } adatsértésben nem szerepelt, de egy másikban megtaláltuk az e-mail címét.
       *[other] A(z) { $breachName } adatsértésben nem szerepelt, de másokban megtaláltuk az e-mail címét.
    }
user-generic-fb-not-compromised-blurb =
    { $breachCount ->
        [one] Ez az e-mail cím nem szerepelt a(z) { $breachName } adatsértésben, de egy másikban megtalálható.
       *[other] Ez az e-mail cím nem szerepelt a(z) { $breachName } adatsértésben, de másokban megtalálható.
    }
guest-fb-not-compromised-blurb-v2 =
    { $breachCount ->
        [one]
            Ez az e-mail cím nem szerepelt a(z) { $breachName } adatsértésben,
            de egy másikban megtalálható. Hozzon létre egy ingyenes { -brand-fxa }ot
            a múltbeli adatsértésekről szóló jelentéséért, az új adatsértések értesítéseiért,
            és más { -brand-Mozilla } szolgáltatásokról szóló információkért.
       *[other]
            Ez az e-mail cím nem szerepelt a(z) { $breachName } adatsértésben,
            de másokban megtalálható. Hozzon létre egy ingyenes { -brand-fxa }ot
            a múltbeli adatsértésekről szóló jelentéséért, az új adatsértések értesítéseiért,
            és más { -brand-Mozilla } szolgáltatásokról szóló információkért.
    }
# While English doesn’t use the actual number of breaches in this sentence,
# you can use {$breachCount} to display the number of breaches in your localization.
user-found-breaches-blurb =
    { $breachCount ->
        [one] Ez az adatsértés a következő személyes adatait fedte fel. Ha még nem tette, cserélje le a jelszavát.
       *[other] Ez az adatsértés a következő személyes adatait fedte fel. Ha még nem tette, cserélje le a jelszavait.
    }
# While English doesn’t use the actual number of breaches in this sentence,
# you can use {$breachCount} to display the number of breaches in your localization.
user-generic-found-breaches-blurb =
    { $breachCount ->
        [one] Ez az adatsértés a következő személyes adatokat fedték fel.
       *[other] Ezek az adatsértések a következő személyes adatokat fedték fel.
    }
have-an-account = Már van fiókja?
signup-banner-sensitive-blurb =
    Tudja meg, hogy a hackerek mit tudnak már Önről, és tanulja meg,
    hogyan legyen egy lépéssel előttük. Kapjon figyelmeztetést, ha a fiókja
    egy új adatsértésben jelenik meg.
fxa-pwt-section-blurb =
    A jelszavak védik a személyes információit az online fiókjaiban. A hackerek
    a rossz szokásokra támaszkodnak, például arra, hogy mindenhol ugyanazt a jelszót használja,
    vagy gyakori kifejezéseket használ (@p@ssw0rd, valaki?), így ha egy fiókot feltörnek,
    akkor többet is fel tudnak.
fxa-pwt-summary-2 =
    A rövid, egyszavas jelszavak könnyen kitalálhatóak a hackerek számára.
    Használjon legalább két szót, valamint betűk, számok és különleges karakterek kombinációját.
fxa-pwt-summary-4 =
    A jelszókezelők, mint a 1Password, a LastPass, a Dashlane és a Bitwarden tárolják a
    jelszavait, és kitöltik azokat Önnnek a weboldalakon. Még az erős jelszavak létrehozásában is segítenek.
fxa-pwt-summary-6 =
    Az adatsértések száma nő. Ha a személyes adatai megjelennek egy új adatsértésben,
    akkor a { -product-name } figyelmeztetést küld – így lépéseket tehet, és megvédheti a fiókjait.
fxa-what-to-do-blurb-1 =
    Ha nem tud bejelentkezni, lépjen kapcsolatba a weboldallal, és
    kérdezze meg hogyan változtathatja meg. Olyan fiókot lát, melyet nem ismer?
    Az adatait eladhatták vagy továbbadhatták. De olyan fiók is lehet, melyet
    elfelejtett, vagy a cég nevet is változtathatott.
fxa-what-to-do-subhead-2 = Ne használja többet a kikerült jelszavát, módosítsa mindenütt, ahol használta.
fxa-wtd-blurb-2 =
    A hackerek megpróbálhatják újra felhasználni ugyanazt a jelszavát és e-mail címét, hogy más 
    fiókokba jussanak be. Hozzon létre különböző jelszót minden fiókhoz, különösen a bankszámlájához,
    e-mail fiókjához és más weboldalakon, ahol személyes adatokat ment el.
fxa-what-to-do-blurb-3 =
    A legtöbb adatsértés csak e-mail címek és jelszavak kikerülését okozza, de néhány érzékeny pénzügyi adatokat is tartalmaz.
    Ha kikerült a bankszámlaszáma vagy hitelkártyaszáma, akkor értesítse a bankját a lehetséges csalásról.
    Kövesse azokat a levonásokat, melyeket nem ismer fel.
fxa-what-to-do-subhead-4 = Szerezzen segítséget, hogy megjegyezze az összes jelszavát, és biztonságban tartsa azokat.
fxa-what-to-do-blurb-4 =
    A jelszókezelők mint a 1Password, a LastPass, a Dashlane és a Bitwarden biztonságosan
    tárolják a jelszavait, és beírják a weboldalakon Ön helyett. Használjon jelszókezelőt
    a telefonján és számítógépén, így nem kell megjegyeznie az összeset.
fb-landing-headline = Nyilvánosságra kerültek-e az adatai a(z) { $breachName } adatsértésben?
copyright = A tartalom egyes részeire a következő vonatkozik: © 1999-{ $year } egyéni mozilla.org közreműködők.
content-available = A tartalom Creative Commons licenc alatt érhető el.
# Alerts is a noun
sign-up-for-alerts = Regisztráció a figyelmeztetésekért
sign-up-for-fxa-alerts = Regisztráció a { -product-name } figyelmeztetésekért
create-free-account =
    Hozzon létre egy ingyenes { -brand-fxa }ot a múltbeli adatsértésekről szóló teljes jelentésért, az új adatsértések
    figyelmeztetéseiért, valamint az egyéb { -brand-Mozilla } szolgáltatásokról szóló információkért.
get-your-report-and-sign-up = Kapja meg a jelentését, és regisztráljon a figyelmeztetésekért.
# Link title
frequently-asked-questions = Gyakran Ismételt Kérdések
about-firefox-monitor = A { -product-name } névjegye
mozilla-dot-org = Mozilla.org
preferences = Beállítások
# Link title.
home = Kezdőlap
# Link title
breaches = Adatsértések
# Link title
security-tips = Biztonsági tippek
fxa-account = { -brand-fxa }
# Aria button message to open menu. "Open Firefox Account Navigation"
open-fxa-menu = A { -brand-fxa } navigáció megnyitása
# Appears above a snippet about the breach most recently reported to Firefox Monitor.
latest-breach = LEGUTÓBB HOZZÁADOTT ADATSÉRTÉS
breach-added = Adatsértés bejelentve:
breach-discovered = Adatsértés felfedezve:
# Link title
more-about-this-breach = További tudnivalók erről az adatsértésről
take-control = Szerezze vissza a személyes adatai feletti ellenőrzést.
cant-stop-hackers = A hackereket nem tudja megállítani. De elkerülheti a rossz szokásokat, amelyek megkönnyítik a dolgukat.
read-more-tips = Olvasson további biztonsági tippeket
how-hackers-work = Értse meg, hogyan dolgoznak a hackerek
monitor-your-online-accounts = Iratkozzon fel az adatsértések figyelésére egy { -brand-fxa }kal.
stay-alert = Figyeljen az új adatsértésekre
if-your-info = Ha az Ön információi megjelennek egy új adatsértésben, akkor figyelmeztetést küldünk Önnek.
search-all-emails = Keresse meg az összes e-mail címét az adatsértésekben, és kapjon figyelmeztetéseket az új fenyegetésekről.
monitor-several-emails = Több e-mail cím figyelése
take-action = Tegyen lépéseket a fiókjai védelmére
keep-your-data-safe = Tudja meg, mit kell tennie, hogy az adatait biztonságban tudja tartani a számítógépes bűnözőktől.
website-breach = Weboldalon történt adatsértés
sensitive-breach = Weboldalon történt érzékeny adatsértés
data-aggregator-breach = Adatgyűjtőben történt adatsértés
unverified-breach = Nem megerősített adatsértés
spam-list-breach = Levélszemét-lista adatsértés
website-breach-plural = Weboldalon történt adatsértések
sensitive-breach-plural = Érzékeny adatsértések
data-aggregator-breach-plural = Adatgyűjtőkben történt adatsértések
unverified-breach-plural = Nem megerősített adatsértések
spam-list-breach-plural = Levélszemétlista adatsértések
what-data = Milyen adatok kerültek veszélybe:
sensitive-sites = Hogyan kezeli a { -product-name } az érzékeny webhelyeket?
sensitive-sites-copy =
    A { -product-name } csak akkor fedi fel az ezekkel az adatsértésekkel kapcsolatos
    fiókokat, ha az e-mail cím megerősítésre került. Ez azt jelenti, hogy csak Ön
    láthatja, hogy szerepelt-e ebben az adatsértésben (hacsak valaki más nem fér
    hozzá az e-mail fiókjához).
delayed-reporting-headline = Miért tartott ilyen sokáig az adatsértés jelentése?
delayed-reporting-copy =
    Néha hónapokra vagy évekre is szükség lehet, amíg az adatsértésekben
    kikerült adatok megjelennek a sötét weben. Az adatsértések akkor kerülnek az adatbázisunkba,
    ha felfedezték és megerősítették őket.
about-fxm-headline = A { -product-name } névjegye
about-fxm-blurb =
    A { -product-name } figyelmezteti, ha az online fiókja szerepelnek egy adatsértésben.
    Tudja meg, hogy adatsértés áldozata lett-e, kapjon figyelmeztetéseket az 
    új adatsértésekről, és tegyen lépéseket az online fiókjai védelmére.
    A { -product-name }t a { -brand-Mozilla } szolgáltatja.
fxm-warns-you =
    A { -product-name } figyelmezteti, ha az e-mail címe kikerült egy online
    adatsértésnél. Lássa a kikerült adatait, és tudja meg, hogyan védheti meg jobban
    az online fiókjait, és kapjon figyelmeztetést, ha az e-mail címe egy új
    adatsértésben jelenik meg.
# How Firefox Monitor works
how-fxm-works = Hogyan működik a { -product-name }
how-fxm-1-headline = Végezzen egy alapvető keresést
how-fxm-1-blurb =
    Keresse ki az e-mail címét a nyilvánosságra került adatsértésekben
    egészen 2007-ig. Az alapvető keresés felfedi a legtöbb adatsértést, de
    azokat nem, melyek érzékeny adatokat tartalmaznak.
how-fxm-2-headline = Iratkozzon fel az adatsértések figyelésére
how-fxm-2-blurb =
    Hozzon létre egy { -brand-fxa }ot, és figyelje az e-mail címét az adatsértésekben.
    Ha megerősíti az e-mail címét, akkor teljes jelentést kap a múltbeli adatsértésekről is,
    beleértve az érzékeny adatsértéseket is.
how-fxm-3-headline = Kapjon értesítéseket a böngészőjében
how-fxm-3-blurb =
    Ha a { -brand-name }t használja, akkor figyelmeztetést fog kapni, ha
    egy adatsértésben érintett webhelyet keres fel. Tudja meg, hogy részese volt-e
    az adatsértésnek, és hogy mit tehet emiatt.
wtd-after-website = Mi a teendő egy webhelyen történő adatsértés után
wtd-after-data-agg = Mi a teendő egy adatgyűjtőben történt adatsértés után
what-is-data-agg = Mi egy adatgyűjtő?
what-is-data-agg-blurb =
    Az adatgyűjtők vagy adatbrókerek információkat gyűjtenek nyilvános rekordokból,
    és megveszik őket más cégektől. Összeválogatják ezeket az adatokat, és más cégeknek
    adják el, marketing célokra. Az ilyen adatsértések ritkán eredményeznek pénzügyi csalást,
    de a hackerek profilozásra és megszemélyesítésre használhatják az adatokat.
protect-your-privacy = Védje meg az online magánszféráját
no-pw-to-change = A webhelyen történő adatsértésekkel ellentétben, itt nincs jelszó amit megváltoztathatna.
avoid-personal-info = Ne használjon személyes információkat a jelszavakban
avoid-personal-info-blurb = A születésnapok, a címek és a családtagok nevei könnyen megtalálhatók online. Ne használja ezeket a szavakat a jelszavakban.

## What to do after data breach tips

change-pw = Változtassa meg a jelszavát
even-for-old = Még a régi fiókok esetén is fontos a jelszavak frissítése.
make-new-pw-unique = Az új jelszó legyen különböző és egyedi
strength-of-your-pw = A jelszavak erőssége közvetlenül befolyásolja az online biztonságát.
create-strong-passwords = Hogyan hozzon létre erős jelszavakat
stop-reusing-pw = Ne használja újra ugyanazt a jelszót
create-unique-pw = Hozzon létre egyedi jelszavakat, és mentse el őket biztonságosan, például egy jelszókezelőben.
five-myths = 5 mítosz a jelszókezelőkről
create-a-fxa = Hozzon létre egy { -brand-fxa }ot a teljes adatsértési jelentésért, és hogy figyelmeztetéseket kapjon.
feat-security-tips = Biztonsági tippek a fiókjai védelméhez
feat-sensitive = Speciális keresés az érzékeny adatsértésekben
feat-enroll-multiple = Több e-mail cím beállítása az adatsértés-figyelésnél
sign-up-for-fxa = Hozzon létre egy { -brand-fxa }ot
# This string is shown beneath each of the user’s email addresses to indicate
# how many known breaches that email address was found in. 
appears-in-x-breaches =
    { $breachCount ->
        [one] { $breachCount } ismert adatsértésben szerepel.
       *[other] { $breachCount } ismert adatsértésben szerepel.
    }
see-if-breached = Nézze meg, hogy szerepelt-e online adatsértésben.
check-for-breaches = Adatsértések keresése
find-out-what-hackers-know = Tudja meg, hogy a hackerek mit tudnak már Önről. Ismerje meg, hogyan tarthat egy lépéssel előttük.
search-for-your-email = Keresse meg az e-mail címét a nyilvánosságra került adatsértésekben, egészen 2007-ig.
back-to-top = Vissza a tetejére
comm-opt-0 = Küldjenek nekem e-mailt, ha az e-mail címem megjelenik egy adatsértésben.
comm-opt-1 = Az összes adatsértési figyelmeztetés elküldései erre a címre: { $primaryEmail }.
stop-monitoring-this = Az e-mail cím figyelésének leállítása.
resend-verification = Ellenőrző e-mail újraküldése
add-new-email = Új e-mail cím hozzáadása
send-verification = Ellenőrző e-mail küldése
# This string is a header on the user preferences page and
# appears above a check-box list of user options which allow
# the user to choose whether or not they want to receive breach
# alerts for all of their monitored email addresses to a single 
# email address.
global-communication = Globális kommunikáció
breach-summary = Adatsértés összefoglalója
show-breaches-for-this-email = Az összes adatsértés megjelenítése ehhez az e-mail címhez.
link-change-primary = Elsődleges e-mail cím módosítása
remove-fxm = { -product-name } eltávolítása
remove-fxm-blurb =
    A { -product-name } figyelmeztetések kikapcsolása. A { -brand-fxa }ja aktív marad, és más
    a fiókjával kapcsolatos üzeneteket még kaphat.
manage-email-addresses = E-mail címek kezelése
latest-breach-link = Nézze meg, hogy szerepel-e ebben az adatsértésben
welcome-back = Üdvözöljük újra, { $userName }!
welcome-user = Üdvözöljük, { $userName }!
breach-alert-subject = A { -product-name } megtalálta az e-mail címét egy új adatsértésben.
your-info-was-discovered-headline = Felfedezték az Ön adatait egy új adatsértés során.
your-info-was-discovered-blurb =
    Ön feliratkozott a { -product-name } figyelmeztetéseire,
    ha megjelenik az e-mail címe egy adatsértésben. Itt van amit erről az esetről tudunk.
what-to-do-after-breach = Mi a teendő egy adatsértés után
ba-next-step-1 = Cserélje le jelszavát egy erős, egyedi jelszóra.
ba-next-step-blurb-1 =
    Egy erős jelszó kis- és nagybetűk kombinációját használja,
    speciális karakterekkel és számokkal. Nem tartalmaz személyes adatokat,
    például a címét, születésnapját vagy családnevét.
ba-next-step-2 = Többé ne használja a kikerült jelszót.
ba-next-step-blurb-2 =
    A számítógépes bűnözők megtalálhatják a jelszavát a sötét weben, és
    más fiókokba is bejelentkezhetnek vele. A fiókjai védelmének legjobb módja,
    ha mindegyikhez egyedi jelszót használ.
ba-next-step-3 = Kapjon segítséget a jobb jelszavak létrehozásához és azok biztonságos tárolásához.
ba-next-step-blurb-3 =
    Használjon egy jelszókezelőt, hogy erős, egyedi jelszavakat hozzon létre. A jelszókezelők biztonságosan tárolják
    a bejelentkezéseit, így elérheti azokat az összes eszközén.
faq1 = Nem ismerem ezt a céget vagy weboldalt? Miért szerepelek ebben az adatsértésben?
faq2 = Miért tartott ilyen sokáig, hogy értesüljek erről az adatsértésről?
faq3 = Honnan tudom, hogy ez az e-mail valóban a { -product-name }tól érkezett?
new-breaches-found =
    { $breachCount ->
        [one] { $breachCount } ÚJ ADATSÉRTÉS TALÁLHATÓ
       *[other] { $breachCount } ÚJ ADATSÉRTÉS TALÁLHATÓ
    }
sign-up-headline-1 = Kapjon folyamatos figyelmeztetéseket a { -brand-fxa }jával.
account-not-required = A { -brand-name } böngésző sem szükséges a { -brand-fxa }hoz. Információkat kaphat a { -brand-Mozilla } szolgáltatásokról.
get-alerted = Kapjon figyelmeztetéseket az új adatsértésekről.
was-your-info-exposed = Kikerültek-e az adatai a(z) { $breachName } adatsértésben?
find-out-if = Tudja meg, hogy kikerültek-e az adatai ebben az adatsértésben.
fb-not-comp = Ez az e-mail cím nem szerepelt a(z) { $breachName } adatsértésben.
other-breaches-found =
    { $breachCount ->
        [one] Azonban { $breachCount } másik adatsértésben szerepelt.
       *[other] Azonban { $breachCount } másik adatsértésben szerepelt.
    }
fb-comp-only = Ez az e-mail cím megjelent a(z) { $breachName } adatsértésben.
fb-comp-and-others =
    { $breachCount ->
        [one] Ez az e-mail cím { $breachCount } adatsértésben jelent meg, köztük ebben is: { $breachName }.
       *[other] Ez az e-mail cím { $breachCount } adatsértésben jelent meg, köztük ebben is: { $breachName }.
    }
no-other-breaches-found = Az alapvető keresés nem talált más adatsértést.
no-results-blurb = Sajnáljuk, ez az adatsértés nem szerepel az adatbázisunkban.
all-breaches-headline = Az összes adatsértés a { -product-name }ban
search-breaches = Adatsértések keresése
# "Appears in-page as: Showing: All Breaches"
currently-showing = Megjelenítés:
all-breaches = Összes adatsértés

## Updated error messages

error-bot-headline = Keresések ideiglenesen felfüggesztve
error-bot-blurb =
    Attól tartunk, hogy Ön egy bot lehet, mert több e-mail
    címre is keresett rövid idő alatt. Egyelőre blokkoltuk az újabb
    kereséseket. Később megpróbálhatja újra.
error-csrf-headline = A munkamenet lejárt
error-csrf-blurb = Nyomja meg a böngésző vissza gombját, töltse újra az oldalt és próbálja újra.
error-invalid-unsub = Hogyan iratkozhat le a { -product-name } figyelmeztetésekről
error-invalid-unsub-blurb =
    Le kell iratkoznia az egyik Önnek
    küldött { -product-name } e-mailről. Nézze meg a bejövő leveleit a
    { -brand-team-email } címtől. Válassza az e-mail alján lévő leiratkozási hivatkozást.
login-link-pre = Van már fiókja?
login-link = Bejelentkezés
# This string is displayed under a large numeral that indicates the total number
# of email address a user has signed up for monitoring. Don’t add $emails to
# your localization, because it would result in the number showing twice.
email-addresses-being-monitored =
    { $emails ->
        [one] Figyelt e-mail cím
       *[other] Figyelt e-mail címek
    }
# This string is displayed under a large numeral that indicates the total number
# of data breaches that have exposed the user’s information. Don’t add $breaches to
# your localization, because it would result in the number showing twice.
data-breaches-exposed =
    { $breaches ->
        [one] Adatsértés miatt kikerültek az adatai
       *[other] Adatsértések miatt kikerültek az adatai
    }
# This string is displayed under a large numeral that indicates the total number
# of data breaches that exposed a user’s password. Don’t add $passwords to
# your localization, because it would result in the number showing twice.
passwords-exposed =
    { $passwords ->
        [one] Jelszó került ki adatsértés miatt
       *[other] Jelszó került ki adatsértés miatt
    }
# Button
see-additional-breaches = További adatsértések megtekintése
# A button on the All Breaches page that restores all of the breaches
# back to the page if the user has filtered some of them out.
see-all-breaches = Összes adatsértés megtekintése
scan-results-known-breaches =
    { $breachCount ->
        [one] Ez az e-mail cím 1 ismert adatsértésben jelent meg.
       *[other] Ez az e-mail cím { $breachCount } ismert adatsértésben jelent meg.
    }
# This string is shown at the top of the scan results page and is followed
# by the email address that the user searched.
# In page, it reads "Results for: searchedEmail@monitor.com"
results-for = Találatok erre: { $userEmail }
other-monitored-emails = Egyéb megfigyelt e-mail címek
email-verification-required = E-mail ellenőrzés szükséges
fxa-primary-email = { -brand-fxa } e-mail cím – Elsődleges
what-is-a-website-breach = Mi az a weboldalon történt adatsértés?
website-breach-blurb = Weboldalon történő adatsértés akkor történik, ha számítógépes bűnözők ellopják, lemásolják vagy nyilvánosságra hozzák az online fiókok személyes adatait. Ez általában annak a következménye, hogy a hackerek gyenge pontot találnak a weboldal biztonságában. Adatsértések akkor is előfordulhatnak, ha a fiókadatok véletlenül szivárognak ki.
security-tips-headline = Biztonsági tippek, hogy megvédje magát a hackerekkel szemben
steps-to-protect = Lépések az online személyazonossága megvédéséhez
take-further-steps = Tegyen további lépéseket a személyazonossága megvédéséhez
alert-about-new-breaches = Értesítsen a jövőbeli adatsértésekről
see-if-youve-been-part = Nézze meg, hogy szerepel-e online adatsértésben.
get-ongoing-breach-monitoring = Kapjon rendszeres adatsértési jelentéseket több e-mail címről.
# This is a button and follows a headline reading "Was your info exposed in the ___ breach?"
find-out = Tudja meg
new-unsub-error = Le kell iratkoznia egy a { -product-name }tól érkezett e-mailen.
other-known-breaches-found =
    { $breachCount ->
        [one] Azonban { $breachCount } egyéb ismert adatsértésben is megjelent.
       *[other] Azonban { $breachCount } egyéb ismert adatsértésben is megjelent.
    }
# This string appears on breach detail pages and is followed by a list
# of data classes that the breach exposed.
additional-information-including = További információk, beleértve:
# Title
email-addresses-title = E-mail címek
# This is a standardized breach overview blurb that appears on all breach detail pages.
# $breachTitle is the name of the breached company or website.
# $breachDate and $addedDate are calendar dates.
breach-overview = A(z) { $breachTitle } adatsértés áldozata lett ekkor: { $breachDate }. Amint az adatsértés felfedezésre és megerősítésre került, hozzáadásra került az adatbázisunkhoz, ekkor: { $addedDate }.
# Title appearing on the Preferences dashboard. 
monitor-preferences = { -product-short-name } beállítások
# When a user is signed in, this appears in the drop down menu 
# and is followed by the user's primary Firefox Account email. 
signed-in-as = Bejelentkezett, mint { $userEmail }
# Appears on the All Breaches page and is followed by a list of filter options
# that a user can filter the visible breaches by.
filter-by = Szűrés kategória szerint:
# Title that appears in the mobile menu bar and opens the mobile menu when clicked.
menu = Menü
to-affected-email = Adatsértési figyelmeztetések elküldése az érintett e-mail címre
# This string appears in a banner at the top of each page and is followed by a "Learn More" link.
join-firefox = Megvédheti a magánszféráját. Csatlakozzon a { -brand-name }hoz.
# Link title
learn-more-link = További információk.
