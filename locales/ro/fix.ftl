# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.

fix-flow-nav-high-risk-data-breaches = Încălcări ale securității datelor cu risc ridicat
fix-flow-nav-leaked-passwords = Parole expuse
fix-flow-nav-security-recommendations = Recomandări de securitate
guided-resolution-flow-exit = Revino în tabloul de bord
guided-resolution-flow-next-arrow = Mergi la pasul următor
guided-resolution-flow-next-arrow-sub-step = Mergi la rezultatul următor
guided-resolution-flow-step-navigation-label = Pași ghidați

# Celebration screens


## Shared CTA labels

fix-flow-celebration-next-label = Să continuăm
fix-flow-celebration-next-recommendations-label = Vezi recomandările
fix-flow-celebration-next-dashboard-label = Mergi la tabloul de bord

## High-risk flow

fix-flow-celebration-high-risk-title = Ți-ai rezolvat expunerile la riscuri ridicate!
fix-flow-celebration-high-risk-description-in-progress = Poate părea mult, dar este important să o faci pentru a te proteja. Continuă tot așa.
fix-flow-celebration-high-risk-description-done = Poate părea mult, dar este important să o faci pentru a te proteja.
fix-flow-celebration-high-risk-description-next-passwords = Acum hai să remediem parolele expuse.
fix-flow-celebration-high-risk-description-next-security-questions = Acum hai să rezolvăm întrebările de securitate expuse.
fix-flow-celebration-high-risk-description-next-security-recommendations = În continuare, îți vom oferi recomandări de securitate personalizate, în funcție de datele tale care au fost expuse.
fix-flow-celebration-high-risk-description-next-dashboard = Ai ajuns la finalul pașilor. Poți vizualiza orice acțiune și poți urmări progresul în tabloul de bord.

## Leaked passwords and security questions flow

fix-flow-celebration-leaked-passwords-title = Parolele tale sunt acum protejate!
fix-flow-celebration-security-questions-title = Întrebările tale de securitate sunt protejate!
fix-flow-celebration-leaked-passwords-description-next-security-questions = Acum hai să revedem și să actualizăm întrebările de securitate expuse.
fix-flow-celebration-leaked-passwords-description-next-security-recommendations = În continuare, îți vom oferi recomandări de securitate personalizate, în funcție de datele tale care au fost expuse.
fix-flow-celebration-leaked-passwords-description-next-dashboard = Bravo! Ai ajuns la finalul pașilor. Poți vizualiza orice acțiune și poți urmări progresul în tabloul de bord.

## Security recommendations flow

fix-flow-celebration-security-recommendations-title = Ai îndeplinit toate recomandările!
fix-flow-celebration-security-recommendations-description-next-dashboard = Bravo! Ai ajuns la finalul pașilor. Poți vizualiza orice acțiune și poți urmări progresul în tabloul de bord.

# High Risk Data Breaches

high-risk-breach-heading = Iată ce trebuie să faci
high-risk-breach-subheading = Necesită acces la informațiile tale sensibile, așa că va trebui să remediezi manual.
# Variables
# $num_breaches is the number of breaches where the high risk data was found.
high-risk-breach-summary =
    { $num_breaches ->
        [one] A apărut în { $num_breaches } încălcare a securității datelor:
        [few] A apărut în { $num_breaches } încălcări ale securității datelor:
       *[other] A apărut în { $num_breaches } de încălcări ale securității datelor:
    }
# Variables
# $breach_name is the name of the breach where the high risk data was found.
# $breach_date is the date when the breach occurred.
# An example of this string is Twitter on 13/09/18.
high-risk-breach-name-and-date = { $breach_name } <breach_date>pe { $breach_date }</breach_date>
high-risk-breach-mark-as-fixed = Marchează ca rezolvat
high-risk-breach-skip = Omite pentru moment
# Variables:
# $estimated_time is the estimated time it would take for a user to complete breach resolution steps. It not be singular, and the + is meant as "or more".
# An example of this string is Your estimated time: 15+ minutes.
high-risk-breach-estimated-time =
    { $estimated_time ->
        [one] Timp estimat: peste { $estimated_time } minut
        [few] Timp estimat: peste { $estimated_time } minute
       *[other] Timp estimat: peste { $estimated_time } de minute
    }

# Credit Card Breaches

high-risk-breach-credit-card-title = Numărul cardului tău de credit a fost expus
high-risk-breach-credit-card-description = Oricine îl obține poate face achiziții neautorizate pentru care ai putea răspunde. Acționează acum pentru a preveni daunele financiare.
high-risk-breach-credit-card-step-one = Dacă încă mai ai acest card, contactează emitentul pentru a-l raporta ca furat.
high-risk-breach-credit-card-step-two = Cere un card nou cu un număr nou.
high-risk-breach-credit-card-step-three = Verifică-ți conturile pentru debitări neautorizate.

# Bank Account Breaches

high-risk-breach-bank-account-title = Contul tău bancar a fost expus
high-risk-breach-bank-account-description = Ia măsuri cât mai curând posibil pentru mai multă protecție legală ca să îți recuperezi orice pierderi.
high-risk-breach-bank-account-step-one = Anunță imediat banca despre compromiterea numărului de cont.
high-risk-breach-bank-account-step-two = Schimbă-ți numărul de cont.
high-risk-breach-bank-account-step-three = Verifică-ți conturile pentru debitări neautorizate.

# Social Security Number Breaches

high-risk-breach-social-security-title = Codul tău numeric personal a fost expus
high-risk-breach-social-security-description = Escrocii pot face împrumuturi noi sau carduri de credit folosind codul tău numeric personal. Acționează rapid pentru a preveni daunele financiare.
high-risk-breach-social-security-step-one = Protejează-te prin <link_to_info>configurarea unei alerte de fraudă sau blocarea creditului.</link_to_info>
high-risk-breach-social-security-step-two = <link_to_info>Verifică-ți raportul de credit</link_to_info> pentru conturi nerecunoscute.

# Social Security Number Modal

ssn-modal-title = Despre alertele de fraudă și înghețarea creditului
ssn-modal-description-fraud-part-one = O <b>alertă de fraudă</b> impune companiilor să îți verifice identitatea înainte de a emite un nou credit pe numele tău. Este gratuită, durează un an și nu îți va afecta negativ scorul de credit.
ssn-modal-description-fraud-part-two = Pentru a configura una, contactează oricare dintre cele trei birouri de credit. Nu trebuie să le contactezi pe toate trei.
ssn-modal-description-freeze-credit-part-one = <b>Blocarea creditului</b> împiedică pe oricine să deschidă un cont nou pe numele tău. Este gratuită și nu îți va afecta negativ scorul de credit, dar va trebui să îl deblochezi înainte de a deschide orice cont nou.
ssn-modal-description-freeze-credit-part-two = Pentru blocarea creditelor, contactează fiecare dintre cele trei birouri de credit — <equifax_link>Equifax</equifax_link>, <experian_link>Experian</experian_link> și <transunion_link>TransUnion</transunion_link>.
ssn-modal-learn-more = Află mai multe despre alertele de fraudă și înghețarea creditului
ssn-modal-ok = OK

# PIN Breaches

high-risk-breach-pin-title = PIN-ul tău a fost expus
high-risk-breach-pin-description = Ia măsuri cât mai curând posibil pentru mai multă protecție legală ca să îți recuperezi orice pierderi.
high-risk-breach-pin-step-one = Anunță imediat banca despre compromiterea PIN-ului.
high-risk-breach-pin-step-two = Schimbă-ți codul PIN oriunde l-ai refolosit.
high-risk-breach-pin-step-three = Verifică-ți conturile pentru debitări neautorizate.

# No high risk breaches found

high-risk-breach-none-title = Vești bune! Nu am găsit nicio încălcare a securității datelor de risc ridicat.
# Variables
# $email_list is list of emails that the user is monitoring for breaches. E.g. john@yahoo.com, ali@gmail.com, sam@hotmail.com
high-risk-breach-none-description = Detectăm încălcări de securitate a datelor pe baza adresei tale de e-mail și nu am găsit nicio încălcare de securitate a datelor cu risc ridicat pentru { $email_list }.
high-risk-breach-none-sub-description-part-one = Încălcările securității datelor cu risc ridicat includ:
high-risk-breach-none-sub-description-ssn = Codul numeric personal
high-risk-breach-none-sub-description-bank-account = Date despre contul bancar
high-risk-breach-none-sub-description-cc-number = Numere ale cardurilor de credit
high-risk-breach-none-sub-description-pin = PIN-uri
high-risk-breach-none-continue = Continuă

# Security recommendations

security-recommendation-steps-label = Recomandări de securitate
security-recommendation-steps-title = Iată sfatul nostru:
security-recommendation-steps-cta-label = Am înțeles!

# Phone security recommendation

security-recommendation-phone-title = Protejează-ți numărul de telefon
# $num_breaches is the number of breaches where the phone number was found.
security-recommendation-phone-summary =
    { $num_breaches ->
        [one] Numărul tău de telefon a fost expus în { $num_breaches } încălcare a securității datelor:
        [few] Numărul tău de telefon a fost expus în { $num_breaches } încălcări ale securității datelor:
       *[other] Numărul tău de telefon a fost expus în { $num_breaches } de încălcări ale securității datelor:
    }
security-recommendation-phone-description = Din păcate, nu-l poți șterge de acolo. Dar există măsuri pe care le poți lua pentru a te asigura că rămâi în siguranță.
security-recommendation-phone-step-one = Blochează numerele de spam pentru a preveni mai multe apeluri nedorite
security-recommendation-phone-step-two = Nu da clic pe linkuri din mesaje text de la expeditori necunoscuți; dacă par să provină dintr-o sursă de încredere, sună direct pentru confirmare.

# Email security recommendation

security-recommendation-email-title = Protejează-ți adresa de e-mail
# $num_breaches is the number of breaches where the email address was found.
security-recommendation-email-summary =
    { $num_breaches ->
        [one] Adresa ta de e-mail a fost expusă în { $num_breaches } încălcare a securității datelor:
        [few] Adresa ta de e-mail a fost expusă în { $num_breaches } încălcări ale securității datelor:
       *[other] Adresa ta de e-mail a fost expusă în { $num_breaches } de încălcări ale securității datelor:
    }
security-recommendation-email-description = Din păcate, nu poți remedia nimic. Dar există măsuri pe care le poți lua pentru a te proteja.
security-recommendation-email-step-one = Nu da clic pe linkuri din mesaje pe e-mail de la expeditori necunoscuți; dacă par să provină dintr-o sursă de încredere, sună direct pentru confirmare.
security-recommendation-email-step-two = Fii atent(ă) la <link_to_info>escrocheriile de tip phishing</link_to_info>
security-recommendation-email-step-three = Marchează mesajele pe e-mail suspecte ca spam și blochează expeditorul
security-recommendation-email-step-four = Folosește <link_to_info>măști de e-mail { -brand-relay }</link_to_info> pentru a-ți proteja adresa de e-mail pe viitor

# IP security recommendation

security-recommendation-ip-title = Folosește un VPN pentru confidențialitate sporită
# $num_breaches is the number of breaches where the IP address was found.
security-recommendation-ip-summary =
    { $num_breaches ->
        [one] Adresa ta IP a fost expusă în { $num_breaches } încălcare a securității datelor:
        [few] Adresa ta IP a fost expusă în { $num_breaches } încălcări ale securității datelor:
       *[other] Adresa ta IP a fost expusă în { $num_breaches } de încălcări ale securității datelor:
    }
security-recommendation-ip-description = Adresa ta IP îți indică locația și furnizorul de servicii de internet. Hackerii ar putea folosi aceste informații pentru a-ți găsi locația sau pentru a încerca să se conecteze la dispozitivele tale.
security-recommendation-ip-step-one = Folosește o rețea VPN (cum ar fi <link_to_info>{ -brand-mozilla-vpn }</link_to_info>) pentru a-ți ascunde adresa IP reală și a utiliza internetul în mod privat.

# Leaked Passwords

# Variables
# $breach_name is the name of the breach where the leaked password was found.
leaked-passwords-title = Parola ta { $breach_name } a fost expusă
# Variables
# $breach_date is the date when the breach occurred.
leaked-passwords-summary = A apărut într-o încălcare a securității datelor pe { $breach_date }.
leaked-passwords-description = Escrocii îți pot accesa contul și probabil vor încerca să îl folosească pe alte conturi pentru a vedea dacă ai folosit aceeași parolă. Schimb-o oriunde ai mai folosit-o pentru a te proteja.
leaked-passwords-steps-title = Iată ce trebuie să faci
leaked-passwords-steps-subtitle = Necesită acces la contul tău, așa că va trebui să o remediezi manual.
# Variables
# $breach_name is the name of the breach where the leaked password was found.
# $emails_affected are the emails associated with the breach.
leaked-passwords-step-one = Schimbă-ți parola pentru <b>{ $emails_affected }</b> pe <link_to_breach_site>{ $breach_name }</link_to_breach_site>.
leaked-passwords-step-two = Schimb-o oriunde altundeva ai mai folosit-o.
leaked-passwords-mark-as-fixed = Marchează ca rezolvat
leaked-passwords-skip = Omite pentru moment
# Variables
# $estimated_time is the amount of time it would take for a user to manually resolve a leaked password breach. It will always be a number greater than 1.
# "Est." is shortform for "Estimated".
# "mins" is shortform for "minutes".
leaked-passwords-estimated-time =
    { $estimated_time ->
        [one] Timp estimat de finalizare: { $estimated_time } minut per site
        [few] Timp estimat de finalizare: { $estimated_time } minute per site
       *[other] Timp estimat de finalizare: { $estimated_time } de minute per site
    }

# Leaked Security Questions

leaked-security-questions-title = Întrebările tale de securitate au fost expuse
# Variables
# $breach_name is the name of the breach where the leaked security questions were found.
# $breach_date is the date when the breach occurred.
# An example of this string is Twitter on 13/09/18.
leaked-security-questions-summary = Au apărut într-o încălcare a securității datelor { $breach_name } din data de { $breach_date }.
leaked-security-questions-description = Escrocii le pot folosi pentru a-ți accesa conturile și orice alt site unde ai folosit aceleași întrebări de securitate. Actualizează-le acum pentru a-ți proteja conturile.
leaked-security-questions-steps-title = Iată ce trebuie să faci
leaked-security-questions-steps-subtitle = Necesită acces la contul tău, așa că va trebui să o remediezi manual.
# Variables
# $breach_name is the name of the breach where the security questions were found.
# $email_affected is the email associated with the breach.
leaked-security-questions-step-one = Actualizează-ți întrebările de securitate pentru <b>{ $email_affected }</b> pe <link_to_breach_site>{ $breach_name }</link_to_breach_site>.
leaked-security-questions-step-two = Actualizează-le pe orice alt site unde ai folosit aceleași întrebări de securitate. Asigură-te că folosești întrebări de securitate diferite pentru fiecare cont.
