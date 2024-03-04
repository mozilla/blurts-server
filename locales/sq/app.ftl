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
-brand-fxa = Llogari Firefox
-brand-pocket = Pocket
-brand-lockwise = Firefox Lockwise
-brand-send = Firefox Send
-brand-fpn = Firefox Private Network

##

GitHub-link-title = GitHub
error-scan-page-token = Provuat të skanoni shumë adresa email brenda një kohe të shkurtër. Për arsye sigurie, kemi bllokuar përkohësisht kërkime të reja prej jush. Do të jeni në gjendje të riprovoni më vonë.
error-could-not-add-email = S’u shtua dot adresë email te baza e të dhënave.
error-not-subscribed = Kjo adresë email s’është e pajtuar te { -product-name }.
error-hibp-throttled = Shumë lidhje me { -brand-HIBP }.
error-hibp-connect = Gabim në lidhjen me { -brand-HIBP }.
error-hibp-load-breaches = S’u ngarkuan dot shkeljet.
error-must-be-signed-in = Duhet të keni bërë hyrjen te { -brand-fxa } juaj.
error-to-finish-verifying = Për të përfunduar verifikimin e këtij email-i për { -product-name }, duhet të keni bërë hyrjen me email-in parësor të llogarisë tuaj.
home-title = { -product-name }
home-not-found = S’u gjet faqe.
oauth-invalid-session = Sesion i pavlefshëm
scan-title = { -product-name } : Përfundime Skanimi
user-add-invalid-email = Email i Pavlefshëm
user-add-too-many-emails = Po mbikëqyret për ju numri maksimum i adresave email.
user-add-email-verify-subject = Verifikoni pajtimin tuaj te { -product-name }.
user-add-duplicate-email = Ky email është shtuar tashmë te { -product-name }.
# Variables:
#   $preferencesLink (String) - Link to preferences
#   $userEmail (String) - User email address
user-add-duplicate-email-part-2 = Shkoni te { $preferencesLink } tuaja që të shihni gjendjen e { $userEmail }.
user-add-verification-email-just-sent = Një email tjetër verifikimi s’mund të dërgohet kaq shpejt. Ju lutemi, riprovoni më vonë.
user-add-unknown-error = Diç shkoi ters me shtimin e një tjetre adrese email. Ju lutemi, riprovoni më vonë.
user-delete-unknown-error = Diç shkoi ters me heqjen e një adrese email. Ju lutemi, riprovoni më vonë.
error-headline = Gabim
user-verify-token-error = Token-i i verifikimit është i domosdoshëm.
user-verify-email-report-subject = Raporti juaj { -product-name }
user-unsubscribe-token-error = Shpajtimi lyp një token.
user-unsubscribe-token-email-error = Shpajtimi lyp një token dhe emailHash.
user-unsubscribe-title = { -product-name } : Shpajtomëni
pwt-section-headline = Më i Fuqishëm Fjalëkalimi = Më e Mirë Mbrojtja
landing-headline = E drejta juaj për të qenë të parrezikuar nga hacker-at fillon këtu.
scan-placeholder = Jepni Adresë Email
scan-submit = Kërkoni Për Email-in Tuaj
scan-error = Duhet të jetë një email i vlefshëm.
download-firefox-banner-button = Shkarko { -brand-name }-in
# Appears after Firefox Monitor has sent a verification email to a new user.
signup-modal-sent = U dërgua!
sign-up = Regjistrohuni
form-signup-error = Duhet të jetë një email i vlefshëm
# breach-date = the calendar date a particular data theft occurred.
breach-date = Datë shkeljeje:
# compromised accounts = the total number of user accounts exposed in data breach
compromised-accounts = Llogari të komprometuara:
# compromised-data = the kind of user data exposed to hackers in data breach.
compromised-data = Të dhëna të komprometuara
unsub-headline = Shpajtohuni prej { -product-name-nowrap }
unsub-blurb = Kjo do të shkaktojë heqjen e email-it tuaj nga lista { -product-name-nowrap } dhe s’do të merrni më sinjalizime kur ngjasin shkelje të reja.
unsub-button = Shpajtomë
# Breach data provided by Have I Been Pwned.
# Variables:
#   $hibp-link (String) - Link to Have I Been Pwned
hibp-attribution = Të dhëna shkeljesh furnizuar nga { $hibp-link }
share-twitter = Shumica e njerëzve kanë rreth 100 llogari internetore. A është ekspozuar ndonjëra nga tuajat në shkelje të dhënash? Shiheni.
share-facebook-headline = Shihni nëse keni qenë viktimë e ndonjë shkeljeje të dhënash
share-facebook-blurb = Keni llogari internetore që kanë qenë ekspozuar në shkelje të dhënash?
og-site-description = Shihni nëse keni qenë pjesë e ndonjë shkeljeje të dhënash, përmes { -product-name }. Regjistrohuni për sinjalizime rreth shkeljesh në të ardhmen dhe merrni ndihmëza si t’i mbani llogaritë tuaja të parrezikuara.
show-all = Shfaqi krejt
fxa-scan-another-email = Doni të kontrolloni një email tjetër?
sign-out = Dilni
# Manage Firefox Account, link to page where account holders can change their account settings.
manage-fxa = Administroni { -brand-fxa }
have-an-account = Keni tashmë një llogari?
fxa-pwt-summary-2 =
    Fjalëkalimet e shkurtër, njëfjalësh, janë të lehtë për t’u gjetur. 
    Përdorni të paktën dy fjalë dhe një ndërthurje shkronjash, shifrash dhe shenjash speciale.
fxa-pwt-summary-4 = Përgjegjës fjalëkalimesh të tillë si 1Password, LastPass, Dashlane,apo Bitwarden i depozitojnë fjalëkalimet tuaj dhe i plotësojnë ato në sajte, në vendin tuaj. Do t’ju ndihmojnë madje edhe të krijoni fjalëkalime të fuqishëm.
fxa-pwt-summary-6 = Shkeljet e të dhënave po shtohen. Nëse të dhënat tuaja personale shfaqen në një shkelje të re të dhënash, { -product-name } ju dërgon një sinjalizim — që kështu të veproni dhe të mbroni llogaritë tuaja.
fxa-what-to-do-blurb-1 =
    Nëse s’hyni dot, lidhuni me sajtin për t’i kërkuar se si ta përditësoni. 
    Shihni një llogari që nuk e njihni? Të dhënat tuaj mund të jenë shitur apo ridhënë diku. Kjo mund të jetë gjithashtu një llogari që harruat se e keni krijuar ose një kompani që ndryshoi emrat.
fxa-what-to-do-subhead-2 = Ndaleni përdorimin e fjalëkalimeve të ekspozuar, dhe ndryshojeni një të tillë kudo që e keni përdorur.
fxa-wtd-blurb-2 =
    Hacker-at mund të rreken të përdorin të njëjtin fjalëkalim dhe email-in tuaj për hyrje në llogari tuajat të tjera.  
    Krijoni një fjalëkalim të ndryshim dhe unik për çdo llogari, veçanërisht për llogari tuajat bankare, 
    email-i, dhe sajte të tjerë ku ruani të dhëna personale.
fxa-what-to-do-blurb-3 =
    Shumica e shkeljeve ekspozojnë vetëm email-e dhe fjalëkalime, por disa përfshijnë edhe të dhëna financiare me spec. 
    Nëse llogaria juaj bankare apo numra kartash krediti qenë ekspozuar, sinjalizoni bankën tuaj për mashtrim të mundshëm. 
    Mbikëqyrni bilancet për zëra që nuk i njihni.
fxa-what-to-do-subhead-4 = Merrni ndihmë për të mbajtur mend krejt fjalëkalimet tuaja dhe ruajtur ato të parrezikuara.
fxa-what-to-do-blurb-4 = Përgjegjës fjalëkalimesh të tillë si 1Password, LastPass, Dashlane,apo Bitwarden i depozitojnë fjalëkalimet tuaj në mënyrë të sigurt dhe i plotësojnë ato në sajte, në vendin tuaj. Përdorni në kompjuterin apo celularin tuaj një të tillë, që të mos ju duhet t’i mbani mend krejt ata.
# Alerts is a noun
sign-up-for-alerts = Regjistrohuni për Sinjalizime
# Link title
frequently-asked-questions = Pyetje të Bëra Shpesh
about-firefox-monitor = Mbi { -product-name }
# Link title
preferences = Parapëlqime
# Link title
home = Kreu
# Link title
security-tips = Ndihmëza Sigurie
fxa-account = { -brand-fxa }
# Aria button message to open menu. "Open Firefox Account Navigation"
open-fxa-menu = Hapni lëvizjen nëpër { -brand-fxa }
# Appears above a snippet about the breach most recently reported to Firefox Monitor.
latest-breach = SHKELJA MË E RE E SHTUAR
# Link title
more-about-this-breach = Më tepër rreth këtij cenimi
take-control = Rimerrni kontrollin e të dhënave tuaja personale.
cant-stop-hackers = S’i ndalni dot hacker-at të bëjnë ç’duan. Por mund të shmangni huqe të këqija që ua lehtësojnë punën.
read-more-tips = Lexoni Më Tepër Ndihmëza Sigurie
how-hackers-work = Kuptoni se si punojnë hacker-at
monitor-your-online-accounts = Regjistrohuni për mbikëqyrje shkeljesh me një { -brand-fxa }.
stay-alert = Jini i sinjalizuar rreth shkeljesh të reja
if-your-info = Nëse të dhënat tuaja shfaqen në një shkelje të re të dhënash, do t’ju dërgojmë një sinjalizim.
search-all-emails = Kërkoni për shkelje me krejt adresat tuaja email dhe merrni sinjalizime rreth kërcënimesh të reja.
monitor-several-emails = Mbikëqyrni disa email-e
take-action = Hidhuni në veprim për mbrojtjen e llogarive tuaja
keep-your-data-safe = Shihni se ç’ju duhet për t’i mbajtur të dhënat tuaja të parrezikuara nga keqbërës kibernetikë.
website-breach = Cenim Sajti
sensitive-breach = Shkelje Sajti Me të Dhëna Rezervat
data-aggregator-breach = Shkelje të Dhënash Nga Grumbullues
unverified-breach = Cenim i Paverifikuar
spam-list-breach = Përfshirje në Listë Spam-esh
website-breach-plural = Cenime Sajtesh
sensitive-breach-plural = Shkelje Sajtesh Me të Dhëna Rezervat
data-aggregator-breach-plural = Shkelje të Dhënash Nga Grumbullues
unverified-breach-plural = Cenime të Paverifikuara
spam-list-breach-plural = Përfshirje në Lista Spam-esh
what-data = Ç’të dhëna u komprometuan:
sensitive-sites = Si i trajton { -product-name } sajtet me të dhëna rezervat?
sensitive-sites-copy = { -product-name } vë në dukje llogaritë me këto lloje shkeljesh vetëm pasi të jetë verifikuar një adresë email. Kjo do thotë se jeni i vetmi person që mund të shohë nëse të dhënat tuaja qenë pjesë e kësaj shkeljeje (veç në pastë dikush tjetër hyrje te llogaria juaj email).
delayed-reporting-headline = Pse u desh kaq shumë kohë për njoftimin e këtij cenimi?
delayed-reporting-copy = Ndonjëherë mund të hajë muaj ose vite që kredenciale të ekspozuara në një shkelje të dhënash të shfaqen në web-in e errët. Shkeljet shtohen te baza jonë e të dhënave sapo të jenë zbuluar dhe verifikuar.
about-fxm-headline = Rreth { -product-name }
about-fxm-blurb = { -product-name } ju sinjalizon nëse llogaritë tuaja internetore qenë përfshirë në një shkelje të dhënash. Shihni nëse jeni përfshirë nga një shkelje të dhënash, merrni sinjalizime rreth shkeljesh të rejag, dhe ndërmerrni hapa për të mbrojtur llogaritë tuaja internetore. { -product-name } jepet nga { -brand-Mozilla }.
fxm-warns-you = { -product-name } ju sinjalizon nëse adresa juaj email qe ekspozuar në një shkelje internetore të dhënash. Shihni nëse janë ekspozuar të dhëna tuajat, mëson si të mbroni më mirë llogaritë tuaja internetore, dhe merrni sinjalizime, nëse adresa juaj email shfaqet në një shkelje të re.
# How Firefox Monitor works
how-fxm-works = Si funksionon { -product-name }
how-fxm-1-headline = Kryeni një kërkim elementar
how-fxm-1-blurb = Kërkoni për adresën tuaj email te të dhëna publike shkeljesh që shkojnë pas deri në 2007-n. Ky kërkim elementar do të prekë shumicën e shkeljeve të të dhënave, po jo ato që përmbajnë të dhëna personale rezervat.
how-fxm-2-headline = Regjistrohuni për mbikëqyrje cenimesh
how-fxm-2-blurb =
    Krijoni një { -brand-fxa } për mbikëqyrje të email-it tuaj për shkelje të ardhshme. 
    Pasi të jetë verifikuar email-i juaj, do të merrni edhe një raport të plotë të shkeljeve të dikurshme, përfshi shkelje të dhënash rezervat.
how-fxm-3-headline = Merrni njoftime te shfletuesi juaj
how-fxm-3-blurb = Nëse përdorni { -brand-name }, do të merrni një njoftim, nëse vizitoni një sajt që është cenuar. Mësoni pa humbur kohë nëse keni jeni prekur nga ajo shkelje dhe se ç’mund të bëni rreth kësaj.
wtd-after-website = Ç’të bëhet pas një cenimi sajti:
wtd-after-data-agg = Ç’të bëhet pas një cenimi të dhënash nga grubmullues:
what-is-data-agg = Ç’është një grumbullues të dhënash?
what-is-data-agg-blurb = Grumbulluesit e të dhënave, ose ndërmjetës tregtarë të dhënash, grumbullojnë të dhëna nga regjistra publikë dhe blejnë të tilla prej shoqërish të tjera. Këto të dhëna i përpilojnë për t’ua shitur shoqërie për synime marketingu. Pretë e këtyre shkeljeve ka më pak gjasa të përfshihen në mashtrime financiare, por hacker-at mund t’i përdorin këto të dhëna për t’u hequr ato apo për profilizim të tyre.
protect-your-privacy = Mbroni privatësinë tuaj internetore
no-pw-to-change = Ndryshe nga cenimet e sajteve, s’ka fjalëkalim për ndryshim.
avoid-personal-info = Shmangni përdorimin e të dhënave personale në fjalëkalime
avoid-personal-info-blurb = Është e lehtë të gjesh datëlindje, adresa dhe emra anëtarësh familjeje në internet. Mbajini këto fjalë jashtë fjalëkalimeve tuaja.

## What to do after data breach tips

change-pw = Ndryshoni fjalëkalimin tuaj
change-pw-site = Ndryshoni fjalëkalim për këtë sajt
even-for-old = Madje edhe për llogari të dikurshme, është e rëndësishme të përditësoni fjalëkalimin tuaj.
make-new-pw-unique = Bëjeni fjalëkalimin e ri të ndryshëm dhe unik
strength-of-your-pw = Fortësia e fjalëkalimeve tuaj ka ndikim të drejtpërdrejt mbi sigurinë tuaj në internet.
create-strong-passwords = Si të krijohen fjalëkalime të fuqishëm
stop-reusing-pw = Reshtni së përdoruri të njëjtin fjalëkalim
create-unique-pw = Krijoni fjalëkalime unikë dhe ruajini diku të parrezik, bie fjala në një përgjegjës fjalëkalimesh.
five-myths = 5 mite rreth përgjegjësish fjalëkalimesh
create-a-fxa = Për raportin e plotë të shkeljeve për ju dhe për të marrë sinjalizime, krijoni një { -brand-fxa }.
feat-security-tips = Ndihmëza sigurie për mbrojtjen e llogarive tuaj
feat-sensitive = Kërkim i thelluar te shkelje të dhënash rezervat.
feat-enroll-multiple = Regjistroni disa email-e për mbikëqyrje shkeljesh
# This string is shown beneath each of the user’s email addresses to indicate
# how many known breaches that email address was found in.
# Variables:
#   $breachCount (Integer) - Number of breaches
appears-in-x-breaches =
    { $breachCount ->
        [one] Shfaqet në { $breachCount } cenim të ditur.
       *[other] Shfaqet në { $breachCount } cenime të ditura.
    }
check-for-breaches = Kontrolloni për Cenime
find-out-what-hackers-know = Shihni se ç’dinë tashmë mbi ju hacker-at. Mësoni se si të jeni përherë një hap para tyre.
get-email-alerts = Qëndroni i parrezikuar: Merrni sinjalizime me email, kur të dhënat tuaja shfaqen në një cenim të ditur
search-for-your-email = Kërkoni për adresën tuaj email te të dhëna publike shkeljesh që shkojnë pas deri në 2007-n.
back-to-top = Mbrapsht te Kreu
comm-opt-0 = Dërgomëni email,  nëse një nga adresat e mia email më poshtë shfaqet në një shkelje të dhënash.
# Variables:
#   $primaryEmail (String) - User primary email address
comm-opt-1 = Dërgoji krejt sinjalizimet mbi shkelje te { $primaryEmail }.
stop-monitoring-this = Ndal mbikëqyrjen e këtij email-i.
resend-verification = Ridërgo email verifikimi
add-new-email = Shtoni adresë email të re
send-verification = Dërgo Lidhje Verifikimi
# This string is a header on the user preferences page and
# appears above a check-box list of user options which allow
# the user to choose whether or not they want to receive breach
# alerts for all of their monitored email addresses to a single
# email address.
breach-summary = Përmbledhje Cenimi
show-breaches-for-this-email = Shfaq krejt cenimet për këtë email.
link-change-primary = Ndryshoni Adresën Parësore Email
remove-fxm = Hiqeni { -product-name }
remove-fxm-blurb = Çaktivizoni sinjalizime { -product-name }. { -brand-fxa } e juaj do të mbetet aktive, dhe mund të merrni njoftime të tjera të lidhura me llogarinë.
# Button title
manage-email-addresses = Administroni Adresa Email
# Link title
latest-breach-link = Shihni nëse qetë pjesë e këtij cenimi

## Variables:
##   $userName (String) - Username

welcome-back = Mirë se u rikthyet, { $userName }!
welcome-user = Mirë se vini, { $userName }!

##

breach-alert-subject = { -product-name } e gjeti email-in tuaj të ri në një cenim të dhënash
your-info-was-discovered-headline = Të dhënat tuaja janë pikasur në një shkeljeje të re dhënash.
your-info-was-discovered-blurb = Jeni regjistruar të merrni sinjalizime { -product-name }, kur email-i juaj duket në një shkelje të dhënash. Ja se ç’dimë rreth kësaj shkeljeje.
what-to-do-after-breach = Ç’të bëhet pas një cenimi të dhënash
ba-next-step-1 = Ndryshojeni fjalëkalimin tuaj me një fjalëkalim të fortë, unik.
ba-next-step-blurb-1 =
    Një fjalëkalim i fuqishëm përdor një ndërthurje shkronjash të mëdha dhe të vogla, 
    shenja speciale dhe numra. Nuk përmban të dhëna personale, të tilla si adresa juaj, datëlindja apo emra të familjes.
ba-next-step-2 = Reshtni krejtësisht së përdoruri atë fjalëkalim të ekspozuar.
ba-next-step-blurb-2 = Keqbërësit kibernetikë mund ta gjejnë fjalëkalimin tuaj në web-in e errët dhe ta përdorin për të hyrë në llogari tuajat të tjera. Rruga më e mirë për të mbrojtur fjalëkalimet tuaj është të përdorni fjalëkalim unikë për secilën.
ba-next-step-3 = Merrni ndihmë për krijim fjalëkalimesh më të mirë dhe për t’i mbajtur të parrezikuar.
ba-next-step-blurb-3 = Përdorni një përgjegjës fjalëkalimesh, për krijim fjalëkalimesh të fuqishëm, unikë. Përgjegjësit e fjalëkalimeve i depozitojnë të parrezikuar krejt kredencialet tuaja të hyrjeve, që të mund t’i përdorni nëpër krejt pajisjet tuaja.
faq1 = Nuk e njoh këtë shoqëri apo sajt. Çne unë në këtë shkelje?
faq2 = Pse u desh kaq shumë kohë për të më njoftuar këtë cenim?
faq3 = Nga ta di se ky është një email legjitim prej { -product-name }?
# Variables:
#   $breachCount (Integer) - Number of breaches
new-breaches-found =
    { $breachCount ->
        [one] U GJET { $breachCount } SHKELJE E RE
       *[other] U GJETËN { $breachCount } SHKELJE TË REJA
    }
sign-up-headline-1 = Merrni sinjalizime të vazhdueshëm me një { -brand-fxa }.
account-not-required = Shfletuesi { -brand-name } s’është i domosdoshëm për një { -brand-fxa }. Mund të merrni të dhëna rreth shërbimeve { -brand-Mozilla }.

## Variables:
##   $breachName (String) - Number of the breach

was-your-info-exposed = A janë ekspozuar të dhënat tuaja në shkeljen e të dhënave { $breachName }?
fb-not-comp = Ky email nuk u shfaq në shkeljen e të dhënave { $breachName }.
# Variables:
#   $breachCount (Integer) - Number of breaches
other-breaches-found =
    { $breachCount ->
        [one] Por, u shfaq në { $breachCount } shkelje tjetër.
       *[other] Por, u shfaq në { $breachCount } shkelje të tjera.
    }
fb-comp-only = Ky email u pa te shkelja { $breachName }.
# Variables:
#   $breachCount (Integer) - Number of breaches
fb-comp-and-others =
    { $breachCount ->
        [one] Ky email u shfaq te { $breachCount } shkelje e ditur të dhënash, përfshi { $breachName }.
       *[other] Ky email u shfaq te { $breachCount } shkelje të ditura të dhënash, përfshi { $breachName }.
    }

##

no-other-breaches-found = S’u gjetën shkelje të tjera nga një kërkim elementar.
no-results-blurb = Na ndjeni, ajo shkelje s’gjendet në bazën tonë të të dhënave.
# This string contains nested markup that is later used to style and link the text inside of it.
# Please do not modify or remove "<a>", "</a>", "<span>" and "</span>".
facebook-breach-note =
    <span>Email-i juaj s’shfaqet në këtë rrjedhje,
    por numri i telefonit tuaj mund të jetë ende i rrezikuar.</span> Disa nga
    llogaritë e komprometuara në rrjedhjen nga Facebook-u përfshinin numra telefoni
    dhe të tjera hollësi persona, por jo adresa email. Nëse keni regjistruar
    ndonjëherë një llogari Facebook — edhe po s’e përdorët tani — rekomandojmë
    të ndërmerrni këto hapa për të mbrojtur veten
# This string contains nested markup that is later used to style and link the text inside of it.
# Please do not modify or remove "<a>", "</a>", "<span>" and "</span>".
facebook-breach-what-to-do-1-headline = <span>Për hollësitë tuaja zgjidhni “Vetëm për mua”, ose tjetër rregullim jopublik te <a>profili juaj Facebook</a>.</span>
facebook-breach-what-to-do-1-copy =
    Gjatë kësaj rrjedhjeje, hacker-a morën
    hollësi profilesh që qenë vënë si “të hapët për publikun” ose “ndarë me shokë”.
    Këto hollësi mund të kombinohen me të dhëna të tjera për të hyrë në më tepër
    hollësi dhe llogari tuajat personale.
# This string contains nested markup that is later used to style and link the text inside of it.
# Please do not modify or remove "<a>", "</a>", "<span>" and "</span>".
facebook-breach-what-to-do-2-headline =
    <span>Ndryshoni fjalëkalimin, PIN-in, ose kredenciale të tjera sigurie në
    <a>llogari tuajat shërbimesh celulare</a> që të parandaloni “SIM-swapping”</span>.
facebook-breach-what-to-do-2-copy =
    <em>SIM swapping</em>, që quhet edhe <em>SIM-jacking</em>,
    quhet akti kur një <em>hacker</em> përdor numra telefonash, datë lindjeje dhe
    të dhëna të tjera për të shtënë në dorë numrin e telefonit të një personi dhe
    më pas email-in e tij, llogaritë në media shoqërore, madje dhe ato financiare.
facebook-breach-what-to-do-3 = Shihni krejt rekomandimet te faqja jonë për rrjedhjen nga Facebook-u
# "Appears in-page as: Showing: All Breaches"
currently-showing = Po shfaqen:

## Updated error messages

error-bot-headline = Kërkimet janë pezulluar përkohësisht
error-bot-blurb = Patëm frikë se mos qetë një robot, ngaqë kërkuar me disa adresa email brenda një periudhe të shkurtër kohore. Hëpërhë ju është bllokuar kryerja e kërkimeve të reja. Mund të riprovoni më vonë.
error-csrf-headline = Sesionit i mbaroi koha
error-csrf-blurb = Shtypni butonin Mbrapsht te shfletuesi juaj, ringarkoni faqen dhe riprovoni.
error-invalid-unsub = Si të shpajtoheni prej sinjalizimesh { -product-name }
error-invalid-unsub-blurb =
    Do t’ju duhet të shpajtoheni prej një nga email-et që ju ka dërguar { -product-name }. Shihni te mesazhet tuaj për mesazhe nga 
    { -brand-team-email }. Përzgjidhni lidhjen e shpajtimit në fund të email-it.
# This string is displayed under a large numeral that indicates the total number
# of email address a user has signed up for monitoring. Don’t add $emails to
# your localization, because it would result in the number showing twice.
email-addresses-being-monitored =
    { $emails ->
        [one] Adresë email që mbikëqyret
       *[other] Adresa email që mbikëqyren
    }
# This string is displayed under a large numeral that indicates the total number
# of data breaches that exposed a user’s password. Don’t add $passwords to
# your localization, because it would result in the number showing twice.
passwords-exposed =
    { $passwords ->
        [one] Fjalëkalim i ekspozuar nëpër krejt shkeljet
       *[other] Fjalëkalime të ekspozuar nëpër krejt shkeljet
    }
# This string is displayed under a large numeral that indicates the total number
# of data breaches that have exposed the user’s information. Don’t add $breaches to
# your localization, because it would result in the number showing twice.
known-data-breaches-exposed =
    { $breaches ->
        [one] Shkelje e ditur të dhënash ka ekspozuar të dhëna tuajat
       *[other] Shkelje të ditura të dhënash kanë ekspozuar të dhëna tuajat
    }
# Button
see-additional-breaches = Shihni Shkelje të Tjera
# Variables:
#   $breachCount (Integer) - Number of breaches
scan-results-known-breaches =
    { $breachCount ->
        [one] Ky email i shfaq në 1 shkelje të ditur të dhënash.
       *[other] Ky email u shfaq në { $breachCount } shkelje të ditura të dhënash.
    }
# This string is shown at the top of the scan results page and is followed
# by the email address that the user searched.
# In page, it reads "Results for: searchedEmail@monitor.com"
# Variables:
#   $userEmail (String) - User email address
results-for = Përfundime për: { $userEmail }
other-monitored-emails = Email-e të Tjerë të Mbikëqyrur
email-verification-required = Lypset Verifikim Email-i
fxa-primary-email = Email { -brand-fxa } - Parësor
what-is-a-website-breach = Ç’është një shkelje sajti?
website-breach-blurb = Një shkelje të dhënash sajti ndodh kur keqbërës kibernetikë vjedhin, kopjojnë ose ekspozojnë të dhëna personale prej llogarish internetore. Zakonisht është rrjedhojë e gjetjes nga ana e hacker-ave të një pike të dobët në sigurinë e sajtit. Shkelje mund të ndodhin edhe kur të dhëna të një llogarie rrjedhin aksidentalisht.
security-tips-headline = Ndihmëza sigurie për mbrojtjen e vetvetes nga hacker-at
steps-to-protect = Hapa për t’u ndërmarrë për mbrojtjen e identitetit tuaj internetor
take-further-steps = Ndërmerrni hapa të mëtejshëm për mbrojtjen e identitetit tuaj
alert-about-new-breaches = Sinjalizomëni rreth shkeljesh të reja
see-if-youve-been-part = Shihni nëse jeni prekur nga ndonjë shkelje e të dhënave në internet.
get-ongoing-breach-monitoring = Përfitoni mbikëqyrje të vazhdueshme rreth shkeljesh, për shumë adresa email.
# This is a button and follows a headline reading "Was your info exposed in the ___ breach?"
find-out = Shiheni
new-unsub-error = Do t’ju duhet të shpajtoheni që prej një nga email-et e dërguar nga  { -product-name }.
# Variables:
#   $breachCount (Integer) - Number of breaches
other-known-breaches-found =
    { $breachCount ->
        [one] Por u shfaq në { $breachCount } shkelje tjetër të ditur.
       *[other] Por u shfaq në { $breachCount } shkelje të tjera të ditura.
    }
# This string appears on breach detail pages and is followed by a list
# of data classes that the breach exposed.
additional-information-including = Të dhëna shtesë, përfshi:
# Title
email-addresses-title = Adresa Email
# This is a section headline on the breach detail page that appears above
# a short summary about the breach.
breach-overview-title = Përmbledhje
# This is a standardized breach overview blurb that appears on all breach detail pages.
# $breachTitle is the name of the breached company or website.
# $breachDate and $addedDate are calendar dates.
breach-overview-new = Më { $breachDate } ndodhi { $breachTitle }. Pasi u zbulua dhe u verifikua shkelja, u shtua te baza jonë e të dhënave më { $addedDate }.
# Title appearing on the Preferences dashboard.
monitor-preferences = Parapëlqime { -product-short-name }
# When a user is signed in, this appears in the drop down menu
# and is followed by the user's primary Firefox Account email.
# Variables:
#   $userEmail (String) - User email address
signed-in-as = I futur si: { $userEmail }
# Appears on the All Breaches page and is followed by a list of filter options
# that a user can filter the visible breaches by.
filter-by = Filtrojini sipas Kategorish:
# Title that appears in the mobile menu bar and opens the mobile menu when clicked.
menu = Menu
to-affected-email = Dërgo sinjalizime shkeljesh te adresa email e prekur
# This string appears in a banner at the top of each page and is followed by a "Learn More" link.
join-firefox = Ka një rrugë mbrojtjeje të privatësisë tuaj. Bëhuni pjesë e { -brand-name }.
# Link title
learn-more-link = Mësoni më tepër.
email-sent = Email-i u Dërgua!
# Form title
want-to-add = Doni të shtoni tjetër email?
# This is part of a confirmation message that appears after a user has submitted
# the form to add an additional email to Firefox Monitor.
# Variables:
#   $userEmail (String) - User email address
verify-the-link = Verifikoni lidhjen e dërguar te { $userEmail } që të shtohet te { -product-name }.

## These are part of a confirmation page that appears after a user has verified
## an additional email to Firefox Monitor.

email-verified = Email-i u Verifikua Me Sukses!
# Variables:
#   $email (String) - User email address
email-added-to-subscription = Do t’ju sinjalizojmë, nëse { $email } shfaqet te një shkelje të dhënash.
# This message is displayed after the user has verified their email address.
# { $nestedSignInLink } is replaced by a link, using sign-in-nested as text ("sign in" for English).
email-verified-view-dashboard = Që të shihni dhe administroni krejt email-et për të cilët jeni regjistruar lidhur me mbikëqyrje shkeljesh, { $nestedSignInLink }.
# This message is used as a text for the subscribe link in email-verified-view-dashboard
sign-in-nested = hyni

##

# This is part of a confirmation message that appears after a user has submited the
# form to add an additional email to Firefox Monitor. { $preferencesLink } is a link
# to the Preferences page. The code and text for the link is generated elsewhere
# using the { preferences } string.
# Variables:
#   $preferencesLink (String) - Link to preferences
manage-all-emails = Administroni krejt adresat email te { $preferencesLink }.
# This string is a header on the user preferences page and
# appears above a check-box list of user options which allow
# the user to choose whether or not they want to receive breach
# alerts for all of their monitored email addresses to a single
# email address.
breach-alert-notifications = Njoftime Sinjalizimi Shkeljesh
# This string is a label for the calendar date a breach is added to the database
# and is followed by that date.
breach-added-label = Shkelje e shtuar më:
how-hackers-work-desc = Mbroni fjalëkalimet tuaja nga keqbërësit kibernetikë, ngaqë kjo është ajo që kanë më për zemër.
what-to-do-after-breach-desc = Kyçini llogaritë tuaja për t’i mbajtur të dhënat tuaja larg duarsh ku s’duhet të bien.
create-strong-passwords-desc = Bëjini fjalëkalimet tuaj të fortë, të sigurt dhe të zorshëm për t’u hamendësuar.
steps-to-protect-desc = Kuptoni kërcënimet më të rëndomta dhe dini se ç’duhet kërkuar.
five-myths-desc = Mësoni si të shmangen huqe të këqija për fjalëkalimet që e bëjnë të lehtë punën e hacker-ave.
take-further-steps-desc = Shihni se si të ulen rreziqet e vjedhjes së identitetit për të parandaluar humbje financiare.
# This message appears after a user has successfully updated their communication settings.
changes-saved = Ndryshimet u ruajtën!
# Section headline
rec-section-headline = Ç’të bëhet për këtë shkelje
rec-section-subhead = Këshillojmë të ndërmerrni këto hapa për t’i mbajtur të dhënat tuaja personale të sigurta dhe për të mbrojtur identitetin tuaj dixhital.
# Section headline
rec-section-headline-no-pw = Ç’të bëhet për të mbrojtur të dhënat tuaja personale
rec-section-subhead-no-pw = Edhe pse në këtë shkelje nuk u ekspozuan fjalëkalime, prapë ka hapa që është mirë të ndërmerren për të mbrojtur të dhënat tuaja personale.
# Button
see-additional-recs = Shihni Rekomandime Shtesë

## This string contains nested markup that becomes a link later in the code.
## Please do not modify or remove "<a>" and "</a>".

# Variables:
#   $affectedEmail (String) - User email address
resolve-top-notification = { $affectedEmail } u duk në këtë cenim. <a>Ç’të bëhet më pas</a>
# Variables:
#   $numAffectedEmails (Integer) - Number of affected email address
resolve-top-notification-plural =
    { $numAffectedEmails ->
       *[other] { $numAffectedEmails } nga adresat tuaja email u dukën në këtë cenim. <a>Ç’të bëhet më pas</a>
    }

##

marking-this-subhead = Po i vihet shenjë këtij cenimi si i zgjidhur
# This string contains nested markup that is later used to style the text inside of it.
# Please do not modify or remove "<span>" and "</span>".
marking-this-body =
    <span>Pasi të keni ndërmarrë hapat që mundeni për trajtimin e këtij cenimi</span>,
    mund t’i vini shenjë si të zgjidhur. Mundeni ende të shihni hollësi rreth cenimit 
    që nga pulti juaj, në çfarëdo kohe.
mark-as-resolve-button = Shënojeni si të Zgjidhur
marked-as-resolved-label = U shënua si i Zgjidhur
undo-button = Zhbëje
confirmation-1-subhead = Bukur! Sapo zgjidhët cenimin tuaj të parë.
confirmation-1-body = Mos e ndalni hovin. Shihni te pulti juaj, mos ka të tjera për t’u bërë.
confirmation-2-subhead = A dëgjuat, hacker-a?
confirmation-2-body = Po ndërmerrni hapa të rëndësishëm drejt mbrojtjes së llogarive tuaja internetore.
confirmation-3-subhead = Iku edhe një. Punë e paqme!
# This string contains nested markup that becomes a link later in the code.
# Please do not modify or remove "<a>" and "</a>".
confirmation-3-body = A është fjalëkalimi juaj unik, i fuqishëm, dhe i zorshëm për t’u marrë me mend? <a>Shiheni</a>
generic-confirmation-subhead = Këtij cenimi i është vënë shenjë si i zgjidhur
# Variables:
#   $numUnresolvedBreaches (Integer) - Number of resolved breaches
generic-confirmation-message =
    { $numUnresolvedBreaches ->
        [one] Që të shihni cenimin e mbetur, shkoni te pulti juaj.
       *[other] Që të shihni cenimet e mbetura, shkoni te pulti juaj.
    }
return-to-breach-details-link = Kthehuni te hollësi cenimi
go-to-dashboard-link = Kaloni te Pulti
# This string appears above a breach resolution progress bar and indicates
# the percentage of breaches a user has resolved. For instance, "27% complete".
# Variables:
#   $percentComplete (String) - Completion percentage
progress-percent-complete = { $percentComplete }% i plotësuar
# This string appears in the purple callouts at the top of the user dashboard and shows
# the total number of breaches a user has resolved. For instance, "5 Resolved".
# Variables:
#   $numResolvedBreaches (Integer) - Number of resolved breaches
num-resolved =
    { $numResolvedBreaches ->
        [one] { $numResolvedBreaches } i Zgjidhur
       *[other] { $numResolvedBreaches } të Zgjidhur
    }
progress-intro-subhead = E re në { -product-name }: Vëruni shenjë cenimeve si të zgjidhur
progress-intro-message = Pasi të shqyrtoni hollësitë rreth një cenimi dhe ndërmerrni hapat për të mbrojtur të dhënat tuaja personale, mund t’u vini shenjë cenimeve si të zgjidhur.
# Variables:
#   $numResolvedBreaches (Integer) - Number of resolved breaches
#   $numTotalBreaches (Integer) - Total number of breaches
progress-status =
    { $numTotalBreaches ->
        [one] { $numResolvedBreaches } nga { $numTotalBreaches } cenime iu vu shenjë si i zgjidhur
       *[other] { $numResolvedBreaches } nga { $numTotalBreaches } cenime iu vunë shenjë si të zgjidhur
    }
progress-complete = Krejt cenimeve të ditur iu është vënë shenjë si të zgjidhur

## These strings contain nested markup that is later used to style the text inside of it.
## Please do not modify or remove "<span>" and "</span>".

progress-message-1 = <span>Jeni gati për një start të fuqishëm!</span> Shihni cenimet e mbetura, për të mësuar se ç’hapa të ndërmerren.
progress-message-2 = <span>Vazhdoni kështu!</span> Ndryshime të vockla, si ndryshimi i fjalëkalimeve, kanë ndikim të madh në mbajtjen të parrezik të të dhënave tuaja personale.
progress-message-3 = <span>Punë e paqme në zgjidhjen e këtyre cenimeve!</span> Vazhdoni kështu. Keni edhe pak të tjerë.
progress-message-4 = <span>Thuajse mbaruat!</span> Thuajse jeni pranë mbërritjes.
progress-complete-message = <span>Ju vjen mirë, hë?</span> Nëse doni të vazhdoni, ky është një çast i mirë për të përditësuar kredenciale të tjerë hyrjesh me fjalëkalime më të fuqishëm.

##

resolve-this-breach-link = Zgjidheni këtë cenim
# This string appears in resolved breach cards and is followed by
# the date the user marked the breach as resolved.
marked-resolved = Iu vu shenjë si i zgjidhur më:
hide-resolved-button = Fshihi të Zgjidhurit
show-resolved-button = Shfaq të Zgjidhurit
# Variables:
#   $numPasswords (Integer) - Number of exposed passwords
unresolved-passwords-exposed =
    { $numPasswords ->
        [one] Fjalëkalim i ekspozuar në cenime të pazgjidhur
       *[other] Fjalëkalime të ekspozuar në cenime të pazgjidhur
    }
# Variables:
#   $numResolvedBreaches (Integer) - Number of resolved breaches
known-data-breaches-resolved =
    { $numResolvedBreaches ->
        [one] Cenim i ditur të dhënash, shënuar si i zgjidhur
       *[other] Cenime të ditur të dhënash, shënuar si të zgjidhur
    }
# A status indicator that appears in the top right corner of new breach cards
new-breach = E re
mobile-promo-headline = Silleni { -brand-name } te telefoni dhe tableti juaj
mobile-promo-body = Shfletim i shpejtë, privat dhe i parrezik kudo që shkoni. Gjejeni { -brand-name } te Google Play dhe App Store.
mobile-promo-cta = Merreni { -brand-name } në Android dhe iOS
promo-lockwise-headline = Merrini fjalëkalimet tuaja kudo
lockwise-promo-body = Mbani nën kontroll kredencialet tuaja të hyrjeve nëpër krejt pajisjet. Përdorini pa rrezik nga kompjuteri, telefoni, ose tableti juaj.
promo-lockwise-cta = Merrni { -brand-lockwise }
fpn-promo-headline = Fshihuni vendndodhjen tuaj sajteve dhe gjurmuesve
promo-fpn-body = { -brand-fpn } hedh tej sajtet dhe grumbulluesit e të dhënave që krijojnë profile për ju përmes reklamash, duke maskuar adresën tuaj të njëmendtë IP.
promo-fpn-cta = Merrni { -brand-fpn }
monitor-promo-headline = Mësoni rreth cenimesh të reja të dhënash
monitor-promo-body = Njoftohuni herës tjetër që të dhënat tuaja personale ekspozohen në një cenim të ditur të dhënash.
ecosystem-promo-headline = Mbroni jetën tuaj internetore me produkte që vënë privatësinë mbi gjithçka
ecosystem-promo-body = Krejt produktet { -brand-name } respektojnë Premtimin tonë Mbi të Dhënat Personale: Grumbullim sa më pak. Mbajtje e parrezik. Pa të fshehta.
promo-ecosystem-cta = Shihni Krejt Produktet
steps-to-resolve-headline = Hapa për të zgjidhur këtë cenim
vpn-promo-headline = Ka ardhur koha për të fuqizuar sigurinë tuaj internetore.
vpn-promo-copy = Rrjeti Virtual Privat i { -brand-Mozilla }-s ndihmon të mbrohet lidhja juaj internet nga hacker-a dhe spiunë.
vpn-promo-cta = Merrni { -brand-mozilla-vpn }
vpn-promo-headline-new = Kurseni 50% përmes një pajtimi të plotë njëvjetor
vpn-promo-copy-new = Mbroni të dhënat tuaja internetore—dhe zgjidhni një plan pajtimi VPN që bën për ju.

## VPN promotional banner.  HTML tags should not be translated, e.g. `<em>`

# Variables:
#   $ip-location (String) - User's IP location is determined dynamically by 3rd-party,
#                           eg: "Your location: Los Angeles, CA".  The 3rd-party service
#                           provides its own localization.
vpn-banner-location = Vendndodhja juaj: { $ip-location }
vpn-banner-protect-yourself-with-vpn = <em>Mbroni veten</em> me { -brand-mozilla-vpn }.
vpn-banner-protected-with-vpn = <em>I mbrojtur</em> me { -brand-mozilla-vpn }.
vpn-banner-title-1 = Jeni i mbrojtur — falë përdorimit të { -brand-mozilla-vpn }.
vpn-banner-title-2 = Vendndodhja juaj mund të gjurmohet, nëse s’përdorni VPN.
vpn-banner-subtitle-2 = Mbroni vendndodhjen tuaj dhe sfhletoni të parrezik, me 3 hapa
vpn-banner-status-protected = Gjendje e tanishme: <em>I mbrojtur ✓</em>
vpn-banner-status-not-protected = Gjendje e tanishme: <em>Jo i mbrojtur ⚠</em>
# Variables:
#   $ip-address (String) - User's IP address is determined dynamically, eg: "IP address: 192.168.1.1"
vpn-banner-ip-address = Adresë IP: { $ip-address }
vpn-banner-step-1 = Pajtohuni te { -brand-mozilla-vpn }
vpn-banner-step-2 = Përzgjidhni një vend VPN-je
vpn-banner-step-3 = Aktivizoni VPN-në dhe shfletoni të parrezik
vpn-banner-cta = Merrni { -brand-mozilla-vpn }
# button to expand panel
vpn-banner-cta-expand = Zgjeroje
# button to close panel
vpn-banner-cta-close = Mbylle

## Relay and VPN educational/ad units

ad-unit-relay-cta = Mësoni më tepër mbi { -brand-relay }
ad-unit-vpn-cta = Mësoni më tepër mbi { -brand-mozilla-vpn }
# ad 1 heading
ad-unit-1-how-do-you-keep = Si ta mbani të fshehtë adresën tuaj email?
# ad 2 heading
ad-unit-2-do-you-worry = A shqetësoheni për sigurinë në një Wi-Fi publik?
# ad 3 heading
ad-unit-3-stay-in-the-game = Jini brenda gjërave
ad-unit-3-lets-you-keep = { -brand-mozilla-vpn } ju lejon ta ruani të parrezik dhe të siguruar një lidhje të përhershme në internet, teksa luani lojëra, apo shihni filma në linjë.
# ad 3 list item 1
ad-unit-3-prevent-throttling = Parandaloni “throttling”
# ad 3 list item 2
ad-unit-3-be-anywhere = Jini kudo qoftë në botë
# ad 3 list item 3
ad-unit-3-access-more = Hyni në më shumë gjëra
# ad 4 heading
ad-unit-4-shopping-with = Pazare me Maska Email-esh
ad-unit-4-want-to-buy = Doni të blini diçka në internet dhe nuk e njihni, ose nuk e besoni plotësisht shitoren?
ad-unit-4-shop-online = Përdorni një maskë email-i, kurdo që blini në internet. Merreni ripohimin e blerjes te email-i juaj faktik dhe mandej hiqeni kollaj maskën, kur të doni.
# ad 5 heading
ad-unit-5-on-the-go = Në Lëvizje me { -brand-relay }
ad-unit-5-instantly-make = Krijoni menjëherë një maskë vetjake email kudo dhe kurdo që shkoni!
# ad 5 subheading 1
ad-unit-5-connect-on-the-go = Lidhuni prej ngado
ad-unit-5-privately-sign-in = Përdoreni maskën tuaj email kur doni të hyni privatisht në kafenë tuaj të parapëlqyer, apo në Wi-Fi publik
# ad 5 subheading 2
ad-unit-5-email-receipts = Merrni dëftesa email-i
ad-unit-5-share-custom-email = Jepni një maskë email vetjake për dëftesa blerjesh, pa dhënë email-in tuaj të njëmendtë
# ad 5 subheading 3
ad-unit-5-use-on-phone = Përdoreni në telefonin tuaj
ad-unit-5-no-matter-where = Pavarësisht se ku gjendeni, krijoni një maskë vetjake email brenda pak sekondash, për çfarëdo që dëshironi të bëni
# ad 6 heading
ad-unit-6-worry-free = Regjistrime Pa Kokëçarje
ad-unit-6-want-to-start = Doni të filloni një pajtim të ri, t’i përgjigjeni një ftese apo të merrni një kod promocional okazioni pa pasur përmbytje të email-it me mesazhe të padëshiruar?
ad-unit-6-before-you-complete = Para se të plotësoni regjistrimin tuaj të radhës, përdorni një maskë email-i, në vend të vetëm email-it, që të mbroni të dhënat tuaja dhe që ta keni kutinë tuaj postare nën kontroll

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
-brand-mozilla-account = Llogari Mozilla
open-in-new-tab-alt = Hape lidhjen në skedë të re

## Search Engine Optimization

meta-desc-2 = Shihni nëse keni qenë pjesë e një cenimi të dhënash, me { -brand-fx-monitor }. Do t’ju ndihmojmë të kuptoni ç’të bëhet në vazhdim dhe të mbikëqyrni vazhdimisht për çfarëdo cenimesh.

## Header

# Deprecated
brand-fx-monitor = { -brand-fx-monitor }
sign-in = Hyni
brand-mozilla-monitor = { -brand-fx-monitor }

## Site navigation

site-nav-breaches-link = Zgjidhni Cenime të Dhënash
site-nav-settings-link = Rregullime
site-nav-help-link = Ndihmë dhe Asistencë
# This call-out is above 2 image links for Firefox Relay and Mozilla VPN
site-nav-ad-callout = Provoni mjete sigurie të tjera tonat:
brand-relay = { -brand-relay }
brand-mozilla-vpn = { -brand-mozilla-vpn }
mobile-menu-label = Menuja kryesore
main-nav-button-collapse-label = Tkurre menunë
main-nav-button-collapse-tooltip = Tkurre menunë
main-nav-button-expand-label = Zgjeroje menunë
main-nav-button-expand-tooltip = Zgjeroje menunë
main-nav-label = Lëvizje
main-nav-link-home-label = Kreu
main-nav-link-dashboard-label = Pult
main-nav-link-settings-label = Rregullime
main-nav-link-faq-label = PBR
main-nav-link-faq-tooltip = Pyetje të bëra rëndom

## User menu

# Obsolete
menu-button-title = Menu përdoruesi
# Obsolete
menu-button-alt = Hap menu përdoruesi
# Obsolete
menu-list-accessible-label = Menu llogarish
# Obsolete
menu-item-fxa-2 = Administroni { -brand-mozilla-account } tuaj
# Obsolete
menu-item-settings = Rregullime
# Obsolete
menu-item-help = Ndihmë dhe asistencë
# Obsolete
menu-item-logout = Dilni
user-menu-trigger-label = Hap menu përdoruesi
user-menu-trigger-tooltip = Profil
user-menu-manage-fxa-label = Administroni { -brand-mozilla-account } tuaj
user-menu-settings-label = Rregullime
user-menu-settings-tooltip = Formësoni { -brand-mozilla-monitor }
user-menu-help-label = Ndihmë dhe asistencë
user-menu-help-tooltip = Merrni ndihmë rreth përdorimit të { -brand-mozilla-monitor }
user-menu-signout-label = Dilni
user-menu-signout-tooltip = Dilni nga { -brand-mozilla-monitor }

## Footer

mozilla = { -brand-Mozilla }
terms-of-service = Kushtet e Shërbimit
privacy-notice = Shënim Mbi Privatësinë
github = { -brand-github }
footer-nav-all-breaches = Krejt Cenimet
footer-external-link-faq-label = PBR
footer-external-link-faq-tooltip = Pyetje të bëra rëndom

## Error page

# Variables:
#   $errorCode (number) - "404"
error-page-error-404-title = { $errorCode } S’u gjet faqe
error-page-error-404-copy = Na ndjeni, faqja që po kërkonit, s’ekziston më.
error-page-error-404-cta-button = Kthehu mbrapsht
# Variables:
#   $errorCode (number) - the status code of the error, e.g. 403
error-page-error-other-title = { $errorCode } Diç shkoi ters
error-page-error-other-copy = Ju lutemi, riprovoni, ose rikthehuni më vonë

## Breach overview page

all-breaches-headline-2 = Krejt cenimet të pikasura nga { -brand-fx-monitor }
all-breaches-lead = Mbikëqyrim krejt cenimet e ditura të të dhënave, për të parë nëse hollësitë tuaja personale qenë komprometuar. Ja një listë e plotë e krejt cenimeve që janë njoftuar që nga 2007-a.
search-breaches = Kërkoni Te Shkeljet
# the kind of user data exposed to hackers in data breach.
exposed-data = Të dhëna të ekspozuara:

## Public breach detail page

find-out-if-2 = Shihni nëse jeni përfshirë në këtë cenim
find-out-if-description = Do t’ju ndihmojmë të shihni shpejt e shpejt nëse adresa juaj email qe ekspozuar në këtë cenim dhe të kuptoni ç’të bëhet më pas.
breach-detail-cta-signup = Kontrolloni për cenime

## Floating banner

floating-banner-text = Fuziqoni sigurinë tuaj internetore, përmes lajmesh, ndihmëzash dhe përditësimesh nga { -brand-Mozilla }.
floating-banner-link-label = Regjistrohuni
floating-banner-dismiss-button-label = Jo, faleminderit

## Firefox Monitor -> Mozilla Monitor rebrand banner

banner-monitor-rebrand-text = <b>{ -brand-mozilla-monitor }</b>: Emër, pamje dhe më tepër rrugë të reja për <b> të pretenduar privatësinë tuaj</b>.
banner-monitor-rebrand-dismiss-button-label = OK
banner-monitor-rebrand-dismiss-button-tooltip = Hidhe tej
loading-accessibility = Po ngarkohet
