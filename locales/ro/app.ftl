# Strings for the main app


## The following messages are brand and should be kept entirely in English
## unless otherwise indicated.

-product-name = Mozilla Monitor
-product-name-nowrap = <span class="nowrap">{ -product-name }</span>
-product-short-name = Monitor
-brand-name = Firefox
-brand-Mozilla = Mozilla
-brand-HIBP = Have I Been Pwned
-brand-fxa =
    { $case ->
       *[indefinite-article]
            { $capitalization ->
               *[lower] cont Firefox
                [upper] Cont Firefox
            }
        [definite-article]
            { $capitalization ->
               *[lower] contul Firefox
                [upper] Contul Firefox
                [upper-and-you] Contul tău Firefox
            }
        [genitive-or-dative]
            { $capitalization ->
               *[lower] contului Firefox
            }
    }
-brand-pocket = Pocket
-brand-lockwise = Firefox Lockwise
-brand-send = Firefox Send
-brand-fpn = Firefox Private Network

##

GitHub-link-title = GitHub

error-scan-page-token = Ai încercat să scanezi prea multe adrese de e-mail într-un timp prea scurt. Din motive de securitate, ți-am blocat accesul la căutări noi. Poți încerca mai târziu.
error-could-not-add-email = Adresa de e-mail nu a putut fi adăugată în baza de date.
error-not-subscribed = Această adresă de e-mail nu este abonată la { -product-name }.
error-hibp-throttled = Prea multe conexiuni la { -brand-HIBP }.
error-hibp-connect = Eroare de conectare la { -brand-HIBP }.
error-hibp-load-breaches = Încălcările securității datelor nu au putut fi încărcate.
error-must-be-signed-in = Trebuie să fii autentificat(ă) în { -brand-fxa(case: "definite-article") }.
error-to-finish-verifying = Pentru a finaliza verificarea acestui e-mail pentru { -product-name }, trebuie să fii autentificat(ă) sub e-mailul principal al contului.

home-title = { -product-name }
home-not-found = Pagină negăsită.

oauth-invalid-session = Sesiune nevalidă

scan-title = { -product-name } : Rezultatele scanării

user-add-invalid-email = E-mail nevalid
user-add-too-many-emails = Monitorizezi numărul maxim de adrese de e-mail.
user-add-email-verify-subject = Verifică-ți abonamentul la { -product-name }.
user-add-duplicate-email = Acest e-mail a fost deja adăugat în { -product-name }.
user-add-duplicate-email-part-2 = Intră pe { $preferencesLink } pentru a verifica starea { $userEmail }.

error-headline = Eroare
user-verify-token-error = Este necesar un jeton de verificare.
user-verify-email-report-subject = Raportul tău { -product-name }

user-unsubscribe-token-error = Este necesar un jeton pentru dezabonare.
user-unsubscribe-token-email-error = Este necesar un jeton și emailHash pentru dezabonare.
user-unsubscribe-title = { -product-name } : Dezabonare

pwt-section-headline = Parole mai puternice = Protecție mai bună

landing-headline = Dreptul tău la protecția împotriva hackerilor începe aici.

scan-placeholder = Introdu adresa de e-mail
scan-submit = Caută-ți adresa de e-mail
scan-error = Trebuie să fie o adresă de e-mail validă.

download-firefox-banner-button = Descarcă { -brand-name }

# Appears after Firefox Monitor has sent a verification email to a new user. 
signup-modal-sent = Trimis!

sign-up = Înscrie-te
form-signup-error = Trebuie să fie o adresă de e-mail validă

# breach-date = the calendar date a particular data theft occurred. 
breach-date = Data încălcării securității datelor:

# compromised accounts = the total number of user accounts exposed in data breach
compromised-accounts = Conturi compromise:

# compromised-data = the kind of user data exposed to hackers in data breach.
compromised-data = Date compromise:

unsub-headline = Dezabonează-te de la { -product-name-nowrap }
unsub-blurb = Adresa ta de e-mail va fi eliminată din lista { -product-name-nowrap } și nu vei mai primi alerte când sunt anunțate încălcări noi ale securității datelor.
unsub-button = Dezabonează-te

# Breach data provided by Have I Been Pwned.
hibp-attribution = Datele privind încălcările securității datelor sunt furnizate de { $hibp-link }

share-twitter = Majoritatea persoanelor au aproximativ 100 de conturi online. A fost expus vreunul dintre conturile tale într-o încălcare a securității datelor? Află.
share-facebook-headline = Află dacă ai fost implicat(ă) într-o încălcare a securității datelor
share-facebook-blurb = Au fost expuse conturile tale online într-o încălcare a securității datelor?
og-site-description = Află dacă ai fost implicat(ă) într-o încălcare a securității datelor cu { -product-name }. Înscrie-te pentru alerte despre viitoare încălcări ale securității datelor și obține ponturi pentru a-ți păstra conturile în siguranță.

show-all = Afișează toate

fxa-scan-another-email = Vrei să verifici altă adresă de e-mail?

sign-out = Deconectare

# Manage Firefox Account, link to page where account holders can change their account settings.
manage-fxa = Gestionează { -brand-fxa(case: "definite-article") }.

have-an-account = Ai deja un cont?

fxa-pwt-summary-2 =
    Parolele scurte, formate dintr-un singur cuvânt, sunt ușor de ghicit pentru hackeri.
    Folosește cel puțin două cuvinte și o combinație de litere, cifre și caractere speciale.

fxa-pwt-summary-4 =
    Managerele de parole, cum ar fi 1Password, LastPass, Dashlane și Bitwarden îți stochează
    parolele și le completează pe site-uri pentru tine. Te vor ajuta chiar să creezi parole puternice.

fxa-pwt-summary-6 = Încălcările securității datelor sunt tot mai multe. Dacă datele tale cu caracter personal apar într-o nouă încălcare a securității datelor, { -product-name } îți va trimite o alertă — ca să iei măsuri și să îți protejezi conturile.

fxa-what-to-do-blurb-1 =
    Dacă nu te poți autentifica, contactează site-ul web și întreabă-i cum să îți actualizezi datele de identificare.
    Vezi un cont necunoscut? Este posibil ca datele tale să fi fost vândute
    sau redistribuite. Ar putea fi și un cont de care ai uitat sau o companie care și-a schimbat denumirea.

fxa-what-to-do-subhead-2 = Nu mai folosi parola expusă și schimb-o peste tot pe unde ai folosit-o.
fxa-wtd-blurb-2 = Hackerii pot încerca să reutilizeze parola și adresa ta de e-mail ca să intre în alte conturi. Creează o parolă diferită și unică pentru fiecare cont, în special pentru contul bancar, e-mail și alte site-uri web pe care salvezi date cu caracter personal.

fxa-what-to-do-blurb-3 = Cele mai multe încălcări ale securității datelor expun numai adrese de e-mail și parole, dar unele includ și date financiare sensibile. Dacă ți-au fost expuse conturi bancare sau numerele cardurilor de credit, alertează banca asupra unei posibilități de fraudă. Urmărește extrasele de cont pentru plăți pe care nu le recunoști.

fxa-what-to-do-subhead-4 = Obține ajutor pentru a ține minte toate parolele și pentru a le păstra în siguranță.
fxa-what-to-do-blurb-4 =
    Managerele de parole, cum ar fi 1Password, LastPass, Dashlane și Bitwarden îți stochează
    parolele în siguranță și le completează pe site-uri pentru tine. Folosește un manager de parole
    pe telefon și pe calculator, astfel încât să nu trebuiască să le ții minte pe toate.

# Alerts is a noun
sign-up-for-alerts = Înscrie-te pentru alerte

# Link title
frequently-asked-questions = Întrebări adresate frecvent

about-firefox-monitor = Despre { -product-name }

# Link title
preferences = Preferințe

# Link title
home = Acasă

# Link title
security-tips = Ponturi de securitate

fxa-account = { -brand-fxa(case: "indefinite-article", capitalization: "upper") }

# Aria button message to open menu. "Open Firefox Account Navigation"
open-fxa-menu = Deschide navigarea în { -brand-fxa(case: "definite-article") }

# Appears above a snippet about the breach most recently reported to Firefox Monitor.
latest-breach = ULTIMA ÎNCĂLCARE A SECURITĂȚII DATELOR ADĂUGATĂ

# Link title
more-about-this-breach = Mai multe despre această încălcare

take-control = Reia controlul asupra datelor tale personale.
cant-stop-hackers = Nu poți opri hackerii să facă ceea ce fac, dar poți evita obiceiurile proaste care le ușurează munca.
read-more-tips = Citește mai multe ponturi de securitate

how-hackers-work = Înțelege modul de operare al hackerilor

monitor-your-online-accounts = Înscrie-te pentru monitorizarea încălcărilor securității datelor cu un { -brand-fxa }.
stay-alert = Fii la curent cu ultimele încălcări ale securității datelor
if-your-info = Dacă informațiile tale apar într-o nouă încălcare a securității datelor, îți vom trimite o alertă.
search-all-emails = Verifică-ți toate adresele de e-mail pentru încălcări ale securității datelor și primește alerte despre noi amenințări.
monitor-several-emails = Monitorizează mai multe adrese de e-mail
take-action = Ia măsuri pentru a-ți proteja conturile
keep-your-data-safe = Află ce trebuie să faci ca să îți păstrezi datele în siguranță împotriva infractorilor cibernetici.

website-breach = Încălcare în cazul unui site web
sensitive-breach = Încălcare în cazul unui site web sensibil
data-aggregator-breach = Încălcare în cazul unui agregator de date
unverified-breach = Încălcare neverificată
spam-list-breach = Încălcare în cazul unei liste de spam

website-breach-plural = Încălcări în cazul site-urilor web
sensitive-breach-plural = Încălcări ale securității datelor sensibile
data-aggregator-breach-plural = Încălcari în cazul agregatoarelor de date
unverified-breach-plural = Încălcări neverificate
spam-list-breach-plural = Încălcări în cazul listelor de spam

what-data = Ce date au fost compromise:

sensitive-sites = Cum tratează { -product-name } site-urile cu date sensibile?
sensitive-sites-copy =
    { -product-name } divulgă conturile asociate cu aceste 
    tipuri de încălcări ale securității datelor numai după ce a fost verificată o adresă de e-mail. Acest lucru înseamnă că ești 
    singura persoană care poate vedea dacă informațiile tale au fost implicate în această încălcare a securității datelor 
    (dacă nu cumva și altcineva are acces la contul tău de e-mail).

delayed-reporting-headline = De ce a durat atât de mult să se raporteze această încălcare a securității datelor?
delayed-reporting-copy = Uneori, poate dura luni sau ani ca datele de autentificare expuse într-o încălcare a securității datelor să apară pe webul întunecat. Încălcările sunt adăugate în baza noastră de date imediat ce sunt descoperite și verificate.

about-fxm-headline = Despre { -product-name }
about-fxm-blurb =
    { -product-name } te avertizează în cazul în care conturile tale online au fost implicate într-o 
    încălcare a securității datelor. Află dacă ai fost implicat(ă) într-o încălcare a securității datelor, primește alerte 
    despre noile încălcări ale securității datelor și ia măsuri pentru protejarea conturilor tale online. { -product-name } 
    este furnizat de { -brand-Mozilla }.

fxm-warns-you = { -product-name } te avertizează dacă adresa ta de e-mail a fost expusă într-o încălcare online a securității datelor. Vezi dacă ți-au fost expuse informațiile, află cum să îți protejezi mai bine conturile online și primește alerte în cazul în care adresa ta de e-mail apare într-o încălcare nouă.

# How Firefox Monitor works
how-fxm-works = Cum funcționează { -product-name }

how-fxm-1-headline = Efectuează o căutare de bază
how-fxm-1-blurb = Caută-ți adresa de e-mail în încălcările publice ale securității datelor începând cu anul 2007. Această căutare de bază va accesa majoritatea încălcărilor securității datelor, dar nu și pe cele care conțin informații cu caracter personal sensibile.

how-fxm-2-headline = Înscrie-te pentru monitorizarea încălcării securității datelor
how-fxm-2-blurb = Creează un { -brand-fxa } ca să îți monitorizezi adresa de e-mail pentru încălcările curente ale securității datelor. Odată ce ți-ai verificat adresa de e-mail, vei primi și un raport complet cu încălcările anterioare, inclusiv încălcările securității datelor sensibile.

how-fxm-3-headline = Primește notificări în browser
how-fxm-3-blurb = Dacă folosești { -brand-name }, vei primi o notificare când intri pe un site care a fost suferit o încălcare a securității datelor. Afli imediat dacă ai fost implicat(ă) în încălcarea respectivă și ce măsuri poți lua.

wtd-after-website = Ce să faci după o încălcare a securității datelor în cazul unui site web:
wtd-after-data-agg = Ce să faci după o încălcare a securității datelor în cazul unui agregator de date:

what-is-data-agg = Ce sunt agregatoarele de date?
what-is-data-agg-blurb = Agregatoarele de date, denumite și brokeri de date, colectează informații din înregistrări publice și cumpără date de la alte companii. Ele compilează aceste date și le vând altor companii în scopuri de marketing. Probabilitatea ca victimele acestor încălcări a securității datelor să devină victime ale fraudelor financiare este mică, dar hackerii pot folosi datele pentru a le uzurpa identitatea sau pentru profilare.

protect-your-privacy = Protejează-ți confidențialitatea online
no-pw-to-change = Spre deosebire de încălcarea securității datelor în cazul unui site web, nu trebuie schimbată nicio parolă.

avoid-personal-info = Evită folosirea de informații personale în parole
avoid-personal-info-blurb = Datele de naștere, adresele și numele membrilor familiei sunt ușor de găsit online. Nu introdu asemenea cuvinte în parole.

## What to do after data breach tips

change-pw = Schimbă-ți parola
change-pw-site = Schimbă parola pentru acest site
even-for-old = Actualizarea parolelor este importantă, chiar și pentru conturile vechi.

make-new-pw-unique = Parola nouă trebuie să fie diferită și unică
strength-of-your-pw = Puterea parolelor are un impact direct asupra securității tale online.
create-strong-passwords = Cum să creezi parole puternice

stop-reusing-pw = Nu refolosi parolele
create-unique-pw = Creează parole unice și salvează-le într-un loc sigur, cum ar fi un manager de parole.
five-myths = 5 mituri despre managerele de parole

create-a-fxa = Creează un { -brand-fxa } pentru un raport complet despre încălcările securității datelor și pentru a primi alerte.

feat-security-tips = Ponturi de securitate pentru protejarea conturilor
feat-sensitive = Căutare avansată în încălcările cunoscute ale securității datelor sensibile
feat-enroll-multiple = Înregistrează mai multe adrese de e-mail pentru monitorizarea încălcărilor securității datelor

# This string is shown beneath each of the user’s email addresses to indicate
# how many known breaches that email address was found in. 
appears-in-x-breaches =
    { $breachCount ->
        [one] Apare într-o încălcare cunoscută a securității datelor.
        [few] Apare în { $breachCount } încălcări cunoscute ale securității datelor.
       *[other] Apare în { $breachCount } de încălcări cunoscute ale securității datelor.
    }

check-for-breaches = Caută încălcări ale securității datelor
find-out-what-hackers-know = Află ce știu hackerii despre tine. Află cum să fii cu un pas înaintea lor.
get-email-alerts = Rămâi în siguranță: Primește alerte pe e-mail când informațiile tale apar într-o încălcare cunoscută a securității datelor
search-for-your-email = Caută-ți adresa de e-mail în încălcările publice ale securității datelor începând cu anul 2007.

back-to-top = Înapoi în partea de sus

comm-opt-0 = Trimite-mi un mesaj pe e-mail dacă adresele mele de e-mail de mai jos apar într-o încălcare a securității datelor.
comm-opt-1 = Trimite toate alertele privind încălcările securității datelor la { $primaryEmail }.

stop-monitoring-this = Nu mai monitoriza acest e-mail.
resend-verification = Retrimite  mesajul e-mail de verificare

add-new-email = Adaugă o adresă nouă de e-mail
send-verification = Trimite linkul de verificare

# This string is a header on the user preferences page and
# appears above a check-box list of user options which allow
# the user to choose whether or not they want to receive breach
# alerts for all of their monitored email addresses to a single 
# email address.
breach-summary = Rezumatul încălcării securității datelor

show-breaches-for-this-email = Afișează toate încălcările securității datelor pentru acest e-mail.

link-change-primary = Schimbă adresa de e-mail principală

remove-fxm = Elimină { -product-name }
remove-fxm-blurb = Dezactivează alertele { -product-name }. { -brand-fxa(case: "definite-article", capitalization: "upper-and-you") } va rămâne activ și poți primi alte comunicări legate de cont.

# Button title
manage-email-addresses = Gestionează adresele de e-mail

# Link title
latest-breach-link = Vezi dacă ai fost implicat(ă) în această încălcare a securității datelor

## Variables:
##   $userName (String) - Username

welcome-back = Bine ai revenit, { $userName }!
welcome-user = Bine ai venit, { $userName }!

##

breach-alert-subject = { -product-name } ți-a găsit adresa de e-mail într-o nouă încălcare a securității datelor


your-info-was-discovered-headline = Informațiile tale au fost găsite într-o nouă încălcare.
your-info-was-discovered-blurb = Te-ai înscris ca să primești alerte { -product-name } atunci când adresa ta de e-mail apare într-o încălcare a securității datelor. Iată ce știm despre această încălcare.

what-to-do-after-breach = Ce să faci după o încălcare a securității datelor

ba-next-step-1 = Schimbă parola cu una puternică și unică.
ba-next-step-blurb-1 = Parolele puternice folosesc o combinație de litere mari și  mici, caractere speciale și cifre. Nu conțin informații personale, cum ar fi date de naștere, adrese sau nume ale membrilor de familie.

ba-next-step-2 = Nu mai folosi deloc parola expusă.
ba-next-step-blurb-2 = Infractorii cibernetici îți pot găsi parola pe dark web și o pot folosi pentru a intra în celelalte conturi pe care le deții. Cea mai bună cale de a-ți proteja conturile este să folosești parole unice pentru fiecare în parte.

ba-next-step-3 = Obține ajutor pentru a crea parole mai bune și pentru a le păstra în siguranță.
ba-next-step-blurb-3 = Folosește un manager de parole pentru a crea parole puternice și unice. Managerele de parole stochează toate datele de autentificare în siguranță, astfel încât să le poți accesa pe toate dispozitivele tale.

faq1 = Nu recunosc această companie sau site web. De ce apar în această încălcare?
faq2 = De ce a durat atât de mult să fiu informat(ă) despre această încălcare a securității datelor?
faq3 = Cum știu că acesta este un mesaj legitim de e-mail de la { -product-name }?

new-breaches-found =
    { $breachCount ->
        [one] { $breachCount } NOUĂ ÎNCĂLCARE DESCOPERITĂ A SECURITĂȚII DATELOR
        [few] { $breachCount } NOI ÎNCĂLCĂRI DESCOPERITE ALE SECURITĂȚII DATELOR
       *[other] { $breachCount } DE NOI ÎNCĂLCĂRI DESCOPERITE ALE SECURITĂȚII DATELOR
    }

sign-up-headline-1 = Primește alerte curente cu un { -brand-fxa }.
account-not-required = Browserul { -brand-name } nu este necesar pentru un { -brand-fxa }. Poți primi informații despre serviciile { -brand-Mozilla }.

## Variables:
##   $breachName (String) - Number of the breach

was-your-info-exposed = Ți-au fost expuse informațiile în încălcarea securității datelor de pe { $breachName }?

fb-not-comp = Această adresă de e-mail nu apare în încălcarea securității datelor de pe { $breachName }.

other-breaches-found =
    { $breachCount ->
        [one] Însă a apărut într-o altă încălcare.
        [few] Însă a apărut în alte { $breachCount } încălcări.
       *[other] Însă a apărut în alte { $breachCount } de încălcări.
    }

fb-comp-only = Această adresă de e-mail a apărut în încălcarea securității datelor de pe { $breachName }.
fb-comp-and-others =
    { $breachCount ->
        [one] Această adresă de e-mail a apărut în { $breachCount } încălcare cunoscută a securității datelor, inclusiv { $breachName }.
        [few] Această adresă de e-mail a apărut în { $breachCount } încălcări cunoscute ale securității datelor, inclusiv { $breachName }.
       *[other] Această adresă de e-mail a apărut în { $breachCount } de încălcări cunoscute ale securității datelor, inclusiv { $breachName }.
    }

##

no-other-breaches-found = Nicio altă încălcare identificată la căutarea de bază.

no-results-blurb = Ne pare rău, acea încălcare a securității datelor nu este în baza noastră de date.

# "Appears in-page as: Showing: All Breaches"
currently-showing = Afișate:

## Updated error messages

error-bot-headline = Căutări suspendate temporar
error-bot-blurb = Suntem îngrijorați că ai putea fi robot pentru că ai căutat mai multe adrese de e-mail într-un timp foarte scurt. Deocamdată, ai accesul blocat la căutări noi. Poți încerca mai târziu.

error-csrf-headline = Sesiune expirată
error-csrf-blurb = Selectează butonul Înapoi din browser, reîncarcă pagina și încearcă din nou.

error-invalid-unsub = Cum să te dezabonezi de la alertele { -product-name }
error-invalid-unsub-blurb = Va trebui să te dezabonezi folosind unul dintre mesajele de e-mail trimise de { -product-name }. Verifică-ți căsuța poștală pentru mesaje de la { -brand-team-email }. Selectează linkul de dezabonare din partea de jos a mesajului.

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
# of data breaches that exposed a user’s password. Don’t add $passwords to
# your localization, because it would result in the number showing twice.
passwords-exposed =
    { $passwords ->
        [one] parolă expusă în toate încălcările securității datelor
        [few] parole expuse în toate încălcările securității datelor
       *[other] de parole expuse în toate încălcările securității datelor
    }

# This string is displayed under a large numeral that indicates the total number
# of data breaches that have exposed the user’s information. Don’t add $breaches to
# your localization, because it would result in the number showing twice.
known-data-breaches-exposed =
    { $breaches ->
        [one] încălcare cunoscută a securității datelor ți-a expus informațiile
        [few] încălcări cunoscute ale securității datelor ți-au expus informațiile
       *[other] de încălcări cunoscute ale securității datelor ți-au expus informațiile
    }

# Button
see-additional-breaches = Vezi și alte încălcări ale securității datelor

scan-results-known-breaches =
    { $breachCount ->
        [one] Aceeastă adresă de e-mail a apărut într-o încălcare cunoscută a securității datelor.
        [few] Aceeastă adresă de e-mail a apărut în { $breachCount } încălcări cunoscute ale securității datelor.
       *[other] Aceeastă adresă de e-mail a apărut în { $breachCount } de încălcări cunoscute ale securității datelor.
    }

# This string is shown at the top of the scan results page and is followed
# by the email address that the user searched.
# In page, it reads "Results for: searchedEmail@monitor.com"
results-for = Rezultate pentru: { $userEmail }

other-monitored-emails = Alte adrese de e-mail monitorizate
email-verification-required = Este necesară verificarea adresei de e-mail
fxa-primary-email = Adresă de e-mail a { -brand-fxa(case: "genitive-or-dative") } - primară

what-is-a-website-breach = Ce este o încălcare a securității datelor în cazul unui site web?
website-breach-blurb = O încălcare a securității datelor în cazul unui site web apare atunci când infractorii cibernetici fură, copiază sau expun informații cu caracter personal din conturi online. Adesea sunt rezultatul identificării de către hackeri a unui punct slab în securitatea unui site web. Încălcările pot însemna și divulgarea accidentală a datelor aferente conturilor.

security-tips-headline = Ponturi de securitate pentru a te proteja de hackeri
steps-to-protect = Pași de luat pentru a-ți proteja identitatea online
take-further-steps = Ia măsuri suplimentare pentru a-ți proteja identitatea

alert-about-new-breaches = Trimite-mi alerte despre noi încălcări ale securității datelor
see-if-youve-been-part = Vezi dacă ai fost implicat(ă) într-o încălcare online a securității datelor.


get-ongoing-breach-monitoring = Obține monitorizare continuă a încălcărilor securității datelor pentru mai multe adrese de e-mail.

# This is a button and follows a headline reading "Was your info exposed in the ___ breach?"
find-out = Află

new-unsub-error = Va trebui să te dezabonezi prin intermediul unuia dintre mesajele primite pe e-mail de la { -product-name },

other-known-breaches-found =
    { $breachCount ->
        [one] Însă a apărut într-o altă încălcare cunoscută.
        [few] Însă a apărut în alte { $breachCount } încălcări cunoscute.
       *[other] Însă a apărut în alte { $breachCount } de încălcări cunoscute.
    }

# This string appears on breach detail pages and is followed by a list
# of data classes that the breach exposed.
additional-information-including = Informații suplimentare, inclusiv:

# Title
email-addresses-title = Adrese de e-mail

# This is a section headline on the breach detail page that appears above
# a short summary about the breach.
breach-overview-title = Prezentare generală

# This is a standardized breach overview blurb that appears on all breach detail pages.
# $breachTitle is the name of the breached company or website.
# $breachDate and $addedDate are calendar dates.
breach-overview-new = Pe { $breachDate }, { $breachTitle } a suferit o încălcare a securității datelor. Odată ce încălcarea a fost descoperită și verificată, aceasta a fost adăugată în baza noastră de date la data de { $addedDate }.

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
to-affected-email = Trimite alerte privind încălcările securității datelor către adresele de e-mail afectate

# This string appears in a banner at the top of each page and is followed by a "Learn More" link.
join-firefox = Există o modalitate de a-ți proteja viața privată. Folosește { -brand-name }.

# Link title
learn-more-link = Află mai multe.

email-sent = Mesajul de e-mail a fost trimis!

# Form title
want-to-add = Vrei să adaugi încă o adresă de e-mail?

# This is part of a confirmation message that appears after a user has submitted
# the form to add an additional email to Firefox Monitor.
verify-the-link = Verifică linkul trimis către { $userEmail } ca să îl adaugi în { -product-name }.

## These are part of a confirmation page that appears after a user has verified
## an additional email to Firefox Monitor.

email-verified = Adresă de e-mail verificată cu succes!
email-added-to-subscription = Îți vom trimite o alertă dacă { $email } apare într-o încălcare a securității datelor.

# This message is displayed after the user has verified their email address.
# { $nestedSignInLink } is replaced by a link, using sign-in-nested as text ("sign in" for English).
email-verified-view-dashboard = Pentru a vedea și a gestiona toate adresele de e-mail pe care le-ai înscris pentru monitorizarea încălcării securității datelor, { $nestedSignInLink }
# This message is used as a text for the subscribe link in email-verified-view-dashboard
sign-in-nested = autentificare

##

# This is part of a confirmation message that appears after a user has submited the
# form to add an additional email to Firefox Monitor. { $preferencesLink } is a link
# to the Preferences page. The code and text for the link is generated elsewhere
# using the { preferences } string.
manage-all-emails = Gestionează toate adresele de e-mail din { $preferencesLink }.

# This string is a header on the user preferences page and
# appears above a check-box list of user options which allow
# the user to choose whether or not they want to receive breach
# alerts for all of their monitored email addresses to a single 
# email address.
breach-alert-notifications = Notificări pentru alertele privind încălcările securității datelor

# This string is a label for the calendar date a breach is added to the database
# and is followed by that date. 
breach-added-label = Încălcare adăugată:

how-hackers-work-desc = Protejează-ți parolele de infractorii cibernetici, din moment ce acestea sunt cele mai importante pentru ei.
what-to-do-after-breach-desc = Închide-ți conturile pentru ca informațiile tale să nu cadă în mâini necurate.
create-strong-passwords-desc = Creează parole puternice, sigure și greu de ghicit.
steps-to-protect-desc = Înțelege cele mai frecvente amenințări și află la ce să fii atent.
five-myths-desc = Află cum să eviți parolele proaste care fac ușoară munca hackerilor.
take-further-steps-desc = Află cum să reduci riscurile unui furt de identitate pentru a preveni pierderile financiare.

# This message appears after a user has successfully updated their communication settings.
changes-saved = Modificări salvate!

# Section headline
rec-section-headline = Ce să faci pentru această încălcare a securității datelor
rec-section-subhead = Îți recomandăm să efectuezi următorii pași pentru a-ți păstra informațiile personale în siguranță și pentru a-ți proteja identitatea digitală.

# Section headline
rec-section-headline-no-pw = Ce să faci pentru a-ți proteja informațiile personale
rec-section-subhead-no-pw = Deși nu au fost expuse parole în această încălcare a securității datelor, mai sunt câteva măsuri pe care le poți lua pentru a-ți proteja mai bine informațiile personale.

# Button
see-additional-recs = Vezi recomandările suplimentare

## This string contains nested markup that becomes a link later in the code.
## Please do not modify or remove "<a>" and "</a>".

resolve-top-notification = { $affectedEmail } a apărut în această încălcare a securității datelor. <a>Ce să faci mai departe</a>

resolve-top-notification-plural =
    { $numAffectedEmails ->
        [one] { $numAffectedEmails } dintre adresele tale de e-mail a apărut în această încălcare a securității datelor. <a>Ce să faci mai departe</a>
        [few] { $numAffectedEmails } dintre adresele tale de e-mail au apărut în această încălcare a securității datelor. <a>Ce să faci mai departe</a>
       *[other] { $numAffectedEmails } dintre adresele tale de e-mail au apărut în această încălcare a securității datelor. <a>Ce să faci mai departe</a>
    }

##

marking-this-subhead = Marchează această încălcare a securității datelor ca rezolvată

# This string contains nested markup that is later used to style the text inside of it.
# Please do not modify or remove "<span>" and "</span>".
marking-this-body =
    <span>Odată ce ai luat măsurile posibile pentru gestionarea acestei încălcări a securității datelor</span>, 
    o poți marca drept rezolvată. Poți accesa oricând detaliile despre încălcare în tabloul de bord.


mark-as-resolve-button = Marchează ca rezolvată
marked-as-resolved-label = Marcată ca rezolvată


undo-button = Anulează

confirmation-1-subhead = Bun! Tocmai ai rezolvat prima ta încălcare a securității datelor.
confirmation-1-body = Menține ritmul. Verifică tabloul de bord și vezi dacă mai ai ceva de făcut.
confirmation-2-subhead = Luați de-aici, hackerilor!
confirmation-2-body = Faci pași importanți spre protejarea conturilor tale online.
confirmation-3-subhead = Încă una. Bine lucrat!

# This string contains nested markup that becomes a link later in the code.
# Please do not modify or remove "<a>" and "</a>".
confirmation-3-body = Parola nouă este unică, puternică și greu de ghicit? <a>Află</a>

generic-confirmation-subhead = Această încălcare a fost marcată ca rezolvată
generic-confirmation-message =
    { $numUnresolvedBreaches ->
        [one] Pentru a vedea încălcarea rămasă, mergi în tabloul de bord.
        [few] Pentru a vedea toate încălcările rămase, mergi în tabloul de bord.
       *[other] Pentru a vedea toate încălcările rămase, mergi în tabloul de bord.
    }

return-to-breach-details-link = Revino la detaliile privind încălcarea
go-to-dashboard-link = Mergi la tabloul de bord

# This string appears above a breach resolution progress bar and indicates
# the percentage of breaches a user has resolved. For instance, "27% complete".
progress-percent-complete = { $percentComplete }% finalizat

# This string appears in the purple callouts at the top of the user dashboard and shows
# the total number of breaches a user has resolved. For instance, "5 Resolved".
num-resolved =
    { $numResolvedBreaches ->
        [one] { $numResolvedBreaches } rezolvată
        [few] { $numResolvedBreaches } rezolvate
       *[other] { $numResolvedBreaches } rezolvate
    }

progress-intro-subhead = Nou în { -product-name }: Marchează încălcările ca rezolvate
progress-intro-message = După ce ai examinat detaliile unei încălcări a securității datelor și ai luat măsuri pentru protejarea informațiilor tale personale, poți marca încălcările ca rezolvate.
progress-status =
    { $numTotalBreaches ->
        [one] { $numResolvedBreaches } din { $numTotalBreaches } încălcare marcată ca rezolvată
        [few] { $numResolvedBreaches } din { $numTotalBreaches } încălcări marcate ca rezolvate
       *[other] { $numResolvedBreaches } din { $numTotalBreaches } de încălcări marcate ca rezolvate
    }
progress-complete = Toate încălcările cunoscute ale securității datelor au fost marcate ca rezolvate

## These strings contain nested markup that is later used to style the text inside of it.
## Please do not modify or remove "<span>" and "</span>".

progress-message-1 =
    <span>Ai început bine!</span> Vezi și restul încălcărilor ca să afli 
    ce măsuri să iei.
progress-message-2 =
    <span>Ține-o tot așa!</span> Schimbările mici, cum ar fi actualizarea parolelor, au un impact mare în 
    menținerea informațiilor personale în siguranță.
progress-message-3 = <span>Ai făcut treabă bună la rezolvarea acelor încălcări!</span> Ține-o tot așa. Mai ai câteva.
progress-message-4 = <span>Aproape că ai terminat!</span> Te apropii de final.
progress-complete-message =
    <span>Bună senzația, nu?</span> Dacă vrei să continui, acum este momentul să 
    îți actualizezi celelalte date de autentificare cu parole mai puternice.

##

resolve-this-breach-link = Rezolvă această încălcare

# This string appears in resolved breach cards and is followed by 
# the date the user marked the breach as resolved.
marked-resolved = Marcate ca rezolvate:

hide-resolved-button = Ascunde-le pe cele rezolvate
show-resolved-button = Afișează-le pe cele rezolvate

unresolved-passwords-exposed =
    { $numPasswords ->
        [one] parolă expusă în încălcări nerezolvate ale securității datelor
        [few] parole expuse în încălcări nerezolvate ale securității datelor
       *[other] de parole expuse în încălcări nerezolvate ale securității datelor
    }

known-data-breaches-resolved =
    { $numResolvedBreaches ->
        [one] încălcare cunoscută a securității datelor marcată ca rezolvată
        [few] încălcări cunoscute ale securității datelor marcate ca rezolvate
       *[other] de încălcări cunoscute ale securității datelor marcate ca rezolvate
    }

# A status indicator that appears in the top right corner of new breach cards
new-breach = Nou

mobile-promo-headline = Adu { -brand-name } pe telefon și tabletă
mobile-promo-body = Navigare rapidă, privată și sigură oriunde ai merge. Caută { -brand-name } în Google Play și App Store.
mobile-promo-cta = Descarcă { -brand-name } pe Android și iOS

promo-lockwise-headline = Ia-ți cu tine parolele oriunde
lockwise-promo-body = Ții evidența tuturor autentificărilor pe toate dispozitivele. Le accesezi securizat de pe calculator, telefon sau tabletă.
promo-lockwise-cta = Descarcă { -brand-lockwise }

fpn-promo-headline = Maschează-ți locația față de site-uri web și elemente de urmărire
promo-fpn-body = { -brand-fpn } decartează site-urile web și colectorii de date care îți creează profilul cu reclame, mascându-ți adresa IP reală.
promo-fpn-cta = Descarcă { -brand-fpn }

monitor-promo-headline = Află despre noile încălcări ale securității datelor
monitor-promo-body = Primești notificări data viitoare când informațiile tale cu caracter personal sunt expuse într-o încălcare cunoscută.

ecosystem-promo-headline = Îți protejezi viața online cu produse care pun confidențialitatea pe primul loc
ecosystem-promo-body = Toate produsele { -brand-name } onorează promisiunea noastră privind datele cu caracter personal: Luăm mai puțin. Le păstrăm în siguranță. Fără secrete.
promo-ecosystem-cta = Vezi toate produsele

## VPN promotional banner.  HTML tags should not be translated, e.g. `<em>`

# user's IP location is determined dynamically by 3rd-party, eg: "Your location: Los Angeles, CA".  The 3rd-party service provides its own localization.
vpn-banner-location = Locația ta: { $ip-location }
vpn-banner-protect-yourself-with-vpn = <em>Protejează-te</em> cu { -brand-mozilla-vpn }.

## Relay and VPN educational/ad units

# ad 1 heading
ad-unit-1-how-do-you-keep = Cum îți păstrezi secretă adresa de e-mail?

# Monitor V2


## The following messages are brands and should be kept entirely in English


-brand-mozilla-vpn = Mozilla VPN

##

## Search Engine Optimization


## Header

sign-in = Autentificare

## Site navigation

## User menu

## Footer

## Error page

## Breach overview page

search-breaches = Caută încălcări ale securității datelor

## Public breach detail page

## Floating banner

