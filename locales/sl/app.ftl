# String IDs beginning with "-product" and "-brand" should remain in English.
# They should not be:
# - Declined to adapt to grammatical case.
# - Transliterated.
# - Translated.
-product-name = Firefox Monitor
-product-name-nowrap = <span class="nowrap">{ -product-name }</span>
-product-short-name = Monitor
-brand-name =
    { $sklon ->
        [rodilnik] Firefoxa
        [dajalnik] Firefoxu
        [orodnik] Firefoxom
       *[imenovalnik] Firefox
    }
-brand-Quantum = Firefox Quantum
-brand-Mozilla =
    { $sklon ->
       *[imenovalnik] Mozilla
        [rodilnik] Mozille
        [dajalnik] Mozilli
        [tozilnik] Mozillo
    }
-brand-HIBP = Have I Been Pwned
-brand-fxa =
    { $sklon ->
       *[imenovalnik] Firefox Račun
        [rodilnik] Firefox Računa
        [dajalnik] Firefox Računu
        [orodnik] Firefox Računom
    }
-brand-Chrome = Chrome
layout-Firefox = { -brand-name }
# Descriptive headline for a column of links where users can give feedback, or get additional information about, Firefox Monitor.
layout-support = Podpora
# Link that takes the user to a blog post on blog.mozilla.org about the alerts
about-firefox-alerts = O opozorilih Firefoxa
# Link that takes the user to a Firefox Monitor survey. 
give-feedback = Sporočite nam svoje mnenje
terms-and-privacy = Pogoji in zasebnost
error-scan-page-token = V kratkem časovnem obdobju ste skušali preveriti preveč e-poštnih naslovov. Iz varnostnih razlogov smo vam začasno onemogočili nova iskanja. Znova lahko poskusite kasneje.
error-could-not-add-email = E-poštnega naslova ni bilo mogoče dodati v bazo podatkov.
error-not-subscribed = Ta e-poštni naslov ni naročen na { -product-name }.
error-hibp-throttled = Preveč povezav na { -brand-HIBP }.
error-hibp-connect = Napaka pri povezovanju na { -brand-HIBP }.
error-hibp-load-breaches = Ni bilo mogoče naložiti podatkov o krajah.
home-title = { -product-name }
home-not-found = Strani ni mogoče najti.
oauth-invalid-session = Neveljavna seja
oauth-confirmed-title = { -product-name }: Naročeno
scan-title = { -product-name }: Rezultati pregleda
user-add-invalid-email = Neveljavna e-pošta
user-add-email-verify-subject = Potrdite naročnino na { -product-name }.
user-add-title = { -product-name }: Potrdite e-poštni naslov
error-headline = Napaka
user-verify-token-error = Zahtevan je potrditveni žeton.
user-verify-email-report-subject = Vaše poročilo { -product-name }
user-verify-title = { -product-name }: Naročeno
user-unsubscribe-token-error = Za odjavo potrebujete žeton.
user-unsubscribe-token-email-error = Za odjavo potrebujete žeton in emailHash.
user-unsubscribe-title = { -product-name }: Odjava
user-unsubscribe-survey-title = { -product-name }: Anketa o odjavi naročnine
user-unsubscribed-title = { -product-name }: Odjavljeno

## Password Tips

pwt-section-headline = Močnejša gesla = boljša zaščita
pwt-section-subhead = Vaši zasebni podatki so varni toliko, kolikor so varna vaša gesla.
pwt-section-blurb =
    Vaša gesla ščitijo več kot le vaše račune. Ščitijo vse osebne podatke, ki se v njih nahajajo.
    In napadalci se zanašajo na slabe navade uporabnikov, kot je uporaba istega gesla na vseh mestih ali pogostih gesel (npr. 123456),
    zato imajo po vdoru v en račun lahko dostop do mnogih. Naučite se bolje zaščititi svoje račune.
pwt-headline-1 = Za vsak račun uporabljajte drugačno geslo
pwt-summary-1 =
    Uporaba istega gesla v vseh računih pušča odprta vrata kraji vaše identitete.
    S tem geslom se lahko vsakdo prijavi v vse vaše račune.
pwt-headline-2 = Ustvarite močna gesla, ki jih je težko uganiti
pwt-summary-2 =
    Napadalci uporabljajo sezname tisočev pogostih gesel, s pomočjo katerih poskušajo uganiti vaše.
    Daljše in bolj naključno kot je vaše geslo, teže ga bo uganiti.
pwt-headline-3 = Uporabljajte varnostna vprašanja kot dodatna gesla
pwt-summary-3 =
    Spletne strani ne preverjajo, ali so vaši odgovori točni, le da se vsakič ujemajo.
    Ustvarite dolge, naključne odgovore in jih shranite na varnem mestu.
pwt-headline-4 = Pomagajte si pri shranjevanju gesel
pwt-summary-4 =
    Upravitelji gesel, kot so 1Password, LastPass, Dashlane in Bitwarden, ustvarjajo močna, edinstvena gesla. 
    Gesla tudi varno shranjujejo in jih izpolnjujejo na spletnih straneh namesto vas
pwt-headline-5 = Izboljšajte varnost s preverjanjem v dveh korakih
pwt-summary-5 =
    Preverjanje v dveh korakih za prijavo v račun zahteva dodaten podatek (npr. enkratno kodo, poslano kot sporočilo).
    Tudi, če nekdo ima vaše geslo, se v račun ne more prijaviti.
pwt-headline-6 = Naročite se na opozorila { -product-name-nowrap }ja
pwt-summary-6 =
    Kraje podatkov spletnih strani so v porastu. Takoj ko v naši zbirki podatkov objavimo nove kraje podatkov, 
    vam { -product-name-nowrap } pošlje opozorilo, da lahko hitro ukrepate in zaščitite svoj račun.
landing-headline = Vaša pravica do varnega zavetja pred hekerji se začne tukaj.
landing-blurb =
    { -product-name-nowrap } vas opremi z orodji, ki vaše osebne podatke ohranjajo varne.
    Ugotovite, kaj o vas hekerji že vedo, in se naučite, kako ostati korak pred njimi.
scan-label = Preverite, ali ste bili vpleteni v krajo podatkov.
scan-placeholder = Vnesite e-poštni naslov
scan-privacy = Vaš e-poštni naslov ne bo shranjen.
scan-submit = Poiščite vaš e-poštni naslov
scan-another-email = Preverite drug e-poštni naslov
scan-featuredbreach-label = Preverite, ali je bil vaš račun <span class="bold">{ $featuredBreach }</span> ogrožen.
sensitive-breach-email-required = Kraja vključuje občutljive podatke. Zahtevana je potrditev e-poštnega naslova.
scan-error = E-poštni naslov mora biti veljaven.
signup-banner-headline = { -product-name-nowrap } zazna grožnje vašim spletnim računom.
signup-banner-blurb =
    Vaše podrobno poročilo { -product-name-nowrap } prikazuje, ali so bili podatki iz vaših spletnih računov izpostavljeni ali ukradeni.
    Prav tako vas bomo opozorili, če se vaši računi pojavijo v novih krajah podatkov spletnih strani.
download-firefox-bar-blurb = { -product-name-nowrap } vam omogoča <span class="nowrap">prenovljen { -brand-name }</span>.
download-firefox-bar-link = Prenesite { -brand-name } zdaj
download-firefox-banner-blurb = Prevzemite nadzor nad svojim brskalnikom
download-firefox-banner-button = Prenesite { -brand-name }
signup-modal-headline = Prijavite se na { -product-name-nowrap }
signup-modal-blurb = Naročite svoje celotno poročilo, opozorila ob novih krajah podatkov in varnostne nasvete { -product-name-nowrap }.
signup-modal-close = Zapri
get-your-report = Prejmite svoje poročilo
signup-modal-verify-headline = Potrdite svojo naročnino
signup-modal-verify-blurb = Na <span id="submitted-email" class="medium"></span> smo poslali potrditveno povezavo.
signup-modal-verify-expiration = Povezava bo potekla po 24 urah.
signup-modal-verify-resend = Ni med prejeto ali vsiljeno pošto? Pošlji znova.
# Appears after Firefox Monitor has sent a verification email to a new user. 
signup-modal-sent = Poslano!
signup-with-fxa = Prijavite se s { -brand-name } Računom
form-signup-placeholder = Vnesite e-poštni naslov
form-signup-checkbox = Prejemajte novice iz sveta { -brand-Mozilla(sklon: "rodilnik") } in { -brand-name(sklon: "rodilnik") }.
sign-up = Prijava
form-signup-error = E-poštni naslov mora biti veljaven
no-breaches-headline = Zaenkrat vse lepo in prav.
found-breaches-headline = Vaši podatki so bili del kraje podatkov.
no-breaches =
    Vaš e-poštni naslov ni bil prikazan v našem osnovnem pregledu.
    To je dobra novica, vendar pa lahko do kraje podatkov pride kadarkoli, zato bodite pozorni.
    Prijavite se na { -product-name-nowrap } za celotno poročilo, opozorila ob novih krajah podatkov in nasvete, kako zaščititi vaša gesla.
featured-breach-not-compromised =
    { $breachCount ->
        [0] { no-breaches }
        [one] Vaš račun se ni pojavil v kraji podatkov <span class="bold">{ $featuredBreach }</span>, vendar se je pojavil v eni drugi.
        [two] Vaš račuun se ni pojavil v kraji podatkov <span class="bold">{ $featuredBreach }</span>, vendar se je pojavil v dveh drugih.
        [few] Vaš račun se ni pojavil v kraji podatkov <span class="bold">{ $featuredBreach }</span>, vendar se je pojavil v treh drugih.
       *[other] Vaš račun se ni pojavil v kraji podatkov <span class="bold">{ $featuredBreach }</span>, vendar se je pojavil v { $breachCount } drugih.
    }
scan-results =
    { $breachCount ->
        [0] { no-breaches }
        [one] Vaš račun se je pojavil v { $breachCount } kraji podatkov.
        [two] Vaš račun se je pojavil v { $breachCount } krajah podatkov.
        [few] Vaš račun se je pojavil v { $breachCount } krajah podatkov.
       *[other] Računi povezani z vašim e-poštnim naslovom so se pojavili v naslednjih { $breachCount } krajah podatkov.
    }
show-more-breaches = Prikaži več
what-to-do-headline = Kaj storiti, ko pride do kraje vaših podatkov
what-to-do-subhead-1 = Spremenite gesla, tudi za starejše račune
what-to-do-blurb-1 =
    Če se ne morete prijaviti, se obrnite na spletno stran in povprašajte, kako lahko obnovite ali odstranite račun.
    Opazite račun, ki ga ne prepoznate? Stran je morda spremenila ime ali pa je nekdo v vašem imenu ustvaril račun.
what-to-do-subhead-2 = Če izpostavljeno geslo uporabljate na več mestih, ga spremenite
what-to-do-blurb-2 =
    Hekerji lahko znova poskusijo uporabiti vaše izpostavljeno geslo za dostop do drugih računov.
    Za vsako spletno stran ustvarite drugo geslo, še posebej za vaš bančni račun, e-pošto in druge spletne strani, kjer shranjujte osebne podatke.
what-to-do-subhead-3 = Z dodatnimi ukrepi zavarujte svoje finančne račune
what-to-do-blurb-3 =
    V večini kraj podatkov so izpostavljeni samo e-poštni naslovi in gesla, nekatere pa vključujejo tudi občutljive finančne podatke.
    Če je bil vaš bančni račun ali številka kreditne kartice del kraje podatkov, obvestite svojo banko o morebitni goljufiji in spremljajte podrobnosti stroškov, ki jih ne prepoznate.
what-to-do-subhead-4 = Pomagajte si pri ustvarjanju dobrih gesel in ohranjanju njihove varnosti.
what-to-do-blurb-4 =
    Upravitelji gesel, kot so 1Password, LastPass, Dashlane in Bitwarden, ustvarjajo močna gesla, 
    jih varno shranjujejo in namesto vas izpolnjujejo na spletnih straneh.
# breach-date = the calendar date a particular data theft occurred. 
breach-date = Datum kraje:
# compromised accounts = the total number of user accounts exposed in data breach
compromised-accounts = Ogroženi računi:
# compromised-data = the kind of user data exposed to hackers in data breach.
compromised-data = Ogroženi podatki:
confirmed = Potrjeno!<br />Naročeni ste!
confirmed-blurb = { -product-name-nowrap } vam bo po e-pošti kmalu poslal podrobno poročilo in vas opozoril, če se bo vaš račun pojavil v novi kraji podatkov.
confirmed-social-blurb = Če so bili vaši podatki ukradeni, obstaja možnost, da so se v podobnih težavah znašli vaši prijatelji in družina. Povejte jim o { -product-name-nowrap }ju.
unsub-headline = Odjava iz { -product-name-nowrap }ja
unsub-blurb = S tem boste odstranili vaš e-poštni naslov iz seznama { -product-name-nowrap } in ob pojavu novih kraj podatkov ne boste več prejemali opozoril.
unsub-button = Odjavi se
fxa-unsub-headline = Odjavite se od opozoril { -product-name }ja
unsub-survey-form-label = Zakaj ste se odjavili od opozoril { -product-name-nowrap }?
unsub-reason-1 = Menim, da mi opozorila ne zagotavljajo varnejših podatkov
unsub-reason-2 = Od { -product-name-nowrap } prejemam preveč e-pošte
unsub-reason-3 = Storitev se mi ne zdi koristna
unsub-reason-4 = Svoje račune sem že zaščitil
unsub-reason-5 = Za spremljanje računov uporabljam drugo storitev
unsub-reason-6 = Nič od naštetega
unsub-survey-thankyou = Hvala za vaše povratne informacije.
unsub-survey-error = Izberite enega.
unsub-survey-headline-v2 = Zdaj ste odjavljeni.
unsub-survey-blurb-v2 =
    Opozoril { -product-name }ja ne boste več prejemali.
    Bi si vzeli trenutek in nam sporočili vašo izkušnjo?
unsub-survey-button = Pošlji odgovor
# Link to share Firefox Monitor on Facebook. Positioned next to Facebook logo.
share = Deli
# Link to share Firefox Monitor on Twitter. Positioned next to Twitter logo.
tweet = Tvit
download-firefox-quantum = Prenesite { -brand-Quantum }
download-firefox-mobile = Prenesite { -brand-name } za mobilne naprave
# Features here refers to Firefox browser features. 
features = Značilnosti
# beta-nightly-developer-edition refers to additional versions of Firefox Browser
beta-nightly-developer-edition = Beta, Nightly, Developer Edition
# Breach data provided by Have I Been Pwned.
hibp-attribution = Podatke o krajah podatkov omogoča { $hibp-link }
site-description = Ali so bili podatki vaših računov izpostavljeni ali ukradeni? Preverite s { -product-name }jem. Preiščite našo bazo podatkov in se prijavite na opozorila.
confirmation-headline = Vaše poročilo { -product-name } je na poti.
confirmation-blurb = Žrtev kraje podatkov lahko postane vsak. Povejte naprej, naj tudi vaši prijatelji in družinski člani preverijo, ali so njihovi spletni računi varni.
share-email = E-pošta
# Appears at the end of a list of email-clients and refers to any other unlisted email-client.
share-other = Drugo
share-twitter = Večina ljudi ima približno 100 spletnih računov. Je bil kateri od vaših izpostavljen v kraji podatkov? Preverite.
share-facebook-headline = Preverite, ali ste bili žrtev kraje podatkov
share-facebook-blurb = Ali so bili vaši spletni računi izpostavljeni v kraji podatkov?
og-site-description = S { -product-name }jem preverite, ali ste bili žrtev kraje podatkov. Prijavite se za opozorila o prihodnjih krajah in preberite nasvete, kako ohraniti svoje račune varne.
mozilla-security-blog = Varnostni blog { -brand-Mozilla }
# A header for a list of links to share Firefox Monitor on various social media platforms.
layout-social = Družabno
show-all = Prikaži vse
fxa-landing-blurb =
    Ugotovite, kaj o vas hekerji že vedo,
    in se naučite, kako ostati korak pred njimi.
fxa-scan-label = Preverite, ali ste bili vpleteni v krajo podatkov.
fxa-welcome-headline = Dobrodošli v { -product-name }.
fxa-welcome-blurb = Vključili ste opozorila, če se v kraji podatkov pojavi { $userEmail }.
fxa-scan-another-email = Ali želite preveriti še kakšen račun?
# Search Firefox Monitor
fxa-scan-submit = Poišči s { -product-name }jem
sign-up-to-check = Prijavite se za preverjanje
sign-in = Prijavite se
sign-out = Odjava
full-report-headline = Vaše poročilo { -product-name }
see-full-report = Prikaži celotno poročilo
# Manage Firefox Account, link to page where account holders can change their account settings.
manage-fxa = Upravljaj { -brand-fxa }
fxa-download-firefox-bar-blurb = Omogoča { -brand-name }. 2x hitrejši. Porablja 30 % manj pomnilnika kot { -brand-Chrome }.
fxa-download-firefox-bar-link = Prenesi zdaj
fxa-download-firefox-banner-blurb = Boljše in hitrejše nalaganje strani z manjšo porabo računalniškega pomnilnika.
user-fb-compromised-headline = { $userEmail } se je pojavil v kraji podatkov »{ $breachName }«.
guest-fb-compromised-headline = Ta e-poštni naslov se je pojavil v kraji podatkov »{ $breachName }«.
user-zero-breaches-headline = { $userEmail } se ni pojavil v nobeni kraji podatkov.
guest-zero-breaches-headline = Ta e-poštni naslov se ni pojavil v nobeni kraji podatkov.
user-scan-results-headline =
    { $breachCount ->
        [one] { $userEmail } se je pojavil v 1 kraji podatkov.
        [two] { $userEmail } se je pojavil v { $breachCount } krajah podatkov.
        [few] { $userEmail } se je pojavil v { $breachCount } krajah podatkov.
       *[other] { $userEmail } se je pojavil v { $breachCount } krajah podatkov.
    }
guest-scan-results-headline =
    { $breachCount ->
        [one] Ta e-poštni naslov se je pojavil v 1 kraji podatkov.
        [two] Ta e-poštni naslov se je pojavil v { $breachCount } krajah podatkov.
        [few] Ta e-poštni naslov se je pojavil v { $breachCount } krajah podatkov.
       *[other] Ta e-poštni naslov se je pojavil v { $breachCount } krajah podatkov.
    }
user-no-breaches-blurb = Opozorili vas bomo, v kolikor se bo ta e-poštni naslov pojavil v novi kraji podatkov.
guest-no-breaches-blurb =
    Če želite preveriti, ali se ta e-pošta pojavlja v občutljivih krajah, ustvarite { -brand-fxa }.
    Opozorili vas bomo tudi, če se ta naslov pojavi v novih krajah podatkov.
user-one-breach-blurb = Ta kraja podatkov je razkrila naslednje osebne podatke.
user-fb-compromised-blurb =
    { $breachCount ->
        [one] Vaš e-poštni naslov se je pojavil še v { $breachCount } kraji podatkov.
        [two] Vaš e-poštni naslov se je pojavil še v { $breachCount } krajah podatkov.
        [few] Vaš e-poštni naslov se je pojavil še v { $breachCount } krajah podatkov.
       *[other] Vaš e-poštni naslov se je pojavil še v { $breachCount } krajah podatkov.
    }
user-generic-fb-compromised-blurb =
    { $breachCount ->
        [one] Ta e-poštni naslov se je pojavil še v { $breachCount } kraji podatkov.
        [two] Ta e-poštni naslov se je pojavil še v { $breachCount } krajah podatkov.
        [few] Ta e-poštni naslov se je pojavil še v { $breachCount } krajah podatkov.
       *[other] Ta e-poštni naslov se je pojavil še v { $breachCount } krajah podatkov.
    }
user-fb-compromised-single = Kraja je izpostavila naslednje osebne podatke. Če jih še niste, zamenjajte svoja gesla.
user-generic-fb-compromised-single = Kraja je izpostavila naslednje osebne podatke.
guest-fb-compromised-single-v2 =
    Ta kraja je razkrila naslednje osebne podatke.
    Ustvarite brezplačen { -brand-fxa } in prejmite celotno poročilo o preteklih krajah podatkov, opozorila o novih krajah in informacije o drugih storitvah { -brand-Mozilla(sklon: "rodilnik") }.
guest-fb-compromised-blurb-v2 =
    { $breachCount ->
        [one] Ta e-poštni naslov se je pojavil tudi v drugi kraji podatkov. Ustvarite brezplačen { -brand-fxa } in prejmite popolno poročilo o preteklih krajah podatkov, opozorila o novih krajah in informacije o drugih storitvah { -brand-Mozilla(sklon: "rodilnik") }.
        [two] Ta e-poštni naslov se je pojavil tudi v { $breachCount } drugih krajah podatkov. Ustvarite brezplačen { -brand-fxa } in prejmite popolno poročilo o preteklih krajah podatkov, opozorila o novih krajah in informacije o drugih storitvah { -brand-Mozilla(sklon: "rodilnik") }.
        [few] Ta e-poštni naslov se je pojavil tudi v { $breachCount } drugih krajah podatkov. Ustvarite brezplačen { -brand-fxa } in prejmite popolno poročilo o preteklih krajah podatkov, opozorila o novih krajah in informacije o drugih storitvah { -brand-Mozilla(sklon: "rodilnik") }.
       *[other] Ta e-poštni naslov se je pojavil tudi v { $breachCount } drugih krajah podatkov. Ustvarite brezplačen { -brand-fxa } in prejmite popolno poročilo o preteklih krajah podatkov, opozorila o novih krajah in informacije o drugih storitvah { -brand-Mozilla(sklon: "rodilnik") }.
    }
# While English doesn’t use the actual number of breaches in this sentence,
# you can use {$breachCount} to display the number of breaches in your localization.
user-found-breaches-blurb =
    { $breachCount ->
        [one] Ta kraja je razkrila naslednje osebne podatke. Če še niste, spremenite svoje geslo.
        [two] Ti kraji sta razkrili naslednje osebne podatke. Če še niste, spremenite svoja gesla.
        [few] Te kraje so razkrile naslednje osebne podatke. Če še niste, spremenite svoja gesla.
       *[other] Te kraje so razkrile naslednje osebne podatke. Če še niste, spremenite svoja gesla.
    }
# While English doesn’t use the actual number of breaches in this sentence,
# you can use {$breachCount} to display the number of breaches in your localization.
user-generic-found-breaches-blurb =
    { $breachCount ->
        [one] Kraja je izpostavila naslednje osebne podatke.
        [two] Kraji sta izpostavili naslednje osebne podatke.
        [few] Kraje so izpostavile naslednje osebne podatke.
       *[other] Kraje so izpostavile naslednje osebne podatke.
    }
have-an-account = Že imate račun?
signup-banner-sensitive-blurb = Ugotovite, kaj napadalci že vedo o vas, in se naučite, kako ostati korak pred njimi. Prejmite opozorilo, če se vaš račun pojavi v novih krajah podatkov.
fxa-pwt-section-blurb = Gesla ščitijo vse osebne podatke v vaših spletnih računih. Napadalci se zanašajo na slabe navade uporabnikov, kot je uporaba istega gesla na vseh mestih ali pogostih gesel (npr. 123456), zato imajo po vdoru v en račun lahko dostop do mnogih.
fxa-pwt-summary-2 =
    Kratka, enobesedna gesla so lahek plen za napadalce.
    Uporabite vsaj dve besedi ter kombinacijo črk, številk in posebnih znakov.
fxa-pwt-summary-4 = Upravitelji gesel kot so 1Password, LastPass, Dashlane in Bitwarden shranjujejo vaša gesla in jih namesto vas izpolnjujejo na spletnih mestih. Pomagali vam bodo tudi pri ustvarjanju močnih gesel.
fxa-pwt-summary-6 = Število kraj podatkov se povečuje. Če se vaši osebni podatki pojavijo v novi kraji podatkov, vam { -product-name } pošlje opozorilo. Tako lahko hitro ukrepate in zaščitite svoje račune.
fxa-what-to-do-subhead-2 = Ne uporabljajte izpostavljenega gesla in ga spremenite povsod, kjer ste ga uporabili.
fxa-wtd-blurb-2 = Hekerji lahko vaše geslo in e-poštni naslov poskusijo znova uporabiti za dostop do drugih računov. Za vsak račun ustvarite edinstveno geslo, še posebej za svoj bančni račun, e-pošto in druga spletna mesta, kjer shranjujete osebne podatke.
fxa-what-to-do-blurb-3 =
    V večini kraj podatkov so izpostavljeni samo e-poštni naslovi in gesla, nekatere pa vključujejo tudi občutljive finančne podatke.
    Če je bil vaš bančni račun ali številka kreditne kartice izpostavljen, obvestite svojo banko o morebitni goljufiji in spremljajte podrobnosti stroškov, ki jih ne prepoznate.
fxa-what-to-do-subhead-4 = Pomagajte si pri pomnjenju gesel in njihovem varovanju.
fxa-what-to-do-blurb-4 =
    Upravitelji gesel, kot so 1Password, LastPass, Dashlane in Bitwarden, varno shranjujejo 
    vaša gesla in jih za vas izpolnjujejo na spletnih straneh. Na telefonu in računalniku 
    uporabljajte upravitelja gesel, da si vam jih ne bo potrebno vseh zapomniti.
fb-landing-headline = Ali so bili vaši podatki izpostavljeni v kraji podatkov { $breachName }?
copyright = Deli vsebine so avtorsko zaščiteni ©1998–{ $year } s strani sodelavcev mozilla.org.
content-available = Vsebina je na voljo pod licenco Creative Commons.
# Alerts is a noun
sign-up-for-alerts = Prijavite se na opozorila
sign-up-for-fxa-alerts = Naročite se na opozorila { -product-name }ja.
create-free-account = Ustvarite brezplačen { -brand-fxa } in prejmite popolno poročilo o preteklih krajah podatkov, opozorila o novih krajah in informacije o drugih storitvah { -brand-Mozilla(sklon: "rodilnik") }.
get-your-report-and-sign-up = Prejmite poročilo in se naročite na opozorila.
# Link title
frequently-asked-questions = Pogosto zastavljena vprašanja
about-firefox-monitor = O { -product-name }ju
mozilla-dot-org = Mozilla.org
preferences = Nastavitve
# Link title.
home = Domov
# Link title
breaches = Kraje podatkov
# Link title
security-tips = Varnostni nasveti
fxa-account = { -brand-fxa }
# Appears above a snippet about the breach most recently reported to Firefox Monitor.
latest-breach = ZADNJA DODANA KRAJA PODATKOV
# Link title
more-about-this-breach = Več o tej kraji podatkov
take-control = Prevzemite nadzor nad svojimi osebnimi podatki.
cant-stop-hackers = Delovanja hekerjev ne morete ustaviti. Lahko pa se znebite slabih navad, ki jim olajšujejo delo.
read-more-tips = Preberite več varnostnih nasvetov
how-hackers-work = Razumite, kako hekerji delujejo
monitor-your-online-accounts = Prijavite se s { -brand-fxa }jem za nadzor kraj podatkov.
stay-alert = Bodite pozorni na nove kraje podatkov
if-your-info = Če se vaši podatki pojavijo v novih krajah, vam bomo poslali opozorilo.
search-all-emails = Preverite, če so se e-poštni naslovi pojavili v krajah podatkov in prejmite opozorila o novih grožnjah.
monitor-several-emails = Spremljajte več e-poštnih naslovov
take-action = Ukrepajte in zaščitite svoje račune
keep-your-data-safe = Ugotovite, kaj morate storiti, da bodo vaši podatki ostali varni pred spletnimi napadalci.
website-breach = Kraja podatkov spletne strani
sensitive-breach = Kraja podatkov občutljivih spletnih strani
data-aggregator-breach = Kraja podatkov zbiralnika podatkov
unverified-breach = Nepotrjena kraja podatkov
spam-list-breach = Kraja podatkov neželene pošte
sensitive-breach-plural = Občutljive kraje podatkov
unverified-breach-plural = Nepotrjene kraje podatkov
what-data = Kateri podatki so bili ogroženi:
sensitive-sites = Kako { -product-name } obravnava občutljiva spletna mesta?
delayed-reporting-headline = Zakaj je trajalo toliko časa, da je bila kraja podatkov prijavljena?
about-fxm-headline = O { -product-name }ju
# How Firefox Monitor works
how-fxm-works = Kako deluje { -product-name }
how-fxm-1-headline = Opravite osnovno preverjanje
how-fxm-1-blurb =
    Poiščite svoj e-poštni naslov med javnimi krajami podatkov do
    leta 2007. To osnovno iskanje bo razkrilo večino kraj podatkov, vendar ne 
    tistih, ki vključujejo občutljive osebne podatke.
how-fxm-2-headline = Prijavite se za nadzor kraj podatkov
how-fxm-3-headline = Prejemajte obvestila v brskalniku
wtd-after-website = Kaj storiti po kraji podatkov spletne strani
what-is-data-agg = Kaj je zbiralnik podatkov?
protect-your-privacy = Zaščitite svojo spletno zasebnost
avoid-personal-info = Izogibajte se uporabi osebnih podatkov v geslih
avoid-personal-info-blurb = Na spletu lahko preprosto najdete rojstne dneve, naslove in imena družinskih članov. Izogibajte se uporabi teh besed v geslih.

## What to do after data breach tips

change-pw = Spremenite svoje geslo
even-for-old = Tudi za starejše račune je pomembno redno posodabljanje gesel.
make-new-pw-unique = Novo geslo naj bo drugačno in edinstveno
strength-of-your-pw = Moč vaših gesel neposredno vpliva na vašo spletno varnost.
create-strong-passwords = Kako ustvariti zapletena gesla
stop-reusing-pw = Ne uporabljajte istih gesel na več mestih
create-unique-pw = Ustvarite edinstvena gesla in jih shranite na varnem mestu, kot je upravitelj gesel.
five-myths = 5 zmot o upraviteljih gesel
feat-security-tips = Varnostni nasveti za zaščito vaših računov
feat-sensitive = Napredno iskanje v občutljivih krajah podatkov
feat-enroll-multiple = Vključite več e-poštnih naslovov v nadzor kraj podatkov
sign-up-for-fxa = Ustvarite si { -brand-fxa }
see-if-breached = Preverite, ali ste bili vpleteni v spletno krajo podatkov.
check-for-breaches = Preverite kraje podatkov
find-out-what-hackers-know = Ugotovite, kaj o vas hekerji že vedo. Naučite se, kako ostati korak pred njimi.
search-for-your-email = Poiščite svoj e-poštni naslov med javnimi krajami podatkov do leta 2007.
back-to-top = Nazaj na vrh
comm-opt-0 = Obvesti me po e-pošti, če se kateri od spodnjih e-poštnih naslovov pojavi v kraji podatkov.
comm-opt-1 = Vsa opozorila o krajah podatkov pošlji na { $primaryEmail }.
stop-monitoring-this = Ne nadzoruj več tega naslova.
resend-verification = Ponovno pošlji potrditveno e-pošto
add-new-email = Dodajte nov e-poštni naslov
send-verification = Pošlji potrditveno povezavo
# This string is a header on the user preferences page and
# appears above a check-box list of user options which allow
# the user to choose whether or not they want to receive breach
# alerts for all of their monitored email addresses to a single 
# email address.
global-communication = Globalno obveščanje
breach-summary = Povzetek kraj podatkov
show-breaches-for-this-email = Pokaži vse kraje podatkov za ta e-poštni naslov.
link-change-primary = Spremeni glavni e-poštni naslov
remove-fxm = Odstrani { -product-name }
manage-email-addresses = Upravljanje e-poštnih naslovov
latest-breach-link = Preverite, če ste bili vpleteni v to krajo podatkov
welcome-back = Dobrodošli nazaj, { $userName }!
welcome-user = Dobrodošli, { $userName }!
breach-alert-subject = { -product-name } je našel vaš e-poštni naslov v novi kraji podatkov.
your-info-was-discovered-headline = Vaši podatki so bili odkriti v novi kraji podatkov.
your-info-was-discovered-blurb =
    Prijavili ste se na prejemanje opozoril { -product-name }ja,
    ko se vaš e-poštni naslov znajde med ukradenimi podatki. Do sedaj o tej kraji podatkov vemo sledeče.
what-to-do-after-breach = Kaj storiti po kraji podatkov:
ba-next-step-1 = Spremenite geslo v močno, edinstveno geslo.
ba-next-step-blurb-1 =
    Močno geslo uporablja kombinacijo velikih in malih črk, 
    posebne znake in številke. Ne vsebuje osebnih podatkov, kot so 
    naslov, rojstni dan ali družinska imena.
ba-next-step-2 = Popolnoma prenehajte uporabljati izpostavljeno geslo.
ba-next-step-3 = Pomagajte si pri ustvarjanju boljših gesel in njihovi zaščiti.
faq1 = Tega podjetja ali spletne strani ne poznam. Zakaj sem del te kraje podatkov?
faq2 = Zakaj je trajalo tako dolgo, da sem bil obveščen o tej kraji podatkov?
faq3 = Kako vem, da je to sporočilo { -product-name }ja zaupanja vredno?
new-breaches-found =
    { $breachCount ->
        [one] NAJDENA NOVA KRAJA PODATKOV
        [two] NAJDENI { $breachCount } NOVI KRAJI PODATKOV
        [few] NAJDENE { $breachCount } NOVE KRAJE PODATKOV
       *[other] NAJDENIH { $breachCount } NOVIH KRAJ PODATKOV
    }
sign-up-headline-1 = Prejemajte opozorila s { -brand-fxa }om.
account-not-required = Za { -brand-fxa } brskalnik { -brand-name } ni potreben. Morda boste prejeli informacije o storitvah { -brand-Mozilla }.
get-alerted = Bodite obveščeni o novih krajah podatkov.
was-your-info-exposed = Ali so bili vaši podatki izpostavljeni v kraji podatkov { $breachName }?
find-out-if = Preverite, ali so bili vaši podatki izpostavljeni v tej kraji.
fb-not-comp = Ta e-poštni naslov se ni pojavil v kraji podatkov { $breachName }.
fb-comp-only = Ta e-poštni naslov se je pojavil v kraji podatkov { $breachName }.
no-other-breaches-found = V osnovnem iskanju ni bilo drugih kraj podatkov
no-results-blurb = Te kraje ni v naši bazi podatkov.
all-breaches-headline = Vse kraje podatkov v { -product-name }ju
search-breaches = Iskanje kraj podatkov
# "Appears in-page as: Showing: All Breaches"
currently-showing = Prikazano:
all-breaches = Vse kraje podatkov

## Updated error messages

error-bot-headline = Iskanja so začasno onemogočena
error-csrf-headline = Seja je potekla
error-csrf-blurb = V brskalniku izberite gumb Nazaj, ponovno naložite stran in poskusite znova.
error-invalid-unsub = Kako se odjaviti od opozoril { -product-name }ja
login-link-pre = Imate račun?
login-link = Prijava
# This string is displayed under a large numeral that indicates the total number
# of data breaches that have exposed the user’s information. Don’t add $breaches to
# your localization, because it would result in the number showing twice.
data-breaches-exposed =
    { $breaches ->
        [one] Kraja podatkov je razkrila vaše podatke
        [two] Kraji podatkov sta razkrili vaše podatke
        [few] Kraje podatkov so razkrile vaše podatke
       *[other] Kraj podatkov je razkrilo vaše podatke
    }
# Button
see-additional-breaches = Prikaži dodatne kraje podatkov
# A button on the All Breaches page that restores all of the breaches
# back to the page if the user has filtered some of them out.
see-all-breaches = Prikaži vse kraje podatkov
scan-results-known-breaches =
    { $breachCount ->
        [one] Ta e-poštni naslov se je pojavil v eni znani kraji podatkov.
        [two] Ta e-poštni naslov se je pojavil v { $breachCount } znanih krajah podatkov.
        [few] Ta e-poštni naslov se je pojavil v { $breachCount } znanih krajah podatkov.
       *[other] Ta e-poštni naslov se je pojavil v { $breachCount } znanih krajah podatkov.
    }
# This string is shown at the top of the scan results page and is followed
# by the email address that the user searched.
# In page, it reads "Results for: searchedEmail@monitor.com"
results-for = Rezultati za: { $userEmail }
other-monitored-emails = Ostali nadzorovani e-poštni naslovi
email-verification-required = Zahtevana je potrditev e-poštnega naslova
fxa-primary-email = E-poštni naslov { -brand-fxa }a – Glavni
what-is-a-website-breach = Kaj je kraja podatkov spletne strani?
security-tips-headline = Varnostni nasveti za zaščito pred hekerji
steps-to-protect = Ukrepi za zaščito vaše spletne identitete
take-further-steps = Nadaljnji koraki za zaščito vaše identitete
alert-about-new-breaches = Opozori me na nove kraje podatkov
see-if-youve-been-part = Preverite, ali ste bili žrtev spletne kraje podatkov.
get-ongoing-breach-monitoring = Spremljajte kraje podatkov za več e-poštnih naslovov.
# This is a button and follows a headline reading "Was your info exposed in the ___ breach?"
find-out = Preverite
new-unsub-error = Odjaviti se boste morali iz enega od poslanih e-poštnih sporočil { -product-name }ja.
# This string appears on breach detail pages and is followed by a list
# of data classes that the breach exposed.
additional-information-including = Dodatne informacije, vključno z:
# Title
email-addresses-title = E-poštni naslovi
# This is a standardized breach overview blurb that appears on all breach detail pages.
# $breachTitle is the name of the breached company or website.
# $breachDate and $addedDate are calendar dates.
breach-overview = { $breachDate } je prišlo do kraje podatkov { $breachTitle }. Ko je bila kraja odkrita in preverjena, smo jo { $addedDate } dodali v našo bazo podatkov.
# Title appearing on the Preferences dashboard. 
monitor-preferences = Nastavitve { -product-short-name }ja
# When a user is signed in, this appears in the drop down menu 
# and is followed by the user's primary Firefox Account email. 
signed-in-as = Prijavljeni kot: { $userEmail }
# Appears on the All Breaches page and is followed by a list of filter options
# that a user can filter the visible breaches by.
filter-by = Filtriraj po kategoriji:
# Title that appears in the mobile menu bar and opens the mobile menu when clicked.
menu = Meni
to-affected-email = Pošlji opozorila na ogrožen e-poštni naslov
# This string appears in a banner at the top of each page and is followed by a "Learn More" link.
join-firefox = Vašo zasebnost lahko zaščitite. Pridružite se { -brand-name }u.
# Link title
learn-more-link = Več o tem.
email-sent = E-pošta poslana!
