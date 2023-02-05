# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.


## Breaches header

# $email-select is an interactive <select> element displaying the current email address
breach-heading-email = Únik dat pro { $email-select }
# $count is the number of emails a user has added out of $total allowed
emails-monitored =
    { $total ->
        [one] { $count } z { $total } sledovaných e-mailů
        [few] { $count } ze { $total } sledovaných e-mailů
        [many] { $count } z { $total } sledovaných e-mailů
       *[other] { $count } z { $total } sledovaných e-mailů
    }
add-email-link = Přidat e-mailové adresy

## Breaches resolved filter

filter-label-unresolved = Nevyřešené úniky
filter-label-resolved = Vyřešené úniky

## Breaches table

column-company = SPOLEČNOST
column-breached-data = ÚNIKLÁ DATA
column-detected = ZJIŠTĚNO
# $breachDate and $addedDate are dates that should be localized via JS DateTimeFormat(). $dataClasses is a list of strings from data-classes.ftl that should be localized via JS ListFormat()
breach-description = Dne { $breachDate } došlo k úniku dat společnosti { $companyName }. Jakmile byl únik objevený a ověřený, byl dne { $addedDate } přidán do naší databáze. Tento únik zahrnoval: { $dataClasses }

## Prompts the user for changes when there is a breach detected of password

# NOTE: { $breachedCompanyUrl } is a placeholder for the URL to the website of the company where the breach occurred 
breach-checklist-pw-header = Přejděte na <a>{ $breachedCompanyUrl }</a>, kde si změňte své heslo a povolte dvoustupňové ověření (2FA).
breach-checklist-pw-body = Ujistěte se, že vaše heslo je unikátní a obtížně uhodnutelné. Pokud je toto heslo použito u více účtů, nezapomeňte jej změnit i tam. <a>Přihlašovací údaje ve { -brand-firefox(case: "loc") }</a> vám mohou pomoci bezpečně spravovat všechna vaše hesla.

## Prompts the user for changes when there is a breach detected of email

breach-checklist-email-header = Chraňte svůj e-mail pomocí služby na maskování e-mailu jako je <a>{ -brand-relay }</a>.
breach-checklist-email-body = Tímto můžete skrýt svou skutečnou e-mailovou adresu a zároveň stále dostávat e-maily do své reálné e-mailové schránky.

## Prompts the user for changes when there is a breach detected of social security number

# Credit reports list your bill payment history, loans, current debt, and other financial information. 
# They show where you work and live and whether you've been sued, arrested, or filed for bankruptcy.
breach-checklist-ssn-header = Sledujte podezřelé položky a pohyby na svých účtech v bance nebo na platební kartách.
# A security freeze prevents prospective creditors from accessing your credit file. 
# Creditors typically won't offer you credit if they can't access your credit reporting file, 
# so a security freeze, also called a credit freeze, prevents you or others from opening accounts in your name.
breach-checklist-ssn-body = Můžete také zvážit zmrazení svého kreditu na <a>Equifax</a>, <a>Experian</a> a <a>TransUnion</a>, abyste zabránili podvodníkům v otevírání nových účtů na vaše jméno. Je to zdarma a neovlivní to vaše kreditní skóre.

## Prompts the user for changes when there is a breach detected of credit card

breach-checklist-cc-header = Nahlaste tento únik vydavateli své platební karty a požádejte o novou kartu s novým číslem.
breach-checklist-cc-body = Měli byste též zkontrolovat výpisy ze své platební karty, zda neobsahují neznámé platby.

## Prompts the user for changes when there is a breach detected of bank account

breach-checklist-bank-header = Okamžitě informujte svou banku, že číslo vašeho účtu bylo prozrazeno.
breach-checklist-bank-body = Pokud tak učiníte rychleji, můžete získat více právní ochrany, která vám pomůže získat zpět jakékoli ztráty. Zkontrolujte také, zda vaše účty neobsahují nerozpoznané platby.

## Prompts the user for changes when there is a breach detected of pin

breach-checklist-pin-header = Upozorněte vydavatele své karty a okamžitě si změňte PIN.
breach-checklist-pin-body = Ujistěte se, že váš nový PIN nebo jakýkoli jiný PIN neobsahuje snadno uhodnutelná čísla, jako je vaše datum narození nebo adresa.

## Prompts the user for changes when there is a breach detected of IP address

breach-checklist-ip-header = Používejte internet soukromě pomocí VPN, jako je <a>{ -brand-mozilla-vpn }</a>.
breach-checklist-ip-body = Vaše IP adresa (adresa internetového protokolu) přesně určuje vaši polohu a poskytovatele internetových služeb. VPN může skrýt vaši skutečnou IP adresu, abyste mohli používat internet soukromě.

## Prompts the user for changes when there is a breach detected of physical address

breach-checklist-address-header = Změňte všechna hesla nebo kódy PIN, které obsahují jakoukoli část vaší adresy.
breach-checklist-address-body = Adresy lze snadno najít ve veřejných záznamech a díky nim lze tato hesla a PINy snadno uhodnout.

## Prompts the user for changes when there is a breach detected of date of birth

breach-checklist-dob-header = Změňte všechna hesla nebo kódy PIN, které obsahují vaše datum narození.
breach-checklist-dob-body = Data narození lze snadno najít ve veřejných záznamech a lidé, kteří je najdou, mohou snadno uhodnout váš PIN.

## Prompts the user for changes when there is a breach detected of phone number

breach-checklist-phone-header = Chraňte své telefonní číslo pomocí maskovací služby, jako je <a>{ -brand-relay }</a>, která skryje vaše skutečné telefonní číslo.

## Prompts the user for changes when there is a breach detected of security questions

# NOTE: { $breachedCompanyUrl } is a placeholder for the URL to the website of the company where the breach occurred 
breach-checklist-sq-header = Aktualizujte své bezpečnostní otázky na stránce <a>{ $breachedCompanyUrl }</a>.
breach-checklist-sq-body = Použijte dlouhé, náhodné odpovědi a uložte je na bezpečném místě. Udělejte to i všude tam, kde jste použili stejné bezpečnostní otázky.

## Prompts the user for changes when there is a breach detected of historical password

breach-checklist-hp-header = Vytvořte jedinečná, silná hesla pro jakýkoli účet, kde jste hesla znovu použili.

## Prompts the user for changes when there is a breach detected of other types

# NOTE: { $companyName } is a placeholder for the name of the company where the breach occurred 
breach-checklist-general-header = Obraťte se na společnost { $companyName }, informujte je o tomto úniku a požádejte je o konkrétní kroky, které můžete podniknout.
