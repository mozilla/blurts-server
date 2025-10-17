# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.

fix-flow-nav-high-risk-data-breaches = Datalekkasje med høg risiko
fix-flow-nav-leaked-passwords = Lekne passord
fix-flow-nav-security-recommendations = Tryggingstilrådingar
guided-resolution-flow-exit = Tilbake til oversyn
guided-resolution-flow-next-arrow = Gå til neste steg
guided-resolution-flow-next-arrow-sub-step = Gå til neste resultat
guided-resolution-flow-step-navigation-label = Guida steg

# Celebration screens


## Shared CTA labels

fix-flow-celebration-next-label = La oss halde fram
fix-flow-celebration-next-recommendations-label = Sjå tilrådingar
fix-flow-celebration-next-dashboard-label = Gå til ditt oversyn

## High-risk flow

fix-flow-celebration-high-risk-title = Du har løyst eksponeringane dine med høg risiko!
fix-flow-celebration-high-risk-description-in-progress = Det kan kjennast overveldande å gjere dette arbeidet, men det er viktig for å verne deg sjølv. Hald fram med det gode arbeidet.
fix-flow-celebration-high-risk-description-done = Å gjere dette arbeidet kan kjennast som mykje, men det er viktig å gjere det for å halde deg trygg.
fix-flow-celebration-high-risk-description-next-passwords = La oss no fikse dei eksponerte passorda dine.
fix-flow-celebration-high-risk-description-next-security-questions = La oss no fikse dei eksponerte tryggingsspørsmåla dine.
fix-flow-celebration-high-risk-description-next-security-recommendations = Deretter vil vi gi deg personlege tryggingstilrådingar basert på kva data som er eksponerte.
fix-flow-celebration-high-risk-description-next-dashboard = Du har fullført det siste trinnet. Du kan sjå eventuelle nødvendige handlingar og dessutan framdrifta di i oversynet.

## Leaked passwords and security questions flow

fix-flow-celebration-leaked-passwords-title = Passorda dine er no verna!
fix-flow-celebration-security-questions-title = Tryggingsspørsmåla dine er verna!
fix-flow-celebration-leaked-passwords-description-next-security-questions = La oss no gå gjennom og oppdatere dei eksponerte tryggingsspørsmåla dine.
fix-flow-celebration-leaked-passwords-description-next-security-recommendations = Deretter vil vi gi deg personlege tryggingstilrådingar basert på kva data som er eksponerte.
fix-flow-celebration-leaked-passwords-description-next-dashboard = Bra gjort! Du har nådd slutten av stega dine. Du kan sjå alle handlingselement og følgje framgangen din i oversynet.

## Security recommendations flow

fix-flow-celebration-security-recommendations-title = Du har fullført alle tilrådingane dine!
fix-flow-celebration-security-recommendations-description-next-dashboard = Bra gjort! Du har nådd slutten av stega dine. Du kan sjå alle handlingselement og følgje framgangen din i oversynet.

# High Risk Data Breaches

high-risk-breach-heading = Dette er det du skal gjere
high-risk-breach-subheading = Dette krev tilgang til den sensitive informasjonen din, så du må fikse det manuelt.
# Variables
# $num_breaches is the number of breaches where the high risk data was found.
high-risk-breach-summary =
    { $num_breaches ->
        [one] Han førekom i { $num_breaches } datalekkasje:
       *[other] Han førekom i { $num_breaches } datalekkasjar:
    }
# Variables
# $breach_name is the name of the breach where the high risk data was found.
# $breach_date is the date when the breach occurred.
# An example of this string is Twitter on 13/09/18.
high-risk-breach-name-and-date = { $breach_name } <breach_date>den { $breach_date }</breach_date>
high-risk-breach-mark-as-fixed = Merk som løyst
high-risk-breach-skip = Hopp over no
# Variables:
# $estimated_time is the estimated time it would take for a user to complete breach resolution steps. It not be singular, and the + is meant as "or more".
# An example of this string is Your estimated time: 15+ minutes.
high-risk-breach-estimated-time =
    { $estimated_time ->
        [one] Estimert tidsbruk: { $estimated_time } minutt eller meir
       *[other] Estimert tidsbruk: { $estimated_time } minutt eller meir
    }

# Credit Card Breaches

high-risk-breach-credit-card-title = Betalingskortnummeret ditt er eksponert
high-risk-breach-credit-card-description = Alle som har tilgang til han kan gjennomføre uautoriserte kjøp, som du kan bli halden ansvarleg for. Set i verk tiltak no for å unngå økonomiske problem.
high-risk-breach-credit-card-step-one = Om du frameis har dette kortet, kontakt utskrivaren for å rapportere det stole.
high-risk-breach-credit-card-step-two = Be om eit nytt kort med eit nytt nummer.
high-risk-breach-credit-card-step-three = Sjekk kontoane dine for uautoriserte belastningar.

# Bank Account Breaches

high-risk-breach-bank-account-title = Bankkontoen din har blitt eksponert
high-risk-breach-bank-account-description = Å setje i verk tiltak så snart som mogleg kan gi deg meir juridisk vern for å hjelpe deg med å rette opp igjen eventuelle tap.
high-risk-breach-bank-account-step-one = Informer banken din omgåande om at kontonummeret ditt er kompromittert.
high-risk-breach-bank-account-step-two = Endre kontonummeret ditt.
high-risk-breach-bank-account-step-three = Sjekk kontoane dine for uautoriserte belastningar.

# Social Security Number Breaches

high-risk-breach-social-security-title = Personnummeret ditt vart avslørt
high-risk-breach-social-security-description = Svindlarar kan bruke personnummeret ditt til å ta opp nye lån eller bestille kredittkort med personnummeret ditt. Set i verk tiltak raskt for å unngå økonomiske problem.
high-risk-breach-social-security-step-one = Vern deg sjølv ved å <link_to_info>konfigurere eit svindelvarsel eller fryse kreditten din.</link_to_info>
high-risk-breach-social-security-step-two = <link_to_info>Sjekk kredittopplysningane dine</link_to_info> for ukjende kontoar.

# Social Security Number Modal

ssn-modal-title = Om svindelvarsel og frosne kredittar
ssn-modal-description-fraud-part-one = <b>Eit svindelvarsel</b> krev at bedrifter stadfestar identiteten din før dei skriv ut ny kreditt i ditt namn. Det er gratis, varer eitt år og vil ikkje påverke kredittpoenga dine negativt.
ssn-modal-description-fraud-part-two = For å opprette ein, kontakt ein av dei tre kredittinstitusjonane. Du treng ikkje kontakte alle tre.
ssn-modal-description-freeze-credit-part-one = <b>Frysing av kreditten din</b> hindrar nokon i å opne nye kontoar i ditt namn. Det er gratis og påverkar ikkje kredittverdigheita di, men du må reversere handlinga for å opne nye kontoar.
ssn-modal-description-freeze-credit-part-two = For å fryse kreditten din, kontakt kvart av dei tre kredittbyråa – <equifax_link>Equifax</equifax_link>, <experian_link>Experian</experian_link> og <transunion_link>Transunion</transunion_link>.
ssn-modal-learn-more = Lær meir om svindelvarsel og frosne kredittar
ssn-modal-ok = OK

# PIN Breaches

high-risk-breach-pin-title = PIN-koden din er eksponert
high-risk-breach-pin-description = Å setje i verk tiltak så snart som mogleg kan gi deg meir juridisk vern for å hjelpe deg med å rette opp igjen eventuelle tap.
high-risk-breach-pin-step-one = Informer banken din omgåande om at PIN-koden din er kompromittert.
high-risk-breach-pin-step-two = Endre PIN-koden din overalt der du brukar han.
high-risk-breach-pin-step-three = Sjekk kontoane dine for uautoriserte belastningar.

# No high risk breaches found

high-risk-breach-none-title = Gode ​​nyheiter: Vi fann ingen datalekkasjar med høg risiko
# Variables
# $email_list is list of emails that the user is monitoring for breaches. E.g. john@yahoo.com, ali@gmail.com, sam@hotmail.com
high-risk-breach-none-description = Vi oppdagar datalekkasjar basert på e-postadressa di, og vi fann ingen datalekkasjar med høg risiko for { $email_list }.
high-risk-breach-none-sub-description-part-one = Datalekkasjar med høg risiko inkluderer:
high-risk-breach-none-sub-description-ssn = Personnummer
high-risk-breach-none-sub-description-bank-account = Bankkontoinformasjon
high-risk-breach-none-sub-description-cc-number = Nummer på betalingskort
high-risk-breach-none-sub-description-pin = PIN-kodar
high-risk-breach-none-continue = Hald fram

# Security recommendations

security-recommendation-steps-label = Tryggingstilrådingar
security-recommendation-steps-title = Her er våre råd:
security-recommendation-steps-cta-label = Skjønar!

# Phone security recommendation

security-recommendation-phone-title = Vern telefonnummeret ditt
# $num_breaches is the number of breaches where the phone number was found.
security-recommendation-phone-summary =
    { $num_breaches ->
        [one] Telefonnummeret ditt vart eksponert i { $num_breaches } datalekkasje:
       *[other] Telefonnummeret ditt vart eksponert i { $num_breaches } datalekkasjar:
    }
security-recommendation-phone-description = Dessverre kan du ikkje ta det tilbake. Men det finst ting du kan gjere for å verne deg sjølv.
security-recommendation-phone-step-one = Blokker søppelpostnummer for å unngå uønskte samtalar
security-recommendation-phone-step-two = Ikkje klikk på lenker i SMS-meldingar frå ukjende avsendarar; viss det ser ut til å vere frå ei påliteleg kjelde, ring direkte for å stadfeste

# Email security recommendation

security-recommendation-email-title = Vern e-postadressa di
# $num_breaches is the number of breaches where the email address was found.
security-recommendation-email-summary =
    { $num_breaches ->
        [one] E-postadressa di vart eksponert i { $num_breaches } datalekkasje:
       *[other] E-postadressa di vart eksponert i { $num_breaches } datalekkasjar:
    }
security-recommendation-email-description = Dessverre kan du ikkje løyse dette. Men det finst ting du kan gjere for å verne deg sjølv.
security-recommendation-email-step-one = Ikkje klikk på lenker i e-postar frå ukjende avsendarar; viss det ser ut til å vere frå ei påliteleg kjelde, ring direkte for å stadfeste
security-recommendation-email-step-two = Ver merksam på <link_to_info>phishing-svindel</link_to_info>
security-recommendation-email-step-three = Merk mistenkjelege e-postar som søppelpost og blokker avsendaren
security-recommendation-email-step-four = Bruk <link_to_info>{ -brand-relay } e-postalias</link_to_info> for å verne e-postadressa di i framtida

# IP security recommendation

security-recommendation-ip-title = Bruk eit VPN for ekstra personvern
# $num_breaches is the number of breaches where the IP address was found.
security-recommendation-ip-summary =
    { $num_breaches ->
        [one] IP-adressa di vart eksponert i { $num_breaches } datalekkasje:
       *[other] IP-adressa di vart eksponert i { $num_breaches } datalekkasjar:
    }
security-recommendation-ip-description = IP-adressa di identifiserer plasseringa di og internettleverandøren din. Hackarar kan bruke denne informasjonen til å finne posisjonen din eller prøve å kople til einingane dine.
security-recommendation-ip-step-one = Bruk eit VPN (som <link_to_info>{ -brand-mozilla-vpn }</link_to_info>) for å skjule den verkelege IP-adressa di og bruke internett privat.

# Leaked Passwords

# Variables
# $breach_name is the name of the breach where the leaked password was found.
leaked-passwords-title = Passordet ditt for { $breach_name } er eksponert
# Variables
# $breach_date is the date when the breach occurred.
leaked-passwords-summary = Det førekom i ein datalekkasje den { $breach_date }.
leaked-passwords-description = Svindlarar kan få tilgang til kontoen din og vil sannsynlegvis prøve å bruke han på andre kontoar for å sjå om du har brukt det same passordet. Endre det på alle stadar du har brukt det for å verne deg sjølv.
leaked-passwords-steps-title = Dette er det du skal gjere
leaked-passwords-steps-subtitle = Dette krev tilgang til kontoen din, så du må fikse det manuelt.
# Variables
# $breach_name is the name of the breach where the leaked password was found.
# $emails_affected are the emails associated with the breach.
leaked-passwords-step-one = Endre passordet ditt for <b>{ $emails_affected }</b> på <link_to_breach_site>{ $breach_name }</link_to_breach_site>.
leaked-passwords-step-two = Endre det på alle stadar du har brukt det.
leaked-passwords-mark-as-fixed = Merk som løyst
leaked-passwords-skip = Hopp over no
# Variables
# $estimated_time is the amount of time it would take for a user to manually resolve a leaked password breach. It will always be a number greater than 1.
# "Est." is shortform for "Estimated".
# "mins" is shortform for "minutes".
leaked-passwords-estimated-time =
    { $estimated_time ->
        [one] Estimert tidsforbruk: { $estimated_time } minutt per nettstad
       *[other] Estimert tidsforbruk: { $estimated_time } minutt per nettstad
    }

# Leaked Security Questions

leaked-security-questions-title = Tryggingsspørsmåla dine vart avslørte
# Variables
# $breach_name is the name of the breach where the leaked security questions were found.
# $breach_date is the date when the breach occurred.
# An example of this string is Twitter on 13/09/18.
leaked-security-questions-summary = Dei førekom i ein datalekkasje på { $breach_name } den { $breach_date }.
leaked-security-questions-description = Svindlarar kan bruke desse for å få tilgang til kontoane dine og alle andre nettstadar der du har brukt dei same tryggingsspørsmåla. Oppdater dei no for å verne kontoane dine.
leaked-security-questions-steps-title = Dette er det du skal gjere
leaked-security-questions-steps-subtitle = Dette krev tilgang til kontoen din, så du må fikse det manuelt.
# Variables
# $breach_name is the name of the breach where the security questions were found.
# $email_affected is the email associated with the breach.
leaked-security-questions-step-one = Oppdater tryggingsspørsmåla dine for <b>{ $email_affected }</b> on <link_to_breach_site>{ $breach_name }</link_to_breach_site>.
leaked-security-questions-step-two = Oppdater dei på alle nettstadar der du brukte dei same tryggingsspørsmåla. Sørg for å bruke ulike tryggingsspørsmål for kvar konto.
