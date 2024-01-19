# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.

breach-meta-title = { -brand-fx-monitor } - nástenka
breach-all-meta-title = { -brand-fx-monitor } - všetky úniky údajov
breach-all-meta-social-title = Všetky úniky údajov zistené službou { -brand-fx-monitor }
breach-all-meta-social-description = Prezrite si úplný zoznam známych únikov údajov zistených službou { -brand-fx-monitor } a potom zistite, či boli vaše informácie odhalené.
# Variables:
#   $company (String) - Name of the company that was breached, e.g. "PHP Freaks"
breach-detail-meta-title = { -brand-fx-monitor } - únik údajov spoločnosti { $company }
# Variables:
#   $company (String) - Name of the company that was breached, e.g. "PHP Freaks"
breach-detail-meta-social-title = Dotýka sa vás únik údajov spoločnosti { $company }?
breach-detail-meta-social-description = Pomocou služby { -brand-fx-monitor } zistíte, či boli pri tomto úniku odhalené vaše osobné údaje, a dozviete sa, čo robiť ďalej.
breach-scan-meta-title = { -brand-fx-monitor } - výsledky úniku údajov
breach-scan-meta-social-title = { -brand-fx-monitor } - výsledky úniku údajov
breach-scan-meta-social-description = Prihláste sa do služby { -brand-fx-monitor }, aby ste vyriešili úniky údajov a získali nepretržité monitorovanie všetkých nových známych únikov.

## Breaches header

# Data classes pie chart title
breach-chart-title = Uniknuté údaje
# $email-select is an interactive <select> element displaying the current email address
breach-heading-email = Úniky údajov pre { $email-select }
# $count is the number of emails a user has added out of $total allowed
emails-monitored =
    { $total ->
        [one] Monitorované e‑maily: { $count } z { $total }
        [few] Monitorované e‑maily: { $count } z { $total }
        [many] Monitorované e‑maily: { $count } z { $total }
       *[other] Monitorované e‑maily: { $count } z { $total }
    }
# link to Settings page where user can add/remove emails and set message preferences
manage-emails-link = Spravovať e‑mailové adresy

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
breaches-none-headline = Neboli nájdené žiadne úniky údajov
# Variables:
#   $email (String) - An email address that we did not find breaches for, e.g. `someone@example.com`
breaches-none-copy = Dobré správy! Pre adresu { $email } neboli hlásené žiadne známe úniky údajov. Túto adresu budeme naďalej sledovať a budeme vás informovať, ak dôjde k novým únikom.
breaches-none-cta-blurb = Chcete monitorovať ďalšiu e‑mailovú adresu?
breaches-none-cta-button = Pridať e‑mailovú adresu
breaches-all-resolved-headline = Všetky úniky údajov vyriešené
# Variables:
#   $email (String) - An email address for which all breaches have been resolved, e.g. `someone@example.com`
breaches-all-resolved-copy = Paráda! Vyriešili ste všetky úniky údajov pre adresu { $email }. Túto adresu budeme naďalej sledovať a budeme vás informovať, ak dôjde k novým únikom.
breaches-all-resolved-cta-blurb = Chcete monitorovať ďalšiu e‑mailovú adresu?
breaches-all-resolved-cta-button = Pridať e‑mailovú adresu
# $breachDate and $addedDate are dates that should be localized via JS DateTimeFormat(). $dataClasses is a list of strings from data-classes.ftl that should be localized via JS ListFormat()
# Variables:
#   $breachDate (String) - Date of the breach
#   $companyName (String) - Name of the company where the breach occurred
breach-description = Dňa { $breachDate } došlo k úniku údajov spoločnosti { $companyName }. Akonáhle bol únik objavený a overený, bol dňa { $addedDate } pridaný do našej databázy. Tento únik zahŕňal: { $dataClasses }

## Links that we might refer to when prompting the user to make changes after a breach

breach-checklist-link-firefox-relay = { -brand-relay }
breach-checklist-link-password-manager = Správca hesiel { -brand-firefox(case: "gen") }
breach-checklist-link-mozilla-vpn = { -brand-mozilla-vpn }

## Prompts the user for changes when there is a breach detected of password

breach-checklist-pw-header-text = Aktualizujte svoje heslá a povoľte dvojfaktorové overenie (2FA).
# The `breached-company-link` tags will be replaced with link tags or stripped if no link is available.
# Variables:
#   $passwordManagerLink (string) - a link to the password manager documentation, with { -breach-checklist-link-password-manager } as the label
breach-checklist-pw-body-text = Vo väčšine prípadov vám odporúčame zmeniť heslo na webovej stránke danej spoločnosti. Ale <b>ich webová stránka môže byť nefunkčná alebo môže obsahovať škodlivý obsah</b>, preto buďte pri <breached-company-link>navšteve stránky</breached-company-link> opatrní. Aby ste ešte viac zvýšili svoju ochranu sa uistite, že používate jedinečné heslá pre všetky účty, aby sa žiadne uniknuté heslá nedali použiť na prístup k iným účtom. { $passwordManagerLink } vám môže pomôcť bezpečne spravovať všetky vaše heslá.

## Prompts the user for changes when there is a breach detected of email

# Variables:
#   $firefoxRelayLink (string) - a link to Firefox Relay, with { -breach-checklist-link-firefox-relay } as the label
breach-checklist-email-header-2 = Chráňte svoj e‑mail pomocou služby maskovania e‑mailov, ako je { $firefoxRelayLink }.
breach-checklist-email-body = Týmto môžete skryť vašu skutočnú e‑mailovú adresu a zároveň stále dostávať e‑maily do vašej skutočnej e‑mailovej schránky.

## Prompts the user for changes when there is a breach detected of social security number

# Credit reports list your bill payment history, loans, current debt, and other financial information.
# They show where you work and live and whether you've been sued, arrested, or filed for bankruptcy.
breach-checklist-ssn-header = Sledujte podozrivé pôžičky a pohyby na svojich účtoch v bankách alebo na kreditných kartách.
# A security freeze prevents prospective creditors from accessing your credit file.
# Creditors typically won't offer you credit if they can't access your credit reporting file,
# so a security freeze, also called a credit freeze, prevents you or others from opening accounts in your name.
# This will only be shown to users in the US.
# Variables:
#   $equifaxLink (string) - a link to the Equifax website
#   $experianLink (string) - a link to the Experian website
#   $transUnionLink (string) - a link to the TransUnion website
breach-checklist-ssn-body-2 = Môžete tiež zvážiť zmrazenie úverov na { $equifaxLink }, { $experianLink } a { $transUnionLink }, aby ste zabránili podvodníkom otvárať si nové účty na vaše meno. Je to zadarmo a neovplyvní to vaše kreditné skóre.

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

# Variables:
#   $mozillaVpnLink (string) - a link to the Mozilla VPN website, with { -breach-checklist-link-mozilla-vpn } as the label
breach-checklist-ip-header-2 = Používajte internet súkromne pomocou siete VPN, ako je napríklad { $mozillaVpnLink }.
breach-checklist-ip-body = Vaša IP adresa (Internet Protocol address) presne určuje vašu polohu a poskytovateľa internetových služieb. Sieť VPN môže skryť vašu skutočnú IP adresu, aby ste mohli používať internet súkromne.

## Prompts the user for changes when there is a breach detected of physical address

breach-checklist-address-header = Zmeňte všetky heslá alebo kódy PIN, ktoré obsahujú akúkoľvek časť vašej adresy.
breach-checklist-address-body = Adresy sa dajú ľahko nájsť vo verejných záznamoch a tieto heslá a kódy PIN sa dajú ľahko uhádnuť.

## Prompts the user for changes when there is a breach detected of date of birth

breach-checklist-dob-header = Zmeňte všetky heslá alebo kódy PIN, ktoré obsahujú váš dátum narodenia.
breach-checklist-dob-body = Dátumy narodenia sa dajú ľahko nájsť vo verejných záznamoch a ľudia, ktorí ich nájdu, môžu ľahko uhádnuť váš PIN.

## Prompts the user for changes when there is a breach detected of phone number

# Variables:
#   $firefoxRelayLink (string) - a link to Firefox Relay, with { -breach-checklist-link-firefox-relay } as the label
breach-checklist-phone-header-2 = Chráňte svoje telefónne číslo pomocou maskovacej služby, ako je { $firefoxRelayLink }, ktorá skryje vaše skutočné telefónne číslo.

## Prompts the user for changes when there is a breach detected of security questions

breach-checklist-sq-header-text = Aktualizujte svoje bezpečnostné otázky.
# The `breached-company-link` tags will be replaced with link tags or stripped if no link is available.
breach-checklist-sq-body-text = Vo väčšine prípadov vám odporúčame aktualizovať bezpečnostné otázky na webovej stránke spoločnosti. Ale <b>ich webová stránka môže byť nefunkčná alebo môže obsahovať škodlivý obsah</b>, preto buďte pri <breached-company-link>návšteve stránky</breached-company-link> opatrní. Ak chcete zvýšiť ochranu, aktualizujte tieto bezpečnostné otázky na všetkých dôležitých účtoch, kde ste ich používali, a vytvorte jedinečné heslá pre všetky účty.

## Prompts the user for changes when there is a breach detected of historical password

breach-checklist-hp-header = Vytvorte jedinečné a silné heslá pre každý účet, v ktorom ste použili kompromitované heslo.
# Variables:
#   $passwordManagerLink (string) - a link to the password manager documentation, with { -breach-checklist-link-password-manager } as the label
breach-checklist-hp-body-2 = Správca hesiel, ako je { $passwordManagerLink } (ktorý je bezplatný a zabudovaný do prehliadača { -brand-firefox }), vám môže pomôcť sledovať všetky vaše heslá a pristupovať k nim bezpečne zo všetkých vašich zariadení.

## Prompts the user for changes when there is a breach detected of other types

# Variables:
#   $breachDate (String) - Date of the breach
#   $companyName (String) - Name of the company where the breach occurred
breach-checklist-general-header = Obráťte sa na { $companyName }, informujte ich o tomto porušení a požiadajte o konkrétne kroky, ktoré môžete podniknúť.
