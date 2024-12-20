# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.

fix-flow-nav-high-risk-data-breaches = Datalekken met hoog risico
fix-flow-nav-leaked-passwords = Gelekte wachtwoorden
fix-flow-nav-security-recommendations = Beveiligingsaanbevelingen
guided-resolution-flow-exit = Terug naar dashboard
guided-resolution-flow-next-arrow = Naar volgende stap
guided-resolution-flow-next-arrow-sub-step = Naar het volgende resultaat
guided-resolution-flow-step-navigation-label = Stappen met instructies

# Celebration screens


## Shared CTA labels

fix-flow-celebration-next-label = Laten we doorgaan
fix-flow-celebration-next-recommendations-label = Aanbevelingen bekijken
fix-flow-celebration-next-dashboard-label = Naar uw dashboard

## High-risk flow

fix-flow-celebration-high-risk-title = U hebt uw lekken met een hoog risico verholpen!
fix-flow-celebration-high-risk-description-in-progress = Dit werk doen kan als veel voelen, maar het is belangrijk om uzelf veilig te houden. Ga vooral zo door.
fix-flow-celebration-high-risk-description-done = Dit werk doen kan als veel voelen, maar het is belangrijk om uzelf veilig te houden.
fix-flow-celebration-high-risk-description-next-passwords = Laten we nu uw gelekte wachtwoorden oplossen.
fix-flow-celebration-high-risk-description-next-security-questions = Laten we nu uw gelekte beveiligingsvragen oplossen.
fix-flow-celebration-high-risk-description-next-security-recommendations = Hierna geven we u gepersonaliseerde beveiligingsaanbevelingen op basis van welke van uw gegevens zijn gelekt.
fix-flow-celebration-high-risk-description-next-dashboard = U hebt het einde van uw stappen bereikt. U kunt op uw dashboard eventuele actie-items bekijken en uw voortgang volgen.

## Leaked passwords and security questions flow

fix-flow-celebration-leaked-passwords-title = Uw wachtwoorden zijn nu beschermd!
fix-flow-celebration-security-questions-title = Uw beveiligingsvragen zijn beschermd!
fix-flow-celebration-leaked-passwords-description-next-security-questions = Laten we nu uw gelekte beveiligingsvragen bekijken en bijwerken.
fix-flow-celebration-leaked-passwords-description-next-security-recommendations = Hierna geven we u gepersonaliseerde beveiligingsaanbevelingen op basis van welke van uw gegevens zijn gelekt.
fix-flow-celebration-leaked-passwords-description-next-dashboard = Goed gedaan! U hebt het einde van uw stappen bereikt. U kunt op uw dashboard eventuele actie-items bekijken en uw voortgang volgen.

## Security recommendations flow

fix-flow-celebration-security-recommendations-title = U hebt al uw aanbevelingen voltooid!
fix-flow-celebration-security-recommendations-description-next-dashboard = Goed gedaan! U hebt het einde van uw stappen bereikt. U kunt op uw dashboard eventuele actie-items bekijken en uw voortgang volgen.

# High Risk Data Breaches

high-risk-breach-heading = Dit is wat u kunt doen
high-risk-breach-subheading = Dit vereist toegang tot uw gevoelige gegevens, dus u zult dit handmatig op moeten lossen.
# Variables
# $num_breaches is the number of breaches where the high risk data was found.
high-risk-breach-summary =
    { $num_breaches ->
        [one] Het komt voor in { $num_breaches } datalek:
       *[other] Het komt voor in { $num_breaches } datalekken:
    }
# Variables
# $breach_name is the name of the breach where the high risk data was found.
# $breach_date is the date when the breach occurred.
# An example of this string is Twitter on 13/09/18.
high-risk-breach-name-and-date = { $breach_name } <breach_date>op { $breach_date }</breach_date>
high-risk-breach-mark-as-fixed = Als opgelost markeren
high-risk-breach-skip = Voorlopig overslaan
# Variables:
# $estimated_time is the estimated time it would take for a user to complete breach resolution steps. It not be singular, and the + is meant as "or more".
# An example of this string is Your estimated time: 15+ minutes.
high-risk-breach-estimated-time =
    { $estimated_time ->
        [one] Uw geschatte tijd: meer dan { $estimated_time } minuut
       *[other] Uw geschatte tijd: meer dan { $estimated_time } minuten
    }

# Credit Card Breaches

high-risk-breach-credit-card-title = Uw creditcardnummer is gelekt
high-risk-breach-credit-card-description = Iedereen die het ontvangt, kan ongeautoriseerde aankopen doen waarvoor u mogelijk aansprakelijk bent. Kom nu in actie om financiële schade te voorkomen.
high-risk-breach-credit-card-step-one = Als u deze kaart nog steeds hebt, neem dan contact op met de verstrekker om deze als gestolen op te geven.
high-risk-breach-credit-card-step-two = Vraag een nieuwe kaart met een nieuw nummer aan.
high-risk-breach-credit-card-step-three = Controleer uw rekeningen op ongeautoriseerde afschrijvingen.

# Bank Account Breaches

high-risk-breach-bank-account-title = Uw bankrekening is gelekt
high-risk-breach-bank-account-description = Zo snel mogelijk actie ondernemen kan u meer wettelijke bescherming geven om eventuele verliezen te verhalen.
high-risk-breach-bank-account-step-one = Breng uw bank onmiddellijk op de hoogte dat uw rekeningnummer is gehackt.
high-risk-breach-bank-account-step-two = Wijzig uw rekeningnummer.
high-risk-breach-bank-account-step-three = Controleer uw rekeningen op ongeautoriseerde afschrijvingen.

# Social Security Number Breaches

high-risk-breach-social-security-title = Uw burgerservicenummer is gelekt
high-risk-breach-social-security-description = Oplichters kunnen nieuwe leningen of creditcards afsluiten met uw burgerservicenummer. Reageer snel om financiële schade te voorkomen.
high-risk-breach-social-security-step-one = Bescherm uzelf door <link_to_info>een fraudewaarschuwing in te stellen of uw tegoed te bevriezen.</link_to_info>
high-risk-breach-social-security-step-two = <link_to_info>Controleer uw kredietrapport</link_to_info> op niet-herkende rekeningen.

# Social Security Number Modal

ssn-modal-title = Over fraudewaarschuwingen en tegoedbevriezingen
ssn-modal-description-fraud-part-one = <b>Een fraudewaarschuwing</b> vereist dat bedrijven uw identiteit verifiëren voordat nieuw tegoed op uw naam wordt uitgegeven. Het is gratis, duurt een jaar en heeft geen negatieve invloed op uw kredietscore.
ssn-modal-description-fraud-part-two = Neem hiervoor contact op met een van de drie kredietbureaus. U hoeft niet met alle drie contact op te nemen.
ssn-modal-description-freeze-credit-part-one = <b>Bevriezing van uw tegoed</b> voorkomt dat iemand een nieuwe rekening op uw naam opent. Het is gratis en heeft geen negatieve invloed op uw kredietscore, maar u moet de bevriezing opheffen voordat u nieuwe rekeningen opent.
ssn-modal-description-freeze-credit-part-two = Neem contact op met elk van de drie kredietbureaus om uw tegoed te bevriezen – <equifax_link>Equifax</equifax_link>, <experian_link>Experian</experian_link> en <transunion_link>TransUnion</transunion_link>.
ssn-modal-learn-more = Meer info over fraudewaarschuwingen en tegoedbevriezingen
ssn-modal-ok = OK

# PIN Breaches

high-risk-breach-pin-title = Uw pincode is gelekt
high-risk-breach-pin-description = Zo snel mogelijk actie ondernemen kan u meer wettelijke bescherming geven om eventuele verliezen te verhalen.
high-risk-breach-pin-step-one = Breng uw bank onmiddellijk op de hoogte dat uw pincode is gelekt.
high-risk-breach-pin-step-two = Wijzig uw pincode overal waar u dezelfde hebt gebruikt.
high-risk-breach-pin-step-three = Controleer uw rekeningen op ongeautoriseerde afschrijvingen.

# No high risk breaches found

high-risk-breach-none-title = Geweldig nieuws, we hebben geen datalekken met hoog risico gevonden
# Variables
# $email_list is list of emails that the user is monitoring for breaches. E.g. john@yahoo.com, ali@gmail.com, sam@hotmail.com
high-risk-breach-none-description = We detecteren datalekken op basis van uw e-mailadres, en we hebben geen datalekken met hoog risico gevonden voor { $email_list }.
high-risk-breach-none-sub-description-part-one = Datalekken met een hoog risico zijn onder meer:
high-risk-breach-none-sub-description-ssn = Burgerservicenummer
high-risk-breach-none-sub-description-bank-account = Bankrekeninggegevens
high-risk-breach-none-sub-description-cc-number = Creditcardnummers
high-risk-breach-none-sub-description-pin = Pincodes
high-risk-breach-none-continue = Doorgaan

# Security recommendations

security-recommendation-steps-label = Beveiligingsaanbevelingen
security-recommendation-steps-title = Dit is ons advies:
security-recommendation-steps-cta-label = Begrepen!

# Phone security recommendation

security-recommendation-phone-title = Bescherm uw telefoonnummer
# $num_breaches is the number of breaches where the phone number was found.
security-recommendation-phone-summary =
    { $num_breaches ->
        [one] Uw telefoonnummer is gelekt bij { $num_breaches } datalek:
       *[other] Uw telefoonnummer is gelekt bij { $num_breaches } datalekken:
    }
security-recommendation-phone-description = Helaas kunt u het niet terugnemen. Maar er zijn stappen die u kunt nemen om ervoor te zorgen dat u veilig blijft.
security-recommendation-phone-step-one = Blokkeer spamnummers om meer ongewenste oproepen te voorkomen
security-recommendation-phone-step-two = Klik niet op koppelingen in sms’jes van onbekende afzenders; als het van een vertrouwde bron lijkt, bel dan rechtstreeks voor bevestiging

# Email security recommendation

security-recommendation-email-title = Bescherm uw e-mailadres
# $num_breaches is the number of breaches where the email address was found.
security-recommendation-email-summary =
    { $num_breaches ->
        [one] Uw e-mailadres is gelekt bij { $num_breaches } datalek:
       *[other] Uw e-mailadres is gelekt bij { $num_breaches } datalekken:
    }
security-recommendation-email-description = Helaas kunt u dit niet oplossen. Maar er zijn stappen die u kunt nemen om uzelf te beschermen.
security-recommendation-email-step-one = Klik niet op koppelingen in e-mailberichten van onbekende afzenders; als dit van een vertrouwde bron lijkt, bel dan rechtstreeks voor bevestiging
security-recommendation-email-step-two = Pas op voor <link_to_info>phishingscams</link_to_info>
security-recommendation-email-step-three = Markeer verdachte e-mailberichten als spam en blokkeer de afzender
security-recommendation-email-step-four = Gebruik <link_to_info>{ -brand-relay }-e-mailmaskers</link_to_info> om uw e-mailadres in de toekomst te beschermen

# IP security recommendation

security-recommendation-ip-title = Gebruik een VPN voor extra privacy
# $num_breaches is the number of breaches where the IP address was found.
security-recommendation-ip-summary =
    { $num_breaches ->
        [one] Uw IP-adres is gelekt bij { $num_breaches } datalek:
       *[other] Uw IP-adres is gelekt bij { $num_breaches } datalekken:
    }
security-recommendation-ip-description = Uw IP-adres geeft uw locatie en internetprovider aan. Hackers kunnen deze informatie gebruiken om uw locatie te vinden of te proberen verbinding te maken met uw apparaten.
security-recommendation-ip-step-one = Gebruik een VPN (zoals <link_to_info>{ -brand-mozilla-vpn }</link_to_info>) om uw echte IP-adres te verbergen en internet privé te gebruiken.

# Leaked Passwords

# Variables
# $breach_name is the name of the breach where the leaked password was found.
leaked-passwords-title = Uw wachtwoord van { $breach_name } is gelekt
# Variables
# $breach_date is the date when the breach occurred.
leaked-passwords-summary = Dit is op { $breach_date } verschenen in een datalek.
leaked-passwords-description = Oplichters kunnen toegang krijgen tot uw account en zullen het waarschijnlijk proberen te gebruiken voor andere accounts om te zien of u hetzelfde wachtwoord hebt gebruikt. Wijzig het overal waar u het hebt gebruikt om uzelf te beschermen.
leaked-passwords-steps-title = Dit is wat u kunt doen
leaked-passwords-steps-subtitle = Dit vereist toegang tot uw account, dus u moet dit handmatig oplossen.
# Variables
# $breach_name is the name of the breach where the leaked password was found.
# $emails_affected are the emails associated with the breach.
leaked-passwords-step-one = Wijzig uw wachtwoord voor <b>{ $emails_affected }</b> op <link_to_breach_site>{ $breach_name }</link_to_breach_site>.
leaked-passwords-step-two = Wijzig het overal waar u het hebt gebruikt.
leaked-passwords-mark-as-fixed = Als opgelost markeren
leaked-passwords-skip = Voorlopig overslaan
# Variables
# $estimated_time is the amount of time it would take for a user to manually resolve a leaked password breach. It will always be a number greater than 1.
# "Est." is shortform for "Estimated".
# "mins" is shortform for "minutes".
leaked-passwords-estimated-time =
    { $estimated_time ->
        [one] Geschatte tijd voor voltooien: { $estimated_time } minuut per website
       *[other] Geschatte tijd voor voltooien: { $estimated_time } minuten per website
    }

# Leaked Security Questions

leaked-security-questions-title = Uw beveiligingsvragen zijn gelekt
# Variables
# $breach_name is the name of the breach where the leaked security questions were found.
# $breach_date is the date when the breach occurred.
# An example of this string is Twitter on 13/09/18.
leaked-security-questions-summary = Ze zijn verschenen in een datalek op { $breach_name } op { $breach_date }.
leaked-security-questions-description = Oplichters kunnen deze gebruiken om toegang te krijgen tot uw accounts en andere websites waar u dezelfde beveiligingsvragen hebt gesteld. Werk ze nu bij om uw accounts te beschermen.
leaked-security-questions-steps-title = Dit is wat u kunt doen
leaked-security-questions-steps-subtitle = Dit vereist toegang tot uw account, dus u moet dit handmatig oplossen.
# Variables
# $breach_name is the name of the breach where the security questions were found.
# $email_affected is the email associated with the breach.
leaked-security-questions-step-one = Werk uw beveiligingsvragen voor <b>{ $email_affected }</b> bij op <link_to_breach_site>{ $breach_name }</link_to_breach_site>.
leaked-security-questions-step-two = Werk ze bij op andere websites waar u dezelfde beveiligingsvragen hebt gesteld. Zorg ervoor dat u voor elke account andere beveiligingsvragen gebruikt.
