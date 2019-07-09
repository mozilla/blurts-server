# Firefox Monitor is a product name and should not be translated.
-product-name = Firefox Monitor
# Firefox is a brand name and should not be translated.
-brand-name = Firefox
click-to-verify =
    Válassza az E-mail megerősítése gombot 24 órán belül, hogy megerősítse a Firefox Monitor fiókját.
    A jelentés utána kerül elküldésre.
verify-my-email = E-mail cím megerősítése
report-scan-another-email = Keressen még egy e-mailre a { -product-name }ban
automated-message = Ez egy automatikus üzenet, ha úgy véli tévedésből kapta, akkor nincs teendője.
# Without HTML markup reads: We sent this message to [user’s email address] because the email address opted into alerts from Firefox Monitor.
we-sent-this-alert = Ezt az üzenetet azért küldtük a(z) { $userEmail } címre, mert az e-mail címre értesítés lett kérve a { -product-name }tól.
unsubscribe-email-link = Ha már nem szeretne { -product-name } figyelmeztetéseket kapni, iratkozzon le.
# A Firefox Monitor Report is an emailed statement from Firefox Monitor containing a list of known data breaches where the user’s email address was found amongst the stolen data.
firefox-monitor-report = { -product-name } jelentés
report-date = Jelentés ideje:
email-address = E-mail cím:
# A list of next steps someone should take if their information has been involved in a data breach.
what-to-do-next = Mi legyen a következő teendő
report-headline =
    { $breachCount ->
        [0] Eddig jó.
        [one] A fiókja { $breachCount } adatsértésben jelent meg.
       *[other] A fiókja { $breachCount } adatsértésben jelent meg.
    }
report-subhead-no-breaches =
    Az Ön e-mail címe nem szerepel a adatsértésekről szóló teljes jelentésben.
    Ez jó hír, de többet is tehet.
    Adatsértések bármikor történhetnek, így olvasson arról, hogyan védheti meg jelszavait.
report-subhead-found-breaches = Itt az Ön teljes Firefox Monitor jelentése, amely tartalmazza az összes ismert adatsértést, amely ezt az e-mail címet tartalmazza.
report-pwt-blurb =
    A jelszók olyan értékesek, hogy ezret lopnak el minden nap, és ezeket a fekete piacon adják el, és ott kereskednek velük.
    Az erősebb jelszavak védik a fiókjait, és az összes bennük található személyes adatot.
report-pwt-headline-1 = Használjon különböző jelszót minden fiókhoz
report-pwt-summary-1 =
    Ugyanazon jelszó újrafelhasználása mindenhol kinyitja az ajtót a hackerek számára.
    Használhatják ugyanazt a jelszót, hogy bejelentkezzenek a többi fiókjába is.
report-pwt-headline-2 = Hozzon létre erős, egyedi jelszavakat
report-pwt-summary-2 =
    A hackerek gyakori jelszavak listáját használnak, hogy kitalálják az Önét.
    Minél hosszabb és véletlenszerűbb a jelszava, annál nehezebb azt kitalálni.
report-pwt-headline-3 = Kezelje úgy a biztonsági kérdéseket, mint további jelszavakat
report-pwt-summary-3 =
    A weboldalak nem ellenőrzik, hogy a válaszok pontosak-e, csak azt hogy minden alkalommal megegyeznek.
    Hozzon létre hosszú, véletlen válaszokat és tárolja őket biztonságosan.
report-pwt-headline-4 = Használjon jelszókezelőt
report-pwt-summary-4 =
    Az olyan szolgáltatások, mint a 1Password, a LastPass, a Dashlane és a Bitwarden, erős jelszavakat hoznak létre,
    biztonságosan tárolják azokat, és betöltik őket a weboldalakon, hogy ne kelljen mindet megjegyeznie.
# A link to legal information about mozilla products.
legal = Jogi információk
# Share Firefox Monitor by email subject line
share-by-email-subject = Tudja meg, hogy volt-e része adatsértésnek.
# Share Firefox Monitor by email message. {"https://monitor.firefox.com"} should not be translated or modified. 
share-by-email-message =
    Üdv,
    A { -brand-name } ingyenes szolgáltatással ellenőrizheti, hogy érintette-e adatsértés. Így működik:
    1. Lépjen a { "https://monitor.firefox.com" } weboldalra, és keresse meg az e-mail címét.
    2. Nézze meg, hogy az online fiókjai kikerültek-e egy adatsértéskor.
    3. Kapjon tippeket a { -product-name }tól arról, hogy mit tehet.
# Unsubscribe link in email.
email-unsub-link = Leiratkozás
# Button text that takes the user to their signed in user dashboard.
view-my-dashboard-cta = Saját vezérlőpult megtekintése
# Button text
verify-email-cta = E-mail cím megerősítése
# Headline of verification email
email-link-expires = Ez a hivatkozás 24 óra múlva lejár
# Email headline
email-no-breaches-hl = A(z) { $userEmail } cím 0 ismert adatsértésben jelent meg
