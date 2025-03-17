# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.

fix-flow-nav-high-risk-data-breaches = Datalæk med høj risiko
fix-flow-nav-leaked-passwords = Lækkede adgangskoder
fix-flow-nav-security-recommendations = Sikkerhedsanbefalinger
guided-resolution-flow-exit = Tilbage til oversigten
guided-resolution-flow-next-arrow = Gå til næste trin
guided-resolution-flow-next-arrow-sub-step = Gå til næste resultat
guided-resolution-flow-step-navigation-label = Trin i vejledningen

# Celebration screens


## Shared CTA labels

fix-flow-celebration-next-label = Lad os fortsætte
fix-flow-celebration-next-recommendations-label = Se anbefalinger
fix-flow-celebration-next-dashboard-label = Gå til din oversigt

## High-risk flow

fix-flow-celebration-high-risk-title = Du har løst dine eksponeringer med høj risiko!
fix-flow-celebration-high-risk-description-in-progress = Det her virker måske som meget arbejde - men for din sikkerheds skyld er det vigtigt, at du gør det. Fortsæt endelig på samme måde!
fix-flow-celebration-high-risk-description-done = Det her virker måske som meget arbejde - men for din sikkerheds skyld er det vigtigt, at du gør det.
fix-flow-celebration-high-risk-description-next-passwords = Lad os nu få styr på dine eksponerede adgangskoder.
fix-flow-celebration-high-risk-description-next-security-questions = Lad os nu få styr på dine eksponerede sikkerhedsspørgsmål.
fix-flow-celebration-high-risk-description-next-security-recommendations = Næste skridt er, at vi giver dig nogle sikkerhedsanbefalinger baseret på, hvilke af dine data, som er blevet eksponeret.
fix-flow-celebration-high-risk-description-next-dashboard = Du har gennemført det sidste trin. Du kan se eventuelle påkrævede handlinger samt dit fremskridt på oversigtssiden.

## Leaked passwords and security questions flow

fix-flow-celebration-leaked-passwords-title = Dine adgangskoder er nu beskyttet!
fix-flow-celebration-security-questions-title = Dine sikkerhedsspørgsmål er beskyttet!
fix-flow-celebration-leaked-passwords-description-next-security-questions = Lad os nu gennemgå og opdatere dine eksponerede sikkerhedsspørgsmål.
fix-flow-celebration-leaked-passwords-description-next-security-recommendations = Næste skridt er, at vi giver dig nogle sikkerhedsanbefalinger baseret på, hvilke af dine data, som er blevet eksponeret.
fix-flow-celebration-leaked-passwords-description-next-dashboard = Godt gået! Du har gennemført det sidste trin. Du kan se eventuelle påkrævede handlinger samt dit fremskridt på oversigtssiden.

## Security recommendations flow

fix-flow-celebration-security-recommendations-title = Du har gennemført alle dine anbefalinger!
fix-flow-celebration-security-recommendations-description-next-dashboard = Godt gået! Du har gennemført det sidste trin. Du kan se eventuelle påkrævede handlinger samt dit fremskridt på oversigtssiden.

# High Risk Data Breaches

high-risk-breach-heading = Du skal gøre sådan her
high-risk-breach-subheading = Dette kræver adgang til dine følsomme data, så du er nødt til at løse problemet manuelt.
# Variables
# $num_breaches is the number of breaches where the high risk data was found.
high-risk-breach-summary =
    { $num_breaches ->
        [one] De optrådte i { $num_breaches } datalæk:
       *[other] De optrådte i { $num_breaches } datalæk:
    }
# Variables
# $breach_name is the name of the breach where the high risk data was found.
# $breach_date is the date when the breach occurred.
# An example of this string is Twitter on 13/09/18.
high-risk-breach-name-and-date = { $breach_name } <breach_date>den { $breach_date }</breach_date>
high-risk-breach-mark-as-fixed = Marker som løst
high-risk-breach-skip = Hop over indtil videre
# Variables:
# $estimated_time is the estimated time it would take for a user to complete breach resolution steps. It not be singular, and the + is meant as "or more".
# An example of this string is Your estimated time: 15+ minutes.
high-risk-breach-estimated-time =
    { $estimated_time ->
        [one] Beregnet tidsforbrug: { $estimated_time } minut eller mere
       *[other] Beregnet tidsforbrug: { $estimated_time } minutter eller mere
    }

# Credit Card Breaches

high-risk-breach-credit-card-title = Dit betalingskort-nummer er blevet eksponeret
high-risk-breach-credit-card-description = Alle, som kan få adgang til det, kan udføre uautoriserede køb, som du kan blive ansvarlig for. Handl nu for at undgå økonomiske problemer.
high-risk-breach-credit-card-step-one = Hvis du stadig har kortet, så kontakt udstederen for at anmelde, at det er blevet stjålet.
high-risk-breach-credit-card-step-two = Anmod om et kort med et nyt nummer.
high-risk-breach-credit-card-step-three = Undersøg om dine kontoudtog indeholder uautoriserede transaktioner.

# Bank Account Breaches

high-risk-breach-bank-account-title = Din bankkonto er blevet eksponeret
high-risk-breach-bank-account-description = Ved at handle hurtigt kan du være bedre beskyttet juridisk og få hjælp til at få eventuelle tabte penge tilbage.
high-risk-breach-bank-account-step-one = Giv straks din bank besked om, at dit kontonummer er blevet kompromitteret.
high-risk-breach-bank-account-step-two = Skift dit kontonummer.
high-risk-breach-bank-account-step-three = Undersøg om dine kontoudtog indeholder uautoriserede transaktioner.

# Social Security Number Breaches

high-risk-breach-social-security-title = Dit personnummer er blevet eksponeret
high-risk-breach-social-security-description = Svindlere kan bruge dit personnummer til at optage nye lån eller bestille kreditkort med dit personnummer. Gør noget i en fart for at undgå økonomiske problemer.
high-risk-breach-social-security-step-one = Beskyt dig selv ved at <link_to_info>sætte advarsler om svindel op eller fryse din kredit.</link_to_info>
high-risk-breach-social-security-step-two = <link_to_info>Undersøg din kredit-rapport</link_to_info> for ukendte konti.

# Social Security Number Modal

ssn-modal-title = Om advarsler om svindel og frysning af kredit
ssn-modal-description-fraud-part-one = <b>En advarsel om svindel</b> kræver, at virksomheder bekræfter din identitet, før de udsteder nye kreditter i dit navn. Det er gratis, gælder i et år og påvirker ikke dine kredit-score negativt.
ssn-modal-description-fraud-part-two = Kontakt ét af de tre kredit-bureauer for at sætte en advarsel op. Du behøver ikke kontakte alle tre.
ssn-modal-description-freeze-credit-part-one = <b>At fryse din kredit</b> forhindrer, at nogen kan åbne nye konti i dit navn. Det er gratis og påvirker ikke din kredit-score, men du skal omgøre handlingen for at kunne åbne nye konti.
ssn-modal-description-freeze-credit-part-two = For at fryse din kredit skal du kontakte ét af kredit-bureauerne, <equifax_link>Equifax</equifax_link>, <experian_link>Experian</experian_link> eller <transunion_link>TransUnion</transunion_link>.
ssn-modal-learn-more = Læs mere om advarsel om svindel og frysning af kredit
ssn-modal-ok = OK

# PIN Breaches

high-risk-breach-pin-title = Din pinkode er blevet eksponeret
high-risk-breach-pin-description = Ved at handle hurtigt kan du være bedre beskyttet juridisk og få hjælp til at få eventuelle tabte penge tilbage.
high-risk-breach-pin-step-one = Giv straks din bank besked om, at din pinkode er blevet kompromitteret.
high-risk-breach-pin-step-two = Skift din pinkode alle steder, du bruger den.
high-risk-breach-pin-step-three = Undersøg om dine kontoudtog indeholder uautoriserede transaktioner.

# No high risk breaches found

high-risk-breach-none-title = Gode nyheder: Vi fandt ingen datalæk med høj risiko
# Variables
# $email_list is list of emails that the user is monitoring for breaches. E.g. john@yahoo.com, ali@gmail.com, sam@hotmail.com
high-risk-breach-none-description = Vi opdager datalæk med udgangspunkt i din mailadresse, og vi fandt ingen datalæk med høj risiko for { $email_list }.
high-risk-breach-none-sub-description-part-one = Datalæk med høj risiko inkluderer:
high-risk-breach-none-sub-description-ssn = Personnummer
high-risk-breach-none-sub-description-bank-account = Oplysninger om bankkonti
high-risk-breach-none-sub-description-cc-number = Betalingskort-numre
high-risk-breach-none-sub-description-pin = Pinkoder
high-risk-breach-none-continue = Fortsæt

# Security recommendations

security-recommendation-steps-label = Sikkerhedsanbefalinger
security-recommendation-steps-title = Her er vores råd:
security-recommendation-steps-cta-label = Forstået!

# Phone security recommendation

security-recommendation-phone-title = Beskyt dit telefonnummer
# $num_breaches is the number of breaches where the phone number was found.
security-recommendation-phone-summary =
    { $num_breaches ->
        [one] Dit telefonnummer er blevet eksponeret i { $num_breaches } datalæk:
       *[other] Dit telefonnummer er blevet eksponeret i { $num_breaches } datalæk:
    }
security-recommendation-phone-description = Når dit telefonnummer først er eksponeret, bliver det desværre ved med at være det. Der er dog stadig ting, du kan gøre for at beskytte dig selv.
security-recommendation-phone-step-one = Bloker spam-numre for at undgå uønskede opkald
security-recommendation-phone-step-two = Klik aldrig på links i SMS-beskeder fra afsendere, du ikke kender. Hvis en SMS ser ud til at være fra en troværdig afsender, så ring til dem for at få det bekræftet

# Email security recommendation

security-recommendation-email-title = Beskyt din mailadresse
# $num_breaches is the number of breaches where the email address was found.
security-recommendation-email-summary =
    { $num_breaches ->
        [one] Din mailadresse er blevet eksponeret i { $num_breaches } datalæk:
       *[other] Din mailadresse er blevet eksponeret i { $num_breaches } datalæk:
    }
security-recommendation-email-description = Du kan desværre ikke gøre noget for at løse problemet. Men der findes ting, du kan gøre for at beskytte dig selv.
security-recommendation-email-step-one = Klik aldrig på links i mails fra afsendere, du ikke kender. Hvis mailen ser ud til at komme fra en troværdig kilde, så ring til dem for at få det bekræftet
security-recommendation-email-step-two = Vær opmærksom på <link_to_info>forsøg på phishing</link_to_info>
security-recommendation-email-step-three = Markér mistænkelige mails som spam og bloker afsenderen
security-recommendation-email-step-four = Brug <link_to_info>mail-masker med { -brand-relay }</link_to_info> for at beskytte din mailadresse i fremtiden

# IP security recommendation

security-recommendation-ip-title = Brug en VPN for bedre beskyttelse af dit privatliv
# $num_breaches is the number of breaches where the IP address was found.
security-recommendation-ip-summary =
    { $num_breaches ->
        [one] Din IP-adresse er blevet eksponeret i { $num_breaches } datalæk:
       *[other] Din IP-adresse er blevet eksponeret i { $num_breaches } datalæk:
    }
security-recommendation-ip-description = Din IP-adresse fastslår din placering og din internetudbyder. Hackere kan bruge disse oplysninger til at finde frem til din placering eller forsøge at oprette forbindelse til dine enheder.
security-recommendation-ip-step-one = Brug en VPN (som fx <link_to_info>{ -brand-mozilla-vpn }</link_to_info>) til at skjule din rigtige IP-adresse og beskytte dit privatliv på nettet.

# Leaked Passwords

# Variables
# $breach_name is the name of the breach where the leaked password was found.
leaked-passwords-title = Din adgangskode til { $breach_name } er blevet eksponeret
# Variables
# $breach_date is the date when the breach occurred.
leaked-passwords-summary = Den optrådte i en datalæk den { $breach_date }.
leaked-passwords-description = Svindlere kan få adgang til din konto - og vil sandsynligvis se, om du har brugte samme adgangskode til andre konti. Beskyt dig selv ved at skifte adgangskoden alle de steder, du har brugt den.
leaked-passwords-steps-title = Du skal gøre sådan her
leaked-passwords-steps-subtitle = Dette kræver adgang til din konto, så du er nødt til at løse problemet manuelt.
# Variables
# $breach_name is the name of the breach where the leaked password was found.
# $emails_affected are the emails associated with the breach.
leaked-passwords-step-one = Skift din adgangskode til <b>{ $emails_affected }</b> på <link_to_breach_site>{ $breach_name }</link_to_breach_site>.
leaked-passwords-step-two = Skift adgangskoden alle de steder, du har brugt den.
leaked-passwords-mark-as-fixed = Marker som løst
leaked-passwords-skip = Hop over indtil videre
# Variables
# $estimated_time is the amount of time it would take for a user to manually resolve a leaked password breach. It will always be a number greater than 1.
# "Est." is shortform for "Estimated".
# "mins" is shortform for "minutes".
leaked-passwords-estimated-time =
    { $estimated_time ->
        [one] Estimeret tidsforbrug: { $estimated_time } minut per websted
       *[other] Estimeret tidsforbrug: { $estimated_time } minutter per websted
    }

# Leaked Security Questions

leaked-security-questions-title = Dine sikkerhedsspørgsmål er blevet eksponeret
# Variables
# $breach_name is the name of the breach where the leaked security questions were found.
# $breach_date is the date when the breach occurred.
# An example of this string is Twitter on 13/09/18.
leaked-security-questions-summary = De optrådte i en datalæk for { $breach_name } den { $breach_date }.
leaked-security-questions-description = Svindlere kan bruge svarene på dine sikkerhedsspørgsmål få adgang til dine konti - og alle andre websteder, hvor du har brugt samme svar. Beskyt dig selv ved at opdatere dine svar på sikkerhedsspørgsmålene alle de steder, du har brugt dem.
leaked-security-questions-steps-title = Du skal gøre sådan her
leaked-security-questions-steps-subtitle = Dette kræver adgang til din konto, så du er nødt til at løse problemet manuelt.
# Variables
# $breach_name is the name of the breach where the security questions were found.
# $email_affected is the email associated with the breach.
leaked-security-questions-step-one = Opdater dine sikkerhedsspørgsmål for <b>{ $email_affected }</b> på <link_to_breach_site>{ $breach_name }</link_to_breach_site>.
leaked-security-questions-step-two = Opdater sikkerhedsspørgsmålene på alle websteder, du har brugt dem. Sørg for at bruge forskellige sikkerhedsspørgsmål for hver konto.
