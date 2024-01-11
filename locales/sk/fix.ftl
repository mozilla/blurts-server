# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.

fix-flow-nav-high-risk-data-breaches = Vysoko rizikové úniky údajov
fix-flow-nav-leaked-passwords = Uniknuté heslá
fix-flow-nav-security-recommendations = Bezpečnostné odporúčania
guided-resolution-flow-exit = Návrat na nástenku
guided-resolution-flow-back-arrow = Prejsť na predchádzajúci krok
guided-resolution-flow-next-arrow = Prejsť na nasledujúci krok
guided-resolution-flow-step-navigation-label = Kroky sprievodcu

# Celebration screens


## Shared CTA labels

fix-flow-celebration-next-recommendations-label = Pozrite si odporúčania
fix-flow-celebration-next-dashboard-label = Prejsť na moju Nástenku

## High-risk flow

fix-flow-celebration-high-risk-title = Vyriešili ste svoje vysoko rizikové úniky!
fix-flow-celebration-high-risk-description-next-passwords = Teraz poďme vyriešiť vaše odhalené heslá.
fix-flow-celebration-high-risk-description-next-security-questions = Teraz poďme vyriešiť vaše odhalené bezpečnostné otázky.

## Leaked passwords and security questions flow

fix-flow-celebration-leaked-passwords-title = Vaše heslá sú teraz chránené!
fix-flow-celebration-security-questions-title = Vaše bezpečnostné otázky sú chránené!

## Security recommendations flow

fix-flow-celebration-security-recommendations-title = Dokončili ste všetky naše odporúčania!

# High Risk Data Breaches

high-risk-breach-heading = Tu je to, čo je potrebné urobiť
high-risk-breach-subheading = Vyžaduje si to prístup k vašim citlivým informáciám, takže ich budete musieť vyriešiť manuálne.
# Variables
# $breach_name is the name of the breach where the high risk data was found.
# $breach_date is the date when the breach occurred.
# An example of this string is Twitter on 13/09/18.
high-risk-breach-name-and-date = { $breach_name } <breach_date>dňa { $breach_date }</breach_date>
high-risk-breach-mark-as-fixed = Označiť ako vyriešené
high-risk-breach-skip = Teraz preskočiť
# Variables:
# $estimated_time is the estimated time it would take for a user to complete breach resolution steps. It not be singular, and the + is meant as "or more".
# An example of this string is Your estimated time: 15+ minutes.
high-risk-breach-estimated-time =
    { $estimated_time ->
        [one] Váš odhadovaný čas: viac ako { $estimated_time } minúta
        [few] Váš odhadovaný čas: viac ako { $estimated_time } minúty
        [many] Váš odhadovaný čas: viac ako { $estimated_time } minút
       *[other] Váš odhadovaný čas: viac ako { $estimated_time } minút
    }

# Credit Card Breaches

high-risk-breach-credit-card-title = Číslo vašej kreditnej karty bolo odhalené
high-risk-breach-credit-card-description = Každý, kto ho získa, môže vykonávať neoprávnené nákupy, za ktoré môžete niesť zodpovednosť. Konajte teraz, aby ste predišli finančným škodám.
high-risk-breach-credit-card-step-one = Ak túto kartu stále máte, kontaktujte jej vydavateľa a nahláste jej odcudzenie.
high-risk-breach-credit-card-step-two = Požiadajte o novú kartu s novým číslom.
high-risk-breach-credit-card-step-three = Skontrolujte svoje účty, či nemáte neoprávnené pohyby.

# Bank Account Breaches

high-risk-breach-bank-account-title = Váš bankový účet bol odhalený
high-risk-breach-bank-account-description = Ak podniknete kroky čo najskôr, môžete získať viac právnej ochrany, ktorá vám pomôže získať späť akékoľvek straty.
high-risk-breach-bank-account-step-one = Okamžite informujte svoju banku, že číslo vášho účtu bolo prezradené.
high-risk-breach-bank-account-step-two = Zmeňte si číslo účtu.
high-risk-breach-bank-account-step-three = Skontrolujte svoje účty, či nemáte neoprávnené pohyby.

# Social Security Number Breaches

high-risk-breach-social-security-title = Vaše číslo sociálneho zabezpečenia bolo odhalené
high-risk-breach-social-security-description = Podvodníci si môžu otvoriť nové pôžičky alebo kreditné karty s vaším číslom sociálneho zabezpečenia. Konajte rýchlo, aby ste predišli finančným škodám.

# Social Security Number Modal

ssn-modal-ok = OK

# PIN Breaches

high-risk-breach-pin-title = Váš PIN bol odhalený

# No high risk breaches found

high-risk-breach-none-sub-description-ssn = Číslo sociálneho zabezpečenia
high-risk-breach-none-sub-description-bank-account = Informácie o bankovom účte
high-risk-breach-none-sub-description-cc-number = Čísla kreditných kariet
high-risk-breach-none-sub-description-pin = PIN kódy
high-risk-breach-none-continue = Pokračovať

# Security recommendations

security-recommendation-steps-label = Bezpečnostné odporúčania
security-recommendation-steps-title = Tu je naša rada:
security-recommendation-steps-cta-label = Rozumiem

# Phone security recommendation

security-recommendation-phone-title = Chráňte svoje telefónne číslo

# Email security recommendation


# IP security recommendation


# Leaked Passwords

leaked-passwords-steps-title = Tu je to, čo je potrebné urobiť
leaked-passwords-mark-as-fixed = Označiť ako vyriešené
leaked-passwords-skip = Teraz preskočiť

# Leaked Security Questions

leaked-security-questions-steps-title = Tu je to, čo je potrebné urobiť
leaked-security-questions-steps-subtitle = Vyžaduje si to prístup k vášmu účtu, takže ich budete musieť vyriešiť manuálne.
