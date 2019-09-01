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
# This string appears in the footer of breach report and breach alert emails.
# { $unsubLink } is a link to the user's dashboard where they can unsubscribe from Monitor
# and uses the text from { email-unsub-link }. { $faqLink } is a link to the 
# Firefox Monitor SUMO page and uses the text from { frequently-asked-questions }.
email-footer-blurb = Primești acest e-mail deoarece te-ai înscris pentru alertele { -product-name }. Nu mai vrei aceste e-mailuri? { $unsubLink }. Acesta este un e-mail automat. Pentru asistență, vizitează { $faqLink }.
# This string appears in the footer of verification emails. { $faqLink } is a link
# to the Firefox Monitor SUMO page and uses the text from { frequently-asked-questions }.
email-verify-footer-copy =
    Primești acest e-mail deoarece te-ai înscris pentru alertele { -product-name }.
    Acesta este un e-mail automat. Pentru asistență, vizitează { $faqLink }.
# Button text that takes the user to their signed in user dashboard.
view-my-dashboard-cta = Vezi panoul meu de control
# Button text
verify-email-cta = Verifică e-mailul
# Button text
see-all-breaches = Vezi toate breșele
# Headline of verification email
email-link-expires = Acest link expiră în 24 de ore
# Email headline
email-found-breaches-hl = Iată rezumatul tău privind breșele de date din trecut
# Email headline
email-breach-summary-for-email = Rezumatul breșelor pentru { $userEmail }
# Email headline
email-no-breaches-hl = { $userEmail } a apărut în 0 breșe de securitate cunoscute
# Email headline
email-alert-hl = { $userEmail } a apărut într-o nouă breșă de securitate
# Subject line of email
email-subject-found-breaches = { -product-name } ți-a găsit informații în aceste breșe
# Subject line of email
email-subject-no-breaches = { -product-name } nu a găsit breșe cunoscute
# Subject line of email
email-subject-verify = Verifică-ți e-mailul pentru { -product-name }
# { $fxmLink } is a link to Firefox Monitor and uses the text from { -product-name }.
learn-more-about-fxm = Află mai multe despre { $fxmLink }
fxm-warns-you-no-breaches =
    { -product-name } te avertizează cu privire la breșele de date în care sunt implicate informațiile tale cu caracter personal.
    Până în prezent, nu au fost găsite breșe. Îți vom trimite o alertă dacă adresa ta de e-mail apare într-o nouă breșă.
fxm-warns-you-found-breaches =
    { -product-name } te avertizează cu privire la breșele de date în care sunt implicate informațiile tale cu caracter personal.
    De asemenea, te-ai înscris pentru a primi alerte dacă adresa ta de e-mail apare într-o nouă breșă.
email-breach-alert-blurb =
    { -product-name } te avertizează cu privire la breșele de date în care sunt implicate informațiile tale cu caracter personal.
    Tocmai am primit detalii despre o altă breșă de date a unei companii.
# List headline
faq-list-headline = Întrebări adresate frecvent
# Link Title
faq-v2-1 = Nu recunosc una dintre aceste companii sau site-uri web. De ce mă aflu în această breșă?
# Link Title
faq-v2-2 = Trebuie să fac ceva dacă o breșă a avut loc cu ani în urmă sau dacă acesta este un cont vechi?
# Link Title
faq-v2-3 = Tocmai am aflat că mă aflu într-o breșă de date. Ce fac în continuare?
# Link Title
faq-v2-4 = Cum tratează { -product-name } site-urile sensibile?
