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
layout-Firefox = { -brand-name }
# Descriptive headline for a column of links where users can give feedback, or get additional information about, Firefox Monitor.
layout-support = Podpora
# Link that takes the user to a blog post on blog.mozilla.org about the alerts
about-firefox-alerts = O opozorilih Firefoxa
# Link that takes the user to a Firefox Monitor survey. 
give-feedback = Sporočite nam svoje mnenje
terms-and-privacy = Pogoji in zasebnost
error-not-subscribed = Ta e-poštni naslov ni naročen na { -product-name }.
error-hibp-throttled = Preveč povezav na { -brand-HIBP }.
error-hibp-connect = Napaka pri povezovanju na { -brand-HIBP }.
error-hibp-load-breaches = Ni bilo mogoče naložiti podatkov o krajah.
hibp-notify-email-subject = Opozorilo { -product-name }: vaš račun je bil vpleten v krajo podatkov
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
form-signup-checkbox = Prejemajte najnovejše novice { -brand-Mozilla } { -brand-name }.
sign-up = Prijava
form-signup-error = E-poštni naslov mora biti veljaven
no-breaches-headline = Zaenkrat vse lepo in prav.
found-breaches-headline = Vaši podatki so bili del kraje podatkov.
no-breaches =
    Vaš e-poštni naslov ni bil prikazan v našem osnovnem pregledu.
    To je dobra novica, vendar pa lahko do kraje podatkov pride kadarkoli, zato bodite pozorni.
    Prijavite se na { -product-name-nowrap } za celotno poročilo, opozorila ob novih krajah podatkov in nasvete, kako zaščititi vaša gesla.
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
breach-date = Datum kršitve:
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
unsub-survey-headline = Niste več naročeni.
unsub-survey-blurb = Vaš e-poštni naslov je odjavljen iz { -product-name-nowrap }. Hvala za uporabo. Bi si vzeli trenutek in nam odgovorili na eno vprašanje o svoji izkušnji?
unsub-survey-form-label = Zakaj ste se odjavili od opozoril { -product-name-nowrap }?
unsub-reason-1 = Menim, da mi opozorila ne zagotavljajo varnejših podatkov
unsub-reason-2 = Od { -product-name-nowrap } prejemam preveč e-pošte
unsub-reason-3 = Storitev se mi ne zdi koristna
unsub-reason-4 = Svoje račune sem že zaščitil
unsub-reason-5 = Za spremljanje računov uporabljam drugo storitev
unsub-reason-6 = Nič od naštetega
unsub-survey-thankyou = Hvala za vaše povratne informacije.
unsub-survey-error = Izberite enega.
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
# The following string contains HTML markup which should not be translated. 
# Without HTML markup: copyright-info = Portions of this content are 1998-2018 by individual mozilla.org contributors. Content available under a Creative Commons license.
copyright-info =
    Deli vsebine so avtorsko zaščiteni &#x24B8; 1998–2018 s strani sodelavcev mozilla.org. <br />
    Vsebina je na voljo pod pogoji <a href="https://www.mozilla.org/foundation/licensing/website-content/" target="_blank" rel="noopener">Creative Commons</a>.
# Breach data provided by Have I Been Pwned.
hibp-attribution = Podatke o krajah podatkov omogoča { $hibp-link }
site-description = Ali so bili podatki vaših računov izpostavljeni ali ukradeni? Preverite s { -product-name }jem. Preiščite našo bazo podatkov in se prijavite na opozorila.
confirmation-headline = Vaše poročilo { -product-name } je na poti.
share-email = E-pošta
# Appears at the end of a list of email-clients and refers to any other unlisted email-client.
share-other = Drugo
share-twitter = Večina ljudi ima približno 100 spletnih računov. Je bil kateri od vaših izpostavljen v kraji podatkov? Preverite.
share-facebook-headline = Preverite, ali ste bili del kraje podatkov
share-facebook-blurb = Ali so bili vaši spletni računi izpostavljeni v kraji podatkov?
