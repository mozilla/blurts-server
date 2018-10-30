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
layout-Firefox = { -brand-name }
# Descriptive headline for a column of links where users can give feedback, or get additional information about, Firefox Monitor.
layout-support = Asistencë
# Link that takes the user to a Firefox Monitor survey. 
give-feedback = Jepni Përshtypjet
terms-and-privacy = Kushte dhe Privatësi
error-not-subscribed = Kjo adresë email s’është e pajtuar te { -product-name }.
error-hibp-throttled = Shumë lidhje me { -brand-HIBP }.
error-hibp-connect = Gabim në lidhjen me { -brand-HIBP }.
error-hibp-load-breaches = S’u ngarkuan dot shkeljet.
hibp-notify-email-subject = { -product-name } Sinjalizim: Llogaria juaj qe përfshirë në një shkelje.
home-title = { -product-name }
home-not-found = S’u gjet faqe.
oauth-invalid-session = Sesion i pavlefshëm
scan-title = { -product-name } : Përfundime Skanimi
user-add-invalid-email = Email i Pavlefshëm
user-add-email-verify-subject = Verifikoni pajtimin tuaj te { -product-name }.
user-verify-token-error = Token-i i verifikimit është i domosdoshëm.
user-verify-email-report-subject = Raporti juaj { -product-name }
user-unsubscribe-token-error = Shpajtimi lyp një token.
user-unsubscribe-token-email-error = Shpajtimi lyp një token dhe emailHash.
user-unsubscribe-title = { -product-name } : Shpajtomëni

## Password Tips

pwt-section-headline = Më i Fuqishëm Fjalëkalimi = Më e Mirë Mbrojtja
pwt-section-subhead = Të dhënat tuaja private janë aq të sigurta, sa ç’janë fjalëkalimet tuaja.
pwt-section-blurb =
    Fjalëkalimet tuaja mbrojnë më shumë se llogaritë tuaja. Ata mbrojnë çdo grimë të dhënash personale që gjenden në to.
    Dhe hacker-at bazohen në huqe të këqija, fjala vjen përdorimi i të njëjtit fjalëkalim kudo ose përdorimi i togfjalëshave të rëndomtë (fj@lëkal1m, ndonjëri?) ndaj nëse thyejnë një llogari, mund të thyejnë plot të tjerë. Ja se si t’i mbroni më mirë llogaritë tuaja.
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
    Sajtet nuk kontrollojnë nëse përgjigjet tuaja janë të sakta a jo, ata thjesht shohin nëse përputhen çdo herë. 
    Krijoni përgjigje të gjata, kuturu, dhe depozitojini diku në një vend pa rrezik.
pwt-headline-4 = Merrni ndihmë lidhur me mbajtjen mend të fjalëkalimeve tuaj
pwt-headline-5 = Shtoni siguri ekstra përmes mirëfilltësimit dyfaktorësh
scan-label = Shihni nëse jeni përfshirë në një shkelje të dhënash.
scan-placeholder = Jepni Adresë Email
scan-privacy = Email-i juaj nuk do të depozitohet.
scan-submit = Kërkoni Për Email-in Tuaj
scan-another-email = Skanoni Një Tjetër Adresë Email
scan-featuredbreach-label = Shihni nëse llogaria juaj <span class="bold"> { $featuredBreach } </span> qe komprometuar.
scan-error = Duhet të jetë një email i vlefshëm.
signup-banner-headline = { -product-name-nowrap } zbulon rreziqe kundër llogarive tuaja internetore.
download-firefox-bar-blurb = { -product-name-nowrap } ju vjen nga <span class="nowrap">{ -brand-name }-i fringo i ri</span>.
download-firefox-bar-link = Shkarkojeni { -brand-name }-in që tani
download-firefox-banner-blurb = Vihuni në kontroll të shfletuesit tuaj
download-firefox-banner-button = Shkarko { -brand-name }-in
signup-modal-headline = Regjistrohuni për { -product-name-nowrap }
signup-modal-close = Mbylle
get-your-report = Merrni Raportin Tuaj
signup-modal-verify-headline = Verifikoni pajtimin tuaj
signup-modal-verify-blurb = Kemi dërguar te <span id="submitted-email" class="medium"></span> një lidhje verifikimi.
signup-modal-verify-expiration = Kjo lidhje skadon pas 24 orësh.
# Appears after Firefox Monitor has sent a verification email to a new user. 
signup-modal-sent = U dërgua!
signup-with-fxa = Regjistrohuni me Llogari { -brand-name }
form-signup-placeholder = Jepni email
form-signup-checkbox = Merrni lajmet më të reja prej { -brand-Mozilla }-s dhe { -brand-name }-it.
form-signup-error = Duhet të jetë një email i vlefshëm
no-breaches-headline = Deri këtu, mirë.
found-breaches-headline = Të dhënat tuaja qenë pjesë e një shkeljeje të dhënash.
show-more-breaches = Shfaq Më Tepër
what-to-do-subhead-1 = Ndryshoni fjalëkalimet tuaj, madje edhe për llogari të vjetra
# breach-date = the calendar date a particular data theft occurred. 
breach-date = Datë shkeljeje:
# compromised accounts = the total number of user accounts exposed in data breach
compromised-accounts = Llogari të komprometuara:
# compromised-data = the kind of user data exposed to hackers in data breach.
compromised-data = Të dhëna të komprometuara
unsub-button = Shpajtomë
unsub-reason-3 = S’më duket me vlerë ky shërbim
unsub-reason-5 = Përdor një shërbim tjetër për mbikëqyrje të llogarive të mia
unsub-reason-6 = Asnjë prej sa më sipër
unsub-survey-thankyou = Faleminderit për përshtypjet tuaja.
