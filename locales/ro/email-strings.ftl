# Firefox Monitor is a product name and should not be translated.
-product-name = Firefox Monitor
# Firefox is a brand name and should not be translated.
-brand-name = Firefox
click-to-verify = Selectează butonul Verifică-mi adresa de e-mail în maxim de 24 de ore pentru a-ți confirma contul Firefox Monitor. Vei primi apoi raportul în scurt timp.
verify-my-email = Verifică-mi adresa de e-mail
report-scan-another-email = Scanează altă adresă de e-mail în { -product-name }
automated-message = Acesta este un mesaj automat; dacă l-ai primit din greșeală, poți să-l ignori.
# Without HTML markup reads: We sent this message to [user’s email address] because the email address opted into alerts from Firefox Monitor.
we-sent-this-alert = Am trimis acest mesaj către { $userEmail } deoarece adresa de e-mail a optat pentru alerte de la { -product-name }.
unsubscribe-email-link = Dacă nu mai vrei să primești alerte { -product-name }, dezabonează-te.
# A Firefox Monitor Report is an emailed statement from Firefox Monitor containing a list of known data breaches where the user’s email address was found amongst the stolen data.
firefox-monitor-report = Raport { -product-name }
report-date = Data raportului:
email-address = Adresă de e-mail:
# A list of next steps someone should take if their information has been involved in a data breach.
what-to-do-next = Ce poți face de acum înainte
report-headline =
    { $breachCount ->
        [0] Până acum totul este în regulă.
        [one] Contul tău a apărut într-o breșă.
        [few] Contul tău a apărut în { $breachCount } breșe.
       *[other] Contul tău a apărut în { $breachCount } de breșe.
    }
report-subhead-no-breaches =
    Contul tău nu apare în raportul nostru complet de breșe.
    Asta este o veste bună, dar poți face mai multe.
    Breșele de date se întâmplă în orice moment, așa că citește mai departe pentru a afla cum îți poți proteja parolele.
report-subhead-found-breaches = Iată raportul complet Firefox Monitor, care include toate breșele cunoscute de date care conțin această adresă de e-mail.
report-pwt-blurb =
    Parolele sunt atât de valoroase, încât mii dintre ele sunt furate în fiecare zi și tranzacționate sau vândute pe piața neagră.
    Parolele mai puternice îți protejează conturile și toate informațiile personale pe care le conțin.
report-pwt-headline-1 = Folosește o parolă diferită pentru fiecare cont
report-pwt-summary-1 =
    Reutilizarea aceleiași parole peste tot lasă ușa larg deschisă pentru hackeri.
    Ei pot folosi acea parolă pentru a se autentifica în celelalte conturi pe care le ai.
report-pwt-headline-2 = Creează parole puternice și unice
report-pwt-summary-2 =
    Hackerii folosesc liste de parole comune ca să încerce să-ți ghicească parola.
    Cu cât este mai lungă și mai aleatoare parola, cu atât va fi mai greu să fie furată.
report-pwt-headline-3 = Tratează întrebările de securitate ca și când ar fi parole suplimentare
report-pwt-summary-3 = Site-urile web nu verifică dacă răspunsurile sunt exacte, ci dacă se potrivesc de fiecare dată. Creează răspunsuri lungi și aleatorii și păstrează-le undeva în siguranță.
report-pwt-headline-4 = Folosește un manager de parole
report-pwt-summary-4 = Serviciile precum 1Password, LastPass, Dashlane și Bitwarden generează parole puternice, le stochează în siguranță și le completează pe site-uri pentru tine așa că nu este nevoie să le ții minte absolut pe toate.
# A link to legal information about mozilla products.
legal = Mențiuni legale
# Share Firefox Monitor by email subject line
share-by-email-subject = Vezi dacă ai fost implicat(ă) într-o breșă de date.
# Share Firefox Monitor by email message. {"https://monitor.firefox.com"} should not be translated or modified. 
share-by-email-message =
    Salut,
    { -brand-name } are un serviciu gratuit unde poți verifica dacă ai fost implicat(ă) într-o breșă de date. Iată cum funcționează:
    1. Intră pe { "https://monitor.firefox.com" } și caută-ți adresa de e-mail.
    2. Vezi dacă ți-au fost expuse conturile online într-o breșă de date.
    3. Obține ponturi de la { -product-name } despre ce să faci în continuare.
# Unsubscribe link in email.
email-unsub-link = Dezabonează-te
# Button text that takes the user to their signed in user dashboard.
view-my-dashboard-cta = Vezi panoul meu de control
# Button text
verify-email-cta = Verifică e-mailul
# Headline of verification email
email-link-expires = Acest link expiră în 24 de ore
# { $fxmLink } is a link to Firefox Monitor and uses the text from { -product-name }.
learn-more-about-fxm = Află mai multe despre { $fxmLink }
# List headline
faq-list-headline = Întrebări adresate frecvent
