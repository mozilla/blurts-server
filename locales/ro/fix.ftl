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
ssn-modal-learn-more = Află mai multe despre alertele de fraudă și înghețarea creditului
ssn-modal-ok = OK

# PIN Breaches


# No high risk breaches found

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

# Email security recommendation


# IP security recommendation


# Leaked Passwords


# Leaked Security Questions

