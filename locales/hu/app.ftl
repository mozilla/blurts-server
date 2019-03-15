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
-brand-fxa = Firefox fiók
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
error-hibp-load-breaches = A adatszegések nem tölthetőek be.
hibp-notify-email-subject = { -product-name } figyelmeztetés: A fiókját érintette egy adatszegés.
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
    A weboldalak adatszegéseinek száma növekszik. Amint egy új adatszegés kerül be az adatbázisunkba,
    a { -product-name-nowrap } figyelmeztetést küld – így lépéseket tehet és megvédheti fiókját.
landing-headline = Itt kezdődik a joga, hogy biztonságban legyen a hackerektől.
landing-blurb =
    A { -product-name-nowrap } felvértezi Önt az eszközökkel, hogy biztonságban tartsa a személyes információit.
    Tudja meg, hogy a hackerek mit tudnak Önről, és tudja meg hogyan lehet egy lépéssel előttük.
scan-label = Nézze meg, hogy érintette-e már adatszegés.
scan-placeholder = Adja meg az e-mail címét
scan-privacy = Az e-mail címe nem lesz tárolva.
scan-submit = Az e-mail címe keresése
scan-another-email = Másik e-mail cím szkennelése
scan-featuredbreach-label = Tudja meg, hogy veszélybe került-e a(z) <span class="bold"> { $featuredBreach } </span> fiókja.
sensitive-breach-email-required = Az adatszegés érzékeny információkat érint. E-mailes megerősítés szükséges.
scan-error = Érvényes e-mail címnek kell lennie.
signup-banner-headline = A { -product-name-nowrap } észleli az online fiókjaival szembeni fenyegetéseket.
signup-banner-blurb =
    A részletes { -product-name-nowrap } jelentés megjeleníti, hogy szivárgott-e már ki adata, vagy loptak-e el már információkat az online fiókjaiból.
    Figyelmeztetni fogjuk akkor is, ha a fiókja új weboldal adatszegésekben jelenik meg.
download-firefox-bar-blurb = A { -product-name-nowrap }t a <span class="nowrap">vadonatúj { -brand-name }</span> szállítja Önnek.
download-firefox-bar-link = A { -brand-name } letöltése most
download-firefox-banner-blurb = Vegye át a böngészője irányítását
download-firefox-banner-button = A { -brand-name } letöltése
signup-modal-headline = Regisztráljon a { -product-name-nowrap }ra
signup-modal-blurb = Iratkozzon fel a tejes jelentésre, és figyelmeztetésekre, ha adatszegés történik, valamint biztonsági tippekre a { -product-name-nowrap }tól.
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
found-breaches-headline = Az Ön adatai egy adatszegésben szerepelnek.
no-breaches =
    Az Ön e-mail címe nem jelent meg az alapvető vizsgálatunkban.
    Ez jó hír, de adatszegések bármikor történhetnek, és többet is tehet.
    Iratkozzon fel a { -product-name-nowrap }ra a teljes jelentésért, a betörésekkor történő figyelmeztetésekért, valamint a jelszavai védelméről szóló tippekért.
featured-breach-results =
    { $breachCount ->
        [0] A fiókja szerepel a(z) <span class="bold">{ $featuredBreach }</span> adatszegésben, de más ismert adatszegésben nem jelenik meg.
        [one] A fiókja szerepel a(z) <span class="bold">{ $featuredBreach }</span> adatszegésben, és egy másik adatszegésben is.
       *[other] A fiókja szerepel a(z) <span class="bold">{ $featuredBreach }</span> adatszegésben, de más ismert { $breachCount } adatszegésekben is.
    }
featured-breach-not-compromised =
    { $breachCount ->
        [0] { no-breaches }
        [one] A fiókja nem jelent meg a(z) <span class="bold">{ $featuredBreach }</span> adatszegésben, de egy másikban igen.
       *[other] A fiókja nem jelent meg a(z) <span class="bold">{ $featuredBreach }</span> adatszegésben, de { $breachCount } másikban igen.
    }
scan-results =
    { $breachCount ->
        [0] { no-breaches }
        [one] A fiókja { $breachCount } adatszegésben jelent meg.
       *[other] Az e-mail címéhez társított fiókok a következő { $breachCount } adatszegésben jelentek meg.
    }
show-more-breaches = Több megjelenítése
what-to-do-headline = Mi a teendő, ha az Ön információi érintettek egy adatszegésben?
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
    A legtöbb adatszegés csak e-mail címek és jelszavak kikerülését okozza, de néhány érzékeny pénzügyi adatokat is tartalmaz.
    Ha a bankszámlaszáma, vagy hitelkártyaszáma érintett volt egy adatszegésben, akkor értesítse a bankját a lehetséges csalásról,
    és kövesse a levonásokat, melyeket nem ismer fel.
what-to-do-subhead-4 = Kapjon segítséget a jó jelszavak létrehozásában és biztonságban tartásában.
what-to-do-blurb-4 =
    Az olyan jelszókezelők, mint a 1Password, a LastPass, a Dashlane és a Bitwarden erős jelszavakat
    állítanak elő, biztonságosan tárolják őket, és betöltik azokat a weboldalakon Ön helyett.
# breach-date = the calendar date a particular data theft occurred. 
breach-date = Az adatszegés dátuma:
# compromised accounts = the total number of user accounts exposed in data breach
compromised-accounts = Veszélyeztetett fiókok:
# compromised-data = the kind of user data exposed to hackers in data breach.
compromised-data = Veszélyeztetett adatok:
confirmed = Megerősítve!<br />Ön feliratkozott!
confirmed-blurb = A { -product-name-nowrap } hamarosan e-mailt küld a teljes jelentéssel, és figyelmeztetést fog küldeni, ha egy új bejelentett adatszegésben jelenik meg a fiókja.
confirmed-social-blurb = Ha adatszegés áldozata lett, akkor lehetséges, hogy a barátai, a családja vagy az online kapcsolatai is érintettek. Szóljon nekik a { -product-name-nowrap }ról.
unsub-headline = Leiratkozás a { -product-name-nowrap }ról
unsub-blurb = Ez eltávolítja az e-mail címét a { -product-name-nowrap } listáról, és nem fog több figyelmeztetést kapni, ha új adatszegéseket jelentenek be.
unsub-button = Leiratkozás
fxa-unsub-headline = Leiratkozás a { -product-name } figyelmeztetésekről.
fxa-unsub-blurb =
    Többé nem kap { -product-name } figyelmeztetéseket.
    A { -brand-fxa } fiókja aktív marad, így más fiókkal kapcsolatos
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
hibp-attribution = Az adatszegési adatokat a { $hibp-link } biztosítja
site-description = A fiókjai kiszivárogtak vagy ellopták őket egy adatszegés során? Tudjon meg többet a { -product-name } segítségével. Keressen az adatbázisunkban, és iratkozzon fel a figyelmeztetésekre.
confirmation-headline = Úton van a { -product-name } jelentése.
confirmation-blurb = Az adatszegések bárkit érinthetnek. Mondja el barátainak és családtagjainak, hogy ellenőrizhessék, hogy biztonságosak-e az online fiókjaik.
share-email = E-mail
# Appears at the end of a list of email-clients and refers to any other unlisted email-client.
share-other = Egyéb
share-twitter = A legtöbb embernek körülbelül 100 online fiókja van. Vannak olyanok, amelyek kikerültek egy adatszegéskor? Tudja meg.
share-facebook-headline = Tudja meg, hogy része volt-e adatszegésnek
share-facebook-blurb = Kikerült-e online fiókja egy adatszegés miatt?
og-site-description = Tudja meg, hogy része volt-e adatszegésnek a { -product-name } segítségével. Iratkozzon fel a figyelmeztetésekre, és kapjon tippeket arról, hogyan tartsa biztonságban a fiókjait.
mozilla-security-blog = { -brand-Mozilla } biztonsági blog
# A header for a list of links to share Firefox Monitor on various social media platforms.
layout-social = Közösségi média
show-all = Összes megjelenítése
fxa-landing-blurb =
    Tudja meg, hogy a hackerek mit tudnak már Önről,
    és hogyan lehet egy lépéssel előttük.
fxa-scan-label = Nézze meg, hogy szerepelt-e adatszegésben.
fxa-welcome-headline = Üdvözli a { -product-name }.
fxa-welcome-blurb = Minden kész, hogy értesítést kapjon, ha a(z) { $userEmail } megjelenik egy adatszegésben.
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
user-fb-compromised-headline = A(z) { $userEmail } e-mail cím { $breachName } adatszegésben volt érintett.
guest-fb-compromised-headline = Ez az e-mail cím érintett volt a(z) { $breachName } adatszegésben.
user-zero-breaches-headline = A(z) { $userEmail } e-mail cím egyetlen adatszegésben sem volt érintett.
guest-zero-breaches-headline = Ez az e-mail cím egyetlen adatszegésben sem volt érintett.
user-scan-results-headline =
    { $breachCount ->
        [one] A(z) { $userEmail } e-mail cím 1 adatszegésben volt érintett.
       *[other] A(z) { $userEmail } e-mail cím { $breachCount } adatszegésben volt érintett.
    }
guest-scan-results-headline =
    { $breachCount ->
        [one] Ez az e-mail cím 1 adatszegésben volt érintett.
       *[other] Ez az e-mail cím { $breachCount } adatszegésben volt érintett.
    }
user-no-breaches-blurb = Értesítjük, ha ez az e-mail cím egy új adatszegésben jelenik meg.
guest-no-breaches-blurb =
    Hogy megnézze, hogy szerepel-e az e-mail cím érzékeny betörésekben, hozzon létre egy { -brand-fxa }ot.
    Értesíteni fogjuk, ha ez a cím új adatszegésekben jelenik meg.
user-one-breach-blurb = Ez az adatszegés a következő személyes adatok kikerülését eredményezte.
user-fb-compromised-blurb =
    { $breachCount ->
        [one] Az Ön e-mail címe { $breachCount } további adatszegésben volt érintett.
       *[other] Az Ön e-mail címe { $breachCount } további adatszegésben volt érintett.
    }
user-generic-fb-compromised-blurb =
    { $breachCount ->
        [one] Ez az e-mail cím { $breachCount } további adatszegésben volt érintett.
       *[other] Ez az e-mail cím { $breachCount } további adatszegésben volt érintett.
    }
user-fb-compromised-single =
    Ez az adatszegés a következő személyes adatait tárta fel. Ha még nem tette,
    akkor módosítsa a jelszavait.
user-generic-fb-compromised-single = Ez az adatszegés a következő személyes adatait tárta fel.
guest-fb-compromised-single-v2 =
    Ez az adatszegés a következő személyes adatait tárta fel.
    Hozzon létre egy ingyenes { -brand-fxa } fiókot a múltbeli adatszegésekről szóló
    teljes jelentéséért, az új adatszegési figyelmeztetésekért, és a többi { -brand-Mozilla }
    szolgáltatással kapcsolatos információért.
guest-fb-compromised-blurb-v2 =
    { $breachCount ->
        [one]
            Ez az e-mail cím { $breachCount } egyéb adatszegésben szerepelt.
            Hozzon létre egy ingyenes { -brand-fxa } fiókot a múltbeli adatszegésekről szóló
            teljes jelentéséért, az új adatszegési figyelmeztetésekért, és a többi { -brand-Mozilla }
            szolgáltatással kapcsolatos információért.
       *[other]
            Ez az e-mail cím { $breachCount } egyéb adatszegésben szerepelt.
            Hozzon létre egy ingyenes { -brand-fxa } fiókot a múltbeli adatszegésekről szóló
            teljes jelentéséért, az új adatszegési figyelmeztetésekért, és a többi { -brand-Mozilla }
            szolgáltatással kapcsolatos információért.
    }
user-fb-not-compromised-blurb =
    { $breachCount ->
        [one] A(z) { $breachName } adatszegésben nem szerepelt, de egy másikban megtaláltuk az e-mail címét.
       *[other] A(z) { $breachName } adatszegésben nem szerepelt, de másokban megtaláltuk az e-mail címét.
    }
user-generic-fb-not-compromised-blurb =
    { $breachCount ->
        [one] Ez az e-mail cím nem szerepelt a(z) { $breachName } adatszegésben, de egy másikban megtalálható.
       *[other] Ez az e-mail cím nem szerepelt a(z) { $breachName } adatszegésben, de másokban megtalálható.
    }
guest-fb-not-compromised-blurb-v2 =
    { $breachCount ->
        [one]
            Ez az e-mail cím nem szerepelt a(z) { $breachName } adatszegésben,
            de egy másikban megtalálható. Hozzon létre egy ingyenes { -brand-fxa }ot
            a múltbeli adatszegésekről szóló jelentéséért, az új adatszegések értesítéseiért,
            és más { -brand-Mozilla } szolgáltatásokról szóló információkért.
       *[other]
            Ez az e-mail cím nem szerepelt a(z) { $breachName } adatszegésben,
            de másokban megtalálható. Hozzon létre egy ingyenes { -brand-fxa }ot
            a múltbeli adatszegésekről szóló jelentéséért, az új adatszegések értesítéseiért,
            és más { -brand-Mozilla } szolgáltatásokról szóló információkért.
    }
# While English doesn’t use the actual number of breaches in this sentence,
# you can use {$breachCount} to display the number of breaches in your localization.
user-found-breaches-blurb =
    { $breachCount ->
        [one] Ez az adatszegés a következő személyes adatait tárta fel. Ha még nem tette, cserélje le a jelszavát.
       *[other] Ez az adatszegés a következő személyes adatait tárta fel. Ha még nem tette, cserélje le a jelszavait.
    }
# While English doesn’t use the actual number of breaches in this sentence,
# you can use {$breachCount} to display the number of breaches in your localization.
user-generic-found-breaches-blurb =
    { $breachCount ->
        [one] Ez az adatszegés a következő személyes adatokat tárta fel.
       *[other] Ezek az adatszegések a következő személyes adatokat tárták fel.
    }
have-an-account = Már van fiókja?
signup-banner-sensitive-blurb =
    Tudja meg, hogy a hackerek mit tudnak már Önről, és tanulja meg,
    hogyan legyen egy lépéssel előttük. Kapjon figyelmeztetést, ha a fiókja
    egy új adatszegésben jelenik meg.
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
    Az adatszegések száma nő. Ha a személyes adatai megjelennek egy új adatszegésben,
    akkor a { -product-name } figyelmeztetést küld – így lépéseket tehet, és megvédheti a fiókjait.
fxa-what-to-do-blurb-1 =
    Ha nem tud bejelentkezni, lépjen kapcsolatba a weboldallal, és
    kérdezze meg hogyan változtathatja meg. Olyan fiókot lát, melyet nem ismer?
    Az adatait eladhatták vagy továbbadhatták. De olyan fiók is lehet, melyet
    elfelejtett, vagy a cég nevet is változtathatott.
fxa-what-to-do-subhead-2 = Ne használja többet a kikerült jelszavát, módosítsa mindenütt, ahol használta.
fxa-what-to-do-subhead-4 = Szerezzen segítséget, hogy megjegyezze az összes jelszavát, és biztonságban tartsa azokat.
fb-landing-headline = Nyilvánosságra kerültek-e az adatai a(z) { $breachName } adatszegésben?
copyright = A tartalom egyes részeire a következő vonatkozik: © 1999-{ $year } egyéni mozilla.org közreműködők.
content-available = A tartalom Creative Commons licenc alatt érhető el.
# Alerts is a noun
sign-up-for-alerts = Regisztráció a figyelmeztetésekért
sign-up-for-fxa-alerts = Regisztráció a { -product-name } figyelmeztetésekért
get-your-report-and-sign-up = Kapja meg a jelentését, és regisztráljon a figyelmeztetésekért.
# Link title
frequently-asked-questions = Gyakran Ismételt Kérdések
