# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.


# Strings for the main app


## The following messages are brand and should be kept entirely in English
## unless otherwise indicated.

-product-name = Mozilla Monitor
-product-name-nowrap = <span class="nowrap">{ -product-name }</span>
-product-short-name = Monitor
-brand-name =
    { $sklon ->
        [rodilnik] Firefoxa
        [dajalnik] Firefoxu
        [orodnik] Firefoxom
       *[imenovalnik] Firefox
    }
-brand-Mozilla =
    { $sklon ->
        [rodilnik] Mozille
        [dajalnik] Mozilli
        [tozilnik] Mozillo
        [mestnik] Mozilli
        [orodnik] Mozillo
       *[imenovalnik] Mozilla
    }
-brand-HIBP = Have I Been Pwned
-brand-fxa =
    { $sklon ->
       *[imenovalnik] Firefox Račun
        [rodilnik] Firefox Računa
        [dajalnik] Firefox Računu
        [orodnik] Firefox Računom
    }
-brand-pocket = Pocket
-brand-lockwise = Firefox Lockwise
-brand-send = Firefox Send
-brand-fpn = Firefox Private Network

##

GitHub-link-title = GitHub
error-scan-page-token = V kratkem časovnem obdobju ste skušali preveriti preveč e-poštnih naslovov. Iz varnostnih razlogov smo vam začasno onemogočili nova iskanja. Znova lahko poskusite kasneje.
error-could-not-add-email = E-poštnega naslova ni bilo mogoče dodati v bazo podatkov.
error-not-subscribed = Ta e-poštni naslov ni naročen na { -product-name }.
error-hibp-throttled = Preveč povezav na { -brand-HIBP }.
error-hibp-connect = Napaka pri povezovanju na { -brand-HIBP }.
error-hibp-load-breaches = Ni bilo mogoče naložiti podatkov o krajah.
error-must-be-signed-in = Prijaviti se morate v svoj { -brand-fxa }.
error-to-finish-verifying = Če želite dokončati preverjanje tega e-poštnega naslova za { -product-name }, morate biti prijavljeni z e-poštnim naslovom glavnega računa.
home-title = { -product-name }
home-not-found = Strani ni mogoče najti.
oauth-invalid-session = Neveljavna seja
scan-title = { -product-name }: Rezultati pregleda
user-add-invalid-email = Neveljavna e-pošta
user-add-too-many-emails = Spremljate največje dovoljeno število e-poštnih naslovov.
user-add-email-verify-subject = Potrdite naročnino na { -product-name }.
user-add-duplicate-email = Ta e-poštni naslov je že bil dodan v { -product-name }.
# Variables:
#   $preferencesLink (String) - Link to preferences
#   $userEmail (String) - User email address
user-add-duplicate-email-part-2 = Obiščite { $preferencesLink } in preverite stanje za { $userEmail }.
user-add-verification-email-just-sent = Drugega potrditvenega sporočila ni mogoče poslati tako hitro. Poskusite znova pozneje.
user-add-unknown-error = Pri dodajanju drugega e-poštnega naslova je prišlo do napake. Poskusite znova pozneje.
user-delete-unknown-error = Pri odstranjevanju e-poštnega naslova je prišlo do napake. Poskusite znova pozneje.
error-headline = Napaka
user-verify-token-error = Zahtevan je potrditveni žeton.
user-verify-email-report-subject = Vaše poročilo { -product-name }
user-unsubscribe-token-error = Za odjavo potrebujete žeton.
user-unsubscribe-token-email-error = Za odjavo potrebujete žeton in emailHash.
user-unsubscribe-title = { -product-name }: Odjava
pwt-section-headline = Močnejša gesla = boljša zaščita
landing-headline = Vaša pravica do varnega zavetja pred hekerji se začne tukaj.
scan-placeholder = Vnesite e-poštni naslov
scan-submit = Poiščite vaš e-poštni naslov
scan-error = E-poštni naslov mora biti veljaven.
download-firefox-banner-button = Prenesite { -brand-name }
# Appears after Firefox Monitor has sent a verification email to a new user.
signup-modal-sent = Poslano!
sign-up = Prijava
form-signup-error = E-poštni naslov mora biti veljaven
# breach-date = the calendar date a particular data theft occurred.
breach-date = Datum kraje:
# compromised accounts = the total number of user accounts exposed in data breach
compromised-accounts = Ogroženi računi:
# compromised-data = the kind of user data exposed to hackers in data breach.
compromised-data = Ogroženi podatki:
unsub-headline = Odjava iz { -product-name-nowrap }ja
unsub-blurb = S tem boste odstranili vaš e-poštni naslov iz seznama { -product-name-nowrap } in ob pojavu novih kraj podatkov ne boste več prejemali opozoril.
unsub-button = Odjavi se
# Breach data provided by Have I Been Pwned.
# Variables:
#   $hibp-link (String) - Link to Have I Been Pwned
hibp-attribution = Podatke o krajah podatkov omogoča { $hibp-link }
share-twitter = Večina ljudi ima približno 100 spletnih računov. Je bil kateri od vaših izpostavljen v kraji podatkov? Preverite.
share-facebook-headline = Preverite, ali ste bili žrtev kraje podatkov
share-facebook-blurb = Ali so bili vaši spletni računi izpostavljeni v kraji podatkov?
og-site-description = S { -product-name }jem preverite, ali ste bili žrtev kraje podatkov. Prijavite se za opozorila o prihodnjih krajah in preberite nasvete, kako ohraniti svoje račune varne.
show-all = Prikaži vse
fxa-scan-another-email = Ali želite preveriti še kakšen račun?
sign-out = Odjava
# Manage Firefox Account, link to page where account holders can change their account settings.
manage-fxa = Upravljaj { -brand-fxa }
have-an-account = Že imate račun?
fxa-pwt-summary-2 =
    Kratka, enobesedna gesla so lahek plen za napadalce.
    Uporabite vsaj dve besedi ter kombinacijo črk, številk in posebnih znakov.
fxa-pwt-summary-4 = Upravitelji gesel kot so 1Password, LastPass, Dashlane in Bitwarden shranjujejo vaša gesla in jih namesto vas izpolnjujejo na spletnih mestih. Pomagali vam bodo tudi pri ustvarjanju močnih gesel.
fxa-pwt-summary-6 = Število kraj podatkov se povečuje. Če se vaši osebni podatki pojavijo v novi kraji podatkov, vam { -product-name } pošlje opozorilo. Tako lahko hitro ukrepate in zaščitite svoje račune.
fxa-what-to-do-blurb-1 =
    Če se ne morete prijaviti, se obrnite na lastnika spletne strani. 
    Opazite račun, ki ga ne prepoznate? Vaše podatke lahko nepridipravi 
    prodajo ali uporabijo brez vaše vednosti. To se lahko zgodi tudi z računi, na 
    katere ste že pozabili ali je prišlo do spremembe imena podjetja.
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
# Alerts is a noun
sign-up-for-alerts = Prijavite se na opozorila
# Link title
frequently-asked-questions = Pogosto zastavljena vprašanja
about-firefox-monitor = O { -product-name }ju
# Link title
preferences = Nastavitve
# Link title
home = Domov
# Link title
security-tips = Varnostni nasveti
fxa-account = { -brand-fxa }
# Aria button message to open menu. "Open Firefox Account Navigation"
open-fxa-menu = Odpri navigacijo { -brand-fxa }
# Appears above a snippet about the breach most recently reported to Firefox Monitor.
latest-breach = ZADNJA DODANA KRAJA PODATKOV
# Link title
more-about-this-breach = Več o tej kraji podatkov
take-control = Prevzemite nadzor nad svojimi osebnimi podatki.
cant-stop-hackers = Delovanja hekerjev ne morete ustaviti. Lahko pa se znebite slabih navad, ki jim olajšujejo delo.
read-more-tips = Preberite več varnostnih nasvetov
how-hackers-work = Razumite, kako hekerji delujejo
monitor-your-online-accounts = Prijavite se s { -brand-fxa }om za nadzor kraj podatkov.
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
website-breach-plural = Kraje podatkov spletne strani
sensitive-breach-plural = Občutljive kraje podatkov
data-aggregator-breach-plural = Kraje podatkov zbiralnika podatkov
unverified-breach-plural = Nepotrjene kraje podatkov
spam-list-breach-plural = Kraje podatkov neželene pošte
what-data = Kateri podatki so bili ogroženi:
sensitive-sites = Kako { -product-name } obravnava občutljiva spletna mesta?
sensitive-sites-copy =
    { -product-name } razkriva račune, povezane s temi 
    vrstami kraj, samo po potrditvi e-poštnega naslova. To pomeni, da samo vi 
    vidite, ali so bili vaši podatki del te kraje podatkov (razen, če ima kdo drug 
    dostop do vašega e-poštnega računa).
delayed-reporting-headline = Zakaj je trajalo toliko časa, da je bila kraja podatkov prijavljena?
delayed-reporting-copy =
    Včasih traja mesece ali leta, da pride do izpostavitve prijavnih podatkov 
    v primeru kraje podatkov. Kraje podatkov se dodajo v našo bazo 
    takoj ko so odkrite in preverjene.
about-fxm-headline = O { -product-name }ju
about-fxm-blurb =
    { -product-name } vas opozori, če so bili vaši spletni računi vključeni v krajo podatkov.  
    Ugotovite, ali ste bili vpleteni v krajo podatkov, prejemajte opozorila o novih krajah
    in ukrepajte za zaščito svojih spletnih računov. 
    { -product-name } omogoča { -brand-Mozilla }.
fxm-warns-you =
    { -product-name } vas opozori, če je bil vaš e-poštni naslov izpostavljen
    v spletni kraji podatkov. Preverite, ali so bili vaši podatki izpostavljeni, 
    spoznajte kako bolje zaščititi svoje spletne račune in prejmite opozorilo,
    če se vaš e-poštni naslov pojavi v novi kraji.
# How Firefox Monitor works
how-fxm-works = Kako deluje { -product-name }
how-fxm-1-headline = Opravite osnovno preverjanje
how-fxm-1-blurb =
    Poiščite svoj e-poštni naslov med javnimi krajami podatkov do
    leta 2007. To osnovno iskanje bo razkrilo večino kraj podatkov, vendar ne 
    tistih, ki vključujejo občutljive osebne podatke.
how-fxm-2-headline = Prijavite se za nadzor kraj podatkov
how-fxm-2-blurb =
    Ustvarite { -brand-fxa } in spremljajte poročila o krajah za vaš e-poštni naslov.
    Po potrditvi e-pošte boste prejeli celotno poročilo o preteklih krajah,
    vključno z občutljivimi krajami.
how-fxm-3-headline = Prejemajte obvestila v brskalniku
how-fxm-3-blurb =
    Če uporabljate { -brand-name }, boste ob obisku ogrožene strani
    prejeli obvestilo. Tako lahko hitro ugotovite, če ste bili del te kraje
    podatkov in kaj lahko storite.
wtd-after-website = Kaj storiti po kraji podatkov spletne strani
wtd-after-data-agg = Kaj storiti po kraji podatkov zbiralnika podatkov
what-is-data-agg = Kaj je zbiralnik podatkov?
what-is-data-agg-blurb =
    Zbiralniki podatkov ali posredniki podatkov, zbirajo podatke iz javno 
    dostopnih virov in kupujejo od drugih podjetij. Zbrane podatke prodajajo podjetjem 
    za namene oglaševanja. Za žrtve teh kraj podatkov je malo verjetno, da bi doživele finančno 
    goljufijo, vendar lahko hekerji te podatke uporabijo za lažno predstavljanje ali ustvarjanje njihovega profila.
protect-your-privacy = Zaščitite svojo spletno zasebnost
no-pw-to-change = Za razliko od kraj podatkov spletnih strani, tukaj ni gesla, ki bi ga lahko spremenili.
avoid-personal-info = Izogibajte se uporabi osebnih podatkov v geslih
avoid-personal-info-blurb = Na spletu lahko preprosto najdete rojstne dneve, naslove in imena družinskih članov. Izogibajte se uporabi teh besed v geslih.

## What to do after data breach tips

change-pw = Spremenite svoje geslo
change-pw-site = Spremeni geslo za to stran
even-for-old = Tudi za starejše račune je pomembno redno posodabljanje gesel.
make-new-pw-unique = Novo geslo naj bo drugačno in edinstveno
strength-of-your-pw = Moč vaših gesel neposredno vpliva na vašo spletno varnost.
create-strong-passwords = Kako ustvariti zapletena gesla
stop-reusing-pw = Ne uporabljajte istih gesel na več mestih
create-unique-pw = Ustvarite edinstvena gesla in jih shranite na varnem mestu, kot je upravitelj gesel.
five-myths = 5 zmot o upraviteljih gesel
create-a-fxa = Ustvarite { -brand-fxa } in prejmite celotno poročilo o krajah in opozorila o prihodnjih krajah.
feat-security-tips = Varnostni nasveti za zaščito vaših računov
feat-sensitive = Napredno iskanje v občutljivih krajah podatkov
feat-enroll-multiple = Vključite več e-poštnih naslovov v nadzor kraj podatkov
# This string is shown beneath each of the user’s email addresses to indicate
# how many known breaches that email address was found in.
# Variables:
#   $breachCount (Integer) - Number of breaches
appears-in-x-breaches =
    { $breachCount ->
        [one] Pojavil se je v eni znani kraji.
        [two] Pojavil se je v dveh znanih krajah.
        [few] Pojavil se je v { $breachCount } znanih krajah.
       *[other] Pojavil se je v { $breachCount } znanih krajah.
    }
check-for-breaches = Preverite kraje podatkov
find-out-what-hackers-know = Ugotovite, kaj o vas hekerji že vedo. Naučite se, kako ostati korak pred njimi.
get-email-alerts = Ostanite varni: prejemajte opozorila po e-pošti, ko se vaši podatki pojavijo v znani kraji
search-for-your-email = Poiščite svoj e-poštni naslov med javnimi krajami podatkov do leta 2007.
back-to-top = Nazaj na vrh
comm-opt-0 = Obvesti me po e-pošti, če se kateri od spodnjih e-poštnih naslovov pojavi v kraji podatkov.
# Variables:
#   $primaryEmail (String) - User primary email address
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
breach-summary = Povzetek kraj podatkov
show-breaches-for-this-email = Pokaži vse kraje podatkov za ta e-poštni naslov.
link-change-primary = Spremeni glavni e-poštni naslov
remove-fxm = Odstrani { -product-name }
remove-fxm-blurb =
    Izklopite opozorila { -product-name }ja. Vaš { -brand-fxa } bo ostal aktiven in morda
    boste prejeli sporočila, povezana z računom.
# Button title
manage-email-addresses = Upravljanje e-poštnih naslovov
# Link title
latest-breach-link = Preverite, ali ste bili žrtev te kraje podatkov

## Variables:
##   $userName (String) - Username

welcome-back = Dobrodošli nazaj, { $userName }!
welcome-user = Dobrodošli, { $userName }!

##

breach-alert-subject = { -product-name } je našel vaš e-poštni naslov v novi kraji podatkov.
your-info-was-discovered-headline = Vaši podatki so bili odkriti v novi kraji podatkov.
your-info-was-discovered-blurb =
    Prijavili ste se na prejemanje opozoril { -product-name }ja,
    ko se vaš e-poštni naslov znajde med ukradenimi podatki. Do sedaj o tej kraji podatkov vemo sledeče.
what-to-do-after-breach = Kaj storiti po kraji podatkov
ba-next-step-1 = Spremenite geslo v močno, edinstveno geslo.
ba-next-step-blurb-1 =
    Močno geslo uporablja kombinacijo velikih in malih črk, 
    posebne znake in številke. Ne vsebuje osebnih podatkov, kot so 
    naslov, rojstni dan ali družinska imena.
ba-next-step-2 = Popolnoma prenehajte uporabljati izpostavljeno geslo.
ba-next-step-blurb-2 =
    Spletni napadalci bi lahko na temnem spletu našli vaše geslo in ga uporabili 
    za prijavo v vaše druge račune. Najboljši način zaščite vaših računov 
    je, da za vsakega uporabite edinstveno geslo.
ba-next-step-3 = Pomagajte si pri ustvarjanju boljših gesel in njihovi zaščiti.
ba-next-step-blurb-3 =
    Uporabite upravitelja gesel za ustvarjanje močnih, edinstvenih gesel. Upravitelji gesel varno shranjujejo vse vaše
    prijave, tako da lahko do njih dostopate na vseh napravah.
faq1 = Tega podjetja ali spletne strani ne poznam. Zakaj sem del te kraje podatkov?
faq2 = Zakaj je trajalo tako dolgo, da sem bil obveščen o tej kraji podatkov?
faq3 = Kako vem, da je to sporočilo { -product-name }ja zaupanja vredno?
# Variables:
#   $breachCount (Integer) - Number of breaches
new-breaches-found =
    { $breachCount ->
        [one] NAJDENA NOVA KRAJA PODATKOV
        [two] NAJDENI { $breachCount } NOVI KRAJI PODATKOV
        [few] NAJDENE { $breachCount } NOVE KRAJE PODATKOV
       *[other] NAJDENIH { $breachCount } NOVIH KRAJ PODATKOV
    }
sign-up-headline-1 = Prejemajte opozorila s { -brand-fxa }om.
account-not-required = Za { -brand-fxa } brskalnik { -brand-name } ni potreben. Morda boste prejeli informacije o storitvah { -brand-Mozilla }.

## Variables:
##   $breachName (String) - Number of the breach

was-your-info-exposed = Ali so bili vaši podatki izpostavljeni v kraji podatkov { $breachName }?
fb-not-comp = Ta e-poštni naslov se ni pojavil v kraji podatkov { $breachName }.
# Variables:
#   $breachCount (Integer) - Number of breaches
other-breaches-found =
    { $breachCount ->
        [one] Vendar se je pojavil v eni drugi kraji podatkov.
        [two] Vendar se je pojavil v dveh drugih krajah podatkov.
        [few] Vendar se je pojavil v { $breachCount } drugih krajah podatkov.
       *[other] Vendar se je pojavil v { $breachCount } drugih krajah podatkov.
    }
fb-comp-only = Ta e-poštni naslov se je pojavil v kraji podatkov { $breachName }.
# Variables:
#   $breachCount (Integer) - Number of breaches
fb-comp-and-others =
    { $breachCount ->
        [one] Ta e-poštni naslov se je pojavil v { $breachCount } znani kraji podatkov, vključno z { $breachName }.
        [two] Ta e-poštni naslov se je pojavil v { $breachCount } znanih krajah podatkov, vključno z { $breachName }.
        [few] Ta e-poštni naslov se je pojavil v { $breachCount } znanih krajah podatkov, vključno z { $breachName }.
       *[other] Ta e-poštni naslov se je pojavil v { $breachCount } znanih krajah podatkov, vključno z { $breachName }.
    }

##

no-other-breaches-found = V osnovnem iskanju ni bilo drugih kraj podatkov
no-results-blurb = Te kraje ni v naši bazi podatkov.
# This string contains nested markup that is later used to style and link the text inside of it.
# Please do not modify or remove "<a>", "</a>", "<span>" and "</span>".
facebook-breach-note = <span>Vaš e-poštni naslov ni prikazan v tem razkritju, vendar je vaša telefonska številka morda še vedno ranljiva.</span> Nekateri računi, ki so bili ogroženi v razkritju podatkov na Facebooku, so vključevali telefonske številke in druge osebne podatke, ne pa tudi e-poštnih naslovov. Če ste kdaj ustvarili račun za Facebook – tudi če ga trenutno ne uporabljate – vam priporočamo, da se zaščitite z naslednjimi koraki
# This string contains nested markup that is later used to style and link the text inside of it.
# Please do not modify or remove "<a>", "</a>", "<span>" and "</span>".
facebook-breach-what-to-do-1-headline = <span>V <a>svojem profilu na Facebooku</a> nastavite svoje podatke na "Samo jaz" ali drugo nejavno nastavitev.</span>
facebook-breach-what-to-do-1-copy = Med tem razkritjem so se hekerji dokopali do podatkov profila, ki je bil nastavljen kot "odprt za javnost" ali "deljen s prijatelji". Te podatke je mogoče združiti z drugimi podatki za dostop do še več vaših osebnih podatkov in računov.
# This string contains nested markup that is later used to style and link the text inside of it.
# Please do not modify or remove "<a>", "</a>", "<span>" and "</span>".
facebook-breach-what-to-do-2-headline = <span>Spremenite geslo, PIN ali druge prijavne podatke za svoje <a>račune pri mobilnem operaterju</a>, da preprečite zamenjavo SIM</span>.
facebook-breach-what-to-do-2-copy = Pri zamenjavi SIM, imenovani tudi SIM-jacking, heker s telefonskimi številkami, datumom rojstva in drugimi podatki prevzame mobilno številko osebe in nato vdre v njeno e-pošto, družbena omrežja in celo finančne račune.
facebook-breach-what-to-do-3 = Oglejte si vsa priporočila na naši strani o razkritju podatkov na Facebooku
# "Appears in-page as: Showing: All Breaches"
currently-showing = Prikazano:

## Updated error messages

error-bot-headline = Iskanja so začasno onemogočena
error-bot-blurb =
    Skrbi nas, da ste morda bot, ker ste v kratkem času 
    iskali več e-poštnih naslovov. Za zdaj so vaša iskanja 
    onemogočena. Poskusite znova kasneje.
error-csrf-headline = Seja je potekla
error-csrf-blurb = V brskalniku izberite gumb Nazaj, ponovno naložite stran in poskusite znova.
error-invalid-unsub = Kako se odjaviti od opozoril { -product-name }ja
error-invalid-unsub-blurb =
    Odjaviti se boste morali iz enega od poslanih 
    e-poštnih sporočil { -product-name }ja. V nabiralniku preverite prejeta sporočila 
    { -brand-team-email }. Na dnu e-poštnega sporočila izberite povezavo za odjavo.
# This string is displayed under a large numeral that indicates the total number
# of email address a user has signed up for monitoring. Don’t add $emails to
# your localization, because it would result in the number showing twice.
email-addresses-being-monitored =
    { $emails ->
        [one] nadzorovan e-poštni naslov
        [two] nadzorovana e-poštna naslova
        [few] nadzorovani e-poštni naslovi
       *[other] nadzorovanih e-poštnih naslovov
    }
# This string is displayed under a large numeral that indicates the total number
# of data breaches that exposed a user’s password. Don’t add $passwords to
# your localization, because it would result in the number showing twice.
passwords-exposed =
    { $passwords ->
        [one] geslo je bilo izpostavljeno v vseh krajah
        [two] gesli sta bili izpostavljeni v vseh krajah
        [few] gesla so bila izpostavljena v vseh krajah
       *[other] gesel je bilo izpostavljenih v vseh krajah
    }
# This string is displayed under a large numeral that indicates the total number
# of data breaches that have exposed the user’s information. Don’t add $breaches to
# your localization, because it would result in the number showing twice.
known-data-breaches-exposed =
    { $breaches ->
        [one] znana kraja podatkov je izpostavila vaše podatke
        [two] znani kraji podatkov sta izpostavili vaše podatke
        [few] znane kraje podatkov so izpostavile vaše podatke
       *[other] znanih kraj podatkov je izpostavilo vaše podatke
    }
# Button
see-additional-breaches = Prikaži dodatne kraje podatkov
# Variables:
#   $breachCount (Integer) - Number of breaches
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
# Variables:
#   $userEmail (String) - User email address
results-for = Rezultati za: { $userEmail }
other-monitored-emails = Ostali nadzorovani e-poštni naslovi
email-verification-required = Zahtevana je potrditev e-poštnega naslova
fxa-primary-email = E-poštni naslov { -brand-fxa }a – Glavni
what-is-a-website-breach = Kaj je kraja podatkov spletne strani?
website-breach-blurb = Do kraje podatkov spletne strani pride, ko spletni napadalci ukradejo, kopirajo ali razkrijejo osebne podatke spletnih računov. Običajno je rezultat tega, da hekerji odkrijejo šibko točko varnosti spletne strani. Kraje se lahko zgodijo tudi, če se podatki o računu na spletu pojavijo po naključju.
security-tips-headline = Varnostni nasveti za zaščito pred hekerji
steps-to-protect = Ukrepi za zaščito vaše spletne identitete
take-further-steps = Nadaljnji koraki za zaščito vaše identitete
alert-about-new-breaches = Opozori me na nove kraje podatkov
see-if-youve-been-part = Preverite, ali ste bili žrtev spletne kraje podatkov.
get-ongoing-breach-monitoring = Spremljajte kraje podatkov za več e-poštnih naslovov.
# This is a button and follows a headline reading "Was your info exposed in the ___ breach?"
find-out = Preverite
new-unsub-error = Odjaviti se boste morali iz enega od poslanih e-poštnih sporočil { -product-name }ja.
# Variables:
#   $breachCount (Integer) - Number of breaches
other-known-breaches-found =
    { $breachCount ->
        [one] Vendar se je pojavil v { $breachCount } drugi znani kraji podatkov.
        [two] Vendar se je pojavil v { $breachCount } drugih znanih krajah podatkov.
        [few] Vendar se je pojavil v { $breachCount } drugih znanih krajah podatkov.
       *[other] Vendar se je pojavil v { $breachCount } drugih znanih krajah podatkov.
    }
# This string appears on breach detail pages and is followed by a list
# of data classes that the breach exposed.
additional-information-including = Dodatne informacije, med drugim:
# Title
email-addresses-title = E-poštni naslovi
# This is a section headline on the breach detail page that appears above
# a short summary about the breach.
breach-overview-title = Pregled
# This is a standardized breach overview blurb that appears on all breach detail pages.
# $breachTitle is the name of the breached company or website.
# $breachDate and $addedDate are calendar dates.
breach-overview-new = Dne { $breachDate } je prišlo do kraje podatkov { $breachTitle }. Ko je bila kraja odkrita in preverjena, smo jo dne { $addedDate } dodali v našo bazo podatkov.
# Title appearing on the Preferences dashboard.
monitor-preferences = Nastavitve { -product-short-name }ja
# When a user is signed in, this appears in the drop down menu
# and is followed by the user's primary Firefox Account email.
# Variables:
#   $userEmail (String) - User email address
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
# Form title
want-to-add = Želite dodati še en e-poštni naslov?
# This is part of a confirmation message that appears after a user has submitted
# the form to add an additional email to Firefox Monitor.
# Variables:
#   $userEmail (String) - User email address
verify-the-link = Potrdite povezavo poslano na { $userEmail }, da e-poštni naslov dodate v { -product-name }.

## These are part of a confirmation page that appears after a user has verified
## an additional email to Firefox Monitor.

email-verified = E-poštni naslov uspešno preverjen!
# Variables:
#   $email (String) - User email address
email-added-to-subscription = Opozorili vas bomo, v kolikor se bo naslov { $email } pojavil v novi kraji podatkov.
# This message is displayed after the user has verified their email address.
# { $nestedSignInLink } is replaced by a link, using sign-in-nested as text ("sign in" for English).
email-verified-view-dashboard = { $nestedSignInLink } se za ogled in upravljanje vseh e-poštnih naslovov, s katerimi ste se prijavili na spremljanje kraj podatkov.
# This message is used as a text for the subscribe link in email-verified-view-dashboard
sign-in-nested = Prijavite se

##

# This is part of a confirmation message that appears after a user has submited the
# form to add an additional email to Firefox Monitor. { $preferencesLink } is a link
# to the Preferences page. The code and text for the link is generated elsewhere
# using the { preferences } string.
# Variables:
#   $preferencesLink (String) - Link to preferences
manage-all-emails = Upravljajte vse e-poštne naslove v { $preferencesLink }
# This string is a header on the user preferences page and
# appears above a check-box list of user options which allow
# the user to choose whether or not they want to receive breach
# alerts for all of their monitored email addresses to a single
# email address.
breach-alert-notifications = Obvestila opozoril o krajah
# This string is a label for the calendar date a breach is added to the database
# and is followed by that date.
breach-added-label = Kraja dodana:
how-hackers-work-desc = Zaščitite gesla pred spletnimi napadalci, saj jih gesla najbolj privlačijo.
what-to-do-after-breach-desc = Zaklenite svoje račune, in preprečite, da bi vaši podatki pristali v napačnih rokah.
create-strong-passwords-desc = Gesla naj bodo močna, varna in težko uganljiva.
steps-to-protect-desc = Razumite najpogostejše grožnje in vedite, na kaj morate biti pozorni.
five-myths-desc = Spoznajte, kako se izogniti slabim navadam pri ustvarjanju gesel, ki olajšajo delo hekerjev.
take-further-steps-desc = Ugotovite, kako zmanjšati tveganje za krajo identitete, in se izognite morebitnim finančnim težavam.
# This message appears after a user has successfully updated their communication settings.
changes-saved = Spremembe so bile shranjene!
# Section headline
rec-section-headline = Kaj storiti za to krajo podatkov
rec-section-subhead = Priporočamo vam naslednje ukrepe, da ohranite varnost svojih osebnih podatkov in zaščitite svojo digitalno identiteto.
# Section headline
rec-section-headline-no-pw = Kaj storiti, da zaščitite svoje osebne podatke
rec-section-subhead-no-pw = Čeprav gesla v tej kraji podatkov niso bila izpostavljena, lahko še vedno ukrepate, da bolje zaščitite svoje osebne podatke.
# Button
see-additional-recs = Oglejte si dodatna priporočila

## This string contains nested markup that becomes a link later in the code.
## Please do not modify or remove "<a>" and "</a>".

# Variables:
#   $affectedEmail (String) - User email address
resolve-top-notification = { $affectedEmail } se je pojavil v tej kraji podatkov. <a>Kaj storiti</a>
# Variables:
#   $numAffectedEmails (Integer) - Number of affected email address
resolve-top-notification-plural =
    { $numAffectedEmails ->
        [one] { $numAffectedEmails } od vaših e-poštnih naslovov se je pojavil v tej kraji podatkov. <a>Kaj storiti</a>
        [two] { $numAffectedEmails } od vaših e-poštnih naslovov sta se pojavila v tej kraji podatkov. <a>Kaj storiti</a>
        [few] { $numAffectedEmails } od vaših e-poštnih naslovov so se pojavili v tej kraji podatkov. <a>Kaj storiti</a>
       *[other] { $numAffectedEmails } od vaših e-poštnih naslovov se je pojavilo v tej kraji podatkov. <a>Kaj storiti</a>
    }

##

marking-this-subhead = Označevanje kraje kot razrešene
# This string contains nested markup that is later used to style the text inside of it.
# Please do not modify or remove "<span>" and "</span>".
marking-this-body =
    <span>Ko ste izvedli ukrepe za zaščito</span>,
    lahko to krajo označite kot razrešeno. Do podrobnosti o kraji podatkov 
    lahko še vedno kadarkoli dostopate na nadzorni plošči.
mark-as-resolve-button = Označi kot razrešeno
marked-as-resolved-label = Označeno kot razrešeno
undo-button = Razveljavi
confirmation-1-subhead = Super! Pravkar ste razrešili prvo krajo podatkov.
confirmation-1-body = Nadaljujte. Preglejte nadzorno ploščo in preverite, ali je treba še kaj storiti.
confirmation-2-subhead = Izvolite hekerji!
confirmation-2-body = Sprejemate pomembne ukrepe za zaščito svojih spletnih računov.
confirmation-3-subhead = Še ena je razrešena. Odlično!
# This string contains nested markup that becomes a link later in the code.
# Please do not modify or remove "<a>" and "</a>".
confirmation-3-body = Ali je vaše novo geslo edinstveno, močno in težko uganljivo? <a>Preverite</a>
generic-confirmation-subhead = Ta kraja je bila označena kot razrešena
# Variables:
#   $numUnresolvedBreaches (Integer) - Number of resolved breaches
generic-confirmation-message =
    { $numUnresolvedBreaches ->
        [one] Za ogled preostale kraje pojdite na nadzorno ploščo.
        [two] Za ogled preostalih kraj pojdite na nadzorno ploščo.
        [few] Za ogled preostalih kraj pojdite na nadzorno ploščo.
       *[other] Za ogled preostalih kraj pojdite na nadzorno ploščo.
    }
return-to-breach-details-link = Nazaj na podrobnosti o kraji
go-to-dashboard-link = Pojdi na nadzorno ploščo
# This string appears above a breach resolution progress bar and indicates
# the percentage of breaches a user has resolved. For instance, "27% complete".
# Variables:
#   $percentComplete (String) - Completion percentage
progress-percent-complete = { $percentComplete }% dokončano
# This string appears in the purple callouts at the top of the user dashboard and shows
# the total number of breaches a user has resolved. For instance, "5 Resolved".
# Variables:
#   $numResolvedBreaches (Integer) - Number of resolved breaches
num-resolved =
    { $numResolvedBreaches ->
        [one] { $numResolvedBreaches } razrešena
        [two] { $numResolvedBreaches } razrešeni
        [few] { $numResolvedBreaches } razrešene
       *[other] { $numResolvedBreaches } razrešenih
    }
progress-intro-subhead = Novo v { -product-name }ju: Označite kraje podatkov kot razrešene
progress-intro-message =
    Po pregledu podrobnosti o kraji podatkov in izvedbi ukrepov za zaščito 
    vaših osebnih podatkov lahko kraje podatkov označite kot razrešene.
# Variables:
#   $numResolvedBreaches (Integer) - Number of resolved breaches
#   $numTotalBreaches (Integer) - Total number of breaches
progress-status =
    { $numTotalBreaches ->
        [one] { $numResolvedBreaches } od { $numTotalBreaches } kraj podatkov je bila označena kot razrešena
        [two] { $numResolvedBreaches } od { $numTotalBreaches } kraj podatkov sta bili označeni kot razrešeni
        [few] { $numResolvedBreaches } od { $numTotalBreaches } kraj podatkov so bile označene kot razrešene
       *[other] { $numResolvedBreaches } od { $numTotalBreaches } kraj podatkov je bilo označenih kot razrešenih
    }
progress-complete = Vse znane kraje podatkov so bile označene kot razrešene

## These strings contain nested markup that is later used to style the text inside of it.
## Please do not modify or remove "<span>" and "</span>".

progress-message-1 =
    <span>Dobro ste začeli!</span> Oglejte si preostale kraje in izvedite, 
    kako ukrepati.
progress-message-2 =
    <span>Kar tako naprej!</span> Majhne spremembe, kot je posodabljanje gesel, imajo velik vpliv na 
    varovanje vaših osebnih podatkov.
progress-message-3 = <span>Dobro ste se lotili razreševanja kraj!</span> Kar tako naprej. Še nekaj jih je ostalo.
progress-message-4 = <span>Skoraj ste končali!</span> Blizu cilja ste.
progress-complete-message =
    <span>Dober občutek, kajne?</span> Če želite nadaljevati, je sedaj pravi čas za to, 
    da posodobite druge prijave z močnejšimi gesli.

##

resolve-this-breach-link = Razreši to krajo
# This string appears in resolved breach cards and is followed by
# the date the user marked the breach as resolved.
marked-resolved = Označeno kot razrešeno:
hide-resolved-button = Skrij razrešene
show-resolved-button = Prikaži razrešene
# Variables:
#   $numPasswords (Integer) - Number of exposed passwords
unresolved-passwords-exposed =
    { $numPasswords ->
        [one] geslo je bilo izpostavljeno v nerazrešenih krajah
        [two] gesli sta bili izpostavljeni v nerazrešenih krajah
        [few] gesla so bila izpostavljena v nerazrešenih krajah
       *[other] gesel je bilo izpostavljenih v nerazrešenih krajah
    }
# Variables:
#   $numResolvedBreaches (Integer) - Number of resolved breaches
known-data-breaches-resolved =
    { $numResolvedBreaches ->
        [one] znana kraja je bila označena kot razrešena
        [two] znani kraji sta bili označeni kot razrešeni
        [few] znane kraje so bile označene kot razrešene
       *[other] znanih kraj je bilo označenih kot razrešenih
    }
# A status indicator that appears in the top right corner of new breach cards
new-breach = Novo
mobile-promo-headline = Imejte { -brand-name } na svojem telefonu in tablici
mobile-promo-body = Hitro, zasebno in varno brskanje kamorkoli greste. Poiščite { -brand-name } v trgovini Google Play in App Store.
mobile-promo-cta = Prenesite { -brand-name } za Android in iOS
promo-lockwise-headline = Vzemite gesla s seboj
lockwise-promo-body = Spremljajte svoje prijave na vseh napravah. Varno dostopajte do njih na računalniku, telefonu ali tablici.
promo-lockwise-cta = Prenesite { -brand-lockwise }
fpn-promo-headline = Prikrijte svojo lokacijo spletnim mestom in sledilcem.
promo-fpn-body = { -brand-fpn } vas zavaruje pred spletnimi mesti in zbiralci podatkov, ki o vas naredijo profil in vas zatrpajo z oglasi, tako da prikrije vaš resnični naslov IP.
promo-fpn-cta = Preskusite { -brand-fpn }
monitor-promo-headline = Izvedite več o novih krajah podatkov
monitor-promo-body = Prejmite obvestilo naslednjič, ko bodo vaši podatki izpostavljeni v znani kraji podatkov.
ecosystem-promo-headline = Zaščitite svoje spletno življenje z izdelki, ki na prvo mesto postavljajo zasebnost
ecosystem-promo-body = Vsi izdelki { -brand-name } sledijo naši obljubi o ravnanju z osebnimi podatki: Vzemi manj. Ohrani na varnem. Brez skrivnosti.
promo-ecosystem-cta = Oglejte si vse izdelke
steps-to-resolve-headline = Koraki za razrešitev te kraje podatkov
vpn-promo-headline = Zdaj je čas, da okrepite svojo varnost na spletu.
vpn-promo-copy = Navidezno zasebno omrežje { -brand-Mozilla(sklon: "rodilnik") } vam pomaga zaščititi internetno povezavo pred napadalci in vohuni.
vpn-promo-cta = Namestite { -brand-mozilla-vpn }
vpn-promo-headline-new = Prihranite 50 % s celoletno naročnino
vpn-promo-copy-new = Zaščitite svoje podatke na spletu – in izberite naročnino za VPN, ki vam ustreza.

## VPN promotional banner.  HTML tags should not be translated, e.g. `<em>`

# Variables:
#   $ip-location (String) - User's IP location is determined dynamically by 3rd-party,
#                           eg: "Your location: Los Angeles, CA".  The 3rd-party service
#                           provides its own localization.
vpn-banner-location = Vaša lokacija: { $ip-location }
vpn-banner-protect-yourself-with-vpn = <em>Zaščitite se</em> z { -brand-mozilla-vpn }.
vpn-banner-protected-with-vpn = <em>Zaščiteni</em> z { -brand-mozilla-vpn }.
vpn-banner-title-1 = Zaščiteni ste – hvala, ker uporabljate { -brand-mozilla-vpn }.
vpn-banner-title-2 = Vašo lokacijo je mogoče izslediti, če ne uporabljate VPN.
vpn-banner-subtitle-2 = Zaščitite svojo lokacijo in brskajte varno v 3 korakih
vpn-banner-status-protected = Trenutno stanje: <em>Zaščiteni ✓</em>
vpn-banner-status-not-protected = Trenutno stanje: <em>Niste zaščiteni ⚠</em>
# Variables:
#   $ip-address (String) - User's IP address is determined dynamically, eg: "IP address: 192.168.1.1"
vpn-banner-ip-address = Naslov IP: { $ip-address }
vpn-banner-step-1 = Naročite se na { -brand-mozilla-vpn }
vpn-banner-step-2 = Izberite nahajališče VPN
vpn-banner-step-3 = Vključite VPN in brskajte varno
vpn-banner-cta = Pridobite { -brand-mozilla-vpn }
# button to expand panel
vpn-banner-cta-expand = Razširi
# button to close panel
vpn-banner-cta-close = Zapri

## Relay and VPN educational/ad units

ad-unit-relay-cta = Več o { -brand-relay }u
ad-unit-vpn-cta = Več o { -brand-mozilla-vpn }
# ad 1 heading
ad-unit-1-how-do-you-keep = Kako ohranite svoj e-poštni naslov skrivnost?
# ad 2 heading
ad-unit-2-do-you-worry = Vas skrbi varnost na javnih omrežjih Wi-Fi?
# ad 3 heading
ad-unit-3-stay-in-the-game = Ostanite v igri!
ad-unit-3-lets-you-keep = { -brand-mozilla-vpn } vam ponuja varno in stabilno povezavo med igranjem iger ali pretakanjem filmov.
# ad 3 list item 1
ad-unit-3-prevent-throttling = Prepreči omejevanje
# ad 3 list item 2
ad-unit-3-be-anywhere = Bodite kjerkoli na svetu
# ad 3 list item 3
ad-unit-3-access-more = Več dostopa
# ad 4 heading
ad-unit-4-shopping-with = Nakupovanje z e-poštnimi maskami
ad-unit-4-want-to-buy = Želite nekaj kupiti na spletu, vendar ne poznate ali popolnoma zaupate trgovini?
ad-unit-4-shop-online = Pri spletnem nakupovanju uporabite e-poštno masko. Prejmite potrditveno sporočilo na pravi e-poštni naslov in izključite masko kadarkoli pozneje.
# ad 5 heading
ad-unit-5-on-the-go = Na poti s { -brand-relay }
ad-unit-5-instantly-make = V trenutku si ustvarite e-poštno masko po meri, kjerkoli ste in kamorkoli greste!
# ad 5 subheading 1
ad-unit-5-connect-on-the-go = Povežite se na poti
ad-unit-5-privately-sign-in = Uporabite e-poštno masko, ko se želite zasebno prijaviti v svoji priljubljeni kavarni ali v javno omrežje Wi-Fi
# ad 5 subheading 2
ad-unit-5-email-receipts = Prejmi potrdila o prejemu e-pošte
ad-unit-5-share-custom-email = Delite e-poštno masko po meri za račune za nakupovanje v trgovini, ne da bi delili svoj pravi e-poštni naslov
# ad 5 subheading 3
ad-unit-5-use-on-phone = Uporabite v telefonu
ad-unit-5-no-matter-where = Ne glede na to, kje ste, si v nekaj sekundah ustvarite e-poštno masko po meri za kar koli želite
# ad 6 heading
ad-unit-6-worry-free = Brezskrbna registracija
ad-unit-6-want-to-start = Želite skleniti novo naročnino, se odzvati na povabilo ali prejeti ugodno promocijsko kodo, ne da bi vaš e-poštni predal preplavila vsiljena pošta?
ad-unit-6-before-you-complete = Preden dokončate naslednjo prijavo, uporabite e-poštno masko namesto pravega e-poštnega naslova, da zaščitite svoje podatke in obdržite nadzor nad mapo Prejeto

# Monitor V2


## The following messages are brands and should be kept entirely in English

-brand-firefox =
    { $sklon ->
       *[imenovalnik] Firefox
        [rodilnik] Firefoxa
        [dajalnik] Firefoxu
        [tozilnik] Firefox
        [mestnik] Firefoxu
        [orodnik] Firefoxom
    }
-brand-monitor = Monitor
-brand-fx-monitor = Mozilla Monitor
-brand-mozilla =
    { $sklon ->
       *[imenovalnik] Mozilla
        [rodilnik] Mozille
        [dajalnik] Mozilli
        [tozilnik] Mozillo
        [mestnik] Mozilli
        [orodnik] Mozillo
    }
-brand-premium = Premium
-brand-monitor-premium = Monitor Premium
-brand-mozilla-foundation = Mozilla Foundation
-brand-github =
    { $sklon ->
       *[imenovalnik] GitHub
        [rodilnik] GitHuba
        [dajalnik] GitHubu
        [tozilnik] GitHub
        [mestnik] GitHubu
        [orodnik] GitHubom
    }
-brand-mozilla-vpn = Mozilla VPN
-brand-relay = Firefox Relay
-brand-mozilla-monitor =
    { $sklon ->
        [rodilnik] Mozilla Monitorja
        [dajalnik] Mozilla Monitorju
        [tozilnik] Mozilla Monitor
        [mestnik] Mozilla Monitorju
        [orodnik] Mozilla Monitorjem
       *[imenovalnik] Mozilla Monitor
    }
-brand-monitor-plus =
    { $sklon ->
        [rodilnik] Monitorja Plus
        [dajalnik] Monitorju Plus
        [tozilnik] Monitor Plus
        [mestnik] Monitorju Plus
        [orodnik] Monitorjem Plus
       *[imenovalnik] Monitor Plus
    }

##

# “account” can be localized, “Mozilla” must be treated as a brand,
# and kept in English.
-brand-mozilla-account =
    { $sklon ->
        [rodilnik] Računa Mozilla
        [dajalnik] Računu Mozilla
        [tozilnik] Račun Mozilla
        [mestnik] Računu Mozilla
        [orodnik] Računom Mozilla
       *[imenovalnik] Račun Mozilla
    }
open-in-new-tab-alt = Odpri povezavo v novem zavihku

## Search Engine Optimization

meta-desc-2 = Ugotovite, ali ste bili vpleteni v krajo podatkov s { -brand-fx-monitor }jem. Pomagali vam bomo razumeti, kaj lahko storite, in nenehno spremljali morebitne nove kraje.

## Header

# Deprecated
brand-fx-monitor = { -brand-fx-monitor }
sign-in = Prijavite se
brand-mozilla-monitor = { -brand-fx-monitor }

## Site navigation

site-nav-breaches-link = Razrešite kraje podatkov
site-nav-settings-link = Nastavitve
site-nav-help-link = Pomoč in podpora
# This call-out is above 2 image links for Firefox Relay and Mozilla VPN
site-nav-ad-callout = Preizkusite druga naša varnostna orodja:
brand-relay = { -brand-relay }
brand-mozilla-vpn = { -brand-mozilla-vpn }
mobile-menu-label = Glavni meni
main-nav-button-collapse-label = Strni meni
main-nav-button-collapse-tooltip = Strni meni
main-nav-button-expand-label = Razširi meni
main-nav-button-expand-tooltip = Razširi meni
main-nav-label = Krmarjenje
main-nav-link-home-label = Domov
main-nav-link-dashboard-label = Nadzorna plošča
main-nav-link-settings-label = Nastavitve
main-nav-link-faq-label = Pogosta vprašanja
main-nav-link-faq-tooltip = Pogosto zastavljena vprašanja

## User menu

# Obsolete
menu-button-title = Uporabniški meni
# Obsolete
menu-button-alt = Odpri uporabniški meni
# Obsolete
menu-list-accessible-label = Meni računa
# Obsolete
menu-item-fxa-2 = Upravljajte svoj { -brand-mozilla-account }
# Obsolete
menu-item-settings = Nastavitve
# Obsolete
menu-item-help = Pomoč in podpora
# Obsolete
menu-item-logout = Odjava
user-menu-trigger-label = Odpri uporabniški meni
user-menu-trigger-tooltip = Profil
user-menu-manage-fxa-label = Upravljajte svoj { -brand-mozilla-account }
user-menu-settings-label = Nastavitve
user-menu-settings-tooltip = Nastavi { -brand-mozilla-monitor }
user-menu-help-label = Pomoč in podpora
user-menu-help-tooltip = Pomoč pri uporabi { -brand-mozilla-monitor(sklon: "rodilnik") }
user-menu-signout-label = Odjava
user-menu-signout-tooltip = Odjava iz { -brand-mozilla-monitor(sklon: "rodilnik") }

## Footer

mozilla = { -brand-Mozilla }
terms-of-service = Pogoji uporabe
privacy-notice = Obvestilo o zasebnosti
github = { -brand-github }
footer-nav-all-breaches = Vse kraje podatkov
footer-external-link-faq-label = Pogosta vprašanja
footer-external-link-faq-tooltip = Pogosto zastavljena vprašanja

## Error page

# Variables:
#   $errorCode (number) - "404"
error-page-error-404-title = { $errorCode } Strani ni bilo mogoče najti
error-page-error-404-copy = Stran, ki jo iščete, žal ne obstaja več.
error-page-error-404-cta-button = Nazaj
# Variables:
#   $errorCode (number) - the status code of the error, e.g. 403
error-page-error-other-title = { $errorCode } Prišlo je do napake
error-page-error-other-copy = Poskusite znova ali se vrnite pozneje

## Breach overview page

all-breaches-headline-2 = Vse kraje, ki jih je odkril { -brand-fx-monitor }
all-breaches-lead = Spremljamo vse znane kraje podatkov, da ugotovimo, ali so bili vaši osebni podatki ogroženi. Tukaj je celoten seznam vseh kraj, prijavljenih od leta 2007 naprej.
search-breaches = Iskanje kraj podatkov
# the kind of user data exposed to hackers in data breach.
exposed-data = Izpostavljeni podatki:

## Public breach detail page

find-out-if-2 = Ugotovite, ali ste bili vpleteni v to krajo
find-out-if-description = Pomagali vam bomo hitro ugotoviti, ali je bil vaš e-poštni naslov izpostavljen v tej kraji, in razumeti, kaj morate storiti.
breach-detail-cta-signup = Preverite kraje podatkov

## Floating banner

floating-banner-text = Okrepite svojo spletno varnost z novicami, nasveti in posodobitvami { -brand-Mozilla(sklon: "rodilnik") }.
floating-banner-link-label = Prijava
floating-banner-dismiss-button-label = Ne, hvala

## Firefox Monitor -> Mozilla Monitor rebrand banner

banner-monitor-rebrand-text = <b>{ -brand-mozilla-monitor }</b>: Novo ime, nova podoba in novi načini za <b>povrnitev zasebnosti</b>.
banner-monitor-rebrand-dismiss-button-label = V redu
banner-monitor-rebrand-dismiss-button-tooltip = Skrij
loading-accessibility = Nalaganje
