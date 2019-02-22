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
-brand-fxa = Llogari Firefox
-brand-Chrome = Chrome
layout-Firefox = { -brand-name }
# Descriptive headline for a column of links where users can give feedback, or get additional information about, Firefox Monitor.
layout-support = Asistencë
# Link that takes the user to a blog post on blog.mozilla.org about the alerts
about-firefox-alerts = Mbi Sinjalizimet Firefox
# Link that takes the user to a Firefox Monitor survey. 
give-feedback = Jepni Përshtypjet
terms-and-privacy = Kushte dhe Privatësi
error-scan-page-token = Provuat të skanoni shumë adresa email brenda një kohe të shkurtër. Për arsye sigurie, kemi bllokuar përkohësisht kërkime të reja prej jush. Do të jeni në gjendje të riprovoni më vonë.
error-could-not-add-email = S’u shtua dot adresë email te baza e të dhënave.
error-not-subscribed = Kjo adresë email s’është e pajtuar te { -product-name }.
error-hibp-throttled = Shumë lidhje me { -brand-HIBP }.
error-hibp-connect = Gabim në lidhjen me { -brand-HIBP }.
error-hibp-load-breaches = S’u ngarkuan dot shkeljet.
hibp-notify-email-subject = { -product-name } Sinjalizim: Llogaria juaj qe përfshirë në një shkelje.
home-title = { -product-name }
home-not-found = S’u gjet faqe.
oauth-invalid-session = Sesion i pavlefshëm
oauth-confirmed-title = { -product-name } : I pajtuar
scan-title = { -product-name } : Përfundime Skanimi
user-add-invalid-email = Email i Pavlefshëm
user-add-email-verify-subject = Verifikoni pajtimin tuaj te { -product-name }.
user-add-title = { -product-name } : Email Ripohimi
error-headline = Gabim
user-verify-token-error = Token-i i verifikimit është i domosdoshëm.
user-verify-email-report-subject = Raporti juaj { -product-name }
user-verify-title = { -product-name } : I pajtuar
user-unsubscribe-token-error = Shpajtimi lyp një token.
user-unsubscribe-token-email-error = Shpajtimi lyp një token dhe emailHash.
user-unsubscribe-title = { -product-name } : Shpajtomëni
user-unsubscribe-survey-title = { -product-name } : Pyetësor Shpajtimesh
user-unsubscribed-title = { -product-name } : I shpajtuar

## Password Tips

pwt-section-headline = Më i Fuqishëm Fjalëkalimi = Më e Mirë Mbrojtja
pwt-section-subhead = Të dhënat tuaja private janë aq të sigurta, sa ç’janë fjalëkalimet tuaja.
pwt-section-blurb =
    Fjalëkalimet tuaja mbrojnë më shumë se llogaritë tuaja. Ata mbrojnë çdo grimë të dhënash personale që gjenden në to.
    Dhe hacker-at bazohen në huqe të këqija, fjala vjen përdorimi i të njëjtit fjalëkalim kudo ose përdorimi i togfjalëshave të rëndomtë (fj@lëkal1m, ndonjëri?) ndaj nëse thyejnë një llogari, mund të thyejnë plot të tjera. Ja se si t’i mbroni më mirë llogaritë tuaja.
pwt-headline-1 = Përdorni një fjalëkalim të ndryshëm për çdo llogari
pwt-summary-1 =
    Ripërdorimi i të njëjtit fjalëkalim kudo e lë shtegun hapur për vjedhje identiteti. 
    Cilido me atë fjalëkalim mund të hyjë në krejt llogaritë tuaja.
pwt-headline-2 = Krijoni fjalëkalime të fuqishëm, që merren zor me mend
pwt-summary-2 =
    Për të provuar të gjejnë tuajin, hackera-t përdorin mijëra fjalëkalime të rëndomtë. 
    Sa më i gjatë dhe i rastësishëm të jetë fjalëkalimi juaj, aq më e vështirë do të jetë të zbulohet.
pwt-headline-3 = Pyetjet e sigurisë trajtojini si fjalëkalime ekstra
pwt-summary-3 =
    Sajtet s’kontrollojnë nëse përgjigjet tuaja janë të sakta a jo, ata thjesht shohin nëse përputhen çdo herë. 
    Krijoni përgjigje të gjata, kuturu, dhe depozitojini diku në një vend pa rrezik.
pwt-headline-4 = Merrni ndihmë lidhur me mbajtjen mend të fjalëkalimeve tuaj
pwt-summary-4 =
    Përgjegjës fjalëkalimesh, të tillë si 1Password, LastPass, Dashlane, dhe Bitwarden prodhojnë fjalëkalime të fuqishëm, unikë. 
    Ata i depozitojnë gjithashtu fjalëkalimet në mënyrë të sigurt dhe i plotësojnë ato për ju në sajte
pwt-headline-5 = Shtoni siguri ekstra përmes mirëfilltësimit dyfaktorësh
pwt-summary-5 =
    Për hyrje në llogarinë tuaj, M2F-ja kërkon doemos një copëz informacioni shtesë (pak a shumë si një kod njëpërdorimësh i dërguar përmes mesazhi tekst). 
    Pa të, edhe pse dikush mund të ketë fjalëkalimin tuaj, nuk hyn dot.
pwt-headline-6 = Regjistrohuni për sinjalizimi { -product-name-nowrap }
pwt-summary-6 =
    Shkeljet e të dhënave në sajte po shtohen. Sapo një shkelje e re shtohet në bazën tonë të të dhënave, 
    { -product-name-nowrap } ju dërgon një sinjalizim — kështu mund veproni dhe të mbroni llogarinë tuaj.
landing-headline = E drejta juaj për të qenë të parrezikuar nga hacker-at fillon këtu.
landing-blurb =
    { -product-name-nowrap } ju armatos me mjete për t’i mbajtur të parrezikuara të dhënat tuaja personale. 
    Gjeni se ç’dinë tashmë hacker-at rreth jush dhe mësoni se si të jeni përherë një hap para tyre.
scan-label = Shihni nëse jeni përfshirë në një shkelje të dhënash.
scan-placeholder = Jepni Adresë Email
scan-privacy = Email-i juaj nuk do të depozitohet.
scan-submit = Kërkoni Për Email-in Tuaj
scan-another-email = Skanoni Një Tjetër Adresë Email
scan-featuredbreach-label = Shihni nëse llogaria juaj <span class="bold"> { $featuredBreach } </span> qe komprometuar.
sensitive-breach-email-required = Cenimi përmban të dhëna me spec. Lypset verifikim email-i.
scan-error = Duhet të jetë një email i vlefshëm.
signup-banner-headline = { -product-name-nowrap } zbulon rreziqe kundër llogarive tuaja internetore.
signup-banner-blurb =
    Raporti i hollësishëm { -product-name-nowrap } për ju tregon nëse ka patur rrjedhje të dhënash prej llogarish tuajat internetore, apo nëse janë vjedhur të tilla. 
    Do t’ju njoftojmë edhe nëse llogaritë tuaja shfaqen në shkelje të reja sajtesh.
download-firefox-bar-blurb = { -product-name-nowrap } ju vjen nga <span class="nowrap">{ -brand-name }-i fringo i ri</span>.
download-firefox-bar-link = Shkarkojeni { -brand-name }-in që tani
download-firefox-banner-blurb = Vihuni në kontroll të shfletuesit tuaj
download-firefox-banner-button = Shkarko { -brand-name }-in
signup-modal-headline = Regjistrohuni për { -product-name-nowrap }
signup-modal-blurb = Regjistrohuni për raportin tuaj të plotë rreth jush, sinjalizime kur ndodhin shkelje të reja, dhe ndihmëza sigurie nga { -product-name-nowrap }.
signup-modal-close = Mbylle
get-your-report = Merrni Raportin Tuaj
signup-modal-verify-headline = Verifikoni pajtimin tuaj
signup-modal-verify-blurb = Kemi dërguar te <span id="submitted-email" class="medium"></span> një lidhje verifikimi.
signup-modal-verify-expiration = Kjo lidhje skadon pas 24 orësh.
signup-modal-verify-resend = S’duket te të marrët apo te dosja e hedhurinave? Kërkoni ridërgim.
# Appears after Firefox Monitor has sent a verification email to a new user. 
signup-modal-sent = U dërgua!
signup-with-fxa = Regjistrohuni me Llogari { -brand-name }
form-signup-placeholder = Jepni email
form-signup-checkbox = Merrni lajmet më të reja prej { -brand-Mozilla }-s dhe { -brand-name }-it.
sign-up = Regjistrohuni
form-signup-error = Duhet të jetë një email i vlefshëm
no-breaches-headline = Deri këtu, mirë.
found-breaches-headline = Të dhënat tuaja qenë pjesë e një shkeljeje të dhënash.
no-breaches =
    Adresa juaj email nuk u pa gjatë kontrollit tonë të thjeshtë.
    Kjo është gjë e mirë, por shkelje të dhënash mund të ndodhin në çdo kohë dhe ka më tepër gjëra që mund të bëni. 
    Pajtohuni te { -product-name-nowrap } për një raport të plotë, sinjalizime kur ndodhin shkelje të reja, dhe ndihmëza rreth mbrojtjes së fjalëkalimeve tuaj.
featured-breach-results =
    { $breachCount ->
        [0] Llogaria juaj shfaqet te shkelja <span class="bold">{ $featuredBreach }</span>, por nuk duket te ndonjë shkelje tjetër e njohur të dhënash.
        [one] Llogaria juaj u shfaq te shkelja <span class="bold"> { $featuredBreach } </span>, si dhe te një tjetër shkelje.
       *[other] Llogaria juaj u shfaq te shkelja <span class="bold"> { $featuredBreach } </span>, si dhe te { $breachCount } shkelje të tjera.
    }
featured-breach-not-compromised =
    { $breachCount ->
        [0] { no-breaches }
        [one] Llogaria juaj s’u shfaq te shkelja <span class="bold">{ $featuredBreach }</span>, por u shfaq te një shkelje tjetër.
       *[other] Llogaria juaj s’u shfaq te shkelja <span class="bold">{ $featuredBreach }</span>, por u shfaq te { $breachCount } shkelje të tjera.
    }
scan-results =
    { $breachCount ->
        [0] { no-breaches }
        [one] Llogaria juaj u shfaq në { $breachCount } shkelje.
       *[other] Llogaritë e përshoqëruara me adresën tuaj email u shfaqën në { $breachCount } shkeljet vijuese.
    }
show-more-breaches = Shfaq Më Tepër
what-to-do-headline = Ç’të Bëhet Kur të Dhënat Tuaja Ekspozohen në një Shkelje të Dhënash
what-to-do-subhead-1 = Ndryshoni fjalëkalimet tuaj, madje edhe për llogari të vjetra
what-to-do-blurb-1 =
    Nëse s’bëni dot hyrjen në llogarinë tuaj, lidhuni me sajtin për t’u kërkuar se si mund të rimerrni llogarinë tuaj, ose se si mund të mbyllni atë. 
    Shihni një llogari që nuk e njihni më? Sajti mund të kenë ndryshuar emrat ose dikush mund të ketë krijuar një llogari për ju.
what-to-do-subhead-2 = Nëse përdorni një fjalëkalim të ekspozuar, ndryshojeni
what-to-do-blurb-2 =
    Hacker-at mund të provojnë të ripërdorin fjalëkalimin tuaj të ekspozuar që të hyjnë në llogari të   tjera. 
    Krijoni një fjalëkalim të ndryshëm për çdo sajt, veçanërisht për llogarinë tuaj bankare, 
    atë email dhe sajte të tjerë ku ruani të dhëna personale.
what-to-do-subhead-3 = Ndërmerrni hapa ekstra për të siguruar llogaritë tuaja financiare
what-to-do-blurb-3 =
    Shumica e shkeljeve ekspozojnë vetëm email-e dhe fjalëkalime, por disa përfshijnë edhe të dhëna financiare me spec. 
    Nëse llogaria juaj bankare apo numra kartash krediti qenë përfshirë në një shkelje, sinjalizoni bankën tuaj për mashtrim të mundshëm, 
    dhe mbikëqyrni bilancet për zëra që nuk i njihni.
what-to-do-subhead-4 = Merrni ndihmë për krijim fjalëkalime të mirë dhe për t’i mbajtur të parrezikuar.
what-to-do-blurb-4 = Përgjegjës fjalëkalimesh, të tillë si 1Password, LastPass, Dashlane, dhe Bitwarden prodhojnë fjalëkalime të fuqishëm, i depozitojnë në mënyrë të sigurt dhe i plotësojnë ato për ju në sajte.
# breach-date = the calendar date a particular data theft occurred. 
breach-date = Datë shkeljeje:
# compromised accounts = the total number of user accounts exposed in data breach
compromised-accounts = Llogari të komprometuara:
# compromised-data = the kind of user data exposed to hackers in data breach.
compromised-data = Të dhëna të komprometuara
confirmed = E ripohuar!<br />Jeni Pajtuar!
confirmed-blurb = { -product-name-nowrap } do t’ju dërgojë me email pa humbur kohë një raport të plotë, dhe do t’ju dërgojë një sinjalizim me email nëse llogaria juaj shfaqet në një shkelje të re të raportuar.
confirmed-social-blurb = Nëse jeni përfshirë në një shkelje, gjasat janë që të jenë përfshirë edhe shokë, familjarë apo kontakte internetore. Tregojuni për { -product-name-nowrap }.
unsub-headline = Shpajtohuni prej { -product-name-nowrap }
unsub-blurb = Kjo do të shkaktojë heqjen e email-it tuaj nga lista { -product-name-nowrap } dhe s’do të merrni më sinjalizime kur ngjasin shkelje të reja.
unsub-button = Shpajtomë
unsub-survey-headline = S’jeni më i pajtuar.
unsub-survey-blurb =
    Email-i juaj është shpajtuar nga { -product-name-nowrap }. Faleminderit që e përdorët këtë shërbim. 
    A do të ndaleshit një çast t’i përgjigjeni një pyetjeje rreth përvojës tuaj me të?
unsub-survey-form-label = Pse po shpajtoheni nga sinjalizimet { -product-name-nowrap }?
unsub-reason-1 = Mendoj se sinjalizimet s’i bëjnë më të parrezikuara të dhënat e mia
unsub-reason-2 = Më vijnë shumë email-e nga { -product-name-nowrap }
unsub-reason-3 = S’më duket me vlerë ky shërbim
unsub-reason-4 = Kam ndërmarrë tashmë hapa për mbrojtjen e llogarive të mia
unsub-reason-5 = Përdor një shërbim tjetër për mbikëqyrje të llogarive të mia
unsub-reason-6 = Asnjë prej sa më sipër
unsub-survey-thankyou = Faleminderit për përshtypjet tuaja.
unsub-survey-error = Ju lutemi, përzgjidhni një.
# Link to share Firefox Monitor on Facebook. Positioned next to Facebook logo.
share = Ndajeni me të tjerët
# Link to share Firefox Monitor on Twitter. Positioned next to Twitter logo.
tweet = Tweet
download-firefox-quantum = Shkarko { -brand-Quantum }
download-firefox-mobile = Shkarkoni { -brand-name } për Celular
# Features here refers to Firefox browser features. 
features = Veçori
# beta-nightly-developer-edition refers to additional versions of Firefox Browser
beta-nightly-developer-edition = Beta, Nightly, Developer Edition
# Breach data provided by Have I Been Pwned.
hibp-attribution = Të dhëna shkeljesh furnizuar nga { $hibp-link }
site-description = A ka rrjedhje nga llogaritë tuaja apo janë vjedhur gjatë një shkeljeje të dhënash? Gjejeni te { -product-name }. Kërkoni në bazën tonë të të dhënave dhe regjistrohuni për sinjalizime.
confirmation-headline = Raporti juaj rreth { -product-name } po vjen.
confirmation-blurb = Cenimi i të dhënave mund të prekë këdo. Tregojuani të tjerëve, që shokët dhe familja të mund të kontrollojnë për të parë nëse llogaritë e tyre internetore janë të parrezikuara.
share-email = Email
# Appears at the end of a list of email-clients and refers to any other unlisted email-client.
share-other = Tjetër
share-twitter = Shumica e njerëzve kanë rreth 100 llogari internetore. A është ekspozuar ndonjëra nga tuajat në shkelje të dhënash? Shiheni.
share-facebook-headline = Shihni nëse keni qenë viktimë e ndonjë shkeljeje të dhënash
share-facebook-blurb = Keni llogari internetore që kanë qenë ekspozuar në shkelje të dhënash?
og-site-description = Shihni nëse keni qenë pjesë e ndonjë shkeljeje të dhënash, përmes { -product-name }. Regjistrohuni për sinjalizime rreth shkeljesh në të ardhmen dhe merrni ndihmëza si t’i mbani llogaritë tuaja të parrezikuara.
mozilla-security-blog = Blogu i { -brand-Mozilla }-s Mbi Sigurinë
# A header for a list of links to share Firefox Monitor on various social media platforms.
layout-social = Shoqërore
show-all = Shfaqi krejt
fxa-signup-banner-headline = Mbikëqyrni kërcënime ndaj llogarive tuaja internetore.
fxa-signup-banner-blurb = Regjistrohuni për një { -brand-fxa } që të merrni raportin tuaj të hollësishëm dhe sinjalizime mbi shkelje të reja të të dhënave.
fxa-landing-blurb =
    Shihni se ç’dinë tashmë mbi ju hacker-at,
    dhe mësoni se si të jeni përherë një hap para tyre.
fxa-scan-label = Shihni nëse jeni përfshirë në shkelje të dhënash
fxa-welcome-headline = Mirë se vini te { -product-name }.
fxa-welcome-blurb = Jeni gati të merrni sinjalizime, nëse { $userEmail } shfaqet si pjesë e një shkeljeje të dhënash.
fxa-scan-another-email = Doni të kontrolloni një email tjetër?
# Search Firefox Monitor
fxa-scan-submit = Kërkoni te { -product-name }
sign-up-to-check = Regjistrohuni për Kontroll
sign-in = Hyni
sign-out = Dilni
full-report-headline = Raporti juaj { -product-name }
see-full-report = Shihni Raportin e Plotë
# Manage Firefox Account, link to page where account holders can change their account settings.
manage-fxa = Administroni { -brand-fxa }
fxa-download-firefox-bar-blurb = Sjellë te ju nga { -brand-name }. 2x më i shpejtë. Përdor 30% më pak kujtesë se sa { -brand-Chrome }.
fxa-download-firefox-bar-link = Shkarkojeni tani
fxa-download-firefox-banner-blurb = Ngarkim më i mirë, më i shpejtë faqesh, që përdor më pak kujtesë kompjuteri.
user-fb-compromised-headline = { $userEmail } është shfaqur në shkeljen e të dhënave  { $breachName }.
guest-fb-compromised-headline = Ky email u shfaq në shkeljen e të dhënave { $breachName }.
user-zero-breaches-headline = { $userEmail } u shfaq në zero shkelje të dhënash.
guest-zero-breaches-headline = Ky email u shfaq në zero shkelje të dhënash.
user-scan-results-headline =
    { $breachCount ->
        [one] { $userEmail } u shfaq në 1 shkelje të dhënash.
       *[other] { $userEmail } u shfaq në { $breachCount } shkelje të dhënash.
    }
guest-scan-results-headline =
    { $breachCount ->
        [one] Ky email u shfaq në 1 shkelje të dhënash.
       *[other] Ky email u shfaq në { $breachCount } shkelje të dhënash.
    }
user-no-breaches-blurb = Do t’ju njoftojmë nëse kjo adresë email shfaqet në shkelje të reja të dhënash.
guest-no-breaches-blurb =
    Që të shihni nëse ky email shfaqet në shkelje të deritashme të dhënash, krijoni një { -brand-fxa }. 
    Do t’ju njoftojmë edhe nëse kjo adresë shfaqet në shkelje të reja të dhënash.
user-one-breach-blurb = Kjo shkelje ekspozoi të dhënat vijuese personale.
user-fb-compromised-blurb =
    { $breachCount ->
        [one] Email-i juaj u shfaq edhe në { $breachCount } shkelje tjetër.
       *[other] Email-i juaj u shfaq edhe në { $breachCount } shkelje të tjera.
    }
user-generic-fb-compromised-blurb =
    { $breachCount ->
        [one] Ky email u shfaq edhe në { $breachCount } shkelje tjetër.
       *[other] Ky email u shfaq edhe në { $breachCount } shkelje të tjera.
    }
user-fb-compromised-single = Kjo shkelje ekspozoi të dhënat personale vijuese. Nëse s’e keni bërë tashmë, ndryshoni fjalëkalimet tuaj.
user-generic-fb-compromised-single = Kjo shkelje ekspozoi të dhënat personale vijuese.
guest-fb-compromised-single = Kjo shkelje ekspozoi të dhënat personale vijuese. Që të merrni raportin e plotë për të dhe sinjalizime rreth shkeljesh të reja, regjistrohuni për një { -brand-fxa }.
guest-fb-compromised-blurb =
    { $breachCount ->
        [one] Ky email u shfaq edhe në { $breachCount } shkelje tjetër. Që të merrni raportin e plotë për të dhe sinjalizime rreth shkeljesh të reja, regjistrohuni për një { -brand-fxa }.
       *[other] Ky email u shfaq edhe në { $breachCount } shkelje të tjera. Që të merrni raportin e plotë për të dhe sinjalizime rreth shkeljesh të reja, regjistrohuni për një { -brand-fxa }.
    }
user-fb-not-compromised-blurb =
    { $breachCount ->
        [one] Nuk gjendeshit në shkeljen { $breachName }, por e gjetëm atë adresë email në një tjetër.
       *[other] Nuk gjendeshit në shkeljen { $breachName }, por e gjetëm atë adresë email në të tjera.
    }
user-generic-fb-not-compromised-blurb =
    { $breachCount ->
        [one] Ky email nuk gjendej në shkeljen { $breachName }, por e gjetëm në një tjetër.
       *[other] Ky email nuk gjendej në shkeljen { $breachName }, por e gjetëm në të tjera.
    }
guest-fb-not-compromised-blurb =
    { $breachCount ->
        [one] Ky email nuk gjendej në shkeljen { $breachName }, por e gjetëm në një tjetër. Që të merrni raportin e plotë për të dhe sinjalizime rreth shkeljesh të reja, regjistrohuni për një { -brand-fxa }.
       *[other] Ky email nuk gjendej në shkeljen { $breachName }, por e gjetëm në të tjera. Që të merrni raportin e plotë për të dhe sinjalizime rreth shkeljesh të reja, regjistrohuni për një { -brand-fxa }.
    }
# While English doesn’t use the actual number of breaches in this sentence,
# you can use {$breachCount} to display the number of breaches in your localization.
user-found-breaches-blurb =
    { $breachCount ->
        [one] Kjo shkelje ekspozoi të dhënat personale vijuese. Nëse s’e keni bërë tashmë, ndryshoni fjalëkalimet tuaj.
       *[other] Këto shkelje ekspozuan të dhënat personale vijuese. Nëse s’e keni bërë tashmë, ndryshoni fjalëkalimet tuaj.
    }
# While English doesn’t use the actual number of breaches in this sentence,
# you can use {$breachCount} to display the number of breaches in your localization.
user-generic-found-breaches-blurb =
    { $breachCount ->
        [one] Kjo shkelje ekspozoi të dhënat personale vijuese.
       *[other] Këto shkelje ekspozuan të dhënat personale vijuese.
    }
# While English doesn’t use the actual number of breaches in this sentence,
# you can use {$breachCount} to display the number of breaches in your localization.
guest-found-breaches-blurb =
    { $breachCount ->
        [one] Kjo shkelje ekspozoi të dhënat personale vijuese. Që të merrni raportin e plotë për të dhe sinjalizime rreth shkeljesh të reja, regjistrohuni për një { -brand-fxa }.
       *[other] Këto shkelje ekspozuan të dhënat personale vijuese. Që të merrni raportin e plotë për të dhe sinjalizime rreth shkeljesh të reja, regjistrohuni për një { -brand-fxa }.
    }
have-an-account = Keni tashmë një llogari?
fxa-what-to-do-blurb-3 =
    Shumica e shkeljeve ekspozojnë vetëm email-e dhe fjalëkalime, por disa përfshijnë edhe të dhëna financiare me spec. 
    Nëse llogaria juaj bankare apo numra kartash krediti qenë ekspozuar, sinjalizoni bankën tuaj për mashtrim të mundshëm. 
    Mbikëqyrni bilancet për zëra që nuk i njihni.
fxa-what-to-do-subhead-4 = Merrni ndihmë për të mbajtur mend krejt fjalëkalimet tuaja dhe ruajtur ato të parrezikuara.
copyright = Pjesë të kësaj lënde janë © 1999-{ $year } e kontribuesish individualë te mozilla.org.
content-available = Lëndë e përdorshme sipas një licence Creative Commons.
