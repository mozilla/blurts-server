# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.

fix-flow-nav-high-risk-data-breaches = Visoko tvegane kraje podatkov
fix-flow-nav-leaked-passwords = Razkrita gesla
fix-flow-nav-security-recommendations = Varnostna priporočila
guided-resolution-flow-exit = Nazaj na pregledno ploščo
guided-resolution-flow-next-arrow = Pojdi na naslednji korak
guided-resolution-flow-next-arrow-sub-step = Pojdi na naslednji zadetek
guided-resolution-flow-step-navigation-label = Vodeni koraki

# Celebration screens


## Shared CTA labels

fix-flow-celebration-next-label = Gremo naprej
fix-flow-celebration-next-recommendations-label = Glej priporočila
fix-flow-celebration-next-dashboard-label = Pojdite na nadzorno ploščo

## High-risk flow

fix-flow-celebration-high-risk-title = Odpravili ste visoko tvegane izpostavljenosti!
fix-flow-celebration-high-risk-description-in-progress = To delo se vam lahko zdi težko, vendar je pomembno, da ga opravljate, da se zaščitite. Kar tako naprej.
fix-flow-celebration-high-risk-description-done = To delo se vam lahko zdi težko, vendar je pomembno, da ga opravljate, da se zaščitite.
fix-flow-celebration-high-risk-description-next-passwords = Zdaj pa popravimo vaša izpostavljena gesla.
fix-flow-celebration-high-risk-description-next-security-questions = Zdaj pa popravimo vaša izpostavljena varnostna vprašanja.
fix-flow-celebration-high-risk-description-next-security-recommendations = Nato vam bomo dali prilagojena varnostna priporočila glede na to, kateri vaši podatki so bili izpostavljeni.
fix-flow-celebration-high-risk-description-next-dashboard = Prišli ste do konca svojih korakov. Na nadzorni plošči si lahko ogledate poljubne elemente dejanj in spremljate napredek.

## Leaked passwords and security questions flow

fix-flow-celebration-leaked-passwords-title = Vaša gesla so zdaj zaščitena!
fix-flow-celebration-security-questions-title = Vaša varnostna vprašanja so zaščitena!
fix-flow-celebration-leaked-passwords-description-next-security-questions = Zdaj pa preglejmo in posodobimo vaša izpostavljena varnostna vprašanja.
fix-flow-celebration-leaked-passwords-description-next-security-recommendations = Nato vam bomo dali prilagojena varnostna priporočila glede na to, kateri vaši podatki so bili izpostavljeni.
fix-flow-celebration-leaked-passwords-description-next-dashboard = Bravo! Prišli ste do konca svojih korakov. Na nadzorni plošči si lahko ogledate poljubne elemente dejanj in spremljate napredek.

## Security recommendations flow

fix-flow-celebration-security-recommendations-title = Izpolnili ste vsa svoja priporočila!
fix-flow-celebration-security-recommendations-description-next-dashboard = Bravo! Prišli ste do konca svojih korakov. Na nadzorni plošči si lahko ogledate poljubne elemente dejanj in spremljate napredek.

# High Risk Data Breaches

high-risk-breach-heading = Kaj storiti
high-risk-breach-subheading = To zahteva dostop do vaših občutljivih podatkov, zato ga boste morali popraviti ročno.
# Variables
# $num_breaches is the number of breaches where the high risk data was found.
high-risk-breach-summary =
    { $num_breaches ->
        [one] Pojavil se je v { $num_breaches } podatkovnih krajah:
        [two] Pojavil se je v { $num_breaches } krajah podatkov:
        [few] Pojavil se je v { $num_breaches } krajah podatkov:
       *[other] Pojavil se je v { $num_breaches } krajah podatkov:
    }
# Variables
# $breach_name is the name of the breach where the high risk data was found.
# $breach_date is the date when the breach occurred.
# An example of this string is Twitter on 13/09/18.
high-risk-breach-name-and-date = { $breach_name } <breach_date>dne { $breach_date }</breach_date>
high-risk-breach-mark-as-fixed = Označi kot popravljeno
high-risk-breach-skip = Zaenkrat preskoči
# Variables:
# $estimated_time is the estimated time it would take for a user to complete breach resolution steps. It not be singular, and the + is meant as "or more".
# An example of this string is Your estimated time: 15+ minutes.
high-risk-breach-estimated-time =
    { $estimated_time ->
        [one] Vaš predvideni čas: { $estimated_time }+ minute
        [two] Vaš predvideni čas: { $estimated_time }+ minute
        [few] Vaš predvideni čas: { $estimated_time }+ minute
       *[other] Vaš predvideni čas: { $estimated_time }+ minute
    }

# Credit Card Breaches

high-risk-breach-credit-card-title = Številka vaše kreditne kartice je bila razkrita
high-risk-breach-credit-card-description = Kdor koli ga dobi, lahko nepooblaščeno kupi nepooblaščeno, za kar odgovarjajo. Ukrepajte zdaj in preprečite finančno škodo.
high-risk-breach-credit-card-step-one = Če še vedno imate to kartico, se obrnite na izdajatelja in jo prijavite ukradeno.
high-risk-breach-credit-card-step-two = Zahtevajte novo kartico z novo številko.
high-risk-breach-credit-card-step-three = Preverite svoje račune za nepooblaščene bremenitve.

# Bank Account Breaches

high-risk-breach-bank-account-title = Vaš bančni račun je bil razkrit
high-risk-breach-bank-account-description = S čimprejšnjim ukrepanjem si lahko zagotovite večjo pravno zaščito, ki vam bo pomagala povrniti morebitne izgube.
high-risk-breach-bank-account-step-one = Takoj obvestite svojo banko, da je bila številka vašega računa ogrožena.
high-risk-breach-bank-account-step-two = Spremenite številko računa.
high-risk-breach-bank-account-step-three = Preverite, ali so se vam na računu pojavile nepooblaščene bremenitve.

# Social Security Number Breaches

high-risk-breach-social-security-title = Vaša številka socialnega zavarovanja je bila razkrita
high-risk-breach-social-security-description = Prevaranti lahko z vašo številko socialnega zavarovanja sklenejo nova posojila ali kreditne kartice. Ukrepajte hitro in preprečite finančno škodo.
high-risk-breach-social-security-step-one = Zaščitite se z <link_to_info>nastavitvijo opozorila pred goljufijami ali zamrznitvijo dobroimetja.</link_to_info>
high-risk-breach-social-security-step-two = <link_to_info>Preverite svoje kreditno poročilo</link_to_info> za neprepoznane račune.

# Social Security Number Modal

ssn-modal-title = O opozorilih o goljufijah in zamrznitvi kreditov
ssn-modal-description-fraud-part-one = <b>Opozorilo o goljufiji</b> od podjetij zahteva, da potrdijo vašo identiteto, preden izda novo dobroimetje v vašem imenu. Je brezplačen, traja eno leto in ne bo negativno vplival na vašo kreditno oceno.
ssn-modal-description-fraud-part-two = Za ustanovitev se obrnite na enega od treh kreditnih uradov. Ni nujno, da se obrnete na vse tri.
ssn-modal-description-freeze-credit-part-one = <b>Zamrznitev vašega dobroimetja</b> preprečuje, da bi kdorkoli odprl nov račun v vašem imenu. Je brezplačen in ne bo negativno vplival na vašo kreditno sposobnost, vendar ga boste morali pred odpiranjem novega računa odmrzniti.
ssn-modal-description-freeze-credit-part-two = Za zamrznitev kredita se obrnite na enega od treh kreditnih uradov – <equifax_link>Equifax</equifax_link>, <experian_link>Experian</experian_link> in <transunion_link>TransUnion</transunion_link>.
ssn-modal-learn-more = Preberite več o opozorilih o goljufijah in zamrznitvi kreditov
ssn-modal-ok = V redu

# PIN Breaches

high-risk-breach-pin-title = Vaša koda PIN je bila razkrita
high-risk-breach-pin-description = S čimprejšnjim ukrepanjem si lahko zagotovite večjo pravno zaščito, ki vam bo pomagala povrniti morebitne izgube.
high-risk-breach-pin-step-one = Takoj obvestite svojo banko, da je bila vaša koda PIN razkrita.
high-risk-breach-pin-step-two = Povsod, kjer ste uporabljali isto kodo PIN, jo spremenite.
high-risk-breach-pin-step-three = Preverite, ali so se vam na računu pojavile nepooblaščene bremenitve.

# No high risk breaches found

high-risk-breach-none-title = Odlična novica, odkrili nismo nobene visoko tvegane kraje podatkov
# Variables
# $email_list is list of emails that the user is monitoring for breaches. E.g. john@yahoo.com, ali@gmail.com, sam@hotmail.com
high-risk-breach-none-description = Na podlagi vašega e-poštnega naslova zaznavamo kraje podatkov z visokim tveganjem za { $email_list }.
high-risk-breach-none-sub-description-part-one = Visoko tvegane kraje podatkov vključujejo:
high-risk-breach-none-sub-description-ssn = Številka socialnega zavarovanja
high-risk-breach-none-sub-description-bank-account = Podatki o bančnem računu
high-risk-breach-none-sub-description-cc-number = Številke kreditnih kartic
high-risk-breach-none-sub-description-pin = kode PIN
high-risk-breach-none-continue = Nadaljuj

# Security recommendations

security-recommendation-steps-label = Varnostna priporočila
security-recommendation-steps-title = Naš nasvet je:
security-recommendation-steps-cta-label = Razumem!

# Phone security recommendation

security-recommendation-phone-title = Zaščitite svojo telefonsko številko
# $num_breaches is the number of breaches where the phone number was found.
security-recommendation-phone-summary =
    { $num_breaches ->
        [one] Vaša telefonska številka je bila razkrita v { $num_breaches } kraji podatkov:
        [two] Vaša telefonska številka je bila izpostavljena v { $num_breaches } krajah podatkov:
        [few] Vaša telefonska številka je bila izpostavljena v { $num_breaches } krajah podatkov:
       *[other] Vaša telefonska številka je bila izpostavljena v { $num_breaches } krajah podatkov:
    }
security-recommendation-phone-description = Žal ga ne morete vzeti nazaj. Vendar pa lahko nekaj storite, da ostanete varni.
security-recommendation-phone-step-one = Blokirajte neželene številke in preprečite nove neželene klice
security-recommendation-phone-step-two = Ne klikajte povezav v sporočilih neznanih pošiljateljev; če se zdi, da prihaja iz zaupanja vrednega vira, pokličite za potrditev

# Email security recommendation

security-recommendation-email-title = Zaščitite svoj e-poštni naslov
# $num_breaches is the number of breaches where the email address was found.
security-recommendation-email-summary =
    { $num_breaches ->
        [one] Vaš e-poštni naslov je bil razkrit v { $num_breaches } podatkovni kraji:
        [two] Vaš e-poštni naslov je bil izpostavljen v { $num_breaches } krajah podatkov:
        [few] Vaš e-poštni naslov je bil izpostavljen v { $num_breaches } krajah podatkov:
       *[other] Vaš e-poštni naslov je bil izpostavljen v { $num_breaches } krajah podatkov:
    }
security-recommendation-email-description = Tega žal ne morete popraviti. Vendar pa obstajajo koraki, s katerimi se lahko zaščitite.
security-recommendation-email-step-one = Ne klikajte povezav v e-poštnih sporočilih neznanih pošiljateljev; če se zdi, da prihaja iz zaupanja vrednega vira, pokličite neposredno za potrditev
security-recommendation-email-step-two = Bodite pozorni na <link_to_info>prevare z lažnim predstavljanjem</link_to_info>
security-recommendation-email-step-three = Označite sumljivo pošto kot neželeno in blokirajte pošiljatelja
security-recommendation-email-step-four = Za zaščito e-pošte v prihodnje uporabite <link_to_info>e-poštne maske za { -brand-relay }</link_to_info>

# IP security recommendation

security-recommendation-ip-title = Za večjo zasebnost uporabite VPN
# $num_breaches is the number of breaches where the IP address was found.
security-recommendation-ip-summary =
    { $num_breaches ->
        [one] Vaš naslov IP je bil razkrit v { $num_breaches } podatkovni kraji:
        [two] Vaš naslov IP je bil izpostavljen v { $num_breaches } krajah podatkov:
        [few] Vaš naslov IP je bil izpostavljen v { $num_breaches } krajah podatkov:
       *[other] Vaš naslov IP je bil izpostavljen v { $num_breaches } krajah podatkov:
    }
security-recommendation-ip-description = Vaš naslov IP natančno določa vašo lokacijo in ponudnika internetnih storitev. Hekerji bi lahko s temi podatki ugotovili vašo lokacijo ali se poskusili povezati z vašimi napravami.
security-recommendation-ip-step-one = Uporabite VPN (kot je <link_to_info>{ -brand-mozilla-vpn }</link_to_info>), da skrijete svoj pravi naslov IP in uporabljate internet zasebno.

# Leaked Passwords

# Variables
# $breach_name is the name of the breach where the leaked password was found.
leaked-passwords-title = Vaše geslo za { $breach_name } je bilo razkrito
# Variables
# $breach_date is the date when the breach occurred.
leaked-passwords-summary = Pojavil se je v kraji podatkov dne { $breach_date }.
leaked-passwords-description = Prevaranti lahko dostopajo do vašega računa in ga bodo verjetno poskušali uporabiti v drugih računih, da bi preverili, ali ste uporabili isto geslo. Spremenite ga povsod, kjer ste ga uporabljali, da se zaščitite.
leaked-passwords-steps-title = Kaj storiti
leaked-passwords-steps-subtitle = To zahteva dostop do vašega računa, zato ga boste morali popraviti ročno.
# Variables
# $breach_name is the name of the breach where the leaked password was found.
# $emails_affected are the emails associated with the breach.
leaked-passwords-step-one = Spremenite geslo za <b>{ $emails_affected }</b> na spletnem mestu <link_to_breach_site>{ $breach_name }</link_to_breach_site>.
leaked-passwords-step-two = Spremenite ga povsod, kjer ste ga uporabljali.
leaked-passwords-mark-as-fixed = Označi kot popravljeno
leaked-passwords-skip = Zaenkrat preskoči
# Variables
# $estimated_time is the amount of time it would take for a user to manually resolve a leaked password breach. It will always be a number greater than 1.
# "Est." is shortform for "Estimated".
# "mins" is shortform for "minutes".
leaked-passwords-estimated-time =
    { $estimated_time ->
        [one] Ocena čas za dokončanje: { $estimated_time } min na stran
        [two] Ocena čas za dokončanje: { $estimated_time } min na stran
        [few] Ocena čas za dokončanje: { $estimated_time } min na stran
       *[other] Ocena čas za dokončanje: { $estimated_time } min na stran
    }

# Leaked Security Questions

leaked-security-questions-title = Vaša varnostna vprašanja so bila razkrita
# Variables
# $breach_name is the name of the breach where the leaked security questions were found.
# $breach_date is the date when the breach occurred.
# An example of this string is Twitter on 13/09/18.
leaked-security-questions-summary = Pojavili so se v kraji podatkov o { $breach_name } dne { $breach_date }.
leaked-security-questions-description = Prevaranti jih lahko izkoristijo za dostop do vaših računov in vseh drugih strani, kjer ste uporabili ista varnostna vprašanja. Posodobite jih zdaj in zaščitite svoje račune.
leaked-security-questions-steps-title = Kaj storiti
leaked-security-questions-steps-subtitle = To zahteva dostop do vašega računa, zato ga boste morali popraviti ročno.
# Variables
# $breach_name is the name of the breach where the security questions were found.
# $email_affected is the email associated with the breach.
leaked-security-questions-step-one = Posodobite varnostna vprašanja za <b>{ $email_affected }</b> na spletnem mestu <link_to_breach_site>{ $breach_name }</link_to_breach_site>.
leaked-security-questions-step-two = Posodobite jih na vseh drugih mestih, kjer ste uporabili ista varnostna vprašanja. Za vsak račun uporabite različna varnostna vprašanja.
