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
-brand-fxa = Cont Firefox
-brand-Chrome = Chrome
layout-Firefox = { -brand-name }
# Descriptive headline for a column of links where users can give feedback, or get additional information about, Firefox Monitor.
layout-support = Suport
# Link that takes the user to a blog post on blog.mozilla.org about the alerts
about-firefox-alerts = Despre alertele Firefox
# Link that takes the user to a Firefox Monitor survey. 
give-feedback = Oferă feedback
terms-and-privacy = Termeni și confidențialitate
error-scan-page-token = Ai încercat să scanezi prea multe adrese de e-mail într-un timp prea scurt. Din motive de securitate, ți-am blocat accesul la căutări noi. Poți încerca mai târziu.
error-could-not-add-email = Adresa de e-mail nu a putut fi adăugată în baza de date.
error-not-subscribed = Această adresă de e-mail nu este abonată la { -product-name }.
error-hibp-throttled = Prea multe conexiuni la { -brand-HIBP }.
error-hibp-connect = Eroare de conectare la { -brand-HIBP }.
error-hibp-load-breaches = Nu s-au putut încărca breșele.
error-must-be-signed-in = Trebuie să fii autentificat(ă) la { -brand-fxa }.
hibp-notify-email-subject = Alertă { -product-name }: Contul tău a fost implicat într-o breșă.
home-title = { -product-name }
home-not-found = Pagină negăsită.
oauth-invalid-session = Sesiune invalidă
oauth-confirmed-title = { -product-name } : Abonat
scan-title = { -product-name } : Rezultatele scanării
user-add-invalid-email = E-mail invalid
user-add-email-verify-subject = Verifică-ți abonamentul la { -product-name }.
user-add-title = { -product-name } : Confirmă adresa de e-mail
error-headline = Eroare
user-verify-token-error = Este necesar un jeton de verificare.
user-verify-email-report-subject = Raportul tău { -product-name }
user-verify-title = { -product-name } : Abonat
user-unsubscribe-token-error = Este necesar un jeton pentru dezabonare.
user-unsubscribe-token-email-error = Este necesar un jeton și emailHash pentru dezabonare.
user-unsubscribe-title = { -product-name } : Dezabonare
user-unsubscribe-survey-title = { -product-name } : Chestionar la dezabonare
user-unsubscribed-title = { -product-name } : Dezabonat

## Password Tips

pwt-section-headline = Parole mai puternice = Protecție mai bună
pwt-section-subhead = Securitatea informațiilor tale personale depinde de siguranța parolelor.
pwt-section-blurb = Parolele protejează mai mult decât conturile. Protejează fiecare bit de informații personale pe care le conțin. Hackerii se bazează pe obiceiuri proaste, cum ar fi utilizarea aceleiași parole peste tot sau folosirea de fraze obișnuite (de genul p@ssw0rd), astfel încât, dacă sparg un cont, pot sparge mai multe. Iată cum să îți protejezi mai bine conturile.
pwt-headline-1 = Folosește o parolă diferită pentru fiecare cont
pwt-summary-1 = Reutilizarea aceleiași parole peste tot lasă ușa larg deschisă pentru furtul de identitate. Oricine are parola se poate autentifica în toate conturile tale.
pwt-headline-2 = Creează parole puternice, greu de ghicit
pwt-summary-2 = Hackerii folosesc mii de parole frecvente când încearcă să o ghicească pe a ta. Cu cât parola este mai lungă și mai aleatorie, cu atât va fi mai greu de ghicit.
pwt-headline-3 = Tratează întrebările de securitate ca și când ar fi parole suplimentare
pwt-summary-3 = Site-urile web nu verifică dacă răspunsurile sunt exacte, ci dacă se potrivesc de fiecare dată. Creează răspunsuri lungi și aleatorii și păstrează-le undeva în siguranță.
pwt-headline-4 = Obține ajutor pentru amintirea parolelor
pwt-summary-4 = Managerii de parole, precum 1Password, LastPass, Dashlane și Bitwarden generează parole unice puternice, le stochează în siguranță și le completează pe site-uri pentru tine
pwt-headline-5 = Adaugă un plus de securitate prin autentificarea cu doi factori
pwt-summary-5 = 2FA necesită o informație suplimentară (cum ar fi coduri de unică folosință trimise prin mesaje text) pentru autentificarea în cont. Chiar dacă altcineva îți cunoaște parola, nu poate intra în cont.
pwt-headline-6 = Înregistrează-te pentru alerte { -product-name-nowrap }
pwt-summary-6 = Breșele de date de pe site-urile web sunt din ce în ce mai multe. Imediat ce informarea despre o breșă intră în baza noastră de date, { -product-name-nowrap } îți trimite o alertă — ca să poți lua măsuri pentru a-ți proteja contul.
landing-headline = Dreptul tău de protecție împotriva hackerilor începe aici.
landing-blurb = { -product-name-nowrap } te înarmează cu unelte care îți păstrează în siguranță informațiile personale. Află ce știu deja hackerii despre tine și cum să fii mereu cu un pas înaintea lor.
scan-label = Vezi dacă ai fost implicat(ă) într-o breșă de date.
scan-placeholder = Introdu adresa de e-mail
scan-privacy = Adresa ta de e-mail nu va fi stocată.
scan-submit = Caută-ți adresa de e-mail
scan-another-email = Scanează altă adresă de e-mail
scan-featuredbreach-label = Află dacă contul tău <span class="bold">{ $featuredBreach }</span> a fost compromis.
sensitive-breach-email-required = Breșa conține informații sensibile. Este necesară verificarea adresei de e-mail.
scan-error = Trebuie să fie o adresă de e-mail validă.
signup-banner-headline = { -product-name-nowrap } detectează amenințările la care sunt supuse conturile tale online.
signup-banner-blurb = Raportul tău { -product-name-nowrap } detaliat indică dacă informațiile din conturile tale online au fost compromise sau furate. Te vom alerta și dacă conturile tale apar în breșe noi de pe site-uri web.
download-firefox-bar-blurb = { -product-name-nowrap } îți este oferit de <span class="nowrap">noul { -brand-name }</span>.
download-firefox-bar-link = Descarcă { -brand-name } acum
download-firefox-banner-blurb = Preia controlul asupra browserului tău
download-firefox-banner-button = Descarcă { -brand-name }
signup-modal-headline = Înregistrează-te pentru { -product-name-nowrap }
signup-modal-blurb = Înregistrează-te pentru raportul tău complet, alerte când se produc breșe noi și ponturi de siguranță de la { -product-name-nowrap }.
signup-modal-close = Închide
get-your-report = Obține raportul
signup-modal-verify-headline = Verifică-ți abonamentul
signup-modal-verify-blurb = Am trimis un link de verificare la <span id="submitted-email" class="medium"></span>.
signup-modal-verify-expiration = Acest link expiră în 24 de ore.
signup-modal-verify-resend = Nu este nici în dosarul de mesaje primite, nici în dosarul spam? Retrimite.
# Appears after Firefox Monitor has sent a verification email to a new user. 
signup-modal-sent = Trimis!
signup-with-fxa = Înregistrează-te cu contul { -brand-name }
form-signup-placeholder = Introdu adresa de e-mail
form-signup-checkbox = Primește cele mai recente știri despre { -brand-Mozilla } și { -brand-name }.
sign-up = Înregistrează-te
form-signup-error = Trebuie să fie o adresă de e-mail validă
no-breaches-headline = Până acum totul este în regulă.
found-breaches-headline = Informațiile tale au fost implicate într-o breșă de date.
no-breaches = Adresa ta de e-mail nu apare în scanarea noastră de bază. E de bine, numai că breșele de date se pot petrece în orice moment și sunt încă multe măsuri pe care le poți lua. Abonează-te la { -product-name-nowrap } pentru un raport complet, alerte când au loc breșe de date și ponturi despre protejarea parolelor.
featured-breach-results =
    { $breachCount ->
        [0] Contul tău apare în breșa <span class="bold">{ $featuredBreach }</span>, dar nu și în alte breșe cunoscute de date.
        [one] Contul tău apare în breșa <span class="bold">{ $featuredBreach }</span> și într-o altă breșă.
        [few] Contul tău apare în breșa <span class="bold">{ $featuredBreach }</span> și în alte { $breachCount } breșe.
       *[other] Contul tău apare în breșa <span class="bold">{ $featuredBreach }</span> și în alte { $breachCount } de breșe.
    }
featured-breach-not-compromised =
    { $breachCount ->
        [0] { no-breaches }
        [one] Contul tău nu a apărut în breșa <span class="bold">{ $featuredBreach }</span>, însă a apărut într-o altă breșă.
        [few] Contul tău nu a apărut în breșa <span class="bold">{ $featuredBreach }</span>, însă a apărut în alte { $breachCount } breșe.
       *[other] Contul tău nu a apărut în breșa <span class="bold">{ $featuredBreach }</span>, însă a apărut în alte { $breachCount } de breșe.
    }
scan-results =
    { $breachCount ->
        [0] { no-breaches }
        [one] Contul tău a apărut într-o breșă.
        [few] Conturi asociate cu adresa ta de e-mail au apărut în următoarele { $breachCount } breșe.
       *[other] Conturi asociate cu adresa ta de e-mail au apărut în următoarele { $breachCount } de breșe.
    }
show-more-breaches = Afișează mai multe
what-to-do-headline = Ce să faci când informațiile ți-au fost expuse într-o breșă de date
what-to-do-subhead-1 = Schimbă-ți parolele, chiar și pentru conturile vechi
what-to-do-blurb-1 = Dacă nu te poți autentifica, contactează site-ul web pentru informații despre recuperarea sau închiderea contului. Vezi un cont pe care nu-l recunoști? Este posibil ca site-ul să-și fi modificat denumirea sau ca cineva să fi creat un cont în numele tău.
what-to-do-subhead-2 = Dacă refolosești o parolă expusă, schimb-o
what-to-do-blurb-2 = Hackerii pot încerca să reutilizeze parole expuse pentru a intra în alte conturi. Creează o parolă diferită pentru fiecare site web, în special pentru contul bancar, e-mail și alte site-uri web pe care salvezi informații personale.
what-to-do-subhead-3 = Ia măsuri suplimentare pentru securizarea conturilor financiare
what-to-do-blurb-3 = Cele mai multe breșe expun e-mailuri și parole, dar unele includ și informații financiare sensibile. Dacă contul tău bancar sau numerele cardurilor de credit au fost implicate într-o breșă, alertează banca asupra unei posibilități de fraudă și monitorizează-ți extrasele de cont pentru plăți pe care nu le recunoști.
what-to-do-subhead-4 = Obține ajutor pentru a crea parole bune și păstrarea lor în siguranță.
what-to-do-blurb-4 = Managerii de parole, precum 1Password, LastPass, Dashlane și Bitwarden generează parole puternice, le stochează în siguranță și le completează pe site-uri pentru tine.
# breach-date = the calendar date a particular data theft occurred. 
breach-date = Data breșei:
# compromised accounts = the total number of user accounts exposed in data breach
compromised-accounts = Conturi compromise:
# compromised-data = the kind of user data exposed to hackers in data breach.
compromised-data = Date compromise:
confirmed = Confirmat!<br />Te-ai abonat!
confirmed-blurb = { -product-name-nowrap } îți va trimite în curând un e-mail cu raportul complet și va transmite o alertă pe e-mail în cazul în care contul tău va apărea în breșe raportate noi.
confirmed-social-blurb = Dacă ți-au fost compromise datele într-o breșă, există posibilitatea să fi fost compromise și datele prietenilor, familiei sau ale contactelor tale online. Spune-le despre { -product-name-nowrap }.
unsub-headline = Dezabonează-te de la { -product-name-nowrap }
unsub-blurb = Prin dezabonare, adresa ta de e-mail va fi eliminată din lista { -product-name-nowrap } și nu vei mai primi alerte când sunt anunțate breșe noi.
unsub-button = Dezabonează-te
fxa-unsub-headline = Dezabonare de la alerte { -product-name }.
fxa-unsub-blurb =
    Nu vei mai primi alerte { -product-name }. 
    { -brand-fxa } va rămâne activ și vei putea primi alte comunicări legate de cont.
unsub-survey-form-label = De ce te dezabonezi de la alertele { -product-name-nowrap }?
unsub-reason-1 = Consider că alertele nu îmi fac datele mai sigure
unsub-reason-2 = Primesc prea multe e-mailuri de la { -product-name-nowrap }
unsub-reason-3 = Nu consider că serviciul este util
unsub-reason-4 = Am luat deja măsuri ca să-mi protejez conturile
unsub-reason-5 = Folosesc un alt serviciu pentru monitorizarea conturilor
unsub-reason-6 = Niciuna dintre cele de mai sus
unsub-survey-thankyou = Îți mulțumim pentru feedback.
unsub-survey-error = Te rugăm să selectezi o opțiune.
unsub-survey-headline-v2 = Te-ai dezabonat.
unsub-survey-blurb-v2 =
    Nu vei mai primi alerte { -product-name }. 
    Vrei să ne acorzi un minut și să ne răspunzi la o întrebare despre experiența ta?
unsub-survey-button = Trimite răspunsul
# Link to share Firefox Monitor on Facebook. Positioned next to Facebook logo.
share = Distribuie
# Link to share Firefox Monitor on Twitter. Positioned next to Twitter logo.
tweet = Trimite un tweet
download-firefox-quantum = Descarcă { -brand-Quantum }
download-firefox-mobile = Descarcă { -brand-name } pentru dispozitive mobile
# Features here refers to Firefox browser features. 
features = Funcționalități
# beta-nightly-developer-edition refers to additional versions of Firefox Browser
beta-nightly-developer-edition = Beta, Nightly, Developer Edition
# Breach data provided by Have I Been Pwned.
hibp-attribution = Datele despre breșe sunt furnizate de { $hibp-link }
site-description = Ți-au fost compromise sau furate conturile într-o breșă de date? Află la { -product-name }. Caută în baza noastră de date și înregistrează-te pentru alerte.
confirmation-headline = Raportul tău { -product-name } este pe drum.
confirmation-blurb = Breșele de date pot afecta pe oricine. Dă de veste astfel încât prietenii și familia să poată verifica dacă conturile lor online sunt în siguranță.
share-email = E-mail
# Appears at the end of a list of email-clients and refers to any other unlisted email-client.
share-other = Altele
share-twitter = Majoritatea persoanelor au aproximativ 100 de conturi online. A fost expus vreunul dintre conturile tale într-o breșă de date? Află.
share-facebook-headline = Află dacă ai fost parte a unei breșe de date
share-facebook-blurb = Au fost expuse conturile tale online într-o breșă de date?
og-site-description = Află dacă ai fost parte a unei breșe de date cu { -product-name }. Înregistrează-te pentru alerte despre viitoare breșe și obține ponturi pentru a-ți menține în siguranță conturile.
mozilla-security-blog = Blog de securitate { -brand-Mozilla }
# A header for a list of links to share Firefox Monitor on various social media platforms.
layout-social = Social
show-all = Afișează toate
fxa-landing-blurb = Află ce știu deja hackerii despre tine și cum să fii cu un pas înaintea lor.
fxa-scan-label = Vezi dacă apari într-o breșă de date.
fxa-welcome-headline = Bine ai venit la { -product-name }.
fxa-welcome-blurb = Te-ai înregistrat ca să primești alerte în cazul în care { $userEmail } apare într-o breșă de date.
fxa-scan-another-email = Vrei să verifici altă adresă de e-mail?
# Search Firefox Monitor
fxa-scan-submit = Caută { -product-name }
sign-up-to-check = Înscrie-te ca să poți verifica
sign-in = Autentificare
sign-out = Deconectare
full-report-headline = Raportul tău { -product-name }
see-full-report = Vezi raportul complet
# Manage Firefox Account, link to page where account holders can change their account settings.
manage-fxa = Gestionează { -brand-fxa }
fxa-download-firefox-bar-blurb = Oferit de { -brand-name }. De 2 ori mai rapid. Folosește cu 30% mai puțină memorie decât { -brand-Chrome }.
fxa-download-firefox-bar-link = Descarcă acum
fxa-download-firefox-banner-blurb = Încărcare mai rapidă și mai bună a paginilor, cu un consum mai mic de memorie.
user-fb-compromised-headline = { $userEmail } a apărut în breșa de date { $breachName }.
guest-fb-compromised-headline = Această adresă de e-mail a apărut în breșa de date { $breachName }.
user-zero-breaches-headline = { $userEmail } nu a apărut în nicio breșă de date.
guest-zero-breaches-headline = Această adresă de e-mail nu a apărut în nicio breșă de date.
user-scan-results-headline =
    { $breachCount ->
        [one] { $userEmail } a apărut într-o breșă de date.
        [few] { $userEmail } a apărut în { $breachCount } breșe de date.
       *[other] { $userEmail } a apărut în { $breachCount } de breșe de date.
    }
guest-scan-results-headline =
    { $breachCount ->
        [one] Această adresă de e-mail a apărut într-o breșă de date.
        [few] Această adresă de e-mail a apărut în { $breachCount } breșe de date.
       *[other] Această adresă de e-mail a apărut în { $breachCount } de breșe de date.
    }
user-no-breaches-blurb = Te vom avertiza dacă adresa de e-mail apare în breșe noi.
guest-no-breaches-blurb = Pentru a vedea dacă adresa de e-mail apare în breșe de date sensibile, creează un { -brand-fxa }. Te vom avertiza și dacă această adresă apare în breșe noi de date.
user-one-breach-blurb = Această breșă a expus următoarele informații cu caracter personal.
user-fb-compromised-blurb =
    { $breachCount ->
        [one] Adresa ta de e-mail a apărut și într-o altă breșă.
        [few] Adresa ta de e-mail a apărut și în alte { $breachCount } breșe.
       *[other] Adresa ta de e-mail a apărut și în alte { $breachCount } de breșe.
    }
user-generic-fb-compromised-blurb =
    { $breachCount ->
        [one] Această adresă de e-mail a apărut și într-o altă breșă.
        [few] Această adresă de e-mail a apărut și în alte { $breachCount } breșe.
       *[other] Această adresă de e-mail a apărut și în alte { $breachCount } de breșe.
    }
user-fb-compromised-single =
    Această breșă a expus următoarele informații cu caracter personal. Dacă 
    nu ai făcut-o deja, schimbă-ți parola.
user-generic-fb-compromised-single = Această breșă a expus următoarele informații cu caracter personal.
guest-fb-compromised-single-v2 = Această breșă a expus următoarele date cu caracter personal. Creează un { -brand-fxa } gratuit pentru raportul complet cu breșele anterioare, avertizări pentru breșe noi și informații despre alte servicii { -brand-Mozilla }.
guest-fb-compromised-blurb-v2 =
    { $breachCount ->
        [one] Această adresă de e-mail a apărut și într-o altă breșă. Creează un { -brand-fxa } gratuit pentru raportul complet cu breșele anterioare, avertizări pentru breșe noi și informații despre alte servicii { -brand-Mozilla }.
        [few] Această adresă de e-mail a apărut și în alte { $breachCount } breșe. Creează un { -brand-fxa } gratuit pentru raportul complet cu breșele anterioare, avertizări pentru breșe noi și informații despre alte servicii { -brand-Mozilla }.
       *[other] Această adresă de e-mail a apărut și în alte { $breachCount } de breșe. Creează un { -brand-fxa } gratuit pentru raportul complet cu breșele anterioare, avertizări pentru breșe noi și informații despre alte servicii { -brand-Mozilla }.
    }
user-fb-not-compromised-blurb =
    { $breachCount ->
        [one] Nu ai apărut în breșa { $breachName }, dar am găsit adresa de e-mail în altă breșă.
        [few] Nu ai apărut în breșa { $breachName }, dar am găsit adresa de e-mail în alte breșe.
       *[other] Nu ai apărut în breșa { $breachName }, dar am găsit adresa de e-mail în alte breșe.
    }
user-generic-fb-not-compromised-blurb =
    { $breachCount ->
        [one] Această adresă de e-mail nu a apărut în breșa { $breachName }, dar am găsit-o în altă breșă.
        [few] Această adresă de e-mail nu a apărut în breșa { $breachName }, dar am găsit-o în alte breșe.
       *[other] Această adresă de e-mail nu a apărut în breșa { $breachName }, dar am găsit-o în alte breșe.
    }
guest-fb-not-compromised-blurb-v2 =
    { $breachCount ->
        [one] Această adresă de e-mail nu a apărut în breșa { $breachName }, dar am găsit-o în altă breșă. Creează un { -brand-fxa } gratuit pentru raportul complet cu breșele anterioare, avertizări pentru breșe noi și informații despre alte servicii { -brand-Mozilla }.
        [few] Această adresă de e-mail nu a apărut în breșa { $breachName }, dar am găsit-o în alte breșe. Creează un { -brand-fxa } gratuit pentru raportul complet cu breșele anterioare, avertizări pentru breșe noi și informații despre alte servicii { -brand-Mozilla }.
       *[other] Această adresă de e-mail nu a apărut în breșa { $breachName }, dar am găsit-o în alte breșe. Creează un { -brand-fxa } gratuit pentru raportul complet cu breșele anterioare, avertizări pentru breșe noi și informații despre alte servicii { -brand-Mozilla }.
    }
# While English doesn’t use the actual number of breaches in this sentence,
# you can use {$breachCount} to display the number of breaches in your localization.
user-found-breaches-blurb =
    { $breachCount ->
        [one] Această breșă a expus următoarele informații cu caracter personal. Dacă nu ai făcut-o deja, schimbă-ți parola.
        [few] Aceste breșe au expus următoarele informații cu caracter personal. Dacă nu ai făcut-o deja, schimbă-ți parolele.
       *[other] Aceste breșe au expus următoarele informații cu caracter personal. Dacă nu ai făcut-o deja, schimbă-ți parolele.
    }
# While English doesn’t use the actual number of breaches in this sentence,
# you can use {$breachCount} to display the number of breaches in your localization.
user-generic-found-breaches-blurb =
    { $breachCount ->
        [one] Această breșă a expus următoarele informații cu caracter personal.
        [few] Aceste breșe au expus următoarele informații cu caracter personal.
       *[other] Aceste breșe au expus următoarele informații cu caracter personal.
    }
have-an-account = Ai deja un cont?
signup-banner-sensitive-blurb = Află ce știu deja hackerii despre tine și cum să fii cu un pas înaintea lor. Primește avertismente în cazul în care contul tău apare în breșe noi de date.
fxa-pwt-section-blurb =
    Parolele protejează toate datele cu caracter personal din conturile tale online. Și
    hackerii se bazează pe obiceiuri proaste, cum ar fi folosirea aceleiași parole peste tot sau folosirea de fraze comune (@p@ssw0rd, oricine?), astfel încât, dacă sparg un cont, le sparg pe toate (sau mai multe).
fxa-pwt-summary-2 =
    Parolele scurte, formate dintr-un singur cuvânt, sunt ușor de ghicit pentru hackeri.
    Folosește cel puțin două cuvinte și o combinație de litere, cifre și caractere speciale.
fxa-pwt-summary-4 =
    Managerii de parole, cum ar fi 1Password, LastPass, Dashlane și Bitwarden îți stochează
    parolele și le completează pe site-uri pentru tine. Te vor ajuta chiar să creezi parole puternice.
fxa-pwt-summary-6 = Breșele de date sunt în creștere. Dacă informațiile tale cu caracter personal apar într-o breșă de date nouă, { -product-name } îți va trimite o alertă — astfel încât să iei măsuri și să îți protejezi conturile.
fxa-what-to-do-blurb-1 =
    Dacă nu te poți autentifica, contactează site-ul web și întreabă-i cum să îți actualizezi datele de identificare.
    Vezi un cont necunoscut? Este posibil ca datele tale să fi fost vândute
    sau redistribuite. Ar putea fi și un cont de care ai uitat sau o companie care și-a schimbat denumirea.
fxa-what-to-do-subhead-2 = Nu mai folosi parola expusă și schimb-o peste tot pe unde ai folosit-o.
fxa-wtd-blurb-2 = Hackerii pot încerca să reutilizeze parola și adresa ta de e-mail ca să intre în alte conturi. Creează o parolă diferită și unică pentru fiecare cont, în special pentru contul bancar, e-mail și alte site-uri web pe care salvezi date cu caracter personal.
fxa-what-to-do-blurb-3 = Cele mai multe breșe expun numai adrese de e-mail și parole, dar unele includ și date financiare sensibile. În cazul în care ți-au fost expuse contul bancar sau numerele cardurilor de credit, alertează banca asupra unei posibilități de fraudă. Monitorizează-ți extrasele de cont pentru plăți pe care nu le recunoști.
fxa-what-to-do-subhead-4 = Obține ajutor pentru a ține minte toate parolele și pentru a le păstra în siguranță.
fxa-what-to-do-blurb-4 =
    Managerii de parole, cum ar fi 1Password, LastPass, Dashlane și Bitwarden îți stochează
    parolele în siguranță și le completează pe site-uri pentru tine. Utilizează un manager de parole
    pe telefon și pe calculator, astfel încât să nu trebuiască să le ții minte pe toate.
fb-landing-headline = Ți-au fost expuse datele în breșa { $breachName }?
copyright = Porțiuni din acest conținut sunt © 1999-{ $year } de colaboratori individuali mozilla.org
content-available = Conținut disponibil sub o licență Creative Commons.
# Alerts is a noun
sign-up-for-alerts = Înregistrează-te pentru alerte
sign-up-for-fxa-alerts = Înregistrează-te pentru alerte { -product-name }.
create-free-account = Creează un { -brand-fxa } gratuit pentru raportul complet cu breșele anterioare, avertizări pentru breșe noi și informații despre alte servicii { -brand-Mozilla }.
get-your-report-and-sign-up = Obține raportul tău și înregistrează-te pentru alerte.
# Link title
frequently-asked-questions = Întrebări adresate frecvent
about-firefox-monitor = Despre { -product-name }
mozilla-dot-org = Mozilla.org
preferences = Preferințe
# Link title.
home = Acasă
# Link title
breaches = Breșe
# Link title
security-tips = Ponturi pentru securitate
fxa-account = { -brand-fxa }
# Aria button message to open menu. "Open Firefox Account Navigation"
open-fxa-menu = Deschide navigarea { -brand-fxa }
# Appears above a snippet about the breach most recently reported to Firefox Monitor.
latest-breach = ULTIMA BREȘĂ ADĂUGATĂ
breach-added = Breșă raportată:
breach-discovered = Breșă descoperită:
# Link title
more-about-this-breach = Mai multe despre această breșă
take-control = Reia controlul asupra datelor tale personale.
cant-stop-hackers = Nu poți opri hackerii să facă ceea ce fac, dar poți evita obiceiurile proaste care le ușurează munca.
read-more-tips = Citește mai multe ponturi pentru securitate
how-hackers-work = Înțelege modul de operare al hackerilor
monitor-your-online-accounts = Înscrie-te pentru monitorizarea breșelor cu un { -brand-fxa }.
stay-alert = Fii la curent cu ultimele breșe
if-your-info = Dacă informațiile tale apar într-o nouă breșă de date, îți vom trimite o alertă.
search-all-emails = Caută toate adresele tale de e-mail pentru breșe și primește alerte despre noi amenințări.
monitor-several-emails = Monitorizează mai multe adrese de e-mail
take-action = Ia măsuri pentru a-ți proteja conturile
keep-your-data-safe = Află ce trebuie să faci ca să îți păstrezi datele în siguranță împotriva infractorilor cibernetici.
website-breach = Breșă a site-ului web
sensitive-breach = Breșă de date sensibile a site-ului
data-aggregator-breach = Breșă a agregatoarelor de date
unverified-breach = Breșă neverificată
spam-list-breach = Breșă a listei de mesaje nedorite
website-breach-plural = Breșe de site-uri web
sensitive-breach-plural = Breșe de date sensibile
data-aggregator-breach-plural = Breșe ale agregatoarelor de date
unverified-breach-plural = Breșe neverificate
spam-list-breach-plural = Breșe ale listelor de mesaje nedorite
what-data = Ce date au fost compromise:
sensitive-sites = Cum tratează { -product-name } site-urile cu date sensibile?
sensitive-sites-copy = { -product-name } divulgă conturile asociate cu aceste tipuri de breșe numai după ce a fost verificată o adresă de e-mail. Înseamnă că ești singura persoană care poate vedea dacă informațiile tale au fost implicate în această breșă (dacă nu cumva și altcineva are acces la contul tău de e-mail).
delayed-reporting-headline = De ce a durat atât de mult raportarea acestei breșe?
delayed-reporting-copy = Poate dura câteva luni sau câțiva ani pentru ca datele de autentificare expuse într-o breșă de date să apară în dark web. Breșele vin adăugate în baza noastră de date imediat ce au fost descoperite și verificate.
about-fxm-headline = Despre { -product-name }
about-fxm-blurb = { -product-name } te avertizează în cazul în care conturile tale online au fost implicate într-o breșă de date. Află dacă  ai fost implicat(ă) într-o breșă de date, primește alerte despre breșe noi de date și ia măsuri pentru protejarea conturilor tale online. { -product-name } este furnizat de { -brand-Mozilla }.
fxm-warns-you = { -product-name } te avertizează dacă adresa ta de e-mail a fost expusă într-o breșă de date online. Vezi dacă ți-au fost expuse informațiile, afli cum să-ți protejezi mai bine conturile online și primești alerte în cazul în care adresa ta de e-mail apare în breșe noi de date.
# How Firefox Monitor works
how-fxm-works = Cum funcționează { -product-name }
how-fxm-1-headline = Efectuează o căutare de bază
how-fxm-1-blurb = Caută-ți adresa de e-mail în breșele publice de date încă din anul 2007. Această căutare de bază va accesa majoritatea breșelor de date, dar nu și pe cele care conține informații personale sensibile.
how-fxm-2-headline = Înregistrează-te pentru monitorizarea breșelor
how-fxm-2-blurb = Creează un { -brand-fxa } ca să îți monitorizezi adresa de e-mail pentru breșe curente. Odată ce ți-ai verificat adresa de e-mail, vei primi și un raport complet cu breșele anterioare, inclusiv breșe de date sensibile.
how-fxm-3-headline = Primește notificări în browser
how-fxm-3-blurb = Dacă folosești { -brand-name }, vei primi o notificare când intri pe un site care a fost spart. Afli imediat dacă ai fost implicat(ă) în breșa respectivă și ce măsuri poți lua.
wtd-after-website = Ce să faci după o breșă pe un site web
wtd-after-data-agg = Ce să faci după o breșă a unui agregator de date
what-is-data-agg = Ce sunt agregatoarele de date?
what-is-data-agg-blurb = Agregatoarele de date, cunoscute și sub denumirea de brokeri de date, colectează informații din înregistrări publice și cumpără date de la alte companii. Ele compilează aceste date pentru a le vinde altor companii în scopuri de marketing. Victimele acestor breșe prezintă o probabilitate mai mică de fraude financiare, dar hackerii pot folosi aceste date pentru a le uzurpa identitatea sau pentru profilare.
protect-your-privacy = Protejează-ți confidențialitatea online
no-pw-to-change = Spre deosebire  de breșele site-urilor web, nu există nicio parolă de schimbat.
avoid-personal-info = Evită folosirea de informații personale în parole
avoid-personal-info-blurb = Datele de naștere, adresele și numele membrilor familiei sunt ușor de găsit online. Nu introdu asemenea cuvinte în parole.

## What to do after data breach tips

change-pw = Schimbă-ți parola
even-for-old = Actualizarea parolelor este importantă, chiar și pentru conturile vechi.
make-new-pw-unique = Parola nouă trebuie să fie diferită și unică
strength-of-your-pw = Puterea parolelor are un impact direct asupra securității tale online.
create-strong-passwords = Cum să creezi parole puternice
stop-reusing-pw = Nu refolosi parolele
create-unique-pw = Creează parole unice și salvează-le într-un loc sigur, cum ar fi un manager de parole.
five-myths = 5 mituri despre managerii de parole
create-a-fxa = Creează { -brand-fxa } pentru un raport complet despre breșe și ca să primești alerte.
feat-security-tips = Ponturi de securitate pentru protejarea conturilor
feat-sensitive = Căutare avansată în breșe de date sensibile
feat-enroll-multiple = Înregistrează mai multe adrese de e-mail pentru monitorizarea breșelor
sign-up-for-fxa = Înregistrează-te pentru un { -brand-fxa }
# This string is shown beneath each of the user’s email addresses to indicate
# how many known breaches that email address was found in. 
appears-in-x-breaches =
    { $breachCount ->
        [one] Apare în { $breachCount } breșă cunoscută
        [few] Apare în { $breachCount } breșe cunoscute
       *[other] Apare în { $breachCount } de breșe cunoscute
    }
see-if-breached = Vezi dacă apari într-o breșă de date online.
check-for-breaches = Verifică pentru breșe
find-out-what-hackers-know = Află ce știu hackerii despre tine. Află cum să fii cu un pas înaintea lor.
search-for-your-email = Caută-ți adresa de e-mail în breșe de date publice datând încă din 2007.
back-to-top = Înapoi sus
comm-opt-0 = Trimite-mi un mesaj pe e-mail dacă adresele mele de e-mail de mai jos apar într-o breșă de date.
comm-opt-1 = Trimite toate alertele de breșe la { $primaryEmail }.
stop-monitoring-this = Nu mai monitoriza acest e-mail.
resend-verification = Retrimite  mesajul e-mail de verificare
add-new-email = Adaugă o adresă nouă de e-mail
send-verification = Trimite linkul de verificare
# This string is a header on the user preferences page and
# appears above a check-box list of user options which allow
# the user to choose whether or not they want to receive breach
# alerts for all of their monitored email addresses to a single 
# email address.
global-communication = Comunicații globale
breach-summary = Rezumat breșă
show-breaches-for-this-email = Afișează toate breșele pentru acest e-mail.
link-change-primary = Schimbă adresa de e-mail primară
remove-fxm = Elimină { -product-name }
remove-fxm-blurb = Dezactivează alertele { -product-name }. { -brand-fxa } tău va rămâne activ și poți primi alte comunicări legate de cont.
manage-email-addresses = Gestionează adresele de e-mail
latest-breach-link = Vezi dacă ai fost implicat(ă) în această breșă
welcome-back = Bine ai revenit, { $userName }!
welcome-user = Bine ai venit, { $userName }!
breach-alert-subject = { -product-name } ți-a găsit adresa de e-mail într-o breșă nouă de date.
your-info-was-discovered-headline = Informațiile tale au fost găsite într-o breșă nouă de date.
your-info-was-discovered-blurb = Te-ai înscris ca să primești alerte { -product-name } în cazul în care adresa ta de e-mail apare într-o breșă de date. Iată ce știm despre această breșă.
what-to-do-after-breach = Ce să faci după o breșă de date
ba-next-step-1 = Schimbă parola cu una puternică și unică.
ba-next-step-blurb-1 = Parolele puternice folosesc o combinație de litere mari și  mici, caractere speciale și cifre. Nu conțin informații personale, cum ar fi date de naștere, adrese sau nume ale membrilor de familie.
ba-next-step-2 = Nu mai folosi deloc parola expusă.
ba-next-step-blurb-2 = Infractorii cibernetici îți pot găsi parola pe dark web și o pot folosi pentru a intra în celelalte conturi pe care le deții. Cea mai bună cale de a-ți proteja conturile este să folosești parole unice pentru fiecare în parte.
ba-next-step-3 = Obține ajutor pentru a crea parole mai bune și pentru a le păstra în siguranță.
ba-next-step-blurb-3 = Folosește un manager de parole pentru a crea parole puternice și unice. Managerii de parole stochează în siguranță toate sesiunile deschise și le poți accesa pe toate dispozitivele tale.
faq1 = Nu recunosc această companie sau site web. De ce apar în această breșă?
faq2 = De ce a durat atât de mult să fiu informat(ă) despre această breșă?
faq3 = Cum știu că acesta este un mesaj legitim de e-mail de la { -product-name }?
new-breaches-found =
    { $breachCount ->
        [one] BREȘĂ NOUĂ DESCOPERITĂ
        [few] BREȘE NOI DESCOPERITE
       *[other] DE BREȘE NOI DESCOPERITE
    }
sign-up-headline-1 = Primește alerte curente cu un { -brand-fxa }.
account-not-required = Browserul { -brand-name } nu este necesar pentru un { -brand-fxa }. Poți primi informații despre serviciile { -brand-Mozilla }.
get-alerted = Primește alerte despre breșe noi.
was-your-info-exposed = Ți-au fost expuse informațiile în breșa de date { $breachName }?
find-out-if = Află dacă datele tale au fost expuse în această breșă.
fb-not-comp = Această adresă de e-mail nu apare în breșa { $breachName }.
other-breaches-found =
    { $breachCount ->
        [one] Însă apare în { $breachCount } altă breșă.
        [few] Însă apare în { $breachCount } alte breșe.
       *[other] Însă apare în { $breachCount } de alte breșe.
    }
fb-comp-only = Această adresă de e-mail a apărut în breșa { $breachName }.
fb-comp-and-others =
    { $breachCount ->
        [one] Această adresă de e-mail a apărut în { $breachCount } breșă cunoscută de date, inclusiv { $breachName }.
        [few] Această adresă de e-mail a apărut în { $breachCount } breșe cunoscute de date, inclusiv { $breachName }.
       *[other] Această adresă de e-mail a apărut în { $breachCount } de breșe cunoscute de date, inclusiv { $breachName }.
    }
no-other-breaches-found = Nicio altă breșă identificată la căutarea de bază.
no-results-blurb = Ne pare rău, dar breșa aceea nu este în baza noastră de date.
all-breaches-headline = Toate breșele din { -product-name }
search-breaches = Caută breșe
# "Appears in-page as: Showing: All Breaches"
currently-showing = Afișate:
all-breaches = Toate breșele

## Updated error messages

error-bot-headline = Căutări suspendate temporar
error-bot-blurb = Suntem îngrijorați că ai putea fi robot pentru că ai căutat mai multe adrese de e-mail într-un timp foarte scurt. Deocamdată, ai accesul blocat la căutări noi. Poți încerca mai târziu.
error-csrf-headline = Sesiune expirată
error-csrf-blurb = Selectează butonul Înapoi din browser, reîncarcă pagina și încearcă din nou.
error-invalid-unsub = Cum să te dezabonezi de la alertele { -product-name }
error-invalid-unsub-blurb = Va trebui să te dezabonezi folosind unul dintre mesajele de e-mail trimise de { -product-name }. Verifică-ți căsuța poștală pentru mesaje de la { -brand-team-email }. Selectează linkul de dezabonare din partea de jos a mesajului.
login-link-pre = Ai un cont?
login-link = Autentifică-te
# This string is displayed under a large numeral that indicates the total number
# of email address a user has signed up for monitoring. Don’t add $emails to
# your localization, because it would result in the number showing twice.
email-addresses-being-monitored =
    { $emails ->
        [one] adresă de e-mail monitorizată
        [few] adrese de e-mail monitorizate
       *[other] de adrese de e-mail monitorizate
    }
# This string is displayed under a large numeral that indicates the total number
# of data breaches that have exposed the user’s information. Don’t add $breaches to
# your localization, because it would result in the number showing twice.
data-breaches-exposed =
    { $breaches ->
        [one] breșă de date ți-a expus informațiile
        [few] breșe de date ți-au expus informațiile
       *[other] de breșe de date ți-au expus informațiile
    }
# This string is displayed under a large numeral that indicates the total number
# of data breaches that exposed a user’s password. Don’t add $passwords to
# your localization, because it would result in the number showing twice.
passwords-exposed =
    { $passwords ->
        [one] parolă expusă în toate breșele
        [few] parole expuse în toate breșele
       *[other] de parole expuse în toate breșele
    }
# Button
see-additional-breaches = Afișează și alte breșe
# A button on the All Breaches page that restores all of the breaches
# back to the page if the user has filtered some of them out.
see-all-breaches = Afișează toate breșele
scan-results-known-breaches =
    { $breachCount ->
        [one] Această adresă de e-mail a apărut în 1 breșă cunoscută de date.
        [few] Această adresă de e-mail a apărut în { $breachCount } breșe cunoscute.
       *[other] Această adresă de e-mail a apărut în { $breachCount } de breșe cunoscute.
    }
# This string is shown at the top of the scan results page and is followed
# by the email address that the user searched.
# In page, it reads "Results for: searchedEmail@monitor.com"
results-for = Rezultate pentru: { $userEmail }
other-monitored-emails = Alte adrese de e-mail monitorizate
email-verification-required = Este necesară verificarea adresei de e-mail
fxa-primary-email = Adresă de e-mail { -brand-fxa } - primară
what-is-a-website-breach = Ce sunt breșele de site-uri web?
website-breach-blurb = Breșele de site-uri web apar când infractorii cibernetici fură, copiază sau expun date cu caracter personal din conturi online. Apar de obicei ca rezultat al faptului că hackerii au identificat un punct slab în securitatea site-ului.Breșele pot apărea și la „scurgerea” accidentală a informațiilor din conturi.
security-tips-headline = Ponturi de securitate pentru a te proteja de hackeri
steps-to-protect = Pași de luat pentru a-ți proteja identitatea online
take-further-steps = Ia măsuri suplimentare pentru a-ți proteja identitatea
alert-about-new-breaches = Trimite-mi alerte pentru breșe noi
see-if-youve-been-part = Vezi dacă ai fost implicat(ă) într-o breșă de date online.
get-ongoing-breach-monitoring = Obține monitorizare curentă pentru breșe pentru mai multe adrese de e-mail.
# This is a button and follows a headline reading "Was your info exposed in the ___ breach?"
find-out = Află
new-unsub-error = Va trebui să te dezabonezi prin intermediul unuia dintre mesajele primite pe e-mail de la { -product-name },
other-known-breaches-found =
    { $breachCount ->
        [one] Însă a apărut în { $breachCount } altă breșă cunoscută.
        [few] Însă a apărut în { $breachCount } alte breșe cunoscute.
       *[other] Însă a apărut în { $breachCount } de alte breșe cunoscute.
    }
# This string appears on breach detail pages and is followed by a list
# of data classes that the breach exposed.
additional-information-including = Informații suplimentare, inclusiv:
# Title
email-addresses-title = Adrese de e-mail
# This is a standardized breach overview blurb that appears on all breach detail pages.
# $breachTitle is the name of the breached company or website.
# $breachDate and $addedDate are calendar dates.
breach-overview = La { $breachDate }, { $breachTitle } a avut o breșă. Odată ce breșa a fost descoperită și verificată, a fost adăugată în baza noastră de date la { $addedDate }.
# Title appearing on the Preferences dashboard. 
monitor-preferences = Preferințe { -product-short-name }
# When a user is signed in, this appears in the drop down menu 
# and is followed by the user's primary Firefox Account email. 
signed-in-as = Autentificat ca: { $userEmail }
# Appears on the All Breaches page and is followed by a list of filter options
# that a user can filter the visible breaches by.
filter-by = Filtrează pe categorii:
# Title that appears in the mobile menu bar and opens the mobile menu when clicked.
menu = Meniu
to-affected-email = Trimite alerte pentru breșe de date către adresele de e-mail afectate
# This string appears in a banner at the top of each page and is followed by a "Learn More" link.
join-firefox = Există o modalitate de a-ți proteja confidențialitatea. Alătură-te { -brand-name }.
# Link title
learn-more-link = Află mai multe.
