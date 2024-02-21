# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.


# Strings for the main app


## The following messages are brand and should be kept entirely in English
## unless otherwise indicated.

-product-name = Mozilla Monitor
-product-name-nowrap = <span class="nowrap">{ -product-name }</span>
-product-short-name = Monitor
-brand-name = Firefox
-brand-Mozilla = Mozilla
-brand-HIBP = Have I Been Pwned
-brand-fxa = Firefox-fiók
-brand-pocket = Pocket
-brand-lockwise = Firefox Lockwise
-brand-send = Firefox Send
-brand-fpn = Firefox Private Network

##

GitHub-link-title = GitHub
error-scan-page-token = Túl sok e-mail-címet próbált ellenőrizni rövid idő alatt. Biztonsági okokból ideiglenesen letiltottuk az új kereséseket. Később újra próbálkozhat.
error-could-not-add-email = Nem sikerült hozzáadni az e-mail-címet az adatbázishoz.
error-not-subscribed = Ez az e-mail-cím nincs feliratkozva a { -product-name }ra.
error-hibp-throttled = Túl sok kapcsolat a { -brand-HIBP } felé.
error-hibp-connect = Hiba a { -brand-HIBP }hoz kapcsolódáskor.
error-hibp-load-breaches = A adatvédelmi incidensek nem tölthetőek be.
error-must-be-signed-in = Be kell jelentkeznie a { -brand-fxa }jába.
error-to-finish-verifying = Az e-mail ellenőrzésének befejezéséhez a { -product-name }ban, be kell jelentkeznie az elsődleges e-mail címéhez tartozó fiókjába.
home-title = { -product-name }
home-not-found = Az oldal nem található.
oauth-invalid-session = Érvénytelen munkamenet
scan-title = { -product-name } : Szkennelési eredmények
user-add-invalid-email = Érvénytelen e-mail-cím
user-add-too-many-emails = A lehető legnagyobb számú e-mail-címet figyeli.
user-add-email-verify-subject = A { -product-name } feliratkozásának megerősítése.
user-add-duplicate-email = Ez az e-mail-cím már hozzáadásra került a { -product-name }hoz.
# Variables:
#   $preferencesLink (String) - Link to preferences
#   $userEmail (String) - User email address
user-add-duplicate-email-part-2 = Keresse fel a { $preferencesLink } oldalt, és ellenőrizze a(z) { $userEmail } állapotát.
user-add-verification-email-just-sent = Nem küldhető ilyen gyorsan újabb megerősítő e-mail. Próbálja újra később.
user-add-unknown-error = Hiba történt egy másik e-mail-cím hozzáadása során. Próbálja újra később.
user-delete-unknown-error = Hiba történt egy e-mail-cím eltávolításakor. Próbálja újra később.
error-headline = Hiba
user-verify-token-error = Az ellenőrzési token lejárt.
user-verify-email-report-subject = Az Ön { -product-name } jelentése
user-unsubscribe-token-error = A leiratkozáshoz token szükséges.
user-unsubscribe-token-email-error = A leiratkozáshoz token és emailHash szükséges.
user-unsubscribe-title = { -product-name } : Leiratkozás
pwt-section-headline = Erősebb jelszavak = jobb védelem
landing-headline = Itt kezdődik a joga, hogy biztonságban legyen a hackerektől.
scan-placeholder = Adja meg az e-mail-címét
scan-submit = Az e-mail-címének keresése
scan-error = Érvényes e-mail-címnek kell lennie.
download-firefox-banner-button = A { -brand-name } letöltése
# Appears after Firefox Monitor has sent a verification email to a new user.
signup-modal-sent = Elküldve
sign-up = Regisztráció
form-signup-error = Érvényes e-mail-címnek kell lennie
# breach-date = the calendar date a particular data theft occurred.
breach-date = Az adatvédelmi incidens dátuma:
# compromised accounts = the total number of user accounts exposed in data breach
compromised-accounts = Veszélyeztetett fiókok:
# compromised-data = the kind of user data exposed to hackers in data breach.
compromised-data = Veszélyeztetett adatok:
unsub-headline = Leiratkozás a { -product-name-nowrap }ról
unsub-blurb = Ez eltávolítja az e-mail-címét a { -product-name-nowrap } listáról, és nem fog több figyelmeztetést kapni, ha új adatvédelmi incidenseket jelentenek be.
unsub-button = Leiratkozás
# Breach data provided by Have I Been Pwned.
# Variables:
#   $hibp-link (String) - Link to Have I Been Pwned
hibp-attribution = Az adatvédelmi incidensek adatait a { $hibp-link } biztosítja
share-twitter = A legtöbb embernek körülbelül 100 online fiókja van. Vannak olyanok, amelyek kikerültek egy adatvédelmi incidens során? Tudja meg.
share-facebook-headline = Tudja meg, hogy része volt-e adatvédelmi incidensnek
share-facebook-blurb = Kikerült-e online fiókja egy adatvédelmi incidens miatt?
og-site-description = Tudja meg, hogy része volt-e adatvédelmi incidensnek a { -product-name } segítségével. Iratkozzon fel a figyelmeztetésekre, és kapjon tippeket arról, hogyan tartsa biztonságban a fiókjait.
show-all = Összes megjelenítése
fxa-scan-another-email = Szeretne ellenőrizni egy másik e-mail-címet is?
sign-out = Kijelentkezés
# Manage Firefox Account, link to page where account holders can change their account settings.
manage-fxa = { -brand-fxa } kezelése
have-an-account = Már van fiókja?
fxa-pwt-summary-2 =
    A rövid, egyszavas jelszavak könnyen kitalálhatóak a hackerek számára.
    Használjon legalább két szót, valamint betűk, számok és különleges karakterek kombinációját.
fxa-pwt-summary-4 =
    A jelszókezelők, mint a 1Password, a LastPass, a Dashlane és a Bitwarden tárolják a
    jelszavait, és kitöltik azokat Önnnek a weboldalakon. Még az erős jelszavak létrehozásában is segítenek.
fxa-pwt-summary-6 =
    Az adatvédelmi incidensek száma nő. Ha a személyes adatai megjelennek egy új adatvédelmi incidensben,
    akkor a { -product-name } figyelmeztetést küld – így lépéseket tehet, és megvédheti a fiókjait.
fxa-what-to-do-blurb-1 =
    Ha nem tud bejelentkezni, lépjen kapcsolatba a weboldallal, és
    kérdezze meg hogyan változtathatja meg. Olyan fiókot lát, melyet nem ismer?
    Az adatait eladhatták vagy továbbadhatták. De olyan fiók is lehet, melyet
    elfelejtett, vagy a cég nevet is változtathatott.
fxa-what-to-do-subhead-2 = Ne használja többet a kikerült jelszavát, módosítsa mindenütt, ahol használta.
fxa-wtd-blurb-2 =
    A hackerek megpróbálhatják újra felhasználni ugyanazt a jelszavát és e-mail-címét, hogy más 
    fiókokba jussanak be. Hozzon létre különböző jelszót minden fiókhoz, különösen a bankszámlájához,
    e-mail fiókjához és más weboldalakon, ahol személyes adatokat ment el.
fxa-what-to-do-blurb-3 =
    A legtöbb adatvédelmi incidens csak e-mail-címek és jelszavak kikerülését okozza, de néhány érzékeny pénzügyi adatokat is tartalmaz.
    Ha kikerült a bankszámlaszáma vagy hitelkártyaszáma, akkor értesítse a bankját a lehetséges csalásról.
    Kövesse azokat a levonásokat, melyeket nem ismer fel.
fxa-what-to-do-subhead-4 = Szerezzen segítséget, hogy megjegyezze az összes jelszavát, és biztonságban tartsa azokat.
fxa-what-to-do-blurb-4 =
    A jelszókezelők mint a 1Password, a LastPass, a Dashlane és a Bitwarden biztonságosan
    tárolják a jelszavait, és beírják a weboldalakon Ön helyett. Használjon jelszókezelőt
    a telefonján és számítógépén, így nem kell megjegyeznie az összeset.
# Alerts is a noun
sign-up-for-alerts = Regisztráció a figyelmeztetésekért
# Link title
frequently-asked-questions = Gyakran Ismételt Kérdések
about-firefox-monitor = A { -product-name } névjegye
# Link title
preferences = Beállítások
# Link title
home = Kezdőlap
# Link title
security-tips = Biztonsági tippek
fxa-account = { -brand-fxa }
# Aria button message to open menu. "Open Firefox Account Navigation"
open-fxa-menu = A { -brand-fxa } navigáció megnyitása
# Appears above a snippet about the breach most recently reported to Firefox Monitor.
latest-breach = LEGUTÓBB HOZZÁADOTT ADATVÉDELMI INCIDENS
# Link title
more-about-this-breach = További tudnivalók erről az adatvédelmi incidensről
take-control = Szerezze vissza a személyes adatai feletti ellenőrzést.
cant-stop-hackers = A hackereket nem tudja megállítani. De elkerülheti a rossz szokásokat, amelyek megkönnyítik a dolgukat.
read-more-tips = Olvasson további biztonsági tippeket
how-hackers-work = Értse meg, hogyan dolgoznak a hackerek
monitor-your-online-accounts = Iratkozzon fel az adatvédelmi incidensek figyelésére egy { -brand-fxa }kal.
stay-alert = Figyeljen az új adatvédelmi incidensekre
if-your-info = Ha az Ön információi megjelennek egy új adatvédelmi incidensben, akkor figyelmeztetést küldünk Önnek.
search-all-emails = Keresse meg az összes e-mail-címét az adatvédelmi incidensekben, és kapjon figyelmeztetéseket az új fenyegetésekről.
monitor-several-emails = Több e-mail-cím figyelése
take-action = Tegyen lépéseket a fiókjai védelmére
keep-your-data-safe = Tudja meg, mit kell tennie, hogy az adatait biztonságban tudja tartani a számítógépes bűnözőktől.
website-breach = Weboldalon történt adatvédelmi incidensek
sensitive-breach = Weboldalon történt érzékeny adatvédelmi incidens
data-aggregator-breach = Adatgyűjtőben történt adatvédelmi incidens
unverified-breach = Nem megerősített adatvédelmi incidens
spam-list-breach = Levélszemét-lista adatvédelmi incidens
website-breach-plural = Weboldalon történt adatvédelmi incidens
sensitive-breach-plural = Bizalmas adatvédelmi incidensek
data-aggregator-breach-plural = Adatgyűjtőkben történt adatvédelmi incidensek
unverified-breach-plural = Nem megerősített adatvédelmi incidensek
spam-list-breach-plural = Levélszemétlista adatvédelmi incidensek
what-data = Milyen adatok kerültek veszélybe:
sensitive-sites = Hogyan kezeli a { -product-name } az érzékeny webhelyeket?
sensitive-sites-copy =
    A { -product-name } csak akkor fedi fel az ezekkel az adatvédelmi incidensekkel
    kapcsolatos fiókokat, ha az e-mail-cím megerősítésre került. Ez azt jelenti, hogy
    csak Ön láthatja, hogy szerepelt-e ebben az adatvédelmi incidensben (hacsak valaki
    más nem fér hozzá az e-mail-fiókjához).
delayed-reporting-headline = Miért tartott ilyen sokáig az adatvédelmi incidens jelentése?
delayed-reporting-copy =
    Néha hónapokra vagy évekre is szükség lehet, amíg az adatvédelmi incidensekben
    kikerült adatok megjelennek a sötét weben. Az adatvédelmi incidensek akkor kerülnek
    az adatbázisunkba, ha felfedezték és megerősítették őket.
about-fxm-headline = A { -product-name } névjegye
about-fxm-blurb =
    A { -product-name } figyelmezteti, ha az online fiókja szerepelnek egy adatvédelmi
    incidensben. Tudja meg, hogy adatvédelmi incidens áldozata lett-e, kapjon
    figyelmeztetéseket az új adatvédelmi incidensekről, és tegyen lépéseket az online
    fiókjai védelmére. A { -product-name }t a { -brand-Mozilla } szolgáltatja.
fxm-warns-you =
    A { -product-name } figyelmezteti, ha az e-mail-címe kikerült egy online
    adatvédelmi incidensnél. Lássa a kikerült adatait, és tudja meg, hogyan
    védheti meg jobban az online fiókjait, és kapjon figyelmeztetést, ha az
    e-mail-címe egy új adatvédelmi incidensben jelenik meg.
# How Firefox Monitor works
how-fxm-works = Hogyan működik a { -product-name }
how-fxm-1-headline = Végezzen egy alapvető keresést
how-fxm-1-blurb =
    Keresse ki az e-mail-címét a nyilvánosságra került adatvédelmi incidensekben
    egészen 2007-ig. Az alapvető keresés felfedi a legtöbb adatvédelmi incidenst,
    de azokat nem, melyek bizalmas adatokat tartalmaznak.
how-fxm-2-headline = Iratkozzon fel az adatvédelmi incidensek figyelésére
how-fxm-2-blurb =
    Hozzon létre egy { -brand-fxa }ot, és figyelje az e-mail-címét az adatvédelmi
    incidensekben. Ha megerősíti az e-mail-címét, akkor teljes jelentést kap a múltbeli
    adatvédelmi incidensekről is, beleértve a bizalmas adatvédelmi incidenseket is.
how-fxm-3-headline = Kapjon értesítéseket a böngészőjében
how-fxm-3-blurb =
    Ha a { -brand-name }t használja, akkor figyelmeztetést fog kapni, ha
    egy adatvédelmi incidensben érintett webhelyet keres fel. Tudja meg, hogy részese volt-e
    az adatvédelmi incidensnek, és hogy mit tehet emiatt.
wtd-after-website = Mi a teendő egy webhelyen történő adatvédelmi incidens után
wtd-after-data-agg = Mi a teendő egy adatgyűjtőben történt adatvédelmi incidens után
what-is-data-agg = Mi egy adatgyűjtő?
what-is-data-agg-blurb =
    Az adatgyűjtők vagy adatbrókerek információkat gyűjtenek nyilvános rekordokból, és
    megveszik őket más cégektől. Összeválogatják ezeket az adatokat, és más cégeknek adják el,
    marketing célokra. Az ilyen adatvédelmi incidensek ritkán eredményeznek pénzügyi csalást,
    de a hackerek profilozásra és megszemélyesítésre használhatják az adatokat.
protect-your-privacy = Védje meg az online magánszféráját
no-pw-to-change = A webhelyen történő adatvédelmi incidensekkel ellentétben, itt nincs jelszó amit megváltoztathatna.
avoid-personal-info = Ne használjon személyes információkat a jelszavakban
avoid-personal-info-blurb = A születésnapok, a címek és a családtagok nevei könnyen megtalálhatók online. Ne használja ezeket a szavakat a jelszavakban.

## What to do after data breach tips

change-pw = Változtassa meg a jelszavát
change-pw-site = Jelszó cseréje ennél az oldalnál
even-for-old = Még a régi fiókok esetén is fontos a jelszavak frissítése.
make-new-pw-unique = Az új jelszó legyen különböző és egyedi
strength-of-your-pw = A jelszavak erőssége közvetlenül befolyásolja az online biztonságát.
create-strong-passwords = Hogyan hozzon létre erős jelszavakat
stop-reusing-pw = Ne használja újra ugyanazt a jelszót
create-unique-pw = Hozzon létre egyedi jelszavakat, és mentse el őket biztonságosan, például egy jelszókezelőben.
five-myths = 5 mítosz a jelszókezelőkről
create-a-fxa = Hozzon létre egy { -brand-fxa }ot a adatvédelmi incidensek teljes jelentéséért, és hogy figyelmeztetéseket kapjon.
feat-security-tips = Biztonsági tippek a fiókjai védelméhez
feat-sensitive = Speciális keresés a bizalmas adatvédelmi incidensekben
feat-enroll-multiple = Több e-mail-cím beállítása az adatvédelmi incidensek figyelésénél
# This string is shown beneath each of the user’s email addresses to indicate
# how many known breaches that email address was found in.
# Variables:
#   $breachCount (Integer) - Number of breaches
appears-in-x-breaches =
    { $breachCount ->
        [one] { $breachCount } ismert adatvédelmi incidensben szerepel.
       *[other] { $breachCount } ismert adatvédelmi incidensben szerepel.
    }
check-for-breaches = Adatvédelmi incidensek keresése
find-out-what-hackers-know = Tudja meg, hogy a hackerek mit tudnak már Önről. Ismerje meg, hogyan tarthat egy lépéssel előttük.
get-email-alerts = Maradjon biztonságban: e-mail értesítéseket kap, ha adatai ismert adatvédelmi incidensben érintettek
search-for-your-email = Keresse meg az e-mail-címét a nyilvánosságra került adatvédelmi incidensekben, egészen 2007-ig.
back-to-top = Vissza a tetejére
comm-opt-0 = Küldjenek nekem e-mailt, ha az e-mail-címem megjelenik egy adatvédelmi incidensben.
# Variables:
#   $primaryEmail (String) - User primary email address
comm-opt-1 = Az összes adatvédelmi incidens figyelmeztetésének elküldései erre a címre: { $primaryEmail }.
stop-monitoring-this = Az e-mail-cím figyelésének leállítása.
resend-verification = Ellenőrző e-mail újraküldése
add-new-email = Új e-mail-cím hozzáadása
send-verification = Ellenőrző e-mail küldése
# This string is a header on the user preferences page and
# appears above a check-box list of user options which allow
# the user to choose whether or not they want to receive breach
# alerts for all of their monitored email addresses to a single
# email address.
breach-summary = Adatvédelmi incidens összefoglalója
show-breaches-for-this-email = Az e-mail-címhez tartozó összes adatvédelmi incidens megjelenítése.
link-change-primary = Elsődleges e-mail-cím módosítása
remove-fxm = { -product-name } eltávolítása
remove-fxm-blurb =
    A { -product-name } figyelmeztetések kikapcsolása. A { -brand-fxa }ja aktív marad, és más
    a fiókjával kapcsolatos üzeneteket még kaphat.
# Button title
manage-email-addresses = E-mail-címek kezelése
# Link title
latest-breach-link = Nézze meg, hogy szerepel-e ebben az adatvédelmi incidensben

## Variables:
##   $userName (String) - Username

welcome-back = Üdvözöljük újra, { $userName }!
welcome-user = Üdvözöljük, { $userName }!

##

breach-alert-subject = A { -product-name } megtalálta az e-mail-címét egy új adatvédelmi incidensben.
your-info-was-discovered-headline = Felfedezték az Ön adatait egy új adatvédelmi incidens során.
your-info-was-discovered-blurb =
    Ön feliratkozott a { -product-name } figyelmeztetéseire,
    ha megjelenik az e-mail-címe egy adatvédelmi incidensben. Itt van amit erről az esetről tudunk.
what-to-do-after-breach = Mi a teendő egy adatvédelmi incidens után
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
faq1 = Nem ismerem ezt a céget vagy weboldalt? Miért szerepelek ebben az adatvédelmi incidensben?
faq2 = Miért tartott ilyen sokáig, hogy értesüljek erről az adatvédelmi incidensről?
faq3 = Honnan tudom, hogy ez az e-mail valóban a { -product-name }tól érkezett?
# Variables:
#   $breachCount (Integer) - Number of breaches
new-breaches-found =
    { $breachCount ->
        [one] { $breachCount } ÚJ ADATVÉDELMI INCIDENS TALÁLHATÓ
       *[other] { $breachCount } ÚJ ADATVÉDELMI INCIDENS TALÁLHATÓ
    }
sign-up-headline-1 = Kapjon folyamatos figyelmeztetéseket a { -brand-fxa }jával.
account-not-required = A { -brand-name } böngésző sem szükséges a { -brand-fxa }hoz. Információkat kaphat a { -brand-Mozilla } szolgáltatásokról.

## Variables:
##   $breachName (String) - Number of the breach

was-your-info-exposed = Kikerültek-e az adatai a(z) { $breachName } adatvédelmi incidensben?
fb-not-comp = Ez az e-mail-cím nem szerepelt a(z) { $breachName } adatvédelmi incidensben.
# Variables:
#   $breachCount (Integer) - Number of breaches
other-breaches-found =
    { $breachCount ->
        [one] Azonban { $breachCount } másik adatvédelmi incidensben szerepelt.
       *[other] Azonban { $breachCount } másik adatvédelmi incidensben szerepelt.
    }
fb-comp-only = Ez az e-mail-cím megjelent a(z) { $breachName } adatvédelmi incidensben.
# Variables:
#   $breachCount (Integer) - Number of breaches
fb-comp-and-others =
    { $breachCount ->
        [one] Ez az e-mail-cím { $breachCount } adatvédelmi incidensben jelent meg, köztük ebben is: { $breachName }.
       *[other] Ez az e-mail-cím { $breachCount } adatvédelmi incidensben jelent meg, köztük ebben is: { $breachName }.
    }

##

no-other-breaches-found = Az alapvető keresés nem talált más adatvédelmi incidenst.
no-results-blurb = Sajnáljuk, ez az adatvédelmi incidens nem szerepel az adatbázisunkban.
# This string contains nested markup that is later used to style and link the text inside of it.
# Please do not modify or remove "<a>", "</a>", "<span>" and "</span>".
facebook-breach-note =
    <span>Az e-mail-címe nem jelenik meg ebbe a szivárgásban,
    de a telefonszáma sérülékeny lehet.</span> Egyes érintett fiókok
    úgy kompromittálódtak, hogy a telefonszámok és más személyes adatok
    szerepelnek benne, de az e-mail-címek nem. Ha valaha is volt Facebook-fiókja
    – még akkor is, ha már nem használja –, akkor azt ajánljuk, hogy
    végezze el a lenti lépéseket, hogy megvédje magát
# This string contains nested markup that is later used to style and link the text inside of it.
# Please do not modify or remove "<a>", "</a>", "<span>" and "</span>".
facebook-breach-what-to-do-1-headline = <span>Állítsa adatait „Csak én” vagy más nem nyilvános beállításra a <a>Facebook-profiljában</a>.</span>
facebook-breach-what-to-do-1-copy =
    A szivárgás során a hackerek olyan profilinformációkat mentettek le,
    melyek „nyilvánosként” vagy „barátokkal megosztottként” voltak beállítva.
    Az információk egyéb adatokkal kombinálhatók, hogy több személyes
    információt vagy fiókot érjenek le.
# This string contains nested markup that is later used to style and link the text inside of it.
# Please do not modify or remove "<a>", "</a>", "<span>" and "</span>".
facebook-breach-what-to-do-2-headline =
    <span>Módosítsa a jelszavát, a PIN-kódját vagy más a <a>mobiltelefonszámával kapcsolatos</a>
    biztonsági adatot a SIM-felcserélés megakadályozása érdekében</span>.
facebook-breach-what-to-do-2-copy =
    A SIM-felcserélés vagy SIM-eltérítés az, amikor egy hacker
    telefonszámokat, születési dátumokat és más adatokat használ, hogy átvegye
    valaki telefonszámát és így feltörje az e-mail-fiókját, közösségi média és pénzügyi fiókjait.
facebook-breach-what-to-do-3 = Tekintse meg az összes ajánlást a Facebook adatszivárgási oldalunkon
# "Appears in-page as: Showing: All Breaches"
currently-showing = Megjelenítés:

## Updated error messages

error-bot-headline = Keresések ideiglenesen felfüggesztve
error-bot-blurb =
    Attól tartunk, hogy Ön egy bot lehet, mert több e-mail-címre
    is keresett rövid idő alatt. Egyelőre blokkoltuk az újabb
    kereséseket. Később megpróbálhatja újra.
error-csrf-headline = A munkamenet lejárt
error-csrf-blurb = Nyomja meg a böngésző vissza gombját, töltse újra az oldalt és próbálja újra.
error-invalid-unsub = Hogyan iratkozhat le a { -product-name } figyelmeztetésekről
error-invalid-unsub-blurb =
    Le kell iratkoznia az egyik Önnek
    küldött { -product-name } e-mailről. Nézze meg a bejövő leveleit a
    { -brand-team-email } címtől. Válassza az e-mail alján lévő leiratkozási hivatkozást.
# This string is displayed under a large numeral that indicates the total number
# of email address a user has signed up for monitoring. Don’t add $emails to
# your localization, because it would result in the number showing twice.
email-addresses-being-monitored =
    { $emails ->
        [one] Figyelt e-mail-cím
       *[other] Figyelt e-mail-cím
    }
# This string is displayed under a large numeral that indicates the total number
# of data breaches that exposed a user’s password. Don’t add $passwords to
# your localization, because it would result in the number showing twice.
passwords-exposed =
    { $passwords ->
        [one] Jelszó került ki adatvédelmi incidens miatt
       *[other] Jelszó került ki adatvédelmi incidens miatt
    }
# This string is displayed under a large numeral that indicates the total number
# of data breaches that have exposed the user’s information. Don’t add $breaches to
# your localization, because it would result in the number showing twice.
known-data-breaches-exposed =
    { $breaches ->
        [one] Ismert adatvédelmi incidensben kerültek ki az információi
       *[other] Ismert adatvédelmi incidensben kerültek ki az információi
    }
# Button
see-additional-breaches = További adatvédelmi incidensek megtekintése
# Variables:
#   $breachCount (Integer) - Number of breaches
scan-results-known-breaches =
    { $breachCount ->
        [one] Ez az e-mail cím 1 ismert adatvédelmi incidensben jelent meg.
       *[other] Ez az e-mail cím { $breachCount } ismert adatvédelmi incidensben jelent meg.
    }
# This string is shown at the top of the scan results page and is followed
# by the email address that the user searched.
# In page, it reads "Results for: searchedEmail@monitor.com"
# Variables:
#   $userEmail (String) - User email address
results-for = Találatok erre: { $userEmail }
other-monitored-emails = Egyéb megfigyelt e-mail-címek
email-verification-required = E-mail ellenőrzés szükséges
fxa-primary-email = { -brand-fxa } e-mail-cím – Elsődleges
what-is-a-website-breach = Mi az a weboldalon történt adatvédelmi incidens?
website-breach-blurb = Weboldalon történő adatvédelmi incidens akkor történik, ha számítógépes bűnözők ellopják, lemásolják vagy nyilvánosságra hozzák az online fiókok személyes adatait. Ez általában annak a következménye, hogy a hackerek gyenge pontot találnak a weboldal biztonságában. Adatvédelmi incidensek akkor is előfordulhatnak, ha a fiókadatok véletlenül szivárognak ki.
security-tips-headline = Biztonsági tippek, hogy megvédje magát a hackerekkel szemben
steps-to-protect = Lépések az online személyazonossága megvédéséhez
take-further-steps = Tegyen további lépéseket a személyazonossága megvédéséhez
alert-about-new-breaches = Értesítsen a jövőbeli adatvédelmi incidensekről
see-if-youve-been-part = Nézze meg, hogy szerepel-e online adatvédelmi incidensben.
get-ongoing-breach-monitoring = Kapjon rendszeres adatvédelmi incidensjelentéseket több e-mail-címről.
# This is a button and follows a headline reading "Was your info exposed in the ___ breach?"
find-out = Tudja meg
new-unsub-error = Le kell iratkoznia egy a { -product-name }tól érkezett e-mailen.
# Variables:
#   $breachCount (Integer) - Number of breaches
other-known-breaches-found =
    { $breachCount ->
        [one] Azonban { $breachCount } egyéb ismert adatvédelmi incidensben is megjelent.
       *[other] Azonban { $breachCount } egyéb ismert adatvédelmi incidensben is megjelent.
    }
# This string appears on breach detail pages and is followed by a list
# of data classes that the breach exposed.
additional-information-including = További információk, beleértve:
# Title
email-addresses-title = E-mail-címek
# This is a section headline on the breach detail page that appears above
# a short summary about the breach.
breach-overview-title = Áttekintés
# This is a standardized breach overview blurb that appears on all breach detail pages.
# $breachTitle is the name of the breached company or website.
# $breachDate and $addedDate are calendar dates.
breach-overview-new = A(z) { $breachTitle } adatvédelmi incidens áldozata lett ekkor: { $breachDate }. Amint az adatvédelmi incidens felfedezésre és megerősítésre került, hozzáadásra került az adatbázisunkhoz, ekkor: { $addedDate }.
# Title appearing on the Preferences dashboard.
monitor-preferences = { -product-short-name } beállítások
# When a user is signed in, this appears in the drop down menu
# and is followed by the user's primary Firefox Account email.
# Variables:
#   $userEmail (String) - User email address
signed-in-as = Bejelentkezett, mint { $userEmail }
# Appears on the All Breaches page and is followed by a list of filter options
# that a user can filter the visible breaches by.
filter-by = Szűrés kategória szerint:
# Title that appears in the mobile menu bar and opens the mobile menu when clicked.
menu = Menü
to-affected-email = Adatvédelmi incidensfigyelmeztetések elküldése az érintett e-mail-címre
# This string appears in a banner at the top of each page and is followed by a "Learn More" link.
join-firefox = Megvédheti a magánszféráját. Csatlakozzon a { -brand-name }hoz.
# Link title
learn-more-link = További információk.
email-sent = E-mail elküldve!
# Form title
want-to-add = Hozzáad egy másik e-mail-címet?
# This is part of a confirmation message that appears after a user has submitted
# the form to add an additional email to Firefox Monitor.
# Variables:
#   $userEmail (String) - User email address
verify-the-link = Erősítse meg a(z) { $userEmail } címre küldött hivatkozást, hogy hozzáadja a { -product-name }hoz.

## These are part of a confirmation page that appears after a user has verified
## an additional email to Firefox Monitor.

email-verified = E-mail-cím sikeresen megerősítve.
# Variables:
#   $email (String) - User email address
email-added-to-subscription = Értesítjük, ha a(z) { $email } megjelenik egy adatvédelmi incidensben.
# This message is displayed after the user has verified their email address.
# { $nestedSignInLink } is replaced by a link, using sign-in-nested as text ("sign in" for English).
email-verified-view-dashboard = Hogy megtekintse és kezelje az összes e-mail-címet, amelynél figyelésre iratkozott fel, { $nestedSignInLink }.
# This message is used as a text for the subscribe link in email-verified-view-dashboard
sign-in-nested = jelentkezzen be

##

# This is part of a confirmation message that appears after a user has submited the
# form to add an additional email to Firefox Monitor. { $preferencesLink } is a link
# to the Preferences page. The code and text for the link is generated elsewhere
# using the { preferences } string.
# Variables:
#   $preferencesLink (String) - Link to preferences
manage-all-emails = Az e-mail-címeit a { $preferencesLink }ban kezelheti.
# This string is a header on the user preferences page and
# appears above a check-box list of user options which allow
# the user to choose whether or not they want to receive breach
# alerts for all of their monitored email addresses to a single
# email address.
breach-alert-notifications = Adatvédelmi incidensek riasztási értesítései
# This string is a label for the calendar date a breach is added to the database
# and is followed by that date.
breach-added-label = Adatvédelmi incidens hozzáadva:
how-hackers-work-desc = Védje a jelszavakat a számítógépes bűnözőktől, mert ez az, ami a legjobban érdekli őket.
what-to-do-after-breach-desc = Zárolja a fiókjait, hogy ne kerüljenek rossz kezekbe az adatai.
create-strong-passwords-desc = Válasszon erős, biztonságos és nehezen kitalálható jelszavakat.
steps-to-protect-desc = Ismerje meg a leggyakoribb fenyegetéseket, és tudja meg, hogy mire kell figyelnie.
five-myths-desc = Ismerje meg, hogyan kerülheti el azokat a rossz szokásokat a jelszavainál, amelyek megkönnyítik a hackerek munkáját.
take-further-steps-desc = Tudja meg hogyan csökkentheti a személyazonosság-lopással kapcsolatos kockázatokat, hogy megakadályozza az anyagi veszteségeket.
# This message appears after a user has successfully updated their communication settings.
changes-saved = Módosítások mentve.
# Section headline
rec-section-headline = Mi a teendő ezzel az adatvédelmi incidenssel?
rec-section-subhead = Javasoljuk, hogy tegye meg ezeket a lépéseket a személyes adatai biztonságának és a digitális személyazonosságának védelme érdekében.
# Section headline
rec-section-headline-no-pw = Mit tegyen a személyes adatainak védelme érdekében?
rec-section-subhead-no-pw = Bár a jelszavak nem kerültek ki ebben az adatvédelmi incidensben, még mindig tehet többet a személyes adatai védelme érdekében.
# Button
see-additional-recs = További javaslatok megtekintése

## This string contains nested markup that becomes a link later in the code.
## Please do not modify or remove "<a>" and "</a>".

# Variables:
#   $affectedEmail (String) - User email address
resolve-top-notification = A(z) { $affectedEmail } megjelent ebben az adatvédelmi incidensben. <a>Mik a további teendők?</a>
# Variables:
#   $numAffectedEmails (Integer) - Number of affected email address
resolve-top-notification-plural =
    { $numAffectedEmails ->
        [one] { $numAffectedEmails } e-mail-címe jelent meg ebben az adatvédelmi incidensben. <a>Mik a további teendők?</a>
       *[other] { $numAffectedEmails } e-mail-címe jelent meg ebben az adatvédelmi incidensben. <a>Mik a további teendők?</a>
    }

##

marking-this-subhead = Az adatvédelmi incidens megjelölése megoldottként
# This string contains nested markup that is later used to style the text inside of it.
# Please do not modify or remove "<span>" and "</span>".
marking-this-body =
    <span>Amint megtette a lépéseket, kezelheti ezt az adatvédelmi incidenst</span>,
    megjelölheti megoldottként. A saját vezérlőpultjáról továbbra is elérheti 
    az adatvédelmi incidens részleteit.
mark-as-resolve-button = Megjelölés megoldottként
marked-as-resolved-label = Megjelölve megoldottként
undo-button = Visszavonás
confirmation-1-subhead = Szép! Most oldotta meg az első adatvédelmi incidensét.
confirmation-1-body = Tartsa meg a lendületet. Nézze meg a vezérlőpultot, hogy van-e még tennivaló.
confirmation-2-subhead = Nesze nektek hackerek!
confirmation-2-body = Fontos lépéseket tesz az online fiókjai védelmének érdekében.
confirmation-3-subhead = Még egy lecsapva. Szép munka!
# This string contains nested markup that becomes a link later in the code.
# Please do not modify or remove "<a>" and "</a>".
confirmation-3-body = Az új jelszava egyedi, erős és nehezen kitalálható? <a>Tudja meg</a>
generic-confirmation-subhead = Ez az adatvédelmi incidens megoldottként lett megjelölve
# Variables:
#   $numUnresolvedBreaches (Integer) - Number of resolved breaches
generic-confirmation-message =
    { $numUnresolvedBreaches ->
        [one] A fennmaradt adatvédelmi incidens megtekintéséhez ugorjon a vezérlőpulthoz.
       *[other] Az összes fennmaradt adatvédelmi incidens megtekintéséhez ugorjon a vezérlőpulthoz.
    }
return-to-breach-details-link = Vissza az adatvédelmi incidens részleteihez
go-to-dashboard-link = Ugrás a vezérlőpulthoz
# This string appears above a breach resolution progress bar and indicates
# the percentage of breaches a user has resolved. For instance, "27% complete".
# Variables:
#   $percentComplete (String) - Completion percentage
progress-percent-complete = { $percentComplete }% kész
# This string appears in the purple callouts at the top of the user dashboard and shows
# the total number of breaches a user has resolved. For instance, "5 Resolved".
# Variables:
#   $numResolvedBreaches (Integer) - Number of resolved breaches
num-resolved =
    { $numResolvedBreaches ->
        [one] { $numResolvedBreaches } megoldva
       *[other] { $numResolvedBreaches } megoldva
    }
progress-intro-subhead = Új a { -product-name }ban: Adatvédelmi incidensek megjelölése megoldottként
progress-intro-message =
    Az adatvédelmi incidens részleteinek áttekintése és a személyes információi érdekében 
    tett védelmi lépések megtétele után, megjelölheti az adatvédelmi incidenseket megoldottként.
# Variables:
#   $numResolvedBreaches (Integer) - Number of resolved breaches
#   $numTotalBreaches (Integer) - Total number of breaches
progress-status =
    { $numTotalBreaches ->
        [one] { $numResolvedBreaches } / { $numTotalBreaches } adatvédelmi incidens megjelölve megoldottként
       *[other] { $numResolvedBreaches } / { $numTotalBreaches } adatvédelmi incidens megjelölve megoldottként
    }
progress-complete = Az összes ismert adatvédelmi incidens megjelölve megoldottként

## These strings contain nested markup that is later used to style the text inside of it.
## Please do not modify or remove "<span>" and "</span>".

progress-message-1 =
    <span>Nagyszerű kezdés!</span> Nézze meg a fennmaradó adatvédelmi incidenseket, és 
    tudja meg milyen lépéseket kell tennie.
progress-message-2 =
    <span>Csak így tovább!</span> Az apró változtatások, mint a jelszavai frissítése, nagy hatással 
    vannak a személyes adatai biztonságban tartására.
progress-message-3 = <span>Szép munka, az adatvédelmi incidensek megoldva!</span> Csak így tovább, még néhány van hátra.
progress-message-4 = <span>Már majdnem kész!</span> Közel a célvonal.
progress-complete-message =
    <span>Jó érzés, ugye?</span> Ha folytatni akarja, akkor itt az alkalom, hogy frissítse 
    a többi bejelentkezését, és erősebb jelszavakat használjon.

##

resolve-this-breach-link = Ezen adatvédelmi incidens megoldása
# This string appears in resolved breach cards and is followed by
# the date the user marked the breach as resolved.
marked-resolved = Megjelölve megoldottként:
hide-resolved-button = Megoldottak elrejtése
show-resolved-button = Megoldottak megjelenítése
# Variables:
#   $numPasswords (Integer) - Number of exposed passwords
unresolved-passwords-exposed =
    { $numPasswords ->
        [one] Megoldatlan adatvédelmi incidensekben kikerült jelszó
       *[other] Megoldatlan adatvédelmi incidensekben kikerült jelszó
    }
# Variables:
#   $numResolvedBreaches (Integer) - Number of resolved breaches
known-data-breaches-resolved =
    { $numResolvedBreaches ->
        [one] Megoldottként megjelölt adatvédelmi incidens
       *[other] Megoldottként megjelölt adatvédelmi incidens
    }
# A status indicator that appears in the top right corner of new breach cards
new-breach = Új
mobile-promo-headline = Hozza el a { -brand-name(case: "accusative") } telefonjára és táblagépére
mobile-promo-body = Gyors, privát és biztonságos böngészés bárhová is menjen. Keresse meg a { -brand-name(case: "accusative") } a Google Play és az App Store áruházban.
mobile-promo-cta = Szerezze meg a { -brand-name(case: "accusative") } Androidra és iOS-re
promo-lockwise-headline = Vigye magával a jelszavait bárhová
lockwise-promo-body = Kövesse nyomon bejelentkezéseit az összes eszközén. Érje el azokat biztonságosan a számítógépéről, telefonjáról vagy táblagépéről.
promo-lockwise-cta = { -brand-lockwise } beszerzése
fpn-promo-headline = Rejtse el a helyét a weboldalak és nyomkövetők elől
promo-fpn-body = A { -brand-fpn } félrevezeti a weboldalakat és adatgyűjtőket, melyek profilozzák Önt a hirdetésekkel, azáltal, hogy elrejti a valódi IP-címét.
promo-fpn-cta = { -brand-fpn } beszerzése
monitor-promo-headline = Tudjon meg többet az új adatvédelmi incidensekről
monitor-promo-body = Kapjon értesítést, ha a személyes adatai kikerülnek egy ismert adatvédelmi incidensben.
ecosystem-promo-headline = Védje meg az online életét az adatvédelmet előre helyező termékeinkkel
ecosystem-promo-body = Az összes { -brand-name } termék betartja a személyes adatokra vonatkozó ígéretünket: Gyűjts kevesebbet. Tartsd biztonságban. Nincsenek titkok.
promo-ecosystem-cta = Összes termék megtekintése
steps-to-resolve-headline = Lépések az adatvédelmi incidens megoldása érdekében
vpn-promo-headline = Itt az ideje, hogy felturbózza az online biztonságát.
vpn-promo-copy = A { -brand-Mozilla } virtuális magánhálózata segít megvédeni az internetkapcsolatát a hackerek és kémek ellen.
vpn-promo-cta = { -brand-mozilla-vpn } beszerzése
vpn-promo-headline-new = Takarítson meg 50%-ot az éves előfizetéssel
vpn-promo-copy-new = Védje meg online adatait – és válasszon egy Önnek megfelelő VPN-előfizetést.

## VPN promotional banner.  HTML tags should not be translated, e.g. `<em>`

# Variables:
#   $ip-location (String) - User's IP location is determined dynamically by 3rd-party,
#                           eg: "Your location: Los Angeles, CA".  The 3rd-party service
#                           provides its own localization.
vpn-banner-location = Az Ön tartózkodási helye: { $ip-location }
vpn-banner-protect-yourself-with-vpn = <em>Védje meg magát</em> a { -brand-mozilla-vpn } segítségével.
vpn-banner-protected-with-vpn = A { -brand-mozilla-vpn } által <em>védve</em>.
vpn-banner-title-1 = Ön védett – köszönjük, hogy a { -brand-mozilla-vpn }-t használja.
vpn-banner-title-2 = A tartózkodási helye nyomon követhető, ha nem használ VPN-t.
vpn-banner-subtitle-2 = Védje meg tartózkodási helyét és böngésszen biztonságosan 3 lépésben
vpn-banner-status-protected = Jelenlegi állapot: <em>Védett ✓</em>
vpn-banner-status-not-protected = Jelenlegi állapot: <em>Nem védett ⚠</em>
# Variables:
#   $ip-address (String) - User's IP address is determined dynamically, eg: "IP address: 192.168.1.1"
vpn-banner-ip-address = IP-cím: { $ip-address }
vpn-banner-step-1 = Feliratkozás a { -brand-mozilla-vpn }-re
vpn-banner-step-2 = Válasszon egy VPN helyet
vpn-banner-step-3 = Aktiválja a VPN-t, és böngésszen biztonságosan
vpn-banner-cta = { -brand-mozilla-vpn } beszerzése
# button to expand panel
vpn-banner-cta-expand = Kibontás
# button to close panel
vpn-banner-cta-close = Bezárás

## Relay and VPN educational/ad units

ad-unit-relay-cta = Tudjon meg többet a { -brand-relay }ről
ad-unit-vpn-cta = Tudjon meg többet a { -brand-mozilla-vpn }ről
# ad 1 heading
ad-unit-1-how-do-you-keep = Hogyan tartja titokban az e-mail-címét?
# ad 2 heading
ad-unit-2-do-you-worry = Aggódik a biztonsága miatt a nyilvános Wi-Fiken?
# ad 3 heading
ad-unit-3-stay-in-the-game = Maradjon játékban!
ad-unit-3-lets-you-keep = A { -brand-mozilla-vpn } segítségével stabil kapcsolatot tarthat biztonságosan, miközben játszik vagy filmeket néz.
# ad 3 list item 1
ad-unit-3-prevent-throttling = Akadályozza meg a sebességkorlátozást
# ad 3 list item 2
ad-unit-3-be-anywhere = Legyen bárhol a világon
# ad 3 list item 3
ad-unit-3-access-more = Érjen el több mindent.
# ad 4 heading
ad-unit-4-shopping-with = Vásárlás e-mail-maszkokkal
ad-unit-4-want-to-buy = Szeretne vásárolni valamit az interneten, de nem ismeri az üzletet vagy nem bízik benne teljesen?
ad-unit-4-shop-online = Használjon e-mail-maszkot, amikor online vásárol. Kapja meg a visszaigazolást a valódi e-mail-címére, majd később bármikor könnyedén kikapcsolhatja a maszkot.
# ad 5 heading
ad-unit-5-on-the-go = Útközben a { -brand-relay } segítségével
ad-unit-5-instantly-make = Azonnal készítsen egy egyéni e-mail-maszkot, bárhol is jár.
# ad 5 subheading 1
ad-unit-5-connect-on-the-go = Csatlakozzon útközben
ad-unit-5-privately-sign-in = Használja e-mail-maszkját, ha privát módon szeretne bejelentkezni kedvenc kávézójába vagy egy nyilvános Wi-Fi-hálózatra
# ad 5 subheading 2
ad-unit-5-email-receipts = Kapjon e-mailes nyugtákat
ad-unit-5-share-custom-email = Ossza meg egyéni e-mail maszkját a bolti vásárlási nyugtákhoz anélkül, hogy megosztaná valódi e-mail-címét
# ad 5 subheading 3
ad-unit-5-use-on-phone = Használja a telefonján
ad-unit-5-no-matter-where = Nem számít, hol van, pillanatok alatt hozzon létre egy egyéni e-mail-maszkot bármihez, amihez csak szeretne
# ad 6 heading
ad-unit-6-worry-free = Gondtalan regisztrációk
ad-unit-6-want-to-start = Új előfizetést szeretne indítani, válaszolna egy meghívásra, vagy akciós promóciós kódot szeretne kapni anélkül, hogy levélszemét árasztaná el a postaládáját?
ad-unit-6-before-you-complete = Mielőtt befejezné a következő regisztrációt, használjon egy e-mail maszkot a valódi címe helyett, hogy megvédje adatait és megtartsa a levelesládája feletti irányítást.

# Monitor V2


## The following messages are brands and should be kept entirely in English

-brand-firefox = Firefox
-brand-monitor = Monitor
-brand-fx-monitor = Mozilla Monitor
-brand-mozilla = Mozilla
-brand-premium = Premium
-brand-monitor-premium = Monitor Premium
-brand-mozilla-foundation = Mozilla Foundation
-brand-github = GitHub
-brand-mozilla-vpn = Mozilla VPN
-brand-relay = Firefox Relay
-brand-mozilla-monitor = Mozilla Monitor
-brand-monitor-plus = Monitor Plus

##

# “account” can be localized, “Mozilla” must be treated as a brand,
# and kept in English.
-brand-mozilla-account = Mozilla-fiók
open-in-new-tab-alt = Hivatkozás megnyitása új lapon

## Search Engine Optimization

meta-desc-2 = Tudja meg a { -brand-fx-monitor } segítségével, hogy érintett volt-e adatvédelmi incidensben. Segítünk megérteni, hogy mit tegyen, és folyamatosan figyeljük az új adatvédelmi incidenseket.

## Header

# Deprecated
brand-fx-monitor = { -brand-fx-monitor }
sign-in = Bejelentkezés
brand-mozilla-monitor = { -brand-fx-monitor }

## Site navigation

site-nav-breaches-link = Adatvédelmi incidensek megoldása
site-nav-settings-link = Beállítások
site-nav-help-link = Súgó és támogatás
# This call-out is above 2 image links for Firefox Relay and Mozilla VPN
site-nav-ad-callout = Próbálja ki többi biztonsági eszközünket:
brand-relay = { -brand-relay }
brand-mozilla-vpn = { -brand-mozilla-vpn }
mobile-menu-label = Főmenü
main-nav-button-collapse-label = Menü összecsukása
main-nav-button-collapse-tooltip = Menü összecsukása
main-nav-button-expand-label = Menü kinyitása
main-nav-button-expand-tooltip = Menü kinyitása
main-nav-label = Navigáció
main-nav-link-home-label = Kezdőlap
main-nav-link-dashboard-label = Vezérlőpult
main-nav-link-settings-label = Beállítások
main-nav-link-faq-label = GYIK
main-nav-link-faq-tooltip = Gyakran ismételt kérdések

## User menu

# Obsolete
menu-button-title = Felhasználói menü
# Obsolete
menu-button-alt = Felhasználói menü megnyitása
# Obsolete
menu-list-accessible-label = Fiók menü
# Obsolete
menu-item-fxa-2 = A { -brand-mozilla-account } kezelése
# Obsolete
menu-item-settings = Beállítások
# Obsolete
menu-item-help = Súgó és támogatás
# Obsolete
menu-item-logout = Kijelentkezés
user-menu-trigger-label = Felhasználói menü megnyitása
user-menu-trigger-tooltip = Profil
user-menu-manage-fxa-label = A { -brand-mozilla-account } kezelése
user-menu-settings-label = Beállítások
user-menu-settings-tooltip = A { -brand-mozilla-monitor } beállítása
user-menu-help-label = Súgó és támogatás
user-menu-help-tooltip = Kérjen segítséget a { -brand-mozilla-monitor } használatához
user-menu-signout-label = Kijelentkezés
user-menu-signout-tooltip = Kijelentkezés a { -brand-mozilla-monitor }ból

## Footer

mozilla = { -brand-Mozilla }
terms-of-service = Szolgáltatás feltételei
privacy-notice = Adatvédelmi nyilatkozat
github = { -brand-github }
footer-nav-all-breaches = Összes adatvédelmi incidens
footer-external-link-faq-label = GYIK
footer-external-link-faq-tooltip = Gyakran ismételt kérdések

## Error page

# Variables:
#   $errorCode (number) - "404"
error-page-error-404-title = { $errorCode } Az oldal nem található
error-page-error-404-copy = Sajnáljuk, a keresett oldal már nem létezik.
error-page-error-404-cta-button = Ugrás vissza
# Variables:
#   $errorCode (number) - the status code of the error, e.g. 403
error-page-error-other-title = { $errorCode } Hiba történt
error-page-error-other-copy = Próbálja újra, vagy térjen vissza később

## Breach overview page

all-breaches-headline-2 = Az összes { -brand-fx-monitor } által észlelt adatvédelmi incidens
all-breaches-lead = Minden ismert adatvédelmi incidenst monitorozunk, hogy megtudjuk, hogy kikerültek-e személyes adatai. Itt van a 2007 óta jelentett adatvédelmi incidensek teljes listája.
search-breaches = Adatvédelmi incidensek keresése
# the kind of user data exposed to hackers in data breach.
exposed-data = Kikerült adatok:

## Public breach detail page

find-out-if-2 = Tudja meg, hogy érintett-e ebben az adatvédelmi incidensben
find-out-if-description = Segítünk gyorsan megnézni, hogy kikerült-e az e-mail-címe ebben az adatvédelmi incidensben, és hogy mi legyen a következő teendője.
breach-detail-cta-signup = Adatvédelmi incidensek keresése

## Floating banner

floating-banner-text = Növelje online biztonságát a { -brand-Mozilla } híreivel, tippjeivel és frissítéseivel.
floating-banner-link-label = Regisztráció
floating-banner-dismiss-button-label = Köszönöm, nem

## Firefox Monitor -> Mozilla Monitor rebrand banner

banner-monitor-rebrand-text = <b>{ -brand-mozilla-monitor }</b>: Új név, kinézet és még több módja annak, hogy <b>visszaszerezze a magánszféráját</b>.
banner-monitor-rebrand-dismiss-button-label = OK
banner-monitor-rebrand-dismiss-button-tooltip = Eltüntetés
loading-accessibility = Betöltés
