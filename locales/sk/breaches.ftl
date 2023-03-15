# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.


## Breaches header

# Data classes pie chart title
breach-chart-title = Uniknuté údaje
# $email-select is an interactive <select> element displaying the current email address
breach-heading-email = Úniky údajov pre { $email-select }
# $count is the number of emails a user has added out of $total allowed
emails-monitored =
    { $total ->
        [one] Monitorované e-maily: { $count } z { $total }
        [few] Monitorované e-maily: { $count } z { $total }
        [many] Monitorované e-maily: { $count } z { $total }
       *[other] Monitorované e-maily: { $count } z { $total }
    }
# link to Settings page where user can add/remove emails and set message preferences
manage-emails-link = Spravovať e-mailové adresy

## Breaches resolved filter

filter-label-unresolved = Nevyriešené úniky
filter-label-resolved = Vyriešené úniky

## Breaches table

column-company = SPOLOČNOSŤ
column-breached-data = UNIKNUTÉ ÚDAJE
column-detected = ZISTENÉ
# “Resolved” is shown next to a breach if all recommended actions in response to the breach have been taken.
column-status-badge-resolved = Vyriešený
# “Active” is shown next to a breach if the user still has at least one recommended action to perform in response to the breach.
column-status-badge-active = Aktívny
breaches-resolve-heading = Ako vyriešiť tento únik:
breaches-none-headline = Neboli nájdené žiadne úniky dát
# Variables:
#   $email (String) - An email address that we did not find breaches for, e.g. `someone@example.com`
breaches-none-copy = Dobré správy! Pre adresu { $email } neboli hlásené žiadne známe úniky dát. Túto adresu budeme naďalej sledovať a budeme vás informovať, ak dôjde k novým únikom.
breaches-none-cta-blurb = Chcete monitorovať ďalšiu e-mailovú adresu?
breaches-none-cta-button = Pridať e-mailovú adresu
breaches-all-resolved-headline = Všetky úniky dát vyriešené
# Variables:
#   $email (String) - An email address for which all breaches have been resolved, e.g. `someone@example.com`
breaches-all-resolved-copy = Paráda! Vyriešili ste všetky úniky dát pre adresu { $email }. Túto adresu budeme naďalej sledovať a budeme vás informovať, ak dôjde k novým únikom.
breaches-all-resolved-cta-blurb = Chcete monitorovať ďalšiu e-mailovú adresu?
breaches-all-resolved-cta-button = Pridať e-mailovú adresu
# $breachDate and $addedDate are dates that should be localized via JS DateTimeFormat(). $dataClasses is a list of strings from data-classes.ftl that should be localized via JS ListFormat()
breach-description = Dňa { $breachDate } došlo k úniku dát spoločnosti { $companyName }. Akonáhle bol únik objavený a overený, bol dňa { $addedDate } pridaný do našej databázy. Tento únik zahŕňal: { $dataClasses }

## Links that we might refer to when prompting the user to make changes after a breach

breach-checklist-link-firefox-relay = { -brand-relay }

## Prompts the user for changes when there is a breach detected of password


## Prompts the user for changes when there is a breach detected of email

breach-checklist-email-body = Týmto môžete skryť vašu skutočnú e-mailovú adresu a zároveň stále dostávať e-maily do vašej skutočnej e-mailovej schránky.

## Prompts the user for changes when there is a breach detected of social security number

# Credit reports list your bill payment history, loans, current debt, and other financial information. 
# They show where you work and live and whether you've been sued, arrested, or filed for bankruptcy.
breach-checklist-ssn-header = Sledujte podozrivé pôžičky a pohyby na svojich účtoch v bankách alebo na kreditných kartách.

## Prompts the user for changes when there is a breach detected of credit card

breach-checklist-cc-header = Nahláste tento únik vydavateľovi vašej kreditnej karty a požiadajte o novú kartu s novým číslom.
breach-checklist-cc-body = Mali by ste tiež skontrolovať výpisy z vašej kreditnej karty, či neobsahujú nerozpoznané poplatky.

## Prompts the user for changes when there is a breach detected of bank account

breach-checklist-bank-header = Okamžite informujte svoju banku, že číslo vášho účtu bolo prezradené.
breach-checklist-bank-body = Čím rýchlejšie tak spravíte, získate viac právnej ochrany, ktorá vám pomôže získať späť akékoľvek straty. Mali by ste tiež skontrolovať svoje účty, či nemáte nerozpoznané poplatky.

## Prompts the user for changes when there is a breach detected of pin

breach-checklist-pin-header = Upozornite vydavateľa karty a okamžite si zmeňte PIN.
breach-checklist-pin-body = Uistite sa, že váš nový kód PIN alebo akýkoľvek iný kód PIN nezahŕňa ľahko uhádnuteľné čísla, ako napríklad dátum narodenia alebo adresu.

## Prompts the user for changes when there is a breach detected of IP address

breach-checklist-ip-body = Vaša IP adresa (Internet Protocol address) presne určuje vašu polohu a poskytovateľa internetových služieb. Sieť VPN môže skryť vašu skutočnú IP adresu, aby ste mohli používať internet súkromne.

## Prompts the user for changes when there is a breach detected of physical address

breach-checklist-address-header = Zmeňte všetky heslá alebo kódy PIN, ktoré obsahujú akúkoľvek časť vašej adresy.
breach-checklist-address-body = Adresy sa dajú ľahko nájsť vo verejných záznamoch a tieto heslá a kódy PIN sa dajú ľahko uhádnuť.

## Prompts the user for changes when there is a breach detected of date of birth

breach-checklist-dob-header = Zmeňte všetky heslá alebo kódy PIN, ktoré obsahujú váš dátum narodenia.
breach-checklist-dob-body = Dátumy narodenia sa dajú ľahko nájsť vo verejných záznamoch a ľudia, ktorí ich nájdu, môžu ľahko uhádnuť váš PIN.

## Prompts the user for changes when there is a breach detected of phone number


## Prompts the user for changes when there is a breach detected of security questions

breach-checklist-sq-body = Použite dlhé, náhodné odpovede a uložte ich na bezpečné miesto. Urobte to kdekoľvek inde, kde ste použili rovnaké bezpečnostné otázky.

## Prompts the user for changes when there is a breach detected of historical password

breach-checklist-hp-header = Vytvorte jedinečné a silné heslá pre každý účet, v ktorom ste použili kompromitované heslo.

## Prompts the user for changes when there is a breach detected of other types

# NOTE: { $companyName } is a placeholder for the name of the company where the breach occurred 
breach-checklist-general-header = Obráťte sa na { $companyName }, informujte ich o tomto porušení a požiadajte o konkrétne kroky, ktoré môžete podniknúť.
