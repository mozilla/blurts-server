# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.


## Breaches header

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
add-email-link = Pridať e-mailovú adresu

## Breaches resolved filter

filter-label-unresolved = Nevyriešené úniky
filter-label-resolved = Vyriešené úniky

## Breaches table

column-company = SPOLOČNOSŤ
column-breached-data = UNIKNUTÉ ÚDAJE
column-detected = ZISTENÉ
# $breachDate and $addedDate are dates that should be localized via JS DateTimeFormat(). $dataClasses is a list of strings from data-classes.ftl that should be localized via JS ListFormat()
breach-description = Dňa { $breachDate } došlo k úniku dát spoločnosti { $companyName }. Akonáhle bol únik objavený a overený, bol dňa { $addedDate } pridaný do našej databázy. Tento únik zahŕňal: { $dataClasses }

## Prompts the user for changes when there is a breach detected of password

# NOTE: { $breachedCompanyUrl } is a placeholder for the URL to the website of the company where the breach occurred 
breach-checklist-pw-header = Prejdite na stránku <a>{ $breachedCompanyUrl }</a> a zmeňte svoje heslo a povoľte dvojstupňové overenie (2FA).
breach-checklist-pw-body = Uistite sa, že vaše heslo je jedinečné a ťažko uhádnuteľné. Ak sa toto heslo používa na viacerých účtoch, nezabudnite ho zmeniť aj tam. <a>Správca hesiel { -brand-firefox(case: "gen") }</a> vám môže pomôcť bezpečne organizovať všetky vaše heslá.

## Prompts the user for changes when there is a breach detected of email

breach-checklist-email-header = Chráňte svoj e-mail pomocou služby maskovania e-mailov, ako je <a>{ -brand-relay }</a>.
breach-checklist-email-body = Týmto môžete skryť vašu skutočnú e-mailovú adresu a zároveň stále dostávať e-maily do vašej skutočnej e-mailovej schránky.

## Prompts the user for changes when there is a breach detected of social security number

# Credit reports list your bill payment history, loans, current debt, and other financial information. 
# They show where you work and live and whether you've been sued, arrested, or filed for bankruptcy.
breach-checklist-ssn-header = Sledujte podozrivé pôžičky a pohyby na svojich účtoch v bankách alebo na kreditných kartách.
# A security freeze prevents prospective creditors from accessing your credit file. 
# Creditors typically won't offer you credit if they can't access your credit reporting file, 
# so a security freeze, also called a credit freeze, prevents you or others from opening accounts in your name.
breach-checklist-ssn-body = Môžete tiež zvážiť zmrazenie svojho kreditu na <a>Equifax</a>, <a>Experian</a> a <a>TransUnion</a>, aby ste zabránili podvodníkom otvárať si nové účty na vaše meno. Je to zadarmo a neovplyvní to vaše kreditné skóre.

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

breach-checklist-ip-header = Používajte internet súkromne pomocou siete VPN, ako je napríklad <a>{ -brand-mozilla-vpn }</a>.
breach-checklist-ip-body = Vaša IP adresa (Internet Protocol address) presne určuje vašu polohu a poskytovateľa internetových služieb. Sieť VPN môže skryť vašu skutočnú IP adresu, aby ste mohli používať internet súkromne.

## Prompts the user for changes when there is a breach detected of physical address

breach-checklist-address-header = Zmeňte všetky heslá alebo kódy PIN, ktoré obsahujú akúkoľvek časť vašej adresy.
breach-checklist-address-body = Adresy sa dajú ľahko nájsť vo verejných záznamoch a tieto heslá a kódy PIN sa dajú ľahko uhádnuť.

## Prompts the user for changes when there is a breach detected of date of birth

breach-checklist-dob-header = Zmeňte všetky heslá alebo kódy PIN, ktoré obsahujú váš dátum narodenia.
breach-checklist-dob-body = Dátumy narodenia sa dajú ľahko nájsť vo verejných záznamoch a ľudia, ktorí ich nájdu, môžu ľahko uhádnuť váš PIN.

## Prompts the user for changes when there is a breach detected of phone number

breach-checklist-phone-header = Chráňte svoje telefónne číslo pomocou maskovacej služby, ako je <a>{ -brand-relay }</a>, ktorá skryje vaše skutočné telefónne číslo.

## Prompts the user for changes when there is a breach detected of security questions

# NOTE: { $breachedCompanyUrl } is a placeholder for the URL to the website of the company where the breach occurred 
breach-checklist-sq-header = Aktualizujte svoje bezpečnostné otázky na stránke <a>{ $breachedCompanyUrl }</a>.
breach-checklist-sq-body = Použite dlhé, náhodné odpovede a uložte ich na bezpečné miesto. Urobte to kdekoľvek inde, kde ste použili rovnaké bezpečnostné otázky.

## Prompts the user for changes when there is a breach detected of historical password

breach-checklist-hp-header = Vytvorte jedinečné a silné heslá pre každý účet, v ktorom ste použili kompromitované heslo.
breach-checklist-hp-body = Správca hesiel, ako je <a>Správca hesiel { -brand-firefox(case: "gen") }</a> (ktorý je bezplatný a zabudovaný do prehliadača { -brand-firefox }), vám môže pomôcť sledovať všetky vaše heslá a pristupovať k nim bezpečne zo všetkých vašich zariadení.

## Prompts the user for changes when there is a breach detected of other types

# NOTE: { $companyName } is a placeholder for the name of the company where the breach occurred 
breach-checklist-general-header = Obráťte sa na { $companyName }, informujte ich o tomto porušení a požiadajte o konkrétne kroky, ktoré môžete podniknúť.
