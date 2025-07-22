# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.

fix-flow-nav-high-risk-data-breaches = Datalekkasje med høy risiko
fix-flow-nav-leaked-passwords = Lekkede passord
fix-flow-nav-security-recommendations = Sikkerhetsanbefalinger
guided-resolution-flow-exit = Gå tilbake til oversikten
guided-resolution-flow-next-arrow = Gå til neste trinn
guided-resolution-flow-next-arrow-sub-step = Gå til neste resultat
guided-resolution-flow-step-navigation-label = Trin i veiledningen

# Celebration screens


## Shared CTA labels

fix-flow-celebration-next-label = La oss fortsette
fix-flow-celebration-next-recommendations-label = Se anbefalinger
fix-flow-celebration-next-dashboard-label = Gå til din oversikt

## High-risk flow

fix-flow-celebration-high-risk-title = Du har løst dine høyrisikoeksponeringer!
fix-flow-celebration-high-risk-description-in-progress = Det kan føles overveldende å gjøre dette arbeidet, men det er viktig for å beskytte deg selv. Fortsett med det gode arbeidet.
fix-flow-celebration-high-risk-description-done = Det kan føles overveldende å gjøre dette arbeidet, men det er viktig for å beskytte deg selv.
fix-flow-celebration-high-risk-description-next-passwords = La oss nå fikse de eksponerte passordene dine.
fix-flow-celebration-high-risk-description-next-security-questions = La oss nå fikse de eksponerte sikkerhetsspørsmålene dine.
fix-flow-celebration-high-risk-description-next-security-recommendations = Deretter gir vi deg personlige sikkerhetsanbefalinger basert på hvilke data som har blitt eksponert.
fix-flow-celebration-high-risk-description-next-dashboard = Du har nådd slutten av trinnene dine. Du kan se eventuelle handlingspunkter og spore fremdriften din på oversikten.

## Leaked passwords and security questions flow

fix-flow-celebration-leaked-passwords-title = Passordene dine er nå beskyttet!
fix-flow-celebration-security-questions-title = Sikkerhetsspørsmålene dine er beskyttet!
fix-flow-celebration-leaked-passwords-description-next-security-questions = La oss nå gjennomgå og oppdatere de eksponerte sikkerhetsspørsmålene dine.
fix-flow-celebration-leaked-passwords-description-next-security-recommendations = Deretter gir vi deg personlige sikkerhetsanbefalinger basert på hvilke data som har blitt eksponert.
fix-flow-celebration-leaked-passwords-description-next-dashboard = Bra gjort! Du har nådd slutten av trinnene dine. Du kan se eventuelle handlingspunkter og spore fremdriften din på oversikten.

## Security recommendations flow

fix-flow-celebration-security-recommendations-title = Du har fullført alle anbefalingene dine!
fix-flow-celebration-security-recommendations-description-next-dashboard = Bra gjort! Du har nådd slutten av trinnene dine. Du kan se eventuelle handlingspunkter og spore fremdriften din på oversikten.

# High Risk Data Breaches

high-risk-breach-heading = Her er hva du bør gjøre
high-risk-breach-subheading = Dette krever tilgang til sensitiv informasjon, så du må fikse det manuelt.
# Variables
# $num_breaches is the number of breaches where the high risk data was found.
high-risk-breach-summary =
    { $num_breaches ->
        [one] Det dukket opp i { $num_breaches } datalekkasje:
       *[other] Det dukket opp i { $num_breaches } datalekkasjer:
    }
# Variables
# $breach_name is the name of the breach where the high risk data was found.
# $breach_date is the date when the breach occurred.
# An example of this string is Twitter on 13/09/18.
high-risk-breach-name-and-date = { $breach_name } <breach_date>den { $breach_date }</breach_date>
high-risk-breach-mark-as-fixed = Merk som løst
high-risk-breach-skip = Hopp over nå
# Variables:
# $estimated_time is the estimated time it would take for a user to complete breach resolution steps. It not be singular, and the + is meant as "or more".
# An example of this string is Your estimated time: 15+ minutes.
high-risk-breach-estimated-time =
    { $estimated_time ->
       *[other] Estimert tidsbruk: { $estimated_time } minutt eller mer
    }

# Credit Card Breaches

high-risk-breach-credit-card-title = Betalingskortnummeret ditt er eksponert
high-risk-breach-credit-card-description = Alle som får tak i det, kan foreta uautoriserte kjøp som du kan bli holdt ansvarlig for. Sett i verk tiltak nå for å unngå økonomisk skade.
high-risk-breach-credit-card-step-one = Hvis du fortsatt har dette kortet, kontakt utstederen for å rapportere det som stjålet.
high-risk-breach-credit-card-step-two = Be om et nytt kort med et nytt nummer.
high-risk-breach-credit-card-step-three = Sjekk kontoene dine for uautoriserte belastninger.

# Bank Account Breaches

high-risk-breach-bank-account-title = Bankkontoen din ble eksponert
high-risk-breach-bank-account-description = Å iverksette tiltak så snart som mulig kan gi deg mer juridisk beskyttelse for å hjelpe deg med å dekke eventuelle tap.
high-risk-breach-bank-account-step-one = Varsle banken din umiddelbart om at kontonummeret ditt er blitt kompromittert.
high-risk-breach-bank-account-step-two = Endre kontonummeret ditt.
high-risk-breach-bank-account-step-three = Sjekk kontoene dine for uautoriserte belastninger.

# Social Security Number Breaches

high-risk-breach-social-security-title = Personnummeret ditt ble eksponert
high-risk-breach-social-security-description = Svindlere kan opprette nye lån eller kredittkort med personnummeret ditt. Sett i verk tiltak raskt for å unngå økonomisk skade.
high-risk-breach-social-security-step-one = Beskytt deg selv ved å <link_to_info>opprette et svindelvarsel eller fryse kreditten din.</link_to_info>
high-risk-breach-social-security-step-two = <link_to_info>Sjekk kredittrapporten din</link_to_info> for ukjente kontoer.

# Social Security Number Modal

ssn-modal-title = Om svindelvarsler og kredittfrysing
ssn-modal-description-fraud-part-one = <b>Et svindelvarsel</b> krever at bedrifter bekrefter identiteten din før de utsteder ny kreditt i ditt navn. Det er gratis, varer i ett år og vil ikke påvirke kredittscoren din negativt.
ssn-modal-description-fraud-part-two = For å opprette en, kontakt et av de tre kredittbyråene. Du trenger ikke å kontakte alle tre.
ssn-modal-description-freeze-credit-part-one = <b>Å fryse kreditten din</b> hindrer noen i å åpne en ny konto i ditt navn. Det er gratis og vil ikke påvirke kredittscoren din negativt, men du må frigjøre den før du åpner nye kontoer.
ssn-modal-description-freeze-credit-part-two = For å fryse kreditten din, kontakt hvert av de tre kredittbyråene – <equifax_link>Equifax</equifax_link>, <experian_link>Experian</experian_link> og <transunion_link>TransUnion</transunion_link>.
ssn-modal-learn-more = Les mer om svindelvarsler og kredittfrysing
ssn-modal-ok = OK

# PIN Breaches

high-risk-breach-pin-title = PIN-koden din ble eksponert
high-risk-breach-pin-description = Å iverksette tiltak så snart som mulig kan gi deg mer juridisk beskyttelse for å hjelpe deg med å dekke eventuelle tap.
high-risk-breach-pin-step-one = Varsle banken din umiddelbart hvis PIN-koden din er kompromittert.
high-risk-breach-pin-step-two = Endre PIN-koden din overalt der du har brukt den samme.
high-risk-breach-pin-step-three = Sjekk kontoene dine for uautoriserte belastninger.

# No high risk breaches found

high-risk-breach-none-title = Gode nyheter: Vi fant ingen datalekkasjer med høy risiko
# Variables
# $email_list is list of emails that the user is monitoring for breaches. E.g. john@yahoo.com, ali@gmail.com, sam@hotmail.com
high-risk-breach-none-description = Vi oppdager datalekkasjer basert på e-postadressen din, og vi fant ingen datalekkasjer med høy risiko for { $email_list }.
high-risk-breach-none-sub-description-part-one = Datalekkasje med høy risiko inkluderer:
high-risk-breach-none-sub-description-ssn = Personnummer
high-risk-breach-none-sub-description-bank-account = Bankkontoinformasjon
high-risk-breach-none-sub-description-cc-number = Betalingskort-numre
high-risk-breach-none-sub-description-pin = PIN-koder
high-risk-breach-none-continue = Fortsett

# Security recommendations

security-recommendation-steps-label = Sikkerhetsanbefalinger
security-recommendation-steps-title = Her er våre råd:
security-recommendation-steps-cta-label = Jeg forstår!

# Phone security recommendation

security-recommendation-phone-title = Beskytt telefonnummeret ditt
# $num_breaches is the number of breaches where the phone number was found.
security-recommendation-phone-summary =
    { $num_breaches ->
        [one] Telefonnummeret ditt ble eksponert i { $num_breaches } datalekkasje:
       *[other] Telefonnummeret ditt ble eksponert i { $num_breaches } datalekkasjer:
    }
security-recommendation-phone-description = Dessverre kan du ikke ta den tilbake. Men det finnes tiltak du kan ta for å sørge for at du holder deg trygg.
security-recommendation-phone-step-one = Blokker spamnumre for å forhindre flere uønskede anrop
security-recommendation-phone-step-two = Ikke klikk på lenker i tekstmeldinger fra ukjente avsendere. Hvis det ser ut til å være fra en pålitelig kilde, ring direkte for å bekrefte.

# Email security recommendation

security-recommendation-email-title = Beskytt e-postadressen din
# $num_breaches is the number of breaches where the email address was found.
security-recommendation-email-summary =
    { $num_breaches ->
        [one] E-postadressen din ble eksponert i { $num_breaches } datalekkasje:
       *[other] E-postadressen din ble eksponert i { $num_breaches } datalekkasjer:
    }
security-recommendation-email-description = Dessverre kan du ikke fikse dette. Men det finnes tiltak du kan ta for å beskytte deg selv.
security-recommendation-email-step-one = Ikke klikk på lenker i e-poster fra ukjente avsendere. Hvis det ser ut til å være fra en pålitelig kilde, ring direkte for å bekrefte.
security-recommendation-email-step-two = Vær oppmerksom på <link_to_info>nettfiskesvindel (phising)</link_to_info>
security-recommendation-email-step-three = Merk mistenkelige e-poster som spam og blokker avsenderen
security-recommendation-email-step-four = Bruk <link_to_info>{ -brand-relay } e-postalias</link_to_info> for å beskytte e-postadressen din i fremtiden

# IP security recommendation

security-recommendation-ip-title = Bruk en VPN for ekstra personvern
# $num_breaches is the number of breaches where the IP address was found.
security-recommendation-ip-summary =
    { $num_breaches ->
        [one] IP-adressen din ble eksponert i { $num_breaches } datalekkasje:
       *[other] IP-adressen din ble eksponert i { $num_breaches } datalekkasjer:
    }
security-recommendation-ip-description = IP-adressen din angir hvor du befinner deg og hvilken internettleverandør du har. Hackere kan bruke denne informasjonen til å finne hvor du befinner deg eller prøve å koble til enhetene dine.
security-recommendation-ip-step-one = Bruk en VPN (som <link_to_info>{ -brand-mozilla-vpn }</link_to_info>) for å skjule din virkelige IP-adresse og bruke internett privat.

# Leaked Passwords

# Variables
# $breach_name is the name of the breach where the leaked password was found.
leaked-passwords-title = Passordet ditt for { $breach_name } ble eksponert
# Variables
# $breach_date is the date when the breach occurred.
leaked-passwords-summary = Det dukket opp i en datalekkajse den { $breach_date }.
leaked-passwords-description = Svindlere kan få tilgang til kontoen din og vil sannsynligvis prøve å bruke den på andre kontoer for å se om du har brukt det samme passordet. Endre det der du har brukt det for å beskytte deg selv.
leaked-passwords-steps-title = Her er hva du bør gjøre
leaked-passwords-steps-subtitle = Dette krever tilgang til kontoen din, så du må fikse det manuelt.
# Variables
# $breach_name is the name of the breach where the leaked password was found.
# $emails_affected are the emails associated with the breach.
leaked-passwords-step-one = Endre passordet ditt for <b>{ $emails_affected }</b> på <link_to_breach_site>{ $breach_name }</link_to_breach_site>.
leaked-passwords-step-two = Endre det på alle steder du har brukt det.
leaked-passwords-mark-as-fixed = Merk som løst
leaked-passwords-skip = Hopp over for nå
# Variables
# $estimated_time is the amount of time it would take for a user to manually resolve a leaked password breach. It will always be a number greater than 1.
# "Est." is shortform for "Estimated".
# "mins" is shortform for "minutes".
leaked-passwords-estimated-time =
    { $estimated_time ->
       *[other] Estimert tidsforbruk: { $estimated_time } minutt per nettsted
    }

# Leaked Security Questions

leaked-security-questions-title = Sikkerhetsspørsmålene dine ble eksponert
# Variables
# $breach_name is the name of the breach where the leaked security questions were found.
# $breach_date is the date when the breach occurred.
# An example of this string is Twitter on 13/09/18.
leaked-security-questions-summary = De dukket opp i en datalekkasje på { $breach_name } den { $breach_date }.
leaked-security-questions-description = Svindlere kan bruke disse for å få tilgang til kontoene dine og andre nettsteder der du har brukt de samme sikkerhetsspørsmålene. Oppdater dem nå for å beskytte kontoene dine.
leaked-security-questions-steps-title = Her er hva du bør gjøre
leaked-security-questions-steps-subtitle = Dette krever tilgang til kontoen din, så du må fikse det manuelt.
# Variables
# $breach_name is the name of the breach where the security questions were found.
# $email_affected is the email associated with the breach.
leaked-security-questions-step-one = Oppdater sikkerhetsspørsmålene dine for <b>{ $email_affected }</b> på <link_to_breach_site>{ $breach_name }</link_to_breach_site>.
leaked-security-questions-step-two = Oppdater dem på andre nettsteder der du brukte de samme sikkerhetsspørsmålene. Sørg for å bruke forskjellige sikkerhetsspørsmål for hver konto.
